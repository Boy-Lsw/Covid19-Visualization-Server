import provinceSqlApi from '../database/sql/province.js'

const cities = async (req, res) => {
  const _data = await provinceSqlApi.select.whichColumn(['cities'])
  // const data = _data.map(item => {
  //   return JSON.parse(item.cities)
  // })
  const data = []
  _data.forEach(item => {
    JSON.parse(item.cities).forEach(city => {
      data.push(city)
    })
  })
  res.send(data)
}

export default cities
