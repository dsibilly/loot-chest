import affixesByIdWithId from './affixes-by-id-with-id';

export default Object.keys(affixesByIdWithId).reduce((suffixes, affixId) => {
    const affix = affixesByIdWithId[affixId];

    if (affix.type === 'suffix') {
        suffixes.push(affix);
    }

    return suffixes;
}, []);
