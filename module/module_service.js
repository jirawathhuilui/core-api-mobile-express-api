const originsql = require('sql');

originsql.setDialect('postgres');
const sql = require('sql-query');
const request = require('request');
const sqlQuery = sql.Query('postgresql');
const { Pool } = require('pg');    
const { config } = require('dotenv');   
const configLamayon = require('./../module/configLamayon.js');
 
const getPaymentUrl = async (payment,numberOrder) => {
  return new Promise(async (resolve, rejects) => {
    ; (async () => {
      try { 
      } catch (error) {
        resolve('');
      } finally {
      }
    })(500).catch((err) => {
      resolve('');
    });
  }); // End promise 
}

module.exports = { 
  getPaymentUrl
};
