window.DateTimeRangeHelper = (function () {
	var self = {};

	self.getDefaultOptions = function () {
		var maxDate = moment();
		var format = 'DD/MM/YYYY HH:mm A';

		var startDate = moment()
			.subtract(1, 'week')
			.hour(0)
			.minute(0)
			.second(0);

		var endDate = moment()
			.hour(23)
			.minute(59)
			.second(59);

		var options = {
			startDate: startDate,
			endDate: endDate,
			maxDate: maxDate,
			showDropdowns: false,
			showWeekNumbers: true,
			timePicker: true,
			timePickerIncrement: 1,
			timePicker12Hour: false,
			//timePicker24Hour: true,
			buttonClasses: ['btn btn-sm'],
			applyClass: ' blue',
			cancelClass: 'default',
			format: format,
			separator: ' to ',
			locale: {
				applyLabel: 'Filtrar',
				cancelLabel: 'Cancelar',
				fromLabel: 'De',
				toLabel: 'Até',
				customRangeLabel: 'Periodo',
				daysOfWeek: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
				monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
				firstDay: 1
			}
		};

		return options;
	};

	return self;
})();