import affixesById from './affixes-by-id';

export default Object.keys(affixesById).reduce((affixesByIdWithId, affixId) => {
    const affix = affixesById[affixId];

    affix.id = affixId;

    affixesByIdWithId[affixId] = affix;
    return affixesByIdWithId;
}, {});
