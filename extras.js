ScracthBoard::

Curl Samples

//curl post request
curl -v -H "Content-Type: application/json" -XPOST --data "{\"stockName\":\"TestStock\"}" localhost:3000/api/stocks


//curl get request
curl -v -H "Content-Type: application/json" -XGET localhost:3000/api/stocks
