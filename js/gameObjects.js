var InventoryItemTypes = [
    {
        type: 'weapon',
        displayName: 'Weapon',
    },
    {
        type: 'offHand',
        displayName: 'Off-Hand',
    },
    {
        type: 'armor',
        displayName: 'Armor',
    },
     {
         type: 'accessory',
         displayName: 'Accessory',
     },
      /*{
          type: 'other',
          displayName: 'Other',
      },*/
];

var monsterAreas = [
    {
        type: 'BanditHideout',
        displayName: 'Bandit Hideout'
    },
     {
         type: 'ForestofNarsus',
         displayName: 'Forest of Narsus'
     },
      {
          type: 'OzJotnar',
          displayName: 'Oz Jotnar'
      },
       {
           type: 'AncientCave',
           displayName: 'Ancient Cave'
       }
];
CreateMonsterHtml();

var monsterKillCount = {
    VarikGrunt: 0,
    VarikSoldier: 0,
}