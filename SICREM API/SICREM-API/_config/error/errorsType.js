module.exports = {

	INVALID_USER: {
		status: 401,
		message: global.TEXTS.login_invalid
	},
	INACTIVE_USER: {
		status: 401,
		message: global.TEXTS.user_inactive
	},
	UNVERIFIED_USER: {
		status: 401,
		message: global.TEXTS.user_unverified
	},
	NOT_FOUND_USER: {
		status: 400,
		message: global.TEXTS.not_found_user
	},
	INVALID_PASSWORD_CHANGED: {
		status: 400,
		message: global.TEXTS.invalid_password_changed
	},
	EMAIL_ALREADY_EXISTS: {
		status: 400,
		message: global.TEXTS.email_already_exists
	},
	EMAIL_USED_INATIVE_USER: {
		status: 400,
		message: global.TEXTS.email_used_inative_user
	},
	CNPJ_ALREADY_EXISTS: {
		status: 400,
		message: global.TEXTS.cnpj_already_exists
	},
	INVALID_LOGIN: {
		status: 401,
		message: global.TEXTS.login_invalid
	},
	UNAUTHORIZED: {
		status: 401,
		message: global.TEXTS.restrict_access
	},
	INVALID_TOKEN: {
		status: 401,
		message: global.TEXTS.invalid_token
	},
	NO_TOKEN: {
		status: 401,
		message: global.TEXTS.no_token
	},
	INVALID_CLIENT_DATA: {
		status: 400,
		message: global.TEXTS.invalid_user_client_data
	},
	INVALID_CLIENT_PERFIL_CHANGE: {
		status: 401,
		message: global.TEXTS.invalid_client_perfil_change
	},
	INVALID_SHIP_SCUBA_OWNER: {
		status: 400,
		message: global.TEXTS.invalid_ship_scuba_owner
	},
	INVALID_SCUBA_FIELDS: {
		status: 400,
		message: global.TEXTS.invalid_scuba_fields
	},
	INVALID_SCUBA_CONFORMITY: {
		status: 400,
		message: global.TEXTS.invalid_scuba_fields_conformity_missing
	},
	INVALID_CERT_SYSTEM_FIELD: {
		status: 400,
		message: global.TEXTS.invalid_system_selected
	},
	INVALID_PROPERTY_VALUE: {
		status: 400,
		message: global.TEXTS.invalid_props_value
	},
	PROPERTY_CANNOT_NULL: {
		status: 400,
		message: global.TEXTS.property_caanot_null
	}
}
