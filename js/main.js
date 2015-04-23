"use strict";
//Player log
function Log(data) {
    var i;
    if (logData.length < maxLogLines) {
        logData[logData.length] = data;
        logData.length++;
    } else {
        for (i = 0; i < logData.length - 1; i++) {
            logData[i] = logData[i + 1];
        }
        logData[logData.length - 1] = data;
    }
    var logTemp = "";
    for (i = logData.length - 1; i >= 0; i--) {
        logTemp += "<center>" + logData[i] + "</center>";
    }
    document.getElementById('logConsole').innerHTML = logTemp;
};

var currentGameVersion = 1.45;
//PLAYER STATS
var player = {
    gameVersion: 1.45,
    isDead: false,
    runOnce: false,
    isAuto: false,
    itemIdNumber: 1,
    stats: 0,
    skillPoints: 0,
    gold: 0,
    autoBattle: false, // testing
    level: 1,
    experience: 0,
    maxExperience: 100,
    backpackUpgrade: 0,
    dropRate: function () {
        return (1 + (player.totalLuck() / 500) + (equippedItems.ring.dropRate + equippedItems.amulet.dropRate + equippedItems.talisman.dropRate) / 100);
    },
    expRate: function () {
        return (1 + (equippedItems.ring.expRate + equippedItems.amulet.expRate + equippedItems.talisman.expRate) / 100);
    },
    goldRate: function () {
        return (1 + (equippedItems.ring.goldRate + equippedItems.amulet.goldRate + equippedItems.talisman.goldRate) / 100);
    },
    inventory: function () {
        return Math.floor((20 + (player.totalStrength() / 10) + player.backpackUpgrade)); //Add backpacks "new item type"
    },
    //Strength
    baseStrength: 5,
    equipStrength: function () {
        return Math.floor(
            equippedItems.weapon.strength +
            equippedItems.offHand.strength +
            equippedItems.armor.strength);
    },
    totalStrength: function () {
        return Math.floor(player.baseStrength +
            player.equipStrength() +
            player.axeStrength() +
            player.rangedStrength() +
            player.swordStrength());
    },
    //Endurance
    baseEndurance: 5,
    equipEndurance: function () {
        return Math.floor(
            equippedItems.weapon.endurance +
            equippedItems.offHand.endurance +
            equippedItems.armor.endurance);
    },
    totalEndurance: function () {
        return Math.floor(
            player.baseEndurance +
            player.equipEndurance() +
            player.maceEndurance() +
            player.axeEndurance());
    },
    //Agility
    baseAgility: 5,
    equipAgility: function () {
        return Math.floor(
            equippedItems.weapon.agility +
            equippedItems.offHand.agility +
            equippedItems.armor.agility);
    },
    totalAgility: function () {
        return Math.floor(
            player.baseAgility +
            player.equipAgility() +
            player.swordAgility());
    },
    //Dexterity
    baseDexterity: 5,
    equipDexterity: function () {
        return Math.floor(
            equippedItems.weapon.dexterity +
            equippedItems.offHand.dexterity +
            equippedItems.armor.dexterity);
    },
    totalDexterity: function () {
        return Math.floor(
            player.baseDexterity +
            player.equipDexterity() +
            player.rangedDexterity());
    },
    //Intelligence
    baseIntelligence: 5,
    equipIntelligence: function () {
        return Math.floor(
            equippedItems.weapon.intelligence +
            equippedItems.offHand.intelligence +
            equippedItems.armor.intelligence);
    },
    totalIntelligence: function () {
        return Math.floor(
            player.baseIntelligence +
            player.equipIntelligence() +
            player.staffIntelligence());
    },
    //Wisdom
    baseWisdom: 5,
    equipWisdom: function () {
        return Math.floor(
            equippedItems.weapon.wisdom +
            equippedItems.offHand.wisdom +
            equippedItems.armor.wisdom);
    },
    totalWisdom: function () {
        return Math.floor(
            player.baseWisdom +
            player.equipWisdom() +
            player.staffWisdom() +
            player.maceWisdom());
    },
    //Luck
    baseLuck: 5,
    equipLuck: function () {
        return Math.floor(
            equippedItems.weapon.luck +
            equippedItems.offHand.luck +
            equippedItems.armor.luck);
    },
    totalLuck: function () {
        return Math.floor(
            player.baseLuck +
            player.equipLuck());
    },
    //Health
    health: 500,
    maxhealth: function () {
        return (475 + player.totalEndurance() * 5);
    },
    hpregen: function () {
        return Math.floor(20 + (player.totalEndurance()) / 3);
    },
    //Mana
    mana: 10,
    maxMana: function () {
        return (7 +
            player.totalWisdom() * 0.5 +
            player.totalIntelligence() * 0.1);
    },
    manaRegen: function () {
        return (player.totalWisdom() / 10);
    },
    //Damage
    minDamage: function () {
        return Math.floor(
            3 + (player.totalStrength() * 0.2) +
            equippedItems.weapon.minDamage);
    },
    maxDamage: function () {
        return Math.floor(
            5 + (player.totalStrength() * 0.3) +
            equippedItems.weapon.maxDamage);
    },
    //Secondary
    accuracy: function () {
        return Math.floor(95 + (player.totalAgility() * 0.02 + player.totalLuck() * 0.01));
    },
    defense: function () {
        return (
            (player.totalAgility() * 0.1) +
            equippedItems.armor.defense +
            equippedItems.offHand.defense);
    },
    evasion: function () {
        if ((5 + (player.totalAgility() * 0.03 + player.totalLuck() * 0.02)) > 20) {
            return 20;
        }
        else {
            return (5 + (player.totalAgility() * 0.03 + player.totalLuck() * 0.02));
        }
    },
    criticalChance: function () {
        if ((10 + (player.totalDexterity() * 0.03 + player.totalLuck() * 0.01)) > 50) {
            return 50;
        }
        else {
            return (10 + (player.totalDexterity() * 0.03 + player.totalLuck() * 0.01));
        }
    },
    criticalDamage: function () {
        return (1.48 + player.totalDexterity() * 0.002).toFixed(2);
    },
    //Sword
    swordLevel: 0,
    swordExp: 0,
    swordMaxExp: 10,
    isSword: false,
    swordStr: function () {
        return player.swordLevel * 2;
    },
    swordStrength: function () {
        return player.isSword ? player.swordStr() : 0;
    },
    swordAgi: function () {
        return player.swordLevel * 1.5;
    },
    swordAgility: function () {
        return player.isSword ? player.swordAgi() : 0;
    },
    //Axe
    axeLevel: 0,
    axeExp: 0,
    axeMaxExp: 10,
    isAxe: false,
    axeStr: function () {
        return player.axeLevel * 2;
    },
    axeStrength: function () {
        return player.isAxe ? player.axeStr() : 0;
    },
    axeEnd: function () {
        return player.axeLevel * 1.5;
    },
    axeEndurance: function () {
        return player.isAxe ? player.axeEnd() : 0;
    },
    //Mace
    maceLevel: 0,
    maceExp: 0,
    maceMaxExp: 10,
    isMace: false,
    maceEnd: function () {
        return player.maceLevel * 2;
    },
    maceEndurance: function () {
        return player.isMace ? player.maceEnd() : 0;
    },
    maceWis: function () {
        return player.maceLevel * 1.5;
    },
    maceWisdom: function () {
        return player.isMace ? player.maceWis() : 0;
    },
    //Staff
    staffLevel: 0,
    staffExp: 0,
    staffMaxExp: 10,
    isStaff: false,
    staffInt: function (){
        return player.staffLevel * 2;
    },
    staffIntelligence: function () {
        return player.isStaff ? player.staffInt() : 0;
    },
    staffWis: function () {
        return player.staffLevel * 1.5;
    },
    staffWisdom: function () {
        return player.isStaff ? player.staffWis() : 0;
    },

    //Ranged
    rangedLevel: 0,
    rangedExp: 0,
    rangedMaxExp: 10,
    isRanged: false,
    rangedStr: function () {
        return player.rangedLevel * 1.5;
    },
    rangedStrength: function () {
        return player.isRanged ? player.rangedStr() : 0;
    },
    rangedDex: function () {
        return player.rangedLevel * 2;
    },
    rangedDexterity: function () {
        return player.isRanged ? player.rangedDex() : 0;
    },
};
//Equipped items object, storing 0 values, so all player stats will work at the beginning of the game
var equippedItems = {
    weapon: {
        strength: 0,
        endurance: 0,
        agility: 0,
        dexterity: 0,
        intelligence: 0,
        wisdom: 0,
        luck: 0,
        minDamage: 0,
        maxDamage: 0,
        defense: 0
    },
    offHand: {
        strength: 0,
        endurance: 0,
        agility: 0,
        dexterity: 0,
        intelligence: 0,
        wisdom: 0,
        luck: 0,
        defense: 0
    },
    armor: {
        strength: 0,
        endurance: 0,
        agility: 0,
        dexterity: 0,
        intelligence: 0,
        wisdom: 0,
        luck: 0,
        defense: 0
    },
    ring: {
        strength: 0,
        endurance: 0,
        agility: 0,
        dexterity: 0,
        intelligence: 0,
        wisdom: 0,
        luck: 0,
        defense: 0,
        dropRate: 0,
        expRate: 0,
        goldRate: 0
    },
    amulet: {
        strength: 0,
        endurance: 0,
        agility: 0,
        dexterity: 0,
        intelligence: 0,
        wisdom: 0,
        luck: 0,
        defense: 0,
        dropRate: 0,
        expRate: 0,
        goldRate: 0
    },
    talisman: {
        strength: 0,
        endurance: 0,
        agility: 0,
        dexterity: 0,
        intelligence: 0,
        wisdom: 0,
        luck: 0,
        defense: 0,
        dropRate: 0,
        expRate: 0,
        goldRate: 0
    },
};

var maxLogLines = 16;
var logData = {
    length: 0
};
var battleTurn;
var pot = 0;
var spot = 0;
var mpot = 0;
//Array to store player items
var playerInventory = [];
var damageDealt = 0;
var magicDamage = 0;
var magicDamageDealt = 0;
var damageTaken = 0;
var criticalRate = 0;
var enemyBlock = 0;
var accuracyRate = 0;

function attack(monster) {
    battleTurn = 1;
    var monsterStats = monster.Stats;
    while (battleTurn > 0 && battleTurn <= 20) {
        if (monsterStats.hp >= 1 & player.isDead == false) {
            playerAttack(monster, monsterStats);
            if (monsterStats.hp < 1) {
                monsterKilled(monster, monsterStats);
            } else {
                monsterAttack(monster, monsterStats);
            };
        }
        else {
            Log("<span style=\"color:red\">You can't fight while being dead. </span>");
            break;
        };
        battleTurn += 1;
    };
    DrawBattle();
};
//There is a bug with Draw, displaying NaN critRate, and battleTurns 0...for some odd reason...
function DrawBattle() {
    if (battleTurn === 21) {
        Log("<span style=\"color:blue\">Critical Rating: </span>" + ((criticalRate / battleTurn) * 100).toFixed(0) + " " + "%");
        Log("<span style=\"color:red\">Enemy dealt: </span>" + damageTaken + " " + "damage");
        Log("<span style=\"color:blue\">You dealt: </span>" + damageDealt + " " + "physical damage total.");
        Log("<span style=\"color:blue\">You dealt: </span>" + magicDamageDealt + " " + "magic damage total.");
        Log("<span style=\"color:blue\">Turns: </span>" + (battleTurn - 1));
        Log("<span style=\"color:blue\">Draw!</span>");
        Log("--------------------------------------------");
        battleTurn = -1;
        damageDealt = 0;
        magicDamageDealt = 0;
        damageTaken = 0;
        skillReCharge();
        updateHtml();
    };
};

//Player miss/hit chance
function playerAttack(monster, monsterStats) {
    document.getElementById("manaCost").innerHTML = monsterStats.manaCost + " Mana/s";
    if (player.autoBattle == true && player.isAuto == false) {
        player.isAuto = true;
        autoAttack(monster, monsterStats);
    };
    var playerHitChance = (player.accuracy() - monsterStats.eva) / 100;
    var randomHitChance = Math.random();
    if (playerHitChance > randomHitChance) {
        playerCriticalChance(monster, monsterStats);
        accuracyRate += 1;
    };
};

//player critical chance
function playerCriticalChance(monster, monsterStats) {
    var playerCriticalChance = player.criticalChance() / 100;

    var randomCritChance = Math.random();

    if (playerCriticalChance > randomCritChance) {
        playerCriticalDamage(monster, monsterStats);
        criticalRate += 1;
    }
    else {
        playerDamage(monster, monsterStats);
    };
};

//player critical damage calculation
function playerCriticalDamage(monster, monsterStats) {
    var damage = Math.floor(Math.random() * (player.maxDamage() - player.minDamage() + 1)) + player.minDamage();
    damage = Math.floor(damage * player.criticalDamage() * (10 / (10 + monsterStats.def)));
    if (damage >= 1) {
        playerDamageDeal(damage, monster, monsterStats);
    };
};

//player normal damage calculation
function playerDamage(monster, monsterStats) {
    var damage = Math.floor(Math.random() * (player.maxDamage() - player.minDamage() + 1)) + player.minDamage();
    damage = Math.floor(damage * (10 / (10 + monsterStats.def)));
    if (damage >= 1) {
        playerDamageDeal(damage, monster, monsterStats);
    };
};

//player damage deal (base or critical)
function playerDamageDeal(damage, monster, monsterStats) {
    for (spell in activeSkills) {
        var selectedSpell = activeSkills[spell];
        if (selectedSpell.isActive == true && selectedSpell.charge > 0) {
            magicDamage += selectedSpell.damage();
            selectedSpell.charge -= 1;
        };
    };
    monsterStats.hp -= damage + magicDamage;
    magicDamageDealt += magicDamage;
    magicDamage = 0;
    damageDealt += damage;
    document.getElementById(monsterStats.id).getElementsByClassName('hp')[0].innerHTML = monsterStats.hp;
    //Add more stuff like "bonus elemental damage from passive skills or bonus weapon damage
};

//monster hit chance
function monsterAttack(monster, monsterStats) {

    var monsterHitChance = (monsterStats.acc - player.evasion()) / 100;

    var randomHitChance = Math.random();

    if (monsterHitChance > randomHitChance) {
        monsterDamage(monster, monsterStats);
    };
};

//monster damage calculation
function monsterDamage(monster, monsterStats) {
    var dmg = Math.floor(Math.random() * (monsterStats.maxDmg - monsterStats.minDmg + 1)) + monsterStats.minDmg;
    dmg = Math.floor(dmg * (30 / (30 + player.defense())));
    if (dmg >= 1) {
        monsterDamageDeal(dmg, monster, monsterStats);
    };
};

//monster damage deal (base or critical)
function monsterDamageDeal(dmg, monster, monsterStats) {
    player.health = player.health - dmg;
    damageTaken += dmg;
    document.getElementById("health").innerHTML = player.health;
    if (player.health < 1) {
        playerDead(monster, monsterStats);
    };
};

//player dead function
function playerDead(monster, monsterStats) {
    var goldLost = 0;
    var expLost = 0;
    player.isDead = true;
    player.health = 0;
    playerRevive();
    goldLost = Math.floor(player.gold - (player.gold / 1.2));
    player.gold = Math.floor(player.gold / 1.2);
    expLost = Math.floor(player.experience - (player.experience / 1.2));
    player.experience = Math.floor(player.experience / 1.2);
    //monsterStats.hp = monsterStats.maxHp;
    document.getElementById("health").innerHTML = player.health;
    document.getElementById("gold").innerHTML = player.gold;
    document.getElementById("experience").innerHTML = player.experience;
    Log("<span style=\"color:red\">You lost </span>" + goldLost + "gold");
    Log("<span style=\"color:red\">You lost </span>" + expLost + "experience");
    Log("<span style=\"color:blue\">Critical Rating: </span>" + ((criticalRate / battleTurn) * 100).toFixed(0) + " " + "%");
    Log("<span style=\"color:red\">Enemy dealt: </span>" + damageTaken + " " + "damage");
    Log("<span style=\"color:blue\">You dealt: </span>" + damageDealt + " " + "physical damage total");
    Log("<span style=\"color:blue\">You dealt: </span>" + magicDamageDealt + " " + "magic damage total");
    Log("<span style=\"color:blue\">Turns: </span>" + battleTurn);
    Log("<span style=\"color:red\">You have died!</span>");
    Log("--------------------------------------------");
    Log("You need to wait 5 seconds before you can fight again!");
    battleTurn = -1;
    damageDealt = 0;
    magicDamageDealt = 0;
    damageTaken = 0;
    criticalRate = 0;
    skillReCharge();
    updateHtml();
}

//monster kill function
function monsterKilled(monster, monsterStats) {
    monsterStats.hp = monsterStats.maxHp;
    itemExperienceGain(monster, monsterStats);
    monsterExperience(monster, monsterStats);
    weaponSkill(monster, monsterStats);
    monsterStats.killCount++;
    Log("<span style=\"color:blue\">Critical Rating: </span>" + ((criticalRate / battleTurn) * 100).toFixed(0) + " " + "%");
    Log("<span style=\"color:red\">Enemy dealt: </span>" + damageTaken + " " + "damage");
    Log("<span style=\"color:blue\">You dealt: </span>" + damageDealt + " " + "physical damage total");
    Log("<span style=\"color:blue\">You dealt: </span>" + magicDamageDealt + " " + "magic damage total");
    Log("<span style=\"color:blue\">Turns: </span>" + battleTurn);
    Log("--------------------------------------------");
    battleTurn = -1;
    damageDealt = 0;
    magicDamageDealt = 0;
    damageTaken = 0;
    criticalRate = 0;
    skillReCharge();
    updateHtml();
    document.getElementById(monsterStats.id).getElementsByClassName('hp')[0].innerHTML = monsterStats.hp;
}

//Weapon skill experience
function weaponSkill(monster, monsterStats) {
    if (player.level > monsterStats.level + 3) {
        var expgain = monsterStats.level / 2;
    }
    else {
        var expgain = monsterStats.level;

    };
    var subType = equippedItems.weapon.subType;

    if (player[subType + "Exp"] < player[subType + "MaxExp"]) {
        player[subType + "Exp"] = Math.floor(player[subType + "Exp"] + expgain);
    };
    if (player[subType + "Exp"] >= player[subType + "MaxExp"]) {
        player[subType + "Level"] += 1;
        player[subType + "Exp"] -= player[subType + "MaxExp"];
        player[subType + "MaxExp"] = Math.floor(player[subType + "MaxExp"] * 1.2);
    };
    CreateWeaponSkillHtml();
};

//experience gained from killing a monster
function monsterExperience(monster, monsterStats) {
    if (player.level > monsterStats.level + 2) {
        var expgain = ((monsterStats.baseExp / (player.level / monsterStats.level)) * player.expRate() / 2);
    }
    else {
        var expgain = (monsterStats.baseExp / (player.level / monsterStats.level)) * player.expRate();
    };
    if (player.experience < player.maxExperience) {
        player.experience = Math.floor(player.experience + expgain);
    };
    if (player.experience >= player.maxExperience) {
        player.level += 1;
        levelUp();
        player.stats += 10;
        player.experience = player.experience - player.maxExperience;
        player.maxExperience = Math.floor(player.maxExperience * 1.5);
        Log("<span style=\"color:blue\">You leveled up! Your current level is: </span>" + player.level);
    }
    else Log("You gain: " + Math.floor(expgain) + " experience!");
    updateHtml();
    monsterGold(monster, monsterStats);
};

//Player skill recharge
function skillReCharge() {
    for (spell in activeSkills) {
        if (activeSkills.hasOwnProperty(spell)) {
            var rechargedSkill = activeSkills[spell];
            activeSkills[spell].charge = activeSkills[spell].maxCharge();
        };
    };
};
//Experience gain for equipped items
function itemExperienceGain(monster, monsterStats) {
    var weaponExp = equippedItems.weapon.exp;
    var weaponMaxExp = equippedItems.weapon.maxExp;
    var weaponLevel = equippedItems.weapon.level;
    var weaponMaxLevel = equippedItems.weapon.maxLevel;
    var monsterExp = monsterStats.level;
    var weapon = equippedItems.weapon;
    if (weaponLevel != weaponMaxLevel) {
        if (weaponExp < weaponMaxExp) {
            weaponExp += monsterExp;
        };
        if (weaponExp >= weaponMaxExp) {
            weaponLevel += 1;
            equippedItems.weapon.minDamage += (1 * weapon.iLvl);
            equippedItems.weapon.maxDamage += (2 * weapon.iLvl);
            weaponExp = weaponExp - weaponMaxExp;
            weaponMaxExp = Math.floor(weaponMaxExp * 2)
            if (weapon.subType == "sword") {
                weapon.strength += Math.floor(weapon.iLvl + weapon.power);
                weapon.agility += Math.floor(weapon.iLvl + weapon.power);
                weapon.dexterity += Math.floor(weapon.iLvl + weapon.power);
            }
            else if (weapon.subType == "axe") {
                weapon.strength += Math.floor(weapon.iLvl + weapon.power);
                weapon.endurance += Math.floor(weapon.iLvl + weapon.power);
                weapon.agility += Math.floor(weapon.iLvl + weapon.power);
            }
            else if (weapon.subType == "bow") {
                weapon.strength += Math.floor(weapon.iLvl + weapon.power);
                weapon.agility += Math.floor(weapon.iLvl + weapon.power);
                weapon.dexterity += Math.floor(weapon.iLvl + weapon.power);
            }
            else if (weapon.subType == "mace") {
                weapon.strength += Math.floor(weapon.iLvl + weapon.power);
                weapon.endurance += Math.floor(weapon.iLvl + weapon.power);
                weapon.wisdom += Math.floor(weapon.iLvl + weapon.power);
            }
            else if (weapon.subType == "staff") {
                weapon.agility += Math.floor(weapon.iLvl + weapon.power);
                weapon.intelligence += Math.floor(weapon.iLvl + weapon.power);
                weapon.wisdom += Math.floor(weapon.iLvl + weapon.power);
            };
            
        };
        equippedItems.weapon.exp = weaponExp;
        equippedItems.weapon.maxExp = weaponMaxExp;
        equippedItems.weapon.level = weaponLevel;
        CreateEquipHtml()
        updateHtml();
    }
};

//gold gained from killing a monster
function monsterGold(monster, monsterStats) {
    var goldDrop = 0;
    var randomGold = Math.floor(Math.random() * ((monsterStats.level + 5) - monsterStats.level + 1) + monsterStats.level);
    goldDrop = Math.floor(randomGold * player.goldRate());
    player.gold += goldDrop;
    Log("You loot: " + goldDrop + " gold!");
    document.getElementById("gold").innerHTML = player.gold;
    monsterItemDrop(monster);

};

//Equip item function
function equipItem(id) {

    var item = playerInventory.filter(function (obj) {
        return obj.id === id
    })[0];
    if (item.itemType === "weapon") {
        if (equippedItems.weapon.isEquipped === true) {
            var oldId = equippedItems.weapon.id;
            unequipItem(oldId);
        }
        if (item.id === id) {
            equippedItems.weapon = item;
            equippedItems.weapon.isEquipped = true;
            //Check which weapon is equipped so you can gain stats and level up weapon mastery
            if (equippedItems.weapon.subType === "sword") {
                player.isSword = true;
            }
            else if (equippedItems.weapon.subType === "axe") {
                player.isAxe = true;
            }
            else if (equippedItems.weapon.subType === "mace") {
                player.isMace = true;
            }
            else if (equippedItems.weapon.subType === "staff") {
                player.isStaff = true;
            }
            else if (equippedItems.weapon.subType === "ranged") {
                player.isRanged = true;
            }
            var item = playerInventory.filter(function (obj) {
                return obj.id === id
            })[0];
            var index = playerInventory.indexOf(item, 0);
            if (index > -1) {
                playerInventory.splice(index, 1);
            };
        };
        CreateInventoryWeaponHtml();
        updateHtml();
    }
    else if (item.itemType === "offHand") {
        if (equippedItems.offHand.isEquipped === true) {
            var oldId = equippedItems.offHand.id
            unequipItem(oldId);
        };
        if (item.id === id) {
            equippedItems.offHand = item;
            equippedItems.offHand.isEquipped = true;
            var item = playerInventory.filter(function (obj) {
                return obj.id === id
            })[0];
            var index = playerInventory.indexOf(item, 0);
            if (index > -1) {
                playerInventory.splice(index, 1);
            };
        };
        CreateInventoryWeaponHtml();
        updateHtml();
    }
    else if (item.itemType === "armor") {
        if (equippedItems.armor.isEquipped === true) {
            var oldId = equippedItems.armor.id
            unequipItem(oldId);
        };
        if (item.id === id) {
            equippedItems.armor = item;
            equippedItems.armor.isEquipped = true;
            var item = playerInventory.filter(function (obj) {
                return obj.id === id
            })[0];
            var index = playerInventory.indexOf(item, 0);
            if (index > -1) {
                playerInventory.splice(index, 1);
            };
        };
        CreateInventoryWeaponHtml();
        updateHtml();
    }
    else if (item.subType === "ring") {
        if (equippedItems.ring.isEquipped === true) {
            var oldId = equippedItems.ring.id
            unequipItem(oldId);
        };
        if (item.id === id) {
            equippedItems.ring = item;
            equippedItems.ring.isEquipped = true;
            var item = playerInventory.filter(function (obj) {
                return obj.id === id
            })[0];
            var index = playerInventory.indexOf(item, 0);
            if (index > -1) {
                playerInventory.splice(index, 1);
            };
        };
        CreateInventoryWeaponHtml();
        updateHtml();
    }
    else if (item.subType === "amulet") {
        if (equippedItems.amulet.isEquipped === true) {
            var oldId = equippedItems.amulet.id
            unequipItem(oldId);
        };
        if (item.id === id) {
            equippedItems.amulet = item;
            equippedItems.amulet.isEquipped = true;
            var item = playerInventory.filter(function (obj) {
                return obj.id === id
            })[0];
            var index = playerInventory.indexOf(item, 0);
            if (index > -1) {
                playerInventory.splice(index, 1);
            };
        };
        CreateInventoryWeaponHtml();
        updateHtml();
    }
    else if (item.subType === "talisman") {
        if (equippedItems.talisman.isEquipped === true) {
            var oldId = equippedItems.talisman.id
            unequipItem(oldId);
        };
        if (item.id === id) {
            equippedItems.talisman = item;
            equippedItems.talisman.isEquipped = true;
            var item = playerInventory.filter(function (obj) {
                return obj.id === id
            })[0];
            var index = playerInventory.indexOf(item, 0);
            if (index > -1) {
                playerInventory.splice(index, 1);
            };
        };
        CreateInventoryWeaponHtml();
        updateHtml();
    }
    else if (item.itemType === "BackPack") {
        if (equippedItems.backpack.isEquipped === true) {
            var oldId = equippedItems.backpack.id
            unequipItem(oldId);
        };
        if (item.id === id) {
            equippedItems.backpack = item;
            equippedItems.backpack.isEquipped = true;
            var item = playerInventory.filter(function (obj) {
                return obj.id === id
            })[0];
            var index = playerInventory.indexOf(item, 0);
            if (index > -1) {
                playerInventory.splice(index, 1);
            };
        };
        CreateInventoryWeaponHtml();
        updateHtml();
    };
    CreateWeaponSkillHtml();
    CreateEquipHtml();
    updateHtml();
    skillChargeFill();
};

//Unequip item function
function unequipItem(id, oldId) {
    //item id for every slot
    var weaponId = id;
    var offHandId = id;
    var armorId = id;
    var ringId = id;
    var amuletId = id;
    var talismanId = id;
    //Weapon unequip
    if (weaponId === equippedItems.weapon.id || weaponId === oldId) {
        equippedItems.weapon.isEquipped = false;
        playerInventory.push(equippedItems.weapon);
        if (equippedItems.weapon.subType === "sword") {
            player.isSword = false;
        }
        else if (equippedItems.weapon.subType === "axe") {
            player.isAxe = false;
        }
        else if (equippedItems.weapon.subType === "mace") {
            player.isMace = false;
        }
        else if (equippedItems.weapon.subType === "staff") {
            player.isStaff = false;
        }
        else if (equippedItems.weapon.subType === "ranged") {
            player.isRanged = false;
        };
        equippedItems.weapon = {
            strength: 0,
            endurance: 0,
            agility: 0,
            dexterity: 0,
            intelligence: 0,
            wisdom: 0,
            luck: 0,
            minDamage: 0,
            maxDamage: 0
        };
        CreateInventoryWeaponHtml();
        updateHtml();
    }
        //Off-Hand unequip
    else if (offHandId === equippedItems.offHand.id || offHandId == oldId) {
        equippedItems.offHand.isEquipped = false;
        playerInventory.push(equippedItems.offHand);
        equippedItems.offHand = {
            strength: 0,
            endurance: 0,
            agility: 0,
            dexterity: 0,
            intelligence: 0,
            wisdom: 0,
            luck: 0,
            defense: 0
        };
        CreateInventoryWeaponHtml();
        updateHtml();
    }
        //Armor unequip
    else if (armorId === equippedItems.armor.id || armorId == oldId) {
        equippedItems.armor.isEquipped = false;
        playerInventory.push(equippedItems.armor);
        equippedItems.armor = {
            strength: 0,
            endurance: 0,
            agility: 0,
            dexterity: 0,
            intelligence: 0,
            wisdom: 0,
            luck: 0,
            defense: 0
        };
        CreateInventoryWeaponHtml();
        updateHtml();
    }
        //Ring unequip
    else if (ringId === equippedItems.ring.id || ringId === oldId) {
        equippedItems.ring.isEquipped = false;
        playerInventory.push(equippedItems.ring);
        equippedItems.ring = {
            strength: 0,
            endurance: 0,
            agility: 0,
            dexterity: 0,
            intelligence: 0,
            wisdom: 0,
            luck: 0,
            defense: 0,
            goldRate: 0,
            expRate: 0,
            dropRate: 0
        };
        CreateInventoryWeaponHtml();
        updateHtml();
    }
        //Amulet unequip
    else if (amuletId === equippedItems.amulet.id || amuletId === oldId) {
        equippedItems.amulet.isEquipped = false;
        playerInventory.push(equippedItems.amulet);
        equippedItems.amulet = {
            strength: 0,
            endurance: 0,
            agility: 0,
            dexterity: 0,
            intelligence: 0,
            wisdom: 0,
            luck: 0,
            defense: 0,
            goldRate: 0,
            expRate: 0,
            dropRate: 0
        };
        CreateInventoryWeaponHtml();
        updateHtml();
    }
        //Talisman unequip
    else if (talismanId === equippedItems.talisman.id || talismanId === oldId) {
        equippedItems.talisman.isEquipped = false;
        playerInventory.push(equippedItems.talisman);
        equippedItems.talisman = {
            strength: 0,
            endurance: 0,
            agility: 0,
            dexterity: 0,
            intelligence: 0,
            wisdom: 0,
            luck: 0,
            defense: 0,
            goldRate: 0,
            expRate: 0,
            dropRate: 0
        };
        CreateInventoryWeaponHtml();
        updateHtml();
    };
    CreateEquipHtml();
    CreateWeaponSkillHtml();
    updateHtml();
    skillChargeFill();
};


CreateWeaponSkillHtml();
CreateInventoryWeaponHtml();
CreateEquipHtml();

var checkBoxCommon = false;
var checkBoxUncommon = false;
var checkBoxRare = false;
var checkBoxEpic = false;
function handleClick() {
    checkBoxCommon = document.getElementById("common").checked;
    checkBoxUncommon = document.getElementById("uncommon").checked;
    checkBoxRare = document.getElementById("rare").checked;
    checkBoxEpic = document.getElementById("epic").checked;
    player.autoBattle = document.getElementById("autoBattle").checked;
};
