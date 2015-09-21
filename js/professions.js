"use strict";
var craftCost = [
    {
        type: 'Common',
        levelReq: 1,
        costTypeAmount: 1,
        costType: [
            {
                type: 'Thaumerite',
                cost: 10
            }
        ],
        displayName: [
            {
                name: 'Thaumerite'
            }
        ],
    },
    {
        type: 'Uncommon',
        levelReq: 5,
        costTypeAmount: 2,
        costType: [
            {
                type: 'Thaumerite',
                cost: 10
            },
            {
                type: 'LiteCyan',
                cost: 10
            }
        ],
        displayName: [
            {
                name: 'Thaumerite'
            },
            {
                name: 'Lite Cyan'
            }
        ],
    },
    {
        type: 'Rare',
        levelReq: 10,
        costTypeAmount: 2,
        costType: [
            {
                type: 'LiteCyan',
                cost: 10
            },
            {
                type: 'OhmStone',
                cost: 10
            },
        ],
        displayName: [
            {
                name: 'Lite Cyan'
            },
            {
                name: 'Ohm Stone'
            }
        ],
    },
    {
        type: 'Epic',
        levelReq: 15,
        costTypeAmount: 2,
        costType: [
            {
                type: 'OhmStone',
                cost: 10
            },
            {
                type: 'Techtite',
                cost: 10
            }
        ],
        displayName: [
            {
                name: 'Ohm Stone'
            },
            {
                name: 'Techtite'
            }
        ]
    },
    {
        type: 'Legendary',
        levelReq: 20,
        costTypeAmount: 3,
        costType: [
            {
                type: 'Techtite',
                cost: 10
            },
            {
                type: 'XilBond',
                cost: 10
            },
            {
                type: 'VulcanatedIron',
                cost: 10
            }
        ],
        displayName: [
            {
                name: 'Techtite'
            },
            {
                name: 'Xil Bond'
            },
            {
                name: 'Vulcanated Iron'
            }
        ]
    }
];
var mineralListArray = [
    //Ore
    {
        name: 'Thaumerite',
        displayName: 'Thaumerite'
    },
    {
        name: 'LiteCyan',
        displayName: 'Lite Cyan'
    },
    {
        name: 'OhmStone',
        displayName: 'Ohm Stone'
    },
    {
        name: 'Techtite',
        displayName: 'Techtite'
    },
    {
        name: 'XilBond',
        displayName: 'Xil Bond'
    },
    {
        name: 'VulcanatedIron',
        displayName: 'Vulcanated Iron'
    },
    //Herbs
    {
        name: 'RusinsSinew',
        displayName: 'Rusins Sinew'
    },
    {
        name: 'EssenceofWillow',
        displayName: 'Essence of Willow'
    },
    {
        name: 'SinnersDelight',
        displayName: 'Sinners Delight'
    },
    {
        name: 'BarletBark',
        displayName: 'Barlet Bark'
    },
    {
        name: 'Vystim',
        displayName: 'Vystim'
    },
    {
        name: 'ThistleWart',
        displayName: 'Thistle Wart'
    },
    {
        name: 'LillyWisp',
        displayName: 'Lilly Wisp'
    }
];
var craftItemTypes = [
    {
        type: 'weapon'
    },
    {
        type: 'armor'
    },
    {
        type: 'accessory'
    }
];
var mineralList = {};
//Minerals
var Thaumerite = {};
var LiteCyan = {};
var OhmStone = {};
var Techtite = {};
var XilBond = {};
var VulcanatedIron = {};

var herbList = {};
//Herbs
var RusinsSinew = {};
var EssenceofWillow = {};
var SinnersDelight = {};
var BarletBark = {};
var Vystim = {};
var ThistleWart = {};
var LillyWisp = {};
function createHerbs() {
    //Herbs
    RusinsSinew.Stats = {
        hp: 10,
        maxHp: 10,
        baseExp: 15,
        name: "RusinsSinew", // Must equal object name Ore = Ore...
        displayName: "Rusins Sinew",
        id: 1,
        level: 1,
        area: "Herbalism",
        isShown: true,
        killCount: 0,
    };
    herbList.RusinsSinew = RusinsSinew;

    EssenceofWillow.Stats = {
        hp: 50,
        maxHp: 50,
        baseExp: 30,
        name: "EssenceofWillow", // Must equal object name Ore = Ore...
        displayName: "Essence of Willow",
        id: 2,
        level: 1,
        area: "Herbalism",
        isShown: false,
        killCount: 0,
    };
    herbList.EssenceofWillow = EssenceofWillow;

    SinnersDelight.Stats = {
        hp: 100,
        maxHp: 100,
        baseExp: 50,
        name: "SinnersDelight", // Must equal object name Ore = Ore...
        displayName: "Sinners Delight",
        id: 3,
        level: 1,
        area: "Herbalism",
        isShown: false,
        killCount: 0,
    };
    herbList.SinnersDelight = SinnersDelight;

    BarletBark.Stats = {
        hp: 200,
        maxHp: 200,
        baseExp: 80,
        name: "BarletBark", // Must equal object name Ore = Ore...
        displayName: "Barlet Bark",
        id: 4,
        level: 1,
        area: "Herbalism",
        isShown: false,
        killCount: 0,
    };
    herbList.BarletBark = BarletBark;

    Vystim.Stats = {
        hp: 400,
        maxHp: 400,
        baseExp: 120,
        name: "Vystim", // Must equal object name Ore = Ore...
        displayName: "Vystim",
        id: 5,
        level: 1,
        area: "Herbalism",
        isShown: false,
        killCount: 0,
    };
    herbList.Vystim = Vystim;

    ThistleWart.Stats = {
        hp: 777,
        maxHp: 777,
        baseExp: 200,
        name: "ThistleWart", // Must equal object name Ore = Ore...
        displayName: "Thistle Wart",
        id: 6,
        level: 1,
        area: "Herbalism",
        isShown: false,
        killCount: 0,
    };
    herbList.ThistleWart = ThistleWart;

    LillyWisp.Stats = {
        hp: 1337,
        maxHp: 1337,
        baseExp: 300,
        name: "LillyWisp", // Must equal object name Ore = Ore...
        displayName: "Lilly Wisp",
        id: 7,
        level: 1,
        area: "Herbalism",
        isShown: false,
        killCount: 0,
    };
    herbList.LillyWisp = LillyWisp;
}
createHerbs();
function createMinerals() {

    //Minerals
    Thaumerite.Stats = {
        hp: 10,
        maxHp: 10,
        baseExp: 20,
        name: "Thaumerite", // Must equal object name Ore = Ore...
        displayName: "Thaumerite",
        id: 1,
        level: 1,
        area: "Mining",
        isShown: true,
        killCount: 0,
    };
    mineralList.Thaumerite = Thaumerite;

    LiteCyan.Stats = {
        hp: 50,
        maxHp: 50,
        baseExp: 50,
        name: "LiteCyan", // Must equal object name Ore = Ore...
        displayName: "Lite Cyan",
        id: 2,
        level: 1,
        area: "Mining",
        isShown: false,
        killCount: 0,
    };
    mineralList.LiteCyan = LiteCyan;

    OhmStone.Stats = {
        hp: 100,
        maxHp: 100,
        baseExp: 100,
        name: "OhmStone", // Must equal object name Ore = Ore...
        displayName: "Ohm Stone",
        id: 3,
        level: 1,
        area: "Mining",
        isShown: false,
        killCount: 0,
    };
    mineralList.OhmStone = OhmStone;

    Techtite.Stats = {
        hp: 250,
        maxHp: 250,
        baseExp: 200,
        name: "Techtite", // Must equal object name Ore = Ore...
        displayName: "Techtite",
        id: 4,
        level: 1,
        area: "Mining",
        isShown: false,
        killCount: 0,
    };
    mineralList.Techtite = Techtite;

    XilBond.Stats = {
        hp: 777,
        maxHp: 777,
        baseExp: 400,
        name: "XilBond", // Must equal object name Ore = Ore...
        displayName: "Xil Bond",
        id: 5,
        level: 1,
        area: "Mining",
        isShown: false,
        killCount: 0,
    };
    mineralList.XilBond = XilBond;

    VulcanatedIron.Stats = {
        hp: 1337,
        maxHp: 1337,
        baseExp: 800,
        name: "VulcanatedIron", // Must equal object name Ore = Ore...
        displayName: "Vulcanated Iron",
        id: 6,
        level: 1,
        area: "Mining",
        isShown: false,
        killCount: 0,
    };
    mineralList.VulcanatedIron = VulcanatedIron;
};

createMinerals();

(function () {
    var newProfession = function (name, image) { //default spell object constructor
        this.level = 1;
        this.maxLevel = 100;
        this.name = name;
        this.image = image;
        this.experience = 0;
        this.maxExperience = 50;
    };
    var mining = new newProfession("Mining", "mining");
    var herbalism = new newProfession("Herbalism", "herbalism");
    var crafting = new newProfession("Crafting", "crafting");
    var alchemy = new newProfession("Alchemy", "alchemy");

    mining.damage = function () {
        return ((player.properties.level - 1) + this.level) * 2;
    };
    herbalism.damage = function () {
        return ((player.properties.level - 1) + this.level) * 2;
    };
    mining.description = function () {
        return "Can mine ores for resources used in crafting.";
    };
    herbalism.description = function () {
        return "Can gather plants, used in alchemy.";
    };
    crafting.description = function () {
        return "Craft items using gathered resources.";
    };
    alchemy.description = function () {
        return "Create potions with herbs.";
    };
   
    crafting.Beginner = function () {
        return [
          {//Beginner crafting
              text: 'Crafting range: Common - Rare',
              type: ['Thaumerite', 'LiteCyan'],
              experience: [3, 5],
              weapon: [{ sword: [20, 15], axe: [30, 20], mace: [25, 15], staff: [10, 20], ranged: [10, 20] }],
              armor: [{ helmet: [30, 20], chest: [50, 40], legs: [30, 20], boots: [20, 10], shield: [30, 20] }],
              accessory: [{ ring: [20, 10], amulet: [20, 10], talisman: [20, 10] }]
          }
        ];
    };
    crafting.Intermediate = function () {
        return [
            {//Intermediate crafting
            text: 'Crafting range: Common - Epic',
            type: ['LiteCyan', 'OhmStone', 'Techtite'],
            experience: [5, 8, 12],
            weapon: [{ sword: [40, 30, 20], axe: [60, 40, 10], mace: [50, 20, 15], staff: [25, 20, 20], ranged: [30, 20, 20] }],
            armor: [{ helmet: [40, 30, 20], chest: [70, 30, 30], legs: [40, 30, 30], boots: [30, 20, 20], shield: [35, 20, 20] }],
            accessory: [{ ring: [20, 10, 5], amulet: [20, 10, 5], talisman: [20, 10, 5] }]
            }
        ];
    };
    crafting.Master = function () {
        return [
            {//Master crafting
            text: 'Crafting range: Common - Legendary',
            type: ['Techtite', 'XilBond', 'VulcanatedIron'],
            experience: [12, 15, 20],
            weapon: [{ sword: [30, 30, 30], axe: [50, 50, 50], mace: [40, 40, 40], staff: [30, 30, 60], ranged: [40, 10, 40] }],
            armor: [{ helmet: [30, 30, 20], chest: [40, 40, 40], legs: [30, 20, 20], boots: [20, 20, 20], shield: [40, 40, 30] }],
            accessory: [{ ring: [30, 30, 30], amulet: [30, 30, 30], talisman: [30, 30, 30] }]
            }
        ];
    };
    crafting.additionalButtons = function () {
        return ['Beginner', 'Intermediate', 'Master'];
    };
     
    window.playerProfession = new Object();
    playerProfession.mining = mining;
    playerProfession.herbalism = herbalism;
    playerProfession.crafting = crafting;
    playerProfession.alchemy = alchemy;

})();


/*------------------------------------------------------------------------------------------------
 *                                                                                               |
 *                                                                                               |
 *                                                                                               |
 *                                        MINING                                                 |
 *                                                                                               |
 *                                                                                               |
 *                                                                                               |
 *------------------------------------------------------------------------------------------------
 */

function gather(monsterStat, type) {
    var monsterStats = monsterStat.Stats;
    var name = monsterStats.name;
    var professionType = playerProfession[type];
    var professionLevel = professionType.level;
    var resourceGain = 1 + playerPassive[type + "Amount"].bonusTotal();
    var maxResources = 1000 + playerPassive.storage.bonusTotal();
    var criticalGather = Math.floor((Math.random() * 100) + 1);
    if (criticalGather <= playerPassive[type + "Critical"].bonusTotal()) {
        console.log(resourceGain)
        resourceGain *= 5;
        console.log(resourceGain)
    };
    monsterStats.hp -= professionType.damage();
    if (monsterStats.hp <= 0) {
        monsterStats.hp = monsterStats.maxHp;
        professionType.experience += monsterStats.baseExp;
        if (maxResources >= player.properties[name]) {
            player.properties[name] += resourceGain;
            if (player.properties[name] > maxResources) {
                player.properties[name] = maxResources;
            }
        }
        if (professionType.experience >= professionType.maxExperience) {
            professionType.level += 1;
            professionType.experience = professionType.experience - professionType.maxExperience;
            professionType.maxExperience += 100
            if (type === "mining") {
                unlockMineral();
            }
            else if (type === "herbalism") {
                unlockHerb();
            }
        };
        document.getElementById(name).innerHTML = player.properties[name] + "/" + maxResources;
    };
    var profession = playerProfession[type];
    document.getElementById("Profession_" + type).innerHTML = 'level: ' + profession.level + ' | ' + profession.experience.toFixed(0) + '/' + profession.maxExperience.toFixed(0)
    professionGatherHtml();
    
};
function unlockMineral() {
    var miningLevel = playerProfession.mining.level;
    if (miningLevel >= 5) {
        mineralList.LiteCyan.Stats.isShown = true;
    };
    if (miningLevel >= 10) {
        mineralList.OhmStone.Stats.isShown = true;
    };
    if (miningLevel >= 15) {
        mineralList.Techtite.Stats.isShown = true;
    };
    if (miningLevel >= 20) {
        mineralList.XilBond.Stats.isShown = true;
    };
    if (miningLevel >= 25) {
        mineralList.VulcanatedIron.Stats.isShown = true;
    };
};

function unlockHerb() {
    var herbalismLevel = playerProfession.herbalism.level;
    if (herbalismLevel >= 5) {
        herbList.EssenceofWillow.Stats.isShown = true;
    };
    if (herbalismLevel >= 10) {
        herbList.SinnersDelight.Stats.isShown = true;
    };
    if (herbalismLevel >= 15) {
        herbList.BarletBark.Stats.isShown = true;
    };
    if (herbalismLevel >= 20) {
        herbList.Vystim.Stats.isShown = true;
    };
    if (herbalismLevel >= 25) {
        herbList.ThistleWart.Stats.isShown = true;
    };
    if (herbalismLevel >= 30) {
        herbList.LillyWisp.Stats.isShown = true;
    };
};
playerProfessionHtml();


/*------------------------------------------------------------------------------------------------
 *                                                                                               |
 *                                                                                               |
 *                                                                                               |
 *                                        HERBALISM                                              |
 *                                                                                               |
 *                                                                                               |
 *                                                                                               |
 *------------------------------------------------------------------------------------------------
 */




/*------------------------------------------------------------------------------------------------
 *                                                                                               |
 *                                                                                               |
 *                                                                                               |
 *                                        ALCHEMY                                                |
 *                                                                                               |
 *                                                                                               |
 *                                                                                               |
 *------------------------------------------------------------------------------------------------
 */

function createAlchemyHtml() {
    var html = '';
    var alchemy = playerProfession.alchemy;
    var alchemyLevel = alchemy.level;
    var potion = {};
    html += '<div class="row">';
    html += '<div class="col-xs-12 c3">';
    html += '<h3>Alchemy</h3>';
    html += '<div class="row">';
    html += '<div class="col-xs-12">';
    html += '<div class="row marginBottom marginRight borderLeft borderTop">';
    for (var key in potionList) {
        if (potionList.hasOwnProperty(key)) {
            var potionInfo = potionList[key];
            html += '<div class="col-xs-12 col-md-6 col-lg-6 borderRight borderBottom"';
            if (potionInfo.levelReq > playerProfession.alchemy.level) {
                html += ' style="background-color:#DD4747;">' + 'Requires ' + potionInfo.levelReq + ' Alchemy level';
            }
            else {
                html += '>' + potionInfo.effect;
                if (potionInfo.bonus === "healing") {
                    html += ' ' + potionInfo.displayBonus;
                }
                else if (potionInfo.bonus === "buff") {
                    html += '% ' + potionInfo.displayBonus;
                };
            };
                
            html += '<div class="col-xs-1 col-sm-1 col-md-12 col-lg-12">';
            var potion = potionList[key];
            var potionRequirements = potion.requirements();
            html += '<img src="images/' + potion.name + '.png" style="cursor:pointer;" type="button" id="' + potion.name + '"';
            html += ' data-toggle="tooltip" data-placement="top" title="' + potion.displayName + '"';
            if (potion.levelReq <= playerProfession.alchemy.level) {
                html += '>';
            }
            else {
                html += 'disabled style="cursor:not-allowed;">';
            }
            html += '</div>';
            html += '<div class="col-xs-1 col-sm-1 col-md-12 col-lg-12">';
            html += '<button onclick="createPotion(' + "'" + potion.name + "'" + ')">Brew</button>';
            html += '</div>';
            html += '<div class="col-xs-10 col-sm-10 col-md-12 col-lg-12">';
            for (var i = 0; i < potionRequirements.length; i++) {
                html += '<img src="images/mineral/' + potionRequirements[i].type + '.png">';
                html += potionRequirements[i].amount;
            }
            html += '</div>';
            html += '</div>';
        }
    }
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';

    document.getElementById('alchemy').innerHTML = html;
};

function createPotion(type) {
    var potionInventory = player.properties.potionInventory;
    var potionRequirements = potionList[type].requirements();
    var canCraft = false;
    var profession = playerProfession.alchemy;
    var requirementsArray = [];
    for (var i = 0; i < potionRequirements.length; i++) {
        var requiredHerb = potionRequirements[i].type;
        if (player.properties[requiredHerb] >= potionRequirements[i].amount) {
            requirementsArray.push(potionRequirements[i]);
            if (i === potionRequirements.length - 1) {
                for (var j = 0; j < requirementsArray.length; j++) {
                    var requiredHerb = requirementsArray[j].type;
                    var requiredAmount = requirementsArray[j].amount;
                    var maxResources = 1000 + playerPassive.storage.bonusTotal();
                    player.properties[requiredHerb] -= requiredAmount;
                    document.getElementById(requiredHerb).innerHTML = player.properties[requiredHerb] + "/" + maxResources;
                };
                canCraft = true;
                profession.experience += potionList[type].experienceGain;
                if (profession.experience >= profession.maxExperience) {
                    profession.experience = (profession.experience - profession.maxExperience);
                    profession.level++;
                    profession.maxExperience += 100;
                    createAlchemyHtml();
                };
                document.getElementById("Profession_alchemy").innerHTML = 'level: ' + profession.level + ' | ' + profession.experience.toFixed(0) + '/' + profession.maxExperience.toFixed(0);
            };
        }
        else {
            canCraft = false;
            break;
        };
    };
    if (canCraft === true) {
        if (potionInventory.length < 1) {
            potionInventory.push(potionList[type]);
        };
        for (var i = 0; i < potionInventory.length; i++) {
            if (potionInventory[i].name === type) {
                potionInventory[i].amount += 1;
                break;
            }
            else if (i === potionInventory.length - 1) {
                potionInventory.push(potionList[type]);
                potionInventory[i + 1].amount += 1;
                break;
            };
        };
    };
};

function playerProfessionHtml() {
    var html = "";
    html += '<div class="row border c4 marginBottom">';
    html += '<div class="col-xs-12">'
    html += '<div class="row">';;
    html += '<div class="col-sm-4 marginTop marginBottom border">';
    html += '<h3>Your professions: <br /></h3>';
    html += '<div class="row borderBottom">';
    for (var key in playerProfession) {
        if (playerProfession.hasOwnProperty(key)) {
            var profession = playerProfession[key];
            html += '<div class="col-sm-12 col-sm-offset-0 col-xs-6 col-xs-offset-3">';
            html += '<img src="images/profession/' + profession.image + '.png" data-toggle="tooltip" data-placement="top" title="' + profession.name.capitalizeFirstLetter() + ' level:' + profession.level + '">';

            html += ' <span id="Profession_' + profession.image + '">' + 'level: ' + profession.level + ' | ' + profession.experience.toFixed(0) + '/' + profession.maxExperience.toFixed(0) + '</span>';
            html += '</div>';
        };
    };
    html += '</div>';
    html += '<div class="row">';
    html += '<div class="col-sm-12">';
    html += '<h3>Your minerals: <br /></h3>';
    html += '</div>';
    for (var i = 0; i < mineralListArray.length; i++) {
        var mineral = mineralListArray[i].name;
        var displayName = mineralListArray[i].displayName;
        var playerMineral = player.properties[mineral];
        var maxResources = 1000 + playerPassive.storage.bonusTotal();
        html += '<div class="col-xs-3 col-sm-6">';
        html += '<img src="images/mineral/' + mineral + '.png" data-toggle="tooltip" data-placement="right" title="' + displayName + '">';
        html += ' ' + '<span id="' + mineral + '">' + playerMineral + "/" + maxResources + '</span>' + '<br />';
        html += '</div>';
        if (mineral === 'VulcanatedIron') {
            html += '<div class="col-xs-12 borderTop">';
            html += '<h3>Your Herbs : <br /></h3>';
            html += '</div>';
        };
    };
    html += '</div></div>'

    html += '<div class="col-sm-7 marginTop border">'

    html += '<ul class="nav nav-tabs">';
    html += '<li class="active"><a href="#tab_gathering" data-toggle="tab"><span data-toggle="tooltip" data-placement="top" title="Gather">Gather</span></a></li>';
    html += '<li onclick="displayCraftedItem();"><a href="#tab_crafting" data-toggle="tab"><span data-toggle="tooltip" data-placement="top" title="Crafting">Crafting</span></a></li>';
    html += '<li><a href="#tab_alchemy" data-toggle="tab"><span data-toggle="tooltip" data-placement="top" title="Alchemy">Alchemy</span></a></li>';
    html += '<ul>';
    html += '<div class="tab-content">'
    html += '<div class="tab-pane active" id="tab_gathering">';
    html += '<div id="professionGatherArea"></div>';                
    html += '</div>';
    html += '<div class="tab-pane" id="tab_crafting">';
    html += '<div id="crafting"></div>';
    html += '</div>';
    html += '<div class="tab-pane" id="tab_alchemy">';
    html += '<div id="alchemy"></div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';//End of first ROW
    html += '</div>';
    html += '</div>';
    document.getElementById('playerProfessions').innerHTML = html;
    professionGatherHtml();
    testss();
};

function professionGatherHtml() {
    var html = "";

    html += '<div class="row">';//Open row for mining
    html += '<div class="col-sm-10 col-sm-offset-1">';
    html += '<div class="row">';
    html += '<h4>Player level and profession level determine your damage on mineral/herb. If it\'s too hard, then come back later when you level up some more.</h4>';
    html += '<h3>Gol-Ghuls Tunnel</h3>';
    for (var mineral in mineralList) {
        var displayMineral = mineralList[mineral].Stats;
        var onclickEvent = 'gather(' + displayMineral.name + ", " + "'mining'" + ');';
        if (displayMineral.isShown === true) {
            html += '<div class="col-xs-4">';
            var monsterPercent = ((displayMineral.hp / displayMineral.maxHp) * 100);
            html += '<div class="row">';
            html += '<div class="col-xs-4 col-xs-offset-4 col-sm-6 col-sm-offset-3">';
            html += '<img src="images/mineral/' + displayMineral.name + '.png" onclick="' + onclickEvent + '">';
            html += '</div>';
            html += '</div>';
            html += '<div class="progress">';
            html += '<div style="width:' + monsterPercent + "%" + ';" aria-valuemax="100" aria-valuemin="0" aria-valuenow="60" role="progressbar" class="progress-bar" id="' + displayMineral.name + '">';
            html += '<span style="font-size:13px;">' + displayMineral.hp + ' HP</span>' + '</div></div>';
            html += '</div>';
        };
    };
    html += '</div>';
    html += '</div>';

    html += '</div>';//Close mining row

    html += '<div class="row">';//Open row for herbalism

    html += '<div class="col-sm-10 col-sm-offset-1">';
    html += '<div class="row">';
    html += '<h3>Emonds Valley</h3>';
    for (var herb in herbList) {
        var displayHerb = herbList[herb].Stats;
        var onclickEvent = 'gather(' + displayHerb.name + ", " + "'herbalism'" + ');';
        if (displayHerb.isShown === true) {
            html += '<div class="col-xs-4">';
            var monsterPercent = ((displayHerb.hp / displayHerb.maxHp) * 100);

            html += '<div class="row">';
            html += '<div class="col-xs-4 col-xs-offset-4 col-sm-6 col-sm-offset-3">';
            html += '<img src="images/mineral/' + displayHerb.name + '.png" onclick="' + onclickEvent + '">';
            html += '</div>';
            html += '</div>';
            html += '<div class="progress">';
            html += '<div style="width:' + monsterPercent + "%" + ';" aria-valuemax="100" aria-valuemin="0" aria-valuenow="60" role="progressbar" class="progress-bar" id="' + displayMineral.name + '">';
            html += '<span style="font-size:13px;">' + displayHerb.hp + ' HP</span>' + '</div></div>';
            html += '</div>';
        };
    };
    html += '</div>';
    html += '</div>';

    html += '</div>';//Close herbalism row
    document.getElementById('professionGatherArea').innerHTML = html;
};

/*------------------------------------------------------------------------------------------------
 *                                                                                               |
 *                                                                                               |
 *                                                                                               |
 *                                        CRAFTING                                               |
 *                                                                                               |
 *                                                                                               |
 *                                                                                               |
 *------------------------------------------------------------------------------------------------
 */
var craftedItemHolder = [];
var itemTypeTab = 'weapon';
function changeItemType(index) {
    itemTypeTab = index;
};

var itemBonusTab = 'Beginner';
function changeItemBonus(index) {
    itemBonusTab = index;
};
function craftingHtml() {
    var html = "";
    var crafting = playerProfession.crafting;

    html += '<div class="row">';
    html += '<div class="col-xs-12 border marginBottom" style="margin-left:-20px;">';
    

    html += '<div id="craftingHtmlButtons">';
    html += '</div>';


    html += '</div>';
    html += '</div>';

    document.getElementById('crafting').innerHTML = html;
    craftingHtmlButtons();
    testss();
};
var currentItemToCraft = "weapon";
var currentItemQualityToCraft = "Beginner";
var craftingLevelReq = "";
var totalCraftingLevelReq = "";
function craftingHtmlButtons() {
    var html = "";
    var profession = playerProfession.crafting;
    
    html += '<form role="form">';
    html += '<label class="radio-inline"><input onclick="craftItemQuality();changeItemType(' + "'weapon'" + ');" class="visibilityLabel" type="radio" name="craftingItem" value="weapon"';
        if (itemTypeTab === "weapon") {
            html += 'checked = "checked"';
        }
        html += '</input>Weapon</label>';
    if (profession.level >= 5) {
        html += '<label class="radio-inline"><input onclick="craftItemQuality();;changeItemType(' + "'armor'" + ');" class="visibilityLabel" type="radio" name="craftingItem" value="armor"';
        if (itemTypeTab === "armor") {
            html += 'checked = "checked"';
        }
        html += '</input>Armor</label>';
    }
    else {
        html += '<span class="marginLeft" style="color:#DD4747;">Crafting lvl 5</span>';
    }
    if (profession.level >= 10) {
        html += '<label class="radio-inline"><input onclick="craftItemQuality();;changeItemType(' + "'accessory'" + ');" class="visibilityLabel" type="radio" name="craftingItem" value="accessory"';
        if (itemTypeTab === "accessory") {
            html += 'checked = "checked"';
        }
        html +='</input>Accessory</label>';
    }
    else {
        html += '<span class="marginLeft" style="color:#DD4747;">Crafting lvl 10</span>';
    }
    html += '</form>';

    html += '</form>';
    html += '<div id="craftItemQualityHtml">';
    html += '</div>';
    document.getElementById('craftingHtmlButtons').innerHTML = html;
    craftItemQuality();
};
function craftItemQuality() {
    var html = "";
   
    html += '<form role="form">';

    html += '<label class="radio-inline"><input onclick="displayCraftedItem();changeItemBonus(' + "'Beginner'" + ');" class="visibilityLabel" type="radio" name="craftingBonus" value="Beginner"';
    if (itemBonusTab === "Beginner") {
        html += 'checked="checked"';
    }
        html += '</input>Beginner</label>';
        html += '<label class="radio-inline"><input onclick="displayCraftedItem();changeItemBonus(' + "'Intermediate'" + ');" class="visibilityLabel" type="radio" name="craftingBonus" value="Intermediate"'
        if (itemBonusTab === "Intermediate") {
            html += 'checked="checked"';
        }
        html += '</input>Intermediate</label>';
        html += '<label class="radio-inline"><input onclick="displayCraftedItem();changeItemBonus(' + "'Master'" + ');" class="visibilityLabel" type="radio" name="craftingBonus" value="Master"'
        if (itemBonusTab === "Master") {
            html += 'checked="checked"';
        }
        html += '</input>Master</label>';

    html += '</form>';

    html += '<div id="displayCraftedItemHtml">';
    html += '</div>';
    document.getElementById('craftItemQualityHtml').innerHTML = html;
    displayCraftedItem();
};
//       LEGEND >_<
//var currentItemToCraft = ""; //Weapon/Armor/Accessory
//var currentItemQualityToCraft = ""; //Beginner/Intermediate/Master
//var craftingLevelReq = "";
//var totalCraftingLevelReq = "";
var itemSubTypeArrayCss = [];
function displayCraftedItem() {
    var html = "";
    var itemLevel = playerProfession.crafting.level;
    var craftingBonus = document.getElementsByName('craftingBonus');
    var craftingItemType = document.getElementsByName('craftingItem');
    var profession = playerProfession.crafting;
    var craftedItemLevel = Math.floor(player.properties.lastEnemyLevel);
    var currentBonus = 0;
    var currentCraftingType = "";
    var mineralType = "";
    var mineralAmount = "";
    for (var x = 0; x < craftingItemType.length; x++) {
        if (craftingItemType[x].checked === true) {
            currentItemToCraft = craftingItemType[x].value;
        }
    };
    if (currentItemToCraft === "weapon") {
        craftingLevelReq = 0;
    }
    else if (currentItemToCraft === "armor") {
        craftingLevelReq = 5;
    }
    else if (currentItemToCraft === "accessory") {
        craftingLevelReq = 10;
    };
    for (var i = 0; i < craftingBonus.length; i++) {
        if (craftingBonus[i].checked === true) {
            currentItemQualityToCraft = craftingBonus[i].value;
            if (currentItemQualityToCraft === "Intermediate") {
                craftingLevelReq += 10;
            }
           else if (currentItemQualityToCraft === "Master") {
               craftingLevelReq += 20;
            }
            break;
        };
    };
    currentCraftingType = profession[currentItemQualityToCraft]();
    html += '<div class="row">';
    html += '<div class="col-xs-6 col-xs-offset-3">';
    html += '<h3>You need crafting level ' + craftingLevelReq + '</h3>';
    html += '<h4>' + currentCraftingType[0].text + '</h4>';
    html += '<h5>' + 'You will craft item level: ' + craftedItemLevel + '</h5>';
    html += '</div>';
    html += '</div>';
    html += '<div class="row margin borderLeft borderTop">';
    //itemToCraft global array object...
    for (var p = 0; p < itemToCraft[0][currentItemToCraft].length; p++) {
        var currentItemSubType = itemToCraft[0][currentItemToCraft][p];
        // p == item subtype array index, used in itemDrop to determine item subtype lore and other stats !Important
        var canCraft = true;
        var noMinerals = false;
        html += '<div class="col-xs-12 col-md-6 col-lg-6 borderRight borderBottom">';
        html += currentItemSubType.capitalizeFirstLetter() + '<br />';
        if (currentItemSubType === "helmet" || currentItemSubType === "chest" || currentItemSubType === "legs" || currentItemSubType === "boots" || currentItemToCraft === "accessory") {
            itemLevelImage = "";
        }
        else {
            var itemLevelImage = getNumberMultiplierofFive(itemLevel);
        }
        html += '<div class="row">';
        html += '<div class="col-xs-12">';
        html += '<img src="images/items/' + currentItemSubType + '/' + (currentItemSubType + 'Common' + itemLevelImage) + '.png">';
        html += '</div>';
        html += '</div>';
        for (var k = 0; k < currentCraftingType[0].type.length; k++) {
            mineralType = currentCraftingType[0].type[k];
            mineralAmount = currentCraftingType[0][currentItemToCraft][0][currentItemSubType][k];

            html += '<img src="images/mineral/' + mineralType + '.png">' + ' ' + mineralAmount;

            if (player.properties[mineralType] >= mineralAmount) {
                canCraft = true;
            }
            else {
                noMinerals = true;
            };
        };
        html += '<div class="row">';
        html += '<div class="col-xs-12">';
        html += '<button onclick="craftItem(' + "'" + currentItemToCraft + "', " + "'" + currentItemSubType + "', " + "'" + currentItemQualityToCraft + "'" + ')" id="' + currentItemSubType + '"';
        if (canCraft === true && noMinerals === false && profession.level >= craftingLevelReq) {
            html += '>Craft</button>';
            var position = itemSubTypeArrayCss.indexOf(currentItemSubType)
            itemSubTypeArrayCss.splice(position, 1);
        }
        else {
            html += 'disabled="disabled" style="cursor:not-allowed;">Craft</button>';
            itemSubTypeArrayCss.push(currentItemSubType);
        };
        html += '</div>';
        html += '</div>';
        html += '</div>';
    };
    canCraft = false;
    noMinerals = false;
    html += '</div>';

    document.getElementById('displayCraftedItemHtml').innerHTML = html;
    craftingBackground();
};

function craftingBackground() {
    for (var i = 0; i < itemSubTypeArrayCss.length; i++) {
        $("#" + itemSubTypeArrayCss[i]).parents().eq(2).addClass('backgroundRed');
    }
    itemSubTypeArrayCss = [];
};

function craftItem(itemType, itemSubType, itemQuality) {
    var profession = playerProfession.crafting;
    var itemLevel = Math.floor(player.properties.lastEnemyLevel);
    for (var i = 0; i < profession[itemQuality]()[0].type.length; i++) {
        var mineralType = profession[itemQuality]()[0].type[i];
        var mineralCost = profession[itemQuality]()[0][itemType][0][itemSubType][i];
        var experience = (profession[itemQuality]()[0].experience[i] * mineralCost);
        var maxResources = 1000 + playerPassive.storage.bonusTotal();
        profession.experience += experience;;
        if (profession.experience >= profession.maxExperience) {
            profession.level++;
            profession.experience -= profession.maxExperience;
            profession.maxExperience += 100;
        }
        document.getElementById("Profession_crafting").innerHTML = 'level: ' + profession.level + ' | ' + profession.experience.toFixed(0) + '/' + profession.maxExperience.toFixed(0);
        player.properties[mineralType] -= mineralCost;
        document.getElementById(mineralType).innerHTML = player.properties[mineralType] + "/" + maxResources;
    }
        getItemType(itemLevel, false, itemType, itemSubType, itemQuality);
        document.getElementById('Profession_crafting').innerHTML = 'level: ' + profession.level + ' | ' + profession.experience.toFixed(0) + '/' + profession.maxExperience.toFixed(0)
        craftingHtml();
        testss();
};


function craftingHtml2() {
    var html = '';
    var crafting = playerProfession.crafting;
    var craftingLevel = crafting.level;
    var itemTypeObject = {};
    html += '<div class="row">';
    html += '<div class="col-xs-12">';
    html += '<h3>Crafting </h3>';

    html += '<div class="row">';
    html += '<div class="col-xs-12">';
    html += '<ul class="nav nav-tabs">';
    for (var key in InventoryItemTypes) {
        var itemType2 = InventoryItemTypes[key].type;
        if (itemType2 === itemTypeTab) {
            html += '<li class="active" onClick = changeItemTypeTab("' + itemType2 + '")>';
        }
        else {
            html += '<li onClick = changeItemTypeTab("' + itemType2 + '")>';
        };
        html += '<a href="#tab_' + itemType2 + 'Craft" data-toggle="tab" style="padding:0px;"><span class="icons ' + itemType2 + '" data-toggle="tooltip" data-placement="top" title="' + itemType2 + '"></span>' + '</a></li>';
    };
    html += '</ul>';
    html += '<div class="tab-content">';
    for (var key in InventoryItemTypes) {
        var itemType3 = InventoryItemTypes[key].type;
        if (itemType3 === itemTypeTab) {
            html += '<div class="tab-pane active" ';
        } else {
            html += '<div class="tab-pane" ';
        };
        html += 'id="tab_' + itemType3 + 'Craft">';


        html += '<ul class="nav nav-tabs">';
        if (itemType3 === 'weapon') {
            itemTypeObject = itemWeaponSubType;
        } else if (itemType3 === 'armor') {
            itemTypeObject = itemArmorSubType;
        } else if (itemType3 === 'accessory') {
            itemTypeObject = itemAccessorySubType;
        }
        for (var key in itemTypeObject) {
            if (itemTypeObject.hasOwnProperty(key)) {
                var itemType4 = itemTypeObject[key].type;
                if (itemType4 === itemSubTypeTab) {
                    html += '<li class="active" onClick = changeItemSubType("' + itemType4 + '")>';
                } else {
                    html += '<li onClick = changeItemSubType("' + itemType4 + '")>';
                };
                html += '<a href="#tab_' + itemType4 + '" data-toggle="tab" style="padding:0px;"><span class="icons ' + itemType4 + '" data-toggle="tooltip" data-placement="top" title="' + itemType4 + '"></span>' + '</a></li>';
            };
        };
        html += '</ul>';
        html += '<div class="tab-content">';
        for (var key in itemTypeObject) {
            if (itemTypeObject.hasOwnProperty(key)) {
                var itemType6 = key
                var itemType5 = itemTypeObject[key].type;
                if (itemType5 === itemSubTypeTab) {
                    html += '<div class="tab-pane active" ';
                } else {
                    html += '<div class="tab-pane" ';
                };
                html += 'id="tab_' + itemType5 + '">';
                //Content of sub Tab...Sword/Axe/Chest/Ring etc...
                for (var i = 0; i < craftCost.length; i++) {
                    html += '<button type="button" class="sell"';
                    if (playerProfession.crafting.level >= craftCost[i].levelReq) {
                        html += ' onclick="craftItem(' + "'" + itemType3 + "', " + itemType6 + ", " + "'" + craftCost[i].type + "'" + ');">'
                        html += craftCost[i].type + '</button><br />';
                    } else {
                        html += 'disabled style="cursor:not-allowed;">Level ' + craftCost[i].levelReq + '+' + '</button><br />';
                    };
                    for (var j = 0; j < craftCost[i].costTypeAmount; j++) {
                        html += craftCost[i].costType[j].cost;
                        html += '<img src="images/mineral/' + craftCost[i].costType[j].type + '.png" data-toggle="tooltip" data-placement="top" title="' + craftCost[i].displayName[j].name + '">';
                    };
                    html += '<br />';
                };
                html += '</div>';
            };
        };
        html += '</div>';
        html += '</div>';
    };
    html += '</div>';
    html += '</div>';
    html += '</div></div>';
    document.getElementById('crafting').innerHTML = html;
    testss();
};