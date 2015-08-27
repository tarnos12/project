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

//Minerals
var Thaumerite = {};
var LiteCyan = {};
var OhmStone = {};
var Techtite = {};
var XilBond = {};
var VulcanatedIron = {};

function MakeMonsterList() {
    VarikGrunt.Stats = {
        hp: 75,
        maxHp: 75,
        def: 0,
        minDmg: 7,
        maxDmg: 12,
        baseExp: 20,
        acc: 95,
        eva: 5,
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
        hp: 140,
        maxHp: 140,
        def: 2,
        minDmg: 10,
        maxDmg: 15,
        baseExp: 40,
        acc: 95,
        eva: 5,
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
        hp: 220,
        maxHp: 220,
        def: 5,
        minDmg: 16,
        maxDmg: 22,
        baseExp: 80,
        acc: 95,
        eva: 5,
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
        hp: 350,
        maxHp: 350,
        def: 8,
        minDmg: 20,
        maxDmg: 25,
        baseExp: 140,
        acc: 95,
        eva: 5,
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
        hp: 500,
        maxHp: 500,
        def: 10,
        minDmg: 25,
        maxDmg: 30,
        baseExp: 200,
        acc: 95,
        eva: 5,
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
        hp: 750,
        maxHp: 750,
        def: 15,
        minDmg: 35,
        maxDmg: 40,
        baseExp: 340,
        acc: 95,
        eva: 5,
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
        hp: 950,
        maxHp: 950,
        def: 20,
        minDmg: 45,
        maxDmg: 60,
        baseExp: 450,
        acc: 95,
        eva: 5,
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
        minDmg: 70,
        maxDmg: 90,
        baseExp: 650,
        acc: 95,
        eva: 5,
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
        minDmg: 50,
        maxDmg: 65,
        baseExp: 850,
        acc: 95,
        eva: 5,
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
        minDmg: 70,
        maxDmg: 85,
        baseExp: 1100,
        acc: 95,
        eva: 5,
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
        minDmg: 90,
        maxDmg: 110,
        baseExp: 1400,
        acc: 95,
        eva: 5,
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
        minDmg: 110,
        maxDmg: 140,
        baseExp: 1800,
        acc: 95,
        eva: 5,
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
        minDmg: 130,
        maxDmg: 160,
        baseExp: 2500,
        acc: 95,
        eva: 5,
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
        hp: 4000,
        maxHp: 4000,
        def: 60,
        minDmg: 150,
        maxDmg: 175,
        baseExp: 3200,
        acc: 95,
        eva: 5,
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
        hp: 4800,
        maxHp: 4800,
        def: 70,
        minDmg: 180,
        maxDmg: 210,
        baseExp: 4000,
        acc: 95,
        eva: 5,
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
        hp: 6000,
        maxHp: 6000,
        def: 80,
        minDmg: 220,
        maxDmg: 240,
        baseExp: 6000,
        acc: 95,
        eva: 5,
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
        hp: 7500,
        maxHp: 7500,
        def: 90,
        minDmg: 200,
        maxDmg: 220,
        baseExp: 7000,
        acc: 95,
        eva: 5,
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
        hp: 9000,
        maxHp: 9000,
        def: 100,
        minDmg: 230,
        maxDmg: 250,
        baseExp: 8500,
        acc: 95,
        eva: 5,
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
        hp: 11000,
        maxHp: 11000,
        def: 110,
        minDmg: 270,
        maxDmg: 300,
        baseExp: 10000,
        acc: 95,
        eva: 5,
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
        hp: 13000,
        maxHp: 13000,
        def: 120,
        minDmg: 300,
        maxDmg: 350,
        baseExp: 13000,
        acc: 95,
        eva: 5,
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
        hp: 16000,
        maxHp: 16000,
        def: 130,
        minDmg: 350,
        maxDmg: 420,
        baseExp: 15000,
        acc: 95,
        eva: 5,
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
        hp: 20000,
        maxHp: 20000,
        def: 140,
        minDmg: 400,
        maxDmg: 450,
        baseExp: 18000,
        acc: 95,
        eva: 5,
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
        hp: 25000,
        maxHp: 25000,
        def: 150,
        minDmg: 440,
        maxDmg: 500,
        baseExp: 25000,
        acc: 95,
        eva: 5,
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
        hp: 33333,
        maxHp: 33333,
        def: 200,
        minDmg: 500,
        maxDmg: 700,
        baseExp: 40000,
        acc: 95,
        eva: 5,
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
        hp: 35000,
        maxHp: 35000,
        def: 160,
        minDmg: 500,
        maxDmg: 600,
        baseExp: 45000,
        acc: 95,
        eva: 5,
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
        hp: 40000,
        maxHp: 40000,
        def: 170,
        minDmg: 600,
        maxDmg: 700,
        baseExp: 55000,
        acc: 95,
        eva: 5,
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
        hp: 50000,
        maxHp: 50000,
        def: 180,
        minDmg: 700,
        maxDmg: 800,
        baseExp: 65000,
        acc: 95,
        eva: 5,
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
        hp: 60000,
        maxHp: 60000,
        def: 190,
        minDmg: 800,
        maxDmg: 900,
        baseExp: 75000,
        acc: 95,
        eva: 5,
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
        hp: 75000,
        maxHp: 75000,
        def: 200,
        minDmg: 900,
        maxDmg: 1000,
        baseExp: 85000,
        acc: 95,
        eva: 5,
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
        hp: 90000,
        maxHp: 90000,
        def: 210,
        minDmg: 1000,
        maxDmg: 1100,
        baseExp: 100000,
        acc: 95,
        eva: 5,
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
        hp: 110000,
        maxHp: 110000,
        def: 220,
        minDmg: 1100,
        maxDmg: 1250,
        baseExp: 115000,
        acc: 95,
        eva: 5,
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
        hp: 133700,
        maxHp: 133700,
        def: 230,
        minDmg: 1337,
        maxDmg: 1337,
        baseExp: 130000,
        acc: 95,
        eva: 5,
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
        hp: 160000,
        maxHp: 160000,
        def: 240,
        minDmg: 1400,
        maxDmg: 1500,
        baseExp: 150000,
        acc: 95,
        eva: 5,
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
        hp: 185000,
        maxHp: 185000,
        def: 250,
        minDmg: 1600,
        maxDmg: 1800,
        baseExp: 175000,
        acc: 95,
        eva: 5,
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
        hp: 200000,
        maxHp: 200000,
        def: 260,
        minDmg: 1800,
        maxDmg: 2000,
        baseExp: 200000,
        acc: 95,
        eva: 5,
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
        hp: 220000,
        maxHp: 220000,
        def: 270,
        minDmg: 2000,
        maxDmg: 2200,
        baseExp: 220000,
        acc: 95,
        eva: 5,
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
        hp: 240000,
        maxHp: 240000,
        def: 280,
        minDmg: 2200,
        maxDmg: 2400,
        baseExp: 250000,
        acc: 95,
        eva: 5,
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
        hp: 260000,
        maxHp: 260000,
        def: 290,
        minDmg: 2400,
        maxDmg: 2600,
        baseExp: 270000,
        acc: 95,
        eva: 5,
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
        hp: 280000,
        maxHp: 280000,
        def: 300,
        minDmg: 2600,
        maxDmg: 2800,
        baseExp: 300000,
        acc: 95,
        eva: 5,
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
        hp: 300000,
        maxHp: 300000,
        def: 310,
        minDmg: 3000,
        maxDmg: 3200,
        baseExp: 320000,
        acc: 95,
        eva: 5,
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
        hp: 320000,
        maxHp: 320000,
        def: 320,
        minDmg: 3200,
        maxDmg: 3400,
        baseExp: 340000,
        acc: 95,
        eva: 5,
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
        hp: 340000,
        maxHp: 340000,
        def: 330,
        minDmg: 3400,
        maxDmg: 3600,
        baseExp: 360000,
        acc: 95,
        eva: 5,
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
        hp: 360000,
        maxHp: 360000,
        def: 340,
        minDmg: 3600,
        maxDmg: 3800,
        baseExp: 380000,
        acc: 95,
        eva: 5,
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
        hp: 380000,
        maxHp: 380000,
        def: 350,
        minDmg: 3800,
        maxDmg: 4000,
        baseExp: 400000,
        acc: 95,
        eva: 5,
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
        hp: 400000,
        maxHp: 400000,
        def: 360,
        minDmg: 4000,
        maxDmg: 4200,
        baseExp: 430000,
        acc: 95,
        eva: 5,
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
        hp: 420000,
        maxHp: 420000,
        def: 370,
        minDmg: 4200,
        maxDmg: 4400,
        baseExp: 450000,
        acc: 95,
        eva: 5,
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
        hp: 440000,
        maxHp: 440000,
        def: 380,
        minDmg: 4400,
        maxDmg: 4600,
        baseExp: 470000,
        acc: 95,
        eva: 5,
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
        hp: 460000,
        maxHp: 460000,
        def: 390,
        minDmg: 4600,
        maxDmg: 4800,
        baseExp: 500000,
        acc: 95,
        eva: 5,
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
        hp: 480000,
        maxHp: 480000,
        def: 400,
        minDmg: 4800,
        maxDmg: 5000,
        baseExp: 550000,
        acc: 95,
        eva: 5,
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
        hp: 500000,
        maxHp: 500000,
        def: 420,
        minDmg: 5000,
        maxDmg: 5500,
        baseExp: 600000,
        acc: 95,
        eva: 5,
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
        hp: 550000,
        maxHp: 550000,
        def: 440,
        minDmg: 5500,
        maxDmg: 6000,
        baseExp: 700000,
        acc: 95,
        eva: 5,
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
        hp: 600000,
        maxHp: 600000,
        def: 460,
        minDmg: 6000,
        maxDmg: 6500,
        baseExp: 800000,
        acc: 95,
        eva: 5,
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
        hp: 650000,
        maxHp: 650000,
        def: 480,
        minDmg: 6500,
        maxDmg: 7000,
        baseExp: 900000,
        acc: 95,
        eva: 5,
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
        hp: 777777,
        maxHp: 777777,
        def: 500,
        minDmg: 7777,
        maxDmg: 7777,
        baseExp: 1000000,
        acc: 95,
        eva: 5,
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
        hp: 888888,
        maxHp: 888888,
        def: 520,
        minDmg: 8888,
        maxDmg: 8888,
        baseExp: 1100000,
        acc: 95,
        eva: 5,
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
        hp: 999999,
        maxHp: 999999,
        def: 555,
        minDmg: 9999,
        maxDmg: 9999,
        baseExp: 1200000,
        acc: 95,
        eva: 5,
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



    //Minerals
    Thaumerite.Stats = {
        hp: 10,
        maxHp: 10,
        def: 0,
        minDmg: 0,
        maxDmg: 0,
        baseExp: 5,
        acc: 0,
        eva: 100,
        name: "Thaumerite", // Must equal object name Ore = Ore...
        displayName: "Thaumerite",
        type: "mining",
        id: 95,
        level: 1,
        area: "Mining",
        isShown: true,
        killCount: 0,
        manaCost: 9999
    };
    monsterList.Thaumerite = Thaumerite;

    LiteCyan.Stats = {
        hp: 100,
        maxHp: 100,
        def: 0,
        minDmg: 0,
        maxDmg: 0,
        baseExp: 10,
        acc: 0,
        eva: 100,
        name: "LiteCyan", // Must equal object name Ore = Ore...
        displayName: "Lite Cyan",
        type: "mining",
        id: 96,
        level: 1,
        area: "Mining",
        isShown: false,
        killCount: 0,
        manaCost: 9999
    };
    monsterList.LiteCyan = LiteCyan;

    OhmStone.Stats = {
        hp: 200,
        maxHp: 200,
        def: 0,
        minDmg: 0,
        maxDmg: 0,
        baseExp: 20,
        acc: 0,
        eva: 100,
        name: "OhmStone", // Must equal object name Ore = Ore...
        displayName: "Ohm Stone",
        type: "mining",
        id: 97,
        level: 1,
        area: "Mining",
        isShown: false,
        killCount: 0,
        manaCost: 9999
    };
    monsterList.OhmStone = OhmStone;

    Techtite.Stats = {
        hp: 500,
        maxHp: 500,
        def: 0,
        minDmg: 0,
        maxDmg: 0,
        baseExp: 50,
        acc: 0,
        eva: 100,
        name: "Techtite", // Must equal object name Ore = Ore...
        displayName: "Techtite",
        type: "mining",
        id: 98,
        level: 1,
        area: "Mining",
        isShown: false,
        killCount: 0,
        manaCost: 9999
    };
    monsterList.Techtite = Techtite;

    XilBond.Stats = {
        hp: 1337,
        maxHp: 1337,
        def: 0,
        minDmg: 0,
        maxDmg: 0,
        baseExp: 100,
        acc: 0,
        eva: 100,
        name: "XilBond", // Must equal object name Ore = Ore...
        displayName: "Xil Bond",
        type: "mining",
        id: 99,
        level: 1,
        area: "Mining",
        isShown: false,
        killCount: 0,
        manaCost: 9999
    };
    monsterList.XilBond = XilBond;

    VulcanatedIron.Stats = {
        hp: 3000,
        maxHp: 3000,
        def: 0,
        minDmg: 0,
        maxDmg: 0,
        baseExp: 200,
        acc: 0,
        eva: 100,
        name: "VulcanatedIron", // Must equal object name Ore = Ore...
        displayName: "Vulcanated Iron",
        type: "mining",
        id: 100,
        level: 1,
        area: "Mining",
        isShown: false,
        killCount: 0,
        manaCost: 9999
    };
    monsterList.VulcanatedIron = VulcanatedIron;
};

MakeMonsterList();