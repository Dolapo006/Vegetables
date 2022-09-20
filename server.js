const express = require('express');
const app = express();
const vegetables = require('./models/vegetables')
require('dotenv').config();
const mongoose = require('mongoose')
const Vegetable = require('./models/vegetables')


///-----MONGOOSE CONNECTION---///

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once('open', ()=> {
  console.log('connected to mongo');
});


/////----SETTING THE VIEW ENGINE-----/////

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


/////----SETTING THE BODY PARSER-----///

app.use(express.urlencoded({extended:false}));

// app.use((req,res, next) => {
//     console.log('I run for all routes!')
//     next()
// })

//----METHOD OVERRIDE---//

//app.use(methodOverride('_method'))

////-------INDEX---------////
app.get('/vegetables', (req, res) => {
  Vegetable.find({}, (error, allvegetables) => {
  res.render('Index', {
    vegetables: allvegetables// so the second veggie is the variable that was declared on line 26.
  })//the first veg on this has to be with an 's' as well.
});
})

/////--------NEW---------///

app.get('/vegetables/new', (req, res) => {
    res.render('New');
})


//-------DELETE-----//

app.delete('/vegetables/:id', (req, res) => {
  res.send('deleting...')
})

/////---------CREATE-------/////

app.post('/vegetables', (req, res) => {
    if(req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Vegetable.create(req.body, (error, createdVegetable) => {
      res.redirect('/vegetables')
    })
  });

////-----SHOW------///

app.get('/vegetables/:id', (req, res) => {
  Vegetable.findOne({ _id: req.params.id }, (error, foundVegetable) => {
  res.render('Show', {
    vegetable: foundVegetable
  })
});
})



app.listen(3001, () => {
  console.log('listening on port 3000');
});