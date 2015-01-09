window.setInterval(function () {
    var hppercent = 100;
    hppercent = (Math.floor((player.health / player.maxhealth) * 100));
    if (player.maxhealth <= 30 & pot >= 1) {
        if (hppercent <= 30) {
            if (player.health + pot >= player.maxhealth) {
                player.health = player.maxhealth;
                pot -= 1;
                document.getElementById("health").innerHTML = player.health;
                document.getElementById("pot").innerHTML = pot;
            } else {
                player.health += pot;
                pot -= 1;
                document.getElementById("health").innerHTML = player.health;
                document.getElementById("pot").innerHTML = pot;
            }
        }
    } else if (player.maxhealth <= 100 & mpot >= 1) {
        if (hppercent <= 30) {
            if (player.health + mpot >= player.maxhealth) {
                player.health = player.maxhealth;
                mpot -= 1;
                document.getElementById("health").innerHTML = player.health;
                document.getElementById("mpot").innerHTML = mpot;
            } else {
                player.health += mpot;
                mpot -= 1;
                document.getElementById("health").innerHTML = player.health;
                document.getElementById("mpot").innerHTML = mpot;
            }
        }
    } else {
        if (hppercent <= 30 & spot >= 1) {
            if (player.health + spot >= player.maxhealth) {
                player.health = player.maxhealth;
                spot -= 1;
                document.getElementById("health").innerHTML = player.health;
                document.getElementById("spot").innerHTML = spot;
            } else {
                player.health += spot;
                spot -= 1;
                document.getElementById("health").innerHTML = player.health;
                document.getElementById("spot").innerHTML = spot;
            }
        }
    } { }
}, 100);
window.setInterval(function () {
    if (player.stats >= 1) {
        document.getElementById("vis").style.visibility = "visible";
        document.getElementById("vis1").style.visibility = "visible";
        document.getElementById("vis2").style.visibility = "visible";
        document.getElementById("vis3").style.visibility = "visible";
        document.getElementById("vis4").style.visibility = "visible";
        document.getElementById("vis5").style.visibility = "visible";
        document.getElementById("vis6").style.visibility = "visible";
        document.getElementById("vis7").style.visibility = "visible";
    } else {
        document.getElementById("vis").style.visibility = "hidden";
        document.getElementById("vis1").style.visibility = "hidden";
        document.getElementById("vis2").style.visibility = "hidden";
        document.getElementById("vis3").style.visibility = "hidden";
        document.getElementById("vis4").style.visibility = "hidden";
        document.getElementById("vis5").style.visibility = "hidden";
        document.getElementById("vis6").style.visibility = "hidden";
        document.getElementById("vis7").style.visibility = "hidden";
    }
}, 1);


window.setInterval(function () {

    if (wepeq == "Sword") {
        document.getElementById("weapon").innerHTML = "<img src='images/items/sword1.gif' class='mark'>";
    }
    else if (wepeq == "Sword1") {
        document.getElementById("weapon1").innerHTML = "<img src='images/items/sword2.gif' class='mark'>";
    }
    else if (wepeq == "Sword2") {
        document.getElementById("weapon2").innerHTML = "<img src='images/items/sword3.gif' class='mark'>";
    }
    else if (wepeq == "Sword3") {
        document.getElementById("weapon3").innerHTML = "<img src='images/items/sword4.gif' class='mark'>";
    }
    else if (wepeq == "Dagger") {
        document.getElementById("weapon4").innerHTML = "<img src='images/items/dagger1.gif' class='mark'>";
    }
    else if (wepeq == "Dagger1") {
        document.getElementById("weapon5").innerHTML = "<img src='images/items/dagger1.gif' class='mark'>";
    }
    else if (wepeq == "Dagger2") {
        document.getElementById("weapon6").innerHTML = "<img src='images/items/dagger1.gif' class='mark'>";
    }
    else if (wepeq == "Dagger3") {
        document.getElementById("weapon7").innerHTML = "<img src='images/items/dagger1.gif' class='mark'>";
    }
    else if (wepeq == "Axe") {
        document.getElementById("weapon8").innerHTML = "<img src='images/items/axe1.gif' class='mark'>";
    }
    else if (wepeq == "Axe1") {
        document.getElementById("weapon9").innerHTML = "<img src='images/items/axe1.gif' class='mark'>";
    }
    else if (wepeq == "Axe2") {
        document.getElementById("weapon10").innerHTML = "<img src='images/items/axe1.gif' class='mark'>";
    }
    else if (wepeq == "Axe3") {
        document.getElementById("weapon11").innerHTML = "<img src='images/items/axe1.gif' class='mark'>";
    }
    else if (wepeq == "Mace") {
        document.getElementById("weapon12").innerHTML = "<img src='images/items/mace1.gif' class='mark'>";
    }
    else if (wepeq == "Mace1") {
        document.getElementById("weapon13").innerHTML = "<img src='images/items/mace2.gif' class='mark'>";
    }
    else if (wepeq == "Mace2") {
        document.getElementById("weapon14").innerHTML = "<img src='images/items/mace2.gif' class='mark'>";
    }
    else if (wepeq == "Mace3") {
        document.getElementById("weapon15").innerHTML = "<img src='images/items/mace2.gif' class='mark'>";
    }
}, 1);


window.setInterval(function () {

    if (armeq == "Armor") {
        document.getElementById("armor").innerHTML = "<img src='images/items/armor1.gif' class='mark'>";
    }
    else if (armeq == "Armor1") {
        document.getElementById("armor1").innerHTML = "<img src='images/items/armor1.gif' class='mark'>";
    }
    else if (armeq == "Armor2") {
        document.getElementById("armor2").innerHTML = "<img src='images/items/armor2.gif' class='mark'>";
    }
    else if (armeq == "Armor3") {
        document.getElementById("armor3").innerHTML = "<img src='images/items/armor2.gif' class='mark'>";
    }
    else if (armeq == "Armor4") {
        document.getElementById("armor4").innerHTML = "<img src='images/items/armor3.gif' class='mark'>";
    }
    else if (armeq == "Armor5") {
        document.getElementById("armor5").innerHTML = "<img src='images/items/armor3.gif' class='mark'>";
    }
    else if (armeq == "Armor6") {
        document.getElementById("armor6").innerHTML = "<img src='images/items/armor4.gif' class='mark'>";
    }
}, 1);


window.setInterval(function () {

    if (acceq == "Accessory") {
        document.getElementById("accessory").innerHTML = "<img src='images/items/ring.gif' class='mark'>";
    }
    else if (acceq == "Accessory1") {
        document.getElementById("accessory1").innerHTML = "<img src='images/items/ring.gif' class='mark'>";
    }
    else if (acceq == "Accessory2") {
        document.getElementById("accessory2").innerHTML = "<img src='images/items/ring.gif' class='mark'>";
    }
    else if (acceq == "Accessory3") {
        document.getElementById("accessory3").innerHTML = "<img src='images/items/ring.gif' class='mark'>";
    }
    else if (acceq == "Accessory4") {
        document.getElementById("accessory4").innerHTML = "<img src='images/items/ring.gif' class='mark'>";
    }
    else if (acceq == "Accessory5") {
        document.getElementById("accessory5").innerHTML = "<img src='images/items/ring.gif' class='mark'>";
    }
    else if (acceq == "Accessory6") {
        document.getElementById("accessory6").innerHTML = "<img src='images/items/ring.gif' class='mark'>";
    }
}, 1);

var wepeq = "Sword"; 		//currently equipped weapon
var armeq = "Armor"; 		//currently equipped armor
var acceq = "Accessory";		//currently equipped accessory
var wep = {
    Sword: [1, 2, 3, 4], // Sword[0] is equal to "Sword", Sword[1] is equal to "Sword1" etc.
    Dagger: [1, 2, 3, 4], // same ^
    Axe: [1, 2, 3, 4],
    Mace: [1, 2, 3, 4],
    Staff: [1, 2, 3, 4],
    Fist: [1, 2, 3, 4]
};


var sword = [
    {
        id: 's1',
        name: 'sword1',
        strength: 2,
        endurance: 1
    },
    {
        id: 's2',
        name: 'sword2',
        strength: 5,
        endurance: 2
    },
    {
        id: 's3',
        name: 'sword3',
        strength: 10,
        endurance: 4,
        agility: 2
    },
    {
        id: 's4',
        name: 'sword4',
        strength: 25,
        endurance: 6,
        agility: 5
    }
];

var dagger = [
    {
        id: 'd1',
        name: 'dagger1',
        agility: 3,
        dexterity: 0
    },
    {
        id: 'd2',
        name: 'dagger2',
        agility: 5,
        dexterity: 3
    },
    {
        id: 'd3',
        name: 'dagger3',
        agility: 10,
        dexterity: 5
    },
    {
        id: 'd4',
        name: 'dagger4',
        agility: 25,
        dexterity: 10,
        luck:5
    }
];

var axe = [
      {
        id: 'a1',
        name: 'axe1',
        strength: 5,
        agility: -1
    },

    {
        id: 'a2',
        name: 'axe2',
        agility: 3,
        dexterity: 0
    },
    {
    id: 'a3',
        name: 'axe3',
        agility: 3,
        dexterity: 0
    },
    {
        id: 'a4',
        name: 'axe4',
        agility: 3,
        dexterity: 0
    },
];


var arm = [0, 0, 0, 0, 0, 0, 0];		 //Amount of armors in player inventory
var acc = [0, 0, 0, 0, 0, 0, 0];	 //Amount of accessories in player inventory


function weaponUnequip() {
    if (wepeq === "Sword" & wepeq >= 0) {
        var unequip = wepeq;
        wepeq = -unequip;

        document.getElementById("sword").innerHTML = wep.Sword[0];

    }
}


function equipSword() {
    if (wep.Sword[0] >= 1) {
        wepeq = "Sword";
        wep[0] -= 1;
        document.getElementById("dagger4").innerHTML = wep.Dagger[3];

    }
}

function equipSword1() {
    if (wep[1] >= 1 & wepeq >= 0) {
        wepeq = "Sword1";
        wep[1] -= 1;
        document.getElementById("sword1").innerHTML = wep[1];

    }
}

function equipSword2() {
    if (wep[2] >= 1 & wepeq >= 0) {
        wepeq = "Sword2";
        wep[2] -= 1;
        document.getElementById("sword2").innerHTML = wep[2];

    }
}

function equipSword3() {
    if (wep[3] >= 1 & wepeq >= "") {
        wepeq = "Sword3";
        wep[3] -= 1;
        document.getElementById("sword3").innerHTML = wep[3];

    }
}

function equipDagger() {
    if (wep[1] >= 1 & wepeq >= 0) {
        wepeq = 2;
        wep[1] -= 1;
        document.getElementById("wep5").innerHTML = wep[1];

    }
}





window.setInterval(function () {
    player.gold = player.gold + player.goldgain;
    document.getElementById("gold").innerHTML = player.gold;
}, 1000);
window.setInterval(function () {
    if (player.experience < player.maxexperience) {
        player.experience = Math.floor(player.experience + player.expgain);
        if (player.experience >= player.maxexperience) {
            player.level += 1;
            player.stats += 2;
            player.experience = 0;
            player.maxexperience = Math.floor(player.maxexperience * 1.2);
            Log("You leveled up! Your current level is: " + player.level);
            document.getElementById("maxexperience").innerHTML = player.maxexperience;
            document.getElementById("level").innerHTML = player.level;
            document.getElementById("stats").innerHTML = player.stats;
            document.getElementById("experience").innerHTML = player.experience;
        } else if (player.expgain >= 1) {
            document.getElementById("experience").innerHTML = player.experience;
        }
    }
}, 1000);
window.setInterval(function () {
    var exppercent = 0;
    exppercent = (Math.floor((player.experience / player.maxexperience) * 100));
    document.getElementById("exppercent").innerHTML = exppercent;
}, 1000);
window.setInterval(function () {
    if (player.health < player.maxhealth) player.health += player.hpregen;
    if (player.health > player.maxhealth) player.health = player.maxhealth;
    document.getElementById('health').innerHTML = player.health;
}, 1000);

function upgradeEndurance() {
    if (player.stats >= 1) {
        player.maxhealth = player.maxhealth + 10;
        player.hpregen = player.hpregen + 1;
        player.stats = player.stats - 1;
        player.endurance += 1;
        Log("Your maximal health is now: " + player.maxhealth + "!");
        Log("Your health regen increased by: " + player.hpregen + "!");
        document.getElementById("maxhealth").innerHTML = player.maxhealth;
        document.getElementById("hpregen").innerHTML = player.hpregen;
        document.getElementById("stats").innerHTML = player.stats;
        document.getElementById("endurance").innerHTML = player.endurance;
    }
}

function upgradeStrength() {
    if (player.stats >= 1) {
        player.stats = player.stats - 1;
        player.strength += 1;
        player.mindamage = Math.floor(player.strength * 1.5);
        player.maxdamage = Math.floor(player.strength * 2.5);
        document.getElementById('stats').innerHTML = player.stats;
        document.getElementById('mindamage').innerHTML = player.mindamage;
        document.getElementById('maxdamage').innerHTML = player.maxdamage;
        document.getElementById('strength').innerHTML = player.strength;
    }
}

function upgradeDefense() {
    if (player.stats >= 1) {
        player.stats = player.stats - 1;
        player.defense += 1;
        Log("Your defense is now: " + player.defense + "!");
        document.getElementById('stats').innerHTML = player.stats;
        document.getElementById('defense').innerHTML = player.defense;
    }
}

function usepot() {
    if (player.health == player.maxhealth) {
        Log("Your health is full!");
    } else if (player.health + 20 >= player.maxhealth & pot >= 1) {
        pot = pot - 1;
        player.health = player.maxhealth;
        document.getElementById('pot').innerHTML = pot;
        document.getElementById('health').innerHTML = player.health;
        Log("You heal for 20 <span style=\"color:green\">health!</span>");
    } else if (player.health + 20 < player.maxhealth & pot >= 1) {
        pot = pot - 1;
        player.health = player.health + 20;
        document.getElementById('pot').innerHTML = pot;
        document.getElementById('health').innerHTML = player.health;
    }
}

function usespot() {
    if (player.health == player.maxhealth) {
        Log("Your health is full!");
    } else if (player.health + 100 >= player.maxhealth & mpot >= 1) {
        spot = spot - 1;
        player.health = player.maxhealth;
        document.getElementById('spot').innerHTML = spot;
        document.getElementById('health').innerHTML = player.health;
        Log("You heal for 100 <span style=\"color:green\">health!</span>");
    } else if (player.health + 100 < player.maxhealth & mpot >= 1) {
        spot = spot - 1;
        player.health = player.health + 100;
        document.getElementById('spot').innerHTML = spot;
        document.getElementById('health').innerHTML = player.health;
    }
}

function usempot() {
    if (player.health == player.maxhealth) {
        Log("Your health is full!");
    } else if (player.health + 500 >= player.maxhealth & mpot >= 1) {
        mpot = mpot - 1;
        player.health = player.maxhealth;
        document.getElementById('mpot').innerHTML = mpot;
        document.getElementById('health').innerHTML = player.health;
        Log("You heal for 100 <span style=\"color:green\">health!</span>");
    } else if (player.health + 500 < player.maxhealth & mpot >= 1) {
        mpot = mpot - 1;
        player.health = player.health + 500;
        document.getElementById('mpot').innerHTML = mpot;
        document.getElementById('health').innerHTML = player.health;
    }
}

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
    for (i = logData.length -1; i >= 0; i--) {
        logTemp += "<center>" + logData[i] + "</center>";
    }
    document.getElementById('logConsole').innerHTML = logTemp;
}

//PLAYER STATS
var player = {
    stats: 0,
    level: 1,
    strength: 1,
    endurance: 0,
    agility: 0,
    dexterity: 0,
    intelligence: 0,
    wisdom: 0,
    luck: 0,
    mindamage: 1,
    maxdamage: 4,
    defense: 0,
    experience: 0,
    maxexperience: 100,
    expgain: 0,
    goldgain: 0,
    gold: 0,
    health: 30,
    maxhealth: 30,
    hpregen: 2
}

var maxLogLines = 16;
var logData = {
    length: 0
};
var god = 0;
var godexp = 0;
var godgold = 0;
var legendary = 0;
var legendaryexp = 0;
var legendarygold = 0;
var epic = 0;
var epicexp = 0;
var epicgold = 0;
var unique = 0;
var uniqueexp = 0;
var uniquegold = 0;
var rare = 0;
var rareexp = 0;
var raregold = 0;
var common = 0;
var commongold = 0;
var commonexp = 0;
var pot = 0;
var spot = 0;
var mpot = 0;


// Array to store the monsters
var monsters = [];

/**
 * Helper method to create the array of monsters
 */
function createMonster(maxHp, def, minDmg, maxDmg, baseExp, killed) {
    var monster = {
        killed: killed, // init to not killed
        hp: maxHp, // init HP to max HP
        maxHp: maxHp,
        def: def,
        minDmg: minDmg,
        maxDmg: maxDmg,
        baseExp: baseExp
    }

    monsters.push(monster);
    return monster;
}

// Create the monsters, each with varying stats. Allows for easy
// add/remove/modify of monsters
//            maxHP,  def, minD, maxD, baseExp, kills
createMonster(10, 0, 2, 3, 5, 0);
createMonster(30, 2, 2, 5, 10, 0);
createMonster(70, 4, 4, 7, 30, 0);
createMonster(130, 6, 6, 10, 50, 0);
createMonster(190, 9, 9, 14, 90, 0);
createMonster(280, 13, 13, 19, 140, 0);
createMonster(380, 18, 18, 23, 190, 0);
createMonster(500, 25, 25, 30, 260, 0);
createMonster(700, 30, 32, 37, 340, 0);
createMonster(900, 38, 40, 45, 450, 0);
createMonster(1300, 45, 50, 58, 560, 0);
createMonster(1600, 53, 60, 67, 700, 0);
createMonster(2200, 65, 75, 80, 810, 0);
createMonster(2600, 75, 86, 92, 940, 0);
createMonster(3000, 88, 96, 100, 1060, 0);
createMonster(4000, 95, 105, 110, 1200, 0);
createMonster(5000, 120, 140, 160, 1600, 0);
createMonster(7000, 140, 160, 185, 2150, 0);
createMonster(9000, 170, 200, 215, 2600, 0);
createMonster(12000, 200, 230, 250, 3400, 0);
createMonster(15000, 220, 260, 275, 5000, 0);
createMonster(18000, 250, 290, 320, 7000, 0);
createMonster(22000, 300, 350, 380, 10000, 0);
createMonster(28000, 400, 420, 550, 15000, 0);
createMonster(34000, 500, 500, 700, 23000, 0);
createMonster(40000, 700, 900, 1200, 35000, 0);
createMonster(48000, 1000, 1200, 1500, 70000, 0);
createMonster(57000, 1200, 1700, 2200, 120000, 0);
createMonster(65000, 2000, 2500, 3000, 180000, 0);
createMonster(72000, 2500, 3200, 4000, 290000, 0);
createMonster(80000, 3000, 4500, 5500, 430000, 0);
createMonster(88000, 3500, 6000, 8000, 680000, 0);

/**
 * Base monster attack method. Shared code among all monsters.
 *
 * @param monster {monster object} Monster to attack
 */
function attack(monster, id) {

    if (monster.hp >= 1) {

        playerDamage(monster, id);
        monsterDamage(monster, id);
    }

}



function playerDamage(monster, id) {
    var damage = Math.floor(Math.random() * (player.maxdamage - player.mindamage + 1)) + player.mindamage;
    damage = Math.floor(damage - monster.def * 1.2);
    if (damage > 1) {
        playerDamageDeal(damage, monster, id);
    }
    else {
        Log("<span style=\"color:blue\">Enemy block your attack! </span>");
    }

}

function playerDamageDeal(damage, monster, id) {

    monster.hp -= damage;
    document.getElementById("monster" + id).getElementsByClassName('hp')[0].innerHTML = monster.hp;
    Log("You deal " + damage + " <span style=\"color:blue\">damage</span>");
    if (monster.hp < 1) {
        monsterKilled(monster, id);
    }
}

function monsterDamage(monster, id) {
    var dmg = Math.floor(Math.random() * (monster.maxDmg - monster.minDmg + 1)) + monster.minDmg;
    dmg = Math.floor(dmg - player.defense * 1.2);
    if (dmg > 1) {
        monsterDamageDeal(dmg, monster, id);
    }
    else {
        Log("<span style=\"color:green\">You blocked enemy attack! </span>");
    }
}
function monsterDamageDeal(dmg, monster, id) {
    player.health = player.health - dmg;
    document.getElementById("health").innerHTML = player.health;
    Log("Enemy hit you for " + dmg + " <span style=\"color:red\">damage</span>");
    if (player.health < 1) {
        playerDead(monster, id);
    }
}



function playerDead(monster, id) {

    player.health = player.maxhealth;
    monster.hp = monster.maxHp;
    document.getElementById("health").innerHTML = player.health;
    document.getElementById("monster" + id).getElementsByClassName('hp')[0].innerHTML = monster.hp;
    Log("<span style=\"color:red\">You have died!</span>");

}

function monsterKilled(monster, id) {

    monster.killed = monster.killed + 1;
    monster.hp = monster.maxHp;
    document.getElementById("monster" + id).getElementsByClassName('hp')[0].innerHTML = monster.hp;
    document.getElementById("monster" + id).getElementsByClassName('killed')[0].innerHTML = monster.killed;
    monsterExperience(monster, id);
}
function monsterExperience(monster, id) {

    var expgain = monster.baseExp / (player.level / 5);
    if (player.experience < player.maxexperience) {
        player.experience = Math.floor(player.experience + expgain);
        if (player.experience >= player.maxexperience) {
            player.level += 1;
            player.stats += 2;
            player.experience = player.experience - player.maxexperience;
            player.maxexperience = Math.floor(player.maxexperience * 1.2);
            Log("You leveled up! Your current player.level is: " + player.level);
            document.getElementById("maxexperience").innerHTML = player.maxexperience;
            document.getElementById("level").innerHTML = player.level;
            document.getElementById("stats").innerHTML = player.stats;
            document.getElementById("experience").innerHTML = player.experience;
        } else Log("You gain: " + Math.floor(expgain) + "experience!");
        document.getElementById("experience").innerHTML = player.experience;
    }
    monsterGold(monster, id);
}

function monsterGold(monster, id) {
    var goldLog = 0;
    var golddrop = Math.floor((Math.random() * 100) + 1);
    if (golddrop > 95) {
        golddrop = Math.floor((Math.random() * 20) + 1);
        player.gold = player.gold + golddrop;
        Log("You loot: " + golddrop + "gold!");
        document.getElementById("gold").innerHTML = player.gold;
    } else if (golddrop >= 75) {
        golddrop = Math.floor((Math.random() * 10) + 1);
        player.gold = player.gold + golddrop;
        Log("You loot: " + golddrop + "gold!");
        document.getElementById("gold").innerHTML = player.gold;
    } else if (golddrop >= 60) {
        golddrop = Math.floor((Math.random() * 5) + 1);
        player.gold = player.gold + golddrop;
        Log("You loot: " + golddrop + "gold!");
        document.getElementById("gold").innerHTML = player.gold;
    }
    monsterItemDrop(monster, id);
}
function monsterItemDrop(monster, id) {

    var itemdrop = Math.floor((Math.random() * 100) + 1);
    if (itemdrop < 33) {
        var fusiondrop = Math.floor((Math.random() * 100) + 1);
        if (fusiondrop < 70) {
            common = common + 1;
            Log("You loot:<span style=\"color:grey\">Common</span> Fusion stone!");
            document.getElementById("common").innerHTML = common;
        } else if (fusiondrop <= 100) {
            rare = rare + 1;
            Log("You loot:<span style=\"color:blue\">Rare</span> Fusion stone!");
            document.getElementById("rare").innerHTML = rare;
        }
    } else if (itemdrop < 66) {
        var expdrop = Math.floor((Math.random() * 100) + 1);
        if (expdrop < 70) {
            commonexp = commonexp + 1;
            Log("You loot:<span style=\"color:grey\">Common</span> Exp orb!");
            document.getElementById("commonexp").innerHTML = commonexp;
        } else if (expdrop <= 100) {
            rareexp = rareexp + 1;
            Log("You loot:<span style=\"color:blue\">Rare</span> Exp orb!");
            document.getElementById("rareexp").innerHTML = rareexp;
        }
    } else {
        var golddrop = Math.floor((Math.random() * 100) + 1);
        if (golddrop < 70) {
            commongold = commongold + 1;
            Log("You loot:<span style=\"color:grey\">Common</span> Gold orb!");
            document.getElementById("commongold").innerHTML = commongold;
        } else if (golddrop <= 100) {
            raregold = raregold + 1;
            Log("You loot:<span style=\"color:blue\">Rare</span> Gold orb!");
            document.getElementById("raregold").innerHTML = raregold;
        }
    }

}






function bindAttack(monster, id) {
    return function () {
        attack(monster, id);
    }
}



// Bind the attack buttons one for each of the monsters
button1.addEventListener("click", bindAttack(monsters[0], 0));
button2.addEventListener("click", bindAttack(monsters[1], 1));
button3.addEventListener("click", bindAttack(monsters[2], 2));
button4.addEventListener("click", bindAttack(monsters[3], 3));
button5.addEventListener("click", bindAttack(monsters[4], 4));
button6.addEventListener("click", bindAttack(monsters[5], 5));
button7.addEventListener("click", bindAttack(monsters[6], 6));
button8.addEventListener("click", bindAttack(monsters[7], 7));
button9.addEventListener("click", bindAttack(monsters[8], 8));
button10.addEventListener("click", bindAttack(monsters[9], 9));
button11.addEventListener("click", bindAttack(monsters[10], 10));
button12.addEventListener("click", bindAttack(monsters[11], 11));
button13.addEventListener("click", bindAttack(monsters[12], 12));
button14.addEventListener("click", bindAttack(monsters[13], 13));
button15.addEventListener("click", bindAttack(monsters[14], 14));
button16.addEventListener("click", bindAttack(monsters[15], 15));
button17.addEventListener("click", bindAttack(monsters[16], 16));
button18.addEventListener("click", bindAttack(monsters[17], 17));
button19.addEventListener("click", bindAttack(monsters[18], 18));
button20.addEventListener("click", bindAttack(monsters[19], 19));
button21.addEventListener("click", bindAttack(monsters[20], 20));
button22.addEventListener("click", bindAttack(monsters[21], 21));
button23.addEventListener("click", bindAttack(monsters[22], 22));
button24.addEventListener("click", bindAttack(monsters[23], 23));
button25.addEventListener("click", bindAttack(monsters[24], 24));
button26.addEventListener("click", bindAttack(monsters[25], 25));
button27.addEventListener("click", bindAttack(monsters[26], 26));
button28.addEventListener("click", bindAttack(monsters[27], 27));
button29.addEventListener("click", bindAttack(monsters[28], 28));
button30.addEventListener("click", bindAttack(monsters[29], 29));
button31.addEventListener("click", bindAttack(monsters[30], 30));
button32.addEventListener("click", bindAttack(monsters[31], 31));

// ...






function buypot() {
    if (player.gold >= 20) {
        pot += 1;
        player.gold -= 20;
        document.getElementById('pot').innerHTML = pot;
        document.getElementById('gold').innerHTML = player.gold;
    }
}

function buypot10() {
    if (player.gold >= 200) {
        pot += 10;
        player.gold -= 200;
        document.getElementById('pot').innerHTML = pot;
        document.getElementById('gold').innerHTML = player.gold;
    }
}

function buyspot() {
    if (player.gold >= 100) {
        spot += 1;
        player.gold -= 100;
        document.getElementById('spot').innerHTML = spot;
        document.getElementById('gold').innerHTML = player.gold;
    }
}

function buyspot10() {
    if (player.gold >= 1000) {
        spot += 10;
        player.gold -= 1000;
        document.getElementById('spot').innerHTML = spot;
        document.getElementById('gold').innerHTML = player.gold;
    }
}

function buympot() {
    if (player.gold >= 500) {
        mpot += 1;
        player.gold -= 500;
        document.getElementById('mpot').innerHTML = mpot;
        document.getElementById('gold').innerHTML = player.gold;
    }
}

function buympot10() {
    if (player.gold >= 5000) {
        mpot += 10;
        player.gold -= 5000;
        document.getElementById('mpot').innerHTML = mpot;
        document.getElementById('gold').innerHTML = player.gold;
    }
}

function sellallcommon() {
    if (common >= 1 || commonexp >= 1 || commongold >= 1) {
        player.gold = common * 10 + player.gold;
        player.gold = commongold * 10 + player.gold;
        player.gold = commonexp * 10 + player.gold;
        common = common - common;
        commongold = commongold - commongold;
        commonexp = commonexp - commonexp;
        document.getElementById('gold').innerHTML = player.gold;
        document.getElementById('common').innerHTML = common;
        document.getElementById('commonexp').innerHTML = commonexp;
        document.getElementById('commongold').innerHTML = commongold;
    }
}

function sellallrare() {
    if (rare >= 1 || raregold >= 1 || rareexp >= 1) {
        player.gold = rare * 30 + player.gold;
        player.gold = raregold * 30 + player.gold;
        player.gold = rareexp * 30 + player.gold;
        rare = rare - rare;
        raregold = raregold - raregold;
        rareexp = rareexp - rareexp;
        document.getElementById('gold').innerHTML = player.gold;
        document.getElementById('rare').innerHTML = rare;
        document.getElementById('rareexp').innerHTML = rareexp;
        document.getElementById('raregold').innerHTML = raregold;
    }
}

function sellallunique() {
    if (unique >= 1 || uniquegold >= 1 || uniqueexp >= 1) {
        player.gold = unique * 50 + player.gold;
        player.gold = uniquegold * 50 + player.gold;
        player.gold = uniqueexp * 50 + player.gold;
        unique = unique - unique;
        uniquegold = uniquegold - uniquegold;
        uniqueexp = uniqueexp - uniqueexp;
        document.getElementById('gold').innerHTML = player.gold;
        document.getElementById('unique').innerHTML = unique;
        document.getElementById('uniqueexp').innerHTML = uniqueexp;
        document.getElementById('uniquegold').innerHTML = uniquegold;
    }
}

function sellallepic() {
    if (epic >= 1 || epicgold >= 1 || epicexp >= 1) {
        player.gold = epic * 70 + player.gold;
        player.gold = epicgold * 70 + player.gold;
        player.gold = epicexp * 70 + player.gold;
        epic = epic - epic;
        epicgold = epicgold - epicgold;
        epicexp = epicexp - epicexp;
        document.getElementById('gold').innerHTML = player.gold;
        document.getElementById('epic').innerHTML = epic;
        document.getElementById('epicgold').innerHTML = epicgold;
        document.getElementById('epicexp').innerHTML = epicexp;
    }
}

function sellalllegendary() {
    if (legendary >= 1 || legendarygold >= 1 || legendaryexp >= 1) {
        player.gold = legendary * 120 + player.gold;
        player.gold = legendarygold * 120 + player.gold;
        player.gold = legendaryexp * 120 + player.gold;
        legendary = legendary - legendary;
        legendarygold = legendarygold - legendarygold;
        legendaryexp = legendaryexp - legendaryexp;
        document.getElementById('gold').innerHTML = player.gold;
        document.getElementById('legendary').innerHTML = legendary;
        document.getElementById('legendarygold').innerHTML = legendarygold;
        document.getElementById('legendaryexp').innerHTML = legendaryexp;
    }
}

function sellallgod() {
    if (god >= 1 || godgold >= 1 || godexp >= 1) {
        player.gold = god * 200 + player.gold;
        player.gold = godgold * 200 + player.gold;
        player.gold = godexp * 200 + player.gold;
        god = god - god;
        godgold = godgold - godgold;
        godexp = godexp - godexp;
        document.getElementById('gold').innerHTML = player.gold;
        document.getElementById('god').innerHTML = god;
        document.getElementById('godexp').innerHTML = godexp;
        document.getElementById('godgold').innerHTML = godgold;
    }
}

function sellall() {
    player.gold = player.gold + (god * 200) + (legendary * 120) + (epic * 70) + (unique * 50) +
		(rare * 30) + (common * 10);
    player.gold = player.gold + (godexp * 200) + (legendaryexp * 120) + (epicexp * 70) + (
		uniqueexp * 50) + (rareexp * 30) + (commonexp * 10);
    player.gold = player.gold + (godgold * 200) + (legendarygold * 120) + (epicgold * 70) + (
		uniquegold * 50) + (raregold * 30) + (commongold * 10);
    god = 0;
    legendary = 0;
    epic = 0;
    unique = 0;
    rare = 0;
    common = 0;
    godexp = 0;
    legendaryexp = 0;
    epicexp = 0;
    uniqueexp = 0;
    rareexp = 0;
    commonexp = 0;
    godgold = 0;
    legendarygold = 0;
    epicgold = 0;
    uniquegold = 0;
    raregold = 0;
    commongold = 0;
    document.getElementById('gold').innerHTML = player.gold;
    document.getElementById('common').innerHTML = common;
    document.getElementById('rare').innerHTML = rare;
    document.getElementById('unique').innerHTML = unique;
    document.getElementById('epic').innerHTML = epic;
    document.getElementById('legendary').innerHTML = legendary;
    document.getElementById('god').innerHTML = god;
    document.getElementById('commonexp').innerHTML = commonexp;
    document.getElementById('rareexp').innerHTML = rareexp;
    document.getElementById('uniqueexp').innerHTML = uniqueexp;
    document.getElementById('epicexp').innerHTML = epicexp;
    document.getElementById('legendaryexp').innerHTML = legendaryexp;
    document.getElementById('godexp').innerHTML = godexp;
    document.getElementById('commongold').innerHTML = commongold;
    document.getElementById('raregold').innerHTML = raregold;
    document.getElementById('uniquegold').innerHTML = uniquegold;
    document.getElementById('epicgold').innerHTML = epicgold;
    document.getElementById('legendarygold').innerHTML = legendarygold;
    document.getElementById('godgold').innerHTML = godgold;
}

function usecommonexp() {
    if (commonexp >= 1) {
        player.expgain += 1;
        commonexp = commonexp - 1;
        document.getElementById('commonexp').innerHTML = commonexp;
        document.getElementById('expgain').innerHTML = player.expgain;
    }
}

function usecommongold() {
    if (commongold >= 1) {
        commongold = commongold - 1;
        player.goldgain = player.goldgain + 1;
        document.getElementById('commongold').innerHTML = commongold;
        document.getElementById('goldgain').innerHTML = player.goldgain;
    }
}

function fusecommon() {
    var fusecommon = Math.floor((Math.random() * 100) + 1);
    if (commongold >= 1 && commonexp >= 1 && common >= 1) {
        if (fusecommon <= 90) {
            commongold = commongold - 1;
            commonexp = commonexp - 1;
            common = common - 1;
            raregold = raregold + 1;
            rareexp = rareexp + 1;
            Log("Fusion success!");
            document.getElementById('commongold').innerHTML = commongold;
            document.getElementById('commonexp').innerHTML = commonexp;
            document.getElementById('common').innerHTML = common;
            document.getElementById('raregold').innerHTML = raregold;
            document.getElementById('rareexp').innerHTML = rareexp;
        } else {
            commongold = commongold - 1;
            commonexp = commonexp - 1;
            common = common - 1;
            Log("Fusion fail!");
            document.getElementById('commongold').innerHTML = commongold;
            document.getElementById('commonexp').innerHTML = commonexp;
            document.getElementById('common').innerHTML = common;
        }
    }
}

function userareexp() {
    if (rareexp >= 1) {
        player.expgain += 3;
        rareexp = rareexp - 1;
        document.getElementById('rareexp').innerHTML = rareexp;
        document.getElementById('expgain').innerHTML = player.expgain;
    }
}

function useraregold() {
    if (raregold >= 1) {
        raregold = raregold - 1;
        player.goldgain = player.goldgain + 3;
        document.getElementById('raregold').innerHTML = raregold;
        document.getElementById('goldgain').innerHTML = player.goldgain;
    }
}

function fuserare() {
    var fuserare = Math.floor((Math.random() * 100) + 1);
    if (raregold >= 1 && rareexp >= 1 && rare >= 1) {
        if (fuserare <= 80) {
            raregold = raregold - 1;
            rareexp = rareexp - 1;
            rare = rare - 1;
            uniquegold = uniquegold + 1;
            uniqueexp = uniqueexp + 1;
            Log("Fusion success!");
            document.getElementById('raregold').innerHTML = raregold;
            document.getElementById('rareexp').innerHTML = rareexp;
            document.getElementById('rare').innerHTML = rare;
            document.getElementById('uniquegold').innerHTML = uniquegold;
            document.getElementById('uniqueexp').innerHTML = uniqueexp;
        } else {
            raregold = raregold - 1;
            rareexp = rareexp - 1;
            rare = rare - 1;
            Log("Fusion fail!");
            document.getElementById('raregold').innerHTML = raregold;
            document.getElementById('rareexp').innerHTML = rareexp;
            document.getElementById('rare').innerHTML = rare;
        }
    }
}

function useuniqueexp() {
    if (uniqueexp >= 1) {
        player.expgain += 10;
        uniqueexp = uniqueexp - 1;
        document.getElementById('uniqueexp').innerHTML = uniqueexp;
        document.getElementById('expgain').innerHTML = player.expgain;
    }
}

function useuniquegold() {
    if (uniquegold >= 1) {
        uniquegold = uniquegold - 1;
        player.goldgain = player.goldgain + 10;
        document.getElementById('uniquegold').innerHTML = uniquegold;
        document.getElementById('goldgain').innerHTML = player.goldgain;
    }
}

function fuseunique() {
    var fuseunique = Math.floor((Math.random() * 100) + 1);
    if (uniquegold >= 1 && uniqueexp >= 1 && unique >= 1) {
        if (fuseunique <= 70) {
            uniquegold = uniquegold - 1;
            uniqueexp = uniqueexp - 1;
            unique = unique - 1;
            epicgold = epicgold + 1;
            epicexp = epicexp + 1;
            Log("Fusion success!");
            document.getElementById('epicgold').innerHTML = epicgold;
            document.getElementById('epicexp').innerHTML = epicexp;
            document.getElementById('unique').innerHTML = unique;
            document.getElementById('uniquegold').innerHTML = uniquegold;
            document.getElementById('uniqueexp').innerHTML = uniqueexp;
        } else {
            uniquegold = uniquegold - 1;
            uniqueexp = uniqueexp - 1;
            unique = unique - 1;
            Log("Fusion fail!");
            document.getElementById('unique').innerHTML = unique;
            document.getElementById('uniquegold').innerHTML = uniquegold;
            document.getElementById('uniqueexp').innerHTML = uniqueexp;
        }
    }
}

function useepicexp() {
    if (epicexp >= 1) {
        player.expgain += 50;
        epicexp = epicexp - 1;
        document.getElementById('epicexp').innerHTML = epicexp;
        document.getElementById('expgain').innerHTML = player.expgain;
    }
}

function useepicgold() {
    if (epicgold >= 1) {
        epicgold = epicgold - 1;
        player.goldgain = player.goldgain + 50;
        document.getElementById('epicgold').innerHTML = epicgold;
        document.getElementById('goldgain').innerHTML = player.goldgain;
    }
}

function fuseepic() {
    var fuseepic = Math.floor((Math.random() * 100) + 1);
    if (epicgold >= 1 && epicexp >= 1 && epic >= 1) {
        if (fuseepic <= 60) {
            epicgold = epicgold - 1;
            epicexp = epicexp - 1;
            epic = epic - 1;
            legendarygold = legendarygold + 1;
            legendaryexp = legendaryexp + 1;
            Log("Fusion success!");
            document.getElementById('epicgold').innerHTML = epicgold;
            document.getElementById('epicexp').innerHTML = epicexp;
            document.getElementById('epic').innerHTML = epic;
            document.getElementById('legendarygold').innerHTML = legendarygold;
            document.getElementById('legendaryexp').innerHTML = legendaryexp;
        } else {
            epicgold = epicgold - 1;
            epicexp = epicexp - 1;
            epic = epic - 1;
            Log("Fusion fail!");
            document.getElementById('epicgold').innerHTML = epicgold;
            document.getElementById('epicexp').innerHTML = epicexp;
            document.getElementById('epic').innerHTML = epic;;
        }
    }
}

function uselegendaryexp() {
    if (legendaryexp >= 1) {
        player.expgain += 150;
        legendaryexp = legendaryexp - 1;
        document.getElementById('legendaryexp').innerHTML = legendaryexp;
        document.getElementById('expgain').innerHTML = player.expgain;
    }
}

function uselegendarygold() {
    if (legendarygold >= 1) {
        legendarygold = legendarygold - 1;
        player.goldgain = player.goldgain + 150;
        document.getElementById('legendarygold').innerHTML = legendarygold;
        document.getElementById('goldgain').innerHTML = player.goldgain;
    }
}

function fuselegendary() {
    var fuselegendary = Math.floor((Math.random() * 100) + 1);
    if (legendarygold >= 1 && legendaryexp >= 1 && legendary >= 1) {
        if (fuselegendary <= 50) {
            legendarygold = legendarygold - 1;
            legendaryexp = legendaryexp - 1;
            legendary = legendary - 1;
            godgold = godgold + 1;
            godexp = godexp + 1;
            Log("Fusion success!");
            document.getElementById('godgold').innerHTML = godgold;
            document.getElementById('godexp').innerHTML = godexp;
            document.getElementById('legendary').innerHTML = legendary;
            document.getElementById('legendarygold').innerHTML = legendarygold;
            document.getElementById('legendaryexp').innerHTML = legendaryexp;
        } else {
            legendarygold = legendarygold - 1;
            legendaryexp = legendaryexp - 1;
            legendary = legendary - 1;
            Log("Fusion fail!");
            document.getElementById('legendary').innerHTML = legendary;
            document.getElementById('legendarygold').innerHTML = legendarygold;
            document.getElementById('legendaryexp').innerHTML = legendaryexp;
        }
    }
}

function usegodexp() {
    if (godexp >= 1) {
        player.expgain += 1500;
        godexp = godexp - 1;
        document.getElementById('godexp').innerHTML = godexp;
        document.getElementById('expgain').innerHTML = player.expgain;
    }
}

function usegodgold() {
    if (godgold >= 1) {
        godgold = godgold - 1;
        player.goldgain = player.goldgain + 1500;
        document.getElementById('godgold').innerHTML = godgold;
        document.getElementById('goldgain').innerHTML = player.goldgain;
    }
}

function fusegod() {
    var fusegod = Math.floor((Math.random() * 100) + 1);
    if (godgold >= 1 && godexp >= 1 && god >= 1) {
        if (fusegod <= 30) {
            godgold = godgold - 1;
            godexp = godexp - 1;
            god = god - 1;
            blackorb = blackorb + 1;
            Log("Fusion success!");
            document.getElementById('godgold').innerHTML = godgold;
            document.getElementById('godexp').innerHTML = godexp;
            document.getElementById('blackorb').innerHTML = blackorb;
        } else {
            godgold = godgold - 1;
            godexp = godexp - 1;
            god = god - 1;
            Log("Fusion fail!");
            document.getElementById('god').innerHTML = god;
            document.getElementById('godgold').innerHTML = godgold;
            document.getElementById('godexp').innerHTML = godexp;
        }
    }
}

function useblackorb() {
    if (blackorb >= 1) {
        blackorb = blackorb - 1;
        player.goldgain = player.goldgain + 5000;
        player.expgain = player.expgain + 5000;
        document.getElementById('blackorb').innerHTML = blackorb;
        document.getElementById('goldgain').innerHTML = player.goldgain;
        document.getElementById('expgain').innerHTML = player.expgain;
    }
}

function save() {
    var save = {
        playerGold: player.gold,
        playerGoldgain: player.goldgain,
        playerExpgain: player.expgain,
        common: common,
        commongold: commongold,
        commonexp: commonexp,
        rare: rare,
        raregold: raregold,
        rareexp: rareexp,
        unique: unique,
        uniquegold: uniquegold,
        uniqueexp: uniqueexp,
        epic: epic,
        epicgold: epicgold,
        epicexp: epicexp,
        legendary: legendary,
        legendarygold: legendarygold,
        legendaryexp: legendaryexp,
        god: god,
        godgold: godgold,
        godexp: godexp,
        blackorb: blackorb,
        playerHealth: player.health,
        playerMaxhealth: player.maxhealth,
        playerStats: player.stats,
        playerLevel: player.level,
        playerDefense: player.defense,
        playerStrength: player.strength,
        playerEndurance: player.endurance,
        playerExperience: player.experience,
        playerMaxexperience: player.maxexperience,
        playerHpregen: player.hpregen,
        killed: killed,
        playerMindamage: player.mindamage,
        playerMaxdamage: player.maxdamage,
        pot: pot,
        spot: spot,
        mpot: mpot,
    }
    localStorage.setItem("save", JSON.stringify(save));
}

function load() {
    var savegame = JSON.parse(localStorage.getItem("save"));
    if (typeof savegame.playerGold !== "undefined") player.gold = savegame.playerGold;
    if (typeof savegame.common !== "undefined") common = savegame.common;
    if (typeof savegame.rare !== "undefined") rare = savegame.rare;
    if (typeof savegame.unique !== "undefined") unique = savegame.unique;
    if (typeof savegame.epic !== "undefined") epic = savegame.epic;
    if (typeof savegame.legendary !== "undefined") legendary = savegame.legendary;
    if (typeof savegame.god !== "undefined") god = savegame.god;
    if (typeof savegame.playerHealth !== "undefined") player.health = savegame.playerHealth;
    if (typeof savegame.playerMaxhealth !== "undefined") player.maxhealth = savegame.playerMaxhealth;
    if (typeof savegame.playerStats !== "undefined") player.stats = savegame.playerStats;
    if (typeof savegame.playerLevel !== "undefined") player.level = savegame.playerLevel;
    if (typeof savegame.playerDefense !== "undefined") player.defense = savegame.playerDefense;
    if (typeof savegame.playerExperience !== "undefined") player.experience = savegame.playerExperience;
    if (typeof savegame.playerMaxexperience !== "undefined") player.maxexperience = savegame.playerMaxexperience;
    if (typeof savegame.playerHpregen !== "undefined") player.hpregen = savegame.playerHpregen;
    if (typeof savegame.killed[0] !== "undefined") killed[0] = savegame.killed[0];
    if (typeof savegame.killed[1] !== "undefined") killed[1] = savegame.killed[1];
    if (typeof savegame.killed[2] !== "undefined") killed[2] = savegame.killed[2];
    if (typeof savegame.killed[3] !== "undefined") killed[3] = savegame.killed[3];
    if (typeof savegame.killed[4] !== "undefined") killed[4] = savegame.killed[4];
    if (typeof savegame.killed[5] !== "undefined") killed[5] = savegame.killed[5];
    if (typeof savegame.killed[6] !== "undefined") killed[6] = savegame.killed[6];
    if (typeof savegame.killed[7] !== "undefined") killed[7] = savegame.killed[7];
    if (typeof savegame.killed[8] !== "undefined") killed[8] = savegame.killed[8];
    if (typeof savegame.killed[9] !== "undefined") killed[9] = savegame.killed[9];
    if (typeof savegame.killed[10] !== "undefined") killed[10] = savegame.killed[
		10];
    if (typeof savegame.killed[11] !== "undefined") killed[11] = savegame.killed[
		11];
    if (typeof savegame.killed[12] !== "undefined") killed[12] = savegame.killed[
		12];
    if (typeof savegame.killed[13] !== "undefined") killed[13] = savegame.killed[
		13];
    if (typeof savegame.killed[14] !== "undefined") killed[14] = savegame.killed[
		14];
    if (typeof savegame.killed[15] !== "undefined") killed[15] = savegame.killed[
		15];
    if (typeof savegame.killed[16] !== "undefined") killed[16] = savegame.killed[
		16];
    if (typeof savegame.killed[17] !== "undefined") killed[17] = savegame.killed[
		17];
    if (typeof savegame.killed[18] !== "undefined") killed[18] = savegame.killed[
		18];
    if (typeof savegame.killed[19] !== "undefined") killed[19] = savegame.killed[
		19];
    if (typeof savegame.killed[20] !== "undefined") killed[20] = savegame.killed[
		20];
    if (typeof savegame.killed[21] !== "undefined") killed[21] = savegame.killed[
		21];
    if (typeof savegame.killed[22] !== "undefined") killed[22] = savegame.killed[
		22];
    if (typeof savegame.killed[23] !== "undefined") killed[23] = savegame.killed[
		23];
    if (typeof savegame.killed[24] !== "undefined") killed[24] = savegame.killed[
		24];
    if (typeof savegame.killed[25] !== "undefined") killed[25] = savegame.killed[
		25];
    if (typeof savegame.killed[26] !== "undefined") killed[26] = savegame.killed[
		26];
    if (typeof savegame.killed[27] !== "undefined") killed[27] = savegame.killed[
		27];
    if (typeof savegame.killed[28] !== "undefined") killed[28] = savegame.killed[
		28];
    if (typeof savegame.killed[29] !== "undefined") killed[29] = savegame.killed[
		29];
    if (typeof savegame.killed[30] !== "undefined") killed[30] = savegame.killed[
		30];
    if (typeof savegame.killed[31] !== "undefined") killed[31] = savegame.killed[
		31];
    if (typeof savegame.commonexp !== "undefined") commonexp = savegame.commonexp;
    if (typeof savegame.commongold !== "undefined") commongold = savegame.commongold;
    if (typeof savegame.raregold !== "undefined") raregold = savegame.raregold;
    if (typeof savegame.rareexp !== "undefined") rareexp = savegame.rareexp;
    if (typeof savegame.uniquegold !== "undefined") uniquegold = savegame.uniquegold;
    if (typeof savegame.uniqueexp !== "undefined") uniqueexp = savegame.uniqueexp;
    if (typeof savegame.epicgold !== "undefined") epicgold = savegame.epicgold;
    if (typeof savegame.epicexp !== "undefined") epicexp = savegame.epicexp;
    if (typeof savegame.legendarygold !== "undefined") legendarygold = savegame.legendarygold;
    if (typeof savegame.legendaryexp !== "undefined") legendaryexp = savegame.legendaryexp;
    if (typeof savegame.godgold !== "undefined") godgold = savegame.godgold;
    if (typeof savegame.godexp !== "undefined") godexp = savegame.godexp;
    if (typeof savegame.playerStrength !== "undefined") player.strength = savegame.playerStrength;
    if (typeof savegame.playerEndurance !== "undefined") player.endurance = savegame.playerEndurance;
    if (typeof savegame.playerGoldgain !== "undefined") player.goldgain = savegame.playerGoldgain;
    if (typeof savegame.playerExpgain !== "undefined") player.expgain = savegame.playerExpgain;
    if (typeof savegame.godexp !== "undefined") godexp = savegame.godexp;
    if (typeof savegame.playerMaxdamage !== "undefined") player.maxdamage = savegame.playerMaxdamage;
    if (typeof savegame.playerMindamage !== "undefined") player.mindamage = savegame.playerMindamage;
    if (typeof savegame.pot !== "undefined") pot = savegame.pot;
    if (typeof savegame.spot !== "undefined") spot = savegame.spot;
    if (typeof savegame.blackorb !== "undefined") blackorb = savegame.blackorb;
    document.getElementById('gold').innerHTML = playerGold;
    document.getElementById('common').innerHTML = common;
    document.getElementById('rare').innerHTML = rare;
    document.getElementById('unique').innerHTML = unique;
    document.getElementById('epic').innerHTML = epic;
    document.getElementById('legendary').innerHTML = legendary;
    document.getElementById('god').innerHTML = god;
    document.getElementById('health').innerHTML = playerHealth;
    document.getElementById('maxhealth').innerHTML = playerMaxhealth;
    document.getElementById('stats').innerHTML = playerStats;
    document.getElementById('level').innerHTML = playerLevel;
    document.getElementById('defense').innerHTML = playerDefense;
    document.getElementById('experience').innerHTML = playerExperience;
    document.getElementById('maxexperience').innerHTML = playerMaxexperience;
    document.getElementById('hpregen').innerHTML = player.Hpregen;
    document.getElementById('kills1').innerHTML = killed[0];
    document.getElementById('kills2').innerHTML = killed[1];
    document.getElementById('kills3').innerHTML = killed[2];
    document.getElementById('kills4').innerHTML = killed[3];
    document.getElementById('kills5').innerHTML = killed[4];
    document.getElementById('kills6').innerHTML = killed[5];
    document.getElementById('kills7').innerHTML = killed[6];
    document.getElementById('kills8').innerHTML = killed[7];
    document.getElementById('kills9').innerHTML = killed[8];
    document.getElementById('kills10').innerHTML = killed[9];
    document.getElementById('kills11').innerHTML = killed[10];
    document.getElementById('kills12').innerHTML = killed[11];
    document.getElementById('kills13').innerHTML = killed[12];
    document.getElementById('kills14').innerHTML = killed[13];
    document.getElementById('kills15').innerHTML = killed[14];
    document.getElementById('kills16').innerHTML = killed[15];
    document.getElementById('kills17').innerHTML = killed[16];
    document.getElementById('kills18').innerHTML = killed[17];
    document.getElementById('kills19').innerHTML = killed[18];
    document.getElementById('kills20').innerHTML = killed[19];
    document.getElementById('kills21').innerHTML = killed[20];
    document.getElementById('kills22').innerHTML = killed[21];
    document.getElementById('kills23').innerHTML = killed[22];
    document.getElementById('kills24').innerHTML = killed[23];
    document.getElementById('kills25').innerHTML = killed[24];
    document.getElementById('kills26').innerHTML = killed[25];
    document.getElementById('kills27').innerHTML = killed[26];
    document.getElementById('kills28').innerHTML = killed[27];
    document.getElementById('kills29').innerHTML = killed[28];
    document.getElementById('kills30').innerHTML = killed[29];
    document.getElementById('kills31').innerHTML = killed[30];
    document.getElementById('kills32').innerHTML = killed[31];
    document.getElementById('commonexp').innerHTML = commonexp;
    document.getElementById('commongold').innerHTML = commongold;
    document.getElementById('rareexp').innerHTML = rareexp;
    document.getElementById('raregold').innerHTML = raregold;
    document.getElementById('uniqueexp').innerHTML = uniqueexp;
    document.getElementById('uniquegold').innerHTML = uniquegold;
    document.getElementById('epicexp').innerHTML = epicexp;
    document.getElementById('epicgold').innerHTML = epicgold;
    document.getElementById('legendarygold').innerHTML = legendarygold;
    document.getElementById('legendaryexp').innerHTML = legendaryexp;
    document.getElementById('godgold').innerHTML = godgold;
    document.getElementById('godexp').innerHTML = godexp;
    document.getElementById('strength').innerHTML = playerStrength;
    document.getElementById('endurance').innerHTML = playerEndurance;
    document.getElementById('goldgain').innerHTML = playerGoldgain;
    document.getElementById('expgain').innerHTML = playerExpgain;
    document.getElementById('maxdamage').innerHTML = playerMaxdamage;
    document.getElementById('mindamage').innerHTML = playerMindamage;
    document.getElementById('blackorb').innerHTML = blackorb;
    document.getElementById('pot').innerHTML = pot;
    document.getElementById('spot').innerHTML = spot;
    document.getElementById('mpot').innerHTML = mpot;
}

function reset() {
    localStorage.removeItem("save");
    player.gold = 0;
    player.goldgain = 0;
    player.expgain = 0;
    god = 0;
    godgold = 0;
    godexp = 0;
    legendary = 0;
    legendarygold = 0;
    legendaryexp = 0;
    epic = 0;
    epicgold = 0;
    epicexp = 0;
    unique = 0;
    uniquegold = 0;
    uniqueexp = 0;
    rare = 0;
    raregold = 0;
    rareexp = 0;
    common = 0;
    commongold = 0;
    commonexp = 0;
    player.health = 30;
    player.maxhealth = 30;
    player.stats = 0;
    player.level = 1;
    player.defense = 0;
    player.experience = 0;
    player.maxexperience = 100;
    player.hpregen = 2;
    killed[0] = 0;
    player.strength = 1;
    player.endurance = 0;
    player.maxdamage = 4;
    player.mindamage = 1;
    blackorb = 0;
    pot = 0;
    spot = 0;
    mpot = 0;
    document.getElementById('gold').innerHTML = player.gold;
    document.getElementById('common').innerHTML = common;
    document.getElementById('rare').innerHTML = rare;
    document.getElementById('unique').innerHTML = unique;
    document.getElementById('epic').innerHTML = epic;
    document.getElementById('legendary').innerHTML = legendary;
    document.getElementById('god').innerHTML = god;
    document.getElementById('health').innerHTML = player.health;
    document.getElementById('maxhealth').innerHTML = player.maxhealth;
    document.getElementById('stats').innerHTML = player.stats;
    document.getElementById('level').innerHTML = player.level;
    document.getElementById('defense').innerHTML = player.defense;
    document.getElementById('experience').innerHTML = player.experience;
    document.getElementById('maxexperience').innerHTML = player.maxexperience;
    document.getElementById('hpregen').innerHTML = player.hpregen;
    document.getElementById('kills1').innerHTML = killed[0];
    document.getElementById('kills2').innerHTML = killed[0];
    document.getElementById('kills3').innerHTML = killed[0];
    document.getElementById('kills4').innerHTML = killed[0];
    document.getElementById('kills5').innerHTML = killed[0];
    document.getElementById('kills6').innerHTML = killed[0];
    document.getElementById('kills7').innerHTML = killed[0];
    document.getElementById('kills8').innerHTML = killed[0];
    document.getElementById('kills9').innerHTML = killed[0];
    document.getElementById('kills10').innerHTML = killed[0];
    document.getElementById('kills11').innerHTML = killed[0];
    document.getElementById('kills12').innerHTML = killed[0];
    document.getElementById('kills13').innerHTML = killed[0];
    document.getElementById('kills14').innerHTML = killed[0];
    document.getElementById('kills15').innerHTML = killed[0];
    document.getElementById('kills16').innerHTML = killed[0];
    document.getElementById('kills17').innerHTML = killed[0];
    document.getElementById('kills18').innerHTML = killed[0];
    document.getElementById('kills19').innerHTML = killed[0];
    document.getElementById('kills20').innerHTML = killed[0];
    document.getElementById('kills21').innerHTML = killed[0];
    document.getElementById('kills22').innerHTML = killed[0];
    document.getElementById('kills23').innerHTML = killed[0];
    document.getElementById('kills24').innerHTML = killed[0];
    document.getElementById('kills25').innerHTML = killed[0];
    document.getElementById('kills26').innerHTML = killed[0];
    document.getElementById('kills27').innerHTML = killed[0];
    document.getElementById('kills28').innerHTML = killed[0];
    document.getElementById('kills29').innerHTML = killed[0];
    document.getElementById('kills30').innerHTML = killed[0];
    document.getElementById('kills31').innerHTML = killed[0];
    document.getElementById('kills32').innerHTML = killed[0];
    document.getElementById('godexp').innerHTML = godexp;
    document.getElementById('godgold').innerHTML = godgold;
    document.getElementById('legendarygold').innerHTML = legendarygold;
    document.getElementById('legendaryexp').innerHTML = legendaryexp;
    document.getElementById('epicexp').innerHTML = epicexp;
    document.getElementById('epicgold').innerHTML = epicgold;
    document.getElementById('uniquegold').innerHTML = uniquegold;
    document.getElementById('uniqueexp').innerHTML = uniqueexp;
    document.getElementById('raregold').innerHTML = raregold;
    document.getElementById('rareexp').innerHTML = rareexp;
    document.getElementById('commongold').innerHTML = commongold;
    document.getElementById('commonexp').innerHTML = commonexp;
    document.getElementById('strength').innerHTML = player.strength;
    document.getElementById('endurance').innerHTML = player.endurance;
    document.getElementById('maxdamage').innerHTML = player.maxdamage;
    document.getElementById('mindamage').innerHTML = player.mindamage;
    document.getElementById('blackorb').innerHTML = blackorb;
    document.getElementById('pot').innerHTML = pot;
    document.getElementById('spot').innerHTML = spot;
    document.getElementById('mpot').innerHTML = mpot;
};