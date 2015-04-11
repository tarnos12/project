//Create player Weapon skill html
function CreateWeaponSkillHtml() {
    var html = '';

    html += '<table class="table">';

    //Sword
    html += '<tr>' + '<td>';
    html += "Sword Skill Level: " + player.SwordLevel;
    html += '<td>' + "Strength +" + player.swordStrength() + '</td>' + '<td>' + " Agility +" + player.swordAgility() + '</td>';
    html += '</td>' + '</tr>';

    //Axe
    html += '<tr>' + '<td>';
    html += "Axe Skill Level: " + player.AxeLevel;
    html += '<td>' + "Strength +" + player.axeStrength() + '</td>' + '<td>' + " Endurance +" + player.axeEndurance() + '</td>';
    html += '</td>' + '</tr>';

    //Mace
    html += '<tr>' + '<td>';
    html += "Mace Skill Level: " + player.MaceLevel;
    html += '<td>' + "Endurance +" + player.maceEndurance() + '</td>' + '<td>' + " Wisdom +" + player.maceWisdom() + '</td>';
    html += '</td>' + '</tr>';

    //Staff
    html += '<tr>' + '<td>';
    html += "Staff Skill Level: " + player.StaffLevel;
    html += '<td>' + "Intelligence +" + player.staffIntelligence() + '</td>' + '<td>' + " Wisdom +" + player.staffWisdom() + '</td>';
    html += '</td>' + '</tr>';

    //Bow
    html += '<tr>' + '<td>';
    html += "Bow Skill Level: " + player.RangedLevel;
    html += '<td>' + "Strength +" + player.rangedStrength() + '</td>' + '<td>' + " Dexterity +" + player.rangedDexterity() + '</td>';
    html += '</td>' + '</tr>';

    html += '</table>';
    document.getElementById("weaponSkill").innerHTML = html;
};

//Create player Equipped items html

function CreateEquipHtml() {
    var html = '';
    html += '<table class="table">';
    html += '<tr>' + '<td>' + "Item" + '</td>' + '<td>' + "Name" + '</td>' + '<td>' + "Rarity" + '</td>' + '<td>' + "Value" + '</td>' + '</tr>';

    //Weapon
    var item = equippedItems;
    for (var type in item) { //Here stat will become the word Defense

        if ('weapon, offHand, armor, ring, amulet, talisman'.indexOf(type) != -1) {
            //Getting the actual stat object from the word.
            var itemType = item[type];
        }

        if (itemType.hasOwnProperty('itemType')) {
            html += '<tr>' + '<td>';
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
            html += '</span>' + '</a>' + '</td>' +
                '<td>' + itemType.name + '</td>' +
                '<td>' + '<font color="' + itemType.color + '">' + itemType.itemQuality + '</font>' + '</td>' +
                '<td>' + itemType.value + "Value" + '</td>' +
                '<td>' +
                '<button type="button" class="btn btn-default" onclick="unequipItem' + "(" + itemType.id + ")" + '">Unequip</button>' +
                '</td>' + '</tr>';
        }
    }

    html += '</table>';
    document.getElementById("equipHtml").innerHTML = html;
};



monsterTabActiveNum = 0;
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
            '<h4>SLAY MONSTERS!</h4>' +
            '</div>';

        for (var key in monsterList) {
            if (monsterList.hasOwnProperty(key)) {
                var monster = monsterList[key];
                var area = monster.Stats.area;
            }

            if (area === monsterAreas[j].type) {
                if (monster.Stats.isShown == true) {
                    html += '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">' +
                        '<div id="' + monster.Stats.id + '" class="c3">' +
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
                        '<span type="button" class="btn btn-default" onclick="attack' + "(" + monster.Stats.name + ")" + '">' + "Attack" + '</span>' + '</div></div>'
                }
            }

        }
        html += '</div>';
    }
    html += '</div>';

    document.getElementById("monsterTabs").innerHTML = html;
};

inventoryTabActiveNum = 0;
function changedTabInventory(index)
{
	inventoryTabActiveNum = index;
}

//TEST
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
            html += '<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 tab-pane active" width: 100%; ';

        } else {
            html += '<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 tab-pane" width: 100%; ';
        }

        html += 'id="tab_' + InventoryItemTypes[j].type + '">'

        html += '<table class="table">';
        html += '<tr>' + '<td>' + "Image" + '</td>' + '<td>' + "Name" + '</td>' + '<td>' + "Rarity" + '</td>' + '<td colspan="4">' + "Value" + '</td>' + '</tr>';
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
                else if (playerInventory[i].subType === "Ring") {
                    var itemStat = equippedItems.ring;
                }
                else if (playerInventory[i].subType === "Amulet") {
                    var itemStat = equippedItems.amulet;
                }
                else if (playerInventory[i].subType === "Talisman") {
                    var itemStat = equippedItems.talisman;
                }
                html += '<tr>' + '<td>';
                html += '<a href="#" class="tooltipA">'
                html += '<img src="images/items/' + playerInventory[i].subType + "/" + playerInventory[i].image + '.png" />'
                html += '<span>'
                html += '<b>' + playerInventory[i].name + '</b>'
                html += '<br />'
                html += 'Rarity: ' + '<font color="' + playerInventory[i].color + '">' + playerInventory[i].itemQuality + '</font>' + '<br />'
                html += "Item Type: " + playerInventory[i].subType
                if (playerInventory[i].itemType == "weapon") {
                    html += '<br />' + 'Level: ' + playerInventory[i].level + "/" + playerInventory[i].maxLevel;
                    html += '<br />' + 'Experience: ' + playerInventory[i].exp + "/" + playerInventory[i].maxExp;
                };
                if (playerInventory[i].minDamage > 0 && playerInventory[i].maxDamage > 0) {
                    html += '<br />' + "Damage: " + (playerInventory[i].minDamage - itemStat.minDamage) + '-'
                    html+= (playerInventory[i].maxDamage - itemStat.maxDamage)
                }
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
                            }
                        }
                    }
                };
            
                html += '<br />' + "Value: " + playerInventory[i].value + "gold"
                html += '</span>' + '</a>' + '</td>';
                html += '<td>' + playerInventory[i].name + " " + '</td>' + '<td>' + '<font color="' + playerInventory[i].color + '">' + playerInventory[i].itemQuality + '</font>' + '</td>' +
                    '<td>' + playerInventory[i].value + "Value" +
                 '<td>' + '<button type="button" class="btn btn-default" onclick="equipItem' + "(" + playerInventory[i].id + ")" + '">Equip</button>' + '</td>' +
                 '<td>' + '<button type="button" class="btn btn-default" onclick="itemSell' + "(" + playerInventory[i].id + ")" + '">Sell</button>' + '</td>' + '</tr>'
            }
                //Else if inventory item type is equal to orb/card/etc...different code here, without item stats etc.
            else if (playerInventory[i].itemType3 === InventoryItemTypes[j].type) {
                html += '<tr>' + '<td>';
                html += '<img src="images/items/' + playerInventory[i].itemType + playerInventory[i].itemType2.type + '.png"' + '">' + '</td>' + '</div>';
                html += '<td>' + playerInventory[i].itemType + " " + '</td>'
                    
                }
        }
        html += '</table>';
        html += '</div>';
    }
    html += '</div>';

    document.getElementById("inventory").innerHTML = html;
};
