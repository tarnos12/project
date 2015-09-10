"use strict";

//Player log
function Log(data) {
    var i;
    if (logData.length < maxLogLines) {
        logData[logData.length] = data;
        logData.length++;
    } else {
        for (i = 0; i < logData.length - 1; i++) {
            logData[i] = logData[i + 1];
        }
        logData[logData.length - 1] = data;
    }
    var logTemp = "";
    for (i = logData.length - 1; i >= 0; i--) {
        logTemp += logData[i];
    }
    document.getElementById('logConsole').innerHTML = logTemp;
};

var currentGameVersion = 1.5;
var defaultValues = {
    properties: {
    }
};
//PLAYER STATS
var player = {
    buffs: {
        Strength: { amount: 0, timer: 0 },
        Endurance: { amount: 0, timer: 0 },
        Agility: { amount: 0, timer: 0 },
        Dexterity: { amount: 0, timer: 0 },
        Wisdom: { amount: 0, timer: 0 },
        Intelligence: { amount: 0, timer: 0 },
        Luck: { amount: 0, timer: 0 },
        AllStats: { amount: 0, timer: 0 },
        ExpGain: { amount: 0, timer: 0 },
        ItemDrop: { amount: 0, timer: 0 },
        GoldDrop: { amount: 0, timer: 0 },
    },
    autoBattle:{
        isAuto: false,
        autoBattle: false, // testing
    },
    properties: {
        potionInventory: [],
        //Minerals
        Thaumerite: 0,
        LiteCyan: 0,
        OhmStone: 0,
        Techtite: 0,
        XilBond: 0,
        VulcanatedIron: 0,
        //Herbs
        LillyWisp: 0,
        RusinsSinew: 0,
        EssenceofWillow: 0,
        SinnersDelight: 0,
        BarletBark: 0,
        ThistleWart: 0,
        Vystim: 0,
        //Other
        raceAllStats: 0,
        raceGoldDrop: 0,
        raceExpRate: 0,
        raceDropRate: 0,
        raceEvasion: 0,
        raceDamage: 0,
        raceHealth: 0,
        raceAccuracy: 0,
        raceDefense: 0,
        raceManaRegen: 0,
        raceMaxMana: 0,
        raceCriticalChance: 0,
        swordSkill: 0,
        axeSkill: 0,
        maceSkill: 0,
        staffSkill: 0,
        rangedSkill: 0,
        saveSlot: 0,
        gameVersion: 1.5,
        heroRace: '',
        sound: 'off',
        hardcoreMode: false,
        isLoading: true,
        isDead: false,
        runOnce: false,
        isSword: false,
        isAxe: false,
        isMace: false,
        isStaff: false,
        isRanged: false,
        itemIdNumber: 1,
        stats: 0,
        skillPoints: 0,
        gold: 0,
        level: 1,
        experience: 0,
        maxExperience: 100,
        backpackUpgrade: 0,
        goldDrop: 0, //Display values in player log after defeating a monster
        expGain: 0,
        goldLost: 0,
        expLost: 0,
        //Strength
        baseStrength: 5,

        //Endurance
        baseEndurance: 5,

        //Agility
        baseAgility: 5,

        //Dexterity
        baseDexterity: 5,

        //Intelligence
        baseIntelligence: 5,

        //Wisdom
        baseWisdom: 5,

        //Luck
        baseLuck: 5,

        //Health
        health: 500,

        //Mana
        mana: 10
    },
    functions: {
        maxBattleTurns: function(){
            return Math.floor(10 + (player.functions.totalEndurance() / 10) + (player.functions.totalAgility() / 10) + (player.functions.totalDexterity() / 10))
        },
        weapon: '',
        shield: '',
        chest: '',
        helmet: '',
        legs: '',
        boots: '',
        ring: '',
        amulet: '',
        talisman: '',
        totalAllAttributesBonus: function () {
            return (equippedItems.weapon['All attributes'] +
                equippedItems.shield['All attributes'] +
                equippedItems.chest['All attributes'] +
                equippedItems.helmet['All attributes'] +
                equippedItems.legs['All attributes'] +
                equippedItems.boots['All attributes'] +
                equippedItems.ring['All attributes'] +
                equippedItems.amulet['All attributes'] +
                equippedItems.talisman['All attributes']);
        },
        totalStrengthBonus: function () {
            return (equippedItems.weapon['Strength'] +
                equippedItems.shield['Strength'] +
                equippedItems.chest['Strength'] +
                equippedItems.helmet['Strength'] +
                equippedItems.legs['Strength'] +
                equippedItems.boots['Strength'] +
                equippedItems.ring['Strength'] +
                equippedItems.amulet['Strength'] +
                equippedItems.talisman['Strength'] +
                player.functions.totalAllAttributesBonus());
        },
        totalEnduranceBonus: function(){
            return (equippedItems.weapon['Endurance'] +
                equippedItems.shield['Endurance'] +
                equippedItems.chest['Endurance'] +
                equippedItems.helmet['Endurance'] +
                equippedItems.legs['Endurance'] +
                equippedItems.boots['Endurance'] +
                equippedItems.ring['Endurance'] +
                equippedItems.amulet['Endurance'] +
                equippedItems.talisman['Endurance'] +
                player.functions.totalAllAttributesBonus());
        },
        totalAgilityBonus: function(){
            return (equippedItems.weapon['Agility'] +
                equippedItems.shield['Agility'] +
                equippedItems.chest['Agility'] +
                equippedItems.helmet['Agility'] +
                equippedItems.legs['Agility'] +
                equippedItems.boots['Agility'] +
                equippedItems.ring['Agility'] +
                equippedItems.amulet['Agility'] +
                equippedItems.talisman['Agility'] +
                player.functions.totalAllAttributesBonus());
        },
        totalDexterityBonus: function(){
            return (equippedItems.weapon['Dexterity'] +
                equippedItems.shield['Dexterity'] +
                equippedItems.chest['Dexterity'] +
                equippedItems.helmet['Dexterity'] +
                equippedItems.legs['Dexterity'] +
                equippedItems.boots['Dexterity'] +
                equippedItems.ring['Dexterity'] +
                equippedItems.amulet['Dexterity'] +
                equippedItems.talisman['Dexterity'] +
                player.functions.totalAllAttributesBonus());
        },
        totalWisdomBonus: function(){
            return (equippedItems.weapon['Wisdom'] +
                equippedItems.shield['Wisdom'] +
                equippedItems.chest['Wisdom'] +
                equippedItems.helmet['Wisdom'] +
                equippedItems.legs['Wisdom'] +
                equippedItems.boots['Wisdom'] +
                equippedItems.ring['Wisdom'] +
                equippedItems.amulet['Wisdom'] +
                equippedItems.talisman['Wisdom'] +
                player.functions.totalAllAttributesBonus());
        },
        totalIntelligenceBonus: function(){
            return (equippedItems.weapon['Intelligence'] +
                equippedItems.shield['Intelligence'] +
                equippedItems.chest['Intelligence'] +
                equippedItems.helmet['Intelligence'] +
                equippedItems.legs['Intelligence'] +
                equippedItems.boots['Intelligence'] +
                equippedItems.ring['Intelligence'] +
                equippedItems.amulet['Intelligence'] +
                equippedItems.talisman['Intelligence'] +
                player.functions.totalAllAttributesBonus());
        },
        totalLuckBonus: function(){
            return (equippedItems.weapon['Luck'] +
                equippedItems.shield['Luck'] +
                equippedItems.chest['Luck'] +
                equippedItems.helmet['Luck'] +
                equippedItems.legs['Luck'] +
                equippedItems.boots['Luck'] +
                equippedItems.ring['Luck'] +
                equippedItems.amulet['Luck'] +
                equippedItems.talisman['Luck'] +
                player.functions.totalAllAttributesBonus());
        },
        totalBlockChance: function () {
            return (equippedItems.shield['Block chance']);
        },
        totalBlockAmount: function () {
            return (equippedItems.shield['Block amount']);
        },
        totalEvasionChance: function () {
            return (equippedItems.weapon['Evasion'] +
                equippedItems.shield['Evasion'] +
                equippedItems.chest['Evasion'] +
                equippedItems.helmet['Evasion'] +
                equippedItems.legs['Evasion'] +
                equippedItems.boots['Evasion'] +
                equippedItems.ring['Evasion'] +
                equippedItems.amulet['Evasion'] +
                equippedItems.talisman['Evasion']);
        },
        totalLifeGainOnHit: function () {
            return (equippedItems.weapon['Life gain on hit']);
        },
        totalCriticalDamage: function () {
            return (equippedItems.weapon['Critical damage']);
        },
        totalCriticalChance: function () {
            return (equippedItems.weapon['Critical chance']);
        },
        totalArmorBonus: function () {
            return (equippedItems.shield['defense'] +
                equippedItems.chest['defense'] +
                equippedItems.helmet['defense'] +
                equippedItems.legs['defense'] +
                equippedItems.boots['defense']);
        },
        totalLifeBonus: function () {
            return (equippedItems.weapon['Bonus life'] +
                equippedItems.shield['Bonus life'] +
                equippedItems.chest['Bonus life'] +
                equippedItems.helmet['Bonus life'] +
                equippedItems.legs['Bonus life'] +
                equippedItems.boots['Bonus life'] +
                equippedItems.ring['Bonus life'] +
                equippedItems.amulet['Bonus life'] +
                equippedItems.talisman['Bonus life']);
        },
        totalManaBonus: function () {
            return (equippedItems.weapon['Bonus mana'] +
                equippedItems.shield['Bonus mana'] +
                equippedItems.chest['Bonus mana'] +
                equippedItems.helmet['Bonus mana'] +
                equippedItems.legs['Bonus mana'] +
                equippedItems.boots['Bonus mana'] +
                equippedItems.ring['Bonus mana'] +
                equippedItems.amulet['Bonus mana'] +
                equippedItems.talisman['Bonus mana']);
        },
        totalHealthRegen: function () {
            return (equippedItems.weapon['Health regen'] +
                equippedItems.shield['Health regen'] +
                equippedItems.chest['Health regen'] +
                equippedItems.helmet['Health regen'] +
                equippedItems.legs['Health regen'] +
                equippedItems.boots['Health regen'] +
                equippedItems.ring['Health regen'] +
                equippedItems.amulet['Health regen'] +
                equippedItems.talisman['Health regen']);
        },
        totalManaRegen: function () {
            return (equippedItems.weapon['Mana regen'] +
                equippedItems.shield['Mana regen'] +
                equippedItems.chest['Mana regen'] +
                equippedItems.helmet['Mana regen'] +
                equippedItems.legs['Mana regen'] +
                equippedItems.boots['Mana regen'] +
                equippedItems.ring['Mana regen'] +
                equippedItems.amulet['Mana regen'] +
                equippedItems.talisman['Mana regen']);
        },
        totalMagicFind: function () {
            return (equippedItems.weapon['Magic find'] +
                equippedItems.shield['Magic find'] +
                equippedItems.chest['Magic find'] +
                equippedItems.helmet['Magic find'] +
                equippedItems.legs['Magic find'] +
                equippedItems.boots['Magic find'] +
                equippedItems.ring['Magic find'] +
                equippedItems.amulet['Magic find'] +
                equippedItems.talisman['Magic find']);
        },
        totalGoldDrop: function () {
            return (equippedItems.weapon['Gold drop'] +
                equippedItems.shield['Gold drop'] +
                equippedItems.chest['Gold drop'] +
                equippedItems.helmet['Gold drop'] +
                equippedItems.legs['Gold drop'] +
                equippedItems.boots['Gold drop'] +
                equippedItems.ring['Gold drop'] +
                equippedItems.amulet['Gold drop'] +
                equippedItems.talisman['Gold drop']);
        },
        totalExperienceRate: function () {
            return (equippedItems.weapon['Experience rate'] +
                equippedItems.shield['Experience rate'] +
                equippedItems.chest['Experience rate'] +
                equippedItems.helmet['Experience rate'] +
                equippedItems.legs['Experience rate'] +
                equippedItems.boots['Experience rate'] +
                equippedItems.ring['Experience rate'] +
                equippedItems.amulet['Experience rate'] +
                equippedItems.talisman['Experience rate']);
        },
        bonusDamage: function () {
            var damage = 0;
            if (playerPassive.brawler.level > 0) {
                damage += playerPassive.brawler.bonusTotal();
            }
            if (playerPassive.overpower.level > 0) {
                damage += playerPassive.overpower.bonusTotal();
            }
            if (playerPassive.mighty.level > 0) {
                damage += playerPassive.mighty.bonusTotal();
            }
            if (playerPassive.masterofArms.level > 0) {
                damage += playerPassive.masterofArms.bonusTotal();
            }
            if (playerPassive.balancedWarrior.level > 0) {
                damage += playerPassive.balancedWarrior.bonusTotal();
            }
            return damage;
        },
        bonusMana: function(){
            var mana = 0;
            if (playerPassive.spiritualAttunement.level > 0){
                mana += playerPassive.spiritualAttunement.bonusTotal();
            };
            if (playerPassive.mentalMastery.level > 0) {
                mana += playerPassive.mentalMastery.bonusTotal();
            }
            return mana;
        },
        bonusHealth: function () {
            var health = 0;
            if (playerPassive.vitality.level > 0) {
                health += playerPassive.vitality.bonusTotal();
            }
            if (playerPassive.fortitude.level > 0) {
                health += playerPassive.fortitude.bonusTotal();
            }
            if (playerPassive.constitution.level > 0) {
                health += playerPassive.constitution.bonusTotal();
            }
            if (playerPassive.robust.level > 0) {
                health += playerPassive.robust.bonusTotal();
            }
            if (playerPassive.balancedWarrior.level > 0) {
                health += playerPassive.balancedWarrior.bonusTotal();
            }
            return health;
        },
        bonusMagicFind: function () {
            var magicFind = 0;
            if (playerPassive.looter.level > 0) {
                magicFind += playerPassive.looter.bonusTotal();
            }
            if (playerPassive.explorer.level > 0) {
                magicFind += playerPassive.explorer.bonusTotal();
            }
            if (playerPassive.ancientKnowledge.level > 0) {
                magicFind += playerPassive.ancientKnowledge.bonusTotal();
            }
            return magicFind;
        },
        bonusGoldDrop: function () {
            var goldDrop = 0;
            if (playerPassive.ancientKnowledge.level > 0) {
                goldDrop += playerPassive.ancientKnowledge.bonusTotal();
            }
            return goldDrop;
        },
        bonusExpRate: function(){
            var expRate = 0;
            if (playerPassive.curiosity.level > 0) {
                expRate += playerPassive.curiosity.bonusTotal();
            }
            if (playerPassive.ancientKnowledge.level > 0) {
                expRate += playerPassive.ancientKnowledge.bonusTotal();
            }
            return expRate;
        },
        bonusEvasion: function(){
            var evasion = 0;
            if (playerPassive.sixthSense.level > 0){
                evasion += playerPassive.sixthSense.bonusTotal();
            };
            return evasion;
        },
        dropRate: function () {
            return (1 + (((player.functions.totalLuck() / 5) + player.functions.totalMagicFind() + player.functions.bonusMagicFind() + player.properties.raceDropRate + player.buffs.ItemDrop.amount + bonusDrop) / 100));
        },
        expRate: function () {
            return (1 + ((player.functions.totalExperienceRate() + player.functions.bonusExpRate() + player.properties.raceExpRate + player.buffs.ExpGain.amount + bonusExp) / 100));
        },
        goldRate: function () {
            return (1 + ((player.functions.totalGoldDrop() + player.functions.bonusGoldDrop() + player.properties.raceGoldDrop + player.buffs.GoldDrop.amount + bonusGold) / 100));
        },
        inventory: function () {
            return Math.floor(30 + (player.functions.totalStrength() / 10) + player.properties.backpackUpgrade); //Add backpacks "new item type"
        },
        masteryStrength: function () {
            return (weaponMastery.axe.axeStrength() *
                weaponMastery.ranged.rangedStrength() *
                weaponMastery.sword.swordStrength())
        },
        totalStrength: function () {
            return Math.floor(
                (player.properties.baseStrength +
                player.functions.totalStrengthBonus()) *
                (player.functions.masteryStrength() + (player.properties.raceAllStats / 100) + ((player.buffs.Strength.amount + player.buffs.AllStats.amount))));
        },
        masteryEndurance: function () {
            return (weaponMastery.mace.maceEndurance() *
            weaponMastery.axe.axeEndurance());
        },
        totalEndurance: function () {
            return Math.floor((
                player.properties.baseEndurance +
                player.functions.totalEnduranceBonus()) *
                (player.functions.masteryEndurance() + (player.properties.raceAllStats / 100) + ((player.buffs.Endurance.amount + player.buffs.AllStats.amount))));
        },
        masteryAgility: function () {
            return (weaponMastery.sword.swordAgility());
        },
        totalAgility: function () {
            return Math.floor((
                player.properties.baseAgility +
                player.functions.totalAgilityBonus()) *
                (player.functions.masteryAgility() + (player.properties.raceAllStats / 100) + ((player.buffs.Agility.amount + player.buffs.AllStats.amount))));
        },
        masteryDexterity: function () {
            return (weaponMastery.ranged.rangedDexterity());
        },
        totalDexterity: function () {
            return Math.floor((
                player.properties.baseDexterity +
                player.functions.totalDexterityBonus()) *
                (player.functions.masteryDexterity() + (player.properties.raceAllStats / 100) + ((player.buffs.Dexterity.amount + player.buffs.AllStats.amount))));
        },
        masteryIntelligence: function () {
            return (weaponMastery.staff.staffIntelligence());
        },
        totalIntelligence: function () {
            return Math.floor(((
                (player.properties.baseIntelligence +
                player.functions.totalIntelligenceBonus()) *
                (player.functions.masteryIntelligence() + (player.properties.raceAllStats / 100) + ((player.buffs.Intelligence.amount + player.buffs.AllStats.amount)))) *
                weaponSkillList.staff.spellSimulacrum.damage()) * bonusSpellDamage);
        },
        masteryWisdom: function () {
            return (weaponMastery.staff.staffWisdom() *
                weaponMastery.mace.maceWisdom());
        },
        totalWisdom: function () {
            return Math.floor(((
                player.properties.baseWisdom +
                player.functions.totalWisdomBonus()) *
                (player.functions.masteryWisdom() + (player.properties.raceAllStats / 100) + ((player.buffs.Wisdom.amount + player.buffs.AllStats.amount)))) * bonusSpellDamage);
        },
        totalLuck: function () {
            return Math.floor((
                player.properties.baseLuck +
                player.functions.totalLuckBonus()) * (1 + (player.properties.raceAllStats / 100) + ((player.buffs.Luck.amount + player.buffs.AllStats.amount))));
        },
        maxhealth: function () {
            return Math.floor((((475 + player.functions.totalLifeBonus() + (player.functions.totalEndurance() * 5)) * (1 + (player.functions.bonusHealth() / 100)))) * (1 + (player.properties.raceHealth / 100)));
        },
        hpregen: function () {
            return Math.floor((20 + (player.functions.totalEndurance() / 3) + player.functions.totalHealthRegen()) * bonusRegen);
        },
        //Mana
        maxMana: function () {
            return Math.floor(((7 +
                player.functions.totalManaBonus() +
                player.functions.totalWisdom() * 5 +
                player.functions.totalIntelligence() * 0.1) * (1 + (player.functions.bonusMana() / 100))) * (1 + (player.properties.raceMaxMana / 100)));
        },
        manaRegen: function () {
            return (((((player.functions.totalWisdom() / 10)) * (1 + (player.functions.totalManaRegen() / 100))) * (1 + (player.properties.raceManaRegen) / 100)) * bonusRegen);
        },
        //Damage
        minDamage: function () {
            return Math.floor((((
                3 + (player.functions.totalStrength() * 0.4) +
                equippedItems.weapon.MinDamage + weaponSkillList.sword.swordFinesse.damage()) * (1 + (player.functions.bonusDamage() / 100))) * bonusDamage) * (1 + (player.properties.raceDamage / 100)));
        },
        maxDamage: function () {
            return Math.floor((((
                5 + (player.functions.totalStrength() * 0.6) +
                equippedItems.weapon.MinDamage + weaponSkillList.sword.swordFinesse.damage()) * (1 + (player.functions.bonusDamage() / 100))) * bonusDamage) * (1 + (player.properties.raceDamage / 100)));
        },
        //Secondary
        accuracy: function () {
            if (player.properties.raceAccuracy === 100) {
                return 200;
            }
            else {
                return Math.floor(95 + (player.functions.totalAgility() * 0.02 + player.functions.totalLuck() * 0.01));
            }
        },
        defense: function () {
            return ((
                (player.functions.totalAgility() * 0.1) +
                player.functions.totalArmorBonus()) * (1 + (player.properties.raceDefense / 100)));
        },
        evasion: function () {
            if (player.properties.raceEvasion === "Can't evade") {
                return 0;
            }
            else {
                if (((((5 + (player.properties.raceEvasion) + (player.functions.totalAgility() * 0.03 + player.functions.totalLuck() * 0.01)) * (1 + (player.functions.totalEvasionChance() / 100)))) * (1 + (player.functions.bonusEvasion() / 100))) >= 75) {
                    return 75;
                }
                else {
                    return ((((5 + (player.properties.raceEvasion) + (player.functions.totalAgility() * 0.03 + player.functions.totalLuck() * 0.01)) * (1 + (player.functions.totalEvasionChance() / 100)))) * (1 + (player.functions.bonusEvasion() / 100)));
                }
            };
        },
        criticalChance: function () {
            if (((10 + player.functions.totalCriticalChance() + (player.properties.raceCriticalChance) + (player.functions.totalDexterity() * 0.03 + player.functions.totalLuck() * 0.01))) > 75) {
                return 75 + weaponSkillList.ranged.archerFocus.damage();
            }
            else {
                return ((10 + weaponSkillList.ranged.archerFocus.damage() + player.functions.totalCriticalChance() + (player.properties.raceCriticalChance) + (player.functions.totalDexterity() * 0.03 + player.functions.totalLuck() * 0.01)));
            }
        },
        criticalDamage: function () {
            return ((1.1 + (player.functions.totalDexterity()) * 0.005) + player.functions.totalCriticalDamage());
        },
        blockChance: function () {
            if (Math.floor(weaponSkillList.sword.parryAndRiposte.blockChance() + player.functions.totalBlockChance()) >= 40) {
                return 40;
            }
            else {
                return Math.floor(weaponSkillList.sword.parryAndRiposte.blockChance() + player.functions.totalBlockChance());
            }
        },
        blockAmount: function () {
            return Math.floor(weaponSkillList.sword.parryAndRiposte.blockAmount() + player.functions.totalBlockAmount());
        },
        counterChance: function () {
            return Math.floor(weaponSkillList.sword.parryAndRiposte.counterChance());
        },
        counterDamage: function () {
            return Math.floor(weaponSkillList.sword.parryAndRiposte.counterDamage());
        },
        lifeSteal: function () {
            return Math.floor(weaponSkillList.sword.savageStrike.lifeStealAmount() + player.functions.totalLifeGainOnHit());
        },
    }
};

//Equipped items object, storing 0 values, so all player stats will work at the beginning of the game
var equippedItems = {};
function createEquippedItemsObject(typeOfTheItem) {
    for (var key in loadingEquippedItems) {
        if (loadingEquippedItems.hasOwnProperty(key)) {
            var itemKey = loadingEquippedItems[key];
            if (itemKey.hasOwnProperty("type")) {
                if (typeOfTheItem === itemKey.type || typeOfTheItem === "all") {
                    var itemType = itemKey.type;
                    if (equippedItems[itemType] === undefined || equippedItems[itemType].isEquipped === false) {
                        equippedItems[itemType] = {};
                        equippedItems[itemType]["All attributes"] = 0;
                        equippedItems[itemType]["Strength"] = 0;
                        equippedItems[itemType]["Endurance"] = 0;
                        equippedItems[itemType]["Agility"] = 0;
                        equippedItems[itemType]["Dexterity"] = 0;
                        equippedItems[itemType]["Wisdom"] = 0;
                        equippedItems[itemType]["Intelligence"] = 0;
                        equippedItems[itemType]["Luck"] = 0;
                        equippedItems[itemType]["Evasion"] = 0;
                        equippedItems[itemType]["Bonus life"] = 0;
                        equippedItems[itemType]["Bonus mana"] = 0;
                        equippedItems[itemType]["Health regen"] = 0;
                        equippedItems[itemType]["Mana regen"] = 0;
                        equippedItems[itemType]["Magic find"] = 0;
                        equippedItems[itemType]["Gold drop"] = 0;
                        equippedItems[itemType]["Experience rate"] = 0;
                        equippedItems[itemType]["isEquipped"] = false;
                        if (itemType === "shield") {
                            equippedItems[itemType]["Block chance"] = 0;
                            equippedItems[itemType]["Block amount"] = 0;
                            equippedItems[itemType]["Bonus armor"] = 0;
                            equippedItems[itemType]["defense"] = 0;
                        } else if (itemType === "chest" || itemType === "helmet" || itemType === "legs" || itemType === "boots") {
                            equippedItems[itemType]["Bonus armor"] = 0;
                            equippedItems[itemType]["defense"] = 0;
                        } else if (itemType === "weapon") {
                            equippedItems[itemType]["Life gain on hit"] = 0;
                            equippedItems[itemType]["Critical damage"] = 0;
                            equippedItems[itemType]["Critical chance"] = 0;
                            equippedItems[itemType]["Bonus damage"] = 0;
                            equippedItems[itemType]["MinDamage"] = 0;
                            equippedItems[itemType]["MaxDamage"] = 0;
                        };
                    };
                };
            };
        };
    };
};

createEquippedItemsObject('all');

var maxLogLines = 30;
var logData = {
    length: 0
};
var battleTurn;
//Array to store player items
var playerInventory = [];
var damageDealt = 0;
var magicDamage = 0;
var blockRate = 0;
var counterDamage = 0;
var lifeStealAmount = 0;
var magicDamageDealt = 0;
var damageTaken = 0;
var criticalRate = 0;
var enemyBlock = 0;
var accuracyRate = 0;
var monsterDamage = 0;

var number = 1;
function disableButtons() {
    if (number === 1) {
        $('a#monsterButton').css('cursor', 'not-allowed');
        $("img.monster").toggleClass("buttonDisable");
        $("button.monsterButtonDisable").toggleClass("buttonDisable").toggleClass("backgroundRed");
        $("li.monsterNavBar").toggleClass("buttonDisable");
        $("li.monsterNavBar > a").toggleClass("backgroundRed");
        number = 2;
    }
    else {
        $('a#monsterButton').css('cursor', 'pointer');
        $("img.monster").toggleClass("buttonDisable");
        $("button.monsterButtonDisable").toggleClass("buttonDisable").toggleClass("backgroundRed");
        $("li.monsterNavBar").toggleClass("buttonDisable");
        $("li.monsterNavBar > a").toggleClass("backgroundRed");
        number = 1;
    }
};

function attack(monsterStat) {
    battleTurn = 1;
    var monsterStats = monsterStat.Stats;
    while (battleTurn > 0 && battleTurn <= player.functions.maxBattleTurns()) {
        if (monsterStats.hp >= 1 && player.properties.isDead === false) {
            playerAttack(monsterStat, monsterStats);
            if (monsterStats.hp < 1) {
                monsterKilled(monsterStat, monsterStats);
            } else {
                monsterAttack(monsterStat, monsterStats);
            };
        }
        else {
            Log("<span id=\"isDead\" class =\"bold\" style=\"color:red; display:none;\">You can not fight whilst you are dead." + "<br />" + "</span>");
            isDeadLog();
            disableButtons();
            break;
        };
        battleTurn += 1;
    };
    DrawBattle();
    disableButtons();
};
//There is a bug with Draw, displaying NaN critRate, and battleTurns 0...for some odd reason...
function DrawBattle() {
    if (battleTurn === (player.functions.maxBattleTurns() + 1)) {
        displayLogInfo();
        battleTurn = -1;
    };
};

//Player miss/hit chance
function playerAttack(monsterStat, monsterStats) {
    document.getElementById("manaCost").innerHTML = monsterStats.manaCost + " Mana/10s";
    if (player.autoBattle.autoBattle === true && player.autoBattle.isAuto === false) {
        if (player.functions.maxMana() >= monsterStats.manaCost) {
            player.autoBattle.isAuto = true;
            autoAttack(monsterStat, monsterStats);
        }
        else {
            document.getElementById("manaCost").innerHTML = "You don't have enough mana. You need: " + monsterStats.manaCost + " mana.";
        }
    };
        var playerHitChance = (player.functions.accuracy() - monsterStats.eva) / 100;
        var randomHitChance = Math.random();
        if (playerHitChance > randomHitChance) { // accuracy, if you miss then do "nothing" so it's "else { };"
            playerCriticalChance(monsterStat, monsterStats);
            accuracyRate += 1;
        }
        else {
        };
};

//player critical chance
function playerCriticalChance(monsterStat, monsterStats) {
    var playerCriticalChance = player.functions.criticalChance() / 100;

    var randomCritChance = Math.random();

    if (playerCriticalChance > randomCritChance) {
        playerCriticalDamage(monsterStat, monsterStats);
        criticalRate += 1;
    }
    else {
        playerDamage(monsterStat, monsterStats);
    };
};

//player critical damage calculation
function playerCriticalDamage(monsterStat, monsterStats) {
    var damage = Math.floor(Math.random() * (player.functions.maxDamage() - player.functions.minDamage() + 1)) + player.functions.minDamage();
    damage = Math.floor(damage * player.functions.criticalDamage() * (10 / (10 + monsterStats.def)));
    if (damage >= 1) {
        playerDamageDeal(damage, monsterStat, monsterStats);
    };
};

//player normal damage calculation
function playerDamage(monsterStat, monsterStats) {
    var damage = Math.floor(Math.random() * (player.functions.maxDamage() - player.functions.minDamage() + 1)) + player.functions.minDamage();
    damage = Math.floor(damage * (1000 / (1000 + monsterStats.def)));
    if (damage >= 1) {
        playerDamageDeal(damage, monsterStat, monsterStats);
    };
};

//player damage deal (base or critical)
function playerDamageDeal(damage, monsterStat, monsterStats) {
    for (var weapon in weaponSkillList) {
        if (weaponSkillList.hasOwnProperty(weapon)) {
            var weaponSkillStat = weaponSkillList[weapon];
            for (var skill in weaponSkillStat) {
                if (weaponSkillStat.hasOwnProperty(skill)) {
                    var skillDamage = weaponSkillStat[skill];
                    if (skillDamage.charge >= 1) {
                        if (skillDamage.type === "damage") {
                            if (skillDamage.type2 === "physical") {
                                damage += skillDamage.damage();
                                skillDamage.charge -= 1;
                            }
                            else if (skillDamage.type2 === "magical") {
                                magicDamage += skillDamage.damage();
                                skillDamage.charge -= 1;
                            }
                        };
                        if (skillDamage.type === "magicDamageBuff") {
                            var randomChance = Math.floor((Math.random() * 100) + 1);
                            if (randomChance < skillDamage.chance()) {
                                magicDamage += skillDamage.damage();
                            }
                        }
                        if (skillDamage.type === "buff") {
                            damage += skillDamage.damage();
                            skillDamage.charge -= 1;
                        };
                    }
                    else if (skillDamage.charge < 1) {
                        skillDamage.charge += skillDamage.cooldown;
                    };
                };
            };
        };
    };
    if (player.functions.lifeSteal() > 0) {
        var lifeSteal = player.functions.lifeSteal();
        lifeStealAmount += lifeSteal;
        player.properties.health += lifeSteal;
        if (player.properties.health > player.functions.maxhealth()) {
            player.properties.health = player.functions.maxhealth();
        };
    };
    monsterStats.hp -= damage + magicDamage;
    magicDamageDealt += magicDamage;
    magicDamage = 0;
    damageDealt += damage;
    weaponSkill(monsterStat, monsterStats);
    //document.getElementById(monsterStats.id).getElementsByClassName('hp')[0].innerHTML = monsterStats.hp;
    //Add more stuff like "bonus elemental damage from passive skills or bonus weapon damage
};

//monster hit chance
function monsterAttack(monsterStat, monsterStats) {
    var monsterHitChance = (monsterStats.acc - player.functions.evasion()) / 100;
    var randomHitChance = Math.random();
    if (monsterHitChance > randomHitChance) {
        monsterDmg(monsterStat, monsterStats);
    };
};

//monster damage calculation
function monsterDmg(monsterStat, monsterStats) {
    monsterDamage = Math.floor(Math.random() * (monsterStats.maxDmg - monsterStats.minDmg + 1)) + monsterStats.minDmg;
    monsterDamage = Math.floor(monsterDamage * (1000 / (1000 + player.functions.defense())));
    if (monsterDamage >= 1) {
        monsterDamageDeal(monsterDamage, monsterStat, monsterStats);
    };
};

//monster damage deal (base or critical)
function monsterDamageDeal(monsterDamage, monsterStat, monsterStats) {
    var randomCounterNumber = Math.floor((Math.random() * 100) + 1);
    var randomBlockNumber = Math.floor((Math.random() * 100) + 1);
    if (randomCounterNumber <= player.functions.counterChance()) {
        var counterDamageDealt = Math.floor(monsterDamage * (player.functions.counterDamage() / 100));
        monsterStats.hp -= counterDamageDealt;
        counterDamage += counterDamageDealt;
    };
    if (randomBlockNumber <= player.functions.blockChance()) {
        if (monsterDamage >= player.functions.blockAmount()) {
            monsterDamage -= player.functions.blockAmount();
            blockRate += player.functions.blockAmount();
        }
        else if (monsterDamage < player.functions.blockAmount()) {
            blockRate += monsterDamage;
            monsterDamage = 0;
        };
    };
    player.properties.health = player.properties.health - monsterDamage;
    damageTaken += monsterDamage;
    document.getElementById("health").innerHTML = player.properties.health + "/" + player.functions.maxhealth();
    //document.getElementById(monsterStats.id).getElementsByClassName('hp')[0].innerHTML = monsterStats.hp;
    if (player.properties.health < 1) {
        playerDead(monsterStat, monsterStats);
    };
    if (monsterStats.hp < 1) {
        monsterKilled(monsterStat, monsterStats);
    };
};

//player dead function
function playerDead(monsterStat, monsterStats) {
    if (player.properties.hardcoreMode === false) {
        var goldLost = player.properties.goldLost;
        var expLost = player.properties.expLost;
        player.properties.isDead = true;
        player.properties.health = 0;
        playerRevive();
        goldLost = Math.floor(player.properties.gold - (player.properties.gold / 1.2));
        player.properties.gold = Math.floor(player.properties.gold / 1.2);
        expLost = Math.floor(player.properties.experience - (player.properties.experience / 1.2));
        player.properties.experience = Math.floor(player.properties.experience / 1.2);
        document.getElementById("health").innerHTML = player.properties.health;
        document.getElementById("gold").innerHTML = player.properties.gold;
        document.getElementById("experience").innerHTML = player.properties.experience;
        Log("<span id=\"goldLost\" class =\"bold\" style=\"color:red; display:none;\">You lost " + goldLost + " gold." + "<br />" + "</span>");
        Log("<span id=\"expLost\" class =\"bold\" style=\"color:red; display:none;\">You lost " + expLost + " experience." + "<br />" + "</span>");
        Log("<span id=\"playerDead\" class =\"bold\" style=\"color:red; display:none;\">You have died." + "<br />" + "</span>");
        Log("<span id=\"playerDead2\" class =\"bold\" style=\"color:red; display:none;\">You need to wait 5 seconds before you can fight again." + "<br />" + "</span>");
        battleTurn = -1;
        skillReCharge();
        displayLogInfo();
        deathLog();
        updateHtml();
        player.properties.goldLost = goldLost;
        player.properties.expLost = expLost;
    }
    else {
        reset();
        pageReload();
    };
};

//monster kill function
function monsterKilled(monsterStat, monsterStats) {
    monsterStats.hp = monsterStats.maxHp;
    monsterExperience(monsterStat, monsterStats);
    monsterStats.killCount++;
    displayLogInfo();
    battleTurn = -1;
    skillReCharge();
    //document.getElementById(monsterStats.id).getElementsByClassName('hp')[0].innerHTML = monsterStats.hp;
};

//Weapon skill experience
function weaponSkill(monsterStat, monsterStats) {
    // if (monsterStat.type === boss){ give x5 experience} else if normal {x1 exp}
    if (monsterStat.Stats.level > player.properties.level) {
        var expgain = 3;
    }
    else if (monsterStat.level === player.properties.level) {
        var expgain = 2;
    }
    else {
        var expgain = 1;
    };
    var subType = equippedItems.weapon.subType;
    var itemStat = weaponMastery[subType];
    if (itemStat !== undefined) {
        if (itemStat["experience"] < itemStat["maxExperience"]) {
            itemStat["experience"] = Math.floor(itemStat["experience"] + expgain);
        };
        if (itemStat["experience"] >= itemStat["maxExperience"]) {
            itemStat["level"] += 1;
            itemStat["experience"] -= itemStat["maxExperience"];
            itemStat["maxExperience"] = Math.floor(itemStat["maxExperience"] * 1.2);
            Log("<span id=\"weaponMastery\" class =\"bold\" style=\"color:green; display:none;\">You gained level in " + itemStat.name + " Mastery!" + "<br />" + "</span>");
            CreateWeaponSkillHtml();
            masteryLog();
        };
    };
    updateBar();
};
function updateBar() {
    if (equippedItems.weapon.isEquipped === true) {
        var subType = equippedItems.weapon.subType;
        var itemStat = weaponMastery[subType];
        var weaponExp = (Math.floor((itemStat.experience / itemStat.maxExperience) * 100));
        var divArray = document.getElementById(subType + '1'); //Doing + 1 so I can use "subType" for a span, which let me center progress bar value.
        divArray.style.width = ((weaponExp) + '%');
        if (subType === "sword") {
            $('#sword').empty().append(weaponExp + "%");
            player.properties.swordSkill = weaponExp;
        }
        if (subType === "axe") {
            $('#axe').empty().append(weaponExp + "%");
            player.properties.axeSkill = weaponExp;
        }
        if (subType === "mace") {
            $('#mace').empty().append(weaponExp + "%");
            player.properties.maceSkill = weaponExp;
        }
        if (subType === "staff") {
            $('#staff').empty().append(weaponExp + "%");
            player.properties.staffSkill = weaponExp;
        }
        if (subType === "ranged") {
            $('#ranged').empty().append(weaponExp + "%");
            player.properties.rangedSkill = weaponExp;
        };
    }
};

//experience gained from killing a monster
function monsterExperience(monsterStat, monsterStats) {
    if (player.properties.level > monsterStats.level + 2) {
        var expGain = player.properties.expGain;
        expGain = ((monsterStats.baseExp / (player.properties.level / monsterStats.level)) * player.functions.expRate() / 2);
    }
    else {
        expGain = (monsterStats.baseExp / (player.properties.level / monsterStats.level)) * player.functions.expRate();
    };
    if (player.properties.experience < player.properties.maxExperience) {
        player.properties.experience = Math.floor(player.properties.experience + expGain);
    };
    if (player.properties.experience >= player.properties.maxExperience) {
        player.properties.level += 1;
        levelUp();
        player.properties.stats += 10;
        player.properties.experience = player.properties.experience - player.properties.maxExperience;
        player.properties.maxExperience = Math.floor(player.properties.maxExperience * 1.5);
        Log('<span id=\"levelUpLog\" style=\"color:blue; display:none;\" class =\"bold\">Level up!' + "<br />" + "</span>");
        levelUpLog();
    }
    else {
        Log('<span id=\"expGain\" class =\"bold\" style=\"display:none;\">You gain:' + Math.floor(expGain) + " experience!" + "<br />" + "</span>");
    }
    player.properties.expGain = expGain;
    monsterGold(monsterStat, monsterStats);
};

//Player skill recharge
function skillReCharge() {
    for (var weapon in weaponSkillList) {
        if (weaponSkillList.hasOwnProperty(weapon)) {
            var weaponSkill = weaponSkillList[weapon];
            for (var skill in weaponSkill) {
                if (weaponSkill.hasOwnProperty(skill)) {
                    var rechargedSkill = weaponSkill[skill];
                    rechargedSkill.charge = rechargedSkill.maxCharge;
                };
            };
        };
    };
};


//gold gained from killing a monster
function monsterGold(monsterStat, monsterStats) {
    var goldDrop = player.properties.goldDrop;
    var monsterLvl = monsterStats.level;
    goldDrop = 0;
    var randomGold = Math.floor(Math.random() * ((monsterStats.level + 5) - monsterStats.level + 1) + monsterStats.level);
    goldDrop = Math.floor(randomGold * player.functions.goldRate());
    player.properties.gold += goldDrop;
    Log('<span id=\"goldDrop\" class =\"bold\" style=\"display:none;\">You loot: ' + goldDrop + " gold!" + "<br />" + "</span>");
    dropLog();
    document.getElementById("gold").innerHTML = player.properties.gold;
    player.properties.goldDrop = goldDrop;
    monsterItemDrop(monsterLvl); // Call item drop function with monster level.
    updateHtml();
};

function displayLogInfo() {
    if (battleTurn > player.functions.maxBattleTurns()) {
        battleTurn = player.functions.maxBattleTurns();
    };
    for (var key in player.buffs) {
        if (player.buffs.hasOwnProperty(key)) {
            var buff = player.buffs[key];
            if (buff.timer > 0) {
                buff.timer--;
                if (buff.timer === 0) {
                    buff.amount = 0;
                };
            };
        };
    };
        activeBuffsHtml();
    Log('<span id=\"test1\" class =\"bold\" style=\"color:#FF8000; display:none;\">Critical Rating: ' + ((criticalRate / battleTurn) * 100).toFixed(0) + " " + "%" + "<br />" + "</span>");
    Log('<span id=\"test2\" class =\"bold\" style=\"color:red; display:none;\">Enemy dealt: ' + damageTaken + " " + "damage." + "<br />" + "</span>");
    Log('<span id=\"test3\" class =\"bold\" style=\"color:blue; display:none;\">You dealt: ' + magicDamageDealt + " " + "magic damage total." + "<br />" + "</span>");
    Log('<span id=\"test4\" class =\"bold\" style=\"color:red; display:none;\">You dealt: ' + damageDealt + " " + "physical damage total." + "<br />" + "</span>");
    Log('<span id=\"test5\" class =\"bold\" style=\"color:blue; display:none;\">Turns: ' + (battleTurn) + "<br />" + "</span>");

    damageDealt = 0;
    magicDamageDealt = 0;
    blockRate = 0;
    lifeStealAmount = 0;
    counterDamage = 0;
    damageTaken = 0;
    criticalRate = 0;
    enemyBlock = 0;
    accuracyRate = 0;
    monsterDamage = 0;
    if (battleTurn >= player.functions.maxBattleTurns()) {
        Log('<span id=\"draw\" class =\"bold\" style=\"color:blue; display:none;\">' + "Draw" + "<br />" + "</span>");
        drawLog();
    };
    mainLog();
    CreateMonsterHtml();
    if (player.autoBattle.isAuto === false) {
        setTimeout(disableButtons, 1500); //disable all "attack" buttons for ~1.5 seconds
    };
};
function potionBuyLog() {
    $("#potionBuy").delay(200).fadeIn().delay(3000).fadeOut(5000, function () { $(this).remove(); });
}
function notEnoughMoneyLog() {
    $("#notEnoughMoney").delay(200).fadeIn().delay(3000).fadeOut(5000, function () { $(this).remove(); });
}
function inventoryBuyLog() {
    $("#inventoryBuy").delay(200).fadeIn().delay(3000).fadeOut(5000, function () { $(this).remove(); });
}
function statBuyLog() {
    $("#statBuy").delay(200).fadeIn().delay(3000).fadeOut(5000, function () { $(this).remove(); });
}
function itemDropLog() {
    $("#itemDropNew").delay(200).fadeIn().delay(3000).fadeOut(5000, function () { $(this).remove(); });
};

function levelUpLog() {
    $("#levelUpLog").delay(1800).fadeIn().delay(3000).fadeOut(5000, function () { $(this).remove(); });
};
function mainLog() {
    if (player.properties.isDead === false) {
        $(document).ready(function () {
            $("#test1").delay(1600).fadeIn().delay(3000).fadeOut(5000, function () { $(this).remove(); });
            $("#test2").delay(1400).fadeIn().delay(3000).fadeOut(5200, function () { $(this).remove(); });
            $("#test3").delay(1200).fadeIn().delay(3000).fadeOut(5400, function () { $(this).remove(); });
            $("#test4").delay(1000).fadeIn().delay(3000).fadeOut(5600, function () { $(this).remove(); });
            $("#test5").delay(800).fadeIn().delay(3000).fadeOut(5800, function () { $(this).remove(); });
        })
       
    };
    logData = {
        length: 0
    };
};
function deathLog() {
    $(document).ready(function () {
        $("#playerDead").delay(200)
           .fadeIn().delay(3000).fadeOut(2000, function () { $(this).remove(); });
        $("#playerDead2").delay(100)
        .fadeIn().delay(3000).fadeOut(2000, function () { $(this).remove(); });
        $("#goldLost").delay(400)
        .fadeIn().delay(3000).fadeOut(2000, function () { $(this).remove(); });
        $("#expLost").delay(400)
        .fadeIn().delay(3000).fadeOut(2000, function () { $(this).remove(); });
    })

};
function drawLog() {
    $("#draw").delay(100).fadeIn().delay(3000).fadeOut(2000, function () { $(this).remove(); });
};
function isDeadLog() {
    $("#isDead").delay(100).fadeIn().delay(3000).fadeOut(2000, function () { $(this).remove(); });
};
function masteryLog() {

};
function dropLog() {
    $(document).ready(function () {
        $("#goldDrop").delay(200)
                .fadeIn().delay(3000).fadeOut(2000, function () { $(this).remove(); });
        $("#expGain").delay(200)
                .fadeIn().delay(3000).fadeOut(2000, function () { $(this).remove(); });
    })
};

//Equip item function
function equipItem(id) {
    var item = playerInventory.filter(function (obj) {
        return obj.id === id;
    })[0];
    if (item !== undefined) {
        if (item.itemType === "weapon") {
            if (equippedItems.weapon.isEquipped === true) {
                var currentId = equippedItems.weapon.id
                var typeItem = 'duo'; // It means that we equip item while another item is already equipped
                unequipItem(currentId, typeItem);
            }
            if (item.id === id) {
                equippedItems.weapon = item;
                equippedItems.weapon.isEquipped = true;
                //Check which weapon is equipped so you can gain stats and level up weapon mastery
                if (equippedItems.weapon.subType === "sword") {
                    player.properties.isSword = true;
                }
                else if (equippedItems.weapon.subType === "axe") {
                    player.properties.isAxe = true;
                }
                else if (equippedItems.weapon.subType === "mace") {
                    player.properties.isMace = true;
                }
                else if (equippedItems.weapon.subType === "staff") {
                    player.properties.isStaff = true;
                }
                else if (equippedItems.weapon.subType === "ranged") {
                    player.properties.isRanged = true;
                }
                var item = playerInventory.filter(function (obj) {
                    return obj.id === id;
                })[0];
                var index = playerInventory.indexOf(item, 0);
                if (index > -1) {
                    playerInventory.splice(index, 1);
                };
            };
            player.functions.weapon = $("#testingItem" + id);
            $("#testingItem" + id).remove();
            updateHtml();
        }
        else if (item.subType === "shield") {
            if (equippedItems.shield.isEquipped === true) {
                var currentId = equippedItems.shield.id
                var typeItem = 'duo'; // It means that we equip item while another item is already equipped
                unequipItem(currentId, typeItem);
            };
            if (item.id === id) {
                equippedItems.shield = item;
                equippedItems.shield.isEquipped = true;
                var item = playerInventory.filter(function (obj) {
                    return obj.id === id;
                })[0];
                var index = playerInventory.indexOf(item, 0);
                if (index > -1) {
                    playerInventory.splice(index, 1);
                };
            };
            player.functions.shield = $("#testingItem" + id);
            $("#testingItem" + id).remove();
            updateHtml();
        }
        else if (item.subType === "chest") {
            if (equippedItems.chest.isEquipped === true) {
                var currentId = equippedItems.chest.id
                var typeItem = 'duo'; // It means that we equip item while another item is already equipped
                unequipItem(currentId, typeItem);
            };
            if (item.id === id) {
                equippedItems.chest = item;
                equippedItems.chest.isEquipped = true;
                var item = playerInventory.filter(function (obj) {
                    return obj.id === id;
                })[0];
                var index = playerInventory.indexOf(item, 0);
                if (index > -1) {
                    playerInventory.splice(index, 1);
                };
            };
            player.functions.chest = $("#testingItem" + id);
            $("#testingItem" + id).remove();
            updateHtml();
        }
        else if (item.subType === "helmet") {
            if (equippedItems.helmet.isEquipped === true) {
                var currentId = equippedItems.helmet.id
                var typeItem = 'duo'; // It means that we equip item while another item is already equipped
                unequipItem(currentId, typeItem);
            };
            if (item.id === id) {
                equippedItems.helmet = item;
                equippedItems.helmet.isEquipped = true;
                var item = playerInventory.filter(function (obj) {
                    return obj.id === id;
                })[0];
                var index = playerInventory.indexOf(item, 0);
                if (index > -1) {
                    playerInventory.splice(index, 1);
                };
            };
            player.functions.helmet = $("#testingItem" + id);
            $("#testingItem" + id).remove();
            updateHtml();
        }
        else if (item.subType === "legs") {
            if (equippedItems.legs.isEquipped === true) {
                var currentId = equippedItems.legs.id
                var typeItem = 'duo'; // It means that we equip item while another item is already equipped
                unequipItem(currentId, typeItem);
            };
            if (item.id === id) {
                equippedItems.legs = item;
                equippedItems.legs.isEquipped = true;
                var item = playerInventory.filter(function (obj) {
                    return obj.id === id;
                })[0];
                var index = playerInventory.indexOf(item, 0);
                if (index > -1) {
                    playerInventory.splice(index, 1);
                };
            };
            player.functions.legs = $("#testingItem" + id);
            $("#testingItem" + id).remove();
            updateHtml();
        }
        else if (item.subType === "boots") {
            if (equippedItems.boots.isEquipped === true) {
                var currentId = equippedItems.boots.id
                var typeItem = 'duo'; // It means that we equip item while another item is already equipped
                unequipItem(currentId, typeItem);
            };
            if (item.id === id) {
                equippedItems.boots = item;
                equippedItems.boots.isEquipped = true;
                var item = playerInventory.filter(function (obj) {
                    return obj.id === id;
                })[0];
                var index = playerInventory.indexOf(item, 0);
                if (index > -1) {
                    playerInventory.splice(index, 1);
                };
            };
            player.functions.boots = $("#testingItem" + id);
            $("#testingItem" + id).remove();
            updateHtml();
        }
        else if (item.subType === "ring") {
            if (equippedItems.ring.isEquipped === true) {
                var currentId = equippedItems.ring.id
                var typeItem = 'duo'; // It means that we equip item while another item is already equipped
                unequipItem(currentId, typeItem);
            };
            if (item.id === id) {
                equippedItems.ring = item;
                equippedItems.ring.isEquipped = true;
                var item = playerInventory.filter(function (obj) {
                    return obj.id === id;
                })[0];
                var index = playerInventory.indexOf(item, 0);
                if (index > -1) {
                    playerInventory.splice(index, 1);
                };
            };
            player.functions.ring = $("#testingItem" + id);
            $("#testingItem" + id).remove();
            updateHtml();
        }
        else if (item.subType === "amulet") {
            if (equippedItems.amulet.isEquipped === true) {
                var currentId = equippedItems.amulet.id
                var typeItem = 'duo'; // It means that we equip item while another item is already equipped
                unequipItem(currentId, typeItem);
            };
            if (item.id === id) {
                equippedItems.amulet = item;
                equippedItems.amulet.isEquipped = true;
                var item = playerInventory.filter(function (obj) {
                    return obj.id === id;
                })[0];
                var index = playerInventory.indexOf(item, 0);
                if (index > -1) {
                    playerInventory.splice(index, 1);
                };
            };
            player.functions.amulet = $("#testingItem" + id);
            $("#testingItem" + id).remove();
            updateHtml();
        }
        else if (item.subType === "talisman") {
            if (equippedItems.talisman.isEquipped === true) {
                var currentId = equippedItems.talisman.id
                var typeItem = 'duo'; // It means that we equip item while another item is already equipped
                unequipItem(currentId, typeItem);
            };
            if (item.id === id) {
                equippedItems.talisman = item;
                equippedItems.talisman.isEquipped = true;
                var item = playerInventory.filter(function (obj) {
                    return obj.id === id;
                })[0];
                var index = playerInventory.indexOf(item, 0);
                if (index > -1) {
                    playerInventory.splice(index, 1);
                };
            };
            player.functions.talisman = $("#testingItem" + id);
            $("#testingItem" + id).remove();
            updateHtml();
        }
        else if (item.itemType === "BackPack") {
            if (equippedItems.backpack.isEquipped === true) {
                var typeItem = 'duo'; // It means that we equip item while another item is already equipped
                unequipItem(typeItem);
            };
            if (item.id === id) {
                equippedItems.backpack = item;
                equippedItems.backpack.isEquipped = true;
                var item = playerInventory.filter(function (obj) {
                    return obj.id === id;
                })[0];
                var index = playerInventory.indexOf(item, 0);
                if (index > -1) {
                    playerInventory.splice(index, 1);
                };
            };
            player.functions.backpack = $("#testingItem" + id);
            $("#testingItem" + id).remove();
            updateHtml();
        };
    };
    CreateWeaponSkillHtml();
    updateHtml();
    CreatePlayerSkillsHtml();
    CreatePlayerHotBar();
    updateBar();
    checkIfEquippedEmpty();
    CreateInventoryWeaponHtml();
};

//Unequip item function
function unequipItem(id, type) {
    //item id for every slot
    var weaponId = id;
    var shieldId = id;
    var chestId = id;
    var helmetId = id;
    var legsId = id;
    var bootsId = id;
    var ringId = id;
    var amuletId = id;
    var talismanId = id;
    //Weapon unequip
    if (weaponId === equippedItems.weapon.id) {
        equippedItems.weapon.isEquipped = false;
        playerInventory.push(equippedItems.weapon);
        if (equippedItems.weapon.subType === "sword") {
            player.properties.isSword = false;
        }
        else if (equippedItems.weapon.subType === "axe") {
            player.properties.isAxe = false;
        }
        else if (equippedItems.weapon.subType === "mace") {
            player.properties.isMace = false;
        }
        else if (equippedItems.weapon.subType === "staff") {
            player.properties.isStaff = false;
        }
        else if (equippedItems.weapon.subType === "ranged") {
            player.properties.isRanged = false;
        }
        $("#inventorySpaceweapon").append(player.functions.weapon);
        if (type === "solo") {
            createEquippedItemsObject('weapon');
        };
        $("#equippedItem" + id).remove();
        updateHtml();
    }
        //Shield unequip
    else if (shieldId === equippedItems.shield.id) {
        equippedItems.shield.isEquipped = false;
        playerInventory.push(equippedItems.shield);
        $("#inventorySpacearmor").append(player.functions.shield);
        $("#equippedItem" + id).remove();
        if (type === "solo") {
            createEquippedItemsObject('shield');
        };
        updateHtml();
    }
        //chest unequip
    else if (chestId === equippedItems.chest.id) {
        equippedItems.chest.isEquipped = false;
        playerInventory.push(equippedItems.chest);
        $("#inventorySpacearmor").append(player.functions.chest);
        $("#equippedItem" + id).remove();
        if (type === "solo") {
            createEquippedItemsObject('chest');
        };
        updateHtml();
    }
        //helmet unequip
    else if (helmetId === equippedItems.helmet.id) {
        equippedItems.helmet.isEquipped = false;
        playerInventory.push(equippedItems.helmet);
        $("#inventorySpacearmor").append(player.functions.helmet);
        $("#equippedItem" + id).remove();
        if (type === "solo") {
            createEquippedItemsObject('helmet');
        };
        updateHtml();
    }
        //legs unequip
    else if (legsId === equippedItems.legs.id) {
        equippedItems.legs.isEquipped = false;
        playerInventory.push(equippedItems.legs);
        $("#inventorySpacearmor").append(player.functions.legs);
        $("#equippedItem" + id).remove();
        if (type === "solo") {
            createEquippedItemsObject('legs');
        };
        updateHtml();
    }
        //boots unequip
    else if (bootsId === equippedItems.boots.id) {
        equippedItems.boots.isEquipped = false;
        playerInventory.push(equippedItems.boots);
        $("#inventorySpacearmor").append(player.functions.boots);
        $("#equippedItem" + id).remove();
        if (type === "solo") {
            createEquippedItemsObject('boots');
        };
        updateHtml();
    }
        //Ring unequip
    else if (ringId === equippedItems.ring.id) {
        equippedItems.ring.isEquipped = false;
        playerInventory.push(equippedItems.ring);
        $("#inventorySpaceaccessory").append(player.functions.ring);
        $("#equippedItem" + id).remove();
        if (type === "solo") {
            createEquippedItemsObject('ring');
        };
        updateHtml();
    }
        //Amulet unequip
    else if (amuletId === equippedItems.amulet.id) {
        equippedItems.amulet.isEquipped = false;
        playerInventory.push(equippedItems.amulet);
        $("#inventorySpaceaccessory").append(player.functions.amulet);
        $("#equippedItem" + id).remove();
        if (type === "solo") {
            createEquippedItemsObject('amulet');
        };
        updateHtml();
    }
        //Talisman unequip
    else if (talismanId === equippedItems.talisman.id) {
        equippedItems.talisman.isEquipped = false;
        playerInventory.push(equippedItems.talisman);
        $("#inventorySpaceaccessory").append(player.functions.talisman);
        $("#equippedItem" + id).remove();
        if (type === "solo") {
            createEquippedItemsObject('talisman');
        };
        updateHtml();
    };
    CreateWeaponSkillHtml();
    updateHtml();
    CreatePlayerSkillsHtml();
    CreatePlayerHotBar();
    checkIfEquippedEmpty();
    if (type === "solo") {
        CreateInventoryWeaponHtml();
    };
};





var checkBoxCommon = false;
var checkBoxUncommon = false;
var checkBoxRare = false;
var checkBoxEpic = false;
var checkBoxLegendary = false;
var hardcoreMode = false;
function handleClick() {
    checkBoxCommon = document.getElementById("common").checked;
    checkBoxUncommon = document.getElementById("uncommon").checked;
    checkBoxRare = document.getElementById("rare").checked;
    checkBoxEpic = document.getElementById("epic").checked;
    checkBoxLegendary = document.getElementById("legendary").checked;
    hardcoreMode = document.getElementById("hardcoreMode").checked;
    player.autoBattle.autoBattle = document.getElementById("autoBattle").checked;
};
var eventDay = '';
var bonusExp = 1;
var bonusGold = 1;
var bonusDrop = 1;
var bonusRegen = 1; //multiplier both health and mana
var bonusDamage = 1; //Min and Max damage bonus ~50%...
var bonusSpellDamage = 1; //Add spell power with 50% bonus, currently affect int/wis 20% bonus
function weekDayEvent() {
    var eventDate = new Date();
    var day = eventDate.getDay();
    var description = '';
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (day === 0) {
        eventDay = days[day];
        description = "base exp/gold/drop rate x2";
        bonusExp = 2;
        bonusGold = 2;
        bonusDrop = 2;
    }
    else if (day === 1) {
        eventDay = days[day];
        description = "Hp/mana regen x2";
        bonusRegen = 2;
    }
    else if (day === 2) {
        eventDay = days[day];
        description = "Damage 50%";
        bonusDamage = 1.5;
    }
    else if (day === 3) {
        eventDay = days[day];
        description = "Int/Wis + 20%";
        bonusSpellDamage = 1.2;
    }
    else if (day === 4) {
        eventDay = days[day];
        description = "Exp/Gold x2";
        bonusExp = 2;
        bonusGold = 2;
    }
    else if (day === 5) {
        eventDay = days[day];
        description = "Gold/Drop x2";
        bonusGold = 2;
        bonusDrop = 2;
    }
    else if (day === 6) {
        eventDay = days[day];
        description = "Drop/Exp x2";
        bonusExp = 2;
        bonusDrop = 2;
    };
    document.getElementById("date").innerHTML += eventDay + ": " + description;
};
weekDayEvent();

function changeRace(raceName) {
    var characterRace = '';
    characterRace = raceName;
    player.properties.heroRace = characterRace;
    removeStartingScreen();
    checkHeroRace();
};
//Set audio starting volume...
function myAudio(sound) {
    var myAudio = document.getElementById('myAudio');
    myAudio.volume = 0.1;
    if (player.properties.sound === "on" || sound === "off") {
        myAudio.play();
        player.properties.sound = "on";
    }
    if (player.properties.sound === "off") {
        myAudio.pause();
        player.properties.sound = "off";
    };

};

function muteAudio() {
    var audio = document.getElementById("myAudio");
    if (audio.muted === true) {
        audio.muted = false;
    }
    else if (audio.muted === false) {
        audio.muted = true;
    };
};
function selectText(containerid) {
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select();
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().addRange(range);
    };
};

//Will show a number on a tab like inventory, displaying amount of NEW items, player have not seen yet.
function showNumber() {
    var number = playerInventory.length;
    document.getElementById('playerInventory').innerHTML = "<p>" + number + "</p>";
};

function sortInventory(type) {
    if (type === "Value") {
        playerInventory.sort(function(a, b) {
            return b.Value - a.Value
        });
    }
    else if (type === "Rarity") {
        playerInventory.sort(function(a, b) {
            return b.rarityValue - a.rarityValue
        });
    }
    else if (type === "Damage") {
        playerInventory.sort(function(a, b) {
            return b.AverageDamage - a.AverageDamage;
        });
    }
    else if (type === "iLvl") {
        playerInventory.sort(function(a, b) {
            return b.iLvl - a.iLvl;
        });
    };
    CreateInventoryWeaponHtml();
};

function resetPassiveSkills() {
        for (var key in playerPassive) {
            if (playerPassive.hasOwnProperty(key)) {
                playerPassive[key].level = 0;
            }
        };
        player.properties.skillPoints = player.properties.level - 1;
        CreatePlayerSkillsHtml();
        primaryStatUpdate();
        secondaryStatUpdate();
};
var checkedShopItem = '';
$(document).on('change', 'input[name="shopItem"]', function () {
    var checkedShopItemInteger = $(this).val();
    checkedShopItem = parseInt(checkedShopItemInteger, 10);
    ShopBuyButtons();
});

function sortShop(type, itemType) {
    var itemSort = [];
    if (itemType === "Weapon") {
        itemSort = itemShopWeapon;
    }
    else if (itemType === "Armor") {
        itemSort = itemShopArmor;
    }
    else if (itemType === "Accessory") {
        itemSort = itemShopAccessory;
    };
    if (type === "Value") {
        itemSort.sort(function(a, b) {
            return b.shopPrice - a.shopPrice;
        });
    }
    else if (type === "Rarity") {
        itemSort.sort(function(a, b) {
            return b.rarityValue - a.rarityValue;
        });
    };
    displayShopItems(itemShopWeapon);
    displayShopItems(itemShopArmor);
    displayShopItems(itemShopAccessory);
};

function raceStats() {
    for (var race in characterRaces) {
        if (characterRaces.hasOwnProperty(race)) {
            var currentRace = characterRaces[race];
            if (player.properties.heroRace === currentRace.name) {
                for (var stat in currentRace) {
                    if (currentRace.hasOwnProperty(stat)) {
                        if ('raceAllStats, raceGoldDrop, raceExpRate, raceDropRate, raceEvasion, raceDamage, raceHealth, raceAccuracy, raceDefense, raceManaRegen, raceMaxMana, raceCriticalChance'.indexOf(stat) !== -1) {
                            player.properties[stat] = currentRace[stat]();
                        };
                    };
                };
            };
        };
    };
    secondaryStatUpdate();
};

function copyPlayerProperties() {
    var playerDefault = defaultValues.properties;
    var playerProperties = player.properties;
    for (var key in playerProperties) {
        if (playerProperties.hasOwnProperty(key)) {
            playerDefault[key] = playerProperties[key];
        };
    };
};
copyPlayerProperties();

function changeGameStyling(style) {
    if (style === "basic") {
        $("div.c4").css("background-color", "#EDD26E");
        $(".background").css("background-color", "#EEDFA6");
        $(".darkBackground").css("background-color", "#baa65a");
        $(".border").css("border", "1px solid black");
        $(".borderBottom").css("border-bottom", "1px solid black");
        $(".borderTop").css("border-top", "1px solid black");
    }
    else if (style === 2) {
        $("div.c4").css("background-color", "red");
        $(".background").css("background-color", "green");
        $(".darkBackground").css("background-color", "blue");
        $(".border").css("border", "1px solid purple");
        $(".borderBottom").css("border-bottom", "1px solid purple");
        $(".borderTop").css("border-top", "1px solid purple");
    }
    else if (style === 3) {

    }
};

function getNumberMultiplierofFive(n) {
    if (n > 100) {
        return 100;
    }
    else if (n > 4)
        return Math.ceil(n / 5.0) * 5;
    else if (n < 0)
        return Math.floor(n / 5.0) * 5;
    else
        return 1;
}