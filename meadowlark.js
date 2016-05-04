const express = require('express'),
      app = express(),
      handlebars = require('express-handlebars').create( { defaultLayout: 'main' } ),
      fortunes = require('./library/fortune.js')




app
//set the server's initial parameters
     .engine('handlebars', handlebars.engine)
     .set('view engine', 'handlebars')
     .set('port', process.env.PORT || 3000)
     .use(express.static(__dirname + '/public'))
//route individual server GET requests
     .get(
	  '/',
	  (req, res) =>
	       {
		    res.render('home');
	       }
     )
     .get(
	  '/about',
	  (req, res) =>
	       {
		    res.render(
			 'about',
			 {
			      fortune: fortunes.getRandomFortune()
			 }
		    );
	       }
     )
//handle HTTP request errors
     .use(  //custom 404 page
	  (req, res) =>
	       {
		    res.status(404);
		    res.render('404');
	       }
     )
     .use(  //custom 500 page
	  (err, req, res, next) =>
	       {
		    console.error(err.stack)
		    res.status(500);
		    res.render('500');
	       }
     )
//start the web server
     .listen(
	  app.get('port'),
	  () =>
	       {
		    console.log('***Express server started on http://localhost' + app.get('port') + '\n(press C-c C-c to terminate)')
	       }
     )
