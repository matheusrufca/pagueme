AngularModule.service('ComponentService', ['$location',
	function ($location) {

		var _this = this;

		return ({
			setModals: setModals,
			getModals: getModals,
			setFilters: setFilters,
			getFilters: getFilters,
			getFilter: getFilter,
			toggleModal: toggleModal,
			openModal: openModal,
			closeModal: closeModal,
			changeFilter: changeFilter,
			isFilterActive: isFilterActive,
			isFilterUndefined: isFilterUndefined,
			setPath: setPath,
			getPath: getPath,
			isCompletePathActive: isCompletePathActive,
			isPrincipalPathActive: isPrincipalPathActive
		});

		var modals;
		var filters;

		function setModals(modals) {

			_this.modals = modals;
		}

		function getModals() {

			return _this.modals;
		}

		function setFilters(filters) {

			_this.filters = filters;
		}

		function getFilters() {

			return _this.filters;
		}

		function getFilter(filter) {

			return _this.filters[filter];
		}

		function toggleModal(modal) {

			if (typeof modal === 'string') {

				modal = getModalElement(modal);

				if (isModalOpened(modal)) {
					hideModal(modal);
					return false;
				} else {
					showModal(modal);
					return true;
				}
			}
		}

		function openModal(modal) {

			if (typeof modal === 'string') {

				modal = getModalElement(modal);

				if (!isModalOpened(modal)) {
					showModal(modal);
				}
			}
		}

		function closeModal(modal) {

			if (typeof modal === 'string') {

				modal = getModalElement(modal);

				if (isModalOpened(modal)) {
					hideModal(modal);
				}
			}
		}

		function getModalElement(modal) {

			return '#' + modal;
		}

		function hideModal(modal) {

			$(modal).modal('hide');
		}

		function showModal(modal) {

			$(modal).modal('show');
		}

		function isModalOpened(modal) {

			if ($(modal).hasClass('in')) {
				return true;
			}
			return false;
		}

		function changeFilter(filter, selected) {

			if (_this.filters[filter] === selected) {
				_this.filters[filter] = undefined;
			} else {
				_this.filters[filter] = selected;
			}
		}

		function isFilterActive(filter, selected) {

			if (filter) {
				if (_this.filters[filter] === selected) {
					return true;
				}
				return false;
			}
		};

		function isFilterUndefined(filter) {

			if (filter) {
				if (_this.filters[filter] === undefined) {
					return true;
				}
				return false;
			}
		};

		function setPath(modal) {

			if (typeof modal === 'string') {

				if (_this.modals[modal] === undefined) {
					return;
				}

				$location.path(_this.modals[modal]);
			}
		}

		function getPath() {

			return $location.path();
		}

		function isCompletePathActive(completePath) {

			var completePathActive = $location.path();

			if (completePathActive === completePath) {
				return true;
			}
			return false;
		};

		function isPrincipalPathActive(principalPath) {

			var principalPathActive = $location.path().substr(0, $location.path().lastIndexOf('/'));

			if (principalPathActive === principalPath) {
				return true;
			}
			return false;
		};

	}]);
