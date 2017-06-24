var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/stockmeter', function () {
  console.log('mongodb connected for stock-o-meter')
})
module.exports = mongoose
