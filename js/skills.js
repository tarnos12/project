"use strict";
//Spells
(function () {
    var weaponSpells = function (name, weaponRarity) {
        this.name = name;
        this.rarity = weaponRarity;
    };

    var fireBall = new weaponSpells("FireBall", "Common");

    fireBall.damage = function () {
        return player.functions.totalIntelligence() * 2;
    };

})();
//Skills
(function() {
    var newPassive = function(level, maxLevel, id, levelReq, name, image, bonus) { //default spell object constructor
        this.id = id;
        this.level = level;
        this.maxLevel = maxLevel;
        this.levelReq = levelReq;
        this.name = name;
        this.image = image;
        this.bonus = bonus;
        this.type = "Triple";
        this.newRow = false;
        this.lastRow = false;
        this.bonusTotal = function() {
            return Math.floor(this.bonus * this.level);
        };
        this.requirements = function() {
            return true;
        };
    };
    //lvl/maxLvl/ID/Req/Name/Image/bonus
    var brawler = new newPassive(0, 5, 1, 1, "Brawler", "Brawler", 5);
    var vitality = new newPassive(0, 5, 2, 1, "Vitality", "Vitality", 5);
    var looter = new newPassive(0, 5, 3, 1, "Looter", "Looter", 10);
    var overpower = new newPassive(0, 1, 4, 5, "Overpower", "Overpower", 25);
    var fortitude = new newPassive(0, 1, 5, 5, "Fortitude", "Fortitude", 20);
    var explorer = new newPassive(0, 1, 6, 5, "Explorer", "Explorer", 50);
    var sixthSense = new newPassive(0, 5, 7, 10, "Sixth Sense", "SixthSense", 10);
    var spiritualAttunement = new newPassive(0, 5, 8, 10, "Spiritual Attunement", "Spiritual", 20);
    var mighty = new newPassive(0, 5, 9, 15, "Mighty", "Mighty", 10);
    var constitution = new newPassive(0, 5, 10, 15, "Constitution", "Constitution", 20);
    var curiosity = new newPassive(0, 5, 11, 15, "Curiosity", "Curiosity", 20);
    var masterofArms = new newPassive(0, 1, 12, 20, "Master of Arms", "MasterofArms", 50);
    var robust = new newPassive(0, 1, 13, 20, "Robust", "Robust", 100);
    var ancientKnowledge = new newPassive(0, 1, 14, 20, "Ancient Knowledge", "AncientKnowledge", 50);
    var balancedWarrior = new newPassive(0, 1, 15, 25, "Balanced Warrior", "BalancedWarrior", 50);
    var mentalMastery = new newPassive(0, 1, 15, 25, "Mental Mastery", "MentalMastery", 50);

    //Need this, for my html, to work properly...
    looter.lastRow = true;
    explorer.lastRow = true;
    spiritualAttunement.lastRow = true;
    curiosity.lastRow = true;
    ancientKnowledge.lastRow = true;
    mentalMastery.lastRow = true;
    brawler.newRow = true;
    overpower.newRow = true;
    sixthSense.newRow = true;
    mighty.newRow = true;
    masterofArms.newRow = true;
    balancedWarrior.newRow = true;

    brawler.description = function() {
        return "Increase damage by " + this.bonus + "% per level. <br /> Currently grants: " + this.bonusTotal() + "% bonus damage. <br /><br />Requires:";
    };
    brawler.newRow = true;
    overpower.newRow = true;
    overpower.description = function() {
        return "Increase damage by " + this.bonus + "% <br /> Currently grants: " + this.bonusTotal() + "% bonus damage. <br /><br />Requires: <br /> " +
            brawler.name;
    };
    overpower.requirements = function() {
        if (brawler.level >= 1) {
            return true;
        } else {
            return false;
        }
    };
    vitality.description = function() {
        return "Increase health by " + this.bonus + "% per level. <br /> Currently grants: " + this.bonusTotal() + "% health. <br /><br />Requires:";
    };
    fortitude.description = function() {
        return "Increase health by " + this.bonus + "% <br /> Currently grants: " + this.bonusTotal() + "% health. <br /><br />Requires: <br /> " +
            vitality.name;
    };
    fortitude.requirements = function() {
        if (vitality.level >= 1) {
            return true;
        } else {
            return false;
        }
    };
    looter.description = function() {
        return "Increase magic find by " + this.bonus + "% per level. <br /> Currently grants: " + this.bonusTotal() + "% magic find. <br /><br />Requires:";
    };
    explorer.description = function() {
        return "Increase magic find by " + this.bonus + "% <br /> Currently grants: " + this.bonusTotal() + "% magic find. <br /><br />Requires: <br /> " +
            looter.name;
    };
    explorer.requirements = function() {
        if (looter.level >= 1) {
            return true;
        } else {
            return false;
        }
    };

    sixthSense.description = function() {
        return "Increase total Evasion by " + this.bonus + "% <br /> Currently grants: " + this.bonusTotal() + "% Evasion. <br /><br />Requires: <br /> " +
            overpower.name + "<br />" + fortitude.name;
    };
    sixthSense.type = "Double";
    sixthSense.requirements = function() {
        if (overpower.level >= 1 && fortitude.level >= 1) {
            return true;
        } else {
            return false;
        }
    };
    spiritualAttunement.description = function() {
        return "Increase mana by " + this.bonus + " <br /> Currently grants: " + this.bonusTotal() + " maximum mana. <br /><br />Requires: <br /> " +
            fortitude.name + "<br />" + explorer.name;
    };
    spiritualAttunement.type = "Double";
    spiritualAttunement.requirements = function() {
        if (fortitude.level >= 1 && explorer.level >= 1) {
            return true;
        } else {
            return false;
        }
    };
    mighty.description = function() {
        return "Increase damage by " + this.bonus + "% <br /> Currently grants: " + this.bonusTotal() + "% bonus damage. <br /><br />Requires: <br /> " +
            overpower.name;
    };
    mighty.requirements = function() {
        if (overpower.level >= 1) {
            return true;
        } else {
            return false;
        }
    };
    constitution.description = function() {
        return "Increase health by " + this.bonus + "% <br /> Currently grants: " + this.bonusTotal() + "% health. <br /><br />Requires: <br /> " +
            fortitude.name;
    };
    constitution.requirements = function() {
        if (fortitude.level >= 1) {
            return true;
        } else {
            return false;
        }
    };
    curiosity.description = function() {
        return "Increase experience rate by " + this.bonus + "% <br /> Currently grants: " + this.bonusTotal() + "% bonus experience rate. <br /><br />Requires: <br /> " +
            explorer.name;
    };
    curiosity.requirements = function() {
        if (explorer.level >= 1) {
            return true;
        } else {
            return false;
        }
    };

    masterofArms.description = function() {
        return "Increase damage by " + this.bonus + "% <br /> Currently grants: " + this.bonusTotal() + "% bonus damage.<br /><br />Requires: <br /> " +
            mighty.name;
    };
    masterofArms.requirements = function() {
        if (mighty.level >= 1) {
            return true;
        } else {
            return false;
        }
    };
    robust.description = function() {
        return "Increase health by " + this.bonus + "% <br /> Currently grants: " + this.bonusTotal() + "% bonus health.<br /><br />Requires: <br /> " +
            constitution.name;
    };
    robust.requirements = function() {
        if (constitution.level >= 1) {
            return true;
        } else {
            return false;
        }
    };

    ancientKnowledge.description = function() {
        return "Increase gold/exp/drop rates by " + this.bonus + "% <br /> Currently grants: " + this.bonusTotal() + "% bonus gold/exp/drop rate.<br /><br />Requires: <br /> " +
            curiosity.name;
    };
    ancientKnowledge.requirements = function() {
        if (curiosity.level >= 1) {
            return true;
        } else {
            return false;
        }
    };
    balancedWarrior.type = "Double";
    balancedWarrior.description = function() {
        return "Increase damage and health by " + this.bonus + "% <br /> Currently grants: " + this.bonusTotal() + "% bonus damage and health. <br /><br />Requires: <br /> " +
            sixthSense.name;
    };
    balancedWarrior.requirements = function() {
        if (sixthSense.level >= 1) {
            return true;
        } else {
            return false;
        }
    };
    mentalMastery.type = "Double";
    mentalMastery.description = function() {
        return "Increase max mana by " + this.bonus + "% <br /> Currently grants: " + this.bonusTotal() + "% max mana. <br /><br />Requires: <br /> " +
            spiritualAttunement.name;
    };
    mentalMastery.requirements = function() {
        if (spiritualAttunement.level >= 1) {
            return true;
        } else {
            return false;
        }
    };

    window.playerPassive = new Object();
    playerPassive.brawler = brawler;
    playerPassive.vitality = vitality;
    playerPassive.looter = looter;
    playerPassive.overpower = overpower;
    playerPassive.fortitude = fortitude;
    playerPassive.explorer = explorer;
    playerPassive.sixthSense = sixthSense;
    playerPassive.spiritualAttunement = spiritualAttunement;
    playerPassive.mighty = mighty;
    playerPassive.constitution = constitution;
    playerPassive.curiosity = curiosity;
    playerPassive.masterofArms = masterofArms;
    playerPassive.robust = robust;
    playerPassive.ancientKnowledge = ancientKnowledge;
    playerPassive.balancedWarrior = balancedWarrior;
    playerPassive.mentalMastery = mentalMastery;

//Weapon Skills

    var weaponSkillDamage = function(levelReq, name, image, type, type2, id, manaCost) { //default spell object constructor
        this.levelReq = levelReq;
        this.name = name;
        this.image = image;
        this.type = type;
        this.type2 = type2;
        this.id = id;
        this.animation = function () {
            return "slashAnimation";
        };
        this.manaCost = manaCost;
    };
//Level, name, image, type
//SWORD SKILL
    var savageStrike = new weaponSkillDamage(1, "Savage Strike", "SavageStrike", "damage", "physical", 1, 20);
    var swordFinesse = new weaponSkillDamage(5, "Sword Finesse", "SwordFinesse", "passive", "physical", 6, 20);
    var parryAndRiposte = new weaponSkillDamage(10, "Parry and Riposte", "ParryAndRiposte", "counter", "physical", 11, 20);
    var sinisterSwing = new weaponSkillDamage(15, "Sinister Swing", "SinisterSwing", "damage", "physical", 16, 50);
    var rendingArc = new weaponSkillDamage(20, "Rending Arc", "RendingArc", "damage", "physical", 21, 100);

//SWORD DAMAGE/BUFF/BLOCK ETC.

    //SAVAGE STRIKE

    //DAMAGE
    savageStrike.damageDisplay = function () {
        return Math.floor(10 + (weaponMastery.sword.level * 2) + player.functions.totalStrength() * 0.5 + player.functions.totalAgility() * 0.5);
    };
    savageStrike.damage = function () {
        return (player.properties.isSword && weaponMastery.sword.level >= this.levelReq) ? this.damageDisplay() : 0;
    };
    //LIFESTEAL
    savageStrike.lifeSteal = function () {
        return Math.floor(1 + weaponMastery.sword.level * 0.5);
    };
    savageStrike.lifeStealAmount = function () {
        return (player.properties.isSword && weaponMastery.sword.level >= this.levelReq) ? this.lifeSteal() : 0;
    };

//SWORD FINESSE
    swordFinesse.damageDisplay = function() {
        return Math.floor(player.functions.totalAgility() * 0.2);
    };
    swordFinesse.damage = function() {
        return (player.properties.isSword && weaponMastery.sword.level >= this.levelReq) ? this.damageDisplay() : 0;
    };

//PARRY AND RIPOSTE

//BLOCK
    parryAndRiposte.blockChanceDisplay = function() {
        if (Math.floor(10 + (weaponMastery.sword.level / 10)) >= 15) {
            return 15;
        }
        else {
           return Math.floor(10 + (weaponMastery.sword.level / 5));
        };
    };
    parryAndRiposte.blockChance = function() {
        return (player.properties.isSword && weaponMastery.sword.level >= this.levelReq) ? this.blockChanceDisplay() : 0;
    };
    parryAndRiposte.blockAmountDisplay = function() {
        return Math.floor(weaponMastery.sword.level * 4);
    };
    parryAndRiposte.blockAmount = function() {
        return (player.properties.isSword && weaponMastery.sword.level >= this.levelReq) ? this.blockAmountDisplay() : 0;
    };

//COUNTER
    parryAndRiposte.counterChanceDisplay = function() {
        if (Math.floor(weaponMastery.sword.level + (0.02 * player.functions.totalAgility())) >= 50) {
            return 50;
        }
        else {
            return Math.floor(weaponMastery.sword.level + (0.02 * player.functions.totalAgility()));
        }
    };
    parryAndRiposte.counterChance = function() {
        return (player.properties.isSword && weaponMastery.sword.level >= this.levelReq) ? this.counterChanceDisplay() : 0;
    };
    parryAndRiposte.counterDamageDisplay = function() {
        return Math.floor(80 + weaponMastery.sword.level + (0.1 * player.functions.totalStrength()));
    };
    parryAndRiposte.counterDamage = function() {
        return (player.properties.isSword && weaponMastery.sword.level >= this.levelReq) ? this.counterDamageDisplay() : 0;
    };



//SINISTER SWING

//DAMAGE
    sinisterSwing.damageDisplay = function() {
        return Math.floor(30 + (weaponMastery.sword.level * 2) + player.functions.totalStrength() * 0.8 + player.functions.totalAgility() * 0.8);
    };
    sinisterSwing.damage = function() {
        return (player.properties.isSword && weaponMastery.sword.level >= this.levelReq) ? this.damageDisplay() : 0;
    };
//RENDING ARC 

//DAMAGE
    rendingArc.damageDisplay = function() {
        return Math.floor(60 + (weaponMastery.sword.level * 2) + player.functions.totalStrength() * 1.2 + player.functions.totalAgility() * 1.2);
    };
    rendingArc.damage = function() {
        return (player.properties.isSword && weaponMastery.sword.level >= this.levelReq) ? this.damageDisplay() : 0;
    };

//SWORD DESCRIPTION
    swordFinesse.description = function() {
        return "Damage increase:" + this.damageDisplay() + "<br />" + "20% total agility added to your min and max damage.";
    };
    parryAndRiposte.description = function() {
        return "Block chance: " + this.blockChanceDisplay() + "%" + " of " + this.blockAmountDisplay() + " damage.<br />" +
            "Counter chance: " + this.counterChanceDisplay() + "%" + " for " + this.counterDamageDisplay() + " damage.<br />";
    };
    savageStrike.description = function() {
        return "Damage: " + this.damageDisplay() + "(Strength/Agility based).<br />" +
            "Life steal: " + this.lifeSteal() + " each time you attack.";
    };
    sinisterSwing.description = function() {
        return "Damage: " + this.damageDisplay() + "(Strength/Agility based).";
    };
    rendingArc.description = function() {
        return "Damage: " + this.damageDisplay() + "(Strength/Agility based).";
    };

//AXE SKILL
    var hamstring = new weaponSkillDamage(1, "Hamstring", "Hamstring", "damage", "physical", 2, 15);
    var butchersInsight = new weaponSkillDamage(5, "Butcher\'s Insight", "ButchersInsight", "passive", "physical", 7, 20);
    var whirlwind = new weaponSkillDamage(10, "Whirlwind", "Whirlwind", "damage", "physical", 12, 40);
    var flurry = new weaponSkillDamage(15, "Flurry", "Flurry", "damage", "physical", 17, 70);
    var frenzy = new weaponSkillDamage(20, "Frenzy", "Frenzy", "damage", "physical", 22, 120);

//AXE DAMAGE/BUFF/BLOCK ETC.


//HAMSTRING

//DAMAGE
    hamstring.damageDisplay = function() {
        return Math.floor(20 + (weaponMastery.axe.level * 4) + player.functions.totalStrength() * 0.6 + player.functions.totalEndurance() * 0.6);
    };
    hamstring.damage = function() {
        return (player.properties.isAxe && weaponMastery.axe.level >= this.levelReq) ? this.damageDisplay() : 0;
    };

    //BUTCHER'S INSIGHT

    //PASSIVE
    butchersInsight.damageDisplay = function () {
        return Math.floor(player.functions.totalIntelligence() * 0.5);
    };
    butchersInsight.damage = function () {
        return (player.properties.isAxe && weaponMastery.axe.level >= this.levelReq) ? this.damageDisplay() : 0;
    };

//WHIRLWIND

//DAMAGE
    whirlwind.damageDisplay = function() {
        return Math.floor(40 + (weaponMastery.axe.level * 4) + player.functions.totalStrength() * 0.9 + player.functions.totalEndurance() * 0.9);
    };
    whirlwind.damage = function() {
        return (player.properties.isAxe && weaponMastery.axe.level >= this.levelReq) ? this.damageDisplay() : 0;
    };

//FLURRY

//DAMAGE
    flurry.damageDisplay = function() {
        return Math.floor(70 + (weaponMastery.axe.level * 4) + player.functions.totalStrength() * 1.3 + player.functions.totalEndurance() * 1.3);
    };
    flurry.damage = function() {
        return (player.properties.isAxe && weaponMastery.axe.level >= this.levelReq) ? this.damageDisplay() : 0;
    };

//FRENZY

//BUFF
    frenzy.damageDisplay = function() {
        return Math.floor(100 + (weaponMastery.axe.level * 4) + player.functions.totalStrength() * 1.5 + player.functions.totalEndurance() * 1.5);
    };
    frenzy.damage = function() {
        return (player.properties.isAxe && weaponMastery.axe.level >= this.levelReq) ? this.damageDisplay() : 0;
    };

//AXE DESCRIPTION
    butchersInsight.description = function() {
        return "Critical damage:" + this.damageDisplay() + " %(Intelligence based).";
    };
    hamstring.description = function() {
        return "Damage:" + this.damageDisplay() + "(Strength based).";
    };
    whirlwind.description = function() {
        return "Damage:" + this.damageDisplay() + "(Strength based).";
    };
    flurry.description = function() {
        return "Damage:" + this.damageDisplay() + "(Strength based).";
    };
    frenzy.description = function() {
        return "Damage:" + this.damageDisplay() + "(Strength based).";
    };

//MACE SKILL
    var hammerTime = new weaponSkillDamage(1, "Hammer Time", "HammerTime", "damage", "physical", 3, 20);
    var dominatingSlam = new weaponSkillDamage(5, "Dominating Slam", "DominatingSlam", "damage", "physical", 8, 40);
    var gash = new weaponSkillDamage(10, "Gash", "Gash", "damage", "physical", 13, 80);
    var overbearingWallop = new weaponSkillDamage(15, "Overbearing Wallop", "OverBearingWallop", "damage", "physical", 18, 120);
    var tremor = new weaponSkillDamage(20, "Tremor", "Tremor", "damage", "physical", 2, 150);

//MACE DAMAGE/BUFF/BLOCK ETC.

//HAMMER TIME

//DAMAGE
    hammerTime.damageDisplay = function() {
        return Math.floor(15 + (weaponMastery.mace.level * 3) + player.functions.totalEndurance() * 0.4 + player.functions.totalWisdom() * 0.4);
    };
    hammerTime.damage = function() {
        return (player.properties.isMace && weaponMastery.mace.level >= this.levelReq) ? this.damageDisplay() : 0;
    };

//DOMINATIN SLAM

//DAMAGE
    dominatingSlam.damageDisplay = function() {
        return Math.floor(25 + (weaponMastery.mace.level * 3) + player.functions.totalEndurance() * 0.7 + player.functions.totalWisdom() * 0.7);
    };
    dominatingSlam.damage = function() {
        return (player.properties.isMace && weaponMastery.mace.level >= this.levelReq) ? this.damageDisplay() : 0;
    };

//GASH 

//DAMAGE
    gash.damageDisplay = function() {
        return Math.floor(50 + (weaponMastery.mace.level * 3) + player.functions.totalEndurance() * 1.1 + player.functions.totalWisdom() * 1.1);
    };
    gash.damage = function() {
        return (player.properties.isMace && weaponMastery.mace.level >= this.levelReq) ? this.damageDisplay() : 0;
    };

//OVERBEARING WALLOP

//DAMAGE
    overbearingWallop.damageDisplay = function() {
        return Math.floor(80 + (weaponMastery.mace.level * 3) + player.functions.totalEndurance() * 1.3 + player.functions.totalWisdom() * 1.3);
    };
    overbearingWallop.damage = function() {
        return (player.properties.isMace && weaponMastery.mace.level >= this.levelReq) ? this.damageDisplay() : 0;
    };

//TREMOR 

//DAMAGE
    tremor.damageDisplay = function() {
        return Math.floor(125 + (weaponMastery.mace.level * 3) + player.functions.totalEndurance() * 1.5 + player.functions.totalWisdom() * 1.5);
    };
    tremor.damage = function() {
        return (player.properties.isMace && weaponMastery.mace.level >= this.levelReq) ? this.damageDisplay() : 0;
    };

//MACE DESCRIPTION
    hammerTime.description = function() {
        return "Damage:" + this.damageDisplay() + "(Strength based).";
    };
    dominatingSlam.description = function() {
        return "Damage:" + this.damageDisplay() + "(Wisdom + Endurance based).";
    };
    gash.description = function() {
        return "Damage:" + this.damageDisplay() + "(Wisdom + Endurance based).";
    };
    overbearingWallop.description = function() {
        return "Damage:" + this.damageDisplay() + "(Wisdom based).";
    };
    tremor.description = function() {
        return "Damage:" + this.damageDisplay() + "(Endurance + Wisdom based).";
    };

    //STAFF SKILL
    var starlight = new weaponSkillDamage(1, "Starlight", "Starlight", "damage", "magical", 4, 30);
    var intone = new weaponSkillDamage(5, "Intone", "Intone", "magicDamageBuff", "magical", 9, 30);
    var hateCannon = new weaponSkillDamage(10, "Hate Cannon", "HateCannon", "damage", "magical", 14, 100);
    var beguilersOrb = new weaponSkillDamage(15, "Beguiler\'s Orb", "BeguilersOrb", "damage", "magical", 19, 200);
    var spellSimulacrum = new weaponSkillDamage(20, "Spell Simulacrum", "SpellSimulacrum", "passive", "magical", 24, 200);

//STAFF DAMAGE/BUFF/BLOCK ETC.

//INTONE

//BUFF
    intone.damageDisplay = function() {
        return Math.floor(10 + player.functions.totalIntelligence() * 2);
    };
    intone.damage = function() {
        return (player.properties.isStaff && weaponMastery.staff.level >= this.levelReq) ? this.damageDisplay() : 0;
    };
    intone.chanceDisplay = function() {
        return Math.floor(20 + weaponMastery.staff.level);
    };
    intone.chance = function() {
        return (player.properties.isStaff && weaponMastery.staff.level >= this.levelReq) ? this.chanceDisplay() : 0;
    };

//STARLIGHT

//DAMAGE 
    starlight.damageDisplay = function() {
        return Math.floor(30 + (weaponMastery.staff.level * 4) + player.functions.totalIntelligence() * 0.8 + player.functions.totalWisdom() * 0.8);
    };
    starlight.damage = function() {
        return (player.properties.isStaff && weaponMastery.staff.level >= this.levelReq) ? this.damageDisplay() : 0;
    };
    starlight.animation = function () {
        return "thunder";
    };

//HATE CANNON

//DAMAGE 
    hateCannon.damageDisplay = function() {
        return Math.floor(50 + (weaponMastery.staff.level * 3) + player.functions.totalIntelligence() * 1.2 + player.functions.totalWisdom() * 1.2);
    };
    hateCannon.damage = function() {
        return (player.properties.isStaff && weaponMastery.staff.level >= this.levelReq) ? this.damageDisplay() : 0;
    };

//BEGUILER'S ORB

//DAMAGE 
    beguilersOrb.damageDisplay = function() {
        return Math.floor(100 + (weaponMastery.staff.level * 3) + player.functions.totalIntelligence() * 1.6 + player.functions.totalWisdom() * 1.6);
    };
    beguilersOrb.damage = function() {
        return (player.properties.isStaff && weaponMastery.staff.level >= this.levelReq) ? this.damageDisplay() : 0;
    };

//SPELL SIMULACRUM

//DAMAGE 
    spellSimulacrum.damageDisplay = function() {
        return Math.floor(100 + weaponMastery.staff.level * 2);
    };
    spellSimulacrum.damage = function() {
        return (player.properties.isStaff && weaponMastery.staff.level >= this.levelReq) ? this.damageDisplay() / 100 : 1; //else "1" because it's a multiplier.
    };

//STAFF DESCRIPTION
    intone.description = function() {
        return "You have a chance(" + this.chanceDisplay() + ")" + " to empower one of your spells dealing bonus damage(" + this.damageDisplay() + ").<br/>" +
            "It work's for each active spell in battle.";
    };
    starlight.description = function() {
        return "Damage:" + this.damageDisplay() + "(Intelligence + Wisdom based).";
    };
    hateCannon.description = function() {
        return "Damage:" + this.damageDisplay() + "(Intelligence based).";
    };
    beguilersOrb.description = function() {
        return "Damage:" + this.damageDisplay() + "(Intelligence + Wisdom based).";
    };
    spellSimulacrum.description = function() {
        return "Increase your total intelligence(" + (this.damageDisplay() - 100) + "%)";
    };

//RANGED SKILL
    var pierceTheVeil = new weaponSkillDamage(1, "Pierce the Veil", "PierceTheVeil", "damage", "physical", 5, 15);
    var skyCracker = new weaponSkillDamage(5, "Sky Cracker", "SkyCracker", "damage", "physical", 10, 35);
    var archerFocus = new weaponSkillDamage(10, "Archer Focus", "ArcherFocus", "passive", "physical", 15, 20);
    var makeItRain = new weaponSkillDamage(15, "Make it Rain", "MakeItRain", "damage", "physical", 20, 80);
    var rangersRevenge = new weaponSkillDamage(20, "Ranger\'s Revenge", "RangersRevenge", "damage", "physical", 25, 120);

//RANGED DAMAGE/BUFF/BLOCK ETC.

//PIERCE THE VEIL

//DAMAGE
    pierceTheVeil.damageDisplay = function() {
        return Math.floor(30 + (weaponMastery.ranged.level * 3) + player.functions.totalDexterity() * 0.7 + player.functions.totalStrength() * 0.7);
    };
    pierceTheVeil.damage = function() {
        return (player.properties.isRanged && weaponMastery.ranged.level >= this.levelReq) ? this.damageDisplay() : 0;
    };

//SKY CRACKER

//DAMAGE
    skyCracker.damageDisplay = function() {
        return Math.floor(50 + (weaponMastery.ranged.level * 3) + player.functions.totalDexterity() * 0.9 + player.functions.totalStrength() * 0.9);
    };
    skyCracker.damage = function() {
        return (player.properties.isRanged && weaponMastery.ranged.level >= this.levelReq) ? this.damageDisplay() : 0;
    };

//ARCHER FOCUS

//DAMAGE
    archerFocus.damageDisplay = function() {
        return Math.floor(weaponMastery.ranged.level / 2);
    };
    archerFocus.damage = function() {
        return (player.properties.isRanged && weaponMastery.ranged.level >= this.levelReq) ? this.damageDisplay() : 0;
    };

//MAKE IT RAIN

//DAMAGE
    makeItRain.damageDisplay = function() {
        return Math.floor(70 + (weaponMastery.ranged.level * 3) + player.functions.totalDexterity() * 1.1 + player.functions.totalStrength() * 1.1);
    };
    makeItRain.damage = function() {
        return (player.properties.isRanged && weaponMastery.ranged.level >= this.levelReq) ? this.damageDisplay() : 0;
    };

//RANGER'S REVENGE

//DAMAGE
    rangersRevenge.damageDisplay = function() {
        return Math.floor(90 + (weaponMastery.ranged.level * 3) + player.functions.totalDexterity() * 1.3 + player.functions.totalStrength() * 1.3);
    };
    rangersRevenge.damage = function() {
        return (player.properties.isRanged && weaponMastery.ranged.level >= this.levelReq) ? this.damageDisplay() : 0;
    };

//RANGED DESCRIPTION
    pierceTheVeil.description = function() {
        return "Damage:" + this.damageDisplay() + "(Dexterity based).";
    };
    skyCracker.description = function() {
        return "Damage:" + this.damageDisplay() + "(Dexterity based).";
    };
    archerFocus.description = function() {
        return "Critical Chance: " + this.damageDisplay() + "% (Can increase it over 50% cap).";
    };
    makeItRain.description = function() {
        return "Damage:" + this.damageDisplay() + "(Dexterity + Strength based).";
    };
    rangersRevenge.description = function() {
        return "Damage:" + this.damageDisplay() + "(Dexterity + Strength based).";
    };

    var sword = new Object();
    sword.savageStrike = savageStrike;
    sword.swordFinesse = swordFinesse;
    sword.parryAndRiposte = parryAndRiposte;
    sword.sinisterSwing = sinisterSwing;
    sword.rendingArc = rendingArc;

    var axe = new Object();
    axe.hamstring = hamstring;
    axe.butchersInsight = butchersInsight;
    axe.whirlwind = whirlwind;
    axe.flurry = flurry;
    axe.frenzy = frenzy;


    var mace = new Object();
    mace.hammerTime = hammerTime;
    mace.dominatingSlam = dominatingSlam;
    mace.gash = gash;
    mace.overbearingWallop = overbearingWallop;
    mace.tremor = tremor;

    var staff = new Object();
    staff.starlight = starlight;
    staff.intone = intone;
    staff.hateCannon = hateCannon;
    staff.beguilersOrb = beguilersOrb;
    staff.spellSimulacrum = spellSimulacrum;

    var ranged = new Object();
    ranged.pierceTheVeil = pierceTheVeil;
    ranged.skyCracker = skyCracker;
    ranged.archerFocus = archerFocus;
    ranged.makeItRain = makeItRain;
    ranged.rangersRevenge = rangersRevenge;

    window.weaponSkillList = new Object();
    weaponSkillList.sword = sword;
    weaponSkillList.axe = axe;
    weaponSkillList.mace = mace;
    weaponSkillList.staff = staff;
    weaponSkillList.ranged = ranged;
})();