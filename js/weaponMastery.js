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