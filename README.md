# views-node-homeWork
We're going to create a personal website with the following pages: Home About Blog

## UPDATE Node Instructions Wed Aug. 5th, 2020 @ 5:56pm
# Node App instructions 
- Setting up Github repository 
- Starting a Node app
- Node modules (how to make them, export them, and import them)
- Node packages (take note of any NPM packages you have used/researched)
- Adding express to a node app
- Express routes
- Views
- Templates
- Layouts
- Controllers

### First make a github repository on github.com
1. Crate a new repository on github.com
2. On github.com click the copy clip board icon in green and go to your terminal. cd into which folder you want to clone the new repo in. 
3. type git clone in the terminal, then paste the link you copied from github.com 

## Setting up npm NODE Package Manager
4. Type in terminal npm init -y to make a package.json and the -y says it will automatically setup everything for you by default. 
5. touch an index.js if there isnt one. this will be the workspace you code on. 
6. touch .gitignore so it hides the files, so no one can hack you, and it should have the file node_modules in there. If not add that inside of the .gitignore
## Installing express Pack and ejs packs
7. Now install the express and ejs pack, you should be inside your main folder that made on github.com type in the console npm i express. should show some loading on the bottom of your line. And then npm i ejs to install ejs.

## Starting Node app with packages we've downloaded 
8. In terminal type in Code . to open your code in vs code
9. On the upper left click on index.js and once inside type in:
### code snippet 
```js 
// import express package
const express = require('express')
// create an instance of an express app
const app = express()
//set takes 2 arguments the name of what we are setting and the value
// setting view engine the value is ejs
//tell express taht were going to use ejs as the view engine
//adapt our views to ejs files 
app.set('view engine', 'ejs')

// prints This is the Home Page! on web page
// [GET] Home route
app.get('/', function(req, res) {
    res.send('This is the Home Page')
})

//then listen for port to show on html web page
//this will always be at the bottom from what I learned.
app.listen(8000)
```
10. After that is written, type in nodemon in the console should some green words saying that its running
11. Open up google chrome in the url type localhost:8000 and should see the 'This is the Home Page'.
12. To stop nodemon from running for mac users its control + command. Sorry dont know for windows. 
## Using a custome node package 
13. go to website https://www.npmjs.com/ and type in the search what you are interested in. For this example typed in freestyle. 
14. this is my example of what I found on this website https://www.npmjs.com/package/freestyle
15. What this package does it will grab your.txt file you made and wrote some words in and randomize the text to make some rap lyrics. 
16. to install this package in the terminal type npm i freestyle
17. to get this to work I typed in the index.js on a new line: 

### code snippet
```js
//same as express i had to import it so this importing freestyle package
let freestyle = require('freestyle');
// variable for fs to have a .txt with random words and put require
let fs = require('fs')
//dont know exactly what this is just following the example
let s = fs.createReadStream(__dirname + '/crazybars.txt');
freestyle(s, function(r){
    let A = r.couplet();
    let B = r.couplet();
    console.log([A[0], B[0], A[1], B[1], ''].join('\n'));
});
```

18. Also in after __dirname+ you can see my .txt called crazybars.txt. Create a text file by typing touch crazybars.txt, and in this .txt file i wrote in all my words I wanted the package to use for its freestyle mechanism.

19. type index.js for it to run and you should see all the words you wrote turn into a rap freestyle. 

## Adding Express to add Node App

20. Like we did earlier seen back in number 9. The first code written is how to add express to a node app. 
### code snippet
```js
// import express package
const express = require('express')

```
## This is a express route
21. seen in the code snippet after number 9 again. we do a get home route. Routing refers to how an application's endpoints (URL's) respond to client request. referenced from https://expressjs.com/en/guide/routing.html
### code snippet 
```js
// [GET] Home route
app.get('/', function(req, res) {
    res.send('This is the Home Page')
})
```

## Views 
22. Instead of using res.send() to send text to a web page. We can do something called 'serving the HTML files'. I started by making a mkdir views folder inside my main folder. 

23. inside the views folder i created 3 files. touch index.html about.html blog-directory.html

24. In each of these files I created an h1 tag in them and put words that were highlighting the folders to see later in the web page. 

25. then instead of using res.send() like we did earlier we replace with res.sendFile() and inside will be the abosoulte path. to get that absolute path we have __dirname and we put that in there like this.
### code snippet 
```js
//this is [GET] home route
app.get('/', function(req, res) {
    //using __dirname to get the absolute path the + concatinates where its in the main folder views/ then after would be index.html
  res.sendFile(__dirname+'/views/index.html');
});

```

## Templates 
26. From what ive researched Templates are an engine and it Injectsdynamic content onto the html. 
27. This is where ejs comes in. this is the package we installed right from the beginning. npm i ejs
28. Back on number 23, I created three .html files. I had to change to the .html files to .ejs files like so for this this to work. you right click the about.html for example and rename change it to about.ejs. do that for all three files. 
29. then we had to make sure engine was in play by typing this:
### code snippet 
```js
//set takes 2 arguments the name of what we are setting and the value
// setting view engine the value is ejs
//tell express taht were going to use ejs as the view engine
//adapt our views to ejs files 
app.set('view engine', 'ejs') 

``` 

30. Then to get something like a name to show on the web page we type in the index.js 
```js
app.get('/', function(req, res) {
    //ready to recieve a template res.render() no need for absolute file path just the name of the file dont need ejs extention
    res.render('index',{name: 'Sterling Archer', age: 35} )//express will look inside views folder by default for an ejs file with this name

  });
```
31. Then in the index.ejs the template engine uses this <%%> characters whenever we want to do something. For example to get th ename to show on webpage. 
```Html
<h1>Hello, <%= name%>!</h1>

```
32. If we type in nodemon in the console and go to the web page and type localhost:8000 we should see Hello, Sterling Archer! because thats what we wrote for our name in the index.js.

## Layouts 

33. typed in google search. The node layout defines how the attributes for the node are organized and displayed. Also taken from my GA trusty web info EJS layouts is a node package that allows us to create a boilerplate (aka a layout) that we can inject content into based on which route is reached. Layouts normally include header and footer content that you want to display on every page (navbar, sitemap, logo, etc.).

34. install the layout is done in the terminal we type in npm i express-ejs-layouts.

35. then in the index.js we type in 
```js 
let ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(ejsLayouts);
```

36. app.use()? This is an express function that indicates middleware. Middleware functions intercepts the request object when it comes in from the client, but before it hits any route. We'll see more examples of middleware later.

37. In the root of the views folder, we add a layout called layout.ejs. It must be called layout.ejs, as mandated by express-ejs-layouts.

### code snippet
```html

<!DOCTYPE html>
<html>
<head>
  <title>Faves&Hates</title>
</head>
<body>
  <%- body %>
</body>
</html>

```
38. This layout will be used by all pages, and the content will be filled in where the <%- body %> tag is placed. <%- body %> is a special tag used by express-ejs-layouts that cannot be renamed.

39. to use the lay out, create a views folder,and then a home.ejs file. inside home.ejs
### code snippet
```html
<h1>This is the home page!</h1>

```
40. Now create a home route in index.js below the middleware:

### code snippet 
```js
app.get('/', function(req, res) {
  res.render('home');
});

```
41. Ejs will assume that home means home.ejs. Now starte nodemon and check that your home page renders as desired.

42. Set up a few more views/routes in the index.js 
### code snippet 
```js
app.get('/animals', function(req, res) {
  res.render('animals', {title: 'Favorite Animals', animals: ['sand crab', 'corny joke dog']})
});
```
43. in the animals.ejs type this to show a list of the anmials 
### code snippet 
```html
<h1><%= title %></h1>
<ul>
  <% animals.forEach(function(animal) { %>
    <li><%= animal %></li>
  <% }) %>
</ul>
```

44. then check on the web page localhost:8000 to see if it showed up. 

45. to add navigation where people can click on in the layout.ejs
```html
<!DOCTYPE html>
<html>
<head>
  <title>Faves&Hates</title>
</head>
<body>
  <ul>
    <li><a href='/foods'>Favorite Foods</a></li>
    <li><a href='/animals'>Favorite Animals</a></li>
  </ul>
  <%- body %>
</body>
</html>
```
## Controllers

46. we have been placing all routes into index.js when creating a Node/Express app, but this can get cumbersome when dealing with many routes. The solution is to group related routes and separate these groups into separate files. These files will go into a controllers folder.

47. Create a controllers folder inside the root directory that will contain all routes except for the home route.

48. Inside the controllers folder, create a file called faves.js  and hates.js with the following routes:
 49. in the index.js it should have the app.use()
 ### code snippet
 ```js
app.use('/faves', require('./controllers/faves'))
app.use('/hates', require('./controllers/hates'))

 ```
 50. inside the faves.js it will have 
 ### code snippet 
 ```js
 // we have to do this in each the fave and hates 
    const express = require('express')
    const router = express.Router()


router.get('/animals', function(req, res){
    res.render('faves/animals', {title: 'Favorite Animals', animals: ['weenie dogs', 'cats', 'penguin', 'Manitee']})
});
router.get('/foods', function(req, res){
    res.render('faves/foods', {title: 'Favorite Foods', foods: ['Kbbq', 'Pho', 'Cambodian Curry', 'Animal style hamburger']})

})

module.exports = router

```

51. in the hates.js 
### code snippet 
```js
const express = require('express')
const router = express.Router()

router.get('/animals', function(req, res){
    res.render('hates/animals', {title: 'Least Favorite Animals', animals: ['spiders', 'mosquitos', 'flys', 'worms']})
});
router.get('/foods', function(req, res){
    res.render('hates/foods', {title: 'Least Favorite Foods', foods: ['bitter melon', 'shrimp', 'spiders', 'sushi']})
});

module.exports = router
```

52. then the layout.ejs should now have these links 
### code snippet 
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FAVES & Hates</title>
</head>
<body>

    <ul>
        <li><a href='/faves/foods'>Favorite Foods</a></li>
        <li><a href='/faves/animals'>Favorite Animals</a></li>
        <li><a href='/hates/animals'>Least Favorite Foods</a></li>
        <li><a href='/hates/foods'>Least Favorite Animals</a></li>
      </ul>

    <%- body%>
    
</body>
</html>
```




