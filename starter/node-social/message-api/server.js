var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json()); //use basically imports middleware (JSON extensibility for request.body in this case)


app.get('/api/posts', function (req, res) {
  res.json([
    {
      username: 'harriAtQA',
      body: 'node rocks!'
    }
  ])
});



app.post('/api/posts', function (req, res) {
  console.log('post received!')
  console.log(req.body.username)
  console.log(req.body.body)
  res.send(201)
});


//curl -v -H "Content-Type: application/json" -XPOST --data "{\"username\":\"edselAtQA\", \"body\":\"node rules!\"}" localhost:3000/api/posts

//app.use();

app.listen(3000, function () {
  console.log('Server listening on', 3000)
});  