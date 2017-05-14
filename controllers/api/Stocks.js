var Stock = require('../../models/Stock');
var router=require('express').Router()


router.get('/', function (req, res, next) {
    Stock.find()
    .sort({date:-1})
    .exec(function(err,stock){
      if(err){return next(err)}
      res.json(stock)
    })

} )


router.post('/', function (req, res, next) {
      console.log(req.body); //debug
  var stock = new Stock({
    stockName: req.body.stockName
  })
  stock.save(function (err, stock) {
    if (err) { return next(err) }
    res.json(201, stock)
  })
})

module.exports=router
