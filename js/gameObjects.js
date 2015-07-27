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
    },
    {
        type: "axe",
        chance: 21,
    },
    {
        type: "mace",
        chance: 32,
    },
    {
        type: "staff",
        chance: 43,
    },
    {
        type: "ranged",
        chance: 54,
    },
];

var itemArmorSubType = [
    {
        type: "chest",
        chance: 10,
    },
    {
        type: "helmet",
        chance: 21,
    },
    {
        type: "legs",
        chance: 32,
    },
    {
        type: "shield",
        chance: 43,
    },
    {
        type: "boots",
        chance: 54,
    },
];

var itemAccessorySubType = [
    {
        type: "ring",
        chance: 10,
    },
    {
        type: "amulet",
        chance: 21,
    },
    {
        type: "talisman",
        chance: 32,
    },
];

var itemRarity = [
{
    type: 'Legendary',
    minMods: 6,
    maxMods: 7,
    chance: 10,
    color: 'red',
},
{
    type: 'Epic',
    minMods: 4,
    maxMods: 6,
    chance: 50,
    color: 'orange',
},
{
    type: 'Rare',
    minMods: 3,
    maxMods: 4,
    chance: 200,
    color: 'blue',
},
{
    type: 'Uncommon',
    minMods: 2,
    maxMods: 3,
    chance: 400,
    color: 'green',
},
{
    type: 'Common',
    minMods: 1,
    maxMods: 2,
    chance: 600,
    color: 'black',
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
		},
        {
            type: "Strength",
            minValue: 8,
            maxValue: 12,
            chance: 10,
        },
        {
            type: "Endurance",
            minValue: 8,
            maxValue: 12,
            chance: 10,
        },
        {
            type: "Agility",
            minValue: 8,
            maxValue: 12,
            chance: 10,
        },
        {
            type: "Dexterity",
            minValue: 8,
            maxValue: 12,
            chance: 10,
        },
        {
            type: "Wisdom",
            minValue: 8,
            maxValue: 12,
            chance: 10,
        },
        {
            type: "Intelligence",
            minValue: 8,
            maxValue: 12,
            chance: 10,
        },
        {
            type: "Luck",
            minValue: 8,
            maxValue: 12,
            chance: 10,
        },
        {
            type: "Block chance",
            minValue: 1,
            maxValue: 3,
            chance: 10,
        },
        {
            type: "Evasion",
            minValue: 2,
            maxValue: 4,
            chance: 10,
        },
        {
            type: "Bonus damage",
            minValue: 20,
            maxValue: 49,
            chance: 10,
        },
        {
            type: "Bonus armor",
            minValue: 3,
            maxValue: 10,
            chance: 10,
        },
        {
            type: "Bonus life",
            minValue: 10,
            maxValue: 19,
            chance: 10,
        },
        {
            type: "Bonus mana",
            minValue: 15,
            maxValue: 19,
            chance: 10,
        },
        {
            type: "Health regen",
            minValue: 1,
            maxValue: 2,
            chance: 10,
        },
        {
            type: "Mana regen",
            minValue: 10,
            maxValue: 19,
            chance: 10,
        },
        {
            type: "Magic find",
            minValue: 6,
            maxValue: 12,
            chance: 10,
        },
        {
            type: "Gold drop",
            minValue: 10,
            maxValue: 15,
            chance: 10,
        },
        {
            type: "Experience rate",
            minValue: 5,
            maxValue: 10,
            chance: 10,
        },
        {
            type: "Life gain on hit",
            minValue: 1,
            maxValue: 3,
            chance: 10,
        },
        {
            type: "Critical damage",
            minValue: 10,
            maxValue: 15,
            chance: 10,
        },
        {
            type: "Critical chance",
            minValue: 1,
            maxValue: 5,
            chance: 10,
        },
    ],
    level20: [
		{
		    type: "All attributes",
		    minValue: 5,
		    maxValue: 8,
		    chance: 10,
		},
        {
            type: "Strength",
            minValue: 13,
            maxValue: 17,
            chance: 10,
        },
        {
            type: "Endurance",
            minValue: 13,
            maxValue: 17,
            chance: 10,
        },
        {
            type: "Agility",
            minValue: 13,
            maxValue: 17,
            chance: 10,
        },
        {
            type: "Dexterity",
            minValue: 13,
            maxValue: 17,
            chance: 10,
        },
        {
            type: "Wisdom",
            minValue: 13,
            maxValue: 17,
            chance: 10,
        },
        {
            type: "Intelligence",
            minValue: 13,
            maxValue: 17,
            chance: 10,
        },
        {
            type: "Luck",
            minValue: 13,
            maxValue: 17,
            chance: 10,
        },
        {
            type: "Block chance",
            minValue: 3,
            maxValue: 5,
            chance: 10,
        },
        {
            type: "Evasion",
            minValue: 5,
            maxValue: 7,
            chance: 10,
        },
        {
            type: "Bonus damage",
            minValue: 50,
            maxValue: 69,
            chance: 10,
        },
        {
            type: "Bonus armor",
            minValue: 11,
            maxValue: 28,
            chance: 10,
        },
        {
            type: "Bonus life",
            minValue: 20,
            maxValue: 29,
            chance: 10,
        },
        {
            type: "Bonus mana",
            minValue: 20,
            maxValue: 24,
            chance: 10,
        },
        {
            type: "Health regen",
            minValue: 2,
            maxValue: 3,
            chance: 10,
        },
        {
            type: "Mana regen",
            minValue: 20,
            maxValue: 29,
            chance: 10,
        },
        {
            type: "Magic find",
            minValue: 13,
            maxValue: 18,
            chance: 10,
        },
        {
            type: "Gold drop",
            minValue: 16,
            maxValue: 24,
            chance: 10,
        },
        {
            type: "Experience rate",
            minValue: 11,
            maxValue: 16,
            chance: 10,
        },
        {
            type: "Life gain on hit",
            minValue: 4,
            maxValue: 7,
            chance: 10,
        },
        {
            type: "Critical damage",
            minValue: 16,
            maxValue: 21,
            chance: 10,
        },
        {
            type: "Critical chance",
            minValue: 6,
            maxValue: 10,
            chance: 10,
        },
    ],
};

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

var characterRaces = new Object();
characterRaces.human = human;
characterRaces.halfElf = halfElf;
characterRaces.dwarf = dwarf;
characterRaces.orc = orc;


CreateMonsterHtml();