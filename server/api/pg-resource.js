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

//Note: All queries must be lowercase, and lowercase on postico! 
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
    },
    getUserOwnedItems(id) {
    return pgClient.query(`SELECT * FROM items WHERE itemowner='${id}'`).then(res => (res.rows));
    },
    getUserBorrowedItems(id){
      return pgClient.query(`SELECT * FROM items WHERE borrower='${id}'`).then(res => (res.rows));
    },

//Need to fix bug where RETURNING id is not setting up a new id in the database
    addCardItemHelper(title, description, imageurl, itemowner, tags){
      pgClient.query(`INSERT INTO items (title, description, imageurl, itemowner) VALUES ($1, $2, $3, $4) RETURNING *`, [title, description, imageurl, itemowner])
        .then(res => {
          const sqlValues = tags.reduce((acc, curr, index, array) => {
            if(index < array.length-1) {
              acc = (`${acc}('${res.rows[0].id}', '${curr}'),`)
            }else{
              acc = (`${acc}(${res.rows[0].id}, ${curr})`)
            }
            return acc
            },[]);
          pgClient.query(`INSERT INTO itemtags (id, tagid) VALUES ($1)`, [sqlValues])
        });
    }

  };
};