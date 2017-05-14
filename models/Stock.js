
//var mongoose= require('mongoose');

// define our stock Model
// module.exports allows us to pass this to other files when it is called

var db = require('../db')

var Stock = db.model('Stock',{
    stockName : {type : String, default: ''}
//    ,stockPrice: {type:number,default:''}
})

module.exports = Stock;

var stockTotValue = function(price,quantity){
  return price*quantity;
};

/*var stockPrice = function(symbol){
  return
}
*/

//module.exports.stockTotValue=stockTotValue;
