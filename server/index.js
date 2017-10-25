import express from 'express';
import bodyParser from 'body-parser';
import { 
  graphqlExpress, 
  graphiqlExpress 
} from 'apollo-server-express';
import schema from './api/schema'; 
import cors from 'cors';
import createLoaders from './api/loaders';
import initConfigs from './api/configs';
import initPostgres from './api/pg-resource';

const app = express();
const PORT = process.env.PORT;
initConfigs(app);
export const database = initPostgres(app);

app.use('*', cors());
app.use(express.static(__dirname));

const GQL_PORT = 5000;

app.get('/time', async(request, response) => {
    const time = await database.query('SELECT NOW() as now');
    console.log(time);
    response.send(time.rows[0]).end();
});

app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema: schema,
    context: { loaders: createLoaders() }
}));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

app.get('/', function(request, response) {
  response.send('Hello, world!');
});

app.listen(GQL_PORT, () => console.log(
    'GraphQL server is running on port ' + GQL_PORT
))

function init(err) {
    !err && console.log('Express started on ' + PORT);
}

app.listen(PORT, init);