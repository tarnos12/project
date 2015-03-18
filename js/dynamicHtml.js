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
    if (equippedItems.weapon.hasOwnProperty('itemType')) {
        html += '<tr>' + '<td>';

        html += '<img src="images/items/' + equippedItems.weapon.subType + "/" + equippedItems.weapon.image + '.png" "data-toggle=" "tooltip" title="'
        html += "Item Rarity: " + equippedItems.weapon.itemQuality + '\n'
        html += "Item Type: " + equippedItems.weapon.itemType + '\n'
        html += "Damage: " + equippedItems.weapon.minDamage + "-" + equippedItems.weapon.maxDamage + '\n'
        if (equippedItems.weapon.strength > 0) {
            html += "Strength: " + equippedItems.weapon.strength + '\n'
        }
        if (equippedItems.weapon.endurance > 0) {
            html += "Endurance: " + equippedItems.weapon.endurance + '\n'
        }
        if (equippedItems.weapon.agility > 0) {
            html += "Agility: " + equippedItems.weapon.agility + '\n'
        }
        if (equippedItems.weapon.dexterity > 0) {
            html += "Dexterity: " + equippedItems.weapon.dexterity + '\n'
        }
        if (equippedItems.weapon.intelligence > 0) {
            html += "Intelligence: " + equippedItems.weapon.intelligence + '\n'
        }
        if (equippedItems.weapon.wisdom > 0) {
            html += "Wisdom: " + equippedItems.weapon.wisdom + '\n'
        }
        if (equippedItems.weapon.luck > 0) {
            html += "Luck: " + equippedItems.weapon.luck + '\n'
        }
        html += "Value: " + equippedItems.weapon.value + "gold"
        html += '">';

        html += '</td>' +
            '<td>' + equippedItems.weapon.name + '</td>' +
            '<td>' + '<font color="' + equippedItems.weapon.color + '">' + equippedItems.weapon.itemQuality + '</font>' + '</td>' +
            '<td>' + equippedItems.weapon.value + "Value" + '</td>' +
            '<td>' +
            '<button type="button" class="btn btn-default" onclick="unequipItem' + "(" + equippedItems.weapon.id + ")" + '">Unequip</button>' +
            '</td>' + '</tr>';
    }
    //Off-Hand
    if (equippedItems.offHand.hasOwnProperty('itemType')) {
        html += '<tr>' + '<td>';

        html += '<img src="images/items/' + equippedItems.offHand.subType + "/" + equippedItems.offHand.image + '.png" "data-toggle=" "tooltip" title="'
        html +=  "Item Rarity: " + equippedItems.offHand.itemQuality + '\n'
        html += "Item Type: " + equippedItems.offHand.itemType + '\n'
        if (equippedItems.offHand.defense > 0) {
            html += "Defense: " + equippedItems.offHand.defense + '\n'
        }
        if (equippedItems.offHand.strength > 0) {
            html += "Strength: " + equippedItems.offHand.strength + '\n'
        }
        if (equippedItems.offHand.endurance > 0) {
            html += "Endurance: " + equippedItems.offHand.endurance + '\n'
        }
        if (equippedItems.offHand.agility > 0) {
            html += "Agility: " + equippedItems.offHand.agility + '\n'
        }
        if (equippedItems.offHand.dexterity > 0) {
            html += "Dexterity: " + equippedItems.offHand.dexterity + '\n'
        }
        if (equippedItems.offHand.intelligence > 0) {
            html += "Intelligence: " + equippedItems.offHand.intelligence + '\n'
        }
        if (equippedItems.offHand.wisdom > 0) {
            html += "Wisdom: " + equippedItems.offHand.wisdom + '\n'
        }
        if (equippedItems.offHand.luck > 0) {
            html += "Luck: " + equippedItems.offHand.luck + '\n'
        }
        html +="Value: " + equippedItems.offHand.value + "gold" + '">';

        html += '</td>' +
            '<td>' + equippedItems.offHand.name + '</td>' +
            '<td>' + '<font color="' + equippedItems.offHand.color + '">' + equippedItems.offHand.itemQuality + '</font>' + '</td>' +
            '<td>' + equippedItems.offHand.value + "Value" + '</td>' +
            '<td>' +
            '<button type="button" class="btn btn-default" onclick="unequipItem' + "(" + equippedItems.offHand.id + ")" + '">Unequip</button>' +
            '</td>' + '</tr>';
    }
    //Armor
    if (equippedItems.armor.hasOwnProperty('itemType')) {
        html += '<tr>' + '<td>';

        html += '<img src="images/items/' + equippedItems.armor.subType + "/" + equippedItems.armor.image + '.png" "data-toggle=" "tooltip" title="'
        html += "Item Rarity: " + equippedItems.armor.itemQuality + '\n'
        html += "Item Type: " + equippedItems.armor.itemType + '\n'
        if (equippedItems.armor.defense > 0) {
            html += "Defense: " + equippedItems.armor.defense + '\n'
        }
        if (equippedItems.armor.strength > 0) {
            html += "Strength: " + equippedItems.armor.strength + '\n'
        }
        if (equippedItems.armor.endurance > 0) {
            html += "Endurance: " + equippedItems.armor.endurance + '\n'
        }
        if (equippedItems.armor.agility > 0) {
            html += "Agility: " + equippedItems.armor.agility + '\n'
        }
        if (equippedItems.armor.dexterity > 0) {
            html += "Dexterity: " + equippedItems.armor.dexterity + '\n'
        }
        if (equippedItems.armor.intelligence > 0) {
            html += "Intelligence: " + equippedItems.armor.intelligence + '\n'
        }
        if (equippedItems.armor.wisdom > 0) {
            html += "Wisdom: " + equippedItems.armor.wisdom + '\n'
        }
        if (equippedItems.armor.luck > 0) {
            html += "Luck: " + equippedItems.armor.luck + '\n'
        }
        html += "Value: " + equippedItems.armor.value + "gold" + '">';

        html += '</td>' +
            '<td>' + equippedItems.armor.name + '</td>' +
             '<td>' + '<font color="' + equippedItems.armor.color + '">' + equippedItems.armor.itemQuality + '</font>' + '</td>' +
             '<td>' + equippedItems.armor.value + "Value" + '</td>' +
             '<td>' +
             '<button type="button" class="btn btn-default" onclick="unequipItem' + "(" + equippedItems.armor.id + ")" + '">Unequip</button>' +
             '</td>' + '</tr>';
    }
    //Ring
    if (equippedItems.ring.hasOwnProperty('itemType')) {
        html += '<tr>' + '<td>';

        html += '<img src="images/items/' + equippedItems.ring.subType + "/" + equippedItems.ring.image + '.png" "data-toggle=" "tooltip" title="'
        html += "Item Rarity: " + equippedItems.ring.itemQuality + '\n'
        html += "Item Type: " + equippedItems.ring.itemType + '\n'
        if (equippedItems.ring.defense > 0) {
            html += "Defense: " + equippedItems.ring.defense + '\n'
        }
        if (equippedItems.ring.strength > 0) {
            html += "Strength: " + equippedItems.ring.strength + '\n'
        }
        if (equippedItems.ring.endurance > 0) {
            html += "Endurance: " + equippedItems.ring.endurance + '\n'
        }
        if (equippedItems.ring.agility > 0) {
            html += "Agility: " + equippedItems.ring.agility + '\n'
        }
        if (equippedItems.ring.dexterity > 0) {
            html += "Dexterity: " + equippedItems.ring.dexterity + '\n'
        }
        if (equippedItems.ring.intelligence > 0) {
            html += "Intelligence: " + equippedItems.ring.intelligence + '\n'
        }
        if (equippedItems.ring.wisdom > 0) {
            html += "Wisdom: " + equippedItems.ring.wisdom + '\n'
        }
        if (equippedItems.ring.luck > 0) {
            html += "Luck: " + equippedItems.ring.luck + '\n'
        }
        html += "Value: " + equippedItems.ring.value + "gold" + '">';
        html += '</td>' +
            '<td>' + equippedItems.ring.name + '</td>' +
             '<td>' + '<font color="' + equippedItems.ring.color + '">' + equippedItems.ring.itemQuality + '</font>' + '</td>' +
             '<td>' + equippedItems.ring.value + "Value" + '</td>' +
             '<td>' +
             '<button type="button" class="btn btn-default" onclick="unequipItem' + "(" + equippedItems.ring.id + ")" + '">Unequip</button>' +
             '</td>' + '</tr>';
    }
    //Amulet
    if (equippedItems.amulet.hasOwnProperty('itemType')) {
        html += '<tr>' + '<td>';

        html += '<img src="images/items/' + equippedItems.amulet.subType + "/" + equippedItems.amulet.image + '.png" "data-toggle=" "tooltip" title="'
        html += "Item Rarity: " + equippedItems.amulet.itemQuality + '\n'
        html += "Item Type: " + equippedItems.amulet.itemType + '\n'
        if (equippedItems.amulet.defense > 0) {
            html += "Defense: " + equippedItems.amulet.defense + '\n'
        }
        if (equippedItems.amulet.strength > 0) {
            html += "Strength: " + equippedItems.amulet.strength + '\n'
        }
        if (equippedItems.amulet.endurance > 0) {
            html += "Endurance: " + equippedItems.amulet.endurance + '\n'
        }
        if (equippedItems.amulet.agility > 0) {
            html += "Agility: " + equippedItems.amulet.agility + '\n'
        }
        if (equippedItems.amulet.dexterity > 0) {
            html += "Dexterity: " + equippedItems.amulet.dexterity + '\n'
        }
        if (equippedItems.amulet.intelligence > 0) {
            html += "Intelligence: " + equippedItems.amulet.intelligence + '\n'
        }
        if (equippedItems.amulet.wisdom > 0) {
            html += "Wisdom: " + equippedItems.amulet.wisdom + '\n'
        }
        if (equippedItems.amulet.luck > 0) {
            html += "Luck: " + equippedItems.amulet.luck + '\n'
        }
        html += "Value: " + equippedItems.amulet.value + "gold" + '">';
        html += '</td>' +
            '<td>' + equippedItems.amulet.name + '</td>' +
             '<td>' + '<font color="' + equippedItems.amulet.color + '">' + equippedItems.amulet.itemQuality + '</font>' + '</td>' +
             '<td>' + equippedItems.amulet.value + "Value" + '</td>' +
             '<td>' +
             '<button type="button" class="btn btn-default" onclick="unequipItem' + "(" + equippedItems.amulet.id + ")" + '">Unequip</button>' +
             '</td>' + '</tr>';
    }
    //Talisman
    if (equippedItems.talisman.hasOwnProperty('itemType')) {
        html += '<tr>' + '<td>';

        html += '<img src="images/items/' + equippedItems.talisman.subType + "/" + equippedItems.talisman.image + '.png" "data-toggle=" "tooltip" title="'
        html += "Item Rarity: " + equippedItems.talisman.itemQuality + '\n'
        html += "Item Type: " + equippedItems.talisman.itemType + '\n'
        if (equippedItems.talisman.defense > 0) {
            html += "Defense: " + equippedItems.talisman.defense + '\n'
        }
        if (equippedItems.talisman.strength > 0) {
            html += "Strength: " + equippedItems.talisman.strength + '\n'
        }
        if (equippedItems.talisman.endurance > 0) {
            html += "Endurance: " + equippedItems.talisman.endurance + '\n'
        }
        if (equippedItems.talisman.agility > 0) {
            html += "Agility: " + equippedItems.talisman.agility + '\n'
        }
        if (equippedItems.talisman.dexterity > 0) {
            html += "Dexterity: " + equippedItems.talisman.dexterity + '\n'
        }
        if (equippedItems.talisman.intelligence > 0) {
            html += "Intelligence: " + equippedItems.talisman.intelligence + '\n'
        }
        if (equippedItems.talisman.wisdom > 0) {
            html += "Wisdom: " + equippedItems.talisman.wisdom + '\n'
        }
        if (equippedItems.talisman.luck > 0) {
            html += "Luck: " + equippedItems.talisman.luck + '\n'
        }
        html += "Value: " + equippedItems.talisman.value + "gold" + '">';
        html += '</td>' +
            '<td>' + equippedItems.talisman.name + '</td>' +
             '<td>' + '<font color="' + equippedItems.talisman.color + '">' + equippedItems.talisman.itemQuality + '</font>' + '</td>' +
             '<td>' + equippedItems.talisman.value + "Value" + '</td>' +
             '<td>' +
             '<button type="button" class="btn btn-default" onclick="unequipItem' + "(" + equippedItems.talisman.id + ")" + '">Unequip</button>' +
             '</td>' + '</tr>';
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
                    html += '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">' +
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
                html += '<img src="images/items/' + playerInventory[i].subType + "/"  + playerInventory[i].image + '.png" "data-toggle=" "tooltip" title="'
                html += "You will gain:"
                html += '\n'
                html += "Item Type: " + playerInventory[i].subType + '\n'
                if (playerInventory[i].minDamage > 0 && playerInventory[i].maxDamage > 0) {
                    html += "Min Damage: " + (playerInventory[i].minDamage - itemStat.minDamage) + '\n'
                    html+= "Max Damage: " + (playerInventory[i].maxDamage - itemStat.maxDamage) + '\n'
                }
               
                if (playerInventory[i].defense > 0 || itemStat.defense > 0) {
                    if (itemStat.defense > 0) {
                        html += "Defense: " + (playerInventory[i].defense - itemStat.defense) + '\n'
                    }
                    else {
                        html += "Defense: " + playerInventory[i].defense + '\n'
                    }
                }
                if (playerInventory[i].strength > 0 || itemStat.strength > 0) {
                    if (itemStat.strength > 0) {
                        html += "Strength: " + (playerInventory[i].strength - itemStat.strength) + '\n'
                    }
                    else {
                        html += "Strength: " + playerInventory[i].strength + '\n'
                    }
                }
                if (playerInventory[i].endurance > 0 || itemStat.endurance > 0) {
                    if (itemStat.endurance > 0) {
                        html += "Endurance: " + (playerInventory[i].endurance - itemStat.endurance) + '\n'
                    }
                    else {
                        html += "Endurance: " + playerInventory[i].endurance + '\n'
                    }
                }
                if (playerInventory[i].agility > 0 || itemStat.agility > 0) {
                    if (itemStat.agility > 0) {
                        html += "Agility: " + (playerInventory[i].agility - itemStat.agility) + '\n'
                    }
                    else {
                        html += "Agility: " + playerInventory[i].agility + '\n'
                    }
                }
                if (playerInventory[i].dexterity > 0 || itemStat.dexterity) {
                    if (itemStat.dexterity > 0) {
                        html += "Dexterity: " + (playerInventory[i].dexterity - itemStat.dexterity) + '\n'
                    }
                    else {
                        html += "Dexterity: " + playerInventory[i].dexterity + '\n'
                    }
                }
                if (playerInventory[i].intelligence > 0 || itemStat.intelligence) {
                    if (itemStat.intelligence > 0) {

                        html += "Intelligence: " + (playerInventory[i].intelligence - itemStat.intelligence) + '\n'
                    }
                    else {
                        html += "Intelligence: " + playerInventory[i].intelligence + '\n'
                    }
                }
                if (playerInventory[i].wisdom > 0 || itemStat.wisdom) {
                    if (itemStat.wisdom > 0) {

                        html += "Wisdom: " + (playerInventory[i].wisdom - itemStat.wisdom) + '\n'
                    }
                    else {
                        html += "Wisdom: " + playerInventory[i].wisdom + '\n'
                    }
                }
                if (playerInventory[i].luck > 0 || itemStat.luck) {
                    if (itemStat.luck > 0) {

                        html += "Luck: " + (playerInventory[i].luck - itemStat.luck) + '\n'
                    }
                    else {
                        html += "Luck: " + playerInventory[i].luck + '\n'
                    }
                }
               
                html += "Value: " + playerInventory[i].value + "gold"
                html += '">' + '</td>';
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
