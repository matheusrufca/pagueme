(function ($) {
	/* habilita um input */
	$.prototype.enable = function () {
		$.each(this, function (index, el) {
			$(el).removeAttr('disabled');
		});
	};

	/* desabilita um input */
	$.prototype.disable = function () {
		$.each(this, function (index, el) {
			$(el).attr('disabled', 'disabled');
		});
	};

	/* check um campo checkbox */
	$.prototype.check = function (bool) {
		$.each(this, function (index, element) {
			if ($(element).is(':checkbox')) {
				element.check = Boolean(bool);
			}
		});
	};

	/* retorna se um campo checkbox está checked */
	$.prototype.isChecked = function () {
		return $(this).is(':checked');
	};
})(window.jQuery);