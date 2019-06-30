import {
    describe,
    it
} from 'mocha';

import itemTypes, {
    validator
} from '../js/data/item-types';

import {
    expect
} from 'chai';

describe('item-types', () => {
    const validTypes = new Set([
        'amulet',
        'armor',
        'ring',
        'shield',
        'weapon'
    ]);

    describe('default', () => {
        it('exports a Set', () => {
            expect(itemTypes).to.be.a('set');
        });

        it('contains all valid item types', () => {
            for (const itemType of validTypes) {
                expect(itemTypes.has(itemType)).to.be.true;
            }
        });
    });

    describe('validator', () => {
        it('exports a function', () => {
            expect(validator).to.be.a('function');
        });

        it('accepts valid item types', () => {
            for (const itemType of validTypes) {
                expect(validator(itemType)).to.be.true;
            }
        });

        it('rejects invalid item types', () => {
            expect(validator(null)).to.be.false;
            expect(validator('bag')).to.be.false;
        });
    });
});
