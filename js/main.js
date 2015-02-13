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

//PLAYER STATS
var player = {
    stats: 0,
    autoBattle: 1,
    level: 1,
    experience: 0,
    maxexperience: 100,
    inventory: 30,
    baseStrength: 5,
    weaponStrength: 0,
    armorStrength: 0,
    accessoryStrength: 0,
    totalStrength: function () {
        return (player.baseStrength + player.weaponStrength + player.armorStrength + player.accessoryStrength);
    },
    baseEndurance: 5,
    weaponEndurance: 0,
    armorEndurance: 0,
    accessoryEndurance: 0,
    totalEndurance: function () {
        return (player.baseEndurance + player.weaponEndurance + player.armorEndurance + player.accessoryEndurance);
    },
    baseAgility: 5,
    weaponAgility: 0,
    armorAgility: 0,
    accessoryAgility: 0,
    totalAgility: function () {
        return (player.baseAgility + player.weaponAgility + player.armorAgility + player.accessoryAgility);
    },
    baseDexterity: 5,
    weaponDexterity: 0,
    armorDexterity: 0,
    accessoryDexterity: 0,
    totalDexterity: function () {
        return (player.baseDexterity + player.weaponDexterity + player.armorDexterity + player.accessoryDexterity);
    },
    baseIntelligence: 5,
    weaponIntelligence: 0,
    armorIntelligence: 0,
    accessoryIntelligence: 0,
    totalIntelligence: function () {
        return (player.baseIntelligence + player.weaponIntelligence + player.armorIntelligence + player.accessoryIntelligence);
    },
    baseWisdom: 5,
    weaponWisdom: 0,
    armorWisdom: 0,
    accessoryWisdom: 0,
    totalWisdom: function () {
        return (player.baseWisdom + player.weaponWisdom + player.armorWisdom + player.accessoryWisdom);
    },
    baseLuck: 5,
    weaponLuck: 0,
    armorLuck: 0,
    accessoryLuck: 0,
    totalLuck: function () {
        return (player.baseLuck + player.weaponLuck + player.armorLuck + player.accessoryLuck);
    },
    gold: 0,
    health: 50,
    maxhealth: function () {
        return (35 + player.totalEndurance() * 3);
    },
    mana: 50,
    maxMana: function () {
        return (player.totalWisdom() * 0.5 + player.totalIntelligence() * 0.1);
    },
    manaRegen: function () {
        return (player.totalWisdom() / 5);
    },
    mindamage: function () {
        return Math.floor((player.totalStrength() * 0.2));
    },
    maxdamage: function () {
        return (player.totalStrength() * 0.5);
    },
    hpregen: function () {
        return Math.floor((player.totalEndurance()) / 3);
    },
    accuracy: function () {
        return Math.floor((95 + (player.totalAgility() * 0.02 + player.totalLuck() * 0.01)));
    },
    defense: function () {
        return (player.totalDexterity() * 0.2 + player.totalEndurance() * 0.1);
    },
    evasion: function () {
        return (5 + (player.totalAgility() * 0.003 + player.totalLuck() * 0.002));
    },
    criticalChance: function () {
        return (player.totalAgility() * 0.05 + player.totalLuck() * 0.03);
    },
    criticalDamage: function () {
        return (player.totalStrength() * 0.003 + player.totalDexterity() * 0.002);
    },
    Lifesteal: function () {
        return (player.totalIntelligence() / 100);
    },
    Lifesteal2: function () {
        return (player.totalIntelligence());
    },
    dropRate: 0,
    expRate: 0,
    //Sword
    swordLevel: 1,
    swordExp: 0,
    swordMaxExp: 10,
    //Dagger
    daggerLevel: 1,
    daggerExp: 0,
    daggerMaxExp: 10,
    //Axe
    axeLevel: 1,
    axeExp: 0,
    axeMaxExp: 10,
    //Mace
    maceLevel: 1,
    maceExp: 0,
    maceMaxExp: 10,
    //Staff
    staffLevel: 1,
    staffExp: 0,
    staffMaxExp: 10,
    //Fist
    fistLevel: 1,
    fistExp: 0,
    fistMaxExp: 10
};
var equippedItems = {
    weapon: {},
    armor: {},
    accessory: {}
};
var maxLogLines = 16;
var logData = {
    length: 0
};
var pot = 0;
var spot = 0;
var mpot = 0;

var battleTurn = 1;

// Array to store the monsters
var monsters = [];

//Array to store player items
var playerInventory = [];

/**
 * Helper method to create the array of monsters
 */
function createMonster(maxHp, def, minDmg, maxDmg, baseExp, acc, eva, name, type, id, level) {
    var monster = {
        hp: maxHp, // init HP to max HP
        maxHp: maxHp,
        def: def,
        minDmg: minDmg,
        maxDmg: maxDmg,
        baseExp: baseExp,
        acc: acc,
        eva: eva,
        name: name,
        type: type,
        id: id,
        level: level
    }

    monsters.push(monster);
    return monster;
}

var monsterTypes = [
    {
        type: 'weak',
        displayName: 'Weak',
        //out of 100, should add upto 100
        itemQualityChance: [
            {
                type: 'Legendary',
                chance: 1,
                
            },
             {
                type: 'Epic',
                chance: 4,
             },
            {
                type: 'Rare',
                chance: 10,
            },
            {
                type: 'Uncommon',
                chance: 25,
            },
            {
                type: 'Common',
                chance: 60,
            }
        ]
    },
    {
        type: 'average',
        displayName: 'Average',
        //out of 100, should add upto 100
        itemQualityChance: [
             {
                type: 'Legendary',
                chance: 2
             },
            {
                type: 'Epic',
                chance: 6
            },
            {
                type: 'Rare',
                chance: 20
            },
            {
                type: 'Uncommon',
                chance: 40
            },
            {
                type: 'Common',
                chance: 32
            }
        ]
    },
    {
        type: 'strong',
        displayName: 'Strong',
        //out of 100, should add upto 100
        itemQualityChance: [
             {
                type: 'Legendary',
                chance: 3
             },
            {
                type: 'Epic',
                chance: 10
            },
            {
                type: 'Rare',
                chance: 30
            },
            {
                type: 'Uncommon',
                chance: 50
            },
            {
                type: 'Common',
                chance: 7
            }
        ]
    },
    {
        type: 'boss',
        displayName: 'Boss',
        //out of 100, should add upto 100
        itemQualityChance: [
             {
                type: 'Legendary',
                chance: 5
             },
            {
                type: 'Epic',
                chance: 15
            },
            {
                type: 'Rare',
                chance: 50
            },
            {
                type: 'Uncommon',
                chance: 25
            },
            {
                type: 'Common',
                chance: 5
            }
        ]
    }
];

// Create the monsters, each with varying stats. Allows for easy
// add/remove/modify of monsters
//            maxHP,  def, minD, maxD, baseExp, acc, eva, name, type, id, level
createMonster(10, 0, 2, 3, 5, 100, 5, 'monster1', 'weak', 'monster1', 1);
createMonster(30, 2, 2, 5, 10, 100, 5, 'monster2', 'weak', 'monster2', 2);
createMonster(70, 4, 4, 7, 30, 100, 5, 'monster3', 'weak', 'monster3', 3);
createMonster(130, 6, 6, 10, 50, 100, 5, 'monster4', 'weak', 'monster4', 4);
createMonster(190, 9, 9, 14, 90, 100, 5, 'monster5', 'weak', 'monster5', 5);
createMonster(280, 13, 13, 19, 140, 100, 5, 'monster6', 'weak', 'monster6', 6);
createMonster(380, 18, 18, 23, 190, 100, 5, 'monster7', 'weak', 'monster7', 7);
createMonster(500, 25, 25, 30, 260, 100, 5, 'monster8', 'weak', 'monster8', 8);
createMonster(700, 30, 32, 37, 340, 100, 5, 'monster9', 'average', 'monster9', 9);
createMonster(900, 38, 40, 45, 450, 100, 5, 'monster10', 'average', 'monster10', 10);
createMonster(1300, 45, 50, 58, 560, 100, 5, 'monster11', 'average', 'monster11', 11);
createMonster(1600, 53, 60, 67, 700, 100, 5, 'monster12', 'average', 'monster12', 12);
createMonster(2200, 65, 75, 80, 810, 100, 5, 'monster13', 'average', 'monster13', 13);
createMonster(2600, 75, 86, 92, 940, 100, 5, 'monster14', 'average', 'monster14', 14);
createMonster(3000, 88, 96, 100, 1060, 100, 5, 'monster15', 'average', 'monster15', 15);
createMonster(4000, 95, 105, 110, 1200, 100, 5, 'monster16', 'average', 'monster16', 16);
createMonster(5000, 120, 140, 160, 1600, 100, 5, 'monster17', 'strong', 'monster17', 17);
createMonster(7000, 140, 160, 185, 2150, 100, 5, 'monster18', 'strong', 'monster18', 18);
createMonster(9000, 170, 200, 215, 2600, 100, 5, 'monster19', 'strong', 'monster19', 19);
createMonster(12000, 200, 230, 250, 3400, 100, 5, 'monster20', 'strong', 'monster20', 20);
createMonster(15000, 220, 260, 275, 5000, 100, 5, 'monster21', 'strong', 'monster21', 21);
createMonster(18000, 250, 290, 320, 7000, 100, 5, 'monster22', 'strong', 'monster22', 22);
createMonster(22000, 300, 350, 380, 10000, 100, 5, 'monster23', 'strong', 'monster23', 23);
createMonster(28000, 400, 420, 550, 15000, 100, 5, 'monster24', 'strong', 'monster24', 24);
createMonster(34000, 500, 500, 700, 23000, 100, 5, 'monster25', 'boss', 'monster25', 25);
createMonster(40000, 700, 900, 1200, 35000, 100, 5, 'monster26', 'boss', 'monster26', 26);
createMonster(48000, 1000, 1200, 1500, 70000, 100, 5, 'monster27', 'boss', 'monster27', 27);
createMonster(57000, 1200, 1700, 2200, 120000, 100, 5, 'monster28', 'boss', 'monster28', 28);
createMonster(65000, 2000, 2500, 3000, 180000, 100, 5, 'monster29', 'boss', 'monster29', 29);
createMonster(72000, 2500, 3200, 4000, 290000, 100, 5, 'monster30', 'boss', 'monster30', 30);
createMonster(80000, 3000, 4500, 5500, 430000, 100, 5, 'monster31', 'boss', 'monster31', 31);
createMonster(88000, 3500, 6000, 8000, 680000, 100, 5, 'monster32', 'boss', 'monster32', 32);

/**
 * Base monster attack method. Shared code among all monsters.
 *
 * @param monster {monster object} Monster to attack
 */

//attack function, calling other functions depending on player critical/block/evasion and much more in the future :)
CreateMonsterHtml();

function attack(monster) {
    battleTurn = 1;
    Log("Battle Turn: " + battleTurn);

    while (battleTurn > 0 && battleTurn < 20) {
        if (monster.hp >= 1) {
            $(".monsterButton").attr("disabled");
            playerAttack(monster);
            if (monster.hp < 1) {
                monsterKilled(monster);
            } else {
                monsterAttack(monster);
            }
        } else {
            break;
        }
        battleTurn += 1;
    }
    monster.hp = monster.maxHp;
    document.getElementById(monster.id).getElementsByClassName('hp')[0].innerHTML = monster.hp;
    DrawBattle();

}

function DrawBattle() {
    $(".monsterButton").attr("enabled");
}

//Player miss/hit chance
function playerAttack(monster) {

    var playerHitChance = (player.accuracy() - monster.eva) / 100;

    var randomHitChance = Math.random();
    
    if (playerHitChance > randomHitChance) {

        playerCriticalChance(monster);
    }
    else {
        Log("Turn " + battleTurn + " " + "<span style=\"color:blue\">YOU MISS! </span>");
    }
}

//player critical chance
function playerCriticalChance(monster){
    var playerCriticalChance = player.criticalChance() / 100;

    var randomCritChance = Math.random();

    if (playerCriticalChance > randomCritChance) {
        Log("Turn " + battleTurn + " " + "<span style=\"color:blue\">CRITICAL HIT </span>");
        playerCriticalDamage(monster);
    }
    else{
        playerDamage(monster);
    }
}

//player critical damage calculation
function playerCriticalDamage(monster){
    var damage = Math.floor(Math.random() * (player.maxdamage() - player.mindamage() + 1)) + player.mindamage();
    damage = Math.floor(damage * player.criticalDamage() * (10 / (10 + monster.def)));
    if (damage >= 1) {
        playerDamageDeal(damage, monster);
    }
    else {
        Log("Turn " + battleTurn + " " + "<span style=\"color:blue\">Enemy block your attack! </span>");
    }
}

//player normal damage calculation
function playerDamage(monster) {
    var damage = Math.floor(Math.random() * (player.maxdamage() - player.mindamage() + 1)) + player.mindamage();
    damage = Math.floor(damage * (10 / (10 + monster.def)));
    if (damage >= 1) {
        playerDamageDeal(damage, monster);
    }
    else {
        Log("Turn " + battleTurn + " " + "<span style=\"color:blue\">Enemy block your attack! </span>");
    }

}

//player damage deal (base or critical)
function playerDamageDeal(damage, monster) {

    monster.hp -= damage;
    var randomLifestealChance = Math.random();
    var lifestealHeal = Math.floor(Lifesteal2);
    if (Lifesteal > randomLifestealChance & player.mana >= 5) {
        player.health += lifestealHeal;
        player.mana -= 5;
        document.getElementById("mana").innerHTML = player.mana;
        if (player.health >= player.maxhealth()) {
            player.health = player.maxhealth();
        }
        Log("Turn " + battleTurn + " " + "<span style=\"color:green\">Healed for </span>" + lifestealHeal);
    }
    document.getElementById(monster.id).getElementsByClassName('hp')[0].innerHTML = monster.hp;
    Log("Turn " + battleTurn + " " + "You deal " + damage + " <span style=\"color:blue\">damage</span>");
    
    
}

//monster hit chance
function monsterAttack(monster) {

    var monsterHitChance = (monster.acc - player.evasion()) / 100;

    var randomHitChance = Math.random();

    if (monsterHitChance > randomHitChance) {
        monsterDamage(monster);
    }
    else {
        Log("Turn " + battleTurn + " " + "<span style=\"color:red\">You dodge enemy attack!</span>");
    }
}

//monster damage calculation
function monsterDamage(monster) {
    var dmg = Math.floor(Math.random() * (monster.maxDmg - monster.minDmg + 1)) + monster.minDmg;
    dmg = Math.floor(dmg * (10 / (10 + player.defense())));
    if (dmg >= 1) {
        monsterDamageDeal(dmg, monster);
    }
    else {
        Log("Turn " + battleTurn + " " + "<span style=\"color:green\">You blocked enemy attack! </span>");
    }
}

//monster damage deal (base or critical)
function monsterDamageDeal(dmg, monster) {
    player.health = player.health - dmg;
    document.getElementById("health").innerHTML = player.health;
    Log("Turn " + battleTurn + " " + "Enemy hit you for " + dmg + " <span style=\"color:red\">damage</span>");
    if (player.health < 1) {
        playerDead(monster);
    }
}


//player dead function, restore monster and player hp to max. ! need to add some experience and gold loss on death to prevent abuse of spam clicking for experience all night etc -.- :D
function playerDead(monster) {


    player.health = player.maxhealth();
    goldLost = Math.floor(player.gold - (player.gold / 1.2));
    player.gold = Math.floor(player.gold / 1.2);
    expLost = Math.floor(player.experience - (player.experience / 1.2));
    player.experience = Math.floor(player.experience / 1.2);
    monster.hp = monster.maxHp;
    document.getElementById("health").innerHTML = player.health;
    document.getElementById("gold").innerHTML = player.gold;
    document.getElementById("experience").innerHTML = player.experience;
    document.getElementById(monster.id).getElementsByClassName('hp')[0].innerHTML = monster.hp;
    Log("Turn " + battleTurn + " " + "<span style=\"color:red\">You have died!</span>");
    Log("Turn " + battleTurn + " " + "<span style=\"color:red\">You lost </span>" + goldLost + "gold");
    Log("Turn " + battleTurn + " " + "<span style=\"color:red\">You lost </span>" + expLost + "experience");
    battleTurn = -1;
}

//monster kill function
function monsterKilled(monster) {
    monster.hp = monster.maxHp;
    document.getElementById(monster.id).getElementsByClassName('hp')[0].innerHTML = monster.hp;
    monsterExperience(monster);
    battleTurn = -1;
    weaponSkill(monster);
}

//Weapon skill experience
function weaponSkill(monster) {
    var expgain = monster.level;
      //Sword
    if (equippedItems.weapon.itemType === "Sword") {
        if (player.swordExp < player.swordMaxExp) {
            player.swordExp = Math.floor(player.swordExp + expgain);
        }
        if (player.swordExp >= player.swordMaxExp) {
            player.swordLevel += 1;
            player.swordExp = player.swordExp - player.swordMaxExp;
            player.swordMaxExp = Math.floor(player.swordMaxExp * 1.2)
        };
    }
        //Dagger
    else if (equippedItems.weapon.itemType === "Dagger") {
        if (player.daggerExp < player.daggerMaxExp) {
            player.daggerExp = Math.floor(player.daggerMaxExp + expgain);
        }
        if (player.daggerExp >= player.daggerMaxExp) {
            player.swordLevel += 1;
            player.daggerExp = player.daggerExp - player.daggerMaxExp;
            player.daggerMaxExp = Math.floor(player.daggerMaxExp * 1.2)
        };
    }
        //Axe
    else if (equippedItems.weapon.itemType === "Axe") {
        if (player.axeExp < player.axeMaxExp) {
            player.axeExp = Math.floor(player.axeExp + expgain);
        }
        if (player.axeExp >= player.axeMaxExp) {
            player.swordLevel += 1;
            player.axeExp = player.axeExp - player.axeMaxExp;
            player.axeMaxExp = Math.floor(player.axeMaxExp * 1.2)
        };
    }
        //Mace
    else if (equippedItems.weapon.itemType === "Mace") {
        if (player.maceExp < player.maceMaxExp) {
            player.maceExp = Math.floor(player.maceExp + expgain);
        }
        if (player.maceExp >= player.maceMaxExp) {
            player.swordLevel += 1;
            player.maceExp = player.maceExp - player.maceMaxExp;
            player.maceMaxExp = Math.floor(player.maceMaxExp * 1.2)
        };
    }
        //Staff
    else if (equippedItems.weapon.itemType === "Staff") {
        if (player.staffExp < player.staffMaxExp) {
            player.staffExp = Math.floor(player.staffExp + expgain);
        }
        if (player.staffExp >= player.staffMaxExp) {
            player.swordLevel += 1;
            player.staffExp = player.staffExp - player.staffMaxExp;
            player.staffMaxExp = Math.floor(player.staffMaxExp * 1.2)
        };
    }
        //Fist
    else if (equippedItems.weapon.itemType === "Fist") {
        if (player.fistExp < player.fistMaxExp) {
            player.fistExp = Math.floor(player.fistExp + expgain);
        }
        if (player.fistExp >= player.fistMaxExp) {
            player.swordLevel += 1;
            player.fistExp = player.fistExp - player.fistMaxExp;
            player.fistMaxExp = Math.floor(player.fistMaxExp * 1.2)
        };
    }
    CreateWeaponSkillHtml()
};

//experience gained from killing a monster
function monsterExperience(monster) {

    var expgain = monster.baseExp / (player.level / 8);
    if (player.experience < player.maxexperience) {
        player.experience = Math.floor(player.experience + expgain);
    }
    if (player.experience >= player.maxexperience) {
        player.level += 1;
        player.stats += 10;
        player.experience = player.experience - player.maxexperience;
        player.maxexperience = Math.floor(player.maxexperience * 1.15);
        Log("Turn " + battleTurn + " " + "You leveled up! Your current level is: " + player.level);
        }
    else Log("Turn " + battleTurn + " " + "You gain: " + Math.floor(expgain) + "experience!");
    monsterGold(monster);
    }


//gold gained from killing a monster
function monsterGold(monster) {
    var goldDrop = Math.floor((Math.random() * 100) + 1);
    var goldDrop = Math.floor(Math.random() * ((monster.level + 5) - monster.level + 1) + monster.level);
    goldDrop = goldDrop * monster.level;
    player.gold += goldDrop;
    Log("Turn " + battleTurn + " " + "You loot: " + goldDrop + "gold!");
    document.getElementById("gold").innerHTML = player.gold;
    var randomNumber = Math.floor((Math.random() * 100) + 1);
    if (randomNumber <= 100) {
        monsterItemDrop(monster);
    }
};

var itemTypes = [
    {
        type: "Weapon",
        itemSubTypes: [
            {
                type: "Sword",
                //Out of 10
                strengthMultiplier: 7,
                enduranceMultiplier: 6,
                agilityMultiplier: 7,
                dexterityMultiplier: 7,
                wisdomMultiplier: 2,
                intelligenceMultiplier: 1,
                luckMultiplier: 0
            },
            {
                type: "Dagger",
                //Out of 10
                strengthMultiplier: 4,
                enduranceMultiplier: 2,
                agilityMultiplier: 10,
                dexterityMultiplier: 8,
                wisdomMultiplier: 3,
                intelligenceMultiplier: 3,
                luckMultiplier: 0
            },
            {
                type: "Axe",
                //Out of 10
                strengthMultiplier: 10,
                enduranceMultiplier: 8,
                agilityMultiplier: 4,
                dexterityMultiplier: 4,
                wisdomMultiplier: 2,
                intelligenceMultiplier: 2,
                luckMultiplier: 0
            },
            {
                type: "Mace",
                //Out of 10
                strengthMultiplier: 5,
                enduranceMultiplier: 5,
                agilityMultiplier: 1,
                dexterityMultiplier: 2,
                wisdomMultiplier: 10,
                intelligenceMultiplier: 6,
                luckMultiplier: 0
            },
            {
                type: "Fist",
                //Out of 10
                strengthMultiplier: 6,
                enduranceMultiplier: 6,
                agilityMultiplier: 5,
                dexterityMultiplier: 5,
                wisdomMultiplier: 2,
                intelligenceMultiplier: 4,
                luckMultiplier: 0
            },
            {
                type: "Staff",
                //Out of 10
                strengthMultiplier: 2,
                enduranceMultiplier: 3,
                agilityMultiplier: 4,
                dexterityMultiplier: 4,
                wisdomMultiplier: 7,
                intelligenceMultiplier: 10,
                luckMultiplier: 0
            }
        ]
    },
    {
        type: "Armor",
        itemSubTypes: [
         {
             type: "Cloth Armor",
             //Out of 10
             strengthMultiplier: 1,
             enduranceMultiplier: 1,
             agilityMultiplier: 6,
             dexterityMultiplier: 6,
             wisdomMultiplier: 8,
             intelligenceMultiplier: 8,
             luckMultiplier: 0
         },
         {
             type: "Leather Armor",
             //Out of 10
             strengthMultiplier: 3,
             enduranceMultiplier: 3,
             agilityMultiplier: 10,
             dexterityMultiplier: 6,
             wisdomMultiplier: 6,
             intelligenceMultiplier: 2,
             luckMultiplier: 0
         },
         {
             type: "Medium Armor",
             //Out of 10
             strengthMultiplier: 5,
             enduranceMultiplier: 5,
             agilityMultiplier: 5,
             dexterityMultiplier: 5,
             wisdomMultiplier: 8,
             intelligenceMultiplier: 2,
             luckMultiplier: 0
         },
         {
             type: "Heavy Armor",
             //Out of 10
             strengthMultiplier: 10,
             enduranceMultiplier: 10,
             agilityMultiplier: 2,
             dexterityMultiplier: 2,
             wisdomMultiplier: 5,
             intelligenceMultiplier: 1,
             luckMultiplier: 0
         }
        ]
    },
    {
        type: "Accessory",
        itemSubTypes: [
         {
             type: "Ring",
             //Out of 10
             strengthMultiplier: 5,
             enduranceMultiplier: 5,
             agilityMultiplier: 5,
             dexterityMultiplier: 5,
             wisdomMultiplier: 5,
             intelligenceMultiplier: 5,
             luckMultiplier: 10
         },
         {
             type: "Amulet",
             //Out of 10
             strengthMultiplier: 5,
             enduranceMultiplier: 5,
             agilityMultiplier: 5,
             dexterityMultiplier: 5,
             wisdomMultiplier: 5,
             intelligenceMultiplier: 5,
             luckMultiplier: 10
         },
         {
             type: "Talisman",
             //Out of 10
             strengthMultiplier: 5,
             enduranceMultiplier: 5,
             agilityMultiplier: 5,
             dexterityMultiplier: 5,
             wisdomMultiplier: 5,
             intelligenceMultiplier: 5,
             luckMultiplier: 10
         }
        ]
    }
];
var itemQualities = [
    {
        type: "Legendary",
        qualityMultiplier: 10,
        color: 'purple'
    },
    {
        type: "Epic",
        qualityMultiplier: 6,
        color: 'orange'
    },
    {
        type: "Rare",
        qualityMultiplier: 4,
        color: 'blue'
    },
    {
        type: "Uncommon",
        qualityMultiplier: 2,
        color: 'green'
    },
    {
        type: "Common",
        qualityMultiplier: 1,
        color: 'black'
    }
];


//Item drop from killing a monster
//TEST TEST TEST TEST :)
function monsterItemDrop(monster) {
    //If amount of item in inventory exceed 20 you wont drop anymore items, 9 can be changed to some variable like "max.inventorySlots"
    if (playerInventory.length <= player.inventory) {

        var currentDate = new Date();

        var monsterType = getMonsterType(monster);

        //Get Item Information
        var randomItemQuality = Math.floor(Math.random() * (100 - 1) + 1); //Random item quality
        var itemQuality = getItemQuality(randomItemQuality, monsterType);
        var itemType = itemTypes[Math.floor(Math.random() * itemTypes.length)]; //This code gets a random item from the item array.
        var itemType2 = itemType.type;
        var itemSubType = itemType.itemSubTypes[Math.floor(Math.random() * itemTypes.length)]; //This gets a random item sub type from the subType array.
        var stats = {
            strength: null,
            endurance: null,
            agility: null,
            dexterity: null,
            wisdom: null,
            intelligence: null,
            luck: null
        };
        for (var stat in stats) {
            if (stats.hasOwnProperty(stat)) {
                var randomStat = Math.floor(Math.random() * ((monster.level + 2) - monster.level + 1) + monster.level);
                var multiplier = randomStat * itemQuality.qualityMultiplier;
                //Calculate each stat
                stats[stat] = Math.floor(multiplier * itemSubType[stat + 'Multiplier'] / 10);
                stats[stat] = Math.floor(Math.random() * ((stats[stat] * 2)) - stats[stat] / 10 + stats[stat]);
            }
        };
        //Value of an item, all stats multiplied by item quality multiplier(better quality item = more gold)
        var itemValue = ((stats.strength + stats.endurance + stats.agility + stats.dexterity + stats.wisdom + stats.intelligence + stats.luck) * itemQuality.qualityMultiplier);

        var weaponId = currentDate.getTime();

       /* console.log("Monster Level" + " " + monster.level);
        console.log("STR" + " " + stats.strength);
        console.log("END" + " " + stats.endurance);
        console.log("AGI" + " " + stats.agility);
        console.log("DEX" + " " + stats.dexterity);
        console.log("WIS" + " " + stats.wisdom);
        console.log("INT" + " " + stats.intelligence);
        console.log("LUK" + " " + stats.luck);
        console.log("TYPE" + " " + itemSubType.type);
        console.log("QUALITY" + " " + itemQuality.type);
        console.log("isEquipped" + " " + isEquipped);*/

        //Build the Object
        var newItem = {
            id: weaponId,
            strength: stats.strength,
            endurance: stats.endurance,
            agility: stats.agility,
            dexterity: stats.dexterity,
            wisdom: stats.wisdom,
            intelligence: stats.intelligence,
            luck: stats.luck,
            itemType: itemSubType.type,
            itemType2: itemType,
            itemQuality: itemQuality.type,
            color: itemQuality.color,
            isEquipped: false,
            value: itemValue
        };
        //THIS SHOULD ADD AN OBJECT TO AN ARRAY WITH FOLLOWING STATS
        playerInventory.push(newItem);

        CreateInventoryWeaponHtml()
        //EACH MONSTER KILL SHOULD INCREASE ARRAY LENGTH + 1
      //  console.log("Number of items " + playerInventory.length);
    } else
      console.log("FULL INV");
}

function getMonsterType(monster) {
    var monsterType = monsterTypes.filter(function (obj) {
        return obj.type === monster.type;
    })[0]; //Doing [0] because it returns an array, but since we know it has only 1 object, we can use 0.

    return monsterType;
}
function getItemQuality(randomItemQuality, monsterType) {
    var itemQuality;

    var chance = 0;

    for (var i = 0; i < monsterType.itemQualityChance.length; i++) {
        //This is used to add up the previous quality chance to the next because all of them have to add up to 100. They are inclusive, not exclusive.
        chance += monsterType.itemQualityChance[i].chance;

        if (randomItemQuality <= chance) {
            itemQuality = itemQualities.filter(function (obj) {
                return obj.type === monsterType.itemQualityChance[i].type;
            })[0];
            break;
        }
    }

    return itemQuality;
}
//TEST TEST TEST TEST TEST TEST TEST



function bindAttack(monster) {
    return function () {
        attack(monster);
    }
}



// Bind the attack buttons one for each of the monsters
button1.addEventListener("click", bindAttack(monsters[0]));
button2.addEventListener("click", bindAttack(monsters[1]));
button3.addEventListener("click", bindAttack(monsters[2]));
button4.addEventListener("click", bindAttack(monsters[3]));
button5.addEventListener("click", bindAttack(monsters[4]));
button6.addEventListener("click", bindAttack(monsters[5]));
button7.addEventListener("click", bindAttack(monsters[6]));
button8.addEventListener("click", bindAttack(monsters[7]));
button9.addEventListener("click", bindAttack(monsters[8]));
button10.addEventListener("click", bindAttack(monsters[9]));
button11.addEventListener("click", bindAttack(monsters[10]));
button12.addEventListener("click", bindAttack(monsters[11]));
button13.addEventListener("click", bindAttack(monsters[12]));
button14.addEventListener("click", bindAttack(monsters[13]));
button15.addEventListener("click", bindAttack(monsters[14]));
button16.addEventListener("click", bindAttack(monsters[15]));
button17.addEventListener("click", bindAttack(monsters[16]));
button18.addEventListener("click", bindAttack(monsters[17]));
button19.addEventListener("click", bindAttack(monsters[18]));
button20.addEventListener("click", bindAttack(monsters[19]));
button21.addEventListener("click", bindAttack(monsters[20]));
button22.addEventListener("click", bindAttack(monsters[21]));
button23.addEventListener("click", bindAttack(monsters[22]));
button24.addEventListener("click", bindAttack(monsters[23]));
button25.addEventListener("click", bindAttack(monsters[24]));
button26.addEventListener("click", bindAttack(monsters[25]));
button27.addEventListener("click", bindAttack(monsters[26]));
button28.addEventListener("click", bindAttack(monsters[27]));
button29.addEventListener("click", bindAttack(monsters[28]));
button30.addEventListener("click", bindAttack(monsters[29]));
button31.addEventListener("click", bindAttack(monsters[30]));
button32.addEventListener("click", bindAttack(monsters[31]));

// ...



function equipItem(id) {

    var item = playerInventory.filter(function (obj) {
        return obj.id === id
    })[0];
    if (item.itemType2.type === "Weapon") {
        if (equippedItems.weapon.isEquipped === true) {
            var oldId = equippedItems.weapon.id
            unequipItem(oldId)
        }
        if (item.id === id) {
            equippedItems.weapon = item;
            equippedItems.weapon.isEquipped = true;
            player.weaponStrength = item.strength;
            player.weaponEndurance = item.endurance;
            player.weaponAgility = item.agility;
            player.weaponDexterity = item.dexterity;
            player.weaponIntelligence = item.intelligence;
            player.weaponWisdom = item.wisdom;
            player.weaponLuck = item.luck;
            var item = playerInventory.filter(function (obj) {
                return obj.id === id
            })[0];
            var index = playerInventory.indexOf(item, 0);
            if (index > -1) {
                playerInventory.splice(index, 1);
            }
        }
            CreateInventoryWeaponHtml()
        }
    else if (item.itemType2.type === "Armor") {
        if (equippedItems.armor.isEquipped === true) {
          var oldId = equippedItems.armor.id
            unequipItem(oldId)
        }
        if (item.id === id) {
            equippedItems.armor = item;
            equippedItems.armor.isEquipped = true;
            player.armorStrength = item.strength;
            player.armorEndurance = item.endurance;
            player.armorAgility = item.agility;
            player.armorDexterity = item.dexterity;
            player.armorIntelligence = item.intelligence;
            player.armorWisdom = item.wisdom;
            player.armorLuck = item.luck;
            var item = playerInventory.filter(function (obj) {
                return obj.id === id
            })[0];
            var index = playerInventory.indexOf(item, 0);
            if (index > -1) {
                playerInventory.splice(index, 1);
            }
        }
        CreateInventoryWeaponHtml()
    }
    else if (item.itemType2.type === "Accessory") {
        if (equippedItems.accessory.isEquipped === true) {
            var oldId = equippedItems.accessory.id
            unequipItem(oldId)
        }
        if (item.id === id) {
            equippedItems.accessory = item;
            equippedItems.accessory.isEquipped = true;
            player.accessoryStrength = item.strength;
            player.accessoryEndurance = item.endurance;
            player.accessoryAgility = item.agility;
            player.accessoryDexterity = item.dexterity;
            player.accessoryIntelligence = item.intelligence;
            player.accessoryWisdom = item.wisdom;
            player.accessoryLuck = item.luck;
            var item = playerInventory.filter(function (obj) {
                return obj.id === id
            })[0];
            var index = playerInventory.indexOf(item, 0);
            if (index > -1) {
                playerInventory.splice(index, 1);
            }
        }
        CreateInventoryWeaponHtml()
    }

    CreateEquipHtml()
};
//Unequip item,remove stats. Still need to make it so only item image dissapear, not a whole html
function unequipItem(id, oldId) {
    var weapon = id;
    var armor = id;
    var accessory = id;
    //Weapon unequip
    if (weapon === equippedItems.weapon.id || weapon === oldId) {
        equippedItems.weapon.isEquipped = false;
        playerInventory.push(equippedItems.weapon);
        equippedItems.weapon = {};
        player.weaponStrength = 0;
        player.weaponEndurance = 0;
        player.weaponAgility = 0;
        player.weaponDexterity = 0;
        player.weaponIntelligence = 0;
        player.weaponWisdom = 0;
        player.weaponLuck = 0;
        CreateInventoryWeaponHtml()
    }
    //Armor unequip
    else if (armor === equippedItems.armor.id || armor == oldId) {
        equippedItems.armor.isEquipped = false;
        playerInventory.push(equippedItems.armor);
        equippedItems.armor = {};
        player.armorStrength = 0;
        player.armorEndurance = 0;
        player.armorAgility = 0;
        player.armorDexterity = 0;
        player.armorIntelligence = 0;
        player.armorWisdom = 0;
        player.armorLuck = 0;
        CreateInventoryWeaponHtml()
    }
    //Accessory unequip
    else if (accessory === equippedItems.accessory.id || accessory === oldId) {
        equippedItems.accessory.isEquipped = false;
        playerInventory.push(equippedItems.accessory);
        equippedItems.accessory = {};
        player.accessoryStrength = 0;
        player.accessoryEndurance = 0;
        player.accessoryAgility = 0;
        player.accessoryDexterity = 0;
        player.accessoryIntelligence = 0;
        player.accessoryWisdom = 0;
        player.accessoryLuck = 0;
        CreateInventoryWeaponHtml();
    };
    CreateEquipHtml();
};

function itemSell(id) {
    var item = playerInventory.filter(function (obj) {
        return obj.id === id
    })[0];
    var index = playerInventory.indexOf(item);
    if (index > -1) {
        playerInventory.splice(index, 1);
    }
    player.gold += item.value;
    CreateInventoryWeaponHtml();
    document.getElementById("gold").innerHTML = player.gold;
};
CreateWeaponSkillHtml()