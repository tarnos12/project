//Create player Weapon skill html
var weaponTabActive = 0;
function changeTabWeapon(index) {
    weaponTabActive = index;
};
function CreateWeaponSkillHtml() {
    var html = '';
    html += '<div class="c3"><b><a href="#" class="tooltipB">Hover over there, for some Help';
    html += '<span>';
    html += '<ul>'
    html += "<li>There you can find your weapon mastery levels.</li>" + '</br />';
    html += "<li>You increase mastery using certain weapon types like: sword,axe,mace etc.</li>" + '</br />';
    html += "<li>At certain levels of mastery you will unlock special bonuses.</li>" + '<br />';
    html += "<li>Each level of mastery give you little boost to stats, while you equip weapon of that type.</li>" + '<br />';
    html += '</ul>';
    html += '</span></a></b></div>'
    html += '</div>';
    html += '<div class="row">';
    html += '<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">';
    html += '<ul class="nav nav-tabs">';
    for (var k = 0; k < weaponSkillType.length; k++) {

        if (k === weaponTabActive) {
            html += '<li class="active" onClick = changeTabWeapon(' + k + ')>';
        } else {
            html += '<li onClick = changeTabWeapon(' + k + ')>';
        }

        html += '<a href="#tab_' + weaponSkillType[k].displayName + '" data-toggle="tab"><span class="icons ' + weaponSkillType[k].icon + '"</span></a></li>';
    }
    html += '</ul>';
    html += '<div class="tab-content" id="tabControl_WeaponSkill">';

    for (weapon in weaponMastery) {
        if (weaponMastery.hasOwnProperty(weapon)) {
            var itemStat = weaponMastery[weapon];
            var image = "images/skills/" + itemStat.image + ".png";
            if (weapon === weaponTabActive) {
                html += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 tab-pane active"';

            } else {
                html += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 tab-pane"';
            }

            html += 'id="tab_' + itemStat.name + '">'

            html += '<div class="row">';
            html += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 c8">';
            html += '<div class="c3"><h4>' + itemStat.name + '</h4>';
            html += '<br />Level: ' + itemStat.level;
            for (var statName in itemStat) {
                if ('defense, strength, endurance, agility, dexterity, intelligence, wisdom, damage'.indexOf(statName) != -1) {
                    var displayStat = itemStat[statName];
                    html += "<br />" + statName + ": " + displayStat();
                };
            };
            //Progress bar is not updating on it's own :|
            html += '<div class="progress">';
            html += '<div id="' + itemStat.image + "1" + '" class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">'
            html += '<span id="' + itemStat.image +'"></span>'
            html += '</div>'
            html += '</div>'
            html += '</div>';
            html += '</div>';
            html += '</div>';

            var skill = weaponSkillList[weapon]
            for (var skillName in skill) {
                var displaySkill = skill[skillName];
                html += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 c8">';
                html += '<div class="c4">';
                if (itemStat.level < displaySkill.levelReq) {
                    html += "<br />" + '<span class ="bold">' + displaySkill.name + '</span>' + ": Unlocks at " + displaySkill.levelReq + " level";
                }
                else {
                    html += "<br />" + '<span class ="bold">' + displaySkill.name + '</span>' + "<br />" + displaySkill.description();
                };
                html += '</div>';
                html += '</div>';
            }
            html += '</div>';
        };
    };
    html += '</div>';
    html += '</div>';
    html += '</div>';
    document.getElementById("weaponSkill").innerHTML = html;
};

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
                html += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">';
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
                }
                if (itemType.itemType == "accessory") {
                    html += '<br />' + 'Drop Rate: ' + itemType.dropRate + "%";
                    html += '<br />' + 'Exp Rate: ' + itemType.expRate + "%";
                    html += '<br />' + 'Gold Rate: ' + itemType.goldRate + "%";
                };

                for (var statName in itemType) { //Here stat will become the word Defense

                    if ('defense, strength, endurance, agility, dexterity, intelligence, wisdom, luck'.indexOf(statName) != -1) {
                        //Getting the actual stat object from the word.
                        var selectedStat = itemType[statName];

                        if (itemType[statName] > 0) {
                            html += "<br />" + statName + ": " + itemType[statName];
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
    html += '<ul>'
    html += "<li>Attack a monsters here to gain gold/experience and items.</li>" + '</br />';
    html += "<li>Each battle have 20 turns, then it's called a draw.</li>" + '</br />';
    html += "<li>Dying means 5 second revive time and 20% lose of current experience/gold</li>" + '<br />';
    html += "<li>Killing monsters, unlock story and stronger monsters.</li>" + '<br />';
    html += '</ul>';
    html += '</span></a></b></div>'
    html += '</div>';
    html += '<ul class="nav nav-tabs">';

    for (var k = 0; k < monsterAreas.length; k++) {

        if (k === monsterTabActiveNum) {
            html += '<li class="active" onClick = changedTabmonster(' + k + ')>';
        } else {
            html += '<li onClick = changedTabmonster(' + k + ')>';
        }

        html += '<a href="#tab_' + monsterAreas[k].type + '" data-toggle="tab"><span class="icons ' + monsterAreas[k].icon + '"></span>' + '</a></li>';
    }

    html += '</ul>';
    html += '<div class="tab-content">';

    for (var j = 0; j < monsterAreas.length; j++) {

        if (j === monsterTabActiveNum) {
            html += '<div class="tab-pane active" ';
        } else {
            html += '<div class="tab-pane" ';
        }

        html += 'id="tab_' + monsterAreas[j].type + '">' +
            '<div class="c3">' +
            '<h4>' + monsterAreas[j].displayName + '</h4>' + '<br />' +
            '</div>';

        for (var key in monsterList) {
            if (monsterList.hasOwnProperty(key)) {
                var monster = monsterList[key];
                var area = monster.Stats.area;
            }

            if (area === monsterAreas[j].type) {
                if (monster.Stats.isShown == true) {
                    html += '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">' +
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
                        '<span type="button" class="attack" onclick="attack' + "(" + monster.Stats.name + ")" + '">' + "Attack" + '</span>' + '</div></div>';
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
    html += '<ul>'
    html += "<li>Below you can see, your inventory slots</li>" + '</br />';
    html += "<li>Click on a tab, to see other types of items.</li>" + '</br />';
    html += "<li>There are 5 item qualities as follow: Common, Uncommon, Rare, Epic, Legendary.</li>" + '</br />';
    html += "<li>Each item gives different stats, based on item type i.e. Staff give you more intelligence, while Sword more strength.</li>" + '<br />';
    html += "<li>Each weapon can level up, while you fight monsters with weapon equipped.</li>" + '<br />';
    html += "<li>Each weapon type has it's own mastery, like \"Sword Mastery\" which increase your stats, as you keep using Swords in battle."
    html += '</ul>';
    html += '</span></a></b></div>'
    html += '</div>';
    html += '<div class="c3">' + "Inventory Slots: " + playerInventory.length + "/" + player.inventory() + '</div>'
    html += '<ul class="nav nav-tabs">';

    for (var k = 0; k < 4; k++) {

        if (k === inventoryTabActiveNum) {
            html += '<li class="active" onClick = changedTabInventory(' + k + ')>';
        } else {
            html += '<li onClick = changedTabInventory(' + k + ')>';
        }

        html += '<a href="#tab_' + InventoryItemTypes[k].type + '" data-toggle="tab"><span class="icons ' + InventoryItemTypes[k].icon + '"</span></a></li>';
    }

    html += '</ul>';
    html += '<div class="tab-content" id="tabControl_Inventory">';
    for (var j = 0; j < InventoryItemTypes.length; j++) {

        if (j === inventoryTabActiveNum) {
            html += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 tab-pane active"';

        } else {
            html += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 tab-pane"';
        }

        html += 'id="tab_' + InventoryItemTypes[j].type + '">'

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

                html += '<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 c8">';
                html += '<a href="#" class="tooltipA">';
                html += '<img src="images/items/' + playerInventory[i].subType + "/" + playerInventory[i].image + '.png" class="' + playerInventory[i].itemQuality + '"/>';
                html += '<span>';
                html += '<b>' + playerInventory[i].name + '</b>';
                html += '<br />';
                html += 'Rarity: ' + '<font color="' + playerInventory[i].color + '">' + playerInventory[i].itemQuality + '</font>' + '<br />';
                html += "Item Type: " + playerInventory[i].subType;
                if (playerInventory[i].itemType == "weapon") {
                    html += '<br />' + 'Level: ' + playerInventory[i].level + "/" + playerInventory[i].maxLevel;
                    html += '<br />' + 'Experience: ' + playerInventory[i].exp + "/" + playerInventory[i].maxExp;
                };
                if ((playerInventory[i].minDamage - itemStat.minDamage) < 0) {
                    html += '<br />' + "Damage: " + playerInventory[i].minDamage + " (" + '<b style="color:red">' + (playerInventory[i].minDamage - itemStat.minDamage) + '</b>' + ")" + " to ";
                }
                else if ((playerInventory[i].minDamage - itemStat.minDamage) > 0) {
                    html += '<br />' + "Damage: " + playerInventory[i].minDamage + " (" + '<b style="color:green">' + "+" + (playerInventory[i].minDamage - itemStat.minDamage) + '</b>' + ")" + " to ";
                }
                else if ((playerInventory[i].minDamage - itemStat.minDamage) == 0) {
                    html += '<br />' + "Damage: " + playerInventory[i].minDamage + " (0)" + " to ";
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
    html += '<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">';
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

            html += '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">';
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
                html += '<div class="col-lg-3 col-md-4 col-sm-4 col-xs-4">';
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