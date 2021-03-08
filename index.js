    const http = require('http'),
    const axios = require('axios'),
    logger = require('morgan'),
    cors = require('cors'),
    express = require('express'),
    bodyParser = require('body-p parser');

    var app = express();
    var port = 8000();

    app.get('/hello' , function(req, res ){

        res.send("Hello Class");
        res.send(users.join('\n'));


    });

    http.createServer((req, res)=>{
       res.write(users.join("\n")); //display the list of users on the page
      res.end(); //end the response
    }).listen(8000); // listen for requests on port 8000

let users = []; // names of users will be stored here
(async function getNames(){
  try{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
    users = data.map(user=>user.name);
  } catch(error){
    console.log(error)
  }
})()

app.listen(port, function(err) {

    console.log("Listening on port:" + port )

});