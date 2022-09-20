const mongoose = require('mongoose');

const vegetableSchema = new mongoose.Schema({

    //creates a new schema called vegetableSchema

    name: {type: String, required: true},

    color: {type: String, required: true},
    readyToEat: {type: Boolean}

})

// const vegetables = [
//     {
//         name:'bell pepper',
//         color: 'yellow',
//         readyToEat: true
//     },
//     {
//         name:'carrot',
//         color: 'orange',
//         readyToEat: false
//     },
//     {
//         name:'pepper',
//         color: 'red',
//         readyToEat: true
//     },
//     {
//         name:'celery',
//         color:'green',
//         readyToEat: false
//     },
//     {   name:'radish',
//         color:'pink',
//         readyToEat: true
        

//     }
//   ]
// })

const vegetables = mongoose.model('vegetables', vegetableSchema);
  
  module.exports = vegetables;