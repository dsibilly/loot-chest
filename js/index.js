import _bodyParser from 'body-parser';
import _cors from 'cors';
import _express from 'express';
import _helmet from 'helmet';
import _morgan from 'morgan';
import lootRouter from './loot-router';

const app = _express();

app.use(_helmet());
app.use(_bodyParser.json());
app.use(_cors());
app.use(_morgan('combined'));

app.use('/loot', lootRouter);

/* app.get('/', (request, response) => {
   const loot = new Loot();
   loot.generate(result => {
   response.send(result);
   });
   });
   app.get('/api/v1/number/:count', (request, response) => {
   const loot = new Loot(),
   items = [];
   for (let i = 0; i < request.params.count; i += 1) {
   items.push(new Promise(resolve => {
   loot.generate(resolve);
   }));
   }
   Promise.all(items).then(results => {
   response.send(results);
   });
   });
   app.get('/api/v1/type/:itemType', (request, response) => {
   const loot = new Loot({
   itemType: request.params.itemType
   });
   loot.generate(result => {
   response.send(result);
   });
   }); */

app.listen(3001, () => {
    console.log('listening on port 3001');
});
