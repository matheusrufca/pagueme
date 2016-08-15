//Helper para funções de manipulação de formulários
window.FormsHelper = (function () {
	var self = {};

	self.renderCheckboxInput = function (element, isChecked, options) {
		var options = $.extend({
			state: isChecked,
			size: 'normal',
			onText: 'Sim',
			offText: 'Não',
			offColor: 'danger',
		}, options);
		$(element).bootstrapSwitch(options);
	};


	self.fillSelect = function (selectName, options) {
		$.each(options, function (i, item) {
			$(selectName + ' option[value="' + item.id + '"]').remove();

			$(selectName)
				.append($('<option>')
				.text(item.text)
				.attr('value', item.id));
		});
	};

	self.clearForm = function (formName) {
        $("#" + formName + " .form-group")
            .removeClass("has-error")
            .find(".help-block.help-block-error").remove();
        
		document.getElementById(formName).reset();
		$('#' + formName + ' input[type="hidden"').val('');

		//try {
		//	$(['#', formName, ' [type="reset"]'].join('')).trigger('click');
		//} catch (err) { }
	};

	self.getInt = function (input) {
		if (input === undefined) {
			return undefined;
		}

		var output = parseInt(input);

		return !isNaN(output) ? output : null;
	};

	self.getFloat = function (input) {
		if (input === undefined) {
			return undefined;
		}

		var output = input;
		if (typeof output == 'string') {
			output = output.replace(",", ".");
		}
		output = parseFloat(output);

		return !isNaN(output) ? output : null;
	};

	self.getMoney = function (input) {
		if (input === undefined) {
			return undefined;
		}
		if (0 === input.length) {
			return 0;
		}

		var output = input;
		if (typeof output == 'string') {
			output = output.replace(",", ".");
		}
		output = parseFloat(output);

		return !isNaN(output) ? output : undefined;
	};

	self.getSelectValue = function (input, type) {
		if (input === undefined) {
			return undefined;
		}

		if (input == '0') {
			return null;
		}

		if (type == 'int') {
			return self.getInt(input);
		}

		if (type == 'float') {
			return self.getFloat(input);
		}

		return undefined;
	};

	self.getAddress = function (cep_code, callback) {
		cep_code = (cep_code || '')
			.replace('-', '')
			.replace(/_/gi, '');

		if (cep_code.length != 8) { return; }

		$.get('https://viacep.com.br/ws/' + cep_code + '/json/', { code: cep_code }, function (result) {
			if (result.erro == true) { return notification.warning('CEP não encontrado.'); }

			if (typeof callback === 'function') {
				callback(result);
			}
		});
	};

	self.getDate = function (input) {
		if (input === undefined) {
			return undefined;
		}
		if (0 === input.length) {
			return null;
		}

		var day = input.slice(0, 2);
		var month = input.slice(3, 5);
		var year = input.slice(6, 10);

		return year + "-" + month + "-" + day;
	};


	self.getBase64Image = function (element) {
		var base64img;

		try {
			base64img = _convertImageToBase64(element);
		} catch (err) {
			console.error(err);
			base64img = null;
		}

		return base64img;
	};


	self.fillStateSelect = function (element_id) {
		if (!element_id || !$(element_id).is('select')) {
			console.warn('Invalid select');
			return;
		}

		var $element, options;

		options = {
			'AC': 'Acre',
			'AL': 'Alagoas',
			'AP': 'Amapá',
			'AM': 'Amazonas',
			'BA': 'Bahia',
			'CE': 'Ceará',
			'DF': 'Distrito Federal',
			'ES': 'Espírito Santo',
			'GO': 'Goiás',
			'MA': 'Maranhão',
			'MT': 'Mato Grosso',
			'MS': 'Mato Grosso do Sul',
			'MG': 'Minas Gerais',
			'PA': 'Pará',
			'PB': 'Paraíba',
			'PR': 'Paraná',
			'PE': 'Pernambuco',
			'PI': 'Piauí',
			'RJ': 'Rio de Janeiro',
			'RN': 'Rio Grande do Norte',
			'RS': 'Rio Grande do Sul',
			'RO': 'Rondônia',
			'RR': 'Roraima',
			'SC': 'Santa Catarina',
			'SP': 'São Paulo',
			'SE': 'Sergipe',
			'TO': 'Tocantins'
		};

		$element = $(element_id);

		$element
			.empty()
			.append('<option selected="selected" value="">Selecione</option>');

		$.each(options, function (key, value) {
			$element
				.append($('<option>')
				.text(value)
				.attr('value', key));
		});

		return $element;
	};

	self.fillCountrySelect = function (element_id) {
		if (!element_id || !$(element_id).is('select')) {
			console.warn('Invalid select');
			return;
		}

		var $element, options;

		options = {
			'AF': 'Afeganistão',
			'ZA': 'África do Sul',
			'AL': 'Albânia',
			'DE': 'Alemanha',
			'AD': 'Andorra',
			'AO': 'Angola',
			'AI': 'Anguilla',
			'AQ': 'Antártida',
			'AG': 'Antígua e Barbuda',
			'SA': 'Arábia Saudita',
			'DZ': 'Argélia',
			'AR': 'Argentina',
			'AM': 'Armênia',
			'AW': 'Aruba',
			'AU': 'Austrália',
			'AT': 'Áustria',
			'AZ': 'Azerbaijão',
			'BS': 'Bahamas',
			'BH': 'Bahrein',
			'BD': 'Bangladesh',
			'BB': 'Barbados',
			'BE': 'Bélgica',
			'BZ': 'Belize',
			'BJ': 'Benin',
			'BM': 'Bermudas',
			'BY': 'Bielorrússia',
			'BO': 'Bolívia',
			'BA': 'Bósnia e Herzegovina',
			'BW': 'Botsuana',
			'BR': 'Brasil',
			'BN': 'Brunei',
			'BG': 'Bulgária',
			'BF': 'Burquina Faso',
			'BI': 'Burundi',
			'BT': 'Butão',
			'CV': 'Cabo Verde',
			'KH': 'Camboja',
			'CA': 'Canadá',
			'QA': 'Catar',
			'KZ': 'Cazaquistão',
			'EA': 'Ceuta e Melilha',
			'TD': 'Chade',
			'CL': 'Chile',
			'CN': 'China',
			'CY': 'Chipre',
			'VA': 'Cidade do Vaticano',
			'SG': 'Cingapura',
			'CO': 'Colômbia',
			'KM': 'Comores',
			'CG': 'Congo - Brazzaville',
			'CD': 'Congo - Kinshasa',
			'KP': 'Coreia do Norte',
			'KR': 'Coreia do Sul',
			'CI': 'Costa do Marfim',
			'CR': 'Costa Rica',
			'HR': 'Croácia',
			'CU': 'Cuba',
			'CW': 'Curaçao',
			'DG': 'Diego Garcia',
			'DK': 'Dinamarca',
			'DJ': 'Djibuti',
			'DM': 'Dominica',
			'EG': 'Egito',
			'SV': 'El Salvador',
			'AE': 'Emirados Árabes Unidos',
			'EC': 'Equador',
			'ER': 'Eritreia',
			'SK': 'Eslováquia',
			'SI': 'Eslovênia',
			'ES': 'Espanha',
			'US': 'Estados Unidos',
			'EE': 'Estônia',
			'ET': 'Etiópia',
			'FJ': 'Fiji',
			'PH': 'Filipinas',
			'FI': 'Finlândia',
			'FR': 'França',
			'GA': 'Gabão',
			'GM': 'Gâmbia',
			'GH': 'Gana',
			'GE': 'Geórgia',
			'GS': 'Geórgia do Sul e Ilhas Sandwich do Sul',
			'GI': 'Gibraltar',
			'GD': 'Granada',
			'GR': 'Grécia',
			'GL': 'Groenlândia',
			'GP': 'Guadalupe',
			'GU': 'Guam',
			'GT': 'Guatemala',
			'GG': 'Guernsey',
			'GY': 'Guiana',
			'GF': 'Guiana Francesa',
			'GN': 'Guiné',
			'GW': 'Guiné Bissau',
			'GQ': 'Guiné Equatorial',
			'HT': 'Haiti',
			'NL': 'Holanda',
			'HN': 'Honduras',
			'HK': 'Hong Kong, RAE da China',
			'HU': 'Hungria',
			'YE': 'Iêmen',
			'CX': 'Ilha Christmas',
			'AC': 'Ilha de Ascensão',
			'IM': 'Ilha de Man',
			'NF': 'Ilha Norfolk',
			'AX': 'Ilhas Åland',
			'KY': 'Ilhas Caiman',
			'IC': 'Ilhas Canárias',
			'CC': 'Ilhas Cocos (Keeling)',
			'CK': 'Ilhas Cook',
			'UM': 'Ilhas Distantes dos EUA',
			'FO': 'Ilhas Faroe',
			'FK': 'Ilhas Malvinas',
			'MP': 'Ilhas Marianas do Norte',
			'MH': 'Ilhas Marshall',
			'PN': 'Ilhas Pitcairn',
			'SB': 'Ilhas Salomão',
			'TC': 'Ilhas Turks e Caicos',
			'VG': 'Ilhas Virgens Britânicas',
			'VI': 'Ilhas Virgens dos EUA',
			'IN': 'Índia',
			'ID': 'Indonésia',
			'IR': 'Irã',
			'IQ': 'Iraque',
			'IE': 'Irlanda',
			'IS': 'Islândia',
			'IL': 'Israel',
			'IT': 'Itália',
			'JM': 'Jamaica',
			'JP': 'Japão',
			'JE': 'Jersey',
			'JO': 'Jordânia',
			'XK': 'Kosovo',
			'KW': 'Kuwait',
			'LA': 'Laos',
			'LS': 'Lesoto',
			'LV': 'Letônia',
			'LB': 'Líbano',
			'LR': 'Libéria',
			'LY': 'Líbia',
			'LI': 'Liechtenstein',
			'LT': 'Lituânia',
			'LU': 'Luxemburgo',
			'MO': 'Macau, RAE da China',
			'MK': 'Macedônia',
			'MG': 'Madagascar',
			'MY': 'Malásia',
			'MW': 'Malawi',
			'MV': 'Maldivas',
			'ML': 'Mali',
			'MT': 'Malta',
			'MA': 'Marrocos',
			'MQ': 'Martinica',
			'MU': 'Maurício',
			'MR': 'Mauritânia',
			'YT': 'Mayotte',
			'MX': 'México',
			'MM': 'Mianmar (Birmânia)',
			'FM': 'Micronésia',
			'MZ': 'Moçambique',
			'MD': 'Moldávia',
			'MC': 'Mônaco',
			'MN': 'Mongólia',
			'ME': 'Montenegro',
			'MS': 'Montserrat',
			'NA': 'Namíbia',
			'NR': 'Nauru',
			'NP': 'Nepal',
			'NI': 'Nicarágua',
			'NE': 'Níger',
			'NG': 'Nigéria',
			'NU': 'Niue',
			'NO': 'Noruega',
			'NC': 'Nova Caledônia',
			'NZ': 'Nova Zelândia',
			'OM': 'Omã',
			'BQ': 'Países Baixos Caribenhos',
			'PW': 'Palau',
			'PA': 'Panamá',
			'PG': 'Papua-Nova Guiné',
			'PK': 'Paquistão',
			'PY': 'Paraguai',
			'PE': 'Peru',
			'PF': 'Polinésia Francesa',
			'PL': 'Polônia',
			'PR': 'Porto Rico',
			'PT': 'Portugal',
			'KE': 'Quênia',
			'KG': 'Quirguistão',
			'KI': 'Quiribati',
			'GB': 'Reino Unido',
			'CF': 'República Centro-Africana',
			'DO': 'República Dominicana',
			'CM': 'República dos Camarões',
			'CZ': 'República Tcheca',
			'RE': 'Reunião',
			'RO': 'Romênia',
			'RW': 'Ruanda',
			'RU': 'Rússia',
			'EH': 'Saara Ocidental',
			'PM': 'Saint Pierre e Miquelon',
			'WS': 'Samoa',
			'AS': 'Samoa Americana',
			'SM': 'San Marino',
			'SH': 'Santa Helena',
			'LC': 'Santa Lúcia',
			'BL': 'São Bartolomeu',
			'KN': 'São Cristóvão e Nevis',
			'MF': 'São Martinho',
			'ST': 'São Tomé e Príncipe',
			'VC': 'São Vicente e Granadinas',
			'SN': 'Senegal',
			'SL': 'Serra Leoa',
			'RS': 'Sérvia',
			'SC': 'Seychelles',
			'SX': 'Sint Maarten',
			'SY': 'Síria',
			'SO': 'Somália',
			'LK': 'Sri Lanka',
			'SZ': 'Suazilândia',
			'SD': 'Sudão',
			'SS': 'Sudão do Sul',
			'SE': 'Suécia',
			'CH': 'Suíça',
			'SR': 'Suriname',
			'SJ': 'Svalbard e Jan Mayen',
			'TH': 'Tailândia',
			'TW': 'Taiwan',
			'TJ': 'Tajiquistão',
			'TZ': 'Tanzânia',
			'IO': 'Território Britânico do Oceano Índico',
			'TF': 'Territórios Franceses do Sul',
			'PS': 'Territórios palestinos',
			'TL': 'Timor-Leste',
			'TG': 'Togo',
			'TK': 'Tokelau',
			'TO': 'Tonga',
			'TT': 'Trinidad e Tobago',
			'TA': 'Tristão da Cunha',
			'TN': 'Tunísia',
			'TM': 'Turcomenistão',
			'TR': 'Turquia',
			'TV': 'Tuvalu',
			'UA': 'Ucrânia',
			'UG': 'Uganda',
			'UY': 'Uruguai',
			'UZ': 'Uzbequistão',
			'VU': 'Vanuatu',
			'VE': 'Venezuela',
			'VN': 'Vietnã',
			'WF': 'Wallis e Futuna',
			'ZM': 'Zâmbia',
			'ZW': 'Zimbábue'
		};


		$element = $(element_id);

		$element
			.empty()
			.append('<option value="" selected>Selecione</option>');

		$.each(options, function (key, value) {
			$element
				.append($('<option>')
				.text(value)
				.attr({ 'value': key}));
		});

		return $element;
	};



	// convert <img /> into a base64 image
	function _convertImageToBase64(element) {
		var base64img;

		if (!element) { throw 'Object null or empty'; }

		if (!element) { throw 'Object null or empty'; };
		if (!_isElement(element) || !(element.nodeName == 'IMG')) {
			throw 'Object is not HTML element or IMG';
		}

		if (Array.isArray(element)) {
			// if receive an element array return a array of base64img
			base64img = [];

			for (var i = 0; i < element.length; i++) {
				var canvas, canvasContext, auxBase64img;

				canvas = document.createElement("canvas");
				canvasContext = canvas.getContext("2d");
				canvasContext.drawImage(element, 10, 10);

				auxBase64img = canvas
					.toDataURL()
					.replace(/^data:image\/(png|jpg);base64,/, "");

				base64img.push(auxBase64img);
			}


			element = element[0];
		} else {
			var canvas, canvasContext;

			canvas = document.createElement("canvas");
			canvasContext = canvas.getContext("2d");
			canvasContext.drawImage(element, 10, 10);

			/* convert to base64 */
			base64img = canvas
				.toDataURL()
				.replace(/^data:image\/(png|jpg);base64,/, "");
		}

		return base64img;
	};

	function _isElement(obj) {
		var isElement;
		try {
			//Using W3 DOM2 (works for FF, Opera and Chrom)
			isElement = obj instanceof HTMLElement;
		}
		catch (e) {
			//Browsers not supporting W3 DOM2 don't have HTMLElement and
			//an exception is thrown and we end up here. Testing some
			//properties that all elements have. (works on IE7)
			isElement = (typeof obj === "object") &&
			  (obj.nodeType === 1) && (typeof obj.style === "object") &&
			  (typeof obj.ownerDocument === "object");
		}

		return isElement;
	}

	return self;
})();


window.JsonHelper = function () {
	var self = {};

	self.deleteUndefinedProperties = function (object) {
		var output = $.extend(true, {}, object);

		return output;
	};

	self.deleteNullOrEmptyProperties = function (object) {
		var output = $.extend(true, {}, object);

		self.deleteNullOrEmptyPropertiesRecursive(output);

		return output;
	};

	self.deleteNullProperties = function (object) {
		var output = $.extend(true, {}, object);

		self.deleteNullPropertiesRecursive(output);

		return output;
	};

	self.deleteNullPropertiesRecursive = function (object) {
		for (var i in object) {

			if (object[i] == null) {
				delete object[i];
			} else if (typeof object[i] === 'object') {
				self.deleteNullPropertiesRecursive(object[i]);
			}
		}
	};

	self.deleteEmptyProperties = function (object) {
		var output = $.extend(true, {}, object);

		self.deleteEmptyPropertiesRecursive(output);

		return output;
	}

	self.deleteEmptyPropertiesRecursive = function (object) {
		for (var i in object) {
			if (typeof object[i] === 'object' && self.isEmpty(object[i])) {
				delete object[i];
			} else if (typeof object[i] === 'object') {
				self.deleteEmptyPropertiesRecursive(object[i]);
			}
		}
	};

	self.isEmpty = function isEmpty(obj) {
		for (var prop in obj) {
			if (obj.hasOwnProperty(prop))
				return false;
		}

		return true && JSON.stringify(obj) === JSON.stringify({});
	}

	self.deleteNullOrEmptyPropertiesRecursive = function (object) {
		for (var i in object) {

			if (object[i] == null || object[i] == '') {
				delete object[i];
			} else if (typeof object[i] === 'object') {
				self.deleteNullOrEmptyPropertiesRecursive(object[i]);
			}
		}
	};

	return self;
}();




