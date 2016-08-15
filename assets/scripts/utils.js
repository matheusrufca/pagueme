window.notification = (function (toastr) {
	var self = this;
	var successTitle, errorTitle, infoTitle, warningTitle;

	function _init() {
		if (!toastr) { return; }

		successTitle = null;
		errorTitle = null;
		infoTitle = null;
		warningTitle = null;


		setDefault();
	};

	function setDefault() {
		var options;

		options = {
			timeOut: 10000, // How long the toast will display without user interaction
			positionClass: "toast-top-full-width"
		};
		toastr.options = options;
	};



	self.success = function (message, title, options) {
		toastr.remove();
		toastr.success(message, title || successTitle, options);
	};

	self.error = function (message, title, options) {
		toastr.remove();
		toastr.error(message, title || errorTitle, $.extend({
			closeButton: true
		},options));
	};

	self.info = function (message, title, options) {
		toastr.remove();
		toastr.info(message, title || infoTitle, options);
	};

	self.warning = function (message, title, options) {
		toastr.remove();
		toastr.warning(message, title || warningTitle, options);
	};

	_init();

	return self;
})(window.toastr);


function log(obj) {
	console.log(JSON.stringify(obj));
};

function loadingContent(state, target) {
	if (state) {
		var mask = $("<div/>", { "class": "loadingMask" });
		target.append(mask);
		LoaderHelper.blockUI(mask);

		var backdrop = $("<div/>", { "class": "loadingBackdrop" });
		$("body").append(backdrop);
	} else {
		$(".loadingBackdrop").remove();
		$(".loadingMask").remove();
	};
}

