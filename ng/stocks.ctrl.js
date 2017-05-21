var app = angular.module('stockmeter', [])


/*app.controller('StockDetails', function ($scope,StockSvc){
 //console.error(‘error!’)
  StockSvc.fetch().
  success(function(stocks){
    $scope.inventory=stocks;
  //  console.log($scope.inventory)
  //  $scope.stockPrice=1;

  })
//  StockSvc.inventory=$scope.inventory;

 add Stock item - Moving to list - Uncomment to revert back
  $scope.addStockItem= function(){
    if($scope.sName){
      StockSvc.create({
          stockName:$scope.sName.symbol}).
          success(function(post){
            $scope.inventory.unshift(post)
            $scope.sName=null;
          })

    }
  }

  //adding stock price function
})*/

app.controller('StockPriceCtrl',function($interval,$scope,StockSvc){

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

  }

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

app.controller('StockPriceDropDown',function($scope,StockSvc){

console.log("inside controller")
  var dropDownSymbols='https://api.iextrading.com/1.0/tops/';
  StockSvc.fetch().
   success(function(stocks){
     $scope.inventory=stocks;

   })

   $scope.addStockItem= function(){
    console.log('insiden addStockItem');
    console.log($scope);
        if($scope.sName){
          StockSvc.create({
              stockName:$scope.sName.symbol}).
              success(function(post){
                $scope.inventory.unshift(post)
                $scope.sName=null;
              })
        }
      }

  StockSvc.getStockPrice(dropDownSymbols).
   then(function(response){
       console.log('Quotes retrieved good for DropDown');
     //  console.log($scope.stockQuoteInventory)
       $scope.stockdatadd = response.data;
    //   $scope.stockdatadd.symbol = response.data.symbol;
          //console.log($scope.stockdatadd[2].symbol);
   },function(error){
     console.log(error);
   })

  }

)
