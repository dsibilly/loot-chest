import affixesById from './affixes-by-id';

export default Object.keys(affixesById).reduce((suffixesByItemType, affixId) => {
    const affix = affixesById[affixId];

    if (affix.type !== 'suffix') {
        return suffixesByItemType;
    }

    affix.itemTypes.forEach(itemType => {
        if (!suffixesByItemType[itemType]) {
            suffixesByItemType[itemType] = {};
        }

        suffixesByItemType[itemType][affixId] = affix;
    });

    return suffixesByItemType;
}, {});
