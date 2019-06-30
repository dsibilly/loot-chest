import {
    describe,
    it
} from 'mocha';

import affixesById from '../js/data/affixes-by-id';
import {
    validator as itemValidator
} from '../js/data/item-types';

import {
    expect
} from 'chai';

describe('affixes-by-id', () => {
    it('exports an object', () => {
        expect(affixesById).to.be.an('object');
    });

    it('contains affix objects', () => {
        Object.keys(affixesById).forEach(affixId => {
            const affix = affixesById[affixId];

            expect(affix).to.be.an('object');
            expect(affix).to.have.property('name').that.is.a('string');
            expect(affix).to.have.property('type').that.is.a('string');
            expect(affix).to.have.property('itemTypes').that.is.an('set');
            expect(affix).to.have.property('description').that.is.an('object');
        });
    });

    describe('content', () => {
        Object.keys(affixesById).forEach(affixId => {
            const affix = affixesById[affixId];

            describe(affixId, () => {
                describe('name', () => {
                    it('begins with a capital letter', () => {
                        const regEx = /^[A-Z]/u;

                        expect(regEx.test(affix.name)).to.be.true;
                    });
                });

                describe('type', () => {
                    it('is either a prefix or suffix', () => {
                        expect([
                            'prefix',
                            'suffix'
                        ]).to.include(affix.type);
                    });

                    if (affix.name.toLowerCase().split(' ')[0] === 'the') {
                        it('is a suffix if name begins with "The"', () => {
                            expect(affix.type).to.eql('suffix');
                        });
                    }
                });

                describe('itemTypes', () => {
                    for (const itemType in affix.itemTypes) {
                        describe(itemType, () => {
                            it('is a valid item type', () => {
                                expect(itemValidator(itemType)).to.be.true;
                            });
                        });
                    }
                });

                describe('descriptions', () => {
                    it('has descriptions for every item type', () => {
                        for (const itemType in affix.itemTypes) {
                            expect(affix.description).to.have.property(itemType).that.is.a('string');
                        }
                    });

                    Object.keys(affix.description).forEach(affixDescriptionKey => {
                        describe(affixDescriptionKey, () => {
                            const descriptionString = affix.description[affixDescriptionKey];

                            it('is a valid description type', () => {
                                expect(itemValidator(affixDescriptionKey), 'invalid item type').to.be.true;
                                expect(descriptionString, 'invalid description value').to.be.a('string');
                            });

                            it('is a non-zero-length descriptions', () => {
                                expect(descriptionString.length).to.be.gt(0);
                            });

                            it('ends with a period.', () => {
                                const lastChar = descriptionString[descriptionString.length - 1];

                                expect(lastChar).to.not.eql(' ');

                                expect([
                                    lastChar,
                                    descriptionString[descriptionString.length - 2]
                                ]).to.include('.');
                            });

                            it('contains the item type', () => {
                                expect(descriptionString.toLowerCase()).to.include(affixDescriptionKey);
                            });
                        });
                    });
                });
            });
        });
    });
});
