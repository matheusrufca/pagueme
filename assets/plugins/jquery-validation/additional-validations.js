jQuery.validator.addMethod("phoneBR", function (value, element) {
	value = value.replace("(", "");
	value = value.replace(")", "");
	value = value.replace("-", "");
	value = value.replace("_", "");
	value = value.replace(".", "");
	value = value.replace(" ", "");

	return this.optional(element) || /[0-9]{10}/.test(value);
}, "Por favor, um telefone válido");