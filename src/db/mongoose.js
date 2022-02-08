const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/task1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connection to db is success');
}).catch((e) => {
    console.log('connection to db is fail');
})