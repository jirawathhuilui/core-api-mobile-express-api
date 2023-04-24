require('dotenv').config();

/* const config = {
  port: 5000,
  dbUrlMongoDB: process.env.dbUrlMongoDB,
  API_KEY_JWT: process.env.API_KEY_JWT,
  TOKEN_EXPIRES_IN: process.env.TOKEN_EXPIRES_IN,
}; */

const NODE_ENV = process.env.NODE_ENV || 'development';

const config = {
  development: {
    port: 5101,
    // BASE_URL: 'http://104.248.147.27:5000/',
    BASE_URL: 'http://104.248.147.27:5101/', },
  production: {
    port: 5101,
    BASE_URL: 'http://104.248.147.27:5101/', },
};

module.exports = config[NODE_ENV];
