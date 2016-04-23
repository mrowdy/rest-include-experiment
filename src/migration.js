var sqlite3 = require('sqlite3').verbose();
const dummyText = "Lorem ipsum dolor sit amet, te ius augue animal definitionem, wisi possim deserunt usu in. Cu nec percipit recusabo reformidans, et amet eruditi dolorum quo. An impetus repudiandae usu, percipit vituperata ut ius. Eos ex minimum sadipscing, et nec stet impetus graecis, hinc eirmod no quo. Te autem elitr denique vix, deseruisse voluptatum id mel. In quo sumo liber sadipscing, utamur singulis ad mei. Vix erat facilis definitiones no, sed ad utinam lobortis, pri posse utinam te";

export default function(db){
    db.serialize(function() {
        db.run("CREATE TABLE if not exists `company` (`id` INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,`title` TEXT,`description` TEXT)");
        db.run("CREATE TABLE if not exists `job` (`id` INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,`title` TEXT,`description` TEXT,`company`	INTEGER,`date` INTEGER)");

        let stmt = db.prepare("INSERT INTO company (title, description) VALUES (?, ?)");
        for (var i = 0; i < 10; i++) {
            stmt.run(["Company " + i, dummyText]);
        }
        stmt.finalize();

        stmt = db.prepare("INSERT INTO job (title, description, company) VALUES (?, ?, ?)");
        for (var i = 1; i < 11; i++) {
            for(var y = 0; y < 3; y++){
                stmt.run(["Job " + i + y, dummyText, i]);
            }
        }

        stmt.finalize();
    });
}