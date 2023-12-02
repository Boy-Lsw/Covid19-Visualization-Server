import provinceSqlApi from '../database/sql/province.js'

const provinceCities = async (req, res) => {
  const data = await provinceSqlApi.select.all()
  res.send(data)
}

export default provinceCities
