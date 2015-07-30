//Skills
(function () {
    var newPassive = function (level, maxLevel, id, levelReq, name, image, bonus) { //default spell object constructor
    this.id = id;
    this.level = level;
    this.maxLevel = maxLevel;
    this.levelReq = levelReq;
    this.name = name;
    this.image = image;
    this.bonus = bonus;
    this.type = "Single";
    this.bonusTotal = function () {
        return Math.floor(this.bonus * this.level);
    };
    this.requirements = function () {
        return true;
    };
};
    //level/maxLevel/ID/LevelReq/Name/Image/bonus
    var brawler = new newPassive(0, 5, 1, 1, "Brawler", "DmgUp", 10);
    var vitality = new newPassive(0, 5, 2, 1, "Vitality", "HpUp", 5);
    var looter = new newPassive(0, 5, 3, 1, "Looter", "MfUp", 10);
    var overpower = new newPassive(0, 1, 4, 5, "Overpower", "DmgUp2", 20);
    var fortitude = new newPassive(0, 1, 5, 5, "Fortitude", "HpUp2", 20);
    var explorer = new newPassive(0, 1, 6, 5, "Explorer", "MfUp2", 50);
    var sixthSense = new newPassive(0, 5, 7, 10, "Sixth Sense", "SixthSense", 10);
    var spiritualAttunement = new newPassive(0, 5, 8, 10, "Spiritual Attunement", "Spiritual", 20);

    brawler.description = function () {
        return "Increase damage by " + this.bonus + "% per level. <br /> Currently grants: " + this.bonusTotal() + "% bonus damage. <br /><br />Requires: <br />";
    };
    overpower.description = function () {
        return "Increase damage by " + this.bonus + "% <br /> Currently grants: " + this.bonusTotal() + "% bonus damage. <br /><br />Requires: <br /> " +
            brawler.name + " level " + brawler.maxLevel;
    };
    overpower.requirements = function () {
        if (brawler.level === brawler.maxLevel) {
            return true;
        }
        else {
            return false;
        };
    };
    vitality.description = function () {
        return "Increase health by " + this.bonus + "% per level. <br /> Currently grants: " + this.bonusTotal() + "% health. <br /><br />Requires: <br />";
    };
    fortitude.description = function () {
        return "Increase health by " + this.bonus + "% <br /> Currently grants: " + this.bonusTotal() + "% health. <br /><br />Requires: <br /> " +
            vitality.name + " level " + vitality.maxLevel;
    };
    fortitude.requirements = function () {
        if (vitality.level === vitality.maxLevel) {
            return true;
        }
        else {
            return false;
        };
    };
    looter.description = function () {
        return "Increase magic find by " + this.bonus + "% per level. <br /> Currently grants: " + this.bonusTotal() + "% magic find. <br /><br />Requires: <br />";
    };
    explorer.description = function () {
        return "Increase magic find by " + this.bonus + "% <br /> Currently grants: " + this.bonusTotal() + "% magic find. <br /><br />Requires: <br /> " +
            looter.name + " level " + looter.maxLevel;
    };
    explorer.requirements = function () {
        if (looter.level === looter.maxLevel) {
            return true;
        }
        else {
            return false;
        };
    };

    sixthSense.description = function () {
        return "Increase total Evasion by " + this.bonus + "% <br /> Currently grants: " + this.bonusTotal() + "% Evasion. <br /><br />Requires: <br /> " +
            overpower.name + " level " + overpower.maxLevel + '<br />' + fortitude.name + " level " + fortitude.maxLevel;
    };
    sixthSense.type = "Double";
    sixthSense.requirements = function () {
        if (overpower.level === overpower.maxLevel && fortitude.level === fortitude.maxLevel) {
            return true;
        }
        else {
            return false;
        };
    };
    spiritualAttunement.description = function () {
        return "Increase maximum mana by " + this.bonus + " <br /> Currently grants: " + this.bonusTotal() + " maximum mana. <br /><br />Requires: <br /> " +
            fortitude.name + " level " + fortitude.maxLevel + '<br />' + explorer.name + " level " + explorer.maxLevel;
    };
    spiritualAttunement.type = "Double";
    spiritualAttunement.requirements = function () {
        if (fortitude.level === fortitude.maxLevel && explorer.level === explorer.maxLevel) {
            return true;
        }
        else {
            return false;
        };
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

//Weapon Skills

var weaponSkillDamage = function (levelReq, name, image, type, type2) { //default spell object constructor
    this.levelReq = levelReq;
    this.name = name;
    this.image = image;
    this.charge = 1;
    this.maxCharge = 1;
    this.cooldown = 0.5;
    this.type = type;
    this.type2 = type2;
};
//Level, name, image, type
//SWORD SKILL
var swordFinesse = new weaponSkillDamage(5, "Sword Finesse", "SwordFinesse", "passive", "physical");
var parryAndRiposte = new weaponSkillDamage(10, "Parry and Riposte", "ParryAndRiposte", "counter", "physical");
var savageStrike = new weaponSkillDamage(15, "Savage Strike", "SavageStrike", "damage", "physical");
var sinisterSwing = new weaponSkillDamage(20, "Sinister Swing", "SinisterSwing", "damage", "physical");
var rendingArc = new weaponSkillDamage(25, "Rending Arc", "RendingArc", "damage", "physical");

//SWORD DAMAGE/BUFF/BLOCK ETC.

//SWORD FINESSE
swordFinesse.damageDisplay = function () {
    return Math.floor(player.functions.totalDexterity() * 0.2);
};
swordFinesse.damage = function () {
    return (player.properties.isSword && weaponMastery.sword.level >= 5) ? this.damageDisplay() : 0;
};

//PARRY AND RIPOSTE

//BLOCK
parryAndRiposte.blockChanceDisplay = function () {
    return Math.floor(10 + weaponMastery.sword.level + (0.03 * player.functions.totalAgility()));
};
parryAndRiposte.blockChance = function () {
    return (player.properties.isSword && weaponMastery.sword.level >= 10) ? this.blockChanceDisplay() : 0;
};
parryAndRiposte.blockAmountDisplay = function () {
    return Math.floor(weaponMastery.sword.level + (0.05 * player.functions.totalEndurance()));
};
parryAndRiposte.blockAmount = function () {
    return (player.properties.isSword && weaponMastery.sword.level >= 10) ? this.blockAmountDisplay() : 0;
};

//COUNTER
parryAndRiposte.counterChanceDisplay = function () {
    return Math.floor(weaponMastery.sword.level + (0.02 * player.functions.totalDexterity()));
};
parryAndRiposte.counterChance = function () {
    return (player.properties.isSword && weaponMastery.sword.level >= 10) ? this.counterChanceDisplay() : 0;
};
parryAndRiposte.counterDamageDisplay = function () {
    return Math.floor(80 + weaponMastery.sword.level + (0.1 * player.functions.totalStrength()));
};
parryAndRiposte.counterDamage = function () {
    return (player.properties.isSword && weaponMastery.sword.level >= 10) ? this.counterDamageDisplay() : 0;
};

//SAVAGE STRIKE

//DAMAGE
savageStrike.damageDisplay = function () {
    return Math.floor(player.functions.totalStrength() * 0.3)
};
savageStrike.damage = function () {
    return (player.properties.isSword && weaponMastery.sword.level >= 15) ? this.damageDisplay() : 0;
};
savageStrike.cooldown = 0.4;
//LIFESTEAL
savageStrike.lifeSteal = function () {
    return Math.floor(weaponMastery.sword.level * 0.5)
};
savageStrike.lifeStealAmount = function () {
    return (player.properties.isSword && weaponMastery.sword.level >= 15) ? this.lifeSteal() : 0;
};

//SINISTER SWING

//DAMAGE
sinisterSwing.damageDisplay = function () {
    return Math.floor((player.functions.minDamage() + player.functions.maxDamage()) * 0.5);
};
sinisterSwing.damage = function () {
    return (player.properties.isSword && weaponMastery.sword.level >= 20) ? this.damageDisplay() : 0;
};
sinisterSwing.cooldown = 0.4;
//RENDING ARC 

//DAMAGE
rendingArc.damageDisplay = function () {
    return Math.floor(player.functions.minDamage() + player.functions.maxDamage());
};
rendingArc.damage = function () {
    return (player.properties.isSword && weaponMastery.sword.level >= 25) ? this.damageDisplay() : 0;
};
rendingArc.cooldown = 0.4;

//SWORD DESCRIPTION
swordFinesse.description = function () {
    return "20% total dexterity added to your min and max damage.(" + this.damageDisplay() + ")";
};
parryAndRiposte.description = function () {
    return "Chance to block(" + this.blockChanceDisplay() + "%)" + " " + this.blockAmountDisplay() + " damage.<br />" +
				"Chance to counter enemy attack(" + this.counterChanceDisplay() + "%)" + " for " + this.counterDamageDisplay() + " damage.<br />";
};
savageStrike.description = function () {
    return "Deals damage to the enemy based on strength(" + this.damageDisplay() + ").<br />" +
				"Adds life steal to your attacks, which heals you by " + this.lifeSteal() + "% damage dealt, including damage from skills."
};
sinisterSwing.description = function () {
    return "Swing your sword dealing your min + max damage, total: " + this.damageDisplay() + " damage."
};
rendingArc.description = function () {
    return "Deals double damage to the enemy based on your min + max damage, total " + this.damageDisplay() + " damage."
};

//AXE SKILL
var butchersInsight = new weaponSkillDamage(5, "Butcher\'s Insight", "ButchersInsight", "passive", "physical");
var hamstring = new weaponSkillDamage(10, "Hamstring", "Hamstring", "damage", "physical");
var whirlwind = new weaponSkillDamage(15, "Whirlwind", "Whirlwind", "damage", "physical");
var flurry = new weaponSkillDamage(20, "Flurry", "Flurry", "damage", "physical");
var frenzy = new weaponSkillDamage(25, "Frenzy", "Frenzy", "buff", "physical");

//AXE DAMAGE/BUFF/BLOCK ETC.

//BUTCHER'S INSIGHT

//PASSIVE
butchersInsight.damageDisplay = function () {
    return Math.floor(player.functions.totalIntelligence() * 0.5);
};
butchersInsight.damage = function () {
    return (player.properties.isAxe && weaponMastery.axe.level >= 5) ? this.damageDisplay() : 0;
};

//HAMSTRING

//DAMAGE
hamstring.damageDisplay = function () {
    return Math.floor(player.functions.totalStrength());
};
hamstring.damage = function () {
    return (player.properties.isAxe && weaponMastery.axe.level >= 10) ? this.damageDisplay() : 0;
};

//WHIRLWIND

//DAMAGE
whirlwind.damageDisplay = function () {
    return Math.floor(player.functions.totalStrength() * 1.5);
};
whirlwind.damage = function () {
    return (player.properties.isAxe && weaponMastery.axe.level >= 15) ? this.damageDisplay() : 0;
};

//FLURRY

//DAMAGE
flurry.damageDisplay = function () {
    return Math.floor(player.functions.totalStrength() * 2);
};
flurry.damage = function () {
    return (player.properties.isAxe && weaponMastery.axe.level >= 20) ? this.damageDisplay() : 0;
};

//FRENZY

//BUFF
frenzy.damageDisplay = function () {
    return Math.floor(player.functions.totalStrength());
};
frenzy.damage = function () {
    return (player.properties.isAxe && weaponMastery.axe.level >= 25) ? this.damageDisplay() : 0;
};

//AXE DESCRIPTION
butchersInsight.description = function () {
    return "Passively increase your critical Damage, based on intelligence (" + this.damageDisplay() + ").";
};
hamstring.description = function () {
    return "Deals damage based on player total strength(" + this.damageDisplay() + ").";
};
whirlwind.description = function () {
    return "Deals high damage to the enemy(" + this.damageDisplay() + ").";
};
flurry.description = function () {
    return "Deals a lot of damage to the enemy(" + this.damageDisplay() + ").";
};
frenzy.description = function () {
    return "Buff: Your next attack deal bonus damage based on your total strength(" + this.damageDisplay() + ").";
};

//MACE SKILL
var hammerTime = new weaponSkillDamage(5, "Hammer Time", "HammerTime", "damage", "physical");
var dominatingSlam = new weaponSkillDamage(10, "Dominating Slam", "DominatingSlam", "damage", "physical");
var gash = new weaponSkillDamage(15, "Gash", "Gash", "damage", "physical");
var overbearingWallop = new weaponSkillDamage(20, "Overbearing Wallop", "OverbearingWallop", "damage", "physical");
var tremor = new weaponSkillDamage(25, "Tremor", "Tremor", "damage", "physical");

//MACE DAMAGE/BUFF/BLOCK ETC.

//HAMMER TIME

//DAMAGE
hammerTime.damageDisplay = function () {
    return Math.floor(player.functions.totalStrength());
};
hammerTime.damage = function () {
    return (player.properties.isMace && weaponMastery.mace.level >= 5) ? this.damageDisplay() : 0;
};

//DOMINATIN SLAM

//DAMAGE
dominatingSlam.damageDisplay = function () {
    return Math.floor(player.functions.totalStrength() * 2 + player.functions.totalEndurance() * 2);
};
dominatingSlam.damage = function () {
    return (player.properties.isMace && weaponMastery.mace.level >= 10) ? this.damageDisplay() : 0;
};

//GASH 

//DAMAGE
gash.damageDisplay = function () {
    return Math.floor(player.functions.totalStrength() * 3 + player.functions.totalEndurance() * 3);
};
gash.damage = function () {
    return (player.properties.isMace && weaponMastery.mace.level >= 15) ? this.damageDisplay() : 0;
};

//OVERBEARING WALLOP

//DAMAGE
overbearingWallop.damageDisplay = function () {
    return Math.floor(player.functions.totalStrength() * 3);
};
overbearingWallop.damage = function () {
    return (player.properties.isMace && weaponMastery.mace.level >= 20) ? this.damageDisplay() : 0;
};

//TREMOR 

//DAMAGE
tremor.damageDisplay = function () {
    return Math.floor(player.functions.totalStrength() * 5 + player.functions.totalWisdom() * 5);
};
tremor.damage = function () {
    return (player.properties.isMace && weaponMastery.mace.level >= 25) ? this.damageDisplay() : 0;
};

//MACE DESCRIPTION
hammerTime.description = function () {
    return "Deal bonus damage every turn based on your total strength(" + this.damageDisplay() + ").";
};
dominatingSlam.description = function () {
    return "Deal bonus damage every 2nd turn based on your total strength and endurance(" + this.damageDisplay() + ").";
};
gash.description = function () {
    return "Deal bonus damage every 4th turn based on your total strength and endurance(" + this.damageDisplay() + ").";
};
overbearingWallop.description = function () {
    return "Deal bonus damage every turn based on your total strength(" + this.damageDisplay() + ").";
};
tremor.description = function () {
    return "Deal bonus damage every 2nd turn based on your total strength and wisdom(" + this.damageDisplay() + ").";
};

//STAFF SKILL
var intone = new weaponSkillDamage(5, "Intone", "Intone", "magicDamageBuff", "magical");
var starlight = new weaponSkillDamage(10, "Starlight", "Starlight", "damage", "magical");
var hateCannon = new weaponSkillDamage(15, "Hate Cannon", "HateCannon", "damage", "magical");
var beguilersOrb = new weaponSkillDamage(20, "Beguiler\'s Orb", "BeguilersOrb", "damage", "magical");
var spellSimulacrum = new weaponSkillDamage(25, "Spell Simulacrum", "SpellSimulacrum", "passive", "magical");

//STAFF DAMAGE/BUFF/BLOCK ETC.

//INTONE

//BUFF
intone.damageDisplay = function () {
    return Math.floor(player.functions.totalIntelligence() * 0.2);
};
intone.damage = function () {
    return (player.properties.isStaff && weaponMastery.staff.level >= 5) ? this.damageDisplay() : 0;
};
intone.chanceDisplay = function () {
    return Math.floor(20 + weaponMastery.staff.level)
};
intone.chance = function () {
    return (player.properties.isStaff && weaponMastery.staff.level >= 5) ? this.chanceDisplay() : 0;
};

//STARLIGHT

//DAMAGE 
starlight.damageDisplay = function () {
    return Math.floor(player.functions.totalIntelligence() * 0.5 + player.functions.totalWisdom() * 0.5);
};
starlight.damage = function () {
    return (player.properties.isStaff && weaponMastery.staff.level >= 10) ? this.damageDisplay() : 0;
};

//HATE CANNON

//DAMAGE 
hateCannon.damageDisplay = function () {
    return Math.floor(player.functions.totalIntelligence());
};
hateCannon.damage = function () {
    return (player.properties.isStaff && weaponMastery.staff.level >= 15) ? this.damageDisplay() : 0;
};

//BEGUILER'S ORB

//DAMAGE 
beguilersOrb.damageDisplay = function () {
    return Math.floor(player.functions.totalIntelligence() * 1.2 + player.functions.totalWisdom());
};
beguilersOrb.damage = function () {
    return (player.properties.isStaff && weaponMastery.staff.level >= 20) ? this.damageDisplay() : 0;
};

//SPELL SIMULACRUM

//DAMAGE 
spellSimulacrum.damageDisplay = function () {
    return Math.floor(100 + weaponMastery.staff.level);
};
spellSimulacrum.damage = function () {
    return (player.properties.isStaff && weaponMastery.staff.level >= 25) ? this.damageDisplay() / 100 : 1; //else "1" because it's a multiplier.
};

//STAFF DESCRIPTION
intone.description = function () {
    return "You have a chance(" + this.chanceDisplay() + ")" + " to empower one of your spells dealing bonus damage(" + this.damageDisplay() + ").<br/>" +
	"It work's for each active spell in battle.";
};
starlight.description = function () {
    return "Deals magic damage based on intelligence and wisdom(" + this.damageDisplay() + ").";
};
hateCannon.description = function () {
    return "Deals magic damage based on intelligence(" + this.damageDisplay() + ")";
};
beguilersOrb.description = function () {
    return "Deals high damage based on intelligence and wisdom(" + this.damageDisplay() + ").";
};
spellSimulacrum.description = function () {
    return "Increase your total intelligence(" + (this.damageDisplay() - 100) + "%)";
};

//RANGED SKILL
var pierceTheVeil = new weaponSkillDamage(5, "Pierce the Veil", "PierceTheVeil", "damage", "physical");
var skyCracker = new weaponSkillDamage(10, "Sky Cracker", "SkyCracker", "damage", "physical");
var archerFocus = new weaponSkillDamage(15, "Archer Focus", "ArcherFocus", "passive", "physical");
var makeItRain = new weaponSkillDamage(20, "Make it Rain", "MakeItRain", "damage", "physical");
var rangersRevenge = new weaponSkillDamage(25, "Ranger\'s Revenge", "RangersRevenge", "damage", "physical");

//RANGED DAMAGE/BUFF/BLOCK ETC.

//PIERCE THE VEIL

//DAMAGE
pierceTheVeil.damageDisplay = function () {
    return Math.floor(player.functions.totalDexterity());
};
pierceTheVeil.damage = function () {
    return (player.properties.isRanged && weaponMastery.ranged.level >= 5) ? this.damageDisplay() : 0;
};

//SKY CRACKER

//DAMAGE
skyCracker.damageDisplay = function () {
    return Math.floor(player.functions.totalDexterity() * 2);
};
skyCracker.damage = function () {
    return (player.properties.isRanged && weaponMastery.ranged.level >= 10) ? this.damageDisplay() : 0;
};

//ARCHER FOCUS

//DAMAGE
archerFocus.damageDisplay = function () {
    return Math.floor(weaponMastery.ranged.level / 2);
};
archerFocus.damage = function () {
    return (player.properties.isRanged && weaponMastery.ranged.level >= 15) ? this.damageDisplay() : 0;
};

//MAKE IT RAIN

//DAMAGE
makeItRain.damageDisplay = function () {
    return Math.floor(player.functions.totalDexterity() * 3 + player.functions.totalAgility() * 2);
};
makeItRain.damage = function () {
    return (player.properties.isRanged && weaponMastery.ranged.level >= 20) ? this.damageDisplay() : 0;
};

//RANGER'S REVENGE

//DAMAGE
rangersRevenge.damageDisplay = function () {
    return Math.floor(player.functions.totalStrength() * 5 + player.functions.totalDexterity() * 5);
};
rangersRevenge.damage = function () {
    return (player.properties.isRanged && weaponMastery.ranged.level >= 25) ? this.damageDisplay() : 0;
};

//RANGED DESCRIPTION
pierceTheVeil.description = function () {
    return "Deals damage based on dexterity(" + this.damageDisplay() + ").";
};
skyCracker.description = function () {
    return "Deals damage based on dexterity(" + this.damageDisplay() + ").";
};
archerFocus.description = function () {
    return "Increase critical Chance(" + this.damageDisplay() + "%) Can increase it over 50% which is max without this passive.";
};
makeItRain.description = function () {
    return "Deals damage based on dexterity and agility(" + this.damageDisplay() + ").";
};
rangersRevenge.description = function () {
    return "Deals damage based on dexterity and strength(" + this.damageDisplay() + ").";
};


var sword = new Object();
sword.swordFinesse = swordFinesse;
sword.parryAndRiposte = parryAndRiposte;
sword.savageStrike = savageStrike;
sword.sinisterSwing = sinisterSwing;
sword.rendingArc = rendingArc;

var axe = new Object();
axe.butchersInsight = butchersInsight;
axe.hamstring = hamstring;
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
staff.intone = intone;
staff.starlight = starlight;
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