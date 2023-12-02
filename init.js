import datas from './data.json' assert { type: 'json' }
import provinceSqlApi from './database/sql/province.js'

const init = () => {
  return datas.forEach(async data => {
    await provinceSqlApi.insert(data)
  })
}

export default init
