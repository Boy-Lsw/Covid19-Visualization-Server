import config from './config.js'
import mysql from 'mysql2'

const connection = mysql.createConnection(config)

const sqlOperations = (sql, isWhole = false) => {
  return new Promise((resolve, reject) =>
    connection.query(sql, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(isWhole ? data : data[0])
      }
    })
  )
}

export default sqlOperations
