"use strict";

//Potion list
(function() {
    var newPotion = function(levelReq, effect, bonus, name, displayName, propertyName, timer, displayBonus, experienceGain) {
        this.name = name; // Name used as ID
        this.displayName = displayName; // Display name to the player
        this.effect = effect; // effect healing/buff to determine what its supposed to do, when using a potion.
        this.bonus = bonus; // Bonus, how much stat you gain or how much health you regen...
        this.propertyName = propertyName;
        this.levelReq = levelReq;
        this.timer = timer; //How many fights it takes for a potion buff to run out
        this.amount = 0;
        this.displayBonus = displayBonus;
        this.experienceGain = experienceGain;
        };

    var smallPotion =
       new newPotion(1, 150, 'healing', 'smPotion', 'Small Potion of Life', 'health', 0, 'Health', 10);
    var mediumPotion =
       new newPotion(5, 500, 'healing', 'medPotion', 'Medium Potion of Life', 'health', 0, 'Health', 30);
    var superPotion =
       new newPotion(15, 2000, 'healing', 'supPotion', 'Super Potion of Life', 'health', 0, 'Health', 70);
    var potionofStrength =
       new newPotion(5, 20, 'buff', 'potionofStrength', 'Potion of Strength', 'Strength', 10, 'Strength', 20);
    var potionofEndurance =
       new newPotion(5, 20, 'buff', 'potionofEndurance', 'Potion of Endurance', 'Endurance', 10, 'Endurance', 20);
    var potionofAgility =
       new newPotion(5, 20, 'buff', 'potionofAgility', 'Potion of Agility', 'Agility', 10, 'Agility', 20);
    var potionofDexterity =
       new newPotion(5, 20, 'buff', 'potionofDexterity', 'Potion of Dexterity', 'Dexterity', 10, 'Dexterity', 20);
    var potionofWisdom =
       new newPotion(5, 20, 'buff', 'potionofWisdom', 'Potion of Wisdom', 'Wisdom', 10, 'Wisdom', 20);
    var potionofIntelligence =
       new newPotion(5, 20, 'buff', 'potionofIntelligence', 'Potion of Intelligence', 'Intelligence', 10, 'Intelligence', 20);
    var potionofLuck =
       new newPotion(5, 20, 'buff', 'potionofLuck', 'Potion of Luck', 'Luck', 10, 'Luck', 20);
    var potionofAllStats =
       new newPotion(10, 10, 'buff', 'potionofAllStats', 'Potion of All Stats', 'AllStats', 10, 'All Stats', 40);
    var potionofItemDrop =
       new newPotion(15, 50, 'buff', 'potionofItemDrop', 'Potion of Item Drop', 'ItemDrop', 10, 'Item Drop', 80);
    var potionofGreed =
       new newPotion(15, 100, 'buff', 'potionofGreed', 'Potion of Greed', 'GoldDrop', 10, 'Gold Drop', 80);
    var potionofExperience =
       new newPotion(15, 100, 'buff', 'potionofExperience', 'Potion of Experience', 'ExpGain', 10, 'Exp Gain', 80);

    smallPotion.requirements = function () {
        return [{ type: 'RusinsSinew', amount: 5 }];
    };
    mediumPotion.requirements = function () {
        return [{ type: 'RusinsSinew', amount: 10 }, { type: 'EssenceofWillow', amount: 5 }];
    };
    potionofStrength.requirements = function () {
        return [{ type: 'EssenceofWillow', amount: 10 }];
    };
    potionofEndurance.requirements = function () {
        return [{ type: 'RusinsSinew', amount: 20 }];
    };
    potionofAgility.requirements = function () {
        return [{ type: 'RusinsSinew', amount: 10 }, { type: 'EssenceofWillow', amount: 5 }];
    };
    potionofDexterity.requirements = function () {
        return [{ type: 'RusinsSinew', amount: 10 }, { type: 'EssenceofWillow', amount: 5 }];
    };
    potionofWisdom.requirements = function () {
        return [{ type: 'RusinsSinew', amount: 10 }, { type: 'EssenceofWillow', amount: 5 }];
    };
    potionofIntelligence.requirements = function () {
        return [{ type: 'RusinsSinew', amount: 10 }, { type: 'EssenceofWillow', amount: 5 }];
    };
    potionofLuck.requirements = function () {
        return [{ type: 'EssenceofWillow', amount: 5 }, { type: 'SinnersDelight', amount: 1 }];
    };
    potionofAllStats.requirements = function () {
        return [{ type: 'RusinsSinew', amount: 20 }, { type: 'EssenceofWillow', amount: 10 }, { type: 'SinnersDelight', amount: 5 }];
    };
    superPotion.requirements = function () {
        return [{ type: 'RusinsSinew', amount: 15 }, { type: 'EssenceofWillow', amount: 10 }, { type: 'SinnersDelight', amount: 5 }];
    };
    potionofItemDrop.requirements = function () {
        return [{ type: 'EssenceofWillow', amount: 50 }, { type: 'SinnersDelight', amount: 25 }, { type: 'BarletBark', amount: 10 }];
    };
    potionofGreed.requirements = function () {
        return [{ type: 'EssenceofWillow', amount: 50 }, { type: 'SinnersDelight', amount: 25 }, { type: 'BarletBark', amount: 10 }];
    };
    potionofExperience.requirements = function () {
        return [{ type: 'EssenceofWillow', amount: 50 }, { type: 'SinnersDelight', amount: 25 }, { type: 'BarletBark', amount: 10 }];
    };




    window.potionList = new Object();
    potionList.smallPotion = smallPotion;
    potionList.mediumPotion = mediumPotion;
    potionList.potionofStrength = potionofStrength;
    potionList.potionofEndurance = potionofEndurance;
    potionList.potionofAgility = potionofAgility;
    potionList.potionofDexterity = potionofDexterity;
    potionList.potionofWisdom = potionofWisdom;
    potionList.potionofIntelligence = potionofIntelligence;
    potionList.potionofLuck = potionofLuck;
    potionList.potionofAllStats = potionofAllStats;
    potionList.superPotion = superPotion;
    potionList.potionofItemDrop = potionofItemDrop;
    potionList.potionofGreed = potionofGreed;
    potionList.potionofExperience = potionofExperience;

    })();


function createPotionInventory() {
    var html = '';
    var playerPotionList = player.properties.potionInventory;
    for (var item = 0; item < playerPotionList.length; item++) {
        if (playerPotionList.hasOwnProperty(item)) {
            var potion = playerPotionList[item];
            var potionType = potion.name;
            var displayName = potion.displayName;
            var potionUse = potion.use;
            var potionAmount = potion.amount;
            var potionName = potion.name.capitalizeFirstLetter();
            var potionEffect = potion.effect;
            var potionHeal = potion.bonus;
            var index = item;
            html += '<div class="row">';
            html += '<div class="col-xs-6">';
            html += '<img src="images/' + potionType + '.png" onclick="usePotion(' + index + ", " + "'" + potionEffect + "'" + ');" alt="' + potionName + '" data-toggle="tooltip" data-placement="top" title="' + displayName + '"></span>';
            html += potionAmount;
            html += '</div>';
            html += '<div class="col-xs-6">';
            html += '<button type="button" class="inventoryOther" onclick="addHotBarPotion(' + item + ')' + '">Hot Bar</button>';
            html += '</div>';
            html += '</div>';
        };
    };
    document.getElementById("potionInventory").innerHTML = html;
};

var hotBarItem = [
{},
{},
{},
{},
{},
{},
{},
{}, ];
function CreatePlayerHotBar() {
    var html = '';
    html += '<div class="row" style="margin-top:10px;margin-bottom:10px;">';
    html += '<div class="col-xs-10 col-xs-offset-1">';
    html += '<div class="row border">';
    for (var i = 0; i < hotBarItem.length; i++) { // 8 = hotbar slots;
            var potionAmount = hotBarItem[i].amount;
            var potionName = hotBarItem[i].name;
            var displayName = hotBarItem[i].displayName;
            var displayBonus = hotBarItem[i].displayBonus;
            var potionEffect = hotBarItem[i].effect;
            var potionBonus = hotBarItem[i].bonus;
            for (var j = 0; j < player.properties.potionInventory.length; j++) {
                if (player.properties.potionInventory[j].name === hotBarItem[i].name) {
                    var potionIndex = j
                };
            };
            if (potionAmount > 0) {
                html += '<div class="col-xs-1">';
                html += '<img style="cursor:pointer;" src="images/' + potionName + '.png" onclick="usePotion(' + potionIndex + ');" alt="' + displayBonus + '" data-toggle="tooltip" data-placement="top" title="' + displayName + " " + potionEffect;
                if (potionBonus === "healing") {
                    html += ' hp';
                }
                else {
                    html += ' %';
                };
                html += '">[' + potionAmount + ']';
                html += '</div>';
            }
            else {
                html += '<div class="col-xs-1">';
                html += (i + 1);
                html += '</div>';
            }

    };
    html += '</div>';
    html += '</div>';
    html += '</div>';
    document.getElementById("hotBar").innerHTML = html;
    testss();
};

function addHotBarPotion(potion) { //Effect = healing/stat bonus
    var potionIndex = player.properties.potionInventory[potion];
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
        hotBarItem[hotBarValue] = potionIndex;
    };
    CreatePlayerHotBar();
};

function usePotion(index) {
    var potion = player.properties.potionInventory[index];
    var arrayPotion = player.properties.potionInventory;
    var bonus = potion.bonus;
    if (bonus === 'healing' && potion.amount > 0) {
        if (player.properties.health < player.functions.maxhealth()) {
            player.properties.health += potion.effect;
            potion.amount--;
        };
        if (player.properties.health > player.functions.maxhealth()) {
            player.properties.health = player.functions.maxhealth();
        };
    }
    else if (bonus === 'buff' && potion.amount > 0) {
        var buff = potion.effect;
        player.buffs[potion.propertyName] = {};
        player.buffs[potion.propertyName].amount = potion.effect / 100;
        player.buffs[potion.propertyName].timer = potion.timer;
        potion.amount--;
    }
    if (potion.amount < 1) {
        arrayPotion.splice(index, 1);
    };
    createPotionInventory();
    CreatePlayerHotBar();
    activeBuffsHtml();
    updateHtml();
};

function removePotionBuff(bonusToRemove) {
    console.log('test')
    player.buffs[bonusToRemove] = 0;
};