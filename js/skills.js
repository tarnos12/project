//Skills
var activeSkills = {
    fireBall: {
        isActive: true,
        level: 1,
        id: 1,
        maxLevel: 5,
        levelReq: 1,
        name: "Fireball",
        image: "Fireball",
        damage: function () {
            return ((10 * player.level) + (player.totalIntelligence() * 2));
        },
        charge: 1,
        maxCharge: function () {
            return Math.floor(1 + (player.totalIntelligence() / 100 + player.totalWisdom() / 50));
        }
    },
    iceShard: {
        isActive: true,
        level: 1,
        id: 2,
        maxLevel: 5,
        levelReq: 1,
        name: "Ice Shard",
        image: "IceShard",
        damage: function () {
            return ((10 * player.level) + (player.totalIntelligence() * 2));
        },
        charge: 1,
        maxCharge: function () {
            return Math.floor(1 + (player.totalIntelligence() / 100 + player.totalWisdom() / 50));
        }
    },
    callLightning: {
        isActive: true,
        level: 1,
        id: 3,
        maxLevel: 5,
        levelReq: 1,
        name: "Call Lightning",
        image: "CallLightning",
        damage: function () {
            return ((10 * player.level) + (player.totalIntelligence() * 2));
        },
        charge: 1,
        maxCharge: function () {
            return Math.floor(1 + (player.totalIntelligence() / 100 + player.totalWisdom() / 50));
        }
    },
    rainOfFire: {
        isActive: true,
        level: 1,
        id: 4,
        maxLevel: 5,
        levelReq: 1,
        name: "rain of Fire",
        image: "RainOfFire",
        damage: function () {
            return ((10 * player.level) + (player.totalIntelligence() * 2));
        },
        charge: 1,
        maxCharge: function () {
            return Math.floor(1 + (player.totalIntelligence() / 100 + player.totalWisdom() / 50));
        }
    },
    Blizzard: {
        isActive: true,
        level: 1,
        id: 5,
        maxLevel: 5,
        levelReq: 1,
        name: "Blizzard",
        image: "Blizzard",
        damage: function () {
            return ((10 * player.level) + (player.totalIntelligence() * 2));
        },
        charge: 1,
        maxCharge: function () {
            return Math.floor(1 + (player.totalIntelligence() / 100 + player.totalWisdom() / 50));
        }
    },
    ballOfLightning: {
        isActive: true,
        level: 1,
        id: 6,
        maxLevel: 5,
        levelReq: 1,
        name: "Ball of Lightning",
        image: "BallOfLightning",
        damage: function () {
            return ((10 * player.level) + (player.totalIntelligence() * 2));
        },
        charge: 1,
        maxCharge: function () {
            return Math.floor(1 + (player.totalIntelligence() / 100 + player.totalWisdom() / 50));
        }
    },
    InfernalFlames: {
        isActive: true,
        level: 1,
        id: 7,
        maxLevel: 5,
        levelReq: 1,
        name: "Infernal Flames",
        image: "InfernalFlames",
        damage: function () {
            return ((10 * player.level) + (player.totalIntelligence() * 2));
        },
        charge: 1,
        maxCharge: function () {
            return Math.floor(1 + (player.totalIntelligence() / 100 + player.totalWisdom() / 50));
        }
    },
    Frost: {
        isActive: true,
        level: 1,
        id: 8,
        maxLevel: 5,
        levelReq: 1,
        name: "Frost",
        image: "Frost",
        damage: function () {
            return ((10 * player.level) + (player.totalIntelligence() * 2));
        },
        charge: 1,
        maxCharge: function () {
            return Math.floor(1 + (player.totalIntelligence() / 100 + player.totalWisdom() / 50));
        }
    },
    LightningStorm: {
        isActive: true,
        level: 1,
        id: 9,
        maxLevel: 5,
        levelReq: 1,
        name: "Lightning Storm",
        image: "LightningStorm",
        damage: function () {
            return ((10 * player.level) + (player.totalIntelligence() * 2));
        },
        charge: 1,
        maxCharge: function () {
            return Math.floor(1 + (player.totalIntelligence() / 100 + player.totalWisdom() / 50));
        }
    },
};