const { getData } = require("../../services/fetchData")

exports.get = async (req, res, next) => {
  const response = await getData(req.query)
  return res.json(response)
}
