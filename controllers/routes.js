var express = require ('express'),
    path = require('path'),
	bodyParser = require('body-parser');




module.exports = function(app){
	var server = app.drivers.express.server;
    
     server.use('/css', express.static(__dirname + 'views/css'));
    server.use('/js', express.static(__dirname + 'views/js'));
    server.use('/img', express.static(__dirname + 'views/img'));
	//server.use('/', express.static(path.resolve('views/')));
    server.use( bodyParser.json() );       // to support JSON-encoded bodies
	server.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	  extended: true
	})); 

    
	server.get('/', function(req,res){
		res.sendFile(path.resolve('views/exo2.html'));
	});
   
	server.post('/api/user', function(req, res){
		
		var user = new app.models.user(app, {
			firstname : req.body.firstname,
			lastname : req.body.lastname,
			age : req.body.age
		});

		user.register(function(rows){
			res.send(rows);
		});

	})


// API Routes
///////////////////////////////////////////////////////////////////////////////
// affichage des candidats
    
    server.get('/api/candidats', function(req, res){        
        if(req.query.id === undefined){
            var candidat = new app.models.candidat(app, {});
            candidat.getAll(function(err, rows, fields){
                if(err) res.status(500).send(err);
                res.status(200).send({data: rows, status:'success'});
            });
        }
        else {
            var candidat = new app.models.candidat(app, {id:req.query.id});
            candidat.get(function(err, rows, fields){
                if(err) res.status(500).send(err);
                res.status(200).send({data: rows, status:'success'});
            });
        }
    });

//////////////////////////////////////////////////////////////////////////////
// Enregistrement des votants
    
    
    server.post('/api/votant', function (req, res) {
        
        if(req.query.id === undefined){
            var votant = new app.models.votant(app, {});
            votant.postAll(function(err, rows, fields){
                if(err) res.status(500).send(err);
                res.status(200).send({data: rows, status:'success'});
            });
        }
        else {
            var votant = new app.models.votant(app, {id:req.query.id});
            votant.get(function(err, rows, fields){
                if(err) res.status(500).send(err);
                res.status(200).send({data: rows, status:'success'});
            });
        }
//        var _body = req.body;
//
//        var _c = connection(),
//            _q = "INSERT INTO votant (firstname, lastname, age) VALUES ('"+_body.firstname+"', '"+_body.lastname+"', '"+_body.age+"')";
//
//        _c.connect();
//        _c.query(_q, function (err, rows, fields) {
//            if (err) throw err;
//        
//            var _c = connection(),
//                _q = 'SELECT * FROM votant WHERE id='+ rows.insertId;
//        
//            _c.query(_q, function(err, rows, fields){
//                if(err) throw err;
//                res.send(rows);
//            });
//        
//        });
//
//    _c.end();




    });

////////////////////////////////////////////////////////////////////////////
// enregistrer le vote 

    server.post('/api/vote', function (req, res) {
   
//        var _body = req.body;
//        var _c = connection(),
//            _q = "INSERT INTO vote (lastname, vote) VALUES ('" + _body.lastname + "', '" + _body.vote + "')";
//
//        _c.connect();
//        _c.query(_q, function (err, rows, fields) {
//            if (err) throw err;
//            res.send(rows);
//            });
//        _c.end();
    });


    server.get('/api/vote', function (req, res) {
        
    
//            _q = 'SELECT * FROM vote';
//
//        _q += typeof req.query.id !== 'undefined' ? ' WHERE id=' + req.query.id : '';
//
//        _c.connect();
//        _c.query(_q, function (err, rows, fields) {
//            if (err) throw err;
//            res.send(rows);
//        });
//
//        _c.end();

    });


    server.get('/api/votant', function (req, res) {

//        var _c = connection(),
//            _q = 'SELECT * FROM votant';
//
//        _q += typeof req.query.id !== 'undefined' ? ' WHERE id=' + req.query.id : '';
//
//        _c.connect();
//        _c.query(_q, function (err, rows, fields) {
//            if (err) throw err;
//            res.send(rows);
//        });
//
//        _c.end();

    });

    server.use(function(req, res){
        res.redirect('/');
    })
}

