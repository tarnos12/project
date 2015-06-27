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
           type: 'AncientCave',
           displayName: 'Ancient Cave',
           icon: 'ancientCave'
       }
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

var characterClass = function (name, strength, endurance, agility, dexterity, intelligence, wisdom, luck) { //default spell object constructor
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
var warrior = new characterClass('Warrior', 3, 3, 2, 2, 1, 1, 2);
var apprentice = new characterClass('Apprentice', 1, 1, 2, 2, 3, 3, 2);
var ranger = new characterClass('Ranger', 3, 2, 2, 3, 1, 1, 3);
var samurai = new characterClass('Samurai', 3, 2, 3, 2, 1, 1, 3);

var characterClasses = new Object();
characterClasses.warrior = warrior;
characterClasses.apprentice = apprentice;
characterClasses.ranger = ranger;
characterClasses.samurai = samurai;


CreateMonsterHtml();