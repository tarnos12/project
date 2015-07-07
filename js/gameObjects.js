var InventoryItemTypes = [
    {
        type: 'weapon',
        displayName: 'Weapon',
        icon: 'weapon',
    },
    {
        type: 'offHand',
        displayName: 'Off-Hand',
        icon: 'shield',
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
       {
           type: 'fist',
           displayName: 'Fist',
           icon: 'fist'
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