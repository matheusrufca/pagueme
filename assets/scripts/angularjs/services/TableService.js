AngularModule.service( 'TableService', [ '$q', '$filter', 'Table', 'Order', 'SaleSession', 'TableApi', 'NotificationService',
	function( $q, $filter, Table, Order, SaleSession, TableApi, NotificationService ) {

	var _this = this;

	return({
		setTables: setTables,
		getTables: getTables,
		setTable: setTable,
		getTable: getTable,
		setOrder: setOrder,
		getOrder: getOrder,
		setSaleSession: setSaleSession,
		getSaleSession: getSaleSession,
		listTables: listTables,
		loadTable: loadTable,
		setCounters: setCounters,
		getCounters: getCounters,
		loadOrder: loadOrder,
		createOrder: createOrder,
		cancelOrder: cancelOrder,
		acceptOrder: acceptOrder,
		closeOrder: closeOrder,
		addOrderItems: addOrderItems,
		removeOrderItems: removeOrderItems,
		checkoutOrder: checkoutOrder,
		addOrderPayment: addOrderPayment,
		cancelOrderPayment: cancelOrderPayment,
		finishOrder: finishOrder
	});
	
	var tables;
	var counters;
	var table;
	var order;
	var saleSession;

	function setTables ( data ) {

		_this.tables = [];

		data.forEach( function( elementIterated, indexIterated ) {
			_this.tables[ indexIterated ] = new Table( elementIterated );
		});
	}

	function getTables () {

		return _this.tables;
	}

	function setTable ( data ) {

		_this.table = new Table( data );
	}

	function getTable () {

		return _this.table;
	}

	function setOrder ( data ) {

		_this.order = new Order( data );
	}

	function getOrder () {
	
		return _this.order;
	}

	function setCounters () {

		if ( _this.tables === undefined ) {
			return;
		}

		_this.counters = {};

		_this.tables.map( function ( table ) { 

			var data = {
				status: table.status,
				translation: table.translation,
				class: table.class
			};
			
			if ( table.status in _this.counters ) {
				data.counter = _this.counters[ table.status ].counter + 1;
			} else {
				data.counter = 1;
			} 

			_this.counters[ table.status ] = data;
		});
	}

	function getCounters () {

		return _this.counters;
	}

	function setSaleSession ( data ) {

		saleSession = new SaleSession( data );
	}

	function getSaleSession () {

		return saleSession;
	}

	function listTables() {

		return TableApi.listTables()
		.then( function( response ) {
			setTables( response.data );
			setCounters();
			NotificationService.notifyResponse( response.status, response.message, false, true );
		}, function( error ) {
			NotificationService.notifyError( error );
		});
	}

	function loadTable ( table ) {

		var data = {
			table: table.table_number
		};

		return TableApi.loadTable( data )
		.then( function( response ) {
			setTable( response.data );
			NotificationService.notifyResponse( response.status, response.message, false, true );
		}, function( error ) {
			NotificationService.notifyError( error );
		});
	}

	function loadOrder ( order ) {

		var data = {
			order_number: order.order_number
		};

		return TableApi.loadOrder( data )
		.then( function( response ) {
			setOrder( response.data );
			NotificationService.notifyResponse( response.status, response.message, false, true );
		}, function( error ) {
			NotificationService.notifyError( error );
		});
	}

	function createOrder ( table ) {

		if ( ! table.isStatus( 'ORDER_CREATED' ) ) {
			
			var data = {
				table: table.table_number,
				label: table.num_orders,
				discount: 0,
				items: []
			};

			return TableApi.createOrder( data )
			.then( function( response ) {
				setOrder( response.data );
				NotificationService.notifyResponse( response.status, response.message, false, true );
			}, function( error ) {
				NotificationService.notifyError( error );
			});
		}
	}

	function cancelOrder ( table, order ) {

		var data = {
			table: table.table_number,
			order_number: order.order_number,
			token: order.token,
			pin: ''
		};

		return TableApi.cancelOrder( data )
		.then( function( response ) {
			setOrder( response.data );
			NotificationService.notifyResponse( response.status, response.message, false, true );
		}, function( error ) {
			NotificationService.notifyError( error );
		});
	}

	function acceptOrder ( table, order ) {

		var data = {
			table: table.table_number,
			order_number: order.order_number,
			token: order.token
		};

		return TableApi.acceptOrder( data )
		.then( function( response ) {
			setOrder( response.data );
			NotificationService.notifyResponse( response.status, response.message, false, true );
		}, function( error ) {
			NotificationService.notifyError( error );
		});
	}

	function closeOrder ( table, order ) {

		var data = {
			table: table.table_number,
			order_number: order.order_number,
			token: order.token
		};

		return TableApi.closeOrder( data )
		.then( function( response ) {
			setOrder( response.data );
			NotificationService.notifyResponse( response.status, response.message, false, true );
		}, function( error ) {
			NotificationService.notifyError( error );
		});
	}

	function addOrderItems ( table, order, item ) {

		var item = {
			code: item.code,
			comments: item.comments,
			discount: item.discount,
			quantity: item.quantity
		}

		var data = {
			table: table.table_number,
			order_number: order.order_number,
			token: order.token,
			items: [ item ]
		};

		return TableApi.addOrderItems( data )
		.then( function( response ) {
			setOrder( response.data );
			NotificationService.notifyResponse( response.status, response.message, false, true );
		}, function( error ) {
			NotificationService.notifyError( error );
		});
	}

	function removeOrderItems ( table, order, item ) {

		var item = {
			item_id: item.item_id
		}

		var data = {
			table: table.table_number,
			order_number: order.order_number,
			token: order.token,
			waiter_id: order.waiter_id,
			pin: '',
			items: [ item ]
		};

		return TableApi.removeOrderItems( data )
		.then( function( response ) {
			setOrder( response.data );
			NotificationService.notifyResponse( response.status, response.message, false, true );
		}, function( error ) {
			NotificationService.notifyError( error );
		});
	}

	function checkoutOrder ( order, pointOfSale ) {

		var data = {
			order_number: order.order_number,
			pos_id: pointOfSale.pos_id,
			pos_token: pointOfSale.pos_token
		};

		return TableApi.checkoutOrder( data )
		.then( function( response ) {
			setOrder( response.data.order );
			setSaleSession( response.data.sale_session );
			NotificationService.notifyResponse( response.status, response.message, false, true );
		}, function( error ) {
			NotificationService.notifyError( error );
		});
	}

	function addOrderPayment ( order, payment, pointOfSale ) {

		var data = {
			order_number: order.order_number,
			value: payment.value,
			method_id: payment.method_id,
			pos_token: pointOfSale.pos_token
		};

		return TableApi.addOrderPayment( data )
		.then( function( response ) {
			saleSession.payment = response.data;
			NotificationService.notifyResponse( response.status, response.message, false, true );
		}, function( error ) {
			NotificationService.notifyError( error );
		});
	}

	function cancelOrderPayment ( order, payment, pointOfSale ) {

		var data = {
			order_number: order.order_number,
			payment_id: payment.payment_id,
			value: payment.value,
			method_id: payment.method_id,
			pos_token: pointOfSale.pos_token
		};

		return TableApi.cancelOrderPayment( data )
		.then( function( response ) {
			saleSession.payment = response.data;
			NotificationService.notifyResponse( response.status, response.message, false, true );
		}, function( error ) {
			NotificationService.notifyError( error );
		});
	}

	function finishOrder ( order, pointOfSale ) {

		var data = {
			order_number: order.order_number,
			pos_token: pointOfSale.pos_token
		};

		return TableApi.finishOrder( data )
		.then( function( response ) {
			setOrder( response.data.order );
			setSaleSession( response.data.sale_session );
			NotificationService.notifyResponse( response.status, response.message, false, true );
		}, function( error ) {
			NotificationService.notifyError( error );
		});
	}

}]);
