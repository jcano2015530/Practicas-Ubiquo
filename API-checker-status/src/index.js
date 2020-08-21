'use strict'

const mongoose = require("mongoose")
const app = require("./app")

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ExperimentalDB',{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{console.log('Successful');

    app.set('port', process.env.PORT || 4005)
    app.listen(app.get('port'),()=>{
        console.log(`||Server run: ||${app.get('port')}||`);
    })
}).catch(err => console.log(err))