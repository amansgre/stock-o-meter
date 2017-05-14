
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
})


app.service('mySharedService',function($http){
this.getSharedData=function(){
return $http.get('/api/stocks')
}
})
