function monsterItemDrop(monster) {
    if (playerInventory.length <= player.inventory()) {

        itemDropRandom(monster);
        CreateInventoryWeaponHtml()
    }
};

function itemDropRandom(monster) {

    var monsterDrop = monster.Drops;
    var monsterStats = monster.Stats;

    var dropItem;
    var chance = 0;
    for (var i = 0; i < monsterDrop.length; i++) {
        itemDropChance = monsterDrop[i].chance;
        var randomItemChance = Math.floor(Math.random() * (20000 - 1) + 1);
        if (randomItemChance <= (itemDropChance * player.dropRate())) {
            var dropItem = monsterDrop[i].item
            //test

            //Checks if player used checkbox to auto remove items by quality. Also this code add "id" property to each created item
            if (dropItem.itemQuality === 'Common' && checkBoxCommon === false || dropItem.itemQuality === 'Uncommon' && checkBoxUncommon === false || dropItem.itemQuality === 'Rare' && checkBoxRare === false || dropItem.itemQuality === 'Epic' && checkBoxEpic === false || dropItem.itemQuality === 'Legendary') {
                dropItem["id"] = player.itemIdNumber;

                if (dropItem.baseStrength > 0) {
                    var returnNum = getNum((dropItem.iLvl) + (monsterStats.level), (dropItem.iLvl * 3) + (monsterStats.level * 3))
                    bonusStrength = dropItem.baseStrength
                    dropItem["strength"] = returnNum + bonusStrength
                }
                else {
                    dropItem["strength"] = 0;
                }
                if (dropItem.baseEndurance > 0) {
                    var returnNum = getNum((dropItem.iLvl) + (monsterStats.level), (dropItem.iLvl * 3) + (monsterStats.level * 3))
                    bonusEndurance = dropItem.baseEndurance
                    dropItem["endurance"] = returnNum + bonusEndurance
                }
                else {
                    dropItem["endurance"] = 0;
                }
                if (dropItem.baseAgility > 0) {
                    var returnNum = getNum((dropItem.iLvl) + (monsterStats.level), (dropItem.iLvl * 3) + (monsterStats.level * 3))
                    bonusAgility = dropItem.baseAgility
                    dropItem["agility"] = returnNum + bonusAgility
                }
                else {
                    dropItem["agility"] = 0;
                }
                if (dropItem.baseDexterity > 0) {
                    var returnNum = getNum((dropItem.iLvl) + (monsterStats.level), (dropItem.iLvl * 3) + (monsterStats.level * 3))
                    bonusDexterity = dropItem.baseDexterity
                    dropItem["dexterity"] = returnNum + bonusDexterity
                }
                else {
                    dropItem["dexterity"] = 0;
                }
                if (dropItem.baseWisdom > 0) {
                    var returnNum = getNum((dropItem.iLvl) + (monsterStats.level), (dropItem.iLvl * 3) + (monsterStats.level * 3))
                    bonusWisdom = dropItem.baseWisdom
                    dropItem["wisdom"] = returnNum + bonusWisdom
                }
                else {
                    dropItem["wisdom"] = 0;
                }
                if (dropItem.baseIntelligence > 0) {
                    var returnNum = getNum((dropItem.iLvl) + (monsterStats.level), (dropItem.iLvl * 3) + (monsterStats.level * 3))
                    bonusIntelligence = dropItem.baseIntelligence
                    dropItem["intelligence"] = returnNum + bonusIntelligence
                }
                else {
                    dropItem["intelligence"] = 0;
                }
                if (dropItem.baseLuck > 0) {
                    var returnNum = getNum((dropItem.iLvl) + (monsterStats.level), (dropItem.iLvl * 3) + (monsterStats.level * 3))
                    bonusLuck = dropItem.baseLuck
                    dropItem["luck"] = returnNum + bonusLuck
                }
                else {
                    dropItem["luck"] = 0;
                }
                if (dropItem.baseMinDamage > 0) {
                    var returnNum = getNum((dropItem.iLvl) + (monsterStats.level), (dropItem.iLvl * 2) + (monsterStats.level * 2))
                    bonusMinDamage = dropItem.baseMinDamage
                    dropItem["minDamage"] = returnNum + bonusMinDamage
                }
                if (dropItem.baseMaxDamage > 0) {
                    var returnNum = getNum((dropItem.iLvl * 3) + (monsterStats.level * 3), (dropItem.iLvl * 4) + (monsterStats.level * 4))
                    bonusMaxDamage = dropItem.baseMaxDamage
                    dropItem["maxDamage"] = returnNum + bonusMaxDamage
                }
                if (dropItem.baseDefense > 0) {
                    var returnNum = getNum((dropItem.iLvl) + (monsterStats.level), (dropItem.iLvl * 2) + (monsterStats.level * 2))
                    bonusDefense = dropItem.baseDefense
                    dropItem["defense"] = returnNum + bonusDefense
                }
                else {
                    dropItem["defense"] = 0;
                }

                var itemHolder = [];
                itemHolder.push(dropItem);
                playerInventory.push.apply(
                    playerInventory,
                    JSON.parse(JSON.stringify(itemHolder))
                    );
                player.itemIdNumber += 1;
                Log("<span style=\"color:orange\">You found an item! </span>");
            }
        }
    }
}
//Random number, higher number is less likely to happen, and lower number is more common
function getNum(min, max) // min inclusive, max exclusive
{
    var num = Math.random();
    num = 1 - Math.sin(num);
    return Math.round(num * (max - min) + min);
}

