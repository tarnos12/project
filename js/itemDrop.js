"use strict";
function monsterItemDrop(monster) {
    var itemDropNumber = 0;
    var randomItemAmount = Math.floor(Math.random() * 3) + 1; // 1-5 item drop per monster kill
    for (var i = 0; i < randomItemAmount; i++) {
        var randomItemChance = Math.floor(Math.random() * (1000 - 1) + 1);
        if (randomItemChance * player.functions.dropRate() >= 500) {
            if (playerInventory.length <= player.functions.inventory()) {
                getItemType(monster, true); // Call getItemType(monster); several times, for multiple item drop per monster kill/ random amount of items per kill...
                itemDropNumber += 1;
            }
            else {
                Log('<span id=\"inventoryFull\" style=\"color:red;\">' + "Your inventory is full.<br />" + "</span>");
            }
        };
    };
    Log('<span id=\"itemDropNew\" class =\"bold\" style=\"color:orange; display:none;\">You found ' + (itemDropNumber) + " items! <br />" + "</span>");
   
    itemDropLog();
    CreateInventoryWeaponHtml();
};

function getItemType(monster, isDrop, craftItemType, craftitemSubType, craftitemLevel, craftItemRarity) { //isDrop will check if generated item is monster drop or item sold in shop/crafted
    var monsterStats = monster;
    var dropItem = {};
    var totalChance = 0;
    var randomNumber = 0;
    var itemLevel = 0;
    var itemChanceTotal = itemTypes[itemTypes.length - 1]; // Gets the value "chance" of last index in my object array. I wont need to edit functions in the future if I add more stuff.
    if (craftItemType !== undefined) {
        dropItem['isCrafted'] = true;
    }
    totalChance = itemChanceTotal.chance;
    randomNumber = Math.floor(Math.random() * (totalChance - 1) + 1);
    if (monsterStats <= 10) {
        itemLevel = Math.floor(Math.random() * (monsterStats - 1 + 1)) + 1; // Get itemLevel based on monster, 1-10
    }
    else {
        var monsterMinLevel = monsterStats - 5;
        itemLevel = Math.floor(Math.random() * (monsterStats - monsterMinLevel + 1)) + monsterMinLevel; // get itemLevel based on monster level / 2 and monster level.
    };
    if (craftitemLevel !== undefined) {
        dropItem["iLvl"] = craftitemLevel;
    }
    else {
        dropItem["iLvl"] = itemLevel;
    }
    dropItem["id"] = player.properties.itemIdNumber;
    if (craftItemType === undefined) {
        for (var itemType in itemTypes) {
            if (itemTypes.hasOwnProperty(itemType)) {
                var itemChance = itemTypes[itemType].chance; // Get item type: weapon/armor/accessory/ other in the future...
                var dropItemType = itemTypes[itemType].type;
                if (randomNumber <= itemChance) {
                    dropItem["itemType"] = dropItemType;
                    break;
                };
            };
        };
    }
    else {
        dropItem["itemType"] = craftItemType;
    };
    getItemSubType(monster, dropItem, isDrop, craftitemSubType, craftItemRarity);
};

function getItemSubType(monster, dropItem, isDrop, craftitemSubType, craftItemRarity) {
    var totalChance = 0;
    var randomNumber = 0;
    var itemChanceTotal = "";
    var itemType = "";
    var itemChance = 0;
    var itemType2 = "";
    var randomLoreArray = "";
    var randomLore = "";
    if (dropItem.itemType === "weapon") {
        if (dropItem.isCrafted === true) {
            dropItem["subType"] = itemWeaponSubType[craftitemSubType].type;
            randomLoreArray = itemWeaponSubType[craftitemSubType].lore;
            randomLore = randomLoreArray[Math.floor(Math.random() * (randomLoreArray.length))];
            dropItem["lore"] = randomLore.text;
        }
        else {
            itemChanceTotal = itemWeaponSubType[itemWeaponSubType.length - 1];
            totalChance = itemChanceTotal.chance;
            randomNumber = Math.floor(Math.random() * (totalChance - 1) + 1);
            for (itemType in itemWeaponSubType) {
                if (itemWeaponSubType.hasOwnProperty(itemType)) {
                    itemChance = itemWeaponSubType[itemType].chance;
                    itemType2 = itemWeaponSubType[itemType].type;
                    if (randomNumber <= itemChance) {
                        randomLoreArray = itemWeaponSubType[itemType].lore;
                        randomLore = randomLoreArray[Math.floor(Math.random() * (randomLoreArray.length))];
                        dropItem["lore"] = randomLore.text;
                        dropItem["subType"] = itemType2;
                        break;
                    };
                };
            };
        }
    }
    else if (dropItem.itemType === "armor") {
        if (dropItem.isCrafted === true) {
            dropItem["subType"] = itemArmorSubType[craftitemSubType].type;
            randomLoreArray = itemArmorSubType[craftitemSubType].lore;
            randomLore = randomLoreArray[Math.floor(Math.random() * (randomLoreArray.length))];
            dropItem["lore"] = randomLore.text;
        }
        else {
            itemChanceTotal = itemArmorSubType[itemArmorSubType.length - 1];
            totalChance = itemChanceTotal.chance;
            randomNumber = Math.floor(Math.random() * (totalChance - 1) + 1);
            for (itemType in itemArmorSubType) {
                if (itemArmorSubType.hasOwnProperty(itemType)) {
                    itemChance = itemArmorSubType[itemType].chance;
                    itemType2 = itemArmorSubType[itemType].type;
                    if (randomNumber <= itemChance) {
                        randomLoreArray = itemArmorSubType[itemType].lore;
                        randomLore = randomLoreArray[Math.floor(Math.random() * (randomLoreArray.length))];
                        dropItem["lore"] = randomLore.text;
                        dropItem["subType"] = itemType2;
                        break;
                    };
                };
            };
        };
    }
    else if (dropItem.itemType === "accessory") {
        if (dropItem.isCrafted === true) {
            dropItem["subType"] = itemAccessorySubType[craftitemSubType].type;
            randomLoreArray = itemAccessorySubType[craftitemSubType].lore;
            randomLore = randomLoreArray[Math.floor(Math.random() * (randomLoreArray.length))];
            dropItem["lore"] = randomLore.text;
        }
        else {
            itemChanceTotal = itemAccessorySubType[itemAccessorySubType.length - 1];
            totalChance = itemChanceTotal.chance;
            randomNumber = Math.floor(Math.random() * (totalChance - 1) + 1);
            for (itemType in itemAccessorySubType) {
                if (itemAccessorySubType.hasOwnProperty(itemType)) {
                    itemChance = itemAccessorySubType[itemType].chance;
                    itemType2 = itemAccessorySubType[itemType].type;
                    if (randomNumber <= itemChance) {
                        randomLoreArray = itemAccessorySubType[itemType].lore;
                        randomLore = randomLoreArray[Math.floor(Math.random() * (randomLoreArray.length))];
                        dropItem["lore"] = randomLore.text;
                        dropItem["subType"] = itemType2;
                        break;
                    };
                };
            };
        };
    };
    getItemRarity(monster, dropItem, isDrop, craftItemRarity);
};

function getItemRarity(monster, dropItem, isDrop, craftItemRarity) {
    var totalChance = 0;
    var randomNumber = 0;
    var itemChanceTotal = itemRarity[itemRarity.length - 1]; // last array element
    if (craftItemRarity !== undefined) {
        itemChanceTotal = itemRarity[craftItemRarity]; //Based on crafter button you press, will pick an array position.
    };
    totalChance = itemChanceTotal.chance;
    randomNumber = Math.floor(Math.random() * (totalChance - 1) + 1);
    for (var itemType in itemRarity) {
        var itemChance = itemRarity[itemType].chance;
        var itemType2 = itemRarity[itemType];
        var itemColor = itemRarity[itemType].color;
        var rarityValue = itemRarity[itemType].rarityValue;
        if (randomNumber <= itemChance) {
            dropItem["itemRarity"] = itemType2.type;
            dropItem["minMods"] = itemType2.minMods;
            dropItem["maxMods"] = itemType2.maxMods;
            dropItem["image"] = dropItem.subType + dropItem.itemRarity;
            dropItem["color"] = itemColor;
            dropItem["power"] = itemType2.power;
            dropItem["rarityValue"] = rarityValue;
            break;
        };
    };
    getItemPower(monster, dropItem, isDrop);
};
function getItemPower(monster, dropItem, isDrop) {
    for (var key in itemPower) {
        if (itemPower.hasOwnProperty(key)) {
            var randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
            var itemPowerChance = itemPower[key].chance;
            var itemPowerType = itemPower[key].type;
            if (randomNumber <= itemPowerChance) {
                if (itemPowerType === "Inferior") {
                    dropItem["itemQuality"] = itemPowerType;
                } else if (itemPowerType === "Normal") {
                    dropItem.power += 1;
                    dropItem["itemQuality"] = itemPowerType;
                } else if (itemPowerType === "Superior") {
                    if (dropItem.itemRarity !== "Epic" && dropItem.itemRarity !== "Legendary") {
                        dropItem.power += 3;
                    } else if (dropItem.itemRarity === "Epic") {
                        dropItem.power += 4;
                    } else if (dropItem.itemRarity === "Legendary") {
                        dropItem.power += 5;
                    };
                    dropItem["itemQuality"] = itemPowerType;
                };
                break; //Break here so it will stop once it rolls an item quality...
            };
        };
    };
    getItemBaseStats(monster, dropItem, isDrop);
};

function getItemBaseStats(monster, dropItem, isDrop) {
    var minDmg = dropItem.iLvl * dropItem.power;
    var maxDmg = dropItem.iLvl * (dropItem.power * 2);
    var randomNumber = 0;
    dropItem['name'] = "";
    if (dropItem.isCrafted === true) {
        dropItem.name = 'Crafted ';
        dropItem.color = '#FF00FF';
    };
    dropItem['Value'] = 0;
    if (dropItem.itemType === "weapon") {
        randomNumber = Math.floor(Math.random() * (maxDmg - minDmg + 1)) + minDmg;
        dropItem["MinDamage"] = randomNumber;
        dropItem["MaxDamage"] = randomNumber + dropItem.iLvl;
        dropItem.Value += (dropItem.MinDamage + dropItem.MaxDamage) * 5;
    }
    else if (dropItem.itemType === "armor") {
        var minDefense = 5 + (dropItem.iLvl * 0.3);
        var maxDefense = 10 + (dropItem.iLvl * 0.7);
        randomNumber = Math.floor((Math.random() * (maxDefense - minDefense + 1)) + minDefense);
        dropItem["defense"] = randomNumber;
        dropItem.Value += dropItem.defense * 10;
    };
    if (dropItem.itemQuality !== "Normal"){
        dropItem.name += dropItem.itemQuality + ' ' + dropItem.itemRarity + ' ' + dropItem.subType.capitalizeFirstLetter();
        }
    else{
        dropItem.name += dropItem.itemRarity + ' ' + dropItem.subType.capitalizeFirstLetter();
    }
    getBaseItemMod(monster, dropItem, isDrop);
};

function getBaseItemMod(monster, dropItem, isDrop) {
    var totalChance = 0;
    var randomNumber = 0;
    var currentMods = 0;
    var randomMod;
    var newArray = [];
    var arrayIndex = 0;
    var modChance = 0;
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
    getBonusItemMod(monster, dropItem, isDrop);
};

function getBonusItemMod(monster, dropItem, isDrop) {
    var itemLevel = dropItem.iLvl;
    var itemLevelValue = 0;
    var currentMods = 0;
    var minMods = dropItem.minMods;
    var maxMods = dropItem.maxMods;
    var randomMod = 0;
    var newArray = [];
    var itemModLevel = 0;
    var randomModValue = 0;
    var arrayIndex = 0;
    if (dropItem.subType === "shield" || dropItem.itemType === "weapon") {
        if (itemLevel <= 4) {
            itemModLevel = itemModifiers.level10;
            dropItem.image += 1;
        }
        else if (itemLevel <= 9) {
            itemModLevel = itemModifiers.level10;
            dropItem.image += 5;
        }
        else if (itemLevel <= 14) {
            itemModLevel = itemModifiers.level20;
            dropItem.image += 10;
        }
        else if (itemLevel <= 19) {
            itemModLevel = itemModifiers.level20;
            dropItem.image += 15;
        }
        else if (itemLevel <= 24) {
            itemModLevel = itemModifiers.level30;
            dropItem.image += 20;
        }
        else if (itemLevel <= 29) {
            itemModLevel = itemModifiers.level30;
            dropItem.image += 25;
        }
        else if (itemLevel <= 34) {
            itemModLevel = itemModifiers.level40;
            dropItem.image += 30;
        }
        else if (itemLevel <= 39) {
            itemModLevel = itemModifiers.level40;
            dropItem.image += 35;
        }
        else if (itemLevel <= 44) {
            itemModLevel = itemModifiers.level50;
            dropItem.image += 40;
        }
        else if (itemLevel <= 49) {
            itemModLevel = itemModifiers.level50;
            dropItem.image += 45;
        }
        else if (itemLevel <= 54) {
            itemModLevel = itemModifiers.level50;
            dropItem.image += 50;
        }
        else if (itemLevel <= 59) {
            itemModLevel = itemModifiers.level50;
            dropItem.image += 55;
        }
        else if (itemLevel <= 64) {
            itemModLevel = itemModifiers.level50;
            dropItem.image += 60;
        }
        else if (itemLevel <= 69) {
            itemModLevel = itemModifiers.level50;
            dropItem.image += 65;
        }
        else if (itemLevel <= 74) {
            itemModLevel = itemModifiers.level50;
            dropItem.image += 70;
        }
        else if (itemLevel <= 79) {
            itemModLevel = itemModifiers.level50;
            dropItem.image += 75;
        }
        else if (itemLevel <= 84) {
            itemModLevel = itemModifiers.level50;
            dropItem.image += 80;
        }
        else if (itemLevel <= 89) {
            itemModLevel = itemModifiers.level50;
            dropItem.image += 85;
        }
        else if (itemLevel <= 94) {
            itemModLevel = itemModifiers.level50;
            dropItem.image += 90;
        }
        else if (itemLevel <= 99) {
            itemModLevel = itemModifiers.level50;
            dropItem.image += 95;
        }
        else if (itemLevel <= 104) {
            itemModLevel = itemModifiers.level50;
            dropItem.image += 100;
        }
        else {
            itemModLevel = itemModifiers.level50;
            dropItem.image += 100;
        };
    }
    else {
        if (itemLevel <= 10) {
            itemModLevel = itemModifiers.level10;
        }
        else if (itemLevel <= 20) {
            itemModLevel = itemModifiers.level20;
        }
        else if (itemLevel <= 30) {
            itemModLevel = itemModifiers.level30;
        }
        else if (itemLevel <= 40) {
            itemModLevel = itemModifiers.level40;
        }
        else if (itemLevel <= 50) {
            itemModLevel = itemModifiers.level50;
        }
        else if (itemLevel <= 60) {
            itemModLevel = itemModifiers.level50;
        }
        else if (itemLevel <= 70) {
            itemModLevel = itemModifiers.level50;
        }
        else {
            itemModLevel = itemModifiers.level50;
        };
    };
    var itemModLevelLength = itemModLevel.length;
    var randomModAmount = Math.floor(Math.random() * (maxMods - minMods + 1)) + minMods; //Random value between min/max(both inclusive !important)
    newArray = itemModLevel.slice(); // Copy an array so we can remove array values so we dont get double of the same bonus on the item
    for (var i = 0; i < itemModLevelLength; i++) {
        randomMod = newArray[Math.floor(Math.random() * (newArray.length))]; // picks a random bonus
        if (currentMods < randomModAmount) {
            if (randomMod.type === "Life gain on hit" && dropItem.itemType === "weapon") {
                randomModValue = Math.floor(Math.random() * (randomMod.maxValue - randomMod.minValue + 1)) + randomMod.minValue;
                dropItem[randomMod.type] = randomModValue;
                dropItem.Value += randomMod.baseValue * randomModValue;
                arrayIndex = newArray.indexOf(randomMod); // Find out an index of our randomMod, so we can remove it( we dont want to get it multiple times...
                newArray.splice(arrayIndex, 1) // Remove an itemMod from copied array...
                currentMods += 1;
            }
            else if (randomMod.type === "Critical Damage" && dropItem.itemType === "weapon") {
                randomModValue = Math.floor(Math.random() * (randomMod.maxValue - randomMod.minValue + 1)) + randomMod.minValue;
                dropItem[randomMod.type] = randomModValue;
                dropItem.Value += randomMod.baseValue * randomModValue;
                arrayIndex = newArray.indexOf(randomMod); // Find out an index of our randomMod, so we can remove it( we dont want to get it multiple times...
                newArray.splice(arrayIndex, 1) // Remove an itemMod from copied array...
                currentMods += 1;
            }
            else if (randomMod.type === "Bonus damage" && dropItem.itemType === "weapon") {
                randomModValue = Math.floor(Math.random() * (randomMod.maxValue - randomMod.minValue + 1)) + randomMod.minValue;
                dropItem[randomMod.type] = randomModValue;
                dropItem.Value += randomMod.baseValue * randomModValue;
                dropItem.MinDamage = Math.floor(dropItem.MinDamage + (dropItem.MinDamage * randomModValue / 100));
                dropItem.MaxDamage = Math.floor(dropItem.MaxDamage + (dropItem.MaxDamage * randomModValue / 100));
                arrayIndex = newArray.indexOf(randomMod); // Find out an index of our randomMod, so we can remove it( we dont want to get it multiple times...
                newArray.splice(arrayIndex, 1) // Remove an itemMod from copied array...
                currentMods += 1;
            }
            else if (randomMod.type === "Bonus armor" && dropItem.itemType === "armor") {
                randomModValue = Math.floor(Math.random() * (randomMod.maxValue - randomMod.minValue + 1)) + randomMod.minValue;
                dropItem[randomMod.type] = randomModValue;
                dropItem.Value += randomMod.baseValue * randomModValue;
                dropItem.defense *= (1 +(randomModValue / 100));
                arrayIndex = newArray.indexOf(randomMod); // Find out an index of our randomMod, so we can remove it( we dont want to get it multiple times...
                newArray.splice(arrayIndex, 1) // Remove an itemMod from copied array...
                currentMods += 1;
            }
            else if (randomMod.type !== "Bonus damage" && randomMod.type !== "Bonus armor" && randomMod.type !== "Life gain on hit" && randomMod.type !== "Critical damage") {
                randomModValue = Math.floor(Math.random() * (randomMod.maxValue - randomMod.minValue + 1)) + randomMod.minValue;
                dropItem[randomMod.type] = randomModValue;
                dropItem.Value += randomMod.baseValue * randomModValue;
                arrayIndex = newArray.indexOf(randomMod); // Find out an index of our randomMod, so we can remove it( we dont want to get it multiple times...
                newArray.splice(arrayIndex, 1) // Remove an itemMod from copied array...
                currentMods += 1;
            }
            else {
                dropItem[randomMod.type] = 0;
                arrayIndex = newArray.indexOf(randomMod); // Find out an index of our randomMod, so we can remove it( we dont want to get it multiple times...
                newArray.splice(arrayIndex, 1) // Remove an itemMod from copied array...
                currentMods += 1;
            }

        }
        else {
            dropItem[randomMod.type] = 0;
            arrayIndex = newArray.indexOf(randomMod); // Find out an index of our randomMod, so we can remove it( we dont want to get it multiple times...
            newArray.splice(arrayIndex, 1) // Remove an itemMod from copied array...
            currentMods += 1;
        }
    };
    if (dropItem.subType === "shield") {
        dropItem['Block chance'] = dropItem.power * dropItem.rarityValue;
        dropItem['Block amount'] = (dropItem.power * dropItem.rarityValue) * 5;
        dropItem.Value += (dropItem['Block chance'] * 5 + dropItem['Block amount'] * 5);
    };
    if (dropItem.itemType === 'weapon') {
        dropItem['AverageDamage'] = ((dropItem.MinDamage + dropItem.MaxDamage) / 2);
        var criticalValue = dropItem.power;
        if (dropItem.subType === 'axe') {
            var axeCrit = Math.floor(Math.random() * (15 - 10 + 1) + 10); // Crit 10-15%
            dropItem['Critical chance'] = Math.floor(criticalValue + axeCrit + (dropItem.iLvl / 5));
        }
        else if (dropItem.subType === 'ranged') {
            var rangedCrit = Math.floor(Math.random() * (10 - 5 + 1) + 5); // Crit 5-10%
            dropItem['Critical chance'] = Math.floor(criticalValue + rangedCrit + (dropItem.iLvl / 5));
        }
        else if (dropItem.subType === 'sword') {
            var swordCrit = Math.floor(Math.random() * (10 - 5 + 1) + 5); // Crit 5-10%
            dropItem['Critical chance'] = Math.floor(criticalValue + swordCrit + (dropItem.iLvl / 5));
        }
        else if (dropItem.subType === 'mace') {
            var maceCrit = Math.floor(Math.random() * (5 - 1 + 1) + 1); // Crit 5-10%
            dropItem['Critical chance'] = Math.floor(criticalValue + maceCrit + (dropItem.iLvl / 5));
        }
        else if (dropItem.subType === 'staff') {
            var staffCrit = Math.floor(Math.random() * (5 - 1 + 1) + 1); // Crit 1-5%
            dropItem['Critical chance'] = Math.floor(criticalValue + staffCrit + (dropItem.iLvl / 5));
        }
    }
    if (dropItem.Value > 0) {
        var itemHolder = [];
        if (dropItem.isCrafted === undefined) {
            if (isDrop === true) {
                if (dropItem.itemRarity === 'Common' && checkBoxCommon === false ||
                                    dropItem.itemRarity === 'Uncommon' && checkBoxUncommon === false ||
                                    dropItem.itemRarity === 'Rare' && checkBoxRare === false ||
                                    dropItem.itemRarity === 'Epic' && checkBoxEpic === false ||
                                    dropItem.itemRarity === 'Legendary') {

                    itemHolder = [];
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
            }
            else {
                if (accessoryAmount < 20 && dropItem.itemType === "accessory" ||
                    weaponAmount < 20 && dropItem.itemType === "weapon" ||
                    armorAmount < 20 && dropItem.itemType === "armor") {
                    if (dropItem.itemType === "accessory") {
                        accessoryAmount += 1;
                        dropItem["shopPrice"] = dropItem.Value * 10 * dropItem.power;
                        itemHolder = [];
                        itemHolder.push(dropItem);
                        itemShopAccessory.push.apply(
                            itemShopAccessory,
                            JSON.parse(JSON.stringify(itemHolder))
                            );
                        player.properties.itemIdNumber += 1;
                    }
                    else if (dropItem.itemType === "weapon") {
                        weaponAmount += 1;
                        dropItem["shopPrice"] = dropItem.Value * 10 * dropItem.power;
                        itemHolder = [];
                        itemHolder.push(dropItem);
                        itemShopWeapon.push.apply(
                            itemShopWeapon,
                            JSON.parse(JSON.stringify(itemHolder))
                            );
                        player.properties.itemIdNumber += 1;
                    }
                    else if (dropItem.itemType === "armor") {
                        armorAmount += 1;
                        dropItem["shopPrice"] = dropItem.Value * 10 * dropItem.power;
                        itemHolder = [];
                        itemHolder.push(dropItem);
                        itemShopArmor.push.apply(
                            itemShopArmor,
                            JSON.parse(JSON.stringify(itemHolder))
                            );
                        player.properties.itemIdNumber += 1;
                    };
                };
            };
        }
        else {
            itemHolder = [];
            itemHolder.push(dropItem);
            playerInventory.push.apply(
                playerInventory,
                JSON.parse(JSON.stringify(itemHolder))
                );
            player.properties.itemIdNumber += 1;
            CreateInventoryWeaponHtml();
        };
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

