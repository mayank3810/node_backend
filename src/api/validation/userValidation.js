import Joi from 'joi';

// ref: https://joi.dev/api/?v=17.9.1

const createUserValidation = Joi
	.object()
	.keys({
		name: Joi.string()
			.alphanum()
			.min(3)
			.max(30)
			.required()
			.messages({
				'string.base': 'Name must be a string',
				'any.required': 'Name is required',
			}),
		username: Joi.string()
			.alphanum()
			.min(3)
			.max(30)
			.required()
			.messages({
				'string.base': 'Name must be a string',
				'any.required': 'Name is required',
			}),
		password: Joi.string()
			.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

		repeat_password: Joi.ref('password'),

	})
	.unknown(true);

export { createUserValidation };
