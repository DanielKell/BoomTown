export default function(app) {
    
    app.set('PG_USER', process.env.PG_USER || 'boomtown' );
    app.set('PG_PASSWORD', process.env.PG_PASSWORD || 'boomtown');
    app.set('PG_DATABASE', process.env.PG_DATABASE || 'boomtown');
    app.set('PG_HOST', process.env.PG_HOST || 'localhost');

};