'use strict';

const Joi = require('joi');

/**
 * Generate a validation schema using joi to check the type of your environment variables
 */
const envSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
  PORT: Joi.number().allow('').required(),
  JWT_SECRET: Joi.string().required(),
  TOKEN: Joi.string().required(),
  JWT_EXP_DAY: Joi.number().optional(),
});

/**
 * Validate the env variables using joi.validate()
 */
const { error, value: envVars } = envSchema.validate(process.env, {
  stripUnknown: true,
});
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const config = {
  env: envVars.NODE_ENV,
  isTest: envVars.NODE_ENV === 'test',
  isDevelopment: envVars.NODE_ENV === 'development',
  jwtSecret: envVars.JWT_SECRET,
  tokenDefault: envVars.TOKEN,
  jwtExpDay: envVars.JWT_EXP_DAY,
  server: {
    port: envVars.PORT || 9000,
  }
};
