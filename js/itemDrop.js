"use strict";
function monsterItemDrop(itemLevel) {
    var itemDropNumber = 0;
        var randomItemChance = Math.floor(Math.random() * (1000 - 1) + 1);
        if (randomItemChance * player.functions.dropRate() >= 500) {
            if (playerInventory.length <= player.functions.inventory()) {
                getNewItem(itemLevel, true); // Call getItemType(monster); several times, for multiple item drop per monster kill/ random amount of items per kill...
                itemDropNumber += 1; 
                Log('<span id=\"itemDropNew\" class =\"bold\" style=\"color:orange; display:none;\">You found ' + (itemDropNumber) + " items! <br />" + "</span>");
                itemDropLog();
                var items = player.properties.newItems += 1;
                document.getElementById('newItems').innerHTML = (items < 0) ? '' : items;
            }
            else {
                Log('<span id=\"inventoryFull\" style=\"color:red;\">' + "Your inventory is full.<br />" + "</span>");
            }
        };
    CreateInventoryWeaponHtml();
};

function getNewItem(itemLevel, isDrop, craftItemType, craftItemSubType, craftItemQuality) {
    var dropItem = {};
    dropItem["iLvl"] = itemLevel;
    dropItem = getItemType(dropItem, craftItemType);
    dropItem = getItemSubType(dropItem, craftItemSubType);
    dropItem = getItemRarity(dropItem, craftItemQuality);
    dropItem = getItemPower(dropItem);
    dropItem = getItemBaseStats(dropItem, craftItemQuality);
    dropItem = getBaseItemMod(dropItem);
    getBonusItemMod(dropItem, isDrop);
};

function getItemType(dropItem, craftItemType) { //isDrop will check if generated item is monster drop or item sold in shop/crafted
    var totalChance = 0;
    var randomNumber = 0;
    var itemChanceTotal = itemTypes[itemTypes.length - 1]; // Gets the value "chance" of last index in my object array. I wont need to edit functions in the future if I add more stuff.
    if (craftItemType !== undefined) {
            dropItem['isCrafted'] = true;
    };
    totalChance = itemChanceTotal.chance;
    randomNumber = Math.floor(Math.random() * (totalChance - 1) + 1);
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
    return dropItem;
};

function getItemSubType(dropItem, craftitemSubType) {
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
            for (var i = 0; i < itemWeaponSubType.length; i++) {
                if (itemWeaponSubType[i].type === craftitemSubType) {
                    dropItem["subType"] = itemWeaponSubType[i].type;
                    randomLoreArray = itemWeaponSubType[i].lore;
                    randomLore = randomLoreArray[Math.floor(Math.random() * (randomLoreArray.length))];
                    dropItem["lore"] = randomLore.text;
                    break;
                };
            };
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
        };
    }
    else if (dropItem.itemType === "armor") {
        if (dropItem.isCrafted === true) {
            for (var i = 0; i < itemArmorSubType.length; i++) {
                if (itemArmorSubType[i].type === craftitemSubType) {
                    dropItem["subType"] = itemArmorSubType[i].type;
                    randomLoreArray = itemArmorSubType[i].lore;
                    randomLore = randomLoreArray[Math.floor(Math.random() * (randomLoreArray.length))];
                    dropItem["lore"] = randomLore.text;
                    break;
                };
            };
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
            for (var i = 0; i < itemAccessorySubType.length; i++) {
                if (itemAccessorySubType[i].type === craftitemSubType) {
                    dropItem["subType"] = itemAccessorySubType[i].type;
                    randomLoreArray = itemAccessorySubType[i].lore;
                    randomLore = randomLoreArray[Math.floor(Math.random() * (randomLoreArray.length))];
                    dropItem["lore"] = randomLore.text;
                    break;
                };
            };
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
    return dropItem;
};

function getItemRarity(dropItem, craftItemQuality) {
    var totalChance = 0;
    var randomNumber = 0;
    var itemRarityArray = 1;
    if (craftItemQuality === 'Beginner') {
        itemRarityArray = 1
    }
    else if (craftItemQuality === 'Intermediate') {
        itemRarityArray = 2
    }
    else if (craftItemQuality === 'Master') {
        itemRarityArray = 3
    }
    var itemChanceTotal = itemRarity[itemRarity.length - itemRarityArray]; // last array element
    totalChance = itemChanceTotal.chance;
    randomNumber = Math.floor(Math.random() * (totalChance - 1) + 1);
    for (var itemType in itemRarity) {
        var itemChance = itemRarity[itemType].chance;
        var itemType2 = itemRarity[itemType];
        var itemColor = itemRarity[itemType].color;
        var rarityValue = itemRarity[itemType].rarityValue;
        if (randomNumber <= itemChance) {
            if (craftItemQuality === "Common") {
                dropItem["itemRarity"] = "Common";
            }
            else {
                dropItem["itemRarity"] = itemType2.type;
            }
            dropItem["minMods"] = itemType2.minMods;
            dropItem["maxMods"] = itemType2.maxMods;
            dropItem["image"] = dropItem.subType + dropItem.itemRarity;
            dropItem["color"] = itemColor;
            dropItem["power"] = itemType2.power;
            dropItem["rarityValue"] = rarityValue;
            break;
        };
    };
    return dropItem;
};

function getItemPower(dropItem) {
    var craftedBonus = 1;
    for (var key in itemPower) {
        if (itemPower.hasOwnProperty(key)) {
            var randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
            var itemPowerChance = itemPower[key].chance;
            var itemPowerType = itemPower[key].type;
            if (randomNumber <= itemPowerChance) {
                if (itemPowerType === "Inferior") {
                    dropItem["itemQuality"] = itemPowerType;
                    craftedBonus = 0.8;
                    dropItem.power += 0.3;
                } else if (itemPowerType === "Normal") {
                    craftedBonus = 1;
                    dropItem.power += 0.4;
                    dropItem["itemQuality"] = itemPowerType;
                } else if (itemPowerType === "Superior") {
                    dropItem["itemQuality"] = itemPowerType;
                    craftedBonus = 1.2
                    dropItem.power += 0.5;
                };
                dropItem.power += craftedBonus;
                break; //Break here so it will stop once it rolls an item quality...
            };
        };
    };
    return dropItem;
};

function getItemBaseStats(dropItem, craftItemQuality) {
    dropItem['name'] = "";
    if (dropItem.isCrafted === true) {
        if (craftItemQuality !== "Common") {
            dropItem.name = 'Crafted ';
            dropItem.color = '#FF00FF';
        };
    };
    var minDmg = (dropItem.iLvl) * dropItem.power;
    var maxDmg = Math.floor(dropItem.iLvl * 1.1 * dropItem.power);
    var randomNumber = 0;
    dropItem['Value'] = 0;
    if (dropItem.itemType === "weapon") {
        dropItem["MinDamage"] = minDmg;
        dropItem["MaxDamage"] = maxDmg;
        dropItem.Value += Math.floor((dropItem.MinDamage + dropItem.MaxDamage) * 5);
    }
    else if (dropItem.itemType === "armor") {
        var minDefense = 5 + (dropItem.iLvl * 0.3);
        var maxDefense = 10 + (dropItem.iLvl * 0.7);
        randomNumber = Math.floor((Math.random() * (maxDefense - minDefense + 1)) + minDefense);
        dropItem["defense"] = randomNumber;
        dropItem.Value += Math.floor(dropItem.defense * 10);
    };
    if (dropItem.itemQuality !== "Normal") {
        dropItem.name += dropItem.itemQuality + ' ' + dropItem.itemRarity + ' ' + dropItem.subType.capitalizeFirstLetter();
    }
    else {
        dropItem.name += dropItem.itemRarity + ' ' + dropItem.subType.capitalizeFirstLetter();
    };
    return dropItem;
};

function getBaseItemMod(dropItem) {
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
    return dropItem;
};

function getBonusItemMod(dropItem, isDrop) {
    var itemLevel = dropItem.iLvl;
    var itemLevelValue = 0;
    var currentMods = 0;
    var minMods = dropItem.minMods;
    var maxMods = dropItem.maxMods;
    var randomMod = 0;
    var newArray = [];
    var itemModLevel = itemModifiers.modifier;
    var randomModValue = 0;
    var arrayIndex = 0;
    if (dropItem.subType === "shield" || dropItem.itemType === "weapon") {
        var number = getNumberMultiplierofFive(itemLevel);
        dropItem.image += number;
    };
    var itemModLevelLength = itemModLevel.length;
    var randomModAmount = Math.floor(Math.random() * (maxMods - minMods + 1)) + minMods; //Random value between min/max(both inclusive !important)
    newArray = itemModLevel.slice(); // Copy an array so we can remove array values so we dont get double of the same bonus on the item
    for (var i = 0; i < itemModLevelLength; i++) {
        randomMod = newArray[Math.floor(Math.random() * (newArray.length))]; // picks a random bonus
        if (currentMods < randomModAmount) {
            if (randomMod.type === "Life gain on hit" && dropItem.itemType === "weapon" ||
                randomMod.type !== "Bonus damage" && randomMod.type !== "Bonus armor" && randomMod.type !== "Life gain on hit") {
                // !== bonus damage/armor etc. so it won't be rolled on accessories/armor/weapon
                randomModValue = Math.floor(Math.random() * ((randomMod.maxValue * dropItem.iLvl) - (randomMod.minValue * dropItem.iLvl * 0.5) + 1)) + (randomMod.minValue * dropItem.iLvl * 0.5);
                dropItem[randomMod.type] = randomModValue;
                dropItem.Value += Math.floor(randomMod.baseValue * randomModValue);
                arrayIndex = newArray.indexOf(randomMod); // Find out an index of our randomMod, so we can remove it( we dont want to get it multiple times...
                newArray.splice(arrayIndex, 1) // Remove an itemMod from copied array...
                currentMods += 1;
            }
            else if (randomMod.type === "Bonus damage" && dropItem.itemType === "weapon") {
                randomModValue = Math.floor(Math.random() * (randomMod.maxValue - randomMod.minValue + 1)) + randomMod.minValue;
                dropItem[randomMod.type] = randomModValue + dropItem.iLvl;
                if (dropItem[randomMod.type] >= 1000) {
                    dropItem[randomMod.type] = 1000;
                };
                dropItem.Value += Math.floor(randomMod.baseValue * randomModValue);
                dropItem.MinDamage = Math.floor(dropItem.MinDamage + (dropItem.MinDamage * randomModValue / 100));
                dropItem.MaxDamage = Math.floor(dropItem.MaxDamage + (dropItem.MaxDamage * randomModValue / 100));
                arrayIndex = newArray.indexOf(randomMod); // Find out an index of our randomMod, so we can remove it( we dont want to get it multiple times...
                newArray.splice(arrayIndex, 1) // Remove an itemMod from copied array...
                currentMods += 1;
            }
            else if (randomMod.type === "Bonus armor" && dropItem.itemType === "armor") {
                randomModValue = Math.floor(Math.random() * (randomMod.maxValue - randomMod.minValue + 1)) + randomMod.minValue;
                dropItem[randomMod.type] = randomModValue + dropItem.iLvl;
                dropItem.Value += Math.floor(randomMod.baseValue * randomModValue);
                dropItem.defense *= (1 +(randomModValue / 100));
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
        dropItem['Block chance'] = Math.floor(10 + ((dropItem.power + dropItem.rarityValue) / 2) + (dropItem.iLvl / 20));
        dropItem['Block amount'] = ((30 + (dropItem.power + dropItem.rarityValue) * 5 + (dropItem.iLvl * 2)));
        if (dropItem['Block chance'] >= 40) {
            dropItem['Block chance'] = 40;
        };
        dropItem.Value += Math.floor(((dropItem['Block chance'] * 5 + dropItem['Block amount'] * 5)));
    };
    if (dropItem.itemType === 'weapon') {
        var criticalValue = dropItem.power;
        var weaponBonusDamage = 1;
        if (dropItem.subType === 'axe') {
            weaponBonusDamage = 1.4;
            var axeCrit = Math.floor(Math.random() * (15 - 10 + 1) + 10); // Crit 10-15%
            dropItem['Critical chance'] = Math.floor(criticalValue + axeCrit + (dropItem.iLvl / 5));
        }
        else if (dropItem.subType === 'ranged') {
            weaponBonusDamage = 1.2;
            var rangedCrit = Math.floor(Math.random() * (10 - 5 + 1) + 5); // Crit 5-10%
            dropItem['Critical chance'] = Math.floor(criticalValue + rangedCrit + (dropItem.iLvl / 5));
        }
        else if (dropItem.subType === 'sword') {
            weaponBonusDamage = 1;
            var swordCrit = Math.floor(Math.random() * (10 - 5 + 1) + 5); // Crit 5-10%
            dropItem['Critical chance'] = Math.floor(criticalValue + swordCrit + (dropItem.iLvl / 5));
        }
        else if (dropItem.subType === 'mace') {
            weaponBonusDamage = 0.8;
            var maceCrit = Math.floor(Math.random() * (5 - 1 + 1) + 1); // Crit 5-10%
            dropItem['Critical chance'] = Math.floor(criticalValue + maceCrit + (dropItem.iLvl / 5));
        }
        else if (dropItem.subType === 'staff') {
            weaponBonusDamage = 0.6;
            var staffCrit = Math.floor(Math.random() * (5 - 1 + 1) + 1); // Crit 1-5%
            dropItem['Critical chance'] = Math.floor(criticalValue + staffCrit + (dropItem.iLvl / 5));
        }
        dropItem.MinDamage = Math.floor(1 + (dropItem.MinDamage * weaponBonusDamage));
        dropItem.MaxDamage = Math.floor(2 + (dropItem.MaxDamage * weaponBonusDamage));
        dropItem['AverageDamage'] = ((dropItem.MinDamage + dropItem.MaxDamage) / 2);
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
                        dropItem["shopPrice"] = Math.floor(dropItem.Value * 10);
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
                        dropItem["shopPrice"] = Math.floor(dropItem.Value * 10);
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
                        dropItem["shopPrice"] = Math.floor(dropItem.Value * 10);
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
        };
    };
};

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

