//Create player Weapon skill html
var weaponTabActive = 'swordTest';
function changeTabWeapon(index) {
    weaponTabActive = index;
};
function CreateWeaponSkillHtml() {
    var html = '';
    html += '<div class="row">';
    html += '<div class="col-xs-10">';
    html += '<ul class="nav nav-tabs">';
    for (var k = 0; k < weaponTypeObject.length; k++) {
        var weaponType = weaponTypeObject[k].type + 'Test';
        if (weaponType === weaponTabActive) {
            html += '<li class="active" onClick = changeTabWeapon("' + weaponType + '")>';
        }
        else {
            html += '<li onClick = changeTabWeapon("' + weaponType + '")>';
        };
        html += '<a href="#tab_' + weaponTypeObject[k].displayName + '" data-toggle="tab"><span class="icons ' + weaponTypeObject[k].icon + '"</span></a></li>';
    };
    html += '</ul>';
    html += '<div class="tab-content" id="tabControl_WeaponSkill">';
    for (weapon in weaponMastery) {
        if (weaponMastery.hasOwnProperty(weapon)) {
            var itemStat = weaponMastery[weapon];
            var image = "images/skills/" + itemStat.image + ".png";
            var weaponTest = weapon + "Test";
            if (weaponTest === weaponTabActive) {
                html += '<div class="col-xs-12 tab-pane active"';
            } else {
                html += '<div class="col-xs-12 tab-pane"';
            };
            html += 'id="tab_' + itemStat.name + '">';
            html += '<div class="row">';
            html += '<div class="col-xs-12 c8">';
            html += '<div class="c3"><h4>' + itemStat.name + '</h4>';
            html += '<br />Level: ' + itemStat.level;
            for (var statName in itemStat) {
                if ('defense, strength, endurance, agility, dexterity, intelligence, wisdom, damage'.indexOf(statName) != -1) {
                    var displayStat = itemStat[statName]();
                    html += "<br />" + statName + ": " + ((displayStat * 100).toFixed(0) - 100) + "%";
                };
            };
            //Progress bar is not updating on it's own :|
            html += '<div class="progress">';//Doing + 1 below so I can use itemStat.image for a span, which let me center progress bar value.
            html += '<div id="' + itemStat.image + '1' + '" class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">';
            html += '<span id="' + itemStat.image + '"></span>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            var skill = weaponSkillList[weapon]
            for (var skillName in skill) {
                var displaySkill = skill[skillName];
                html += '<div class="col-xs-12 c8">';
                html += '<div class="c4">';
                html += "<br />" + '<span class ="bold">' + displaySkill.name + '</span>' + "<br />" + displaySkill.description();
                html += '</div>';
                html += '</div>';
            };
            html += '</div>';
        };
    };
    html += '</div>';
    html += '</div>';
    html += '</div>';
    document.getElementById("weaponSkill").innerHTML = html;
};

//String prototype used to capitalize first letter, use it with "string".capitalizeFirstLetter()
String.prototype.capitalizeFirstLetter = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

var monsterTabActiveNum = 0;
function changedTabmonster(index) {
    monsterTabActiveNum = index;
};
function CreateMonsterHtml() {
    var html = '';
    html += '<ul class="nav nav-tabs">';
    for (var k = 0; k < monsterAreas.length; k++) {
        if (k === monsterTabActiveNum) {
            html += '<li class="active" onClick = changedTabmonster(' + k + ')>';
        }
        else {
            html += '<li onClick = changedTabmonster(' + k + ')>';
        };
        html += '<a href="#tab_' + monsterAreas[k].type + '" data-toggle="tab"><span class="icons ' + monsterAreas[k].icon + '"></span>' + '</a></li>';
    };
    html += '</ul>';
    html += '<div class="tab-content">';
    for (var j = 0; j < monsterAreas.length; j++) {
        if (j === monsterTabActiveNum) {
            html += '<div class="tab-pane active" ';
        }
        else {
            html += '<div class="tab-pane" ';
        };
        html += 'id="tab_' + monsterAreas[j].type + '">' +
            '<div class="c3">' +
            '<h4>' + monsterAreas[j].displayName + '</h4>' + '<br />' +
            '</div>';
        for (var key in monsterList) {
            if (monsterList.hasOwnProperty(key)) {
                var monster = monsterList[key];
                var area = monster.Stats.area;
            };
            if (area === monsterAreas[j].type) {
                if (monster.Stats.isShown == true) {
                    html += '<div class="col-xs-6 col-lg-3">' +
                        '<div id="' + monster.Stats.id + '">' +
                        '<a href="#" class="tooltipA">' +
                        '<img type="button" class="monster" src="images/' + "monster" + monster.Stats.id + '.jpg" alt="' + monster.Stats.displayName + '" onclick="attack(' + monster.Stats.name + ')">' +
                        '<span>' +
                        '<b>' + monster.Stats.displayName + '</b>' +
                        '<br />' +
                        'Dmg:' + monster.Stats.minDmg + "-" + monster.Stats.maxDmg +
                        '<br />' +
                        'Def:' + monster.Stats.def +
                        '</span></a>' +
                        '<br />' +
                        "Health: " + '<span class="hp">' + monster.Stats.hp + '</span>' + "/" + monster.Stats.maxHp +
                        '</div></div>';
                };
            };
        };
        html += '</div>';
    };
    html += '</div>';

    document.getElementById("monsterTabs").innerHTML = html;
};

var inventoryTabActiveNum = 0;
function changedTabInventory(index) {
    inventoryTabActiveNum = index;
};
function CreateInventoryWeaponHtml() {
    var html = '';
    var itemStat;
    html += '<div class="c3">' + "Inventory Slots: " + playerInventory.length + "/" + player.functions.inventory() + '</div>';
    html += '<ul class="nav nav-tabs">';
    for (var k = 0; k < 3; k++) {
        if (k === inventoryTabActiveNum) {
            html += '<li class="active" onClick = changedTabInventory(' + k + ')>';
        }
        else {
            html += '<li onClick = changedTabInventory(' + k + ')>';
        }
        html += '<a href="#tab_' + InventoryItemTypes[k].type + '" data-toggle="tab"><span class="icons ' + InventoryItemTypes[k].icon + '"</span></a></li>';
    };
    html += '</ul>';
    html += '<div class="tab-content" id="tabControl_Inventory">';
    for (var j = 0; j < InventoryItemTypes.length; j++) {
        if (j === inventoryTabActiveNum) {
            html += '<div class="col-xs-12 tab-pane active"';
        }
        else {
            html += '<div class="col-xs-12 tab-pane"';
        };
        html += 'id="tab_' + InventoryItemTypes[j].type + '">';
        html += '<div class="row" id="' + "inventorySpace" + InventoryItemTypes[j].type + '"' + '>';
        html += '<div class="c3"><h4>Inventory</h4>';
        html += '<div class="centerText">';
        html += '<strong>Sell All(Current tab)</strong>';
        var sellAllCommon = "sellAllCommon('" + InventoryItemTypes[j].type + "');";
        var sellAllUncommon = "sellAllUncommon('" + InventoryItemTypes[j].type + "');";
        var sellAllRare = "sellAllRare('" + InventoryItemTypes[j].type + "');";
        var sellAllEpic = "sellAllEpic('" + InventoryItemTypes[j].type + "');";
        html += '<br /><button type="button" class="sell" onclick=' + sellAllCommon + '>Common</button>';
        html += '<button type="button" class="sell" onclick=' + sellAllUncommon + '>Uncommon</button>';
        html += '<button type="button" class="sell" onclick=' + sellAllRare + '>Rare</button>';
        html += '<button type="button" class="sell" onclick=' + sellAllEpic + '>Epic</button>';
        html += '</div>';
        html += '<div class="c3">Sort by:</div>';
        var sortItemValue = 'onclick="sortInventory' + "(" + "'Value'" + ")"
        var sortItemRarity = 'onclick="sortInventory' + "(" + "'Rarity'" + ")"
        html += '<button ' + sortItemValue + '">Value</button>';
        html += '<button ' + sortItemRarity + '">Rarity</button>';
        html += '<div class="itemEquipAndSell">';
        html += '</div>';
        html += '</div><br />';
        for (var i = 0; i < playerInventory.length; i++) {
            if (playerInventory[i].itemType === InventoryItemTypes[j].type) {
                if (playerInventory[i].itemType === "weapon") {
                    itemStat = equippedItems.weapon;
                }
                else if (playerInventory[i].subType === "shield") {
                    itemStat = equippedItems.shield;
                }
                else if (playerInventory[i].subType === "chest") {
                    itemStat = equippedItems.chest;
                }
                else if (playerInventory[i].subType === "helmet") {
                    itemStat = equippedItems.helmet;
                }
                else if (playerInventory[i].subType === "legs") {
                    itemStat = equippedItems.legs;
                }
                else if (playerInventory[i].subType === "boots") {
                    itemStat = equippedItems.boots;
                }
                else if (playerInventory[i].subType === "ring") {
                    itemStat = equippedItems.ring;
                }
                else if (playerInventory[i].subType === "amulet") {
                    itemStat = equippedItems.amulet;
                }
                else if (playerInventory[i].subType === "talisman") {
                    itemStat = equippedItems.talisman;
                }
                html += '<div class="col-xs-12 col-lg-6 c8"' + 'id="' + 'testingItem' + playerInventory[i].id + '"' + '>';
                html += '<a class="tooltips" style="cursor:pointer;">';
                html += '<label> <input type="radio" name="inventoryItem" value=' + playerInventory[i].id + '>';
                if (playerInventory[i].itemType === "weapon"){
                    html += '<img class="' + playerInventory[i].itemType;
                }
                else{
                    html += '<img class="' + playerInventory[i].subType;
                }
                html += '"' + 'src="images/items/' + playerInventory[i].subType + "/" + playerInventory[i].image + '.png" id="' + playerInventory[i].itemRarity + '"/>';
                html += '</label>';
                if (itemStat.hasOwnProperty('itemType')) {
                    html += '<span>';
                }
                else {
                    html += '<span style="width:300px;">';
                }
                html += '<div class="row">';
                html += '<div class="col-xs-12">';

                if (itemStat.hasOwnProperty('itemType')) {
                    var equippedItemDisplay = itemStat;
                    html += '<div class="row">';
                    html += '<div class="col-xs-6">';
                    html += '<font color="' + equippedItemDisplay.color + '"><strong>' + equippedItemDisplay.name + '</strong></font>' + '<br />';
                    if (equippedItemDisplay.itemType === "weapon") {
                        html += '<div  style="border-top: 1px solid;border-bottom: 1px solid;">Weapon class: ' + equippedItemDisplay.subType.capitalizeFirstLetter() + '<br />';
                        html += 'Damage: ' + equippedItemDisplay.MinDamage + " to " + equippedItemDisplay.MaxDamage + "</div>";
                    }
                    if (equippedItemDisplay.subType === "shield") {
                        html += '<div style="border-top: 1px solid;border-bottom: 1px solid;">Chance to Block: ' + equippedItemDisplay['Block chance'] + '%' + " </div>";
                    }
                    if (equippedItemDisplay.itemType === "armor") {
                        html += '<div  style="border-top: 1px solid;border-bottom: 1px solid;">Defense: ' + equippedItemDisplay.defense + " </div>";
                    }   
                    for (var statName in equippedItemDisplay) { //Here stat will become the word Defense
                        if ('All attributes, Strength, Endurance, Agility, Dexterity, Wisdom, Intelligence, Luck, Evasion, Bonus damage, Bonus armor, Bonus life, Bonus mana, Health regen, Mana regen, Magic find, Gold drop, Experience rate, Life gain on hit, Critical damage, Critical chance,'.indexOf(statName) != -1) {
                            //Getting the actual stat object from the word.
                            var selectedStat = equippedItemDisplay[statName];
                            if (selectedStat > 0 || selectedStat > 0 && statName === "Bonus damage") {
                                html += '<strong><font color="0066FF">' + statName + ": " + selectedStat + '</font></strong>' + '<br />';
                            }
                        };
                    };
                    html += '<div style="border-top: 1px solid; border-bottom: 1px solid;">';
                    html += "Value: " + equippedItemDisplay.Value + " gold<br />";
                    html += '<font color="#CC6633">' + equippedItemDisplay.lore + '</font>';
                    html += '</div>';
                    html += '<strong>Currently equipped</strong>';
                    html += '</div>';
                };
                
                if (itemStat.hasOwnProperty('itemType')) {
                    html += '<div class="col-xs-6">';
                }
                else {
                    html += '<div class="col-xs-10 col-xs-offset-1">';
                }
                html += '<font color="' + playerInventory[i].color + '"><strong>' + playerInventory[i].name + '</strong></font>' + '<br />';
                if (playerInventory[i].itemType === "weapon") {
                    html += '<div  style="border-top: 1px solid;border-bottom: 1px solid;">Weapon class: ' + playerInventory[i].subType.capitalizeFirstLetter() + '<br />';
                    html += 'Damage: ' +  playerInventory[i].MinDamage + " to " + playerInventory[i].MaxDamage + '</div>';
                }
                if (playerInventory[i].subType === "shield") {
                    html += '<div style="border-top: 1px solid;border-bottom: 1px solid;">Chance to Block: ' + playerInventory[i]['Block chance'] + '%' + " </div>";
                }
                if (playerInventory[i].itemType === "armor") {
                    html += '<div  style="border-top: 1px solid;border-bottom: 1px solid;">Defense: ' + playerInventory[i].defense + " </div>";
                }
                var item = playerInventory[i];
                for (var statName in item) { //Here stat will become the word Defense
                    if ('All attributes, Strength, Endurance, Agility, Dexterity, Wisdom, Intelligence, Luck, Evasion, Bonus damage, Bonus armor, Bonus life, Bonus mana, Health regen, Mana regen, Magic find, Gold drop, Experience rate, Life gain on hit, Critical damage, Critical chance,'.indexOf(statName) != -1) {
                        //Getting the actual stat object from the word.
                        var selectedStat = item[statName];
                        if (selectedStat > 0 || selectedStat > 0 && statName === "Bonus damage") {
                            html += '<strong><font color="0066FF">' + statName + ": " + selectedStat + '</font></strong>' + '<br />';
                        }
                    };
                };
                html += '<div style="border-top: 1px solid; border-bottom: 1px solid;">';
                html += "Value: " + playerInventory[i].Value + " gold<br />";
                html += '<font color="#CC6633">' + playerInventory[i].lore +'</font>';
                html += '</div>';
                html += '<strong>Left-Click to select</strong>';
                html += '</div></div>';
                html += '</div>';
                if (itemStat.hasOwnProperty('itemType')) {
                    html += '</div>';
                }
                html += '</span>' + '</a>';
                html += '</div>';
            };
        };
        html += '</div>';
        html += '</div>';
    };
    html += '</div>';
    document.getElementById("inventory").innerHTML = html;

    equipAndSellItem();
};

function unequipItemLoad() { // Create a variable inside player.properties which store currently equipped item, for easy access...
    for (var key in loadingEquippedItems) {
        var html = '';
        var i = loadingEquippedItems[key].type
        var itemStat = equippedItems[i];
        if (itemStat.subType !== undefined) {
            html += '<div class="col-xs-12 col-lg-6 c8"' + 'id="' + 'testingItem' + itemStat.id + '"' + '>';
            html += '<a class="tooltips" style="cursor:pointer;">';
            if (itemStat.itemType === "weapon") {
                html += '<img class="' + itemStat.itemType;
            }
            else {
                html += '<img class="' + itemStat.subType;
            }
            html += '"' + 'src="images/items/' + itemStat.subType + "/" + itemStat.image + '.png" id="' + itemStat.itemRarity + '"onclick="equipItem' + "(" + itemStat.id + ")" + '"/>';
            if (itemStat.hasOwnProperty('itemType')) {
                html += '<span>';
            }
            else {
                html += '<span style="width:200px;">';
            }
            html += '<div class="row">';
            html += '<div class="col-xs-12">';

            if (itemStat.hasOwnProperty('itemType')) {
                var equippedItemDisplay = itemStat;
                html += '<div class="row">';
                html += '<div class="col-xs-6">';
                html += '<font color="' + equippedItemDisplay.color + '"><strong>' + equippedItemDisplay.name + '</strong></font>' + '<br />';
                if (equippedItemDisplay.itemType === "weapon") {
                    html += '<div  style="border-top: 1px solid;border-bottom: 1px solid;">Weapon class: ' + equippedItemDisplay.subType.capitalizeFirstLetter() + '<br />';
                    html += 'Damage: ' + equippedItemDisplay.MinDamage + " to " + equippedItemDisplay.MaxDamage + "</div>";
                }
                if (equippedItemDisplay.subType === "shield") {
                    html += '<div style="border-top: 1px solid;border-bottom: 1px solid;">Chance to Block: ' + equippedItemDisplay['Block chance'] + '%'  + " </div>";
                }
                if (equippedItemDisplay.itemType === "armor") {
                    html += '<div  style="border-top: 1px solid;border-bottom: 1px solid;">Defense: ' + equippedItemDisplay.defense + " </div>";
                }
                for (var statName in equippedItemDisplay) { //Here stat will become the word Defense
                    if ('All attributes, Strength, Endurance, Agility, Dexterity, Wisdom, Intelligence, Luck, Evasion, Bonus damage, Bonus armor, Bonus life, Bonus mana, Health regen, Mana regen, Magic find, Gold drop, Experience rate, Life gain on hit, Critical damage, Critical chance,'.indexOf(statName) != -1) {
                        //Getting the actual stat object from the word.
                        var selectedStat = equippedItemDisplay[statName];
                        if (selectedStat > 0 || selectedStat > 0 && statName === "Bonus damage") {
                            html += '<strong><font color="0066FF">' + statName + ": " + selectedStat + '</font></strong>' + '<br />';
                        }
                    };
                };
                html += '<div style="border-top: 1px solid; border-bottom: 1px solid;">';
                html += "Value: " + equippedItemDisplay.Value + " gold<br />";
                html += '<font color="#CC6633">' + equippedItemDisplay.lore + '</font>';
                html += '</div>';
                html += '<strong>Currently equipped</strong>';
                html += '</div>';
            };

            if (itemStat.hasOwnProperty('itemType')) {
                html += '<div class="col-xs-6">';
            }
            else {
                html += '<div class="col-xs-10 col-xs-offset-1">';
            }
            html += '<font color="' + itemStat.color + '"><strong>' + itemStat.name + '</strong></font>' + '<br />';
            if (itemStat.itemType === "weapon") {
                html += '<div  style="border-top: 1px solid;border-bottom: 1px solid;">Weapon class: ' + itemStat.subType.capitalizeFirstLetter() + '<br />';
                html += 'Damage: ' + itemStat.MinDamage + " to " + itemStat.MaxDamage + "</div>";
            }
            if (itemStat.subType === "shield") {
                html += '<div style="border-top: 1px solid;border-bottom: 1px solid;">Chance to Block: ' + itemStat['Block chance'] + '%'  + " </div>";
            }
            if (itemStat.itemType === "armor") {
                html += '<div  style="border-top: 1px solid;border-bottom: 1px solid;">Defense: ' + itemStat.defense + " </div>";
            }
            var item = itemStat;
            for (var statName in item) { //Here stat will become the word Defense
                if ('All attributes, Strength, Endurance, Agility, Dexterity, Wisdom, Intelligence, Luck, Evasion, Bonus damage, Bonus armor, Bonus life, Bonus mana, Health regen, Mana regen, Magic find, Gold drop, Experience rate, Life gain on hit, Critical damage, Critical chance,'.indexOf(statName) != -1) {
                    //Getting the actual stat object from the word.
                    var selectedStat = item[statName];
                    if (selectedStat > 0 || selectedStat > 0 && statName === "Bonus damage") {
                        html += '<strong><font color="0066FF">' + statName + ": " + selectedStat + '</font></strong>' + '<br />';
                    }
                };
            };
            html += '<div style="border-top: 1px solid; border-bottom: 1px solid;">';
            html += "Value: " + itemStat.Value + " gold<br />";
            html += '<font color="#CC6633">' + itemStat.lore + '</font>';
            html += '</div>';
            html += '<strong>Left-Click to select</strong>';
            html += '</div></div>'
            html += '</div>';
            if (itemStat.hasOwnProperty('itemType')) {
                html += '</div>';
            }
            html += '</span>' + '</a>' +
             '<button type="button" class="equip" onclick="itemSell' + "(" + itemStat.id + ")" + '">Sell</button>';
            html += '</div>';
            player.functions[i] = $(html);
        };
    };
};
function CreatePlayerSkillsHtml() {
    var html = '';
    html += '<div class="row">';
    html += '<div class="col-xs-10 col-xs-offset-1">';
    html += '<div class="row">';
    html += '<div class="col-xs-4 col-xs-offset-4">';
    html += '<button onclick="resetPassiveSkills();">Reset</button>';
    html += '</div>';
    html += '</div>';
    html += '<div class="row">';
    for (var passiveSkill in playerPassive) {
        var passive = playerPassive[passiveSkill];
        var onclickevent = "upgradePassive('" + passiveSkill + "');";
        
        if (passive.newRow === true) {
            html += '<div class="row">';
        };
        if (passive.type === "Double") {

            html += '<div class="col-xs-2 col-xs-offset-2">';
        }
        else {
            html += '<div class="col-xs-4">';
        }
        html += '<a class="tooltips">';
        html += '<img class="passiveMargin"' + 'onclick="' + onclickevent + '"' + 'src="images/passive/' + passive.image + '.png">';
        html += '<span>';
        html += passive.name + '<br />';
        html += passive.description();
        html += '<br />Level: ' + passive.levelReq;
        html += '<br />Level: ' + passive.level + '/' + passive.maxLevel;
        html += '</span></a>';
        html += '</div>';
        if (passive.lastRow === true) {
            html += '</div>';
        };
    }
    html += '</div>';
    html += '</div>';
    html += '</div>';
    document.getElementById("playerSkills").innerHTML = html;
};

function CreatePlayerHotBar() {
    var html = '';
    html += '<div class="row c4">';
    html += '<div class="col-xs-10 col-xs-offset-1">';
    html += '<div class="row">';
    html += '<div class="col-xs-4">';
    html += '<img src="images/SmallPotion.png" onclick="useSmallPotion();" alt="Health Potion">' + player.properties.smallPotion + '<br />(20hp): ';
    html += '</div>';
    html += '<div class="col-xs-4">';
    html += '<img src="images/MediumPotion.png" onclick="useMediumPotion();" alt="Health Potion">' + player.properties.mediumPotion + '<br />(100hp): ';
    html += '</div>';
    html += '<div class="col-xs-4">';
    html += '<img src="images/SuperPotion.png" onclick="useSuperPotion();" alt="Health Potion">' + player.properties.superPotion + '<br />(500hp): ';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    document.getElementById("hotBar").innerHTML = html;
};

//Adds a logo to the starting screen
function startLogo() {
    var html = '';
    html += '<div class="row">';
    html += '<div class ="col-xs-12">';
    html += '</div></div>';
    document.getElementById("gameLogo").innerHTML = html;
}

//This screen shows up everytime you load a page...
function startingScreen() {
    var html = '';
    var newGame = "newGameSlot();"; // might pass value to pick a slot for new game
    var loadGame = "loadGameSlot();"; // later on might need to pass some value when loading, once I add more save slots...
    var muteSound = "muteAudio();";
    var myAudio = document.getElementById('myAudio');
    html += '<div class="row">';
    html += '<div class ="col-xs-12 newGameButton">';
    html += '<div class="btn-group-vertical" role="group" aria-label="New game, load game">';
    html += '<button type="button" style="margin-bottom:5px;" class="btn btn-default border" onclick="' + newGame + '">New Game</button>';
    html += '<button type="button" class="btn btn-default border" onclick="' + loadGame + '">Load</button>';
    html += '<label><input type="checkbox" id="hardcoreMode" style ="visibility:visible; position:relative;" onclick="handleClick();">Hardcore Mode?</label>';
    html += '</div>';
    html += '</div></div>';
    html += '<button type="button" class="btn btn-default musicDiv" onclick="' + muteSound + 'changeMusicImage();""><span id="musicImage" class="glyphicon glyphicon-volume-up" aria-hidden="true"></span></button>';
    document.getElementById("buttonDiv").innerHTML = html;
    myAudio.volume = 0.1;
    myAudio.play();
};
startingScreen();
startLogo();

function newGameSlot() {
    characterCreationCreateBackground();
    var html = '';
    var newGameSlot1 = "newGame(1);";
    var newGameSlot2 = "newGame(2);";
    var newGameSlot3 = "newGame(3);";

    if (localStorage['EncodedSaveGame1']) {
        var saveInfo = JSON.parse(atob(localStorage['EncodedSaveGame1']));
        var DisplayInfo = "Current save: Level - " + saveInfo.playerProperties.level + ' Race: ' + saveInfo.playerProperties.heroRace;
        if (saveInfo.playerProperties.hardcoreMode === true) {
            DisplayInfo += " <strong>Hardcore</strong>"
        };
    }
    else {
        var DisplayInfo = "Empty Slot";
    }
    if (localStorage['EncodedSaveGame2']) {
        var saveInfo2 = JSON.parse(atob(localStorage['EncodedSaveGame2']));
        var DisplayInfo2 = "Current save: Level - " + saveInfo2.playerProperties.level + ' Race: ' + saveInfo2.playerProperties.heroRace;
        if (saveInfo2.playerProperties.hardcoreMode === true) {
            DisplayInfo2 += " <strong>Hardcore</strong>"
        };
    }
    else {
        var DisplayInfo2 = "Empty Slot";
    }
    if (localStorage['EncodedSaveGame3']) {
        var saveInfo3 = JSON.parse(atob(localStorage['EncodedSaveGame3']));
        var DisplayInfo3 = "Current save: Level - " + saveInfo3.playerProperties.level + ' Race: ' + saveInfo3.playerProperties.heroRace;
        if (saveInfo3.playerProperties.hardcoreMode === true) {
            DisplayInfo3 += " <strong>Hardcore</strong>"
        };
    }
    else {
        var DisplayInfo3 = "Empty Slot";
    }

    html += '<div class="row">';
    html += '<div class ="col-xs-12 newGameButton">';
    html += '<div class="btn-group-vertical" role="group" aria-label="New game, load game">';
    html += '<div class="row">';
    html += '<div class ="col-xs-12">';
    html += '<button type="button" style="margin-bottom:5px;" class="btn btn-default border" onclick="' + newGameSlot1 + '">New game 1</button> ' + DisplayInfo;
    html += '</div>';
    html += '<div class ="col-xs-12">';
    html += '<button type="button" style="margin-bottom:5px;" class="btn btn-default border" onclick="' + newGameSlot2 + '">New Game 2</button> ' + DisplayInfo2;
    html += '</div>';
    html += '<div class ="col-xs-12">';
    html += '<button type="button" style="margin-bottom:5px;" class="btn btn-default border" onclick="' + newGameSlot3 + '">New Game 3</button> ' + DisplayInfo3;
    html += '</div>';
    html += '</div></div></div></div>';
    
    document.getElementById("raceCreation").innerHTML = html;
    //document.getElementById("raceText").innerHTML = html2
};

function loadGameSlot() {
    characterCreationCreateBackground();
    var html = '';
    var loadGameSlot1 = "loadGame(1);";
    var loadGameSlot2 = "loadGame(2);";
    var loadGameSlot3 = "loadGame(3);";
    if (localStorage['EncodedSaveGame1']) {
        var saveInfo = JSON.parse(atob(localStorage['EncodedSaveGame1']));
        var DisplayInfo = "Level - " + saveInfo.playerProperties.level + ' Race: ' + saveInfo.playerProperties.heroRace;
    }
    else {
        var DisplayInfo = "Empty Slot";
    }
    if (localStorage['EncodedSaveGame2']) {
        var saveInfo2 = JSON.parse(atob(localStorage['EncodedSaveGame2']));
        var DisplayInfo2 = "Level - " + saveInfo2.playerProperties.level + ' Race: ' + saveInfo2.playerProperties.heroRace;
    }
    else {
        var DisplayInfo2 = "Empty Slot";
    }
    if (localStorage['EncodedSaveGame3']) {
        var saveInfo3 = JSON.parse(atob(localStorage['EncodedSaveGame3']));
        var DisplayInfo3 = "Level - " + saveInfo3.playerProperties.level + ' Race: ' + saveInfo3.playerProperties.heroRace;
    }
    else {
        var DisplayInfo3 = "Empty Slot";
    }

    html += '<div class="row">';
    html += '<div class ="col-xs-12 newGameButton">';
    html += '<div class="btn-group-vertical" role="group" aria-label="New game, load game">';
    html += '<div class="row">';
    html += '<div class ="col-xs-12">';
    html += '<button type="button" style="margin-bottom:5px;" class="btn btn-default border" onclick="' + loadGameSlot1 + '">Load game 1</button> ' + DisplayInfo;
    html += '</div>';
    html += '<div class ="col-xs-12">';
    html += '<button type="button" style="margin-bottom:5px;" class="btn btn-default border" onclick="' + loadGameSlot2 + '">Load Game 2</button> ' + DisplayInfo2;
    html += '</div>';
    html += '<div class ="col-xs-12">';
    html += '<button type="button" style="margin-bottom:5px;" class="btn btn-default border" onclick="' + loadGameSlot3 + '">Load Game 3</button> ' + DisplayInfo3;
    html += '</div>';
    html += '</div></div></div></div>';

    document.getElementById("raceCreation").innerHTML = html;
};

function newGame(slot) {
    if (confirm("Are you sure?") == true) {
        characterCreationHtml();
        player.properties.saveSlot = slot;
        if (hardcoreMode === true) {
            player.properties.hardcoreMode = true;
        };
        autoSave();
        EquippedItemsEmpty();
        CreatePlayerHotBar();
        CreatePlayerSkillsHtml();
        primaryStatUpdate();
        secondaryStatUpdate();
        saveGameSlot();
        refillShopInterval();
        shopOther();
    };
};

function characterCreationCreateBackground() {
    var divStyle = document.getElementById('loadingContainer'); // Whole background of starting screen "a container"
    divStyle.style.display = "block"; //block = display it
    var divStyle3 = document.getElementById('startingScreen'); // Starting buttons: new game/ load game/ sound button etc
    divStyle3.style.display = "none"; // none = not displayed
    var divStyle4 = document.getElementById('raceDiv'); // Race select screen
    divStyle4.style.display = "block";
};

function characterCreationHtml() {
    characterCreationCreateBackground();
    if (player.properties.heroRace === '') { // If you press "New game" race property will be empty, allowing you to pick a race, otherwise you will load a game with a race already picked :)
        var html = '';
        var html2 = '';
        html2 += '<div class="row">';
        html2 += '<div class="col-xs-8 col-xs-offset-2">';
        html2 += 'Pick your race, hover over a race name for more info.';
        html2 += '</div></div>';
        html += '<div class="row">';
        html += '<div class="col-xs-10 col-xs-offset-1">';
        html += '<div class="row">';
        for (var hero in characterRaces) {
            var heroRace = characterRaces[hero];
            var onclickevent = "changeRace('" + heroRace.name + "');";
            html += '<div class="col-xs-4 col-xs-offset-2">';
            html += '<a class="tooltips">' + heroRace.name + "" +
                    '<span style="width:230px;">' +
                    '<div class="row">' +
                    '<div class="col-xs-10 col-xs-offset-1">' +
                    'Stats per level: <br />' +
                    'Strength: ' + heroRace.strength + '<br />' +
                    'Endurance: ' + heroRace.endurance + '<br />' +
                    'Agility: ' + heroRace.agility + '<br />' +
                    'Dexterity: ' + heroRace.dexterity + '<br />' +
                    'Intelligence: ' + heroRace.intelligence + '<br />' +
                    'Wisdom: ' + heroRace.wisdom + '<br />' +
                    'Luck: ' + heroRace.luck + '<br />' +
                    'Other Bonuses:<br />';
            if (heroRace.name === "Human") {
                html += 'Exp/Gold/Exp rate: ' + heroRace.bonusExpGoldDrop() + '%<br />';
                html += 'All stats boost: ' + heroRace.allStatsBonus() + '%';
            }
            else if (heroRace.name === "Half Elf") {
                html += 'Drop rate: ' + heroRace.bonusDrop() + '%<br />';
                html += 'Base critical chance:  ' + heroRace.criticalChance() + '%';
            }
            else if (heroRace.name === "Dwarf") {
                html += 'Gold drop: ' + heroRace.bonusGold() + '%<br />';
                html += 'Base evasion chance:  ' + heroRace.evasionChance() + '%';
            }
            else if (heroRace.name === "Orc") {
                html += 'Bonus health: ' + heroRace.bonusHealth() + '%<br />';
                html += 'All stats boost:  ' + heroRace.allStatsBonus() + '%';
            }
            html += '</div>' + '</div>' +
            '</span>' + '</a>';
            html += '</div>';
            html += '<div class="col-xs-4">';
            html += '<button type="button" style="margin-bottom:5px;" class="btn btn-default border" class="' + heroRace.name + '" onclick="' + onclickevent + '">Choose</button>'//changeRace function ._.
            html += '</div>';
        };
        html += '</div>';
        html += '</div>';
        html += '</div>';
        document.getElementById("raceCreation").innerHTML = html;
        document.getElementById("raceText").innerHTML = html2;
    };
    checkHeroRace();
};

function checkHeroRace() {
    for (var hero in characterRaces) {
        var race = characterRaces[hero];
        if (player.properties.heroRace === race.name) {
            document.getElementById("characterRace").innerHTML = "Race: " + '<a href="#" class="tooltipA">' + player.properties.heroRace +
                '<span>' + 'Stats per level: <br />' +
            'Strength: ' + race.strength + '<br />' +
            'Endurance: ' + race.endurance + '<br />' +
            'Agility: ' + race.agility + '<br />' +
            'Dexterity: ' + race.dexterity + '<br />' +
            'Intelligence: ' + race.intelligence + '<br />' +
            'Wisdom: ' + race.wisdom + '<br />' +
            'Luck: ' + race.luck + '<br />' +
            '</span>' + '</a>';
        };
    };
};

function removeStartingScreen() {
    var divStyle = document.getElementById('loadingContainer');
    divStyle.style.display = "none";
    var divStyle2 = document.getElementById('startingGameContainer');
    divStyle2.style.display = "none";
};

function changeMusicImage() {
    var musicImage = document.getElementById('musicImage');
    var musicImage2 = document.getElementById('musicimage2');
    if (musicImage.className === "glyphicon glyphicon-volume-off") {
        musicImage.className = "glyphicon glyphicon-volume-up";
    }
    else {
        musicImage.className = "glyphicon glyphicon-volume-off";
    };
    if (musicImage2.className === "glyphicon glyphicon-volume-off") {
        musicImage2.className = "glyphicon glyphicon-volume-up";
    }
    else {
        musicImage2.className = "glyphicon glyphicon-volume-off";
    };
};

function primaryStatUpdate() {
    var html = '';
    html += '<div class="row">';
    for (var key in primaryStatInfo) {
        var currentBonus = primaryStatInfo[key];
        var statInfo = primaryStatInfo[key].info;
        var statDisplay2 = primaryStatInfo[key].type;
        if (currentBonus.type === "Damage") {
            var statDisplay = player.functions.minDamage().toFixed(0) + "-" + player.functions.maxDamage().toFixed(0);
        }
        else if (currentBonus.type === "Mana") {
            var statDisplay = player.properties.mana.toFixed(0) + "/" + player.functions.maxMana().toFixed(0);
        }
        else {
            var itemBonus = currentBonus.item;
            var statDisplay = player.functions[statInfo]() + '(<font color="blue">' + player.functions[itemBonus]() + '</font>)' +
                '<input id="' + currentBonus.type + '" type="image" src="images/plus.jpg" alt="Sign Me Up!" onclick="upgrade' + currentBonus.type + '(event);">'
        }
        html += '<div class="col-xs-12">';
        html += '<div class="row">';
        html += '<div class="col-xs-6">';
        html += statDisplay2 + ":";
        html += '</div>';
        html += '<div class="col-xs-6 rightAlign">';
        html += statDisplay;
        html += '</div>';
        html += '</div>';
        html += '</div>';
    }
    html += '</div>';
    document.getElementById("primaryStat").innerHTML = html;

};
function secondaryStatUpdate(){
    var html = '';
    html += '<div class="row">';
    for (var key in secondaryStatInfo) {
        var currentBonus = secondaryStatInfo[key];
        var statInfo = secondaryStatInfo[key].info;
        var number = secondaryStatInfo[key].number;
        if (currentBonus.type === "Stats" || currentBonus.type === "Skill points") {
            var statDisplay = player.properties[statInfo];
        }
        else {
            var statDisplay = player.functions[statInfo]();
        }
        var statDisplay2 = secondaryStatInfo[key].type;
        if (number === 1) {
            var background = "darkBackground";
        }
        else if (number === 2) {
            var background = "background";
        }
        html += '<div class="col-xs-12 ' + background + '">';
        html += '<div class="row">';
        html += '<div class="col-xs-6 ' + background + '">';
        html += statDisplay2 + ":";
        html += '</div>';
        html += '<div class="col-xs-6 rightAlign '  + background + '">';
        if (currentBonus.type === "Magic find" || currentBonus.type === "Gold drop" || currentBonus.type === "Experience rate") {
            html += ((statDisplay - 1) * 100).toFixed(0);
        }
        else if (currentBonus.type === "Stats" || currentBonus.type === "Skill points") {
            html += statDisplay.toFixed(0);
        }
        else if (currentBonus.type === "Crit damage") {
            html += (statDisplay * 100).toFixed(0);
        }
        else {
            html += statDisplay.toFixed(2);
        }
        if (currentBonus.isPercent === true) {
            html += '%';
        };
        html += '</div>';
        html += '</div>';
        html += '</div>';
    };
    html += '</div>';
    document.getElementById("secondaryStat").innerHTML = html;
};

function EquippedItemsEmpty() {
    var html = '';
    html += '<div class="row">';
    for (var itemType in emptyItemSlotInfo) {
        var item = emptyItemSlotInfo[itemType].type;
        var itemEmpty = item + "Empty";
        if (item === "talisman" || item === "helmet" || item === "amulet") {
            if (item === "talisman") {
                html += '<div class="col-xs-6 col-xs-offset-3">';
                html += '<div class="row">';
            }
            html += '<div class="col-xs-4 marginTest"' + 'id="' + itemEmpty + '">';
            html += '<img src=images/' + itemEmpty + '.png>';
            html += '</div>';
            if (item === "amulet") {
                html += '</div>';
                html += '</div>';
            };
        }
        else if (item === "weapon" || item === "chest" || item === "shield") {
            if (item === "weapon") {
                html += '<div class="col-xs-6 col-xs-offset-3">';
                html += '<div class="row">';
            }
            html += '<div class="col-xs-4 marginTest"' + 'id="' + itemEmpty + '">';
            html += '<img src=images/' + itemEmpty + '.png>';
            html += '</div>';
            if (item === "shield") {

                html += '</div>';
                html += '</div>';
            }
        }
        else if (item === "legs" || item === "ring") {
            if (item === "legs") {
                html += '<div class="col-xs-6 col-xs-offset-3">';
                html += '<div class="row">';
                html += '<div class="col-xs-4 marginTest">';
                html += '</div>';
            }
            html += '<div class="col-xs-4 marginTest"' + 'id="' + itemEmpty + '">';
            html += '<img src=images/' + itemEmpty + '.png>';
            html += '</div>';
            if (item === "ring") {
                html += '</div>';
                html += '</div>';
            }
        }
        else if (item === "boots") {
            html += '<div class="col-xs-6 col-xs-offset-3">';
            html += '<div class="row">';
            html += '<div class="col-xs-4 col-xs-offset-4"' + 'id="' + itemEmpty + '">';
            html += '<img src=images/' + itemEmpty + '.png>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
        };
    };
    html += '</div>';
    document.getElementById("equipHtml").innerHTML = html;
};

function checkIfEquippedEmpty() {
    var html = '';
    for (var item in equippedItems) {
        var itemType = equippedItems[item];
        if (itemType.isEquipped === true) {
            var testItem = checkEquippedItemType(item);
            $('#' + item + "Empty" + '').empty().append(testItem);
        }
        else if (itemType.isEquipped === false) {
            var currentItem = '<img src=images/' + item + "Empty" + '.png>';
            $('#' + item + "Empty" + '').empty().append(currentItem);
        }
    }
};

function checkEquippedItemType(newItem, check) {
    var html = '';
    var item = equippedItems[newItem];
    //Getting the actual stat object from the word.
    var itemType = item;
    if (itemType.hasOwnProperty('itemType')) {
        html += '<div id="equippedItem' + itemType.id + '"' + '>';
        html += '<a class="tooltips" style="cursor:pointer;">';
        if (itemType.itemType === "weapon") {
            html += '<img class="' + itemType.itemType;
        }
        else {
            html += '<img class="' + itemType.subType;
        }
        html += '"' + 'src="images/items/' + itemType.subType + "/" + itemType.image + '.png" id="' + itemType.itemRarity + '"onclick="unequipItem' + "(" + itemType.id + ', ' + "'solo'" + ")" + '" />';
        html += '<span style="width:200px;">';
        html += '<div class="row">';
        html += '<div class="col-xs-12">';

        if (itemType.hasOwnProperty('itemType')) {
            var equippedItemDisplay = itemType;
            html += '<font color="' + equippedItemDisplay.color + '"><strong>' + equippedItemDisplay.name + '</strong></font>' + '<br />';
            if (equippedItemDisplay.itemType === "weapon") {
                html += '<div style="border-top: 1px solid;border-bottom: 1px solid;">Weapon class: ' + equippedItemDisplay.subType.capitalizeFirstLetter() + '<br />';
                html += 'Damage: ' + equippedItemDisplay.MinDamage + " to " + equippedItemDisplay.MaxDamage + "</div>";
            }
            if (equippedItemDisplay.subType === "shield") {
                html += '<div style="border-top: 1px solid;border-bottom: 1px solid;">Chance to Block: ' + equippedItemDisplay['Block chance'] + '%'  + " </div>";
            }
            if (equippedItemDisplay.itemType === "armor") {
                html += '<div style="border-bottom: 1px solid;">Defense: ' + equippedItemDisplay.defense + " </div>";
            }
            for (var statName in equippedItemDisplay) { //Here stat will become the word Defense
                if ('All attributes, Strength, Endurance, Agility, Dexterity, Wisdom, Intelligence, Luck, Evasion, Bonus damage, Bonus armor, Bonus life, Bonus mana, Health regen, Mana regen, Magic find, Gold drop, Experience rate, Life gain on hit, Critical damage, Critical chance,'.indexOf(statName) != -1) {
                    //Getting the actual stat object from the word.
                    var selectedStat = equippedItemDisplay[statName];
                    if (selectedStat > 0 || selectedStat > 0 && statName === "Bonus damage") {
                        html += '<strong><font color="0066FF">' + statName + ": " + selectedStat + '</font></strong>' + '<br />';
                    }
                };
            };
            html += '<div style="border-top: 1px solid; border-bottom: 1px solid;">';
            html += "Value: " + equippedItemDisplay.Value + " gold<br />";
            html += '<font color="#CC6633">' + equippedItemDisplay.lore + '</font>';
            html += '</div>';
            html += '<strong>Currently equipped</strong>';
            html += '</div>';
            html += '</div>';
            html += '</span></a>';
        };
        html += '</div>';
    };
    // html += '</div>';
    return html;
};

function equipAndSellItem() {
    var html = '';
    html += '<br /><button type="button" class="equip" onclick="itemSell' + "(" + checkedItem + ")" + '">Sell</button>';
    html += '<button type="button" class="equip" onclick="equipItem' + "(" + checkedItem + ")" + '">Equip</button>';

    $('.itemEquipAndSell').empty().append(html);
};

function saveGameSlot() {
    var html = '';

    var onclickevent = 'onclick="saveGameFunction' + "(" + "'manualSave', " + player.properties.saveSlot + ")" + '">';
    var onclickevent2 = 'onclick="load' + "(" + player.properties.saveSlot + ")" + '">';
    html += '<button type="button" class="btn btn-sm btn-default"' + onclickevent;
    html += 'save'
    html += '</button>'
    html += '<button type="button" class="btn btn-sm btn-default"' + onclickevent2;
    html += 'load'
    html += '</button>'
    html += '<button type="button" class="btn btn-sm btn-default" onclick="resetCheck()">'
    html += 'reset'
    html += '</button><br /><br />'
    document.getElementById('saveGameSlot').innerHTML = html;
};

var itemShopWeapon = [];
var itemShopArmor = [];
var itemShopAccessory = [];
var weaponAmount = 0;
var armorAmount = 0;
var accessoryAmount = 0;
function getShopItem() {
    var shopItemAmount = 50;
    var shopItemLevel = player.properties.level;
    var weaponLevelBonus = 5;
    var armorLevelBonus = 5;
    for (var i = 0; i < shopItemAmount; i++) {
        if (itemShopWeapon.length < 10 || itemShopArmor.length < 10 || itemShopAccessory.length < 10) {
            getItemType(shopItemLevel, false);
        }
        else {
            break;
        }
    };
    displayShopItems(itemShopWeapon);
    displayShopItems(itemShopArmor);
    displayShopItems(itemShopAccessory);
};

function displayShopItems(type) {
    var html = '';
    var itemTypeDisplay = type
    if (type === itemShopWeapon) {
        var event = 'onclick="sortShop' + "(" + "'Value', " + "'Weapon'" + ")" + '">';
        var event2 = 'onclick="sortShop' + "(" + "'Rarity', " + "'Weapon'" + ")" + '">';
    }
    else if (type === itemShopArmor) {
        var event = 'onclick="sortShop' + "(" + "'Value', " + "'Armor'" + ")" + '">';
        var event2 = 'onclick="sortShop' + "(" + "'Rarity', " + "'Armor'" + ")" + '">';
    }
    else if (type === itemShopAccessory) {
        var event = 'onclick="sortShop' + "(" + "'Value', " + "'Accessory'" + ")" + '">';
        var event2 = 'onclick="sortShop' + "(" + "'Rarity', " + "'Accessory'" + ")" + '">';
    }
    html += '<div class="row">';
    html += '<div class="col-xs-10 col-xs-offset-1">';
    html += '<div class="shopItemBuy"></div>';
    html += '<div class="c3">Sort by:<br />';
    html += '<button ' + event + "Value" + '</button>'
    html += '<button ' + event2 + "Rarity" + '</button>';
    html += '</div>';
    html += '<div class="row">';
    html += '<div class="c3"><h3>Item Shop</h3></div>';
    for (var i = 0; i < itemTypeDisplay.length; i++) {
        var ItemDisplay = itemTypeDisplay[i];
                if (ItemDisplay.itemType === "weapon") {
                    itemStat = equippedItems.weapon;
                }
                else if (ItemDisplay.subType === "shield") {
                    itemStat = equippedItems.shield;
                }
                else if (ItemDisplay.subType === "chest") {
                    itemStat = equippedItems.chest;
                }
                else if (ItemDisplay.subType === "helmet") {
                    itemStat = equippedItems.helmet;
                }
                else if (ItemDisplay.subType === "legs") {
                    itemStat = equippedItems.legs;
                }
                else if (ItemDisplay.subType === "boots") {
                    itemStat = equippedItems.boots;
                }
                else if (ItemDisplay.subType === "ring") {
                    itemStat = equippedItems.ring;
                }
                else if (ItemDisplay.subType === "amulet") {
                    itemStat = equippedItems.amulet;
                }
                else if (ItemDisplay.subType === "talisman") {
                    itemStat = equippedItems.talisman;
                }
                html += '<div class="col-xs-6">';
                html += '<a class="tooltips" style="cursor:pointer;">';
                html += '<label> <input type="radio" name="shopItem" value=' + ItemDisplay.id + '>';
                if (ItemDisplay.itemType === "weapon") {
                    html += '<img class="' + ItemDisplay.itemType;
                }
                else {
                    html += '<img class="' + ItemDisplay.subType;
                }
                html += '"' + 'src="images/items/' + ItemDisplay.subType + "/" + ItemDisplay.image + '.png" id="' + ItemDisplay.itemRarity + '"/>';
                html += '</label>';
                if (itemStat.hasOwnProperty('itemType')) {
                    html += '<span>';
                }
                else {
                    html += '<span style="width:300px;">';
                }
                html += '<div class="row">';
                html += '<div class="col-xs-12">';

                if (itemStat.hasOwnProperty('itemType')) {
                    html += '<div class="row">';
                    html += '<div class="col-xs-6">';
                    html += '<font color="' + itemStat.color + '"><strong>' + itemStat.name + '</strong></font>' + '<br />';
                    if (itemStat.itemType === "weapon") {
                        html += '<div  style="border-top: 1px solid;border-bottom: 1px solid;">Weapon class: ' + itemStat.subType.capitalizeFirstLetter() + '<br />';
                        html += 'Damage: ' + itemStat.MinDamage + " to " + itemStat.MaxDamage + "</div>";
                    }
                    if (itemStat.subType === "shield") {
                        html += '<div style="border-top: 1px solid;border-bottom: 1px solid;">Chance to Block: ' + itemStat['Block chance'] + '%'  + " </div>";
                    }
                    if (itemStat.itemType === "armor") {
                        html += '<div  style="border-top: 1px solid;border-bottom: 1px solid;">Defense: ' + itemStat.defense + " </div>";
                    }
                    for (var statName in itemStat) { //Here stat will become the word Defense
                        if ('All attributes, Strength, Endurance, Agility, Dexterity, Wisdom, Intelligence, Luck, Evasion, Bonus damage, Bonus armor, Bonus life, Bonus mana, Health regen, Mana regen, Magic find, Gold drop, Experience rate, Life gain on hit, Critical damage, Critical chance,'.indexOf(statName) != -1) {
                            //Getting the actual stat object from the word.
                            var selectedStat = itemStat[statName];
                            if (selectedStat > 0 || selectedStat > 0 && statName === "Bonus damage") {
                                html += '<strong><font color="0066FF">' + statName + ": " + selectedStat + '</font></strong>' + '<br />';
                            }
                        };
                    };
                    html += '<div style="border-top: 1px solid; border-bottom: 1px solid;">';
                    html += "Value: " + itemStat.Value + " gold<br />";
                    html += '<font color="#CC6633">' + itemStat.lore + '</font>';
                    html += '</div>';
                    html += '<strong>Currently equipped</strong>';
                    html += '</div>';
                };

                if (itemStat.hasOwnProperty('itemType')) {
                    html += '<div class="col-xs-6">';
                }
                else {
                    html += '<div class="col-xs-10 col-xs-offset-1">';
                }
                html += '<font color="' + ItemDisplay.color + '"><strong>' + ItemDisplay.name + '</strong></font>' + '<br />';
                if (ItemDisplay.itemType === "weapon") {
                    html += '<div  style="border-top: 1px solid;border-bottom: 1px solid;">Weapon class: ' + ItemDisplay.subType.capitalizeFirstLetter() + '<br />';
                    html += 'Damage: ' + ItemDisplay.MinDamage + " to " + ItemDisplay.MaxDamage + '</div>';
                }
                if (ItemDisplay.subType === "shield") {
                    html += '<div style="border-top: 1px solid;border-bottom: 1px solid;">Chance to Block: ' + ItemDisplay['Block chance'] + '%'  + " </div>";
                }
                if (ItemDisplay.itemType === "armor") {
                    html += '<div  style="border-top: 1px solid;border-bottom: 1px solid;">Defense: ' + ItemDisplay.defense + " </div>";
                }
                var item = ItemDisplay;
                for (var statName in item) { //Here stat will become the word Defense
                    if ('All attributes, Strength, Endurance, Agility, Dexterity, Wisdom, Intelligence, Luck, Evasion, Bonus damage, Bonus armor, Bonus life, Bonus mana, Health regen, Mana regen, Magic find, Gold drop, Experience rate, Life gain on hit, Critical damage, Critical chance,'.indexOf(statName) != -1) {
                        //Getting the actual stat object from the word.
                        var selectedStat = item[statName];
                        if (selectedStat > 0 || selectedStat > 0 && statName === "Bonus damage") {
                            html += '<strong><font color="0066FF">' + statName + ": " + selectedStat + '</font></strong>' + '<br />';
                        }
                    };
                };
                html += '<div style="border-top: 1px solid; border-bottom: 1px solid;">';
                html += "Value: " + ItemDisplay.Value + " gold<br />";
                html += '<font color="#CC6633">' + ItemDisplay.lore + '</font>';
                html += '</div>';
                html += '<strong>Left-Click to select</strong>';
                html += '</div></div>';
                html += '</div>';
                if (itemStat.hasOwnProperty('itemType')) {
                    html += '</div>';
                }
                html += '</span>' + '</a>';
                html += '<br />' + ItemDisplay.shopPrice + ' Gold';
                html += '</div>';
        };

    html += '</div></div></div>';
    if (type === itemShopWeapon) {
        $('#shopWeapon').empty().append(html);
    }
    else if (type === itemShopArmor) {

        $('#shopArmor').empty().append(html);
    }
    else if (type === itemShopAccessory) {

        $('#shopAccessory').empty().append(html);
    }
    ShopBuyButtons();
};

function ShopBuyButtons() {
    var html = '';
    html += '<br /><button type="button" class="shopButton" onclick="itemBuy' + "(" + checkedShopItem + ")" + '">Buy</button>';
    html += '<button type="button" class="shopButton" onclick="rerollShopItems()">Refresh</button>';
    $('.shopItemBuy').empty().append(html);
};

function itemBuy(id) {
    var item = itemShopWeapon.filter(function (obj) {
        return obj.id === id;
    })[0];
    if (item !== undefined) {
        var index = itemShopWeapon.indexOf(item, 0);
        playerInventory.push(item);
        if (index > -1) {
            itemShopWeapon.splice(index, 1);
        };
        displayShopItems(itemShopWeapon);
        weaponAmount--;
    };
    
    if (item === undefined) {
        item = itemShopArmor.filter(function (obj) {
            return obj.id === id;
        })[0];
        if (item !== undefined) {
            index = itemShopArmor.indexOf(item, 0);
            playerInventory.push(item);

            if (index > -1) {
                itemShopArmor.splice(index, 1);
            };
            displayShopItems(itemShopArmor);
            armorAmount--;
        };
        if (item === undefined) {
            item = itemShopAccessory.filter(function (obj) {
                return obj.id === id;
            })[0];
            if (item !== undefined) {
                index = itemShopAccessory.indexOf(item, 0);
                playerInventory.push(item);

                if (index > -1) {
                    itemShopAccessory.splice(index, 1);
                };
                displayShopItems(itemShopAccessory);
                accessoryAmount--;
            };
        };
    };
    CreateInventoryWeaponHtml();
};


function refillShopInterval() {
    if ((itemShopArmor.length + itemShopAccessory.length + itemShopWeapon.length) < 30) {
        getShopItem();
    };
    setTimeout(refillShopInterval, 10000);
};

function rerollShopItems() {
    itemShopWeapon = [];
    itemShopArmor = [];
    itemShopAccessory = [];
    weaponAmount = 0;
    armorAmount = 0;
    accessoryAmount = 0;
    getShopItem();
};

function shopOther() {
    var html = '';
    html += '<div class="row">';
    html += '<div class="col-xs-12">';
    html += '<div class="row">';
    for (var key in shopOtherList) {
        var itemType = shopOtherList[key];
        var itemTypePrice = itemType.type3;
        html += '<div class="col-xs-12">';
        html += '<div class="c3">';
        html += '<img src=' + itemType.image + ' alt="Buy"><br />'
        html += itemType.type + ' - ' + window[itemTypePrice].price + ' Gold';
        html += '</div>';
        html += '<button type="button" class="buy" onclick="' + itemType.type2 + "(" + 1 + ")" + '">' + "Buy" + '</button>';
        html += '<button type="button" class="buy" onclick="' + itemType.type2 + "(" + 10 + ")" + '">' + "Buy 10" + '</button>';
        html += '<button type="button" class="buy" onclick="' + itemType.type2 + "(" + 100 + ")" + '">' + "Buy 100" + '</button>';
        html += '</div>';
    }
    html += '</div></div></div>';

    $('#shopOther').empty().append(html);
};

var shopOtherList = [
    {
        type: "Stat Points",
        image: "images/stat.png",
        type2: "buyStat",
        type3: 'statStatus',
    },
    {
        type: "Backpack",
        image: "images/bag.png",
        type2: "buyBackpack",
        type3: 'backpackStatus',
    },
    {
        type: "Small Potion",
        image: "images/SmallPotion.png",
        type2: "buySmallPotion",
        type3: 'potionStatus',
    },
    {
        type: "Medium Potion",
        image: "images/MediumPotion.png",
        type2: "buyMediumPotion",
        type3: 'mediumPotionStatus',
    },
    {
        type: "Super Potion",
        image: "images/SuperPotion.png",
        type2: "buySuperPotion",
        type3: 'superPotionStatus',
    }
]