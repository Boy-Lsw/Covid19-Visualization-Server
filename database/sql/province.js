import sqlOperations from '../index.js'

const insert = data => {
  const { name, update_time, adcode, comment, data: _data, cities } = data
  const _column = 'name, update_time, adcode, comment, data, cities'
  const _values = `'${name}', '${update_time}', '${adcode}', '${comment}', '${JSON.stringify(_data)}', '${JSON.stringify(cities)}'`
  return sqlOperations(`insert into province (${_column}) values (${_values})`)
}

const all = async () => await sqlOperations('select * from province', true)

const whichColumn = columns => {
  return sqlOperations(`select ${columns.join(',')} from province`, true)
}
// const where = async (name, type) => {
//   const data = await sqlOperations(`select ${type} from province where name=${name}`)
//   return data
// }

const provinceSqlApi = {
  insert,
  select: {
    all,
    whichColumn
    // where
  }
}

export default provinceSqlApi
