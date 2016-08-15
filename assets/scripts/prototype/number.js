Number.prototype.formatMoney = function (c, d, t) {
	var n = this,
	c = isNaN(c = Math.abs(c)) ? 2 : c, // numero de casas apos a virgula
	d = d == undefined ? "," : d, // simbolo da virigula dos centavos
	t = t == undefined ? "" : t, // simbolo do milhar
	s = n < 0 ? "-" : "",
	i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
	j = (j = i.length) > 3 ? j % 3 : 0;
	return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};
