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
        logTemp += logData[i];
    }
    document.getElementById('logConsole').innerHTML = logTemp;
};

var currentGameVersion = 1.5;
//PLAYER STATS
var player = {
    properties:{
        gameVersion: 1.5,
        heroRace: '',
        sound: 'off',
        hardcoreMode: false,
        isDead: false,
        runOnce: false,
        isAuto: false,
        isSword: false,
        isAxe: false,
        isMace: false,
        isStaff: false,
        isRanged: false,
        isFist: false,
        itemIdNumber: 1,
        stats: 0,
        skillPoints: 0,
        gold: 0,
        autoBattle: false, // testing
        level: 1,
        experience: 0,
        maxExperience: 100,
        backpackUpgrade: 0,

        //Strength
        baseStrength: 5,

        //Endurance
        baseEndurance: 5,

        //Agility
        baseAgility: 5,

        //Dexterity
        baseDexterity: 5,

        //Intelligence
        baseIntelligence: 5,

        //Wisdom
        baseWisdom: 5,

        //Luck
        baseLuck: 5,

        //Health
        health: 500,

        //Mana
        mana: 10,
    },
    functions:{
        dropRate: function () {
            return (1 + ((player.functions.totalLuck() / 500) + (equippedItems.ring.dropRate + equippedItems.amulet.dropRate + equippedItems.talisman.dropRate) / 100)) * bonusDrop;
        },
        expRate: function () {
            return (1 + ((equippedItems.ring.expRate + equippedItems.amulet.expRate + equippedItems.talisman.expRate) / 100)) * bonusExp;
        },
        goldRate: function () {
            return ((1 + (equippedItems.ring.goldRate + equippedItems.amulet.goldRate + equippedItems.talisman.goldRate) / 100)) * bonusGold;
        },
        inventory: function () {
            return Math.floor(20 + (player.functions.totalStrength() / 10) + player.properties.backpackUpgrade); //Add backpacks "new item type"
        },
        equipStrength: function () {
            return Math.floor(
                equippedItems.weapon.strength +
                equippedItems.offHand.strength +
                equippedItems.armor.strength);
        },
        masteryStrength: function (){
            return (weaponMastery.axe.axeStrength() *
                weaponMastery.ranged.rangedStrength() *
                weaponMastery.sword.swordStrength())
        },
        totalStrength: function () {
            return Math.floor(
                (player.properties.baseStrength +
                player.functions.equipStrength()) *
                player.functions.masteryStrength());
        },
        masteryEndurance: function (){
            return (weaponMastery.mace.maceEndurance() *
            weaponMastery.axe.axeEndurance());
        },
        equipEndurance: function () {
            return Math.floor(
                equippedItems.weapon.endurance +
                equippedItems.offHand.endurance +
                equippedItems.armor.endurance);
        },
        totalEndurance: function () {
            return Math.floor((
                player.properties.baseEndurance +
                player.functions.equipEndurance()) *
                player.functions.masteryEndurance());
        },
        masteryAgility: function (){
            return (weaponMastery.sword.swordAgility());
        },
        equipAgility: function () {
            return Math.floor(
                equippedItems.weapon.agility +
                equippedItems.offHand.agility +
                equippedItems.armor.agility);
        },
        totalAgility: function () {
            return Math.floor((
                player.properties.baseAgility +
                player.functions.equipAgility()) *
                player.functions.masteryAgility());
        },
        masteryDexterity: function (){
            return (weaponMastery.ranged.rangedDexterity());
        },
        equipDexterity: function () {
            return Math.floor(
                equippedItems.weapon.dexterity +
                equippedItems.offHand.dexterity +
                equippedItems.armor.dexterity);
        },
        totalDexterity: function () {
            return Math.floor((
                player.properties.baseDexterity +
                player.functions.equipDexterity()) *
                player.functions.masteryDexterity());
        },
        masteryIntelligence: function (){
            return (weaponMastery.staff.staffIntelligence());
        },
        equipIntelligence: function () {
            return Math.floor(
                equippedItems.weapon.intelligence +
                equippedItems.offHand.intelligence +
                equippedItems.armor.intelligence);
        },
        totalIntelligence: function () {
            return Math.floor(((
                (player.properties.baseIntelligence +
                player.functions.equipIntelligence()) *
                player.functions.masteryIntelligence()) *
                weaponSkillList.staff.spellSimulacrum.damage()) * bonusSpellDamage);
        },
        masteryWisdom: function (){
            return (weaponMastery.staff.staffWisdom() *
                weaponMastery.mace.maceWisdom());
        },
        equipWisdom: function () {
            return Math.floor(
                equippedItems.weapon.wisdom +
                equippedItems.offHand.wisdom +
                equippedItems.armor.wisdom);
        },
        totalWisdom: function () {
            return Math.floor(((
                player.properties.baseWisdom +
                player.functions.equipWisdom()) *
                player.functions.masteryWisdom()) * bonusSpellDamage);
        },
        equipLuck: function () {
            return Math.floor(
                equippedItems.weapon.luck +
                equippedItems.offHand.luck +
                equippedItems.armor.luck);
        },
        totalLuck: function () {
            return Math.floor(
                player.properties.baseLuck +
                player.functions.equipLuck());
        },
        maxhealth: function () {
            return (475 + player.functions.totalEndurance() * 5);
        },
        hpregen: function () {
            return Math.floor((20 + (player.functions.totalEndurance()) / 3) * bonusRegen);
        },
        //Mana
        maxMana: function () {
            return Math.floor(7 +
                player.functions.totalWisdom() * 0.5 +
                player.functions.totalIntelligence() * 0.1);
        },
        manaRegen: function () {
            return ((player.functions.totalWisdom() / 10) * bonusRegen);
        },
        //Damage
        minDamage: function () {
            return Math.floor((
                3 + (player.functions.totalStrength() * 0.4) +
                equippedItems.weapon.minDamage) * bonusDamage);
        },
        maxDamage: function () {
            return Math.floor((
                5 + (player.functions.totalStrength() * 0.6) +
                equippedItems.weapon.maxDamage + weaponSkillList.sword.swordFinesse.damage()) * bonusDamage);
        },
        //Secondary
        accuracy: function () {
            return Math.floor(95 + (player.functions.totalAgility() * 0.02 + player.functions.totalLuck() * 0.01));
        },
        defense: function () {
            return (
                (player.functions.totalAgility() * 0.1) +
                equippedItems.armor.defense +
                equippedItems.offHand.defense);
        },
        evasion: function () {
            if ((5 + (player.functions.totalAgility() * 0.03 + player.functions.totalLuck() * 0.02)) > 20) {
                return 20;
            }
            else {
                return (5 + (player.functions.totalAgility() * 0.03 + player.functions.totalLuck() * 0.02));
            }
        },
        criticalChance: function () {
            if ((10 + (player.functions.totalDexterity() * 0.03 + player.functions.totalLuck() * 0.01)) > 50) {
                return 50 + weaponSkillList.ranged.archerFocus.damage();
            }
            else {
                return (10 + (player.functions.totalDexterity() * 0.03 + player.functions.totalLuck() * 0.01) + weaponSkillList.ranged.archerFocus.damage());
            }
        },
        criticalDamage: function () {
            return (0.5 + (player.functions.totalDexterity()) * 0.05);
        },
        blockChance: function () {
            return Math.floor(weaponSkillList.sword.parryAndRiposte.blockChance());
        },
        blockAmount: function () {
            return Math.floor(weaponSkillList.sword.parryAndRiposte.blockAmount());
        },
        counterChance: function () {
            return Math.floor(weaponSkillList.sword.parryAndRiposte.counterChance());
        },
        counterDamage: function () {
            return Math.floor(weaponSkillList.sword.parryAndRiposte.counterDamage());
        },
        lifeSteal: function () {
            return Math.floor(weaponSkillList.sword.savageStrike.lifeStealAmount());
        },
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
        defense: 0,
        exp: 0,
        maxExp: 0,
        subType: "fist",
    },
    offHand: {
        strength: 0,
        endurance: 0,
        agility: 0,
        dexterity: 0,
        intelligence: 0,
        wisdom: 0,
        luck: 0,
        defense: 0,
        subType: "fist",
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

var maxLogLines = 100;
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
var blockRate = 0;
var counterDamage = 0;
var lifeStealAmount = 0;
var magicDamageDealt = 0;
var damageTaken = 0;
var criticalRate = 0;
var enemyBlock = 0;
var accuracyRate = 0;
var monsterDamage = 0;

function attack(monsterStat) {
    battleTurn = 1;
    var monsterStats = monsterStat.Stats;
    while (battleTurn > 0 && battleTurn <= 20) {
        if (monsterStats.hp >= 1 && player.properties.isDead == false) {
            playerAttack(monsterStat, monsterStats);
            if (monsterStats.hp < 1) {
                monsterKilled(monsterStat, monsterStats);
            } else {
                monsterAttack(monsterStat, monsterStats);
            };
        }
        else {
            Log("<span style=\"color:red\">You can not fight whilst you are dead.</span>");
            break;
        };
        battleTurn += 1;
    };
    DrawBattle();
};
//There is a bug with Draw, displaying NaN critRate, and battleTurns 0...for some odd reason...
function DrawBattle() {
    if (battleTurn === 21) {
        displayLogInfo();
        battleTurn = -1;
    };
};

//Player miss/hit chance
function playerAttack(monsterStat, monsterStats) {
    CreateMonsterHtml()
    document.getElementById("manaCost").innerHTML = monsterStats.manaCost + " Mana/s";
    if (player.properties.autoBattle == true && player.properties.isAuto == false) {
        player.isAuto = true;
        autoAttack(monsterStat, monsterStats);
    };
    var playerHitChance = (player.functions.accuracy() - monsterStats.eva) / 100;
    var randomHitChance = Math.random();
    if (playerHitChance > randomHitChance) { // accuracy, if you miss then do "nothing" so it's "else { };"
        playerCriticalChance(monsterStat, monsterStats);
        accuracyRate += 1;
    }
    else {
    };
};

//player critical chance
function playerCriticalChance(monsterStat, monsterStats) {
    var playerCriticalChance = player.functions.criticalChance() / 100;

    var randomCritChance = Math.random();

    if (playerCriticalChance > randomCritChance) {
        playerCriticalDamage(monsterStat, monsterStats);
        criticalRate += 1;
    }
    else {
        playerDamage(monsterStat, monsterStats);
    };
};

//player critical damage calculation
function playerCriticalDamage(monsterStat, monsterStats) {
    var damage = Math.floor(Math.random() * (player.functions.maxDamage() - player.functions.minDamage() + 1)) + player.functions.minDamage();
    damage = Math.floor(damage * player.functions.criticalDamage() * (10 / (10 + monsterStats.def)));
    if (damage >= 1) {
        playerDamageDeal(damage, monsterStat, monsterStats);
    };
};

//player normal damage calculation
function playerDamage(monsterStat, monsterStats) {
    var damage = Math.floor(Math.random() * (player.functions.maxDamage() - player.functions.minDamage() + 1)) + player.functions.minDamage();
    damage = Math.floor(damage * (10 / (10 + monsterStats.def)));
    if (damage >= 1) {
        playerDamageDeal(damage, monsterStat, monsterStats);
    };
};

//player damage deal (base or critical)
function playerDamageDeal(damage, monsterStat, monsterStats) {
    for (var spell in activeSpells) {
        if (activeSpells.hasOwnProperty(spell)) {
            var selectedSpell = activeSpells[spell];
            if (selectedSpell.isActive == true && selectedSpell.charge > 0) {
                magicDamage += selectedSpell.damage();
                //console.log (selectedSpell.name + " damage: " + selectedSpell.damage())
                selectedSpell.charge -= 1;
            };
        };
    };
    for (var weapon in weaponSkillList) {
        if (weaponSkillList.hasOwnProperty(weapon)) {
            var weaponSkillStat = weaponSkillList[weapon];
            for (var skill in weaponSkillStat) {
                if (weaponSkillStat.hasOwnProperty(skill)) {
                    var skillDamage = weaponSkillStat[skill];
                    if (skillDamage.charge >= 1) {
                        if (skillDamage.type == "damage") {
                            if (skillDamage.type2 == "physycal") {
                                damage += skillDamage.damage();
                                skillDamage.charge -= 1;
                            }
                            else if (skillDamage.type2 == "magical") {
                                magicDamage += skillDamage.damage();
                                //console.log("Turn: " + battleTurn + " " + skillDamage.name + " damage: " + skillDamage.damage())
                                skillDamage.charge -= 1;
                            }
                        };
                        if (skillDamage.type == "magicDamageBuff") {
                            var randomChance = Math.floor((Math.random() * 100) + 1);
                            if (randomChance < skillDamage.chance()) {
                                magicDamage += skillDamage.damage()
                                //console.log("Turn: " + battleTurn + " " + skillDamage.name + " damage: " + skillDamage.damage())
                            }
                        }
                        if (skillDamage.type == "buff") {
                            damage += skillDamage.damage();
                            skillDamage.charge -= 1;
                        };
                    };
                };
                if (skillDamage.charge < 1) {
                    skillDamage.charge += skillDamage.cooldown;
                };
            };
        };
    };
    if (player.functions.lifeSteal() > 0) {
        var lifeSteal = Math.floor(damage * (player.functions.lifeSteal() / 100));
        lifeStealAmount += lifeSteal;
        player.properties.health += lifeSteal;
        if (player.properties.health > player.functions.maxhealth()) {
            player.properties.health = player.functions.maxhealth();
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
function monsterAttack(monsterStat, monsterStats) {
    var monsterHitChance = (monsterStats.acc - player.functions.evasion()) / 100;
    var randomHitChance = Math.random();
    if (monsterHitChance > randomHitChance) {
        monsterDmg(monsterStat, monsterStats);
    };
};

//monster damage calculation
function monsterDmg(monsterStat, monsterStats) {
    monsterDamage = Math.floor(Math.random() * (monsterStats.maxDmg - monsterStats.minDmg + 1)) + monsterStats.minDmg;
    monsterDamage = Math.floor(monsterDamage * (30 / (30 + player.functions.defense())));
    if (monsterDamage >= 1) {
        monsterDamageDeal(monsterDamage, monsterStat, monsterStats);
    };
};

//monster damage deal (base or critical)
function monsterDamageDeal(monsterDamage, monsterStat, monsterStats) {
    var randomCounterNumber = Math.floor((Math.random() * 100) + 1);
    var randomBlockNumber = Math.floor((Math.random() * 100) + 1);
    if (randomCounterNumber <= player.functions.counterChance()) {
        var counterDamageDealt = Math.floor(monsterDamage * (player.functions.counterDamage() / 100));
        monsterStats.hp -= counterDamageDealt;
        counterDamage += counterDamageDealt;
    };
    if (randomBlockNumber <= player.functions.blockChance()) {
        if (monsterDamage >= player.functions.blockAmount()) {
            monsterDamage -= player.functions.blockAmount();
            blockRate += player.functions.blockAmount();
        }
        else if (monsterDamage < player.functions.blockAmount()) {
            blockRate += monsterDamage;
            monsterDamage = 0;
        };
    }; 
    player.properties.health = player.properties.health - monsterDamage;
    damageTaken += monsterDamage;
    document.getElementById("health").innerHTML = player.properties.health + "/" + player.functions.maxhealth();
    document.getElementById(monsterStats.id).getElementsByClassName('hp')[0].innerHTML = monsterStats.hp;
    if (player.properties.health < 1) {
        playerDead(monsterStat, monsterStats);
    };
    if (monsterStats.hp < 1) {
        monsterKilled(monsterStat, monsterStats);
    };
};

//player dead function
function playerDead(monsterStat, monsterStats) {
    if (player.properties.hardcoreMode === false) {
        var goldLost = 0;
        var expLost = 0;
        player.properties.isDead = true;
        player.properties.health = 0;
        playerRevive();
        goldLost = Math.floor(player.properties.gold - (player.properties.gold / 1.2));
        player.properties.gold = Math.floor(player.properties.gold / 1.2);
        expLost = Math.floor(player.properties.experience - (player.properties.experience / 1.2));
        player.properties.experience = Math.floor(player.properties.experience / 1.2);
        //monsterStats.hp = monsterStats.maxHp;
        document.getElementById("health").innerHTML = player.properties.health;
        document.getElementById("gold").innerHTML = player.properties.gold;
        document.getElementById("experience").innerHTML = player.properties.experience;
        displayLogInfo();
        Log("<span class =\"bold\" style=\"color:red\">You lost </span>" + goldLost + "gold.");
        Log("<span class =\"bold\" style=\"color:red\">You lost </span>" + expLost + "experience.");
        Log("<span class =\"bold\" style=\"color:red\">You have died!</span>");
        Log("You need to wait 5 seconds before you can fight again!");
        battleTurn = -1;
        skillReCharge();
        updateHtml();
    }
    else {
        reset();
        pageReload();
    };
};

//monster kill function
function monsterKilled(monsterStat, monsterStats) {
    monsterStats.hp = monsterStats.maxHp;
    itemExperienceGain(monsterStat, monsterStats);
    monsterExperience(monsterStat, monsterStats);
    weaponSkill(monsterStat, monsterStats);
    monsterStats.killCount++;
    displayLogInfo();
    battleTurn = -1;
    skillReCharge();
    updateHtml();
    document.getElementById(monsterStats.id).getElementsByClassName('hp')[0].innerHTML = monsterStats.hp;
};

//Weapon skill experience
function weaponSkill(monsterStat, monsterStats) {
    if (player.properties.level > monsterStats.level + 3) {
        var expgain = monsterStats.level / 2;
    }
    else {
        var expgain = monsterStats.level;
    };
    var subType = equippedItems.weapon.subType;
    var itemStat = weaponMastery[subType];
    if (weaponMastery[subType] !== undefined) {
        if (weaponMastery[subType]["experience"] < weaponMastery[subType]["maxExperience"]) {
            weaponMastery[subType]["experience"] = Math.floor(weaponMastery[subType]["experience"] + expgain);
        };
        if (weaponMastery[subType]["experience"] >= weaponMastery[subType]["maxExperience"]) {
            weaponMastery[subType]["level"] += 1;
            weaponMastery[subType]["experience"] -= weaponMastery[subType]["maxExperience"];
            weaponMastery[subType]["maxExperience"] = Math.floor(weaponMastery[subType]["maxExperience"] * 1.2);
            Log("<span style=\"color:green\">You gained level in " + weaponMastery[subType].name + " Mastery!</span>");
            CreateWeaponSkillHtml();
        };
    };
    updateBar();
};
function updateBar() {
    var subType = equippedItems.weapon.subType;
    var itemStat = weaponMastery[subType];
    var weaponExp = (Math.floor((itemStat.experience / itemStat.maxExperience) * 100));
    var divArray = document.getElementById(subType + '1'); //Doing + 1 so I can use "subType" for a span, which let me center progress bar value.
    divArray.style.width = ((weaponExp) + '%'); 
    if (subType === "sword") {
        document.getElementById("sword").innerHTML = weaponExp + "%";
    }
    if (subType === "axe") {
        document.getElementById("axe").innerHTML = weaponExp + "%";
    }
    if (subType === "mace") {
        document.getElementById("mace").innerHTML = weaponExp + "%";
    }
    if (subType === "staff") {
        document.getElementById("staff").innerHTML = weaponExp + "%";
    }
    if (subType === "ranged") {
        document.getElementById("ranged").innerHTML = weaponExp + "%";
    };
    if (subType === "fist") {
        document.getElementById("fist").innerHTML = weaponExp + "%";
    };
};

//experience gained from killing a monster
function monsterExperience(monsterStat, monsterStats) {
    if (player.properties.level > monsterStats.level + 2) {
        var expgain = ((monsterStats.baseExp / (player.properties.level / monsterStats.level)) * player.functions.expRate() / 2);
    }
    else {
        var expgain = (monsterStats.baseExp / (player.properties.level / monsterStats.level)) * player.functions.expRate();
    };
    if (player.properties.experience < player.properties.maxExperience) {
        player.properties.experience = Math.floor(player.properties.experience + expgain);
    };
    if (player.properties.experience >= player.properties.maxExperience) {
        player.properties.level += 1;
        levelUp();
        player.properties.stats += 10;
        player.properties.experience = player.properties.experience - player.properties.maxExperience;
        player.properties.maxExperience = Math.floor(player.properties.maxExperience * 1.5);
        Log("<span style=\"color:blue\">You leveled up! Your current level is: </span>" + player.properties.level);
    }
    else {
        Log('<span id=\"expGain\" class =\"bold\" style=\"display:none;\">You gain:'  + Math.floor(expgain) + " experience!" + "<br />" + "</span>");
        $(document).ready(function () {
            $(".attack").click(function () {
                //  $("#playerLog").delay(100).fadeIn();
                $("#expGain").delay(1800).fadeIn();

            });
        });
    }
    updateHtml();
    monsterGold(monsterStat, monsterStats);
};

//Player skill recharge
function skillReCharge() {
    for (var spell in activeSpells) {
        if (activeSpells.hasOwnProperty(spell)) {
            var rechargedSpell = activeSpells[spell];
            rechargedSpell.charge = rechargedSpell.maxCharge();
        };
    };
    for (var weapon in weaponSkillList) {
        if (weaponSkillList.hasOwnProperty(weapon)) {
            var weaponSkill = weaponSkillList[weapon];
            for (var skill in weaponSkill) {
                if (weaponSkill.hasOwnProperty(skill)) {
                    var rechargedSkill = weaponSkill[skill];
                    rechargedSkill.charge = rechargedSkill.maxCharge;
                };
            };
        };
    };
};
//Experience gain for equipped items
function itemExperienceGain(monsterStat, monsterStats) {
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
            if (weapon.subType === 'sword') {
                weapon.strength += Math.floor(weapon.iLvl + weapon.power);
                weapon.agility += Math.floor(weapon.iLvl + weapon.power);
                weapon.dexterity += Math.floor(weapon.iLvl + weapon.power);
            }
            else if (weapon.subType === 'axe') {
                weapon.strength += Math.floor(weapon.iLvl + weapon.power);
                weapon.endurance += Math.floor(weapon.iLvl + weapon.power);
                weapon.agility += Math.floor(weapon.iLvl + weapon.power);
            }
            else if (weapon.subType === 'ranged') {
                weapon.strength += Math.floor(weapon.iLvl + weapon.power);
                weapon.agility += Math.floor(weapon.iLvl + weapon.power);
                weapon.dexterity += Math.floor(weapon.iLvl + weapon.power);
            }
            else if (weapon.subType === 'mace') {
                weapon.strength += Math.floor(weapon.iLvl + weapon.power);
                weapon.endurance += Math.floor(weapon.iLvl + weapon.power);
                weapon.wisdom += Math.floor(weapon.iLvl + weapon.power);
            }
            else if (weapon.subType === 'staff') {
                weapon.agility += Math.floor(weapon.iLvl + weapon.power);
                weapon.intelligence += Math.floor(weapon.iLvl + weapon.power);
                weapon.wisdom += Math.floor(weapon.iLvl + weapon.power);
            }
        };
        var newItemValue = getItemValue(weapon);
        equippedItems.weapon.value = newItemValue;
        equippedItems.weapon.exp = weaponExp;
        equippedItems.weapon.maxExp = weaponMaxExp;
        equippedItems.weapon.level = weaponLevel;
        CreateEquipHtml();
        updateHtml();
    };
};

//gold gained from killing a monster
function monsterGold(monsterStat, monsterStats) {
    var goldDrop = 0;
    var randomGold = Math.floor(Math.random() * ((monsterStats.level + 5) - monsterStats.level + 1) + monsterStats.level);
    goldDrop = Math.floor(randomGold * player.functions.goldRate());
    player.properties.gold += goldDrop;
    Log('<span id=\"goldDrop\" class =\"bold\" style=\"display:none;\">You loot: ' + goldDrop + " gold!" + "<br />" + "</span>");
    $(document).ready(function () {
        $(".attack").click(function () {
            //  $("#playerLog").delay(100).fadeIn();
            $("#goldDrop").delay(1600).fadeIn();

        });
    });
    document.getElementById("gold").innerHTML = player.properties.gold;
    monsterItemDrop(monsterStat);

};

function displayLogInfo() {
    if (battleTurn > 20) {
        battleTurn = 20;
    };
    Log('<span id=\"test1\" class =\"bold\" style=\"color:#FF8000; display:none;\">Critical Rating: ' + ((criticalRate / battleTurn) * 100).toFixed(0) + " " + "%" + "<br />" + "</span>");
    Log('<span id=\"test2\" class =\"bold\" style=\"color:red; display:none;\">Enemy dealt: ' + damageTaken + " " + "damage." + "<br />" + "</span>");
    Log('<span id=\"test3\" class =\"bold\" style=\"color:blue; display:none;\">You dealt: ' + magicDamageDealt + " " + "magic damage total." + "<br />" + "</span>");
    Log('<span id=\"test4\" class =\"bold\" style=\"color:red; display:none;\">You dealt: ' + damageDealt + " " + "physical damage total." + "<br />" + "</span>");
    Log('<span id=\"test5\" class =\"bold\" style=\"color:#04B4AE; display:none;\">You block: ' + blockRate + " " + " damage total." + "<br />" + "</span>");
    Log('<span id=\"test6\" class =\"bold\" style=\"color:purple; display:none;\">You counter enemy for: ' + counterDamage + " " + " damage total." + "<br />" + "</span>");
    Log('<span id=\"test7\" class =\"bold\" style=\"color:green; display:none;\">You lifesteal for: ' + lifeStealAmount + " " + " health." + "<br />" + "</span>");
    Log('<span id=\"test8\" class =\"bold\" style=\"color:blue; display:none;\">Turns: ' + (battleTurn) + "<br />" + "</span>");
    
        $(".attack").click(function () {
            $("#test1").delay(1600).fadeIn();
            $("#test2").delay(1400).fadeIn();
            $("#test3").delay(1200).fadeIn();
            $("#test4").delay(1000).fadeIn();
            $("#test5").delay(800).fadeIn();
            $("#test6").delay(600).fadeIn();
            $("#test7").delay(400).fadeIn();
            $("#test8").delay(200).fadeIn();
        });
    damageDealt = 0;
    magicDamageDealt = 0;
    blockRate = 0;
    lifeStealAmount = 0;
    counterDamage = 0;
    damageTaken = 0;
    criticalRate = 0;
    enemyBlock = 0;
    accuracyRate = 0;
    monsterDamage = 0;
    if (battleTurn >= 20) {
        Log("<span class =\"bold\" style=\"color:blue\">Draw!</span>");
    };
    Log(" ");
    skillReCharge();
    updateHtml();
};

//Equip item function
function equipItem(id) {
    var item = playerInventory.filter(function (obj) {
        return obj.id === id;
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
                player.properties.isSword = true;
            }
            else if (equippedItems.weapon.subType === "axe") {
                player.properties.isAxe = true;
            }
            else if (equippedItems.weapon.subType === "mace") {
                player.properties.isMace = true;
            }
            else if (equippedItems.weapon.subType === "staff") {
                player.properties.isStaff = true;
            }
            else if (equippedItems.weapon.subType === "ranged") {
                player.properties.isRanged = true;
            }
            var item = playerInventory.filter(function (obj) {
                return obj.id === id;
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
            var oldId = equippedItems.offHand.id;
            unequipItem(oldId);
        };
        if (item.id === id) {
            equippedItems.offHand = item;
            equippedItems.offHand.isEquipped = true;
            var item = playerInventory.filter(function (obj) {
                return obj.id === id;
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
            var oldId = equippedItems.armor.id;
            unequipItem(oldId);
        };
        if (item.id === id) {
            equippedItems.armor = item;
            equippedItems.armor.isEquipped = true;
            var item = playerInventory.filter(function (obj) {
                return obj.id === id;
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
            var oldId = equippedItems.ring.id;
            unequipItem(oldId);
        };
        if (item.id === id) {
            equippedItems.ring = item;
            equippedItems.ring.isEquipped = true;
            var item = playerInventory.filter(function (obj) {
                return obj.id === id;
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
            var oldId = equippedItems.amulet.id;
            unequipItem(oldId);
        };
        if (item.id === id) {
            equippedItems.amulet = item;
            equippedItems.amulet.isEquipped = true;
            var item = playerInventory.filter(function (obj) {
                return obj.id === id;
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
            var oldId = equippedItems.talisman.id;
            unequipItem(oldId);
        };
        if (item.id === id) {
            equippedItems.talisman = item;
            equippedItems.talisman.isEquipped = true;
            var item = playerInventory.filter(function (obj) {
                return obj.id === id;
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
                return obj.id === id;
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
    CreatePlayerSkillsHtml();
    CreatePlayerHotBar();
    updateBar();
    checkPlayerFist();
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
        var itemType = "weapon";
        equippedItems.weapon.isEquipped = false;
        playerInventory.push(equippedItems.weapon);
        if (equippedItems.weapon.subType === "sword") {
            player.properties.isSword = false;
        }
        else if (equippedItems.weapon.subType === "axe") {
            player.properties.isAxe = false;
        }
        else if (equippedItems.weapon.subType === "mace") {
            player.properties.isMace = false;
        }
        else if (equippedItems.weapon.subType === "staff") {
            player.properties.isStaff = false;
        }
        else if (equippedItems.weapon.subType === "ranged") {
            player.properties.isRanged = false;
        }
        equippedItems.weapon = { //Probably a reference error, so I cannot delete this part, but I can still add values with different function allowing me to write less code ._.
        };
        itemUnequipProperties(itemType);
        CreateInventoryWeaponHtml();
        updateHtml();
    }
        //Off-Hand unequip
    else if (offHandId === equippedItems.offHand.id || offHandId == oldId) {
        var itemType = "offHand";
        equippedItems.offHand.isEquipped = false;
        playerInventory.push(equippedItems.offHand);
        equippedItems.offHand = { //Probably a reference error, so I cannot delete this part, but I can still add values with different function allowing me to write less code ._.
        };
        itemUnequipProperties(itemType);
        CreateInventoryWeaponHtml();
        updateHtml();
    }
        //Armor unequip
    else if (armorId === equippedItems.armor.id || armorId == oldId) {
        var itemType = "armor";
        equippedItems.armor.isEquipped = false;
        playerInventory.push(equippedItems.armor);
        equippedItems.armor = { //Probably a reference error, so I cannot delete this part, but I can still add values with different function allowing me to write less code ._.
        };
        itemUnequipProperties(itemType);
        CreateInventoryWeaponHtml();
        updateHtml();
    }
        //Ring unequip
    else if (ringId === equippedItems.ring.id || ringId === oldId) {
        var itemType = "ring";
        equippedItems.ring.isEquipped = false;
        playerInventory.push(equippedItems.ring);
        equippedItems.ring = { //Probably a reference error, so I cannot delete this part, but I can still add values with different function allowing me to write less code ._.
        };
        itemUnequipProperties(itemType);
        CreateInventoryWeaponHtml();
        updateHtml();
    }
        //Amulet unequip
    else if (amuletId === equippedItems.amulet.id || amuletId === oldId) {
        var itemType = "amulet";
        equippedItems.amulet.isEquipped = false;
        playerInventory.push(equippedItems.amulet);
        equippedItems.amulet = { //Probably a reference error, so I cannot delete this part, but I can still add values with different function allowing me to write less code ._.
        };
        itemUnequipProperties(itemType);
        CreateInventoryWeaponHtml();
        updateHtml();
    }
        //Talisman unequip
    else if (talismanId === equippedItems.talisman.id || talismanId === oldId) {
        var itemType = "talisman";
        equippedItems.talisman.isEquipped = false;
        playerInventory.push(equippedItems.talisman);
        equippedItems.talisman = { //Probably a reference error, so I cannot delete this part, but I can still add values with different function allowing me to write less code ._.
        };
        itemUnequipProperties(itemType);
        CreateInventoryWeaponHtml();
        updateHtml();
    };
    CreateEquipHtml();
    CreateWeaponSkillHtml();
    updateHtml();
    skillChargeFill();
    CreatePlayerSkillsHtml();
    CreatePlayerHotBar();
    checkPlayerFist();
};

function checkPlayerFist() {
    if (equippedItems.weapon.subType === "fist") {
        player.properties.isFist = true;
    }
    else {
        player.properties.isFist = false;
    };
};

function itemUnequipProperties(itemType) {
    equippedItems[itemType]["strength"] = 0;
    equippedItems[itemType]["endurance"] = 0;
    equippedItems[itemType]["agility"] = 0;
    equippedItems[itemType]["dexterity"] = 0;
    equippedItems[itemType]["wisdom"] = 0;
    equippedItems[itemType]["intelligence"] = 0;
    equippedItems[itemType]["luck"] = 0;
    equippedItems[itemType]["defense"] = 0;
    if (itemType === "weapon") {
        equippedItems[itemType]["minDamage"] = 0;
        equippedItems[itemType]["maxDamage"] = 0;
        equippedItems[itemType]["exp"] = 0;
        equippedItems[itemType]["maxExp"] = 0;
        equippedItems[itemType]["subType"] = "fist";
    };
    if (itemType === "offHand") {
        equippedItems[itemType]["subType"] = "fist";
    }
    if (itemType === "talisman" ||
        itemType === "amulet" ||
        itemType === "ring") {
        equippedItems[itemType]["dropRate"] = 0;
        equippedItems[itemType]["expRate"] = 0;
        equippedItems[itemType]["goldRate"] = 0;
    };
};

CreateWeaponSkillHtml();
CreateInventoryWeaponHtml();
CreateEquipHtml();

var checkBoxCommon = false;
var checkBoxUncommon = false;
var checkBoxRare = false;
var checkBoxEpic = false;
var hardcoreMode = false;
function handleClick() {
    checkBoxCommon = document.getElementById("common").checked;
    checkBoxUncommon = document.getElementById("uncommon").checked;
    checkBoxRare = document.getElementById("rare").checked;
    checkBoxEpic = document.getElementById("epic").checked;
    hardcoreMode = document.getElementById("hardcoreMode").checked;
    player.properties.autoBattle = document.getElementById("autoBattle").checked;
};
var eventDay = '';
var bonusExp = 1;
var bonusGold = 1;
var bonusDrop = 1;
var bonusRegen = 1; //multiplier both health and mana
var bonusDamage = 1; //Min and Max damage bonus ~50%...
var bonusSpellDamage = 1; //Add spell power with 50% bonus, currently affect int/wis 20% bonus
function weekDayEvent() {
    var eventDate = new Date();
    var day = eventDate.getDay();
    var description = '';
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (day === 0) {
        eventDay = days[day];
        description = "base exp/gold/drop rate x2";
        bonusExp = 2;
        bonusGold = 2;
        bonusDrop = 2;
    }
    else if (day === 1) {
        eventDay = days[day];
        description = "Hp/mana regen x2";
        bonusRegen = 2;
    }
    else if (day === 2) {
        eventDay = days[day];
        description = "Damage 50%";
        bonusDamage = 1.5;
    }
    else if (day === 3) {
        eventDay = days[day];
        description = "Int/Wis + 20%";
        bonusSpellDamage = 1.2;
    }
    else if (day === 4) {
        eventDay = days[day];
        description = "Exp/Gold x2";
        bonusExp = 2;
        bonusGold = 2;
    }
    else if (day === 5) {
        eventDay = days[day];
        description = "Gold/Drop x2";
        bonusGold = 2;
        bonusDrop = 2;
    }
    else if (day === 6) {
        eventDay = days[day];
        description = "Drop/Exp x2";
        bonusExp = 2;
        bonusDrop = 2;
    };
    document.getElementById("date").innerHTML += eventDay + ": " + description;
};
weekDayEvent();

function changeRace(raceName) {
    var characterRace = '';
    characterRace = raceName;
    player.properties.heroRace = characterRace;
    removeStartingScreen();
    checkHeroRace();
};
//Set audio starting volume...
function myAudio(sound) {
    var myAudio = document.getElementById('myAudio');
    myAudio.volume = 0.1;
    if (player.properties.sound === "on" || sound === "off") {
        myAudio.play();
        player.properties.sound = "on";
    }
    if (player.properties.sound === "off") {
        myAudio.pause();
        player.properties.sound = "off";
    };
};
function muteAudio() {
    var audio = document.getElementById("myAudio");
    if (audio.muted === true) {
        audio.muted = false;
    }
    else if (audio.muted === false) {
        audio.muted = true;
    };
};
function selectText(containerid) {
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select();
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().addRange(range);
    }
}