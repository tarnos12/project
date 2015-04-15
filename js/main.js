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

var currentGameVersion = 1.41;
//PLAYER STATS
var player = {
    gameVersion: 1.41,
    isDead: false,
    itemIdNumber: 1,
    stats: 0,
    gold: 0,
    autoBattle: false, // testing
    level: 1,
    experience: 0,
    maxExperience: 100,
    backpackUpgrade: 0,
    dropRate: function () {
        return (1 + (player.totalLuck() + equippedItems.ring.dropRate + equippedItems.amulet.dropRate + equippedItems.talisman.dropRate) / 500);
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
            equippedItems.armor.strength +
            equippedItems.ring.strength +
            equippedItems.amulet.strength +
            equippedItems.talisman.strength);
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
            equippedItems.armor.endurance +
            equippedItems.ring.endurance +
            equippedItems.amulet.endurance +
            equippedItems.talisman.endurance);
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
            equippedItems.armor.agility +
            equippedItems.ring.agility +
            equippedItems.amulet.agility +
            equippedItems.talisman.agility);
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
            equippedItems.armor.dexterity +
            equippedItems.ring.dexterity +
            equippedItems.amulet.dexterity +
            equippedItems.talisman.dexterity);
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
            equippedItems.armor.intelligence +
            equippedItems.ring.intelligence +
            equippedItems.amulet.intelligence +
            equippedItems.talisman.intelligence);
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
            equippedItems.armor.wisdom +
            equippedItems.ring.wisdom +
            equippedItems.amulet.wisdom +
            equippedItems.talisman.wisdom);
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
            equippedItems.armor.luck +
            equippedItems.ring.luck +
            equippedItems.amulet.luck +
            equippedItems.talisman.luck);
    },
    totalLuck: function () {
        return Math.floor(
            player.baseLuck +
            player.equipLuck());
    },
    //Health
    health: 50,
    maxhealth: function () {
        return (35 + player.totalEndurance() * 3);
    },
    hpregen: function () {
        return Math.floor((player.totalEndurance()) / 3);
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
            1 + (player.totalStrength() * 0.4) +
            equippedItems.weapon.minDamage);
    },
    maxDamage: function () {
        return Math.floor(
            2 + (player.totalStrength() * 0.6) +
            equippedItems.weapon.maxDamage);
    },
    //Secondary
    accuracy: function () {
        return Math.floor(95 + (player.totalAgility() * 0.02 + player.totalLuck() * 0.01));
    },
    defense: function () {
        return (
            (player.totalDexterity() * 0.5) +
            equippedItems.armor.defense +
            equippedItems.ring.defense +
            equippedItems.amulet.defense +
            equippedItems.talisman.defense);
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
        if ((10 + (player.totalAgility() * 0.03 + player.totalLuck() * 0.01)) > 50) {
            return 50;
        }
        else {
            return (10 + (player.totalAgility() * 0.03 + player.totalLuck() * 0.01));
        }
    },
    criticalDamage: function () {
        return (1.48 + player.totalStrength() * 0.003 + player.totalDexterity() * 0.002).toFixed(2);
    },
    //Sword
    swordLevel: 0,
    swordExp: 0,
    swordMaxExp: 10,
    isSword: false,
    swordStrength: function () {
        if (player.isSword === true) {
            return (player.swordLevel * 2);
        }
        else if (player.isSword === false) {
            return (player.swordLevel * 0);
        }
    },
    swordAgility: function () {
        if (player.isSword === true) {
            return (player.swordLevel * 1.5);
        }
        else if (player.isSword === false) {
            return (player.swordLevel * 0);
        }
    },
    //Axe
    axeLevel: 0,
    axeExp: 0,
    axeMaxExp: 10,
    isAxe: false,
    axeStrength: function () {
        if (player.isAxe === true) {
            return (player.axeLevel * 2);
        }
        else if (player.isAxe === false) {
            return (player.axeLevel * 0);
        }
    },
    axeEndurance: function () {
        if (player.isAxe === true) {
            return (player.axeLevel * 1.5);
        }
        else if (player.isAxe === false) {
            return (player.axeLevel * 0);
        }
    },
    //Mace
    maceLevel: 0,
    maceExp: 0,
    maceMaxExp: 10,
    isMace: false,
    maceEndurance: function () {
        if (player.isMace === true) {
            return (player.maceLevel * 2);
        }
        else if (player.isMace === false) {
            return (player.maceLevel * 0);
        }
    },
    maceWisdom: function () {
        if (player.isMace === true) {
            return (player.maceLevel * 1.5);
        }
        else if (player.isMace === false) {
            return (player.maceLevel * 0);
        }
    },
    //Staff
    staffLevel: 0,
    staffExp: 0,
    staffMaxExp: 10,
    isStaff: false,
    staffIntelligence: function () {
        if (player.isStaff === true) {
            return (player.staffLevel * 2);
        }
        else if (player.isStaff === false) {
            return (player.staffLevel * 0);
        }
    },
    staffWisdom: function () {
        if (player.isStaff === true) {
            return (player.staffLevel * 1.5);
        }
        else if (player.isStaff === false) {
            return (player.staffLevel * 0);
        }
    },
    //Ranged
    rangedLevel: 0,
    rangedExp: 0,
    rangedMaxExp: 10,
    isRanged: false,
    rangedStrength: function () {
        if (player.isRanged === true) {
            return (player.rangedLevel * 1.5);
        }
        else if (player.isRanged === false) {
            return (player.rangedLevel * 0);
        }
    },
    rangedDexterity: function () {
        if (player.isRanged === true) {
            return (player.rangedLevel * 2);
        }
        else if (player.isRanged === false) {
            return (player.rangedLevel * 0);
        }
    }
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
var pot = 0;
var spot = 0;
var mpot = 0;
var battleTurn = 1;
//Array to store player items
var playerInventory = [];
var damageDealt = 0;
var damageTaken = 0;
var criticalRate = 0;
var enemyBlock = 0;
var accuracyRate = 0;
function attack(monster) {
    battleTurn = 1;
    monsterStats = monster.Stats;
    while (battleTurn > 0 && battleTurn <= 20) {
        if (monsterStats.hp >= 1 & player.isDead == false) {
            playerAttack(monster);
            if (monsterStats.hp < 1) {
                monsterKilled(monster);
            } else {
                monsterAttack(monster);
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
        Log("<span style=\"color:blue\">You dealt: </span>" + damageDealt + " " + "in total");
        Log("<span style=\"color:blue\">Turns: </span>" + (battleTurn - 1));
        Log("<span style=\"color:blue\">Draw!</span>");
        Log("--------------------------------------------");
        battleTurn = -1;
        damageDealt = 0;
        damageTaken = 0;
    };
};

//Player miss/hit chance
function playerAttack(monster) {
    document.getElementById("manaCost").innerHTML = monsterStats.manaCost + " Mana/s";
    if (player.autoBattle == true) {
            autoBattle(monster);
        }
    var playerHitChance = (player.accuracy() - monsterStats.eva) / 100;
    var randomHitChance = Math.random();
    if (playerHitChance > randomHitChance) {
        playerCriticalChance(monster);
        accuracyRate += 1;
    };
};

//player critical chance
function playerCriticalChance(monster) {
    var playerCriticalChance = player.criticalChance() / 100;

    var randomCritChance = Math.random();

    if (playerCriticalChance > randomCritChance) {
        playerCriticalDamage(monster);
        criticalRate += 1;
    }
    else {
        playerDamage(monster);
    };
};

//player critical damage calculation
function playerCriticalDamage(monster) {
    var damage = Math.floor(Math.random() * (player.maxDamage() - player.minDamage() + 1)) + player.minDamage();
    damage = Math.floor(damage * player.criticalDamage() * (10 / (10 + monsterStats.def)));
    if (damage >= 1) {
        playerDamageDeal(damage, monster);
    };
};

//player normal damage calculation
function playerDamage(monster) {
    var damage = Math.floor(Math.random() * (player.maxDamage() - player.minDamage() + 1)) + player.minDamage();
    damage = Math.floor(damage * (10 / (10 + monsterStats.def)));
    if (damage >= 1) {
        playerDamageDeal(damage, monster);
    };
};

//player damage deal (base or critical)
function playerDamageDeal(damage, monster) {

    monsterStats.hp -= damage;
    damageDealt += damage;
    document.getElementById(monsterStats.id).getElementsByClassName('hp')[0].innerHTML = monsterStats.hp;
    //Add more stuff like "bonus elemental damage from passive skills or bonus weapon damage
    itemExperienceGain(monster);
};

//monster hit chance
function monsterAttack(monster) {

    var monsterHitChance = (monsterStats.acc - player.evasion()) / 100;

    var randomHitChance = Math.random();

    if (monsterHitChance > randomHitChance) {
        monsterDamage(monster);
    };
};

//monster damage calculation
function monsterDamage(monster) {
    var dmg = Math.floor(Math.random() * (monsterStats.maxDmg - monsterStats.minDmg + 1)) + monsterStats.minDmg;
    dmg = Math.floor(dmg * (10 / (10 + player.defense())));
    if (dmg >= 1) {
        monsterDamageDeal(dmg, monster);
    };
};

//monster damage deal (base or critical)
function monsterDamageDeal(dmg, monster) {
    player.health = player.health - dmg;
    damageTaken += dmg;
    document.getElementById("health").innerHTML = player.health;
    if (player.health < 1) {
        playerDead(monster);
    };
};

//player dead function
function playerDead(monster) {

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
    Log("<span style=\"color:blue\">You dealt: </span>" + damageDealt + " " + "in total");
    Log("<span style=\"color:blue\">Turns: </span>" + battleTurn);
    Log("<span style=\"color:red\">You have died!</span>");
    Log("--------------------------------------------");
    Log("You need to wait 5 seconds before you can fight again!");
    battleTurn = -1;
    damageDealt = 0;
    damageTaken = 0;
    criticalRate = 0;
}

//monster kill function
function monsterKilled(monster) {
    monsterStats.hp = monsterStats.maxHp;
    monsterExperience(monster);
    weaponSkill(monster);
    monsterStats.killCount++;
    Log("<span style=\"color:blue\">Critical Rating: </span>" + ((criticalRate / battleTurn) * 100).toFixed(0) + " " + "%");
    Log("<span style=\"color:red\">Enemy dealt: </span>" + damageTaken + " " + "damage");
    Log("<span style=\"color:blue\">You dealt: </span>" + damageDealt + " " + "in total");
    Log("<span style=\"color:blue\">Turns: </span>" + battleTurn);
    Log("--------------------------------------------");
    battleTurn = -1;
    damageDealt = 0;
    damageTaken = 0;
    criticalRate = 0;
    document.getElementById(monsterStats.id).getElementsByClassName('hp')[0].innerHTML = monsterStats.hp;
}

//Weapon skill experience
function weaponSkill(monster) {
    var expgain = monsterStats.level;
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
function monsterExperience(monster) {

    var expgain = (monsterStats.baseExp / (player.level / 3)) * player.expRate();
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
    monsterGold(monster);
};

//Experience gain for equipped items
function itemExperienceGain(monster) {
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
            equippedItems.weapon.minDamage += (1 * weaponLevel)
            equippedItems.weapon.maxDamage += (2 * weaponLevel)
            weaponExp = weaponExp - weaponMaxExp;
            weaponMaxExp = Math.floor(weaponMaxExp * 1.1)
                if (weapon.subType == "Sword", "Axe", "Bow") {
                    weapon.minDamage += weapon.iLvl + weapon.power + 2;
                    weapon.maxDamage += weapon.iLvl + weapon.power + 2;
                    weapon.strength += weapon.iLvl + weapon.power + 2;
                    weapon.endurance += weapon.iLvl + weapon.power + 1;
                    weapon.agility += weapon.iLvl + weapon.power + 2;
                    weapon.dexterity += weapon.iLvl + weapon.power + 2;
                }
                else if (weapon.subType == "Mace", "Staff") {
                    weapon.minDamage += weapon.iLvl + weapon.power + 2;
                    weapon.maxDamage += weapon.iLvl + weapon.power + 2;
                    weapon.strength += weapon.iLvl + weapon.power + 1;
                    weapon.endurance += weapon.iLvl + weapon.power + 2;
                    weapon.intelligence += weapon.iLvl + weapon.power + 2;
                    weapon.wisdom += weapon.iLvl + weapon.power + 2;
                }
            
        };
        equippedItems.weapon.exp = weaponExp;
        equippedItems.weapon.maxExp = weaponMaxExp;
        equippedItems.weapon.level = weaponLevel;
        CreateEquipHtml()
    }
};

//gold gained from killing a monster
function monsterGold(monster) {
    var randomGold = Math.floor(Math.random() * ((monsterStats.level + 5) - monsterStats.level + 1) + monsterStats.level);
    goldDrop = randomGold * player.goldRate();
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
    };
    CreateWeaponSkillHtml();
    CreateEquipHtml();
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
            defense: 0
        };
        CreateInventoryWeaponHtml();
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
            defense: 0
        };
        CreateInventoryWeaponHtml();
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
            defense: 0
        };
        CreateInventoryWeaponHtml();
    };
    CreateEquipHtml();
    CreateWeaponSkillHtml();
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
