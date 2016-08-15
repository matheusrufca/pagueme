(function (AngularHelper) {
	AngularHelper.findOrCreateModule('devel', []);

	angular.module('devel').directive('stopPropagation', function () {
		return {
			link: function (scope, elem) {
				elem.on('click', function (e) {
					e.stopPropagation();
				});
			}
		};
	});


})(window.AngularHelper);