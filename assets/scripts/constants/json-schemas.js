window.json_schemas = {};

window.json_schemas.tax_create_schema = {
    "trib": {
        "icms_01": {
            "type": "object",
            "properties": {
                "type": { "enum": [0] },
                "description": { "type": "string" },
                "csosn": { "enum": [101] },
                "aliq_icms": { "type": "number", "minimum": 0 }
            },
            "additionalProperties": false,
            "required": [
                "type",
                "description",
                "csosn",
                "aliq_icms"
            ]
        },
        "icms_02": {
            "type": "object",
            "properties": {
                "type": { "enum": [0] },
                "description": { "type": "string" },
                "csosn": { "enum": [102, 103, 300, 400, 500] },
                "orig": { "type": "integer", "minimum": 0 }
            },
            "additionalProperties": false,
            "required": [
                "type",
                "description",
                "csosn",
                "orig"
            ]
        },
        "icms_03": {
            "type": "object",
            "properties": {
                "type": { "enum": [0] },
                "description": { "type": "string" },
                "csosn": { "enum": [201] },
                "orig": { "type": "integer", "minimum": 0 },
                "aliq_icms": { "type": "number", "minimum": 0 },
                "aliq_icms_st": { "type": "number", "minimum": 0 },
                "red_icms_st": { "type": "number", "minimum": 0 },
                "mva_icms_st": { "type": "number", "minimum": 0 },
                "mod_icms_st": { "type": "integer", "minimum": 0, "maximum": 5 }
            },
            "additionalProperties": false,
            "required": [
                "type",
                "description",
                "csosn",
                "orig",
                "aliq_icms",
                "aliq_icms_st",
                "red_icms_st",
                "mva_icms_st",
                "mod_icms_st"
            ]
        },
        "icms_04": {
            "type": "object",
            "properties": {
                "type": { "enum": [0] },
                "description": { "type": "string" },
                "csosn": { "enum": [202, 203] },
                "orig": { "type": "integer", "minimum": 0 },
                "aliq_icms_st": { "type": "number", "minimum": 0 },
                "red_icms_st": { "type": "number", "minimum": 0 },
                "mva_icms_st": { "type": "number", "minimum": 0 },
                "mod_icms_st": { "type": "integer", "minimum": 0, "maximum": 5 }
            },
            "additionalProperties": false,
            "required": [
                "type",
                "description",
                "csosn",
                "orig",
                "aliq_icms_st",
                "red_icms_st",
                "mva_icms_st",
                "mod_icms_st"
            ]
        },
        "icms_05": {
            "type": "object",
            "properties": {
                "type": { "enum": [0] },
                "description": { "type": "string" },
                "csosn": { "enum": [900] },
                "orig": { "type": "integer", "minimum": 0 },
                "aliq_icms_sn": { "type": "number", "minimum": 0 },
                "aliq_icms_st": { "type": "number", "minimum": 0 },
                "red_icms_st": { "type": "number", "minimum": 0 },
                "mva_icms_st": { "type": "number", "minimum": 0 },
                "mod_icms_st": { "type": "integer", "minimum": 0, "maximum": 5 },
                "mod_icms": { "type": "integer", "minimum": 0, "maximum": 3 },
                "aliq_icms": { "type": "number", "minimum": 0 },
                "red_icms": { "type": "number", "minimum": 0 }
            },
            "additionalProperties": false,
            "required": [
                "type",
                "description",
                "csosn",
                "orig",
                "aliq_icms_sn",
                "aliq_icms_st",
                "red_icms_st",
                "mva_icms_st",
                "mod_icms_st",
                "mod_icms",
                "aliq_icms",
                "red_icms"
            ]
        },

        "pisst_valor": {
            "type": "object",
            "properties": {
                "p_pis_st": {
                    "type": "number",
                    "minimum": 0
                }
            },
            "additionalProperties": false,
            "required": [
                "p_pis_st"
            ]
        },
        "pisst_qtde": {
            "type": "object",
            "properties": {
                "v_aliq_prod_st": {
                    "type": "number",
                    "minimum": 0
                }
            },
            "additionalProperties": false,
            "required": [
                "v_aliq_prod_st"
            ]
        },
        "pisaliq": {
            "type": "object",
            "properties": {
                "type": {
                    "enum": [2]
                },
                "description": {
                    "type": "string"
                },
                "cst": {
                    "enum": [1, 2, 5]
                },
                "p_pis": {
                    "type": "number",
                    "minimum": 0
                },
                "pis_st": {
                    "anyOf": [{
                        "$ref": "#/trib/pisst_valor"
                    }, {
                        "$ref": "#/trib/pisst_qtde"
                    }
                    ]
                }
            },
            "additionalProperties": false,
            "required": [
                "type",
                "description",
                "cst",
                "p_pis"
            ]
        },
        "pisqtde": {
            "type": "object",
            "properties": {
                "type": {
                    "enum": [2]
                },
                "description": {
                    "type": "string"
                },
                "cst": {
                    "enum": [3]
                },
                "v_aliq_prod": {
                    "type": "number",
                    "minimum": 0
                },
                "pis_st": {
                    "anyOf": [{
                        "$ref": "#/trib/pisst_valor"
                    }, {
                        "$ref": "#/trib/pisst_qtde"
                    }
                    ]
                }
            },
            "additionalProperties": false,
            "required": [
                "type",
                "description",
                "cst",
                "v_aliq_prod"
            ]
        },
        "pisnt": {
            "type": "object",
            "properties": {
                "type": {
                    "enum": [2]
                },
                "description": {
                    "type": "string"
                },
                "cst": {
                    "enum": [4, 6, 7, 8, 9]
                },
                "pis_st": {
                    "anyOf": [{
                        "$ref": "#/trib/pisst_valor"
                    }, {
                        "$ref": "#/trib/pisst_qtde"
                    }
                    ]
                }
            },
            "additionalProperties": false,
            "required": [
                "type",
                "description",
                "cst"
            ]
        },
        "pissn": {
            "type": "object",
            "properties": {
                "type": {
                    "enum": [2]
                },
                "description": {
                    "type": "string"
                },
                "cst": {
                    "enum": [49]
                },
                "pis_st": {
                    "anyOf": [{
                        "$ref": "#/trib/pisst_valor"
                    }, {
                        "$ref": "#/trib/pisst_qtde"
                    }
                    ]
                }
            },
            "additionalProperties": false,
            "required": [
                "type",
                "description",
                "cst"
            ]
        },
        "pisoutr_valor": {
            "type": "object",
            "properties": {
                "type": {
                    "enum": [2]
                },
                "description": {
                    "type": "string"
                },
                "cst": {
                    "enum": [99]
                },
                "p_pis": {
                    "type": "number",
                    "minimum": 0
                },
                "pis_st": {
                    "anyOf": [{
                        "$ref": "#/trib/pisst_valor"
                    }, {
                        "$ref": "#/trib/pisst_qtde"
                    }
                    ]
                }
            },
            "additionalProperties": false,
            "required": [
                "type",
                "description",
                "cst",
                "p_pis"
            ]
        },
        "pisoutr_qtde": {
            "type": "object",
            "properties": {
                "type": {
                    "enum": [2]
                },
                "description": {
                    "type": "string"
                },
                "cst": {
                    "enum": [99]
                },
                "v_aliq_prod": {
                    "type": "number",
                    "minimum": 0
                },
                "pis_st": {
                    "anyOf": [{
                        "$ref": "#/trib/pisst_valor"
                    }, {
                        "$ref": "#/trib/pisst_qtde"
                    }
                    ]
                }
            },
            "additionalProperties": false,
            "required": [
                "type",
                "description",
                "cst",
                "v_aliq_prod"
            ]
        },

        "cofinsst_valor": {
            "type": "object",
            "properties": {
                "p_cofins_st": {
                    "type": "number",
                    "minimum": 0
                }
            },
            "additionalProperties": false,
            "required": [
                "p_cofins_st"
            ]
        },
        "cofinsst_qtde": {
            "type": "object",
            "properties": {
                "v_aliq_prod_st": {
                    "type": "number",
                    "minimum": 0
                }
            },
            "additionalProperties": false,
            "required": [
                "v_aliq_prod_st"
            ]
        },
        "cofinsaliq": {
            "type": "object",
            "properties": {
                "type": {
                    "enum": [3]
                },
                "description": {
                    "type": "string"
                },
                "cst": {
                    "enum": [1, 2, 5]
                },
                "p_cofins": {
                    "type": "number",
                    "minimum": 0
                },
                "cofins_st": {
                    "anyOf": [{
                        "$ref": "#/trib/cofinsst_valor"
                    }, {
                        "$ref": "#/trib/cofinsst_qtde"
                    }
                    ]
                }
            },
            "additionalProperties": false,
            "required": [
                "type",
                "description",
                "cst",
                "p_cofins"
            ]
        },
        "cofinsqtde": {
            "type": "object",
            "properties": {
                "type": {
                    "enum": [3]
                },
                "description": {
                    "type": "string"
                },
                "cst": {
                    "enum": [3]
                },
                "v_aliq_prod": {
                    "type": "number",
                    "minimum": 0
                },
                "cofins_st": {
                    "anyOf": [{
                        "$ref": "#/trib/cofinsst_valor"
                    }, {
                        "$ref": "#/trib/cofinsst_qtde"
                    }
                    ]
                }
            },
            "additionalProperties": false,
            "required": [
                "type",
                "description",
                "cst",
                "v_aliq_prod"
            ]
        },
        "cofinsnt": {
            "type": "object",
            "properties": {
                "type": {
                    "enum": [3]
                },
                "description": {
                    "type": "string"
                },
                "cst": {
                    "enum": [4, 6, 7, 8, 9]
                },
                "cofins_st": {
                    "anyOf": [{
                        "$ref": "#/trib/cofinsst_valor"
                    }, {
                        "$ref": "#/trib/cofinsst_qtde"
                    }
                    ]
                }
            },
            "additionalProperties": false,
            "required": [
                "type",
                "description",
                "cst"
            ]
        },
        "cofinssn": {
            "type": "object",
            "properties": {
                "type": {
                    "enum": [3]
                },
                "description": {
                    "type": "string"
                },
                "cst": {
                    "enum": [49]
                },
                "cofins_st": {
                    "anyOf": [{
                        "$ref": "#/trib/cofinsst_valor"
                    }, {
                        "$ref": "#/trib/cofinsst_qtde"
                    }
                    ]
                }
            },
            "additionalProperties": false,
            "required": [
                "type",
                "description",
                "cst"
            ]
        },
        "cofinsoutr_valor": {
            "type": "object",
            "properties": {
                "type": {
                    "enum": [3]
                },
                "description": {
                    "type": "string"
                },
                "cst": {
                    "enum": [99]
                },
                "p_cofins": {
                    "type": "number",
                    "minimum": 0
                },
                "cofins_st": {
                    "anyOf": [{
                        "$ref": "#/trib/cofinsst_valor"
                    }, {
                        "$ref": "#/trib/cofinsst_qtde"
                    }
                    ]
                }
            },
            "additionalProperties": false,
            "required": [
                "type",
                "description",
                "cst",
                "p_cofins"
            ]
        },
        "cofinsoutr_qtde": {
            "type": "object",
            "properties": {
                "type": {
                    "enum": [3]
                },
                "description": {
                    "type": "string"
                },
                "cst": {
                    "enum": [99]
                },
                "v_aliq_prod": {
                    "type": "number",
                    "minimum": 0
                },
                "cofins_st": {
                    "anyOf": [{
                        "$ref": "#/trib/cofinsst_valor"
                    }, {
                        "$ref": "#/trib/cofinsst_qtde"
                    }
                    ]
                }
            },
            "additionalProperties": false,
            "required": [
                "type",
                "description",
                "cst",
                "v_aliq_prod"
            ]
        },
        "issqn": {
            "type": "object",
            "properties": {
                "type": {
                    "enum": [4]
                },
                "description": {
                    "type": "string"
                },
                "v_deduc_issqn": {
                    "type": "number",
                    "minimum": 0
                },
                "v_aliq": {
                    "type": "number",
                    "minimum": 0
                },
                "c_mun_fg": {
                    "type": "integer",
                    "minimum": 0
                },
                "c_list_serv": {
                    "type": "string"
                },
                "c_cerv_trib_mun": {
                    "type": "string"
                },
                "c_nat_op": {
                    "type": "integer",
                    "minimum": 1,
                    "maximum": 8
                },
                "ind_inc_fisc": {
                    "type": "integer",
                    "minimum": 1,
                    "maximum": 2
                }
            },
            "additionalProperties": false,
            "required": [
                "type",
                "description",
                "v_deduc_issqn",
                "v_aliq",
                "ind_inc_fisc",
                "ind_inc_fisc"
            ]
        }
    }   
};

Object.freeze(window.json_schemas);