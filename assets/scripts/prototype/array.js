Array.prototype.first = function () {
    return this[0];
};

Array.prototype.search = function (value, key) {
	for (var i = 0; i < this.length; i++) {
		if (this[i][value] === key) {
			return this[i];
		}
	}
};