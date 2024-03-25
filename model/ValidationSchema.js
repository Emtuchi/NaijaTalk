import Joi from '@hapi/joi';

export const SignupValidation = (data) => {
    const Schema = Joi.object({
        name: Joi.string()
            .min(1)
            .required(),
        email: Joi.string()
            .min(9)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required()
    });

    return Schema.validate(data);
};

export const loginValidation = (data) => {
    const Schema = Joi.object({
        email: Joi.string()
            .min(9)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required()
    });

    return Schema.validate(data);
};
