
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
var mineralList = [
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
        displayName: 'Lilly wisp'
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

(function () {
    var newProfession = function (name, image) { //default spell object constructor
        this.level = 1;
        this.maxLevel = 100;
        this.name = name;
        this.image = image;
        this.experience = 0;
        this.maxExperience = 100;
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

function mine(monsterStat) {
    var monsterStats = monsterStat.Stats;
    var name = monsterStats.name;
    var mining = playerProfession.mining;
    monsterStats.hp -= mining.damage();
    if (monsterStats.hp <= 0) {
        monsterStats.hp = monsterStats.maxHp;
        mining.experience += monsterStats.baseExp;
        player.properties[name] += 1;
        if (mining.experience >= mining.maxExperience) {
            mining.level += 1;
            mining.experience = mining.experience - mining.maxExperience;
            mining.maxExperience *= 1.1;
        };
    };
    playerProfessionHtml();
    craftingHtml();
    unlockMineral();
};
function unlockMineral() {
    var miningLevel = playerProfession.mining.level;
    if (miningLevel >= 5) {
        monsterList.LiteCyan.Stats.isShown = true;
    };
    if (miningLevel >= 10) {
        monsterList.OhmStone.Stats.isShown = true;
    };
    if (miningLevel >= 20) {
        monsterList.Techtite.Stats.isShown = true;
    };
    if (miningLevel >= 35) {
        monsterList.XilBond.Stats.isShown = true;
    };
    if (miningLevel >= 50) {
        monsterList.VulcanatedIron.Stats.isShown = true;
    };
    CreateMonsterHtml();
};
playerProfessionHtml();

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
var itemSubTypeTab = 'sword';
function changeItemTypeTab(index) {
    itemTypeTab = index;
    if (index === 'weapon') {
        itemSubTypeTab = 'sword';
    }
    else if (index === 'armor') {
        itemSubTypeTab = 'chest';
    }
    else if (index === 'accessory') {
        itemSubTypeTab = 'ring';
    }
};

function changeItemSubType(index) {
    itemSubTypeTab = index;
};
function craftingHtml() {
    var html = '';
    var crafting = playerProfession.crafting;
    var craftingLevel = crafting.level;
    var itemTypeObject = {};
    html += '<div class="row">';
    html += '<div class="col-xs-10 col-xs-offset-1">';
    html += '<h3>Crafting </h3>';
    html += '<div class="col-xs-10 col-xs-offset-1">';
    html += 'Crafting level: ' + craftingLevel + '<br />';
    html += 'Crafting exp: ' + crafting.experience + '/' + crafting.maxExperience + '<br />';
    html += '</div>';

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
    for (key in InventoryItemTypes) {
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
        for (key in itemTypeObject) {
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
        for (key in itemTypeObject) {
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
                        html += player.properties[craftCost[i].costType[j].type] + '/' + craftCost[i].costType[j].cost;
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

function craftItem(itemType, itemSubType, rarity) {
    var itemRarity = rarity;
    var canCraft = false;
    var itemLevel = player.properties.level + playerProfession.crafting.level;
    var mineral01 = player.properties.Thaumerite;
    var mineral02 = player.properties.LiteCyan;
    var mineral03 = player.properties.OhmStone;
    var mineral04 = player.properties.Techtite;
    var mineral05 = player.properties.XilBond;
    var mineral06 = player.properties.VulcanatedIron;
    var craftItemType = "";
    var craftItemRarity = "";
    var craftExp = 0;
    if (rarity === 'Legendary' && mineral06 >= 10 && mineral05 >= 10 && mineral04 >= 10) {
        craftItemType = itemType;
        craftItemRarity = 0,//index of legendary when picking a rarity...
        craftExp = 100;
        canCraft = true;
        player.properties.VulcanatedIron -= 10;
        player.properties.XilBond -= 10;
        player.properties.Techtite -= 10;
    }
    else if (rarity === 'Epic' && mineral04 >= 10 && mineral03 >= 10) {
        craftItemType = itemType;
        craftItemRarity = 1,
        craftExp = 50;
        canCraft = true;
        player.properties.Techtite -= 10;
        player.properties.OhmStone -= 10;
    }
    else if (rarity === 'Rare' && mineral03 >= 10 && mineral02 >= 10) {
        craftItemType = itemType;
        craftItemRarity = 2,
        craftExp = 25;
        canCraft = true;
        player.properties.LiteCyan -= 10;
        player.properties.OhmStone -= 10;
    }
    else if (rarity === 'Uncommon' && mineral02 >= 10 && mineral01 >= 10) {
        craftItemType = itemType;
        craftItemRarity = 3,
        craftExp = 15;
        canCraft = true;
        player.properties.LiteCyan -= 10;
        player.properties.Thaumerite -= 10;
    }
    else if (rarity === 'Common' && mineral01 >= 10) {
        craftItemType = itemType;
        craftItemRarity = 4,
        craftExp = 5;
        canCraft = true;
        player.properties.Thaumerite -= 10;
    }
    else {
        canCraft = false;
        console.log('not enough resources');
    }
    if (canCraft === true) {
        var crafting = playerProfession.crafting;
        var craftingLevel = crafting.level;
        getItemType(craftingLevel, false, craftItemType, itemSubType, itemLevel, craftItemRarity);
        crafting.experience += craftExp;
        if (crafting.experience >= crafting.maxExperience) {
            crafting.level += 1;
            crafting.experience = crafting.experience - crafting.maxExperience;
            crafting.maxExperience = Math.floor(crafting.maxExperience * 1.1);
        };
    }
    else {
        //Add log info...
    }
    craftingHtml();
    playerProfessionHtml();
};


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
var testtest = [
    {
        type: 'smallPotion',
        displayName: 'Small Potion',
        use: 'useSmallPotion',
        amount: 0,
        effect: 'healing',
        bonus: 100
    }
]
var alchemyPotions = [
    {
        type: 'healing',
        baseBonus: 200, //Base amount heal
        multiplier: 100 //Base amount + (multiplier * alchemy level)
    }
];
function createAlchemyHtml() {
    var html = '';
    var alchemy = playerProfession.alchemy;
    var alchemyLevel = alchemy.level;
    var potion = {};
    html += '<div class="row">';
    html += '<div class="col-xs-10 col-xs-offset-1 c3">';
    html += '<h3>Alchemy</h3>';
    html += 'Alchemy Level: ' + alchemyLevel + '<br />';
    html += 'Alchemy exp: ' + alchemy.experience + '/' + alchemy.maxExperience + '<br />';

    html += 

    html += '</div>';
    html += '</div>';

    document.getElementById('alchemy').innerHTML = html;
};
createAlchemyHtml();