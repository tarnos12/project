function monsterItemDrop(monster) {
    if (playerInventory.length <= player.inventory()) {

        itemDropRandom(monster);
        CreateInventoryWeaponHtml();
    }
};

function itemDropRandom(monster) {

    var monsterDrop = monster.Drops;
    var monsterStats = monster.Stats;

    var dropItem;
    var chance = 0;
    var monsterLength = monsterDrop.length;
    for (var i = 0; i < monsterLength; i++) {
        itemDropChance = monsterDrop[i].chance;
        var randomItemChance = Math.floor(Math.random() * (20000 - 1) + 1);
        if (randomItemChance <= (itemDropChance * player.dropRate())) {
            var dropItem = monsterDrop[i].item;
            //test

            //Checks if player used checkbox to auto remove items by quality. Also this code add "id" property to each created item
            if (dropItem.itemQuality === 'Common' && checkBoxCommon === false || dropItem.itemQuality === 'Uncommon' && checkBoxUncommon === false || dropItem.itemQuality === 'Rare' && checkBoxRare === false || dropItem.itemQuality === 'Epic' && checkBoxEpic === false || dropItem.itemQuality === 'Legendary') {
                dropItem["id"] = player.itemIdNumber;

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

                dropItem["value"] = (dropItem.strength * 2 + dropItem.endurance * 2 + dropItem.agility * 2 + dropItem.dexterity * 2 + dropItem.wisdom * 2 + dropItem.intelligence * 2 + dropItem.luck * 2 + dropItem.defense * 2);
                //Add item level up etc
                if (dropItem.itemQuality == "Common") {
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

                var itemHolder = [];
                itemHolder.push(dropItem);
                playerInventory.push.apply(
                    playerInventory,
                    JSON.parse(JSON.stringify(itemHolder))
                    );
                player.itemIdNumber += 1;
                Log("<span style=\"color:orange\">You found an item! </span>");
            };
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

