var weaponSkillType = function (level, experience, maxExperience, image, name) {
    this.level = level;
    this.experience = experience;
    this.maxExperience = maxExperience;
    this.image = image;
    this.name = name;
};
var sword = new weaponSkillType(0, 0, 10, "sword", "Sword");
var axe = new weaponSkillType(0, 0, 10, "axe", "Axe");
var mace = new weaponSkillType(0, 0, 10, "mace", "Mace");
var staff = new weaponSkillType(0, 0, 10, "staff", "Staff");
var ranged = new weaponSkillType(0, 0, 10, "ranged", "Ranged");
var fist = new weaponSkillType(0, 0, 10, "fist", "Fist");

sword.strength = function () {
    return this.level * 2;
};
sword.swordStrength = function () {
    return player.isSword ? this.strength() : 0;
};
sword.agility = function () {
    return this.level * 1.5;
};
sword.swordAgility = function () {
    return player.isSword ? this.agility() : 0
};

axe.strength = function () {
    return this.level * 2;
};
axe.axeStrength = function () {
    return player.isAxe ? this.strength() : 0;
};
axe.endurance = function () {
    return this.level * 1.5;
};
axe.axeEndurance = function () {
    return player.isAxe ? this.endurance() : 0;
};

mace.endurance = function () {
    return this.level * 2;
};
mace.maceEndurance = function () {
    return player.isMace ? this.endurance() : 0;
};
mace.wisdom = function () {
    return this.level * 1.5;
};
mace.maceWisdom = function () {
    return player.isMace ? this.wisdom() : 0;
};

staff.intelligence = function () {
    return this.level * 2;
};
staff.staffIntelligence = function () {
    return player.isStaff ? this.intelligence() : 0;
};
staff.wisdom = function () {
    return this.level * 1.5;
};
staff.staffWisdom = function () {
    return player.isStaff ? this.wisdom() : 0;
};

ranged.strength = function () {
    return this.level * 1.5;
};
ranged.rangedStrength = function () {
    return player.isRanged ? this.strength() : 0;
};
ranged.dexterity = function () {
    return this.level * 2;
};
ranged.rangedDexterity = function () {
    return player.isRanged ? this.dexterity() : 0;
};

fist.agility = function () {
    return this.level * 1.5;
};
fist.fistAgility = function () {
    return player.isFist ? this.agility() : 0;
};
fist.dexterity = function () {
    return this.level * 2;
};
fist.fistDexterity = function () {
    return player.isFist ? this.dexterity() : 0;
};

var weaponMastery = new Object();
weaponMastery.sword = sword;
weaponMastery.axe = axe;
weaponMastery.mace = mace;
weaponMastery.staff = staff;
weaponMastery.ranged = ranged;
weaponMastery.fist = fist;