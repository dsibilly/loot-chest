/* eslint isotropic/sort-keys:0 */
export default {
    accuracy: {
        name: 'Accuracy',
        type: 'suffix',
        itemTypes: new Set([
            'amulet',
            'ring'
        ]),
        description: {
            amulet: 'This amulet increases the wearer\'s Accuracy by 1.',
            ring: 'This ring increases the wearer\'s Accuracy by 1.'
        }
    },
    agile: {
        name: 'Agile',
        type: 'prefix',
        itemTypes: new Set([
            'armor',
            'shield'
        ]),
        description: {
            armor: 'This armor\'s Armor Penalty by is reduced 2.',
            shield: 'This shield provides an additional +1 bonus to Defense.'
        }
    },
    amber: {
        name: 'Amber',
        type: 'prefix',
        itemTypes: new Set([
            'armor',
            'shield'
        ]),
        description: {
            armor: 'This armor reduces any lightning damage taken by the wearer by 5. This includes penetrating damage.',
            shield: 'This shield reduces any lightning damage taken by the wearer by 5. This includes penetrating damage.'
        }
    },
    astral: {
        name: 'Astral',
        type: 'prefix',
        itemTypes: new Set([
            'weapon'
        ]),
        description: {
            weapon: 'This weapon grants a +1 bonus on attack rolls and a bonus +1d6 penetrating damage against demons.'
        }
    },
    azure: {
        name: 'Azure',
        type: 'prefix',
        itemTypes: new Set([
            'armor',
            'shield'
        ]),
        description: {
            armor: 'This armor reduces any cold dmaage taken by the wearer by 5. This includes penetrating damage.',
            shield: 'This shield reduces any cold damage taken by the wearer by 5. This includes penetrating damage.'
        }
    },
    balance: {
        name: 'Balance',
        type: 'suffix',
        itemTypes: new Set([
            'armor',
            'shield'
        ]),
        description: {
            armor: 'This armor prevents the wearer from being knocked prone.',
            shield: 'This shield prevents the wearer from being knocked prone.'
        }
    },
    bear: {
        name: 'The Bear',
        type: 'suffix',
        itemTypes: new Set([
            'weapon'
        ]),
        description: {
            weapon: 'On a successful hit with this weapon, you may perform the Ursine Fury stunt for 3 SP. This stunt causes the target to be knocked 6 yards directly away from you, and the target is knocked prone.'
        }
    },
    blessed: {
        name: 'Blessed',
        type: 'prefix',
        itemTypes: new Set([
            'armor',
            'shield'
        ]),
        description: {
            armor: 'This armor reduces any chaos damage taken by the wearer by 5. This applies to penetrating damage.',
            shield: 'This shield reduces any chaos damage taken by the wearer by 5. This applies to penetrating damage.'
        }
    },
    blight: {
        name: 'Blight',
        type: 'suffix',
        itemTypes: new Set([
            'weapon'
        ]),
        description: {
            weapon: 'On a successful hit with this weapon, you may perform the Contagion stunt for 5 SP. This stunt causes the target to take 2d6 penetrating poison damage.'
        }
    },
    blocking: {
        name: 'Blocking',
        type: 'suffix',
        itemTypes: new Set([
            'weapon'
        ]),
        description: {
            weapon: 'This weapon grants the wielder a +2 bonus to Defense.'
        }
    },
    brutal: {
        name: 'Brutal',
        type: 'prefix',
        itemTypes: new Set([
            'weapon'
        ]),
        description: {
            weapon: 'This weapon deals a bonus +1d6 damage on a successful hit.'
        }
    },
    burning: {
        name: 'Burning',
        type: 'suffix',
        itemTypes: new Set([
            'weapon'
        ]),
        description: {
            weapon: 'On a successful hit with this weapon, you may perform the Immolate stunt for 4 SP. The target is lit on fire and takes 1d6 fire damage on the beginning of its turn. The target must spend a major action to put out the flames, or be extinguished by other means.'
        }
    },
    champions: {
        name: 'Champion\'s',
        type: 'prefix',
        itemTypes: new Set([
            'amulet',
            'ring'
        ]),
        description: {
            amulet: 'This amulet grants the wearer a +2 bonus to Communication (Leadership) and Willpower (Courage) tests.',
            ring: 'This ring grants the wearer a +2 bonus to Communication (Leadership) and Willpower (Courage) tests.'
        }
    },
    communication: {
        name: 'Communication',
        type: 'suffix',
        itemTypes: new Set([
            'amulet',
            'ring'
        ]),
        description: {
            amulet: 'This amulet increases the wearer\'s Communication by 1.',
            ring: 'This ring increases the wearer\'s Communication by 1.'
        }
    },
    constitution: {
        name: 'Constitution',
        type: 'suffix',
        itemTypes: new Set([
            'amulet',
            'ring'
        ]),
        description: {
            amulet: 'This amulet increases the wearer\'s Constitution by 1. This also increases their maximum Health by 1 per character level, up to 10. If removing this amulet reduces the wearer to 0 Health, the character is dying. If removing it reduces the wearer to less than 0 Health, they die.',
            ring: 'This ring increases the wearer\'s Constitution by 1. This also increases their maximum Health by 1 per character level, up to 10. If removing this amulet reduces the wearer to 0 Health, the character is dying. If removing it reduces the wearer to less than 0 Health, they die.'
        }
    },
    crimson: {
        name: 'Crimson',
        type: 'prefix',
        itemTypes: new Set([
            'armor',
            'shield'
        ]),
        description: {
            armor: 'This armor reduces any fire damage taken by the wearer by 5. This applies to penetrating damage.',
            shield: 'This shield reduces any fire damage taken by the wearer by 5. This applies to penetrating damage.'
        }
    },
    deadly: {
        name: 'Deadly',
        type: 'prefix',
        itemTypes: new Set([
            'weapon'
        ]),
        description: {
            weapon: 'The wielder of this weapon may use the Mighty Blow and Lethal Blow stunts for 1 SP less than their normal cost.'
        }
    },
    demon: {
        name: 'The Demon',
        type: 'suffix',
        itemTypes: new Set([
            'armor',
            'shield'
        ]),
        description: {
            armor: 'This armor grants its wearer a +2 bonus to Strength (Intimidation) tests and a +1 bonus to all damage rolls.',
            shield: 'This shield grants is wearer a +2 bonus to Strength (Intimidation) tests and a +1 bonus to all damage rolls.'
        }
    },
    dexterity: {
        name: 'Dexterity',
        type: 'suffix',
        itemTypes: new Set([
            'amulet',
            'ring'
        ]),
        description: {
            amulet: 'This amulet increases the wearer\'s Dexterity by 1. Dexterity affects Defense and Speed.',
            ring: 'This ring increases the wearer\'s Dexterity by 1. Dexterity affects Defense and Speed.'
        }
    },
    diamond: {
        name: 'Diamond',
        type: 'prefix',
        itemTypes: new Set([
            'amulet',
            'ring'
        ]),
        description: {
            amulet: 'This amulet reduces reduces any arcane damage taken by the wearer by 3. This applies to penetrating damage. The wearer gains a +2 bonus to Accuracy (Arcane Blast) tests.',
            ring: 'This ring reduces reduces any arcane damage taken by the wearer by 3. This applies to penetrating damage. The wearer gains a +2 bonus to Accuracy (Arcane Blast) tests.'
        }
    },
    eagles: {
        name: 'Eagle\'s',
        type: 'prefix',
        itemTypes: new Set([
            'amulet',
            'ring'
        ]),
        description: {
            amulet: 'This amulet grants the wearer a +2 bonus to Perception (Searching) and Perception (Seeing) tests.',
            ring: 'This ring grants the wearer a +2 bonus to Perception (Searching) and Perception (Seeing) tests.'
        }
    },
    eel: {
        name: 'The Eel',
        type: 'suffix',
        itemTypes: new Set([
            'armor',
            'shield'
        ]),
        description: {
            armor: 'This armor grants the wearer a +2 bonus on Constitution (Swimming) tests.',
            shield: 'This shield grants the wearer a +2 bonus on Constitution (Swimming) tests.'
        }
    },
    emerald: {
        name: 'Emerald',
        type: 'prefix',
        itemTypes: new Set([
            'amulet',
            'ring'
        ]),
        description: {
            amulet: 'This amulet reduces any poison damage taken by the wearer by 3. This applies to penetrating damage. The wearer gains a +2 bonus to Constitution (Stamina) tests.',
            ring: 'This ring reduces any poison damage taken by the wearer by 3. This applies to penetrating damage. The wearer gains a +2 bonus to Constitution (Stamina) tests.'
        }
    },
    fighting: {
        name: 'Fighting',
        type: 'suffix',
        itemTypes: new Set([
            'amulet',
            'ring'
        ]),
        description: {
            amulet: 'This amulet increases the wearer\'s Fighting by 1.',
            ring: 'This ring increases the wearer\'s Fighitng by 1.'
        }
    },
    flaming: {
        name: 'Flaming',
        type: 'prefix',
        itemTypes: new Set([
            'weapon'
        ]),
        description: {
            weapon: 'This weapon deals a bonus +1d6 fire damage on a successful hit.'
        }
    },
    fortified: {
        name: 'Fortified',
        type: 'prefix',
        itemTypes: new Set([
            'armor',
            'shield'
        ]),
        description: {
            armor: 'This armor reduces penetrating damage by one-third its Armor Rating (rounded down.)',
            shield: 'This shield grants a bonus +1 to Defense.'
        }
    },
    foul: {
        name: 'Foul',
        type: 'prefix',
        itemTypes: new Set([
            'weapon'
        ]),
        description: {
            weapon: 'On a successful hit with this weapon, you may perform the Envenom stunt for 2 SP. The target must attempt a TN 14 Constitution (Stamina) test at the beginning of their next turn; if they fail, they suffer 1d6 penetrating poison damage.'
        }
    },
    glowing: {
        name: 'Glowing',
        type: 'prefix',
        itemTypes: new Set([
            'weapon'
        ]),
        description: {
            weapon: 'This weapon casts light as bright as a torch when drawn.'
        }
    },
    greedy: {
        name: 'Greedy',
        type: 'prefix',
        itemTypes: new Set([
            'amulet',
            'ring'
        ]),
        description: {
            amulet: 'This amulet grants the wearer a +2 bonus to Communication (Gambling) and Intelligence (Evaluation) tests.',
            ring: 'This ring grants the wearer a +2 bonus to Communication (Gambling) and Intelligence (Evaluation) tests.'
        }
    },
    health: {
        name: 'Health',
        type: 'suffix',
        itemTypes: new Set([
            'armor',
            'shield'
        ]),
        description: {
            armor: 'This armor grants the wearer +2 Health per level.',
            shield: 'This shield grants the wearer +2 Health per level.'
        }
    },
    hellforged: {
        name: 'Hellforged',
        type: 'prefix',
        itemTypes: new Set([
            'armor',
            'shield'
        ]),
        description: {
            armor: 'This armor reduces any holy damage taken by the wearer by 5. This applies to penetrating damage.',
            shield: 'This shield reduces any holy damage taken by the wearer by 5. This applies to penetrating damage.'
        }
    },
    intelligence: {
        name: 'Intelligence',
        type: 'suffix',
        itemTypes: new Set([
            'amulet',
            'ring'
        ]),
        description: {
            amulet: 'This amulet increases the wearer\'s Intelligence by 1. Intelligence affects Spellpower.',
            ring: 'This ring increases the wearer\'s Intelligence by 1. Intelligence affects Spellpower.'
        }
    },
    jade: {
        name: 'Jade',
        type: 'prefix',
        itemTypes: new Set([
            'armor',
            'shield'
        ]),
        description: {
            armor: 'This armor reduces any poison damage taken by the wearer by 5. This applies to penetrating damage.',
            shield: 'This shield reduces any poison damage taken by the wearer by 5. This applies to penetrating damage.'
        }
    },
    knight: {
        name: 'The Knight',
        type: 'suffix',
        itemTypes: new Set([
            'armor',
            'shield'
        ]),
        description: {
            armor: 'This armor grants the wearer a +2 bonus on all Dexterity (Riding) tests.',
            shield: 'This shield grants the wearer a +2 bonus on all Dexterity (Riding) tests.'
        }
    },
    leech: {
        name: 'The Leech',
        type: 'suffix',
        itemTypes: new Set([
            'weapon'
        ]),
        description: {
            weapon: 'On a successful hit with this weapon, you may perform the Sap stunt for 1 SP. Upon performing the Sap stunt, the wielder is healed for 1d6 Health. The wielder cannot regain Health exceeding the amount of damage taken by the attack\'s target.'
        }
    },
    lucky: {
        name: 'Lucky',
        type: 'prefix',
        itemTypes: new Set([
            'weapon'
        ]),
        description: {
            weapon: 'Once per encounter when attacking with this weapon you may re-roll a missed attack. You must keep the results of the second roll.'
        }
    },
    mages: {
        name: 'Mage\'s',
        type: 'prefix',
        itemTypes: new Set([
            'armor',
            'shield'
        ]),
        description: {
            armor: 'This armor\'s Strain is reduced by 2.',
            shield: 'This shield reduces any arcane damage taken by the wearer by 5. This applies to penetrating damage.'
        }
    },
    magus: {
        name: 'The Magus',
        type: 'suffix',
        itemTypes: new Set([
            'weapon'
        ]),
        description: {
            weapon: 'The wielder of this weapon may use the Fast Casting stung for 1 SP less than normal.'
        }
    },
    mana: {
        name: 'Mana',
        type: 'suffix',
        itemTypes: new Set([
            'armor',
            'shield'
        ]),
        description: {
            armor: 'This armor grants the wearer +2 Magic Points per level.',
            shield: 'This shield grants the wearer +2 Magic Points per level.'
        }
    },
    master: {
        name: 'The Master',
        type: 'suffix',
        itemTypes: new Set([
            'weapon'
        ]),
        description: {
            weapon: 'When the wielder generates Stunt Points on an attack with this weapon, they get an additional 1 SP to spend.'
        }
    },
    meteoric: {
        name: 'Metoric',
        type: 'prefix',
        itemTypes: new Set([
            'weapon'
        ]),
        description: {
            weapon: 'This weapon grants a +1 bonus to attack and damage rolls.'
        }
    },
    might: {
        name: 'Might',
        type: 'suffix',
        itemTypes: new Set([
            'armor',
            'shield'
        ]),
        description: {
            armor: 'This armor grants the wearer a +2 bonus on all Strength (Might) tests.',
            shield: 'This shield grants the wearer a +2 bonus on all Strength (Might) tests.'
        }
    },
    negation: {
        name: 'Negation',
        type: 'suffix',
        itemTypes: new Set([
            'armor',
            'shield'
        ]),
        description: {
            armor: 'This armor grants the wearer a +2 bonus on any test made to avoid or reduce the effect of a spell of which they are a target.',
            shield: 'This shield grants the wearer a +2 bonus on any test made to avoid or reduce the effect of a spell of which they are a target.'
        }
    },
    obsidian: {
        name: 'Obsidian',
        type: 'prefix',
        itemTypes: new Set([
            'amulet',
            'ring'
        ]),
        description: {
            amulet: 'This amulet reduces any holy damage taken by the wearer by 3. This applies to penetrating damage. The wearer gains a +2 bonus to Strength (Intimidation) tests.',
            ring: 'This ring reduces any holy damage taken by the wearer by 3. This applies to penetrating damage. The wearer gains a +2 bonus to Strength (Intimidation) tests.'
        }
    },
    pearl: {
        name: 'Pearl',
        type: 'prefix',
        itemTypes: new Set([
            'amulet',
            'ring'
        ]),
        description: {
            amulet: 'This amulet reduces any unholy damage taken by its wearer by 3. This applies to penetrating damage. The wearer gains a +2 bonus to Perception (Empathy) tests.',
            ring: 'This ring reduces any unholy damage taken by its wearer by 3. This applies to penetrating damage. The wearer gains a +2 bonus to Perception (Empathy) tests.'
        }
    },
    perception: {
        name: 'Perception',
        type: 'suffix',
        itemTypes: new Set([
            'amulet',
            'ring'
        ]),
        description: {
            amulet: 'This amulet increases the wearer\'s Perception by 1. This affects damage with bows and crossbows.',
            ring: 'This ring increases the wearer\'s Perception by 1. This affects damage with bows and crossbows.'
        }
    },
    piercing: {
        name: 'Piercing',
        type: 'suffix',
        itemTypes: new Set([
            'weapon'
        ]),
        description: {
            weapon: 'On a successful hit with this weapon, you may perform the Negate Armor stunt for 4 SP. Negate Armor allows you to ignore the target\'s Armor Rating for this attack.'
        }
    },
    power: {
        name: 'Power',
        type: 'suffix',
        itemTypes: new Set([
            'amulet',
            'ring'
        ]),
        description: {
            amulet: 'This amulet increases the wearer\'s Spellpower by 2.',
            ring: 'This ring increases the wearer\'s Spellpower by 2.'
        }
    },
    protection: {
        name: 'Protection',
        type: 'suffix',
        itemTypes: new Set([
            'amulet',
            'ring'
        ]),
        description: {
            amulet: 'This amulet grants the wearer a +2 bonus to Defense and an Armor Rating of 5. This Armor Rating does not stack with any other armor worn by the character.',
            ring: 'This ring grants the wearer a +2 bonus to Defense and an Armor Rating of 5. This Armor Rating does not stack with any other armor worn by the character.'
        }
    },
    prowess: {
        name: 'Prowess',
        type: 'suffix',
        itemTypes: new Set([
            'weapon'
        ]),
        description: {
            weapon: 'This weapon grants a +2 bonus on attack rolls.'
        }
    },
    pure: {
        name: 'Pure',
        type: 'prefix',
        itemTypes: new Set([
            'weapon'
        ]),
        description: {
            weapon: 'This weapon grants a +1 bonus on attack rolls and deals +1d6 penetrating damage against undead.'
        }
    },
    quartz: {
        name: 'Quartz',
        type: 'prefix',
        itemTypes: new Set([
            'amulet',
            'ring'
        ]),
        description: {
            amulet: 'This amulet reduces any lightning damage taken by the wearer by 3. This applies to penetrating damage. The wearer gains a +2 bonus to Constitution (Running) tests.',
            ring: 'This ring reduces any lightning damage taken by the wearer by 3. This applies to penetrating damage. The wearer gains a +2 bonus to Constitution (Running) tests.'
        }
    },
    quickness: {
        name: 'Quartz',
        type: 'suffix',
        itemTypes: new Set([
            'weapon'
        ]),
        description: {
            weapon: 'The wielder of this weapon may perform the Lightning Attack stunt for 1 SP.'
        }
    },
    reptilian: {
        name: 'Reptilian',
        type: 'prefix',
        itemTypes: new Set([
            'armor',
            'shield'
        ]),
        description: {
            armor: 'When the wearer of this armor regains Health, they regain an additional 1d6 Health.',
            shield: 'When the wearer of this shield regains Health, they regain an additional 1d6 Health.'
        }
    },
    ruby: {
        name: 'Ruby',
        type: 'prefix',
        itemTypes: new Set([
            'amulet',
            'ring'
        ]),
        description: {
            amulet: 'This amulet reduces any fire damage taken by the wearer by 3. This applies to penetrating damage. The wearer gains a +2 bonus to Willpower (Courage) tests.',
            ring: 'This ring reduces any fire damage taken by the wearer by 3. This applies to penetrating damage. The wearer gians a +2 bonus to Willpower (Courage) tests.'
        }
    },
    sages: {
        name: 'Sage\'s',
        type: 'prefix',
        itemTypes: new Set([
            'amulet',
            'ring'
        ]),
        description: {
            amulet: 'This amulet grants the wearer a +2 bonus to all Intelligence tests with a Lore-based focus, e.g. Cultural Lore, Historical Lore, et al.',
            ring: 'This ring grants the wearer a +2 bonus to all Intelligence tests with a Lore-based focus, e.g. Cultural Lore, Historical Lore, et al.'
        }
    },
    sapphire: {
        name: 'Sapphire',
        type: 'prefix',
        itemTypes: new Set([
            'amulet',
            'ring'
        ]),
        description: {
            amulet: 'This amulet reduces any cold damage taken by its wearer by 3. This applies to penetrating damage. The wearer gains a +2 bonus to Constitution (Swimming) tests.',
            ring: 'This ring reduces any cold damage taken by its wearer by 3. This applies to penetrating damage. The wearer gains a +2 bonus to Constitution (Swimming) tests.'
        }
    },
    seraph: {
        name: 'The Seraph',
        type: 'suffix',
        itemTypes: new Set([
            'armor',
            'shield'
        ]),
        description: {
            armor: 'This armor grants the wearer a +2 bonus to Willpower (Self-Discipline) tests and reduces all damage by 2, including penetrating damage.',
            shield: 'This shield grants the wearer a +2 bonus to Willpower (Self-Discipline) tests and reduces all damage by 2, including penetrating damage.'
        }
    },
    serpents: {
        name: 'Serpent\'s',
        type: 'prefix',
        itemTypes: new Set([
            'armor',
            'shield'
        ]),
        description: {
            armor: 'This armor grants the wearer +1 MP per level.',
            shield: 'This shield grants the wearer +1 MP per level.'
        }
    },
    shivering: {
        name: 'Shivering',
        type: 'prefix',
        itemTypes: new Set([
            'weapon'
        ]),
        description: {
            weapon: 'This weapon deals a bonus +1d6 cold damage on a successful hit.'
        }
    },
    shocking: {
        name: 'Shocking',
        type: 'prefix',
        itemTypes: new Set([
            'weapon'
        ]),
        description: {
            weapon: 'This weapon deals a bonus +1d6 lightning damage on a successful hit.'
        }
    },
    speed: {
        name: 'Speed',
        type: 'suffix',
        itemTypes: new Set([
            'armor',
            'shield'
        ]),
        description: {
            armor: 'This armor increases the wearer\'s Speed by 4 yards.',
            shield: 'This shield increases the wearer\'s Speed by 4 yards.'
        }
    },
    stalwart: {
        name: 'Stalwart',
        type: 'prefix',
        itemTypes: new Set([
            'armor',
            'shield'
        ]),
        description: {
            armor: 'This armor grants an additional +2 Armor Rating.',
            shield: 'This shield grants an additional +1 Defense.'
        }
    },
    stamina: {
        name: 'Stamina',
        type: 'suffix',
        itemTypes: new Set([
            'armor',
            'shield'
        ]),
        description: {
            armor: 'This armor grants the wearer a +2 bonus on all Constitution (Stamina) tests.',
            shield: 'This shield grants the wearer a +2 bonus on all Constitution (Stamina) tests.'
        }
    },
    storms: {
        name: 'Storms',
        type: 'suffix',
        itemTypes: new Set([
            'weapon'
        ]),
        description: {
            weapon: 'On a successful hit with this weapon, you may perform the Shocking Burst stunt for 5 SP. Shocking Burst deals 1d6 lightning damage to the target and all other enemies within 6 yards of the target.'
        }
    },
    strength: {
        name: 'Strength',
        type: 'suffix',
        itemTypes: new Set([
            'amulet',
            'ring'
        ]),
        description: {
            amulet: 'This amulet increases the wearer\'s Strength by 1. This affects damage with most weapons.',
            ring: 'This ring increases the wearer\'s Strength by 1. This affects damage with most weapons.'
        }
    },
    thorns: {
        name: 'Thorns',
        type: 'suffix',
        itemTypes: new Set([
            'armor',
            'shield'
        ]),
        description: {
            armor: 'This armor inflicts 1d3 penetrating damage to any creature that successfully damages the wearer.',
            shield: 'This shield inflicts 1d3 penetrating damage to any creature that successfully damages the wearer.'
        }
    },
    topaz: {
        name: 'Topaz',
        type: 'prefix',
        itemTypes: new Set([
            'amulet',
            'ring'
        ]),
        description: {
            amulet: 'This amulet reduces any psychic damage taken by the wearer by 3. This applies to penetrating damage. The wearer gains a +2 bonus to Willpower (Self-Discipline) tests.',
            ring: 'This ring reduces any psychic damage taken by the wearer by 3. This applies to penetrating dmaage. The wearer gains a +2 bonus to Willpower (Self-Discipline) tests.'
        }
    },
    vulpine: {
        name: 'Vulpine',
        type: 'prefix',
        itemTypes: new Set([
            'armor',
            'shield'
        ]),
        description: {
            armor: 'This armor allows the wearer to apply damage to MP instead of Health. For each point of damage absorbed in this way, the wearer loses 2 MP.',
            shield: 'This shield allows the wearer to apply damage to MP instead of Health. For each point of damage absorbed in this way, the wearer loses 2 MP.'
        }
    },
    willpower: {
        name: 'Willpower',
        type: 'suffix',
        itemTypes: new Set([
            'amulet',
            'ring'
        ]),
        description: {
            amulet: 'This amulet increases the wearer\'s Willpower by 1.',
            ring: 'This ring increases the wearer\'s Willpower by 1.'
        }
    },
    winter: {
        name: 'Winter',
        type: 'suffix',
        itemTypes: new Set([
            'weapon'
        ]),
        description: {
            weapon: 'On a successful hit with this weapon, you may perform the Winter\'s Grip stunt for 5 SP. Winter\'s Grasp deals +1d6 cold damage to the target and ice freezes them in place. The target is unable to move unless it spends a minor action to break free, or the ice is otherwise shattered or melted.'
        }
    },
    wrath: {
        name: 'Wrath',
        type: 'suffix',
        itemTypes: new Set([
            'amulet',
            'ring'
        ]),
        description: {
            amulet: 'This amulet increases any damage dealt by the wearer by 2.',
            ring: 'This ring increases any damage dealt by the wearer by 2.'
        }
    }
};
