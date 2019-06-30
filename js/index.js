import _bodyParser from 'body-parser';
import _cors from 'cors';
import _express from 'express';
import _expressRequestId from 'express-request-id';
import _helmet from 'helmet';
import _logger from './logger';
import affixRouter from './affix-router';
import lootRouter from './loot-router';

const app = _express(),
    port = 3001;

app.use(_helmet());
app.use(_bodyParser.json());
app.use(_cors());
app.use(_expressRequestId());

app.use((request, response, next) => {
    // Rig up Bunyan request logging.
    const log = _logger.child({
        body: request.body,
        id: request.id
    }, true);

    log.info({
        request
    });

    // This is an API, so don't cache responses.
    response.setHeader('Cache-Control', 'no-cache');
    next();
});

app.use('/affix', affixRouter);
app.use('/loot', lootRouter);
app.use(_express.static(`${__dirname}/../client`));

app.listen(port, () => {
    _logger.info({
        port
    }, 'Server is listening');
});
