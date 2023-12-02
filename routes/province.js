import provinceSqlApi from '../database/sql/province.js'

const province = async (req, res) => {
  const _data = await provinceSqlApi.select.whichColumn(['name', 'update_time', 'adcode', 'comment', 'data'])
  const data = _data.map(item => {
    item.update_time = Number(item.update_time)
    item.data = JSON.parse(item.data)
    return item
  })
  res.send(data)
}

export default province
