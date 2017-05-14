var app = angular.module('stockmeter', [])


app.controller('StockDetails', function ($scope,StockSvc){
 //console.error(‘error!’)
  StockSvc.fetch().
  success(function(stocks){
    $scope.inventory=stocks;
  //  console.log($scope.inventory)
  //  $scope.stockPrice=1;

  })
//  StockSvc.inventory=$scope.inventory;

  $scope.addStockItem= function(){
    if($scope.sName){
      StockSvc.create({
          stockName:$scope.sName}).
          success(function(post){
            $scope.inventory.unshift(post)
            $scope.sName=null;
          })

    }
  }
  //adding stock price function
})

app.controller('StockPriceCtrl',function($scope,StockSvc){

  var reqQuotes='';//='AAPL,GOOG';
  var reqFinal='';
  var reqPrefix='https://api.iextrading.com/1.0/tops/last?symbols=';

  StockSvc.fetch().
  success(function(stocks){
    $scope.conventory=stocks;
    console.log("inside StockPriceCtrl")
  var quotes='';
  for(var obj in $scope.conventory){
    quotes=quotes+$scope.conventory[obj].stockName;
    quotes=quotes+',';
  //  console.log(quotes);
  }
  //to remove the last comma
  reqQuotes=quotes.substring(0,quotes.length-1);
  reqFinal=reqPrefix+reqQuotes;
  console.log(reqFinal);

  StockSvc.getStockPrice(reqFinal).
   then(function(response){
       console.log('Quotes retrieved good');
     //  console.log($scope.stockQuoteInventory)
       $scope.stockQuoteInventory = response.data;
   },function(error){
     console.log(error);
   })

  }
)

});


/* Commented for emergency use- incase service injectec controller doesnt work
app.controller('StockPriceCtrl',function($scope,$http,StockSvc){

  var reqPrefix='https://api.iextrading.com/1.0/tops/last?symbols=';
  var reqQuotes='AAPL,GOOG';
  var reqFinal=reqPrefix+reqQuotes;
  console.log(StockSvc.inventory);

  //console.log(myFact.inventory);

  $http.get(reqFinal).
  then(function(response){
      console.log('Quotes retrieved good');
      console.log($scope.stockQuoteInventory)
      $scope.stockQuoteInventory = response.data;
  },function(error){
    console.log(error);
  })});
*/
