const connection = require('../config/connection')

const orm = {

    all(cb) {
        connection.query("SELECT * FROM burgers", (err, result) => {
        if (err) {
            throw err;
        }
        cb(result);
        });
    },

    create(burgerName, cb) {
        connection.query("INSERT INTO burgers (burgerName) VALUES (?)", burgerName, (err, result) => {
            if (err) {throw err}
            cb(result)
        })
    },

    update(whichOne, cb) {
        connection.query("UPDATE burgers SET devoured = true WHERE id = ?", whichOne, (err, result) => {
        if (err) {
            throw err;
        }
        cb(result);
        });
    },

    delete(whichOne, cb) {
        connection.query("DELETE FROM burgers WHERE id = ?", whichOne,  (err, result) => {
        if (err) {
            throw err;
        }
    
        cb(result);
        });
    }
};

module.exports = orm
