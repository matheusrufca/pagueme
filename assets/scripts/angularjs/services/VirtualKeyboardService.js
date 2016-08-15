AngularModule.service( 'VirtualKeyboardService', [ '$filter', 
	function( $filter ) {

	return({		
		setKeyboard: setKeyboard,
		getKeyboard: getKeyboard,
		initKeyboard: initKeyboard,
		addDigit: addDigit,
		removeDigit: removeDigit,
		clearDisplay: clearDisplay,
		concludeOperation: concludeOperation,
		getResult: getResult,
		isAuthProgress: isAuthProgress,
		isKeyboardType: isKeyboardType
	});

	var keyboard;

	function getKeyboard () {

		return keyboard;
	}

	function setKeyboard ( data ) {

		keyboard = data;
	}

	function initKeyboard () {

		if ( keyboard === undefined ) {
			return;
		}

		switch ( keyboard.type ) {
			case "discount":
				initDiscountKeyboard();
				break;
			case "currency":
				initCurrencyKeyboard();
				break;
			case "amount":
				initAmountKeyboard();
				break;
			case "identity":
				initIdentityKeyboard();
				break;
			default:
				initCurrencyKeyboard();
		}
	}

	function initDiscountKeyboard () {

		var input = {
			label: 'Valor',
			simbol: 'R$',
			display: '0'
		};

		angular.extend( keyboard, input );

		var output = {
			outputLabel: 'Porcentagem',
			outputSimbol: '%',
			outputDisplay: '0'
		};

		angular.extend( keyboard, output );
	}

	function initCurrencyKeyboard () {

		var input = {
			label: 'Valor',
			simbol: 'R$',
			display: '0'
		};

		angular.extend( keyboard, input );
	}

	function initAmountKeyboard () {

		var input = {
			label: 'Quantidade',
			simbol: 'Un.',
			display: '0'
		};

		angular.extend( keyboard, input );
	}

	function initIdentityKeyboard () {

		var input = {
			label: 'CPF/CNPJ',
			simbol: '',
			display: '0'
		};

		angular.extend( keyboard, input );
	}

	function addDigit ( digit ) {

		if ( isDecimalLimitReached() ) {
			return;
		} else {
			addDigitToDisplay( digit );
		}

		updateOutput();
	}

	function addDigitToDisplay ( digit ) {

		if ( isDisplayCleared() ) {
			keyboard.display = digit;
		} else {
			keyboard.display += digit;
		}
	}

	function removeDigit () {

		if ( isDisplayCleared() ) {
			return;
		}

		if ( hasDisplayOneDigit() ) {
			clearDisplay();
		} else {
			removeDigitFromDisplay();
		}

		updateOutput();
	};

	function removeDigitFromDisplay () {

		keyboard.display = keyboard.display.slice( 0, -1 );

		if ( keyboard.display.endsWith( '.' ) ) {
			keyboard.display = keyboard.display.slice( 0, -1 );
		}
	}

	function clearDisplay () {

		if ( keyboard === undefined ) {
			keyboard = {};
		}

		keyboard.display  = '0';
		keyboard.outputDisplay = '0';
	}

	function updateOutput () {

		keyboard.outputDisplay = Math.floor( ( keyboard.display / keyboard.element ) * 100 );
	}

	function concludeOperation () {

		if ( keyboard.authProgress === false ) {
			keyboard.result = keyboard.display;
		}

		if ( keyboard.authRequired === 'true' ) {
			if ( keyboard.authProgress === true ) {
				if ( tryAuth() ) {
					toggleAuthProgress();
					initKeyboard();
					return true;
				}
			} else {
				toggleAuthProgress();
				keyboard.display = '';
			}
		} else {
			initKeyboard();
			return true;
		}
		return false;
	}

	function getResult () {

		switch ( keyboard.type ) {
			case "discount":
				return parseFloat( keyboard.result );
			case "currency":
				return parseFloat( keyboard.result );
			case "amount":
				return parseFloat( keyboard.result );
			case "identity":
				return keyboard.result.toString();
			default:
				return parseFloat( keyboard.result );
		}
	}

	function toggleAuthProgress () {

		if ( keyboard.authProgress ) {
			keyboard.authProgress = false;
		} else {
			keyboard.authProgress = true;
		}		
	}

	function tryAuth () {

		if ( keyboard.display === '111' ) {
			return true;
		}
		return false;
	}

	function isAuthProgress () {

		if ( keyboard ) {
			if ( keyboard.authProgress ) {
				return true;
			}
		}				
		return false
	}

	function isKeyboardType ( keyboardType ) {

		if ( isAuthProgress() ) {
			return false;
		}

		if ( keyboard ) {
			if ( keyboard.type === keyboardType ) {
				return true;
			}
		}		
		return false;
	}

	function isDisplayCleared () {

		if ( keyboard.display === '0' ) {
			return true;
		}
		return false;
	}

	function isDecimalLimitReached () {

		var decimal = keyboard.display.substr( keyboard.display.indexOf( '.' ) );

		if ( decimal.length >= 3 ) {
			return true;
		}
		return false;
	}

	function hasDisplayOneDigit () {

		if ( keyboard.display.length === 1 ) {
			return true;
		}
		return false;
	}

}]);
