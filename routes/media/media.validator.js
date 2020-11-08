const Joi = require("joi")
const get = {
  name: "media",
  path: "/media",
  type: "get",
  joiSchema: Joi.object({
    filter: Joi.string().valid('censoring').required(),
    level: Joi.string().valid('Censored','Uncensored').required(),
  }),
}

module.exports = { get }
