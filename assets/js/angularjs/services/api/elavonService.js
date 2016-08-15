AngularHelper.findOrCreateModule('nubo.rest', ['nubo']);

angular
	.module('nubo.rest')
	.service('elavonApiService', ['$http', 'apiServiceHandler', function ($http, apiServiceHandler) {
		var self = this, resources = {}, apiServiceUrl;

		resources['elavonServiceUrl'] = 'http://localhost:8080';
		apiServiceUrl = 'http://localhost:8080';


		//resources['elavonServiceUrl'] = 'http://localhost:8080';
		//apiServiceUrl = 'http://localhost:8080';


		self.isPinpadEnabled = true;

		self.sale = function (dataObj, callback, fallback) {
			var config;

			if (apiServiceHandler.isProcessing === true) {
				return;
			}

			config = {
				url: [resources['elavonServiceUrl'], '/elavon/api/payment/sale'].join(''),
				method: 'POST',
				responseType: 'json',
				data: JSON.stringify(dataObj),
				headers: {
					'Content-Type': 'application/json'
				}
			};

			return $http(config)
				.success(callback)
				.error(fallback);
		};

		self.print = function (dataObj, callback, errorCallback) {
			var config;

			if (apiServiceHandler.isProcessing === true) {
				return;
			}

			config = {
				url: [resources['elavonServiceUrl'], '/elavon/api/print'].join(''),
				method: 'POST',
				responseType: 'json',
				data: JSON.stringify(dataObj),
				headers: {
					'Content-Type': 'application/json'
				}
			};

			return $http(config)
				.success(callback)
				.error(fallback);
		};
	}
	]);


window.FiscalService = (function () {
	var self = {};

	function insert_white_space(string_to_insert, columns) {
		var i,
		    j,
		    k         = 0,
		    line_size = 48,
		    word      = "",
		    max_size  = 124;

		if (string_to_insert.length >= max_size) {
			return string_to_insert;
		}

		if (string_to_insert.length < line_size) {
			if (columns == 6) {
				word = "   ";
				var size_to_add = line_size - string_to_insert.length;
				if (size_to_add > 0) {
					for (j = 0; j < string_to_insert.length; j++) {
						if (string_to_insert.charAt(j) == " ") {
							string_to_insert = string_to_insert.slice(0, j) + word + string_to_insert.slice(j);
							j += word.length + 1;
						}
					}
				}
			}
			word = "";
			var size_to_add = line_size - string_to_insert.length;
			for (j = 0; j < size_to_add; j++) {
				word = word + " ";
			}
			index = string_to_insert.lastIndexOf(" ");
			string_to_insert = string_to_insert.slice(0, index) + word + string_to_insert.slice(index);

		} else if (string_to_insert.length > line_size) {
			while ((string_to_insert.length % line_size) != 0) {
				//verificação necessária pois impressão explode se string possuir mais de 124 caracteres
				if (string_to_insert.length == max_size) {
					break;
				}
				index = string_to_insert.lastIndexOf(" ");
				string_to_insert = string_to_insert.slice(0, index) + " " + string_to_insert.slice(index);
			}
		}
		return string_to_insert;
	}

	function formatInvoice(sat_receipt) {

		var products_line1 = [],
		    products_line2 = [],
		    methods        = [],
		    i;

		for (i = 0; i < sat_receipt["itens"].length; i++) {

			if (sat_receipt["itens"][i]["cod"].length < 3) {
				sat_receipt["itens"][i]["cod"] = " " + sat_receipt["itens"][i]["cod"];
			}
			if (sat_receipt["itens"][i]["valor_un"].length < 5) {
				sat_receipt["itens"][i]["valor_un"] = " " + sat_receipt["itens"][i]["valor_un"];
			}

			products_line1[i] = sat_receipt["itens"][i]["id"]
				+ " " + sat_receipt["itens"][i]["cod"]
				+ " " + sat_receipt["itens"][i]["qty"]
				+ " " + sat_receipt["itens"][i]["un"]
				+ " " + sat_receipt["itens"][i]["valor_un"]
				+ " (" + sat_receipt["itens"][i]["valor_tr"] + ")";

			products_line1[i] = insert_white_space(products_line1[i], 6);
			products_line1[i] = "TSL" + products_line1[i];

			products_line2[i] = sat_receipt["itens"][i]["desc"]
				+ " " + sat_receipt["itens"][i]["valor_item"];

			products_line2[i] = insert_white_space(products_line2[i], 1);
			products_line2[i] = "TSL" + products_line2[i];
		}

		for (i = 0; i < sat_receipt["payments"].length; i++) {
			methods[i] = sat_receipt["payments"][i]["method"]
				+ " " + sat_receipt["payments"][i]["value"];

			methods[i] = insert_white_space(methods[i], 1);
			methods[i] = "TSL" + methods[i];
		}
		coupon = {
			"lines": [
				//"IMRnubo_logo.JPEG",  // LOGO DA NUBO
				"IMRBK_DISP.JPG",       // LOGO DO BURGUER KING
				"TLCNubo",
				"TSCRua Germano Petersen Junior 504/302",
				"TSCPorto Alegre - RS",
				"TSCFone (51) 3086-4100 - www.nubo.solutions",
				"TSC ",
				"TSCCPNJ " + sat_receipt["cnpj"],
				"TSCIE " + sat_receipt["IE"],
				"TSC------------------------------------------------",
				"TSCExtrato No. " + sat_receipt["extrato"],
				"TSC" + sat_receipt["cupom"],
				"TSC------------------------------------------------",
				"TSL #  | .COD | QTD | UN |  VL UN R$  | (VL TR R$)*",
				"TSLDESC |                                VL ITEM R$",
				"TSC------------------------------------------------"
			]
		};
		for (i = 0; i < products_line1.length; i++) {
			coupon.lines.push(products_line1[i]);
			coupon.lines.push(products_line2[i]);
		}

		var total = "TOTAL R$ " + sat_receipt["total"];
		total = insert_white_space(total, 2);
		coupon.lines.push(
			"TSL ",
			"TSL" + total,
			"TSL ");

		for (i = 0; i < methods.length; i++) {
			coupon.lines.push(methods[i]);
		}

		if (sat_receipt.hasOwnProperty('troco')) {
			var change = "Troco " + sat_receipt["troco"];
			change = insert_white_space(change, 1);
			change = "TSL" + change;
			coupon.lines.push(change);
		}

		var index = 0;
		for (var j = 0; j < sat_receipt["code"].length; j++) {
			if (sat_receipt["code"].charAt(j) == " ") {
				sat_receipt["code"] = sat_receipt["code"].slice(0, j) + " " + sat_receipt["code"].slice(j);
				j++;
			}
		}
		var code_pt1    = sat_receipt["code"].slice(0, 30),
		    code_pt2    = sat_receipt["code"].slice(30),
		    code        = sat_receipt["code"].replace(/ /g, ''),
		    barcode_pt1 = code.slice(0, code.length / 2),
		    barcode_pt2 = code.slice(code.length / 2);

		var tax = sat_receipt["message_tax"] + sat_receipt["value_tax"]
		tax = insert_white_space(tax, 1);

		coupon.lines.push(
			"TSL ",
			//"TSL" + sat_receipt["footnote"],
			"TSLDocumento emitido por ME ou EPP optante pelo SIMPLES NACIONAL. Nao gera Direito a Credito Fiscal de ICMS e de ISS.",
			"TSLConforme Lei Complementar 123 de 14/12/2006.",
			"TSL ",
			"TSL" + tax,
			"TSC------------------------------------------------",
			"TSL ",
			"TSCSAT No. " + sat_receipt["sat_number"],
			"TSC" + sat_receipt["date"],
			"TSL ",
			"TSC" + code_pt1,
			"TSC" + code_pt2,
			"TSL ",
			"TSC" + code,
			"BSC" + barcode_pt1,
			"BSC" + barcode_pt2,
			"QMC" + sat_receipt["qr_code"]
			//            "QMCgWIkRihSYMqEwN1mR5zHyoXniEvx227r1fSh2vURHBt8B6m5eoPwzfhTCBajN0UIJcey7K1gi+VMWeL3XjFBikuKxceOhQeB8PP9b5SNAWnFRvS0tQ+iYvTAOUkPAoU28uJE+PbRFP7sUQ5FnsYi0AzYpVBOfDYqNVh6A6081nqLCPosfBbJIPyoTrTrUSwSfH5aVz5CqLMtRMFoI+qLYISJPm6VWHXMlitmZ2a0SnKdSxZet475mx2bN4UFdXxKxRBTkN0r8ssRDsZD6Psmh5UDMQBNKKC7kmDSJjAA3CJk5DWUoiVFCrC4vyUkUuQoG7BTC46RnO7XVi4tjXem5A=="
		);

		console.log(coupon);
		send_to_printer(coupon);
	}

	return self;
})();
