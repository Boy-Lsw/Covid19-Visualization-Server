import chinaSqlApi from '../database/sql/china.js'

const country = async (req, res) => {
  const data = await chinaSqlApi.select.all()
  res.send(data)
}

export default country
