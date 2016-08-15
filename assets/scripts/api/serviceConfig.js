var apiService = apiService || {};

/* chamar o método no main.js ao carregar qualquer página */
function apiServiceConfig(serviceUrl, options) {
	var self = {};

	function init(serviceUrl, options) {
		/* recebe a url por parâmetro, caso for null utiliza url default */
		self.serviceUrl = serviceUrl || self.getServiceUrl();
	};


	

	self.wrapperCallback = function (successCallback, errorCallback, hideNotification) {
		var fnWrapper;

		fnWrapper = function (response) {
			try {
				if (typeof response === 'string') { response = JSON.parse(response); }
			} catch (err) {
				console.err(err);
			}

			if (ResponseHelper.succeed(response)) {
				if (typeof successCallback === 'function') {
					successCallback(response);
					//notification.success(response.message);
				}
			} else {
				console.warn(JSON.stringify(response));
				//notification.error(JSON.stringify(response.message))
				if(!hideNotification) {
					notification.error((response || {}).message);
				}

				if (typeof errorCallback === 'function') {
					errorCallback(response);
				}
			}
		};

		return fnWrapper;
	};

	self.wrapperErrorCallback = function (errorCallback) {
		var fnWrapper;

		fnWrapper = function (xhr, textStatus, errorThrown) {
			/* unblock ui*/
			LoaderHelper.unblockUI();

			/* notificate UI */
			Metronic.alert({
				//container: $('#alert_container').val(), // alerts parent container(by default placed after the page breadcrumbs)
				place: 'prepent', // append or prepent in container 
				type: 'danger',  // alert's type
				message: 'Ocorreu um erro ao se comunicar com servidor, por favor, verifique sua conexão com a internet.',  // alert's message
				close: true, // make alert closable
				reset: true, // close all previouse alerts first
				focus: true, // auto scroll to the alert after shown
				closeInSeconds: 10, // auto close after defined seconds
				//icon: $('#alert_icon').val() // put icon before the message
			});

			if (typeof errorCallback === 'function') {
				errorCallback();
			}

			console.error(JSON.stringify(errorThrown));
		};


		

		

		

		return fnWrapper;
	};


	self.getServiceUrl = function () {
		var defaultServiceUrl = '';
		//var defaultServiceUrl = 'http://localhost:8080';

		return localStorage['service_url'] || defaultServiceUrl;
	};

	self.setServiceUrl = function (service_url) {

		if (!service_url || typeof service_url != 'string') {
			throw 'URL inválida';
		}

		if (service_url.slice(-1) == '/') {
			service_url = service_url.substring(0, service_url.length - 1);
		}

		if (!S(service_url).startsWith("http://") && !S(service_url).startsWith("https://")) {
		    service_url = S(service_url).ensureLeft('https://').s
		}
		localStorage['service_url'] = service_url;
	};


	init();

	return self;
};

var apiServiceConfig = apiServiceConfig();
