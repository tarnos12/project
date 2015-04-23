//Create player Weapon skill html
function CreateWeaponSkillHtml() {
    var html = '';

    html += '<div class="table-responsive">'
    html += '<table class="table">';

    //Sword
    html += '<tr>' + '<td>';
    html += "Sword Skill Level: " + player.swordLevel;
    html += '<div class="progress"><div class="progress-bar progress-bar-custom" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: ' + ((player.swordExp / player.swordMaxExp) * 100) + '%;"></div></div>'
    html += '<td>' + "Strength +" + player.swordStr() + '</td>' + '<td>' + " Agility +" + player.swordAgi() + '</td>';
    html += '</td>' + '</tr>';
    

    //Axe
    html += '<tr>' + '<td>';
    html += "Axe Skill Level: " + player.axeLevel;
    html += '<div class="progress"><div class="progress-bar progress-bar-custom" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: ' + ((player.axeExp / player.axeMaxExp) * 100) + '%;"></div></div>'
    html += '<td>' + "Strength +" + player.axeStr() + '</td>' + '<td>' + " Endurance +" + player.axeEnd() + '</td>';
    html += '</td>' + '</tr>';

    //Mace
    html += '<tr>' + '<td>';
    html += "Mace Skill Level: " + player.maceLevel;
    html += '<div class="progress"><div class="progress-bar progress-bar-custom" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: ' + ((player.maceExp / player.maceMaxExp) * 100) + '%;"></div></div>'
    html += '<td>' + "Endurance +" + player.maceEnd() + '</td>' + '<td>' + " Wisdom +" + player.maceWis() + '</td>';
    html += '</td>' + '</tr>';

    //Staff
    html += '<tr>' + '<td>';
    html += "Staff Skill Level: " + player.staffLevel;
    html += '<div class="progress"><div class="progress-bar progress-bar-custom" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: ' + ((player.staffExp / player.staffMaxExp) * 100) + '%;"></div></div>'
    html += '<td>' + "Intelligence +" + player.staffInt() + '</td>' + '<td>' + " Wisdom +" + player.staffWis() + '</td>';
    html += '</td>' + '</tr>';

    //Bow
    html += '<tr>' + '<td>';
    html += "Bow Skill Level: " + player.rangedLevel;
    html += '<div class="progress"><div class="progress-bar progress-bar-custom" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: ' + ((player.rangedExp / player.rangedMaxExp) * 100) + '%;"></div></div>'
    html += '<td>' + "Strength +" + player.rangedStr() + '</td>' + '<td>' + " Dexterity +" + player.rangedDex() + '</td>';
    html += '</td>' + '</tr>';

    html += '</table>'
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
        };

        if (itemType.hasOwnProperty('itemType')) {
            html += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">';
            html += '<a href="#" class="tooltipA">'
            html += '<img src="images/items/' + itemType.subType + "/" + itemType.image + '.png" />'
            html += '<span>'
            html += '<b>' + itemType.name + '</b>'
            html += '<br />'
            html += 'Rarity: ' + '<font color="' + itemType.color + '">' + itemType.itemQuality + '</font>' + '<br />'
            html += "Item Type: " + itemType.subType
            if (itemType == item.weapon) {
                html += '<br />' + 'Level: ' + itemType.level + "/" + itemType.maxLevel
                html += '<br />' + 'Experience: ' + itemType.exp + "/" + itemType.maxExp;
            };
            if (itemType.minDamage > 0 && itemType.maxDamage > 0) {
                html += '<br />' + "Damage: " + itemType.minDamage + "-"
                html += itemType.maxDamage
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
                        html += "<br />" + statName + ": " + itemType[statName]
                    }
                }
            };
            
            html += '<br />' + "Value: " + itemType.value + "gold"
            html += '</span>' + '</a>' +
                '<button type="button" class="btn btn-sm btn-default" onclick="unequipItem' + "(" + itemType.id + ")" + '">Unequip</button>'

            html += '</div>';
        }
    }
    
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

    html += '<ul class="nav nav-pills">';

    for (var k = 0; k < monsterAreas.length; k++) {

        if (k === monsterTabActiveNum) {
            html += '<li class="active" onClick = changedTabmonster(' + k + ')>';
        } else {
            html += '<li onClick = changedTabmonster(' + k + ')>';
        }

        html += '<a href="#tab_' + monsterAreas[k].type + '" data-toggle="tab">' + monsterAreas[k].displayName + '</a></li>';
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
            '<h4>SLAY MONSTERS!</h4>' + '<br />' +
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
                        'Dmg:' + monster.Stats.minDmg + "-" + monster.Stats.maxDmg +
                        '<br />' +
                        'Def:' + monster.Stats.def +
                        '<br />' +
                        "HP: " + '<span class="hp">' + monster.Stats.hp + '</span>' + "/" + monster.Stats.maxHp +
                        '<br />' +
                        '<b>' + monster.Stats.displayName + '</b>' +
                        '<br />' +
                        '<img src="images/' + "monster" + monster.Stats.id + '.jpg" alt="' + monster.Stats.displayName + '">' +
                        '<br />' +
                        '<span type="button" class="btn btn-sm btn-default" onclick="attack' + "(" + monster.Stats.name + ")" + '">' + "Attack" + '</span>' + '</div></div>';
                };
            };
        };
        html += '</div>';
    };
    html += '</div>';

    document.getElementById("monsterTabs").innerHTML = html;
};

var inventoryTabActiveNum = 0;
function changedTabInventory(index)
{
	inventoryTabActiveNum = index;
}

function CreateInventoryWeaponHtml() {
    var html = '';
    html += '<div class="c3" width: 100%;>' + "Inventory Slots: " + playerInventory.length + "/" + player.inventory() + '</div>'
    html += '<ul class="nav nav-pills">';

    for (var k = 0; k < 4; k++) {

        if (k === inventoryTabActiveNum) {
            html += '<li class="active" onClick = changedTabInventory(' + k + ')>';
        } else {
            html += '<li onClick = changedTabInventory(' + k + ')>';
        }

        html += '<a href="#tab_' + InventoryItemTypes[k].type + '" data-toggle="tab">' + InventoryItemTypes[k].displayName + '</a></li>';
    }

    html += '</ul>';
    html += '<div class="tab-content" width: 100% id="tabControl_Inventory">';
    for (var j = 0; j < InventoryItemTypes.length; j++) {

        if (j === inventoryTabActiveNum) {
            html += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 tab-pane active" width: 100%; ';

        } else {
            html += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 tab-pane" width: 100%; ';
        }

        html += 'id="tab_' + InventoryItemTypes[j].type + '">'

        html += '<div class="row">';
        for (var i = 0; i < playerInventory.length; i++) {
            if (playerInventory[i].itemType === InventoryItemTypes[j].type) {
                if (playerInventory[i].itemType === "weapon") {
                    var itemStat = equippedItems.weapon;
                }
                else if (playerInventory[i].itemType === "offHand") {
                    var itemStat = equippedItems.offHand;
                }
                else if (playerInventory[i].itemType === "armor") {
                    var itemStat = equippedItems.armor;
                }
                else if (playerInventory[i].subType === "ring") {
                    var itemStat = equippedItems.ring;
                }
                else if (playerInventory[i].subType === "amulet") {
                    var itemStat = equippedItems.amulet;
                }
                else if (playerInventory[i].subType === "talisman") {
                    var itemStat = equippedItems.talisman;
                }

                html += '<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 c8">';
                html += '<a href="#" class="tooltipA">';
                html += '<img src="images/items/' + playerInventory[i].subType + "/" + playerInventory[i].image + '.png" />';
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
                    html += playerInventory[i].maxDamage + " (0)" + " to ";
                }
                if ((playerInventory[i].expRate - itemStat.expRate) < 0) {
                    html += '<br />' + "Exp Rate: " + playerInventory[i].expRate + " (" + '<b style="color:red">' + (playerInventory[i].expRate - itemStat.expRate) + '</b>' + ")" + " to ";
                }
                else if ((playerInventory[i].expRate - itemStat.expRate) > 0) {
                    html += '<br />' + "Exp Rate: " + playerInventory[i].expRate + " (" + '<b style="color:green">' + "+" + (playerInventory[i].expRate - itemStat.expRate) + '</b>' + ")" + " to ";
                }
                else if ((playerInventory[i].expRate - itemStat.expRate) == 0 && playerInventory[i].expRate > 0) {
                    html += '<br />' + "Exp Rate: " + playerInventory[i].expRate + " (0)" + " to ";
                }
                if ((playerInventory[i].goldRate - itemStat.goldRate) < 0) {
                    html += '<br />' + "Gold Rate: " + playerInventory[i].goldRate + " (" + '<b style="color:red">' + (playerInventory[i].goldRate - itemStat.goldRate) + '</b>' + ")" + " to ";
                }
                else if ((playerInventory[i].goldRate - itemStat.goldRate) > 0) {
                    html += '<br />' + "Gold Rate: " + playerInventory[i].goldRate + " (" + '<b style="color:green">' + "+" + (playerInventory[i].goldRate - itemStat.goldRate) + '</b>' + ")" + " to ";
                }
                else if ((playerInventory[i].goldRate - itemStat.goldRate) == 0 && playerInventory[i].goldRate > 0) {
                    html += '<br />' + "Gold Rate: " + playerInventory[i].goldRate + " (0)" + " to ";
                }
                if ((playerInventory[i].dropRate - itemStat.dropRate) < 0) {
                    html += '<br />' + "Drop Rate: " + playerInventory[i].dropRate + " (" + '<b style="color:red">' + (playerInventory[i].dropRate - itemStat.dropRate) + '</b>' + ")" + " to ";
                }
                else if ((playerInventory[i].dropRate - itemStat.dropRate) > 0) {
                    html += '<br />' + "Drop Rate: " + playerInventory[i].dropRate + " (" + '<b style="color:green">' + "+" + (playerInventory[i].dropRate - itemStat.dropRate) + '</b>' + ")" + " to ";
                }
                else if ((playerInventory[i].dropRate - itemStat.dropRate) == 0 && playerInventory[i].dropRate > 0) {
                    html += '<br />' + "Drop Rate: " + playerInventory[i].dropRate + " (0)" + " to ";
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
                html += '</span>' + '</a>' + '</td>';
                html += '<font color="' + playerInventory[i].color + '">' + playerInventory[i].itemQuality + '</font>' +

                 '<button type="button" class="btn btn-sm btn-default" onclick="equipItem' + "(" + playerInventory[i].id + ")" + '">Equip</button>' +
                 '<button type="button" class="btn btn-sm btn-default" onclick="itemSell' + "(" + playerInventory[i].id + ")" + '">Sell</button>';
                html += '</div>';
            };
        };

        html += '</div>';
        html += '</div>';
    };
    html += '</div>';

    document.getElementById("inventory").innerHTML = html;
};

function CreatePlayerSkillsHtml() {
    var html = '';

    html += '<div class="row">'
    for (spell in activeSkills) {
        if (activeSkills.hasOwnProperty(spell)) {
            var selectedSpell = activeSkills[spell];
            var image = "images/skills/" + selectedSpell.image + ".png";
        }
        if (selectedSpell.isActive == true) {
            var activeSpell = '<font color="green">' + '<b>' + "Active" + '</b>' + '</font>';
        }
        else {
            var activeSpell = '<font color="red">' + '<b>' + "Not Active" + '</b>' + '</font>';
        };

        html += '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">';
        html += '<a href="#" class="tooltipA">';
        html += '<img src="' + image + '"/>';
        html += '<span>';
        html += 'Name: ' + selectedSpell.name + '<br />';
        html += "Level " + selectedSpell.level;
        html += "<br />Max Charges " + selectedSpell.maxCharge();
        html += "<br />" + activeSpell;
        html += "<br />Damage: " + selectedSpell.damage();
        html += '</span></a>';
        html += "<br />" + selectedSpell.name;
        html += '<input type="image" src="images/plus.jpg" alt="Sign Me Up!" onclick="upgradeSpell(' + selectedSpell.name + ');">'
        html += '</div>';
    };
    html += '</div>';
    document.getElementById("playerSkills").innerHTML = html;
};

function CreatePlayerHotBar() {
    var html = '';
    html += '<div class="row">';
    html += '<div class="c3"><b>Active Spells</b></div>';
    for (spell in activeSkills) {
        if (activeSkills.hasOwnProperty(spell)) {
            var selectedSpell = activeSkills[spell];
            var image = "images/skills/" + selectedSpell.image + ".png";
        }
        if (selectedSpell.isActive == true) { // Check if spell is active, and put it in hotbar
            html += '<div class="col-lg-2 col-md-4 col-sm-4 col-xs-4">';
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
    html += '</div>';
    document.getElementById("hotBar").innerHTML = html;
};