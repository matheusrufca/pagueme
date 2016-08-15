//Helper para funções de manipulação de formulários
window.AngularHelper = (function () {
	var self = {};

	self.findOrCreateModule = function (moduleName, deps) {
		deps = deps || [];
		try {
			angular.module(moduleName);
		} catch (error) {
			angular.module(moduleName, deps);
		}
	};

	self.offListener = function (name, listener) {
	    var namedListeners = this.$$listeners[name];
	    if (namedListeners) {
	        // Loop through the array of named listeners and remove them from the array.
	        for (var i = 0; i < namedListeners.length; i++) {
		        if(listener === null) {
			        namedListeners = [];
			        break;
		        } else if (namedListeners[i] === listener) {
			        namedListeners = namedListeners.splice(i, 1);
			        break;
	            }
	        }
		    this.$$listeners[name] = namedListeners;
	    }
	};


	function init() {
		try {
			if (!angular) { throw 'Cant load AngularHelper: angular is not defined'; }
		} catch (err) { throw 'Cant load AngularHelper: angular is not defined'; }
	};

	init();

	return self;
})();