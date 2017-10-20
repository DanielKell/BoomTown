import express from 'express';
import bodyParser from 'body-parser';
import { 
  graphqlExpress, 
  graphiqlExpress 
} from 'apollo-server-express';
import schema from './api/schema'; 
import cors from 'cors';

const app = express();

app.use('*', cors());

const GQL_PORT = 5000;

app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema: schema
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