// Portuguese
const texts = {
	restrict_access: 'Acesso restrito',

	login_invalid: 'Usuário ou senha inválido',
	no_token: 'O token é obrigatório',
	email_already_exists: 'Já existe um cadastro utilizando esse e-mail.',
	email_used_inative_user: 'Esse e-mail é utilizado por um usuário já cadastrado, porém inativo. Um usuário Administrador por reativa-lo.',
	cnpj_already_exists: 'Já existe um cadastro utilizando esse CNPJ.',
	invalid_token: 'Token inválido',
	restrict_area: 'Você não tem permissão para acessas esta funcionalidade',
	invalid_code: 'Código de verificação incorreto',
	invalid_password: 'Senha atual inválida',
	not_found_user: 'Usuário não encontrado',
	invalid_password_changed: 'Senha atual não confere, verifique a senha que você recebeu no seu email',
	invalid_data_validation: 'Erro na validação dos dados enviados',

	invalid_client_perfil_change: 'Não é possível alterar o perfil de um Cliente.',
	invalid_user_client_data: 'Clients must have register (CNPJ) and at least one contact.',
	invalid_ship_scuba_owner: 'Only client level users can own a ship or system (scuba).',
	invalid_scuba_fields: 'One or more required fields are missing or empty(scuba).',
	invalid_scuba_fields_conformity_missing: 'Missing "conformity" field for property.',
	invalid_system_selected: 'System field empty or inexistent system selected. Select a valid system.',
	invalid_props_value: `Invalid property value.`,
	property_caanot_null: `Property can't be null.`,

	create_success: 'Cadastro realizado com sucesso.',
	updated_success: 'Atualização realizada com sucesso.',
	exclusion_success: 'Exclusão realizada com sucesso.',
	inactivation_success: 'Inativação realizada com sucesso.',
	activate_user_success: 'Ativação do usuário realizada com sucesso.',

	pg_error: 'Database error.'
}

module.exports = texts
