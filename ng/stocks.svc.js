
/*
This is the Services file.
All the controller calls to MongoDB through Express are made using the services.
HTTP function calls from this file are made to the app/routes.js and response is sent
back to the ng/stock.ctrl.js
*/

app.service('StockSvc',function($http){
  this.fetch = function(){
    return $http.get('/api/stocks')
  }

  this.create=function(post){
    return $http.post('/api/stocks/',post)
  }

// Accessing Stock Price through a service
  this.getStockPrice=function(requestString){
    return $http.get(requestString)
  }
  //this.inventory=$http.get('/api/stocks');


  this.removeByStockName=function(id){
      console.log("inside service"+id)
      console.log(id);
      return $http.delete('/api/stocks/stockName/'+id)
      }
    }

  )


//service to add symbol drop down
// url https://api.iextrading.com/1.0/tops/
