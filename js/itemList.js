ItemList = {};
function MakeItemList() {
    Weapons = {};
    //Weapons
    Weapons.ShortSword = {
        name: 'Short Sword',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'sword',
        color: 'black',
        image: 'ShortSword',
        iLvl: 1,
        baseMinDamage: 2,
        baseMaxDamage: 4,
        baseStrength: 1,
        baseAgility: 2,
        
    };
    Weapons.HandAxe = {
        name: 'Hand Axe',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'axe',
        color: 'black',
        image: 'HandAxe',
        iLvl: 1,
        baseMinDamage: 1,
        baseMaxDamage: 5,
        baseStrength: 2,
        baseAgility: 1,
        
    };
    Weapons.BroadSword = {
        name: 'Broad Sword',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'sword',
        color: 'green',
        image: 'BroadSword',
        iLvl: 2,
        baseMinDamage: 4,
        baseMaxDamage: 6,
        baseStrength: 3,
        baseAgility: 4,
        
    };
    Weapons.BroadAxe = {
        name: 'Broad Axe',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'axe',
        color: 'green',
        image: 'BroadAxe',
        iLvl: 2,
        baseMinDamage: 2,
        baseMaxDamage: 8,
        baseStrength: 4,
        baseAgility: 3,
        
    };
    Weapons.GreatSword = {
        name: 'Great Sword',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'sword',
        color: 'blue',
        image: 'GreatSword',
        iLvl: 3,
        baseMinDamage: 8,
        baseMaxDamage: 11,
        baseStrength: 6,
        baseAgility: 8,
        
    };
    Weapons.MilitaryAxe = {
        name: 'Military Axe',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'axe',
        color: 'blue',
        image: 'MilitaryAxe',
        iLvl: 3,
        baseMinDamage: 5,
        baseMaxDamage: 14,
        baseStrength: 8,
        baseAgility: 4,
        
    };
    Weapons.Scimitar = {
        name: 'Scimitar',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'sword',
        color: 'black',
        image: 'Scimitar',
        iLvl: 6,
        baseMinDamage: 18,
        baseMaxDamage: 23,
        baseStrength: 20,
        baseAgility: 8,
        baseEndurance: 10,
        
    };
    Weapons.DoubleAxe = {
        name: 'Double Axe',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'axe',
        color: 'black',
        image: 'DoubleAxe',
        iLvl: 6,
        baseMinDamage: 12,
        baseMaxDamage: 25,
        baseStrength: 28,
        baseAgility: 6,
        baseEndurance: 8,
        
    };
    Weapons.LongSword = {
        name: 'Long Sword',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'sword',
        color: 'green',
        image: 'LongSword',
        iLvl: 7,
        baseMinDamage: 25,
        baseMaxDamage: 30,
        baseStrength: 30,
        baseAgility: 14,
        baseEndurance: 15,
        
    };
    Weapons.BattleAxe = {
        name: 'Battle Axe',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'axe',
        color: 'green',
        image: 'BattleAxe',
        iLvl: 7,
        baseMinDamage: 18,
        baseMaxDamage: 33,
        baseStrength: 38,
        baseAgility: 10,
        baseEndurance: 12,
        
    };
    Weapons.Gladius = {
        name: 'Gladius',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'sword',
        color: 'blue',
        image: 'Gladius',
        iLvl: 8,
        baseMinDamage: 36,
        baseMaxDamage: 42,
        baseStrength: 38,
        baseAgility: 20,
        baseEndurance: 20,
        
    };
    Weapons.BeardedAxe = {
        name: 'Bearded Axe',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'axe',
        color: 'blue',
        image: 'BeardedAxe',
        iLvl: 8,
        baseMinDamage: 25,
        baseMaxDamage: 40,
        baseStrength: 48,
        baseAgility: 14,
        baseEndurance: 18,
        
    };
    Weapons.Sabre = {
        name: 'Sabre',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'sword',
        color: 'black',
        image: 'Sabre',
        iLvl: 11,
        baseMinDamage: 40,
        baseMaxDamage: 45,
        baseStrength: 50,
        baseAgility: 30,
        baseEndurance: 35,
        
    };
    Weapons.WarAxe = {
        name: 'War Axe',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'axe',
        color: 'black',
        image: 'WarAxe',
        iLvl: 11,
        baseMinDamage: 40,
        baseMaxDamage: 60,
        baseStrength: 60,
        baseAgility: 20,
        baseEndurance: 30,
        
    };
    Weapons.Claymore = {
        name: 'Claymore',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'sword',
        color: 'green',
        image: 'Claymore',
        iLvl: 12,
        baseMinDamage: 50,
        baseMaxDamage: 55,
        baseStrength: 60,
        baseAgility: 40,
        baseEndurance: 45,
        
    };
    Weapons.GreatAxe = {
        name: 'Great Axe',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'axe',
        color: 'green',
        image: 'GreatAxe',
        iLvl: 12,
        baseMinDamage: 50,
        baseMaxDamage: 70,
        baseStrength: 70,
        baseAgility: 30,
        baseEndurance: 40,
        
    };
    Weapons.RuneSword = {
        name: 'Rune Sword',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'sword',
        color: 'blue',
        image: 'RuneSword',
        iLvl: 13,
        baseMinDamage: 65,
        baseMaxDamage: 70,
        baseStrength: 75,
        baseAgility: 50,
        baseEndurance: 60,
        
    };
    Weapons.GothicAxe = {
        name: 'Gothic Axe',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'axe',
        color: 'blue',
        image: 'GothicAxe',
        iLvl: 13,
        baseMinDamage: 60,
        baseMaxDamage: 90,
        baseStrength: 90,
        baseAgility: 50,
        baseEndurance: 50,
        
    };
    Weapons.Falchion = {
        name: 'Falchion',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'sword',
        color: 'black',
        image: 'Falchion',
        iLvl: 16,
        baseMinDamage: 70,
        baseMaxDamage: 75,
        baseStrength: 80,
        baseAgility: 60,
        baseEndurance: 70,
        
    };
    Weapons.LargeAxe = {
        name: 'Large Axe',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'axe',
        color: 'black',
        image: 'LargeAxe',
        iLvl: 16,
        baseMinDamage: 80,
        baseMaxDamage: 110,
        baseStrength: 90,
        baseAgility: 60,
        baseEndurance: 70,
        
    };
    Weapons.WarSword = {
        name: 'War Sword',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'sword',
        color: 'green',
        image: 'WarSword',
        iLvl: 17,
        baseMinDamage: 80,
        baseMaxDamage: 85,
        baseStrength: 90,
        baseAgility: 70,
        baseEndurance: 80,
        
    };
    Weapons.Cleaver = {
        name: 'Cleaver',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'axe',
        color: 'green',
        image: 'Cleaver',
        iLvl: 17,
        baseMinDamage: 100,
        baseMaxDamage: 140,
        baseStrength: 120,
        baseAgility: 80,
        baseEndurance: 90,
        
    };
    Weapons.AncientSword = {
        name: 'Ancient Sword',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'sword',
        color: 'blue',
        image: 'AncientSword',
        iLvl: 18,
        baseMinDamage: 100,
        baseMaxDamage: 110,
        baseStrength: 110,
        baseAgility: 90,
        baseEndurance: 90,
        
    };
    Weapons.Tabar = {
        name: 'Tabar',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'axe',
        color: 'blue',
        image: 'Tabar',
        iLvl: 18,
        baseMinDamage: 140,
        baseMaxDamage: 180,
        baseStrength: 150,
        baseAgility: 100,
        baseEndurance: 110,
        
    };
    Weapons.Club = {
        name: 'Club',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'mace',
        color: 'black',
        image: 'Club',
        iLvl: 1,
        baseMinDamage: 2,
        baseMaxDamage: 5,
        baseStrength: 2,
        baseEndurance: 1,
        baseWisdom: 1,
        
    };
    Weapons.WarHammer = {
        name: 'War Hammer',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'mace',
        color: 'green',
        image: 'WarHammer',
        iLvl: 2,
        baseMinDamage: 5,
        baseMaxDamage: 7,
        baseStrength: 4,
        baseEndurance: 2,
        baseWisdom: 2,
        
    };
    Weapons.JaggedStar = {
        name: 'Jagged Star',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'mace',
        color: 'blue',
        image: 'JaggedStar',
        iLvl: 3,
        baseMinDamage: 8,
        baseMaxDamage: 12,
        baseStrength: 7,
        baseEndurance: 4,
        baseWisdom: 4,
        
    };
    Weapons.SpikedClub = {
        name: 'Spiked Club',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'mace',
        color: 'black',
        image: 'SpikedClub',
        iLvl: 6,
        baseMinDamage: 13,
        baseMaxDamage: 16,
        baseStrength: 14,
        baseEndurance: 8,
        baseWisdom: 6,
        
    };
    Weapons.Maul = {
        name: 'Maul',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'mace',
        color: 'green',
        image: 'Maul',
        iLvl: 7,
        baseMinDamage: 17,
        baseMaxDamage: 20,
        baseStrength: 18,
        baseEndurance: 10,
        baseWisdom: 8,
        
    };
    Weapons.BattleHammer = {
        name: 'Battle Hammer',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'mace',
        color: 'blue',
        image: 'BattleHammer',
        iLvl: 8,
        baseMinDamage: 24,
        baseMaxDamage: 28,
        baseStrength: 26,
        baseEndurance: 16,
        baseWisdom: 14,
        
    };
    Weapons.MorningStar = {
        name: 'Morning Star',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'mace',
        color: 'black',
        image: 'MorningStar',
        iLvl: 11,
        baseMinDamage: 30,
        baseMaxDamage: 40,
        baseStrength: 35,
        baseEndurance: 20,
        baseWisdom: 25,
        
    };
    Weapons.GreatMaul = {
        name: 'Great Maul',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'mace',
        color: 'green',
        image: 'GreatMaul',
        iLvl: 12,
        baseMinDamage: 40,
        baseMaxDamage: 55,
        baseStrength: 45,
        baseEndurance: 30,
        baseWisdom: 35,
        
    };
    Weapons.WarClub = {
        name: 'War Club',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'mace',
        color: 'blue',
        image: 'WarClub',
        iLvl: 13,
        baseMinDamage: 50,
        baseMaxDamage: 65,
        baseStrength: 55,
        baseEndurance: 40,
        baseWisdom: 50,
        
    };
    Weapons.Flail = {
        name: 'Flail',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'mace',
        color: 'black',
        image: 'Flail',
        iLvl: 16,
        baseMinDamage: 70,
        baseMaxDamage: 85,
        baseStrength: 60,
        baseEndurance: 50,
        baseWisdom: 50,
        
    };
    Weapons.Cudgel = {
        name: 'Cudgel',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'mace',
        color: 'green',
        image: 'Cudgel',
        iLvl: 17,
        baseMinDamage: 90,
        baseMaxDamage: 110,
        baseStrength: 80,
        baseEndurance: 70,
        baseWisdom: 70,
        
    };
    Weapons.Trucheon = {
        name: 'Trucheon',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'mace',
        color: 'blue',
        image: 'Trucheon',
        iLvl: 18,
        baseMinDamage: 120,
        baseMaxDamage: 140,
        baseStrength: 110,
        baseEndurance: 90,
        baseWisdom: 100,
        
    };
    Weapons.ShortStaff = {
        name: 'Short Staff',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'staff',
        color: 'black',
        image: 'ShortStaff',
        iLvl: 1,
        baseMinDamage: 1,
        baseMaxDamage: 3,
        baseEndurance: 1,
        baseWisdom: 1,
        baseIntelligence: 3,
        
    };
    Weapons.GrimWand = {
        name: 'Grim Wand',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'staff',
        color: 'green',
        image: 'GrimWand',
        iLvl: 2,
        baseMinDamage: 2,
        baseMaxDamage: 5,
        baseEndurance: 2,
        baseWisdom: 1,
        baseIntelligence: 7,
        
    };
    Weapons.JoStaff = {
        name: 'Jo Staff',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'staff',
        color: 'blue',
        image: 'JoStaff',
        iLvl: 3,
        baseMinDamage: 4,
        baseMaxDamage: 9,
        baseEndurance: 4,
        baseWisdom: 2,
        baseIntelligence: 12,
        
    };
    Weapons.LongStaff = {
        name: 'Long Staff',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'staff',
        color: 'black',
        image: 'LongStaff',
        iLvl: 6,
        baseMinDamage: 7,
        baseMaxDamage: 13,
        baseEndurance: 7,
        baseWisdom: 4,
        baseIntelligence: 25,
        
    };
    Weapons.BurntWand = {
        name: 'Burnt Wand',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'staff',
        color: 'green',
        image: 'BurntWand',
        iLvl: 7,
        baseMinDamage: 10,
        baseMaxDamage: 16,
        baseEndurance: 10,
        baseWisdom: 7,
        baseIntelligence: 30,
        
    };
    Weapons.QuaterStaff = {
        name: 'Quater Staff',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'staff',
        color: 'blue',
        image: 'QuaterStaff',
        iLvl: 8,
        baseMinDamage: 14,
        baseMaxDamage: 20,
        baseEndurance: 15,
        baseWisdom: 12,
        baseIntelligence: 45,
        
    };
    Weapons.Wand = {
        name: 'Wand',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'staff',
        color: 'black',
        image: 'Wand',
        iLvl: 11,
        baseMinDamage: 15,
        baseMaxDamage: 19,
        baseEndurance: 20,
        baseWisdom: 15,
        baseIntelligence: 60,
        
    };
    Weapons.GnarledStaff = {
        name: 'Gnarled Staff',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'staff',
        color: 'green',
        image: 'GnarledStaff',
        iLvl: 12,
        baseMinDamage: 20,
        baseMaxDamage: 28,
        baseEndurance: 35,
        baseWisdom: 25,
        baseIntelligence: 70,
        
    };
    Weapons.ArchonStaff = {
        name: 'Archon Staff',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'staff',
        color: 'blue',
        image: 'ArchonStaff',
        iLvl: 13,
        baseMinDamage: 25,
        baseMaxDamage: 32,
        baseEndurance: 45,
        baseWisdom: 30,
        baseIntelligence: 100,
        
    };
    Weapons.YewWand = {
        name: 'Yew Wand',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'staff',
        color: 'black',
        image: 'YewWand',
        iLvl: 16,
        baseMinDamage: 35,
        baseMaxDamage: 45,
        baseEndurance: 50,
        baseWisdom: 30,
        baseIntelligence: 120,
        
    };
    Weapons.LichStaff = {
        name: 'Lich Staff',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'staff',
        color: 'green',
        image: 'LichStaff',
        iLvl: 17,
        baseMinDamage: 45,
        baseMaxDamage: 55,
        baseEndurance: 70,
        baseWisdom: 50,
        baseIntelligence: 150,
        
    };
    Weapons.GothicStaff = {
        name: 'Gothic Staff',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'staff',
        color: 'blue',
        image: 'GothicStaff',
        iLvl: 18,
        baseMinDamage: 55,
        baseMaxDamage: 70,
        baseEndurance: 90,
        baseWisdom: 75,
        baseIntelligence: 200,
        
    };
    Weapons.ShortBow = {
        name: 'Short Bow',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'ranged',
        color: 'black',
        image: 'ShortBow',
        iLvl: 1,
        baseMinDamage: 2,
        baseMaxDamage: 6,
        baseStrength: 1,
        baseAgility: 1,
        baseDexterity: 3,
        
    };
    Weapons.ShortBattleBow = {
        name: 'Short Battle Bow',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'ranged',
        color: 'green',
        image: 'ShortBattleBow',
        iLvl: 2,
        baseMinDamage: 5,
        baseMaxDamage: 9,
        baseStrength: 3,
        baseAgility: 2,
        baseDexterity: 5,
        
    };
    Weapons.RazorBow = {
        name: 'Razor Bow',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'ranged',
        color: 'blue',
        image: 'RazorBow',
        iLvl: 3,
        baseMinDamage: 8,
        baseMaxDamage: 13,
        baseStrength: 5,
        baseAgility: 4,
        baseDexterity: 9,
        
    };
    Weapons.HuntersBow = {
        name: 'Hunter\'s Bow',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'ranged',
        color: 'black',
        image: 'HuntersBow',
        iLvl: 6,
        baseMinDamage: 15,
        baseMaxDamage: 25,
        baseStrength: 10,
        baseAgility: 8,
        baseDexterity: 20,
        
    };
    Weapons.LongBattleBow = {
        name: 'Long Battle Bow',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'ranged',
        color: 'green',
        image: 'LongBattleBow',
        iLvl: 7,
        baseMinDamage: 20,
        baseMaxDamage: 32,
        baseStrength: 15,
        baseAgility: 14,
        baseDexterity: 28,
        
    };
    Weapons.CedarBow = {
        name: 'Cedar Bow',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'ranged',
        color: 'blue',
        image: 'CedarBow',
        iLvl: 8,
        baseMinDamage: 28,
        baseMaxDamage: 39,
        baseStrength: 22,
        baseAgility: 20,
        baseDexterity: 38,
        
    };
    Weapons.LongBow = {
        name: 'Long Bow',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'ranged',
        color: 'black',
        image: 'LongBow',
        iLvl: 11,
        baseMinDamage: 40,
        baseMaxDamage: 60,
        baseStrength: 30,
        baseAgility: 30,
        baseDexterity: 40,
        
    };
    Weapons.ShortWarBow = {
        name: 'Short War Bow',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'ranged',
        color: 'green',
        image: 'ShortWarBow',
        iLvl: 12,
        baseMinDamage: 50,
        baseMaxDamage: 70,
        baseStrength: 40,
        baseAgility: 40,
        baseDexterity: 50,
        
    };
    Weapons.DoubleBow = {
        name: 'Double Bow',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'ranged',
        color: 'blue',
        image: 'DoubleBow',
        iLvl: 13,
        baseMinDamage: 60,
        baseMaxDamage: 90,
        baseStrength: 50,
        baseAgility: 60,
        baseDexterity: 70,
        
    };
    Weapons.CompositeBow = {
        name: 'Composite Bow',
        itemQuality: 'Common',
        itemType: 'weapon',
        subType: 'ranged',
        color: 'black',
        image: 'CompositeBow',
        iLvl: 16,
        baseMinDamage: 100,
        baseMaxDamage: 120,
        baseStrength: 60,
        baseAgility: 60,
        baseDexterity: 90,
        
    };
    Weapons.LongWarBow = {
        name: 'Long War Bow',
        itemQuality: 'Uncommon',
        itemType: 'weapon',
        subType: 'ranged',
        color: 'green',
        image: 'LongWarBow',
        iLvl: 17,
        baseMinDamage: 120,
        baseMaxDamage: 160,
        baseStrength: 70,
        baseAgility: 80,
        baseDexterity: 100,
        
    };
    Weapons.RuneBow = {
        name: 'Rune Bow',
        itemQuality: 'Rare',
        itemType: 'weapon',
        subType: 'ranged',
        color: 'blue',
        image: 'RuneBow',
        iLvl: 18,
        baseMinDamage: 140,
        baseMaxDamage: 180,
        baseStrength: 90,
        baseAgility: 110,
        baseDexterity: 140,
        
    };
    Weapons.GothicSword = {
        name: 'Gothic Sword',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'sword',
        color: 'orange',
        image: 'GothicSword',
        iLvl: 4,
        baseMinDamage: 12,
        baseMaxDamage: 15,
        baseStrength: 12,
        baseAgility: 10,
        
    };
    Weapons.BerserkerAxe = {
        name: 'Berserker Axe',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'axe',
        color: 'orange',
        image: 'BerserkerAxe',
        iLvl: 4,
        baseMinDamage: 8,
        baseMaxDamage: 20,
        baseStrength: 18,
        baseAgility: 6,
        
    };
    Weapons.TyrantClub = {
        name: 'Tyrant Club',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'mace',
        color: 'orange',
        image: 'TyrantClub',
        iLvl: 4,
        baseMinDamage: 13,
        baseMaxDamage: 17,
        baseStrength: 12,
        baseEndurance: 7,
        baseWisdom: 8,
        
    };
    Weapons.Stalagmite = {
        name: 'Stalagmite',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'staff',
        color: 'orange',
        image: 'Stalagmite',
        iLvl: 4,
        baseMinDamage: 7,
        baseMaxDamage: 12,
        baseEndurance: 6,
        baseWisdom: 4,
        baseIntelligence: 18,
        
    };
    Weapons.GreatBow = {
        name: 'Great Bow',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'ranged',
        color: 'orange',
        image: 'GreatBow',
        iLvl: 4,
        baseMinDamage: 14,
        baseMaxDamage: 20,
        baseStrength: 9,
        baseAgility: 8,
        baseDexterity: 15,
        
    };
    Weapons.TuskSword = {
        name: 'Tusk Sword',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'sword',
        color: 'orange',
        image: 'TuskSword',
        iLvl: 9,
        baseMinDamage: 45,
        baseMaxDamage: 50,
        baseStrength: 48,
        baseAgility: 30,
        baseEndurance: 32,
        
    };
    Weapons.SmallCrescent = {
        name: 'Small Crescent',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'axe',
        color: 'orange',
        image: 'SmallCrescent',
        iLvl: 9,
        baseMinDamage: 35,
        baseMaxDamage: 60,
        baseStrength: 60,
        baseAgility: 18,
        baseEndurance: 26,
        
    };
    Weapons.DevilStar = {
        name: 'Devil Star',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'mace',
        color: 'orange',
        image: 'DevilStar',
        iLvl: 9,
        baseMinDamage: 34,
        baseMaxDamage: 38,
        baseStrength: 35,
        baseEndurance: 22,
        baseWisdom: 20,
        
    };
    Weapons.PetrifiedWand = {
        name: 'Petrified Wand',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'staff',
        color: 'orange',
        image: 'PetrifiedWand',
        iLvl: 9,
        baseMinDamage: 18,
        baseMaxDamage: 24,
        baseEndurance: 22,
        baseWisdom: 16,
        baseIntelligence: 60,
        
    };
    Weapons.StagBow = {
        name: 'Stag Bow',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'ranged',
        color: 'orange',
        image: 'StagBow',
        iLvl: 9,
        baseMinDamage: 38,
        baseMaxDamage: 49,
        baseStrength: 30,
        baseAgility: 30,
        baseDexterity: 50,
        
    };
    Weapons.HydraEdge = {
        name: 'Hydra Edge',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'sword',
        color: 'orange',
        image: 'HydraEdge',
        iLvl: 14,
        baseMinDamage: 75,
        baseMaxDamage: 80,
        baseStrength: 90,
        baseAgility: 70,
        baseEndurance: 80,
        
    };
    Weapons.SilverEdgedAxe = {
        name: 'Silver Edged Axe',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'axe',
        color: 'orange',
        image: 'SilverEdgedAxe',
        iLvl: 14,
        baseMinDamage: 80,
        baseMaxDamage: 120,
        baseStrength: 110,
        baseAgility: 60,
        baseEndurance: 60,
        
    };
    Weapons.Knout = {
        name: 'Knout',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'mace',
        color: 'orange',
        image: 'Knout',
        iLvl: 14,
        baseMinDamage: 70,
        baseMaxDamage: 85,
        baseStrength: 70,
        baseEndurance: 50,
        baseWisdom: 60,
        
    };
    Weapons.TombWand = {
        name: 'Tomb Wand',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'staff',
        color: 'orange',
        image: 'TombWand',
        iLvl: 14,
        baseMinDamage: 35,
        baseMaxDamage: 45,
        baseEndurance: 60,
        baseWisdom: 40,
        baseIntelligence: 140,
        
    };
    Weapons.HydraBow = {
        name: 'Hydra Bow',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'ranged',
        color: 'orange',
        image: 'HydraBow',
        iLvl: 14,
        baseMinDamage: 80,
        baseMaxDamage: 100,
        baseStrength: 60,
        baseAgility: 70,
        baseDexterity: 90,
        
    };
    Weapons.PhaseBlade = {
        name: 'Phase Blade',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'sword',
        color: 'orange',
        image: 'PhaseBlade',
        iLvl: 19,
        baseMinDamage: 120,
        baseMaxDamage: 130,
        baseStrength: 130,
        baseAgility: 110,
        baseEndurance: 120,
        
    };
    Weapons.AncientAxe = {
        name: 'Ancient Axe',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'axe',
        color: 'orange',
        image: 'AncientAxe',
        iLvl: 19,
        baseMinDamage: 170,
        baseMaxDamage: 220,
        baseStrength: 170,
        baseAgility: 120,
        baseEndurance: 140,
        
    };
    Weapons.Scourge = {
        name: 'Scourge',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'mace',
        color: 'orange',
        image: 'Scourge',
        iLvl: 19,
        baseMinDamage: 130,
        baseMaxDamage: 150,
        baseStrength: 140,
        baseEndurance: 120,
        baseWisdom: 130,
        
    };
    Weapons.GraveWand = {
        name: 'Grave Wand',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'staff',
        color: 'orange',
        image: 'GraveWand',
        iLvl: 19,
        baseMinDamage: 70,
        baseMaxDamage: 90,
        baseEndurance: 120,
        baseWisdom: 100,
        baseIntelligence: 280,
        
    };
    Weapons.ReflexBow = {
        name: 'Reflex Bow',
        itemQuality: 'Epic',
        itemType: 'weapon',
        subType: 'ranged',
        color: 'orange',
        image: 'ReflexBow',
        iLvl: 19,
        baseMinDamage: 160,
        baseMaxDamage: 200,
        baseStrength: 120,
        baseAgility: 140,
        baseDexterity: 180,
        
    };
    Weapons.ColossusSword = {
        name: 'Colossus Sword',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'sword',
        color: 'red',
        image: 'ColossusSword',
        iLvl: 5,
        baseMinDamage: 20,
        baseMaxDamage: 25,
        baseStrength: 25,
        baseAgility: 12,
        
    };
    Weapons.EttinAxe = {
        name: 'Ettin Axe',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'axe',
        color: 'red',
        image: 'EttinAxe',
        iLvl: 5,
        baseMinDamage: 15,
        baseMaxDamage: 30,
        baseStrength: 35,
        baseAgility: 8,
        
    };
    Weapons.ReinforcedMace = {
        name: 'Reinforced Mace',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'mace',
        color: 'red',
        image: 'ReinforcedMace',
        iLvl: 5,
        baseMinDamage: 18,
        baseMaxDamage: 25,
        baseStrength: 18,
        baseEndurance: 12,
        baseWisdom: 10,
        
    };
    Weapons.GhostWand = {
        name: 'Ghost Wand',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'staff',
        color: 'red',
        image: 'GhostWand',
        iLvl: 5,
        baseMinDamage: 10,
        baseMaxDamage: 16,
        baseEndurance: 10,
        baseWisdom: 7,
        baseIntelligence: 30,
        
    };
    Weapons.AshwoodBow = {
        name: 'Ashwood Bow',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'ranged',
        color: 'red',
        image: 'AshwoodBow',
        iLvl: 5,
        baseMinDamage: 20,
        baseMaxDamage: 30,
        baseStrength: 15,
        baseAgility: 12,
        baseDexterity: 25,
        
    };
    Weapons.HighlandBlade = {
        name: 'Highland Blade',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'sword',
        color: 'red',
        image: 'HighlandBlade',
        iLvl: 10,
        baseMinDamage: 53,
        baseMaxDamage: 60,
        baseStrength: 65,
        baseAgility: 45,
        baseEndurance: 50,
        
    };
    Weapons.FeralAxe = {
        chance: 5,
        name: 'Feral Axe',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'axe',
        color: 'red',
        image: 'FeralAxe',
        iLvl: 10,
        baseMinDamage: 50,
        baseMaxDamage: 80,
        baseStrength: 80,
        baseAgility: 30,
        baseEndurance: 45,
        
    };
    Weapons.OgreMaul = {
        chance: 5,
        name: 'Ogre Maul',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'mace',
        color: 'red',
        image: 'OgreMaul',
        iLvl: 10,
        baseMinDamage: 42,
        baseMaxDamage: 46,
        baseStrength: 45,
        baseEndurance: 30,
        baseWisdom: 30,
        
    };
    Weapons.UnearthedWand = {
        chance: 5,
        name: 'Unearthed Wand',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'staff',
        color: 'red',
        image: 'UnearthedWand',
        iLvl: 10,
        baseMinDamage: 22,
        baseMaxDamage: 27,
        baseStrength: 30,
        baseWisdom: 22,
        baseIntelligence: 80,
        
    };
    Weapons.CeremonialBow = {
        chance: 5,
        name: 'Ceremonial Bow',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'ranged',
        color: 'red',
        image: 'CeremonialBow',
        iLvl: 10,
        baseMinDamage: 55,
        baseMaxDamage: 70,
        baseStrength: 45,
        baseAgility: 50,
        baseDexterity: 70,
        
    };
    Weapons.LegendSword = {
        chance: 5,
        name: 'Legend Sword',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'sword',
        color: 'red',
        image: 'LegendSword',
        iLvl: 15,
        baseMinDamage: 90,
        baseMaxDamage: 100,
        baseStrength: 110,
        baseAgility: 90,
        baseEndurance: 100,
        
    };
    Weapons.Decapitator = {
        chance: 5,
        name: 'Decapitator',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'axe',
        color: 'red',
        image: 'Decapitator',
        iLvl: 15,
        baseMinDamage: 100,
        baseMaxDamage: 140,
        baseStrength: 140,
        baseAgility: 90,
        baseEndurance: 80,
        
    };
    Weapons.FlangedMace = {
        chance: 5,
        name: 'Flanged Mace',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'mace',
        color: 'red',
        image: 'FlangedMace',
        iLvl: 15,
        baseMinDamage: 90,
        baseMaxDamage: 110,
        baseStrength: 90,
        baseEndurance: 70,
        baseWisdom: 80,
        
    };
    Weapons.ElderStaff = {
        chance: 5,
        name: 'Elder Staff',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'staff',
        color: 'red',
        image: 'ElderStaff',
        iLvl: 15,
        baseMinDamage: 50,
        baseMaxDamage: 60,
        baseEndurance: 80,
        baseWisdom: 60,
        baseIntelligence: 180,
        
    };
    Weapons.MatriarchalBow = {
        chance: 5,
        name: 'Matriarchal Bow',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'ranged',
        color: 'red',
        image: 'MatriarchalBow',
        iLvl: 15,
        baseMinDamage: 110,
        baseMaxDamage: 140,
        baseStrength: 80,
        baseAgility: 90,
        baseDexterity: 120,
        
    };
    Weapons.BalrogBlade = {
        chance: 5,
        name: 'Balrog Blade',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'sword',
        color: 'red',
        image: 'BalrogBlade',
        iLvl: 20,
        baseMinDamage: 150,
        baseMaxDamage: 170,
        baseStrength: 160,
        baseAgility: 120,
        baseEndurance: 140,
        
    };
    Weapons.GloriousAxe = {
        chance: 5,
        name: 'Glorious Axe',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'axe',
        color: 'red',
        image: 'GloriousAxe',
        iLvl: 20,
        baseMinDamage: 200,
        baseMaxDamage: 250,
        baseStrength: 200,
        baseAgility: 150,
        baseEndurance: 160,
        
    };
    Weapons.ThunderMaul = {
        chance: 5,
        name: 'Thunder Maul',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'mace',
        color: 'red',
        image: 'ThunderMaul',
        iLvl: 20,
        baseMinDamage: 150,
        baseMaxDamage: 180,
        baseStrength: 180,
        baseEndurance: 150,
        baseWisdom: 170,
        
    };
    Weapons.Shillelagh = {
        chance: 5,
        name: 'Shillelagh',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'staff',
        color: 'red',
        image: 'Shillelagh',
        iLvl: 20,
        baseMinDamage: 90,
        baseMaxDamage: 100,
        baseEndurance: 150,
        baseWisdom: 120,
        baseIntelligence: 400,
        
    };
    Weapons.GrandMatronBow = {
        chance: 5,
        name: 'Grand Matron Bow',
        itemQuality: 'Legendary',
        itemType: 'weapon',
        subType: 'ranged',
        color: 'red',
        image: 'GrandMatronBow',
        iLvl: 20,
        baseMinDamage: 180,
        baseMaxDamage: 240,
        baseStrength: 150,
        baseAgility: 180,
        baseDexterity: 240,
        
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
        
    };
    ItemList.Armors = Armors;
    //Off Hand list
    OffHand = {};
    //Shields
    OffHand.Buckler = {
        name: 'Buckler',
        itemQuality: 'Common',
        itemType: 'offHand',
        subType: 'shield',
        color: 'black',
        image: 'Buckler',
        iLvl: 1,
        baseDefense: 3,
        baseEndurance: 3,
        baseStrength: 5,
        
    };
    OffHand.SpikedShield = {
        name: 'Spiked Shield',
        itemQuality: 'Uncommon',
        itemType: 'offHand',
        subType: 'shield',
        color: 'green',
        image: 'SpikedShield',
        iLvl: 2,
        baseDefense: 5,
        baseEndurance: 8,
        baseStrength: 6,
        
    };
    OffHand.TowerShield = {
        name: 'Tower Shield',
        itemQuality: 'Rare',
        itemType: 'offHand',
        subType: 'shield',
        color: 'blue',
        image: 'TowerShield',
        iLvl: 3,
        baseDefense: 8,
        baseEndurance: 12,
        baseStrength: 10,
        
    };
    OffHand.GrimShield = {
        name: 'Grim Shield',
        itemQuality: 'Epic',
        itemType: 'offHand',
        subType: 'shield',
        color: 'orange',
        image: 'GrimShield',
        iLvl: 4,
        baseDefense: 12,
        baseEndurance: 18,
        baseStrength: 14,
        
    };
    OffHand.Luna = {
        name: 'Luna',
        itemQuality: 'Legendary',
        itemType: 'offHand',
        subType: 'shield',
        color: 'red',
        image: 'Luna',
        iLvl: 5,
        baseDefense: 18,
        baseEndurance: 28,
        baseStrength: 20,
        
    };
    OffHand.SmallShield = {
        name: 'Small Shield',
        itemQuality: 'Common',
        itemType: 'offHand',
        subType: 'shield',
        color: 'black',
        image: 'SmallShield',
        iLvl: 6,
        baseDefense: 22,
        baseEndurance: 32,
        baseStrength: 24,
        
    };
    OffHand.BoneShield = {
        name: 'Bone Shield',
        itemQuality: 'Uncommon',
        itemType: 'offHand',
        subType: 'shield',
        color: 'green',
        image: 'BoneShield',
        iLvl: 7,
        baseDefense: 28,
        baseEndurance: 40,
        baseStrength: 30,
        
    };
    OffHand.GothicShield = {
        name: 'Gothic Shield',
        itemQuality: 'Rare',
        itemType: 'offHand',
        subType: 'shield',
        color: 'blue',
        image: 'GothicShield',
        iLvl: 8,
        baseDefense: 36,
        baseEndurance: 52,
        baseStrength: 34,
        
    };
    OffHand.AncientShield = {
        name: 'Ancient Shield',
        itemQuality: 'Epic',
        itemType: 'offHand',
        subType: 'shield',
        color: 'orange',
        image: 'AncientShield',
        iLvl: 9,
        baseDefense: 44,
        baseEndurance: 62,
        baseStrength: 44,
        
    };
    OffHand.Hyperion = {
        name: 'Hyperion',
        itemQuality: 'Legendary',
        itemType: 'offHand',
        subType: 'shield',
        color: 'red',
        image: 'Hyperion',
        iLvl: 10,
        baseDefense: 50,
        baseEndurance: 75,
        baseStrength: 55,
        
    };
    OffHand.LargeShield = {
        name: 'Large Shield',
        itemQuality: 'Common',
        itemType: 'offHand',
        subType: 'shield',
        color: 'black',
        image: 'LargeShield',
        iLvl: 11,
        baseDefense: 60,
        baseEndurance: 80,
        baseStrength: 60,
        
    };
    OffHand.Defender = {
        name: 'Defender',
        itemQuality: 'Uncommon',
        itemType: 'offHand',
        subType: 'shield',
        color: 'green',
        image: 'Defender',
        iLvl: 12,
        baseDefense: 75,
        baseEndurance: 95,
        baseStrength: 75,
        
    };
    OffHand.DragonShield = {
        name: 'Dragon Shield',
        itemQuality: 'Rare',
        itemType: 'offHand',
        subType: 'shield',
        color: 'blue',
        image: 'DragonShield',
        iLvl: 13,
        baseDefense: 88,
        baseEndurance: 110,
        baseStrength: 90,
        
    };
    OffHand.Monarch = {
        name: 'Monarch',
        itemQuality: 'Epic',
        itemType: 'offHand',
        subType: 'shield',
        color: 'orange',
        image: 'Monarch',
        iLvl: 14,
        baseDefense: 110,
        baseEndurance: 130,
        baseStrength: 115,
        
    };

    OffHand.TrollNest = {
        name: 'Troll Nest',
        itemQuality: 'Legendary',
        itemType: 'offHand',
        subType: 'shield',
        color: 'red',
        image: 'TrollNest',
        iLvl: 15,
        baseDefense: 125,
        baseEndurance: 150,
        baseStrength: 135,
        
    };
    OffHand.KiteShield = {
        name: 'Kite Shield',
        itemQuality: 'Common',
        itemType: 'offHand',
        subType: 'shield',
        color: 'black',
        image: 'KiteShield',
        iLvl: 16,
        baseDefense: 140,
        baseEndurance: 160,
        baseStrength: 145,
        
    };
    OffHand.RoundShield = {
        name: 'Round Shield',
        itemQuality: 'Uncommon',
        itemType: 'offHand',
        subType: 'shield',
        color: 'green',
        image: 'RoundShield',
        iLvl: 17,
        baseDefense: 160,
        baseEndurance: 175,
        baseStrength: 160,
        
    };
    OffHand.BarbedShield = {
        name: 'Barbed Shield',
        itemQuality: 'Rare',
        itemType: 'offHand',
        subType: 'shield',
        color: 'blue',
        image: 'BarbedShield',
        iLvl: 18,
        baseDefense: 175,
        baseEndurance: 190,
        baseStrength: 180,
        
    };
    OffHand.BladeBarrier = {
        name: 'Blade Barrier',
        itemQuality: 'Epic',
        itemType: 'offHand',
        subType: 'shield',
        color: 'orange',
        image: 'BladeBarrier',
        iLvl: 19,
        baseDefense: 188,
        baseEndurance: 210,
        baseStrength: 195,
        
    };
    OffHand.Aegis = {
        name: 'Aegis',
        itemQuality: 'Legendary',
        itemType: 'offHand',
        subType: 'shield',
        color: 'red',
        image: 'Aegis',
        iLvl: 20,
        baseDefense: 210,
        baseEndurance: 225,
        baseStrength: 210,
        
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
        
    };
    //Daggers
    OffHand.Dagger = {
        chance: 50,
        name: 'Dagger',
        itemQuality: 'Common',
        itemType: 'offHand',
        subType: 'dagger',
        color: 'black',
        image: 'Dagger',
        iLvl: 1,
        baseStrength: 1,
        baseAgility: 2,
        baseIntelligence: 1,
        
    };
    OffHand.Kris = {
        chance: 25,
        name: 'Kris',
        itemQuality: 'Uncommon',
        itemType: 'offHand',
        subType: 'dagger',
        color: 'green',
        image: 'Kris',
        iLvl: 2,
        baseStrength: 2,
        baseAgility: 4,
        baseIntelligence: 2,
        
    };
    OffHand.MithrilPoint = {
        chance: 10,
        name: 'Mithril Point',
        itemQuality: 'Rare',
        itemType: 'offHand',
        subType: 'dagger',
        color: 'blue',
        image: 'MithrilPoint',
        iLvl: 3,
        baseStrength: 5,
        baseAgility: 8,
        baseIntelligence: 4,
        
    };
    OffHand.BoneKnife = {
        chance: 5,
        name: 'Bone Knife',
        itemQuality: 'Epic',
        itemType: 'offHand',
        subType: 'dagger',
        color: 'orange',
        image: 'BoneKnife',
        iLvl: 4,
        baseStrength: 10,
        baseAgility: 14,
        baseIntelligence: 7,
        
    };
    OffHand.FangedKnife = {
        chance: 5,
        name: 'Fanged Knife',
        itemQuality: 'Legendary',
        itemType: 'offHand',
        subType: 'dagger',
        color: 'red',
        image: 'FangedKnife',
        iLvl: 5,
        baseStrength: 15,
        baseAgility: 22,
        baseIntelligence: 12,
        
    };
    OffHand.Katar = {
        chance: 50,
        name: 'Katar',
        itemQuality: 'Common',
        itemType: 'offHand',
        subType: 'dagger',
        color: 'black',
        image: 'Katar',
        iLvl: 6,
        baseStrength: 10,
        baseAgility: 15,
        baseIntelligence: 10,
        
    };
    OffHand.WristBlade = {
        chance: 25,
        name: 'Wrist Blade',
        itemQuality: 'Uncommon',
        itemType: 'offHand',
        subType: 'dagger',
        color: 'green',
        image: 'WristBlade',
        iLvl: 7,
        baseStrength: 20,
        baseAgility: 25,
        baseIntelligence: 20,
        
    };
    OffHand.BladeTalons = {
        chance: 10,
        name: 'Blade Talons',
        itemQuality: 'Rare',
        itemType: 'offHand',
        subType: 'dagger',
        color: 'blue',
        image: 'BladeTalons',
        iLvl: 8,
        baseStrength: 20,
        baseAgility: 25,
        baseIntelligence: 20,
        
    };
    OffHand.FeralClaws = {
        chance: 5,
        name: 'Feral Claws',
        itemQuality: 'Epic',
        itemType: 'offHand',
        subType: 'dagger',
        color: 'orange',
        image: 'FeralClaws',
        iLvl: 9,
        baseStrength: 30,
        baseAgility: 35,
        baseIntelligence: 30,
        
    };
    OffHand.RunicTalons = {
        chance: 5,
        name: 'Runic Talons',
        itemQuality: 'Legendary',
        itemType: 'offHand',
        subType: 'dagger',
        color: 'red',
        image: 'RunicTalons',
        iLvl: 10,
        baseStrength: 40,
        baseAgility: 45,
        baseIntelligence: 40,
        
    };
    OffHand.Quhab = {
        chance: 50,
        name: 'Quhab',
        itemQuality: 'Common',
        itemType: 'offHand',
        subType: 'dagger',
        color: 'black',
        image: 'Quhab',
        iLvl: 11,
        baseStrength: 30,
        baseAgility: 35,
        baseIntelligence: 30,
        
    };
    OffHand.WristSpike = {
        chance: 25,
        name: 'Wrist Spike',
        itemQuality: 'Uncommon',
        itemType: 'offHand',
        subType: 'dagger',
        color: 'green',
        image: 'WristSpike',
        iLvl: 12,
        baseStrength: 40,
        baseAgility: 45,
        baseIntelligence: 40,
        
    };
    OffHand.Cinquedeas = {
        chance: 10,
        name: 'Cinquedeas',
        itemQuality: 'Rare',
        itemType: 'offHand',
        subType: 'dagger',
        color: 'blue',
        image: 'Cinquedeas',
        iLvl: 13,
        baseStrength: 50,
        baseAgility: 65,
        baseIntelligence: 50,
        
    };
    OffHand.ScissorsSuwayyah = {
        chance: 5,
        name: 'Scissors Suwayyah',
        itemQuality: 'Epic',
        itemType: 'offHand',
        subType: 'dagger',
        color: 'orange',
        image: 'ScissorsSuwayyah',
        iLvl: 14,
        baseStrength: 70,
        baseAgility: 85,
        baseIntelligence: 70,
        
    };
    OffHand.WarFist = {
        name: 'War Fist',
        itemQuality: 'Legendary',
        itemType: 'offHand',
        subType: 'dagger',
        color: 'red',
        image: 'WarFist',
        iLvl: 15,
        baseStrength: 90,
        baseAgility: 110,
        baseIntelligence: 90,
        
    };
    OffHand.CrystalDagger = {
        chance: 50,
        name: 'Crystal Dagger',
        itemQuality: 'Common',
        itemType: 'offHand',
        subType: 'dagger',
        color: 'black',
        image: 'CrystalDagger',
        iLvl: 16,
        baseStrength: 60,
        baseAgility: 75,
        baseIntelligence: 65,
        
    };
    OffHand.SharpClaws = {
        chance: 25,
        name: 'Sharp Claws',
        itemQuality: 'Uncommon',
        itemType: 'offHand',
        subType: 'dagger',
        color: 'green',
        image: 'SharpClaws',
        iLvl: 17,
        baseStrength: 70,
        baseAgility: 95,
        baseIntelligence: 85,
        
    };
    OffHand.Fuscia = {
        chance: 10,
        name: 'Fuscia',
        itemQuality: 'Rare',
        itemType: 'offHand',
        subType: 'dagger',
        color: 'blue',
        image: 'Fuscia',
        iLvl: 18,
        baseStrength: 90,
        baseAgility: 120,
        baseIntelligence: 110,
        
    };
    OffHand.BattleCestus = {
        chance: 5,
        name: 'Battle Cestus',
        itemQuality: 'Epic',
        itemType: 'offHand',
        subType: 'dagger',
        color: 'orange',
        image: 'BattleCestus',
        iLvl: 19,
        baseStrength: 120,
        baseAgility: 150,
        baseIntelligence: 130,
        
    };
    OffHand.RunicClaws = {
        chance: 5,
        name: 'Runic Claws',
        itemQuality: 'Legendary',
        itemType: 'offHand',
        subType: 'dagger',
        color: 'red',
        image: 'RunicClaws',
        iLvl: 20,
        baseStrength: 140,
        baseAgility: 180,
        baseIntelligence: 150,
        
    };
    ItemList.OffHand = OffHand;
    //Accessory list
    Accessory = {};
    //Rings
    Accessory.CrackedRingofLearning = {
        name: 'Cracked Ring of Learning',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'ring',
        color: 'black',
        image: 'Ring001',
        iLvl: 1,
        baseExpRate: 5,
        
    };
    Accessory.DamagedRingofLearning = {
        name: 'Damaged Ring of Learning',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'ring',
        color: 'green',
        image: 'Ring002',
        iLvl: 2,
        baseExpRate: 10,
        
    };
    Accessory.RingofLearning = {
        name: 'Ring of Learning',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'ring',
        color: 'blue',
        image: 'Ring003',
        iLvl: 3,
        baseExpRate: 15,
        
    };
    Accessory.SupremeRingofLearning = {
        name: 'Supreme Ring of Learning',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'ring',
        color: 'orange',
        image: 'Ring004',
        iLvl: 4,
        baseExpRate: 20,
        
    };
    Accessory.AncientRingofLearning = {
        name: 'Ancient Ring of Learning',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'ring',
        color: 'red',
        image: 'Ring005',
        iLvl: 5,
        baseExpRate: 25,
        
    };
    //Ring Endurance
    Accessory.CrackedRingofWealth = {
        name: 'Cracked Ring of Wealth',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'ring',
        color: 'black',
        image: 'Ring001',
        iLvl: 1,
        baseGoldRate: 5,
        
    };
    Accessory.DamagedRingofWealth = {
        name: 'Damaged Ring of Wealth',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'ring',
        color: 'green',
        image: 'Ring002',
        iLvl: 2,
        baseGoldRate: 10,
        
    };
    Accessory.RingofWealth = {
        name: 'Ring of Wealth',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'ring',
        color: 'blue',
        image: 'Ring003',
        iLvl: 3,
        baseGoldRate: 15,
        
    };
    Accessory.SupremeRingofWealth = {
        name: 'Supreme Ring of Wealth',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'ring',
        color: 'orange',
        image: 'Ring004',
        iLvl: 4,
        baseGoldRate: 20,
        
    };
    Accessory.AncientRingofWealth = {
        name: 'Ancient Ring of Wealth',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'ring',
        color: 'red',
        image: 'Ring005',
        iLvl: 5,
        baseGoldRate: 25,
        
    };
    //Ring Agility
    Accessory.CrackedRingofOpportunity = {
        name: 'Cracked Ring of Opportunity',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'ring',
        color: 'black',
        image: 'Ring001',
        iLvl: 1,
        baseDropRate: 5,
        
    };
    Accessory.DamagedRingofOpportunity = {
        name: 'Damaged Ring of Opportunity',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'ring',
        color: 'green',
        image: 'Ring002',
        iLvl: 2,
        baseDropRate: 10,
        
    };
    Accessory.RingofOpportunity = {
        name: 'Ring of Opportunity',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'ring',
        color: 'blue',
        image: 'Ring003',
        iLvl: 3,
        baseDropRate: 15,
        
    };
    Accessory.SupremeRingofOpportunity = {
        name: 'Supreme Ring of Opportunity',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'ring',
        color: 'orange',
        image: 'Ring004',
        iLvl: 4,
        baseDropRate: 20,
        
    };
    Accessory.AncientRingofOpportunity = {
        name: 'Ancient Ring of Opportunity',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'ring',
        color: 'red',
        image: 'Ring005',
        iLvl: 5,
        baseDropRate: 25,
        
    };
    //Ring Dexterity
    Accessory.CrackedRingofFortune = {
        name: 'Cracked Ring of Fortune',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'ring',
        color: 'black',
        image: 'Ring001',
        iLvl: 1,
        baseExpRate: 5,
        baseGoldRate: 5,
        
    };
    Accessory.DamagedRingofFortune = {
        name: 'Damaged Ring of Fortune',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'ring',
        color: 'green',
        image: 'Ring002',
        iLvl: 2,
        baseExpRate: 10,
        baseGoldRate: 10,
        
    };
    Accessory.RingofFortune = {
        name: 'Ring of Fortune',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'ring',
        color: 'blue',
        image: 'Ring003',
        iLvl: 3,
        baseExpRate: 15,
        baseGoldRate: 15,
        
    };
    Accessory.SupremeRingofFortune = {
        name: 'Supreme Ring of Fortune',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'ring',
        color: 'orange',
        image: 'Ring004',
        iLvl: 4,
        baseExpRate: 20,
        baseGoldRate: 20,
        
    };
    Accessory.AncientRingofFortune = {
        name: 'Ancient Ring of Fortune',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'ring',
        color: 'red',
        image: 'Ring005',
        iLvl: 5,
        baseExpRate: 25,
        baseDropRate: 25,
        
    };
    //Ring Luck
    Accessory.CrackedRingofProsperity = {
        name: 'Cracked Ring of Prosperity',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'ring',
        color: 'black',
        image: 'Ring001',
        iLvl: 1,
        baseExpRate: 5,
        baseDropRate: 5,
        
    };
    Accessory.DamagedRingofProsperity = {
        name: 'Damaged Ring of Prosperity',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'ring',
        color: 'green',
        image: 'Ring002',
        iLvl: 2,
        baseExpRate: 10,
        baseDropRate: 10,
        
    };
    Accessory.RingofProsperity = {
        name: 'Ring of Prosperity',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'ring',
        color: 'blue',
        image: 'Ring003',
        iLvl: 3,
        baseExpRate: 15,
        baseDropRate: 15,
        
    };
    Accessory.SupremeRingofProsperity = {
        name: 'Supreme Ring of Prosperity',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'ring',
        color: 'orange',
        image: 'Ring004',
        iLvl: 4,
        baseExpRate: 20,
        baseDropRate: 20,
        
    };
    Accessory.AncientRingofProsperity = {
        name: 'Ancient Ring of Prosperity',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'ring',
        color: 'red',
        image: 'Ring005',
        iLvl: 5,
        baseExpRate: 25,
        baseDropRate: 25,
        
    };
    //Ring Defense
    Accessory.CrackedRingofAbundance = {
        name: 'Cracked Ring of Abundance',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'ring',
        color: 'black',
        image: 'Ring001',
        iLvl: 1,
        baseGoldRate: 5,
        baseDropRate: 5,
        
    };
    Accessory.DamagedRingofAbundance = {
        name: 'Damaged Ring of Abundance',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'ring',
        color: 'green',
        image: 'Ring002',
        iLvl: 2,
        baseGoldRate: 10,
        baseDropRate: 10,
        
    };
    Accessory.RingofAbundance = {
        name: 'Ring of Abundance',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'ring',
        color: 'blue',
        image: 'Ring003',
        iLvl: 3,
        baseGoldRate: 15,
        baseDropRate: 15,
        
    };
    Accessory.SupremeRingofAbundance = {
        name: 'Supreme Ring of Abundance',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'ring',
        color: 'orange',
        image: 'Ring004',
        iLvl: 4,
        baseGoldRate: 20,
        baseDropRate: 20,
        
    };
    Accessory.AncientRingofAbundance = {
        name: 'Ancient Ring of Abundance',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'ring',
        color: 'red',
        image: 'Ring005',
        iLvl: 5,
        baseGoldRate: 25,
        baseDropRate: 25,
        
    };
    //Ring all 3
    Accessory.CrackedRingofPlenty = {
        name: 'Cracked Ring of Plenty',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'ring',
        color: 'black',
        image: 'Ring001',
        iLvl: 1,
        baseGoldRate: 5,
        baseDropRate: 5,
        baseExpRate: 5,
        
    };
    Accessory.DamagedRingofPlenty = {
        name: 'Damaged Ring of Plenty',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'ring',
        color: 'green',
        image: 'Ring002',
        iLvl: 2,
        baseGoldRate: 10,
        baseDropRate: 10,
        baseExpRate: 10,
        
    };
    Accessory.RingofPlenty = {
        name: 'Ring of Plenty',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'ring',
        color: 'blue',
        image: 'Ring003',
        iLvl: 3,
        baseGoldRate: 15,
        baseDropRate: 15,
        baseExpRate: 15,
        
    };
    Accessory.SupremeRingofPlenty = {
        name: 'Supreme Ring of Plenty',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'ring',
        color: 'orange',
        image: 'Ring004',
        iLvl: 4,
        baseGoldRate: 20,
        baseDropRate: 20,
        baseExpRate: 20,
        
    };
    Accessory.AncientRingofPlenty = {
        name: 'Ancient Ring of Plenty',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'ring',
        color: 'red',
        image: 'Ring005',
        iLvl: 5,
        baseGoldRate: 25,
        baseDropRate: 25,
        baseExpRate: 25,
        
    };
    //Amulet
    Accessory.CrackedAmuletofLearning = {
        name: 'Cracked Amulet of Learning',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'black',
        image: 'Amulet001',
        iLvl: 1,
        baseExpRate: 5,
        
    };
    Accessory.DamagedAmuletofLearning = {
        name: 'Damaged Amulet of Learning',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'green',
        image: 'Amulet002',
        iLvl: 2,
        baseExpRate: 10,
        
    };
    Accessory.AmuletofLearning = {
        name: 'Amulet of Learning',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'blue',
        image: 'Amulet003',
        iLvl: 3,
        baseExpRate: 15,
        
    };
    Accessory.SupremeAmuletofLearning = {
        name: 'Supreme Amulet of Learning',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'orange',
        image: 'Amulet004',
        iLvl: 4,
        baseExpRate: 20,
        
    };
    Accessory.AncientAmuletofLearning = {
        name: 'Ancient Amulet of Learning',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'red',
        image: 'Amulet005',
        iLvl: 5,
        baseExpRate: 25,
        
    };
    //Amulet Endurance
    Accessory.CrackedAmuletofWealth = {
        name: 'Cracked Amulet of Wealth',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'black',
        image: 'Amulet001',
        iLvl: 1,
        baseGoldRate: 5,
        
    };
    Accessory.DamagedAmuletofWealth = {
        name: 'Damaged Amulet of Wealth',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'green',
        image: 'Amulet002',
        iLvl: 2,
        baseGoldRate: 10,
        
    };
    Accessory.AmuletofWealth = {
        name: 'Amulet of Wealth',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'blue',
        image: 'Amulet003',
        iLvl: 3,
        baseGoldRate: 15,
        
    };
    Accessory.SupremeAmuletofWealth = {
        name: 'Supreme Amulet of Wealth',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'orange',
        image: 'Amulet004',
        iLvl: 4,
        baseGoldRate: 20,
        
    };
    Accessory.AncientAmuletofWealth = {
        name: 'Ancient Amulet of Wealth',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'red',
        image: 'Amulet005',
        iLvl: 5,
        baseGoldRate: 25,
        
    };
    //Amulet Agility
    Accessory.CrackedAmuletofOpportunity = {
        name: 'Cracked Amulet of Opportunity',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'black',
        image: 'Amulet001',
        iLvl: 1,
        baseDropRate: 5,
        
    };
    Accessory.DamagedAmuletofOpportunity = {
        name: 'Damaged Amulet of Opportunity',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'green',
        image: 'Amulet002',
        iLvl: 2,
        baseDropRate: 10,
        
    };
    Accessory.AmuletofOpportunity = {
        name: 'Amulet of Opportunity',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'blue',
        image: 'Amulet003',
        iLvl: 3,
        baseDropRate: 15,
        
    };
    Accessory.SupremeAmuletofOpportunity = {
        name: 'Supreme Amulet of Opportunity',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'orange',
        image: 'Amulet004',
        iLvl: 4,
        baseDropRate: 20,
        
    };
    Accessory.AncientAmuletofOpportunity = {
        name: 'Ancient Amulet of Opportunity',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'red',
        image: 'Amulet005',
        iLvl: 5,
        baseDropRate: 25,
        
    };
    //Amulet Dexterity
    Accessory.CrackedAmuletofFortune = {
        name: 'Cracked Amulet of Fortune',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'black',
        image: 'Amulet001',
        iLvl: 1,
        baseExpRate: 5,
        baseGoldRate: 5,
        
    };
    Accessory.DamagedAmuletofFortune = {
        name: 'Damaged Amulet of Fortune',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'green',
        image: 'Amulet002',
        iLvl: 2,
        baseExpRate: 10,
        baseGoldRate: 10,
        
    };
    Accessory.AmuletofFortune = {
        name: 'Amulet of Fortune',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'blue',
        image: 'Amulet003',
        iLvl: 3,
        baseExpRate: 15,
        baseGoldRate: 15,
        
    };
    Accessory.SupremeAmuletofFortune = {
        name: 'Supreme Amulet of Fortune',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'orange',
        image: 'Amulet004',
        iLvl: 4,
        baseExpRate: 20,
        baseGoldRate: 20,
        
    };
    Accessory.AncientAmuletofFortune = {
        name: 'Ancient Amulet of Fortune',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'red',
        image: 'Amulet005',
        iLvl: 5,
        baseExpRate: 25,
        baseDropRate: 25,
        
    };
    //Amulet Luck
    Accessory.CrackedAmuletofProsperity = {
        name: 'Cracked Amulet of Prosperity',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'black',
        image: 'Amulet001',
        iLvl: 1,
        baseExpRate: 5,
        baseDropRate: 5,
        
    };
    Accessory.DamagedAmuletofProsperity = {
        name: 'Damaged Amulet of Prosperity',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'green',
        image: 'Amulet002',
        iLvl: 2,
        baseExpRate: 10,
        baseDropRate: 10,
        
    };
    Accessory.AmuletofProsperity = {
        name: 'Amulet of Prosperity',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'blue',
        image: 'Amulet003',
        iLvl: 3,
        baseExpRate: 15,
        baseDropRate: 15,
        
    };
    Accessory.SupremeAmuletofProsperity = {
        name: 'Supreme Amulet of Prosperity',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'orange',
        image: 'Amulet004',
        iLvl: 4,
        baseExpRate: 20,
        baseDropRate: 20,
        
    };
    Accessory.AncientAmuletofProsperity = {
        name: 'Ancient Amulet of Prosperity',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'red',
        image: 'Amulet005',
        iLvl: 5,
        baseExpRate: 25,
        baseDropRate: 25,
        
    };
    //Amulet Defense
    Accessory.CrackedAmuletofAbundance = {
        name: 'Cracked Amulet of Abundance',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'black',
        image: 'Amulet001',
        iLvl: 1,
        baseGoldRate: 5,
        baseDropRate: 5,
        
    };
    Accessory.DamagedAmuletofAbundance = {
        name: 'Damaged Amulet of Abundance',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'green',
        image: 'Amulet002',
        iLvl: 2,
        baseGoldRate: 10,
        baseDropRate: 10,
        
    };
    Accessory.AmuletofAbundance = {
        name: 'Amulet of Abundance',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'blue',
        image: 'Amulet003',
        iLvl: 3,
        baseGoldRate: 15,
        baseDropRate: 15,
        
    };
    Accessory.SupremeAmuletofAbundance = {
        name: 'Supreme Amulet of Abundance',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'orange',
        image: 'Amulet004',
        iLvl: 4,
        baseGoldRate: 20,
        baseDropRate: 20,
        
    };
    Accessory.AncientAmuletofAbundance = {
        name: 'Ancient Amulet of Abundance',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'red',
        image: 'Amulet005',
        iLvl: 5,
        baseGoldRate: 25,
        baseDropRate: 25,
        
    };
    //Amulet all 3
    Accessory.CrackedAmuletofPlenty = {
        name: 'Cracked Amulet of Plenty',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'black',
        image: 'Amulet001',
        iLvl: 1,
        baseGoldRate: 5,
        baseDropRate: 5,
        baseExpRate: 5,
        
    };
    Accessory.DamagedAmuletofPlenty = {
        name: 'Damaged Amulet of Plenty',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'green',
        image: 'Amulet002',
        iLvl: 2,
        baseGoldRate: 10,
        baseDropRate: 10,
        baseExpRate: 10,
        
    };
    Accessory.AmuletofPlenty = {
        name: 'Amulet of Plenty',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'blue',
        image: 'Amulet003',
        iLvl: 3,
        baseGoldRate: 15,
        baseDropRate: 15,
        baseExpRate: 15,
        
    };
    Accessory.SupremeAmuletofPlenty = {
        name: 'Supreme Amulet of Plenty',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'orange',
        image: 'Amulet004',
        iLvl: 4,
        baseGoldRate: 20,
        baseDropRate: 20,
        baseExpRate: 20,
        
    };
    Accessory.AncientAmuletofPlenty = {
        name: 'Ancient Amulet of Plenty',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'amulet',
        color: 'red',
        image: 'Amulet005',
        iLvl: 5,
        baseGoldRate: 25,
        baseDropRate: 25,
        baseExpRate: 25,
        
    };
    //Talismans

    //Talisman
    Accessory.CrackedTalismanofLearning = {
        name: 'Cracked Talisman of Learning',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'black',
        image: 'Talisman001',
        iLvl: 1,
        baseExpRate: 5,
        
    };
    Accessory.DamagedTalismanofLearning = {
        name: 'Damaged Talisman of Learning',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'green',
        image: 'Talisman002',
        iLvl: 2,
        baseExpRate: 10,
        
    };
    Accessory.TalismanofLearning = {
        name: 'Talisman of Learning',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'blue',
        image: 'Talisman003',
        iLvl: 3,
        baseExpRate: 15,
        
    };
    Accessory.SupremeTalismanofLearning = {
        name: 'Supreme Talisman of Learning',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'orange',
        image: 'Talisman004',
        iLvl: 4,
        baseExpRate: 20,
        
    };
    Accessory.AncientTalismanofLearning = {
        name: 'Ancient Talisman of Learning',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'red',
        image: 'Talisman005',
        iLvl: 5,
        baseExpRate: 25,
        
    };
    //Talisman Endurance
    Accessory.CrackedTalismanofWealth = {
        name: 'Cracked Talisman of Wealth',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'black',
        image: 'Talisman001',
        iLvl: 1,
        baseGoldRate: 5,
        
    };
    Accessory.DamagedTalismanofWealth = {
        name: 'Damaged Talisman of Wealth',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'green',
        image: 'Talisman002',
        iLvl: 2,
        baseGoldRate: 10,
        
    };
    Accessory.TalismanofWealth = {
        name: 'Talisman of Wealth',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'blue',
        image: 'Talisman003',
        iLvl: 3,
        baseGoldRate: 15,
        
    };
    Accessory.SupremeTalismanofWealth = {
        name: 'Supreme Talisman of Wealth',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'orange',
        image: 'Talisman004',
        iLvl: 4,
        baseGoldRate: 20,
        
    };
    Accessory.AncientTalismanofWealth = {
        name: 'Ancient Talisman of Wealth',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'red',
        image: 'Talisman005',
        iLvl: 5,
        baseGoldRate: 25,
        
    };
    //Talisman Agility
    Accessory.CrackedTalismanofOpportunity = {
        name: 'Cracked Talisman of Opportunity',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'black',
        image: 'Talisman001',
        iLvl: 1,
        baseDropRate: 5,
        
    };
    Accessory.DamagedTalismanofOpportunity = {
        name: 'Damaged Talisman of Opportunity',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'green',
        image: 'Talisman002',
        iLvl: 2,
        baseDropRate: 10,
        
    };
    Accessory.TalismanofOpportunity = {
        name: 'Talisman of Opportunity',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'blue',
        image: 'Talisman003',
        iLvl: 3,
        baseDropRate: 15,
        
    };
    Accessory.SupremeTalismanofOpportunity = {
        name: 'Supreme Talisman of Opportunity',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'orange',
        image: 'Talisman004',
        iLvl: 4,
        baseDropRate: 20,
        
    };
    Accessory.AncientTalismanofOpportunity = {
        name: 'Ancient Talisman of Opportunity',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'red',
        image: 'Talisman005',
        iLvl: 5,
        baseDropRate: 25,
        
    };
    //Talisman Dexterity
    Accessory.CrackedTalismanofFortune = {
        name: 'Cracked Talisman of Fortune',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'black',
        image: 'Talisman001',
        iLvl: 1,
        baseExpRate: 5,
        baseGoldRate: 5,
        
    };
    Accessory.DamagedTalismanofFortune = {
        name: 'Damaged Talisman of Fortune',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'green',
        image: 'Talisman002',
        iLvl: 2,
        baseExpRate: 10,
        baseGoldRate: 10,
        
    };
    Accessory.TalismanofFortune = {
        name: 'Talisman of Fortune',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'blue',
        image: 'Talisman003',
        iLvl: 3,
        baseExpRate: 15,
        baseGoldRate: 15,
        
    };
    Accessory.SupremeTalismanofFortune = {
        name: 'Supreme Talisman of Fortune',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'orange',
        image: 'Talisman004',
        iLvl: 4,
        baseExpRate: 20,
        baseGoldRate: 20,
        
    };
    Accessory.AncientTalismanofFortune = {
        name: 'Ancient Talisman of Fortune',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'red',
        image: 'Talisman005',
        iLvl: 5,
        baseExpRate: 25,
        baseDropRate: 25,
        
    };
    //Talisman Luck
    Accessory.CrackedTalismanofProsperity = {
        name: 'Cracked Talisman of Prosperity',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'black',
        image: 'Talisman001',
        iLvl: 1,
        baseExpRate: 5,
        baseDropRate: 5,
        
    };
    Accessory.DamagedTalismanofProsperity = {
        name: 'Damaged Talisman of Prosperity',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'green',
        image: 'Talisman002',
        iLvl: 2,
        baseExpRate: 10,
        baseDropRate: 10,
        
    };
    Accessory.TalismanofProsperity = {
        name: 'Talisman of Prosperity',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'blue',
        image: 'Talisman003',
        iLvl: 3,
        baseExpRate: 15,
        baseDropRate: 15,
        
    };
    Accessory.SupremeTalismanofProsperity = {
        name: 'Supreme Talisman of Prosperity',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'orange',
        image: 'Talisman004',
        iLvl: 4,
        baseExpRate: 20,
        baseDropRate: 20,
        
    };
    Accessory.AncientTalismanofProsperity = {
        name: 'Ancient Talisman of Prosperity',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'red',
        image: 'Talisman005',
        iLvl: 5,
        baseExpRate: 25,
        baseDropRate: 25,
        
    };
    //Talisman Defense
    Accessory.CrackedTalismanofAbundance = {
        name: 'Cracked Talisman of Abundance',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'black',
        image: 'Talisman001',
        iLvl: 1,
        baseGoldRate: 5,
        baseDropRate: 5,
        
    };
    Accessory.DamagedTalismanofAbundance = {
        name: 'Damaged Talisman of Abundance',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'green',
        image: 'Talisman002',
        iLvl: 2,
        baseGoldRate: 10,
        baseDropRate: 10,
        
    };
    Accessory.TalismanofAbundance = {
        name: 'Talisman of Abundance',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'blue',
        image: 'Talisman003',
        iLvl: 3,
        baseGoldRate: 15,
        baseDropRate: 15,
        
    };
    Accessory.SupremeTalismanofAbundance = {
        name: 'Supreme Talisman of Abundance',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'orange',
        image: 'Talisman004',
        iLvl: 4,
        baseGoldRate: 20,
        baseDropRate: 20,
        
    };
    Accessory.AncientTalismanofAbundance = {
        name: 'Ancient Talisman of Abundance',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'red',
        image: 'Talisman005',
        iLvl: 5,
        baseGoldRate: 25,
        baseDropRate: 25,
        
    };
    //Talisman all 3
    Accessory.CrackedTalismanofPlenty = {
        name: 'Cracked Talisman of Plenty',
        itemQuality: 'Common',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'black',
        image: 'Talisman001',
        iLvl: 1,
        baseGoldRate: 5,
        baseDropRate: 5,
        baseExpRate: 5,
        
    };
    Accessory.DamagedTalismanofPlenty = {
        name: 'Damaged Talisman of Plenty',
        itemQuality: 'Uncommon',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'green',
        image: 'Talisman002',
        iLvl: 2,
        baseGoldRate: 10,
        baseDropRate: 10,
        baseExpRate: 10,
        
    };
    Accessory.TalismanofPlenty = {
        name: 'Talisman of Plenty',
        itemQuality: 'Rare',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'blue',
        image: 'Talisman003',
        iLvl: 3,
        baseGoldRate: 15,
        baseDropRate: 15,
        baseExpRate: 15,
        
    };
    Accessory.SupremeTalismanofPlenty = {
        name: 'Supreme Talisman of Plenty',
        itemQuality: 'Epic',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'orange',
        image: 'Talisman004',
        iLvl: 4,
        baseGoldRate: 20,
        baseDropRate: 20,
        baseExpRate: 20,
        
    };
    Accessory.AncientTalismanofPlenty = {
        name: 'Ancient Talisman of Plenty',
        itemQuality: 'Legendary',
        itemType: 'accessory',
        subType: 'talisman',
        color: 'red',
        image: 'Talisman005',
        iLvl: 5,
        baseGoldRate: 25,
        baseDropRate: 25,
        baseExpRate: 25,
        
    };
    ItemList.Accessory = Accessory;
};