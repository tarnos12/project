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
function CreateInventoryWeaponHtml() {
    var html = '';

    for (var i = 0; i < playerInventory.length; i++) {


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
                '">' +

                playerInventory[i].itemType + " " + '<font color="' + playerInventory[i].color + '">' + playerInventory[i].itemQuality + '</font>' +
                '<button onclick="equipItem' + "(" + playerInventory[i].id + ")" + '">Equip</button>' +
                '<br />';
    }
    document.getElementById("inventory").innerHTML = html;
};