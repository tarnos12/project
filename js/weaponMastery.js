//Weapon mastery

//Sword
var weaponMastery = {
    sword: {
        level: 0,
        exp: 0,
        maxExp: 10,
        image: "sword",
        name: "Sword",
        strength: function () {
            return weaponMastery.sword.level * 2;
        },
        swordStrength: function () {
            return player.isSword ? weaponMastery.sword.strength() : 0;
        },
        agility: function () {
            return weaponMastery.sword.level * 1.5;
        },
        swordAgility: function () {
            return player.isSword ? weaponMastery.sword.agility() : 0;
        },
    },
    //Axe
    axe: {
        level: 0,
        exp: 0,
        maxExp: 10,
        image: "axe",
        name: "Axe",
        strength: function () {
            return weaponMastery.axe.level * 2;
        },
        axeStrength: function () {
            return player.isAxe ? weaponMastery.axe.strength() : 0;
        },
        endurance: function () {
            return weaponMastery.axe.level * 1.5;
        },
        axeEndurance: function () {
            return player.isAxe ? weaponMastery.axe.endurance() : 0;
        },
    },
    //Mace
    mace: {
        level: 0,
        exp: 0,
        maxExp: 10,
        image: "mace",
        name: "Mace",
        endurance: function () {
            return weaponMastery.mace.level * 2;
        },
        maceEndurance: function () {
            return player.isMace ? weaponMastery.mace.endurance() : 0;
        },
        wisdom: function () {
            return weaponMastery.mace.level * 1.5;
        },
        maceWisdom: function () {
            return player.isMace ? weaponMastery.mace.wisdom() : 0;
        },
    },
    //Staff
    staff: {
        level: 0,
        exp: 0,
        maxExp: 10,
        image: "staff",
        name: "Staff",
        intelligence: function () {
            return weaponMastery.staff.level * 2;
        },
        staffIntelligence: function () {
            return player.isStaff ? weaponMastery.staff.intelligence() : 0;
        },
        wisdom: function () {
            return weaponMastery.staff.level * 1.5;
        },
        staffWisdom: function () {
            return player.isStaff ? weaponMastery.staff.wisdom() : 0;
        },
    },
    //Ranged
    ranged: {
        level: 0,
        exp: 0,
        maxExp: 10,
        image: "ranged",
        name: "Ranged",
        strength: function () {
            return weaponMastery.ranged.level * 1.5;
        },
        rangedStrength: function () {
            return player.isRanged ? weaponMastery.ranged.strength() : 0;
        },
        dexterity: function () {
            return weaponMastery.ranged.level * 2;
        },
        rangedDexterity: function () {
            return player.isRanged ? weaponMastery.ranged.dexterity() : 0;
        },
    },
};

/*
 * //Weapon mastery
var weaponMasteryConstructor = function (level, exp, maxExp, image, name) {
    this.level = level;
    this.exp = exp;
    this.maxExp = maxExp;
    this.image = image;
    this.name = name;
};

var sword = new weaponMasteryConstructor(0, 0, 10, "sword", "Sword");
var axe = new weaponMasteryConstructor(0, 0, 10, "axe", "Axe");
var mace = new weaponMasteryConstructor(0, 0, 10, "mace", "Mace");
var staff = new weaponMasteryConstructor(0, 0, 10, "staff", "Staff");
var ranged = new weaponMasteryConstructor(0, 0, 10, "ranged", "Ranged");

//Sword
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
    return player.isSword ? this.agility() : 0;
};

//Axe
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

//Mace
mace.wisdom = function () {
    return this.level * 2;
};
mace.maceWisdom = function () {
    return player.isMace ? this.wisdom() : 0;
};
mace.endurance = function () {
    return this.level * 2;
};
mace.maceEndurance = function () {
    return player.isMace ? this.endurance() : 0;
};

//Staff
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

//Ranged
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

var weaponMastery = new Object();
weaponMastery.sword = sword;
weaponMastery.axe = axe;
weaponMastery.mace = mace;
weaponMastery.staff = staff;
weaponMastery.ranged = ranged;
 */