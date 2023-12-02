import provinceSqlApi from '../database/sql/province.js'

const cities = async (req, res) => {
  const _data = await provinceSqlApi.select.whichColumn(['cities'])
  const data = _data.map(item => {
    return JSON.parse(item.cities)
  })
  res.send(data)
}

export default cities
