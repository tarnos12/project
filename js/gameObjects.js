var secondaryStatInfo = [
     {
         type: 'Stats',
         info: 'stats',
         isPercent: false,
         number: 1,
     },
     {
         type: 'Skill points',
         info: 'skillPoints',
         isPercent: false,
         number: 2,
     },
    {
        type: 'Hp /s',
        info: 'hpregen',
        isPercent: false,
        number: 1,
    },
    {
        type: 'Mana /s',
        info: 'manaRegen',
        isPercent: false,
        number: 2,
    },
    {
        type: 'Defense',
        info: 'defense',
        isPercent: false,
        number: 1,
    },
    {
        type: 'Accuracy',
        info: 'accuracy',
        isPercent: true,
        number: 2,
    },
    {
        type: 'Evasion',
        info: 'evasion',
        isPercent: true,
        number: 1,
    },
    {
        type: 'Life on hit',
        info: 'lifeSteal',
        isPercent: false,
        number: 2,
    },
    {
        type: 'Counter chance',
        info: 'counterChance',
        isPercent: true,
        number: 1,
    },
    {
        type: 'Counter dmg',
        info: 'counterDamage',
        isPercent: false,
        number: 2,
    },
    {
        type: 'Block chance',
        info: 'blockChance',
        isPercent: true,
        number: 1,
    },
    {
        type: 'Block amount',
        info: 'blockAmount',
        isPercent: false,
        number: 2,
    },
    {
        type: 'Crit chance',
        info: 'criticalChance',
        isPercent: true,
        number: 1,
    },
    {
        type: 'Crit damage',
        info: 'criticalDamage',
        isPercent: true,
        number: 2,
    },
    {
        type: 'Magic find',
        info: 'dropRate',
        isPercent: true,
        number: 1,
    },
    {
        type: 'Gold drop',
        info: 'goldRate',
        isPercent: true,
        number: 2,
    },
    {
        type: 'Experience rate',
        info: 'expRate',
        isPercent: true,
        number: 1,
    },
];
var primaryStatInfo = [
    {
        type: 'Damage',
        info: 'damage',
    },
    {
        type: 'Mana',
        info: 'mana',
    },
    {
        type: 'Strength',
        info: 'totalStrength',
        item: 'totalStrengthBonus',
    },
    {
        type: 'Endurance',
        info: 'totalEndurance',
        item: 'totalEnduranceBonus',
    },
    {
        type: 'Agility',
        info: 'totalAgility',
        item: 'totalAgilityBonus',
    },
    {
        type: 'Dexterity',
        info: 'totalDexterity',
        item: 'totalDexterityBonus',
    },
    {
        type: 'Wisdom',
        info: 'totalWisdom',
        item: 'totalWisdomBonus',
    },
    {
        type: 'Intelligence',
        info: 'totalIntelligence',
        item: 'totalIntelligenceBonus',
    },
    {
        type: 'Luck',
        info: 'totalLuck',
        item: 'totalLuckBonus',
    },
];

var loadingEquippedItems = [
    {
        type: 'weapon',
    },
    {
        type: 'shield',
    },
    {
        type: "chest",
    },
    {
        type: "helmet",
    },
    {
        type: "legs",
    },
    {
        type: "boots",
    },
    {
        type: 'ring',
    },
    {
        type: 'amulet',
    },
    {
        type: 'talisman',
    },
];

var itemTypes = [
    {
        type: 'weapon',
        chance: 10,
    },
    {
        type: 'armor',
        chance: 21,
    },
    {
        type: 'accessory',
        chance: 32,
    },
];

var itemWeaponSubType = [
    {
        type: "sword",
        chance: 10,
        lore: [
            {
                text: '\"This saber was created in secret and has gilded edges.\"',
            },
            {
                text: '\"This saber has gilded edges.\"',
            },
            {
                text: '\"This greatsword was created to conquer and is covered in a gold wash.\"',
            },
            {
                text: '\"This falchion was forged by liches and is jet black.\"',
            },
            {
                text: '\"This broadsword is covered in faintly glowing symbols.\"',
            },
            {
                text: '\"This rapier was forged by demons to be used by humans and is shiny and sleek.\"',
            },
            {
                text: '\"This saber is unusually heavy.\"',
            },
            {
                text: '\"This rapier changes its look to match its owner\'s moods.\"',
            },
            {
                text: '\"This rapier seems made entirely of crystal.\"',
            },
            {
                text: '\"This falchion was forged by a great hero entirely by accident.\"',
            },
            {
                text: '\"This broadsword was forged by demi-gods to banish an evil.\"',
            },
            {
                text: '\"This shortsword was created as an experiment.\"',
            },
        ],
    },
    {
        type: "axe",
        chance: 21,
        lore: [
            {
                text: '\"This battleaxe was forged by elementals and always feels cool to the touch.\"',
            },
            {
                text: '\"This waraxe is made of an unusual material.\"',
            },
            {
                text: '\"This double axe was forged by sorcerors and appears to be nothing special.\"',
            },
            {
                text: '\"This double axe is stylized almost to the point of impracticality.\"',
            },
            {
                text: '\"This battleaxe was forged by elementals in a magical ritual.\"',
            },
            {
                text: '\"This double axe was forged by sorcerors and glows faintly silver.\"',
            },
            {
                text: '\"This double axe was created to slay an enemy.\"',
            },
            {
                text: '\"This waraxe was forged by a long-forgotten queen as an experiment.\"',
            },
            {
                text: '\"This battleaxe is decorated with engravings of battles.\"',
            },
            {
                text: '\"This battleaxe was forged by hobgoblins to carry out vengeance.\"',
            },
        ],
    },
    {
        type: "mace",
        chance: 32,
        lore: [
            {
                text: '\"This greatclub seems filled with dancing flames.\"',
            },
            {
                text: '\"This mace is silvery and ominous.\"',
            },
            {
                text: '\"This maul was created on another planet.\"',
            },
            {
                text: '\"This morningstar is semi-transparent.\"',
            },
            {
                text: '\"This mace was created in a magical ritual.\"',
            },
            {
                text: '\"This maul glows faintly when in darkness.\"',
            },
            {
                text: '\"This maul is usually used by warriors and sparkles keenly.\"',
            },
            {
                text: '\"This greatclub was forged by liches and glows faintly golden.\"',
            },
        ],
    },
    {
        type: "staff",
        chance: 43,
        lore: [
            {
                text: '\"This staff is perpetually wreathed with flames.\"',
            },
            {
                text: '\"This staff is inset with sapphires.\"',
            },
            {
                text: '\"This staff was forged by warlocks.\"',
            },
            {
                text: '\"This staff was forged by gods and is covered in a gold wash.\"',
            },
            {
                text: '\"This staff was created out of anger and is heavy and menacing.\"',
            },
            {
                text: '\"This staff was forged by a vanished race entirely by accident.\"',
            },
            {
                text: '\"This staff was forged by an ancient hero and is silvery and ominous.\"',
            },
            {
                text: '\"This staff is typically used by the righteous and is made at least partially of bone.\"',
            },
            {
                text: '\"This staff is traditionally used by holy champions and is covered in faintly glowing symbols.\"',
            },
            {
                text: '\"This staff was created to save a realm.\"',
            },
            {
                text: '\"This staff was created to avert a disaster.\"',
            },
        ],
    },
    {
        type: "ranged",
        chance: 54,
        lore: [
            {
                text: '\"This recurve bow was created to save a realm and is covered in a gold wash.\"',
            },
            {
                text: '\"This shortbow is typically used by underdogs and is stylized but practical.\"',
            },
            {
                text: '\"This compound longbow was forged by a long-forgotten hero and is jet black.\"',
            },
            {
                text: '\"This compound shortbow was forged by a primal god out of ambition.\"',
            },
            {
                text: '\"This compound bow was created on another planet.\"',
            },
            {
                text: '\"This bow was forged by a great warrior and sparkles keenly.\"',
            },
            {
                text: '\"This recurve bow was created to protect and defend and is inset with amethyst.\"',
            },
            {
                text: '\"This compound longbow was forged by a great wizard to conquer and is inset with gems.\"',
            },
            {
                text: '\"This shortbow was forged by a great warrior and seems to fade in and out of being.\"',
            },
            {
                text: '\"This bow was forged by a primal god and is perpetually wreathed with flames.\"',
            },
        ],
    },
];

var itemArmorSubType = [
    {
        type: "chest",
        chance: 10,
        lore: [
            {
                text: '\"This breastplate is traditionally used by dwarven champions and is covered in faintly glowing symbols.\"',
            },
            {
                text: '\"This breastplate was forged by liches.\"',
            },
            {
                text: '\"This breastplate has gilded edges.\"',
            },
            {
                text: '\"This breastplate was forged by goblins out of ambition and is perpetually wreathed with flames.\"',
            },
            {
                text: '\"This breastplate is traditionally used by champions and looks ordinary, but is eternally clean.\"',
            },
            {
                text: '\"This breastplate was forged by a long-dead villain to save a life and seems almost ethereal.\"',
            },
            {
                text: '\"This breastplate was forged by a legendary warrior and looks ordinary.\"',
            },
            {
                text: '\"This breastplate was forged by gods and is jet black.\"',
            },
        ],
    },
    {
        type: "helmet",
        chance: 21,
        lore: [
            {
                text: '\"This helmet was forged by a long-forgotten king and appears charred, but solid.\"',
            },
            {
                text: '\"This great helm was created out of anger.\"',
            },
            {
                text: '\"This helmet is shiny and sleek.\"',
            },
            {
                text: '\"This helmet is inset with opals.\"',
            },
            {
                text: '\"This great helm was created out of anger.\"',
            },
            {
                text: '\"This helmet was created to slay an enemy.\"',
            },
            {
                text: '\"This helmet was forged by mages and is inset with opals.\"',
            },
            {
                text: '\"This great helm is traditionally used by rogues and is inset with emeralds.\"',
            },
            {
                text: '\"This helmet was forged by a long-forgotten villain and is marked with knicks and scratches.\"',
            },
        ],
    },
    {
        type: "legs",
        chance: 32,
        lore: [
            {
                text: '\"This pair of greaves was forged by a goddess and is engraved with runes.\"',
            },
            {
                text: '\"This pair of greaves is usually used by rebels and never looks exactly the same twice.\"',
            },
            {
                text: '\"This pair of greaves is made of an unusual material.\"',
            },
            {
                text: '\"This pair of greaves has gilded edges.\"',
            },
            {
                text: '\"This pair of greaves was forged by a legendary warrior.\"',
            },
            {
                text: '\"This pair of greaves was forged by hobgoblins and is inset with opals.\"',
            },
            {
                text: '\"This pair of greaves is inset with obsidian.\"',
            },
        ],
    },
    {
        type: "shield",
        chance: 43,
        lore: [
            {
                text: '\"This tower shield is typically used by elven champions and looks ordinary.\"',
            },
            {
                text: '\"This large shield is covered with intricate carvings.\"',
            },
            {
                text: '\"This small shield is traditionally used by angels and appears plain, and slightly beat-up.\"',
            },
            {
                text: '\"This round shield was forged by a long-forgotten queen and is engraved with words in a forgotten tongue.\"',
            },
            {
                text: '\"This buckler was forged by a legendary smith deep within the earth and has gilded edges.\"',
            },
            {
                text: '\"This medium shield is traditionally used by those with demonic blood and seems almost ethereal.\"',
            },
            {
                text: '\"This shield is covered with designs of leaves and vines.\"',
            },
            {
                text: '\"This kite shield is emblazoned with the symbol of a deity.\"',
            },
            {
                text: '\"This medium shield is usually used by vampires and appears to be nothing special.\"',
            },
        ],
    },
    {
        type: "boots",
        chance: 54,
        lore: [
            {
                text: '\"This pair of greaves was forged by a goddess and is engraved with runes.\"',
            },
            {
                text: '\"This pair of greaves is usually used by rebels and never looks exactly the same twice.\"',
            },
            {
                text: '\"This pair of greaves is made of an unusual material.\"',
            },
            {
                text: '\"This pair of greaves has gilded edges.\"',
            },
            {
                text: '\"This pair of greaves was forged by a legendary warrior.\"',
            },
            {
                text: '\"This pair of greaves was forged by hobgoblins and is inset with opals.\"',
            },
            {
                text: '\"This pair of greaves is inset with obsidian.\"',
            },
        ],
    },
];

var itemAccessorySubType = [
    {
        type: "ring",
        chance: 10,
        lore: [
            {
                text: '\"This faceted steel ring also grants the magical ability to untie simple knots from up to ten feet away.\"',
            },
            {
                text: '\"This battered ring is said to be imbued with the spirit of the illustrious conjurer Rada.\"',
            },
            {
                text: '\"This distinctive platinum ring also shivers when wraiths are near.\"',
            },
            {
                text: '\"A copper ring, wrapped in brass wire.\"',
            },
            {
                text: '\"A copper ring, inlaid with silver.\"',
            },
            {
                text: '\"This battered bronze ring was taken from the crypt of the vampire Mereta.\"',
            },
            {
                text: '\"A polished copper ring, inlaid with sapphire.\"',
            },
            {
                text: '\"This ornate brass ring is said to grant a single wish once every score of years.\"',
            },
            {
                text: '\"This bronze ring also grants the magical ability to locate keys.\"',
            },
            {
                text: '\"A masterwork ring, set with sapphire.\"',
            },
            {
                text: '\"This brass ring is said to grant a single wish once every score of years.\"',
            },
            {
                text: '\"This electrum ring is said to grant a single wish once every score of years.\"',
            },
            {
                text: '\"This steel ring is said to be imbued with the spirit of the human archmage Berny, who defeated Amsuil the Grim.\"',
            },
            {
                text: '\"A polished ring, set with ruby.\"',
            },
            {
                text: '\"This faceted copper ring once belonged to the illustrious hero Aznar, who vanished in the Secret Caverns of Horror.\"',
            },
            {
                text: '\"This distinctive brass ring also shivers when vampires are near.\"',
            },
            {
                text: '\"This steel ring also conjures roses upon command.\"',
            },
            {
                text: '\"This ornate ring is said to possess long-forgotten powers and command words.\"',
            },
            {
                text: '\"This faceted ring was taken from the Dark Vaults of Mara the Awesome.\"',
            },
            {
                text: '\"This distinctive pewter ring was taken from the hoard of the dragon Nusadea.\"',
            },
        ],
    },
    {
        type: "amulet",
        chance: 21,
        lore: [
            {
                text: '\"A necklace of maple with charms showing a human head and fangs.\"',
            },
            {
                text: '\"A necklace of carnelion with charms showing a key in a symmetrical pattern.\"',
            },
            {
                text: '\"A necklace of amethyst with charms showing a swan and a fang in an ornate style.\"',
            },
            {
                text: '\A necklace painted scarlet with charms showing a half moon and greaves within a triangle.\"',
            },
            {
                text: '\"A necklace of red pine with charms showing a crescent moon and a gem in a very abstract style.\"',
            },
            {
                text: '\"A necklace of copper with charms showing a spider and a winking eye.\"',
            },
        ],
    },
    {
        type: "talisman",
        chance: 32,
        lore: [
            {
                text: '\"A very small maple charm with a fiddle and a ring on the front and nothing on the back.\"',
            },
            {
                text: '\"A large bone charm with a person and a bat on the front and an ear of corn and a fist on the back.\"',
            },
            {
                text: '\"A very large beech charm with a written phrase and an eclipsed sun on the front and the same on the back.\"',
            },
            {
                text: '\"A pale violet charm with a chariot and a hammer on the front and the same on the back.\"',
            },
            {
                text: '\"A small jasper charm with greaves and a willow tree on the front and the same on the back.\"',
            },
            {
                text: '\"This battered bronze ring was taken from the crypt of the vampire Mereta.\"',
            },
        ],
    },
];

var itemRarity = [
{
    type: 'Legendary',
    minMods: 6,
    maxMods: 7,
    chance: 10,
    color: 'red',
    power: 5,
},
{
    type: 'Epic',
    minMods: 4,
    maxMods: 6,
    chance: 50,
    color: 'orange',
    power: 4,
},
{
    type: 'Rare',
    minMods: 3,
    maxMods: 4,
    chance: 200,
    color: '#0033FF',
    power: 3,
},
{
    type: 'Uncommon',
    minMods: 2,
    maxMods: 3,
    chance: 400,
    color: '#00CC33',
    power: 2,
},
{
    type: 'Common',
    minMods: 1,
    maxMods: 2,
    chance: 600,
    color: 'white',
    power: 1,
}];

var itemBaseMod = [
        {
            type: "physicalDamageBonus",
            minValue: 10,
            maxValue: 20,
            chance: 10,
        },
        {
            type: "spellDamageBonus",
            minValue: 10,
            maxValue: 20,
            chance: 10,
        },
];

var itemModifiers = {
    level10: [
		{
		    type: "All attributes",
		    minValue: 1,
		    maxValue: 4,
		    chance: 10,
            baseValue: 10,
		},
        {
            type: "Strength",
            minValue: 8,
            maxValue: 12,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Endurance",
            minValue: 8,
            maxValue: 12,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Agility",
            minValue: 8,
            maxValue: 12,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Dexterity",
            minValue: 8,
            maxValue: 12,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Wisdom",
            minValue: 8,
            maxValue: 12,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Intelligence",
            minValue: 8,
            maxValue: 12,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Luck",
            minValue: 8,
            maxValue: 12,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Block chance",
            minValue: 1,
            maxValue: 3,
            chance: 10,
            baseValue: 5,
        },
        {
            type: "Evasion",
            minValue: 2,
            maxValue: 4,
            chance: 10,
            baseValue: 5,
        },
        {
            type: "Bonus damage",
            minValue: 20,
            maxValue: 49,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Bonus armor",
            minValue: 3,
            maxValue: 10,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Bonus life",
            minValue: 10,
            maxValue: 19,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Bonus mana",
            minValue: 15,
            maxValue: 19,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Health regen",
            minValue: 1,
            maxValue: 2,
            chance: 10,
            baseValue: 1,
        },
        {
            type: "Mana regen",
            minValue: 10,
            maxValue: 19,
            chance: 10,
            baseValue: 1,
        },
        {
            type: "Magic find",
            minValue: 6,
            maxValue: 12,
            chance: 10,
            baseValue: 5,
        },
        {
            type: "Gold drop",
            minValue: 10,
            maxValue: 15,
            chance: 10,
            baseValue: 5,
        },
        {
            type: "Experience rate",
            minValue: 5,
            maxValue: 10,
            chance: 10,
            baseValue: 5,
        },
        {
            type: "Life gain on hit",
            minValue: 1,
            maxValue: 3,
            chance: 10,
            baseValue: 7,
        },
        {
            type: "Critical damage",
            minValue: 10,
            maxValue: 15,
            chance: 10,
            baseValue: 7,
        },
        {
            type: "Critical chance",
            minValue: 1,
            maxValue: 5,
            chance: 10,
            baseValue: 7,
        },
    ],
    level20: [
		{
		    type: "All attributes",
		    minValue: 5,
		    maxValue: 8,
		    chance: 10,
		    baseValue: 10,
		},
        {
            type: "Strength",
            minValue: 13,
            maxValue: 17,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Endurance",
            minValue: 13,
            maxValue: 17,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Agility",
            minValue: 13,
            maxValue: 17,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Dexterity",
            minValue: 13,
            maxValue: 17,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Wisdom",
            minValue: 13,
            maxValue: 17,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Intelligence",
            minValue: 13,
            maxValue: 17,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Luck",
            minValue: 13,
            maxValue: 17,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Block chance",
            minValue: 3,
            maxValue: 5,
            chance: 10,
            baseValue: 5,
        },
        {
            type: "Evasion",
            minValue: 5,
            maxValue: 7,
            chance: 10,
            baseValue: 5,
        },
        {
            type: "Bonus damage",
            minValue: 50,
            maxValue: 69,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Bonus armor",
            minValue: 11,
            maxValue: 28,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Bonus life",
            minValue: 19,
            maxValue: 29,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Bonus mana",
            minValue: 20,
            maxValue: 24,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Health regen",
            minValue: 2,
            maxValue: 3,
            chance: 10,
            baseValue: 1,
        },
        {
            type: "Mana regen",
            minValue: 20,
            maxValue: 29,
            chance: 10,
            baseValue: 1,
        },
        {
            type: "Magic find",
            minValue: 13,
            maxValue: 18,
            chance: 10,
            baseValue: 5,
        },
        {
            type: "Gold drop",
            minValue: 16,
            maxValue: 24,
            chance: 10,
            baseValue: 5,
        },
        {
            type: "Experience rate",
            minValue: 11,
            maxValue: 16,
            chance: 10,
            baseValue: 5,
        },
        {
            type: "Life gain on hit",
            minValue: 4,
            maxValue: 7,
            chance: 10,
            baseValue: 7,
        },
        {
            type: "Critical damage",
            minValue: 16,
            maxValue: 21,
            chance: 10,
            baseValue: 7,
        },
        {
            type: "Critical chance",
            minValue: 6,
            maxValue: 10,
            chance: 10,
            baseValue: 7,
        },
    ],
    level30: [
		{
		    type: "All attributes",
		    minValue: 9,
		    maxValue: 12,
		    chance: 10,
		    baseValue: 10,
		},
        {
            type: "Strength",
            minValue: 18,
            maxValue: 22,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Endurance",
            minValue: 18,
            maxValue: 22,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Agility",
            minValue: 18,
            maxValue: 22,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Dexterity",
            minValue: 18,
            maxValue: 22,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Wisdom",
            minValue: 18,
            maxValue: 22,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Intelligence",
            minValue: 18,
            maxValue: 22,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Luck",
            minValue: 18,
            maxValue: 22,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Block chance",
            minValue: 5,
            maxValue: 7,
            chance: 10,
            baseValue: 5,
        },
        {
            type: "Evasion",
            minValue: 8,
            maxValue: 10,
            chance: 10,
            baseValue: 5,
        },
        {
            type: "Bonus damage",
            minValue: 70,
            maxValue: 89,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Bonus armor",
            minValue: 29,
            maxValue: 46,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Bonus life",
            minValue: 30,
            maxValue: 39,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Bonus mana",
            minValue: 25,
            maxValue: 29,
            chance: 10,
            baseValue: 2,
        },
        {
            type: "Health regen",
            minValue: 3,
            maxValue: 4,
            chance: 10,
            baseValue: 1,
        },
        {
            type: "Mana regen",
            minValue: 30,
            maxValue: 39,
            chance: 10,
            baseValue: 1,
        },
        {
            type: "Magic find",
            minValue: 19,
            maxValue: 26,
            chance: 10,
            baseValue: 5,
        },
        {
            type: "Gold drop",
            minValue: 25,
            maxValue: 30,
            chance: 10,
            baseValue: 5,
        },
        {
            type: "Experience rate",
            minValue: 17,
            maxValue: 23,
            chance: 10,
            baseValue: 5,
        },
        {
            type: "Life gain on hit",
            minValue: 8,
            maxValue: 12,
            chance: 10,
            baseValue: 7,
        },
        {
            type: "Critical damage",
            minValue: 22,
            maxValue: 27,
            chance: 10,
            baseValue: 7,
        },
        {
            type: "Critical chance",
            minValue: 11,
            maxValue: 15,
            chance: 10,
            baseValue: 7,
        },
    ],
};

var emptyItemSlotInfo = [
    {
        type: 'talisman',
    },
    {
        type: 'helmet',
    },
    {
        type: "amulet",
    },
    {
        type: "weapon",
    },
    {
        type: "chest",
    },
    {
        type: "shield",
    },
    {
        type: 'legs',
    },
    {
        type: 'ring',
    },
    {
        type: 'boots',
    },
];

var InventoryItemTypes = [
    {
        type: 'weapon',
        displayName: 'Weapon',
        icon: 'weapon',
    },
    {
        type: 'armor',
        displayName: 'Armor',
        icon: 'armor',
    },
     {
         type: 'accessory',
         displayName: 'Accessory',
         icon: 'accessory',
     },
      /*{
          type: 'other',
          displayName: 'Other',
      },*/
];

var monsterAreas = [
    {
        type: 'BanditHideout',
        displayName: 'Bandit Hideout',
        icon: 'banditHideout'
    },
     {
         type: 'ForestofNarsus',
         displayName: 'Forest of Narsus',
         icon: 'forestOfNarsus'
     },
      {
          type: 'OzJotnar',
          displayName: 'Oz Jotnar',
          icon: 'ozJotnar'
      },
       {
           type: 'TwistedMarrow',
           displayName: 'Twisted Marrow',
           icon: 'twistedMarrow'
       },
];
var weaponTypeObject = [
    {
        type: 'sword',
        displayName: 'Sword',
        icon: 'sword',
    },
     {
         type: 'axe',
         displayName: 'Axe',
         icon: 'axe'
     },
      {
          type: 'mace',
          displayName: 'Mace',
          icon: 'mace'
      },
       {
           type: 'staff',
           displayName: 'Staff',
           icon: 'staff'
       },
       {
           type: 'ranged',
           displayName: 'Ranged',
           icon: 'ranged'
       },
];

var materiaType = [
    {
        type: 'materiaSlot_1',
    },
    {
        type: 'materiaSlot_2',
    },
    {
        type: 'materiaSlot_3',
    },
    {
        type: 'materiaSlot_4',
    },
    {
        type: 'materiaSlot_5',
    },
]

var characterRace = function (name, strength, endurance, agility, dexterity, intelligence, wisdom, luck) {
    this.name = name;
    this.strength = strength;
    this.endurance = endurance;
    this.agility = agility;
    this.dexterity = dexterity;
    this.intelligence = intelligence;
    this.wisdom = wisdom;
    this.luck = luck;
    this.description = function () {
        return "Stats per level: <br />Strength: " + this.strength + "<br />" + "Endurance: " + this.endurance + "<br />" + "Agility: " + this.agility +
            "<br />" + "Dexterity: " + this.dexterity + "<br />" + "Intelligence: " + this.intelligence + "<br />" + "Wisdom: " + this.wisdom + "<br />" + "Luck: " + this.luck
    };
};
var human = new characterRace('Human', 3, 3, 3, 3, 3, 3 , 3);
var halfElf = new characterRace('Half Elf', 2, 2, 4, 3, 4, 4, 2);
var dwarf = new characterRace('Dwarf', 4, 2, 4, 4, 1, 1, 5);
var orc = new characterRace('Orc', 5, 5, 2, 5, 1, 1, 2);
human.bonusExpGoldDrop = function () {
    return 15;
};
human.allStatsBonus = function () {
    return 10;
};
halfElf.criticalChance = function () {
    return 5;
};
halfElf.bonusDrop = function () {
    return 50;
};
dwarf.bonusGold = function () {
    return 50;
};
dwarf.evasionChance = function () {
    return 5;
};
orc.bonusHealth = function () {
    return 20;
};
orc.allStatsBonus = function () {
    return 5;
};

var characterRaces = new Object();
characterRaces.human = human;
characterRaces.halfElf = halfElf;
characterRaces.dwarf = dwarf;
characterRaces.orc = orc;


CreateMonsterHtml();