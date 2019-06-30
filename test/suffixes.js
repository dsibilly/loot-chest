import {
    describe,
    it
} from 'mocha';
import suffixes from '../js/data/suffixes';
import {
    expect
} from 'chai';

describe('suffixes', () => {
    it('exports an array', () => {
        expect(suffixes).to.be.an('array');
    });

    it('contains affix objects', () => {
        suffixes.forEach(affix => {
            expect(affix).to.be.an('object');
            expect(affix).to.have.property('description').that.is.an('object');
            expect(affix).to.have.property('id').that.is.a('string');
            expect(affix).to.have.property('itemTypes').that.is.a('set');
            expect(affix).to.have.property('name').that.is.a('string');
            expect(affix).to.have.property('type').that.is.a('string');
        });
    });

    describe('content', () => {
        suffixes.forEach(affix => {
            describe(affix.id, () => {
                it('is a suffix', () => {
                    expect(affix.type).to.eql('suffix');
                });
            });
        });
    });
});
