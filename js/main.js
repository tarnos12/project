function CreateMonsterHtml() {

    var html = '';

    html += '<ul class="nav nav-tabs">';

    for (var k = 0; k < monsterTypes.length; k++) {

        if (k === 0) {
            html += '<li class="active">';
        } else {
            html += '<li>';
        }

        html += '<a href="#tab_'+monsterTypes[k].type+'" data-toggle="tab">'+monsterTypes[k].displayName+'</a></li>';
    }

    html += '</ul>';
    html += '<div class="tab-content">';

    for (var j = 0; j < monsterTypes.length; j++) {

        if (j === 0) {
            html += '<div class="tab-pane active" ';
        } else {
            html += '<div class="tab-pane" ';
        }

        html += 'id="tab_' + monsterTypes[j].type + '">' +
            '<div class="c3">' +
            '<h4>SLAY MONSTERS!</h4>' +
            '</div>';

        for (var i = 0; i < monsters.length; i++) {
            if (monsters[i].type === monsterTypes[j].type) {

                html += '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">' +
                    '<div id="' + monsters[i].id + '" class="c3">' +
                    'Dmg:' + monsters[i].minDmg + "-" + monsters[i].maxDmg +
                    '<br />' +
                    'Def:' + monsters[i].def +
                    '<br />' +
                    '<span class="hp">' + monsters[i].hp + '</span>' + "/" + monsters[i].maxHp +
                    '<br />' +
                    '<img src="images/' + monsters[i].id + '.jpg" alt="' + monsters[i].name + '">' +
                    '<br />' +
                    '<button class = "monsterButton" id="button' + (i + 1) + '">' + "Attack" + '</button>' + '</div></div>'
            }
        }
        html += '</div>';
    }
    html += '</div>';

    document.getElementById("monsterTabs").innerHTML = html;
};


window.setInterval(function () {
    var hppercent = 100; //This function heal player automatically using potions.
    hppercent = (Math.floor((player.health / player.maxhealth()) * 100));
    if (pot >= 1) {
        if (hppercent <= 30) {
            if (player.health + 20 >= player.maxhealth()) {
                player.health = player.maxhealth();
                pot -= 1;
                document.getElementById("health").innerHTML = player.health;
                document.getElementById("pot").innerHTML = pot;
            } else {
                player.health += 20;
                pot -= 1;
                document.getElementById("health").innerHTML = player.health;
                document.getElementById("pot").innerHTML = pot;
            }
        }
    } else if (player.maxhealth() <= 100 & mpot >= 1) {
        if (hppercent <= 30) {
            if (player.health + mpot >= player.maxhealth()) {
                player.health = player.maxhealth();
                mpot -= 1;
                document.getElementById("health").innerHTML = player.health;
                document.getElementById("mpot").innerHTML = mpot;
            } else {
                player.health += 100;
                mpot -= 1;
                document.getElementById("health").innerHTML = player.health;
                document.getElementById("mpot").innerHTML = mpot;
            }
        }
    } else {
        if (hppercent <= 30 & spot >= 1) {
            if (player.health + spot >= player.maxhealth()) {
                player.health = player.maxhealth();
                spot -= 1;
                document.getElementById("health").innerHTML = player.health;
                document.getElementById("spot").innerHTML = spot;
            } else {
                player.health += 500;
                spot -= 1;
                document.getElementById("health").innerHTML = player.health;
                document.getElementById("spot").innerHTML = spot;
            }
        }
    } { }
}, 100);
window.setInterval(function () {
    if (player.stats >= 1) { // Show "plus" image when player level up
        document.getElementById("vis1").style.visibility = "visible";
        document.getElementById("vis2").style.visibility = "visible";
        document.getElementById("vis3").style.visibility = "visible";
        document.getElementById("vis4").style.visibility = "visible";
        document.getElementById("vis5").style.visibility = "visible";
        document.getElementById("vis6").style.visibility = "visible";
        document.getElementById("vis7").style.visibility = "visible";
    } else {
        document.getElementById("vis1").style.visibility = "hidden";
        document.getElementById("vis2").style.visibility = "hidden";
        document.getElementById("vis3").style.visibility = "hidden";
        document.getElementById("vis4").style.visibility = "hidden";
        document.getElementById("vis5").style.visibility = "hidden";
        document.getElementById("vis6").style.visibility = "hidden";
        document.getElementById("vis7").style.visibility = "hidden";
    }
    document.getElementById('mindamage').innerHTML = player.mindamage().toFixed(0);
    document.getElementById('maxdamage').innerHTML = player.maxdamage().toFixed(0);
    document.getElementById('strength').innerHTML = player.strength;
    document.getElementById("maxhealth").innerHTML = player.maxhealth();
    document.getElementById("hpregen").innerHTML = player.hpregen();
    document.getElementById("stats").innerHTML = player.stats;
    document.getElementById("endurance").innerHTML = player.endurance;
    document.getElementById("agility").innerHTML = player.agility;
    document.getElementById("accuracy").innerHTML = player.accuracy().toFixed(2);
    document.getElementById("dexterity").innerHTML = player.dexterity;
    document.getElementById("defense").innerHTML = player.defense().toFixed(2);
    document.getElementById("criticalDamage").innerHTML = player.criticalDamage().toFixed(2) * 100 + "%" ;
    document.getElementById("criticalChance").innerHTML = player.criticalChance().toFixed(2);
    document.getElementById("Lifesteal2").innerHTML = Lifesteal2.toFixed(2);
    document.getElementById("Lifesteal").innerHTML = player.intelligence.toFixed(2);
    document.getElementById("intelligence").innerHTML = player.intelligence;
    document.getElementById("mana").innerHTML = player.mana.toFixed(0);
    document.getElementById("maxmana").innerHTML = player.maxMana().toFixed(0);
    document.getElementById("wisdom").innerHTML = player.wisdom;
    document.getElementById("manaRegen").innerHTML = player.manaRegen().toFixed(2);
    document.getElementById("luck").innerHTML = player.luck;
    document.getElementById("evasion").innerHTML = player.evasion().toFixed(2);
    document.getElementById("dropRate").innerHTML = player.dropRate;
    document.getElementById("level").innerHTML = player.level;
    document.getElementById("maxexperience").innerHTML = player.maxexperience;
    document.getElementById("experience").innerHTML = player.experience;
}, 1);
window.setInterval(function () {
    var exppercent = 0; //Player experience in % values at the top bar
    exppercent = (Math.floor((player.experience / player.maxexperience) * 100));
    var exppercent2 = (Math.floor((player.experience / player.maxexperience) * 100));
    exppercent2 = exppercent2 / 2.5;
    var divArray = document.getElementById('progressBar');
    divArray.style.width = ((exppercent2) + '%');
    document.getElementById("exppercent").innerHTML = exppercent;
}, 100);
window.setInterval(function () {
    var healthPercent = (Math.floor((player.health / player.maxhealth()) * 100));
    healthPercent = healthPercent / 2.5;
    var divArray = document.getElementById('progressBar2');
    divArray.style.width = ((healthPercent) + '%');
}, 100);
window.setInterval(function () { //Health regen
    if (player.health < player.maxhealth()) player.health += player.hpregen();
    if (player.health > player.maxhealth()) player.health = player.maxhealth();
    document.getElementById('health').innerHTML = player.health;
}, 1000);
window.setInterval(function () { //Mana regen
    if (player.mana < player.maxMana()) player.mana += player.manaRegen();
    if (player.mana > player.maxMana()) player.mana = player.maxMana();
    document.getElementById('mana').innerHTML = player.mana.toFixed(0);
}, 1000);

//Upgrading player stats
function upgradeStrength() {
    if (player.stats >= 1) {
        player.stats = player.stats - 1;
        player.strength += 1;
        
    }
};

function upgradeEndurance() {
    if (player.stats >= 1) {
        player.stats = player.stats - 1;
        player.endurance += 1;
        Log("Your maximal health is now: " + player.maxhealth() + "!");
    }
};

function upgradeAgility() {
    if (player.stats >= 1) {
        player.stats = player.stats - 1;
        player.agility += 1;
        Log("You have increased your agility by 1, evasion, critical chance and accuracy increased!");
       
    }
};

function upgradeDexterity() {
    if (player.stats >= 1) {
        player.dexterity += 1;
        player.stats = player.stats - 1;
        Log("You increased your dexterity by 1, defense, critical chance and critical damage increased.");
        
    }
};

function upgradeIntelligence() {
    if (player.stats >= 1) {
        player.intelligence += 1;
        player.stats = player.stats - 1;
        Lifesteal = player.intelligence / 100;
        console.log(Lifesteal);
        Lifesteal2 = player.intelligence;
        console.log(Lifesteal2);
        Log("You have increased your intelligence by 1");
      
    }
};

function upgradeWisdom() {
    if (player.stats >= 1) {
        player.wisdom += 1;
        player.stats = player.stats - 1;
        Log("You have increased your wisdom by 1");
    }
};

function upgradeLuck() {
    if (player.stats >= 1) {
        player.luck += 1;
        player.dropRate += 1;
        player.stats = player.stats - 1;
        Log("You have increased your luck by 1! Critical damage/chance and drop rate increased!");
    }
};

//Using potions
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
};

function usespot() {
    if (player.health == player.maxhealth) {
        Log("Your health is full!");
    } else if (player.health + 100 >= player.maxhealth & spot >= 1) {
        spot = spot - 1;
        player.health = player.maxhealth;
        document.getElementById('spot').innerHTML = spot;
        document.getElementById('health').innerHTML = player.health;
        Log("You heal for 100 <span style=\"color:green\">health!</span>");
    } else if (player.health + 100 < player.maxhealth & spot >= 1) {
        spot = spot - 1;
        player.health = player.health + 100;
        document.getElementById('spot').innerHTML = spot;
        document.getElementById('health').innerHTML = player.health;
    }
};

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
};
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
    level: 1,
    strength: 5,
    endurance: 5,
    agility: 5,
    dexterity: 5,
    intelligence: 5,
    wisdom: 5,
    luck: 5,
    experience: 0,
    maxexperience: 100,
    gold: 0,
    health: 50,
    maxhealth: function () {
        return (player.endurance * 10);
    },
    mana: 50,
    maxMana: function () {
        return (player.wisdom * 10 + player.intelligence * 5);
    },
    manaRegen: function () {
        return (player.wisdom);
    },
    mindamage: function () {
        return Math.floor((player.strength * 0.5));
    },
    maxdamage: function () {
        return (player.strength * 0.8);
    },
    hpregen: function () {
        return Math.floor((player.endurance));
    },
    accuracy: function () {
        return Math.floor((95 + (player.agility * 0.05 + player.luck * 0.1)));
    },
    defense: function () {
    return (player.dexterity * 1.2 + player.endurance * 0.5);
    },
    evasion: function () {
        return (5 + (player.agility * 0.5 + player.luck * 0.15));
    },
    criticalChance: function () {
        return (player.agility * 0.5 + player.luck * 0.5);
    },
    criticalDamage: function () {
        return (player.strength * 0.1 + player.dexterity * 0.1);
    },
    dropRate: 0,
    expRate: 0
};
console.log("Accuracy " + player.accuracy())
var Lifesteal = 0.05; //Chance to happen 0.05->5%
var Lifesteal2 = 5; //Heal amout 5 -> 5hp
console.log("Lifesteal " + Lifesteal * 100 + "%");
console.log("Lifesteal Heal " + Lifesteal2 + " HP");
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
        displayName: 'Weak'
    },
    {
        type: 'average',
        displayName: 'Average'
    },
    {
        type: 'strong',
        displayName: 'Strong'
    },
    {
        type: 'boss',
        displayName: 'Boss'
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
    console.log(damage);
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
    console.log(damage);
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
        console.log("Lifesteal Heal: " + lifestealHeal);
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
}

//experience gained from killing a monster
function monsterExperience(monster) {

    var expgain = monster.baseExp / (player.level / 8);
    if (player.experience < player.maxexperience) {
        player.experience = Math.floor(player.experience + expgain);
        if (player.experience >= player.maxexperience) {
            player.level += 1;
            player.stats += 2;
            player.experience = player.experience - player.maxexperience;
            player.maxexperience = Math.floor(player.maxexperience * 1.15);
            Log("Turn " + battleTurn + " " + "You leveled up! Your current player.level is: " + player.level);
        } else Log("Turn " + battleTurn + " " + "You gain: " + Math.floor(expgain) + "experience!");
    }
    monsterGold(monster);
}

//gold gained from killing a monster
function monsterGold(monster) {
    var goldLog = 0;
    var golddrop = Math.floor((Math.random() * 100) + 1);
    if (golddrop > 95) {
        golddrop = Math.floor((Math.random() * 20) + 1);
        player.gold = player.gold + golddrop;
        Log("Turn " + battleTurn + " " + "You loot: " + golddrop + "gold!");
        document.getElementById("gold").innerHTML = player.gold;
    } else if (golddrop >= 75) {
        golddrop = Math.floor((Math.random() * 10) + 1);
        player.gold = player.gold + golddrop;
        Log("Turn " + battleTurn + " " + "You loot: " + golddrop + "gold!");
        document.getElementById("gold").innerHTML = player.gold;
    } else if (golddrop >= 60) {
        golddrop = Math.floor((Math.random() * 5) + 1);
        player.gold = player.gold + golddrop;
        Log("Turn " + battleTurn + " " + "You loot: " + golddrop + "gold!");
        document.getElementById("gold").innerHTML = player.gold;
    }
    monsterItemDrop(monster);
}

//Item drop from killing a monster
//TEST TEST TEST TEST :)
function monsterItemDrop(monster) {
    if (monster.type === 'weak' & playerInventory.length <= 9) {
        var itemQuality = '';
        var itemType = '';
        var item = '';
        var itemStat = 0;
        var itemQualityMultiplier = 0;
        //If amount of item in inventory exceed 10 you wont drop anymore items, 9 can be changed to some variable like "max.inventorySlots"
            var randomItemQuality = Math.floor(Math.random() * (100 - 1) + 1); //Random item quality
            if (randomItemQuality < 10) {
                itemQuality = 'epic'; //epic
                itemQualityMultiplier = 4;
            }
            else if (randomItemQuality < 30) {
                itemQuality = 'rare'; //rare
                itemQualityMultiplier = 3;
            }
            else if (randomItemQuality < 50) {
                itemQuality = 'uncommon'; //uncommon
                itemQualityMultiplier = 2;
            }
            else {
                itemQuality = 'common'; //common
                itemQualityMultiplier = 1;
            }
                var randomItemType = Math.floor(Math.random() * (100 - 1) + 1);//Random item type
                if (randomItemType < 33){
                    itemType = 'weapon'; //Weapon
                }
                else  if (randomItemType < 66){
                    itemType = 'armor'; //Armor
                }
                else {
                    itemType = 'accessory'; //accessory
                }
                    
                if (itemType === 'weapon'){
                    var randomWeapon = Math.floor(Math.random() * (100 - 1) + 1);//Random weapon
                    if (randomWeapon < 14){
                        item = 'Sword';
                    }
                    else if (randomWeapon < 28){
                        item = 'Dagger';
                    }
                    else if (randomWeapon < 42){
                        item = 'Axe';
                    }
                    else if (randomWeapon < 56){
                        item = 'Mace';
                    }
                    else if (randomWeapon < 70){
                        item = 'Fist';
                    }
                    else {
                        item = 'Staff';
                    }
                }
        var randomStrength = Math.floor(Math.random() * ((monster.level + 5) - monster.level + 1) + monster.level);
        var strength = randomStrength * itemStat;
        strength = strength;

        var randomEndurance = Math.floor(Math.random() * ((monster.level + 5) - monster.level + 1) + monster.level);
        var endurance = randomEndurance * itemQualityMultiplier * itemStat;

        var randomAgility = Math.floor(Math.random() * ((monster.level + 5) - monster.level + 1) + monster.level);
        var agility = randomAgility * itemQualityMultiplier * itemStat;
        agility = agility;

        var randomDexterity = Math.floor(Math.random() * ((monster.level + 5) - monster.level + 1) + monster.level);
        var dexterity = randomDexterity * itemQualityMultiplier * itemStat;
        dexterity = dexterity;

        var randomWisdom = Math.floor(Math.random() * ((monster.level + 5) - monster.level + 1) + monster.level);
        var wisdom = randomWisdom * itemQualityMultiplier * itemStat;
        wisdom = wisdom;

        var randomIntelligence = Math.floor(Math.random() * ((monster.level + 5) - monster.level + 1) + monster.level);
        var intelligence = randomIntelligence * itemQualityMultiplier * itemStat;
        intelligence = intelligence;

        var randomLuck = Math.floor(Math.random() * ((monster.level + 5) - monster.level + 1) + monster.level);
        var luck = randomluck * itemQualityMultiplier * itemStat;
        luck = luck;

        var currentDate = new Date();
        var weaponId = currentDate.getMilliseconds();
        var itemType = item;
        console.log("STR" + " " + strength);
        console.log("END" + " " + endurance);
        console.log("LEVEL" + " " + monster.level);
        var newObject = {
            id: weaponId,
            strength: strength,
            endurance: endurance,
            agility: agility,
            dexterity: dexterity,
            wisdom: wisdom,
            intelligence: intelligence,
            luck: luck,
            itemType: itemType
        };
        //THIS SHOULD ADD AN OBJECT TO AN ARRAY WITH FOLLOWING STATS
        playerInventory.push(newObject); // UP ^
        //EACH MONSTER KILL SHOULD INCREASE ARRAY LENGTH + 1
        //Change all current dropped item values to 0...
        console.log("Array Length " + playerInventory.length);
        itemQuality = '';
        itemType = '';
        item = '';
        itemStat = 0;
        itemQualityMultiplier = 0;

    } else
        console.log("FULL INV");
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

function save() {
    var save = {
        playerGold: player.gold,
        playerHealth: player.health,
        playerStats: player.stats,
        playerLevel: player.level,
        playerStrength: player.strength,
        playerEndurance: player.endurance,
        playerAgility: player.agility,
        playerDexterity: player.dexterity,
        playerIntelligence: player.intelligence,
        playerWisdom: player.wisdom,
        playerLuck: player.luck,
        playerExperience: player.experience,
        playerMaxexperience: player.maxexperience,
        pot: pot,
        spot: spot,
        mpot: mpot
    }
    localStorage.setItem("save", JSON.stringify(save));
}

function load() {
    var savegame = JSON.parse(localStorage.getItem("save"));
    if (typeof savegame.playerGold !== "undefined") player.gold = savegame.playerGold;
    if (typeof savegame.playerHealth !== "undefined") player.health = savegame.playerHealth;
    if (typeof savegame.playerStats !== "undefined") player.stats = savegame.playerStats;
    if (typeof savegame.playerLevel !== "undefined") player.level = savegame.playerLevel;
    if (typeof savegame.playerExperience !== "undefined") player.experience = savegame.playerExperience;
    if (typeof savegame.playerMaxexperience !== "undefined") player.maxexperience = savegame.playerMaxexperience;
    if (typeof savegame.playerStrength !== "undefined") player.strength = savegame.playerStrength;
    if (typeof savegame.playerEndurance !== "undefined") player.endurance = savegame.playerEndurance;
    if (typeof savegame.playerAgility !== "undefined") player.agility = savegame.playerAgility;
    if (typeof savegame.playerDexterity !== "undefined") player.dexterity = savegame.playerDexterity;
    if (typeof savegame.playerIntelligence !== "undefined") player.intelligence = savegame.playerIntelligence;
    if (typeof savegame.playerWisdom !== "undefined") player.wisdom = savegame.playerWisdom;
    if (typeof savegame.playerLuck !== "undefined") player.luck = savegame.playerLuck;
    if (typeof savegame.pot !== "undefined") pot = savegame.pot;
    if (typeof savegame.spot !== "undefined") spot = savegame.spot;
    if (typeof savegame.blackorb !== "undefined") blackorb = savegame.blackorb;
    document.getElementById('gold').innerHTML = player.gold;
    document.getElementById('health').innerHTML = player.health;
    document.getElementById('stats').innerHTML = player.stats;
    document.getElementById('level').innerHTML = player.level;
    document.getElementById('experience').innerHTML = player.experience;
    document.getElementById('maxexperience').innerHTML = player.maxexperience;
    document.getElementById('strength').innerHTML = player.strength;
    document.getElementById('endurance').innerHTML = player.endurance;
    document.getElementById('agility').innerHTML = player.agility;
    document.getElementById('dexterity').innerHTML = player.dexterity;
    document.getElementById('intelligence').innerHTML = player.intelligence;
    document.getElementById('wisdom').innerHTML = player.wisdom;
    document.getElementById('luck').innerHTML = player.luck;
    document.getElementById('pot').innerHTML = pot;
    document.getElementById('spot').innerHTML = spot;
    document.getElementById('mpot').innerHTML = mpot;
}

function reset() {
    localStorage.removeItem("save");
    player.gold = 0;
    player.health = 50;
    player.stats = 0;
    player.level = 1;
    player.experience = 0;
    player.maxexperience = 100;
    player.strength = 5;
    player.endurance = 5;
    player.agility = 5;
    player.dexterity = 5;
    player.intelligence = 5;
    player.wisdom = 5;
    player.luck = 5;
    pot = 0;
    spot = 0;
    mpot = 0;
    document.getElementById('gold').innerHTML = player.gold;
    document.getElementById('health').innerHTML = player.health;
    document.getElementById('stats').innerHTML = player.stats;
    document.getElementById('level').innerHTML = player.level;
    document.getElementById('experience').innerHTML = player.experience;
    document.getElementById('maxexperience').innerHTML = player.maxexperience;
    document.getElementById('strength').innerHTML = player.strength;
    document.getElementById('endurance').innerHTML = player.endurance;
    document.getElementById('agility').innerHTML = player.agility;
    document.getElementById('dexterity').innerHTML = player.dexterity;
    document.getElementById('intelligence').innerHTML = player.intelligence;
    document.getElementById('wisdom').innerHTML = player.wisdom;
    document.getElementById('luck').innerHTML = player.luck;
    document.getElementById('pot').innerHTML = pot;
    document.getElementById('spot').innerHTML = spot;
    document.getElementById('mpot').innerHTML = mpot;
};