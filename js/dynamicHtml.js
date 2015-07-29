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
                if (itemStat.level < displaySkill.levelReq) {
                    html += "<br />" + '<span class ="bold">' + displaySkill.name + '</span>' + ":<br /> Unlocks at " + displaySkill.levelReq + " level";
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
};

var monsterTabActiveNum = 0;
function changedTabmonster(index) {
    monsterTabActiveNum = index;
};
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
        html += '<div class="c3"><h4>Inventory</h4></div>';
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
                html += '<a href="#" class="tooltipA">';

                html += '<img src="images/items/' + playerInventory[i].subType + "/" + playerInventory[i].image + '.png" class="' + playerInventory[i].itemQuality + '"onclick="equipItem' + "(" + playerInventory[i].id + ")" + '"/>';
                html += '<span>';
                html += '<font color="' + playerInventory[i].color + '"><strong>' + playerInventory[i].itemQuality + " " + playerInventory[i].subType.capitalizeFirstLetter() + '</strong></font>' + '<br />';
                if (playerInventory[i].itemType === "weapon") {
                    html += playerInventory[i].MinDamage + "-" + playerInventory[i].MaxDamage + " Damage";
                }
                var item = playerInventory[i];
                for (var statName in item) { //Here stat will become the word Defense
                    if ('All attributes, Strength, Endurance, Agility, Dexterity, Wisdom, Intelligence, Luck, Block chance, Evasion, Bonus damage, Bonus armor, Bonus life, Bonus mana, Health regen, Mana regen, Magic find, Gold drop, Experience rate, Life gain on hit, Critical damage, Critical chance, defense'.indexOf(statName) != -1) {
                        //Getting the actual stat object from the word.
                        var selectedStat = item[statName];
                        if (selectedStat > 0 || statName === "Bonus damage") {
                            html += '<br />' + statName + ": " + selectedStat;
                        }
                    };
                };
                html += '<br />' + "Value: " + playerInventory[i].Value + " gold";
                html += '</span>' + '</a>' +
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

function unequipItemLoad() { // Create a variable inside player.properties which store currently equipped item, for easy access...
    for (var key in loadingEquippedItems) {
        var html = '';
        var i = loadingEquippedItems[key].type
        var itemStat = equippedItems[i];
        if (itemStat.subType !== undefined) {
            html += '<div class="col-xs-12 col-lg-6 c8"' + 'id="' + 'testingItem' + equippedItems[i].id + '"' + '>';
            html += '<a href="#" class="tooltipA">';
            html += '<img src="images/items/' + equippedItems[i].subType + "/" + equippedItems[i].image + '.png" class="' + equippedItems[i].itemQuality + '"onclick="equipItem' + "(" + equippedItems[i].id + ")" + '"/>';
            html += '<span>';
            html += '<font color="' + equippedItems[i].color + '"><strong>' + equippedItems[i].itemQuality + " " + equippedItems[i].subType.capitalizeFirstLetter() + '</strong></font>' + '<br />';
            if (equippedItems[i].itemType === "weapon") {
                html += '<br />';
                html += "Damage: " + itemStat.MinDamage + "-" + itemStat.MaxDamage;
            }
            var item = equippedItems[i];
            for (var statName in item) { //Here stat will become the word Defense
                if ('All attributes, Strength, Endurance, Agility, Dexterity, Wisdom, Intelligence, Luck, Block chance, Evasion, Bonus damage, Bonus armor, Bonus life, Bonus mana, Health regen, Mana regen, Magic find, Gold drop, Experience rate, Life gain on hit, Critical damage, Critical chance, defense'.indexOf(statName) != -1) {
                    //Getting the actual stat object from the word.
                    var selectedStat = item[statName];
                    if (selectedStat > 0 || statName === "Bonus damage") {
                        html += '<br />' + statName + ": " + selectedStat;
                    }
                };
            };
            html += '<br />' + "Value: " + equippedItems[i].Value + " gold";
            html += '</span>' + '</a>' +
             '<button type="button" class="equip" onclick="itemSell' + "(" + equippedItems[i].id + ")" + '">Sell</button>';
            html += '</div>';
            player.functions[i] = $(html);
        };
    };
};
var spellDamageDisplay = 0;
function CreatePlayerSkillsHtml() {
    var html = '';
    html += '<div class="row">';
    html += '<div class="c3 bold">Mana left: ' + (player.functions.maxMana() - spellTotalManaCost) + "</div>";
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

function newGame() {
    characterCreationHtml();
    if (hardcoreMode === true) {
        player.properties.hardcoreMode = true;
    };
    autoSave();
    EquippedItemsEmpty();
    primaryStatUpdate();
    secondaryStatUpdate();
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
        html2 += '<div class="col-sm-6 col-xs-offset-3">';
        html2 += 'Pick your race, hover over a race name for more info.';
        html2 += '</div></div>';
        html += '<div class="row">';
        html += '<div class="col-sm-10 col-xs-offset-1">';
        html += '<div class="row">';
        for (var hero in characterRaces) {
            var heroRace = characterRaces[hero];
            var onclickevent = "changeRace('" + heroRace.name + "');";
            html += '<div class="col-xs-4 col-xs-offset-2">';
            html += '<a href="#" class="tooltipA">' + heroRace.name + "" +
                    '<span>' + 'Stats per level: <br />' +
                    'Strength: ' + heroRace.strength + '<br />' +
                    'Endurance: ' + heroRace.endurance + '<br />' +
                    'Agility: ' + heroRace.agility + '<br />' +
                    'Dexterity: ' + heroRace.dexterity + '<br />' +
                    'Intelligence: ' + heroRace.intelligence + '<br />' +
                    'Wisdom: ' + heroRace.wisdom + '<br />' +
                    'Luck: ' + heroRace.luck + '<br />' +
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
        if (currentBonus.type === "Magic find" || currentBonus.type === "Gold drop" || currentBonus.type === "Experience rate" || currentBonus.type === "Critical damage") {
            html += ((statDisplay - 1) * 100).toFixed(0);
        }
        else if (currentBonus.type === "Stats" || currentBonus.type === "Skill points") {
            html += statDisplay.toFixed(0);
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

function checkEquippedItemType(newItem) {
    var html = '';
    //Weapon
    var item = equippedItems[newItem];
            //Getting the actual stat object from the word.
            var itemType = item;
            if (itemType.hasOwnProperty('itemType')) {
                html += '<div id="equippedItem' + itemType.id + '"' + '>';
                html += '<a href="#" class="tooltipA">';
                html += '<img src="images/items/' + itemType.subType + "/" + itemType.image + '.png" onclick="unequipItem' + "(" + itemType.id + ', ' + "'solo'" + ")" + '" />';
                html += '<span>';
                html += '<font color="' + itemType.color + '"><strong>' + itemType.itemQuality + " " + itemType.subType.capitalizeFirstLetter() + '</strong></font>' + '<br />';
                if (itemType.minDamage > 0 && itemType.maxDamage > 0) {
                    html += '<br />' + "Damage: " + itemType.minDamage + "-";
                    html += itemType.maxDamage;
                };
                for (var statName in itemType) { //Here stat will become the word Defense
                    if ('All attributes, Strength, Endurance, Agility, Dexterity, Wisdom, Intelligence, Luck, Block chance, Evasion, Bonus damage, Bonus armor, Bonus life, Bonus mana, Health regen, Mana regen, Magic find, Gold drop, Experience rate, Life gain on hit, Critical damage, Critical chance, defense'.indexOf(statName) != -1) {
                        //Getting the actual stat object from the word.
                        if (itemType[statName] > 0) {
                            html += "<br />" + statName.capitalizeFirstLetter() + ": " + itemType[statName];
                        };
                    };
                };
                html += '<br />' + "Value: " + itemType.Value + " gold";
                html += '</span>' + '</a>';
                html += '</div>';
    };
    html += '</div>';
    return html;
};