const appconfig = require('../src/appconfig/routes');   
module.exports = (app) => { 
  app.use('/appconfig', appconfig); 
  app.use('*', (req, res) => {
    res.status(404).send('Not found !!!');
  });
};
