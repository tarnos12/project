//Create player Weapon skill html
var weaponTabActive = 'swordTest';
function changeTabWeapon(index) {
    weaponTabActive = index;
};
function CreateWeaponSkillHtml() {
    var html = '';
    html += '<div class="c3"><b><a href="#" class="tooltipB">Hover over there, for some Help';
    html += '<span>';
    html += '<ul>';
    html += "<li>There you can find your weapon mastery levels.</li>" + '</br />';
    html += "<li>You increase mastery using certain weapon types like: sword,axe,mace etc.</li>" + '</br />';
    html += "<li>At certain levels of mastery you will unlock special bonuses.</li>" + '<br />';
    html += "<li>Each level of mastery give you little boost to stats, while you equip weapon of that type.</li>" + '<br />';
    html += '</ul>';
    html += '</span></a></b></div>';
    html += '</div>';
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
                    html += "<br />" + statName + ": " + displayStat;
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
                if (itemStat.level < displaySkill.levelReq) {
                    html += "<br />" + '<span class ="bold">' + displaySkill.name + '</span>' + ": Unlocks at " + displaySkill.levelReq + " level";
                }
                else {
                    html += "<br />" + '<span class ="bold">' + displaySkill.name + '</span>' + "<br />" + displaySkill.description();
                };
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
}
//Create player Equipped items html
function CreateEquipHtml() {
    var html = '';
    html += '<div class="row">';
    //Weapon
    var item = equippedItems;
    for (var type in item) { //Here stat will become the word Defense
        if ('weapon, offHand, armor, ring, amulet, talisman'.indexOf(type) != -1) {
            //Getting the actual stat object from the word.
            var itemType = item[type];
            if (itemType.hasOwnProperty('itemType')) {
                html += '<div class="col-xs-12">';
                html += '<a href="#" class="tooltipA">';
                html += '<img src="images/items/' + itemType.subType + "/" + itemType.image + '.png" />';
                html += '<span>';
                html += '<b>' + itemType.name + '</b>';
                html += '<br />';
                html += 'Rarity: ' + '<font color="' + itemType.color + '">' + itemType.itemQuality + '</font>' + '<br />';
                html += "Item Type: " + itemType.subType;
                if (itemType == item.weapon) {
                    html += '<br />' + 'Level: ' + itemType.level + "/" + itemType.maxLevel;
                    html += '<br />' + 'Experience: ' + itemType.exp + "/" + itemType.maxExp;
                };
                if (itemType.minDamage > 0 && itemType.maxDamage > 0) {
                    html += '<br />' + "Damage: " + itemType.minDamage + "-";
                    html += itemType.maxDamage;
                };
                for (var statName in itemType) { //Here stat will become the word Defense
                    if ('defense, strength, endurance, agility, dexterity, intelligence, wisdom, luck, expRate, dropRate, goldRate'.indexOf(statName) != -1) {
                        //Getting the actual stat object from the word.
                        if (itemType[statName] > 0) {
                            if (statName === "goldRate" || statName === "expRate" || statName === "dropRate") {
                                if (statName === "expRate") {
                                    //$1 and $2 are "separated" words, so I can easly change the order like $2, $1" which would give "Rate exp"(first letter capitalized)
                                    var statNameSpace = statName.replace(/^(.{3})(.*)$/, "$1 $2");
                                    html += "<br />" + statNameSpace.capitalizeFirstLetter() + ": " + itemType[statName];
                                }
                                else {
                                    var statNameSpace2 = statName.replace(/^(.{4})(.*)$/, "$1 $2");
                                    html += "<br />" + statNameSpace2.capitalizeFirstLetter() + ": " + itemType[statName];
                                };
                            }
                            else {
                                html += "<br />" + statName.capitalizeFirstLetter() + ": " + itemType[statName];
                            };
                        };
                    };
                };
                html += '<br />' + "Value: " + itemType.value + "gold";
                html += '</span>' + '</a>' +
                    '<button type="button" class="attack" onclick="unequipItem' + "(" + itemType.id + ")" + '">Unequip</button>';
                html += '</div>';
            };
        };
    };
    html += '</div>';
    html += '</div>';
    document.getElementById("equipHtml").innerHTML = html;
};



var monsterTabActiveNum = 0;
function changedTabmonster(index) {
    monsterTabActiveNum = index;
}
function CreateMonsterHtml() {
    var html = '';
    html += '<div class="c3"><b><a href="#" class="tooltipB">Hover over there, for some Help';
    html += '<span>';
    html += '<ul>';
    html += "<li>Attack a monsters here to gain gold/experience and items.</li>" + '</br />';
    html += "<li>Each battle have 20 turns, then it's called a draw.</li>" + '</br />';
    html += "<li>Dying means 5 second revive time and 20% lose of current experience/gold</li>" + '<br />';
    html += "<li>Killing monsters, unlock story and stronger monsters.</li>" + '<br />';
    html += '</ul>';
    html += '</span></a></b></div>';
    html += '</div>';
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
                        '<img src="images/' + "monster" + monster.Stats.id + '.jpg" alt="' + monster.Stats.displayName + '">' +
                        '<span>' +
                        '<b>' + monster.Stats.displayName + '</b>' +
                        '<br />' +
                        'Dmg:' + monster.Stats.minDmg + "-" + monster.Stats.maxDmg +
                        '<br />' +
                        'Def:' + monster.Stats.def +
                        '</span></a>' +
                        '<br />' +
                        "Health: " + '<span class="hp">' + monster.Stats.hp + '</span>' + "/" + monster.Stats.maxHp +
                        '<br />' +
                        '<span type="button" class="attack" onclick="attack(' + monster.Stats.name + ')">' + 'Attack' + '</span>' + '</div></div>';
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
}

function CreateInventoryWeaponHtml() {
    var html = '';
    var itemStat;
    html += '<div class="c3"><b><a href="#" class="tooltipB">Hover over there, for some Help';
    html += '<span>';
    html += '<ul>';
    html += "<li>Below you can see, your inventory slots</li>" + '</br />';
    html += "<li>Click on a tab, to see other types of items.</li>" + '</br />';
    html += "<li>There are 5 item qualities as follow: Common, Uncommon, Rare, Epic, Legendary.</li>" + '</br />';
    html += "<li>Each item gives different stats, based on item type i.e. Staff give you more intelligence, while Sword more strength.</li>" + '<br />';
    html += "<li>Each weapon can level up, while you fight monsters with weapon equipped.</li>" + '<br />';
    html += "<li>Each weapon type has it's own mastery, like \"Sword Mastery\" which increase your stats, as you keep using Swords in battle.";
    html += '</ul>';
    html += '</span></a></b></div>';
    html += '</div>';
    html += '<div class="c3">' + "Inventory Slots: " + playerInventory.length + "/" + player.inventory() + '</div>';
    html += '<ul class="nav nav-tabs">';
    for (var k = 0; k < 4; k++) {
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
        html += '<div class="row">';
        html += '<div class="c3"><h4>Inventory</h4></div>';
        for (var i = 0; i < playerInventory.length; i++) {
            if (playerInventory[i].itemType === InventoryItemTypes[j].type) {
                if (playerInventory[i].itemType === "weapon") {
                    itemStat = equippedItems.weapon;
                }
                else if (playerInventory[i].itemType === "offHand") {
                    itemStat = equippedItems.offHand;
                }
                else if (playerInventory[i].itemType === "armor") {
                    itemStat = equippedItems.armor;
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
                html += '<div class="col-xs-12 col-lg-6 c8">';
                html += '<a href="#" class="tooltipA">';
                html += '<img src="images/items/' + playerInventory[i].subType + "/" + playerInventory[i].image + '.png" class="' + playerInventory[i].itemQuality + '"/>';
                html += '<span>';
                html += '<b>' + playerInventory[i].name + '</b>';
                html += '<br />';
                html += 'Rarity: ' + '<font color="' + playerInventory[i].color + '">' + playerInventory[i].itemQuality + '</font>' + '<br />';
                html += "Item Type: " + playerInventory[i].subType;
                if (playerInventory[i].itemType == "weapon") {
                    html += '<br />' + 'Level: ' + playerInventory[i].level + "/" + playerInventory[i].maxLevel + '<br />';
                    html += 'Experience: ' + playerInventory[i].exp + "/" + playerInventory[i].maxExp + '<br />';
                    if (playerInventory[i].materiaSlot_1 !== undefined) {
                        for (var k = 0; k < materiaType.length; k++) {
                            var materiaKey = materiaType[k].type;
                            var item = playerInventory[i];
                            if (item.hasOwnProperty(materiaKey)) {
                                html += '<img src="images/items/materia/Materia.png"><br />';
                            };
                        };
                    };
                };
                if ((playerInventory[i].minDamage - itemStat.minDamage) < 0) {
                    html += "Damage: " + playerInventory[i].minDamage + " (" + '<b style="color:red">' + (playerInventory[i].minDamage - itemStat.minDamage) + '</b>' + ")" + " to ";
                }
                else if ((playerInventory[i].minDamage - itemStat.minDamage) > 0) {
                    html += "Damage: " + playerInventory[i].minDamage + " (" + '<b style="color:green">' + "+" + (playerInventory[i].minDamage - itemStat.minDamage) + '</b>' + ")" + " to ";
                }
                else if ((playerInventory[i].minDamage - itemStat.minDamage) == 0) {
                    html += "Damage: " + playerInventory[i].minDamage + " (0)" + " to ";
                }
                if ((playerInventory[i].maxDamage - itemStat.maxDamage) < 0) {
                    html += playerInventory[i].maxDamage + " (" + '<b style="color:red">' + (playerInventory[i].maxDamage - itemStat.maxDamage) + '</b>' + ")";
                }
                else if ((playerInventory[i].maxDamage - itemStat.maxDamage) > 0) {
                    html += playerInventory[i].maxDamage + " (" + '<b style="color:green">' + "+" + (playerInventory[i].maxDamage - itemStat.maxDamage) + '</b>' + ")";
                }
                else if ((playerInventory[i].maxDamage - itemStat.maxDamage) == 0) {
                    html += playerInventory[i].maxDamage + " (0)";
                }
                if ((playerInventory[i].expRate - itemStat.expRate) < 0) {
                    html += '<br />' + "Exp Rate: " + playerInventory[i].expRate + " (" + '<b style="color:red">' + (playerInventory[i].expRate - itemStat.expRate) + '</b>' + ")";
                }
                else if ((playerInventory[i].expRate - itemStat.expRate) > 0) {
                    html += '<br />' + "Exp Rate: " + playerInventory[i].expRate + " (" + '<b style="color:green">' + "+" + (playerInventory[i].expRate - itemStat.expRate) + '</b>' + ")";
                }
                else if ((playerInventory[i].expRate - itemStat.expRate) == 0 && playerInventory[i].expRate > 0) {
                    html += '<br />' + "Exp Rate: " + playerInventory[i].expRate + " (0)";
                }
                if ((playerInventory[i].goldRate - itemStat.goldRate) < 0) {
                    html += '<br />' + "Gold Rate: " + playerInventory[i].goldRate + " (" + '<b style="color:red">' + (playerInventory[i].goldRate - itemStat.goldRate) + '</b>' + ")";
                }
                else if ((playerInventory[i].goldRate - itemStat.goldRate) > 0) {
                    html += '<br />' + "Gold Rate: " + playerInventory[i].goldRate + " (" + '<b style="color:green">' + "+" + (playerInventory[i].goldRate - itemStat.goldRate) + '</b>' + ")";
                }
                else if ((playerInventory[i].goldRate - itemStat.goldRate) == 0 && playerInventory[i].goldRate > 0) {
                    html += '<br />' + "Gold Rate: " + playerInventory[i].goldRate + " (0)";
                }
                if ((playerInventory[i].dropRate - itemStat.dropRate) < 0) {
                    html += '<br />' + "Drop Rate: " + playerInventory[i].dropRate + " (" + '<b style="color:red">' + (playerInventory[i].dropRate - itemStat.dropRate) + '</b>' + ")";
                }
                else if ((playerInventory[i].dropRate - itemStat.dropRate) > 0) {
                    html += '<br />' + "Drop Rate: " + playerInventory[i].dropRate + " (" + '<b style="color:green">' + "+" + (playerInventory[i].dropRate - itemStat.dropRate) + '</b>' + ")";
                }
                else if ((playerInventory[i].dropRate - itemStat.dropRate) == 0 && playerInventory[i].dropRate > 0) {
                    html += '<br />' + "Drop Rate: " + playerInventory[i].dropRate + " (0)";
                };
                var item = playerInventory[i];
                for (var statName in item) { //Here stat will become the word Defense
                    if ('defense, strength, endurance, agility, dexterity, intelligence, wisdom, luck'.indexOf(statName) != -1) {
                        //Getting the actual stat object from the word.
                        var selectedStat = item[statName];
                        if (selectedStat > 0 || itemStat[statName] > 0) { //Since itemStat has the stat with the same name
                            if (itemStat[statName] > 0 && (selectedStat - itemStat[statName]) < 0) {
                                html += '<br />' + statName + ": " + selectedStat + " (" + '<b style="color:red">' + (selectedStat - itemStat[statName]) + '</b>' + ")";
                            }
                            else if (itemStat[statName] > 0 && (selectedStat - itemStat[statName]) > 0) {
                                html += '<br />' + statName + ": " + selectedStat + " (" + '<b style="color:green">' + "+" + (selectedStat - itemStat[statName]) + '</b>' + ")";
                            }
                            else if (itemStat[statName] > 0 && (selectedStat - itemStat[statName]) == 0) {
                                html += '<br />' + statName + ": " + selectedStat + " (0)";
                            }
                            else {
                                html += '<br />' + statName + ": " + selectedStat + " (" + '<b style="color:green">' + "+" + selectedStat + '</b>' + ")";
                            };
                        };
                    };
                };
                html += '<br />' + "Value: " + playerInventory[i].value + "gold";
                html += '</span>' + '</a>' + '</td>' +
                 '<button type="button" class="equip" onclick="equipItem' + "(" + playerInventory[i].id + ")" + '">Equip</button>' +
                 '<button type="button" class="equip" onclick="itemSell' + "(" + playerInventory[i].id + ")" + '">Sell</button>';
                html += '</div>';
            };
        };
        html += '</div>';
        html += '</div>';
    };
    html += '</div>';
    document.getElementById("inventory").innerHTML = html;
};

var spellDamageDisplay = 0;
function CreatePlayerSkillsHtml() {
    var html = '';
    html += '<div class="row">';
    html += '<div class="c3 bold">Mana left: ' + (player.maxMana() - spellTotalManaCost) + "</div>";
    html += '<div class="col-xs-10">';
    for (var spell in activeSpells) {
        if (activeSpells.hasOwnProperty(spell)) {
            var selectedSpell = activeSpells[spell];
            var image = "images/skills/" + selectedSpell.image + ".png";
            var activeSpell = '';
            if (selectedSpell.isActive == true) {
                activeSpell = '<font color="green">' + '<b>' + "Active" + '</b>' + '</font>';
            } else {
                activeSpell = '<font color="red">' + '<b>' + "Not Active" + '</b>' + '</font>';
            };
            var onclickevent = "upgradeSpell('" + spell + "');";
            var spellonclickevent = "spellActivation('" + spell + "');";
            html += '<div class="col-xs-4">';
            html += '<a href="#" class="tooltipA">';
            html += '<img src="' + image + '" onclick="' + spellonclickevent + '"/>';
            html += '<span>';
            html += 'Name: ' + selectedSpell.name + '<br />';
            html += "Level " + selectedSpell.level;
            html += "<br />Mana Cost: " + selectedSpell.manaReq;
            html += "<br />Max Charges " + selectedSpell.maxCharge();
            html += "<br />" + activeSpell;
            html += "<br />Damage: " + selectedSpell.damage();
            html += '</span></a>';
            html += '<input type="image" src="images/plus.jpg" alt="Sign Me Up!" onclick="' + onclickevent + '">';
            html += '</div>';
        };
    };
    html += '<div class="c3"><b><a href="#" class="tooltipB">Hover over there, for some Help';
    html += '<span>';
    html += "Each spell:";
    html += '<ul>';
    html += "<li>Deal damage based on player intelligence and spell level.</li>" + '</br />';
    html += "<li>Has level requirement to upgrade it.</li>" + '<br />';
    html += "<li>Require certain amount of maximum Mana to be activated, you can activate as many spells as you want, as long as you have required max Mana</li>" + '<br />';
    html += "<li>Has certain amount of charges(i.e. how many times will be casted during battle(1 cast per turn)) Can be increased with Wisdom.";
    html += '</ul>';
    html += '</span></a></b></div>';
    html += '</div>';
    html += '</div>';
    document.getElementById("playerSkills").innerHTML = html;
};

function CreatePlayerHotBar() {
    var html = '';
    html += '<div class="row">';
    html += '<div class="c3"><b>Active Spells</b></div>';
    for (var spell in activeSpells) {
        if (activeSpells.hasOwnProperty(spell)) {
            var selectedSpell = activeSpells[spell];
            var image = "images/skills/" + selectedSpell.image + ".png";

            if (selectedSpell.isActive == true) { // Check if spell is active, and put it in hotbar
                html += '<div class="col-xs-4 col-lg-3">';
                html += '<a href="#" class="tooltipA">';
                html += '<img src="' + image + '"/>';
                html += '<span>';
                html += 'Name: ' + selectedSpell.name + '<br />';
                html += "Level " + selectedSpell.level;
                html += "<br />Max Charges " + selectedSpell.maxCharge();
                html += "<br />Damage: " + selectedSpell.damage();
                html += '</span></a>';
                html += "<br />" + selectedSpell.name;
                html += '</div>';
            };
        };
    };
    html += '</div>';
    document.getElementById("hotBar").innerHTML = html;
};

//Character Creation
function characterCreationRemoveBackground() {
    var divStyle = document.getElementById('selectClassDiv');
    divStyle.style.display = "none";
    var divBackgroundStyle = document.getElementById('selectClassBackground');
    divBackgroundStyle.style.display = "none";
    var sound = player.sound;
    myAudio(sound);
    startingScreen();
};

function characterCreationCreateBackground() {
    var divStyle = document.getElementById('selectClassDiv');
    divStyle.style.display = "block";
    var divBackgroundStyle = document.getElementById('selectClassBackground');
    divBackgroundStyle.style.display = "block";
};

function characterCreationHtml() {
    characterCreationCreateBackground();
    if (player.heroClass === '') {
        var html = '';
        html += '<div class="row">';
        html += '<div class="col-sm-10 col-xs-offset-1">';
        html += 'Pick your class, hover over a class name for more info.';
        html += '<div class="row">';
        for (var hero in characterClasses) {
            var heroClass = characterClasses[hero];
            var onclickevent = "changeClass('" + heroClass.name + "');";
            html += '<div class="col-xs-3">';
            html += '<a href="#" class="tooltipA">' + heroClass.name + "" +
                    '<span>' + 'Stats per level: <br />' +
                    'Strength: ' + heroClass.strength + '<br />' +
                    'Endurance: ' + heroClass.endurance + '<br />' +
                    'Agility: ' + heroClass.agility + '<br />' +
                    'Dexterity: ' + heroClass.dexterity + '<br />' +
                    'Intelligence: ' + heroClass.intelligence + '<br />' +
                    'Wisdom: ' + heroClass.wisdom + '<br />' +
                    'Luck: ' + heroClass.luck + '<br />' +
                    '</span>' + '</a>';
            html += '<button type="button" class="' + heroClass.name + '" onclick="' + onclickevent + '">Choose</button>'//changeClass function ._.
            html += '</div>';
        };
        html += '</div>';
        html += '</div>';
        html += '</div>';
        document.getElementById("classCreation").innerHTML = html;
    };
    for (var hero in characterClasses) {
        var heroClass = characterClasses[hero];
        if (player.heroClass === heroClass.name) {
            document.getElementById("characterClass").innerHTML = "Class: " + '<a href="#" class="tooltipA">' + player.heroClass +
                '<span>' + 'Stats per level: <br />' +
            'Strength: ' + heroClass.strength + '<br />' +
            'Endurance: ' + heroClass.endurance + '<br />' +
            'Agility: ' + heroClass.agility + '<br />' +
            'Dexterity: ' + heroClass.dexterity + '<br />' +
            'Intelligence: ' + heroClass.intelligence + '<br />' +
            'Wisdom: ' + heroClass.wisdom + '<br />' +
            'Luck: ' + heroClass.luck + '<br />' +
            '</span>' + '</a>';
            characterCreationRemoveBackground();
        };
    };
};

function startLogo() {
    var html = '';
    html += '<div class="row">';
    html += '<div class ="col-xs-12">';
    html += '</div></div>';
    document.getElementById("gameLogo").innerHTML = html;
}

function startingScreen() {
    var html = '';
    var newGame = "newGame();"; // might pass value to pick a slot for new game
    var loadGame = "loadGame();"; // later on might need to pass some value when loading, once I add more save slots...
    var muteSound = "muteAudio();";
    var myAudio = document.getElementById('myAudio');
    html += '<div class="row">';
    html += '<div class ="col-xs-12 newGameButton">';
    html += '<div class="btn-group-vertical" role="group" aria-label="New game, load game">';
    html += '<button type="button" style="margin-bottom:5px;" class="btn btn-default border" onclick="' + newGame + '">New Game</button>';
    html += '<button type="button" class="btn btn-default border" onclick="' + loadGame + '">Load</button>';
    html += '<label><input type="checkbox" id="hardcoreMode" onclick="handleClick();">Hardcore Mode?</label>';
    html += '</div>';
    html += '</div></div>';
    html += '<button type="button" class="btn btn-default musicDiv" onclick="' + muteSound + 'changeMusicImage();""><span id="musicImage" class="glyphicon glyphicon-volume-up" aria-hidden="true"></span></button>';
    document.getElementById("buttonDiv").innerHTML = html;
    myAudio.volume = 0.1;
    myAudio.play();
};
startingScreen();
startLogo();
function removeStartingScreen() {
    var divStyle = document.getElementById('loadingContainer');
    var divBackgroundStyle = document.getElementById('loadingOverlay');
    divStyle.style.display = "none";
    divBackgroundStyle.style.display = "none";
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