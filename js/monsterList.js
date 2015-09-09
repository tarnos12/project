"use strict";
// chance out of 10000, 1 = 0.01%, 10 = 0.1%, 100 = 1%, 1000 = 10%...
var monsterList = {};

var VarikGrunt = {};
var VarikSoldier = {};
var VarikMarksmen = {};
var VarikVulture = {};
var VarikEvader = {};
var VariksLiar = {};
var VariksQueen = {};
var LordVarik = {};

var ToxicFlies = {};
var Stalker = {};
var AlphaStalker = {};
var StalkerPack = {};
var JumpingSpider = {};
var SpiderBeast = {};
var Narsus = {};
var JotunnScout = {};

var JotnarAmbushSquad = {};
var LongRangeExterminationSquad = {};
var BerserkerShockSquad = {};
var BerserkerShockSquadCaptainRendGrest = {};
var ArtillerySquad = {};
var JottunMainInfantry = {};
var RegentCairLorn = {};
var DeepKingTarNuk = {};

var DepthCrawler = {};
var FadingGoblins = {};
var StarBriteGolems = {};
var Bannecs = {};
var Kholders = {};
var LivingWalls = {};
var Keeper = {};
var LegendoftheAncientDreamer = {};

var BabyDuneDigger = {};
var CamelSpiderHerds = {};
var WasteEagle = {};
var GrelTribeGuard = {};
var GrelWarriors = {};
var GrelSpitters = {};
var GrelChief = {};
var MommaDuneDiggerSheila = {};

var CrystalFloater = {};
var SnowWatcher = {};
var CannibalTribeTrachid = {};
var LegendoftheRageCalm = {};
var IceGiantKing = {};
var FrightGolem = {};
var FrightGolemArmy = {};
var LegendoftheRageFullPower = {};

var LegionofDreadWallGuards = {};
var Dreadnaughts = {};
var DreadnaughtElite = {};
var EmaciatedMagi = {};
var MagiThunderCallers = {};
var FalseDragonSlayers = {};
var TorturedBeholder = {};
var KingoftheLegionGrantBannecs = {};


function MakeMonsterList() {
    VarikGrunt.Stats = {
        hp: 350,
        maxHp: 350,
        def: 10,
        minDmg: 10,
        maxDmg: 25,
        baseExp: 50,
        acc: 95,
        eva: 10,
        name: "VarikGrunt",
        displayName: "Varik Grunt",
        type: "weak",
        id: 1,
        level: 1,
        area: "BanditHideout",
        isShown: true,
        killCount: 0,
        manaCost: 100
    };
    monsterList.VarikGrunt = VarikGrunt;
    VarikSoldier.Stats = {
        hp: 500,
        maxHp: 500,
        def: 15,
        minDmg: 40,
        maxDmg: 60,
        baseExp: 70,
        acc: 95,
        eva: 10,
        name: "VarikSoldier",
        displayName: "Varik Soldier",
        type: "weak",
        id: 2,
        level: 3,
        area: "BanditHideout",
        isShown: false,
        killCount: 0,
        manaCost: 150
    };
    monsterList.VarikSoldier = VarikSoldier;
    VarikMarksmen.Stats = {
        hp: 777,
        maxHp: 777,
        def: 5,
        minDmg: 60,
        maxDmg: 100,
        baseExp: 100,
        acc: 95,
        eva: 10,
        name: "VarikMarksmen",
        displayName: "Varik Marksmen",
        type: "weak",
        id: 3,
        level: 5,
        area: "BanditHideout",
        isShown: false,
        killCount: 0,
        manaCost: 200
    };
    monsterList.VarikMarksmen = VarikMarksmen;
    VarikVulture.Stats = {
        hp: 999,
        maxHp: 999,
        def: 8,
        minDmg: 100,
        maxDmg: 150,
        baseExp: 140,
        acc: 95,
        eva: 10,
        name: "VarikVulture",
        displayName: "Varik Vulture",
        type: "weak",
        id: 4,
        level: 7,
        area: "BanditHideout",
        isShown: false,
        killCount: 0,
        manaCost: 250
    };
    monsterList.VarikVulture = VarikVulture;
    VarikEvader.Stats = {
        hp: 1337,
        maxHp: 1337,
        def: 10,
        minDmg: 150,
        maxDmg: 200,
        baseExp: 180,
        acc: 95,
        eva: 10,
        name: "VarikEvader",
        displayName: "Varik Evader",
        type: "weak",
        id: 5,
        level: 9,
        area: "BanditHideout",
        isShown: false,
        killCount: 0,
        manaCost: 300
    };
    monsterList.VarikEvader = VarikEvader;
    VariksLiar.Stats = {
        hp: 1800,
        maxHp: 1800,
        def: 15,
        minDmg: 200,
        maxDmg: 300,
        baseExp: 250,
        acc: 95,
        eva: 10,
        name: "VariksLiar",
        displayName: "Variks Liar",
        type: "weak",
        id: 6,
        level: 11,
        area: "BanditHideout",
        isShown: false,
        killCount: 0,
        manaCost: 350
    };
    monsterList.VariksLiar = VariksLiar;
    VariksQueen.Stats = {
        hp: 2400,
        maxHp: 2400,
        def: 30,
        minDmg: 333,
        maxDmg: 444,
        baseExp: 330,
        acc: 95,
        eva: 15,
        name: "VariksQueen",
        displayName: "Variks Queen(ELITE)",
        type: "weak",
        id: 7,
        level: 15,
        area: "BanditHideout",
        isShown: false,
        killCount: 0,
        manaCost: 400
    };
    monsterList.VariksQueen = VariksQueen;
    LordVarik.Stats = {
        hp: 1337,
        maxHp: 1337,
        def: 30,
        minDmg: 450,
        maxDmg: 600,
        baseExp: 450,
        acc: 95,
        eva: 20,
        name: "LordVarik",
        displayName: "Lord Varik(BOSS)",
        type: "weak",
        id: 8,
        level: 20,
        area: "BanditHideout",
        isShown: false,
        killCount: 0,
        manaCost: 450
    };
    monsterList.LordVarik = LordVarik;
    ToxicFlies.Stats = {
        hp: 1500,
        maxHp: 1500,
        def: 35,
        minDmg: 600,
        maxDmg: 800,
        baseExp: 600,
        acc: 95,
        eva: 10,
        name: "ToxicFlies",
        displayName: "Toxic Flies",
        type: "average",
        id: 9,
        level: 22,
        area: "ForestofNarsus",
        isShown: false,
        killCount: 0,
        manaCost: 500
    };
    monsterList.ToxicFlies = ToxicFlies;
    Stalker.Stats = {
        hp: 1800,
        maxHp: 1800,
        def: 40,
        minDmg: 800,
        maxDmg: 1100,
        baseExp: 900,
        acc: 95,
        eva: 10,
        name: "Stalker",
        displayName: "Stalker",
        type: "average",
        id: 10,
        level: 24,
        area: "ForestofNarsus",
        isShown: false,
        killCount: 0,
        manaCost: 550
    };
    monsterList.Stalker = Stalker;
    AlphaStalker.Stats = {
        hp: 2200,
        maxHp: 2200,
        def: 45,
        minDmg: 1200,
        maxDmg: 1500,
        baseExp: 1250,
        acc: 95,
        eva: 10,
        name: "AlphaStalker",
        displayName: "Alpha Stalker",
        type: "average",
        id: 11,
        level: 26,
        area: "ForestofNarsus",
        isShown: false,
        killCount: 0,
        manaCost: 600
    };
    monsterList.AlphaStalker = AlphaStalker;
    StalkerPack.Stats = {
        hp: 2600,
        maxHp: 2600,
        def: 50,
        minDmg: 1500,
        maxDmg: 1800,
        baseExp: 1500,
        acc: 95,
        eva: 10,
        name: "StalkerPack",
        displayName: "Stalker Pack",
        type: "average",
        id: 12,
        level: 28,
        area: "ForestofNarsus",
        isShown: false,
        killCount: 0,
        manaCost: 650
    };
    monsterList.StalkerPack = StalkerPack;
    JumpingSpider.Stats = {
        hp: 3400,
        maxHp: 3400,
        def: 55,
        minDmg: 1800,
        maxDmg: 2200,
        baseExp: 1850,
        acc: 95,
        eva: 10,
        name: "JumpingSpider",
        displayName: "Jumping Spider",
        type: "average",
        id: 13,
        level: 30,
        area: "ForestofNarsus",
        isShown: false,
        killCount: 0,
        manaCost: 700
    };
    monsterList.JumpingSpider = JumpingSpider;
    SpiderBeast.Stats = {
        hp: 4500,
        maxHp: 4500,
        def: 60,
        minDmg: 2200,
        maxDmg: 2555,
        baseExp: 2300,
        acc: 95,
        eva: 10,
        name: "SpiderBeast",
        displayName: "Spider Beast(ELITE)",
        type: "average",
        id: 14,
        level: 35,
        area: "ForestofNarsus",
        isShown: false,
        killCount: 0,
        manaCost: 750
    };
    monsterList.SpiderBeast = SpiderBeast;
    Narsus.Stats = {
        hp: 6000,
        maxHp: 6000,
        def: 70,
        minDmg: 2555,
        maxDmg: 3200,
        baseExp: 3000,
        acc: 95,
        eva: 10,
        name: "Narsus",
        displayName: "Narsus(BOSS)",
        type: "average",
        id: 15,
        level: 40,
        area: "ForestofNarsus",
        isShown: false,
        killCount: 0,
        manaCost: 800
    };
    monsterList.Narsus = Narsus;
    JotunnScout.Stats = {
        hp: 10000,
        maxHp: 10000,
        def: 80,
        minDmg: 3330,
        maxDmg: 3666,
        baseExp: 3700,
        acc: 95,
        eva: 10,
        name: "JotunnScout",
        displayName: "Jotunn Scout",
        type: "average",
        id: 16,
        level: 42,
        area: "ForestofNarsus",
        isShown: false,
        killCount: 0,
        manaCost: 850
    };
    monsterList.JotunnScout = JotunnScout;
    JotnarAmbushSquad.Stats = {
        hp: 15000,
        maxHp: 15000,
        def: 90,
        minDmg: 3600,
        maxDmg: 4444,
        baseExp: 4300,
        acc: 95,
        eva: 10,
        name: "JotnarAmbushSquad",
        displayName: "Jotnar Ambush Squad",
        type: "strong",
        id: 17,
        level: 44,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
        manaCost: 900
    };
    monsterList.JotnarAmbushSquad = JotnarAmbushSquad;
    LongRangeExterminationSquad.Stats = {
        hp: 20000,
        maxHp: 20000,
        def: 100,
        minDmg: 4000,
        maxDmg: 5000,
        baseExp: 5500,
        acc: 95,
        eva: 10,
        name: "LongRangeExterminationSquad",
        displayName: "Long Range Extermination Squad",
        type: "strong",
        id: 18,
        level: 46,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
        manaCost: 950
    };
    monsterList.LongRangeExterminationSquad = LongRangeExterminationSquad;
    BerserkerShockSquad.Stats = {
        hp: 25000,
        maxHp: 25000,
        def: 110,
        minDmg: 5000,
        maxDmg: 5500,
        baseExp: 7000,
        acc: 95,
        eva: 10,
        name: "BerserkerShockSquad",
        displayName: "Berserker Shock Squad",
        type: "strong",
        id: 19,
        level: 48,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
        manaCost: 1000
    };
    monsterList.BerserkerShockSquad = BerserkerShockSquad;
    BerserkerShockSquadCaptainRendGrest.Stats = {
        hp: 35000,
        maxHp: 35000,
        def: 120,
        minDmg: 5500,
        maxDmg: 6000,
        baseExp: 9500,
        acc: 95,
        eva: 10,
        name: "BerserkerShockSquadCaptainRendGrest",
        displayName: "Berserker ShockSquad Captain, Rend Grest",
        type: "strong",
        id: 20,
        level: 50,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
        manaCost: 1100
    };
    monsterList.BerserkerShockSquadCaptainRendGrest = BerserkerShockSquadCaptainRendGrest;
    ArtillerySquad.Stats = {
        hp: 50000,
        maxHp: 50000,
        def: 130,
        minDmg: 6000,
        maxDmg: 7000,
        baseExp: 12000,
        acc: 95,
        eva: 10,
        name: "ArtillerySquad",
        displayName: "Artillery Squad #1-9",
        type: "strong",
        id: 21,
        level: 52,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
        manaCost: 1200
    };
    monsterList.ArtillerySquad = ArtillerySquad;
    JottunMainInfantry.Stats = {
        hp: 75000,
        maxHp: 75000,
        def: 140,
        minDmg: 7000,
        maxDmg: 8000,
        baseExp: 14000,
        acc: 95,
        eva: 10,
        name: "JottunMainInfantry",
        displayName: "Jottun Main Infantry",
        type: "strong",
        id: 22,
        level: 54,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
        manaCost: 1300
    };
    monsterList.JottunMainInfantry = JottunMainInfantry;
    RegentCairLorn.Stats = {
        hp: 100000,
        maxHp: 100000,
        def: 150,
        minDmg: 8000,
        maxDmg: 8500,
        baseExp: 19000,
        acc: 95,
        eva: 10,
        name: "RegentCairLorn",
        displayName: "Regent Cair Lorn(ELITE)",
        type: "strong",
        id: 23,
        level: 60,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
        manaCost: 1400
    };
    monsterList.RegentCairLorn = RegentCairLorn;
    DeepKingTarNuk.Stats = {
        hp: 123456,
        maxHp: 123456,
        def: 200,
        minDmg: 8500,
        maxDmg: 9000,
        baseExp: 28000,
        acc: 95,
        eva: 10,
        name: "DeepKingTarNuk",
        displayName: "Deep King Tar Nuk(BOSS)",
        type: "strong",
        id: 24,
        level: 70,
        area: "OzJotnar",
        isShown: false,
        killCount: 0,
        manaCost: 1500
    };
    monsterList.DeepKingTarNuk = DeepKingTarNuk;
    DepthCrawler.Stats = {
        hp: 113377,
        maxHp: 113377,
        def: 220,
        minDmg: 9000,
        maxDmg: 11000,
        baseExp: 50000,
        acc: 95,
        eva: 20,
        name: "DepthCrawler",
        displayName: "Depth Crawler",
        type: "boss",
        id: 25,
        level: 72,
        area: "TwistedMarrow",
        isShown: false,
        killCount: 0,
        manaCost: 1600
    };
    monsterList.DepthCrawler = DepthCrawler;
    FadingGoblins.Stats = {
        hp: 125000,
        maxHp: 125000,
        def: 200,
        minDmg: 9500,
        maxDmg: 12000,
        baseExp: 48000,
        acc: 95,
        eva: 10,
        name: "FadingGoblins",
        displayName: "Fading Goblins",
        type: "boss",
        id: 26,
        level: 74,
        area: "TwistedMarrow",
        isShown: false,
        killCount: 0,
        manaCost: 1700
    };
    monsterList.FadingGoblins = FadingGoblins;
    StarBriteGolems.Stats = {
        hp: 135000,
        maxHp: 135000,
        def: 180,
        minDmg: 11000,
        maxDmg: 12000,
        baseExp: 58000,
        acc: 95,
        eva: 10,
        name: "StarBriteGolems",
        displayName: "Star-Brite Golems",
        type: "boss",
        id: 27,
        level: 76,
        area: "TwistedMarrow",
        isShown: false,
        killCount: 0,
        manaCost: 1800
    };
    monsterList.StarBriteGolems = StarBriteGolems;
    Bannecs.Stats = {
        hp: 170000,
        maxHp: 170000,
        def: 190,
        minDmg: 12000,
        maxDmg: 13000,
        baseExp: 65000,
        acc: 95,
        eva: 10,
        name: "Bannecs",
        displayName: "Bannecs",
        type: "boss",
        id: 28,
        level: 78,
        area: "TwistedMarrow",
        isShown: false,
        killCount: 0,
        manaCost: 1900
    };
    monsterList.Bannecs = Bannecs;
    Kholders.Stats = {
        hp: 200000,
        maxHp: 200000,
        def: 200,
        minDmg: 13000,
        maxDmg: 14000,
        baseExp: 75000,
        acc: 95,
        eva: 10,
        name: "Kholders",
        displayName: "Kholders",
        type: "boss",
        id: 29,
        level: 80,
        area: "TwistedMarrow",
        isShown: false,
        killCount: 0,
        manaCost: 2000
    };
    monsterList.Kholders = Kholders;
    LivingWalls.Stats = {
        hp: 220000,
        maxHp: 220000,
        def: 210,
        minDmg: 14000,
        maxDmg: 15000,
        baseExp: 90000,
        acc: 95,
        eva: 10,
        name: "LivingWalls",
        displayName: "Living Walls",
        type: "boss",
        id: 30,
        level: 85,
        area: "TwistedMarrow",
        isShown: false,
        killCount: 0,
        manaCost: 2200
    };
    monsterList.LivingWalls = LivingWalls;
    Keeper.Stats = {
        hp: 250000,
        maxHp: 250000,
        def: 220,
        minDmg: 15000,
        maxDmg: 16000,
        baseExp: 115000,
        acc: 95,
        eva: 10,
        name: "Keeper",
        displayName: "Keeper(ELITE)",
        type: "boss",
        id: 31,
        level: 90,
        area: "TwistedMarrow",
        isShown: false,
        killCount: 0,
        manaCost: 2400
    };
    monsterList.Keeper = Keeper;
    LegendoftheAncientDreamer.Stats = {
        hp: 280000,
        maxHp: 280000,
        def: 230,
        minDmg: 16000,
        maxDmg: 17000,
        baseExp: 130000,
        acc: 95,
        eva: 10,
        name: "LegendoftheAncientDreamer",
        displayName: "Legend of the Ancient Dreamer(BOSS)",
        type: "boss",
        id: 32,
        level: 100,
        area: "TwistedMarrow",
        isShown: false,
        killCount: 0,
        manaCost: 2600
    };
    monsterList.LegendoftheAncientDreamer = LegendoftheAncientDreamer;
    BabyDuneDigger.Stats = {
        hp: 320000,
        maxHp: 320000,
        def: 240,
        minDmg: 17000,
        maxDmg: 18000,
        baseExp: 150000,
        acc: 95,
        eva: 10,
        name: "BabyDuneDigger",
        displayName: "Baby Dune Digger",
        type: "boss",
        id: 33,
        level: 105,
        area: "KharmSheath",
        isShown: false,
        killCount: 0,
        manaCost: 2800
    };
    monsterList.BabyDuneDigger = BabyDuneDigger;
    CamelSpiderHerds.Stats = {
        hp: 350000,
        maxHp: 350000,
        def: 250,
        minDmg: 18000,
        maxDmg: 19000,
        baseExp: 175000,
        acc: 95,
        eva: 10,
        name: "CamelSpiderHerds",
        displayName: "Camel Spider Herds",
        type: "boss",
        id: 34,
        level: 110,
        area: "KharmSheath",
        isShown: false,
        killCount: 0,
        manaCost: 3000
    };
    monsterList.CamelSpiderHerds = CamelSpiderHerds;
    WasteEagle.Stats = {
        hp: 370000,
        maxHp: 370000,
        def: 260,
        minDmg: 20000,
        maxDmg: 21000,
        baseExp: 250000,
        acc: 95,
        eva: 10,
        name: "WasteEagle",
        displayName: "Waste Eagle",
        type: "boss",
        id: 35,
        level: 115,
        area: "KharmSheath",
        isShown: false,
        killCount: 0,
        manaCost: 3200
    };
    monsterList.WasteEagle = WasteEagle;
    GrelTribeGuard.Stats = {
        hp: 400000,
        maxHp: 400000,
        def: 270,
        minDmg: 21000,
        maxDmg: 22000,
        baseExp: 290000,
        acc: 95,
        eva: 10,
        name: "GrelTribeGuard",
        displayName: "Grel Tribe Guard",
        type: "boss",
        id: 36,
        level: 120,
        area: "KharmSheath",
        isShown: false,
        killCount: 0,
        manaCost: 3400
    };
    monsterList.GrelTribeGuard = GrelTribeGuard;
    GrelWarriors.Stats = {
        hp: 500000,
        maxHp: 500000,
        def: 280,
        minDmg: 22000,
        maxDmg: 24000,
        baseExp: 350000,
        acc: 95,
        eva: 10,
        name: "GrelWarriors",
        displayName: "Grel Warriors",
        type: "boss",
        id: 37,
        level: 125,
        area: "KharmSheath",
        isShown: false,
        killCount: 0,
        manaCost: 3600
    };
    monsterList.GrelWarriors = GrelWarriors;
    GrelSpitters.Stats = {
        hp: 600000,
        maxHp: 600000,
        def: 290,
        minDmg: 24000,
        maxDmg: 26000,
        baseExp: 470000,
        acc: 95,
        eva: 10,
        name: "GrelSpitters",
        displayName: "Grel Spitters",
        type: "boss",
        id: 38,
        level: 130,
        area: "KharmSheath",
        isShown: false,
        killCount: 0,
        manaCost: 3800
    };
    monsterList.GrelSpitters = GrelSpitters;
    GrelChief.Stats = {
        hp: 700000,
        maxHp: 700000,
        def: 300,
        minDmg: 26000,
        maxDmg: 28000,
        baseExp: 550000,
        acc: 95,
        eva: 10,
        name: "GrelChief",
        displayName: "Grel Chief",
        type: "boss",
        id: 39,
        level: 135,
        area: "KharmSheath",
        isShown: false,
        killCount: 0,
        manaCost: 4000
    };
    monsterList.GrelChief = GrelChief;
    MommaDuneDiggerSheila.Stats = {
        hp: 800000,
        maxHp: 800000,
        def: 310,
        minDmg: 30000,
        maxDmg: 32000,
        baseExp: 650000,
        acc: 95,
        eva: 10,
        name: "MommaDuneDiggerSheila",
        displayName: "Momma Dune Digger, Sheila",
        type: "boss",
        id: 40,
        level: 140,
        area: "KharmSheath",
        isShown: false,
        killCount: 0,
        manaCost: 4200
    };
    monsterList.MommaDuneDiggerSheila = MommaDuneDiggerSheila;
    CrystalFloater.Stats = {
        hp: 900000,
        maxHp: 900000,
        def: 320,
        minDmg: 32000,
        maxDmg: 34000,
        baseExp: 750000,
        acc: 95,
        eva: 10,
        name: "CrystalFloater",
        displayName: "Crystal Floater",
        type: "boss",
        id: 41,
        level: 145,
        area: "FrigidAberration",
        isShown: false,
        killCount: 0,
        manaCost: 4400
    };
    monsterList.CrystalFloater = CrystalFloater;
    SnowWatcher.Stats = {
        hp: 1000000,
        maxHp: 1000000,
        def: 330,
        minDmg: 34000,
        maxDmg: 36000,
        baseExp: 850000,
        acc: 95,
        eva: 10,
        name: "SnowWatcher",
        displayName: "Snow Watcher",
        type: "boss",
        id: 42,
        level: 150,
        area: "FrigidAberration",
        isShown: false,
        killCount: 0,
        manaCost: 4600
    };
    monsterList.SnowWatcher = SnowWatcher;
    CannibalTribeTrachid.Stats = {
        hp: 1200000,
        maxHp: 1200000,
        def: 340,
        minDmg: 36000,
        maxDmg: 38000,
        baseExp: 900000,
        acc: 95,
        eva: 10,
        name: "CannibalTribeTrachid",
        displayName: "Cannibal Tribe, Trachid",
        type: "boss",
        id: 43,
        level: 155,
        area: "FrigidAberration",
        isShown: false,
        killCount: 0,
        manaCost: 4800
    };
    monsterList.CannibalTribeTrachid = CannibalTribeTrachid;
    LegendoftheRageCalm.Stats = {
        hp: 1400000,
        maxHp: 1400000,
        def: 350,
        minDmg: 38000,
        maxDmg: 40000,
        baseExp: 1000000,
        acc: 95,
        eva: 10,
        name: "LegendoftheRageCalm",
        displayName: "Legend of the Rage, Calm",
        type: "boss",
        id: 44,
        level: 160,
        area: "FrigidAberration",
        isShown: false,
        killCount: 0,
        manaCost: 5000
    };
    monsterList.LegendoftheRageCalm = LegendoftheRageCalm;
    IceGiantKing.Stats = {
        hp: 1600000,
        maxHp: 1600000,
        def: 360,
        minDmg: 40000,
        maxDmg: 42000,
        baseExp: 1200000,
        acc: 95,
        eva: 10,
        name: "IceGiantKing",
        displayName: "Ice Giant King",
        type: "boss",
        id: 45,
        level: 165,
        area: "FrigidAberration",
        isShown: false,
        killCount: 0,
        manaCost: 5200
    };
    monsterList.IceGiantKing = IceGiantKing;
    FrightGolem.Stats = {
        hp: 1800000,
        maxHp: 1800000,
        def: 370,
        minDmg: 42000,
        maxDmg: 44000,
        baseExp: 1400000,
        acc: 95,
        eva: 10,
        name: "FrightGolem",
        displayName: "Fright Golem",
        type: "boss",
        id: 46,
        level: 170,
        area: "FrigidAberration",
        isShown: false,
        killCount: 0,
        manaCost: 5400
    };
    monsterList.FrightGolem = FrightGolem;
    FrightGolemArmy.Stats = {
        hp: 2000000,
        maxHp: 2000000,
        def: 380,
        minDmg: 44000,
        maxDmg: 46000,
        baseExp: 1600000,
        acc: 95,
        eva: 10,
        name: "FrightGolemArmy",
        displayName: "Fright Golem Army",
        type: "boss",
        id: 47,
        level: 175,
        area: "FrigidAberration",
        isShown: false,
        killCount: 0,
        manaCost: 5600
    };
    monsterList.FrightGolemArmy = FrightGolemArmy;
    LegendoftheRageFullPower.Stats = {
        hp: 2200000,
        maxHp: 2200000,
        def: 390,
        minDmg: 46000,
        maxDmg: 48000,
        baseExp: 1800000,
        acc: 95,
        eva: 10,
        name: "LegendoftheRageFullPower",
        displayName: "Legend of the Rage, Full Power",
        type: "boss",
        id: 48,
        level: 180,
        area: "FrigidAberration",
        isShown: false,
        killCount: 0,
        manaCost: 5800
    };
    monsterList.LegendoftheRageFullPower = LegendoftheRageFullPower;
    LegionofDreadWallGuards.Stats = {
        hp: 2500000,
        maxHp: 2500000,
        def: 400,
        minDmg: 48000,
        maxDmg: 50000,
        baseExp: 2000000,
        acc: 95,
        eva: 10,
        name: "LegionofDreadWallGuards",
        displayName: "Legion of Dread, Wall Guards",
        type: "boss",
        id: 49,
        level: 185,
        area: "Zyzx",
        isShown: false,
        killCount: 0,
        manaCost: 6000
    };
    monsterList.LegionofDreadWallGuards = LegionofDreadWallGuards;
    Dreadnaughts.Stats = {
        hp: 3000000,
        maxHp: 3000000,
        def: 420,
        minDmg: 50000,
        maxDmg: 55000,
        baseExp: 2200000,
        acc: 95,
        eva: 10,
        name: "Dreadnaughts",
        displayName: "Dreadnaughts",
        type: "boss",
        id: 50,
        level: 190,
        area: "Zyzx",
        isShown: false,
        killCount: 0,
        manaCost: 6200
    };
    monsterList.Dreadnaughts = Dreadnaughts;
    DreadnaughtElite.Stats = {
        hp: 3500000,
        maxHp: 3500000,
        def: 440,
        minDmg: 55000,
        maxDmg: 60000,
        baseExp: 2400000,
        acc: 95,
        eva: 10,
        name: "DreadnaughtElite",
        displayName: "Dreadnaught Elite",
        type: "boss",
        id: 51,
        level: 195,
        area: "Zyzx",
        isShown: false,
        killCount: 0,
        manaCost: 6400
    };
    monsterList.DreadnaughtElite = DreadnaughtElite;
    EmaciatedMagi.Stats = {
        hp: 4000000,
        maxHp: 4000000,
        def: 460,
        minDmg: 60000,
        maxDmg: 65000,
        baseExp: 2600000,
        acc: 95,
        eva: 10,
        name: "EmaciatedMagi",
        displayName: "Emaciated Magi",
        type: "boss",
        id: 52,
        level: 200,
        area: "Zyzx",
        isShown: false,
        killCount: 0,
        manaCost: 6600
    };
    monsterList.EmaciatedMagi = EmaciatedMagi;
    MagiThunderCallers.Stats = {
        hp: 4500000,
        maxHp: 4500000,
        def: 480,
        minDmg: 65000,
        maxDmg: 70000,
        baseExp: 2800000,
        acc: 95,
        eva: 10,
        name: "MagiThunderCallers",
        displayName: "Magi Thunder Callers",
        type: "boss",
        id: 53,
        level: 210,
        area: "Zyzx",
        isShown: false,
        killCount: 0,
        manaCost: 6800
    };
    monsterList.MagiThunderCallers = MagiThunderCallers;
    FalseDragonSlayers.Stats = {
        hp: 5000000,
        maxHp: 5000000,
        def: 500,
        minDmg: 77777,
        maxDmg: 77777,
        baseExp: 30000000,
        acc: 95,
        eva: 10,
        name: "FalseDragonSlayers",
        displayName: "False Dragon Slayers",
        type: "boss",
        id: 54,
        level: 220,
        area: "Zyzx",
        isShown: false,
        killCount: 0,
        manaCost: 7000
    };
    monsterList.FalseDragonSlayers = FalseDragonSlayers;
    TorturedBeholder.Stats = {
        hp: 7777777,
        maxHp: 7777777,
        def: 520,
        minDmg: 88888,
        maxDmg: 88888,
        baseExp: 3200000,
        acc: 95,
        eva: 10,
        name: "TorturedBeholder",
        displayName: "Tortured Beholder",
        type: "boss",
        id: 55,
        level: 230,
        area: "Zyzx",
        isShown: false,
        killCount: 0,
        manaCost: 7200
    };
    monsterList.TorturedBeholder = TorturedBeholder;
    KingoftheLegionGrantBannecs.Stats = {
        hp: 9999999,
        maxHp: 9999999,
        def: 999,
        minDmg: 99999,
        maxDmg: 99999,
        baseExp: 3400000,
        acc: 95,
        eva: 10,
        name: "KingoftheLegionGrantBannecs",
        displayName: "King of the Legion, Grant Bannecs",
        type: "boss",
        id: 56,
        level: 240,
        area: "Zyzx",
        isShown: false,
        killCount: 0,
        manaCost: 7777
    };
    monsterList.KingoftheLegionGrantBannecs = KingoftheLegionGrantBannecs;
};

MakeMonsterList();