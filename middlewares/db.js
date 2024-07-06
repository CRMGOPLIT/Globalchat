
require('dotenv').config();
const sql = require('mssql');





const config = {
  user: process.env.USERDB,
  password: process.env.PASSWORD,
  server: process.env.SERVER,
  port: parseInt(process.env.PORTDB),
  database: process.env.DATADB,
   options: {
    encrypt: false, 
    trustServerCertificate: true
  }
};

// async function connectSQL() {
//   try {
//     await sql.connect(config);
//     console.log('Connected to SQL Server');
//   } catch (err) {
//    console.error('Error connecting to SQL Server:', err);
//   }
  
// }

let pool;

const connectSQL = async () => {
  if (!pool) {
    try {
      pool = await sql.connect(config);
      console.log('Connected to the database');
    } catch (err) {
      console.error('Database connection failed', err);
    }
  }
  return pool;
};








module.exports = { connectSQL, sql };









