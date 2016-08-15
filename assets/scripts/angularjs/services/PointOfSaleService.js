AngularModule.service( 'PointOfSaleService', [ '$q', 'Sale', 'SaleSession', 'PointOfSale', 'Payment', 
	'PaymentMethod', 'PointOfSaleApi', 'PaymentApi', 'NotificationService', 'WebStorageService',
	function( $q, Sale, SaleSession, PointOfSale, Payment, PaymentMethod,
		PointOfSaleApi, PaymentApi, NotificationService, WebStorageService ) {

	return({
		setSaleSession: setSaleSession,
		getSaleSession: getSaleSession,
		loadSaleSession: loadSaleSession,
		addItem: addItem,
		updateItem: updateItem,
		removeItem: removeItem,
		cancelSale: cancelSale,
		orderSale: orderSale,
		addSalePayment: addSalePayment,
		increaseItemQuantity: increaseItemQuantity,
		decreaseItemQuantity: decreaseItemQuantity,
		listSales: listSales,
		getSales: getSales,
		cancelSaleCoupon: cancelSaleCoupon,
		printSaleCoupon: printSaleCoupon,
		setPointsOfSale: setPointsOfSale,
		getPointsOfSale: getPointsOfSale,
		listPointsOfSale: listPointsOfSale,		
		setPointOfSale: setPointOfSale,
		getPointOfSale: getPointOfSale,
		leasePointOfSale: leasePointOfSale,
		releasePointOfSale: releasePointOfSale,
		loadLocalPointOfSale: loadLocalPointOfSale,
		getPaymentMethods: getPaymentMethods,
		listPaymentMethods: listPaymentMethods,
		isPossibleDecreaseItemQuantity: isPossibleDecreaseItemQuantity,
		isSaleEmpty: isSaleEmpty,
		isSetLocalPointOfSale: isSetLocalPointOfSale
	});

	var saleSession = {};
	var pointsOfSale = [];
	var pointOfSale = {};
	var paymentMethods = {};
	var payment = {};
	var sales = [];
	var sale = {};

	function setSaleSession ( data ) {

		saleSession = new SaleSession( data );
	}

	function getSaleSession () {

		return saleSession;
	}

	function setPointsOfSale ( data ) {

		pointsOfSale = [];

		data.forEach( function( posIterated, indexIterated ) {
			pointsOfSale[ indexIterated ] = new PointOfSale( posIterated );
		});
	}

	function getPointsOfSale () {

		return pointsOfSale;
	}

	function setPointOfSale ( data ) {

		pointOfSale = new PointOfSale( data );
	}

	function getPointOfSale () {

		return pointOfSale;
	}

	function setPaymentMethods ( data ) {

		paymentMethods = [];

		data.forEach( function( paymentMethodIterated, indexIterated ) {
			paymentMethods[ indexIterated ] = new PaymentMethod( paymentMethodIterated );
		});
	}

	function getPaymentMethods () {

		return paymentMethods;
	}

	function setSales ( data ) {

		sales = [];

		data.forEach( function( saleIterated, indexIterated ) {
			sales[ indexIterated ] = new Sale( saleIterated );
		});
	}

	function getSales () {

		return sales;
	}

	function loadLocalPointOfSale () {

		setPointOfSale( WebStorageService.getLocalStorageItem( 'pointOfSale' ) );
	}

	function listPointsOfSale () {

		return PointOfSaleApi.listPointsOfSale()
		.then( function( response ) {
			setPointsOfSale( response.data );
			NotificationService.notifyResponse( response.status, response.message, false, true );
		}, function( error ) {
			NotificationService.notifyError( error );
		});
	}

	function leasePointOfSale ( pos ) {

		if ( WebStorageService.isSetLocalStorageItem( 'pointOfSale' ) ) {
			WebStorageService.getLocalStorageItem( 'pointOfSale' );
		} else {

			var data = {
				id: pos.pos_id
			};

			PointOfSaleApi.leasePointOfSale( data )
			.then( function( response ) {
				setPointOfSale( response.data );
				WebStorageService.setLocalStorageItem( 'pointOfSale', pointOfSale );
				NotificationService.notifyResponse( response.status, response.message, false, true );
			}, function( error ) {
				NotificationService.notifyError( error );
			});
		}		
	}

	function releasePointOfSale ( pos ) {

		if ( WebStorageService.isSetLocalStorageItem( 'pointOfSale' ) ) {

			var data = {
				id: pos.pos_id
			};

			PointOfSaleApi.releasePointOfSale( data )
			.then( function( response ) {
				setPointOfSale( new PointOfSale() );
				//WebStorageService.removeLocalStorageItem( 'pointOfSale' );
				NotificationService.notifyResponse( response.status, response.message, false, true );
			}, function( error ) {
				NotificationService.notifyError( error );
			});
		}		
	}

	function loadSaleSession ( pointOfSale ) {

		return PointOfSaleApi.readPointOfSale( pointOfSale.pos_id )
		.then( function( response ) {
			setSaleSession( response.data.sale_session );
			NotificationService.notifyResponse( response.status, response.message, false, true );
		}, function( error ) {
			NotificationService.notifyError( error );
		});
	}

	function addItem ( item, pointOfSale ) {

		var deferred = $q.defer();
		var promise = deferred.promise;

		promise
		.then( function() {
			return loadSaleSession( pointOfSale );
		})
		.then( function() {
			return createSaleSession( pointOfSale );
		})
		.then( function() {
			return loadSaleSession( pointOfSale );
		})
		.then( function() {
			return addSaleSessionItem( item, pointOfSale );
		})
		.then( function() {
			return loadSaleSession( pointOfSale );
		});
	 
		deferred.resolve();
	}

	function addSaleSessionItem ( item, pointOfSale ) {

		if ( isSaleSessionCreated() ) {

			if ( isItemAdded( item ) ) {
				return $q.reject();	
			} else {
				
				var data = {
					pos_id: pointOfSale.pos_id,
					session_id: saleSession.session_id,
					code: item.code,
					quantity: item.quantity,
					discount: item.discount
				};

				return PointOfSaleApi.addSaleSessionItem( data )
				.then( function( response ) {
					NotificationService.notifyResponse( response.status, response.message, true, true );
				}, function( error ) {
					NotificationService.notifyError( error );
				});
			}
		}
	}

	function updateItem ( item, pointOfSale ) {

		var deferred = $q.defer();
		var promise = deferred.promise;

		promise
		.then( function() {
			return loadSaleSession( pointOfSale );
		})
		.then( function() {
			return createSaleSession( pointOfSale );
		})
		.then( function() {
			return updateSaleSessionItem( item, pointOfSale );
		})
		.then( function() {
			return loadSaleSession( pointOfSale );
		});
	 
		deferred.resolve();
	}

	function updateSaleSessionItem ( item, pointOfSale ) {

		if ( isSaleSessionCreated() ) {

			if ( ! isItemAdded( item ) ) {
				return $q.reject();	
			} else {
				
				var data = {
					pos_id: pointOfSale.pos_id,
					session_id: saleSession.session_id,
					item_id: item.item_id,
					quantity: item.quantity,
					discount: item.discount
				};

				return PointOfSaleApi.updateSaleSessionItem( data )
				.then( function( response ) {
					NotificationService.notifyResponse( response.status, response.message, true, true );
				}, function( error ) {
					NotificationService.notifyError( error );
				});
			}
		}
	}

	function removeItem ( item, pointOfSale ) {

		var deferred = $q.defer();
		var promise = deferred.promise;

		promise
		.then( function() {
			return loadSaleSession( pointOfSale );
		})
		.then( function() {
			return createSaleSession( pointOfSale );
		})
		.then( function() {
			return removeSaleSessionItem( item, pointOfSale );
		})
		.then( function() {
			return loadSaleSession( pointOfSale );
		});
	 
		deferred.resolve();
	}

	function removeSaleSessionItem ( item, pointOfSale ) {

		if ( isSaleSessionCreated() ) {

			if ( ! isItemAdded( item ) ) {
				return $q.reject();
			} else {
				
				var data = {
					pos_id: pointOfSale.pos_id,
					session_id: saleSession.session_id,
					item_id: item.item_id,
					code: item.code,
					quantity: item.quantity
				};

				return PointOfSaleApi.removeSaleSessionItem( data )
				.then( function( response ) {
					NotificationService.notifyResponse( response.status, response.message, true, true );
				}, function( error ) {
					NotificationService.notifyError( error );
				});
			}
		}
	}

	function createSaleSession ( pointOfSale ) {
		
		if ( ! isSaleSessionCreated() ) {

			var data = {
				pos_id: pointOfSale.pos_id
			};

			return PointOfSaleApi.createSaleSession( data )
			.then( function( response ) {
				setSaleSession( response.data );
				NotificationService.notifyResponse( response.status, response.message, true, true );
			}, function( error ) {
				NotificationService.notifyError( error );
			});
		}
	}

	function cancelSale ( pointOfSale ) {

		var deferred = $q.defer();
		var promise = deferred.promise;

		promise
		.then( function() {
			return cancelSaleSession( pointOfSale );
		})
		.then( function() {
			return loadSaleSession( pointOfSale );
		});
	 
		deferred.resolve();
	}

	function cancelSaleSession ( pointOfSale ) {
		
		if ( isSaleSessionCreated() ) {

			var data = {
				pos_id: pointOfSale.pos_id,
				session_id: saleSession.session_id
			};

			return PointOfSaleApi.cancelSaleSession( data )
			.then( function( response ) {
				NotificationService.notifyResponse( response.status, response.message, true, true );
			}, function( error ) {
				NotificationService.notifyError( error );
			});
		}
	}

	function orderSale ( payment, pointOfSale ) {

		var deferred = $q.defer();
		var promise = deferred.promise;

		promise
		.then( function() {
			return loadSaleSession( pointOfSale );
		})
		.then( function() {
			return orderSaleSession( pointOfSale );
		})
		.then( function() {
			return addSaleSessionPayment( payment, pointOfSale );
		})
		.then( function() {
			return finishSaleSession( pointOfSale );
		})
		.then( function() {
			return loadSaleSession( pointOfSale );
		});
	 
		deferred.resolve();
	}

	function addSalePayment ( payment, pointOfSale ) {

		var deferred = $q.defer();
		var promise = deferred.promise;

		promise
		.then( function() {
			return loadSaleSession( pointOfSale );
		})
		.then( function() {
			return addSaleSessionPayment( payment, pointOfSale );
		})
		.then( function() {
			return loadSaleSession( pointOfSale );
		});
	 
		deferred.resolve();
	}

	function addSaleSessionPayment ( payment, pointOfSale ) {

		if ( isSaleSessionCreated() ) {

			var data = {
				pos_id: pointOfSale.pos_id,
				session_id: saleSession.session_id,
				value: payment.value,
				method_id: payment.method_id
			};

			return PointOfSaleApi.addSaleSessionPayment( data )
			.then( function( response ) {
				NotificationService.notifyResponse( response.status, response.message, true, true );
			}, function( error ) {
				NotificationService.notifyError( error );
			});
		}
	}

	function orderSaleSession ( pointOfSale ) {
		
		if ( isSaleSessionCreated() ) {

			var data = {
				pos_id: pointOfSale.pos_id,
				session_id: saleSession.session_id
			};

			return PointOfSaleApi.orderSaleSession( data )
			.then( function( response ) {
				NotificationService.notifyResponse( response.status, response.message, false, true );
			}, function( error ) {
				NotificationService.notifyError( error );
			});
		}
	}

	function finishSaleSession ( pointOfSale ) {
		
		if ( isSaleSessionCreated() ) {

			var data = {
				pos_id: pointOfSale.pos_id,
				session_id: saleSession.session_id
			};

			return PointOfSaleApi.finishSaleSession( data )
			.then( function( response ) {
				NotificationService.notifyResponse( response.status, response.message, true, true );
			}, function( error ) {
				NotificationService.notifyError( error );
			});
		}
	}

	function listSales ( pointOfSale ) {

		if ( pointOfSale ) {

			return PointOfSaleApi.listSales( pointOfSale.pos_id )
			.then( function( response ) {
				setSales( response.data );
				NotificationService.notifyResponse( response.status, response.message, false, true );
			}, function( error ) {
				NotificationService.notifyError( error );
			});
		}
	}

	function cancelSaleCoupon ( sale ) {

		if ( sale ) {

			return PointOfSaleApi.cancelSaleCoupon( sale.sale_id )
			.then( function( response ) {
				NotificationService.notifyResponse( response.status, response.message, true, true );
			}, function( error ) {
				NotificationService.notifyError( error );
			});
		}
	}

	function printSaleCoupon ( sale ) {

		if ( sale ) {
			
			var data = {
				sale_id: sale.sale_id,
				operation: sale.coupon_status
			};

			return PointOfSaleApi.printSaleCoupon( data )
			.then( function( response ) {
				NotificationService.notifyResponse( response.status, response.message, true, true );
			}, function( error ) {
				NotificationService.notifyError( error );
			});
		}
	}

	function listPaymentMethods () {

		return PaymentApi.listMethods()
		.then( function( response ) {
			setPaymentMethods( response.data );
			NotificationService.notifyResponse( response.status, response.message, false, true );
		}, function( error ) {
			NotificationService.notifyError( error );
		});
	}

	function increaseItemQuantity ( item ) {

		if ( item ) {
			if ( item.quantity === undefined ) {
				item.quantity = 1;
			} else {
				item.quantity++;
			}
		}
		return item;
	}

	function decreaseItemQuantity ( item ) {

		if ( item ) {
			if ( item.quantity > 1 ) {
				item.quantity--;
			} 
		}
		return item;
	}

	function filterItemByCode ( item ) {

		return Enumerable
		.From( saleSession.sale_items )
		.Where( function ( i ) { 
			return i.code === item.code;
		})
		.Select( function ( i ) { 
			return i; 
		})
		.FirstOrDefault();
	}

	function isSaleSessionCreated () {

		if ( saleSession !== null ) {
			if ( saleSession.session_id !== undefined ) {
				return true;
			}
		}		
		return false;
	}

	function isItemAdded ( item ) {

		if ( filterItemByCode( item ) !== undefined ) {
			return true;
		}
		return false;
	}

	function isPossibleDecreaseItemQuantity ( item ) {

		if ( item ) {
			if ( item.quantity > 1 ) {
				return true;
			} 
		}
		return false;
	}

	function isSaleEmpty () {

		if ( saleSession ) {
			if ( saleSession.sale_items === undefined || 
				saleSession.sale_items === null) {
				return true;
			} 
		}
		return false;
	}

	function isSetLocalPointOfSale () {

		if ( WebStorageService.isSetLocalStorageItem( 'pointOfSale' ) ) {
			return true;			
		}
		return false;
	}

}]);
