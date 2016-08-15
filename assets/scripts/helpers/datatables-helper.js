window.TablesHelperV2 = (function ($, Enumerable) {
	var self = {};


	// retorna opções padrão da tabela
	self.getDefaultOptions = function () {
		var defaultOptions = {
			language: {
				//url: '//cdn.datatables.net/plug-ins/1.10.6/i18n/Portuguese-Brasil.json'
				url: '../assets/plugins/datatables/i18n/Portuguese-Brasil.json'
			},
			paging: true,
			info: true,
			pageLenght: 25,
			responsive: true,
			rowId: 'id',
			autoWidth: false,
			createdRow: function (row, data, dataIndex) {
				$(row).attr('id', 'row_' + data[0]);
				$(row).attr('data-id', data[0]);
				//$(row).attr('data-index', dataIndex);
			}
		};

		return defaultOptions;
	};


	self.injectDataTableToolsFunctions = function () {
		/* adiciona as funções de exportação */
		$.extend(true, $.fn.DataTable.TableTools.classes, {
			"container": "btn-group btn-data-table-tools pull-right",
			"buttons": {
				"normal": "btn btn-sm default",
				"disabled": "btn default disabled"
			}
		});
	};

	self.getDataTableHeader = function () {
		var tableDOM = '<"table-toolbar row" <"col-md-12"T>>' +
			'<"table-options row"<"col-md-6 col-sm-12"l><"col-md-6 col-sm-12"f>r>t' +
			'<"row"<"col-md-5 col-sm-12"i><"col-md-7 col-sm-12"p>>';

		return tableDOM;
	};

	self.getColumnsDefinitions = function () {
		var columnDefs = [{
			targets: -1,
			defaultContent: $('#tmpl_action_btns').html(),
			orderable: false
		},
		{
			targets: 0,
			visible: false
		}];

		return columnDefs;
	};

	self.getDataTableToolsOptions = function () {
		var tableTools = {
			sSwfPath: '../plugins/datatables/extensions/TableTools/swf/copy_csv_xls_pdf.swf',
			aButtons: ['xls', 'csv', 'copy', 'print']
		};

		return tableTools;
	};


	self.convertDataToRows = function (array, converter) {
		return Enumerable
				.From(array)
				.Select(function (item) {
					return converter(item);
				})
				.ToArray();
	};

	// obtém o id de uma linha da tabela
	self.getRowId = function (dataTable, row, id_collumn) {
		var item_id, row_data, row_id;
		id_collumn = id_collumn || 0;

		row = $(row).is('tr') ? row : $(row).closest('tr');
		row_data = dataTable.row(row).data();
		item_id = row_data[id_collumn];

		return item_id;
	};


	// obtém os dados de uma linha da tabela
	self.getRow = function (dataTable, element) {
		var row_data = dataTable.row($(element).parents('tr')).data();
		return row_data;
	};


	return self;
})(window.jQuery, Enumerable);