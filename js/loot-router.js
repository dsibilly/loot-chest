import validItemTypes from './data/item-types';
import {
    logResponse
} from './logger';
import Loot from './loot';
import {
    Router
} from 'express';

const lootRouter = new Router();

let counter = 0,
    loot = new Loot();

lootRouter.get('/', (request, response) => {
    loot.generate(result => {
        response.send(result);
        logResponse(request.id, result, 200);

        counter += 1;

        if (counter >= 20) {
            loot = new Loot();
        }
    });
});

lootRouter.post('/', (request, response) => {
    const hasPrefix = request.body.hasOwnProperty('hasPrefix') && request.body.hasPrefix === true,
        hasSuffix = request.body.hasOwnProperty('hasSuffix') && request.body.hasSuffix === true;

    if (!hasPrefix && !hasSuffix) {
        // Create a fully random item!
        loot = new Loot();
    } else {
        loot = new Loot({
            hasPrefix,
            hasSuffix
        });
    }

    loot.generate(result => {
        response.send(result);
        logResponse(request.id, result, 200);
    });
});

lootRouter.get('/:itemType/', (request, response) => {
    const itemType = request.params.itemType,
        loot = new Loot({
            itemType
        });

    if (!validItemTypes.has(itemType)) {
        // Type is invalid!
        response.status(400);
        response.send({
            errorCode: 400,
            message: `'${itemType}' is an invalid item type`
        });
        logResponse(request.id, {
            errorCode: 400,
            message: `'${itemType}' is an invalid item type`
        }, 400);
        return;
    }

    loot.generate(result => {
        response.send(result);
        logResponse(request.id, result, 200);
    });
});

lootRouter.post('/:itemType/', (request, response) => {
    const hasPrefix = request.body.hasOwnProperty('hasPrefix') && request.body.hasPrefix === true,
        hasSuffix = request.body.hasOwnProperty('hasSuffix') && request.body.hasSuffix === true,
        itemType = request.params.itemType;

    let loot;

    if (!validItemTypes.has(itemType)) {
        // Type is invalid!
        response.status(400);
        response.send({
            errorCode: 400,
            message: `'${itemType}' is an invalid item type`
        });
        logResponse(request.id, {
            errorCode: 400,
            message: `'${itemType}' is an invalid item type`
        }, 400);
        return;
    }

    if (!hasPrefix && !hasSuffix) {
        // Create a fully random item!
        loot = new Loot();
    } else {
        loot = new Loot({
            hasPrefix,
            hasSuffix,
            itemType: request.params.itemType
        });
    }

    loot.generate(result => {
        response.send(result);
        logResponse(request.id, result, 200);
    });
});

export default lootRouter;
