window.Base64Encoder = function () {
	var self = {};
	var encodedImage;


	self.init = function (target) {
		if (window.File && window.FileReader && window.FileList && window.Blob) {
			document.getElementById(target).addEventListener('change', self.handleFileSelect, false);
		} else {
			alert('The File APIs are not fully supported in this browser.');
		}
	};


	self.handleFileSelect = function (evt) {
		var files = evt.target.files;
		var file = files[0];

		if (files && file) {
			var reader = new FileReader();

			reader.onload = function (readerEvt) {
				var binaryString = readerEvt.target.result;
				var encodedString = btoa(binaryString);

				_setEncodedImage(file.name, encodedString);

				if(typeof onImageSelect == 'function') {
					onImageSelect(file.name, encodedString);
				}
			};

			reader.readAsBinaryString(file);
		}
	};

	self.getEncodedImage = function () {
		return encodedImage;
	};

	function _setEncodedImage(filename, base64string) {
		encodedImage = {
			filename: filename,
			encoded_image: base64string
		};
	};

	return self;
};