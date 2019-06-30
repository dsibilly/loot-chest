import affixesByIdWithId from './affixes-by-id-with-id';

export default Object.keys(affixesByIdWithId).reduce((prefixesByItemType, affixId) => {
    const affix = affixesByIdWithId[affixId];

    if (affix.type === 'prefix') {
        Array.from(affix.itemTypes).forEach(itemType => {
            if (!prefixesByItemType[itemType]) {
                prefixesByItemType[itemType] = {};
            }

            prefixesByItemType[itemType][affixId] = affix;
        });
    }

    return prefixesByItemType;
}, {});
