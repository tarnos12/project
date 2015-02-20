//Create player Weapon skill html
function CreateWeaponSkillHtml() {
    var html = '';

    html += '<table class="table">';

    //Sword
    html += '<tr>' + '<td>';
    html += "Sword Skill Level: " + player.swordLevel;
    html += '<td>' + "Strength +" + player.swordStrength() + '</td>' + '<td>' + " Agility +" + player.swordAgility() + '</td>';
    html += '</td>' + '</tr>';

    //Dagger
    html += '<tr>' + '<td>';
    html += "Dagger Skill Level: " + player.daggerLevel;
    html += '<td>' + "Agility +" + player.daggerAgility() + '</td>' + '<td>' + " Dexterity +" + player.daggerDexterity() + '</td>';
    html += '</td>' + '</tr>';

    //Axe
    html += '<tr>' + '<td>';
    html += "Axe Skill Level: " + player.axeLevel;
    html += '<td>' + "Strength +" + player.axeStrength() + '</td>' + '<td>' + " Endurance +" + player.axeEndurance() + '</td>';
    html += '</td>' + '</tr>';

    //Mace
    html += '<tr>' + '<td>';
    html += "Mace Skill Level: " + player.maceLevel;
    html += '<td>' + "Endurance +" + player.maceEndurance() + '</td>' + '<td>' + " Wisdom +" + player.maceWisdom() + '</td>';
    html += '</td>' + '</tr>';

    //Staff
    html += '<tr>' + '<td>';
    html += "Staff Skill Level: " + player.staffLevel;
    html += '<td>' + "Intelligence +" + player.staffIntelligence() + '</td>' + '<td>' + " Wisdom +" + player.staffWisdom() + '</td>';
    html += '</td>' + '</tr>';

    //Fist
    html += '<tr>' + '<td>';
    html += "Fist Skill Level: " + player.fistLevel;
    html += '<td>' + "Strength +" + player.fistStrength() + '</td>' + '<td>' + " Dexterity +" + player.fistDexterity() + '</td>';
    html += '</td>' + '</tr>';

    //Bow
    html += '<tr>' + '<td>';
    html += "Bow Skill Level: " + player.bowLevel;
    html += '<td>' + "Strength +" + player.bowStrength() + '</td>' + '<td>' + " Dexterity +" + player.bowDexterity() + '</td>';
    html += '</td>' + '</tr>';

    html += '</table>';
    document.getElementById("weaponSkill").innerHTML = html;
};

//Create player Equipped items html

function CreateEquipHtml() {
    var html = '';

    html += '<table class="table">';
    html += '<tr>' + '<td>' + "Item" + '</td>' + '<td>' + "Rarity" + '</td>' + '<td>' + "Value" + '</td>' + '</tr>';

    //Weapon
    if (equippedItems.weapon.hasOwnProperty('itemType')) {
        html += '<tr>' + '<td>';

        html += '<img src="images/items/' + equippedItems.weapon.itemType + equippedItems.weapon.itemQuality + '.png" "data-toggle=" "tooltip" title="' +
                 "Item Rarity: " + equippedItems.weapon.itemQuality +
                '\n' +
                "Item Type: " + equippedItems.weapon.itemType +
                '\n' +
                "Strength: " + equippedItems.weapon.strength +
                '\n' +
                "Endurance: " + equippedItems.weapon.endurance +
                '\n' +
                "Agility: " + equippedItems.weapon.agility +
                '\n' +
                "Dexterity: " + equippedItems.weapon.dexterity +
                '\n' +
                "Intelligence: " + equippedItems.weapon.intelligence +
                '\n' +
                "Wisdom: " + equippedItems.weapon.wisdom +
                '\n' +
                "Luck: " + equippedItems.weapon.luck +
                '\n' +
                "Value: " + equippedItems.weapon.value + "gold" +
                '">';

        html += '</td>' +
            '<td>' + '<font color="' + equippedItems.weapon.color + '">' + equippedItems.weapon.itemQuality + '</font>' + '</td>' +
            '<td>' + equippedItems.weapon.value + "Value" + '</td>' +
            '<td>' +
            '<button onclick="unequipItem' + "(" + equippedItems.weapon.id + ")" + '">Unequip</button>' +
            '</td>' + '</tr>';
    }
    //Off-Hand
    if (equippedItems.offHand.hasOwnProperty('itemType')) {
        html += '<tr>' + '<td>';

        html += '<img src="images/items/' + equippedItems.offHand.itemType + equippedItems.offHand.itemQuality + '.png" "data-toggle=" "tooltip" title="' +
                 "Item Rarity: " + equippedItems.offHand.itemQuality +
                '\n' +
                "Item Type: " + equippedItems.offHand.itemType +
                '\n' +
                "Strength: " + equippedItems.offHand.strength +
                '\n' +
                "Endurance: " + equippedItems.offHand.endurance +
                '\n' +
                "Agility: " + equippedItems.offHand.agility +
                '\n' +
                "Dexterity: " + equippedItems.offHand.dexterity +
                '\n' +
                "Intelligence: " + equippedItems.offHand.intelligence +
                '\n' +
                "Wisdom: " + equippedItems.offHand.wisdom +
                '\n' +
                "Luck: " + equippedItems.offHand.luck +
                '\n' +
                "Value: " + equippedItems.offHand.value + "gold" +
                '">';

        html += '</td>' +
            '<td>' + '<font color="' + equippedItems.offHand.color + '">' + equippedItems.offHand.itemQuality + '</font>' + '</td>' +
            '<td>' + equippedItems.offHand.value + "Value" + '</td>' +
            '<td>' +
            '<button onclick="unequipItem' + "(" + equippedItems.offHand.id + ")" + '">Unequip</button>' +
            '</td>' + '</tr>';
    }
    //Armor
    if (equippedItems.armor.hasOwnProperty('itemType')) {
        html += '<tr>' + '<td>';

        html += '<img src="images/items/' + equippedItems.armor.itemType + equippedItems.armor.itemQuality + '.png" "data-toggle=" "tooltip" title="' +
                 "Item Rarity: " + equippedItems.armor.itemQuality +
                '\n' +
                "Item Type: " + equippedItems.armor.itemType +
                '\n' +
                "Strength: " + equippedItems.armor.strength +
                '\n' +
                "Endurance: " + equippedItems.armor.endurance +
                '\n' +
                "Agility: " + equippedItems.armor.agility +
                '\n' +
                "Dexterity: " + equippedItems.armor.dexterity +
                '\n' +
                "Intelligence: " + equippedItems.armor.intelligence +
                '\n' +
                "Wisdom: " + equippedItems.armor.wisdom +
                '\n' +
                "Luck: " + equippedItems.armor.luck +
                '\n' +
                "Value: " + equippedItems.armor.value + "gold" +
                '">'

        html += '</td>' +
             '<td>' + '<font color="' + equippedItems.armor.color + '">' + equippedItems.armor.itemQuality + '</font>' + '</td>' +
             '<td>' + equippedItems.armor.value + "Value" + '</td>' +
             '<td>' +
             '<button onclick="unequipItem' + "(" + equippedItems.armor.id + ")" + '">Unequip</button>' +
             '</td>' + '</tr>';
    }
    //Ring
    if (equippedItems.ring.hasOwnProperty('itemType')) {
        html += '<tr>' + '<td>';

        html += '<img src="images/items/' + equippedItems.ring.itemType + equippedItems.ring.itemQuality + '.png" "data-toggle=" "tooltip" title="' +
                 "Item Rarity: " + equippedItems.ring.itemQuality +
                '\n' +
                "Item Type: " + equippedItems.ring.itemType +
                '\n' +
                "Strength: " + equippedItems.ring.strength +
                '\n' +
                "Endurance: " + equippedItems.ring.endurance +
                '\n' +
                "Agility: " + equippedItems.ring.agility +
                '\n' +
                "Dexterity: " + equippedItems.ring.dexterity +
                '\n' +
                "Intelligence: " + equippedItems.ring.intelligence +
                '\n' +
                "Wisdom: " + equippedItems.ring.wisdom +
                '\n' +
                "Luck: " + equippedItems.ring.luck +
                '\n' +
                "Value: " + equippedItems.ring.value + "gold" +
                '">'
        html += '</td>' +
             '<td>' + '<font color="' + equippedItems.ring.color + '">' + equippedItems.ring.itemQuality + '</font>' + '</td>' +
             '<td>' + equippedItems.ring.value + "Value" + '</td>' +
             '<td>' +
             '<button onclick="unequipItem' + "(" + equippedItems.ring.id + ")" + '">Unequip</button>' +
             '</td>' + '</tr>';
    }
    //Amulet
    if (equippedItems.amulet.hasOwnProperty('itemType')) {
        html += '<tr>' + '<td>';

        html += '<img src="images/items/' + equippedItems.amulet.itemType + equippedItems.amulet.itemQuality + '.png" "data-toggle=" "tooltip" title="' +
                 "Item Rarity: " + equippedItems.amulet.itemQuality +
                '\n' +
                "Item Type: " + equippedItems.amulet.itemType +
                '\n' +
                "Strength: " + equippedItems.amulet.strength +
                '\n' +
                "Endurance: " + equippedItems.amulet.endurance +
                '\n' +
                "Agility: " + equippedItems.amulet.agility +
                '\n' +
                "Dexterity: " + equippedItems.amulet.dexterity +
                '\n' +
                "Intelligence: " + equippedItems.amulet.intelligence +
                '\n' +
                "Wisdom: " + equippedItems.amulet.wisdom +
                '\n' +
                "Luck: " + equippedItems.amulet.luck +
                '\n' +
                "Value: " + equippedItems.amulet.value + "gold" +
                '">'
        html += '</td>' +
             '<td>' + '<font color="' + equippedItems.amulet.color + '">' + equippedItems.amulet.itemQuality + '</font>' + '</td>' +
             '<td>' + equippedItems.amulet.value + "Value" + '</td>' +
             '<td>' +
             '<button onclick="unequipItem' + "(" + equippedItems.amulet.id + ")" + '">Unequip</button>' +
             '</td>' + '</tr>';
    }
    //Talisman
    if (equippedItems.talisman.hasOwnProperty('itemType')) {
        html += '<tr>' + '<td>';

        html += '<img src="images/items/' + equippedItems.talisman.itemType + equippedItems.talisman.itemQuality + '.png" "data-toggle=" "tooltip" title="' +
                 "Item Rarity: " + equippedItems.talisman.itemQuality +
                '\n' +
                "Item Type: " + equippedItems.talisman.itemType +
                '\n' +
                "Strength: " + equippedItems.talisman.strength +
                '\n' +
                "Endurance: " + equippedItems.talisman.endurance +
                '\n' +
                "Agility: " + equippedItems.talisman.agility +
                '\n' +
                "Dexterity: " + equippedItems.talisman.dexterity +
                '\n' +
                "Intelligence: " + equippedItems.talisman.intelligence +
                '\n' +
                "Wisdom: " + equippedItems.talisman.wisdom +
                '\n' +
                "Luck: " + equippedItems.talisman.luck +
                '\n' +
                "Value: " + equippedItems.talisman.value + "gold" +
                '">'
        html += '</td>' +
             '<td>' + '<font color="' + equippedItems.talisman.color + '">' + equippedItems.talisman.itemQuality + '</font>' + '</td>' +
             '<td>' + equippedItems.talisman.value + "Value" + '</td>' +
             '<td>' +
             '<button onclick="unequipItem' + "(" + equippedItems.talisman.id + ")" + '">Unequip</button>' +
             '</td>' + '</tr>';
    }

    html += '</table>';
    document.getElementById("equipHtml").innerHTML = html;
};



function CreateMonsterHtml() {

    var html = '';

    html += '<ul class="nav nav-tabs">';

    for (var k = 0; k < monsterTypes.length; k++) {

        if (k === 0) {
            html += '<li class="active">';
        } else {
            html += '<li>';
        }

        html += '<a href="#tab_' + monsterTypes[k].type + '" data-toggle="tab">' + monsterTypes[k].displayName + '</a></li>';
    }

    html += '</ul>';
    html += '<div class="tab-content">';

    for (var j = 0; j < monsterTypes.length; j++) {

        if (j === 0) {
            html += '<div class="tab-pane active" ';
        } else {
            html += '<div class="tab-pane" ';
        }

        html += 'id="tab_' + monsterTypes[j].type + '">' +
            '<div class="c3">' +
            '<h4>SLAY MONSTERS!</h4>' +
            '</div>';

        for (var i = 0; i < monsters.length; i++) {
            if (monsters[i].type === monsterTypes[j].type) {

                html += '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">' +
                    '<div id="' + monsters[i].id + '" class="c3">' +
                    'Dmg:' + monsters[i].minDmg + "-" + monsters[i].maxDmg +
                    '<br />' +
                    'Def:' + monsters[i].def +
                    '<br />' +
                    '<span class="hp">' + monsters[i].hp + '</span>' + "/" + monsters[i].maxHp +
                    '<br />' +
                    '<img src="images/' + monsters[i].id + '.jpg" alt="' + monsters[i].name + '">' +
                    '<br />' +
                    '<button class = "monsterButton" id="button' + (i + 1) + '">' + "Attack" + '</button>' + '</div></div>'
            }
        }
        html += '</div>';
    }
    html += '</div>';

    document.getElementById("monsterTabs").innerHTML = html;
};
//Create playerInventory html
/*function CreateInventoryWeaponHtml() {
    var html = '';

    html += '<table class="table">';
    html += '<tr>' + '<td>' + "Image" + '</td>' + '<td>' + "Type" + '</td>' + '<td>' + "Rarity" + '</td>' + '<td>' + "Value" + '</td>' + '</tr>';
    for (var i = 0; i < playerInventory.length; i++) {

        html += '<tr>' + '<td>';
        html += '<img src="images/items/' + playerInventory[i].itemType + "1" + '.gif" "data-toggle=" "tooltip" title="' +
                 "Item Rarity: " + playerInventory[i].itemQuality +
                '\n' +
                "Strength: " + playerInventory[i].strength +
                '\n' +
                "Endurance: " + playerInventory[i].endurance +
                '\n' +
                "Agility: " + playerInventory[i].agility +
                '\n' +
                "Dexterity: " + playerInventory[i].dexterity +
                '\n' +
                "Intelligence: " + playerInventory[i].intelligence +
                '\n' +
                "Wisdom: " + playerInventory[i].wisdom +
                '\n' +
                "Luck: " + playerInventory[i].luck +
                '\n' +
                "Value: " + playerInventory[i].value + "gold" +
                '">' + '</td>';

        html += '<td>' + playerInventory[i].itemType + " " + '</td>' + '<td>' + '<font color="' + playerInventory[i].color + '">' + playerInventory[i].itemQuality + '</font>' + '</td>' +
            '<td>' + playerInventory[i].value + "Value" +
         '<td>' + '<button onclick="equipItem' + "(" + playerInventory[i].id + ")" + '">Equip</button>' +
         '<button onclick="itemSell' + "(" + playerInventory[i].id + ")" + '">Sell</button>' + '</td>' + '</tr>'

        
    }
    html += '</table>';
    document.getElementById("inventory").innerHTML = html;
};*/

inventoryTabActiveNum = 0;
function changedTabInventory(index)
{
	inventoryTabActiveNum = index;
}

//TEST
function CreateInventoryWeaponHtml() {
    var html = '';
    html += '<div class="c3"> <h3>Player Inventory</h3>' + playerInventory.length  + "/" + player.inventory() + '</div>'
    html += '<ul class="nav nav-tabs">';

    for (var k = 0; k < 5; k++) {

        if (k === inventoryTabActiveNum) {
            html += '<li class="active" onClick = changedTabInventory(' + k + ')>';
        } else {
            html += '<li onClick = changedTabInventory(' + k + ')>';
        }

        html += '<a href="#tab_' + InventoryItemTypes[k].type + '" data-toggle="tab">' + InventoryItemTypes[k].displayName + '</a></li>';
    }

    html += '</ul>';
    html += '<div class="tab-content" id="tabControl_Inventory">';
    for (var j = 0; j < InventoryItemTypes.length; j++) {

        if (j === inventoryTabActiveNum) {
            html += '<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 tab-pane active" ';

        } else {
            html += '<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 tab-pane" ';
        }

        html += 'id="tab_' + InventoryItemTypes[j].type + '">'

        html += '<table class="table">';
        html += '<tr>' + '<td>' + "Image" + '</td>' + '<td>' + "Type" + '</td>' + '<td>' + "Rarity" + '</td>' + '<td>' + "Value" + '</td>' + '</tr>';
        for (var i = 0; i < playerInventory.length; i++) {
            if (playerInventory[i].itemType2.type === InventoryItemTypes[j].type) {
                if (playerInventory[i].itemType2.type === "Weapon") {
                    var itemStat = equippedItems.weapon;
                }
                else if (playerInventory[i].itemType2.type === "OffHand") {
                    var itemStat = equippedItems.offHand;
                }
                else if (playerInventory[i].itemType2.type === "Armor") {
                    var itemStat = equippedItems.armor;
                }
                else if (playerInventory[i].itemType === "Ring") {
                    var itemStat = equippedItems.ring;
                }
                else if (playerInventory[i].itemType === "Amulet") {
                    var itemStat = equippedItems.amulet;
                }
                else if (playerInventory[i].itemType === "Talisman") {
                    var itemStat = equippedItems.talisman;
                }
                html += '<tr>' + '<td>';
                html += '<img src="images/items/' + playerInventory[i].itemType + playerInventory[i].itemQuality + '.png" "data-toggle=" "tooltip" title="' +
                         "Item Rarity: " + playerInventory[i].itemQuality +
                        '\n' +
                        "Item Type: " + playerInventory[i].itemType +
                        '\n' +
                        "Strength: " + playerInventory[i].strength + " --- " + "(" + (playerInventory[i].strength - itemStat.strength) + ")" +
                        '\n' +
                        "Endurance: " + playerInventory[i].endurance + " --- " + "(" + (playerInventory[i].endurance - itemStat.endurance) + ")" +
                        '\n' +
                        "Agility: " + playerInventory[i].agility + " --- " + "(" + (playerInventory[i].agility - itemStat.agility) + ")" +
                        '\n' +
                        "Dexterity: " + playerInventory[i].dexterity + " --- " + "(" + (playerInventory[i].dexterity - itemStat.dexterity) + ")" +
                        '\n' +
                        "Intelligence: " + playerInventory[i].intelligence + " --- " + "(" + (playerInventory[i].intelligence - itemStat.intelligence) + ")" +
                        '\n' +
                        "Wisdom: " + playerInventory[i].wisdom + " --- " + "(" + (playerInventory[i].wisdom - itemStat.wisdom) + ")" +
                        '\n' +
                        "Luck: " + playerInventory[i].luck + " --- " + "(" + (playerInventory[i].luck - itemStat.luck) + ")" +
                        '\n' +
                        "Value: " + playerInventory[i].value + "gold" +
                        '">' + '</td>' + '</div>';
                //ADD ALL ITEMS VALUE TOGETHER, might want to use it for bulk selling in future...need to add if/else for item quality too...
                /*var total = 0;
                for (var s = 0; s < playerInventory.length; s++) {
                //If else playerInventory[i].itemType === common :)
                    total += playerInventory[s].value << 0;
                }
                console.log("TOTAL" + total)*/

                html += '<td>' + playerInventory[i].itemType + " " + '</td>' + '<td>' + '<font color="' + playerInventory[i].color + '">' + playerInventory[i].itemQuality + '</font>' + '</td>' +
                    '<td>' + playerInventory[i].value + "Value" +
                 '<td>' + '<button onclick="equipItem' + "(" + playerInventory[i].id + ")" + '">Equip</button>' +
                 '<button onclick="itemSell' + "(" + playerInventory[i].id + ")" + '">Sell</button>' + '</td>' + '</tr>'
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
