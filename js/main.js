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
    autoBattle: 1, // testing
    level: 1,
    experience: 0,
    maxExperience: 100,
    inventory: function () {
        return Math.floor((player.totalStrength() + 100));
    },
    baseStrength: 5,
    equipStrength: function () {
        return Math.floor((equippedItems.weapon.strength + equippedItems.offHand.strength + equippedItems.armor.strength + equippedItems.ring.strength + equippedItems.amulet.strength + equippedItems.talisman.strength));
    },
    totalStrength: function () {
        return Math.floor((player.baseStrength + player.equipStrength() + player.axeStrength() + player.fistStrength() + player.bowStrength()));
    },
    baseEndurance: 5,
    equipEndurance: function () {
        return Math.floor((equippedItems.weapon.endurance + equippedItems.offHand.endurance + equippedItems.armor.endurance + equippedItems.ring.endurance + equippedItems.amulet.endurance + equippedItems.talisman.endurance));
    },
    totalEndurance: function () {
        return Math.floor((player.baseEndurance + player.equipEndurance() + player.maceEndurance() + player.axeEndurance()));
    },
    baseAgility: 5,
    equipAgility: function () {
        return Math.floor((equippedItems.weapon.agility + equippedItems.offHand.agility + equippedItems.armor.agility + equippedItems.ring.agility + equippedItems.amulet.agility + equippedItems.talisman.agility));
    },
    totalAgility: function () {
        return Math.floor((player.baseAgility + player.equipAgility() + player.swordAgility() + player.daggerAgility()));
    },
    baseDexterity: 5,
    equipDexterity: function () {
        return Math.floor((equippedItems.weapon.dexterity + equippedItems.offHand.dexterity + equippedItems.armor.dexterity + equippedItems.ring.dexterity + equippedItems.amulet.dexterity + equippedItems.talisman.dexterity));
    },
    totalDexterity: function () {
        return Math.floor((player.baseDexterity + player.equipDexterity() + player.daggerDexterity() + player.fistDexterity() + player.bowDexterity()));
    },
    baseIntelligence: 5,

    equipIntelligence: function () {
        return Math.floor((equippedItems.weapon.intelligence + equippedItems.offHand.intelligence + equippedItems.armor.intelligence + equippedItems.ring.intelligence + equippedItems.amulet.intelligence + equippedItems.talisman.intelligence));
    },
    totalIntelligence: function () {
        return Math.floor((player.baseIntelligence + player.equipIntelligence() + player.staffIntelligence()));
    },
    baseWisdom: 5,

    equipWisdom: function () {
        return Math.floor((equippedItems.weapon.wisdom + equippedItems.offHand.wisdom + equippedItems.armor.wisdom + equippedItems.ring.wisdom + equippedItems.amulet.wisdom + equippedItems.talisman.wisdom));
    },
    totalWisdom: function () {
        return Math.floor((player.baseWisdom + player.equipWisdom() + player.staffWisdom() + player.maceWisdom()));
    },
    baseLuck: 5,

    equipLuck: function () {
        return Math.floor((equippedItems.weapon.luck + equippedItems.offHand.luck + equippedItems.armor.luck + equippedItems.ring.luck + equippedItems.amulet.luck + equippedItems.talisman.luck));
    },
    totalLuck: function () {
        return Math.floor((player.baseLuck + player.equipLuck()));
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
    minDamage: function () {
        return Math.floor((player.totalStrength() * 0.4));
    },
    maxDamage: function () {
        return (player.totalStrength() * 0.6);
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
        return (player.totalAgility() * 0.05 + player.totalLuck() * 0.03).toFixed(1);
    },
    criticalDamage: function () {
        return (player.totalStrength() * 0.003 + player.totalDexterity() * 0.002).toFixed(2);
    },
    
    dropRate: function () {
        return (1 + (player.totalLuck()) / 100);
    },
    expRate: 0,
    //Sword
    SwordLevel: 1,
    SwordExp: 0,
    SwordMaxExp: 10,
    isSword: false,
    swordStrength: function () {
        if (player.isSword === true) {
            return (player.SwordLevel * 2);
        }
        else if (player.isSword === false) {
            return (player.SwordLevel * 0);
        }
    },
    swordAgility: function () {
        if (player.isSword === true) {
            return (player.SwordLevel * 1.5);
        }
        else if (player.isSword === false) {
            return (player.SwordLevel * 0);
        }
    },
    //Dagger
    DaggerLevel: 1,
    DaggerExp: 0,
    DaggerMaxExp: 10,
    isDagger: false,
    daggerAgility: function () {
        if (player.isDagger === true) {
            return (player.DaggerLevel * 2);
        }
        else if (player.isDagger === false) {
            return (player.DaggerLevel * 0);
        }
    },
    daggerDexterity: function () {
        if (player.isDagger === true) {
            return (player.DaggerLevel * 1.5);
        }
        else if (player.isDagger === false) {
            return (player.DaggerLevel * 0);
        }
    },
    //Axe
    AxeLevel: 1,
    AxeExp: 0,
    AxeMaxExp: 10,
    isAxe: false,
    axeStrength: function () {
        if (player.isAxe === true) {
            return (player.AxeLevel * 2);
        }
        else if (player.isAxe === false) {
            return (player.AxeLevel * 0);
        }
    },
    axeEndurance: function () {
        if (player.isAxe === true) {
            return (player.AxeLevel * 1.5);
        }
        else if (player.isAxe === false) {
            return (player.AxeLevel * 0);
        }
    },
    //Mace
    MaceLevel: 1,
    MaceExp: 0,
    MaceMaxExp: 10,
    isMace: false,
    maceEndurance: function () {
        if (player.isMace === true) {
            return (player.MaceLevel * 2);
        }
        else if (player.isMace === false) {
            return (player.MaceLevel * 0);
        }
    },
    maceWisdom: function () {
        if (player.isMace === true) {
            return (player.MaceLevel * 1.5);
        }
        else if (player.isMace === false) {
            return (player.MaceLevel * 0);
        }
    },
    //Staff
    StaffLevel: 1,
    StaffExp: 0,
    StaffMaxExp: 10,
    isStaff: false,
    staffIntelligence: function () {
        if (player.isStaff === true) {
            return (player.StaffLevel * 2);
        }
        else if (player.isStaff === false) {
            return (player.StaffLevel * 0);
        }
    },
    staffWisdom: function () {
        if (player.isStaff === true) {
            return (player.StaffLevel * 1.5);
        }
        else if (player.isStaff === false) {
            return (player.StaffLevel * 0);
        }
    },
    //Fist
    FistLevel: 1,
    FistExp: 0,
    FistMaxExp: 10,
    isFist: false,
    fistStrength: function () {
        if (player.isFist === true) {
            return (player.FistLevel * 2);
        }
        else if (player.isFist === false) {
            return (player.FistLevel * 0);
        }
    },
    fistDexterity: function () {
        if (player.isFist === true) {
            return (player.FistLevel * 1.5);
        }
        else if (player.isFist === false) {
            return (player.FistLevel * 0);
        }
    },
    //Bow
    BowLevel: 1,
    BowExp: 0,
    BowMaxExp: 10,
    isBow: false,
    bowStrength: function () {
        if (player.isBow === true) {
            return (player.BowLevel * 1.5);
        }
        else if (player.isBow === false) {
            return (player.BowLevel * 0);
        }
    },
    bowDexterity: function () {
        if (player.isBow === true) {
            return (player.BowLevel * 2);
        }
        else if (player.isBow === false) {
            return (player.BowLevel * 0);
        }
    }
};
var equippedItems = {
    weapon: {
        strength: 0,
        endurance: 0,
        agility: 0,
        dexterity: 0,
        intelligence: 0,
        wisdom: 0,
        luck: 0
    },
    offHand: {
        strength: 0,
        endurance: 0,
        agility: 0,
        dexterity: 0,
        intelligence: 0,
        wisdom: 0,
        luck: 0
    },
    armor: {
        strength: 0,
        endurance: 0,
        agility: 0,
        dexterity: 0,
        intelligence: 0,
        wisdom: 0,
        luck: 0
    },
    ring: {
        strength: 0,
        endurance: 0,
        agility: 0,
        dexterity: 0,
        intelligence: 0,
        wisdom: 0,
        luck: 0
    },
    amulet: {
        strength: 0,
        endurance: 0,
        agility: 0,
        dexterity: 0,
        intelligence: 0,
        wisdom: 0,
        luck: 0
    },
    talisman: {
        strength: 0,
        endurance: 0,
        agility: 0,
        dexterity: 0,
        intelligence: 0,
        wisdom: 0,
        luck: 0
    }
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
function createMonster(maxHp, def, minDmg, maxDmg, baseExp, acc, eva, name, type, id, level, area) {
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
        level: level,
        area: area
    }

    monsters.push(monster);
    return monster;
}

var monsterAreas = [
    {
    type: 'BanditHideout',
    displayName: 'Bandit Hideout'
    },
     {
         type: 'Forest',
         displayName: 'Forest'
     },
      {
          type: 'Mountains',
          displayName: 'Mountains'
      },
       {
           type: 'AncientCave',
           displayName: 'Ancient Cave'
       }
]

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
                chance: 15,
             },
            {
                type: 'Rare',
                chance: 50,
            },
            {
                type: 'Uncommon',
                chance: 334,
            },
            {
                type: 'Common',
                chance: 600,
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
                chance: 2,
             },
            {
                type: 'Epic',
                chance: 28,
            },
            {
                type: 'Rare',
                chance: 100,
            },
            {
                type: 'Uncommon',
                chance: 400,
            },
            {
                type: 'Common',
                chance: 470,
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
                chance: 3,
             },
            {
                type: 'Epic',
                chance: 97,
            },
            {
                type: 'Rare',
                chance: 200,
            },
            {
                type: 'Uncommon',
                chance: 500,
            },
            {
                type: 'Common',
                chance: 200,
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
                chance: 5,
             },
            {
                type: 'Epic',
                chance: 145,
            },
            {
                type: 'Rare',
                chance: 350,
            },
            {
                type: 'Uncommon',
                chance: 400,
            },
            {
                type: 'Common',
                chance: 100,
            }
        ]
    }
];

// Create the monsters, each with varying stats. Allows for easy
// add/remove/modify of monsters
//            maxHP,  def, minD, maxD, baseExp, acc, eva, name, type, id, level
createMonster(10, 0, 2, 3, 5, 100, 5, 'Bandit', 'weak', 'monster1', 1, "BanditHideout");
createMonster(30, 2, 2, 5, 10, 100, 5, 'Bandit Thug', 'weak', 'monster2', 2, "BanditHideout");
createMonster(70, 4, 4, 7, 30, 100, 5, 'Bandit Archer', 'weak', 'monster3', 3, "BanditHideout");
createMonster(130, 6, 6, 10, 50, 100, 5, 'Bandit Plunderer', 'weak', 'monster4', 4, "BanditHideout");
createMonster(190, 9, 9, 14, 90, 100, 5, 'Bandit Assasin', 'weak', 'monster5', 5, "BanditHideout");
createMonster(280, 13, 13, 19, 140, 100, 5, 'Bandit Leader', 'weak', 'monster6', 6, "BanditHideout");
createMonster(380, 18, 18, 23, 190, 100, 5, 'Bandit Chief', 'weak', 'monster7', 7, "BanditHideout");
createMonster(500, 25, 25, 30, 260, 100, 5, 'Bandit Lord', 'weak', 'monster8', 8, "BanditHideout");
createMonster(700, 30, 32, 37, 340, 100, 5, 'Spider', 'average', 'monster9', 9, "Forest");
createMonster(900, 38, 40, 45, 450, 100, 5, 'Wolf', 'average', 'monster10', 10, "Forest");
createMonster(1300, 45, 50, 58, 560, 100, 5, 'Bear', 'average', 'monster11', 11, "Forest");
createMonster(1600, 53, 60, 67, 700, 100, 5, 'Grizzly', 'average', 'monster12', 12, "Forest");
createMonster(2200, 65, 75, 80, 810, 100, 5, 'Troll', 'average', 'monster13', 13, "Forest");
createMonster(2600, 75, 86, 92, 940, 100, 5, 'Forest Troll', 'average', 'monster14', 14, "Forest");
createMonster(3000, 88, 96, 100, 1060, 100, 5, 'Spider Queen', 'average', 'monster15', 15, "Forest");
createMonster(4000, 95, 105, 110, 1200, 100, 5, 'Troll Leader', 'average', 'monster16', 16, "Forest");
createMonster(5000, 120, 140, 160, 1600, 100, 5, 'Giant', 'strong', 'monster17', 17, "Mountains");
createMonster(7000, 140, 160, 185, 2150, 100, 5, 'Frost Giant', 'strong', 'monster18', 18, "Mountains");
createMonster(9000, 170, 200, 215, 2600, 100, 5, 'Frost Troll', 'strong', 'monster19', 19, "Mountains");
createMonster(12000, 200, 230, 250, 3400, 100, 5, 'Wyvern', 'strong', 'monster20', 20, "Mountains");
createMonster(15000, 220, 260, 275, 5000, 100, 5, 'Frost Dragon', 'strong', 'monster21', 21, "Mountains");
createMonster(18000, 250, 290, 320, 7000, 100, 5, 'Ice Elemental', 'strong', 'monster22', 22, "Mountains");
createMonster(22000, 300, 350, 380, 10000, 100, 5, 'Frost Guardian', 'strong', 'monster23', 23, "Mountains");
createMonster(28000, 400, 420, 550, 15000, 100, 5, 'Frost Queen', 'strong', 'monster24', 24, "Mountains");
createMonster(34000, 500, 500, 700, 23000, 100, 5, 'Zombie', 'boss', 'monster25', 25, "AncientCave");
createMonster(40000, 700, 900, 1200, 35000, 100, 5, 'Skeleton', 'boss', 'monster26', 26, "AncientCave");
createMonster(48000, 1000, 1200, 1500, 70000, 100, 5, 'Skeleton Soldier', 'boss', 'monster27', 27, "AncientCave");
createMonster(57000, 1200, 1700, 2200, 120000, 100, 5, 'Skeleton Archer', 'boss', 'monster28', 28, "AncientCave");
createMonster(65000, 2000, 2500, 3000, 180000, 100, 5, 'Skeleton Mage', 'boss', 'monster29', 29, "AncientCave");
createMonster(72000, 2500, 3200, 4000, 290000, 100, 5, 'Skeleton Healer', 'boss', 'monster30', 30, "AncientCave");
createMonster(80000, 3000, 4500, 5500, 430000, 100, 5, 'Wraith', 'boss', 'monster31', 31, "AncientCave");
createMonster(88000, 3500, 6000, 8000, 680000, 100, 5, 'Lich King', 'boss', 'monster32', 32, "AncientCave");

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
    var damage = Math.floor(Math.random() * (player.maxDamage() - player.minDamage() + 1)) + player.minDamage();
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
    var damage = Math.floor(Math.random() * (player.maxDamage() - player.minDamage() + 1)) + player.minDamage();
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
    //Add more stuff like "bonus elemental damage from passive skills or bonus weapon damage
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
    var itemType = equippedItems.weapon.itemType;
    
    if (player[itemType + "Exp"] < player[itemType + "MaxExp"]) {
        player[itemType + "Exp"] = Math.floor(player[itemType + "Exp"] + expgain);
    }
    if (player[itemType + "Exp"] >= player[itemType + "MaxExp"]) {
        player[itemType + "Level"] += 1;
        player[itemType + "Exp"] -= player[itemType + "MaxExp"];
        player[itemType + "MaxExp"] = Math.floor(player[itemType + "MaxExp"] * 1.2);
    }
    CreateWeaponSkillHtml()
};

//experience gained from killing a monster
function monsterExperience(monster) {

    var expgain = monster.baseExp / (player.level / 8);
    if (player.experience < player.maxExperience) {
        player.experience = Math.floor(player.experience + expgain);
    }
    if (player.experience >= player.maxExperience) {
        player.level += 1;
        player.stats += 10;
        player.experience = player.experience - player.maxExperience;
        player.maxExperience = Math.floor(player.maxExperience * 1.15);
        Log("Turn " + battleTurn + " " + "You leveled up! Your current level is: " + player.level);
        }
    else Log("Turn " + battleTurn + " " + "You gain: " + Math.floor(expgain) + "experience!");
    monsterGold(monster);
    }


//gold gained from killing a monster
function monsterGold(monster) {
    var goldDrop = Math.floor(Math.random() * ((monster.level + 5) - monster.level + 1) + monster.level);
    goldDrop = goldDrop * monster.level;
    player.gold += goldDrop;
    Log("Turn " + battleTurn + " " + "You loot: " + goldDrop + "gold!");
    document.getElementById("gold").innerHTML = player.gold;
    var randomNumber = Math.floor((Math.random() * 100) + 1);
    if (randomNumber <= (50 + player.dropRate())) {
        monsterItemDrop(monster);
    }
    //TESTING NEW ITEM TYPE DROP
 /*   var randomNumber = Math.floor((Math.random() * 100) + 1);
    if (randomNumber <= (50 + (player.dropRate() / 10))) {
        monsterOtherItemDrop(monster);
        Log("Turn " + battleTurn + " " + "<span style=\"color:orange\">You found an item! </span>");
    }*/
};
//Item drop from killing a monster
//TESTING NEW ITEM TYPE
function monsterOtherItemDrop(monster) {
    if (playerInventory.length <= player.inventory) {
        var itemType = otherItemTypes[Math.floor(Math.random() * otherItemTypes.length)]; //This code gets a random item from the item array.
        var itemType2 = itemType.type;
        var itemSubType = itemType.itemSubTypes[Math.floor(Math.random() * itemType.itemSubTypes.length)]; //This gets a random item sub type from the subType array.
        var itemType3 = itemSubType.type2;
        var color = itemSubType.color
        console.log("1st " + itemType.type)
        console.log("2nd " + itemSubType.type)
        console.log("3rd " + itemSubType.type2)
        console.log("4th " + itemSubType.color)

        var newItem = {
            itemType: itemSubType.type,
            itemType2: itemType,
            itemType3: itemSubType.type2,
            color: itemSubType.color
        };
        //THIS SHOULD ADD AN OBJECT TO AN ARRAY WITH FOLLOWING STATS
        playerInventory.push(newItem);

        CreateInventoryWeaponHtml()
    }
};

var otherItemTypes = [
    {
        type: "Orb",
        itemSubTypes: [
            {
                type: "Fire",
                type2: "Other",
                color: "red"
            },
            {
                type: "Water",
                type2: "Other",
                color: "blue"
            },
            {
                type: "Wind",
                type2: "Other",
                color: "green"
            },
            {
                type: "Earth",
                type2: "Other",
                color: "brown"
            },
            {
                type: "Lightning",
                type2: "Other",
                color: "orange"
            }
        ]
    },
    {
        type: "Card",
        itemSubTypes: [
            {
                type: "Common"
            },
            {
                type: "Uncommon"
            },
            {
                type: "Rare"
            },
            {
                type: "Epic"
            },
            {
                type: "Legendary"
            },
        ]
    }
];
        
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
            },
            {
                type: "Bow",
                //Out of 10
                strengthMultiplier: 6,
                enduranceMultiplier: 4,
                agilityMultiplier: 5,
                dexterityMultiplier: 10,
                wisdomMultiplier: 2,
                intelligenceMultiplier: 3,
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
    },
      {
          type: "OffHand",
          itemSubTypes: [
           {
               type: "Shield",
               //Out of 10
               strengthMultiplier: 7,
               enduranceMultiplier: 10,
               agilityMultiplier: 3,
               dexterityMultiplier: 5,
               wisdomMultiplier: 2,
               intelligenceMultiplier: 2,
               luckMultiplier: 0
           },
           {
               type: "Book",
               //Out of 10
               strengthMultiplier: 2,
               enduranceMultiplier: 3,
               agilityMultiplier: 6,
               dexterityMultiplier: 3,
               wisdomMultiplier: 10,
               intelligenceMultiplier: 6,
               luckMultiplier: 0
           },
           {
               type: "OffHandDagger",
               //Out of 10
               strengthMultiplier: 3,
               enduranceMultiplier: 3,
               agilityMultiplier: 10,
               dexterityMultiplier: 5,
               wisdomMultiplier: 5,
               intelligenceMultiplier: 4,
               luckMultiplier: 0
           },
           {
               type: "ThrowingWeapon",
               //Out of 10
               strengthMultiplier: 6,
               enduranceMultiplier: 2,
               agilityMultiplier: 5,
               dexterityMultiplier: 10,
               wisdomMultiplier: 3,
               intelligenceMultiplier: 4,
               luckMultiplier: 0
           },
           {
               type: "OffHandOrb",
               //Out of 10
               strengthMultiplier: 2,
               enduranceMultiplier: 4,
               agilityMultiplier: 4,
               dexterityMultiplier: 5,
               wisdomMultiplier: 5,
               intelligenceMultiplier: 10,
               luckMultiplier: 0
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



//TEST TEST TEST TEST :)
function monsterItemDrop(monster) {

    //Testing a possible way for an option like "destroy common items on drop" which would simply work like player.destroyCommon === false ( it would be set "true") then do nothing... -_- put it after the code gets actual info on item quality...
   
    if (playerInventory.length <= player.inventory()) {

        var currentDate = new Date();

        var monsterType = getMonsterType(monster);

        //Get Item Information
        var randomItemQuality = Math.floor(Math.random() * (1000 - 1) + 1); //Random item quality
        var itemQuality = getItemQuality(randomItemQuality, monsterType);
        if (typeof itemQuality !=="undefined"){
        if (checkBoxCommon === false && itemQuality.type === "Common" || checkBoxUncommon === false && itemQuality.type === "Uncommon" || checkBoxRare === false && itemQuality.type === "Rare" || checkBoxEpic === false && itemQuality.type === "Epic" || itemQuality.type === "Legendary") {
            var itemType = itemTypes[Math.floor(Math.random() * itemTypes.length)]; //This code gets a random item from the item array.
            var itemType2 = itemType.type;
            var itemSubType = itemType.itemSubTypes[Math.floor(Math.random() * itemType.itemSubTypes.length)]; //This gets a random item sub type from the subType array.
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
            var itemValue = (stats.strength + stats.endurance + stats.agility + stats.dexterity + stats.wisdom + stats.intelligence + stats.luck); // * itemQuality.qualityMultiplier

            var weaponId = currentDate.getTime();

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
            playerInventory.push(newItem);

            CreateInventoryWeaponHtml()

            Log("<span style=\"color:orange\">You found an item! </span>");
        }
    } else {
        Log("<span style=\"color:orange\">Inventory full! </span>");
    }
}
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
        chance = monsterType.itemQualityChance[i].chance;
        if (randomItemQuality <= chance * player.dropRate()) {
            itemQuality = itemQualities.filter(function (obj) {

                console.log("turur" + monsterType.itemQualityChance[i].type)
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
            //Check which weapon is equipped so you can gain stats and level up weapon mastery
            if (equippedItems.weapon.itemType === "Sword") {
                player.isSword = true;
            }
            else if (equippedItems.weapon.itemType === "Dagger") {
                player.isDagger = true;
            }
            else if (equippedItems.weapon.itemType === "Axe") {
                player.isAxe = true;
            }
            else if (equippedItems.weapon.itemType === "Mace") {
                player.isMace = true;
            }
            else if (equippedItems.weapon.itemType === "Staff") {
                player.isStaff = true;
            }
            else if (equippedItems.weapon.itemType === "Fist") {
                player.isFist = true;
            }
            else if (equippedItems.weapon.itemType === "Bow") {
                player.isBow = true;
            }
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
   else if (item.itemType2.type === "OffHand") {
        if (equippedItems.offHand.isEquipped === true) {
            var oldId = equippedItems.offHand.id
            unequipItem(oldId)
        }
        if (item.id === id) {
            equippedItems.offHand = item;
            equippedItems.offHand.isEquipped = true;
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
    else if (item.itemType === "Ring") {
        if (equippedItems.ring.isEquipped === true) {
            var oldId = equippedItems.ring.id
            unequipItem(oldId)
        }
        if (item.id === id) {
            equippedItems.ring = item;
            equippedItems.ring.isEquipped = true;
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
    else if (item.itemType === "Amulet") {
        if (equippedItems.amulet.isEquipped === true) {
            var oldId = equippedItems.amulet.id
            unequipItem(oldId)
        }
        if (item.id === id) {
            equippedItems.amulet = item;
            equippedItems.amulet.isEquipped = true;
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
    else if (item.itemType === "Talisman") {
        if (equippedItems.talisman.isEquipped === true) {
            var oldId = equippedItems.talisman.id
            unequipItem(oldId)
        }
        if (item.id === id) {
            equippedItems.talisman = item;
            equippedItems.talisman.isEquipped = true;
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
    CreateWeaponSkillHtml()
    CreateEquipHtml()
};
//Unequip item,remove stats.
function unequipItem(id, oldId) {
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
        if (equippedItems.weapon.itemType === "Sword") {
            player.isSword = false;
        }
        else if (equippedItems.weapon.itemType === "Dagger") {
            player.isDagger = false;
        }
        else if (equippedItems.weapon.itemType === "Axe") {
            player.isAxe = false;
        }
        else if (equippedItems.weapon.itemType === "Mace") {
            player.isMace = false;
        }
        else if (equippedItems.weapon.itemType === "Staff") {
            player.isStaff = false;
        }
        else if (equippedItems.weapon.itemType === "Fist") {
            player.isFist = false;
        }
        else if (equippedItems.weapon.itemType === "Bow") {
            player.isBow = false;
        }
        equippedItems.weapon = {
            strength: 0,
            endurance: 0,
            agility: 0,
            dexterity: 0,
            intelligence: 0,
            wisdom: 0,
            luck: 0
        };
        CreateInventoryWeaponHtml()
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
            luck: 0
        };
        CreateInventoryWeaponHtml()
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
            luck: 0
        };
        CreateInventoryWeaponHtml()
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
            luck: 0
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
            luck: 0
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
            luck: 0
        };
        CreateInventoryWeaponHtml();
    };
    CreateEquipHtml();
    CreateWeaponSkillHtml();
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

var InventoryItemTypes = [
    {
        type: 'Weapon',
        displayName: 'Weapon',
    },
    {
        type: 'OffHand',
        displayName: 'Off-Hand',
    },
    {
        type: 'Armor',
        displayName: 'Armor',
    },
     {
         type: 'Accessory',
         displayName: 'Accessory',
     },
      {
          type: 'Other',
          displayName: 'Other',
      },
];
CreateInventoryWeaponHtml();
CreateEquipHtml();

var checkBoxCommon = false;
var checkBoxUncommon = false;
var checkBoxRare = false;
var checkBoxEpic = false;
function handleClick(id) {
    checkBoxCommon = document.getElementById("common").checked;
    checkBoxUncommon = document.getElementById("uncommon").checked;
    checkBoxRare = document.getElementById("rare").checked;
    checkBoxEpic = document.getElementById("epic").checked;
};

var total = 0;
function sellAllCommon() {
    var playerInventoryNew = [];

    for (var i = 0; i < playerInventory.length; i++) {
        if (playerInventory[i].itemQuality === "Common") {
            total += playerInventory[i].value << 0;
        } else {
            playerInventoryNew.push(playerInventory[i]);
        }
    }
    player.gold += total;
    playerInventory = playerInventoryNew;
    CreateInventoryWeaponHtml();
    total = 0;
};
function sellAllUncommon() {
    var playerInventoryNew = [];

    for (var i = 0; i < playerInventory.length; i++) {
        if (playerInventory[i].itemQuality === "Uncommon") {
            total += playerInventory[i].value << 0;
        } else {
            playerInventoryNew.push(playerInventory[i]);
        };
    };
    player.gold += total;
    playerInventory = playerInventoryNew;
    CreateInventoryWeaponHtml();
    total = 0;
};
function sellAllRare() {
    var playerInventoryNew = [];

    for (var i = 0; i < playerInventory.length; i++) {
        if (playerInventory[i].itemQuality === "Rare") {
            total += playerInventory[i].value << 0;
        } else {
            playerInventoryNew.push(playerInventory[i]);
        };
    };
    player.gold += total;
    playerInventory = playerInventoryNew;
    CreateInventoryWeaponHtml();
    total = 0;
};