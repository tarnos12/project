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

        html += '<img src="images/items/' + equippedItems.weapon.itemType + "1" + '.gif" "data-toggle=" "tooltip" title="' +
                 "Item Rarity: " + equippedItems.weapon.itemQuality +
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
    //Armor
    if (equippedItems.armor.hasOwnProperty('itemType')) {
        html += '<tr>' + '<td>';

        html += '<img src="images/items/' + equippedItems.armor.itemType + "1" + '.gif" "data-toggle=" "tooltip" title="' +
                 "Item Rarity: " + equippedItems.armor.itemQuality +
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
    //Accessory
    if (equippedItems.accessory.hasOwnProperty('itemType')) {
        html += '<tr>' + '<td>';

        html += '<img src="images/items/' + equippedItems.accessory.itemType + "1" + '.gif" "data-toggle=" "tooltip" title="' +
                 "Item Rarity: " + equippedItems.accessory.itemQuality +
                '\n' +
                "Strength: " + equippedItems.accessory.strength +
                '\n' +
                "Endurance: " + equippedItems.accessory.endurance +
                '\n' +
                "Agility: " + equippedItems.accessory.agility +
                '\n' +
                "Dexterity: " + equippedItems.accessory.dexterity +
                '\n' +
                "Intelligence: " + equippedItems.accessory.intelligence +
                '\n' +
                "Wisdom: " + equippedItems.accessory.wisdom +
                '\n' +
                "Luck: " + equippedItems.accessory.luck +
                '\n' +
                "Value: " + equippedItems.accessory.value + "gold" +
                '">'
        html += '</td>' +
             '<td>' + '<font color="' + equippedItems.accessory.color + '">' + equippedItems.accessory.itemQuality + '</font>' + '</td>' +
             '<td>' + equippedItems.accessory.value + "Value" + '</td>' +
             '<td>' +
             '<button onclick="unequipItem' + "(" + equippedItems.accessory.id + ")" + '">Unequip</button>' +
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

//TEST
function CreateInventoryWeaponHtml() {
    var html = '';
    html += '<ul class="nav nav-tabs">';

    for (var k = 0; k < 4; k++) {

        if (k === 0) {
            html += '<li class="active">';
        } else {
            html += '<li>';
        }

        html += '<a href="#tab_' + InventoryItemTypes[k].type + '" data-toggle="tab">' + InventoryItemTypes[k].displayName + '</a></li>';
    }

    html += '</ul>';
    html += '<div class="tab-content">';
    for (var j = 0; j < InventoryItemTypes.length; j++) {

        if (j === 0) {
            html += '<div class="tab-pane active" ';

        } else {
            html += '<div class="tab-pane" ';
        }

        html += 'id="tab_' + InventoryItemTypes[j].type + '">'

        html += '<table class="table">';
        html += '<tr>' + '<td>' + "Image" + '</td>' + '<td>' + "Type" + '</td>' + '<td>' + "Rarity" + '</td>' + '<td>' + "Value" + '</td>' + '</tr>';
        for (var i = 0; i < playerInventory.length; i++) {
            if (playerInventory[i].itemType2.type === InventoryItemTypes[j].type) {

                html += '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">'
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
                        '">' + '</td>' + '</div>';

                html += '<td>' + playerInventory[i].itemType + " " + '</td>' + '<td>' + '<font color="' + playerInventory[i].color + '">' + playerInventory[i].itemQuality + '</font>' + '</td>' +
                    '<td>' + playerInventory[i].value + "Value" +
                 '<td>' + '<button onclick="equipItem' + "(" + playerInventory[i].id + ")" + '">Equip</button>' +
                 '<button onclick="itemSell' + "(" + playerInventory[i].id + ")" + '">Sell</button>' + '</td>' + '</tr>'
            }
        }
        html += '</table>';
        html += '</div>';
    }
    html += '</div>';

    document.getElementById("inventory").innerHTML = html;
};