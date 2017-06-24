/*
This file contains all the controllers.
Controllers in turn call the services to access,delete or modify thestock prices
in the database.Once the success/error from DB is recieved back the model
is updated and and these changes gets reflected in the homepage.
*/

var app = angular.module('stockmeter', [])


/*
@function:
    1.Gets the intial current stock price from the iex we services call
    2. Updates the current stock price/symbols with every addition and removal of new stock entry/remocval.
*/

app.controller('StockPriceCtrl',function($rootScope,$interval,$scope,StockSvc){
$scope.getStockPriceUpdate = function(){
  StockSvc.fetch().
  success(function(stocks){
    $scope.conventory=stocks;
    console.log("inside StockPriceCtrl")
  var quotes='';
  var reqQuotes='';//='AAPL,GOOG';
  var reqFinal='';
  var reqPrefix='https://api.iextrading.com/1.0/tops/last?symbols=';
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
       $scope.stockQuoteInventory = response.data;
   },function(error){
     console.log(error);
     //If no quotes is sent - emptying the stock price display.
     if(quotes==""){
       $scope.stockQuoteInventory="";
     }
   })

  }
)}

$scope.getStockPriceUpdate();
//handling the auto-update of stock-price after addition of dropdown value
$scope.$on('autorefresh', function(event, data) {
  console.log("Here comes code 1");
  $scope.getStockPriceUpdate();
});

});


/*
@function:
    1. Returns the intial values for the drop down "Add Stock"
    2. Add the values to DB and model when button "Add Stock" is clicked.
    3. Removes the stock from DB and model when "-" button following the stock is clicked.
*/

app.controller('StockPriceDropDown',function($scope,$rootScope,StockSvc){
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
        StockSvc.fetch();

  $scope.parentData=1;

//adding an event to autoreflect addiiton of stock
console.log("inside broadcast event");
$scope.$broadcast('autorefresh', $scope.parentData);
}

//removing an Item from Stock
$scope.removeStockItem= function(stockToRemove){
 console.log("Deleting now"+stockToRemove);
 console.log(stockToRemove);
 if(stockToRemove){
   StockSvc.removeByStockName(stockToRemove).
       success(function(post){
         console.log("Success:: Deleted Stock"+stockToRemove);
         console.log($scope.inventory);
        //broadcast to autorefresh the removal of stock
        StockSvc.fetch().
         success(function(stocks){
           $scope.inventory=stocks;
         })
        $scope.parentData = 2
        $scope.$broadcast('autorefresh', $scope.parentData);
       })
 }
}

StockSvc.getStockPrice(dropDownSymbols).
   then(function(response){
       console.log('Quotes retrieved good for DropDown');
       $scope.stockdatadd = response.data;

   },function(error){
     console.log(error);
   })
  }

)
