	function load_permissions(page) {
		loadSystemLicense(page);
	}
    
    
    function load_menu(){
        loadWizardStatus();
        
        $(".page-sidebar").load("menu-template.html", function(){
            var fileName = window.location.pathname.split("/").reverse()[0];
            var target = $(".page-sidebar").find('#menu_panel a[href*="'+fileName+'"], .sub-menu a[href*="'+fileName+'"]');
            target.parents("#menu_panel").addClass("active");
            target.parents("li.hide").addClass("active open");
            target.parents("li.hide").parent().parent().addClass("active open");
            target.parents("li.hide").parent().parent().find(".arrow").addClass("open");
            load_permissions("admin");
        });
    }

	function load_modules(page, systemLicense) {
		var modules;
		var valid = systemLicense["valido"];

	    if ((valid == null || valid == false) && window.location.pathname != "/admin/licenca.html") {
			window.location.assign("/admin/licenca.html");
			return;
		}

		if (page == "panel") {
			modules = get_modules_list_panel(systemLicense)
		} else if (page == "admin") {
			modules = get_modules_list_admin(systemLicense)
		} else {
			return;	
		}

		for (var i = 0; i < modules.length; i++) {
			var module_id = modules[i];
			$("#" + module_id).removeClass("hide");
			//console.log(module_id);
		}
	};

	function get_modules_list_admin(systemLicense) {
		var plan = systemLicense["plano"];
	    
		var modules_basic = [
			"product_category",
			"product",
			"employee",
			"branch",
			"payment_method",
			"pos",
			"report_bestseller",
			"report_bestseller_category",
			"report_sale",
			"report_sale_bytime",
			"user",
			"network",
			"fiscal_printer",
			"nf_printer",
			"tef_device",
            "tax",
            "sat",
            "nfce",
            "sispro",
            "contingency",
            "menu_sat",
            "menu_nfce",
            "menu_sispro",
            "fiscal_documents",
            "software"
		];

		var modules_standard = [
			"menu_restaurante",
			"client",
			"employee_role",
			"production_location",
			"table",
			"table_area",
			"report_waiter",
			"report_order_cancelled",
			"report_discount_orders",
			"user_profile"
		];

		var modules = modules_basic;
		if (plan == "standard") {
			modules = modules.concat(modules_standard);
		}

		return modules;
	}

	function get_modules_list_panel(systemLicense) {
		var plan = systemLicense["plano"];
		//console.log("plan: " + plan);

		var modules_basic = [
			"till",
			"pos",
			"admin"
		];

		var modules_standard = [
			"table",
			"mlp",
            "waiter"
		];

		var modules = modules_basic;
		if (plan == "standard") {
			modules = modules.concat(modules_standard);
			//console.log("standard");
		}

		return modules;
	}

	/* carrega a licença do sistema */
	function loadSystemLicense(page) {
		if (page == "panel") {
			function callback_panel(response) {
				load_modules(page, response.data);
			};

			apiService.System.License.checkLicense(callback_panel, function (response) {
				callback_panel(response);
			});
		} else {
			var systemLicense = LocalStorageHelper.getLocalStorageItem('systemLicense');

			if (systemLicense) {
				load_modules(page, systemLicense);
			} else {
				function callback(response) {
					load_modules(page, response.data);
					if (response.data.valido == true) {
						LocalStorageHelper.cacheItem('systemLicense', response.data);
					}
				};

				apiService.System.License.checkLicense(callback, function (response) {
					callback(response);
				});
			}
		}
	};

	function get_vertical_market() {
		var systemLicense = LocalStorageHelper.getLocalStorageItem('systemLicense');
		if (systemLicense) {
			return systemLicense["vertical"];
		}
		return null;
	}

	function get_subscription_plan() {
		var systemLicense = LocalStorageHelper.getLocalStorageItem('systemLicense');
		if (systemLicense) {
			return systemLicense["plano"];
		}
		return null;
	}

    function loadWizardStatus(){
        var imported = document.createElement('script');
        imported.src = '/assets/js/wizard.js';
        document.head.appendChild(imported);
    }