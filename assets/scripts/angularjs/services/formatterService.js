
AngularHelper.findOrCreateModule('nubo');

angular
	.module('nubo')
	.service('formatterService', function () {
		var _self = {};
		var self = this;

		self.format = function (format, input) {
			if (!format) { throw 'Invalid format type'; }
			if (input == undefined || input == null) { throw 'Invalid input'; }


			var formatterFn = _self.getFormatter(format);


			return formatterFn(input);

		};

		_self.getFormatter = function (format) {
			if (!format) { throw 'Invalid format type'; }

			var formatterFn = null;

			switch (format) {
				case 'money':
					formatterFn = _formatMoney;
					break;
				case 'cpf':
					formatterFn = _formatCpf;
					break;
				case 'cnpj':
					formatterFn = _formatCnpj;
					break;
				case 'weight':
					formatterFn = _formatWeight;
					break;

				default:
					throw 'Invalid format';
					break;
			}

			return formatterFn;
		};



		function _formatMoney(input) {
			if (!input) { return null; }
			var output = '';

			var n = parseInt(input || 0);


			if (n > 0 || n < 0) {
				output = (n / 100).formatMoney(2, ',', '.');
			} else {

				output = n.formatMoney(2, ',', '.');
			}

			return output;

		};

		function _formatCpf(input) {
			if (!input) { return; }

			var output = '';
			var aux = input;
			/* remove tudo o que não é dígito */
			aux = aux.replace(/\D/g, "");

			/* coloca ponto entre o terceiro e o quarto dígitos */
			aux = aux.replace(/(\d{3})(\d)/, "$1.$2");

			/* coloca ponto entre o setimo e o oitava dígitos */
			aux = aux.replace(/(\d{3})(\d)/, "$1.$2");

			/* coloca ponto entre o decimo primeiro e o decimosegundo dígitos */
			aux = aux.replace(/(\d{3})(\d)/, "$1-$2");

			output = aux;

			return output;
		};

		function _formatCnpj(input) {
			if (!input) { return; }

			var output = '';
			var aux = input;

			/* coloca ponto entre o segundo e o terceiro dígitos */
			aux = aux.replace(/^(\d{2})(\d)/, "$1.$2");

			/* coloca ponto entre o quinto e o sexto dígitos */
			aux = aux.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");

			/* coloca uma barra entre o oitavo e o nono dígitos */
			aux = aux.replace(/\.(\d{3})(\d)/, ".$1/$2");

			/* coloca um hífen depois do bloco de quatro dígitos */
			aux = aux.replace(/(\d{4})(\d)/, "$1-$2");

			output = aux;

			return output;
		};

		function _formatWeight(input) {
			if (!input) { return null; }
			var output = '';

			var n = parseInt(input || 0);


			if (n > 0 || n < 0) {
				output = (n / 1000).formatMoney(3, ',', '.');
			} else {

				output = n.formatMoney(3, ',', '.');
			}

			return output;

		};


		return self;
	});