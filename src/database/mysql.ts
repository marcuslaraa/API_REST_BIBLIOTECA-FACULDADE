import mysql, { Connection, QueryError } from 'mysql2'

const dbConfig = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '97332096aA**',
  database: 'biblioteca'
}

const mysqlConnection: Connection = mysql.createConnection(dbConfig)

mysqlConnection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err)
    throw err
  }

  console.log('Conexão bem sucedida com o banco de dados MySQL')
})

export const executaComandoSQL = (query: string, valores: any[]): Promise<any> => {
  return new Promise((resolve, reject) => {
    mysqlConnection.query(query, valores, (err, resultado: any) => {
      if (err) {
        console.error('Erro ao executar a query', err)
        reject(err)
        return
      }
      resolve(resultado)
    })
  })
}