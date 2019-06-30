import _affixesByIdWithId from './data/affixes-by-id-with-id';
import {
    validator as _isValidItemType
} from './data/item-types';
import _prefixes from './data/prefixes';
import _suffixes from './data/suffixes';
import {
    logResponse
} from './logger';
import {
    Router
} from 'express';

const affixRouter = new Router(),
    affixItemTypesSetToArray = affix => {
        affix.itemTypes = Array.from(affix.itemTypes);

        return affix;
    },

    affixes = Object.keys(_affixesByIdWithId).map(affixId => {
        const affix = _affixesByIdWithId[affixId];

        return affixItemTypesSetToArray(affix);
    }),
    prefixes = _prefixes.map(affix => affixItemTypesSetToArray(affix)),
    suffixes = _suffixes.map(affix => affixItemTypesSetToArray(affix));

affixRouter.get('/', (request, response) => {
    response.send(affixes);
    logResponse(request.id, affixes, 200);
});

affixRouter.get('/prefix/', (request, response) => {
    response.send(prefixes);
    logResponse(request.id, prefixes, 200);
});

affixRouter.get('/suffix/', (request, response) => {
    response.send(suffixes);
    logResponse(request.id, suffixes, 200);
});

affixRouter.get('/:affixId/:itemType', (request, response) => {
    const affixId = request.params.affixId,
        itemType = request.params.itemType;

    if (!_affixesByIdWithId[affixId]) {
        // Non-existent affix!
        response.status(400);
        response.send({
            errorCode: 400,
            message: `'${affixId}' is an invalid affix id`
        });
        logResponse(request.id, {
            errorCode: 400,
            message: `'${affixId}' is an invalid affix id`
        }, 400);
        return;
    }

    if (!_isValidItemType(itemType)) {
        // Invalid item type!
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

    if (!_affixesByIdWithId[affixId].description[itemType]) {
        // Invalid item type for this affix!
        response.status(400);
        response.send({
            errorCode: 400,
            message: `'${itemType}' is not a valid item type for affix '${affixId}'`
        });
        logResponse(request.id, {
            errorCode: 400,
            message: `'${itemType}' is not a valid item type for affix '${affixId}'`
        }, 400);
        return;
    }

    {
        const affix = _affixesByIdWithId[affixId],
            result = {
                description: affix.description[itemType],
                id: affix.id,
                name: affix.name,
                type: affix.type
            };

        response.send(result);
        logResponse(request.id, result, 200);
    }
});

affixRouter.get('/:affixId/', (request, response) => {
    const affixId = request.params.affixId;

    if (!_affixesByIdWithId[affixId]) {
        // Non-existent affix!
        response.status(400);
        response.send({
            errorCode: 400,
            message: `'${affixId}' is an invalid affix id`
        });
        logResponse(request.id, {
            errorCode: 400,
            message: `'${affixId}' is an invalid affix id`
        }, 400);
        return;
    }

    {
        const result = affixItemTypesSetToArray(_affixesByIdWithId[affixId]);

        response.send(result);
        logResponse(request.id, result, 200);
    }
});

export default affixRouter;
