import bunyan from 'bunyan';
import bunyanExpressSerializer from 'bunyan-express-serializer';

const logger = bunyan.createLogger({
        level: 'info',
        name: 'loot-chest-api',
        serializers: {
            error: bunyan.stdSerializers.err,
            request: bunyanExpressSerializer,
            response: bunyan.stdSerializers.res
        },
        streams: [
            {
                path: './loot-chest.log'
            },
            {
                stream: process.stdout
            }
        ]
    }),
    logResponse = (id, body, statusCode) => {
        const log = logger.child({
            id
        }, true);

        log.info({
            contentLength: JSON.stringify(body).length,
            statusCode
        }, 'API Response');
    };

export default logger;
export {
    logResponse
};
