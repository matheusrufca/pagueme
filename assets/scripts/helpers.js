window.DisplayHelper = function (moment) {
	var self = {};

	self.formatPhoneNumber = function (text) {
		if (!text) { return ''; }

		var output;


		if (text.length == 8) {
			output = [text.substring(text.length - 8, text.length - 4), '-', text.substring(text.length - 4, text.length)].join('');
		} else if (text.length == 10 || text.length == 11) {
			output = ['(', text.substring(text.length - 11, text.length - 8), ') ', text.substring(text.length - 8, text.length - 4), '-', text.substring(text.length - 4, text.length)].join('');
		} else {
			output = text
		}


		return output
	};

	self.boolToLabel = function (value, yesText, noText) {
		var label = '';
		yesText = yesText || 'Sim';
		noText = noText || 'Não';


		if (value) {
			label = '<span class="label label-success f11">' + yesText + '</span>';
		} else {
			label = '<span class="label label-danger f11">' + noText + '</span>';
		}

		return label;
	};

	self.displayLabel = function (text, lable_class) {
		var label = '<span class="label label-' + lable_class + ' f11">' + text + '</span>';

		return label;
	};

	self.formatMoney = function (n) {
		c = isNaN(c = Math.abs(c)) ? 2 : c, // numero de casas apos a virgula
		d = d == undefined ? "." : d, // simbolo da virigula dos centavos
		t = t == undefined ? "" : t, // simbolo do milhar
		s = n < 0 ? "-" : "",
		i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
		j = (j = i.length) > 3 ? j % 3 : 0;
		return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
	};

	self.formatCurrency = function (n) {
		return (n||0).formatMoney(2, ',', '.');
	};

	

	self.formatDate = function (date, displayFormat) {		
		if (!moment) { return console.warn("Can't format date. moment.js not instanciated.")}

		var output; 
		displayFormat = displayFormat || 'DD/MM/YYYY';

		output = moment(date).format(displayFormat);


		return output;
	};

	self.formatString = function (text) {
		return $.isEmptyObject(text) ? '' : text
	}

	self.formatPercentage = function (text) {
		if ($.isEmptyObject(text)) {
			return 0;
		}

		var output = parseFloat(text).toFixed(2)

		return output.replace(".", ",");
	}

	self.pad = function (num, size) {
		var s = num + "";
		while (s.length < size) s = "0" + s;
		return s;
	}

	return self;
}(window.moment);

var FormValidationHelper = (function () {
	var self = {};


	self.getDefaultOptions = function () {
		return {
			debug: true,
			errorElement: 'span', //default input error message container
			errorClass: 'help-block help-block-error', // default input error message class
			focusInvalid: false, // do not focus the last invalid input
			highlight: function (element) { // hightlight error inputs
				$(element)
					.closest('.form-group').addClass('has-error'); // set error class to the control group
			},
			unhighlight: function (element) { // revert the change done by hightlight
				$(element)
					.closest('.form-group').removeClass('has-error'); // set error class to the control group
			},
			invalidHandler: function (event, validator) { //display error alert on form submit
				$('form .alert-danger').show();
			}
		};
	};

	self.getDefaultFieldMessages = function () {
		return {
			required: "Este campo &eacute; requerido.",
			remote: "Por favor, corrija este campo.",
			email: "Por favor, forne&ccedil;a um endere&ccedil;o de email v&aacute;lido.",
			url: "Por favor, forne&ccedil;a uma URL v&aacute;lida.",
			date: "Por favor, forne&ccedil;a uma data v&aacute;lida.",
			dateISO: "Por favor, forne&ccedil;a uma data v&aacute;lida (ISO).",
			number: "Por favor, forne&ccedil;a um n&uacute;mero v&aacute;lido.",
			digits: "Por favor, forne&ccedil;a somente d&iacute;gitos.",
			creditcard: "Por favor, forne&ccedil;a um cart&atilde;o de cr&eacute;dito v&aacute;lido.",
			equalTo: "Por favor, forne&ccedil;a o mesmo valor novamente.",
			extension: "Por favor, forne&ccedil;a um valor com uma extens&atilde;o v&aacute;lida.",
			maxlength: $.validator.format("Por favor, forne&ccedil;a n&atilde;o mais que {0} caracteres."),
			minlength: $.validator.format("Por favor, forne&ccedil;a ao menos {0} caracteres."),
			rangelength: $.validator.format("Por favor, forne&ccedil;a um valor entre {0} e {1} caracteres de comprimento."),
			range: $.validator.format("Por favor, forne&ccedil;a um valor entre {0} e {1}."),
			max: $.validator.format("Por favor, forne&ccedil;a um valor menor ou igual a {0}."),
			min: $.validator.format("Por favor, forne&ccedil;a um valor maior ou igual a {0}."),
			cpf: 'Por favDigite um email válido',
			cnpj: 'Por favor, Informe um CNPJ inválido',
			cpf: 'Por favor, Informe um CPF inválido',
			phoneBR: 'Por favor, um telefone válido'
		};
	};

	return self;
})();


var UrlHelper = (function () {
	var self = {};


	self.isUrlValid = function (str) {
		var pattern = new RegExp('^(https?:\/\/)?' + // protocol
		  '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|' + // domain name
		  '((\d{1,3}\.){3}\d{1,3}))' + // OR ip (v4) address
		  '(\:\d+)?(\/[-a-z\d%_.~+]*)*' + // port and path
		  '(\?[;&a-z\d%_.~+=-]*)?' + // query string
		  '(\#[-a-z\d_]*)?$', 'i'); // fragment locater

		return pattern.test(str);
	};

	//retorna o valor de um parâmetro da querystring
	self.getQueryStringKey = function (key) {
		return self.getQueryStringAsObject()[key];
	};

	//retorna a querystring como objeto
	self.getQueryStringAsObject = function () {
		var b, cv, e, k, ma, sk, v, r = {},
			d = function (v) { return decodeURIComponent(v).replace(/\+/g, " "); }, //# d(ecode) the v(alue)
			q = window.location.search.substring(1),
			s = /([^&;=]+)=?([^&;]*)/g //# original regex that does not allow for ; as a delimiter:   /([^&=]+)=?([^&]*)/g
		;

		//# ma(make array) out of the v(alue)
		ma = function (v) {
			//# If the passed v(alue) hasn't been setup as an object
			if (typeof v != "object") {
				//# Grab the cv(current value) then setup the v(alue) as an object
				cv = v;
				v = {};
				v.length = 0;

				//# If there was a cv(current value), .push it into the new v(alue)'s array
				//#     NOTE: This may or may not be 100% logical to do... but it's better than loosing the original value
				if (cv) { Array.prototype.push.call(v, cv); }
			}
			return v;
		};

		//# While we still have key-value e(ntries) from the q(uerystring) via the s(earch regex)...
		while (e = s.exec(q)) { //# while((e = s.exec(q)) !== null) {
			//# Collect the open b(racket) location (if any) then set the d(ecoded) v(alue) from the above split key-value e(ntry) 
			b = e[1].indexOf("[");
			v = d(e[2]);

			//# As long as this is NOT a hash[]-style key-value e(ntry)
			if (b < 0) { //# b == "-1"
				//# d(ecode) the simple k(ey)
				k = d(e[1]);

				//# If the k(ey) already exists
				if (r[k]) {
					//# ma(make array) out of the k(ey) then .push the v(alue) into the k(ey)'s array in the r(eturn value)
					r[k] = ma(r[k]);
					Array.prototype.push.call(r[k], v);
				}
					//# Else this is a new k(ey), so just add the k(ey)/v(alue) into the r(eturn value)
				else {
					r[k] = v;
				}
			}
				//# Else we've got ourselves a hash[]-style key-value e(ntry) 
			else {
				//# Collect the d(ecoded) k(ey) and the d(ecoded) sk(sub-key) based on the b(racket) locations
				k = d(e[1].slice(0, b));
				sk = d(e[1].slice(b + 1, e[1].indexOf("]", b)));

				//# ma(make array) out of the k(ey) 
				r[k] = ma(r[k]);

				//# If we have a sk(sub-key), plug the v(alue) into it
				if (sk) { r[k][sk] = v; }
					//# Else .push the v(alue) into the k(ey)'s array
				else { Array.prototype.push.call(r[k], v); }
			}
		}

		//# Return the r(eturn value)
		return r;
	};

	self.ObjectToQuerystring = function (object) {
		return '?' + $.param(personObj)
	};

	self.getFilename = function (url) {
		// Remove the QueryString
		url = url.replace(/\?.*$/, '');
		// Extract the last part
		return url.split('/').pop();
	};

	return self;
})();

var ResponseHelper = (function () {
	var self = {};

	self.succeed = function (response) {
		if (typeof response === 'string') { response = JSON.parse(response); }


		if (!response || response.status == undefined || response.status == null) { return false; }
		return response.status == 0;
	};


	return self;
})();

var ListHelper = (function () {
	var self = {};

	self.getById = function (list, item_id, item_prop) {
		var output = null;
		item_prop = item_prop || 'id';

		if (!list || list.length <= 0) { return output; }
		if (!item_id) { return output; }

		for (var i in list) {
			if (list[i][item_prop] == item_id) {
				output = list[i];
				break;
			}
		}
		return output;
	};

	self.getLength = function (list) {
		var length = 0;
		if (list) { length = list.length; }
		return length;
	};

	self.isEmpty = function (list) {
		var isEmpty = true;
		if (list && list.length > 0) { isEmpty = false; }
		return isEmpty;
	};

	return self;
})();

var LoaderHelper = (function (Metronic) {
	if (!Metronic) {
		console.warn("Can't load module LoaderHelper: Metronic is not defined");
		return {};
	}


	return {
		blockUI: function (targetName) {
			targetName = targetName || '.portlet';

			Metronic.blockUI({
				target: targetName,
				animate: true
			});
		},
		unblockUI: function (targetName) {
			targetName = targetName || '.portlet';
			Metronic.unblockUI(targetName);
		},
		blockModal: function (targetName) {
			targetName = targetName || '.modal-body';
			Metronic.blockUI({
				target: targetName,
				overlayColor: 'none',
				animate: true
			});

		},
		unblockModal: function (targetName) {
			targetName = targetName || '.modal-body';
			Metronic.unblockUI(targetName);
		},
		disable: function (targetName) {
			var elem = null;
			if (typeof targetName == 'string') {
				elem = $(targetName);
			} else {
				elem = targetName;
			}

			elem.toggleClass('disabled');
		}
	};
})(window.Metronic);

var LocalStorageHelper = {
	setLocalStorageItem: function (key, data) {
		var self = this;
		if (typeof data === 'object') {
			var obj = {
				strCreatedAt: moment().format('X'), // salva data no formato unix timestamp
				data: data
			};

			data.strCreatedAt = moment().format('X');

			localStorage.setItem(key, JSON.stringify(obj));
		} else {
			localStorage.setItem(key, data);
		}
	},
	getLocalStorageItem: function (key) {
		var dataOutput, lsData = localStorage[key];

		/* verifica se passou uma hora */
		function hasPassedOneHour(unixTimestamp) {
			var currentTimestamp = parseInt(moment().format('X'));
			unixTimestamp = parseInt(unixTimestamp);

			/* calcula número de horas entre data do parâmetro e atual */
			var hoursGone = (currentTimestamp - unixTimestamp) / 60 / 60;

			return hoursGone > 1;
		}

		if (!lsData) { return null; }

		try {
			var dataAux = JSON.parse(lsData);

			if (typeof dataAux === 'object') {
				/* limpa objeto se passou de 1 hora*/
				//if (hasPassedOneHour(dataAux.strCreatedAt)) {
				//	delete localStorage[key];
				//	console.log('Local storage ' + key + 'cleaned.');
				//}

				dataOutput = dataAux.data;
			} else {
				dataOutput = dataAux;
			}
		}
		catch (err) {
			dataOutput = lsData;
		}


		return dataOutput;

	},
	cacheItem: function (name, data) {
		var self = this;

		if (!data) { return; }

		if (typeof name !== 'string') { throw "Name parameter must be string."; }

		self.setLocalStorageItem(name, data);
	},
	removeItem: function (key) {
		if (!key) { return; }

		localStorage.removeItem(key);
	}
};

var ObjectHelper = {
	isFunction: function (object) {
		return (typeof object === 'function');
	},
	isNullOrUndefined: function (obj) {
		var output = false;
		if (obj == null || obj == undefined) {
			output = true;
		}
		return output;
	}
};

var DateHelper = function (moment) {
	var self = {};

	function init() {
		if (!moment) {
			console.error('Moment is not defined.')
		}
	};

	self.getTimestamp = function () {
		if (!moment) {
			throw 'Moment is not defined';
		}

		return moment().format('X');
	};

	self.sqlToBr = function (datetime) {
		var convError = false;
		var fail = function () {
			console.warn("Formato nao reconhecido");
			convError = true;
		}

		if (datetime.indexOf("-") == -1) {
			fail();
		}

		var date = datetime.split(" ");

		if (date.length > 1) {
			date[1] = date[1].split(".")[0];//remove milliseconds
		}

		date[0] = date[0].split("-");

		if (date[0][0].length != 4) {
			fail();
		}

		date[0] = [date[0][2], date[0][1], date[0][0]].join("/");

		if (!convError) {
			return date.join(" ");
		} else {
			return datetime;
		}
	};

	init();

	return self;
}(window.moment);

var Strings = (function () {
	var self = {};

	self.replace = function (text, oldSubstring, newSubstring) {
		var regMetaChars = /[-\\^$*+?.()|[\]{}]/g;
		var regExp = new RegExp(oldSubstring.replace(regMetaChars, '\\$&'), 'g');

		return text.replace(regExp, newSubstring);
	};

	self.isNullOrUndefined = function (text) {
		var output = false;
		if (text == null || text == undefined) {
			output = true;
		}
		return output;
	};

	return self;
})();