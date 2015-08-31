"use strict";
function updateHtml() {
    if (player.properties.stats >= 1) { // Show "plus" image when player level up
        document.getElementById("Strength").style.visibility = "visible";
        document.getElementById("Endurance").style.visibility = "visible";
        document.getElementById("Agility").style.visibility = "visible";
        document.getElementById("Dexterity").style.visibility = "visible";
        document.getElementById("Wisdom").style.visibility = "visible";
        document.getElementById("Intelligence").style.visibility = "visible";
        document.getElementById("Luck").style.visibility = "visible";
    } else {
        document.getElementById("Strength").style.visibility = "hidden";
        document.getElementById("Endurance").style.visibility = "hidden";
        document.getElementById("Agility").style.visibility = "hidden";
        document.getElementById("Dexterity").style.visibility = "hidden";
        document.getElementById("Wisdom").style.visibility = "hidden";
        document.getElementById("Intelligence").style.visibility = "hidden";
        document.getElementById("Luck").style.visibility = "hidden";
    }
    var level;
    var maxExperience;
    var experience;
    var gold;
    var strength;
    var endurance;
    var agility;
    var dexterity;
    var wisdom;
    var intelligence;
    var luck;
    var damage;
    var stats;

    strength = document.getElementById("totalStrength");
    endurance = document.getElementById("totalEndurance");
    agility = document.getElementById("totalAgility");
    dexterity = document.getElementById("totalDexterity");
    wisdom = document.getElementById("totalWisdom");
    intelligence = document.getElementById("totalIntelligence");
    luck = document.getElementById("totalLuck");
    damage = document.getElementById("damage");
    stats = document.getElementById("stats");


    strength.innerHTML = "<span data-toggle=\"tooltip\" data-placement=\"top\" title=\"Total Strength\">" + player.functions.totalStrength() + "</span>" +
        "<a class=\"tooltipA\">" + "<p class=\"glyphicon glyphicon-info-sign\"></p>" + "<span style=\"text-align:left\">" + "Base: " + player.properties.baseStrength +
        "<br />Equipment: " + player.functions.totalStrengthBonus() +
        "<br />Multiplier: " + ((player.functions.masteryStrength() + (player.properties.raceAllStats / 100)) * 100).toFixed(0) + "%" + "</span></a> ";

    endurance.innerHTML = "<span data-toggle=\"tooltip\" data-placement=\"top\" title=\"Total Endurance\">" + player.functions.totalEndurance() + "</span>" +
        "<a class=\"tooltipA\">" + "<p class=\"glyphicon glyphicon-info-sign\"></p>" + "<span style=\"text-align:left\">" + "Base: " + player.properties.baseEndurance +
        "<br />Equipment: " + player.functions.totalEnduranceBonus() +
        "<br />Multiplier: " + ((player.functions.masteryEndurance() + (player.properties.raceAllStats / 100)) * 100).toFixed(0) + "%" + "</span></a> ";

    agility.innerHTML = "<span data-toggle=\"tooltip\" data-placement=\"top\" title=\"Total Agility\">" + player.functions.totalAgility() + "</span>" +
        "<a class=\"tooltipA\">" + "<p class=\"glyphicon glyphicon-info-sign\"></p>" + "<span style=\"text-align:left\">" + "Base: " + player.properties.baseAgility +
        "<br />Equipment: " + player.functions.totalAgilityBonus() +
        "<br />Multiplier: " + ((player.functions.masteryAgility() + (player.properties.raceAllStats / 100)) * 100).toFixed(0) + "%" + "</span></a> ";

    dexterity.innerHTML = "<span data-toggle=\"tooltip\" data-placement=\"top\" title=\"Total Dexterity\">" + player.functions.totalDexterity() + "</span>" +
        "<a class=\"tooltipA\">" + "<p class=\"glyphicon glyphicon-info-sign\"></p>" + "<span style=\"text-align:left\">" + "Base: " + player.properties.baseDexterity +
        "<br />Equipment: " + player.functions.totalDexterityBonus() +
        "<br />Multiplier: " + ((player.functions.masteryDexterity() + (player.properties.raceAllStats / 100)) * 100).toFixed(0) + "%" + "</span></a> ";

    wisdom.innerHTML = "<span data-toggle=\"tooltip\" data-placement=\"top\" title=\"Total Wisdom\">" + player.functions.totalWisdom() + "</span>" +
        "<a class=\"tooltipA\">" + "<p class=\"glyphicon glyphicon-info-sign\"></p>" + "<span style=\"text-align:left\">" + "Base: " + player.properties.baseWisdom +
        "<br />Equipment: " + player.functions.totalWisdomBonus() +
        "<br />Multiplier: " + ((player.functions.masteryWisdom() + (player.properties.raceAllStats / 100)) * 100).toFixed(0) + "%" + "</span></a> ";

    intelligence.innerHTML = "<span data-toggle=\"tooltip\" data-placement=\"top\" title=\"Total Intelligence\">" + player.functions.totalIntelligence() + "</span>" +
        "<a class=\"tooltipA\">" + "<p class=\"glyphicon glyphicon-info-sign\"></p>" + "<span style=\"text-align:left\">" + "Base: " + player.properties.baseIntelligence +
        "<br />Equipment: " + player.functions.totalIntelligenceBonus() +
        "<br />Multiplier: " + ((player.functions.masteryIntelligence() + (player.properties.raceAllStats / 100)) * 100).toFixed(0) + "%" + "</span></a> ";

    luck.innerHTML = "<span data-toggle=\"tooltip\" data-placement=\"top\" title=\"Total Luck\">" + player.functions.totalLuck() + "</span>" +
        "<a class=\"tooltipA\">" + "<p class=\"glyphicon glyphicon-info-sign\"></p>" + "<span style=\"text-align:left\">" + "Base: " + player.properties.baseLuck +
        "<br />Equipment: " + player.functions.totalLuckBonus() +
        "<br />Multiplier: " + ((1 + (player.properties.raceAllStats / 100)) * 100).toFixed(0) + "%" + "</span></a> ";

    damage.innerHTML = "<span data-toggle=\"tooltip\" data-placement=\"top\" title=\"Total Damage\">"
        + player.functions.minDamage().toFixed(0) + "-" + player.functions.maxDamage().toFixed(0) + "</span>" +
        "<a class=\"tooltipA\">" + "<p class=\"glyphicon glyphicon-info-sign\"></p>" + "<span style=\"text-align:left\">" + "Multiplier: " + (player.functions.bonusDamage() + player.properties.raceDamage) + "%</span></a> ";

    stats.innerHTML = "<span style='margin-right:20px;' data-toggle=\"tooltip\" data-placement=\"top\" title=\"Total Stat Points\">"
        + player.properties.stats + "</span>";


    level = document.getElementById("level");
    maxExperience = document.getElementById("maxexperience");
    experience = document.getElementById("experience");
    gold = document.getElementById("gold");

    level.innerHTML = player.properties.level;
    maxExperience.innerHTML = player.properties.maxExperience;
    experience.innerHTML = player.properties.experience;
    gold.innerHTML = player.properties.gold.toFixed(0);

    //primaryStatUpdate();
    secondaryStatUpdate();
    CreatePlayerHotBar();
    CreateWeaponSkillHtml();
};

function expPercent() {
    var exppercent = (Math.floor((player.properties.experience / player.properties.maxExperience) * 100)); //Player experience in % values at the top bar
    var divArray = document.getElementById("progressBar");
    divArray.style.width = ((exppercent) + "%");
    document.getElementById("exppercent").innerHTML = exppercent + "%";
};

function healthPercent() {
    var healthPercentValue = (Math.floor((player.properties.health / player.functions.maxhealth()) * 100));
    var divArray = document.getElementById("progressBar2");
    divArray.style.width = ((healthPercentValue) + "%");
};

function healthRegen() { //Health regen
    if (player.properties.isDead === false) {
        if (player.properties.health < player.functions.maxhealth()) player.properties.health += player.functions.hpregen();
        if (player.properties.health > player.functions.maxhealth()) player.properties.health = player.functions.maxhealth();
    };
    document.getElementById("health").innerHTML = player.properties.health + "/" + player.functions.maxhealth();
};

function manaRegen() { //Mana regen
    if (player.properties.mana < player.functions.maxMana()) player.properties.mana += player.functions.manaRegen();
    if (player.properties.mana > player.functions.maxMana()) player.properties.mana = player.functions.maxMana();
    document.getElementById("mana").innerHTML = "<span data-toggle=\"tooltip\" data-placement=\"top\" title=\"Total Mana\">"
        + (player.properties.mana).toFixed(0) + "/" + (player.functions.maxMana()).toFixed(0) + "</span>" +
        "<a class=\"tooltipA\">" + "<p class=\"glyphicon glyphicon-info-sign\"></p>" + "<span style=\"text-align:left\">" + "Multiplier: " + (player.functions.bonusMana() + player.properties.raceMaxMana) + "%</span></a> ";

};

function levelUp() {
    for (var hero in characterRaces) {
        if (characterRaces.hasOwnProperty(hero)) {
            var heroRace = characterRaces[hero];
            if (player.properties.heroRace === heroRace.name) {
                player.properties.baseStrength += heroRace.strength();
                player.properties.baseEndurance += heroRace.endurance();
                player.properties.baseAgility += heroRace.agility();
                player.properties.baseDexterity += heroRace.dexterity();
                player.properties.baseWisdom += heroRace.wisdom();
                player.properties.baseIntelligence += heroRace.intelligence();
                player.properties.baseLuck += heroRace.luck();
                player.properties.skillPoints += 1;
            };
        };
    };
    quest();
    CreateMonsterHtml();
    updateHtml();
    CreatePlayerSkillsHtml();
    CreatePlayerHotBar();
};

function loadIsEquipped() {
    if (equippedItems.weapon.subType === "sword") {
        player.properties.isSword = true;
    } else if (equippedItems.weapon.subType === "axe") {
        player.properties.isAxe = true;
    } else if (equippedItems.weapon.subType === "mace") {
        player.properties.isMace = true;
    } else if (equippedItems.weapon.subType === "staff") {
        player.properties.isStaff = true;
    } else if (equippedItems.weapon.subType === "ranged") {
        player.properties.isRanged = true;
    }
};

function resetIsEquipped() {
    player.properties.isSword = false;
    player.properties.isAxe = false;
    player.properties.isMace = false;
    player.properties.isStaff = false;
    player.properties.isRanged = false;
};

//Upgrading player stats

//Strength
function upgradeStrength(event) {
    if (event.shiftKey) {
        if (player.properties.stats >= 100) {
            player.properties.stats = player.properties.stats - 100;
            player.properties.baseStrength += 100;
        };
    };
    if (event.ctrlKey) {
        if (player.properties.stats >= 10) {
            player.properties.stats = player.properties.stats - 10;
            player.properties.baseStrength += 10;

        }
    } else if (!event.shiftKey && !event.ctrlKey) {
        if (player.properties.stats >= 1) {
            player.properties.stats = player.properties.stats - 1;
            player.properties.baseStrength += 1;
        };
    };
    updateHtml();
};

//Endurance
function upgradeEndurance(event) {
    if (event.shiftKey) {
        if (player.properties.stats >= 100) {
            player.properties.stats = player.properties.stats - 100;
            player.properties.baseEndurance += 100;
        };
    };
    if (event.ctrlKey) {
        if (player.properties.stats >= 10) {
            player.properties.stats = player.properties.stats - 10;
            player.properties.baseEndurance += 10;

        }
    } else if (!event.shiftKey && !event.ctrlKey) {
        if (player.properties.stats >= 1) {
            player.properties.stats = player.properties.stats - 1;
            player.properties.baseEndurance += 1;
        };
    };
    updateHtml();
};

//Agility
function upgradeAgility(event) {
    if (event.shiftKey) {
        if (player.properties.stats >= 100) {
            player.properties.stats = player.properties.stats - 100;
            player.properties.baseAgility += 100;
        };
    };
    if (event.ctrlKey) {
        if (player.properties.stats >= 10) {
            player.properties.stats = player.properties.stats - 10;
            player.properties.baseAgility += 10;

        }
    } else if (!event.shiftKey && !event.ctrlKey) {
        if (player.properties.stats >= 1) {
            player.properties.stats = player.properties.stats - 1;
            player.properties.baseAgility += 1;
        };
    };
    updateHtml();
};

//Dexterity
function upgradeDexterity(event) {
    if (event.shiftKey) {
        if (player.properties.stats >= 100) {
            player.properties.stats = player.properties.stats - 100;
            player.properties.baseDexterity += 100;
        };
    };
    if (event.ctrlKey) {
        if (player.properties.stats >= 10) {
            player.properties.stats = player.properties.stats - 10;
            player.properties.baseDexterity += 10;

        }
    } else if (!event.shiftKey && !event.ctrlKey) {
        if (player.properties.stats >= 1) {
            player.properties.stats = player.properties.stats - 1;
            player.properties.baseDexterity += 1;
        };
    };
    updateHtml();
};

//Wisdom
function upgradeWisdom(event) {
    if (event.shiftKey) {
        if (player.properties.stats >= 100) {
            player.properties.stats = player.properties.stats - 100;
            player.properties.baseWisdom += 100;
        };
    };
    if (event.ctrlKey) {
        if (player.properties.stats >= 10) {
            player.properties.stats = player.properties.stats - 10;
            player.properties.baseWisdom += 10;

        }
    } else if (!event.shiftKey && !event.ctrlKey) {
        if (player.properties.stats >= 1) {
            player.properties.stats = player.properties.stats - 1;
            player.properties.baseWisdom += 1;
        };
    };
    updateHtml();
};

//Intelligence
function upgradeIntelligence(event) {
    if (event.shiftKey) {
        if (player.properties.stats >= 100) {
            player.properties.stats = player.properties.stats - 100;
            player.properties.baseIntelligence += 100;
        };
    };
    if (event.ctrlKey) {
        if (player.properties.stats >= 10) {
            player.properties.stats = player.properties.stats - 10;
            player.properties.baseIntelligence += 10;

        }
    } else if (!event.shiftKey && !event.ctrlKey) {
        if (player.properties.stats >= 1) {
            player.properties.stats = player.properties.stats - 1;
            player.properties.baseIntelligence += 1;
        };
    };
    updateHtml();
};

//Luck
function upgradeLuck(event) {
    if (event.shiftKey) {
        if (player.properties.stats >= 100) {
            player.properties.stats = player.properties.stats - 100;
            player.properties.baseLuck += 100;
        };
    };
    if (event.ctrlKey) {
        if (player.properties.stats >= 10) {
            player.properties.stats = player.properties.stats - 10;
            player.properties.baseLuck += 10;

        }
    } else if (!event.shiftKey && !event.ctrlKey) {
        if (player.properties.stats >= 1) {
            player.properties.stats = player.properties.stats - 1;
            player.properties.baseLuck += 1;
        };
    };
    updateHtml();
};

function autoAttack(monster, monsterStats) {
    disableButtons();
    var manaCost = monster.Stats.manaCost;
    var autoBattle = window.setInterval(function() {
        if (player.properties.mana >= manaCost && player.autoBattle.autoBattle === true) {
            player.properties.mana -= manaCost;
            attack(monster, monsterStats);
        } else if (player.autoBattle.autoBattle === false) {
            clearInterval(autoBattle);
            player.autoBattle.isAuto = false;
            disableButtons();
        };
    }, 10000);
};


function upgradePassive(skillName) {
    if (playerPassive.hasOwnProperty(skillName)) {
        var selectedSkill = playerPassive[skillName];
        if (selectedSkill.maxLevel !== selectedSkill.level) {
            if (player.properties.skillPoints > 0) {
                if (player.properties.level >= selectedSkill.levelReq) {
                    if (selectedSkill.requirements() === true) {
                        selectedSkill.level += 1;
                        player.properties.skillPoints -= 1;
                        Log("<span id=\"skillLog\" class =\"bold\" style=\"color:green; display:none;\">" + "Upgraded skill." + "<br />" + "</span>");
                    } else {
                        Log("<span id=\"skillLog\" class =\"bold\" style=\"color:red; display:none;\">" + "You do not meet requirements for this skill." + "<br />" + "</span>");
                    }
                } else {
                    Log("<span id=\"skillLog\" class =\"bold\" style=\"color:red; display:none;\">" + "Your level is not high enough." + "<br />" + "</span>");
                }
            } else {
                Log("<span id=\"skillLog\" class =\"bold\" style=\"color:red; display:none;\">" + "Not enough skill points." + "<br />" + "</span>");
            }
        } else {
            Log("<span id=\"skillLog\" class =\"bold\" style=\"color:blue; display:none;\">" + "Skill has reached max level." + "<br />" + "</span>");
        };
    };
    skillLog();
    CreatePlayerSkillsHtml();
    CreatePlayerHotBar();
    updateHtml();
};

function skillLog() {
    $("#skillLog").delay(100).fadeIn().delay(1000).fadeOut(500, function() { $(this).remove(); });
};