(function ($, validator) {
	if (!$) { return; }

	window.FieldsValidator = (function () {
		var self = {};

		self.formatPhone = function (phone) {
			var output = "";
			if (!phone) { return output; }

			if (phone.length == 8 || phone.length || 9) {
				output = S(phone).padLeft(14, ' ').s;
			}
			return output;
		};


		self.isCnpjValid = function (cnpj) {
			cnpj = (cnpj || '').replace(/[^\d]+/g, '');


			if (!cnpj) { return false; }

			if (cnpj.length != 14) {
				return false;
			}

			/* elimina CNPJs invalidos conhecidos */
			if (cnpj == "00000000000000" ||
				cnpj == "11111111111111" ||
				cnpj == "22222222222222" ||
				cnpj == "33333333333333" ||
				cnpj == "44444444444444" ||
				cnpj == "55555555555555" ||
				cnpj == "66666666666666" ||
				cnpj == "77777777777777" ||
				cnpj == "88888888888888" ||
				cnpj == "99999999999999") {
				return false;
			}

			/* valida DV */
			var length = cnpj.length - 2
			var numbers = cnpj.substring(0, length);
			var digits = cnpj.substring(length);
			var sum = 0;
			var pos = length - 7;
			for (i = length; i >= 1; i--) {
				sum += numbers.charAt(length - i) * pos--;
				if (pos < 2) {
					pos = 9;
				}
			}
			result = sum % 11 < 2 ? 0 : 11 - sum % 11;

			if (result != digits.charAt(0)) { return false; }

			length = length + 1;
			numbers = cnpj.substring(0, length);
			sum = 0;
			pos = length - 7;
			for (i = length; i >= 1; i--) {
				sum += numbers.charAt(length - i) * pos--;

				if (pos < 2) { pos = 9; }
			}
			result = sum % 11 < 2 ? 0 : 11 - sum % 11;

			if (result != digits.charAt(1)) { return false; }

			return true;

		};

		self.isCpfValid = function (cpf) {
			var sum = 0;
			var mod;



			cpf = (cpf || '').replace(/[^\d]+/g, '');



			if (!cpf || cpf.length != 11) { return false; }

			if (cpf == "00000000000") { return false; }

			for (i = 1; i <= 9; i++) {
				sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
			}
			mod = (sum * 10) % 11; if ((mod == 10) || (mod == 11)) mod = 0;

			if (mod != parseInt(cpf.substring(9, 10))) { return false; }

			sum = 0;
			for (i = 1; i <= 10; i++) { sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i); }

			mod = (sum * 10) % 11;

			if ((mod == 10) || (mod == 11)) { mod = 0; }

			if (mod != parseInt(cpf.substring(10, 11))) { return false; }

			return true;
		};


		self.isNcmValid = function (ncm) {
			var isValid;

			if (!ncm || !ncm.length) { isValid = true; }
			else if (ncm.length >= 2 && ncm.length <= 10) { isValid = true; }

			return isValid;
		};

		self.isCestValid = function (cest) {
			var isValid;

			if (!cest || !cest.length) { isValid = true; }
			else if (cest.length == 9) { isValid = true; }

			return isValid;
		};

		self.isCepValid = function (cep) {
			var isValid, regEx;



			regEx = /^[0-9]{2}[0-9]{3}-[0-9]{3}$/;

			cep = (cep || '').trim();


			// add char '-' at string index 5
			if (cep.length == 8) {
				cep = [S(cep).left(5).s, '-', S(cep).right(3).s].join('');
			}

			isValid = regEx.test(cep);

			return isValid;
		};

		self.isBarcodeValid = function (barcode) {
			if (barcode.length < 8 || barcode.length > 18 ||
				(barcode.length != 8 && barcode.length != 12 &&
				barcode.length != 13 && barcode.length != 14 &&
				barcode.length != 18)) {
				return false;
			}

			var lastDigit = Number(barcode.substring(barcode.length - 1));
			var checkSum = 0;
			if (isNaN(lastDigit)) { return false; } // not a valid upc/ean

			var arr = barcode.substring(0, barcode.length - 1).split("").reverse();
			var oddTotal = 0, evenTotal = 0;

			for (var i = 0; i < arr.length; i++) {
				if (isNaN(arr[i])) { return false; } // can't be a valid upc/ean we're checking for

				if (i % 2 == 0) { oddTotal += Number(arr[i]) * 3; }
				else { evenTotal += Number(arr[i]); }
			}
			checkSum = (10 - ((evenTotal + oddTotal) % 10)) % 10;

			// true if they are equal
			return checkSum == lastDigit;
		};

		self.validateBarcode = self.isBarcodeValid; // TODO: remove

		self.isPhoneBrValid = function (phone) {
			var isValid, regEx;

			regEx = /[0-9]{10}/;

			phone = (phone || '')
				.replace("(", "")
				.replace(")", "")
				.replace("-", "")
				.replace("_", "")
				.replace(".", "")
				.replace(" ", "");

			isValid = regEx.test(phone);

			return isValid;
		};

		self.isMacAddressValid = function (macAddress) {
			var isValid, regex;

			regex = /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/;
			isValid = regex.test(macAddress || '');

			return isValid;
		};

		self.isIpAddressValid = function (ipAddress) {
			var isIpValid = true, split;

			split = (ipAddress || '').split('.');
			if (split.length != 4) {
				isIpValid = false;
			}

			for (var i = 0; i < split.length; i++) {
				var s = split[i];
				if (s.length == 0 || isNaN(s) || s < 0 || s > 255)
					isIpValid = false;
			}
			return isIpValid;
		};


		

		return self;
	})();

	window.FormValidationHelper = (function () {
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
			var messages = {
				required: "Este campo é obrigatório.",
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
				cnpj: 'Por favor, forneça um CNPJ válido',
				cpf: 'Por favor, forneça um CPF válido',
				phoneBR: 'Por favor, um forneça um telefone válido',
				ncm: 'Por favor, um NCM válido',
				cest: 'Por favor, forneça um CEST válido',
				barcode: 'Por favor, forneca um código de barras válido.',
				mac_address: 'Por favor, forneça um endereço MAC válido.',
				ip_address: 'Por favor, forneça um endereço IP válido.'
			};


			jQuery.extend(jQuery.validator.messages, messages);

			return messages;
		};

		return self;
	})();


	if (!validator) { return; }

	// add cpf and cnpj rules to jquery validator
	validator.addMethod("cpf", FieldsValidator.isCpfValid);
	validator.addMethod("cnpj", FieldsValidator.isCnpjValid);
	validator.addMethod("ncm", FieldsValidator.isNcmValid);
	validator.addMethod("cest", FieldsValidator.isCestValid);
	validator.addMethod("cpf-cnpj", function (input) {
		return FieldsValidator.isCpfValid(input) || FieldsValidator.isCnpjValid(input);
	});
	validator.addMethod("barcode", FieldsValidator.isBarcodeValid);
	validator.addMethod("mac_address", FieldsValidator.isMacAddressValid);
	jQuery.validator.addMethod('ip_address', FieldsValidator.isIpAddressValid);

})(window.jQuery, jQuery.validator);