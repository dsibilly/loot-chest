import affixesByIdWithId from './affixes-by-id-with-id';

export default Object.keys(affixesByIdWithId).reduce((suffixesByItemType, affixId) => {
    const affix = affixesByIdWithId[affixId];

    if (affix.type === 'suffix') {
        Array.from(affix.itemTypes).forEach(itemType => {
            if (!suffixesByItemType[itemType]) {
                suffixesByItemType[itemType] = {};
            }

            suffixesByItemType[itemType][affixId] = affix;
        });
    }

    return suffixesByItemType;
}, {});
