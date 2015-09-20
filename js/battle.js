function startBattle(monster) {
    //Add buttons <Attack><Defense><Spell><Item><Run?> -->"Spell" change name based on character class later on: Spell/Skill/Runes/Combo/etc...
    //Display enemy at the top/or left/ AND  player at the bottom/or right side
    var monsterStats = monsterList[monster];
    for (var hero in characterRaces) {
        if (characterRaces.hasOwnProperty(hero)) {
            var heroRace = characterRaces[hero];
            if (player.properties.heroRace === heroRace.name) {
                var image = heroRace.image();
            };
        };
    };
    var area = monsterStats.area;
    var html = "";
    html += '<div class="row">';
    html += '<div id="monsterImage" class="col-xs-12 c3">';
    html += '<div class="progress" style="width:50%; margin-left:25%;">';
    html += '<div style="width:' + "100%" + ';" aria-valuemax="100" aria-valuemin="0" aria-valuenow="60" role="progressbar" class="progress-bar" id="' + monsterStats.name + "1" + '">';
    html += '<span style="font-size:13px;">' + getThousands(monsterStats.hp) + ' HP</span>' + '</div></div>';
    html += '<img src="images/monsters/' + monsterStats.name + '.png" style="position:absolute; left:45%; top:50%;">';
    html += '</div>';
    html += '<div class="col-xs-12 c3" style="height:100px;">';
    html += '<img src="images/races/' + image + '.png" style="position:absolute; left:45%; bottom:10%;">';
    html += '</div>';
    html += '</div>';
    html += '<div class="row">';
    html += '<div class="col-xs-12 c3" id="battleButtons">';
    html += '</div>';
    html += '</div>';
    html += '<div class="row">';
    html += '<div class="col-xs-4 col-xs-offset-4" id="spellButtons">';
    html += '</div>';
    html += '<div class="col-xs-10 col-xs-offset-1">';
    html += '<div class="collapse" id="spellCollapse"></div>';
    html += '</div>';
    html += '</div>';
    $("#monster" + monsterStats.id).remove();
    $("#" + area).empty().append(html);
    $("#battleButtons").append('<button class="sell c3 marginRight" data-toggle="tooltip" data-placement="top" title="Attack with equipped weapon" onclick="playerAttack(' + "'" + monster + "'" + ');">Attack</button>');
    $("#battleButtons").append('<button class="sell c3" data-toggle="tooltip" data-placement="top" title="Choose your spell" onclick="playerSpellDiv(' + "'" + monster + "'" + ');">Spells</button>');
    logData = {
        length: 0
    };
    $("#logConsole").empty();
    testss();
    playerSpellDiv(monster);
    $('.collapse').collapse('show');
};
function playerSpellDiv(monster) {
    var html = "";
    html += '<div class="c3">';
    html += '<h3>Spells</h3>';
    html += '</div>';
    var skillAmount = 0;
    var weapon = equippedItems.weapon.subType;//get item subtype to match player weapon skills
    if (weapon !== undefined) {
        for (var skillKey in weaponSkillList[weapon]) {
            var skill = weaponSkillList[weapon][skillKey];
            if (skill.type === "damage") {
                if (weaponSkillList[weapon][skillKey].levelReq <= weaponMastery[weapon].level) {
                    skillAmount++;
                    var damage = skill.damageDisplay();
                    var skillName = skill.name.replace(/'/g, "\\'")
                    var name = "' " + skillName + ".'";
                    var type = "' " + skill.type2 + " damage'";
                    var displayName = skill.name; //add onclick + spell used
                    html += '<button class="sell marginRight" style="width:auto;';
                    if (player.properties.mana <= skill.manaCost) {
                        html += 'cursor:not-allowed;" disabled';
                    }
                    else {
                        html += '"';
                    }
                    html += ' onclick="playerSpellDamage(' + "'" + monster + "'" + ', ' + "'" + weapon + "'" + ', ' + name + ', ' + type + ', ' + "'" + skillKey + "'" + ');">' + displayName + "</button>";
                    html += 'Mana cost: ' + skill.manaCost + '<br />';
                };
            };
        };
    };

    if (skillAmount === 0) {
        html += "<div class='c3'>Unlock some skills first! Using a weapon, will level up your proficiency, and unlock skills with it.</div>";
    };
    $("#spellCollapse").empty().append(html);
    $('.collapse').collapse('toggle');
};
function playerAttack(monster) {
    logData = {
        length: 0
    };
    $("#logConsole").empty();
    var animationSrc = 'src="images/animations/slashAnimation.gif"';
    $("#monsterImage").append('<img id="animation"' + animationSrc + 'style="position:absolute; left:45%; top:50%;">');
    setTimeout(function () {
        $('#animation').remove();
    }, 350);
    var monsterStats = monsterList[monster];
    //Hit/Miss/Crit/Damage + possible on hit bonuses + lifesteal
    document.getElementById("health").innerHTML = player.properties.health + "/" + player.functions.maxhealth();
    var playerHitChance = (player.functions.accuracy() - monsterStats.eva) / 100;
    var randomHitChance = Math.random();
    if (playerHitChance > randomHitChance) {
        playerCritCheck(monster);
    }
    else {
        Log("<span class =\"bold\" style=\"color:gray;\">You missed!" + "<br />" + "</span>");
        monsterAttack(monsterStats);
    };
};

function playerCritCheck(monster) {
    var monsterStats = monsterList[monster];
    var playerCriticalChance = player.functions.criticalChance() / 100;
    var randomCritChance = Math.random();
    var criticalDamage = 1; // Crit damage Multiplier
    var damageType = "";
    if (playerCriticalChance > randomCritChance) {
        criticalDamage = player.functions.criticalDamage();
        damageType = " physical damage(Critical Hit)";
    }
    else{
        damageType = " physical damage";
    };
    var damage = Math.floor(Math.random() * (player.functions.maxDamage() - player.functions.minDamage() + 1)) + player.functions.minDamage();
    damage = Math.floor(damage * criticalDamage * (player.properties.prestigeMultiplier * 500 / (player.properties.prestigeMultiplier * 500 + monsterStats.def())));
   
    playerDamage(monster, damage, "basic attack.", damageType);
};
function playerSpellDamage(monster, weapon, name, type, skillKey) {
    logData = {
        length: 0
    };
    $("#logConsole").empty();
    if (player.properties.mana >= weaponSkillList[weapon][skillKey].manaCost) {
        var bonusDamage = 0;
        for (var skillKey2 in weaponSkillList[weapon]) {
            var skill2 = weaponSkillList[weapon][skillKey2];
            if (skill2.type === "magicDamageBuff" && skill2.type2 === "magical" && weapon === "staff") {
                var randomNumber = Math.floor((Math.random() * 100) + 1);
                if (randomNumber <= skill2.chance()) {
                    bonusDamage = skill2.damage();
                    type += " (" + skill2.name + ") ";
                };
            };
        };

        var animationSrc = 'src="images/animations/' + weaponSkillList[weapon][skillKey].animation() + '.gif"';
        $("#monsterImage").append('<img id="animation"' + animationSrc + 'style="position:absolute; left:45%; top:50%;">');
        setTimeout(function () {
            $('#animation').remove();
        }, 350);
        var monsterStats = monsterList[monster];
        var playerHitChance = (player.functions.accuracy() - monsterStats.eva) / 100;
        var randomHitChance = Math.random();
        if (playerHitChance > randomHitChance) {
            var skill = weaponSkillList[weapon][skillKey];
            var damage = skill.damageDisplay() + bonusDamage;
            playerDamage(monster, damage, name, type);
        }
        else {
            Log("<span class =\"bold\" style=\"color:gray;\">You missed!" + "<br />" + "</span>");
            Log("<span class =\"bold\" style=\"color:black; border-top:1px solid; border-bottom:1px solid;\">Player turn" + "<br />" + "</span>");
            monsterAttack(monsterStats);
            Log("<span class =\"bold\" style=\"color:black; border-top:1px solid; border-bottom:1px solid;\">Enemy turn" + "<br />" + "</span>");
        };
        player.properties.mana -= weaponSkillList[weapon][skillKey].manaCost;
        manaRegen();
    }
    else {
        Log("<span class=\"bold\" style=\"color:red;\">You need more mana." + "<br />" + "</span>");
    };
};
function playerDamage(monster, damage, name, type) {//damage can be from melee/spell
    var monsterStats = monsterList[monster];
    Log("<span class =\"bold\" style=\"color:red;\">You deal " + damage + type + " with " + name + "<br />" + "</span>");
    if (player.functions.lifeSteal() > 0) {
        var lifeSteal = player.functions.lifeSteal();
        player.properties.health += lifeSteal;
        if (player.properties.health > player.functions.maxhealth()) {
            player.properties.health = player.functions.maxhealth();
        };
        Log("<span class =\"bold\" style=\"color:green;\">You life steal for " + lifeSteal + " health.<br />" + "</span>");
    };
    monsterStats.hp -= damage;
    weaponSkill(monsterStats, monster);
    var monsterPercent = ((monsterStats.hp / monsterStats.maxHp) * 100);
    $("#" + monsterStats.name + "1").css("width", monsterPercent + "%");
    $("#" + monsterStats.name + "1 span").empty().append(monsterStats.hp + " HP");
    Log("<span class =\"bold\" style=\"color:black; border-top:1px solid; border-bottom:1px solid;\">Player turn" + "<br />" + "</span>");
    if (monsterStats.hp <= 0) {
        Log("<span class =\"bold\" style=\"color:black;\">Enemy killed!" + "<br />" + "</span>");
        monsterKilled(monsterStats);
    }
    else {
        monsterAttack(monsterStats);
        Log("<span class =\"bold\" style=\"color:black; border-top:1px solid; border-bottom:1px solid;\">Enemy turn" + "<br />" + "</span>");
    };
};
function monsterAttack(monsterStats) {
    if (player.properties.health < player.functions.maxhealth()) {
        regen = player.functions.hpregen();
        player.properties.health += regen;
        if (player.properties.health > player.functions.maxhealth()) {
            regen -= (player.properties.health - player.functions.maxhealth());
            player.properties.health = player.functions.maxhealth();
        };
    };
    manaRegen(); //Mana regen
    var monsterHitChance = (monsterStats.acc - player.functions.evasion()) / 100;
    var randomHitChance = Math.random();
    if (monsterHitChance > randomHitChance) {
        monsterDmg(monsterStats);
    }
    else {
        Log("<span class =\"bold\" style=\"color:purple;\">Enemy miss!" + "<br />" + "</span>");
    }
};
function monsterDmg(monsterStats) {
    monsterDamage = Math.floor(Math.random() * (monsterStats.maxDmg() - monsterStats.minDmg() + 1)) + monsterStats.minDmg();
    monsterDamage = Math.floor(monsterDamage * (player.properties.prestigeMultiplier * 500 / (player.properties.prestigeMultiplier * 500 + player.functions.defense())));
    if (monsterDamage >= 1) {
        monsterDamageDeal(monsterDamage, monsterStats);
    };
};
function monsterDamageDeal(monsterDamage, monsterStats) {
    var randomCounterNumber = Math.floor((Math.random() * 100) + 1);
    var randomBlockNumber = Math.floor((Math.random() * 100) + 1);
    if (randomCounterNumber <= player.functions.counterChance()) {
        var counterDamageDealt = Math.floor(monsterDamage * (player.functions.counterDamage() / 100));
        monsterStats.hp -= counterDamageDealt;
        Log("<span class =\"bold\" style=\"color:purple;\">You counter enemy for " + counterDamageDealt + "<br />" + "</span>");
    };
    if (randomBlockNumber <= player.functions.blockChance()) {
        Log("<span class =\"bold\" style=\"color:blue;\">You block " + player.functions.blockAmount() + " damage!" + "<br />" + "</span>");
        if (monsterDamage >= player.functions.blockAmount()) {
            monsterDamage -= player.functions.blockAmount();
        }
        else if (monsterDamage < player.functions.blockAmount()) {
            monsterDamage = 0;
        };
    };
    player.properties.health = player.properties.health - monsterDamage;
    damageTaken += monsterDamage;

    Log("<span class =\"bold\" style=\"color:purple;\">Enemy hits you for " + monsterDamage + " damage." + "<br />" + "</span>");
    document.getElementById("health").innerHTML = player.properties.health + "/" + player.functions.maxhealth();
    //document.getElementById(monsterStats.id).getElementsByClassName('hp')[0].innerHTML = monsterStats.hp;
    if (player.properties.health < 1) {
        playerDead(monsterStats);
    };
    if (monsterStats.hp < 1) {
        monsterKilled(monsterStats);
    };
};
function playerDead(monsterStats) {
    if (player.properties.hardcoreMode === false) {
        var goldLost = player.properties.goldLost;
        var expLost = player.properties.expLost;
        player.properties.isDead = true;
        player.properties.health = 0;
        playerRevive();
        goldLost = Math.floor(player.properties.gold - (player.properties.gold / 1.2));
        player.properties.gold = Math.floor(player.properties.gold / 1.2);
        expLost = Math.floor(player.properties.experience - (player.properties.experience / 1.2));
        player.properties.experience = Math.floor(player.properties.experience / 1.2);
        document.getElementById("health").innerHTML = player.properties.health;
        document.getElementById("gold").innerHTML = player.properties.gold;
        document.getElementById("experience").innerHTML = player.properties.experience;
        Log("<span id=\"goldLost\" class =\"bold\" style=\"color:red;\">You lost " + goldLost + " gold." + "<br />" + "</span>");
        Log("<span id=\"expLost\" class =\"bold\" style=\"color:red;\">You lost " + expLost + " experience." + "<br />" + "</span>");
        Log("<span id=\"playerDead\" class =\"bold\" style=\"color:red;\">You have died." + "<br />" + "</span>");
        Log("<span id=\"playerDead2\" class =\"bold\" style=\"color:red;\">You need to wait 5 seconds before you can fight again." + "<br />" + "</span>");
        battleTurn = -1;
        displayLogInfo();
        deathLog();
        updateHtml();
        player.properties.goldLost = goldLost;
        player.properties.expLost = expLost;
    }
    else {
        reset();
        pageReload();
    };
};
function monsterKilled(monsterStats) {
    monsterStats.hp = monsterStats.maxHp;
    monsterExperience(monsterStats);
    monsterStats.killCount++;
    displayLogInfo();
    quest();
    if (monsterStats.lastEnemy === true) {
        var monsterNumber = monsterStats.id; //Used to determine div which contain a monster
        $("#" + monsterNumber).append("<button class='sell' onclick='rebirth(" + monsterStats.level + ")'>Warp</button>");
        //rebirth(monsterStats.level);
    };
    player.properties.lastEnemyLevel = monsterStats.level;
};
//Weapon skill experience
function weaponSkill(monsterStats, monster) {
    // if (monsterStats.type === boss){ give x5 experience} else if normal {x1 exp}
    if (monsterStats.level > player.properties.level) {
        var expgain = 3;
    }
    else if (monsterStats.level === player.properties.level) {
        var expgain = 2;
    }
    else {
        var expgain = 1;
    };
    var subType = equippedItems.weapon.subType;
    var itemStat = weaponMastery[subType];
    if (itemStat !== undefined) {
        if (itemStat["experience"] < itemStat["maxExperience"]) {
            itemStat["experience"] = Math.floor(itemStat["experience"] + expgain);
        };
        if (itemStat["experience"] >= itemStat["maxExperience"]) {
            itemStat["level"] += 1;
            itemStat["experience"] -= itemStat["maxExperience"];
            itemStat["maxExperience"] = Math.floor(itemStat["maxExperience"] * 1.2);
            Log("<span id=\"weaponMastery\" class =\"bold\" style=\"color:green;\">You gained level in " + itemStat.name + " Mastery!" + "<br />" + "</span>");
            CreateWeaponSkillHtml();
        };
    };
    updateBar();
};
function updateBar() {
    if (equippedItems.weapon.isEquipped === true) {
        var subType = equippedItems.weapon.subType;
        var itemStat = weaponMastery[subType];
        var weaponExp = (Math.floor((itemStat.experience / itemStat.maxExperience) * 100));
        var divArray = document.getElementById(subType + '1'); //Doing + 1 so I can use "subType" for a span, which let me center progress bar value.
        divArray.style.width = ((weaponExp) + '%');
        if (subType === "sword") {
            $('#sword').empty().append(weaponExp + "%");
            player.properties.swordSkill = weaponExp;
        }
        if (subType === "axe") {
            $('#axe').empty().append(weaponExp + "%");
            player.properties.axeSkill = weaponExp;
        }
        if (subType === "mace") {
            $('#mace').empty().append(weaponExp + "%");
            player.properties.maceSkill = weaponExp;
        }
        if (subType === "staff") {
            $('#staff').empty().append(weaponExp + "%");
            player.properties.staffSkill = weaponExp;
        }
        if (subType === "ranged") {
            $('#ranged').empty().append(weaponExp + "%");
            player.properties.rangedSkill = weaponExp;
        };
    }
};
//experience gained from killing a monster
function monsterExperience(monsterStats) {
    var expGain = monsterStats.baseExp() * player.functions.expRate();
    var level = player.properties.level;
    if (player.properties.experience < player.properties.maxExperience) {
        player.properties.experience = Math.floor(player.properties.experience + expGain);
    };
    if (player.properties.experience >= player.properties.maxExperience) {
        player.properties.level += 1;
        levelUp();
        player.properties.stats += 10;
        player.properties.experience = player.properties.experience - player.properties.maxExperience;
        var maxExp = getTen(level);
        player.properties.maxExperience += maxExp * 10;
        Log('<span id=\"levelUpLog\" style=\"color:blue;\" class =\"bold\">Level up!' + "<br />" + "</span>");
        levelUpLog();
    }
    else {
        Log('<span id=\"expGain\" class =\"bold\">You gain:' + Math.floor(expGain) + " experience!" + "<br />" + "</span>");
    }
    monsterGold(monsterStats);
};


//gold gained from killing a monster
function monsterGold(monsterStats) {
    var goldDrop = player.properties.goldDrop;
    var monsterLvl = monsterStats.level;
    goldDrop = 0;
    var randomGold = Math.floor(Math.random() * ((monsterStats.level + 5) - monsterStats.level + 1) + monsterStats.level);
    goldDrop = Math.floor(randomGold * player.functions.goldRate());
    player.properties.gold += goldDrop;
    document.getElementById("gold").innerHTML = player.properties.gold;
    player.properties.goldDrop = goldDrop;
    monsterItemDrop(monsterLvl); // Call item drop function with monster level.
    updateHtml();
};

function displayLogInfo() {
    player.properties.health = player.functions.maxhealth();
    player.properties.mana = player.functions.maxMana();
    document.getElementById("health").innerHTML = player.properties.health + "/" + player.functions.maxhealth();
    manaRegen(); //display mana value with tooltip.
    for (var key in player.buffs) {
        if (player.buffs.hasOwnProperty(key)) {
            var buff = player.buffs[key];
            if (buff.timer > 0) {
                buff.timer--;
                if (buff.timer === 0) {
                    buff.amount = 0;
                };
            };
        };
    };
    activeBuffsHtml();
    CreateMonsterHtml();
};