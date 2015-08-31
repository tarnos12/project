"use strict";
//Create player Weapon skill html
var weaponTabActive = 'swordTest';
function changeTabWeapon(index) {
    weaponTabActive = index;
};
function CreateWeaponSkillHtml() {
    var html = '';
    html += '<div class="row">';
        html += '<div class="col-xs-10 col-xs-offset-1">';
            html += '<div class="row">';
    for (var itemType in weaponTypeObject) {
        if (weaponTypeObject.hasOwnProperty(itemType)) {
            var item = weaponTypeObject[itemType];
            var itemType2 = item.type;
            var itemType3 = item.type2;
            var weaponStat = weaponMastery[itemType2];
            html += '<div class="col-xs-2 passiveMargin">';
            html += '<a class="tooltips">';
            html += '<img class="skillBorder" src="images/skills/' + item.type + '.png">';
            html += '<span style="width:200px; bottom:30px; right:-100px;">';
            html += '<div class="row">';
            html += '<div class="col-xs-12">';
            html += item.displayName + ' skill progress:<br />';
            html += 'Level: ' + weaponStat.level + '<br />';
            html += '<div class="progress">';
            html += '<div style="width: ' + player.properties[itemType3] + '%;" aria-valuemax="100" aria-valuemin="0" aria-valuenow="60" role="progressbar" class="progress-bar" id="' + item.type + "1" + '">';
            html += '<span id="' + item.type + '">' + player.properties[itemType3] + '%' + '</span></div></div>';
            html += '</div>';
            html += '</div>';
            html += 'Stat Multiplier:<br />';
            for (var statName in weaponStat) {
                if (weaponStat.hasOwnProperty(statName)) {
                    if ('strength, endurance, agility, dexterity, intelligence, wisdom, luck'.indexOf(statName) !== -1) {
                        html += statName.capitalizeFirstLetter() + ': ' + (weaponStat[statName]() * 100).toFixed(0) + '%' + '<br />';
                    };
                };
            };
            html += '</span></a>';
            html += '</div>';
        };
    };
    html += '</div>';
            html += '<div class="row">';
    for (var type in weaponSkillList) {
        if (weaponSkillList.hasOwnProperty(type)) {
            var weaponType = weaponSkillList[type];
            html += '<div class="col-xs-2">';
            html += '<div class="row">';
            for (var skill in weaponType) {
                if (weaponType.hasOwnProperty(skill)) {
                    var weaponSkill = weaponType[skill];
                    html += '<div class="col-xs-12 passiveMargin">';
                    html += '<a class="tooltips">';
                    html += '<img class="skillBorder" src="images/skills/' + weaponSkill.image + '.png">';
                    html += '<span style="width:200px; bottom:30px; right:-100px;">';
                    html += weaponSkill.name + '<br />';
                    html += 'Weapon skill required: ' + weaponSkill.levelReq + '<br />';
                    html += weaponSkill.description();
                    html += '</span></a>';
                    html += '<div class="row">';
                    html += '<div class="col-xs-8 col-xs-offset-2">';
                    html += '<img class="skillBorder" src="images/arrow.png">';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                };
            };
            html += '</div>';
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
    currentMonster = index + (index * 7);//Display first monster of each area when changing tab
    CreateMonsterHtml();
};
var currentMonster = 0; //Save current monster number, so I can pick it from array.
function CreateMonsterHtml() {
    var html = '';
    html += '<ul class="nav nav-tabs">';
    for (var k = 0; k < monsterAreas.length; k++) {
        if (monsterAreas[k].isUnlocked === true) {
            if (k === monsterTabActiveNum) {
                html += '<li class="active" onClick = changedTabmonster(' + k + ')>';
            }
            else {
                html += '<li onClick = changedTabmonster(' + k + ')>';
            };
            html += '<a href="#tab_' + monsterAreas[k].type + '" data-toggle="tab"><span class="icons ' + monsterAreas[k].icon + '" data-toggle="tooltip" data-placement="right" title="' + monsterAreas[k].displayName + '"></span>' + '</a></li>';
        };
    };
    html += '</ul>';
    html += '<div class="tab-content">';
    for (var j = 0; j < monsterAreas.length; j++) {
        if (monsterAreas[j].isUnlocked === true) {
            if (j === monsterTabActiveNum) {
                html += '<div class="tab-pane active" ';
            }
            else {
                html += '<div class="tab-pane" ';
            };
            html += 'id="tab_' + monsterAreas[j].type + '">' +
                '<div class="panel panel-default">' +
                '<div class="panel-heading" style="background-color:green;">' +

                '<h3 class="panel-title c3" >' + monsterAreas[j].displayName + '</h3>' +

                '</div>' +
                '<div class="panel-body" style="background-color:green;">';
            html += '<div class="row">';
            var monsterNum = newTest[currentMonster].name;
            var monster = monsterList[monsterNum].Stats;
            var area = monster.area;
            html += '<div class="col-xs-12 c3">';
            for (var key in monsterList) {
                var monsterNumber = monsterList[key].Stats.id - 1;
                var monsterNumberDisplay = monsterList[key].Stats.id;
                var monsterArea = monsterList[key].Stats.area;
                var monsterShow = monsterList[key].Stats;
                if (monsterArea === monsterAreas[j].type) {
                    if (monsterShow.isShown === true) {
                        html += '<button ';
                        if (currentMonster === monsterNumber) {
                            html += 'class="buttonSelected" ';
                        }
                            html += 'style="margin-left:8px;" type="button" onclick="changeMonsterPage(' + monsterNumber + ')">' + monsterNumberDisplay + '</button>';
                    };
                }
            }
            html += '</div>';
                if (area === monsterAreas[j].type) {
                    var monsterPercent = ((monster.hp / monster.maxHp) * 100);
                    if (monster.type !== "mining") {
                        var onclickevent = 'attack(' + monster.name + ');';
                    }
                    else if (monster.type === "mining") {
                        var onclickevent = 'mine(' + monster.name + ');';
                    }
                    html += '<div class="col-xs-10 col-xs-offset-1">' +//First Div
                        '<div class="row">' +//First Row
                        '<div class="col-xs-4 col-xs-offset-4 c3">' +//Second Div
                        '<div id="' + monster.id + '">' +
                        '<a href="#" class="tooltipA centerText" id="monsterButton">' +
                        '<img class="monster" src="images/monsters/' + monster.name + '.png" alt="' + monster.displayName + '" onclick="' + onclickevent + '">' +
                        '<span style="bottom:140px; left:-100px; pointer-events:none;">' +
                        '<b>' + monster.displayName + '</b>';
                    if (monster.type !== "mining") {
                        html += '<br />' +
                        'Level: ' + monster.level +
                        '<br />' +
                        'Dmg:' + monster.minDmg + "-" + monster.maxDmg +
                        '<br />' +
                        'Def:' + monster.def;
                    };
                    html += '</span></a>' +
                        '<br /></div>';
                    html += '</div>';//Close second Div


                    html += '</div>';//Close first Row

                    html += '<div class="progress" style="width:80%; margin-left:10%;">';
                    html += '<div style="width:' + monsterPercent + "%" + ';" aria-valuemax="100" aria-valuemin="0" aria-valuenow="60" role="progressbar" class="progress-bar" id="' + monster.name + "1" + '">';
                    html += '<span style="font-size:13px;">' + monster.hp + ' HP</span>' + '</div></div>';
                        html += '</div>';//Close First Div
                };
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
        };
    };
    html += '</div>';

    document.getElementById("monsterTabs").innerHTML = html;
    testss();
};
function changeMonsterPage(id) {
    currentMonster = id;
    CreateMonsterHtml();
}
var newTest = [
    {
        name: "VarikGrunt",
    },
    {
        name: "VarikSoldier",
    },
    {
        name: "VarikMarksmen",
    },
    {
        name: "VarikVulture",
    },
    {
        name: "VarikEvader",
    },
    {
        name: "VariksLiar",
    },
    {
        name: "VariksQueen",
    },
    {
        name: "LordVarik",
    },
    {
        name: "ToxicFlies",
    },
    {
        name: "Stalker",
    },
    {
        name: "AlphaStalker",
    },
    {
        name: "StalkerPack",
    },
    {
        name: "JumpingSpider",
    },
    {
        name: "SpiderBeast",
    },
    {
        name: "Narsus",
    },
    {
        name: "JotunnScout",
    },
    {
        name: "JotnarAmbushSquad",
    },
    {
        name: "LongRangeExterminationSquad",
    },
    {
        name: "BerserkerShockSquad",
    },
    {
        name: "BerserkerShockSquadCaptainRendGrest",
    },
    {
        name: "ArtillerySquad",
    },
    {
        name: "JottunMainInfantry",
    },
    {
        name: "RegentCairLorn",
    },
    {
        name: "DeepKingTarNuk",
    },
    {
        name: "DepthCrawler",
    },
    {
        name: "FadingGoblins",
    },
    {
        name: "StarBriteGolems",
    },
    {
        name: "Bannecs",
    },
    {
        name: "Kholders",
    },
    {
        name: "LivingWalls",
    },
    {
        name: "Keeper",
    },
    {
        name: "LegendoftheAncientDreamer",
    },
    {
        name: "BabyDuneDigger",
    },
    {
        name: "CamelSpiderHerds",
    },
    {
        name: "WasteEagle",
    },
    {
        name: "GrelTribeGuard",
    },
    {
        name: "GrelWarriors",
    },
    {
        name: "GrelSpitters",
    },
    {
        name: "GrelChief",
    },
    {
        name: "MommaDuneDiggerSheila",
    },
    {
        name: "CrystalFloater",
    },
    {
        name: "SnowWatcher",
    },
    {
        name: "CannibalTribeTrachid",
    },
    {
        name: "LegendoftheRageCalm",
    },
    {
        name: "IceGiantKing",
    },
    {
        name: "FrightGolem",
    },
    {
        name: "FrightGolemArmy",
    },
    {
        name: "LegendoftheRageFullPower",
    },
    {
        name: "LegionofDreadWallGuards",
    },
    {
        name: "Dreadnaughts",
    },
    {
        name: "DreadnaughtElite",
    },
    {
        name: "EmaciatedMagi",
    },
    {
        name: "MagiThunderCallers",
    },
    {
        name: "FalseDragonSlayers",
    },
    {
        name: "TorturedBeholder",
    },
    {
        name: "KingoftheLegionGrantBannecs",
    },
    {
        name: "Thaumerite",
    },
    {
        name: "LiteCyan",
    },
    {
        name: "OhmStone",
    },
    {
        name: "Techtite",
    },
    {
        name: "XilBond",
    },
    {
        name: "VulcanatedIron",
    },
];


/*function CreateMonsterHtml() {
    var html = '';
    html += '<ul class="nav nav-tabs">';
    for (var k = 0; k < monsterAreas.length; k++) {
        if (monsterAreas[k].isUnlocked === true) {
            if (k === monsterTabActiveNum) {
                html += '<li class="active" onClick = changedTabmonster(' + k + ')>';
            }
            else {
                html += '<li onClick = changedTabmonster(' + k + ')>';
            };
            html += '<a href="#tab_' + monsterAreas[k].type + '" data-toggle="tab"><span class="icons ' + monsterAreas[k].icon + '" data-toggle="tooltip" data-placement="right" title="' + monsterAreas[k].displayName + '"></span>' + '</a></li>';
        };
    };
    html += '</ul>';
    html += '<div class="tab-content">';
    for (var j = 0; j < monsterAreas.length; j++) {
        if (monsterAreas[j].isUnlocked === true) {
            if (j === monsterTabActiveNum) {
                html += '<div class="tab-pane active" ';
            }
            else {
                html += '<div class="tab-pane" ';
            };
            html += 'id="tab_' + monsterAreas[j].type + '">' +
                '<div class="panel panel-default">' +
                '<div class="panel-heading" style="background-color:green;">' +

                '<h3 class="panel-title c3" >' + monsterAreas[j].displayName + '</h3>' +

                '</div>' +
                '<div class="panel-body" style="background-color:green;">';
            html += '<div class="row">';
            for (var key in monsterList) {
                if (monsterList.hasOwnProperty(key)) {
                    var monster = monsterList[key];
                    var area = monster.Stats.area;
                };
                if (area === monsterAreas[j].type) {
                    if (monster.Stats.isShown === true) {
                        var monsterPercent = ((monster.Stats.hp / monster.Stats.maxHp) * 100);
                        if (monster.Stats.type !== "mining") {
                            var onclickevent = 'attack(' + monster.Stats.name + ');';
                        }
                        else if (monster.Stats.type === "mining") {
                            var onclickevent = 'mine(' + monster.Stats.name + ');';
                        }
                        html += '<div class="col-xs-6 col-lg-3">' +
                            '<div class="row">' +
                            '<div class="col-xs-10 col-xs-offset-1" style="width:85%;">' +
                            '<div id="' + monster.Stats.id + '">' +
                            '<a href="#" class="tooltipA" id="monsterButton">' +
                            '<img class="monster" src="images/monsters/' + monster.Stats.name + '.png" alt="' + monster.Stats.displayName + '" onclick="' + onclickevent + '">' +
                            '<span style="bottom:120px; left:-100px; pointer-events:none;">' +
                            '<b>' + monster.Stats.displayName + '</b>';
                        if (monster.Stats.type !== "mining") {
                            html += '<br />' +
                            'Level: ' + monster.Stats.level +
                            '<br />' +
                            'Dmg:' + monster.Stats.minDmg + "-" + monster.Stats.maxDmg +
                            '<br />' +
                            'Def:' + monster.Stats.def;
                        };
                        html += '</span></a>' +
                            '<br /></div>';
                        html += '<div class="progress">';
                        html += '<div style="width:' + monsterPercent + "%" + ';" aria-valuemax="100" aria-valuemin="0" aria-valuenow="60" role="progressbar" class="progress-bar" id="' + monster.Stats.name + "1" + '">';
                        html += '<span style="font-size:13px;">' + monster.Stats.hp + ' HP</span>' + '</div></div>';
                        html += '</div>';


                        html += '</div></div>';
                    };
                };
            };
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
        };
    };
    html += '</div>';

    document.getElementById("monsterTabs").innerHTML = html;
    testss();
};*/






function checkBoxHtml() {
    var html = "";
    html += '<div class="row borderBottom borderTop">';
    html += '<div class="col-xs-10 col-xs-offset-1">';
    html += '<div class="centerText">';
    html += '<br /><label><input style="visibility:visible; position:relative;" type="checkbox" id="common" onclick="handleClick();"'
    if (checkBoxCommon === true) {
        html += "checked";
    }
    html += '><span style="background-color:gray; width:10px;height:10px;" data-toggle="tooltip" data-placement="top" title="Common">__</span></label>';

    html += '<label><input style="visibility:visible; position:relative;" type="checkbox" id="uncommon" onclick="handleClick();"'
    if (checkBoxUncommon === true) {
        html += "checked";
    }
    html += '><span style="background-color:green; width:10px;height:10px;" data-toggle="tooltip" data-placement="top" title="Uncommon">__</span></label>';

    html += '<label><input style="visibility:visible; position:relative;" type="checkbox" id="rare" onclick="handleClick();"'
    if (checkBoxRare === true) {
        html += "checked";
    }
    html += '><span style="background-color:blue; width:10px;height:10px;" data-toggle="tooltip" data-placement="top" title="Rare">__</span></label>';

    html += '<label><input style="visibility:visible; position:relative;" type="checkbox" id="epic" onclick="handleClick();"'
    if (checkBoxEpic === true) {
        html += "checked";
    }
    html += '><span style="background-color:orange; width:10px;height:10px;" data-toggle="tooltip" data-placement="top" title="Epic">__</span></label>';

    html += '<label><input style="visibility:visible; position:relative;" type="checkbox" id="legendary" onclick="handleClick();"'
    if (checkBoxLegendary === true) {
        html += "checked";
    }
    html += '><span style="background-color:red; width:10px;height:10px;" data-toggle="tooltip" data-placement="top" title="Legendary">__</span></label><br />';

    html += '</div>';
    html += '<div class="centerText">';
    html += '<strong>Sell all items by selected rarity(All tabs)</strong>';
    var sellAll = "sellAllItems();";
    html += '<br /><button type="button" class="sell" onclick=' + sellAll + '>Sell all</button>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    document.getElementById('checkBoxHtml').innerHTML = html;
    testss();
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
    for (var k = 0; k < InventoryItemTypes.length; k++) {
        if (k === inventoryTabActiveNum) {
            html += '<li class="active" onClick = changedTabInventory(' + k + ')>';
        }
        else {
            html += '<li onClick = changedTabInventory(' + k + ')>';
        }
        html += '<a href="#tab_' + InventoryItemTypes[k].type + '" data-toggle="tab"><span class="icons ' + InventoryItemTypes[k].icon + '" data-toggle="tooltip" data-placement="top" title="' + InventoryItemTypes[k].displayName + '"></span></a></li>';
    };
    html += '</ul>';
    html += '<div class="tab-content" id="tabControl_Inventory">';
    for (var j = 0; j < InventoryItemTypes.length; j++) {
        if (j === inventoryTabActiveNum) {
            if (InventoryItemTypes[j].type === 'other') {
                html += '<div class="col-xs-12 tab-pane active"';
            }
            else {
                html += '<div class="col-xs-10 col-xs-offset-1 tab-pane active"';
            };
        }
        else {
            if (InventoryItemTypes[j].type === 'other') {

                html += '<div class="col-xs-12 tab-pane"';
            }
            else {
                html += '<div class="col-xs-10 col-xs-offset-1 tab-pane"';
            };
        };
        html += 'id="tab_' + InventoryItemTypes[j].type + '">';
        html += '<div class="row" id="' + "inventorySpace" + InventoryItemTypes[j].type + '"' + '>';
        html += '<div class="c3" style="margin-bottom:10px;"><h4>Inventory</h4>';
        if (InventoryItemTypes[j].type !== 'other') {
            html += '<div class="c3">Sort by:</div>';
            var sortItemValue = 'onclick="sortInventory' + "(" + "'Value'" + ")"
            var sortItemRarity = 'onclick="sortInventory' + "(" + "'Rarity'" + ")"
            var sortItemLevel = 'onclick="sortInventory' + "(" + "'iLvl'" + ")"
            html += '<button type="button" ' + sortItemValue + '">Value</button>';
            html += '<button type="button" ' + sortItemRarity + '">Rarity</button>';
            html += '<button type="button" ' + sortItemLevel + '">Level</button>';
            if (InventoryItemTypes[j].type === 'weapon') {
                var sortItemDamage = 'onclick="sortInventory' + "(" + "'Damage'" + ")"
                html += '<button type="button" ' + sortItemDamage + '">Damage</button>';
            };
        };
        html += '</div>';
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
                html += '<div class="col-xs-6 col-sm-3 col-md-6 col-lg-3 c8" style="margin-top:5px;" ' + 'id="' + 'testingItem' + playerInventory[i].id + '"' + '>';
                html += '<a class="tooltips2" style="cursor:pointer;">';
                if (playerInventory[i].itemType === "weapon") {
                    html += '<img class="' + playerInventory[i].itemType + ", " + playerInventory[i].itemRarity;
                }
                else {
                    html += '<img class="' + playerInventory[i].subType + ", " + playerInventory[i].itemRarity;
                }
                html += '"' + 'src="images/items/' + playerInventory[i].subType + "/" + playerInventory[i].image + '.png"' + 'onclick="equipItem' + "(" + playerInventory[i].id + ")" + '"/>';

                if (itemStat.hasOwnProperty('itemType')) {
                    html += '<span style="pointer-events:none;">';
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

                    html += itemTooltipTest(equippedItemDisplay);

                    html += '<strong>Currently equipped</strong>';
                    html += '</div>';
                };

                if (itemStat.hasOwnProperty('itemType')) {
                    html += '<div class="col-xs-6">';
                }
                else {
                    html += '<div class="col-xs-10 col-xs-offset-1">';
                }
                //Start here
                html += itemTooltipTest(playerInventory[i]);
                ///End here
                html += '<strong>Left-Click to equip</strong>';
                html += '</div></div>';
                html += '</div>';
                if (itemStat.hasOwnProperty('itemType')) {
                    html += '</div>';
                }
                html += '</span>' + '</a>'
                html += '<button type="button" style="margin-top:5px;" class="inventorySell" onclick="itemSell' + "(" + playerInventory[i].id + ")" + '">Sell</button>';
                html += '</div>';
            };
        };

       
        if (InventoryItemTypes[j].type === 'other') {
            html += '<div class="row">';
            html += '<div class="col-xs-12">';
            html += 'Choose hot bar slot, then press a button next to a potion.';
            html += '<form role="form">';
            html += '<label class="radio-inline"><input class="visibilityLabel" type="radio" name="hotBarValue" value="1" checked="checked">1</input></label>'
            html += '<label class="radio-inline"><input class="visibilityLabel" type="radio" name="hotBarValue" value="2">2</input></label>'
            html += '<label class="radio-inline"><input class="visibilityLabel" type="radio" name="hotBarValue" value="3">3</input></label>'
            html += '<label class="radio-inline"><input class="visibilityLabel" type="radio" name="hotBarValue" value="4">4</input></label>'
            html += '<label class="radio-inline"><input class="visibilityLabel" type="radio" name="hotBarValue" value="5">5</input></label>'
            html += '<label class="radio-inline"><input class="visibilityLabel" type="radio" name="hotBarValue" value="6">6</input></label>'
            html += '<label class="radio-inline"><input class="visibilityLabel" type="radio" name="hotBarValue" value="7">7</input></label>'
            html += '<label class="radio-inline"><input class="visibilityLabel" type="radio" name="hotBarValue" value="8">8</input></label>'
            html += '</form>';
            html += '</div>';
            html += '</div>';
            html += '<div id="potionInventory">';
           
        };
        html += '</div>';
        html += '</div>';
    };
    html += '</div>';
    document.getElementById("inventory").innerHTML = html;
    testss();
};

function unequipItemLoad() { // Create a variable inside player.properties which store currently equipped item, for easy access...
    for (var key in loadingEquippedItems) {
        if (loadingEquippedItems.hasOwnProperty(key)) {
            var html = '';
            var i = loadingEquippedItems[key].type
            var itemStat = equippedItems[i];
            if (itemStat.subType !== undefined) {
                html += '<div class="col-xs-12 col-lg-6 c8"' + 'id="' + 'testingItem' + itemStat.id + '"' + '>';
                html += '<a class="tooltips" style="cursor:pointer;">';
                if (itemStat.itemType === "weapon") {
                    html += '<img class="' + itemStat.itemType;
                } else {
                    html += '<img class="' + itemStat.subType;
                }
                html += '"' + 'src="images/items/' + itemStat.subType + "/" + itemStat.image + '.png" onclick="equipItem' + "(" + itemStat.id + ")" + '"/>';
                if (itemStat.hasOwnProperty('itemType')) {
                    html += '<span>';
                } else {
                    html += '<span style="width:200px;">';
                }
                html += '<div class="row">';
                html += '<div class="col-xs-12">';

                if (itemStat.hasOwnProperty('itemType')) {
                    var equippedItemDisplay = itemStat;
                    html += '<div class="row">';
                    html += '<div class="col-xs-6">';
                    html += itemTooltipTest(equippedItemDisplay);
                    html += '<strong>Currently equipped</strong>';
                    html += '</div>';
                };

                if (itemStat.hasOwnProperty('itemType')) {
                    html += '<div class="col-xs-6">';
                } else {
                    html += '<div class="col-xs-10 col-xs-offset-1">';
                }
                html += itemTooltipTest(itemStat);
                html += '<strong>Left-Click to equip</strong>';
                html += '</div></div>';
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
};

function CreatePlayerSkillsHtml() {
    var html = '';
    html += '<div class="row">';
    html += '<div class="col-xs-10 col-xs-offset-1">';
    html += '<div class="row">';
    html += '<div class="col-xs-6 col-xs-offset-3 c3">';
    html += '<button type="button" onclick="resetPassiveSkills();">Reset</button>';
    html += '<div class="fontSize">Skill points remaining: ' + player.properties.skillPoints + '</div>';
    html += '</div>';
    html += '</div>';
    html += '<div class="row">';
    html += '<div class="talent-tree">';
    for (var passiveSkill in playerPassive) {
        if (playerPassive.hasOwnProperty(passiveSkill)) {
            var passive = playerPassive[passiveSkill];
            var onclickevent = "upgradePassive('" + passiveSkill + "');";

            if (passive.newRow === true) {
                html += '<div class="row">';
            };
            if (passive.type === "Double") {

                html += '<div class="col-xs-2 col-xs-offset-2">';
            } else {
                html += '<div class="col-xs-4">';
            }
            html += '<div class="col-xs-12">';//Opening Div for skill image
            html += '<div class="skill ';//Open first div
            if (passive.requirements() === true) {
                if (passive.level === 0) {
                    html += "can-add-points ";
                }
                if (passive.level > 0 && passive.level < passive.maxLevel) {
                    html += "can-add-points has-points ";
                }
                if (passive.level === passive.maxLevel) {
                    html += "has-points has-max-points";
                }
            }
            html += '">';
            //Start of icon div's
            html += '<div class="icon-container">';
            html += '<div class="icon">';
            html += '<img src="images/passive/' + passive.image + '.png"">';
            html += '</div></div>';
            //End of icon div's
            //Start of div Frame
            html += '<div class="frame" onclick="' + onclickevent + '">';
            html += '<a class="tooltips" style="position:absolute; width:80px; height:80px;">';
            html += '<span style="bottom:110px; right:-100px; width:250px;">';
            html += passive.name + '<br />';
            html += passive.description();
            html += '<br />Level: ' + passive.levelReq;
            html += '<br />Level: ' + passive.level + '/' + passive.maxLevel;
            html += '</span></a>';
            html += '<div class="skill-points">';
            html += passive.level + '/' + passive.maxLevel;
            html += '</div>';
            html += '</div>';
            //End of div Frame
            html += '</div>';//Close first Div
            
            // html += '<div class="centerText passiveMargin">' + passive.level + '/' + passive.maxLevel + '</div>';

            html += '</div>';//Closing div for skill image
            html += '</div>';
            if (passive.lastRow === true) {
                html += '</div>';
            };
        };
    };
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    document.getElementById("playerSkills").innerHTML = html;
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
    var reset = "resetallSavesCheck();";
    var muteSound = "muteAudio();";
    var myAudio = document.getElementById('myAudio');
    html += '<div class="row">';
    html += '<div class ="col-xs-12 newGameButton">';
    html += '<div class="btn-group-vertical" role="group" aria-label="New game, load game">';
    html += '<button type="button" style="margin-bottom:5px;" class="btn btn-default border" onclick="' + newGame + '">New Game</button>';
    html += '<button type="button" style="margin-bottom:5px;" class="btn btn-default border" onclick="' + loadGame + '">Load</button>';
    html += '<button type="button" style="margin-bottom:5px;" class="btn btn-default border" onclick="' + reset + '">Reset all saves</button>';
    html += '<label><input type="checkbox" id="hardcoreMode" style ="visibility:visible; position:relative;" onclick="handleClick();">Hardcore Mode?</label>';
    html += '</div>';
    html += '</div>';
    html += '<button type="button" class="btn btn-default musicDiv" onclick="' + muteSound + 'changeMusicImage();""><span id="musicImage" class="glyphicon glyphicon-volume-up" aria-hidden="true"></span></button>';
    html += '</div>';
    document.getElementById("buttonDiv").innerHTML = html;
    myAudio.volume = 0.1;
    myAudio.play();
};
startingScreen();
startLogo();

function newGameSlot() {
    changeMusicImage();
    characterCreationCreateBackground();
    var html = '';
    var newGameSlot0 = "newGame(0);";
    var newGameSlot1 = "newGame(1);";
    var newGameSlot2 = "newGame(2);";
    var newGameSlot3 = "newGame(3);";
    var displayInfo0 = "";
    var displayInfo = "";
    var displayInfo2 = "";
    var displayInfo3 = "";
    var saveInfo0 = "";
    var saveInfo1 = "";
    var saveInfo2 = "";
    var saveInfo3 = "";

    if (localStorage['EncodedSaveGame']) {
        saveInfo0 = JSON.parse(atob(localStorage['EncodedSaveGame']));
        displayInfo0 = "Current save: Level - " + saveInfo0.playerProperties.level + ' Race: ' + saveInfo0.playerProperties.heroRace;
        if (saveInfo0.playerProperties.hardcoreMode === true) {
            displayInfo0 += " <strong>Hardcore</strong>"
        };
    }
    else {
        displayInfo0 = "Empty Slot";
    }

    if (localStorage['EncodedSaveGame1']) {
        saveInfo1 = JSON.parse(atob(localStorage['EncodedSaveGame1']));
        displayInfo = "Current save: Level - " + saveInfo1.playerProperties.level + ' Race: ' + saveInfo1.playerProperties.heroRace;
        if (saveInfo1.playerProperties.hardcoreMode === true) {
            displayInfo += " <strong>Hardcore</strong>"
        };
    }
    else {
        displayInfo = "Empty Slot";
    }
    if (localStorage['EncodedSaveGame2']) {
        saveInfo2 = JSON.parse(atob(localStorage['EncodedSaveGame2']));
        displayInfo2 = "Current save: Level - " + saveInfo2.playerProperties.level + ' Race: ' + saveInfo2.playerProperties.heroRace;
        if (saveInfo2.playerProperties.hardcoreMode === true) {
            displayInfo2 += " <strong>Hardcore</strong>"
        };
    }
    else {
        displayInfo2 = "Empty Slot";
    }
    if (localStorage['EncodedSaveGame3']) {
        saveInfo3 = JSON.parse(atob(localStorage['EncodedSaveGame3']));
        displayInfo3 = "Current save: Level - " + saveInfo3.playerProperties.level + ' Race: ' + saveInfo3.playerProperties.heroRace;
        if (saveInfo3.playerProperties.hardcoreMode === true) {
            displayInfo3 += " <strong>Hardcore</strong>"
        };
    }
    else {
        displayInfo3 = "Empty Slot";
    }

    html += '<div class="row">';
    html += '<div class ="col-xs-12 newGameButton">';
    html += '<div class="btn-group-vertical" role="group" aria-label="New game, load game">';
    html += '<div class="row">';
    html += '<div class ="col-xs-12">';
    html += '<button type="button" style="margin-bottom:5px;" class="btn btn-default border" onclick="' + newGameSlot1 + '">New game 1</button> ' + displayInfo;
    html += '</div>';
    html += '<div class ="col-xs-12">';
    html += '<button type="button" style="margin-bottom:5px;" class="btn btn-default border" onclick="' + newGameSlot2 + '">New Game 2</button> ' + displayInfo2;
    html += '</div>';
    html += '<div class ="col-xs-12">';
    html += '<button type="button" style="margin-bottom:5px;" class="btn btn-default border" onclick="' + newGameSlot3 + '">New Game 3</button> ' + displayInfo3;
    html += '</div>';
    html += '<div class ="col-xs-12">';
    html += '<button type="button" style="margin-bottom:5px;" class="btn btn-default border" onclick="' + newGameSlot0 + '">New game 0</button> ' + displayInfo0;
    html += '</div>';
    html += '</div></div>';
    html += '<button type="button" class="btn btn-default border startBackButtonMargin" onclick="backToStartingScreen()">Go Back</button>';
    html += '</div></div>';
    
    document.getElementById("raceCreation").innerHTML = html;
    //document.getElementById("raceText").innerHTML = html2
};

function loadGameSlot() {
    characterCreationCreateBackground();
    var html = '';
    var loadGameSlot0 = "loadGame(0);";
    var loadGameSlot1 = "loadGame(1);";
    var loadGameSlot2 = "loadGame(2);";
    var loadGameSlot3 = "loadGame(3);";
    var displayInfo0 = "";
    var displayInfo = "";
    var displayInfo2 = "";
    var displayInfo3 = "";
    var saveInfo0 = "";
    var saveInfo1 = "";
    var saveInfo2 = "";
    var saveInfo3 = "";
    if (localStorage['EncodedSaveGame']) {
        saveInfo0 = JSON.parse(atob(localStorage['EncodedSaveGame']));
        displayInfo0 = "Level - " + saveInfo0.playerProperties.level + ' Race: ' + saveInfo0.playerProperties.heroRace;
    }
    else {
        displayInfo0 = "Empty Slot";
    };
    if (localStorage['EncodedSaveGame1']) {
        saveInfo1 = JSON.parse(atob(localStorage['EncodedSaveGame1']));
        displayInfo = "Level - " + saveInfo1.playerProperties.level + ' Race: ' + saveInfo1.playerProperties.heroRace;
    }
    else {
        displayInfo = "Empty Slot";
    };
    if (localStorage['EncodedSaveGame2']) {
        saveInfo2 = JSON.parse(atob(localStorage['EncodedSaveGame2']));
        displayInfo2 = "Level - " + saveInfo2.playerProperties.level + ' Race: ' + saveInfo2.playerProperties.heroRace;
    }
    else {
        displayInfo2 = "Empty Slot";
    };
    if (localStorage['EncodedSaveGame3']) {
        saveInfo3 = JSON.parse(atob(localStorage['EncodedSaveGame3']));
        displayInfo3 = "Level - " + saveInfo3.playerProperties.level + ' Race: ' + saveInfo3.playerProperties.heroRace;
    }
    else {
        displayInfo3 = "Empty Slot";
    };

    html += '<div class="row">';
    html += '<div class ="col-xs-12 newGameButton">';
    html += '<div class="btn-group-vertical" role="group" aria-label="New game, load game">';
    html += '<div class="row">';
    html += '<div class ="col-xs-12">';
    html += '<button type="button" style="margin-bottom:5px;" class="btn btn-default border" onclick="' + loadGameSlot1 + '">Load game 1</button> ' + displayInfo;
    html += '</div>';
    html += '<div class ="col-xs-12">';
    html += '<button type="button" style="margin-bottom:5px;" class="btn btn-default border" onclick="' + loadGameSlot2 + '">Load Game 2</button> ' + displayInfo2;
    html += '</div>';
    html += '<div class ="col-xs-12">';
    html += '<button type="button" style="margin-bottom:5px;" class="btn btn-default border" onclick="' + loadGameSlot3 + '">Load Game 3</button> ' + displayInfo3;
    html += '</div>';
    html += '<div class ="col-xs-12">';
    html += '<button type="button" style="margin-bottom:5px;" class="btn btn-default border" onclick="' + loadGameSlot0 + '">Load Game 0</button> ' + displayInfo0;
    html += '</div>';
    html += '</div></div>';
    html += '<button type="button" class="btn btn-default border startBackButtonMargin" onclick="backToStartingScreen()">Go Back</button>';
    html +='</div></div>';

    document.getElementById("raceCreation").innerHTML = html;
};

function newGame(slot) {
    if (confirm("Are you sure?") === true) {
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
        craftingHtml();
        createPotionInventory();
        unlockMineral();
        checkBoxHtml();
    };
};

function backToStartingScreen() {
    var divStyle4 = document.getElementById('raceDiv'); // Race select screen
    divStyle4.style.display = "none";
    var divStyle3 = document.getElementById('startingScreen'); // Starting buttons: new game/ load game/ sound button etc
    divStyle3.style.display = "block"; // none = not displayed
    startingScreen();
    changeMusicImage();
};

function characterCreationCreateBackground() {
    var divStyle = document.getElementById('loadingContainer'); // Whole background of starting screen "a container"
    divStyle.style.display = "block"; //block = display it
    var divStyle3 = document.getElementById('startingScreen'); // Starting buttons: new game/ load game/ sound button etc
    divStyle3.style.display = "none"; // none = not displayed
    var divStyle4 = document.getElementById('raceDiv'); // Race select screen
    divStyle4.style.display = "block";
    var divStyle5 = document.getElementById('sliderDivID'); // Race select screen
    divStyle5.style.display = "none";
    var divStyle6 = document.getElementById('raceText'); // Race select screen
    divStyle6.style.display = "none";
};
function characterCreationCreateBackground2() {
    var divStyle = document.getElementById('loadingContainer'); // Whole background of starting screen "a container"
    divStyle.style.display = "block"; //block = display it
    var divStyle3 = document.getElementById('startingScreen'); // Starting buttons: new game/ load game/ sound button etc
    divStyle3.style.display = "none"; // none = not displayed
    var divStyle4 = document.getElementById('raceDiv'); // Race select screen
    divStyle4.style.display = "block";
};

function removeStartingScreen() {
    var divStyle = document.getElementById('loadingContainer');
    divStyle.style.display = "none";
    var divStyle2 = document.getElementById('startingGameContainer');
    divStyle2.style.display = "none";
};
function characterCreationHtml() {
    characterCreationCreateBackground2();
    if (player.properties.heroRace === '') { // If you press "New game" race property will be empty, allowing you to pick a race, otherwise you will load a game with a race already picked :)
        var html = '';
        var html2 = '';
        html2 += '<div class="row">';
        html2 += '<div class="col-xs-6 col-xs-offset-3">';
        html2 += 'Press ' + '<p class="glyphicon glyphicon-info-sign" style="color:black"></p>' + ' for more info about a class.';
        html2 += '</div></div>';
        html += '<div class="row">';
        html += '<div class="col-xs-12 col-xs-offset-1">';
        html += '<div class="row">';
        for (var hero in characterRaces) {
            if (characterRaces.hasOwnProperty(hero)) {
                var heroRace = characterRaces[hero];
                var onclickevent = "changeRace('" + heroRace.name + "');";
                html += '<div class="col-xs-6 col-xs-offset-2">';
                html += '<img src="images/races/' + heroRace.image() + '.png">';
                html += heroRace.name + " ";
                html += '<a class="tooltips">' + '<p class="glyphicon glyphicon-info-sign" style="color:black"></p>' +
                    '<span style="width:350px; left: 110px; bottom:-30px; text-align:left;">' +
                    '<div class="row">' +
                    '<div class="col-xs-10 col-xs-offset-1">' +
                    heroRace.name +
                    '</div></div>' +
                    '<div class="row">' +
                    '<div class="col-xs-5" style="padding-left:46px;">';
                for (var stat in heroRace) {
                    if (heroRace.hasOwnProperty(stat)) {
                        if ('strength, endurance, agility, dexterity, wisdom, intelligence, luck'.indexOf(stat) !== -1) {
                            html += stat.substring(0, 3).capitalizeFirstLetter() + ': ';
                            for (var i = 0; i < heroRace[stat](); i++) {
                                if (heroRace[stat]() >= 6) {
                                    html += '<font color="orange">+</font>';
                                } else if (heroRace[stat]() >= 4) {
                                    html += '<font color="green">+</font>';
                                } else if (heroRace[stat]() === 3) {
                                    html += '<font color="blue">+</font>';
                                } else if (heroRace[stat]() < 3) {
                                    html += '<font color="red">+</font>';
                                };
                            };
                            html += '<br />';
                        };
                    };
                };
                html += '</div>';
                html += '<div class="col-xs-7">';
                html += 'Bonuses:<br />';
                for (stat in heroRace) { // var stat is being declared already, so this one is without a 'var'...
                    if (heroRace.hasOwnProperty(stat)) {
                        if ('raceAllStats, raceGoldDrop, raceExpRate, raceDropRate, raceEvasion, raceDamage, raceHealth, raceAccuracy, raceDefense, raceManaRegen, raceMaxMana, raceCriticalChance'.indexOf(stat) != -1) {
                            var string = stat.substring('race'.length);
                            if (stat === "raceAccuracy" && heroRace[stat]() < 111) {
                                html += 'Never Miss<br />';
                            } else if (stat === "raceEvasion" && heroRace[stat]() === "Can't evade") {
                                html += "Can't Evade";
                            } else {
                                html += string.replace(/([a-z])([A-Z])/g, '$1 $2') + ': ';
                                if (heroRace[stat]() > 0) {
                                    html += '+';
                                };
                                html += heroRace[stat]() + '%' + '<br />'
                            };
                        };
                    };
                };
                html += '<br /><img src="images/races/' + heroRace.image() + '.png">';
                html += '</div>';
                html += '</div>';
                html += '<div class="row">';
                html += '<div class="col-xs-10 col-xs-offset-1">';
                html += '<br /><font color="#CC6633">' + heroRace.lore() + '</font>';
                html += '</div>' + '</div>' +
                    '</span>' + '</a>';
                html += '</div>';
                html += '<div class="col-xs-2">';
                html += '<button type="button" style="margin-bottom:5px;" class="btn btn-default border" class="' + heroRace.name + '" onclick="' + onclickevent + '">Choose</button>' //changeRace function ._.
                html += '</div>';

            };
        };
        html += '<div class="row">'
        html += '<div class="col-xs-2 col-xs-offset-5">';
        html += '<button type="button" class="btn btn-default border startBackButtonMargin" onclick="newGameSlot()">Go Back</button>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        document.getElementById("raceCreation").innerHTML = html;
        document.getElementById("raceText").innerHTML = html2;
    };
    var divStyle2 = document.getElementById('sliderDivID');
    divStyle2.style.display = "block";
    checkHeroRace();
};
function checkHeroRace() {
    var html = '';
    for (var hero in characterRaces) {
        var heroRace = characterRaces[hero];
        if (player.properties.heroRace === heroRace.name) {
            html += '<a href="#" class="tooltipA">' + '<img src="images/races/' + heroRace.image() + '.png">' + '<span style="width:350px; right: 10%; top:10px; text-align:left;">' +
                '<div class="row">' +
                    '<div class="col-xs-10 col-xs-offset-1">' +
                    heroRace.name +
                    '</div></div>' +
                    '<div class="row">' +
                    '<div class="col-xs-5" style="padding-left:46px;">';
            for (var stat in heroRace) {
                if ('strength, endurance, agility, dexterity, wisdom, intelligence, luck'.indexOf(stat) != -1) {
                    html += stat.substring(0, 3).capitalizeFirstLetter() + ': ';
                    for (var i = 0; i < heroRace[stat]() ; i++) {
                        if (heroRace[stat]() >= 6) {
                            html += '<font color="orange">+</font>';
                        }
                        else if (heroRace[stat]() >= 4) {
                            html += '<font color="green">+</font>';
                        }
                        else if (heroRace[stat]() === 3) {
                            html += '<font color="blue">+</font>';
                        }
                        else if (heroRace[stat]() < 3) {
                            html += '<font color="red">+</font>';
                        };
                    };
                    html += '<br />';
                };
            };
            html += '</div>';
            html += '<div class="col-xs-7">';
            html += 'Bonuses:<br />';
            for (var stat in heroRace) {
                if ('raceAllStats, raceGoldDrop, raceExpRate, raceDropRate, raceEvasion, raceDamage, raceHealth, raceAccuracy, raceDefense, raceManaRegen, raceMaxMana, raceCriticalChance'.indexOf(stat) != -1) {
                    var string = stat.substring('race'.length);
                    if (stat === "raceAccuracy" && heroRace[stat]() < 111) {
                        html += 'Never Miss<br />';
                    }
                    else if (stat === "raceEvasion" && heroRace[stat]() === "Can't evade") {
                        html += "Can't Evade";
                    }
                    else {
                        html += string.replace(/([a-z])([A-Z])/g, '$1 $2') + ': ';
                        if (heroRace[stat]() > 0) {
                            html += '+';
                        };
                        html += heroRace[stat]() + '%' + '<br />'
                    }
                }
            }
            html += '<br /><img src="images/races/' + heroRace.image() + '.png">';
            html += '</div>';
            html += '</div>';
            html += '<div class="row">';
            html += '<div class="col-xs-10 col-xs-offset-1">';
            html += '<br /><font color="#CC6633">' + heroRace.lore() + '</font>';
            html += '</div>' + '</div>' +
            '</span>' + '</a>';
        };
    };
    document.getElementById("characterRace").innerHTML = html;
    raceStats(); // Function which add all bonuses from races to player properties.
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
        var number = primaryStatInfo[key].number;
        var background = "";
        var statDisplay2 = primaryStatInfo[key].type;
        var shortNameDisplay = primaryStatInfo[key].shortNameDisplay;
        var statDisplay = "";
        if (currentBonus.type === "damage" || currentBonus.type === "Stats" || currentBonus.type === "mana") {
             statDisplay = '<span id="' + statInfo + '"></span>';
        }
        else {
             statDisplay = '<span id="' + statInfo + '"></span>' +
                '<span id="' + currentBonus.type.capitalizeFirstLetter() + '" style="cursor:pointer" onclick="upgrade' + currentBonus.type.capitalizeFirstLetter() + '(event);" data-toggle="tooltip" data-placement="right" title="Increase ' + currentBonus.type + '">' +
                '<span class="glyphicon glyphicon-plus unselectable"></span></span>';
        };
        if (number === 1) {
            background = "darkBackground";
        }
        else if (number === 2) {
            background = "darkBackground";
        };
        if (currentBonus.type === "damage" || currentBonus.type === "mana") {
            html += '<div class="col-xs-12 primaryStatsMargin border darkBackground">';
            html += '<div class="row">';
            html += '<div class="col-xs-6">';
        }
        else {
            html += '<div class="col-xs-6 primaryStatsMargin border darkBackground">';
            html += '<div class="row">';
            html += '<div class="col-xs-4">';
        }
        var statDisplay3 = statDisplay2.capitalizeFirstLetter();
        if ('Strength, Endurance, Agility, Dexterity, Wisdom, Intelligence, Luck, Damage, Mana, Stats'.indexOf(statDisplay3) != -1) {
            var tooltip = primaryStatInfo[key].tooltip;
            html += '<span data-toggle="tooltip" data-placement="right" title="' + tooltip + '"><img src="images/stat/' + statDisplay2 + '.png"></span><br />';
            html += shortNameDisplay;
        };
        html += '</div>';
        
        if (currentBonus.type === "damage" || currentBonus.type === "mana") {
            html += '<div class="col-xs-6 rightAlign primaryNumberMargin">';
        }
        else {
            html += '<div class="col-xs-8 rightAlign primaryNumberMargin darkBackground">';
        }
        html += statDisplay + ' ';
        html += '</div>';
        html += '</div>';
        html += '</div>';
    }
    html += '</div>';
    document.getElementById("primaryStat").innerHTML = html;
    updateHtml();
};
function secondaryStatUpdate(){
    var html = '';
    html += '<div class="row">';
    html += '<div class="centerText"><h4>Secondary Stats</h4></div>';
    for (var key in secondaryStatInfo) {
        var currentBonus = secondaryStatInfo[key];
        var statInfo = secondaryStatInfo[key].info;
        var number = secondaryStatInfo[key].number;
        var statDisplay = "";
        var background = "";
        if (currentBonus.type === "Stats" || currentBonus.type === "Skill points") {
             statDisplay = player.properties[statInfo];
        }
        else {
             statDisplay = player.functions[statInfo]();
        };
        var statDisplay2 = secondaryStatInfo[key].displayName;
        if (number === 1) {
             background = "darkBackground";
        }
        else if (number === 2) {
             background = "background";
        };
        html += '<div class="col-xs-6 primaryStatsMargin border ' + background + '" style="height:40px;">';
        html += '<div class="row">';
        html += '<div class="col-xs-8 secondaryStatMargin">';
        html += '<span data-toggle="tooltip" data-placement="right" title="' + currentBonus.tooltip() + '">';
        html += statDisplay2 + ":";
        html += '</span>';
        html += '</div>';
        html += '<div class="col-xs-4 rightAlign secondaryStatMargin">';
        html += '<span data-toggle="tooltip" data-placement="right" title="' + currentBonus.tooltip() + '">';
        if (currentBonus.type === "Magic find" || currentBonus.type === "Gold drop" || currentBonus.type === "Experience rate") {
            html += ((statDisplay - 1) * 100).toFixed(0);
        }
        else if (currentBonus.type === "Accuracy" && player.functions.accuracy() > 111) {
            html += "Max";
        }
        else if (currentBonus.type === "Evasion" && player.functions.evasion() === 0) {
            html += "None";
        }
        else if (currentBonus.type === "Crit damage") {
            html += (statDisplay * 100).toFixed(0);
        }
        else {
            html += statDisplay.toFixed(0);
        };
        if (currentBonus.type === "Accuracy" && player.functions.accuracy() < 111 || currentBonus.type === "Evasion" && player.functions.evasion() > 0) {
            html += '%';
        };
        if (currentBonus.isPercent === true && currentBonus.type !== "Accuracy" && currentBonus.type !== "Evasion") {
            html += '%';
        };
        html += '</span>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
    };
    html += '</div>';
    document.getElementById("secondaryStat").innerHTML = html;
    testss();
};

function EquippedItemsEmpty() {
    var html = '';
    html += '<div class="row" style="padding-top: 5px; padding-bottom: 10px;">';
    html += '<div class="centerText"><h4>Equipped Items</h4></div>';
    for (var itemType in emptyItemSlotInfo) {
        if (emptyItemSlotInfo.hasOwnProperty(itemType)) {
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
            } else if (item === "weapon" || item === "chest" || item === "shield") {
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
            } else if (item === "legs" || item === "ring") {
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
            } else if (item === "boots") {
                html += '<div class="col-xs-6 col-xs-offset-3">';
                html += '<div class="row">';
                html += '<div class="col-xs-4 col-xs-offset-4"' + 'id="' + itemEmpty + '">';
                html += '<img src=images/' + itemEmpty + '.png>';
                html += '</div>';
                html += '</div>';
                html += '</div>';
            };
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
        html += '"' + 'src="images/items/' + itemType.subType + "/" + itemType.image + '.png" onclick="unequipItem' + "(" + itemType.id + ', ' + "'solo'" + ")" + '" />';
        html += '<span style="width:200px;">';
        html += '<div class="row">';
        html += '<div class="col-xs-12">';

        if (itemType.hasOwnProperty('itemType')) {
            var equippedItemDisplay = itemType;
            html += itemTooltipTest(equippedItemDisplay);
            html += '<strong>Currently equipped</strong>';
            html += '</div>';
            html += '</div>';
            html += '</span></a>';
        };
        html += '</div>';
    };
    return html;
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
    var shopItemAmount = 100;
    var shopItemLevel = player.properties.level;
    var weaponLevelBonus = 5;
    var armorLevelBonus = 5;
    for (var i = 0; i < shopItemAmount; i++) {
        if (itemShopWeapon.length < 20 || itemShopArmor.length < 20 || itemShopAccessory.length < 20) {
            getItemType(shopItemLevel, false);
        }
        else {
            break;
        }
    };
    createShopTabs();
    displayShopItems(itemShopWeapon);
    displayShopItems(itemShopArmor);
    displayShopItems(itemShopAccessory);
    shopOther();
};
var shopItemTabs = [
    {
        name: "shopWeapon",
        type: "weapon"
    },
    {
        name: "shopArmor",
        type: "armor"
    },
    {
        name: "shopAccessory",
        type: "accessory"
    },
    {
        name: "shopOther",
        type: "items"
    }
];

                                       

function createShopTabs() {
    var html = "";
    html += '<ul class="nav nav-tabs">';

    for (var i = 0; i < 4; i++) {
        if (i === 0) {
            html += '<li class="active">';
        }
        else {
            html += '<li>';
        }
        html += '<a href="#tab_' + shopItemTabs[i].name + '" data-toggle="tab"><span class="icons ' + shopItemTabs[i].type + '" data-toggle="tooltip" data-placement="top" title="' + shopItemTabs[i].name.capitalizeFirstLetter() + '"></span>';
        html += '</li>';
    }

    html += '</ul>';
    html += '<div class="tab-content">';
    
    for (var i = 0; i < 4; i++){
        html += '<div class="tab-pane ';
        if (i === 0){
            html += 'active" ';
        }
        else {
            html += '" ';
        }
        html += 'id="tab_' + shopItemTabs[i].name + '">';
        html += '<div id="' + shopItemTabs[i].name + '"></div>';
        html += '</div>';
    }
    html += '</div>';

    $('#shopTabs').empty().append(html);
}

function displayShopItems(type) {
    var html = '';
    var itemTypeDisplay = type;
    var event = "";
    var event2 = "";
    if (type === itemShopWeapon) {
         event = 'onclick="sortShop' + "(" + "'Value', " + "'Weapon'" + ")" + '">';
         event2 = 'onclick="sortShop' + "(" + "'Rarity', " + "'Weapon'" + ")" + '">';
    }
    else if (type === itemShopArmor) {
         event = 'onclick="sortShop' + "(" + "'Value', " + "'Armor'" + ")" + '">';
         event2 = 'onclick="sortShop' + "(" + "'Rarity', " + "'Armor'" + ")" + '">';
    }
    else if (type === itemShopAccessory) {
         event = 'onclick="sortShop' + "(" + "'Value', " + "'Accessory'" + ")" + '">';
         event2 = 'onclick="sortShop' + "(" + "'Rarity', " + "'Accessory'" + ")" + '">';
    }
    html += '<div class="row">';
    html += '<div class="col-xs-10 col-xs-offset-1">';
    html += '<div class="shopItemBuy"></div>';
    html += '<div class="c3">Sort by:<br />';
    html += '<button type="button" ' + event + "Value" + '</button>';
    html += '<button type="button" ' + event2 + "Rarity" + '</button>';
    html += '</div>';
    html += '<div class="row">';
    html += '<div class="col-xs-12">';
    html += '<div class="c3"><h3>Item Shop</h3></div></div>';
    for (var i = 0; i < itemTypeDisplay.length; i++) {
        var itemDisplay = itemTypeDisplay[i];
        var itemStat = "";
        if (itemDisplay.itemType === "weapon") {
                    itemStat = equippedItems.weapon;
                }
        else if (itemDisplay.subType === "shield") {
                    itemStat = equippedItems.shield;
                }
        else if (itemDisplay.subType === "chest") {
                    itemStat = equippedItems.chest;
                }
        else if (itemDisplay.subType === "helmet") {
                    itemStat = equippedItems.helmet;
                }
        else if (itemDisplay.subType === "legs") {
                    itemStat = equippedItems.legs;
                }
        else if (itemDisplay.subType === "boots") {
                    itemStat = equippedItems.boots;
                }
        else if (itemDisplay.subType === "ring") {
                    itemStat = equippedItems.ring;
                }
        else if (itemDisplay.subType === "amulet") {
                    itemStat = equippedItems.amulet;
                }
        else if (itemDisplay.subType === "talisman") {
                    itemStat = equippedItems.talisman;
                }
                html += '<div class="col-xs-3">';
                html += '<a class="tooltips" style="cursor:pointer;">';
                html += '<label> <input type="radio" name="shopItem" value=' + itemDisplay.id + '>';
                if (itemDisplay.itemType === "weapon") {
                    html += '<img class="' + itemDisplay.itemType + ", " + itemDisplay.itemRarity;
                }
                else {
                    html += '<img class="' + itemDisplay.subType + ", " + itemDisplay.itemRarity;
                }
                html += '"' + 'src="images/items/' + itemDisplay.subType + "/" + itemDisplay.image + '.png"/>';
                html += '</label>';
                if (itemStat.hasOwnProperty('itemType')) {
                    html += '<span style="left:10px; bottom:40px;">';
                }
                else {
                    html += '<span style="width:300px;">';
                }
                html += '<div class="row">';
                html += '<div class="col-xs-12">';

                if (itemStat.hasOwnProperty('itemType')) {
                    html += '<div class="row">';
                    html += '<div class="col-xs-6">';
                    html += itemTooltipTest(itemStat);
                    html += '<strong>Currently equipped</strong>';
                    html += '</div>';
                };

                if (itemStat.hasOwnProperty('itemType')) {
                    html += '<div class="col-xs-6">';
                }
                else {
                    html += '<div class="col-xs-10 col-xs-offset-1">';
                }
                html += itemTooltipTest(itemDisplay);
                html += '<strong>Left-Click to equip</strong>';
                html += '</div></div>';
                html += '</div>';
                if (itemStat.hasOwnProperty('itemType')) {
                    html += '</div>';
                }
                html += '</span>' + '</a>';
                html += '<br />' + itemDisplay.shopPrice + ' Gold';
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
    html += '<div class="row">';
    html += '<div class="col-xs-4 col-xs-offset-4">';
    html += '<button type="button" class="shopButton" onclick="itemBuy' + "(" + checkedShopItem + ")" + '">Buy</button>';
    html += '<button type="button" class="shopButton" onclick="rerollShopItems()">Refresh</button>';
    html += '</div>';
    html += '</div>';
    $('.shopItemBuy').empty().append(html);
};

function itemBuy(id) {
    var item = itemShopWeapon.filter(function (obj) {
        return obj.id === id;
    })[0];
    if (item !== undefined) {
        
        if (player.properties.gold - item.shopPrice >= 0) {
            var index = itemShopWeapon.indexOf(item, 0);
            playerInventory.push(item);
            if (index > -1) {
                itemShopWeapon.splice(index, 1);
            };
            displayShopItems(itemShopWeapon);
            weaponAmount--;
        };
        };

        if (item === undefined) {
            item = itemShopArmor.filter(function (obj) {
                return obj.id === id;
            })[0];
            if (item !== undefined) {
                
                if (player.properties.gold - item.shopPrice >= 0) {
                    index = itemShopArmor.indexOf(item, 0);
                    playerInventory.push(item);

                    if (index > -1) {
                        itemShopArmor.splice(index, 1);
                    };
                    displayShopItems(itemShopArmor);
                    armorAmount--;
                };
            };
            if (item === undefined) {
                item = itemShopAccessory.filter(function (obj) {
                    return obj.id === id;
                })[0];
                if (item !== undefined) {
                    
                    if (player.properties.gold - item.shopPrice >= 0) {
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
        };
        if (item !== undefined && player.properties.gold - item.shopPrice >= 0) {
            player.properties.gold -= item.shopPrice;
            document.getElementById("gold").innerHTML = player.properties.gold;
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
        if (shopOtherList.hasOwnProperty(key)) {
            var itemType = shopOtherList[key];
            var itemTypePrice = itemType.type3;
            html += '<div class="col-xs-12">';
            html += '<div class="c3">';
            html += '<img src=' + itemType.image + ' alt="Buy"><br />';
            html += itemType.type + ' - ' + window[itemTypePrice].price + ' Gold<br />';
            html += '<button type="button" class="buy" onclick="' + itemType.type2 + "(" + 1 + ")" + '">' + "Buy" + '</button>';
            html += '<button type="button" class="buy" onclick="' + itemType.type2 + "(" + 10 + ")" + '">' + "Buy 10" + '</button>';
            html += '<button type="button" class="buy" onclick="' + itemType.type2 + "(" + 100 + ")" + '">' + "Buy 100" + '</button>';
            html += '</div>';
            html += '</div>';
        };
    };
    html += '</div></div></div>';

    $('#shopOther').empty().append(html);
};

var shopOtherList = [
    {
        type: "Stat Points",
        image: "images/stat.png",
        type2: "buyStat",
        type3: "statStatus"
    },
    {
        type: "Backpack",
        image: "images/bag.png",
        type2: "buyBackpack",
        type3: "backpackStatus"
    },
    {
        type: "Small Potion",
        image: "images/SmallPotion.png",
        type2: "buySmallPotion",
        type3: "potionStatus"
    },
    {
        type: "Medium Potion",
        image: "images/MediumPotion.png",
        type2: "buyMediumPotion",
        type3: "mediumPotionStatus"
    },
    {
        type: "Super Potion",
        image: "images/SuperPotion.png",
        type2: "buySuperPotion",
        type3: "superPotionStatus"
    }
];
setTimeout(function () { testss(); }, 3000);
function testss() {
    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });
};

function getAgeButton() {
    var raceSelect = "Adulthood";
        if (document.getElementById("Adulthood").checked === true) {
            raceSelect = "Adulthood";
        }
        else if (document.getElementById("Middle Age").checked === true) {
            raceSelect = "Middle Age";
        }
        else if (document.getElementById("Old").checked === true) {
            raceSelect = "Old";
        }
        else if (document.getElementById("Venerable").checked === true) {
            raceSelect = "Venerable";
        };
        getAge(raceSelect);
        characterCreationHtml();
    };
function getAge(raceSelect) {
    characterRaces.human.raceAge = raceSelect;
    characterRaces.halfElf.raceAge = raceSelect;
    characterRaces.dwarf.raceAge = raceSelect;
    characterRaces.orc.raceAge = raceSelect;
    characterRaces.elf.raceAge = raceSelect;
    characterRaces.halfing.raceAge = raceSelect;
    characterRaces.sylph.raceAge = raceSelect;
    characterRaces.giant.raceAge = raceSelect;
};


function itemTooltipTest(item) {
    var html = '';
    html += '<font color="' + item.color + '"><strong>' + item.name + '</strong></font>' + '<br />';
    if (item.itemType === "weapon") {
        html += '<div class="borderBottom borderTop">Weapon class: ' + item.subType.capitalizeFirstLetter() + '<br />';
        if (item['Bonus damage'] > 0) {
            html += '<strong><font color="2175D9">' + 'Damage: ' + item.MinDamage + " to " + item.MaxDamage + '</font></strong>' + '</div>';
        }
        else {
            html += 'Damage: ' + item.MinDamage + " to " + item.MaxDamage + '</div>';
        };
        html += '<div class="borderBottom borderTop">Critical Chance: ' + item['Critical chance'] + '%' + '</div>';
    };
    if (item.itemType === "armor") {
        if (item['Bonus armor'] > 0) {
            html += '<div class="borderBottom borderTop"><strong><font color="#1e69c3">Defense: ' + item.defense.toFixed(0) + "</font></strong></div>";
        } else {
            html += '<div class="borderBottom borderTop">Defense: ' + item.defense + " </div>";
        };
        if (item.subType === "shield") {
            html += '<div class="borderBottom borderTop">Chance to Block: ' + item['Block chance'] + '%' + " </div>";
        };
        if (item['Bonus armor'] > 0) {
            html += '<strong><font color="7FCC7F">' + 'Bonus armor' + ": " + item['Bonus armor'] + "%" + '</font></strong>' + '<br />';
        };
        html += 'Damage reduction: ' + ((100 - (100 / (100 + (player.functions.defense() + (item.defense - equippedItems[item.subType].defense)))) * 100) - (100 - (100 / (100 + player.functions.defense())) * 100)).toFixed(2) + "%" + '<br />';
    };
    for (var statName in item) { //Here stat will become the word Defense
        if (item.hasOwnProperty(statName)) {
            if ('All attributes, Strength, Endurance, Agility, Dexterity, Wisdom, Intelligence, Luck, Evasion, Bonus damage, Bonus life, Bonus mana, Health regen, Mana regen, Magic find, Gold drop, Experience rate, Life gain on hit, Critical damage'.indexOf(statName) !== -1) {
                //Getting the actual stat object from the word.
                var selectedStat = item[statName];
                if (selectedStat > 0 && statName === "Bonus damage") {
                    html += '<strong><font color="7FCC7F">' + statName + ": " + selectedStat + '%</font></strong>' + '<br />';
                } else if (selectedStat > 0) {
                    html += '<strong><font color="0066FF">' + statName + ": " + selectedStat + '</font></strong>' + '<br />';
                };
            };
        };
    };
    html += '<div class="borderBottom borderTop">';
    html += "Value: " + item.Value + " gold<br />";
    html += 'Item level: ' + item.iLvl + '<br />';
    html += '<font color="#CC6633">' + item.lore + '</font>';
    html += '</div>';
    return html;
};