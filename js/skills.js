//Skills
var spell = function (level, maxLevel, id, levelReq, manaReq, name, image) { //default spell object constructor
    this.isActive = false;
    this.id = id;
    this.level = level;
    this.maxLevel = maxLevel;
    this.levelReq = levelReq;
    this.manaReq = manaReq;
    this.name = name;
    this.image = image;
    this.damage = function () {
        return ((10 * player.level) + (player.totalIntelligence() * this.level));
    };
    this.charge = 1,
    this.maxCharge = function () {
        return Math.floor(1 + (player.totalIntelligence() / 300 + player.totalWisdom() / 200));
    }
    this.description = function () {
        return "This spell deals " + this.damage() + " total damage. Currently being at level " + this.level + ".";
    }
}
//level/maxLevel/ID/LevelReq/ManaReq/Name/Image
var fireBall = new spell(1, 5, 1, 1, 10, "Fireball", "FireBall");
var iceShard = new spell(1, 5, 2, 1, 10, "ice Shard", "IceShard"); // spell2 method for different damage formula
var callLightning = new spell(1, 5, 3, 1, 10, "Call Lightning", "CallLightning");
var rainOfFire = new spell(1, 5, 3, 4, 10, "Rain of Fire", "RainOfFire");
var blizzard = new spell(1, 5, 3, 5, 10, "Blizzard", "Blizzard");
var ballOfLightning = new spell(1, 5, 3, 6, 10, "Ball of Lightning", "BallOfLightning");
var infernalFlames = new spell(1, 5, 3, 7, 10, "Infernal Flames", "InfernalFlames");
var frost = new spell(1, 5, 3, 8, 10, "Frost", "Frost");
var lightningStorm = new spell(1, 5, 3, 9, 10, "Lightning Storm", "LightningStorm");

fireBall.description = function () {
    return "This spell deals " + this.damage() + " total damage. Currently being at level " + this.level + "."
};
iceShard.description = function () {
    return "This spell deals " + this.damage() + " total damage. Currently being at level " + this.level + "."
};

rainOfFire.damage = function () {
    return ((30 * player.level) + (player.totalIntelligence() * this.level) * 1.5);
};
rainOfFire.maxCharge = function () {
    return Math.floor(1 + (player.totalIntelligence() / 400 + player.totalWisdom() / 300));
};
blizzard.damage = function () {
    return ((30 * player.level) + (player.totalIntelligence() * this.level) * 1.5);
};
blizzard.maxCharge = function () {
    return Math.floor(1 + (player.totalIntelligence() / 400 + player.totalWisdom() / 300));
};
ballOfLightning.damage = function () {
    return ((30 * player.level) + (player.totalIntelligence() * this.level) * 1.5);
};
ballOfLightning.maxCharge = function () {
    return Math.floor(1 + (player.totalIntelligence() / 400 + player.totalWisdom() / 300));
};
infernalFlames.damage = function () {
    return ((50 * player.level) + (player.totalIntelligence() * this.level) * 2);
};
infernalFlames.maxCharge = function () {
    return Math.floor(1 + (player.totalIntelligence() / 500 + player.totalWisdom() / 400));
};
frost.damage = function () {
    return ((50 * player.level) + (player.totalIntelligence() * this.level) * 2);
};
frost.maxCharge = function () {
    return Math.floor(1 + (player.totalIntelligence() / 500 + player.totalWisdom() / 400));
};
lightningStorm.damage = function () {
    return ((50 * player.level) + (player.totalIntelligence() * this.level) * 2);
};
lightningStorm.maxCharge = function () {
    return Math.floor(1 + (player.totalIntelligence() / 500 + player.totalWisdom() / 400));
};

var activeSpells = new Object();
activeSpells.fireBall = fireBall;
activeSpells.iceShard = iceShard;
activeSpells.callLightning = callLightning;
activeSpells.rainOfFire = rainOfFire;
activeSpells.blizzard = blizzard;
activeSpells.ballOfLightning = ballOfLightning;
activeSpells.infernalFlames = infernalFlames;
activeSpells.frost = frost;
activeSpells.lightningStorm = lightningStorm;

//Weapon Skills

var weaponSkillDamage = function (levelReq, name, image, type) { //default spell object constructor
    this.levelReq = levelReq;
    this.name = name;
    this.image = image;
    this.damage = function () {
        return ((10 * player.level) + (player.totalIntelligence() * this.level));
    };
    this.charge = 1;
    this.maxCharge = 1;
    this.cooldown = 0.5;
    this.type = type;
}
//Level, name, image, type
//SWORD SKILL
var swordFinesse = new weaponSkillDamage(5, "Sword Finesse", "SwordFinesse", "passive");
var parryAndRiposte = new weaponSkillDamage(10, "Parry and Riposte", "ParryAndRiposte", "counter");
var savageStrike = new weaponSkillDamage(15, "Savage Strike", "SavageStrike", "damage");
var sinisterSwing = new weaponSkillDamage(20, "Sinister Swing", "SinisterSwing", "damage");
var rendingArc = new weaponSkillDamage(25, "Rending Arc", "RendingArc", "damage");

//SWORD DAMAGE/BUFF/BLOCK ETC.

//SWORD FINESSE
swordFinesse.damageDisplay = function () {
    return Math.floor(player.totalDexterity() * 0.2);
};
swordFinesse.damage = function () {
    return (player.isSword && weaponMastery.sword.level >= 5) ? this.damageDisplay() : 0;
};

//PARRY AND RIPOSTE

//BLOCK
parryAndRiposte.blockChanceDisplay = function () {
    return Math.floor(10 + weaponMastery.sword.level + (0.03 * player.totalAgility()));
};
parryAndRiposte.blockChance = function () {
    return (player.isSword && weaponMastery.sword.level >= 10) ? this.blockChanceDisplay() : 0;
};
parryAndRiposte.blockAmountDisplay = function () {
    return Math.floor(2 * weaponMastery.sword.level + (0.1 * player.totalEndurance()));
};
parryAndRiposte.blockAmount = function () {
    return (player.isSword && weaponMastery.sword.level >= 10) ? this.blockAmountDisplay() : 0;
};

//COUNTER
parryAndRiposte.counterChanceDisplay = function () {
    return Math.floor(30 + weaponMastery.sword.level + (0.02 * player.totalDexterity()));
};
parryAndRiposte.counterChance = function () {
    return (player.isSword && weaponMastery.sword.level >= 10) ? this.counterChanceDisplay() : 0;
};
parryAndRiposte.counterDamageDisplay = function () {
    return Math.floor(80 + weaponMastery.sword.level + (0.1 * player.totalStrength()));
};
parryAndRiposte.counterDamage = function () {
    return (player.isSword && weaponMastery.sword.level >= 10) ? this.counterDamageDisplay() : 0;
};

//SAVAGE STRIKE

//DAMAGE
savageStrike.damageDisplay = function () {
    return Math.floor(player.totalStrength() * 0.5)
};
savageStrike.damage = function () {
    return (player.isSword && weaponMastery.sword.level >= 15) ? this.damageDisplay() : 0;
};
//LIFESTEAL
savageStrike.lifeSteal = function () {
    return Math.floor(weaponMastery.sword.level * 2)
};
savageStrike.lifeStealAmount = function () {
    return (player.isSword && weaponMastery.sword.level >= 15) ? this.lifeSteal() : 0;
};

//SINISTER SWING

//DAMAGE
sinisterSwing.damageDisplay = function () {
    return Math.floor(player.minDamage() + player.maxDamage());
};
sinisterSwing.damage = function () {
    return (player.isSword && weaponMastery.sword.level >= 20) ? this.damageDisplay() : 0;
};

//RENDING ARC 

//DAMAGE
rendingArc.damageDisplay = function () {
    return Math.floor((player.minDamage() + player.maxDamage()) * 2);
};
rendingArc.damage = function () {
    return (player.isSword && weaponMastery.sword.level >= 25) ? this.damageDisplay() : 0;
};


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
var butchersInsight = new weaponSkillDamage(5, "Butcher\'s Insight", "ButchersInsight", "passive");
var hamstring = new weaponSkillDamage(10, "Hamstring", "Hamstring", "damage");
var whirlwind = new weaponSkillDamage(15, "Whirlwind", "Whirlwind", "damage");
var flurry = new weaponSkillDamage(20, "Flurry", "Flurry", "damage");
var frenzy = new weaponSkillDamage(25, "Frenzy", "Frenzy", "buff");

//AXE DAMAGE/BUFF/BLOCK ETC.

//BUTCHER'S INSIGHT

//PASSIVE
butchersInsight.damageDisplay = function () {
    return Math.floor(player.totalIntelligence() * 0.5);
};
butchersInsight.damage = function () {
    return (player.isAxe && weaponMastery.axe.level >= 5) ? this.damageDisplay() : 0;
};

//HAMSTRING

//DAMAGE
hamstring.damageDisplay = function () {
    return Math.floor(player.totalStrength());
};
hamstring.damage = function () {
    return (player.isAxe && weaponMastery.axe.level >= 10) ? this.damageDisplay() : 0;
};

//WHIRLWIND

//DAMAGE
whirlwind.damageDisplay = function () {
    return Math.floor(player.totalStrength() * 2);
};
whirlwind.damage = function () {
    return (player.isAxe && weaponMastery.axe.level >= 15) ? this.damageDisplay() : 0;
};

//FLURRY

//DAMAGE
flurry.damageDisplay = function () {
    return Math.floor(player.totalStrength() * 3);
};
flurry.damage = function () {
    return (player.isAxe && weaponMastery.axe.level >= 20) ? this.damageDisplay() : 0;
};

//FRENZY

//BUFF
frenzy.damageDisplay = function () {
    return Math.floor(player.totalStrength());
};
frenzy.damage = function () {
    return (player.isAxe && weaponMastery.axe.level >= 25) ? this.damageDisplay() : 0;
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
var hammerTime = new weaponSkillDamage(5, "Hammer Time", "HammerTime", "damage");
var dominatingSlam = new weaponSkillDamage(10, "Dominating Slam", "DominatingSlam", "damage");
var gash = new weaponSkillDamage(15, "Gash", "Gash", "damage");
var overbearingWallop = new weaponSkillDamage(20, "Overbearing Wallop", "OverbearingWallop", "damage");
var tremor = new weaponSkillDamage(25, "Tremor", "Tremor", "damage");

//MACE DAMAGE/BUFF/BLOCK ETC.

//HAMMER TIME

//DAMAGE
hammerTime.damageDisplay = function () {
    return Math.floor(player.totalStrength());
};
hammerTime.damage = function () {
    return (player.isMace && weaponMastery.mace.level >= 5) ? this.damageDisplay() : 0;
};

//DOMINATIN SLAM

//DAMAGE
dominatingSlam.damageDisplay = function () {
    return Math.floor(player.totalStrength() * 2 + player.totalEndurance() * 2);
};
dominatingSlam.damage = function () {
    return (player.isMace && weaponMastery.mace.level >= 10) ? this.damageDisplay() : 0;
};

//GASH 

//DAMAGE
gash.damageDisplay = function () {
    return Math.floor(player.totalStrength() * 3 + player.totalEndurance() * 3);
};
gash.damage = function () {
    return (player.isMace && weaponMastery.mace.level >= 15) ? this.damageDisplay() : 0;
};

//OVERBEARING WALLOP

//DAMAGE
overbearingWallop.damageDisplay = function () {
    return Math.floor(player.totalStrength() * 3);
};
overbearingWallop.damage = function () {
    return (player.isMace && weaponMastery.mace.level >= 20) ? this.damageDisplay() : 0;
};

//TREMOR 

//DAMAGE
tremor.damageDisplay = function () {
    return Math.floor(player.totalStrength() * 5 + player.totalWisdom() * 5);
};
tremor.damage = function () {
    return (player.isMace && weaponMastery.mace.level >= 25) ? this.damageDisplay() : 0;
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
var intone = new weaponSkillDamage(5, "Intone", "Intone", "MagicDamageBuff");
var starlight = new weaponSkillDamage(10, "Starlight", "Starlight", "damage");
var hateCannon = new weaponSkillDamage(15, "Hate Cannon", "HateCannon", "damage");
var beguilersOrb = new weaponSkillDamage(20, "Beguiler\'s Orb", "BeguilersOrb", "damage");
var spellSimulacrum = new weaponSkillDamage(25, "Spell Simulacrum", "SpellSimulacrum", "passive");

//STAFF DAMAGE/BUFF/BLOCK ETC.

//INTONE

//BUFF
intone.damageDisplay = function () {
    return Math.floor(player.totalIntelligence());
};
intone.damage = function () {
    return (player.isStaff && weaponMastery.staff.level >= 5) ? this.damageDisplay() : 0;
};
intone.chanceDisplay = function () {
    return Math.floor(20 + weaponMastery.staff.level)
};
intone.chance = function () {
    return (player.isStaff && weaponMastery.staff.level >= 5) ? this.chanceDisplay() : 0;
};

//STARLIGHT

//DAMAGE 
starlight.damageDisplay = function () {
    return Math.floor(player.totalIntelligence() + player.totalWisdom());
};
starlight.damage = function () {
    return (player.isStaff && weaponMastery.staff.level >= 10) ? this.damageDisplay() : 0;
};

//HATE CANNON

//DAMAGE 
hateCannon.damageDisplay = function () {
    return Math.floor(player.totalIntelligence() * 3);
};
hateCannon.damage = function () {
    return (player.isStaff && weaponMastery.staff.level >= 15) ? this.damageDisplay() : 0;
};

//BEGUILER'S ORB

//DAMAGE 
beguilersOrb.damageDisplay = function () {
    return Math.floor(player.totalIntelligence() * 5 + player.totalWisdom() * 3);
};
beguilersOrb.damage = function () {
    return (player.isStaff && weaponMastery.staff.level >= 20) ? this.damageDisplay() : 0;
};

//SPELL SIMULACRUM

//DAMAGE 
spellSimulacrum.damageDisplay = function () {
    return Math.floor(100 + weaponMastery.staff.level);
};
spellSimulacrum.damage = function () {
    return (player.isStaff && weaponMastery.staff.level >= 25) ? this.damageDisplay() / 100 : 1; //else "1" because it's a multiplier.
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
var pierceTheVeil = new weaponSkillDamage(5, "Pierce the Veil", "PierceTheVeil", "damage");
var skyCracker = new weaponSkillDamage(10, "Sky Cracker", "SkyCracker", "damage");
var archerFocus = new weaponSkillDamage(15, "Archer Focus", "ArcherFocus", "passive");
var makeItRain = new weaponSkillDamage(20, "Make it Rain", "MakeItRain", "damage");
var rangersRevenge = new weaponSkillDamage(25, "Ranger\'s Revenge", "RangersRevenge", "damage");

//RANGED DAMAGE/BUFF/BLOCK ETC.

//PIERCE THE VEIL

//DAMAGE
pierceTheVeil.damageDisplay = function () {
    return Math.floor(player.totalDexterity());
};
pierceTheVeil.damage = function () {
    return (player.isRanged && weaponMastery.ranged.level >= 5) ? this.damageDisplay() : 0;
};

//SKY CRACKER

//DAMAGE
skyCracker.damageDisplay = function () {
    return Math.floor(player.totalDexterity() * 2);
};
skyCracker.damage = function () {
    return (player.isRanged && weaponMastery.ranged.level >= 10) ? this.damageDisplay() : 0;
};

//ARCHER FOCUS

//DAMAGE
archerFocus.damageDisplay = function () {
    return Math.floor(weaponMastery.ranged.level / 2);
};
archerFocus.damage = function () {
    return (player.isRanged && weaponMastery.ranged.level >= 15) ? this.damageDisplay() : 0;
};

//MAKE IT RAIN

//DAMAGE
makeItRain.damageDisplay = function () {
    return Math.floor(player.totalDexterity() * 3 + player.totalAgility() * 2);
};
makeItRain.damage = function () {
    return (player.isRanged && weaponMastery.ranged.level >= 20) ? this.damageDisplay() : 0;
};

//RANGER'S REVENGE

//DAMAGE
rangersRevenge.damageDisplay = function () {
    return Math.floor(player.totalStrength() * 5 + player.totalDexterity() * 5);
};
rangersRevenge.damage = function () {
    return (player.isRanged && weaponMastery.ranged.level >= 25) ? this.damageDisplay() : 0;
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

var weaponSkillList = new Object();
weaponSkillList.sword = sword;
weaponSkillList.axe = axe;
weaponSkillList.mace = mace;
weaponSkillList.staff = staff;
weaponSkillList.ranged = ranged;