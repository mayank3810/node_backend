import joi from 'joi';

// ref: https://joi.dev/api/?v=17.9.1

const createUserJoiSchema = joi
	.object()
	.keys({
		name: joi.string().required().messages({
			'string.base': 'Name must be a string',
			'any.required': 'Name is required',
		}),
		
	})
	.unknown(true);

export { createUserJoiSchema };
