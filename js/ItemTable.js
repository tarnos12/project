// Each monster have a Group asigned to them, like GroupA consist of melee monsters which use Swords/Axes etc. 
//Each group have sub group which is their location, used to determine different item level
// It goes like this: Group - > location - > random pick item type (group dependant) each with "chance value" then pick an item inside a choosen item type

var itemTable = {
    groupA: {
        BanditHideout: {
            itemDrop: [
            {
                chance: 20,
                name: 'Short Sword',
                itemQuality: 'Common',
                itemType: 'weapon',
                color: 'black',
                minDamage: 2,
                maxDamage: 4,
                Strength: 2,
                agility: 1

            },
             {
                 chance: 20,
                 name: 'Hand Axe',
                 itemQuality: 'Common',
                 itemType: 'weapon',
                 color: 'black',
                 minDamage: 1,
                 maxDamage: 5,
                 Strength: 2,
                 agility: 1
             },
            {
                chance: 20,
                name: 'Club',
                itemQuality: 'Common',
                itemType: 'weapon',
                color: 'black',
                minDamage: 2,
                maxDamage: 4,
                Strength: 2,
                endurance: 1
            },
            {
                chance: 20,
                name: 'Leather Armor',
                itemQuality: 'Common',
                itemType: 'armor',
                color: 'black',
                defense: 3,
                agility: 2,
                endurance: 1
            },
            {
                chance: 20,
                name: 'Quilted Armor',
                itemQuality: 'Common',
                itemType: 'armor',
                color: 'black',
                defense: 5,
                agility: 1,
                endurance: 1
            }
            ]
        },
        Forest: {},
        Mountains: {},
        AncientCave: {},
    },
};