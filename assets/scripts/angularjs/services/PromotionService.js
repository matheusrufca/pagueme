AngularModule.service( 'PromotionService', [ '$q', 'Promotion', 'PromotionApi',
	function( $q, Promotion, PromotionApi ) {

	var _this = this;

	return({
		loadItemPromotions: loadItemPromotions,
		getPromotionRules: getPromotionRules		
	});

	var promotions;
	var promotionRules;

	function setPromotions ( promotions ) {

		_this.promotions = [];

		promotions.forEach( function( promotionIterated, indexIterated ) {
			_this.promotions[ indexIterated ] = new Promotion( promotionIterated );
		});
	}

	function getPromotions () {

		return _this.promotions;
	}

	function getPromotionRules () {

		return _this.promotionRules;
	}

	function loadItemPromotions ( item ) {

		var deferred = $q.defer();
		var promise = deferred.promise;

		promise
		.then( function() {
			return loadPromotions();
		})
		.then( function() {
			return linkPromotionsToItem( item );
		});
	 
		deferred.resolve();
	}

	function loadPromotions () {

		return PromotionApi.listPromotions()
		.then( function( response ) {
			setPromotions( response.data );
		});
	}

	function linkPromotionsToItem ( item ) {

		_this.promotionRules = [];

		if ( _this.promotions ) {

			_this.promotions.reduce( function( promise, promotion ) {
				return readPromotion( promotion )
				.then( function( response ) {
					linkPromotionRulesToItem( response.data, item );
				});
			}, $q.when( true ) );
		}
	}

	function readPromotion ( promotion ) {

		if ( promotion !== undefined ) {

			var data = {
				promotion_id: promotion.id,
			};
			return PromotionApi.readPromotion( data );
		}
	}
	
	function linkPromotionRulesToItem ( promotion, item ) {

		if ( promotion.rules !== undefined ) {

			promotion.rules.forEach( function( ruleIterated ) {
				computePromotionRule( promotion, ruleIterated, item );
			});
		}		
	}

	function computePromotionRule ( promotion, rule, item ) {

		if ( item !== undefined ) {
			
			var promotionRule = {};

			if ( item.code === rule.code ) {
				promotionRule.price = ( item.base_price / 100 ) * ( 100 - rule.discount );
				promotionRule.description = promotion.description;
				_this.promotionRules.push( promotionRule );
			}
		}
	}

}]);
