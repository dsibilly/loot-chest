import {
    describe,
    it
} from 'mocha';
import prefixes from '../js/data/prefixes';
import {
    expect
} from 'chai';

describe('prefixes', () => {
    it('exports an array', () => {
        expect(prefixes).to.be.an('array');
    });

    it('contains affix objects', () => {
        prefixes.forEach(affix => {
            expect(affix).to.be.an('object');
            expect(affix).to.have.property('description').that.is.an('object');
            expect(affix).to.have.property('id').that.is.a('string');
            expect(affix).to.have.property('itemTypes').that.is.a('set');
            expect(affix).to.have.property('name').that.is.a('string');
            expect(affix).to.have.property('type').that.is.a('string');
        });
    });

    describe('content', () => {
        prefixes.forEach(affix => {
            describe(affix.id, () => {
                it('is a prefix', () => {
                    expect(affix.type).to.eql('prefix');
                });
            });
        });
    });
});
