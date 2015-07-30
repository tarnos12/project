function monsterItemDrop(monster) {
    var itemDropNumber = 0;
    var randomItemAmount = Math.floor(Math.random() * 5) + 1; // 1-5 item drop per monster kill
    for (var i = 0; i < randomItemAmount; i++) {
        var randomItemChance = Math.floor(Math.random() * (1000 - 1) + 1);
        if (randomItemChance * player.functions.dropRate() >= 500) {
            if (playerInventory.length <= player.functions.inventory()) {
                getItemType(monster); // Call getItemType(monster); several times, for multiple item drop per monster kill/ random amount of items per kill...
                itemDropNumber += 1;
            }
            else {
                Log('<span id=\"inventoryFull\" style=\"color:red;\">' + "Your inventory is full.<br />" + "</span>");
            }
        };
    };
    Log('<span id=\"itemDropNew\" style=\"color:orange; display:none;\">You found ' + (itemDropNumber + 1) + " items! <br />" + "</span>");
    itemDropLog();
    CreateInventoryWeaponHtml();
};

function getItemType(monster) {
    var monsterStats = monster.Stats;
    var dropItem = {};
    var totalChance = 0;
    var randomNumber = 0;
    var itemLevel = 0;
    var itemChanceTotal = itemTypes[itemTypes.length - 1]; // Gets the value "chance" of last index in my object array. I wont need to edit functions in the future if I add more stuff.
    totalChance = itemChanceTotal.chance;
    randomNumber = Math.floor(Math.random() * (totalChance - 1) + 1);
    if (monsterStats.level <= 10) {
        itemLevel = Math.floor(Math.random() * (monsterStats.level - 1 + 1)) + 1; // Get itemLevel based on monster, 1-10
    }
    else {
        var monsterMinLevel = monsterStats.level / 2;
        itemLevel = Math.floor(Math.random() * (monsterStats.level - monsterMinLevel + 1)) + monsterMinLevel; // get itemLevel based on monster level / 2 and monster level.
    };
    dropItem["iLvl"] = itemLevel;
    dropItem["id"] = player.properties.itemIdNumber;
    for (var itemType in itemTypes) {
        var itemChance = itemTypes[itemType].chance; // Get item type: weapon/armor/accessory/ other in the future...
        var itemType = itemTypes[itemType].type;
        if (randomNumber <= itemChance) {
            dropItem["itemType"] = itemType;
            break;
        };
    };
    getItemSubType(monster, dropItem)
};

function getItemSubType(monster, dropItem) {
    var totalChance = 0;
    var randomNumber = 0;
    if (dropItem.itemType === "weapon") {
        var itemChanceTotal = itemWeaponSubType[itemWeaponSubType.length - 1];
        totalChance = itemChanceTotal.chance;
        randomNumber = Math.floor(Math.random() * (totalChance - 1) + 1);
        for (var itemType in itemWeaponSubType) {
            var itemChance = itemWeaponSubType[itemType].chance;
            var itemType = itemWeaponSubType[itemType].type;
            if (randomNumber <= itemChance) {
                dropItem["subType"] = itemType;
                break;
            };
        };
    }
    else if (dropItem.itemType === "armor") {
        var itemChanceTotal = itemArmorSubType[itemArmorSubType.length - 1];
        totalChance = itemChanceTotal.chance;
        randomNumber = Math.floor(Math.random() * (totalChance - 1) + 1);
        for (var itemType in itemArmorSubType) {
            var itemChance = itemArmorSubType[itemType].chance;
            var itemType = itemArmorSubType[itemType].type;
            if (randomNumber <= itemChance) {
                dropItem["subType"] = itemType;
                break;
            };
        };
    }
    else if (dropItem.itemType === "accessory") {
        var itemChanceTotal = itemAccessorySubType[itemAccessorySubType.length - 1];
        totalChance = itemChanceTotal.chance;
        randomNumber = Math.floor(Math.random() * (totalChance - 1) + 1);
        for (var itemType in itemAccessorySubType) {
            var itemChance = itemAccessorySubType[itemType].chance;
            var itemType = itemAccessorySubType[itemType].type;
            if (randomNumber <= itemChance) {
                dropItem["subType"] = itemType;
                break;
            };
        };
    };
    getItemRarity(monster, dropItem);
};

function getItemRarity(monster, dropItem) {
    var totalChance = 0;
    var randomNumber = 0;
    var itemChanceTotal = itemRarity[itemRarity.length - 1];
    totalChance = itemChanceTotal.chance;
    randomNumber = Math.floor(Math.random() * (totalChance - 1) + 1);
    for (var itemType in itemRarity) {
        var itemChance = itemRarity[itemType].chance;
        var itemType2 = itemRarity[itemType];
        var itemColor = itemRarity[itemType].color;
        if (randomNumber <= itemChance) {
            dropItem["itemQuality"] = itemType2.type;
            dropItem["minMods"] = itemType2.minMods;
            dropItem["maxMods"] = itemType2.maxMods;
            dropItem["image"] = dropItem.subType + dropItem.itemQuality;
            dropItem["color"] = itemColor;
            dropItem["power"] = itemType2.power;
            break;
        };
    };
    getItemBaseStats(monster, dropItem)
};

function getItemBaseStats(monster, dropItem) {
    if (dropItem.itemType === "weapon") {
        var randomNumber = Math.floor(Math.random() * ((dropItem.iLvl + dropItem.power) - 1 + 1)) + 1;
        dropItem["MinDamage"] = randomNumber
        dropItem["MaxDamage"] = randomNumber + dropItem.iLvl
    }
    else if (dropItem.itemType === "armor") {
        var randomNumber = Math.floor(Math.random() * (dropItem.iLvl - 1 + 1)) + 1;
        dropItem["defense"] = randomNumber;
    };
    getBaseItemMod(monster, dropItem);
};

function getBaseItemMod(monster, dropItem) {
    var totalChance = 0;
    var randomNumber = 0;
    var currentMods = 0;
    var randomMod;
    var newArray;
    var arrayIndex;
    var modChance;
    var randomModAmount = Math.round(Math.random()) // Picks a number between 0 and 1, since we want max 1 "base bonus" on an item
    modChance = itemBaseMod[itemBaseMod.length - 1];
    totalChance = modChance.chance;
    randomNumber = Math.floor(Math.random() * (totalChance - 1) + 1); // Get a random number based on highest possible chance
    newArray = itemBaseMod.slice(); // Copy an array so we can remove array values so we dont get double of the same bonus on the item
    if (currentMods < randomModAmount) {
        randomMod = newArray[Math.floor(Math.random() * newArray.length)]; // picks a random bonus
        var randomModValue = Math.floor(Math.random() * (randomMod.maxValue - randomMod.minValue + 1)) + randomMod.minValue;
        dropItem[randomMod.type] = randomModValue;
        arrayIndex = newArray.indexOf(randomMod); // Find out an index of our randomMod, so we can remove it( we dont want to get it multiple times...
        newArray.splice(arrayIndex, 1) // Remove an itemMod from copied array...
        currentMods += 1;
    };
    getBonusItemMod(monster, dropItem);
};

function getBonusItemMod(monster, dropItem) {
    var itemLevel = dropItem.iLvl;
    var itemLevelValue = 0;
    var currentMods = 0;
    var minMods = dropItem.minMods;
    var maxMods = dropItem.maxMods;
    var randomMod = 0;
    var newArray = [];
    if (itemLevel <= 10) {
        var itemModLevel = itemModifiers.level10;
    }
    else if (itemLevel <= 20) {
        var itemModLevel = itemModifiers.level20;
    }
    else if (itemLevel <= 30) {
        var itemModLevel = itemModifiers.level30;
    }
    var itemModLevelLength = itemModLevel.length;
    var randomModAmount = Math.floor(Math.random() * (maxMods - minMods + 1)) + minMods; //Random value between min/max(both inclusive !important)
    newArray = itemModLevel.slice(); // Copy an array so we can remove array values so we dont get double of the same bonus on the item
    dropItem['Value'] = 0;
    for (var i = 0; i < itemModLevelLength; i++) {
        randomMod = newArray[Math.floor(Math.random() * (newArray.length))]; // picks a random bonus
        if (currentMods < randomModAmount) {
            if (randomMod.type === "Life gain on hit" && dropItem.itemType === "weapon") {
                var randomModValue = Math.floor(Math.random() * (randomMod.maxValue - randomMod.minValue + 1)) + randomMod.minValue;
                dropItem[randomMod.type] = randomModValue;
                dropItem.Value += randomMod.baseValue * randomModValue;
                var arrayIndex = newArray.indexOf(randomMod); // Find out an index of our randomMod, so we can remove it( we dont want to get it multiple times...
                newArray.splice(arrayIndex, 1) // Remove an itemMod from copied array...
                currentMods += 1;
            }
            else if (randomMod.type === "Critical chance" || randomMod.type === "Critical Damage" && dropItem.itemType === "weapon") {
                var randomModValue = Math.floor(Math.random() * (randomMod.maxValue - randomMod.minValue + 1)) + randomMod.minValue;
                dropItem[randomMod.type] = randomModValue;
                dropItem.Value += randomMod.baseValue * randomModValue;
                var arrayIndex = newArray.indexOf(randomMod); // Find out an index of our randomMod, so we can remove it( we dont want to get it multiple times...
                newArray.splice(arrayIndex, 1) // Remove an itemMod from copied array...
                currentMods += 1;
            }
            else if (randomMod.type === "Bonus damage" && dropItem.itemType === "weapon") {
                var randomModValue = Math.floor(Math.random() * (randomMod.maxValue - randomMod.minValue + 1)) + randomMod.minValue;
                dropItem[randomMod.type] = randomModValue + "%"
                dropItem.Value += randomMod.baseValue * randomModValue;
                dropItem.MinDamage = Math.floor(dropItem.MinDamage + (dropItem.MinDamage * randomModValue / 100));
                dropItem.MaxDamage = Math.floor(dropItem.MaxDamage + (dropItem.MaxDamage * randomModValue / 100));
                var arrayIndex = newArray.indexOf(randomMod); // Find out an index of our randomMod, so we can remove it( we dont want to get it multiple times...
                newArray.splice(arrayIndex, 1) // Remove an itemMod from copied array...
                currentMods += 1;
            }
            else if (randomMod.type === "Block chance" && dropItem.subType === "shield" && dropItem.itemType === "armor") {
                var randomModValue = Math.floor(Math.random() * (randomMod.maxValue - randomMod.minValue + 1)) + randomMod.minValue;
                dropItem[randomMod.type] = randomModValue;
                dropItem.Value += randomMod.baseValue * randomModValue;
                dropItem['Block amount'] = randomModValue * 5;
                var arrayIndex = newArray.indexOf(randomMod); // Find out an index of our randomMod, so we can remove it( we dont want to get it multiple times...
                newArray.splice(arrayIndex, 1) // Remove an itemMod from copied array...
                currentMods += 1;
            }
            else if (randomMod.type === "Bonus armor" && dropItem.itemType === "armor") {
                var randomModValue = Math.floor(Math.random() * (randomMod.maxValue - randomMod.minValue + 1)) + randomMod.minValue;
                dropItem[randomMod.type] = randomModValue;
                dropItem.Value += randomMod.baseValue * randomModValue;
                dropItem.defense += randomModValue;
                var arrayIndex = newArray.indexOf(randomMod); // Find out an index of our randomMod, so we can remove it( we dont want to get it multiple times...
                newArray.splice(arrayIndex, 1) // Remove an itemMod from copied array...
                currentMods += 1;
            }
            else if (randomMod.type !== "Block chance" && randomMod.type !== "Bonus damage" && randomMod.type !== "Bonus armor" && randomMod.type !== "Life gain on hit" && randomMod.type !== "Critical chance" && randomMod.type !== "Critical damage") {
                var randomModValue = Math.floor(Math.random() * (randomMod.maxValue - randomMod.minValue + 1)) + randomMod.minValue;
                dropItem[randomMod.type] = randomModValue;
                dropItem.Value += randomMod.baseValue * randomModValue;
                var arrayIndex = newArray.indexOf(randomMod); // Find out an index of our randomMod, so we can remove it( we dont want to get it multiple times...
                newArray.splice(arrayIndex, 1) // Remove an itemMod from copied array...
                currentMods += 1;
            }
            else {
                dropItem[randomMod.type] = 0;
                if (dropItem["Block chance"] === undefined) {
                    dropItem["Block chance"] = 0;
                    dropItem['Block amount'] = 0;
                }
                dropItem["Block chance"] += 0;
                dropItem['Block amount'] += 0;
                var arrayIndex = newArray.indexOf(randomMod); // Find out an index of our randomMod, so we can remove it( we dont want to get it multiple times...
                newArray.splice(arrayIndex, 1) // Remove an itemMod from copied array...
                currentMods += 1;
            }

        }
        else {
            dropItem[randomMod.type] = 0;
            if (dropItem["Block chance"] === undefined) {
                dropItem["Block chance"] = 0;
                dropItem['Block amount'] = 0;
            }
            dropItem["Block chance"] += 0;
            dropItem['Block amount'] += 0;
            var arrayIndex = newArray.indexOf(randomMod); // Find out an index of our randomMod, so we can remove it( we dont want to get it multiple times...
            newArray.splice(arrayIndex, 1) // Remove an itemMod from copied array...
            currentMods += 1;
        }
    };
    if (dropItem.itemQuality === 'Common' && checkBoxCommon === false ||
                        dropItem.itemQuality === 'Uncommon' && checkBoxUncommon === false ||
                        dropItem.itemQuality === 'Rare' && checkBoxRare === false ||
                        dropItem.itemQuality === 'Epic' && checkBoxEpic === false ||
                        dropItem.itemQuality === 'Legendary') {

        var itemHolder = [];
        itemHolder.push(dropItem);
        playerInventory.push.apply(
            playerInventory,
            JSON.parse(JSON.stringify(itemHolder))
            );
        player.properties.itemIdNumber += 1;
    }
    else {
        player.properties.gold += Math.floor(dropItem.Value * 0.2);
        updateHtml();
    };
};


/*function itemDropRandom(monster) {

    var monsterDrop = monster.Drops;
    var monsterStats = monster.Stats;

    var dropItem;
    var chance = 0;
    var monsterLength = monsterDrop.length;
    for (var i = 0; i < monsterLength; i++) {
        itemDropChance = monsterDrop[i].chance;
        var randomItemChance = Math.floor(Math.random() * (20000 - 1) + 1);
        if (randomItemChance <= (itemDropChance * player.functions.dropRate())) {
            var dropItem = monsterDrop[i].item;
            //test

            //Checks if player used checkbox to auto remove items by quality. Also this code add "id" property to each created item
                dropItem["id"] = player.properties.itemIdNumber;

                if (dropItem.baseStrength > 0) {
                    var returnNum = getNum((dropItem.iLvl) + (monsterStats.level), (dropItem.iLvl * 2) + (monsterStats.level * 2));
                    bonusStrength = dropItem.baseStrength;
                    dropItem["strength"] = returnNum + bonusStrength;
                }
                else {
                    dropItem["strength"] = 0;
                };
                if (dropItem.baseEndurance > 0) {
                    var returnNum = getNum((dropItem.iLvl) + (monsterStats.level), (dropItem.iLvl * 2) + (monsterStats.level * 2));
                    bonusEndurance = dropItem.baseEndurance;
                    dropItem["endurance"] = returnNum + bonusEndurance;
                }
                else {
                    dropItem["endurance"] = 0;
                };
                if (dropItem.baseAgility > 0) {
                    var returnNum = getNum((dropItem.iLvl) + (monsterStats.level), (dropItem.iLvl * 2) + (monsterStats.level * 2));
                    bonusAgility = dropItem.baseAgility;
                    dropItem["agility"] = returnNum + bonusAgility;
                }
                else {
                    dropItem["agility"] = 0;
                };
                if (dropItem.baseDexterity > 0) {
                    var returnNum = getNum((dropItem.iLvl) + (monsterStats.level), (dropItem.iLvl * 2) + (monsterStats.level * 2));
                    bonusDexterity = dropItem.baseDexterity;
                    dropItem["dexterity"] = returnNum + bonusDexterity;
                }
                else {
                    dropItem["dexterity"] = 0;
                };
                if (dropItem.baseWisdom > 0) {
                    var returnNum = getNum((dropItem.iLvl) + (monsterStats.level), (dropItem.iLvl * 2) + (monsterStats.level * 2));
                    bonusWisdom = dropItem.baseWisdom;
                    dropItem["wisdom"] = returnNum + bonusWisdom;
                }
                else {
                    dropItem["wisdom"] = 0;
                };
                if (dropItem.baseIntelligence > 0) {
                    var returnNum = getNum((dropItem.iLvl) + (monsterStats.level), (dropItem.iLvl * 2) + (monsterStats.level * 2));
                    bonusIntelligence = dropItem.baseIntelligence;
                    dropItem["intelligence"] = returnNum + bonusIntelligence;
                }
                else {
                    dropItem["intelligence"] = 0;
                };
                if (dropItem.baseLuck > 0) {
                    var returnNum = getNum((dropItem.iLvl) + (monsterStats.level), (dropItem.iLvl * 2) + (monsterStats.level * 2));
                    bonusLuck = dropItem.baseLuck;
                    dropItem["luck"] = returnNum + bonusLuck;
                }
                else {
                    dropItem["luck"] = 0;
                };
                if (dropItem.baseMinDamage > 0) {
                    var returnNum = getNum((dropItem.iLvl) + (monsterStats.level), (dropItem.iLvl * 2) + (monsterStats.level * 2));
                    bonusMinDamage = dropItem.baseMinDamage;
                    dropItem["minDamage"] = returnNum + bonusMinDamage;
                };
                if (dropItem.baseMaxDamage > 0) {
                    var returnNum = getNum((dropItem.iLvl * 2) + (monsterStats.level * 2), (dropItem.iLvl * 3) + (monsterStats.level * 3));
                    bonusMaxDamage = dropItem.baseMaxDamage;
                    dropItem["maxDamage"] = returnNum + bonusMaxDamage;
                };
                if (dropItem.baseDefense > 0) {
                    var returnNum = getNum((dropItem.iLvl) + (monsterStats.level), (dropItem.iLvl * 2) + (monsterStats.level * 2));
                    bonusDefense = dropItem.baseDefense;
                    dropItem["defense"] = returnNum + bonusDefense;
                }
                else {
                    dropItem["defense"] = 0;
                };

                 //Add item level up etc
                if (dropItem.itemQuality == "Common") {
                    var randomNumber = Math.floor((Math.random() * 100) + 1);
                    if (dropItem.itemType === "weapon") {
                        if (randomNumber >= 30) dropItem["materiaSlot_1"] = 'empty';
                        if (randomNumber >= 50) dropItem["materiaSlot_2"] = 'empty';
                        if (randomNumber >= 70) dropItem["materiaSlot_3"] = 'empty';
                    };
                    dropItem["level"] = 0;
                    dropItem["maxLevel"] = 5;
                    dropItem["exp"] = 0;
                    dropItem["maxExp"] = 10;
                    dropItem["power"] = 1; //This is used when item level up to determine stat gain, higher quality items give better bonuses.
                    if (dropItem.baseDropRate > 0) {
                        var returnNum = getNum((dropItem.iLvl) + (monsterStats.level), (dropItem.iLvl * 2) + (monsterStats.level * 2));
                        bonusDropRate = dropItem.baseDropRate;
                        dropItem["dropRate"] = returnNum + bonusDropRate;
                    }
                    else {
                        dropItem["dropRate"] = 0;
                    };
                    if (dropItem.baseExpRate > 0) {
                        var returnNum = getNum((dropItem.iLvl) + (monsterStats.level), (dropItem.iLvl * 2) + (monsterStats.level * 2));
                        bonusExpRate = dropItem.baseExpRate;
                        dropItem["expRate"] = returnNum + bonusExpRate;
                    }
                    else {
                        dropItem["expRate"] = 0;
                    };
                    if (dropItem.baseGoldRate > 0) {
                        var returnNum = getNum((dropItem.iLvl) + (monsterStats.level), (dropItem.iLvl * 2) + (monsterStats.level * 2));
                        bonusGoldRate = dropItem.baseGoldRate;
                        dropItem["goldRate"] = returnNum + bonusGoldRate;
                    }
                    else {
                        dropItem["goldRate"] = 0;
                    };
                };
                if (dropItem.itemQuality == "Uncommon") {
                    var randomNumber = Math.floor((Math.random() * 100) + 1);
                    if (dropItem.itemType === "weapon") {
                        if (randomNumber >= 25) dropItem["materiaSlot_1"] = 'empty';
                        if (randomNumber >= 40) dropItem["materiaSlot_2"] = 'empty';
                        if (randomNumber >= 60) dropItem["materiaSlot_3"] = 'empty';
                        if (randomNumber >= 80) dropItem["materiaSlot_4"] = 'empty';
                    };
                    dropItem["level"] = 0;
                    dropItem["maxLevel"] = 5;
                    dropItem["exp"] = 0;
                    dropItem["maxExp"] = 10;
                    dropItem["power"] = 2; //This is used when item level up to determine stat gain, higher quality items give better bonuses.
                    if (dropItem.baseDropRate > 0) {
                        var returnNum = getNum((dropItem.iLvl * 2) + (monsterStats.level * 2), (dropItem.iLvl * 3) + (monsterStats.level * 3));
                        bonusDropRate = dropItem.baseDropRate;
                        dropItem["dropRate"] = returnNum + bonusDropRate;
                    }
                    else {
                        dropItem["dropRate"] = 0;
                    };
                    if (dropItem.baseExpRate > 0) {
                        var returnNum = getNum((dropItem.iLvl * 2) + (monsterStats.level * 2), (dropItem.iLvl * 3) + (monsterStats.level * 3));
                        bonusExpRate = dropItem.baseExpRate;
                        dropItem["expRate"] = returnNum + bonusExpRate;
                    }
                    else {
                        dropItem["expRate"] = 0;
                    };
                    if (dropItem.baseGoldRate > 0) {
                        var returnNum = getNum((dropItem.iLvl * 2) + (monsterStats.level * 2), (dropItem.iLvl * 3) + (monsterStats.level * 3));
                        bonusGoldRate = dropItem.baseGoldRate;
                        dropItem["goldRate"] = returnNum + bonusGoldRate;
                    }
                    else {
                        dropItem["goldRate"] = 0;
                    };
                };
                if (dropItem.itemQuality == "Rare") {
                    var randomNumber = Math.floor((Math.random() * 100) + 1);
                    if (dropItem.itemType === "weapon") {
                        if (randomNumber >= 20) dropItem["materiaSlot_1"] = 'empty';
                        if (randomNumber >= 35) dropItem["materiaSlot_2"] = 'empty';
                        if (randomNumber >= 50) dropItem["materiaSlot_3"] = 'empty';
                        if (randomNumber >= 70) dropItem["materiaSlot_4"] = 'empty';
                        if (randomNumber >= 90) dropItem["materiaSlot_5"] = 'empty';
                    };
                    dropItem["level"] = 0;
                    dropItem["maxLevel"] = 5;
                    dropItem["exp"] = 0;
                    dropItem["maxExp"] = 10;
                    dropItem["power"] = 3; //This is used when item level up to determine stat gain, higher quality items give better bonuses.
                    if (dropItem.baseDropRate > 0) {
                        var returnNum = getNum((dropItem.iLvl * 3) + (monsterStats.level * 3), (dropItem.iLvl * 4) + (monsterStats.level * 4));
                        bonusDropRate = dropItem.baseDropRate;
                        dropItem["dropRate"] = returnNum + bonusDropRate;
                    }
                    else {
                        dropItem["dropRate"] = 0;
                    };
                    if (dropItem.baseExpRate > 0) {
                        var returnNum = getNum((dropItem.iLvl * 3) + (monsterStats.level * 3), (dropItem.iLvl * 4) + (monsterStats.level * 4));
                        bonusExpRate = dropItem.baseExpRate;
                        dropItem["expRate"] = returnNum + bonusExpRate;
                    }
                    else {
                        dropItem["expRate"] = 0;
                    };
                    if (dropItem.baseGoldRate > 0) {
                        var returnNum = getNum((dropItem.iLvl * 3) + (monsterStats.level * 3), (dropItem.iLvl * 4) + (monsterStats.level * 4));
                        bonusGoldRate = dropItem.baseGoldRate;
                        dropItem["goldRate"] = returnNum + bonusGoldRate;
                    }
                    else {
                        dropItem["goldRate"] = 0;
                    };
                };
                if (dropItem.itemQuality == "Epic") {
                    var randomNumber = Math.floor((Math.random() * 100) + 1);
                    if (dropItem.itemType === "weapon") {
                        if (randomNumber >= 10) dropItem["materiaSlot_1"] = 'empty';
                        if (randomNumber >= 20) dropItem["materiaSlot_2"] = 'empty';
                        if (randomNumber >= 40) dropItem["materiaSlot_3"] = 'empty';
                        if (randomNumber >= 60) dropItem["materiaSlot_4"] = 'empty';
                        if (randomNumber >= 85) dropItem["materiaSlot_5"] = 'empty';
                    };
                    dropItem["level"] = 0;
                    dropItem["maxLevel"] = 5;
                    dropItem["exp"] = 0;
                    dropItem["maxExp"] = 10;
                    dropItem["power"] = 4; //This is used when item level up to determine stat gain, higher quality items give better bonuses.
                    if (dropItem.baseDropRate > 0) {
                        var returnNum = getNum((dropItem.iLvl * 4) + (monsterStats.level * 4), (dropItem.iLvl * 5) + (monsterStats.level * 5));
                        bonusDropRate = dropItem.baseDropRate;
                        dropItem["dropRate"] = returnNum + bonusDropRate;
                    }
                    else {
                        dropItem["dropRate"] = 0;
                    };
                    if (dropItem.baseExpRate > 0) {
                        var returnNum = getNum((dropItem.iLvl * 4) + (monsterStats.level * 4), (dropItem.iLvl * 5) + (monsterStats.level * 5));
                        bonusExpRate = dropItem.baseExpRate;
                        dropItem["expRate"] = returnNum + bonusExpRate;
                    }
                    else {
                        dropItem["expRate"] = 0;
                    };
                    if (dropItem.baseGoldRate > 0) {
                        var returnNum = getNum((dropItem.iLvl * 4) + (monsterStats.level * 4), (dropItem.iLvl * 5) + (monsterStats.level * 5));
                        bonusGoldRate = dropItem.baseGoldRate;
                        dropItem["goldRate"] = returnNum + bonusGoldRate;
                    }
                    else {
                        dropItem["goldRate"] = 0;
                    };
                };
                if (dropItem.itemQuality == "Legendary") {
                    var randomNumber = Math.floor((Math.random() * 100) + 1);
                    if (dropItem.itemType === "weapon") {
                        if (randomNumber >= 5) dropItem["materiaSlot_1"] = 'empty';
                        if (randomNumber >= 10) dropItem["materiaSlot_2"] = 'empty';
                        if (randomNumber >= 30) dropItem["materiaSlot_3"] = 'empty';
                        if (randomNumber >= 50) dropItem["materiaSlot_4"] = 'empty';
                        if (randomNumber >= 80) dropItem["materiaSlot_5"] = 'empty';
                    };
                    dropItem["level"] = 0;
                    dropItem["maxLevel"] = 5;
                    dropItem["exp"] = 0;
                    dropItem["maxExp"] = 10;
                    dropItem["power"] = 5; //This is used when item level up to determine stat gain, higher quality items give better bonuses.
                    if (dropItem.baseDropRate > 0) {
                        var returnNum = getNum((dropItem.iLvl * 5) + (monsterStats.level * 5), (dropItem.iLvl * 6) + (monsterStats.level * 6));
                        bonusDropRate = dropItem.baseDropRate;
                        dropItem["dropRate"] = returnNum + bonusDropRate;
                    }
                    else {
                        dropItem["dropRate"] = 0;
                    };
                    if (dropItem.baseExpRate > 0) {
                        var returnNum = getNum((dropItem.iLvl * 5) + (monsterStats.level * 5), (dropItem.iLvl * 6) + (monsterStats.level * 6));
                        bonusExpRate = dropItem.baseExpRate;
                        dropItem["expRate"] = returnNum + bonusExpRate;
                    }
                    else {
                        dropItem["expRate"] = 0;
                    };
                    if (dropItem.baseGoldRate > 0) {
                        var returnNum = getNum((dropItem.iLvl * 5) + (monsterStats.level * 5), (dropItem.iLvl * 6) + (monsterStats.level * 6));
                        bonusGoldRate = dropItem.baseGoldRate;
                        dropItem["goldRate"] = returnNum + bonusGoldRate;
                    }
                    else {
                        dropItem["goldRate"] = 0;
                    };
                };
                dropItem["value"] = getItemValue(dropItem); //Get item value function.
                if (dropItem.itemQuality === 'Common' && checkBoxCommon === false ||
                    dropItem.itemQuality === 'Uncommon' && checkBoxUncommon === false ||
                    dropItem.itemQuality === 'Rare' && checkBoxRare === false ||
                    dropItem.itemQuality === 'Epic' && checkBoxEpic === false ||
                    dropItem.itemQuality === 'Legendary') {

                    var itemHolder = [];
                    itemHolder.push(dropItem);
                    playerInventory.push.apply(
                        playerInventory,
                        JSON.parse(JSON.stringify(itemHolder))
                        );
                    player.properties.itemIdNumber += 1;
                    Log("<span style=\"color:orange\">You found an item! <br /> </span>");
                }
                else {
                    player.properties.gold += Math.floor(dropItem.value * 0.2);
                    updateHtml();
                };
        };
    };
};*/
//Random number, higher number is less likely to happen, and lower number is more common
function getNum(min, max) // min inclusive, max exclusive
{
    var num = Math.random();
    num = 1 - Math.sin(num);
    return Math.round(num * (max - min) + min);
};

function getItemValue(dropItem) {
    return Math.floor(dropItem.strength * 2 + dropItem.endurance * 2 + dropItem.agility * 2 + dropItem.dexterity * 2 +
                      dropItem.wisdom * 2 + dropItem.intelligence * 2 + dropItem.luck * 2 + dropItem.defense * 2 +
                      dropItem.expRate * 0.5 + dropItem.goldRate * 0.5 + dropItem.dropRate * 0.5);
};

