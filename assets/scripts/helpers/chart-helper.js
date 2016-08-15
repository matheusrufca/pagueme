window.FlotChartHelper = (function () {
	var self = {};

	// gráficos de barra
	self.Bar = {
		getDefaultChartOptions: function () {
			return {
				series: {
					bars: {
						show: true
					}
				},
				bars: {
					barWidth: 0.2,
					lineWidth: 0, // in pixels
					shadowSize: 0,
					align: 'left'
				},
				grid: {
					tickColor: "#eee",
					borderColor: "#eee",
					borderWidth: 1
				},
				xaxis: { mode: "categories" },
				legend: {
					show: false
				}
			};
		},
		getDefaultChartDataStyle: function (chartData) {
			return [{
				data: chartData,
				lines: {
					lineWidth: 1,
				},
				shadowSize: 0
			}];
		}
	};


	// gráficos de linha
	self.Line = {
		getDefaultChartDataStyle: function (chartData) {
			return [{
				data: chartData,
				lines: {
					fill: 0.2,
					lineWidth: 0,
				},
				color: ['#BAD9F5']
			}, {
				data: chartData,
				points: {
					show: true,
					fill: true,
					radius: 4,
					fillColor: "#9ACAE6",
					lineWidth: 2
				},
				color: '#9ACAE6',
				shadowSize: 1
			}, {
				data: chartData,
				lines: {
					show: true,
					fill: false,
					lineWidth: 3
				},
				color: '#9ACAE6',
				shadowSize: 0
			}];
		},
		getDefaultChartOptions: function () {
			return {
				xaxis: {
					tickLength: 0,
					tickDecimals: 0,
					mode: "categories",
					min: 0,
					font: {
						lineHeight: 18,
						style: "normal",
						variant: "small-caps",
						color: "#6F7B8A"
					}
				},
				yaxis: {
					ticks: 5,
					tickDecimals: 0,
					tickColor: "#eee",
					font: {
						lineHeight: 14,
						style: "normal",
						variant: "small-caps",
						color: "#6F7B8A"
					}
				},
				grid: {
					hoverable: true,
					clickable: true,
					tickColor: "#eee",
					borderColor: "#eee",
					borderWidth: 1
				}
			};
		}
	};


	// gráfico de pizza
	self.Pie = {
		getDefaultChartOptions: function () {
			return {
				series: {
					pie: {
						show: true,
						radius: 1,
						label: {
							show: true,
							radius: 2 / 3,
							formatter: function (label, series) {
								return '<div class="text-center" style="font-size:8pt;padding:2px;color:white;">' + Math.round(series.percent) + '%</div>';
							},
							threshold: 0.1
						}
					}
				},
				legend: {
					show: true
				}
			};
		}
	};


	self.showChartTooltip = function (x, y, xValue, yValue) {
		$('<div id="tooltip" class="chart-tooltip">' + yValue + '<\/div>').css({
			position: 'absolute',
			display: 'none',
			top: y - 40,
			left: x - 40,
			border: '0px solid #ccc',
			padding: '2px 6px',
			'background-color': '#fff'
		}).appendTo("body").fadeIn(200);
	};


	return self;
})();


window.AmChartsHelper = (function () {
	var self = {};

	// gráficos de barra
	self.Bar = {
		getDefaultChartOptions: function () {
			return {
				"type": "serial",
				"theme": "light",
				"fontFamily": 'Open Sans',
				"color": '#888888',
				"legend": {
					"equalWidths": false,
					"useGraphSettings": true,
					"valueAlign": "left",
					"valueWidth": 120
				},
				"categoryAxis": {
					autoWrap: true,
					centerLabels: true,
					equalSpacing: true,
					fontSize: 10,
					color: '#fafafa'
				},
				"chartCursor": {
					"cursorAlpha": 0.1,
					"cursorColor": "#000000",
					"fullWidth": true,
					"valueBalloonsEnabled": false,
					"zoomable": false
				}
			};
		}
	};

	self.Pie = {
		getDefaultChartOptions: function () {
			return {
				"type": "pie",
				"theme": "light",
				"fontFamily": 'Open Sans',
				"color": '#888',
				"outlineAlpha": 0.4,
				"depth3D": 15,
				"angle": 30,
				//"legend": {
				//	"position": "right",
				//	"marginRight": 100,
				//	"autoMargins": false
				//},
				"labelsEnabled": true,
				"labelFunction": function (itemObject) {
					var text = itemObject.title;

					if (text.length > 20) {
						text = text.slice(0, 20) + '...';
					}
					return text;
				}
			};
		}
	};


	self.loadAmCharts = function (element, chartData, chartOptions) {
		var chart_elm = $('#' + element);

		var chartOptions = $.extend(chartOptions, {
			dataProvider: chartData
		});


		var chart = AmCharts.makeChart(element, chartOptions);

		chart_elm.closest('.portlet').find('.fullscreen').click(function () {
			chart.invalidateSize();
		});

		return chart;
	};


	return self;
})();
