(function() {
    var weaponSkillType = function(level, experience, maxExperience, image, name) {
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

    sword.strength = function() {
        return (1 + (this.level * 1.6) / 100);
    };
    sword.swordStrength = function() {
        return player.properties.isSword ? this.strength() : 1;
    };
    sword.agility = function() {
        return (1 + (this.level * 2) / 100);
    };
    sword.swordAgility = function() {
        return player.properties.isSword ? this.agility() : 1;
    };

    axe.strength = function() {
        return (1 + (this.level * 2) / 100);
    };
    axe.axeStrength = function() {
        return player.properties.isAxe ? this.strength() : 1;
    };
    axe.endurance = function() {
        return (1 + (this.level * 1.6) / 100);
    };
    axe.axeEndurance = function() {
        return player.properties.isAxe ? this.endurance() : 1;
    };

    mace.endurance = function() {
        return (1 + (this.level * 1.6) / 100);
    };
    mace.maceEndurance = function() {
        return player.properties.isMace ? this.endurance() : 1;
    };
    mace.wisdom = function() {
        return (1 + (this.level * 2) / 100);
    };
    mace.maceWisdom = function() {
        return player.properties.isMace ? this.wisdom() : 1;
    };

    staff.intelligence = function() {
        return (1 + (this.level * 2) / 100);
    };
    staff.staffIntelligence = function() {
        return player.properties.isStaff ? this.intelligence() : 1;
    };
    staff.wisdom = function() {
        return (1 + (this.level * 1.6) / 100);
    };
    staff.staffWisdom = function() {
        return player.properties.isStaff ? this.wisdom() : 1;
    };
    ranged.strength = function() {
        return (1 + (this.level * 1.6) / 100);
    };
    ranged.rangedStrength = function() {
        return player.properties.isRanged ? this.strength() : 1;
    };
    ranged.dexterity = function() {
        return (1 + (this.level * 2) / 100);
    };
    ranged.rangedDexterity = function() {
        return player.properties.isRanged ? this.dexterity() : 1;
    };


    window.weaponMastery = new Object();
    weaponMastery.sword = sword;
    weaponMastery.axe = axe;
    weaponMastery.mace = mace;
    weaponMastery.staff = staff;
    weaponMastery.ranged = ranged;
})();