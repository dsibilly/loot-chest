import {
    describe,
    it
} from 'mocha';

import affixesByIdWithId from '../js/data/affixes-by-id-with-id';

import {
    expect
} from 'chai';

describe('affixes-by-id-with-id', () => {
    it('exports an object', () => {
        expect(affixesByIdWithId).to.be.an('object');
    });

    it('contains affix objects', () => {
        Object.keys(affixesByIdWithId).forEach(affixId => {
            const affix = affixesByIdWithId[affixId];

            expect(affix).to.be.an('object');
            expect(affix).to.have.property('description').that.is.an('object');
            expect(affix).to.have.property('id').that.is.a('string');
            expect(affix).to.have.property('itemTypes').that.is.a('set');
            expect(affix).to.have.property('name').that.is.a('string');
            expect(affix).to.have.property('type').that.is.a('string');
        });
    });

    describe('content', () => {
        Object.keys(affixesByIdWithId).forEach(affixId => {
            const affix = affixesByIdWithId[affixId];

            describe(affixId, () => {
                it('has an id that matches its key', () => {
                    expect(affix.id).to.eql(affixId);
                });
            });
        });
    });
});
