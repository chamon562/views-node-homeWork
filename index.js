const express = require('express')
const app = express()


//need route for index
// http://localhost:8000/
// prints This is the Home Page! on web page
app.get('/', function(req, res) {
    // res.send('This is the Home Page!')
    res.sendFile(__dirname+'/views/index.html');
  });

  //need route for about
//   http://localhost:8000/about
//when typing in the same local host and /about
//it displays the message res.sed('Some stuff about me...)
  app.get('/about', function(req, res) {
    //   res.send('Some stuff about me is that I dont know what Im doing.')
      // res.sendFile(__dirname+'/views/about.html)
    //   res.sendFile( takes an absolute path, so we can't just give it ./views/index.html
    // _dirname is a Node keyword that gives us the absolute path of the current directory (docs), 
    // so we can just tack that on in front of the relative path
        res.sendFile(__dirname+'/views/about.html');
  });
  //need route for blog
//http://localhost:8000/blog displays the res.send('A directory of all my blog post will go here')
  app.get('/blog', function(req, res) {
    //   res.send('A directory of all my blog posts will go here.')
    res.sendFile(__dirname+'/views/blog-directory.html');
  });

//this is to listen for the local port that we
//type in the url localhost:8000
  app.listen(8000, ()=>{
    console.log('listening to port 8000')
})