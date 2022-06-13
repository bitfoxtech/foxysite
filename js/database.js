require('mysql');

function send_message() {
    var mysql = require('mysql');

    var con = mysql.createConnection({
      host: "localhost",
      user: "web_bot",
      password: "EtBUgp%;zV=|lg=b[%a62K$1cR$6NQMf?\"@"
    });
    
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });
}


