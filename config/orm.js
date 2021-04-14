const connection = require('../config/connection')


// ====================================================================== Not sure if needed
// const printQuestionMarks = (num) => {
//     const arr = [];
  
//     for (let i = 0; i < num; i++) {
//       arr.push('?');
//     }
  
//     return arr.toString();
//   };

// // Helper function to convert object key/value pairs to SQL syntax
// const objToSql = (ob) => {
//     const arr = [];
  
//     // Loop through the keys and push the key/value as a string int arr
//     for (const key in ob) {
//       let value = ob[key];
//       // Check to skip hidden properties
//       if (Object.hasOwnProperty.call(ob, key)) {
//         // If string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
//         if (typeof value === 'string' && value.indexOf(' ') >= 0) {
//           value = `'${value}'`;
//         }
//         // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
//         // e.g. {sleepy: true} => ["sleepy=true"]
//         arr.push(`${key}=${value}`);
//       }
//     }
  
//     // Translate array of strings to a single comma-separated string
//     return arr.toString();
//   };

// ====================================================================== end of not sure if needed



const orm = {

    all(cb) {
        connection.query("SELECT * FROM burgers", (err, result) => {
        if (err) {
            throw err;
        }
        cb(result);
        // console.log(result)
        });
        // console.log('ORM All')
    },

    create(burgerName, cb) {
        connection.query("INSERT INTO burgers (burgerName) VALUES (?)", burgerName, (err, result) => {
            if (err) {throw err}
            // console.log(result)
            cb(result)
        })
    },

    // An example of objColVals would be {name: panther, sleepy: true}
    update(whichOne, cb) {
        connection.query("UPDATE burgers SET devoured = true WHERE id = ?", whichOne, (err, result) => {
        if (err) {
            throw err;
        }
        cb(result);
        });
        // console.log('ORM Update')

    },

    delete(whichOne, cb) {
        connection.query("DELETE FROM burgers WHERE id = ?", whichOne,  (err, result) => {
        if (err) {
            throw err;
        }
    
        cb(result);
        });
        // console.log('ORM delete')

    }
};

module.exports = orm
