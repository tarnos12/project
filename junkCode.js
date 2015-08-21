//Updating monster hp
document.getElementById(monster.id).getElementsByClassName("hp")[0].innerHTML = monster.hp; //Inside attack function when monster lose hp

//Inside dynamic html to display hp
"<span class=\"hp\">" + monsters[i].hp + "</span>" + "/" + monsters[i].maxHp;
var monsterTypes = [
    {
        type: "weak",
        displayName: "Weak",
        //out of 100, should add upto 100
        itemQualityChance: [
            {
                type: "Legendary",
                chance: 1,

            },
            {
                type: "Epic",
                chance: 15,
            },
            {
                type: "Rare",
                chance: 50,
            },
            {
                type: "Uncommon",
                chance: 334,
            },
            {
                type: "Common",
                chance: 600,
            }
        ]
    },
    {
        type: "average",
        displayName: "Average",
        //out of 100, should add upto 100
        itemQualityChance: [
            {
                type: "Legendary",
                chance: 2,
            },
            {
                type: "Epic",
                chance: 28,
            },
            {
                type: "Rare",
                chance: 100,
            },
            {
                type: "Uncommon",
                chance: 400,
            },
            {
                type: "Common",
                chance: 470,
            }
        ]
    },
    {
        type: "strong",
        displayName: "Strong",
        //out of 100, should add upto 100
        itemQualityChance: [
            {
                type: "Legendary",
                chance: 3,
            },
            {
                type: "Epic",
                chance: 97,
            },
            {
                type: "Rare",
                chance: 200,
            },
            {
                type: "Uncommon",
                chance: 500,
            },
            {
                type: "Common",
                chance: 200,
            }
        ]
    },
    {
        type: "boss",
        displayName: "Boss",
        //out of 100, should add upto 100
        itemQualityChance: [
            {
                type: "Legendary",
                chance: 5,
            },
            {
                type: "Epic",
                chance: 145,
            },
            {
                type: "Rare",
                chance: 350,
            },
            {
                type: "Uncommon",
                chance: 400,
            },
            {
                type: "Common",
                chance: 100,
            }
        ]
    }
];

var itemTypes = [
    {
        type: "Weapon",
        itemSubTypes: [
            {
                type: "Sword",
                //Out of 10
                strengthMultiplier: 7,
                enduranceMultiplier: 6,
                agilityMultiplier: 7,
                dexterityMultiplier: 7,
                wisdomMultiplier: 2,
                intelligenceMultiplier: 1,
                luckMultiplier: 0
            },
            {
                type: "Dagger",
                //Out of 10
                strengthMultiplier: 4,
                enduranceMultiplier: 2,
                agilityMultiplier: 10,
                dexterityMultiplier: 8,
                wisdomMultiplier: 3,
                intelligenceMultiplier: 3,
                luckMultiplier: 0
            },
            {
                type: "Axe",
                //Out of 10
                strengthMultiplier: 10,
                enduranceMultiplier: 8,
                agilityMultiplier: 4,
                dexterityMultiplier: 4,
                wisdomMultiplier: 2,
                intelligenceMultiplier: 2,
                luckMultiplier: 0
            },
            {
                type: "Mace",
                //Out of 10
                strengthMultiplier: 5,
                enduranceMultiplier: 5,
                agilityMultiplier: 1,
                dexterityMultiplier: 2,
                wisdomMultiplier: 10,
                intelligenceMultiplier: 6,
                luckMultiplier: 0
            },
            {
                type: "Fist",
                //Out of 10
                strengthMultiplier: 6,
                enduranceMultiplier: 6,
                agilityMultiplier: 5,
                dexterityMultiplier: 5,
                wisdomMultiplier: 2,
                intelligenceMultiplier: 4,
                luckMultiplier: 0
            },
            {
                type: "Staff",
                //Out of 10
                strengthMultiplier: 2,
                enduranceMultiplier: 3,
                agilityMultiplier: 4,
                dexterityMultiplier: 4,
                wisdomMultiplier: 7,
                intelligenceMultiplier: 10,
                luckMultiplier: 0
            },
            {
                type: "Bow",
                //Out of 10
                strengthMultiplier: 6,
                enduranceMultiplier: 4,
                agilityMultiplier: 5,
                dexterityMultiplier: 10,
                wisdomMultiplier: 2,
                intelligenceMultiplier: 3,
                luckMultiplier: 0
            }
        ]
    },
    {
        type: "Armor",
        itemSubTypes: [
            {
                type: "Cloth Armor",
                //Out of 10
                strengthMultiplier: 1,
                enduranceMultiplier: 1,
                agilityMultiplier: 6,
                dexterityMultiplier: 6,
                wisdomMultiplier: 8,
                intelligenceMultiplier: 8,
                luckMultiplier: 0
            },
            {
                type: "Leather Armor",
                //Out of 10
                strengthMultiplier: 3,
                enduranceMultiplier: 3,
                agilityMultiplier: 10,
                dexterityMultiplier: 6,
                wisdomMultiplier: 6,
                intelligenceMultiplier: 2,
                luckMultiplier: 0
            },
            {
                type: "Medium Armor",
                //Out of 10
                strengthMultiplier: 5,
                enduranceMultiplier: 5,
                agilityMultiplier: 5,
                dexterityMultiplier: 5,
                wisdomMultiplier: 8,
                intelligenceMultiplier: 2,
                luckMultiplier: 0
            },
            {
                type: "Heavy Armor",
                //Out of 10
                strengthMultiplier: 10,
                enduranceMultiplier: 10,
                agilityMultiplier: 2,
                dexterityMultiplier: 2,
                wisdomMultiplier: 5,
                intelligenceMultiplier: 1,
                luckMultiplier: 0
            }
        ]
    },
    {
        type: "Accessory",
        itemSubTypes: [
            {
                type: "Ring",
                //Out of 10
                strengthMultiplier: 5,
                enduranceMultiplier: 5,
                agilityMultiplier: 5,
                dexterityMultiplier: 5,
                wisdomMultiplier: 5,
                intelligenceMultiplier: 5,
                luckMultiplier: 10
            },
            {
                type: "Amulet",
                //Out of 10
                strengthMultiplier: 5,
                enduranceMultiplier: 5,
                agilityMultiplier: 5,
                dexterityMultiplier: 5,
                wisdomMultiplier: 5,
                intelligenceMultiplier: 5,
                luckMultiplier: 10
            },
            {
                type: "Talisman",
                //Out of 10
                strengthMultiplier: 5,
                enduranceMultiplier: 5,
                agilityMultiplier: 5,
                dexterityMultiplier: 5,
                wisdomMultiplier: 5,
                intelligenceMultiplier: 5,
                luckMultiplier: 10
            }
        ]
    },
    {
        type: "OffHand",
        itemSubTypes: [
            {
                type: "Shield",
                //Out of 10
                strengthMultiplier: 7,
                enduranceMultiplier: 10,
                agilityMultiplier: 3,
                dexterityMultiplier: 5,
                wisdomMultiplier: 2,
                intelligenceMultiplier: 2,
                luckMultiplier: 0
            },
            {
                type: "Book",
                //Out of 10
                strengthMultiplier: 2,
                enduranceMultiplier: 3,
                agilityMultiplier: 6,
                dexterityMultiplier: 3,
                wisdomMultiplier: 10,
                intelligenceMultiplier: 6,
                luckMultiplier: 0
            },
            {
                type: "OffHandDagger",
                //Out of 10
                strengthMultiplier: 3,
                enduranceMultiplier: 3,
                agilityMultiplier: 10,
                dexterityMultiplier: 5,
                wisdomMultiplier: 5,
                intelligenceMultiplier: 4,
                luckMultiplier: 0
            },
            {
                type: "ThrowingWeapon",
                //Out of 10
                strengthMultiplier: 6,
                enduranceMultiplier: 2,
                agilityMultiplier: 5,
                dexterityMultiplier: 10,
                wisdomMultiplier: 3,
                intelligenceMultiplier: 4,
                luckMultiplier: 0
            },
            {
                type: "OffHandOrb",
                //Out of 10
                strengthMultiplier: 2,
                enduranceMultiplier: 4,
                agilityMultiplier: 4,
                dexterityMultiplier: 5,
                wisdomMultiplier: 5,
                intelligenceMultiplier: 10,
                luckMultiplier: 0
            }
        ]
    }
];
var itemQualities = [
    {
        type: "Legendary",
        qualityMultiplier: 10,
        color: "purple"
    },
    {
        type: "Epic",
        qualityMultiplier: 6,
        color: "orange"
    },
    {
        type: "Rare",
        qualityMultiplier: 4,
        color: "blue"
    },
    {
        type: "Uncommon",
        qualityMultiplier: 2,
        color: "green"
    },
    {
        type: "Common",
        qualityMultiplier: 1,
        color: "black"
    }
];


//TEST TEST TEST TEST :)
function monsterItemDrop(monster) {

    //Testing a possible way for an option like "destroy common items on drop" which would simply work like player.destroyCommon === false ( it would be set "true") then do nothing... -_- put it after the code gets actual info on item quality...

    if (playerInventory.length <= player.inventory()) {

        var currentDate = new Date();

        var monsterType = getMonsterType(monster);

        //Get Item Information
        var randomItemQuality = Math.floor(Math.random() * (1000 - 1) + 1); //Random item quality
        var itemQuality = getItemQuality(randomItemQuality, monsterType);
        if (typeof itemQuality !== "undefined") {
            if (checkBoxCommon === false && itemQuality.type === "Common" || checkBoxUncommon === false && itemQuality.type === "Uncommon" || checkBoxRare === false && itemQuality.type === "Rare" || checkBoxEpic === false && itemQuality.type === "Epic" || itemQuality.type === "Legendary") {
                var itemType = itemTypes[Math.floor(Math.random() * itemTypes.length)]; //This code gets a random item from the item array.
                var itemType2 = itemType.type;
                var itemSubType = itemType.itemSubTypes[Math.floor(Math.random() * itemType.itemSubTypes.length)]; //This gets a random item sub type from the subType array.
                var stats = {
                    strength: null,
                    endurance: null,
                    agility: null,
                    dexterity: null,
                    wisdom: null,
                    intelligence: null,
                    luck: null
                };
                for (var stat in stats) {
                    if (stats.hasOwnProperty(stat)) {
                        var randomStat = Math.floor(Math.random() * ((monster.level + 2) - monster.level + 1) + monster.level);
                        var multiplier = randomStat * itemQuality.qualityMultiplier;
                        //Calculate each stat
                        stats[stat] = Math.floor(multiplier * itemSubType[stat + "Multiplier"] / 10);
                        stats[stat] = Math.floor(Math.random() * ((stats[stat] * 2)) - stats[stat] / 10 + stats[stat]);
                    }
                };
                //Value of an item, all stats multiplied by item quality multiplier(better quality item = more gold)
                var itemValue = (stats.strength + stats.endurance + stats.agility + stats.dexterity + stats.wisdom + stats.intelligence + stats.luck); // * itemQuality.qualityMultiplier

                var weaponId = currentDate.getTime();

                var newItem = {
                    id: weaponId,
                    strength: stats.strength,
                    endurance: stats.endurance,
                    agility: stats.agility,
                    dexterity: stats.dexterity,
                    wisdom: stats.wisdom,
                    intelligence: stats.intelligence,
                    luck: stats.luck,
                    itemType: itemSubType.type,
                    itemType2: itemType,
                    itemQuality: itemQuality.type,
                    color: itemQuality.color,
                    isEquipped: false,
                    value: itemValue
                };
                playerInventory.push(newItem);

                CreateInventoryWeaponHtml();
                Log("<span style=\"color:orange\">You found an item! </span>");
            }
        } else {
            Log("<span style=\"color:orange\">Inventory full! </span>");
        }
    }
}

//New Drop function monster type<group>
function getMonsterType(monster) {
    var monsterType = monsterTypes.filter(function(obj) {
        return obj.type === monster.type;
    })[0]; //Doing [0] because it returns an array, but since we know it has only 1 object, we can use 0.
    return monsterType;
}

function getItemQuality(randomItemQuality, monsterType) {
    var itemQuality;

    var chance = 0;

    for (var i = 0; i < monsterType.itemQualityChance.length; i++) {
        //This is used to add up the previous quality chance to the next because all of them have to add up to 100. They are inclusive, not exclusive.
        chance = monsterType.itemQualityChance[i].chance;
        if (randomItemQuality <= chance * player.dropRate()) {
            itemQuality = itemQualities.filter(function(obj) {

                return obj.type === monsterType.itemQualityChance[i].type;
            })[0];
            break;
        }
    }

    return itemQuality;
}