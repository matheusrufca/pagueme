// trigger events when scroll is at top or bottom

(function ($, AngularHelper) {
	if (!$) {
		console.error("Can't load 'nb-infinite-scroll: jQuery not loaded");
		return;
	}


	AngularHelper.findOrCreateModule('nubo.infinite-scroll', []);

	angular
		.module('nubo.infinite-scroll')
		.directive('infiniteScroll', function () {
			return {
				link: function ($scope, element, attrs) {
					var self, $scrollContainer, _setEventData, _handleScrollEvent;

					self = {};
					self.page = 1;
					self.eventData = null;

					_setEventData = function (page, scrollPosition, scrollHeight) {
						self.eventData = {
							'page': page,
							'scroll_position': scrollPosition,
							'scroll_height': scrollHeight
						};
					};

					_handleScrollEvent = function (event) {
						var scroll_element, scrollPosition, containerHeight, containerOffset;


						scroll_element = $scrollContainer[0];
						scrollPosition = scroll_element.scrollTop;

						containerHeight = scroll_element.scrollHeight; // container height
						containerOffset = scroll_element.offsetHeight; // scroller height

						if (scrollPosition == 0) {
							_setEventData(self.page, scrollPosition, containerOffset);
							$scope.$emit('infinite-scroll:top', self.eventData);
						} else if (scrollPosition == (containerHeight - containerOffset)) {
							self.page++;
							_setEventData(self.page, scrollPosition, containerOffset);
							$scope.$emit('infinite-scroll:bottom', self.eventData);
						}
					};

					$scrollContainer = $(element).closest('.scrolling');

					if ($scrollContainer.length) {
						$scrollContainer.bind('scroll', _handleScrollEvent);
					}
				}
			}
		});
})(window.jQuery, AngularHelper);


