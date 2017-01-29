module.exports = function(app, data){
    var mysql = app.drivers.mysql;
    
	this.id = data.id || null;
	this.firstname = data.firstname || null;
	this.lastname = data.lastname || null;
	this.age = data.age || null;
    this.table = 'candidat';

	this.create = function(cb){
			var q = "INSERT INTO votant (firstname,lastname,age) VALUES ('"+this.firstname+"', '"+this.lastname+"', "+this.age+")";

		mysql.query(q, function(err, rows, fields){
			cb(err, rows, fields);
		});
	}

    this.get = function(cb){
			var q = "SELECT * FROM "+this.table+" WHERE id = "+this.id;

		mysql.query(q, function(err, rows, fields){
			cb(err, rows, fields);
		});
	}
    
    this.getAll = function(cb){
			var q = "SELECT * FROM "+this.table;

		mysql.query(q, function(err, rows, fields){
			cb(err, rows, fields);
		});
	}

    
    
	return this;
}

