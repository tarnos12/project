function monsterOtherItemDrop(monster) {
    if (playerInventory.length <= player.inventory()) {
        var monsterGroup = monster.group;
        var monsterArea = monster.area;
        var monsterType = itemTable[monsterGroup][monsterArea]

        testItemQuality(monsterType);
        CreateInventoryWeaponHtml()
    }
};

function testItemQuality(monsterType) {
    var dropItem;

    var chance = 0;
    for (var i = 0; i < monsterType.itemDrop.length; i++) {

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
            if (dropItem.endurance == null || dropItem.endurance == "undefined") {
                dropItem["endurance"] = 0
            }
            if (dropItem.agility == null || dropItem.agility == "undefined") {
                dropItem["agility"] = 0
            }
            if (dropItem.dexterity == null || dropItem.dexterity == "undefined") {
                dropItem["dexterity"] = 0
            }
            if (dropItem.intelligence == null || dropItem.intelligence == "undefined") {
                dropItem["intelligence"] = 0
            }
            if (dropItem.wisdom == null || dropItem.wisdom == "undefined") {
                dropItem["wisdom"] = 0
            }
            if (dropItem.luck == null || dropItem.luck == "undefined") {
                dropItem["luck"] = 0
            }
                dropItem["id"] = currentDate.getTime();
                playerInventory.push(dropItem);
            }
        }
    }
}