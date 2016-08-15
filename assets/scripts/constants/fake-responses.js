var FakeResponses = {};


FakeResponses.category_list = {
	"status": 0,
	"data": [{
		"id": 1,
		"full_name": "Appetizers"
	}, {
		"id": 2,
		"full_name": "Appetizers:Appetizers"
	}, {
		"id": 3,
		"full_name": "Entrees"
	}, {
		"id": 7,
		"full_name": "Entrees:Pasta"
	}, {
		"id": 4,
		"full_name": "Entrees:Steaks"
	}, {
		"id": 5,
		"full_name": "Entrees:Ribs"
	}, {
		"id": 6,
		"full_name": "Entrees:Seafood"
	}, {
		"id": 8,
		"full_name": "Salads"
	}, {
		"id": 9,
		"full_name": "Salads:Salads"
	}, {
		"id": 10,
		"full_name": "Desserts"
	}, {
		"id": 11,
		"full_name": "Desserts:Desserts"
	}
	]
};

FakeResponses.category_list_full = {
	"status": 0,
	"data": [{
		"subcategories": [{
			"subcategories": [],
			"name": "Appetizers",
			"parent": {
				"id": 1,
				"name": "Appetizers"
			},
			"markup": "60.00",
			"tax": {
				"id": "",
				"name": ""
			},
			"full_name": "Appetizers:Appetizers",
			"id": 2
		}
		],
		"name": "Appetizers",
		"parent": {
			"id": 0,
			"name": ""
		},
		"markup": "50.00",
		"tax": {
			"id": "",
			"name": ""
		},
		"full_name": "Appetizers",
		"id": 1
	}, {
		"subcategories": [{
			"subcategories": [],
			"name": "Steaks",
			"parent": {
				"id": 3,
				"name": "Entrees"
			},
			"markup": "60.00",
			"tax": {
				"id": "",
				"name": ""
			},
			"full_name": "Entrees:Steaks",
			"id": 4
		}, {
			"subcategories": [],
			"name": "Ribs",
			"parent": {
				"id": 3,
				"name": "Entrees"
			},
			"markup": "60.00",
			"tax": {
				"id": "",
				"name": ""
			},
			"full_name": "Entrees:Ribs",
			"id": 5
		}, {
			"subcategories": [],
			"name": "Seafood",
			"parent": {
				"id": 3,
				"name": "Entrees"
			},
			"markup": "60.00",
			"tax": {
				"id": "",
				"name": ""
			},
			"full_name": "Entrees:Seafood",
			"id": 6
		}, {
			"subcategories": [],
			"name": "Pasta",
			"parent": {
				"id": 3,
				"name": "Entrees"
			},
			"markup": "60.00",
			"tax": {
				"id": "",
				"name": ""
			},
			"full_name": "Entrees:Pasta",
			"id": 7
		}
		],
		"name": "Entrees",
		"parent": {
			"id": 0,
			"name": ""
		},
		"markup": "50.00",
		"tax": {
			"id": "",
			"name": ""
		},
		"full_name": "Entrees",
		"id": 3
	}, {
		"subcategories": [{
			"subcategories": [],
			"name": "Salads",
			"parent": {
				"id": 8,
				"name": "Salads"
			},
			"markup": "60.00",
			"tax": {
				"id": "",
				"name": ""
			},
			"full_name": "Salads:Salads",
			"id": 9
		}
		],
		"name": "Salads",
		"parent": {
			"id": 0,
			"name": ""
		},
		"markup": "50.00",
		"tax": {
			"id": "",
			"name": ""
		},
		"full_name": "Salads",
		"id": 8
	}, {
		"subcategories": [{
			"subcategories": [],
			"name": "Desserts",
			"parent": {
				"id": 10,
				"name": "Desserts"
			},
			"markup": "60.00",
			"tax": {
				"id": "",
				"name": ""
			},
			"full_name": "Desserts:Desserts",
			"id": 11
		}
		],
		"name": "Desserts",
		"parent": {
			"id": 0,
			"name": ""
		},
		"markup": "50.00",
		"tax": {
			"id": "",
			"name": ""
		},
		"full_name": "Desserts",
		"id": 10
	}
	]
};

FakeResponses.product_list = [{
	status: "Disponível",
	code: "13",
	default_sale_cfop: "",
	price: 59.9,
	barcode: "3202402304203",
	max_discount: 0,
	id: "01c8916a-dd30-11e4-a573-0050562afd8c",
	unit: "",
	category: {
		id: 4,
		full_name: "Entrees:Steaks",
		name: "Steaks"
	},
	name: "Assado de Tiras",
	notes: "Assado de Tiras acompanhado de salada de entrada e batata crispy.",
	on_sale: {},
	commission: 25,
	stock: 49,
	markup: 299.3333333333333,
	base_price: 59.9
}, {
	status: "Disponível",
	code: "14",
	default_sale_cfop: "",
	price: 52.9,
	barcode: "50403324242342",
	max_discount: 0,
	id: "01c9cf76-dd30-11e4-b124-0050562afd8c",
	unit: "",
	category: {
		id: 5,
		full_name: "Entrees:Ribs",
		name: "Ribs"
	},
	name: "Baby Back Ribs",
	notes: "Suaves e suculentas costelas de porco temperadas e banhadas por nosso exclusivo molho barbecue, acompanhadas de fritas e uma saborosa espiga de milho cozida.",
	on_sale: {},
	commission: 25,
	stock: 49,
	markup: 252.66666666666666,
	base_price: 52.9
}, {
	status: "Disponível",
	code: "15",
	default_sale_cfop: "",
	price: 55.9,
	barcode: "23424523424568",
	max_discount: 0,
	id: "01caec1c-dd30-11e4-b821-0050562afd8c",
	unit: "",
	category: {
		id: 5,
		full_name: "Entrees:Ribs",
		name: "Ribs"
	},
	name: "Beef Ribs",
	notes: "Suaves e suculentas costelas bovinas temperadas e banhadas por nosso exclusivo molho barbecue, acompanhadas de fritas.",
	on_sale: {},
	commission: 25,
	stock: 49,
	markup: 272.6666666666667,
	base_price: 55.9
}, {
	status: "Disponível",
	code: "24",
	default_sale_cfop: "",
	price: 52.5,
	barcode: "2323423423232",
	max_discount: 0,
	id: "01d4ecee-dd30-11e4-a739-0050562afd8c",
	unit: "",
	category: {
		id: 7,
		full_name: "Entrees:Pasta",
		name: "Pasta"
	},
	name: "Blackened Steak Penne",
	notes: "Suculento steak de sirloin cortado em tiras servido sobre pasta penne banhada em molho Alfredo, acompanhada de espinafre e Bruschetta Mix. Também disponível na versão Blackened Chicken Penne com tiras de frango grelhado.",
	on_sale: {},
	commission: 25,
	stock: 49,
	markup: 250,
	base_price: 52.5
}, {
	status: "Disponível",
	code: "01",
	default_sale_cfop: "",
	price: 26.9,
	barcode: "2567535345363",
	max_discount: 0,
	id: "01b8bd94-dd30-11e4-a8ef-0050562afd8c",
	unit: "",
	category: {
		id: 2,
		full_name: "Appetizers:Appetizers",
		name: "Appetizers"
	},
	name: "Boneless Buffalo Wings",
	notes: "Suculentos cubos de peito de frango empanados, banhados pelo exclusivo molho Wing Sauce, acompanhados de bleu cheese.",
	on_sale: {},
	commission: 25,
	stock: 48,
	markup: 79.33333333333333,
	base_price: 26.9
}, {
	status: "Disponível",
	code: "25",
	default_sale_cfop: "",
	price: 15.9,
	barcode: "2323423434232",
	max_discount: 0,
	id: "01d683f6-dd30-11e4-992b-0050562afd8c",
	unit: "",
	category: {
		id: 9,
		full_name: "Salads:Salads",
		name: "Salads"
	},
	name: "Bruschetta Chicken Salad",
	notes: "Delicioso peito de frango grelhado sobre uma refrescante salada romana, banhada em nosso exclusivo Mediterranean Vinagrete, coberta por mix de tomates, cebola roxa, azeitonas pretas, pimentões vermelhos grelhados, manjericão e alho. Para finalizar, coberto por queijo parmesão, mozzarella de búfala e uma redução de vinagre balsâmico em mel.",
	on_sale: {},
	commission: 25,
	stock: 49,
	markup: 6,
	base_price: 15.9
}, {
	status: "Disponível",
	code: "21",
	default_sale_cfop: "",
	price: 40.9,
	barcode: "2555323423423",
	max_discount: 0,
	id: "01d1b68c-dd30-11e4-8bd5-0050562afd8c",
	unit: "",
	category: {
		id: 7,
		full_name: "Entrees:Pasta",
		name: "Pasta"
	},
	name: "Chicken Broccoli Fettuccine Alfredo",
	notes: "Peito de frango grelhado servido sobre uma cama de fettuccine com o cremoso molho Alfredo e brócolis ao vapor, coberto por Bruschetta Mix e queijo parmesão. Acompanha pão de alho.",
	on_sale: {},
	commission: 25,
	stock: 49,
	markup: 172.66666666666666,
	base_price: 40.9
}, {
	status: "Disponível",
	code: "22",
	default_sale_cfop: "",
	price: 42.9,
	barcode: "3242423232323",
	max_discount: 0,
	id: "01d2c176-dd30-11e4-8e08-0050562afd8c",
	unit: "",
	category: {
		id: 7,
		full_name: "Entrees:Pasta",
		name: "Pasta"
	},
	name: "Chicken Parmesan",
	notes: "Peito de frango empanado e gratinado com nossa mistura de queijos italianos, acompanhado de fettuccine banhado por nosso molho marinara. Acompanha pão de alho.",
	on_sale: {},
	commission: 25,
	stock: 49,
	markup: 186,
	base_price: 42.9
}, {
	status: "Disponível",
	code: "02",
	default_sale_cfop: "",
	price: 24.5,
	barcode: "2323424234234",
	max_discount: 0,
	id: "01bb7c78-dd30-11e4-ae5f-0050562afd8c",
	unit: "",
	category: {
		id: 2,
		full_name: "Appetizers:Appetizers",
		name: "Appetizers"
	},
	name: "Chicken Quesadillas",
	notes: "Duas tortillas grandes recheadas de frango, pico de gallo, bacon bits, queijo derretido e um leve toque de chipotle pepper. Acompanham sour cream e salsa base.",
	on_sale: {},
	commission: 25,
	stock: 48,
	markup: 63.333333333333336,
	base_price: 24.5
}, {
	status: "Disponível",
	code: "31",
	default_sale_cfop: "",
	price: 15.9,
	barcode: "2693934934593",
	max_discount: 0,
	id: "01deff86-dd30-11e4-bf83-0050562afd8c",
	unit: "",
	category: {
		id: 11,
		full_name: "Desserts:Desserts",
		name: "Desserts"
	},
	name: "Chocolate Cake",
	notes: "Generosa porção de bolo de chocolate no estilo americano.",
	on_sale: {},
	commission: 25,
	stock: 49,
	markup: 6,
	base_price: 15.9
}, {
	status: "Disponível",
	code: "32",
	default_sale_cfop: "",
	price: 16.5,
	barcode: "4534524060230",
	max_discount: 0,
	id: "01e0291a-dd30-11e4-bc10-0050562afd8c",
	unit: "",
	category: {
		id: 11,
		full_name: "Desserts:Desserts",
		name: "Desserts"
	},
	name: "Chocolate Meltdown",
	notes: "Delicioso bolo de chocolate coberto com sorvete de baunilha, chantilly e cereja. Generosa porção de bolo de chocolate no estilo americano.",
	on_sale: {},
	commission: 25,
	stock: 49,
	markup: 10,
	base_price: 16.5
}, {
	status: "Disponível",
	code: "33",
	default_sale_cfop: "",
	price: 10.5,
	barcode: "6343534534534",
	max_discount: 0,
	id: "01e14d40-dd30-11e4-8878-0050562afd8c",
	unit: "",
	category: {
		id: 11,
		full_name: "Desserts:Desserts",
		name: "Desserts"
	},
	name: "Churros",
	notes: "Deliciosos churros polvilhados com açúcar e canela, servidos com uma saborosa porção de doce de leite.",
	on_sale: {},
	commission: 25,
	stock: 49,
	markup: -30,
	base_price: 10.5
}, {
	status: "Disponível",
	code: "04",
	default_sale_cfop: "",
	price: 25.9,
	barcode: "2234234234232",
	max_discount: 0,
	id: "01bdf00c-dd30-11e4-9878-0050562afd8c",
	unit: "",
	category: {
		id: 2,
		full_name: "Appetizers:Appetizers",
		name: "Appetizers"
	},
	name: "Crunchy Onion",
	notes: "No melhor estilo do Autêntico Grill & Bar Americano, crocantes anéis de cebola empanados, acompanhados de molho barbecue.",
	on_sale: {},
	commission: 25,
	stock: 48,
	markup: 72.66666666666667,
	base_price: 25.9
}, {
	status: "Disponível",
	code: "10",
	default_sale_cfop: "",
	price: 55.9,
	barcode: "3025023023034",
	max_discount: 0,
	id: "01c52dcc-dd30-11e4-9cba-0050562afd8c",
	unit: "",
	category: {
		id: 4,
		full_name: "Entrees:Steaks",
		name: "Steaks"
	},
	name: "Fraldinha",
	notes: "Corte de fraldinha acompanhado de salada de entrada e batata crispy.",
	on_sale: {},
	commission: 25,
	stock: 49,
	markup: 272.6666666666667,
	base_price: 55.9
}, {
	status: "Disponível",
	code: "27",
	default_sale_cfop: "",
	price: 17.9,
	barcode: "5642423423423",
	max_discount: 0,
	id: "01d8c616-dd30-11e4-9a1d-0050562afd8c",
	unit: "",
	category: {
		id: 9,
		full_name: "Salads:Salads",
		name: "Salads"
	},
	name: "Friead Chicken Salad",
	notes: "Crocantes tiras de frango empanado sobre salada de folhas verdes, tomates, ovos e queijo jack-cheddar. Servido com molho honey mustard.",
	on_sale: {},
	commission: 25,
	stock: 49,
	markup: 19.333333333333332,
	base_price: 17.9
}, {
	status: "Disponível",
	code: "34",
	default_sale_cfop: "",
	price: 15.5,
	barcode: "6345242342346",
	max_discount: 0,
	id: "01e26fb8-dd30-11e4-a946-0050562afd8c",
	unit: "",
	category: {
		id: 11,
		full_name: "Desserts:Desserts",
		name: "Desserts"
	},
	name: "Fudge Brownie Sundae",
	notes: "Brownie tradicional acompanhado de sorvete de creme e calda de chocolate.",
	on_sale: {},
	commission: 25,
	stock: 49,
	markup: 3.3333333333333335,
	base_price: 15.5
}, {
	status: "Disponível",
	code: "18",
	default_sale_cfop: "",
	price: 49.9,
	barcode: "2042323423423",
	max_discount: 0,
	id: "01ce6860-dd30-11e4-87f5-0050562afd8c",
	unit: "",
	category: {
		id: 6,
		full_name: "Entrees:Seafood",
		name: "Seafood"
	},
	name: "Garlic Herb Salmon",
	notes: "Delicioso salmão grelhado coberto por nossa tradicional manteiga de alho com ervas, servido com arroz pilaf e vegetais ao vapor.",
	on_sale: {},
	commission: 25,
	stock: 49,
	markup: 232.66666666666666,
	base_price: 49.9
}, {
	status: "Disponível",
	code: "30",
	default_sale_cfop: "",
	price: 19.9,
	barcode: "2342534534533",
	max_discount: 0,
	id: "01dd6b26-dd30-11e4-b11b-0050562afd8c",
	unit: "",
	category: {
		id: 9,
		full_name: "Salads:Salads",
		name: "Salads"
	},
	name: "Grilled Chicken Caesar Salad",
	notes: "Alface romana banhada em nosso tradicional molho Caesar, coberto com uma deliciosa porção de peito de frango marinado, grelhado e guarnecido com parmesão ralado e croutons.",
	on_sale: {},
	commission: 25,
	stock: 49,
	markup: 32.666666666666664,
	base_price: 19.9
}, {
	status: "Disponível",
	code: "19",
	default_sale_cfop: "",
	price: 39.9,
	barcode: "2324234232322",
	max_discount: 0,
	id: "01cf90d2-dd30-11e4-aa65-0050562afd8c",
	unit: "",
	category: {
		id: 7,
		full_name: "Entrees:Pasta",
		name: "Pasta"
	},
	name: "Grilled Shrimp Pesto Alfredo Fettuccine",
	notes: "Tenros camarões servidos com fettuccine banhado no molho pesto Alfredo, cobertos por tomate-cereja e queijo parmesão. Acompanha pão de alho.",
	on_sale: {},
	commission: 25,
	stock: 49,
	markup: 166,
	base_price: 39.9
}, {
	status: "Disponível",
	code: "26",
	default_sale_cfop: "",
	price: 11.9,
	barcode: "2342424234322",
	max_discount: 0,
	id: "01d79a5c-dd30-11e4-bb05-0050562afd8c",
	unit: "",
	category: {
		id: 9,
		full_name: "Salads:Salads",
		name: "Salads"
	},
	name: "House Salad",
	notes: "Tradicional salada da casa: mix de folhas, tomates, pepinos em cubo, queijo cheddar, bacon bits e croutons. Acompanha molho à sua escolha.",
	on_sale: {},
	commission: 25,
	stock: 49,
	markup: -20.666666666666668,
	base_price: 11.9
}, {
	status: "Disponível",
	code: "03",
	default_sale_cfop: "",
	price: 25.9,
	barcode: "2423566732222",
	max_discount: 0,
	id: "01bcdb72-dd30-11e4-80fe-0050562afd8c",
	unit: "",
	category: {
		id: 2,
		full_name: "Appetizers:Appetizers",
		name: "Appetizers"
	},
	name: "Mozzarella Sticks",
	notes: "Deliciosos palitos de mozzarella empanados, acompanhados de molho marinara.",
	on_sale: {},
	commission: 25,
	stock: 48,
	markup: 72.66666666666667,
	base_price: 25.9
}, {
	status: "Disponível",
	code: "07",
	default_sale_cfop: "",
	price: 33.9,
	barcode: "2562434523688",
	max_discount: 0,
	id: "01c17330-dd30-11e4-ba85-0050562afd8c",
	unit: "",
	category: {
		id: 2,
		full_name: "Appetizers:Appetizers",
		name: "Appetizers"
	},
	name: "Nachos Nuevos",
	notes: "Porção de tortilhas coberta por nossa deliciosa combinação de queijos, chilis, alface, pico de gallo, sour cream e jalapeños.",
	on_sale: {},
	commission: 25,
	stock: 48,
	markup: 126,
	base_price: 33.9
}, {
	status: "Disponível",
	code: "11",
	default_sale_cfop: "",
	price: 52.9,
	barcode: "6303502023433",
	max_discount: 0,
	id: "01c645ae-dd30-11e4-9be1-0050562afd8c",
	unit: "",
	category: {
		id: 4,
		full_name: "Entrees:Steaks",
		name: "Steaks"
	},
	name: "New York Steak",
	notes: "New York Steak acompanhado de salada de entrada e batata crispy.",
	on_sale: {},
	commission: 25,
	stock: 49,
	markup: 252.66666666666666,
	base_price: 52.9
}, {
	status: "Disponível",
	code: "28",
	default_sale_cfop: "",
	price: 22.5,
	barcode: "2323423423423",
	max_discount: 0,
	id: "01d9e3c0-dd30-11e4-93e3-0050562afd8c",
	unit: "",
	category: {
		id: 9,
		full_name: "Salads:Salads",
		name: "Salads"
	},
	name: "Oriental Salad",
	notes: "Original combinação de folhas, amêndoas tostadas e rice noodles, banhada por um delicioso molho agridoce e coberta por crocantes tiras de frango empanado ou camarões grelhados.",
	on_sale: {},
	commission: 25,
	stock: 49,
	markup: 50,
	base_price: 22.5
}, {
	status: "Disponível",
	code: "09",
	default_sale_cfop: "",
	price: 62.5,
	barcode: "2322342342342",
	max_discount: 0,
	id: "01c40a1e-dd30-11e4-85bf-0050562afd8c",
	unit: "",
	category: {
		id: 4,
		full_name: "Entrees:Steaks",
		name: "Steaks"
	},
	name: "Picanha",
	notes: "Corte de picanha acompanhado de salada de entrada e batata crispy.",
	on_sale: {},
	commission: 25,
	stock: 48,
	markup: 316.6666666666667,
	base_price: 62.5
}, {
	status: "Disponível",
	code: "05",
	default_sale_cfop: "",
	price: 30.9,
	barcode: "1252342342323",
	max_discount: 0,
	id: "01bf2756-dd30-11e4-9875-0050562afd8c",
	unit: "",
	category: {
		id: 2,
		full_name: "Appetizers:Appetizers",
		name: "Appetizers"
	},
	name: "Popcorn Shrimp",
	notes: "Deliciosa porção de camarões empanados e fritos acompanhada de molho Cocktail.",
	on_sale: {},
	commission: 25,
	stock: 48,
	markup: 106,
	base_price: 30.9
}, {
	status: "Disponível",
	code: "12",
	default_sale_cfop: "",
	price: 53.5,
	barcode: "3320240203423",
	max_discount: 0,
	id: "01c7665a-dd30-11e4-b2df-0050562afd8c",
	unit: "",
	category: {
		id: 4,
		full_name: "Entrees:Steaks",
		name: "Steaks"
	},
	name: "Ribeye",
	notes: "Ribeye acompanhado de salada de entrada e batata crispy.",
	on_sale: {},
	commission: 25,
	stock: 49,
	markup: 256.6666666666667,
	base_price: 53.5
}, {
	status: "Disponível",
	code: "29",
	default_sale_cfop: "",
	price: 23.5,
	barcode: "4234234234233",
	max_discount: 0,
	id: "01db7668-dd30-11e4-bf11-0050562afd8c",
	unit: "",
	category: {
		id: 9,
		full_name: "Salads:Salads",
		name: "Salads"
	},
	name: "Salmon Caesar Salad",
	notes: "A leveza do salmão grelhado aliada ao sabor tradicional do Caesar Salad. Uma combinação perfeita.",
	on_sale: {},
	commission: 25,
	stock: 49,
	markup: 56.666666666666664,
	base_price: 23.5
}, {
	status: "Disponível",
	code: "06",
	default_sale_cfop: "",
	price: 42.9,
	barcode: "2562434523676",
	max_discount: 0,
	id: "01c052ca-dd30-11e4-97b0-0050562afd8c",
	unit: "",
	category: {
		id: 2,
		full_name: "Appetizers:Appetizers",
		name: "Appetizers"
	},
	name: "Sampler",
	notes: "Esta combinação inclui quatro clássicos do restaurante: Chicken Quesadillas, Spinach & Artichoke Dip, Boneless Buffalo Wings e as saborosas Mozzarella Sticks ou as deliciosas Ribs.",
	on_sale: {},
	commission: 25,
	stock: 48,
	markup: 186,
	base_price: 42.9
}, {
	status: "Disponível",
	code: "17",
	default_sale_cfop: "",
	price: 45.5,
	barcode: "3202340234234",
	max_discount: 0,
	id: "01cd525e-dd30-11e4-bae5-0050562afd8c",
	unit: "",
	category: {
		id: 6,
		full_name: "Entrees:Seafood",
		name: "Seafood"
	},
	name: "Shrimp Zucchini Risotto",
	notes: "Risotto cremoso com tiras de pimentão vermelho assado, abobrinha e queijo parmesão, coberto por camarões salteados.",
	on_sale: {},
	commission: 25,
	stock: 49,
	markup: 203.33333333333334,
	base_price: 45.5
}, {
	status: "Disponível",
	code: "35",
	default_sale_cfop: "",
	price: 19.8,
	barcode: "6447753423423",
	max_discount: 0,
	id: "01e38f7e-dd30-11e4-a9be-0050562afd8c",
	unit: "",
	category: {
		id: 11,
		full_name: "Desserts:Desserts",
		name: "Desserts"
	},
	name: "Sizzling Apple Pie",
	notes: "Deliciosa torta de finas camadas de maçã sobre uma massa leve e crocante, coberta com um crust de nozes, servida em um skillet quente, acompanhada de calda de caramelo e sorvete de creme.",
	on_sale: {},
	commission: 25,
	stock: 49,
	markup: 32,
	base_price: 19.8
}, {
	status: "Disponível",
	code: "23",
	default_sale_cfop: "",
	price: 45.5,
	barcode: "2342342342322",
	max_discount: 0,
	id: "01d3d660-dd30-11e4-a237-0050562afd8c",
	unit: "",
	category: {
		id: 7,
		full_name: "Entrees:Pasta",
		name: "Pasta"
	},
	name: "Spicy Shrimp Diavolo",
	notes: "Molho de tomate e manjericão com chili, camarões temperados cozidos com pimentão vermelho e cebola, servidos sobre uma cama de penne integral cobertos por queijo parmesão e coentro.",
	on_sale: {},
	commission: 25,
	stock: 49,
	markup: 203.33333333333334,
	base_price: 45.5
}, {
	status: "Disponível",
	code: "16",
	default_sale_cfop: "",
	price: 42.9,
	barcode: "2340234023042",
	max_discount: 0,
	id: "01cc2be0-dd30-11e4-8ef9-0050562afd8c",
	unit: "",
	category: {
		id: 6,
		full_name: "Entrees:Seafood",
		name: "Seafood"
	},
	name: "Spinach Fish & Shrimp",
	notes: "Filé de tilápia empanado com corn flakes, coberto por camarões, delicioso creme de espinafre com alcachofra e parmesão. Servido com arroz pilaf.",
	on_sale: {},
	commission: 25,
	stock: 49,
	markup: 186,
	base_price: 42.9
}, {
	status: "Disponível",
	code: "20",
	default_sale_cfop: "",
	price: 39.9,
	barcode: "2123123123222",
	max_discount: 0,
	id: "01d0a38c-dd30-11e4-b8b5-0050562afd8c",
	unit: "",
	category: {
		id: 7,
		full_name: "Entrees:Pasta",
		name: "Pasta"
	},
	name: "Three Cheese Chicken Penne",
	notes: "Combinação da nossa mistura de queijo italiano, mozzarella e parmesão cobrindo uma rica mistura de penne, peito de frango com tempero italiano, tomate em cubos, manjericão fresco e molho Alfredo. Acompanha pão de alho.",
	on_sale: {},
	commission: 25,
	stock: 49,
	markup: 166,
	base_price: 39.9
}, {
	status: "Disponível",
	code: "08",
	default_sale_cfop: "",
	price: 22.9,
	barcode: "2562434523699",
	max_discount: 0,
	id: "01c29a62-dd30-11e4-b130-0050562afd8c",
	unit: "",
	category: {
		id: 2,
		full_name: "Appetizers:Appetizers",
		name: "Appetizers"
	},
	name: "Veggie Patch Pizza",
	notes: "Pizza ultrafina coberta por nosso delicioso creme de espinafre e alcachofra, Bruschetta Mix, champignon com uma perfeita combinação de queijos italianos e ervas.",
	on_sale: {},
	commission: 25,
	stock: 48,
	markup: 52.666666666666664,
	base_price: 22.9
}
];

FakeResponses.product_list_full = {
	"status": 0,
	"data": [
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "01",
			"description": "Sashimi-style Tuna seared rare and placed atop an Asian slaw. Served with a creamy ginger-soy sauce.",
			"price": 35.0,
			"barcode": "1",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 35.0,
			"id": 2,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 2,
				"full_name": "Starters:Snacks",
				"name": "Snacks"
			},
			"name": "Seared Peppered AHI (SMALL)",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 35.0,
			"image": "images/outback/ccapp-03698-2x.png",
			"stock": {
				"avaiable_units": 48,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "02",
			"description": "Hand-dipped in batter, rolled in coconut and fried golden. Paired with Creole marmalade.",
			"price": 45.0,
			"barcode": "2",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 45.0,
			"id": 3,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 2,
				"full_name": "Starters:Snacks",
				"name": "Snacks"
			},
			"name": "Coconut Shrimp (SMALL)",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 45.0,
			"image": "images/outback/ccapp-03831-2x.png",
			"stock": {
				"avaiable_units": 48,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "03",
			"description": "Stuffed with fresh grilled chicken breast, saut\u00e9ed mushrooms, bacon, melted cheeses and honey mustard sauce.",
			"price": 35.0,
			"barcode": "3",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 35.0,
			"id": 4,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 2,
				"full_name": "Starters:Snacks",
				"name": "Snacks"
			},
			"name": "Alice Springer Chicken Quesadillas (SMALL)",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 35.0,
			"image": "images/outback/ccapp-03833-2x.png",
			"stock": {
				"avaiable_units": 48,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "04",
			"description": "Saut\u00e9ed mushrooms stuffed with lump crab meat served over a creamy lemon butter sauce.",
			"price": 30.0,
			"barcode": "4",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 30.0,
			"id": 5,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 2,
				"full_name": "Starters:Snacks",
				"name": "Snacks"
			},
			"name": "Crab Stuffed Mushrooms",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 30.0,
			"image": "images/outback/ccapp-09632-2x.png",
			"stock": {
				"avaiable_units": 48,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "05",
			"description": "A combination of chopped tomato, Mozzarella and basil served with grilled artisan bread.",
			"price": 20.0,
			"barcode": "5",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 20.0,
			"id": 6,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 2,
				"full_name": "Starters:Snacks",
				"name": "Snacks"
			},
			"name": "Tomato Mozzarella Caprese",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 20.0,
			"image": "images/outback/ccapp-10156-2x.png",
			"stock": {
				"avaiable_units": 48,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "06",
			"description": "Topped with melted Monterey Jack, Cheddar and chopped bacon with a spicy ranch dressing.",
			"price": 40.0,
			"barcode": "6",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 40.0,
			"id": 7,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 3,
				"full_name": "Starters:Aussie-Tizers",
				"name": "Aussie-Tizers"
			},
			"name": "Aussie Cheese Fries",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 40.0,
			"image": "images/outback/ccapp-fries-2x.png",
			"stock": {
				"avaiable_units": 48,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "07",
			"description": "Our special onion is hand-carved, cooked until golden and ready to dip into our spicy signature bloom sauce.",
			"price": 60.0,
			"barcode": "7",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 60.0,
			"id": 8,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 3,
				"full_name": "Starters:Aussie-Tizers",
				"name": "Aussie-Tizers"
			},
			"name": "Bloomin' Onion",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 60.0,
			"image": "images/outback/ccapp-03500-2x.png",
			"stock": {
				"avaiable_units": 48,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "08",
			"description": "Sashimi-style Tuna seared rare and placed atop an Asian slaw. Served with a creamy ginger-soy sauce.",
			"price": 70.0,
			"barcode": "8",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 70.0,
			"id": 9,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 3,
				"full_name": "Starters:Aussie-Tizers",
				"name": "Aussie-Tizers"
			},
			"name": "Seared Peppered AHI",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 70.0,
			"image": "images/outback/ccapp-03539-2x.png",
			"stock": {
				"avaiable_units": 48,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "09",
			"description": "A warm fondue of roasted Cheddar and smoked Gouda cheeses with Foster\u2019s beer. Served with soft pretzel sticks for dipping.",
			"price": 40.0,
			"barcode": "9",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 40.0,
			"id": 10,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 3,
				"full_name": "Starters:Aussie-Tizers",
				"name": "Aussie-Tizers"
			},
			"name": "Foster's Beer Cheese Fondue",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 40.0,
			"image": "images/outback/ccapp-10492-2x.png",
			"stock": {
				"avaiable_units": 48,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "10",
			"description": "Hand-dipped in batter, rolled in coconut and fried golden. Paired with Creole marmalade.",
			"price": 90.0,
			"barcode": "10",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 90.0,
			"id": 11,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 3,
				"full_name": "Starters:Aussie-Tizers",
				"name": "Aussie-Tizers"
			},
			"name": "Coconut Shrimp",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 90.0,
			"image": "images/outback/ccapp-03505-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "11",
			"description": "Avocado and marinated crab meat topped with minced tomato basil and a drizzle of wasabi vinaigrette. Served with white corn tortilla chips.",
			"price": 50.0,
			"barcode": "11",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 50.0,
			"id": 12,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 3,
				"full_name": "Starters:Aussie-Tizers",
				"name": "Aussie-Tizers"
			},
			"name": "Crab and Avocato Stack",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 50.0,
			"image": "images/outback/ccapp-09271-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "12",
			"description": "Sashimi-style Ahi Tuna with a drizzle of ginger-soy dressing, crispy Coconut Shrimp and a mini version of our Crab & Avocado Stack served with tortilla chips.",
			"price": 90.0,
			"barcode": "12",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 90.0,
			"id": 13,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 3,
				"full_name": "Starters:Aussie-Tizers",
				"name": "Aussie-Tizers"
			},
			"name": "Creat Barrier Trio",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 90.0,
			"image": "images/outback/ccapp-09708-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "13",
			"description": "Sprinkled with a special blend of seasonings and wood-fire grilled. Served with grilled artisan bread, garlic herb butter and fresh tomato basil.",
			"price": 80.0,
			"barcode": "13",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 80.0,
			"id": 14,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 3,
				"full_name": "Starters:Aussie-Tizers",
				"name": "Aussie-Tizers"
			},
			"name": "Wood-fire Grilled Shrimp on the Table",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 80.0,
			"image": "images/outback/ccapp-03503-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "14",
			"description": "Stuffed with fresh grilled chicken breast, saut\u00e9ed mushrooms, bacon, melted cheeses and honey mustard sauce.",
			"price": 60.0,
			"barcode": "14",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 60.0,
			"id": 15,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 3,
				"full_name": "Starters:Aussie-Tizers",
				"name": "Aussie-Tizers"
			},
			"name": "Alice Springs Chicken Quesadillas",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 60.0,
			"image": "images/outback/ccapp-03832-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "15",
			"description": "Chicken wings tossed in our secret spices served with our Blue Cheese dressing and celery. Choose mild, medium or hot.",
			"price": 55.0,
			"barcode": "15",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 55.0,
			"id": 16,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 3,
				"full_name": "Starters:Aussie-Tizers",
				"name": "Aussie-Tizers"
			},
			"name": "Wings",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 55.0,
			"image": "images/outback/ccapp-03502-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "16",
			"description": "Chicken breast in a seasoned broth, topped with Monterey Jack and Cheddar cheese, cilantro and crispy tortilla strips. Served with a wedge of lime.",
			"price": 30.0,
			"barcode": "16",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 30.0,
			"id": 17,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 4,
				"full_name": "Starters:Soups & Salads",
				"name": "Soups & Salads"
			},
			"name": "Chicken Tortilla Soup",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 30.0,
			"image": "images/outback/ccapp-chickenTortillaSoup-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "17",
			"description": "Fresh mixed greens, chopped hard-boiled eggs, tomatoes, bacon, Monterey Jack and Cheddar cheese and freshly made croutons. Served with your choice of dressing. Top with wood-fire grilled or crispy chicken.",
			"price": 30.0,
			"barcode": "17",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 30.0,
			"id": 18,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 4,
				"full_name": "Starters:Soups & Salads",
				"name": "Soups & Salads"
			},
			"name": "Aussie Cobb Salad",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 30.0,
			"image": "images/outback/ccapp-AussieCobbSalad-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "18",
			"description": "Mixed greens, red peppers, chopped cilantro, sliced almonds and sesame seeds tossed in sesame vinaigrette. Top with grilled chicken, Ahi Tuna or grilled Salmon.",
			"price": 40.0,
			"barcode": "18",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 40.0,
			"id": 19,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 4,
				"full_name": "Starters:Soups & Salads",
				"name": "Soups & Salads"
			},
			"name": "Sesame Salad",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 40.0,
			"image": "images/outback/ccapp-SesameSalad-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "19",
			"description": "Crisp romaine lettuce and freshly made croutons tossed in our Caesar dressing. Top with wood-fire grilled chicken or Grilled Shrimp on the Barbie.",
			"price": 40.0,
			"barcode": "19",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 40.0,
			"id": 20,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 4,
				"full_name": "Starters:Soups & Salads",
				"name": "Soups & Salads"
			},
			"name": "Caesar Salad",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 40.0,
			"image": "images/outback/ccapp-CaesarSalad-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "20",
			"description": "Seared sirloin, mixed greens, Aussie Crunch, tomatoes, red onions, cinnamon pecans and Danish Blue Cheese vinaigrette.",
			"price": 60.0,
			"barcode": "20",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 60.0,
			"id": 21,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 4,
				"full_name": "Starters:Soups & Salads",
				"name": "Soups & Salads"
			},
			"name": "Steakhouse Salad",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 60.0,
			"image": "images/outback/ccapp-05025-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "21",
			"description": "Made with our world-famous onions and topped with melted Provolone cheese.",
			"price": 45.0,
			"barcode": "21",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 45.0,
			"id": 22,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 4,
				"full_name": "Starters:Soups & Salads",
				"name": "Soups & Salads"
			},
			"name": "French Onion Soup",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 45.0,
			"image": "images/outback/ccapp-03513-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "22",
			"description": "The most tender and juicy thick cut.",
			"price": 60.0,
			"barcode": "22",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 60.0,
			"id": 23,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 6,
				"full_name": "Steaks:Seasoned & Seared Classic Cuts",
				"name": "Seasoned & Seared Classic Cuts"
			},
			"name": "Victoria's Filet Mignon",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 60.0,
			"image": "images/outback/ccapp-VictoriaFiletMignon-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "23",
			"description": "One of the leanest cuts, hearty and full of flavor.",
			"price": 60.0,
			"barcode": "23",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 60.0,
			"id": 24,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 6,
				"full_name": "Steaks:Seasoned & Seared Classic Cuts",
				"name": "Seasoned & Seared Classic Cuts"
			},
			"name": "Outback Sirloin",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 60.0,
			"image": "images/outback/ccapp-OutbackSirloin-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "24",
			"description": "Full of rich flavor.",
			"price": 70.0,
			"barcode": "24",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 70.0,
			"id": 25,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 6,
				"full_name": "Steaks:Seasoned & Seared Classic Cuts",
				"name": "Seasoned & Seared Classic Cuts"
			},
			"name": "New York Strip",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 70.0,
			"image": "images/outback/ccapp-06506-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "25",
			"description": "A flavorful strip and filet tenderloin together.",
			"price": 70.0,
			"barcode": "25",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 70.0,
			"id": 26,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 6,
				"full_name": "Steaks:Seasoned & Seared Classic Cuts",
				"name": "Seasoned & Seared Classic Cuts"
			},
			"name": "22 oz. Porterhouse",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 70.0,
			"image": "images/outback/ccapp-06721-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "26",
			"description": "Well-marbled, juicy and savory.",
			"price": 65.0,
			"barcode": "26",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 65.0,
			"id": 27,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 7,
				"full_name": "Steaks:Wood-fire Grilled Specialty Cuts",
				"name": "Wood-fire Grilled Specialty Cuts"
			},
			"name": "Ribeye Melt",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 65.0,
			"image": "images/outback/ccapp-Ribeye-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "27",
			"description": "Seasoned with an herb crust, served with au jus and hand-carved to order. Choose either original roasted or wood-fire grilled. Based on availability.",
			"price": 70.0,
			"barcode": "27",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 70.0,
			"id": 28,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 7,
				"full_name": "Steaks:Wood-fire Grilled Specialty Cuts",
				"name": "Wood-fire Grilled Specialty Cuts"
			},
			"name": "Slow-Roasted Prime Rib",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 70.0,
			"image": "images/outback/ccapp-PrimeRib-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "28",
			"description": "Juicy, bone-in and extra marbled for maximum tenderness.",
			"price": 70.0,
			"barcode": "28",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 70.0,
			"id": 29,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 7,
				"full_name": "Steaks:Wood-fire Grilled Specialty Cuts",
				"name": "Wood-fire Grilled Specialty Cuts"
			},
			"name": "Bone-in Natural Cut Ribeye",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 70.0,
			"image": "images/outback/ccapp-10249-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "29",
			"description": "Seasoned and grilled for juicy flavor and tenderness.",
			"price": 65.0,
			"barcode": "29",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 65.0,
			"id": 30,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 7,
				"full_name": "Steaks:Wood-fire Grilled Specialty Cuts",
				"name": "Wood-fire Grilled Specialty Cuts"
			},
			"name": "Outback Flat Iron",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 65.0,
			"image": "images/outback/ccapp-10252-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "30",
			"description": "Seasoned and seared then topped with seasoned bistro butter, portabella mushrooms and Parmesan cheese.",
			"price": 50.0,
			"barcode": "30",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 50.0,
			"id": 31,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 8,
				"full_name": "Steaks:Bold Creations",
				"name": "Bold Creations"
			},
			"name": "Victoria's Filet Mignon Portabella",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 50.0,
			"image": "images/outback/ccapp-VictoriaFiletMignonPortabella-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "31",
			"description": "Our sirloin with Coconut Shrimp.",
			"price": 55.0,
			"barcode": "31",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 55.0,
			"id": 32,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 8,
				"full_name": "Steaks:Bold Creations",
				"name": "Bold Creations"
			},
			"name": "Sirlon With Coconut Shrimp",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 55.0,
			"image": "images/outback/ccapp-sirloinwithcoco-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "32",
			"description": "A tender and juicy thick cut 6 oz. filet paired with a seasoned and grilled lobster tail.",
			"price": 95.0,
			"barcode": "32",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 95.0,
			"id": 33,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 8,
				"full_name": "Steaks:Bold Creations",
				"name": "Bold Creations"
			},
			"name": "Filet Mignon & Lobster",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 95.0,
			"image": "images/outback/ccapp-08268-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "33",
			"description": "Danish Blue Cheese Crumbles that are broiled and melted to perfection atop your steak.",
			"price": 60.0,
			"barcode": "33",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 60.0,
			"id": 34,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 9,
				"full_name": "Steaks:Enhanced Steak Experience",
				"name": "Enhanced Steak Experience"
			},
			"name": "Blue Cheese Crumbles",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 60.0,
			"image": "images/outback/ccapp-10021-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "34",
			"description": "Saut\u00e9ed garlic with a touch of cracked black pepper.",
			"price": 60.0,
			"barcode": "34",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 60.0,
			"id": 35,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 9,
				"full_name": "Steaks:Enhanced Steak Experience",
				"name": "Enhanced Steak Experience"
			},
			"name": "Roasted Garlic Butter Style",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 60.0,
			"image": "images/outback/ccapp-11201-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "35",
			"description": "Smoky bourbon glaze and crisp chopped bacon.",
			"price": 65.0,
			"barcode": "35",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 65.0,
			"id": 36,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 9,
				"full_name": "Steaks:Enhanced Steak Experience",
				"name": "Enhanced Steak Experience"
			},
			"name": "Smoky Bacon Bourbon Style",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 65.0,
			"image": "images/outback/ccapp-11200-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "36",
			"description": "Mushrooms blended in rich and creamy Marsala sauce.",
			"price": 60.0,
			"barcode": "36",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 60.0,
			"id": 37,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 9,
				"full_name": "Steaks:Enhanced Steak Experience",
				"name": "Enhanced Steak Experience"
			},
			"name": "Mushroom Marsala Style",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 60.0,
			"image": "images/outback/ccapp-11202-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "37",
			"description": "Bloomin\u2019 Onion\u00ae petals that can be added atop your steak.",
			"price": 60.0,
			"barcode": "37",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 60.0,
			"id": 38,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 9,
				"full_name": "Steaks:Enhanced Steak Experience",
				"name": "Enhanced Steak Experience"
			},
			"name": "Bloom Petals",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 60.0,
			"image": "images/outback/ccapp-09731-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "38",
			"description": "Skewer of four Grilled Shrimp on the Barbie, sprinkled with seasoning & served over fresh tomato basil and drizzled with a side of garlic herb butter.",
			"price": 40.0,
			"barcode": "38",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 40.0,
			"id": 39,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 10,
				"full_name": "Steaks:Surf Add-ons",
				"name": "Surf Add-ons"
			},
			"name": "Grilled Shrimp",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 40.0,
			"image": "images/outback/ccapp-07928-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "39",
			"description": "One cold-water lobster tail steamed or grilled. Served with drawn butter and a lemon wedge.",
			"price": 45.0,
			"barcode": "39",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 45.0,
			"id": 40,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 10,
				"full_name": "Steaks:Surf Add-ons",
				"name": "Surf Add-ons"
			},
			"name": "Lobster Tail",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 45.0,
			"image": "images/outback/ccapp-06629-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "40",
			"description": "One jumbo lump crab cake served with a lemon butter sauce.",
			"price": 45.0,
			"barcode": "40",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 45.0,
			"id": 41,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 10,
				"full_name": "Steaks:Surf Add-ons",
				"name": "Surf Add-ons"
			},
			"name": "Jumbo Lump Crab Cake",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 45.0,
			"image": "images/outback/ccapp-6581-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "41",
			"description": "Topped with Bloomin' Onion\u00ae petals, American cheese, lettuce, tomato and our spicy signature bloom sauce.",
			"price": 35.0,
			"barcode": "41",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 35.0,
			"id": 42,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 12,
				"full_name": "Entrees:Forkless Features",
				"name": "Forkless Features"
			},
			"name": "The Bloomin' Burger",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 35.0,
			"image": "images/outback/ccapp-06933-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "42",
			"description": "Topped with lettuce, tomato, onion, pickle and mustard. Add your choice of cheese: American, Swiss, Provolone or Cheddar.",
			"price": 30.0,
			"barcode": "42",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 30.0,
			"id": 43,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 12,
				"full_name": "Entrees:Forkless Features",
				"name": "Forkless Features"
			},
			"name": "The Outbacker Burger",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 30.0,
			"image": "images/outback/ccapp-theoutbackerburger-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "43",
			"description": "Two wood-fire grilled patties topped with American cheese, lettuce, tomato, red onion and mayo on a grilled brioche bun.",
			"price": 30.0,
			"barcode": "43",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 30.0,
			"id": 44,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 12,
				"full_name": "Entrees:Forkless Features",
				"name": "Forkless Features"
			},
			"name": "Double Burger",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 30.0,
			"image": "images/outback/ccapp-09561-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "44",
			"description": "100% Grass-Fed, sustainably raised premium beef patty topped with aged Cheddar cheese, lettuce, tomato, red onion and a garlic aioli.",
			"price": 30.0,
			"barcode": "44",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 30.0,
			"id": 45,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 12,
				"full_name": "Entrees:Forkless Features",
				"name": "Forkless Features"
			},
			"name": "Grass-fed Burger With Aged Cheddar",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 30.0,
			"image": "images/outback/ccapp-09739-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "45",
			"description": "Topped with bacon, lettuce, tomato, herb aioli and avocado salad.",
			"price": 35.0,
			"barcode": "45",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 35.0,
			"id": 46,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 12,
				"full_name": "Entrees:Forkless Features",
				"name": "Forkless Features"
			},
			"name": "Wood-grilled California Chicken Sandwich",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 35.0,
			"image": "images/outback/ccapp-09563-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "46",
			"description": "Hand-breaded and lightly fried, tossed in Buffalo sauce with lettuce and ranch.",
			"price": 25.0,
			"barcode": "46",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 25.0,
			"id": 47,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 12,
				"full_name": "Entrees:Forkless Features",
				"name": "Forkless Features"
			},
			"name": "Crispy Chicken Sandwich",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 25.0,
			"image": "images/outback/ccapp-09562-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "47",
			"description": "Tender ribeye topped with grilled onions, crispy bacon, melted Cheddar cheese and garlic aioli, all on a toasted artisan bun.",
			"price": 40.0,
			"barcode": "47",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 40.0,
			"id": 48,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 12,
				"full_name": "Entrees:Forkless Features",
				"name": "Forkless Features"
			},
			"name": "Ribeye Melt",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 40.0,
			"image": "images/outback/ccapp-07987-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "48",
			"description": "Three grilled chicken tacos topped with crispy slaw, fresh pico de gallo, melted cheese and an herb aioli.",
			"price": 54.0,
			"barcode": "48",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 54.0,
			"id": 49,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 12,
				"full_name": "Entrees:Forkless Features",
				"name": "Forkless Features"
			},
			"name": "Aussie Chicken Tacos",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 54.0,
			"image": "images/outback/ccapp-07938-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "49",
			"description": "Three blackened fish tacos topped with crispy slaw, fresh pico de gallo and an herb aioli.",
			"price": 40.0,
			"barcode": "49",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 40.0,
			"id": 50,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 12,
				"full_name": "Entrees:Forkless Features",
				"name": "Forkless Features"
			},
			"name": "Aussie Fish Tacos",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 40.0,
			"image": "images/outback/ccapp-07981-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "50",
			"description": "Three grilled steak tacos topped with crispy slaw, fresh pico de gallo, melted cheese and an herb aioli.",
			"price": 35.0,
			"barcode": "50",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 35.0,
			"id": 51,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 12,
				"full_name": "Entrees:Forkless Features",
				"name": "Forkless Features"
			},
			"name": "Aussie Steak Tacos",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 35.0,
			"image": "images/outback/ccapp-07989-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "51",
			"description": "Wood-fire grilled Salmon glazed with Firecracker sauce and topped with fresh mango salsa and served with fresh seasonal mixed veggies.",
			"price": 50.0,
			"barcode": "51",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 50.0,
			"id": 52,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 13,
				"full_name": "Entrees:Straight from the Sea",
				"name": "Straight from the Sea"
			},
			"name": "Firecracker Salmon",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 50.0,
			"image": "images/outback/ccapp-FirecrackerSalmon-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "52",
			"description": "Seasoned and wood-fire grilled and served with fresh seasonal mixed veggies.",
			"price": 45.0,
			"barcode": "52",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 45.0,
			"id": 53,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 13,
				"full_name": "Entrees:Straight from the Sea",
				"name": "Straight from the Sea"
			},
			"name": "Perfectly Grilled Salmon",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 45.0,
			"image": "images/outback/ccapp-GrilledSalmon-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "53",
			"description": "Two cold water tails steamed or seasoned and grilled. Choice of two sides.",
			"price": 90.0,
			"barcode": "53",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 90.0,
			"id": 54,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 13,
				"full_name": "Entrees:Straight from the Sea",
				"name": "Straight from the Sea"
			},
			"name": "Lobster Tails",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 90.0,
			"image": "images/outback/ccapp-LobsterTails-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "54",
			"description": "Tilapia crowned with crab stuffing, pure lump crab meat, sliced mushrooms with a light lemon butter and white wine sauce and served with fresh seasonal mixed veggies.",
			"price": 45.0,
			"barcode": "54",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 45.0,
			"id": 55,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 13,
				"full_name": "Entrees:Straight from the Sea",
				"name": "Straight from the Sea"
			},
			"name": "Tilapia With Pure Lump Crab Meat",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 45.0,
			"image": "images/outback/ccapp-06983-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "55",
			"description": "Seasoned and wood-fire grilled Mahi served with fresh seasonal mixed veggies.",
			"price": 40.0,
			"barcode": "55",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 40.0,
			"id": 56,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 13,
				"full_name": "Entrees:Straight from the Sea",
				"name": "Straight from the Sea"
			},
			"name": "Simply Grilled MAHI",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 40.0,
			"image": "images/outback/ccapp-08784-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "56",
			"description": "Wood-fire grilled Mahi topped with artichoke hearts, sun-dried tomatoes, green onions and a light lemon sauce served with fresh seasonal mixed veggies.",
			"price": 40.0,
			"barcode": "56",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 40.0,
			"id": 57,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 13,
				"full_name": "Entrees:Straight from the Sea",
				"name": "Straight from the Sea"
			},
			"name": "Hearts of Gold MAHI",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 40.0,
			"image": "images/outback/ccapp-08785-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "57",
			"description": "Twelve crispy, hand-breaded shrimp served with your choice of cocktail or spicy Volcano sauce and Aussie Fries.",
			"price": 40.0,
			"barcode": "57",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 40.0,
			"id": 58,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 13,
				"full_name": "Entrees:Straight from the Sea",
				"name": "Straight from the Sea"
			},
			"name": "Hand-Breaded Shrimp",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 40.0,
			"image": "images/outback/ccapp-06849-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "58",
			"description": "Seasoned and wood-fire grilled chicken breast with our signature BBQ sauce and served with fresh seasonal mixed veggies.",
			"price": 38.0,
			"barcode": "58",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 38.0,
			"id": 59,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 14,
				"full_name": "Entrees:Chicken, Ribs and More",
				"name": "Chicken, Ribs and More"
			},
			"name": "Grilled Chicken on the Barbie",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 38.0,
			"image": "images/outback/ccapp-grilledchicken-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "59",
			"description": "Wood-fire grilled chicken breast topped with saut\u00e9ed mushrooms, crisp bacon, melted Monterey Jack and Cheddar and honey mustard sauce served with Aussie Fries.",
			"price": 40.0,
			"barcode": "59",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 40.0,
			"id": 60,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 14,
				"full_name": "Entrees:Chicken, Ribs and More",
				"name": "Chicken, Ribs and More"
			},
			"name": "Alice Springs Chicken",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 40.0,
			"image": "images/outback/ccapp-AliceChicken-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "60",
			"description": "Smoked, wood-fire grilled and brushed with a tangy BBQ sauce and served with Aussie Fries.",
			"price": 65.0,
			"barcode": "60",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 65.0,
			"id": 61,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 14,
				"full_name": "Entrees:Chicken, Ribs and More",
				"name": "Chicken, Ribs and More"
			},
			"name": "Baby Back Ribs",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 65.0,
			"image": "images/outback/ccapp-BabyBackRibs-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "61",
			"description": "Fettuccine noodles tossed in a creamy Parmesan cheese sauce. Add grilled shrimp or chicken breast, or choose both.",
			"price": 55.0,
			"barcode": "61",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 55.0,
			"id": 62,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 14,
				"full_name": "Entrees:Chicken, Ribs and More",
				"name": "Chicken, Ribs and More"
			},
			"name": "No Rules Parmesan Pasta",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 55.0,
			"image": "images/outback/ccapp-NRPasta-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "62",
			"description": "Crispy white-meat tenders served with choice of honey mustard or Buffalo sauce, Aussie Fries and choice of one side.",
			"price": 35.0,
			"barcode": "62",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 35.0,
			"id": 63,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 14,
				"full_name": "Entrees:Chicken, Ribs and More",
				"name": "Chicken, Ribs and More"
			},
			"name": "Chicken Tender Platter",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 35.0,
			"image": "images/outback/ccapp-10263-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "63",
			"description": "Wood-fire grilled chicken topped with a Parmesan-Herb crust and a fresh tomato basil garnish and served with fresh seasonal mixed veggies.",
			"price": 40.0,
			"barcode": "63",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 40.0,
			"id": 64,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 14,
				"full_name": "Entrees:Chicken, Ribs and More",
				"name": "Chicken, Ribs and More"
			},
			"name": "Parmesan-Herb Crusted Chicken",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 40.0,
			"image": "images/outback/ccapp-10019-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "64",
			"description": "1/3 rack of baby back ribs and a wood-fire grilled chicken breast served with Aussie Fries.",
			"price": 70.0,
			"barcode": "64",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 70.0,
			"id": 65,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 14,
				"full_name": "Entrees:Chicken, Ribs and More",
				"name": "Chicken, Ribs and More"
			},
			"name": "Robs & Chicken on the Barbie",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 70.0,
			"image": "images/outback/ccapp-08775-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "65",
			"description": "Tender, juicy and prepared over our wood-fire grill. Served with garlic mashed potatoes and choice of Signature Side Salad.",
			"price": 50.0,
			"barcode": "65",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 50.0,
			"id": 66,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 14,
				"full_name": "Entrees:Chicken, Ribs and More",
				"name": "Chicken, Ribs and More"
			},
			"name": "Pork Porterhouse",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 50.0,
			"image": "images/outback/ccapp-09754-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "66",
			"description": "Finished with a rich Cabernet wine sauce and served with garlic mashed potatoes and fresh seasonal mixed veggies.",
			"price": 70.0,
			"barcode": "66",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 70.0,
			"id": 67,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 14,
				"full_name": "Entrees:Chicken, Ribs and More",
				"name": "Chicken, Ribs and More"
			},
			"name": "New Zealand Lamb",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 70.0,
			"image": "images/outback/ccapp-06508-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "67",
			"description": "Seasoned french fries.",
			"price": 30.0,
			"barcode": "67",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 30.0,
			"id": 68,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 15,
				"full_name": "Entrees:Signature Potatoes",
				"name": "Signature Potatoes"
			},
			"name": "Aussie Fries",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 30.0,
			"image": "images/outback/ccapp-09003-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "68",
			"description": "Homemade mashed potatoes whipped with heavy cream, butter, milk and roasted garlic, garnished with chopped parsley.",
			"price": 25.0,
			"barcode": "68",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 25.0,
			"id": 69,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 15,
				"full_name": "Entrees:Signature Potatoes",
				"name": "Signature Potatoes"
			},
			"name": "Garlic Mashed Potatoes",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 25.0,
			"image": "images/outback/ccapp-09000-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "69",
			"description": "Baked potato rolled in kosher salt available with butter, mixed cheese, chives, sour cream and bacon bits.",
			"price": 30.0,
			"barcode": "69",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 30.0,
			"id": 70,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 15,
				"full_name": "Entrees:Signature Potatoes",
				"name": "Signature Potatoes"
			},
			"name": "Baked Potato",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 30.0,
			"image": "images/outback/ccapp-09002-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "70",
			"description": "Baked sweet potato topped with honey butter, brown sugar and cinnamon.",
			"price": 30.0,
			"barcode": "70",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 30.0,
			"id": 71,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 15,
				"full_name": "Entrees:Signature Potatoes",
				"name": "Signature Potatoes"
			},
			"name": "Sweet Potato",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 30.0,
			"image": "images/outback/ccapp-09015-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "71",
			"description": "Broccoli spears cut fresh daily, steamed with seasoned butter.",
			"price": 15.0,
			"barcode": "71",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 15.0,
			"id": 72,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 16,
				"full_name": "Entrees:Classic Sides",
				"name": "Classic Sides"
			},
			"name": "Fresh Steamed Broccoli",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 15.0,
			"image": "images/outback/ccapp-09021-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "72",
			"description": "Fresh steamed vegetables: broccoli, squash and carrots. Cut fresh daily, steamed with seasoned butter.",
			"price": 20.0,
			"barcode": "72",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 20.0,
			"id": 73,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 16,
				"full_name": "Entrees:Classic Sides",
				"name": "Classic Sides"
			},
			"name": "Fresh Seasonal Mixed Veggies",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 20.0,
			"image": "images/outback/ccapp-09006-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "73",
			"description": "Button mushrooms saut\u00e9ed in burgundy wine with bits of onions.",
			"price": 30.0,
			"barcode": "73",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 30.0,
			"id": 74,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 16,
				"full_name": "Entrees:Classic Sides",
				"name": "Classic Sides"
			},
			"name": "Saut\u00e9ed Mushrooms",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 30.0,
			"image": "images/outback/ccapp-09005-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "74",
			"description": "Mixed lettuce with Napa cabbage, dressing of choice, cucumbers, Monterey Jack and Cheddar cheese, tomatoes, red onions and homemade croutons.",
			"price": 20.0,
			"barcode": "74",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 20.0,
			"id": 75,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 16,
				"full_name": "Entrees:Classic Sides",
				"name": "Classic Sides"
			},
			"name": "House Salad",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 20.0,
			"image": "images/outback/ccapp-09004-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "75",
			"description": "Fresh asparagus tossed in olive oil, seasoned and cooked on our wood-fire grill.",
			"price": 40.0,
			"barcode": "75",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 40.0,
			"id": 76,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 17,
				"full_name": "Entrees:Premium Sides",
				"name": "Premium Sides"
			},
			"name": "Grilled Aspargus",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 40.0,
			"image": "images/outback/ccapp-09034-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "76",
			"description": "Steamed broccoli topped with a creamy four cheese sauce and a blend of natural Monterey Jack and Cheddar cheeses.",
			"price": 45.0,
			"barcode": "76",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 45.0,
			"id": 77,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 17,
				"full_name": "Entrees:Premium Sides",
				"name": "Premium Sides"
			},
			"name": "Broccoli & Cheese",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 45.0,
			"image": "images/outback/ccapp-10253-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "77",
			"description": "Creamy Cheddar and smoked Gouda mac and cheese. Seasoned and topped with toasted garlic breadcrumbs.",
			"price": 45.0,
			"barcode": "77",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 45.0,
			"id": 78,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 17,
				"full_name": "Entrees:Premium Sides",
				"name": "Premium Sides"
			},
			"name": "Steakhouse Mac & Cheese",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 45.0,
			"image": "images/outback/ccapp-10257-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "78",
			"description": "Creamy chocolate mousse layered with OREO\u00ae crumbles topped with warm chocolate sauce.",
			"price": 20.0,
			"barcode": "78",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 20.0,
			"id": 79,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 19,
				"full_name": "Desserts:Mini Sweets",
				"name": "Mini Sweets"
			},
			"name": "Double Chocolate Mini Dessert Parfait",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 20.0,
			"image": "images/outback/ccapp-10288-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "79",
			"description": "Sweet graham cracker crumbs layered with tart key lime pie filling topped with a mini lime wedge.",
			"price": 20.0,
			"barcode": "79",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 20.0,
			"id": 80,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 19,
				"full_name": "Desserts:Mini Sweets",
				"name": "Mini Sweets"
			},
			"name": "Classic Key Lime Mini Dessert Parfait",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 20.0,
			"image": "images/outback/ccapp-10289-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "80",
			"description": "Rich chocolate sauce and vanilla ice cream are blended to perfection. Topped with whipped cream and chocolate shavings.",
			"price": 20.0,
			"barcode": "80",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 20.0,
			"id": 81,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 19,
				"full_name": "Desserts:Mini Sweets",
				"name": "Mini Sweets"
			},
			"name": "Chocolate Mini Milkshake",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 20.0,
			"image": "images/outback/ccapp-09703-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "81",
			"description": "Hand-scooped vanilla ice cream and OREO\u00ae crumbles are blended into the ultimate cookies and cream combination. Topped with whipped cream and extra OREO\u00ae cookie crumbles.",
			"price": 25.0,
			"barcode": "81",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 25.0,
			"id": 82,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 19,
				"full_name": "Desserts:Mini Sweets",
				"name": "Mini Sweets"
			},
			"name": "Oreo Mini Milkshake",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 25.0,
			"image": "images/outback/ccapp-09808-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "82",
			"description": "Cool mint and OREO\u00ae blended together with vanilla ice cream and topped with whipped cream and OREO\u00ae cookie crumbles.",
			"price": 30.0,
			"barcode": "82",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 30.0,
			"id": 83,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 19,
				"full_name": "Desserts:Mini Sweets",
				"name": "Mini Sweets"
			},
			"name": "Mint Chocolate Mini Milkshake",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 30.0,
			"image": "images/outback/ccapp-10386-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "83",
			"description": "Aussie-sized slice of premium New York-style cheesecake served with a choice of raspberry or chocolate sauce.",
			"price": 25.0,
			"barcode": "83",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 25.0,
			"id": 84,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 20,
				"full_name": "Desserts:Shareable Desserts",
				"name": "Shareable Desserts"
			},
			"name": "New York-Style Cheesecake",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 25.0,
			"image": "images/outback/ccapp-10384-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "84",
			"description": "An extra generous pecan brownie topped with rich vanilla ice cream, our warm chocolate sauce, chocolate shavings and whipped cream.",
			"price": 25.0,
			"barcode": "84",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 25.0,
			"id": 85,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 20,
				"full_name": "Desserts:Shareable Desserts",
				"name": "Shareable Desserts"
			},
			"name": "Chocolate Thunder From Down Under",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 25.0,
			"image": "images/outback/ccapp-11001-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "85",
			"description": "Moist layers of carrot cake with coconut and pecans topped with a sweet vanilla cream cheese icing.",
			"price": 24.0,
			"barcode": "85",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 24.0,
			"id": 86,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 20,
				"full_name": "Desserts:Shareable Desserts",
				"name": "Shareable Desserts"
			},
			"name": "Triple-layer Carrot Cake",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 24.0,
			"image": "images/outback/ccapp-11014-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "86",
			"description": "Individual portions of the Chocolate Thunder from Down Under\u00ae with pecan brownie, Classic Key Lime Mini Dessert Parfait and Double Chocolate Mini Dessert Parfait.",
			"price": 30.0,
			"barcode": "86",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 30.0,
			"id": 87,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 20,
				"full_name": "Desserts:Shareable Desserts",
				"name": "Shareable Desserts"
			},
			"name": "Sweet Adventure Sampler Trio",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 30.0,
			"image": "images/outback/ccapp-10385-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "87",
			"description": "A warm salted caramel cookie with pieces of white chocolate, almond toffee and pretzels, toasted in a skillet and served with vanilla ice cream.",
			"price": 30.0,
			"barcode": "87",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 30.0,
			"id": 88,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 20,
				"full_name": "Desserts:Shareable Desserts",
				"name": "Shareable Desserts"
			},
			"name": "Salted Caramel Cookie Skillet",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 30.0,
			"image": "images/outback/ccapp-10233-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "88",
			"description": "Light Pale Lager (St. Louis, MO)",
			"price": 5.0,
			"barcode": "89",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 5.0,
			"id": 89,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 22,
				"full_name": "Drinks:Beers",
				"name": "Beers"
			},
			"name": "Bud Light Draft",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 5.0,
			"image": "images/outback/ccapp-budlightdraft-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "89",
			"description": "American Style Pale Lager (St. Louis, MO)",
			"price": 5.0,
			"barcode": "90",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 5.0,
			"id": 90,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 22,
				"full_name": "Drinks:Beers",
				"name": "Beers"
			},
			"name": "Budweiser Bottle",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 5.0,
			"image": "images/outback/ccapp-33010-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "90",
			"description": "Light Pale Lager (Golden, CO)",
			"price": 5.0,
			"barcode": "91",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 5.0,
			"id": 91,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 22,
				"full_name": "Drinks:Beers",
				"name": "Beers"
			},
			"name": "Coors Light Bottle",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 5.0,
			"image": "images/outback/ccapp-33020-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "91",
			"description": "Light Pale Lager (Milwaukee, WI)",
			"price": 6.0,
			"barcode": "92",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 6.0,
			"id": 92,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 22,
				"full_name": "Drinks:Beers",
				"name": "Beers"
			},
			"name": "Miller Lite Bottle",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 6.0,
			"image": "images/outback/ccapp-33060-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "92",
			"description": "Light Pale Lager (St Louis, MO)",
			"price": 6.0,
			"barcode": "93",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 6.0,
			"id": 93,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 22,
				"full_name": "Drinks:Beers",
				"name": "Beers"
			},
			"name": "Michelob Ultra Bottle",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 6.0,
			"image": "images/outback/ccapp-33075-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "93",
			"description": "Golden Lager (Australia)",
			"price": 8.0,
			"barcode": "94",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 8.0,
			"id": 94,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 22,
				"full_name": "Drinks:Beers",
				"name": "Beers"
			},
			"name": "Foster's 25.4 oz. Oil Can",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 8.0,
			"image": "images/outback/ccapp-33085-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "94",
			"description": "Pale Lager (Mexico)",
			"price": 6.0,
			"barcode": "95",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 6.0,
			"id": 95,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 22,
				"full_name": "Drinks:Beers",
				"name": "Beers"
			},
			"name": "Corona Bottle",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 6.0,
			"image": "images/outback/ccapp-33025-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "95",
			"description": "Special Lager (Mexico)",
			"price": 6.0,
			"barcode": "96",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 6.0,
			"id": 96,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 22,
				"full_name": "Drinks:Beers",
				"name": "Beers"
			},
			"name": "Dos Equis Lager XX Bottle",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 6.0,
			"image": "images/outback/ccapp-35930-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "96",
			"description": "Pale Lager (Netherlands)",
			"price": 5.0,
			"barcode": "97",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 5.0,
			"id": 97,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 22,
				"full_name": "Drinks:Beers",
				"name": "Beers"
			},
			"name": "Heineken Bottle",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 5.0,
			"image": "images/outback/ccapp-33040-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "97",
			"description": "Premium English Brown Ale (England)",
			"price": 8.0,
			"barcode": "98",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 8.0,
			"id": 98,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 22,
				"full_name": "Drinks:Beers",
				"name": "Beers"
			},
			"name": "Newcastle Brown Ale Bottle",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 8.0,
			"image": "images/outback/ccapp-33080-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "98",
			"description": "Vienna Style American Lager (Boston, MA)",
			"price": 7.0,
			"barcode": "99",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 7.0,
			"id": 99,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 22,
				"full_name": "Drinks:Beers",
				"name": "Beers"
			},
			"name": "Samuel Adams Boston Lager Draft",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 7.0,
			"image": "images/outback/ccapp-sadamsdraft-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "99",
			"description": "Belgian Style Wheat Ale (Golden, CO)",
			"price": 7.0,
			"barcode": "100",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 7.0,
			"id": 100,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 22,
				"full_name": "Drinks:Beers",
				"name": "Beers"
			},
			"name": "Blue Moon Belgian White Draft",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 7.0,
			"image": "images/outback/ccapp-bluemoonbelgianwhdraft-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "100",
			"description": "Hard Cider (Cincinnati, OH)",
			"price": 8.0,
			"barcode": "101",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 8.0,
			"id": 101,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 22,
				"full_name": "Drinks:Beers",
				"name": "Beers"
			},
			"name": "Angry Orchard Crisp Apple Hard Cider Bottle",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 8.0,
			"image": "images/outback/ccapp-36125-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "101",
			"description": "Belgian-Style Wheat Ale (St Louis, MO)",
			"price": 8.0,
			"barcode": "102",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 8.0,
			"id": 102,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 22,
				"full_name": "Drinks:Beers",
				"name": "Beers"
			},
			"name": "Shock Top Belgian White Bottle",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 8.0,
			"image": "images/outback/ccapp-33225-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "102",
			"description": "Patr\u00f3n\u00ae Silver or Avi\u00f3n\u00ae Silver Tequila, Grand Marnier\u00ae and Cointreau\u00ae are hand-shaken with a trio of lemon, lime and orange juices. Served straight up or on the rocks.",
			"price": 10.0,
			"barcode": "103",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 10.0,
			"id": 103,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 23,
				"full_name": "Drinks:Cocktails",
				"name": "Cocktails"
			},
			"name": "Top Shelf 'Rita",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 10.0,
			"image": "images/outback/ccapp-topselfrita-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "103",
			"description": "(Under 150 Calories) 100% Blue Agave El Jimador\u00ae Reposado Tequila naturally mixed with real citrus juices and a splash of orange juice.",
			"price": 10.0,
			"barcode": "104",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 10.0,
			"id": 104,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 23,
				"full_name": "Drinks:Cocktails",
				"name": "Cocktails"
			},
			"name": "Naturally Skinny 'Rita",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 10.0,
			"image": "images/outback/ccapp-naturalskinnyrita-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "104",
			"description": "Our proprietary house margarita made with Sauza\u00ae Gold Tequila. Have it frozen or on the rocks.",
			"price": 10.0,
			"barcode": "105",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 10.0,
			"id": 105,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 23,
				"full_name": "Drinks:Cocktails",
				"name": "Cocktails"
			},
			"name": "Sauza Gold Coast 'Rita",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 10.0,
			"image": "images/outback/ccapp-goldcoastrita-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "105",
			"description": "Avi\u00f3n\u00ae Silver Tequila and Cointreau\u00ae Orange liqueur are hand-shaken with our blood orange margarita mix and garnished with a salted rim.",
			"price": 10.0,
			"barcode": "106",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 10.0,
			"id": 106,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 23,
				"full_name": "Drinks:Cocktails",
				"name": "Cocktails"
			},
			"name": "Blood Orange 'Rita",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 10.0,
			"image": "images/outback/ccapp-37458-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "106",
			"description": "100% Blue Agave El Jimador\u00ae Reposado Tequila shaken with tropical flavors of mango, passion fruit & blood orange sour and finished with a mango garnish.",
			"price": 10.0,
			"barcode": "107",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 10.0,
			"id": 107,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 23,
				"full_name": "Drinks:Cocktails",
				"name": "Cocktails"
			},
			"name": "Mango Passion Fruit 'Rita",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 10.0,
			"image": "images/outback/ccapp-10018-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "107",
			"description": "Hand-shaken with fresh mint leaves, fresh lime juice, agave nectar and topped with soda. Pick your Rum: Sailor Jerry\u2122 Spiced Rum, Bacardi\u00ae Superior Light Rum or Bacardi\u00ae Limon. Pick your Fresh Fruit: Strawberry, Pineapple, Blackberry or Classic Lime.",
			"price": 15.0,
			"barcode": "108",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 15.0,
			"id": 108,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 23,
				"full_name": "Drinks:Cocktails",
				"name": "Cocktails"
			},
			"name": "Fresh Fruit Mojitos",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 15.0,
			"image": "images/outback/ccapp-37446-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "108",
			"description": "Little Boomey\u00ae Australian Cabernet, Korbel\u00ae Brandy and a mix of pineapple, mango and orange juice.",
			"price": 15.0,
			"barcode": "109",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 15.0,
			"id": 109,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 23,
				"full_name": "Drinks:Cocktails",
				"name": "Cocktails"
			},
			"name": "New South Wales Sangria",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 15.0,
			"image": "images/outback/ccapp-newsouthwales-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "109",
			"description": "Australian Jacob's Creek\u2122 Moscato and Finlandia\u00ae Raspberry Vodka are hand-shaken with gourmet blackberry flavor and pineapple juice for just a touch of sweetness.",
			"price": 16.0,
			"barcode": "110",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 16.0,
			"id": 110,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 23,
				"full_name": "Drinks:Cocktails",
				"name": "Cocktails"
			},
			"name": "Blackberry Sangria",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 16.0,
			"image": "images/outback/ccapp-blackberrysangria-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "110",
			"description": "Enjoy Ole Smoky\u00ae Blackberry Moonshine\u2122 hand-shaken with muddled seasonal berries, orange, pineapple and cranberry juice.",
			"price": 15.0,
			"barcode": "111",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 15.0,
			"id": 111,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 23,
				"full_name": "Drinks:Cocktails",
				"name": "Cocktails"
			},
			"name": "Huckleberry Hooch Moonshine Cocktail",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 15.0,
			"image": "images/outback/ccapp-huckleberry-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "111",
			"description": "The famous Australian peach bellini. This frosty combination has peaches, champagne, SVEDKA\u00ae Vodka and DeKuyper\u00ae Peachtree\u00ae Schnapps. Try it Aussie-Style by adding a float of La Marca Prosecco for an additional 1.00",
			"price": 20.0,
			"barcode": "112",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 20.0,
			"id": 112,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 23,
				"full_name": "Drinks:Cocktails",
				"name": "Cocktails"
			},
			"name": "The Wallaby Darned",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 20.0,
			"image": "images/outback/ccapp-37510-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "112",
			"description": "Drift away to your island paradise with Absolut\u00ae Mandrin Vodka, Cruzan\u00ae Passion Fruit Rum, Malibu\u00ae Coconut Rum, blood orange sour and a splash of pineapple juice.",
			"price": 20.0,
			"barcode": "113",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 20.0,
			"id": 113,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 23,
				"full_name": "Drinks:Cocktails",
				"name": "Cocktails"
			},
			"name": "Castway Cocktail",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 20.0,
			"image": "images/outback/ccapp-37938-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "113",
			"description": "Deep Eddy\u00ae Ruby Red Vodka & Sailor Jerry\u00ae Rum shaken up with passion fruit puree and orange juice.",
			"price": 20.0,
			"barcode": "114",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 20.0,
			"id": 114,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 23,
				"full_name": "Drinks:Cocktails",
				"name": "Cocktails"
			},
			"name": "Passionate Punch",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 20.0,
			"image": "images/outback/ccapp-37388-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "114",
			"description": "Bacardi\u00ae Oakheart Spiced Rum, Absolut\u00ae Mandrin Vodka, blood orange and ginger-infused syrup topped with a splash of soda.",
			"price": 20.0,
			"barcode": "115",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 20.0,
			"id": 115,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 23,
				"full_name": "Drinks:Cocktails",
				"name": "Cocktails"
			},
			"name": "Tiki Bandit",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 20.0,
			"image": "images/outback/ccapp-37389-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "115",
			"description": "A creamy blend of Malibu\u00ae Coconut Rum, Cr\u00e8me of Coconut, pineapple juice and real crushed pineapple. Add an extra shot of Sailor Jerry\u2122 Rum for an additional 1.00",
			"price": 15.0,
			"barcode": "116",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 15.0,
			"id": 116,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 23,
				"full_name": "Drinks:Cocktails",
				"name": "Cocktails"
			},
			"name": "Pina Colada",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 15.0,
			"image": "images/outback/ccapp-37554-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "116",
			"description": "Chilled Absolut\u00ae or Tito\u2019s\u00ae Handmade Vodka with just a hint of dry vermouth, hand-shaken and served straight up or on the rocks with three large olives. Have it with Grey Goose \u00ae for an additional 1.00",
			"price": 20.0,
			"barcode": "117",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 20.0,
			"id": 117,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 23,
				"full_name": "Drinks:Cocktails",
				"name": "Cocktails"
			},
			"name": "Classic Steakhouse Martini",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 20.0,
			"image": "images/outback/ccapp-37690-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "117",
			"description": "Absolut\u00ae Citron Vodka, Cointreau\u00ae, mango and a splash of Ocean Spray\u00ae cranberry juice, served straight up. Strip a few calories and try our Sydney's Cosmo with Skinnygirl\u2122 Bare Naked Vodka",
			"price": 20.0,
			"barcode": "118",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 20.0,
			"id": 118,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 23,
				"full_name": "Drinks:Cocktails",
				"name": "Cocktails"
			},
			"name": "Sydney's Cosmo",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 20.0,
			"image": "images/outback/ccapp-37292-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "118",
			"description": "Coca-Cola is the most popular and biggest-selling soft drink in history, as well as one of the most recognizable brands in the world.",
			"price": 5.0,
			"barcode": "119",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 5.0,
			"id": 119,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 24,
				"full_name": "Drinks:Soda and More",
				"name": "Soda and More"
			},
			"name": "Coca-cola",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 5.0,
			"image": "images/outback/ccapp-coke-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "119",
			"description": "Coca-Cola Zero offers great Coke taste, uplifting refreshment and zero sugar.",
			"price": 5.0,
			"barcode": "120",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 5.0,
			"id": 120,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 24,
				"full_name": "Drinks:Soda and More",
				"name": "Soda and More"
			},
			"name": "Coca-cola Zero",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 5.0,
			"image": "images/outback/ccapp-cokezero-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "120",
			"description": "Diet Coke is a sugar- and calorie-free soft drink.",
			"price": 5.0,
			"barcode": "121",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 5.0,
			"id": 121,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 24,
				"full_name": "Drinks:Soda and More",
				"name": "Soda and More"
			},
			"name": "Dite Coke",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 5.0,
			"image": "images/outback/ccapp-dietcoke-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		},
		{
			"status": {
				"id": 0,
				"name": "Dispon\u00edvel"
			},
			"production_location": {
				"id": 1,
				"name": "Cozinha/Bar/Caixa"
			},
			"code": "121",
			"description": "Minute Maid has been making juice for more than 60 years and has a heritage of nutrition, innovation, and quality.",
			"price": 5.0,
			"barcode": "122",
			"tax": {
				"id": 3,
				"name": "N\u00e3o tributado"
			},
			"cost": 5.0,
			"id": 122,
			"unit": {},
			"thumbimage": "",
			"category": {
				"id": 24,
				"full_name": "Drinks:Soda and More",
				"name": "Soda and More"
			},
			"name": "Minute Maid Lemonade",
			"markup": 0.0,
			"on_sale": {},
			"taxes": {
				"issqn_template_id": null,
				"cofins_template_id": 3,
				"pis_template_id": 2,
				"icms_template_id": 1
			},
			"base_price": 5.0,
			"image": "images/outback/ccapp-lemonademm-2x.png",
			"stock": {
				"avaiable_units": 49,
				"manage_stock": true
			}
		}
	]
};

FakeResponses.product_details = {
	"status": 0,
	"data": {
		"status": "Dispon\u00edvel",
		"code": "01",
		"description": "Suculentos cubos de peito de frango empanados, banhados pelo exclusivo molho Wing Sauce, acompanhados de bleu cheese.",
		"price": 26.9,
		"barcode": "2567535345363",
		"tax": {
			"id": 2,
			"name": "Isen\u00e7\u00e3o"
		},
		"cost": 15.0,
		"id": 2,
		"unit": {
			"id": 1,
			"name": "Kg"
		},
		"category": {
			"id": 2,
			"full_name": "Appetizers:Appetizers",
			"name": "Appetizers"
		},
		"name": "Boneless Buffalo Wings",
		"markup": 79.33,
		"on_sale": {
			"price": 20.0,
			"start_date": "2015-04-14",
			"end_date": "2015-04-21"
		},
		"base_price": 26.9,
		"stock": {
			"avaiable_units": 48,
			"manage_stock": true
		}
	}
};

FakeResponses.tax_constant_list = {
	status: 0,
	data: [{
		id: 1,
		value: 0,
		name: "Substituição tributária"
	}, {
		id: 2,
		value: 0,
		name: "Isenção"
	}, {
		id: 3,
		value: 0,
		name: "Não tributado"
	}, {
		id: 4,
		value: 0,
		name: "ISS"
	}
	]
};



FakeResponses.network_check = {
	"data": {
		"dns1": "8.8.8.8",
		"dns2": "8.8.4.4",
		"ifaces": [{
			"iface": "eth0",
			"ip_address": "192.168.1.100",
			"mac_address": "00:02:2a:d4:4d:1f",
			"mode": "static",
			"net_mask": "255.255.255.0",
			"running": false,
			"up": true
		},
		]
	},
	"message": "",
	"status": 0
};

FakeResponses.network_config = {
	iface: '$iface',
	mode: 'static',
	ip_address: '$ip',
	net_mask: '$net_mask',
	gateway: '$gateway',
	dns1: '$dns1',
	dns2: '$dns2'
};

FakeResponses.nf_printerCheck = {
	"status": 0,
	"message": "",
	"data": {
		"printers": [{
			"device": "/dev/ttyUSB0",
			"id": 3,
			"description": "Local"
		}, {
			"device": "/dev/ttyUSB0",
			"id": 4,
			"description": "Local"
		}, {
			"device": "/dev/ttyUSB0",
			"id": 5,
			"description": "Local"
		},
		]
	}
};

FakeResponses.nf_printer_add = {
	"printers": [{
		"description": "Local",
		"device": "/dev/ttyUSB0"
	}, {
		"description": "Remote",
		"device": "192.168.1.31"
	}
	]
};

FakeResponses.nf_printer_edit = {
	"printer": [{
		"description": "Remote",
		"device": "/dev/ttyUSB1"
	}
	]
};

FakeResponses.nf_printer_remove = {
	"printers": [{
		"description": "Local"
	}
	],
};

FakeResponses.fiscal_printer_status = {
	"status": 0,
	"message": "",
	"data": {
		"printers": [{
			"active": true,
			"baudrate": 9600,
			"constants": {
				"payments": [{
					"constant_name": "Dinheiro",
					"constant_type": 2,
					"constant_value": null,
					"device_value": "01"
				}
				],
				"tax": [{
					"constant_name": "Substitution",
					"constant_type": 1,
					"constant_value": null,
					"device_value": "FF"
				}, {
					"constant_name": "Exemption",
					"constant_type": 1,
					"constant_value": null,
					"device_value": "II"
				}, {
					"constant_name": "No tax",
					"constant_type": 1,
					"constant_value": null,
					"device_value": "NN"
				}
				],
				"units": [{
					"constant_name": "Unnamed",
					"constant_type": 0,
					"constant_value": null,
					"device_value": "qw"
				}
				]
			},
			"id": 1,
			"port": "/home/carlos/.wine/dosdevices/com4",
			"printer": "Bematech MP2100 TH FI",
			"register_cro": 1,
			"register_date": "2015­04­27",
			"user_number": 1
		}
		]
	}
};

FakeResponses.fiscal_printer_configs = {
	"data": {
		"baudrates": [
			"4800",
			"9600",
			"19200",
			"38400",
			"57600",
			"115200"
		],
		"ports": [
			"/dev/ttyS0"
		],
		"printers": [
			"Elgin K Fiscal",
			"Epson FBII",
			"Epson FBIII",
			"Bematech MP20 TH FI",
			"Bematech MP2100 TH FI",
			"Bematech MP25 FI",
			"Dataregis ECF­IF 3202DT (Quick)",
			"Pertopay Fiscal 2023",
			"Daruma FS 2100",
			"Daruma FS 345",
			"Daruma FS 600 MFD"
		]
	},
	"message": "",
	"status": 0
};



FakeResponses.client_list = {
	"status": 0,
	"message": "",
	"data": [{
		"status": "Solvente",
		"cell_number": "84232342",
		"id": 2,
		"cpf": "963.382.530-04",
		"name": "Manuel Dias de Abreu"
	}, {
		"status": "Solvente",
		"cell_number": "85352315",
		"id": 3,
		"cpf": "816.744.418-00",
		"name": "Marta Vannucci"
	}, {
		"status": "Solvente",
		"cell_number": "88393245",
		"id": 4,
		"cpf": "255.664.342-07",
		"name": "Bartolomeu de Gusm\u00e3o"
	}
	]
};

FakeResponses.client_detail = {
	"status": 0,
	"message": "",
	"data": {
		"phone_number": "32424321",
		"status": "Solvente",
		"name": "Lu00edvio Gomes Moreira",
		"birth": "",
		"cell_number": "98430324",
		"address": {
			"city": "S\u00e3o Paulo",
			"state": "SP",
			"street": "Rua XV de Novembro",
			"neighborhood": "Centro",
			"country": "Brazil",
			"complement": "",
			"number": 3331,
			"is_main_address": true,
			"zipcode": ""
		},
		"id": 1,
		"cpf": "370.879.258-06",
		"email": ""
	}
};




/*
 * Point of Sale
 */


FakeResponses.pos_list = {
	"data": [
		{
			"description": "POS 10",
			"id": 3,
			"mac_address": null,
			"pos_number": 2,
			"printer_id": null,
			"status": "Idle"
		}
	],
	"message": "POS sucessfully listed.",
	"status": 0
};

FakeResponses.pos_read = {
	"data": {
		"description": "POS 10",
		"id": 2,
		"mac_address": "AA:FF:DD:DD:FF:GG",
		"pos_number": 1,
		"printer_id": 1,
		"sale_session": {
			"close_date": null,
			"discount": 0.0,
			"id": 5,
			"open_date": "2015-10-26 10:38:33",
			"quantity": 36,
			"sale_items": [
				{
					"accept_date": "2015-10-26 10:39:53",
					"base_price": 25.9,
					"cancel_date": null,
					"description": "Mozzarella Sticks",
					"discount": 0.0,
					"id": 8,
					"price": 25.9,
					"quantity": 3.0,
					"quantity_decreased": 0.0,
					"subtotal": 77.7
				},
				{
					"accept_date": "2015-10-26 10:39:55",
					"base_price": 25.9,
					"cancel_date": null,
					"description": "Mozzarella Sticks",
					"discount": 0.0,
					"id": 9,
					"price": 25.9,
					"quantity": 3.0,
					"quantity_decreased": 0.0,
					"subtotal": 77.7
				},
				{
					"accept_date": "2015-10-26 10:39:57",
					"base_price": 25.9,
					"cancel_date": null,
					"description": "Mozzarella Sticks",
					"discount": 0.0,
					"id": 10,
					"price": 25.9,
					"quantity": 3.0,
					"quantity_decreased": 0.0,
					"subtotal": 77.7
				},
				{
					"accept_date": "2015-10-26 10:39:58",
					"base_price": 25.9,
					"cancel_date": null,
					"description": "Mozzarella Sticks",
					"discount": 0.0,
					"id": 11,
					"price": 25.9,
					"quantity": 3.0,
					"quantity_decreased": 0.0,
					"subtotal": 77.7
				},
				{
					"accept_date": "2015-10-26 10:39:59",
					"base_price": 25.9,
					"cancel_date": null,
					"description": "Mozzarella Sticks",
					"discount": 0.0,
					"id": 12,
					"price": 25.9,
					"quantity": 3.0,
					"quantity_decreased": 0.0,
					"subtotal": 77.7
				},
				{
					"accept_date": "2015-10-26 10:40:04",
					"base_price": 25.9,
					"cancel_date": null,
					"description": "Mozzarella Sticks",
					"discount": 0.0,
					"id": 13,
					"price": 25.9,
					"quantity": 3.0,
					"quantity_decreased": 0.0,
					"subtotal": 77.7
				},
				{
					"accept_date": "2015-10-26 10:40:04",
					"base_price": 25.9,
					"cancel_date": null,
					"description": "Mozzarella Sticks",
					"discount": 0.0,
					"id": 14,
					"price": 25.9,
					"quantity": 3.0,
					"quantity_decreased": 0.0,
					"subtotal": 77.7
				},
				{
					"accept_date": "2015-10-26 10:40:22",
					"base_price": 25.9,
					"cancel_date": null,
					"description": "Mozzarella Sticks",
					"discount": 0.0,
					"id": 15,
					"price": 25.9,
					"quantity": 3.0,
					"quantity_decreased": 0.0,
					"subtotal": 77.7
				},
				{
					"accept_date": "2015-10-26 10:40:22",
					"base_price": 25.9,
					"cancel_date": null,
					"description": "Mozzarella Sticks",
					"discount": 0.0,
					"id": 16,
					"price": 25.9,
					"quantity": 3.0,
					"quantity_decreased": 0.0,
					"subtotal": 77.7
				},
				{
					"accept_date": "2015-10-26 10:40:23",
					"base_price": 25.9,
					"cancel_date": null,
					"description": "Mozzarella Sticks",
					"discount": 0.0,
					"id": 17,
					"price": 25.9,
					"quantity": 3.0,
					"quantity_decreased": 0.0,
					"subtotal": 77.7
				},
				{
					"accept_date": "2015-10-26 10:40:24",
					"base_price": 25.9,
					"cancel_date": null,
					"description": "Mozzarella Sticks",
					"discount": 0.0,
					"id": 18,
					"price": 25.9,
					"quantity": 3.0,
					"quantity_decreased": 0.0,
					"subtotal": 77.7
				},
				{
					"accept_date": "2015-10-26 10:40:26",
					"base_price": 25.9,
					"cancel_date": null,
					"description": "Mozzarella Sticks",
					"discount": 0.0,
					"id": 19,
					"price": 25.9,
					"quantity": 3.0,
					"quantity_decreased": 0.0,
					"subtotal": 77.7
				}
			],
			"status": "Open",
			"subtotal": 932.4
		},
		"status": "Selling"
	},
	"message": "POS sucessfully read.",
	"status": 0
};

FakeResponses.pos_create = {
	"data": {
		"description": "POS 10",
		"id": 8,
		"mac_address": "AA:FF:DD:DD:FF:GG"
	},
	"message": "",
	"status": 0
};

FakeResponses.pos_update = {
	"data": {
		"description": "POS 10",
		"id": 2,
		"mac_address": "AA:FF:DD:DD:FF:GG",
		"pos_number": 1,
		"printer_id": 1,
		"status": "Selling"
	},
	"message": "POS sucessfully updated.",
	"status": 0
};

FakeResponses.pos_delete = {
	"status": 0,
	"message": "POS sucessfully deleted."
};


FakeResponses.sale_session_create = {
	"data": {
		"close_date": null,
		"discount": 0.0,
		"id": 6,
		"open_date": "2015-10-26 11:09:50",
		"quantity": 0,
		"sale_items": null,
		"status": "Open",
		"subtotal": 0.0
	},
	"message": "Sale session successfully created.",
	"status": 0
};

FakeResponses.sale_session_read = {
	"data": {
		"close_date": null,
		"discount": 0.0,
		"id": 1,
		"open_date": "2015-10-26 11:09:50",
		"quantity": 0,
		"sale_items": null,
		"status": "Open",
		"subtotal": 0.0
	},
	"message": "Sale session successfully read.",
	"status": 0
};

FakeResponses.sale_session_list = {
	"data": [
		{
			"close_date": null,
			"discount": 0.0,
			"id": 1,
			"open_date": "2015-10-26 11:09:50",
			"quantity": 0,
			"sale_items": null,
			"status": "Open",
			"subtotal": 0.0
		}
	],
	"message": "Sale session successfully read.",
	"status": 0
};

FakeResponses.sale_session_cancel = {
	"message": "Sale session successfully canceled.",
	"status": 0
};

FakeResponses.sale_session_finish = {
	"data": {
		"change": 99922.3,
		"discount": 0.0,
		"id": 1,
		"paid": 100000.0,
		"payment_method": "money",
		"subtotal": 77.7,
		"total": 77.7
	},
	"message": "Sale session successfully finished.",
	"status": 0
};

FakeResponses.sale_session_item_add = {
	"data": {
		"added_sale_item": {
			"accept_date": "2015-10-26 11:33:01",
			"base_price": 25.9,
			"cancel_date": null,
			"description": "Mozzarella Sticks",
			"discount": 0.0,
			"id": 3,
			"price": 25.9,
			"quantity": 3.0,
			"quantity_decreased": 0.0,
			"subtotal": 77.7
		},
		"close_date": null,
		"discount": 0.0,
		"id": 2,
		"open_date": "2015-10-26 11:31:14",
		"quantity": 6,
		"status": "Open",
		"subtotal": 155.4
	},
	"message": "Item successfully added to session.",
	"status": 0
};

FakeResponses.sale_session_item_update = {
	"data": {
		"close_date": null,
		"discount": 15.54,
		"id": 2,
		"open_date": "2015-10-26 13:48:48",
		"quantity": 4,
		"status": "Open",
		"subtotal": 88.06,
		"update_sale_item": {
			"accept_date": "2015-10-26 14:07:26",
			"base_price": 25.9,
			"cancel_date": null,
			"description": "Mozzarella Sticks",
			"discount": 60.0,
			"id": 1,
			"price": 10.36,
			"quantity": 1.0,
			"quantity_decreased": 0.0,
			"status": "Accepted",
			"subtotal": 10.36
		}
	},
	"message": "Item successfully updated.",
	"status": 0
};

FakeResponses.sale_session_item_remove = {
	"data": {
		"close_date": null,
		"discount": 0.0,
		"id": 2,
		"open_date": "2015-10-26 11:31:14",
		"quantity": 3,
		"removed_sale_item": {
			"accept_date": "2015-10-26 11:33:01",
			"base_price": 25.9,
			"cancel_date": null,
			"description": "Mozzarella Sticks",
			"discount": 0.0,
			"id": 3,
			"price": 25.9,
			"quantity": 3.0,
			"quantity_decreased": 0.0,
			"subtotal": 77.7
		},
		"status": "Open",
		"subtotal": 77.7
	},
	"message": "Item successfully deleted.",
	"status": 0
};


FakeResponses.sale_session_payment_list = {
	"data": {
		"status": "Ordered",
		"paid": 50,
		"payments": [
			{
				"status": 0,
				"payment_date": "2015-12-21 10:49:45",
				"method_id": 2,
				"value": 50,
				"cancel_date": null,
				"id": 1
			}
		],
		"discount": 0,
		"close_date": null,
		"amount_due": 31.9,
		"open_date": "2015-12-21 10:48:13",
		"total": 81.9,
		"subtotal": 81.9,
		"session_id": 2,
		"quantity": 3
	},
	"status": 0,
	"message": "Payments successfully listed."
};



/*************************************************/


FakeResponses.method_list = {
	status: 0,
	data: [
	{
		status: "Active",
		name: "Dinheiro",
		penalty: 0,
		max_installments: 12,
		id: 3,
		daily_interest: 0
	},
	{
		status: "Active",
		name: "Débito",
		penalty: 0,
		max_installments: 12,
		id: 10,
		daily_interest: 0
	},
	{
		status: "Active",
		name: "Crédito",
		penalty: 0,
		max_installments: 12,
		id: 6,
		daily_interest: 0
	},
	{
		status: "Active",
		name: "Cheque",
		penalty: 0,
		max_installments: 12,
		id: 9,
		daily_interest: 0
	}
	]
}

FakeResponses.user_list = {
	"data": [{
		"username": "landell",
		"profile": "",
		"status": "Ativo",
		"id": "8060318a-0a18-11e5-bc4b-0fcbb9939901",
		"name": "Roberto Landell de Moura"
	}, {
		"username": "grazi",
		"profile": "",
		"status": "Ativo",
		"id": "8063e01e-0a18-11e5-bc53-83b0b8fd5d1d",
		"name": "Graziela Maciel Barroso"
	}, {
		"username": "carlos",
		"profile": "",
		"status": "Ativo",
		"id": "80670208-0a18-11e5-bc5b-434b97605240",
		"name": "Carlos Chagas"
	}, {
		"username": "ocruz",
		"profile": "",
		"status": "Ativo",
		"id": "806a6e20-0a18-11e5-bc63-7f8d28e88f8b",
		"name": "Oswaldo Cruz"
	}, {
		"username": "maria",
		"profile": "",
		"status": "Ativo",
		"id": "806d82c2-0a18-11e5-bc6b-bf945077f956",
		"name": "Maria da Concei\u00e7\u00e3o Tavares"
	}, {
		"username": "lattes",
		"profile": "",
		"status": "Ativo",
		"id": "80707900-0a18-11e5-bc72-670678c95099",
		"name": "C\u00e9sar Lattes"
	}, {
		"username": "admin",
		"profile": "Administrador",
		"status": "Ativo",
		"id": "8037fd00-0a18-11e5-8fed-c76a13d66982",
		"name": "Administrador"
	}
	],
	"message": "Venda cancelada com sucesso.",
	"status": 0
};

FakeResponses.employee_list = {
	"status": 0,
	"data": [{
		"phone_number": "32432573",
		"role": "Financeiro",
		"status": "Normal",
		"registry_number": "101",
		"name": "Roberto Landell de Moura"
	}, {
		"phone_number": "32513421",
		"role": "Gerente",
		"status": "Normal",
		"registry_number": "122",
		"name": "Graziela Maciel Barroso"
	}, {
		"phone_number": "23322355",
		"role": "Secret\u00e1rio",
		"status": "Normal",
		"registry_number": "112",
		"name": "Carlos Chagas"
	}, {
		"phone_number": "32322342",
		"role": "Diretor",
		"status": "Normal",
		"registry_number": "102",
		"name": "Oswaldo Cruz"
	}, {
		"phone_number": "32312311",
		"role": "Gar\u00e7om",
		"status": "Normal",
		"registry_number": "103",
		"name": "Maria da Concei\u00e7\u00e3o Tavares"
	}, {
		"phone_number": "32321112",
		"role": "Gar\u00e7om",
		"status": "Normal",
		"registry_number": "104",
		"name": "C\u00e9sar Lattes"
	}
	]
};

FakeResponses.user_profile_list = {
	"status": 0,
	"data": [{
		"max_discount": 0.0,
		"id": "80270e64-0a18-11e5-a348-536569743043",
		"name": "Administrador"
	}, {
		"max_discount": 0.0,
		"id": "80284a0e-0a18-11e5-a356-07c9f009ee74",
		"name": "Gerente"
	}, {
		"max_discount": 0.0,
		"id": "8029553e-0a18-11e5-a364-0f5943bec5cb",
		"name": "Vendedor"
	}
	]
};

FakeResponses.event_list = {
	"status": 0,
	"data": [{
		date: "2015-06-03 14:46:45.273126",
		elapsed_time: "semana passada",
		type: "Sistema",
		description: "Criou o branch 'Exemplo Fast Food'"
	}, {
		date: "2015-06-03 14:46:45.274170",
		elapsed_time: "semana passada",
		type: "Sistema",
		description: "Criou o branch 'Restaurante Exemplo'"
	}, {
		date: "2015-06-03 14:46:46.105120",
		elapsed_time: "semana passada",
		type: "Pedido",
		description: "Ordem 00001, valor total 26250.00, fornecedor 'Companhia de Alimentos São Paulo' está confirmada."
	}, {
		date: "2015-06-03 14:46:46.381253",
		elapsed_time: "semana passada",
		type: "Pedido",
		description: "Ordem 00001, valor total 26250.00, fornecedor 'Companhia de Alimentos São Paulo' está fechada."
	}, {
		date: "2015-06-03 14:46:46.520589",
		elapsed_time: "semana passada",
		type: "Venda",
		description: "Venda 00001 ao cliente Manuel Dias de Abreu foi paga e confirmada com o valor 77.30."
	}, {
		date: "2015-06-03 14:46:46.520827",
		elapsed_time: "semana passada",
		type: "Pagamento",
		description: "Pagamento em money de valor 77.30 foi pago"
	}, {
		date: "2015-06-03 14:46:46.595099",
		elapsed_time: "semana passada",
		type: "Venda",
		description: "Venda 00002 ao cliente Bartolomeu de Gusmão foi confirmada com o valor 99.70."
	}, {
		date: "2015-06-03 14:46:46.661352",
		elapsed_time: "semana passada",
		type: "Venda",
		description: "Venda 00003 ao cliente Marta Vannucci foi confirmada com o valor 119.30."
	}, {
		date: "2015-06-03 14:49:55.059451",
		elapsed_time: "semana passada",
		type: "Venda",
		description: "Venda 00004, sem cliente, foi paga e confirmada com o valor 16.50."
	}, {
		date: "2015-06-03 14:49:55.061804",
		elapsed_time: "semana passada",
		type: "Pagamento",
		description: "Pagamento em money de valor 16.50 foi pago"
	}, {
		date: "2015-06-03 14:52:04.348357",
		elapsed_time: "semana passada",
		type: "Venda",
		description: "Venda 00005, sem cliente, foi paga e confirmada com o valor 10.50."
	}, {
		date: "2015-06-03 14:52:04.348594",
		elapsed_time: "semana passada",
		type: "Pagamento",
		description: "Pagamento em money de valor 10.50 foi pago"
	}, {
		date: "2015-06-03 14:52:58.364214",
		elapsed_time: "semana passada",
		type: "Venda",
		description: "Venda 00006, sem cliente, foi paga e confirmada com o valor 15.50."
	}, {
		date: "2015-06-03 14:52:58.364435",
		elapsed_time: "semana passada",
		type: "Pagamento",
		description: "Pagamento em money de valor 15.50 foi pago"
	}, {
		date: "2015-06-03 14:54:08.102557",
		elapsed_time: "semana passada",
		type: "Usuário",
		description: "Usuário 'admin' fez login em 'acappliance'"
	}
	]
};

FakeResponses.branch_list = {
	"status": 0,
	"data": [{
		"cnpj": "18.638.217/0001-97",
		"id": 1,
		"is_main_branch": true,
		"manager": "",
		"name": "Nome da empresa",
		"phone_number": "32323252",
		"status": "Ativo"
	}, {
		"cnpj": "18.638.217/0001-97",
		"id": 2,
		"is_main_branch": false,
		"manager": "",
		"name": "Nome da empresa",
		"phone_number": "32323252",
		"status": "Ativo"
	}
	]
};

FakeResponses.supplier_list = {
	"status": 0,
	"data": [{
		"status": "Ativo",
		"cnpj": "83.576.169/0001-11",
		"phone_number": "32345544",
		"id": "8055c11e-0a18-11e5-b914-f39fea0523c9",
		"name": "Companhia de Alimentos S\u00e3o Paulo"
	}
	]
};

FakeResponses.transporter_list = {
	"status": 0,
	"data": [{
		"status": "Ativo",
		"cnpj": "83.576.169/0001-11",
		"phone_number": "32345544",
		"id": "8055c11e-0a18-11e5-b914-f39fea0523c9",
		"name": "Companhia de Alimentos S\u00e3o Paulo"
	}
	]
};

FakeResponses.order_list = {
	"status": 0,
	"data": [{
		"status": 3,
		"last_modified_date": "2015-06-03 14:52:58",
		"discount": false,
		"waiter_number": "122",
		"total": 15.5,
		"label": "",
		"token": "6a7bf80b58874789a12ae3084ce772d7",
		"table_number": 15,
		"open_date": "2015-06-03 14:52:46",
		"quantity": 1,
		"order_number": "00003",
		"waiter_name": "Graziela Maciel Barroso"
	}, {
		"status": 3,
		"last_modified_date": "2015-06-03 14:52:04",
		"discount": false,
		"waiter_number": "122",
		"total": 10.5,
		"label": "",
		"token": "09161a5a06bf4ff49dce9fa9a7e5fb44",
		"table_number": 14,
		"open_date": "2015-06-03 14:51:47",
		"quantity": 1,
		"order_number": "00002",
		"waiter_name": "Graziela Maciel Barroso"
	}, {
		"status": 3,
		"last_modified_date": "2015-06-03 14:49:55",
		"discount": false,
		"waiter_number": "122",
		"total": 16.5,
		"label": "",
		"token": "7a1f514c76e34ddbb1ff1dbaae3c9378",
		"table_number": 3,
		"open_date": "2015-06-03 14:49:35",
		"quantity": 1,
		"order_number": "00001",
		"waiter_name": "Graziela Maciel Barroso"
	}
	]
};

FakeResponses.order_detail = {
	"status": 0,
	"data": {
		"status": 3,
		"num_items": 1,
		"discount": false,
		"waiter_number": "122",
		"total": 15.5,
		"occupation_time": "12 days, 19:41:00",
		"comments": "",
		"label": "",
		"token": "6a7bf80b58874789a12ae3084ce772d7",
		"table_number": 15,
		"open_date": "2015-06-03 14:52:46",
		"waiter_name": "Graziela Maciel Barroso",
		"order_number": "00003",
		"quantity": 1,
		"items": [{
			"status": 1,
			"accept_date": "",
			"price": 15.5,
			"discount": false,
			"item_id": 1,
			"total": 15.5,
			"name": "Fudge Brownie Sundae",
			"comments": "",
			"open_date": "2015-06-03 14:52:50",
			"quantity": 1,
			"base_price": 15.5
		}
		]
	}
};

FakeResponses.station_list = {
	"status": 0,
	"message": "",
	"data": [{
		"status": "Ativo",
		"id": "8081c214-0a18-11e5-a991-b3fc89635e11",
		"branch": "Restaurante Exemplo",
		"name": "Nubo station"
	}, {
		"status": "Ativo",
		"id": "83afc2d8-0a18-11e5-81cb-7b148dcfd534",
		"branch": "Restaurante Exemplo",
		"name": "acappliance"
	}
	]
};

FakeResponses.sale_list = {
	"status": 0,
	"message": "",
	"data": {
		"sales": [{
			"status": "Pago",
			"code": "00006",
			"last_change_date": "2015-06-03 14:52:58",
			"client": "None",
			"salesperson": "Administrador",
			"open_date": "2015-06-03 14:52:53",
			"total": 15.5
		}, {
			"status": "Pago",
			"code": "00005",
			"last_change_date": "2015-06-03 14:52:04",
			"client": "None",
			"salesperson": "Administrador",
			"open_date": "2015-06-03 14:52:01",
			"total": 10.5
		}, {
			"status": "Pago",
			"code": "00004",
			"last_change_date": "2015-06-03 14:49:55",
			"client": "None",
			"salesperson": "Administrador",
			"open_date": "2015-06-03 14:49:50",
			"total": 16.5
		}, {
			"status": "Confirmado",
			"code": "00003",
			"last_change_date": "2015-06-03 14:46:46",
			"client": "Marta Vannucci",
			"salesperson": "Roberto Landell de Moura",
			"open_date": "2013-09-01 00:00:00",
			"total": 119.3
		}, {
			"status": "Confirmado",
			"code": "00002",
			"last_change_date": "2015-06-03 14:46:46",
			"client": "Bartolomeu de Gusm\u00e3o",
			"salesperson": "Roberto Landell de Moura",
			"open_date": "2013-12-01 00:00:00",
			"total": 99.7
		}, {
			"status": "Pago",
			"code": "00001",
			"last_change_date": "2015-06-03 14:46:46",
			"client": "Manuel Dias de Abreu",
			"salesperson": "Roberto Landell de Moura",
			"open_date": "2014-01-01 00:00:00",
			"total": 77.3
		}
		]
	}
}

FakeResponses.tableArea_list = {
	"status": 0,
	"message": "",
	"data": [{
		"description": "Area 1",
		"id": 1,
		"waiter_id": 2
	}, {
		"description": "Area 2",
		"id": 2,
		"waiter_id": 3
	}, {
		"description": "Area 3",
		"id": 3,
		"waiter_id": 4
	}
	]
};

FakeResponses.till_balance = {
	"status": 0,
	"message": "Report successfully generated",
	"data": {
		"status": "Opened",
		"initial": "0.00",
		"balance": "100.00",
		"history": [{
			"description": "Cash In",
			"value": "150.00"
		}, {
			"description": "Cash Out",
			"value": "-50.00"
		}
		],
		"opening_date": "2015-07-29"
	}
};

FakeResponses.history_by_hour = {
	"data": [{
		"hour": 7,
		"total_price": 278.5,
		"total_sales": 8
	}, {
		"hour": 8,
		"total_price": 926.7,
		"total_sales": 6
	}, {
		"hour": 9,
		"total_price": 695.2,
		"total_sales": 8
	}, {
		"hour": 10,
		"total_price": 299.5,
		"total_sales": 2
	}, {
		"hour": 13,
		"total_price": 269.0,
		"total_sales": 4
	}, {
		"hour": 14,
		"total_price": 42.9,
		"total_sales": 1
	}, {
		"hour": 15,
		"total_price": 33.0,
		"total_sales": 2
	}, {
		"hour": 17,
		"total_price": 1045.3,
		"total_sales": 13
	}, {
		"hour": 18,
		"total_price": 832.9,
		"total_sales": 2
	}, {
		"hour": 19,
		"total_price": 301.4,
		"total_sales": 3
	}, {
		"hour": 20,
		"total_price": 80.7,
		"total_sales": 1
	}
	],
	"message": "Report successfully generated",
	"status": 0
};

FakeResponses.waiter_commission = {
	"status": 0,
	"message": "Report successfully generated",
	"data": [{
		"name": "Roberto Landell de Moura",
		"num_sales": 1,
		"total_sales": 352.5,
		"waiter_id": 2,
		"commission": 35.25,
		"num_tables": 3
	}, {
		"name": "Fernando Moraes",
		"num_sales": 1,
		"total_sales": 23.5,
		"waiter_id": 3,
		"commission": 2.35,
		"num_tables": 3
	}, {
		"name": "Roberto Siqueira",
		"num_sales": 1,
		"total_sales": 250.0,
		"waiter_id": 2,
		"commission": 25.0,
		"num_tables": 3
	}, {
		"name": "Jurandir Machado",
		"num_sales": 10,
		"total_sales": 1964.0,
		"waiter_id": 2,
		"commission": 196.4,
		"num_tables": 3
	}, {
		"name": "Carlos Chagas",
		"num_sales": 3,
		"total_sales": 395.4,
		"waiter_id": 4,
		"commission": 39.54,
		"num_tables": 4
	}
	]
};

FakeResponses.bestseller_by_category = {
	"data": {
		"sales": [{
			"id": 2,
			"name": "Appetizers",
			"total_itens": 65,
			"total_price": 1698.3
		}, {
			"id": 6,
			"name": "Seafood",
			"total_itens": 33,
			"total_price": 1428.7
		}, {
			"id": 9,
			"name": "Salads",
			"total_itens": 51,
			"total_price": 1115.5
		}, {
			"id": 11,
			"name": "Desserts",
			"total_itens": 21,
			"total_price": 322.5
		}, {
			"id": 4,
			"name": "Steaks",
			"total_itens": 6,
			"total_price": 368.4
		}
		]
	},
	"message": "Report successfully generated",
	"status": 0
};

FakeResponses.bestseller = {
	"data": {
		"sales": [{
			"description": "Boneless Buffalo Wings",
			"id": 2,
			"total_itens": 40,
			"total_price": "1076.00000"
		}, {
			"description": "Spinach Fish & Shrimp",
			"id": 17,
			"total_itens": 28,
			"total_price": "1201.20000"
		}, {
			"description": "Salmon Caesar Salad",
			"id": 30,
			"total_itens": 23,
			"total_price": "540.50000"
		}, {
			"description": "Chicken Quesadillas",
			"id": 3,
			"total_itens": 18,
			"total_price": "441.00000"
		}, {
			"description": "Oriental Salad",
			"id": 29,
			"total_itens": 13,
			"total_price": "292.50000"
		}, {
			"description": "Grilled Chicken Caesar Salad",
			"id": 31,
			"total_itens": 13,
			"total_price": "258.70000"
		}, {
			"description": "Chocolate Meltdown",
			"id": 33,
			"total_itens": 12,
			"total_price": "198.00000"
		}, {
			"description": "Fudge Brownie Sundae",
			"id": 35,
			"total_itens": 6,
			"total_price": "93.00000"
		}
		]
	},
	"message": "Report successfully generated",
	"status": 0
};

FakeResponses.addon_list = {
	"data": [{
		"description": "Use Nubo in a Bookshop",
		"long_name": "Books",
		"name": "books",
		"status": "Inactive"
	}, {
		"description": "Coupon Fiscal Emission (ECF) support",
		"long_name": "ECF Fiscal Printer",
		"name": "ecf",
		"status": "Ativo"
	}, {
		"description": "Permits emission of NF-e (Nota Fiscal Eletr\u00f4nica)",
		"long_name": "Nota Fiscal Eletr\u00f4nica",
		"name": "nfe",
		"status": "Inactive"
	}, {
		"description": "Use Nubo in optical stores",
		"long_name": "Optical Plugin",
		"name": "optical",
		"status": "Inactive"
	}, {
		"description": "SAT Support",
		"long_name": "SAT",
		"name": "sat",
		"status": "Inactive"
	}
	],
	"message": "Addons successfully read.",
	"status": 0
};

FakeResponses.method_read = {
	"data": {
		"daily_interest": 0.0,
		"id": 3,
		"max_installments": 1,
		"name": "Invalid payment",
		"penalty": 0.0,
		"status": "Active"
	},
	"message": "Payment method successfully read.",
	"status": 0
};

FakeResponses.order_full_list = {
	"status": 0,
	"data": [{
		"status": 5,
		"num_items": 3,
		"discount": false,
		"total": 83.69999999999999,
		"occupation_time": "0:02:26",
		"items": [{
			"status": 1,
			"done_date": "",
			"accept_date": "2015-09-24 14:20:48",
			"price": 26.9,
			"discount": false,
			"cancel_date": "",
			"item_id": 1,
			"total": 26.9,
			"name": "Boneless Buffalo Wings",
			"comments": "",
			"open_date": "2015-09-24 14:20:25",
			"quantity": 1,
			"base_price": 26.9
		}, {
			"status": 1,
			"done_date": "",
			"accept_date": "2015-09-24 14:20:48",
			"price": 25.9,
			"discount": false,
			"cancel_date": "",
			"item_id": 2,
			"total": 25.9,
			"name": "Mozzarella Sticks",
			"comments": "",
			"open_date": "2015-09-24 14:20:31",
			"quantity": 1,
			"base_price": 25.9
		}, {
			"status": 1,
			"done_date": "",
			"accept_date": "2015-09-24 14:20:48",
			"price": 30.9,
			"discount": false,
			"cancel_date": "",
			"item_id": 3,
			"total": 30.9,
			"name": "Popcorn Shrimp",
			"comments": "Bem mal passada",
			"open_date": "2015-09-24 14:20:42",
			"quantity": 1,
			"base_price": 30.9
		}
		],
		"comments": "Bem mal passada",
		"label": "Teste",
		"token": "6b14dbb9925d4e40b001de4fd5fa77db",
		"table_number": 1,
		"open_date": "2015-09-24 14:20:15",
		"waiter_name": null,
		"order_number": "00001",
		"waiter_id": null,
		"quantity": 3
	}
	]
};

FakeResponses.order_discount = {
	"status": 0, 
	"message": "Report successfully generated", 
	"data": {
		"sales": [
			{
				"order_label": "Fulano", 
				"client_name": null, 
				"order_discount": 20, 
				"client_id": null, 
				"table_number": 1, 
				"total": 15.5, 
				"order_number": 57
			}, 
			{
				"order_label": "", 
				"client_name": null, 
				"order_discount": 20, 
				"client_id": null, 
				"table_number": 2, 
				"total": 8.58, 
				"order_number": 59
			}, 
			{
				"order_label": "Testando", 
				"client_name": null, 
				"order_discount": 20, 
				"client_id": null, 
				"table_number": 1, 
				"total": 4.5, 
				"order_number": 65
			}, 
			{
				"order_label": "", 
				"client_name": null, 
				"order_discount": 20, 
				"client_id": null, 
				"table_number": 9, 
				"total": 3.98, 
				"order_number": 61
			}, 
			{
				"order_label": "Fulano", 
				"client_name": null, 
				"order_discount": 20, 
				"client_id": null, 
				"table_number": 9, 
				"total": 8.58, 
				"order_number": 63
			}, 
			{
				"order_label": "Teste", 
				"client_name": null, 
				"order_discount": 20, 
				"client_id": null, 
				"table_number": 9, 
				"total": 9.4, 
				"order_number": 64
			}, 
			{
				"order_label": "", 
				"client_name": null, 
				"order_discount": 20, 
				"client_id": null, 
				"table_number": 9, 
				"total": 2.1, 
				"order_number": 62
			}
		]
	}
}

FakeResponses.list_devices = {
	"data": [{
		"devname": "EPSON TM-T20 5256324d0324470000",
		"devpath": "/dev/usb/lp2"
	}, {
		"devname": "Prolific Technology Inc. USB-Serial Controller",
		"devpath": "/dev/ttyUSB0"
	}
	],
	"message": "",
	"status": 0
};

FakeResponses.production_location_list = {
	"data": [{
		"description": "",
		"id": 0,
		"name": "Nenhum",
		"printable": false
	}, {
		"description": "copa",
		"id": 2,
		"name": "copa",
		"printable": false
	}, {
		"description": "cozinha",
		"id": 3,
		"name": "cozinha",
		"printable": false
	}, {
		"description": "Bar de teste",
		"id": 1,
		"name": "BAR",
		"printable": true,
		"printer": {
			"id": 2,
			"name": "Bar"
		}
	}
	],
	"status": 0
};


FakeResponses.retail_update_list = {
	"status": 0,
	"message": "Versões de software listadas com sucesso.",
	"data": [
	  {
		"status": 2,
		"url": "http://git.etechped.com.br/AC.1.0.tar.gz",
		"updated": null,
		"total_size": 156214527,
		"generation": 0,
		"completed_download_percentage": 100,
		"id": 7,
		"patchlevel": 1,
		"completed_download_size": 156214527
	  }
	]
};

FakeResponses.retail_update_current_version = {
	"status": 0,
	"message": "Current version successfully showed!",
	"data": "AC.3.1"
};