"use strict";
var hotBarItem = [
    {
        type: 'Empty',
        displayName: 'Small Potion',
        use: 'useSmallPotion'
    },
    {
        type: 'Empty',
        displayName: 'Medium Potion',
        use: 'useMediumPotion'
    },
    {
        type: 'Empty',
        displayName: 'Super Potion',
        use: 'useSuperPotion'
    },
    {
        type: 'Empty',
        displayName: 'Small Potion',
        use: 'useSmallPotion'
    },
    {
        type: 'Empty',
        displayName: 'Small Potion',
        use: 'useSmallPotion'
    },
    {
        type: 'Empty',
        displayName: 'Small Potion',
        use: 'useSmallPotion'
    },
    {
        type: 'Empty',
        displayName: 'Small Potion',
        use: 'useSmallPotion'
    },
    {
        type: 'Empty',
        displayName: 'Small Potion',
        use: 'useSmallPotion'
    }
];
function createPotionInventory() {
    var html = '';
    var playerPotionList = player.properties.potionInventory;
    for (var item in playerPotionList) {
        if (playerPotionList.hasOwnProperty(item)) {
            var potion = playerPotionList[item];
            var potionType = potion.type
            var displayName = potion.displayName;
            var potionUse = potion.use;
            var potionAmount = potion.amount;
            var potionName = potion.type.capitalizeFirstLetter();
            var potionEffect = potion.effect;
            var potionHeal = potion.bonus;
            var index = item;
            html += '<div class="row">';
            html += '<div class="col-xs-6">';
            html += '<img src="images/' + potionName + '.png" onclick="usePotion(' + index + ", " + "'" + potionEffect + "'" + ');" alt="' + potionName + '" data-toggle="tooltip" data-placement="top" title="' + displayName + '"></span>';
            html += potionAmount;
            html += '</div>';
            html += '<div class="col-xs-6">';
            html += '<button type="button" class="inventoryOther" onclick="addHotBarPotion(' + "'" + potionType + "', " + "'" + displayName + "', " + "'" + potionUse + "', " + potionAmount + ", '" + potionEffect + "', " + item + ", '" + potionHeal + "'" + ')' + '">Hot Bar</button>';
            html += '</div>';
            html += '</div>';
        };
    };
    document.getElementById("potionInventory").innerHTML = html;
};

function CreatePlayerHotBar() {
    var html = '';
    html += '<div class="row" style="margin-top:10px;margin-bottom:10px;">';
    html += '<div class="col-xs-12">';
    html += '<div class="row">';
    for (var item in hotBarItem) {
        if (hotBarItem.hasOwnProperty(item)) {
            var potion = hotBarItem[item];
            var potionName = potion.type.capitalizeFirstLetter();
            var displayName = potion.displayName;
            var index = potion.index;
            var effect = potion.effect;
            if (potion.type !== 'Empty') {
                var playerAmount = player.properties.potionInventory[index].amount;
                html += '<div class="col-xs-1">';
                html += '<img style="cursor:pointer;" src="images/' + potionName + '.png" onclick="usePotion(' + index + ');" alt="' + displayName + '" data-toggle="tooltip" data-placement="top" title="' + displayName + " " + potion.bonus + ' hp">[' + playerAmount + ']';
                html += '</div>';
            }
        };
    };
    html += '</div>';
    html += '</div>';
    html += '</div>';
    document.getElementById("hotBar").innerHTML = html;
    testss();
};

function addHotBarPotion(type, name, use, amount, effect, index, bonus) { //Effect = healing/stat bonus
    var hotBarValue = document.getElementsByName('hotBarValue');
    for (var i = 0, length = hotBarValue.length; i < length; i++) {
        if (hotBarValue[i].checked) {
            // do whatever you want with the checked radio
            hotBarValue = hotBarValue[i].value;

            // only one radio can be logically checked, don't check the rest
            break;
        }
    };
    if (hotBarValue <= 8) {
        hotBarValue-- //Decrease value by 1, so it fits 'array'
        hotBarItem[hotBarValue].type = type;
        hotBarItem[hotBarValue].displayName = name;
        hotBarItem[hotBarValue].use = use;
        hotBarItem[hotBarValue].amount = amount;
        hotBarItem[hotBarValue].effect = effect;
        hotBarItem[hotBarValue].index = index;
        hotBarItem[hotBarValue].bonus = bonus;
    };
    CreatePlayerHotBar();
};

function usePotion(index) {
    var potion = player.properties.potionInventory[index];
    var effect = potion.effect;
    if (effect === 'healing' && potion.amount > 0) {
        if (player.properties.health < player.functions.maxhealth()) {
            player.properties.health += potion.bonus;
            potion.amount--;
        };
        if (player.properties.health > player.functions.maxhealth()) {
            player.properties.health = player.functions.maxhealth();
        };
    };
    createPotionInventory();
    CreatePlayerHotBar();
};
