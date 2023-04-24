const express = require('express');
// const serviceModule = require('../../module/module_service.js'); 

const router = express.Router();
// const { lamayon } = require('../../services/database');
const { Pool } = require('pg');
const sql = require('sql-query');

const sqlQuery = sql.Query('postgresql');
router.get('/getsettingsApp', (req, res) => {
  const { } = req.body;
  (async () => {
    try {
      console.log('getsettingsApp start');
      return res.json({
        success: true,
        data: {
          app_name: 'my app',
          message: 'Settings retrieved successfully'
        }
      });
    } finally {
    }
  })().catch((err) => {
    res.sendStatus(500);
    res.json({
      status: 500,
      msg: err,
    });
  });
}); 

module.exports = router;
