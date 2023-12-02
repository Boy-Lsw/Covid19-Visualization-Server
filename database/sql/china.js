import sqlOperations from '../index.js'

const all = async () => {
  const _data = await sqlOperations(`select * from china`, true)
  const [data] = _data
  const result = {
    data: ''
  }
  result.data = {
    confirmed_count: data.confirmed_count,
    suspected_count: data.suspected_count,
    cured_count: data.cured_count,
    dead_count: data.dead_count
  }
  result.comment = data.comment
  result.update_time = Number(data.update_time)
  return result
}

const chinaSqlApi = {
  select: {
    all
  }
}

export default chinaSqlApi
