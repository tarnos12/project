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
            blockChanceDisplay: function () {
                return Math.floor(10 + weaponMastery.sword.level + (0.1 * player.totalAgility()));
            },
            blockChance: function () {
                return (player.isSword && weaponMastery.sword.level >= 10) ? weaponSkillList.sword.parryAndRiposte.blockChanceDisplay() : 0;
            },
            blockAmountDisplay: function () {
                return Math.floor(2 * weaponMastery.sword.level + (0.1 * player.totalEndurance()));
            },
            blockAmount: function () {
                return (player.isSword && weaponMastery.sword.level >= 10) ? weaponSkillList.sword.parryAndRiposte.blockAmountDisplay() : 0;
            },
            counterChanceDisplay: function(){
                return Math.floor(30 + weaponMastery.sword.level + (0.02 * player.totalDexterity()));
            },
            counterChance: function(){
                return (player.isSword && weaponMastery.sword.level >= 10) ? weaponSkillList.sword.parryAndRiposte.counterChanceDisplay() : 0;
            },
            counterDamageDisplay: function () {
                return Math.floor(80 + weaponMastery.sword.level + (0.1 * player.totalStrength()));
            },
            counterDamage: function () {
                return (player.isSword && weaponMastery.sword.level >= 10) ? weaponSkillList.sword.parryAndRiposte.counterDamageDisplay() : 0;
            },
            name: "Parry & Riposte",
            levelReq: 10,
            description: "Block damage based on agility and counter enemy attacks.",
            type: "counter",
        },
        savageStrike: {
            damage: function () {
                return Math.floor(player.totalStrength() * 0.5)
            },
            swordDamage: function () {
                return (player.isSword && weaponMastery.sword.level >= 15) ? weaponSkillList.sword.savageStrike.damage() : 0;
            },
            lifeSteal: function () {
                return Math.floor(weaponMastery.sword.level * 2)
            },
            lifeStealAmount: function (){
                return (player.isSword && weaponMastery.sword.level >= 15) ? weaponSkillList.sword.savageStrike.lifeSteal() : 0;
            },
            name: "Savage Strike",
            levelReq: 15,
            description: "50% total strength added to your damage, and passive lifesteal.",
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
            type: "damage",
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
            type: "damage",
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
        },
        whirlwind: {
            axeDamage: function () {
                return Math.floor(player.totalStrength());
            },
            damage: function () {
                return (player.isAxe && weaponMastery.axe.level >= 15) ? weaponSkillList.axe.whirlwind.axeDamage() : 0;
            },
            name: "Whirlwind",
            levelReq: 15,
            description: "Deal damage to all enemies.",
            type: "damage",
            charge: 1,
            coolDown: 0.5,
            maxCharge: 1
        },
        flurry: {
            axeDamage: function () {
                return Math.floor(player.totalStrength());
            },
            damage: function () {
                return (player.isAxe && weaponMastery.axe.level >= 20) ? weaponSkillList.axe.flurry.axeDamage() : 0;
            },
            name: "Flurry",
            levelReq: 20,
            description: "Deal damage to all enemies.",
            type: "damage",
            charge: 1,
            coolDown: 0.5,
            maxCharge: 1
        },
        frenzy: {
            axeDamage: function () {
                return Math.floor(player.totalStrength());
            },
            damage: function () {
                return (player.isAxe && weaponMastery.axe.level >= 25) ? weaponSkillList.axe.frenzy.axeDamage() : 0;
            },
            name: "Frenzy",
            levelReq: 25,
            description: "Your next attack deal bonus damage.",
            type: "buff",
            charge: 1,
            coolDown: 0.5,
            maxCharge: 1
        },

    },
    mace: {
        hammerTime: {
            maceDamage: function () {
                return Math.floor(player.totalStrength());
            },
            damage: function () {
                return (player.isMace && weaponMastery.mace.level >= 5) ? weaponSkillList.mace.hammerTime.maceDamage() : 0;
            },
            name: "Hammer Time",
            levelReq: 5,
            description: "Deal bonus damage with your mace.",
            type: "damage",
            charge: 1,
            coolDown: 0.5,
            maxCharge: 1
        },
        dominatingSlam: {
            maceDamage: function () {
                return Math.floor(player.totalStrength());
            },
            damage: function () {
                return (player.isMace && weaponMastery.mace.level >= 10) ? weaponSkillList.mace.dominatingSlam.maceDamage() : 0;
            },
            name: "Dominating Slam",
            levelReq: 10,
            description: "Deal damage and stun opponent for 1 turn.",
            type: "damage",
            charge: 1,
            coolDown: 0.5,
            maxCharge: 1
        },
        gash: {
            maceDamage: function () {
                return Math.floor(player.totalStrength());
            },
            damage: function () {
                return (player.isMace && weaponMastery.mace.level >= 15) ? weaponSkillList.mace.dominatingSlam.maceDamage() : 0;
            },
            name: "Gash",
            levelReq: 15,
            description: "Deal alot of damage to a single target.",
            type: "damage",
            charge: 1,
            coolDown: 0.5,
            maxCharge: 1
        },
        overbearingWallop: {
            maceDamage: function () {
                return Math.floor(player.totalStrength());
            },
            damage: function () {
                return (player.isMace && weaponMastery.mace.level >= 20) ? weaponSkillList.mace.overbearingWallop.maceDamage() : 0;
            },
            name: "Overbearing Wallop",
            levelReq: 20,
            description: "Deals tons of damage to a single target.",
            type: "damage",
            charge: 1,
            coolDown: 0.5,
            maxCharge: 1
        },
        tremor: {
            maceDamage: function () {
                return Math.floor(player.totalStrength());
            },
            damage: function () {
                return (player.isMace && weaponMastery.mace.level >= 25) ? weaponSkillList.mace.tremor.maceDamage() : 0;
            },
            name: "Tremor",
            levelReq: 25,
            description: "Send a wave towards your enemy and stun them for 1 turn.",
            type: "damage",
            charge: 1,
            coolDown: 0.5,
            maxCharge: 1
        },
    },
    staff: {
        hateCannon: {
            staffDamage: function () {
                return Math.floor(player.totalStrength());
            },
            damage: function () {
                return (player.isStaff && weaponMastery.staff.level >= 5) ? weaponSkillList.staff.hateCannon.staffDamage() : 0;
            },
            name: "Tremor",
            levelReq: 5,
            description: "You have a chance to empower one of your spells dealing bonus damage",
            type: "buff",
            charge: 1,
            coolDown: 0.5,
            maxCharge: 1
        },
        starlight: {
            staffDamage: function () {
                return Math.floor(player.totalStrength());
            },
            damage: function () {
                return (player.isStaff && weaponMastery.staff.level >= 10) ? weaponSkillList.staff.starlight.staffDamage() : 0;
            },
            name: "Starlight",
            levelReq: 10,
            description: "Deal magic damage every round.",
            type: "damage",
            charge: 1,
            coolDown: 0.5,
            maxCharge: 1
        },
        intone: {
            staffDamage: function () {
                return Math.floor(player.totalStrength());
            },
            damage: function () {
                return (player.isStaff && weaponMastery.staff.level >= 15) ? weaponSkillList.staff.starlight.staffDamage() : 0;
            },
            name: "Intone",
            levelReq: 15,
            description: "Deal magic damage every round.",
            type: "damage",
            charge: 1,
            coolDown: 0.5,
            maxCharge: 1
        },
        beguilersOrb: {
            staffDamage: function () {
                return Math.floor(player.totalStrength());
            },
            damage: function () {
                return (player.isStaff && weaponMastery.staff.level >= 20) ? weaponSkillList.staff.beguilersOrb.staffDamage() : 0;
            },
            name: "Beguiler\'s Orb",
            levelReq: 20,
            description: "Deal tons of single target damage.",
            type: "damage",
            charge: 1,
            coolDown: 0.5,
            maxCharge: 1
        },
        spellSimulacrum: {
            staffDamage: function () {
                return Math.floor(player.totalStrength());
            },
            damage: function () {
                return (player.isStaff && weaponMastery.staff.level >= 25) ? weaponSkillList.staff.spellSimulacrum.staffDamage() : 0;
            },
            name: "Spell Simulacrum",
            levelReq: 25,
            description: "Double damage of your spells once per battle.",
            type: "buff",
            charge: 1,
            coolDown: 0.5,
            maxCharge: 1
        },
    },
    ranged: {
        pierceTheVeil: {
            rangedDamage: function () {
                return Math.floor(player.totalStrength());
            },
            damage: function () {
                return (player.isRanged && weaponMastery.ranged.level >= 5) ? weaponSkillList.ranged.pierceTheVeil.rangedDamage() : 0;
            },
            name: "Pierce the Veil",
            levelReq: 5,
            description: "Deal damage and ignore part of enemy defense.",
            type: "damage",
            charge: 1,
            coolDown: 0.5,
            maxCharge: 1
        },
        skyCracker: {
            rangedDamage: function () {
                return Math.floor(player.totalStrength());
            },
            damage: function () {
                return (player.isRanged && weaponMastery.ranged.level >= 10) ? weaponSkillList.ranged.skyCracker.rangedDamage() : 0;
            },
            name: "Sky Cracker",
            levelReq: 10,
            description: "Deal tons of damage to a single opponent.",
            type: "damage",
            charge: 1,
            coolDown: 0.5,
            maxCharge: 1
        },
        archerFocus: {
            rangedDamage: function () {
                return Math.floor(player.totalStrength());
            },
            damage: function () {
                return (player.isRanged && weaponMastery.ranged.level >= 15) ? weaponSkillList.ranged.archerFocus.rangedDamage() : 0;
            },
            name: "Archer Focus",
            levelReq: 15,
            description: "Increase accuracy and critical chance.",
            type: "passive",
            charge: 1,
            coolDown: 0.5,
            maxCharge: 1
        },
        makeItRain: {
            rangedDamage: function () {
                return Math.floor(player.totalStrength());
            },
            damage: function () {
                return (player.isRanged && weaponMastery.ranged.level >= 20) ? weaponSkillList.ranged.makeItRain.rangedDamage() : 0;
            },
            name: "Make it Rain",
            levelReq: 20,
            description: "Rain of arrows at your opponent, dealing alot of damage.",
            type: "damage",
            charge: 1,
            coolDown: 0.5,
            maxCharge: 1
        },
        rangersRevenge: {
            rangedDamage: function () {
                return Math.floor(player.totalStrength());
            },
            damage: function () {
                return (player.isRanged && weaponMastery.ranged.level >= 25) ? weaponSkillList.ranged.rangersRevenge.rangedDamage() : 0;
            },
            name: "Ranger\' Revenge",
            levelReq: 25,
            description: "Strong aimed shot at your opponent, dealing alot of damage.",
            type: "damage",
            charge: 1,
            coolDown: 0.5,
            maxCharge: 1
        },
    },
};