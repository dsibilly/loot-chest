import _make from 'isotropic-make';
import _prefixesByItemType from './data/prefixes-by-item-type';
import _suffixesByItemType from './data/suffixes-by-item-type';
import MersenneTwister from '@dsibilly/mersenne-twister';

const Loot = _make({
    generate (callbackFunction) {
        if (!this._typeConfigured) {
            this.itemType = this._generateItemType();
        }

        if (!this._prefixConfigured || !this._suffixConfigured) {
            const affixes = this._determineAffixes();

            if (!this._prefixConfigured) {
                this.hasPrefix = affixes.hasPrefix;
            }

            if (!this._suffixConfigured) {
                this.hasSuffix = affixes.hasSuffix;
            }
        }

        const capitalize = str => {
                if (typeof str !== 'string') {
                    return '';
                }

                return str.charAt(0).toUpperCase() + str.slice(1);
            },
            makeName = (itemType, prefixObject, suffixObject) => {
                const name = capitalize(itemType),
                    prefix = prefixObject ?
                        `${prefixObject.name} ` :
                        '',
                    suffix = suffixObject ?
                        ` of ${suffixObject.name}` :
                        '';

                return `${prefix}${name}${suffix}`;
            },
            prefixes = Loot.prefixesForItemType(this.itemType),
            suffixes = Loot.suffixesForItemType(this.itemType),
            prefix = this.hasPrefix ?
                prefixes[Math.floor(this._rng.random() * prefixes.length)] :
                null,
            suffix = this.hasSuffix ?
                suffixes[Math.floor(this._rng.random() * suffixes.length)] :
                null,

            result = {
                affixes: [],
                itemType: this.itemType,
                name: makeName(this.itemType, prefix, suffix)
            };

        if (prefix) {
            result.affixes.push(`${prefix.name}: ${prefix.description[this.itemType]}`);
        }

        if (suffix) {
            result.affixes.push(`${suffix.name}: ${suffix.description[this.itemType]}`);
        }

        callbackFunction(result);
        return this;
    },
    _determineAffixes () {
        /*
        | 1d6 Roll | Item Affixes |
        |:--------:|:-------------|
        | 1-2      | Prefix       |
        | 3-4      | Suffix       |
        | 5-6      | Both         |
        */
        return [
            {
                hasPrefix: true,
                hasSuffix: false
            },
            {
                hasPrefix: false,
                hasSuffix: true
            },
            {
                hasPrefix: true,
                hasSuffix: true
            }
        ][Math.floor(this._rng.random() * 3)];
    },
    _generateItemType () {
        /*
        | 1d6 Roll | Item Type |
        |:--------:|:----------|
        | 1-2      | Weapon    |
        | 3        | Armor     |
        | 4        | Shield    |
        | 5        | Amulet    |
        | 6        | Ring      |
        */
        return [
            'weapon',
            'weapon',
            'armor',
            'shield',
            'amulet',
            'ring'
        ][Math.floor(this._rng.random() * 6)];
    },
    _init (config) {
        this._rng = new MersenneTwister();
        this._typeConfigured = false;
        this._prefixConfigured = false;
        this._suffixConfigured = false;
        this.hasPrefix = false;
        this.hasSuffix = false;

        const affixes = this._determineAffixes();

        if (config) {
            if (config.itemType) {
                this.itemType = config.itemType;
                this._typeConfigured = true;
            } else {
                this.itemType = this._generateItemType();
            }

            if (config.hasOwnProperty('hasPrefix')) {
                this.hasPrefix = config.hasPrefix;
                this._prefixConfigured = true;
            }

            if (config.hasOwnProperty('hasSuffix')) {
                this.hasSuffix = config.hasSuffix;
                this._suffixConfigured = true;
            }
        } else {
            this.itemType = this._generateItemType();
            this.hasPrefix = affixes.hasPrefix;
            this.hasSuffix = affixes.hasSuffix;
        }

        return this;
    }
}, {
    prefixesForItemType (itemType) {
        return Object.keys(_prefixesByItemType[itemType]).map(prefixId => _prefixesByItemType[itemType][prefixId]);
    },
    suffixesForItemType (itemType) {
        return Object.keys(_suffixesByItemType[itemType]).map(suffixId => _suffixesByItemType[itemType][suffixId]);
    }
});

export default Loot;
