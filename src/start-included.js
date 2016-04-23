import migrate from './migration';
import sqlite3 from 'sqlite3';

var db = new sqlite3.Database('res/db.sqlite');

migrate(db);

db.close();
