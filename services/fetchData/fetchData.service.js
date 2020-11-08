
const _ = require("lodash");
const {get} = require('../http/http.service');

const getData = async ({ filter, level }) => {
  try {
    const options = {
      url: 'https://api.jsonbin.io/b/5f7f29107243cd7e824ce063',
    }

    const { data: { titles } } = await get(options);
    const response = _.filter(titles, obj => _.some(obj, val => val === level));
    const media = _.filter(response[0].media, obj => (level === 'Censored') ? obj.mediaGuid.endsWith("C") : !obj.mediaGuid.endsWith("C"));
    response[0].media = media
    return response

  } catch (error) {
    return {
      responseCode: 404,
      responseMessage: "Failure",
      response: {
        error: error,
      },
    }
  }
}

module.exports = {
  getData
}
