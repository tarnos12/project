ItemList = {};
function MakeItemList() {
    Weapons = {};
    //Weapons
    Weapons.ShortSword = {
        name: 'Short Sword',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'Sword',
        color: 'black',
        image: 'ShortSword',
        iLvl: 1,
        baseMinDamage: 2,
        baseMaxDamage: 4,
        baseStrength: 1,
        baseAgility: 2,
        value: 15
    };
    Weapons.HandAxe = {
        name: 'Hand Axe',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'Axe',
        color: 'black',
        image: 'HandAxe',
        iLvl: 1,
        baseMinDamage: 1,
        baseMaxDamage: 5,
        baseStrength: 2,
        baseAgility: 1,
        value: 20
    };
    Weapons.BroadSword = {
        name: 'Broad Sword',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'Sword',
        color: 'green',
        image: 'BroadSword',
        iLvl: 2,
        baseMinDamage: 4,
        baseMaxDamage: 6,
        baseStrength: 3,
        baseAgility: 4,
        value: 45
    };
    Weapons.BroadAxe = {
        name: 'Broad Axe',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'Axe',
        color: 'green',
        image: 'BroadAxe',
        iLvl: 2,
        baseMinDamage: 2,
        baseMaxDamage: 8,
        baseStrength: 4,
        baseAgility: 3,
        value: 50
    };
    Weapons.GreatSword = {
        name: 'Great Sword',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'Sword',
        color: 'blue',
        image: 'GreatSword',
        iLvl: 3,
        baseMinDamage: 8,
        baseMaxDamage: 11,
        baseStrength: 6,
        baseAgility: 8,
        value: 110
    };
    Weapons.MilitaryAxe = {
        name: 'Military Axe',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'Axe',
        color: 'blue',
        image: 'MilitaryAxe',
        iLvl: 3,
        baseMinDamage: 5,
        baseMaxDamage: 14,
        baseStrength: 8,
        baseAgility: 4,
        value: 130
    };
    Weapons.Scimitar = {
        name: 'Scimitar',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'Sword',
        color: 'black',
        image: 'Scimitar',
        iLvl: 6,
        baseMinDamage: 18,
        baseMaxDamage: 23,
        baseStrength: 20,
        baseAgility: 8,
        baseEndurance: 10,
        value: 700
    };
    Weapons.DoubleAxe = {
        name: 'Double Axe',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'Axe',
        color: 'black',
        image: 'DoubleAxe',
        iLvl: 6,
        baseMinDamage: 12,
        baseMaxDamage: 25,
        baseStrength: 28,
        baseAgility: 6,
        baseEndurance: 8,
        value: 800
    };
    Weapons.LongSword = {
        name: 'Long Sword',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'Sword',
        color: 'green',
        image: 'LongSword',
        iLvl: 7,
        baseMinDamage: 25,
        baseMaxDamage: 30,
        baseStrength: 30,
        baseAgility: 14,
        baseEndurance: 15,
        value: 900
    };
    Weapons.BattleAxe = {
        name: 'Battle Axe',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'Axe',
        color: 'green',
        image: 'BattleAxe',
        iLvl: 7,
        baseMinDamage: 18,
        baseMaxDamage: 33,
        baseStrength: 38,
        baseAgility: 10,
        baseEndurance: 12,
        value: 1100
    };
    Weapons.Gladius = {
        name: 'Gladius',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'Sword',
        color: 'blue',
        image: 'Gladius',
        iLvl: 8,
        baseMinDamage: 36,
        baseMaxDamage: 42,
        baseStrength: 38,
        baseAgility: 20,
        baseEndurance: 20,
        value: 1400
    };
    Weapons.BeardedAxe = {
        name: 'Bearded Axe',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'Axe',
        color: 'blue',
        image: 'BeardedAxe',
        iLvl: 8,
        baseMinDamage: 25,
        baseMaxDamage: 40,
        baseStrength: 48,
        baseAgility: 14,
        baseEndurance: 18,
        value: 1500
    };
    Weapons.Sabre = {
        name: 'Sabre',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'Sword',
        color: 'black',
        image: 'Sabre',
        iLvl: 11,
        baseMinDamage: 40,
        baseMaxDamage: 45,
        baseStrength: 50,
        baseAgility: 30,
        baseEndurance: 35,
        value: 2000
    };
    Weapons.WarAxe = {
        name: 'War Axe',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'Axe',
        color: 'black',
        image: 'WarAxe',
        iLvl: 11,
        baseMinDamage: 40,
        baseMaxDamage: 60,
        baseStrength: 60,
        baseAgility: 20,
        baseEndurance: 30,
        value: 2000
    };
    Weapons.Claymore = {
        name: 'Claymore',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'Sword',
        color: 'green',
        image: 'Claymore',
        iLvl: 12,
        baseMinDamage: 50,
        baseMaxDamage: 55,
        baseStrength: 60,
        baseAgility: 40,
        baseEndurance: 45,
        value: 2400
    };
    Weapons.GreatAxe = {
        name: 'Great Axe',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'Axe',
        color: 'green',
        image: 'GreatAxe',
        iLvl: 12,
        baseMinDamage: 50,
        baseMaxDamage: 70,
        baseStrength: 70,
        baseAgility: 30,
        baseEndurance: 40,
        value: 3000
    };
    Weapons.RuneSword = {
        name: 'Rune Sword',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'Sword',
        color: 'blue',
        image: 'RuneSword',
        iLvl: 13,
        baseMinDamage: 65,
        baseMaxDamage: 70,
        baseStrength: 75,
        baseAgility: 50,
        baseEndurance: 60,
        value: 3000
    };
    Weapons.GothicAxe = {
        name: 'Gothic Axe',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'Axe',
        color: 'blue',
        image: 'GothicAxe',
        iLvl: 13,
        baseMinDamage: 60,
        baseMaxDamage: 90,
        baseStrength: 90,
        baseAgility: 50,
        baseEndurance: 50,
        value: 4000
    };
    Weapons.Falchion = {
        name: 'Falchion',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'Sword',
        color: 'black',
        image: 'Falchion',
        iLvl: 16,
        baseMinDamage: 70,
        baseMaxDamage: 75,
        baseStrength: 80,
        baseAgility: 60,
        baseEndurance: 70,
        value: 4000
    };
    Weapons.LargeAxe = {
        name: 'Large Axe',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'Axe',
        color: 'black',
        image: 'LargeAxe',
        iLvl: 16,
        baseMinDamage: 80,
        baseMaxDamage: 110,
        baseStrength: 90,
        baseAgility: 60,
        baseEndurance: 70,
        value: 6000
    };
    Weapons.WarSword = {
        name: 'War Sword',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'Sword',
        color: 'green',
        image: 'WarSword',
        iLvl: 17,
        baseMinDamage: 80,
        baseMaxDamage: 85,
        baseStrength: 90,
        baseAgility: 70,
        baseEndurance: 80,
        value: 5000
    };
    Weapons.Cleaver = {
        name: 'Cleaver',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'Axe',
        color: 'green',
        image: 'Cleaver',
        iLvl: 17,
        baseMinDamage: 100,
        baseMaxDamage: 140,
        baseStrength: 120,
        baseAgility: 80,
        baseEndurance: 90,
        value: 7500
    };
    Weapons.AncientSword = {
        name: 'Ancient Sword',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'Sword',
        color: 'blue',
        image: 'AncientSword',
        iLvl: 18,
        baseMinDamage: 100,
        baseMaxDamage: 110,
        baseStrength: 110,
        baseAgility: 90,
        baseEndurance: 90,
        value: 6500
    };
    Weapons.Tabar = {
        name: 'Tabar',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'Axe',
        color: 'blue',
        image: 'Tabar',
        iLvl: 18,
        baseMinDamage: 140,
        baseMaxDamage: 180,
        baseStrength: 150,
        baseAgility: 100,
        baseEndurance: 110,
        value: 9000
    };
    Weapons.Club = {
        name: 'Club',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'Mace',
        color: 'black',
        image: 'Club',
        iLvl: 1,
        baseMinDamage: 2,
        baseMaxDamage: 5,
        baseStrength: 2,
        baseEndurance: 1,
        baseWisdom: 1,
        value: 30
    };
    Weapons.WarHammer = {
        name: 'War Hammer',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'Mace',
        color: 'green',
        image: 'WarHammer',
        iLvl: 2,
        baseMinDamage: 5,
        baseMaxDamage: 7,
        baseStrength: 4,
        baseEndurance: 2,
        baseWisdom: 2,
        value: 90
    };
    Weapons.JaggedStar = {
        name: 'Jagged Star',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'Mace',
        color: 'blue',
        image: 'JaggedStar',
        iLvl: 3,
        baseMinDamage: 8,
        baseMaxDamage: 12,
        baseStrength: 7,
        baseEndurance: 4,
        baseWisdom: 4,
        value: 220
    };
    Weapons.SpikedClub = {
        name: 'Spiked Club',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'Mace',
        color: 'black',
        image: 'SpikedClub',
        iLvl: 6,
        baseMinDamage: 13,
        baseMaxDamage: 16,
        baseStrength: 14,
        baseEndurance: 8,
        baseWisdom: 6,
        value: 500
    };
    Weapons.Maul = {
        name: 'Maul',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'Mace',
        color: 'green',
        image: 'Maul',
        iLvl: 7,
        baseMinDamage: 17,
        baseMaxDamage: 20,
        baseStrength: 18,
        baseEndurance: 10,
        baseWisdom: 8,
        value: 700
    };
    Weapons.BattleHammer = {
        name: 'Battle Hammer',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'Mace',
        color: 'blue',
        image: 'BattleHammer',
        iLvl: 8,
        baseMinDamage: 24,
        baseMaxDamage: 28,
        baseStrength: 26,
        baseEndurance: 16,
        baseWisdom: 14,
        value: 1100
    };
    Weapons.MorningStar = {
        name: 'Morning Star',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'Mace',
        color: 'black',
        image: 'MorningStar',
        iLvl: 11,
        baseMinDamage: 30,
        baseMaxDamage: 40,
        baseStrength: 35,
        baseEndurance: 20,
        baseWisdom: 25,
        value: 1500
    };
    Weapons.GreatMaul = {
        name: 'Great Maul',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'Mace',
        color: 'green',
        image: 'GreatMaul',
        iLvl: 12,
        baseMinDamage: 40,
        baseMaxDamage: 55,
        baseStrength: 45,
        baseEndurance: 30,
        baseWisdom: 35,
        value: 2000
    };
    Weapons.WarClub = {
        name: 'War Club',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'Mace',
        color: 'blue',
        image: 'WarClub',
        iLvl: 13,
        baseMinDamage: 50,
        baseMaxDamage: 65,
        baseStrength: 55,
        baseEndurance: 40,
        baseWisdom: 50,
        value: 3500
    };
    Weapons.Flail = {
        name: 'Flail',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'Mace',
        color: 'black',
        image: 'Flail',
        iLvl: 16,
        baseMinDamage: 70,
        baseMaxDamage: 85,
        baseStrength: 60,
        baseEndurance: 50,
        baseWisdom: 50,
        value: 4000
    };
    Weapons.Cudgel = {
        name: 'Cudgel',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'Mace',
        color: 'green',
        image: 'Cudgel',
        iLvl: 17,
        baseMinDamage: 90,
        baseMaxDamage: 110,
        baseStrength: 80,
        baseEndurance: 70,
        baseWisdom: 70,
        value: 5000
    };
    Weapons.Trucheon = {
        name: 'Trucheon',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'Mace',
        color: 'blue',
        image: 'Trucheon',
        iLvl: 18,
        baseMinDamage: 120,
        baseMaxDamage: 140,
        baseStrength: 110,
        baseEndurance: 90,
        baseWisdom: 100,
        value: 7500
    };
    Weapons.ShortStaff = {
        name: 'Short Staff',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'Staff',
        color: 'black',
        image: 'ShortStaff',
        iLvl: 1,
        baseMinDamage: 1,
        baseMaxDamage: 3,
        baseEndurance: 1,
        baseWisdom: 1,
        baseIntelligence: 3,
        value: 40
    };
    Weapons.GrimWand = {
        name: 'Grim Wand',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'Staff',
        color: 'green',
        image: 'GrimWand',
        iLvl: 2,
        baseMinDamage: 2,
        baseMaxDamage: 5,
        baseEndurance: 2,
        baseWisdom: 1,
        baseIntelligence: 7,
        value: 100
    };
    Weapons.JoStaff = {
        name: 'Jo Staff',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'Staff',
        color: 'blue',
        image: 'JoStaff',
        iLvl: 3,
        baseMinDamage: 4,
        baseMaxDamage: 9,
        baseEndurance: 4,
        baseWisdom: 2,
        baseIntelligence: 12,
        value: 200
    };
    Weapons.LongStaff = {
        name: 'Long Staff',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'Staff',
        color: 'black',
        image: 'LongStaff',
        iLvl: 6,
        baseMinDamage: 7,
        baseMaxDamage: 13,
        baseEndurance: 7,
        baseWisdom: 4,
        baseIntelligence: 25,
        value: 700
    };
    Weapons.BurntWand = {
        name: 'Burnt Wand',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'Staff',
        color: 'green',
        image: 'BurntWand',
        iLvl: 7,
        baseMinDamage: 10,
        baseMaxDamage: 16,
        baseEndurance: 10,
        baseWisdom: 7,
        baseIntelligence: 30,
        value: 900
    };
    Weapons.QuaterStaff = {
        name: 'Quater Staff',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'Staff',
        color: 'blue',
        image: 'QuaterStaff',
        iLvl: 8,
        baseMinDamage: 14,
        baseMaxDamage: 20,
        baseEndurance: 15,
        baseWisdom: 12,
        baseIntelligence: 45,
        value: 1200
    };
    Weapons.Wand = {
        name: 'Wand',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'Staff',
        color: 'black',
        image: 'Wand',
        iLvl: 11,
        baseMinDamage: 15,
        baseMaxDamage: 19,
        baseEndurance: 20,
        baseWisdom: 15,
        baseIntelligence: 60,
        value: 2000
    };
    Weapons.GnarledStaff = {
        name: 'Gnarled Staff',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'Staff',
        color: 'green',
        image: 'GnarledStaff',
        iLvl: 12,
        baseMinDamage: 20,
        baseMaxDamage: 28,
        baseEndurance: 35,
        baseWisdom: 25,
        baseIntelligence: 70,
        value: 2500
    };
    Weapons.ArchonStaff = {
        name: 'Archon Staff',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'Staff',
        color: 'blue',
        image: 'ArchonStaff',
        iLvl: 13,
        baseMinDamage: 25,
        baseMaxDamage: 32,
        baseEndurance: 45,
        baseWisdom: 30,
        baseIntelligence: 100,
        value: 3500
    };
    Weapons.YewWand = {
        name: 'Yew Wand',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'Staff',
        color: 'black',
        image: 'YewWand',
        iLvl: 16,
        baseMinDamage: 35,
        baseMaxDamage: 45,
        baseEndurance: 50,
        baseWisdom: 30,
        baseIntelligence: 120,
        value: 4500
    };
    Weapons.LichStaff = {
        name: 'Lich Staff',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'Staff',
        color: 'green',
        image: 'LichStaff',
        iLvl: 17,
        baseMinDamage: 45,
        baseMaxDamage: 55,
        baseEndurance: 70,
        baseWisdom: 50,
        baseIntelligence: 150,
        value: 5500
    };
    Weapons.GothicStaff = {
        name: 'Gothic Staff',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'Staff',
        color: 'blue',
        image: 'GothicStaff',
        iLvl: 18,
        baseMinDamage: 55,
        baseMaxDamage: 70,
        baseEndurance: 90,
        baseWisdom: 75,
        baseIntelligence: 200,
        value: 8000
    };
    Weapons.ShortBow = {
        name: 'Short Bow',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'Ranged',
        color: 'black',
        image: 'ShortBow',
        iLvl: 1,
        baseMinDamage: 2,
        baseMaxDamage: 6,
        baseStrength: 1,
        baseAgility: 1,
        baseDexterity: 3,
        value: 40
    };
    Weapons.ShortBattleBow = {
        name: 'Short Battle Bow',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'Ranged',
        color: 'green',
        image: 'ShortBattleBow',
        iLvl: 2,
        baseMinDamage: 5,
        baseMaxDamage: 9,
        baseStrength: 3,
        baseAgility: 2,
        baseDexterity: 5,
        value: 110
    };
    Weapons.RazorBow = {
        name: 'Razor Bow',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'Ranged',
        color: 'blue',
        image: 'RazorBow',
        iLvl: 3,
        baseMinDamage: 8,
        baseMaxDamage: 13,
        baseStrength: 5,
        baseAgility: 4,
        baseDexterity: 9,
        value: 240
    };
    Weapons.HuntersBow = {
        name: 'Hunter\'s Bow',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'Ranged',
        color: 'black',
        image: 'HuntersBow',
        iLvl: 6,
        baseMinDamage: 15,
        baseMaxDamage: 25,
        baseStrength: 10,
        baseAgility: 8,
        baseDexterity: 20,
        value: 700
    };
    Weapons.LongBattleBow = {
        name: 'Long Battle Bow',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'Ranged',
        color: 'green',
        image: 'LongBattleBow',
        iLvl: 7,
        baseMinDamage: 20,
        baseMaxDamage: 32,
        baseStrength: 15,
        baseAgility: 14,
        baseDexterity: 28,
        value: 900
    };
    Weapons.CedarBow = {
        name: 'Cedar Bow',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'Ranged',
        color: 'blue',
        image: 'CedarBow',
        iLvl: 8,
        baseMinDamage: 28,
        baseMaxDamage: 39,
        baseStrength: 22,
        baseAgility: 20,
        baseDexterity: 38,
        value: 1200
    };
    Weapons.LongBow = {
        name: 'Long Bow',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'Ranged',
        color: 'black',
        image: 'LongBow',
        iLvl: 11,
        baseMinDamage: 40,
        baseMaxDamage: 60,
        baseStrength: 30,
        baseAgility: 30,
        baseDexterity: 40,
        value: 1700
    };
    Weapons.ShortWarBow = {
        name: 'Short War Bow',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'Ranged',
        color: 'green',
        image: 'ShortWarBow',
        iLvl: 12,
        baseMinDamage: 50,
        baseMaxDamage: 70,
        baseStrength: 40,
        baseAgility: 40,
        baseDexterity: 50,
        value: 2000
    };
    Weapons.DoubleBow = {
        name: 'Double Bow',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'Ranged',
        color: 'blue',
        image: 'DoubleBow',
        iLvl: 13,
        baseMinDamage: 60,
        baseMaxDamage: 90,
        baseStrength: 50,
        baseAgility: 60,
        baseDexterity: 70,
        value: 3000
    };
    Weapons.CompositeBow = {
        name: 'Composite Bow',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'Ranged',
        color: 'black',
        image: 'CompositeBow',
        iLvl: 16,
        baseMinDamage: 100,
        baseMaxDamage: 120,
        baseStrength: 60,
        baseAgility: 60,
        baseDexterity: 90,
        value: 4000
    };
    Weapons.LongWarBow = {
        name: 'Long War Bow',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'Ranged',
        color: 'green',
        image: 'LongWarBow',
        iLvl: 17,
        baseMinDamage: 120,
        baseMaxDamage: 160,
        baseStrength: 70,
        baseAgility: 80,
        baseDexterity: 100,
        value: 5500
    };
    Weapons.RuneBow = {
        name: 'Rune Bow',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'Ranged',
        color: 'blue',
        image: 'RuneBow',
        iLvl: 18,
        baseMinDamage: 140,
        baseMaxDamage: 180,
        baseStrength: 90,
        baseAgility: 110,
        baseDexterity: 140,
        value: 7500
    };
    Weapons.GothicSword = {
        name: 'Gothic Sword',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'Sword',
        color: 'orange',
        image: 'GothicSword',
        iLvl: 4,
        baseMinDamage: 12,
        baseMaxDamage: 15,
        baseStrength: 12,
        baseAgility: 10,
        value: 300
    };
    Weapons.BerserkerAxe = {
        name: 'Berserker Axe',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'Axe',
        color: 'orange',
        image: 'BerserkerAxe',
        iLvl: 4,
        baseMinDamage: 8,
        baseMaxDamage: 20,
        baseStrength: 18,
        baseAgility: 6,
        value: 400
    };
    Weapons.TyrantClub = {
        name: 'Tyrant Club',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'Mace',
        color: 'orange',
        image: 'TyrantClub',
        iLvl: 4,
        baseMinDamage: 13,
        baseMaxDamage: 17,
        baseStrength: 12,
        baseEndurance: 7,
        baseWisdom: 8,
        value: 370
    };
    Weapons.Stalagmite = {
        name: 'Stalagmite',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'Staff',
        color: 'orange',
        image: 'Stalagmite',
        iLvl: 4,
        baseMinDamage: 7,
        baseMaxDamage: 12,
        baseEndurance: 6,
        baseWisdom: 4,
        baseIntelligence: 18,
        value: 340
    };
    Weapons.GreatBow = {
        name: 'Great Bow',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'Ranged',
        color: 'orange',
        image: 'GreatBow',
        iLvl: 4,
        baseMinDamage: 14,
        baseMaxDamage: 20,
        baseStrength: 9,
        baseAgility: 8,
        baseDexterity: 15,
        value: 370
    };
    Weapons.TuskSword = {
        name: 'Tusk Sword',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'Sword',
        color: 'orange',
        image: 'TuskSword',
        iLvl: 9,
        baseMinDamage: 45,
        baseMaxDamage: 50,
        baseStrength: 48,
        baseAgility: 30,
        baseEndurance: 32,
        value: 1800
    };
    Weapons.SmallCrescent = {
        name: 'Small Crescent',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'Axe',
        color: 'orange',
        image: 'SmallCrescent',
        iLvl: 9,
        baseMinDamage: 35,
        baseMaxDamage: 60,
        baseStrength: 60,
        baseAgility: 18,
        baseEndurance: 26,
        value: 2200
    };
    Weapons.DevilStar = {
        name: 'Devil Star',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'Mace',
        color: 'orange',
        image: 'DevilStar',
        iLvl: 9,
        baseMinDamage: 34,
        baseMaxDamage: 38,
        baseStrength: 35,
        baseEndurance: 22,
        baseWisdom: 20,
        value: 1500
    };
    Weapons.PetrifiedWand = {
        name: 'Petrified Wand',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'Staff',
        color: 'orange',
        image: 'PetrifiedWand',
        iLvl: 9,
        baseMinDamage: 18,
        baseMaxDamage: 24,
        baseEndurance: 22,
        baseWisdom: 16,
        baseIntelligence: 60,
        value: 1700
    };
    Weapons.StagBow = {
        name: 'Stag Bow',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'Ranged',
        color: 'orange',
        image: 'StagBow',
        iLvl: 9,
        baseMinDamage: 38,
        baseMaxDamage: 49,
        baseStrength: 30,
        baseAgility: 30,
        baseDexterity: 50,
        value: 1500
    };
    Weapons.HydraEdge = {
        name: 'Hydra Edge',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'Sword',
        color: 'orange',
        image: 'HydraEdge',
        iLvl: 14,
        baseMinDamage: 75,
        baseMaxDamage: 80,
        baseStrength: 90,
        baseAgility: 70,
        baseEndurance: 80,
        value: 4500
    };
    Weapons.SilverEdgedAxe = {
        name: 'Silver Edged Axe',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'Axe',
        color: 'orange',
        image: 'SilverEdgedAxe',
        iLvl: 14,
        baseMinDamage: 80,
        baseMaxDamage: 120,
        baseStrength: 110,
        baseAgility: 60,
        baseEndurance: 60,
        value: 5500
    };
    Weapons.Knout = {
        name: 'Knout',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'Mace',
        color: 'orange',
        image: 'Knout',
        iLvl: 14,
        baseMinDamage: 70,
        baseMaxDamage: 85,
        baseStrength: 70,
        baseEndurance: 50,
        baseWisdom: 60,
        value: 4500
    };
    Weapons.TombWand = {
        name: 'Tomb Wand',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'Staff',
        color: 'orange',
        image: 'TombWand',
        iLvl: 14,
        baseMinDamage: 35,
        baseMaxDamage: 45,
        baseEndurance: 60,
        baseWisdom: 40,
        baseIntelligence: 140,
        value: 5000
    };
    Weapons.HydraBow = {
        name: 'Hydra Bow',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'Ranged',
        color: 'orange',
        image: 'HydraBow',
        iLvl: 14,
        baseMinDamage: 80,
        baseMaxDamage: 100,
        baseStrength: 60,
        baseAgility: 70,
        baseDexterity: 90,
        value: 4500
    };
    Weapons.PhaseBlade = {
        name: 'Phase Blade',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'Sword',
        color: 'orange',
        image: 'PhaseBlade',
        iLvl: 19,
        baseMinDamage: 120,
        baseMaxDamage: 130,
        baseStrength: 130,
        baseAgility: 110,
        baseEndurance: 120,
        value: 8500
    };
    Weapons.AncientAxe = {
        name: 'Ancient Axe',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'Axe',
        color: 'orange',
        image: 'AncientAxe',
        iLvl: 19,
        baseMinDamage: 170,
        baseMaxDamage: 220,
        baseStrength: 170,
        baseAgility: 120,
        baseEndurance: 140,
        value: 11000
    };
    Weapons.Scourge = {
        name: 'Scourge',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'Mace',
        color: 'orange',
        image: 'Scourge',
        iLvl: 19,
        baseMinDamage: 130,
        baseMaxDamage: 150,
        baseStrength: 140,
        baseEndurance: 120,
        baseWisdom: 130,
        value: 9000
    };
    Weapons.GraveWand = {
        name: 'Grave Wand',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'Staff',
        color: 'orange',
        image: 'GraveWand',
        iLvl: 19,
        baseMinDamage: 70,
        baseMaxDamage: 90,
        baseEndurance: 120,
        baseWisdom: 100,
        baseIntelligence: 280,
        value: 10000
    };
    Weapons.ReflexBow = {
        name: 'Reflex Bow',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'Ranged',
        color: 'orange',
        image: 'ReflexBow',
        iLvl: 19,
        baseMinDamage: 160,
        baseMaxDamage: 200,
        baseStrength: 120,
        baseAgility: 140,
        baseDexterity: 180,
        value: 9000
    };
    Weapons.ColossusSword = {
        name: 'Colossus Sword',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'Sword',
        color: 'red',
        image: 'ColossusSword',
        iLvl: 5,
        baseMinDamage: 20,
        baseMaxDamage: 25,
        baseStrength: 25,
        baseAgility: 12,
        value: 550
    };
    Weapons.EttinAxe = {
        name: 'Ettin Axe',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'Axe',
        color: 'red',
        image: 'EttinAxe',
        iLvl: 5,
        baseMinDamage: 15,
        baseMaxDamage: 30,
        baseStrength: 35,
        baseAgility: 8,
        value: 700
    };
    Weapons.ReinforcedMace = {
        name: 'Reinforced Mace',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'Mace',
        color: 'red',
        image: 'ReinforcedMace',
        iLvl: 5,
        baseMinDamage: 18,
        baseMaxDamage: 25,
        baseStrength: 18,
        baseEndurance: 12,
        baseWisdom: 10,
        value: 600
    };
    Weapons.GhostWand = {
        name: 'Ghost Wand',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'Staff',
        color: 'red',
        image: 'GhostWand',
        iLvl: 5,
        baseMinDamage: 10,
        baseMaxDamage: 16,
        baseEndurance: 10,
        baseWisdom: 7,
        baseIntelligence: 30,
        value: 650
    };
    Weapons.AshwoodBow = {
        name: 'Ashwood Bow',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'Ranged',
        color: 'red',
        image: 'AshwoodBow',
        iLvl: 5,
        baseMinDamage: 20,
        baseMaxDamage: 30,
        baseStrength: 15,
        baseAgility: 12,
        baseDexterity: 25,
        value: 550
    };
    Weapons.HighlandBlade = {
        name: 'Highland Blade',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'Sword',
        color: 'red',
        image: 'HighlandBlade',
        iLvl: 10,
        baseMinDamage: 53,
        baseMaxDamage: 60,
        baseStrength: 65,
        baseAgility: 45,
        baseEndurance: 50,
        value: 2500
    };
    Weapons.FeralAxe = {
        chance: 5,
        name: 'Feral Axe',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'Axe',
        color: 'red',
        image: 'FeralAxe',
        iLvl: 10,
        baseMinDamage: 50,
        baseMaxDamage: 80,
        baseStrength: 80,
        baseAgility: 30,
        baseEndurance: 45,
        value: 2800
    };
    Weapons.OgreMaul = {
        chance: 5,
        name: 'Ogre Maul',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'Mace',
        color: 'red',
        image: 'OgreMaul',
        iLvl: 10,
        baseMinDamage: 42,
        baseMaxDamage: 46,
        baseStrength: 45,
        baseEndurance: 30,
        baseWisdom: 30,
        value: 2000
    };
    Weapons.UnearthedWand = {
        chance: 5,
        name: 'Unearthed Wand',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'Staff',
        color: 'red',
        image: 'UnearthedWand',
        iLvl: 10,
        baseMinDamage: 22,
        baseMaxDamage: 27,
        baseStrength: 30,
        baseWisdom: 22,
        baseIntelligence: 80,
        value: 2200
    };
    Weapons.CeremonialBow = {
        chance: 5,
        name: 'Ceremonial Bow',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'Ranged',
        color: 'red',
        image: 'CeremonialBow',
        iLvl: 10,
        baseMinDamage: 55,
        baseMaxDamage: 70,
        baseStrength: 45,
        baseAgility: 50,
        baseDexterity: 70,
        value: 2200
    };
    Weapons.LegendSword = {
        chance: 5,
        name: 'Legend Sword',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'Sword',
        color: 'red',
        image: 'LegendSword',
        iLvl: 15,
        baseMinDamage: 90,
        baseMaxDamage: 100,
        baseStrength: 110,
        baseAgility: 90,
        baseEndurance: 100,
        value: 6000
    };
    Weapons.Decapitator = {
        chance: 5,
        name: 'Decapitator',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'Axe',
        color: 'red',
        image: 'Decapitator',
        iLvl: 15,
        baseMinDamage: 100,
        baseMaxDamage: 140,
        baseStrength: 140,
        baseAgility: 90,
        baseEndurance: 80,
        value: 7000
    };
    Weapons.FlangedMace = {
        chance: 5,
        name: 'Flanged Mace',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'Mace',
        color: 'red',
        image: 'FlangedMace',
        iLvl: 15,
        baseMinDamage: 90,
        baseMaxDamage: 110,
        baseStrength: 90,
        baseEndurance: 70,
        baseWisdom: 80,
        value: 6000
    };
    Weapons.ElderStaff = {
        chance: 5,
        name: 'Elder Staff',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'Staff',
        color: 'red',
        image: 'ElderStaff',
        iLvl: 15,
        baseMinDamage: 50,
        baseMaxDamage: 60,
        baseEndurance: 80,
        baseWisdom: 60,
        baseIntelligence: 180,
        value: 7000
    };
    Weapons.MatriarchalBow = {
        chance: 5,
        name: 'Matriarchal Bow',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'Ranged',
        color: 'red',
        image: 'MatriarchalBow',
        iLvl: 15,
        baseMinDamage: 110,
        baseMaxDamage: 140,
        baseStrength: 80,
        baseAgility: 90,
        baseDexterity: 120,
        value: 6000
    };
    Weapons.BalrogBlade = {
        chance: 5,
        name: 'Balrog Blade',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'Sword',
        color: 'red',
        image: 'BalrogBlade',
        iLvl: 20,
        baseMinDamage: 150,
        baseMaxDamage: 170,
        baseStrength: 160,
        baseAgility: 120,
        baseEndurance: 140,
        value: 10000
    };
    Weapons.GloriousAxe = {
        chance: 5,
        name: 'Glorious Axe',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'Axe',
        color: 'red',
        image: 'GloriousAxe',
        iLvl: 20,
        baseMinDamage: 200,
        baseMaxDamage: 250,
        baseStrength: 200,
        baseAgility: 150,
        baseEndurance: 160,
        value: 14000
    };
    Weapons.ThunderMaul = {
        chance: 5,
        name: 'Thunder Maul',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'Mace',
        color: 'red',
        image: 'ThunderMaul',
        iLvl: 20,
        baseMinDamage: 150,
        baseMaxDamage: 180,
        baseStrength: 180,
        baseEndurance: 150,
        baseWisdom: 170,
        value: 11000
    };
    Weapons.Shillelagh = {
        chance: 5,
        name: 'Shillelagh',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'Staff',
        color: 'red',
        image: 'Shillelagh',
        iLvl: 20,
        baseMinDamage: 90,
        baseMaxDamage: 100,
        baseEndurance: 150,
        baseWisdom: 120,
        baseIntelligence: 400,
        value: 15000
    };
    Weapons.GrandMatronBow = {
        chance: 5,
        name: 'Grand Matron Bow',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'Ranged',
        color: 'red',
        image: 'GrandMatronBow',
        iLvl: 20,
        baseMinDamage: 180,
        baseMaxDamage: 240,
        baseStrength: 150,
        baseAgility: 180,
        baseDexterity: 240,
        value: 12000
    };
    ItemList.Weapons = Weapons;
    Armors = {};
    //Armors
    Armors.LeatherArmor = {
        name: 'Leather Armor',
        itemQuality: 'Common',
        itemType: 'armor',
        subType: 'chest',
        color: 'black',
        image: 'LeatherArmor',
        iLvl: 1,
        baseDefense: 3,
        baseAgility: 3,
        baseDexterity: 2,
        baseEndurance: 1,
        value: 40
    };
    Armors.ReinforcedLeatherVest = {
        name: 'Reinforced Leather Vest',
        itemQuality: 'Uncommon',
        itemType: 'armor',
        subType: 'chest',
        color: 'green',
        image: 'ReinforcedLeatherVest',
        iLvl: 2,
        baseDefense: 3,
        baseAgility: 3,
        baseDexterity: 2,
        baseEndurance: 1,
        value: 90
    };
    Armors.StuddedDoublet = {
        chance: 10,
        name: 'Studded Doublet',
        itemQuality: 'Rare',
        itemType: 'armor',
        subType: 'chest',
        color: 'blue',
        image: 'StuddedDoublet',
        iLvl: 3,
        baseDefense: 3,
        baseAgility: 3,
        baseDexterity: 2,
        baseEndurance: 1,
        value: 180
    };
    //Heavy Armor
    Armors.ScalemailVest = {
        chance: 50,
        name: 'Scalemail Vest',
        itemQuality: 'Common',
        itemType: 'armor',
        subType: 'chest',
        color: 'black',
        image: 'ScalemailVest',
        iLvl: 1,
        baseDefense: 3,
        baseEndurance: 3,
        baseWisdom: 2,
        baseStrength: 1,
        value: 50
    };
    Armors.ChainmailArmor = {
        chance: 25,
        name: 'Chainmail Armor',
        itemQuality: 'Uncommon',
        itemType: 'armor',
        subType: 'chest',
        color: 'green',
        image: 'ChainmailArmor',
        iLvl: 2,
        baseDefense: 3,
        baseEndurance: 3,
        baseWisdom: 2,
        baseStrength: 1,
        value: 150
    };
    Armors.LightMailArmor = {
        chance: 10,
        name: 'Light Mail Armor',
        itemQuality: 'Rare',
        itemType: 'armor',
        subType: 'chest',
        color: 'blue',
        image: 'LightMailArmor',
        iLvl: 3,
        baseDefense: 3,
        baseEndurance: 3,
        baseWisdom: 2,
        baseStrength: 1,
        value: 300
    };
    //Leather
    Armors.SnowhideVest = {
        chance: 50,
        name: 'Snowhide Vest',
        itemQuality: 'Common',
        itemType: 'armor',
        subType: 'chest',
        color: 'black',
        image: 'SnowhideVest',
        iLvl: 6,
        baseDefense: 15,
        baseAgility: 12,
        baseDexterity: 10,
        baseEndurance: 5,
        value: 300
    };
    Armors.BattleHarness = {
        chance: 25,
        name: 'Battle Harness',
        itemQuality: 'Uncommon',
        itemType: 'armor',
        subType: 'chest',
        color: 'green',
        image: 'BattleHarness',
        iLvl: 7,
        baseDefense: 20,
        baseAgility: 17,
        baseDexterity: 13,
        baseEndurance: 8,
        value: 550
    };
    Armors.CuredLeatherArmor = {
        chance: 10,
        name: 'Cured Leather Armor',
        itemQuality: 'Rare',
        itemType: 'armor',
        subType: 'chest',
        color: 'blue',
        image: 'CuredLeatherArmor',
        iLvl: 8,
        baseDefense: 28,
        baseAgility: 25,
        baseDexterity: 18,
        baseEndurance: 14,
        value: 800
    };
    //Heavy Armor
    Armors.AugumentedChainVest = {
        chance: 50,
        name: 'Augumented Chain Vest',
        itemQuality: 'Common',
        itemType: 'armor',
        subType: 'chest',
        color: 'black',
        image: 'AugumentedChainVest',
        iLvl: 6,
        baseDefense: 30,
        baseEndurance: 20,
        baseWisdom: 10,
        baseStrength: 5,
        value: 500
    };
    Armors.JaggedChainVest = {
        chance: 25,
        name: 'Jagged Chain Vest',
        itemQuality: 'Uncommon',
        itemType: 'armor',
        subType: 'chest',
        color: 'green',
        image: 'JaggedChainVest',
        iLvl: 7,
        baseDefense: 40,
        baseEndurance: 28,
        baseWisdom: 14,
        baseStrength: 8,
        value: 900
    };
    Armors.RecruitTunic = {
        chance: 10,
        name: 'Recruit Tunic',
        itemQuality: 'Rare',
        itemType: 'armor',
        subType: 'chest',
        color: 'blue',
        image: 'RecruitTunic',
        iLvl: 8,
        baseDefense: 55,
        baseEndurance: 36,
        baseWisdom: 19,
        baseStrength: 12,
        value: 1500
    };
    //Leather
    Armors.StuddedLeather = {
        chance: 50,
        name: 'Studded Leather',
        itemQuality: 'Common',
        itemType: 'armor',
        subType: 'chest',
        color: 'black',
        image: 'StuddedLeather',
        iLvl: 11,
        baseDefense: 40,
        baseAgility: 30,
        baseDexterity: 25,
        baseEndurance: 20,
        value: 1000
    };
    Armors.HardLeatherTunic = {
        chance: 25,
        name: 'Hard Leather Tunic',
        itemQuality: 'Uncommon',
        itemType: 'armor',
        subType: 'chest',
        color: 'green',
        image: 'HardLeatherTunic',
        iLvl: 12,
        baseDefense: 54,
        baseAgility: 40,
        baseDexterity: 36,
        baseEndurance: 30,
        value: 1500
    };
    Armors.StuddedLeatherHarness = {
        chance: 10,
        name: 'Studded Leather Harness',
        itemQuality: 'Rare',
        itemType: 'armor',
        subType: 'chest',
        color: 'blue',
        image: 'StuddedLeatherHarness',
        iLvl: 13,
        baseDefense: 72,
        baseAgility: 58,
        baseDexterity: 48,
        baseEndurance: 44,
        value: 2200
    };
    //Heavy Armor
    Armors.GothicPlate = {
        chance: 50,
        name: 'Gothic Plate',
        itemQuality: 'Common',
        itemType: 'armor',
        subType: 'chest',
        color: 'black',
        image: 'GothicPlate',
        iLvl: 11,
        baseDefense: 80,
        baseEndurance: 40,
        baseWisdom: 20,
        baseStrength: 12,
        value: 3000
    };
    Armors.FullPlatemail = {
        chance: 25,
        name: 'Full Platemail',
        itemQuality: 'Uncommon',
        itemType: 'armor',
        subType: 'chest',
        color: 'green',
        image: 'FullPlatemail',
        iLvl: 12,
        baseDefense: 100,
        baseEndurance: 55,
        baseWisdom: 32,
        baseStrength: 18,
        value: 4500
    };
    Armors.EmbossedPlate = {
        chance: 10,
        name: 'Embossed Plate',
        itemQuality: 'Rare',
        itemType: 'armor',
        subType: 'chest',
        color: 'blue',
        image: 'EmbossedPlate',
        iLvl: 13,
        baseDefense: 125,
        baseEndurance: 78,
        baseWisdom: 46,
        baseStrength: 26,
        value: 6000
    };
    //Leather
    Armors.SoftLeatherVest = {
        chance: 50,
        name: 'Soft Leather Vest',
        itemQuality: 'Common',
        itemType: 'armor',
        subType: 'chest',
        color: 'black',
        image: 'SoftLeatherVest',
        iLvl: 16,
        baseDefense: 80,
        baseAgility: 80,
        baseDexterity: 70,
        baseEndurance: 50,
        value: 3000
    };
    Armors.DarksRangerVest = {
        chance: 25,
        name: 'Dark\'s Ranger Vest',
        itemQuality: 'Uncommon',
        itemType: 'armor',
        subType: 'chest',
        color: 'green',
        image: 'DarksRangerVest',
        iLvl: 17,
        baseDefense: 100,
        baseAgility: 110,
        baseDexterity: 90,
        baseEndurance: 70,
        value: 3800
    };
    Armors.WinterJacket = {
        chance: 10,
        name: 'Winter Jacket',
        itemQuality: 'Rare',
        itemType: 'armor',
        subType: 'chest',
        color: 'blue',
        image: 'WinterJacket',
        iLvl: 18,
        baseDefense: 130,
        baseAgility: 140,
        baseDexterity: 120,
        baseEndurance: 100,
        value: 4900
    };
    //Heavy Armor
    Armors.AncientArmor = {
        chance: 50,
        name: 'Ancient Armor',
        itemQuality: 'Common',
        itemType: 'armor',
        subType: 'chest',
        color: 'black',
        image: 'AncientArmor',
        iLvl: 16,
        baseDefense: 150,
        baseEndurance: 90,
        baseWisdom: 50,
        baseStrength: 40,
        value: 8000
    };
    Armors.OrnatePlate = {
        chance: 25,
        name: 'Ornate Plate',
        itemQuality: 'Uncommon',
        itemType: 'armor',
        subType: 'chest',
        color: 'green',
        image: 'OrnatePlate',
        iLvl: 17,
        baseDefense: 180,
        baseEndurance: 115,
        baseWisdom: 72,
        baseStrength: 64,
        value: 9000
    };
    Armors.DiamondMail = {
        chance: 10,
        name: 'Diamond Mail',
        itemQuality: 'Rare',
        itemType: 'armor',
        subType: 'chest',
        color: 'blue',
        image: 'DiamondMail',
        iLvl: 18,
        baseDefense: 220,
        baseEndurance: 135,
        baseWisdom: 95,
        baseStrength: 83,
        value: 13000
    };
    //Robes
    Armors.BlackRobes = {
        chance: 50,
        name: 'Black Robes',
        itemQuality: 'Common',
        itemType: 'armor',
        subType: 'chest',
        color: 'black',
        image: 'BlackRobes',
        iLvl: 1,
        baseDefense: 2,
        baseIntelligence: 3,
        baseAgility: 1,
        baseWisdom: 1,
        value: 40
    };
    Armors.HoodedRobes = {
        chance: 25,
        name: 'Hooded Robes',
        itemQuality: 'Uncommon',
        itemType: 'armor',
        subType: 'chest',
        color: 'green',
        image: 'HoodedRobes',
        iLvl: 2,
        baseDefense: 5,
        baseIntelligence: 7,
        baseAgility: 3,
        baseWisdom: 4,
        value: 150
    };
    Armors.MonkRobes = {
        chance: 10,
        name: 'Monk Robes',
        itemQuality: 'Rare',
        itemType: 'armor',
        subType: 'chest',
        color: 'blue',
        image: 'MonkRobes',
        iLvl: 3,
        baseDefense: 9,
        baseIntelligence: 12,
        baseAgility: 6,
        baseWisdom: 7,
        value: 300
    };
    //Robes
    Armors.RedLinenVest = {
        chance: 50,
        name: 'Red Linen Vest',
        itemQuality: 'Common',
        itemType: 'armor',
        subType: 'chest',
        color: 'black',
        image: 'RedLinenVest',
        iLvl: 6,
        baseDefense: 18,
        baseIntelligence: 15,
        baseAgility: 10,
        baseWisdom: 10,
        value: 500
    };
    Armors.BeadedRobes = {
        chance: 25,
        name: 'Beaded Robes',
        itemQuality: 'Uncommon',
        itemType: 'armor',
        subType: 'chest',
        color: 'green',
        image: 'BeadedRobes',
        iLvl: 7,
        baseDefense: 23,
        baseIntelligence: 22,
        baseAgility: 15,
        baseWisdom: 18,
        value: 800
    };
    Armors.AncestralRobe = {
        chance: 10,
        name: 'Ancestral Robe',
        itemQuality: 'Rare',
        itemType: 'armor',
        subType: 'chest',
        color: 'blue',
        image: 'AncestralRobe',
        iLvl: 8,
        baseDefense: 30,
        baseIntelligence: 34,
        baseAgility: 20,
        baseWisdom: 24,
        value: 1200
    };
    //Robes
    Armors.BarbaricLinenVest = {
        chance: 50,
        name: 'Barbaric Linen Vest',
        itemQuality: 'Common',
        itemType: 'armor',
        subType: 'chest',
        color: 'black',
        image: 'BarbaricLinenVest',
        iLvl: 11,
        baseDefense: 35,
        baseIntelligence: 30,
        baseAgility: 20,
        baseWisdom: 30,
        value: 1500
    };
    Armors.BarbaricClothVest = {
        chance: 25,
        name: 'Barbaric Cloth Vest',
        itemQuality: 'Uncommon',
        itemType: 'armor',
        subType: 'chest',
        color: 'green',
        image: 'BarbaricClothVest',
        iLvl: 12,
        baseDefense: 50,
        baseIntelligence: 45,
        baseAgility: 30,
        baseWisdom: 48,
        value: 2000
    };
    Armors.JourneymansRobe = {
        chance: 10,
        name: 'Journeymans Robe',
        itemQuality: 'Rare',
        itemType: 'armor',
        subType: 'chest',
        color: 'blue',
        image: 'JourneymansRobe',
        iLvl: 13,
        baseDefense: 70,
        baseIntelligence: 60,
        baseAgility: 45,
        baseWisdom: 65,
        value: 4000
    };
    //Robes
    Armors.FurCoveredRobe = {
        chance: 50,
        name: 'Fur Covered Robe',
        itemQuality: 'Common',
        itemType: 'armor',
        subType: 'chest',
        color: 'black',
        image: 'FurCoveredRobe',
        iLvl: 16,
        baseDefense: 70,
        baseIntelligence: 70,
        baseAgility: 50,
        baseWisdom: 70,
        value: 7000
    };
    Armors.DurableTunic = {
        chance: 25,
        name: 'Durable Tunic',
        itemQuality: 'Uncommon',
        itemType: 'armor',
        subType: 'chest',
        color: 'green',
        image: 'DurableTunic',
        iLvl: 17,
        baseDefense: 95,
        baseIntelligence: 95,
        baseAgility: 75,
        baseWisdom: 95,
        value: 10000
    };
    Armors.CarapaceRobes = {
        chance: 10,
        name: 'Carapace Robes',
        itemQuality: 'Rare',
        itemType: 'armor',
        subType: 'chest',
        color: 'blue',
        image: 'CarapaceRobes',
        iLvl: 18,
        baseDefense: 120,
        baseIntelligence: 120,
        baseAgility: 100,
        baseWisdom: 130,
        value: 12000
    };
    //Epics
    Armors.MageRobes = {
        chance: 5,
        name: 'Mage Robes',
        itemQuality: 'Epic',
        itemType: 'armor',
        subType: 'chest',
        color: 'orange',
        image: 'MageRobes',
        iLvl: 4,
        baseDefense: 15,
        baseIntelligence: 18,
        baseAgility: 10,
        baseWisdom: 12,
        value: 550
    };
    Armors.DarkIronLeather = {
        chance: 5,
        name: 'Dark Iron Leather',
        itemQuality: 'Epic',
        itemType: 'armor',
        subType: 'chest',
        color: 'orange',
        image: 'DarkIronLeather',
        iLvl: 4,
        baseDefense: 18,
        baseAgility: 16,
        baseDexterity: 10,
        baseEndurance: 7,
        value: 300
    };
    Armors.BrigandVest = {
        chance: 5,
        name: 'Brigand Vest',
        itemQuality: 'Epic',
        itemType: 'armor',
        subType: 'chest',
        color: 'orange',
        image: 'BrigandVest',
        iLvl: 4,
        baseDefense: 22,
        baseEndurance: 20,
        baseWisdom: 11,
        baseStrength: 7,
        value: 550
    };
    Armors.MysticsRobe = {
        chance: 5,
        name: 'Mystics Robe',
        itemQuality: 'Epic',
        itemType: 'armor',
        subType: 'chest',
        color: 'orange',
        image: 'MysticsRobe',
        iLvl: 9,
        baseDefense: 42,
        baseIntelligence: 45,
        baseAgility: 27,
        baseWisdom: 30,
        value: 1700
    };
    Armors.BlackBearHideVest = {
        chance: 5,
        name: 'Black Bear Hide Vest',
        itemQuality: 'Epic',
        itemType: 'armor',
        subType: 'chest',
        color: 'orange',
        image: 'BlackBearHideVest',
        iLvl: 9,
        baseDefense: 38,
        baseAgility: 35,
        baseDexterity: 26,
        baseEndurance: 20,
        value: 1100
    };
    Armors.SiegeBrigadeVest = {
        chance: 5,
        name: 'Siege Brigade Vest',
        itemQuality: 'Epic',
        itemType: 'armor',
        subType: 'chest',
        color: 'orange',
        image: 'SiegeBrigadeVest',
        iLvl: 9,
        baseDefense: 70,
        baseEndurance: 45,
        baseWisdom: 28,
        baseStrength: 19,
        value: 2500
    };
    Armors.RitualTunic = {
        chance: 5,
        name: 'Ritual Tunic',
        itemQuality: 'Epic',
        itemType: 'armor',
        subType: 'chest',
        color: 'orange',
        image: 'RitualTunic',
        iLvl: 14,
        baseDefense: 90,
        baseIntelligence: 80,
        baseAgility: 60,
        baseWisdom: 80,
        value: 6000
    };
    Armors.TannedLeatherJerkin = {
        chance: 5,
        name: 'Tanned Leather Jerkin',
        itemQuality: 'Epic',
        itemType: 'armor',
        subType: 'chest',
        color: 'orange',
        image: 'TannedLeatherJerkin',
        iLvl: 14,
        baseDefense: 85,
        baseAgility: 74,
        baseDexterity: 64,
        baseEndurance: 60,
        value: 3500
    };
    Armors.ChaosArmor = {
        chance: 5,
        name: 'Chaos Armor',
        itemQuality: 'Epic',
        itemType: 'armor',
        subType: 'chest',
        color: 'orange',
        image: 'ChaosArmor',
        iLvl: 14,
        baseDefense: 150,
        baseEndurance: 100,
        baseWisdom: 60,
        baseStrength: 38,
        value: 8000
    };
    Armors.SagesRobe = {
        chance: 5,
        name: 'Sages\'s Robe',
        itemQuality: 'Epic',
        itemType: 'armor',
        subType: 'chest',
        color: 'orange',
        image: 'SagesRobe',
        iLvl: 19,
        baseDefense: 150,
        baseIntelligence: 150,
        baseAgility: 130,
        baseWisdom: 160,
        value: 15000
    };
    Armors.PrimalShirt = {
        chance: 5,
        name: 'Primal Shirt',
        itemQuality: 'Epic',
        itemType: 'armor',
        subType: 'chest',
        color: 'orange',
        image: 'PrimalShirt',
        iLvl: 19,
        baseDefense: 160,
        baseAgility: 180,
        baseDexterity: 160,
        baseEndurance: 140,
        value: 5700
    };
    Armors.Boneweave = {
        chance: 5,
        name: 'Boneweave',
        itemQuality: 'Epic',
        itemType: 'armor',
        subType: 'chest',
        color: 'orange',
        image: 'Boneweave',
        iLvl: 19,
        baseDefense: 250,
        baseEndurance: 165,
        baseWisdom: 120,
        baseStrength: 105,
        value: 18000
    };
    Armors.MagicWeaverTunic = {
        chance: 5,
        name: 'Magic Weaver Tunic',
        itemQuality: 'Legendary',
        itemType: 'armor',
        subType: 'chest',
        color: 'red',
        image: 'MagicWeaverTunic',
        iLvl: 5,
        baseDefense: 25,
        baseIntelligence: 27,
        baseAgility: 15,
        baseWisdom: 18,
        value: 800
    };
    Armors.RangersVest = {
        chance: 5,
        name: 'Rangers Vest',
        itemQuality: 'Legendary',
        itemType: 'armor',
        subType: 'chest',
        color: 'red',
        image: 'RangersVest',
        iLvl: 5,
        baseDefense: 30,
        baseAgility: 25,
        baseDexterity: 15,
        baseEndurance: 10,
        value: 500
    };
    Armors.SalvagedChainArmor = {
        chance: 5,
        name: 'Salvaged Chain Armor',
        itemQuality: 'Legendary',
        itemType: 'armor',
        subType: 'chest',
        color: 'red',
        image: 'SalvagedChainArmor',
        iLvl: 5,
        baseDefense: 35,
        baseEndurance: 28,
        baseWisdom: 17,
        baseStrength: 10,
        value: 800
    };
    Armors.AncestralTunic = {
        chance: 5,
        name: 'Ancestral Tunic',
        itemQuality: 'Legendary',
        itemType: 'armor',
        subType: 'chest',
        color: 'red',
        image: 'AncestralTunic',
        iLvl: 10,
        baseDefense: 55,
        baseIntelligence: 60,
        baseAgility: 35,
        baseWisdom: 45,
        value: 2200
    };
    Armors.NomadicVest = {
        chance: 5,
        name: 'Nomadic Vest',
        itemQuality: 'Legendary',
        itemType: 'armor',
        subType: 'chest',
        color: 'red',
        image: 'NomadicVest',
        iLvl: 10,
        baseDefense: 55,
        baseAgility: 45,
        baseDexterity: 34,
        baseEndurance: 28,
        value: 1500
    };
    Armors.TemplarArmor = {
        chance: 5,
        name: 'Templar Armor',
        itemQuality: 'Legendary',
        itemType: 'armor',
        subType: 'chest',
        color: 'red',
        image: 'TemplarArmor',
        iLvl: 10,
        baseDefense: 90,
        baseEndurance: 60,
        baseWisdom: 36,
        baseStrength: 27,
        value: 4000
    };
    Armors.SagesCloth = {
        chance: 5,
        name: 'Sage\'s Cloth',
        itemQuality: 'Legendary',
        itemType: 'armor',
        subType: 'chest',
        color: 'red',
        image: 'SagesCloth',
        iLvl: 15,
        baseDefense: 115,
        baseIntelligence: 110,
        baseAgility: 80,
        baseWisdom: 100,
        value: 8500
    };
    Armors.ScavengersTunic = {
        chance: 5,
        name: 'Scavenger\'s Tunic',
        itemQuality: 'Legendary',
        itemType: 'armor',
        subType: 'chest',
        color: 'red',
        image: 'ScavengersTunic',
        iLvl: 15,
        baseDefense: 100,
        baseAgility: 90,
        baseDexterity: 84,
        baseEndurance: 78,
        value: 4400
    };
    Armors.Wyrmhide = {
        chance: 5,
        name: 'Wyrmhide',
        itemQuality: 'Legendary',
        itemType: 'armor',
        subType: 'chest',
        color: 'red',
        image: 'Wyrmhide',
        iLvl: 15,
        baseDefense: 180,
        baseEndurance: 125,
        baseWisdom: 78,
        baseStrength: 55,
        value: 10000
    };
    Armors.RobeoftheDragonSlayer = {
        chance: 5,
        name: 'Robe of the Dragon Slayer',
        itemQuality: 'Legendary',
        itemType: 'armor',
        subType: 'chest',
        color: 'red',
        image: 'RobeoftheDragonSlayer',
        iLvl: 20,
        baseDefense: 200,
        baseIntelligence: 180,
        baseAgility: 150,
        baseWisdom: 190,
        value: 20000
    };
    Armors.ScoutHuntersVest = {
        chance: 5,
        name: 'Scout Hunters Vest',
        itemQuality: 'Legendary',
        itemType: 'armor',
        subType: 'chest',
        color: 'red',
        image: 'ScoutHuntersVest',
        iLvl: 20,
        baseDefense: 200,
        baseAgility: 220,
        baseDexterity: 200,
        baseEndurance: 180,
        value: 7000
    };
    Armors.BalrogSkin = {
        chance: 5,
        name: 'Balrog Skin',
        itemQuality: 'Legendary',
        itemType: 'armor',
        subType: 'chest',
        color: 'red',
        image: 'BalrogSkin',
        iLvl: 20,
        baseDefense: 300,
        baseEndurance: 200,
        baseWisdom: 145,
        baseStrength: 128,
        value: 25000
    };
    ItemList.Armors = Armors;
    //Off Hand list
    OffHand = {};
    //Shields
    OffHand.Buckler = {
        name: 'Buckler',
        itemQuality: 'Common',
        itemType: 'offHand',
        subType: 'Shield',
        color: 'black',
        image: 'Buckler',
        iLvl: 1,
        baseDefense: 3,
        baseEndurance: 3,
        baseStrength: 5,
        value: 100
    };
    OffHand.SpikedShield = {
        name: 'Spiked Shield',
        itemQuality: 'Uncommon',
        itemType: 'offHand',
        subType: 'Shield',
        color: 'green',
        image: 'SpikedShield',
        iLvl: 2,
        baseDefense: 5,
        baseEndurance: 8,
        baseStrength: 6,
        value: 250
    };
    OffHand.TowerShield = {
        name: 'Tower Shield',
        itemQuality: 'Rare',
        itemType: 'offHand',
        subType: 'Shield',
        color: 'blue',
        image: 'TowerShield',
        iLvl: 3,
        baseDefense: 8,
        baseEndurance: 12,
        baseStrength: 10,
        value: 350
    };
    OffHand.GrimShield = {
        name: 'Grim Shield',
        itemQuality: 'Epic',
        itemType: 'offHand',
        subType: 'Shield',
        color: 'orange',
        image: 'GrimShield',
        iLvl: 4,
        baseDefense: 12,
        baseEndurance: 18,
        baseStrength: 14,
        value: 500
    };
    OffHand.Luna = {
        name: 'Luna',
        itemQuality: 'Legendary',
        itemType: 'offHand',
        subType: 'Shield',
        color: 'red',
        image: 'Luna',
        iLvl: 5,
        baseDefense: 18,
        baseEndurance: 28,
        baseStrength: 20,
        value: 1000
    };
    OffHand.SmallShield = {
        name: 'Small Shield',
        itemQuality: 'Common',
        itemType: 'offHand',
        subType: 'Shield',
        color: 'black',
        image: 'SmallShield',
        iLvl: 6,
        baseDefense: 22,
        baseEndurance: 32,
        baseStrength: 24,
        value: 1250
    };
    OffHand.BoneShield = {
        name: 'Bone Shield',
        itemQuality: 'Uncommon',
        itemType: 'offHand',
        subType: 'Shield',
        color: 'green',
        image: 'BoneShield',
        iLvl: 7,
        baseDefense: 28,
        baseEndurance: 40,
        baseStrength: 30,
        value: 1600
    };
    OffHand.GothicShield = {
        name: 'Gothic Shield',
        itemQuality: 'Rare',
        itemType: 'offHand',
        subType: 'Shield',
        color: 'blue',
        image: 'GothicShield',
        iLvl: 8,
        baseDefense: 36,
        baseEndurance: 52,
        baseStrength: 34,
        value: 2000
    };
    OffHand.AncientShield = {
        name: 'Ancient Shield',
        itemQuality: 'Epic',
        itemType: 'offHand',
        subType: 'Shield',
        color: 'orange',
        image: 'AncientShield',
        iLvl: 9,
        baseDefense: 44,
        baseEndurance: 62,
        baseStrength: 44,
        value: 2600
    };
    OffHand.Hyperion = {
        name: 'Hyperion',
        itemQuality: 'Legendary',
        itemType: 'offHand',
        subType: 'Shield',
        color: 'red',
        image: 'Hyperion',
        iLvl: 10,
        baseDefense: 50,
        baseEndurance: 75,
        baseStrength: 55,
        value: 3200
    };
    OffHand.LargeShield = {
        name: 'Large Shield',
        itemQuality: 'Common',
        itemType: 'offHand',
        subType: 'Shield',
        color: 'black',
        image: 'LargeShield',
        iLvl: 11,
        baseDefense: 60,
        baseEndurance: 80,
        baseStrength: 60,
        value: 3500
    };
    OffHand.Defender = {
        name: 'Defender',
        itemQuality: 'Uncommon',
        itemType: 'offHand',
        subType: 'Shield',
        color: 'green',
        image: 'Defender',
        iLvl: 12,
        baseDefense: 75,
        baseEndurance: 95,
        baseStrength: 75,
        value: 4200
    };
    OffHand.DragonShield = {
        name: 'Dragon Shield',
        itemQuality: 'Rare',
        itemType: 'offHand',
        subType: 'Shield',
        color: 'blue',
        image: 'DragonShield',
        iLvl: 13,
        baseDefense: 88,
        baseEndurance: 110,
        baseStrength: 90,
        value: 4800
    };
    OffHand.Monarch = {
        name: 'Monarch',
        itemQuality: 'Epic',
        itemType: 'offHand',
        subType: 'Shield',
        color: 'orange',
        image: 'Monarch',
        iLvl: 14,
        baseDefense: 110,
        baseEndurance: 130,
        baseStrength: 115,
        value: 5700
    };

    OffHand.TrollNest = {
        name: 'Troll Nest',
        itemQuality: 'Legendary',
        itemType: 'offHand',
        subType: 'Shield',
        color: 'red',
        image: 'TrollNest',
        iLvl: 15,
        baseDefense: 125,
        baseEndurance: 150,
        baseStrength: 135,
        value: 6800
    };
    OffHand.KiteShield = {
        name: 'Kite Shield',
        itemQuality: 'Common',
        itemType: 'offHand',
        subType: 'Shield',
        color: 'black',
        image: 'KiteShield',
        iLvl: 16,
        baseDefense: 140,
        baseEndurance: 160,
        baseStrength: 145,
        value: 7500
    };
    OffHand.RoundShield = {
        name: 'Round Shield',
        itemQuality: 'Uncommon',
        itemType: 'offHand',
        subType: 'Shield',
        color: 'green',
        image: 'RoundShield',
        iLvl: 17,
        baseDefense: 160,
        baseEndurance: 175,
        baseStrength: 160,
        value: 8400
    };
    OffHand.BarbedShield = {
        name: 'Barbed Shield',
        itemQuality: 'Rare',
        itemType: 'offHand',
        subType: 'Shield',
        color: 'blue',
        image: 'BarbedShield',
        iLvl: 18,
        baseDefense: 175,
        baseEndurance: 190,
        baseStrength: 180,
        value: 9200
    };
    OffHand.BladeBarrier = {
        name: 'Blade Barrier',
        itemQuality: 'Epic',
        itemType: 'offHand',
        subType: 'Shield',
        color: 'orange',
        image: 'BladeBarrier',
        iLvl: 19,
        baseDefense: 188,
        baseEndurance: 210,
        baseStrength: 195,
        value: 10500
    };
    OffHand.Aegis = {
        name: 'Aegis',
        itemQuality: 'Legendary',
        itemType: 'offHand',
        subType: 'Shield',
        color: 'red',
        image: 'Aegis',
        iLvl: 20,
        baseDefense: 210,
        baseEndurance: 225,
        baseStrength: 210,
        value: 12000
    };
    //Orbs
    OffHand.DefenseOrb = {
        name: 'Defense Orb',
        itemQuality: 'Common',
        itemType: 'offHand',
        subType: 'orb',
        color: 'black',
        image: 'DefenseOrb',
        iLvl: 1,
        baseDefense: 3,
        baseEndurance: 3,
        baseWisdom: 5,
        value: 80
    };
    //Daggers
    OffHand.Dagger = {
        chance: 50,
        name: 'Dagger',
        itemQuality: 'Common',
        itemType: 'offHand',
        subType: 'Dagger',
        color: 'black',
        image: 'Dagger',
        iLvl: 1,
        baseStrength: 1,
        baseAgility: 2,
        baseIntelligence: 1,
        value: 30
    };
    OffHand.Kris = {
        chance: 25,
        name: 'Kris',
        itemQuality: 'Uncommon',
        itemType: 'offHand',
        subType: 'Dagger',
        color: 'green',
        image: 'Kris',
        iLvl: 2,
        baseStrength: 2,
        baseAgility: 4,
        baseIntelligence: 2,
        value: 90
    };
    OffHand.MithrilPoint = {
        chance: 10,
        name: 'Mithril Point',
        itemQuality: 'Rare',
        itemType: 'offHand',
        subType: 'Dagger',
        color: 'blue',
        image: 'MithrilPoint',
        iLvl: 3,
        baseStrength: 5,
        baseAgility: 8,
        baseIntelligence: 4,
        value: 180
    };
    OffHand.BoneKnife = {
        chance: 5,
        name: 'Bone Knife',
        itemQuality: 'Epic',
        itemType: 'offHand',
        subType: 'Dagger',
        color: 'orange',
        image: 'BoneKnife',
        iLvl: 4,
        baseStrength: 10,
        baseAgility: 14,
        baseIntelligence: 7,
        value: 300
    };
    OffHand.FangedKnife = {
        chance: 5,
        name: 'Fanged Knife',
        itemQuality: 'Legendary',
        itemType: 'offHand',
        subType: 'Dagger',
        color: 'red',
        image: 'FangedKnife',
        iLvl: 5,
        baseStrength: 15,
        baseAgility: 22,
        baseIntelligence: 12,
        value: 580
    };
    OffHand.Katar = {
        chance: 50,
        name: 'Katar',
        itemQuality: 'Common',
        itemType: 'offHand',
        subType: 'Dagger',
        color: 'black',
        image: 'Katar',
        iLvl: 6,
        baseStrength: 10,
        baseAgility: 15,
        baseIntelligence: 10,
        value: 700
    };
    OffHand.WristBlade = {
        chance: 25,
        name: 'Wrist Blade',
        itemQuality: 'Uncommon',
        itemType: 'offHand',
        subType: 'Dagger',
        color: 'green',
        image: 'WristBlade',
        iLvl: 7,
        baseStrength: 20,
        baseAgility: 25,
        baseIntelligence: 20,
        value: 900
    };
    OffHand.BladeTalons = {
        chance: 10,
        name: 'Blade Talons',
        itemQuality: 'Rare',
        itemType: 'offHand',
        subType: 'Dagger',
        color: 'blue',
        image: 'BladeTalons',
        iLvl: 8,
        baseStrength: 20,
        baseAgility: 25,
        baseIntelligence: 20,
        value: 1200
    };
    OffHand.FeralClaws = {
        chance: 5,
        name: 'Feral Claws',
        itemQuality: 'Epic',
        itemType: 'offHand',
        subType: 'Dagger',
        color: 'orange',
        image: 'FeralClaws',
        iLvl: 9,
        baseStrength: 30,
        baseAgility: 35,
        baseIntelligence: 30,
        value: 1700
    };
    OffHand.RunicTalons = {
        chance: 5,
        name: 'Runic Talons',
        itemQuality: 'Legendary',
        itemType: 'offHand',
        subType: 'Dagger',
        color: 'red',
        image: 'RunicTalons',
        iLvl: 10,
        baseStrength: 40,
        baseAgility: 45,
        baseIntelligence: 40,
        value: 2200
    };
    OffHand.Quhab = {
        chance: 50,
        name: 'Quhab',
        itemQuality: 'Common',
        itemType: 'offHand',
        subType: 'Dagger',
        color: 'black',
        image: 'Quhab',
        iLvl: 11,
        baseStrength: 30,
        baseAgility: 35,
        baseIntelligence: 30,
        value: 1700
    };
    OffHand.WristSpike = {
        chance: 25,
        name: 'Wrist Spike',
        itemQuality: 'Uncommon',
        itemType: 'offHand',
        subType: 'Dagger',
        color: 'green',
        image: 'WristSpike',
        iLvl: 12,
        baseStrength: 40,
        baseAgility: 45,
        baseIntelligence: 40,
        value: 2200
    };
    OffHand.Cinquedeas = {
        chance: 10,
        name: 'Cinquedeas',
        itemQuality: 'Rare',
        itemType: 'offHand',
        subType: 'Dagger',
        color: 'blue',
        image: 'Cinquedeas',
        iLvl: 13,
        baseStrength: 50,
        baseAgility: 65,
        baseIntelligence: 50,
        value: 3000
    };
    OffHand.ScissorsSuwayyah = {
        chance: 5,
        name: 'Scissors Suwayyah',
        itemQuality: 'Epic',
        itemType: 'offHand',
        subType: 'Dagger',
        color: 'orange',
        image: 'ScissorsSuwayyah',
        iLvl: 14,
        baseStrength: 70,
        baseAgility: 85,
        baseIntelligence: 70,
        value: 1700
    };
    OffHand.WarFist = {
        name: 'War Fist',
        itemQuality: 'Legendary',
        itemType: 'offHand',
        subType: 'Dagger',
        color: 'red',
        image: 'WarFist',
        iLvl: 15,
        baseStrength: 90,
        baseAgility: 110,
        baseIntelligence: 90,
        value: 5000
    };
    OffHand.CrystalDagger = {
        chance: 50,
        name: 'Crystal Dagger',
        itemQuality: 'Common',
        itemType: 'offHand',
        subType: 'Dagger',
        color: 'black',
        image: 'CrystalDagger',
        iLvl: 16,
        baseStrength: 60,
        baseAgility: 75,
        baseIntelligence: 65,
        value: 4000
    };
    OffHand.SharpClaws = {
        chance: 25,
        name: 'Sharp Claws',
        itemQuality: 'Uncommon',
        itemType: 'offHand',
        subType: 'Dagger',
        color: 'green',
        image: 'SharpClaws',
        iLvl: 17,
        baseStrength: 70,
        baseAgility: 95,
        baseIntelligence: 85,
        value: 5000
    };
    OffHand.Fuscia = {
        chance: 10,
        name: 'Fuscia',
        itemQuality: 'Rare',
        itemType: 'offHand',
        subType: 'Dagger',
        color: 'blue',
        image: 'Fuscia',
        iLvl: 18,
        baseStrength: 90,
        baseAgility: 120,
        baseIntelligence: 110,
        value: 7000
    };
    OffHand.BattleCestus = {
        chance: 5,
        name: 'Battle Cestus',
        itemQuality: 'Epic',
        itemType: 'offHand',
        subType: 'Dagger',
        color: 'orange',
        image: 'BattleCestus',
        iLvl: 19,
        baseStrength: 120,
        baseAgility: 150,
        baseIntelligence: 130,
        value: 9000
    };
    OffHand.RunicClaws = {
        chance: 5,
        name: 'Runic Claws',
        itemQuality: 'Legendary',
        itemType: 'offHand',
        subType: 'Dagger',
        color: 'red',
        image: 'RunicClaws',
        iLvl: 20,
        baseStrength: 140,
        baseAgility: 180,
        baseIntelligence: 150,
        value: 12000
    };
    ItemList.OffHand = OffHand;
    //Accessory list
    Accessory = {};
    //Rings
    Accessory.CrackedRingofLearning = {
        name: 'Cracked Ring of Learning',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'black',
        image: 'CrackedRingofLearning',
        iLvl: 1,
        baseExpRate: 5,
        value: 50
    };
    Accessory.DamagedRingofLearning = {
        name: 'Damaged Ring of Learning',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'green',
        image: 'DamagedRingofLearning',
        iLvl: 2,
        baseExpRate: 10,
        value: 200
    };
    Accessory.RingofLearning = {
        name: 'Ring of Learning',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'blue',
        image: 'RingofLearning',
        iLvl: 3,
        baseExpRate: 15,
        value: 500
    };
    Accessory.SupremeRingofLearning = {
        name: 'Supreme Ring of Learning',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'orange',
        image: 'SupremeRingofLearning',
        iLvl: 4,
        baseExpRate: 20,
        value: 800
    };
    Accessory.AncientRingofLearning = {
        name: 'Ancient Ring of Learning',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'red',
        image: 'AncientRingofLearning',
        iLvl: 5,
        baseExpRate: 25,
        value: 1500
    };
    //Ring Endurance
    Accessory.RingofEndurance = {
        name: 'Ring of Endurance',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'black',
        image: 'RingOfEndurance',
        iLvl: 1,
        baseEndurance: 5,
        value: 50
    };
    Accessory.RingofStamina = {
        name: 'Ring of Stamina',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'green',
        image: 'RingOfStamina',
        iLvl: 2,
        baseEndurance: 10,
        value: 200
    };
    Accessory.RingofFortitude = {
        name: 'Ring of Fortitude',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'blue',
        image: 'RingOfFortitude',
        iLvl: 3,
        baseEndurance: 15,
        value: 500
    };
    Accessory.RingofHardness = {
        name: 'Ring of Hardness',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'orange',
        image: 'RingOfHardness',
        iLvl: 4,
        baseEndurance: 20,
        value: 800
    };
    Accessory.RingofTenacity = {
        name: 'Ring of Tenacity',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'red',
        image: 'RingOfTenacity',
        iLvl: 5,
        baseStrength: 25,
        value: 1500
    };
    //Ring Agility
    Accessory.RingofAgility = {
        name: 'Ring of Agility',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'black',
        image: 'RingOfAgility',
        iLvl: 1,
        baseAgility: 5,
        value: 50
    };
    Accessory.RingofFeather = {
        name: 'Ring of Feather',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'green',
        image: 'RingOfFeather',
        iLvl: 2,
        baseAgility: 10,
        value: 200
    };
    Accessory.RingofBalance = {
        name: 'Ring of Balance',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'blue',
        image: 'RingOfBalance',
        iLvl: 3,
        baseAgility: 15,
        value: 500
    };
    Accessory.RingofFlexibility = {
        name: 'Ring of Flexibility',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'orange',
        image: 'RingOfFlexibility',
        iLvl: 4,
        baseAgility: 20,
        value: 800
    };
    Accessory.RingofAlertness = {
        name: 'Ring of Alertness',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'red',
        image: 'RingOfAlertness',
        iLvl: 5,
        baseAgility: 25,
        value: 1500
    };
    //Ring Dexterity
    Accessory.RingofDexterity = {
        name: 'Ring of Dexterity',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'black',
        image: 'RingOfDexterity',
        iLvl: 1,
        baseDexterity: 5,
        value: 50
    };
    Accessory.RingofExpertise = {
        name: 'Ring of Expertise',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'green',
        image: 'RingOfExpertise',
        iLvl: 2,
        baseDexterity: 10,
        value: 200
    };
    Accessory.RingofSkill = {
        name: 'Ring of Skill',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'blue',
        image: 'RingOfSkill',
        iLvl: 3,
        baseDexterity: 15,
        value: 500
    };
    Accessory.RingofAbility = {
        name: 'Ring of Ability',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'orange',
        image: 'RingOfAbility',
        iLvl: 4,
        baseDexterity: 20,
        value: 800
    };
    Accessory.RingofMastery = {
        name: 'Ring of Mastery',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'red',
        image: 'RingOfMastery',
        iLvl: 5,
        baseDexterity: 25,
        value: 1500
    };
    //Ring Luck
    Accessory.RingofLuck = {
        name: 'Ring of Luck',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'black',
        image: 'RingOfLuck',
        iLvl: 1,
        baseLuck: 5,
        value: 50
    };
    Accessory.RingofDestiny = {
        name: 'Ring of Destiny',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'green',
        image: 'RingOfDestiny',
        iLvl: 2,
        baseLuck: 10,
        value: 200
    };
    Accessory.RingofFortune = {
        name: 'Ring of Fortune',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'blue',
        image: 'RingOfFortune',
        iLvl: 3,
        baseLuck: 15,
        value: 500
    };
    Accessory.RingofChance = {
        name: 'Ring of Chance',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'orange',
        image: 'RingOfChance',
        iLvl: 4,
        baseLuck: 20,
        value: 800
    };
    Accessory.RingofFluke = {
        name: 'Ring of Fluke',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'red',
        image: 'RingOfFluke',
        iLvl: 5,
        baseLuck: 25,
        value: 1500
    };
    //Ring Defense
    Accessory.RingofDefense = {
        name: 'Ring of Defense',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'black',
        image: 'RingOfDefense',
        iLvl: 1,
        baseDefense: 5,
        value: 50
    };
    Accessory.RingofProtection = {
        name: 'Ring of Protection',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'green',
        image: 'RingOfProtection',
        iLvl: 2,
        baseDefense: 10,
        value: 200
    };
    Accessory.RingofImmunity = {
        name: 'Ring of Immunity',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'blue',
        image: 'RingOfImmunity',
        iLvl: 3,
        baseDefense: 15,
        value: 500
    };
    Accessory.RingofSafety = {
        name: 'Ring of Safety',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'orange',
        image: 'RingOfSafety',
        iLvl: 4,
        baseDefense: 20,
        value: 800
    };
    Accessory.RingofResistance = {
        name: 'Ring of Resistance',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'Ring',
        color: 'red',
        image: 'RingOfResistance',
        iLvl: 5,
        baseDefense: 25,
        value: 1500
    };
    //Amulets
    Accessory.AmuletofStrength = {
        name: 'Amulet of Strength',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'black',
        image: 'AmuletOfStrength',
        iLvl: 1,
        baseStrength: 5,
        value: 50
    };
    Accessory.AmuletofPower = {
        name: 'Amulet of Power',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'green',
        image: 'AmuletOfPower',
        iLvl: 2,
        baseStrength: 10,
        value: 200
    };
    Accessory.AmuletofSupremacy = {
        name: 'Amulet of Supremacy',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'blue',
        image: 'AmuletOfSupremacy',
        iLvl: 3,
        baseStrength: 15,
        value: 500
    };
    Accessory.AmuletofForce = {
        name: 'Amulet of Force',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'orange',
        image: 'AmuletOfForce',
        iLvl: 4,
        baseStrength: 20,
        value: 800
    };
    Accessory.AmuletofMight = {
        name: 'Amulet of Might',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'red',
        image: 'AmuletOfMight',
        iLvl: 5,
        baseStrength: 25,
        value: 1500
    };
    //Amulet Endurance
    Accessory.AmuletofEndurance = {
        name: 'Amulet of Endurance',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'black',
        image: 'AmuletOfEndurance',
        iLvl: 1,
        baseEndurance: 5,
        value: 50
    };
    Accessory.AmuletofStamina = {
        name: 'Amulet of Stamina',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'green',
        image: 'AmuletOfStamina',
        iLvl: 2,
        baseEndurance: 10,
        value: 200
    };
    Accessory.AmuletofFortitude = {
        name: 'Amulet of Fortitude',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'blue',
        image: 'AmuletOfFortitude',
        iLvl: 3,
        baseEndurance: 15,
        value: 500
    };
    Accessory.AmuletofHardness = {
        name: 'Amulet of Hardness',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'orange',
        image: 'AmuletOfHardness',
        iLvl: 4,
        baseEndurance: 20,
        value: 800
    };
    Accessory.AmuletofTenacity = {
        name: 'Amulet of Tenacity',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'red',
        image: 'AmuletOfTenacity',
        iLvl: 5,
        baseStrength: 25,
        value: 1500
    };
    //Amulet Agility
    Accessory.AmuletofAgility = {
        name: 'Amulet of Agility',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'black',
        image: 'AmuletOfAgility',
        iLvl: 1,
        baseAgility: 5,
        value: 50
    };
    Accessory.AmuletofFeather = {
        name: 'Amulet of Feather',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'green',
        image: 'AmuletOfFeather',
        iLvl: 2,
        baseAgility: 10,
        value: 200
    };
    Accessory.AmuletofBalance = {
        name: 'Amulet of Balance',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'blue',
        image: 'AmuletOfBalance',
        iLvl: 3,
        baseAgility: 15,
        value: 500
    };
    Accessory.AmuletofFlexibility = {
        name: 'Amulet of Flexibility',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'orange',
        image: 'AmuletOfFlexibility',
        iLvl: 4,
        baseAgility: 20,
        value: 800
    };
    Accessory.AmuletofAlertness = {
        name: 'Amulet of Alertness',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'red',
        image: 'AmuletOfAlertness',
        iLvl: 5,
        baseAgility: 25,
        value: 1500
    };
    //Amulet Dexterity
    Accessory.AmuletofDexterity = {
        name: 'Amulet of Dexterity',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'black',
        image: 'AmuletOfDexterity',
        iLvl: 1,
        baseDexterity: 5,
        value: 50
    };
    Accessory.AmuletofExpertise = {
        name: 'Amulet of Expertise',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'green',
        image: 'AmuletOfExpertise',
        iLvl: 2,
        baseDexterity: 10,
        value: 200
    };
    Accessory.AmuletofSkill = {
        name: 'Amulet of Skill',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'blue',
        image: 'AmuletOfSkill',
        iLvl: 3,
        baseDexterity: 15,
        value: 500
    };
    Accessory.AmuletofAbility = {
        name: 'Amulet of Ability',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'orange',
        image: 'AmuletOfAbility',
        iLvl: 4,
        baseDexterity: 20,
        value: 800
    };
    Accessory.AmuletofMastery = {
        name: 'Amulet of Mastery',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'red',
        image: 'AmuletOfMastery',
        iLvl: 5,
        baseDexterity: 25,
        value: 1500
    };
    //Amulet Luck
    Accessory.AmuletofLuck = {
        name: 'Amulet of Luck',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'black',
        image: 'AmuletOfLuck',
        iLvl: 1,
        baseLuck: 5,
        value: 50
    };
    Accessory.AmuletofDestiny = {
        name: 'Amulet of Destiny',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'green',
        image: 'AmuletOfDestiny',
        iLvl: 2,
        baseLuck: 10,
        value: 200
    };
    Accessory.AmuletofFortune = {
        name: 'Amulet of Fortune',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'blue',
        image: 'AmuletOfFortune',
        iLvl: 3,
        baseLuck: 15,
        value: 500
    };
    Accessory.AmuletofChance = {
        name: 'Amulet of Chance',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'orange',
        image: 'AmuletOfChance',
        iLvl: 4,
        baseLuck: 20,
        value: 800
    };
    Accessory.AmuletofFluke = {
        name: 'Amulet of Fluke',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'red',
        image: 'AmuletOfFluke',
        iLvl: 5,
        baseLuck: 25,
        value: 1500
    };
    //Amulet Defense
    Accessory.AmuletofDefense = {
        name: 'Amulet of Defense',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'black',
        image: 'AmuletOfDefense',
        iLvl: 1,
        baseDefense: 5,
        value: 50
    };
    Accessory.AmuletofProtection = {
        name: 'Amulet of Protection',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'green',
        image: 'AmuletOfProtection',
        iLvl: 2,
        baseDefense: 10,
        value: 200
    };
    Accessory.AmuletofImmunity = {
        name: 'Amulet of Immunity',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'blue',
        image: 'AmuletOfImmunity',
        iLvl: 3,
        baseDefense: 15,
        value: 500
    };
    Accessory.AmuletofSafety = {
        name: 'Amulet of Safety',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'orange',
        image: 'AmuletOfSafety',
        iLvl: 4,
        baseDefense: 20,
        value: 800
    };
    Accessory.AmuletofResistance = {
        name: 'Amulet of Resistance',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'Amulet',
        color: 'red',
        image: 'AmuletOfResistance',
        iLvl: 5,
        baseDefense: 25,
        value: 1500
    };
    //Talismans
    Accessory.TalismanofStrength = {
        name: 'Talisman of Strength',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'black',
        image: 'TalismanOfStrength',
        iLvl: 1,
        baseStrength: 5,
        value: 50
    };
    Accessory.TalismanofPower = {
        name: 'Talisman of Power',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'green',
        image: 'TalismanOfPower',
        iLvl: 2,
        baseStrength: 10,
        value: 200
    };
    Accessory.TalismanofSupremacy = {
        name: 'Talisman of Supremacy',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'blue',
        image: 'TalismanOfSupremacy',
        iLvl: 3,
        baseStrength: 15,
        value: 500
    };
    Accessory.TalismanofForce = {
        name: 'Talisman of Force',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'orange',
        image: 'TalismanOfForce',
        iLvl: 4,
        baseStrength: 20,
        value: 800
    };
    Accessory.TalismanofMight = {
        name: 'Talisman of Might',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'red',
        image: 'TalismanOfMight',
        iLvl: 5,
        baseStrength: 25,
        value: 1500
    };
    //Talisman Endurance
    Accessory.TalismanofEndurance = {
        name: 'Talisman of Endurance',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'black',
        image: 'TalismanOfEndurance',
        iLvl: 1,
        baseEndurance: 5,
        value: 50
    };
    Accessory.TalismanofStamina = {
        name: 'Talisman of Stamina',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'green',
        image: 'TalismanOfStamina',
        iLvl: 2,
        baseEndurance: 10,
        value: 200
    };
    Accessory.TalismanofFortitude = {
        name: 'Talisman of Fortitude',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'blue',
        image: 'TalismanOfFortitude',
        iLvl: 3,
        baseEndurance: 15,
        value: 500
    };
    Accessory.TalismanofHardness = {
        name: 'Talisman of Hardness',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'orange',
        image: 'TalismanOfHardness',
        iLvl: 4,
        baseEndurance: 20,
        value: 800
    };
    Accessory.TalismanofTenacity = {
        name: 'Talisman of Tenacity',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'red',
        image: 'TalismanOfTenacity',
        iLvl: 5,
        baseStrength: 25,
        value: 1500
    };
    //Talisman Agility
    Accessory.TalismanofAgility = {
        name: 'Talisman of Agility',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'black',
        image: 'TalismanOfAgility',
        iLvl: 1,
        baseAgility: 5,
        value: 50
    };
    Accessory.TalismanofFeather = {
        name: 'Talisman of Feather',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'green',
        image: 'TalismanOfFeather',
        iLvl: 2,
        baseAgility: 10,
        value: 200
    };
    Accessory.TalismanofBalance = {
        name: 'Talisman of Balance',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'blue',
        image: 'TalismanOfBalance',
        iLvl: 3,
        baseAgility: 15,
        value: 500
    };
    Accessory.TalismanofFlexibility = {
        name: 'Talisman of Flexibility',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'orange',
        image: 'TalismanOfFlexibility',
        iLvl: 4,
        baseAgility: 20,
        value: 800
    };
    Accessory.TalismanofAlertness = {
        name: 'Talisman of Alertness',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'red',
        image: 'TalismanOfAlertness',
        iLvl: 5,
        baseAgility: 25,
        value: 1500
    };
    //Talisman Dexterity
    Accessory.TalismanofDexterity = {
        name: 'Talisman of Dexterity',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'black',
        image: 'TalismanOfDexterity',
        iLvl: 1,
        baseDexterity: 5,
        value: 50
    };
    Accessory.TalismanofExpertise = {
        name: 'Talisman of Expertise',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'green',
        image: 'TalismanOfExpertise',
        iLvl: 2,
        baseDexterity: 10,
        value: 200
    };
    Accessory.TalismanofSkill = {
        name: 'Talisman of Skill',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'blue',
        image: 'TalismanOfSkill',
        iLvl: 3,
        baseDexterity: 15,
        value: 500
    };
    Accessory.TalismanofAbility = {
        name: 'Talisman of Ability',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'orange',
        image: 'TalismanOfAbility',
        iLvl: 4,
        baseDexterity: 20,
        value: 800
    };
    Accessory.TalismanofMastery = {
        name: 'Talisman of Mastery',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'red',
        image: 'TalismanOfMastery',
        iLvl: 5,
        baseDexterity: 25,
        value: 1500
    };
    //Talisman Luck
    Accessory.TalismanofLuck = {
        name: 'Talisman of Luck',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'black',
        image: 'TalismanOfLuck',
        iLvl: 1,
        baseLuck: 5,
        value: 50
    };
    Accessory.TalismanofDestiny = {
        name: 'Talisman of Destiny',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'green',
        image: 'TalismanOfDestiny',
        iLvl: 2,
        baseLuck: 10,
        value: 200
    };
    Accessory.TalismanofFortune = {
        name: 'Talisman of Fortune',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'blue',
        image: 'TalismanOfFortune',
        iLvl: 3,
        baseLuck: 15,
        value: 500
    };
    Accessory.TalismanofChance = {
        name: 'Talisman of Chance',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'orange',
        image: 'TalismanOfChance',
        iLvl: 4,
        baseLuck: 20,
        value: 800
    };
    Accessory.TalismanofFluke = {
        name: 'Talisman of Fluke',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'red',
        image: 'TalismanOfFluke',
        iLvl: 5,
        baseLuck: 25,
        value: 1500
    };
    //Talisman Defense
    Accessory.TalismanofDefense = {
        name: 'Talisman of Defense',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'black',
        image: 'TalismanOfDefense',
        iLvl: 1,
        baseDefense: 5,
        value: 50
    };
    Accessory.TalismanofProtection = {
        name: 'Talisman of Protection',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'green',
        image: 'TalismanOfProtection',
        iLvl: 2,
        baseDefense: 10,
        value: 200
    };
    Accessory.TalismanofImmunity = {
        name: 'Talisman of Immunity',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'blue',
        image: 'TalismanOfImmunity',
        iLvl: 3,
        baseDefense: 15,
        value: 500
    };
    Accessory.TalismanofSafety = {
        name: 'Talisman of Safety',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'orange',
        image: 'TalismanOfSafety',
        iLvl: 4,
        baseDefense: 20,
        value: 800
    };
    Accessory.TalismanofResistance = {
        name: 'Talisman of Resistance',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'Talisman',
        color: 'red',
        image: 'TalismanOfResistance',
        iLvl: 5,
        baseDefense: 25,
        value: 1500
    };
    ItemList.Accessory = Accessory;
};