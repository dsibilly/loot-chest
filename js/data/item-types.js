const itemTypes = new Set([
        'amulet',
        'armor',
        'ring',
        'shield',
        'weapon'
    ]),
    validator = itemType => itemTypes.has(itemType);

export default itemTypes;
export {
    validator
};
