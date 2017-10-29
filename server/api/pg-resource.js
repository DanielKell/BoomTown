const { Pool } = require('pg');

export default function(app) {

const pgClient = new Pool({
  host: app.get('PG_HOST'),
  user: app.get('PG_USER'),
  password: app.get('PG_PASSWORD'),
  database: app.get('PG_DATABASE'),
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

  return {
    getItems(){
      return pgClient.query("SELECT * FROM items").then(res => (res.rows));
    },
    getTags(){
      return pgClient.query("SELECT * FROM tags").then(res => (res.rows));
    },
    getTag(id){
      return pgClient.query(`SELECT tags.tagid, tags.title FROM tags JOIN itemtags on tags.tagid = itemtags.tagid WHERE itemtags.id = ${id}`).then(res =>{
        return res.rows
      });
    },
    getItem(id){
      return pgClient.query('SELECT * FROM items').then(res => (res.rows));
    }
  };
};