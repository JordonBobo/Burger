const orm = require('../config/orm')


const burgerModel = {
    all(cb) {
      orm.all((res) => cb(res));
    },
    create(burgerName, cb) {
      orm.create(burgerName, cb);
    },
    update(whichOne, cb) {
      orm.update(whichOne, (res) => cb(res));
    },
    delete(whichOne, cb) {
      orm.delete(whichOne, (res) => cb(res));
    },
  };
  
module.exports = burgerModel;


