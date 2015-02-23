// Each monster have a Group asigned to them, like GroupA consist of melee monsters which use Swords/Axes etc. 
//Each group have sub group which is their location, used to determine different item level
// It goes like this: Group - > location - > random pick item type (group dependant) each with "chance value" then pick an item inside a choosen item type
var itemTable = [
    {   //Warrior
        GroupA: [{
            BanditHideout: {
                //Weapon
                chance: 40,
                weapon: [{
                    chance: 20,
                    name: "Short Sword",
                    itemQuality: "Common",
                    itemType: "Sword",
                    color: "black",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 20,
                    name: "Small Axe",
                    itemQuality: "Common",
                    itemType: "Axe",
                    color: "black",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 20,
                    name: "Mace",
                    itemQuality: "Common",
                    itemType: "Mace",
                    color: "black",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 10,
                    name: "Bandit Sword",
                    itemQuality: "Uncommon",
                    itemType: "Sword",
                    color: "green",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 10,
                    name: "Bandit Axe",
                    itemQuality: "Uncommon",
                    itemType: "Axe",
                    color: "green",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                 {
                     chance: 10,
                     name: "Bandit Mace",
                     itemQuality: "Uncommon",
                     itemType: "Mace",
                     color: "green",
                     minDamage: 1,
                     maxDamage: 3,
                     strength: 3,
                     endurance: 2,
                     agility: 3
                 },
                ],
                //off-Hand
                chance: 30,
                offHand: [{
                    chance: 70,
                    name: "Small Shield",
                    itemQuality: "Common",
                    itemType: "OffHand",
                    color: "black",
                    defense: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 30,
                    name: "Bandit Shield",
                    itemQuality: "Uncommon",
                    itemType: "OffHand",
                    color: "green",
                    defense: 7,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                ],
                //Armor
                chance: 20,
                armor: [{
                    chance: 70,
                    name: "Leather Armor",
                    itemQuality: "Common",
                    itemType: "Armor", //Chest once I add new item types e.g. boots/helmets
                    color: "black",
                    defense: 7,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 30,
                    name: "Bandit Armor",
                    itemQuality: "Uncommon",
                    itemType: "Armor",
                    color: "green",
                    defense: 7,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                ],
                //Accessory
                chance: 10,
                accessory: [{
                    chance: 70,
                    name: "Common Ring",
                    itemQuality: "Common",
                    itemType: "Ring",
                    color: "black",
                    defense: 2,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 30,
                    name: "Bandit Ring",
                    itemQuality: "Uncommon",
                    itemType: "Ring",
                    color: "green",
                    defense: 5,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                ],
            },

            Forest: {
                //Weapon
                chance: 40,
                weapon: [{
                    chance: 20,
                    name: "Short Sword",
                    itemQuality: "Common",
                    itemType: "Sword",
                    color: "black",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 20,
                    name: "Small Axe",
                    itemQuality: "Common",
                    itemType: "Axe",
                    color: "black",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 20,
                    name: "Mace",
                    itemQuality: "Common",
                    itemType: "Mace",
                    color: "black",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 10,
                    name: "Bandit Sword",
                    itemQuality: "Uncommon",
                    itemType: "Sword",
                    color: "green",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 10,
                    name: "Bandit Axe",
                    itemQuality: "Uncommon",
                    itemType: "Axe",
                    color: "green",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                 {
                     chance: 10,
                     name: "Bandit Mace",
                     itemQuality: "Uncommon",
                     itemType: "Mace",
                     color: "green",
                     minDamage: 1,
                     maxDamage: 3,
                     strength: 3,
                     endurance: 2,
                     agility: 3
                 },
                ],
                //off-Hand
                chance: 30,
                offHand: [{
                    chance: 70,
                    name: "Small Shield",
                    itemQuality: "Common",
                    itemType: "OffHand",
                    color: "black",
                    defense: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 30,
                    name: "Bandit Shield",
                    itemQuality: "Uncommon",
                    itemType: "OffHand",
                    color: "green",
                    defense: 7,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                ],
                //Armor
                chance: 20,
                armor: [{
                    chance: 70,
                    name: "Leather Armor",
                    itemQuality: "Common",
                    itemType: "Armor", //Chest once I add new item types e.g. boots/helmets
                    color: "black",
                    defense: 7,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 30,
                    name: "Bandit Armor",
                    itemQuality: "Uncommon",
                    itemType: "Armor",
                    color: "green",
                    defense: 7,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                ],
                //Accessory
                chance: 10,
                accessory: [{
                    chance: 70,
                    name: "Common Ring",
                    itemQuality: "Common",
                    itemType: "Ring",
                    color: "black",
                    defense: 2,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 30,
                    name: "Bandit Ring",
                    itemQuality: "Uncommon",
                    itemType: "Ring",
                    color: "green",
                    defense: 5,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                ],
            },

            Mountains: {
                //Weapon
                chance: 40,
                weapon: [{
                    chance: 20,
                    name: "Short Sword",
                    itemQuality: "Common",
                    itemType: "Sword",
                    color: "black",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 20,
                    name: "Small Axe",
                    itemQuality: "Common",
                    itemType: "Axe",
                    color: "black",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 20,
                    name: "Mace",
                    itemQuality: "Common",
                    itemType: "Mace",
                    color: "black",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 10,
                    name: "Bandit Sword",
                    itemQuality: "Uncommon",
                    itemType: "Sword",
                    color: "green",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 10,
                    name: "Bandit Axe",
                    itemQuality: "Uncommon",
                    itemType: "Axe",
                    color: "green",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                 {
                     chance: 10,
                     name: "Bandit Mace",
                     itemQuality: "Uncommon",
                     itemType: "Mace",
                     color: "green",
                     minDamage: 1,
                     maxDamage: 3,
                     strength: 3,
                     endurance: 2,
                     agility: 3
                 },
                ],
                //off-Hand
                chance: 30,
                offHand: [{
                    chance: 70,
                    name: "Small Shield",
                    itemQuality: "Common",
                    itemType: "OffHand",
                    color: "black",
                    defense: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 30,
                    name: "Bandit Shield",
                    itemQuality: "Uncommon",
                    itemType: "OffHand",
                    color: "green",
                    defense: 7,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                ],
                //Armor
                chance: 20,
                armor: [{
                    chance: 70,
                    name: "Leather Armor",
                    itemQuality: "Common",
                    itemType: "Armor", //Chest once I add new item types e.g. boots/helmets
                    color: "black",
                    defense: 7,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 30,
                    name: "Bandit Armor",
                    itemQuality: "Uncommon",
                    itemType: "Armor",
                    color: "green",
                    defense: 7,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                ],
                //Accessory
                chance: 10,
                accessory: [{
                    chance: 70,
                    name: "Common Ring",
                    itemQuality: "Common",
                    itemType: "Ring",
                    color: "black",
                    defense: 2,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 30,
                    name: "Bandit Ring",
                    itemQuality: "Uncommon",
                    itemType: "Ring",
                    color: "green",
                    defense: 5,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                ],
            },

            AncientCave: {
                //Weapon
                chance: 40,
                weapon: [{
                    chance: 20,
                    name: "Short Sword",
                    itemQuality: "Common",
                    itemType: "Sword",
                    color: "black",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 20,
                    name: "Small Axe",
                    itemQuality: "Common",
                    itemType: "Axe",
                    color: "black",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 20,
                    name: "Mace",
                    itemQuality: "Common",
                    itemType: "Mace",
                    color: "black",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 10,
                    name: "Bandit Sword",
                    itemQuality: "Uncommon",
                    itemType: "Sword",
                    color: "green",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 10,
                    name: "Bandit Axe",
                    itemQuality: "Uncommon",
                    itemType: "Axe",
                    color: "green",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                 {
                     chance: 10,
                     name: "Bandit Mace",
                     itemQuality: "Uncommon",
                     itemType: "Mace",
                     color: "green",
                     minDamage: 1,
                     maxDamage: 3,
                     strength: 3,
                     endurance: 2,
                     agility: 3
                 },
                ],
                //off-Hand
                chance: 30,
                offHand: [{
                    chance: 70,
                    name: "Small Shield",
                    itemQuality: "Common",
                    itemType: "OffHand",
                    color: "black",
                    defense: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 30,
                    name: "Bandit Shield",
                    itemQuality: "Uncommon",
                    itemType: "OffHand",
                    color: "green",
                    defense: 7,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                ],
                //Armor
                chance: 20,
                armor: [{
                    chance: 70,
                    name: "Leather Armor",
                    itemQuality: "Common",
                    itemType: "Armor", //Chest once I add new item types e.g. boots/helmets
                    color: "black",
                    defense: 7,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 30,
                    name: "Bandit Armor",
                    itemQuality: "Uncommon",
                    itemType: "Armor",
                    color: "green",
                    defense: 7,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                ],
                //Accessory
                chance: 10,
                accessory: [{
                    chance: 70,
                    name: "Common Ring",
                    itemQuality: "Common",
                    itemType: "Ring",
                    color: "black",
                    defense: 2,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 30,
                    name: "Bandit Ring",
                    itemQuality: "Uncommon",
                    itemType: "Ring",
                    color: "green",
                    defense: 5,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                ],
            },
        }],
        //Ranged I have to add new offHand item type "Arrows" :|
        GroupB: [{
            BanditHideout: {
                //Weapon
                chance: 40,
                weapon: [{
                    chance: 40,
                    name: "Short Bow",
                    itemQuality: "Common",
                    itemType: "Bow",
                    color: "black",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 30,
                    name: "Composite Bow",
                    itemQuality: "Common",
                    itemType: "Bow",
                    color: "black",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 20,
                    name: "Long Bow",
                    itemQuality: "Common",
                    itemType: "Bow",
                    color: "black",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 10,
                    name: "Bandit Bow",
                    itemQuality: "Uncommon",
                    itemType: "Bow",
                    color: "green",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                }
                ],
                //off-Hand
                chance: 30,
                offHand: [{
                    chance: 70,
                    name: "Bronze Arrow",
                    itemQuality: "Common",
                    itemType: "OffHand",
                    color: "black",
                    defense: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 30,
                    name: "Silver Arrow",
                    itemQuality: "Uncommon",
                    itemType: "OffHand",
                    color: "green",
                    defense: 7,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                ],
                //Armor
                chance: 20,
                armor: [{
                    chance: 70,
                    name: "Leather Armor",
                    itemQuality: "Common",
                    itemType: "Armor", //Chest once I add new item types e.g. boots/helmets
                    color: "black",
                    defense: 7,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 30,
                    name: "Bandit Armor",
                    itemQuality: "Uncommon",
                    itemType: "Armor",
                    color: "green",
                    defense: 7,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                ],
                //Accessory
                chance: 10,
                accessory: [{
                    chance: 70,
                    name: "Common Ring",
                    itemQuality: "Common",
                    itemType: "Ring",
                    color: "black",
                    defense: 2,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 30,
                    name: "Bandit Ring",
                    itemQuality: "Uncommon",
                    itemType: "Ring",
                    color: "green",
                    defense: 5,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                ],
            },

            Forest: {
                //Weapon
                chance: 40,
                weapon: [{
                    chance: 20,
                    name: "Short Sword",
                    itemQuality: "Common",
                    itemType: "Sword",
                    color: "black",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 20,
                    name: "Small Axe",
                    itemQuality: "Common",
                    itemType: "Axe",
                    color: "black",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 20,
                    name: "Mace",
                    itemQuality: "Common",
                    itemType: "Mace",
                    color: "black",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 10,
                    name: "Bandit Sword",
                    itemQuality: "Uncommon",
                    itemType: "Sword",
                    color: "green",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 10,
                    name: "Bandit Axe",
                    itemQuality: "Uncommon",
                    itemType: "Axe",
                    color: "green",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                 {
                     chance: 10,
                     name: "Bandit Mace",
                     itemQuality: "Uncommon",
                     itemType: "Mace",
                     color: "green",
                     minDamage: 1,
                     maxDamage: 3,
                     strength: 3,
                     endurance: 2,
                     agility: 3
                 },
                ],
                //off-Hand
                chance: 30,
                offHand: [{
                    chance: 70,
                    name: "Small Shield",
                    itemQuality: "Common",
                    itemType: "OffHand",
                    color: "black",
                    defense: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 30,
                    name: "Bandit Shield",
                    itemQuality: "Uncommon",
                    itemType: "OffHand",
                    color: "green",
                    defense: 7,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                ],
                //Armor
                chance: 20,
                armor: [{
                    chance: 70,
                    name: "Leather Armor",
                    itemQuality: "Common",
                    itemType: "Armor", //Chest once I add new item types e.g. boots/helmets
                    color: "black",
                    defense: 7,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 30,
                    name: "Bandit Armor",
                    itemQuality: "Uncommon",
                    itemType: "Armor",
                    color: "green",
                    defense: 7,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                ],
                //Accessory
                chance: 10,
                accessory: [{
                    chance: 70,
                    name: "Common Ring",
                    itemQuality: "Common",
                    itemType: "Ring",
                    color: "black",
                    defense: 2,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 30,
                    name: "Bandit Ring",
                    itemQuality: "Uncommon",
                    itemType: "Ring",
                    color: "green",
                    defense: 5,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                ],
            },

            Mountains: {
                //Weapon
                chance: 40,
                weapon: [{
                    chance: 20,
                    name: "Short Sword",
                    itemQuality: "Common",
                    itemType: "Sword",
                    color: "black",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 20,
                    name: "Small Axe",
                    itemQuality: "Common",
                    itemType: "Axe",
                    color: "black",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 20,
                    name: "Mace",
                    itemQuality: "Common",
                    itemType: "Mace",
                    color: "black",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 10,
                    name: "Bandit Sword",
                    itemQuality: "Uncommon",
                    itemType: "Sword",
                    color: "green",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 10,
                    name: "Bandit Axe",
                    itemQuality: "Uncommon",
                    itemType: "Axe",
                    color: "green",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                 {
                     chance: 10,
                     name: "Bandit Mace",
                     itemQuality: "Uncommon",
                     itemType: "Mace",
                     color: "green",
                     minDamage: 1,
                     maxDamage: 3,
                     strength: 3,
                     endurance: 2,
                     agility: 3
                 },
                ],
                //off-Hand
                chance: 30,
                offHand: [{
                    chance: 70,
                    name: "Small Shield",
                    itemQuality: "Common",
                    itemType: "OffHand",
                    color: "black",
                    defense: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 30,
                    name: "Bandit Shield",
                    itemQuality: "Uncommon",
                    itemType: "OffHand",
                    color: "green",
                    defense: 7,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                ],
                //Armor
                chance: 20,
                armor: [{
                    chance: 70,
                    name: "Leather Armor",
                    itemQuality: "Common",
                    itemType: "Armor", //Chest once I add new item types e.g. boots/helmets
                    color: "black",
                    defense: 7,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 30,
                    name: "Bandit Armor",
                    itemQuality: "Uncommon",
                    itemType: "Armor",
                    color: "green",
                    defense: 7,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                ],
                //Accessory
                chance: 10,
                accessory: [{
                    chance: 70,
                    name: "Common Ring",
                    itemQuality: "Common",
                    itemType: "Ring",
                    color: "black",
                    defense: 2,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 30,
                    name: "Bandit Ring",
                    itemQuality: "Uncommon",
                    itemType: "Ring",
                    color: "green",
                    defense: 5,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                ],
            },

            AncientCave: {
                //Weapon
                chance: 40,
                weapon: [{
                    chance: 20,
                    name: "Short Sword",
                    itemQuality: "Common",
                    itemType: "Sword",
                    color: "black",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 20,
                    name: "Small Axe",
                    itemQuality: "Common",
                    itemType: "Axe",
                    color: "black",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 20,
                    name: "Mace",
                    itemQuality: "Common",
                    itemType: "Mace",
                    color: "black",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 10,
                    name: "Bandit Sword",
                    itemQuality: "Uncommon",
                    itemType: "Sword",
                    color: "green",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 10,
                    name: "Bandit Axe",
                    itemQuality: "Uncommon",
                    itemType: "Axe",
                    color: "green",
                    minDamage: 1,
                    maxDamage: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                 {
                     chance: 10,
                     name: "Bandit Mace",
                     itemQuality: "Uncommon",
                     itemType: "Mace",
                     color: "green",
                     minDamage: 1,
                     maxDamage: 3,
                     strength: 3,
                     endurance: 2,
                     agility: 3
                 },
                ],
                //off-Hand
                chance: 30,
                offHand: [{
                    chance: 70,
                    name: "Small Shield",
                    itemQuality: "Common",
                    itemType: "OffHand",
                    color: "black",
                    defense: 3,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 30,
                    name: "Bandit Shield",
                    itemQuality: "Uncommon",
                    itemType: "OffHand",
                    color: "green",
                    defense: 7,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                ],
                //Armor
                chance: 20,
                armor: [{
                    chance: 70,
                    name: "Leather Armor",
                    itemQuality: "Common",
                    itemType: "Armor", //Chest once I add new item types e.g. boots/helmets
                    color: "black",
                    defense: 7,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 30,
                    name: "Bandit Armor",
                    itemQuality: "Uncommon",
                    itemType: "Armor",
                    color: "green",
                    defense: 7,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                ],
                //Accessory
                chance: 10,
                accessory: [{
                    chance: 70,
                    name: "Common Ring",
                    itemQuality: "Common",
                    itemType: "Ring",
                    color: "black",
                    defense: 2,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                {
                    chance: 30,
                    name: "Bandit Ring",
                    itemQuality: "Uncommon",
                    itemType: "Ring",
                    color: "green",
                    defense: 5,
                    strength: 3,
                    endurance: 2,
                    agility: 3
                },
                ],
            },
        }],
        //Mage
        GroupC: [{
            BanditHideout: {},
            Forest: {},
            Mountains: {},
            AncientCave: {},
        }],
        //Assasin
        GroupD: [{
            BanditHideout: {},
            Forest: {},
            Mountains: {},
            AncientCave: {},
        }],
        //Boss -> Drops higher quality items of all types, might add "sub boss" for rare quality, and  bosses drop epic quality..Legendary for even stronger enemies like Rare Bosses.
        GroupE: [{
            BanditHideout: {},
            Forest: {},
            Mountains: {},
            AncientCave: {},
        }],
    }
]