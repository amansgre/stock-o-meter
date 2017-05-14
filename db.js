var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/stockmeter', function () {
  console.log('mongodb connected')
})
module.exports = mongoose
