
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

this.addStockItem=function(){

}

})


app.service('mySharedService',function($http){
this.getSharedData=function(){
return $http.get('/api/stocks')
}
})

//service to add symbol drop down
// url https://api.iextrading.com/1.0/tops/
