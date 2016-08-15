(function (AngularHelper) {
	AngularHelper.findOrCreateModule('devel', []);

	angular
		.module('devel')
		.factory('apiServiceHandler', function () {
			var self = {};

			self.isProcessing = false;
			self.log = [];

			return self;
		});
})(window.AngularHelper);