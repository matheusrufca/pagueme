AngularHelper.findOrCreateModule('nubo', []);

angular
	.module('nubo')
	.service('customerValidationService', function () {
		var self = this;

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

			if (!cpf) { return false; }

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

		self.isCustomerDocumentValid = function (customerDocument) {
			var output = false;

			if (!customerDocument) {
				return false;
			}
			else if (customerDocument.length == 14) {
				output = self.isCpfValid(customerDocument);
			}
			else if (customerDocument.length == 18) {
				output = self.isCnpjValid(customerDocument);
			}

			return output;
		};
	});