
var Stock = require('../../models/Stock');
var router=require('express').Router()



router.get('/', function (req, res, next) {
  console.log("inside router get");
    Stock.find()
    .sort({date:-1})
    .exec(function(err,stock){
      if(err){return next(err)}
      res.json(stock)
    })

})

router.post('/', function (req, res, next) {
    console.log("inside router post");
      console.log(req.body); //debug
  var stock =   new Stock({
    stockName: req.body.stockName
  })

  stock.save(function (err, stock) {
    if (err) {
      console.log(err.name);
      return next(err) }
    res.json(201, stock)
  })

})


router.delete('/', function (req, res, next) {
    //  console.log(req);
      console.log("inside router delete"); //debug
    console.log(req)
  var stock = new Stock({
    stockName: req.body.stockName
  })
  //console.log(req);


  /*stock.save(function (err, stock) {
    if (err) { return next(err) }
    res.json(201, stock)
  })*/


})

router.delete('/stockName/:id', function (req, res, next) {
    //  console.log(req);
    console.log("inside router delete with stockName"); //debug

          Stock.remove({
              stockName: req.params.id
          }, function(err, stock) {
              if (err)
                  res.send(err);
              res.json({ message: 'Successfully deleted' });
          });
})



module.exports=router
