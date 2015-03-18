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

        chance = monsterType.itemDrop[i].chance;
        var randomItemChance = Math.floor(Math.random() * (1000 - 1) + 1);
        if (randomItemChance <= chance) {
            dropItem = monsterType.itemDrop.filter(function (obj) {

                return obj === monsterType.itemDrop[i];
            }
            )[0];
            //Checks if player used checkbox to auto remove items by quality. Also this code add "id" property to each created item
            if (dropItem.itemQuality === 'Common' && checkBoxCommon === false || dropItem.itemQuality === 'Uncommon' && checkBoxUncommon === false || dropItem.itemQuality === 'Rare' && checkBoxRare === false || dropItem.itemQuality === 'Epic' && checkBoxEpic === false || dropItem.itemQuality === 'Legendary') {
                var currentDate = new Date();

            if (dropItem.strength == null || dropItem.strength == "undefined") {
                dropItem["strength"] = 0
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
                dropItem["id"] = itemIdNumber;
                playerInventory.push(dropItem);
                itemIdNumber += 1;
            }

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

