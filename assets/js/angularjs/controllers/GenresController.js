function GenresController($rootScope, $scope, $timeout, $resource, $state, genresService, Genres, DTOptionsBuilder, DTColumnDefBuilder) {
	var self = {};

	$scope.genres = [];
	$scope.genre = {};

	self.init = function () {

		self.loadList();

		if ($state.params.entry_id) {
			self.getDetail($state.params.entry_id);
		}
	};

	$scope.$watch('$state.params.entry_id', function (newValue, oldValue) {
		if (newValue == oldValue) {
			$scope.genre = {};
		} else if (newValue) {
			self.getDetail(newValue);
		} else {
			$scope.genre = {};
		}
	});


	self.loadList = function () {
		function callback(response) {
			var result = response.data;
			$scope.genres = angular.copy(result.data || []);
		};

		function fallback(response) {
			console.debug(JSON.stringify(response));
		};

		genresService.getList(callback, fallback);
		//$scope.genres = Genres.query();

	};



	self.getDetail = function (item_id) {
		function callback(response) {
			var result = response.data;
			$scope.genre = angular.copy(result.data || {});
		};

		function fallback(response) {
			console.debug(JSON.stringify(response));
		};

		genresService.get(item_id, callback, fallback);
	};

	$scope.goToDetail = function (item_id) {
		if ($state.params.entry_id == item_id) {
			$state.go('management.genres');
		} else {
			$state.go('management.genres.detail', { entry_id: item_id });
		}
	};

	$scope.save = function (item) {
		function callback(response) {
			$scope.genre = {};
			self.loadList();
		};

		function fallback(response) {
			console.debug(JSON.stringify(response));
		};

		genresService.upsert(item, callback, fallback);
	};

	$scope.delete = function (item) {
		function callback(response) {
			self.loadList();
		};

		function fallback(response) {
			console.debug(JSON.stringify(response));
		};

		genresService.delete(item.id, callback, fallback);
	};

	self.init();



	$scope.styles = [];
	$scope.createNewStyle = function (newTag) {
		var item = {
			id: undefined,
			name: newTag
		};

		return item;
	};


	$scope.funcAsync = function () {
		var genreId;

		genreId = $scope.genre.id;

		function callback(response) {
			var result = response.data;
			$scope.styles = angular.copy(result.data || []);
		};

		function fallback(response) { };

		if (genreId) {
			genresService.getStyles(genreId).then(callback, fallback);
		} else {
			$scope.styles = [];
		}
	};


	$scope.persons = [];
	$scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(2);
	$scope.dtColumnDefs = [
	    DTColumnDefBuilder.newColumnDef(0),
	    DTColumnDefBuilder.newColumnDef(1).notVisible(),
	    DTColumnDefBuilder.newColumnDef(2).notSortable()
	];
	$resource('https://l-lin.github.io/angular-datatables/data.json').query().$promise.then(function (persons) {
		$scope.persons = persons;
	});

};


