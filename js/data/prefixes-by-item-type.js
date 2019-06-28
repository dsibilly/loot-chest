import affixesById from './affixes-by-id';

export default Object.keys(affixesById).reduce((prefixesByItemType, affixId) => {
    const affix = affixesById[affixId];

    if (affix.type !== 'prefix') {
        return prefixesByItemType;
    }

    affix.itemTypes.forEach(itemType => {
        if (!prefixesByItemType[itemType]) {
            prefixesByItemType[itemType] = {};
        }

        prefixesByItemType[itemType][affixId] = affix;
    });

    return prefixesByItemType;
}, {});
