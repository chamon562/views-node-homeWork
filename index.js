const express = require('express')
const app = express()
//set takes 2 arguments the name of what we are setting and the value
// setting view engine the value is ejs
//tell express taht were going to use ejs as the view engine
//adapt our views to ejs files 
app.set('view engine', 'ejs')


//need route for index this is the home route too 
// http://localhost:8000/
// prints This is the Home Page! on web page
app.get('/', function(req, res) {
    //ready to recieve a template res.render() no need for absolute file path just the name of the file dont need ejs extention
    res.render('index',{name: 'Sterling Archer', age: 35} )//express will look inside views folder by default for an ejs file with this name
    // res.send('This is the Home Page!')
    //string concatination (__dirname+'/views/index.html');
    // res.sendFile(__dirname+'/views/index.html');
  });

  //need route for about
//   http://localhost:8000/about
//when typing in the same local host and /about
//it displays the message res.sed('Some stuff about me...)
// app.get ('/rout', (req, res) )
  app.get('/about', function(req, res) {
      res.render('about', {fave: ['music', 'rollerblading', 'singing', 'rapping', 
      'writing', 'Fighting Games', 'Dota2', 8318]})
    //   res.send('Some stuff about me is that I dont know what Im doing.')
      // res.sendFile(__dirname+'/views/about.html)
    //   res.sendFile( takes an absolute path, so we can't just give it ./views/index.html
    // _dirname is a Node keyword that gives us the absolute path of the current directory (docs), 
    // so we can just tack that on in front of the relative path which is /views then /about.html the file
    // res.sendFile(`${__dirname}/views/about.html`)   //es6 
    // res.sendFile(__dirname+'/views/about.html');
  });
  //need route for blog
//http://localhost:8000/blog displays the res.send('A directory of all my blog post will go here')
  app.get('/blog', function(req, res) {
      res.render('blog-directory')
    //   res.send('A directory of all my blog posts will go here.')
    // res.sendFile(__dirname+'/views/blog-directory.html');
  });

//this is to listen for the local port that we
//type in the url localhost:8000
  app.listen(8000, ()=>{
    console.log('listening to port 8000')
})