import affixesByIdWithId from './affixes-by-id-with-id';

export default Object.keys(affixesByIdWithId).reduce((prefixes, affixId) => {
    const affix = affixesByIdWithId[affixId];

    if (affix.type === 'prefix') {
        prefixes.push(affix);
    }

    return prefixes;
}, []);
