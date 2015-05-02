//Skills
var activeSkills = {
    fireBall: {
        isActive: false,
        level: 1,
        id: 1,
        maxLevel: 5,
        levelReq: 1,
        manaReq: 10,
        name: "Fireball",
        image: "Fireball",
        damage: function () {
            return ((10 * player.level) + (player.totalIntelligence() * activeSkills.fireBall.level));
        },
        charge: 1,
        maxCharge: function () {
            return Math.floor(1 + (player.totalIntelligence() / 300 + player.totalWisdom() / 200));
        }
    },
    iceShard: {
        isActive: false,
        level: 1,
        id: 2,
        maxLevel: 5,
        levelReq: 1,
        manaReq: 10,
        name: "Ice Shard",
        image: "IceShard",
        damage: function () {
            return ((10 * player.level) + (player.totalIntelligence() * activeSkills.iceShard.level));
        },
        charge: 1,
        maxCharge: function () {

            return Math.floor(1 + (player.totalIntelligence() / 300 + player.totalWisdom() / 200));
        }
    },
    callLightning: {
        isActive: false,
        level: 1,
        id: 3,
        maxLevel: 5,
        levelReq: 1,
        manaReq: 10,
        name: "Call Lightning",
        image: "CallLightning",
        damage: function () {
            return ((10 * player.level) + (player.totalIntelligence() * activeSkills.callLightning.level));
        },
        charge: 1,
        maxCharge: function () {
            return Math.floor(1 + (player.totalIntelligence() / 300 + player.totalWisdom() / 200));
        }
    },
    rainOfFire: {
        isActive: false,
        level: 1,
        id: 4,
        maxLevel: 5,
        levelReq: 5,
        manaReq: 30,
        name: "rain of Fire",
        image: "RainOfFire",
        damage: function () {
            return ((30 * player.level) + (player.totalIntelligence() * activeSkills.rainOfFire.level) * 1.5);
        },
        charge: 1,
        maxCharge: function () {
            return Math.floor(1 + (player.totalIntelligence() / 400 + player.totalWisdom() / 300));
        }
    },
    Blizzard: {
        isActive: false,
        level: 1,
        id: 5,
        maxLevel: 5,
        levelReq: 5,
        manaReq: 30,
        name: "Blizzard",
        image: "Blizzard",
        damage: function () {
            return ((30 * player.level) + (player.totalIntelligence() * activeSkills.Blizzard.level) * 1.5);
        },
        charge: 1,
        maxCharge: function () {
            return Math.floor(1 + (player.totalIntelligence() / 400 + player.totalWisdom() / 300));
        }
    },
    ballOfLightning: {
        isActive: false,
        level: 1,
        id: 6,
        maxLevel: 5,
        levelReq: 5,
        manaReq: 30,
        name: "Ball of Lightning",
        image: "BallOfLightning",
        damage: function () {
            return ((30 * player.level) + (player.totalIntelligence() * activeSkills.ballOfLightning.level) * 1.5);
        },
        charge: 1,
        maxCharge: function () {
            return Math.floor(1 + (player.totalIntelligence() / 400 + player.totalWisdom() / 300));
        }
    },
    InfernalFlames: {
        isActive: false,
        level: 1,
        id: 7,
        maxLevel: 5,
        levelReq: 15,
        manaReq: 50,
        name: "Infernal Flames",
        image: "InfernalFlames",
        damage: function () {
            return ((50 * player.level) + (player.totalIntelligence() * activeSkills.InfernalFlames.level) * 2);
        },
        charge: 1,
        maxCharge: function () {
            return Math.floor(1 + (player.totalIntelligence() / 500 + player.totalWisdom() / 400));
        }
    },
    Frost: {
        isActive: false,
        level: 1,
        id: 8,
        maxLevel: 5,
        levelReq: 15,
        manaReq: 50,
        name: "Frost",
        image: "Frost",
        damage: function () {
            return ((50 * player.level) + (player.totalIntelligence() * activeSkills.Frost.level) * 2);
        },
        charge: 1,
        maxCharge: function () {
            return Math.floor(1 + (player.totalIntelligence() / 500 + player.totalWisdom() / 400));
        }
    },
    LightningStorm: {
        isActive: false,
        level: 1,
        id: 9,
        maxLevel: 5,
        levelReq: 15,
        manaReq: 50,
        name: "Lightning Storm",
        image: "LightningStorm",
        damage: function () {
            return ((50 * player.level) + (player.totalIntelligence() * activeSkills.LightningStorm.level) * 2);
        },
        charge: 1,
        maxCharge: function () {
            return Math.floor(1 + (player.totalIntelligence() / 500 + player.totalWisdom() / 400));
        }
    },
};

//Weapon Skills

var weaponSkillList = {
    sword: {
        swordFinesse: {
            damage: function () {
                return Math.floor(player.totalDexterity() * 0.2);
            },
            swordDamage: function () {
                return (player.isSword && weaponMastery.sword.level >= 5) ? weaponSkillList.sword.swordFinesse.damage() : 0;
            },
            name: "Sword Finesse",
            levelReq: 5,
            description: "20% total dexterity added to your damage",
            type: "passive",
        },
        parryAndRiposte: {
            swordDefense: function () {
                return Math.floor(80 - weaponMastery.sword.level);
            },
            defense: function () {
                return (player.isSword && weaponMastery.sword.level >= 10) ? weaponSkillList.sword.parryAndRiposte.swordDefense() : 0;
            },
            swordDamage: function(){
                return Math.floor(50 + weaponMastery.sword.level);
            },
            damage: function(){
                return (player.isSword && weaponMastery.sword.level >= 10) ? weaponSkillList.sword.parryAndRiposte.swordDamage() : 0;
            },
            name: "Parry & Riposte",
            levelReq: 10,
            description: "Block % damage and deal damage to enemy based on their damage and player dexterity.",
            type: "counter",
            charge: 1,
            coolDown: 0.5,
            maxCharge: 1,
        },
        savageStrike: {
            damage: function () {
                return Math.floor(player.totalStrength() * 0.5)
            },
            swordDamage: function () {
                return (player.isSword && weaponMastery.sword.level >= 15) ? weaponSkillList.sword.savageStrike.damage() : 0;
            },
            name: "Savage Strike",
            levelReq: 15,
            description: "50% total strength added to your damage",
            type: "passive",
        },
        sinisterSwing: {
            damage: function () {
                return Math.floor(player.minDamage() + player.maxDamage());
            },
            swordDamage: function () {
                return (player.isSword && weaponMastery.sword.level >= 20) ? weaponSkillList.sword.sinisterSwing.damage() : 0;
            },
            name: "Sinister Swing",
            levelReq: 20,
            description: "Swing your sword dealing (min + max damage) to all enemies on map",
            type: "allDamage",
        },
        rendingArc: {
            damage: function () {
                return Math.floor((player.minDamage() + player.maxDamage()) * 2);
            },
            swordDamage: function () {
                return (player.isSword && weaponMastery.sword.level >= 25) ? weaponSkillList.sword.rendingArc.damage() : 0;
            },
            name: "Rending Arc",
            levelReq: 25,
            description: "Deal damage to all foes twice! (min + max damage)",
            type: "allDamage",
        }
    },
    axe: {
        butchersInsight: {
            axeDamage: function () {
                return Math.floor(player.totalIntelligence() * 0.5);
            },
            damage: function () {
                return (player.isAxe && weaponMastery.axe.level >= 5) ? weaponSkillList.axe.butchersInsight.axeDamage() : 0;
            },
            name: "Butcher  s Insight",
            levelReq: 5,
            description: "Player intelligence increase critical damage.",
            type: "passive",
        },
        hamstring: {
            axeDamage: function () {
                return Math.floor(player.totalStrength());
            },
            damage: function () {
                return (player.isAxe && weaponMastery.axe.level >= 10) ? weaponSkillList.axe.hamstring.axeDamage() : 0;
            },
            name: "Hamstring",
            levelReq: 10,
            description: "Deal damage equal to player total strength",
            type: "damage",
            charge: 1,
            coolDown: 0.5,
            maxCharge: 1
        }
    },
    mace: {

    },
    staff: {

    },
    ranged: {

    },
};