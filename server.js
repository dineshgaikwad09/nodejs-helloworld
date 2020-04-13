var express = require('express');
var app = express();
const path = require('path');
const router = express.Router();
// app.get('/', function(req, res) {
//  res.send('Demo App!!');
// });

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/view/index.html'));
    //__dirname : It will resolve to your project folder.
  });

  app.use('/', router);
app.listen(8080, function() {
 console.log("Server is running at 8080 port!");
});