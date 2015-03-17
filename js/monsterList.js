function NewDrop(item, chance) {
    drop = {};
    drop.item = item;
    drop.chance = chance;
    return drop;
}
// chance out of 10000, 1 = 0.01%, 10 = 0.1%, 100 = 1%, 1000 = 10%...
monsterList = {};
function MakeMonsterList()
{
    Bandit = {};
    Bandit.Drops = [];
    //Swords
    Bandit.Drops.push(NewDrop(ItemList.Weapons.ShortSword, 50));
    Bandit.Drops.push(NewDrop(ItemList.Weapons.BroadSword, 25))
    Bandit.Drops.push(NewDrop(ItemList.Weapons.GreatSword, 10));
    Bandit.Drops.push(NewDrop(ItemList.Weapons.GothicSword, 1));
    //Axes
    Bandit.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 50));
    Bandit.Drops.push(NewDrop(ItemList.Weapons.BroadAxe, 25));
    Bandit.Drops.push(NewDrop(ItemList.Weapons.MilitaryAxe, 10));
    Bandit.Drops.push(NewDrop(ItemList.Weapons.BerserkerAxe, 1));
    //Maces
    Bandit.Drops.push(NewDrop(ItemList.Weapons.Club, 50));
    Bandit.Drops.push(NewDrop(ItemList.Weapons.WarHammer, 25));
    Bandit.Drops.push(NewDrop(ItemList.Weapons.JaggedStar, 10));
    Bandit.Drops.push(NewDrop(ItemList.Weapons.TyrantClub, 1));
    //Staves
    Bandit.Drops.push(NewDrop(ItemList.Weapons.ShortStaff, 50));
    Bandit.Drops.push(NewDrop(ItemList.Weapons.GrimWand, 25));
    Bandit.Drops.push(NewDrop(ItemList.Weapons.JoStaff, 10));
    Bandit.Drops.push(NewDrop(ItemList.Weapons.Stalagmite, 1));
    //Bows
    Bandit.Drops.push(NewDrop(ItemList.Weapons.ShortBow, 50));;
    Bandit.Drops.push(NewDrop(ItemList.Weapons.ShortBattleBow, 25));
    Bandit.Drops.push(NewDrop(ItemList.Weapons.RazorBow, 10));
    Bandit.Drops.push(NewDrop(ItemList.Weapons.GreatBow, 1));
    //Robes
    Bandit.Drops.push(NewDrop(ItemList.Armors.BlackRobes, 50));
    Bandit.Drops.push(NewDrop(ItemList.Armors.HoodedRobes, 25));
    Bandit.Drops.push(NewDrop(ItemList.Armors.MonkRobes, 10));
    Bandit.Drops.push(NewDrop(ItemList.Armors.MageRobes, 1));
    //Leather
    Bandit.Drops.push(NewDrop(ItemList.Armors.LeatherArmor, 50));
    Bandit.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 25));
    Bandit.Drops.push(NewDrop(ItemList.Armors.StuddedDoublet, 10));
    Bandit.Drops.push(NewDrop(ItemList.Armors.DarkIronLeather, 1));
    //Heavy
    Bandit.Drops.push(NewDrop(ItemList.Armors.ScalemailVest, 50));
    Bandit.Drops.push(NewDrop(ItemList.Armors.ChainmailArmor, 25));
    Bandit.Drops.push(NewDrop(ItemList.Armors.LightMailArmor, 10));
    Bandit.Drops.push(NewDrop(ItemList.Armors.BrigandVest, 1));
    //Shield
    Bandit.Drops.push(NewDrop(ItemList.OffHand.Buckler, 50));
    Bandit.Drops.push(NewDrop(ItemList.OffHand.SpikedShield, 25));
    Bandit.Drops.push(NewDrop(ItemList.OffHand.TowerShield, 10));
    Bandit.Drops.push(NewDrop(ItemList.OffHand.GrimShield, 1));
    //Dagger offHand
    Bandit.Drops.push(NewDrop(ItemList.OffHand.Dagger, 50));
    Bandit.Drops.push(NewDrop(ItemList.OffHand.Kris, 25));
    Bandit.Drops.push(NewDrop(ItemList.OffHand.MithrilPoint, 10));
    Bandit.Drops.push(NewDrop(ItemList.OffHand.BoneKnife, 1));
    //Rings
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 1));
    //Amulets
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 1));
    //Talismans
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 1));
    Bandit.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 1));
    Bandit.Stats = {
        hp: 30,
        maxHp: 30,
        def: 0,
        minDmg: 1,
        maxDmg: 3,
        baseExp: 10,
        acc: 95,
        eva: 5,
        name: "Bandit",
        displayName: "Bandit",
        type: "weak",
        id: 1,
        level: 1,
        area: "BanditHideout",
        isShown: true,
        killCount: 0,
    };
    monsterList.Bandit = Bandit;
       
    BanditThug = {};
    BanditThug.Drops = [];
    //Swords
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.ShortSword, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.BroadSword, 25))
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.GreatSword, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.GothicSword, 2));
    //Axes
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.BroadAxe, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.MilitaryAxe, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.BerserkerAxe, 2));
    //Maces
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.Club, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.WarHammer, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.JaggedStar, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.TyrantClub, 2));
    //Staves
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.ShortStaff, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.GrimWand, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.JoStaff, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.Stalagmite, 2));
    //Bows
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.ShortBow, 50));;
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.ShortBattleBow, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.RazorBow, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Weapons.GreatBow, 2));
    //Robes
    BanditThug.Drops.push(NewDrop(ItemList.Armors.BlackRobes, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Armors.HoodedRobes, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Armors.MonkRobes, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Armors.MageRobes, 2));
    //Leather
    BanditThug.Drops.push(NewDrop(ItemList.Armors.LeatherArmor, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Armors.StuddedDoublet, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Armors.DarkIronLeather, 2));
    //Heavy
    BanditThug.Drops.push(NewDrop(ItemList.Armors.ScalemailVest, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Armors.ChainmailArmor, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Armors.LightMailArmor, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Armors.BrigandVest, 2));
    //Shield
    BanditThug.Drops.push(NewDrop(ItemList.OffHand.Buckler, 50));
    BanditThug.Drops.push(NewDrop(ItemList.OffHand.SpikedShield, 25));
    BanditThug.Drops.push(NewDrop(ItemList.OffHand.TowerShield, 10));
    BanditThug.Drops.push(NewDrop(ItemList.OffHand.GrimShield, 2));
    //Dagger offHand
    BanditThug.Drops.push(NewDrop(ItemList.OffHand.Dagger, 50));
    BanditThug.Drops.push(NewDrop(ItemList.OffHand.Kris, 25));
    BanditThug.Drops.push(NewDrop(ItemList.OffHand.MithrilPoint, 10));
    BanditThug.Drops.push(NewDrop(ItemList.OffHand.BoneKnife, 2));
    //Rings
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 2));
    //Amulets
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 2));
    //Talismans
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 2));
    BanditThug.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 2));
    BanditThug.Stats = {
        hp: 100,
        maxHp: 100,
        def: 7,
        minDmg: 5,
        maxDmg: 10,
        baseExp: 40,
        acc: 95,
        eva: 5,
        name: "BanditThug",
        displayName: "Bandit Thug",
        type: "weak",
        id: 2,
        level: 2,
        area: "BanditHideout",
        isShown: true,
        killCount: 0,
    };
    monsterList.BanditThug = BanditThug;

    BanditArcher = {};
    BanditArcher.Drops = [];
    //Swords
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.ShortSword, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.BroadSword, 25))
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.GreatSword, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.GothicSword, 3));
    //Axes
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.BroadAxe, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.MilitaryAxe, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.BerserkerAxe, 3));
    //Maces
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.Club, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.WarHammer, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.JaggedStar, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.TyrantClub, 3));
    //Staves
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.ShortStaff, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.GrimWand, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.JoStaff, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.Stalagmite, 3));
    //Bows
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.ShortBow, 50));;
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.ShortBattleBow, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.RazorBow, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Weapons.GreatBow, 3));
    //Robes
    BanditArcher.Drops.push(NewDrop(ItemList.Armors.BlackRobes, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Armors.HoodedRobes, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Armors.MonkRobes, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Armors.MageRobes, 3));
    //Leather
    BanditArcher.Drops.push(NewDrop(ItemList.Armors.LeatherArmor, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Armors.StuddedDoublet, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Armors.DarkIronLeather, 3));
    //Heavy
    BanditArcher.Drops.push(NewDrop(ItemList.Armors.ScalemailVest, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Armors.ChainmailArmor, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Armors.LightMailArmor, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Armors.BrigandVest, 3));
    //Shield
    BanditArcher.Drops.push(NewDrop(ItemList.OffHand.Buckler, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.OffHand.SpikedShield, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.OffHand.TowerShield, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.OffHand.GrimShield, 3));
    //Dagger offHand
    BanditArcher.Drops.push(NewDrop(ItemList.OffHand.Dagger, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.OffHand.Kris, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.OffHand.MithrilPoint, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.OffHand.BoneKnife, 3));
    //Rings
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 3));
    //Amulets
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 3));
    //Talismans
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 3));
    BanditArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 3));
    BanditArcher.Stats = {
        hp: 250,
        maxHp: 250,
        def: 10,
        minDmg: 8,
        maxDmg: 12,
        baseExp: 100,
        acc: 95,
        eva: 5,
        name: "BanditArcher",
        displayName: "Bandit Archer",
        type: "weak",
        id: 3,
        level: 3,
        area: "BanditHideout",
        isShown: true,
        killCount: 0,
    };
    monsterList.BanditArcher = BanditArcher;

    BanditPlunderer = {};
    BanditPlunderer.Drops = [];
    //Swords
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.ShortSword, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.BroadSword, 25))
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.GreatSword, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.GothicSword, 4));
    //Axes
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.BroadAxe, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.MilitaryAxe, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.BerserkerAxe, 4));
    //Maces
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.Club, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.WarHammer, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.JaggedStar, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.TyrantClub, 4));
    //Staves
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.ShortStaff, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.GrimWand, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.JoStaff, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.Stalagmite, 4));
    //Bows
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.ShortBow, 50));;
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.ShortBattleBow, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.RazorBow, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Weapons.GreatBow, 4));
    //Robes
    BanditPlunderer.Drops.push(NewDrop(ItemList.Armors.BlackRobes, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Armors.HoodedRobes, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Armors.MonkRobes, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Armors.MageRobes, 4));
    //Leather
    BanditPlunderer.Drops.push(NewDrop(ItemList.Armors.LeatherArmor, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Armors.StuddedDoublet, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Armors.DarkIronLeather, 4));
    //Heavy
    BanditPlunderer.Drops.push(NewDrop(ItemList.Armors.ScalemailVest, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Armors.ChainmailArmor, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Armors.LightMailArmor, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Armors.BrigandVest, 4));
    //Shield
    BanditPlunderer.Drops.push(NewDrop(ItemList.OffHand.Buckler, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.OffHand.SpikedShield, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.OffHand.TowerShield, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.OffHand.GrimShield, 4));
    //Dagger offHand
    BanditPlunderer.Drops.push(NewDrop(ItemList.OffHand.Dagger, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.OffHand.Kris, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.OffHand.MithrilPoint, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.OffHand.BoneKnife, 4));
    //Rings
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 4));
    //Amulets
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 4));
    //Talismans
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 4));
    BanditPlunderer.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 4));
    BanditPlunderer.Stats = {
        hp: 400,
        maxHp: 400,
        def: 15,
        minDmg: 15,
        maxDmg: 20,
        baseExp: 150,
        acc: 95,
        eva: 5,
        name: "BanditPlunderer",
        displayName: "Bandit Plunderer",
        type: "weak",
        id: 4,
        level: 4,
        area: "BanditHideout",
        isShown: true,
        killCount: 0,
    };
    monsterList.BanditPlunderer = BanditPlunderer;

    BanditAssasin = {};
    BanditAssasin.Drops = [];
    //Swords
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.ShortSword, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.BroadSword, 25))
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.GreatSword, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.GothicSword, 5));
    //Axes
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.BroadAxe, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.MilitaryAxe, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.BerserkerAxe, 5));
    //Maces
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.Club, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.WarHammer, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.JaggedStar, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.TyrantClub, 5));
    //Staves
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.ShortStaff, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.GrimWand, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.JoStaff, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.Stalagmite, 5));
    //Bows
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.ShortBow, 50));;
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.ShortBattleBow, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.RazorBow, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Weapons.GreatBow, 5));
    //Robes
    BanditAssasin.Drops.push(NewDrop(ItemList.Armors.BlackRobes, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Armors.HoodedRobes, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Armors.MonkRobes, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Armors.MageRobes, 5));
    //Leather
    BanditAssasin.Drops.push(NewDrop(ItemList.Armors.LeatherArmor, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Armors.StuddedDoublet, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Armors.DarkIronLeather, 5));
    //Heavy
    BanditAssasin.Drops.push(NewDrop(ItemList.Armors.ScalemailVest, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Armors.ChainmailArmor, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Armors.LightMailArmor, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Armors.BrigandVest, 5));
    //Shield
    BanditAssasin.Drops.push(NewDrop(ItemList.OffHand.Buckler, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.OffHand.SpikedShield, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.OffHand.TowerShield, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.OffHand.GrimShield, 5));
    //Dagger offHand
    BanditAssasin.Drops.push(NewDrop(ItemList.OffHand.Dagger, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.OffHand.Kris, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.OffHand.MithrilPoint, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.OffHand.BoneKnife, 5));
    //Rings
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 5));
    //Amulets
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 5));
    //Talismans
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 5));
    BanditAssasin.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 5));
    BanditAssasin.Stats = {
        hp: 700,
        maxHp: 700,
        def: 20,
        minDmg: 20,
        maxDmg: 24,
        baseExp: 250,
        acc: 95,
        eva: 5,
        name: "BanditAssasin",
        displayName: "Bandit Assasin",
        type: "weak",
        id: 5,
        level: 5,
        area: "BanditHideout",
        isShown: true,
        killCount: 0,
    };
    monsterList.BanditAssasin = BanditAssasin;

    BanditLeader = {};
    BanditLeader.Drops = [];
    //Swords
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.ShortSword, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.BroadSword, 50))
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.GreatSword, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.GothicSword, 10));
    //Axes
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.BroadAxe, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.MilitaryAxe, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.BerserkerAxe, 10));
    //Maces
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.Club, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.WarHammer, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.JaggedStar, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.TyrantClub, 10));
    //Staves
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.ShortStaff, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.GrimWand, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.JoStaff, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.Stalagmite, 10));
    //Bows
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.ShortBow, 75));;
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.ShortBattleBow, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.RazorBow, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Weapons.GreatBow, 10));
    //Robes
    BanditLeader.Drops.push(NewDrop(ItemList.Armors.BlackRobes, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Armors.HoodedRobes, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Armors.MonkRobes, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Armors.MageRobes, 10));
    //Leather
    BanditLeader.Drops.push(NewDrop(ItemList.Armors.LeatherArmor, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Armors.StuddedDoublet, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Armors.DarkIronLeather, 10));
    //Heavy
    BanditLeader.Drops.push(NewDrop(ItemList.Armors.ScalemailVest, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Armors.ChainmailArmor, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Armors.LightMailArmor, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Armors.BrigandVest, 10));
    //Shield
    BanditLeader.Drops.push(NewDrop(ItemList.OffHand.Buckler, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.OffHand.SpikedShield, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.OffHand.TowerShield, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.OffHand.GrimShield, 10));
    //Dagger offHand
    BanditLeader.Drops.push(NewDrop(ItemList.OffHand.Dagger, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.OffHand.Kris, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.OffHand.MithrilPoint, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.OffHand.BoneKnife, 10));
    //Rings
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 10));
    //Amulets
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 10));
    //Talismans
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 75));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 50));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 25));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 10));
    BanditLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 10));
    BanditLeader.Stats = {
        hp: 1000,
        maxHp: 1000,
        def: 25,
        minDmg: 30,
        maxDmg: 40,
        baseExp: 400,
        acc: 95,
        eva: 5,
        name: "BanditLeader",
        displayName: "Bandit Leader",
        type: "weak",
        id: 6,
        level: 6,
        area: "BanditHideout",
        isShown: true,
        killCount: 0,
    };
    monsterList.BanditLeader = BanditLeader;

    BanditChief = {};
    BanditChief.Drops = [];
    //Swords
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.ShortSword, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.BroadSword, 75))
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.GreatSword, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.GothicSword, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.ColossusSword, 10));
    //Axes
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.BroadAxe, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.MilitaryAxe, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.BerserkerAxe, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.EttinAxe, 10));
    //Maces
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.Club, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.WarHammer, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.JaggedStar, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.TyrantClub, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.ReinforcedMace, 10));
    //Staves
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.ShortStaff, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.GrimWand, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.JoStaff, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.Stalagmite, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.GhostWand, 10));
    //Bows
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.ShortBow, 100));;
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.ShortBattleBow, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.RazorBow, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.GreatBow, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Weapons.AshwoodBow, 10));
    //Robes
    BanditChief.Drops.push(NewDrop(ItemList.Armors.BlackRobes, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Armors.HoodedRobes, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Armors.MonkRobes, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Armors.MageRobes, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Armors.MagicWeaverTunic, 10));
    //Leather
    BanditChief.Drops.push(NewDrop(ItemList.Armors.LeatherArmor, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Armors.StuddedDoublet, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Armors.DarkIronLeather, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Armors.RangersVest, 10));
    //Heavy
    BanditChief.Drops.push(NewDrop(ItemList.Armors.ScalemailVest, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Armors.ChainmailArmor, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Armors.LightMailArmor, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Armors.BrigandVest, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Armors.SalvagedChainArmor, 10));
    //Shield
    BanditChief.Drops.push(NewDrop(ItemList.OffHand.Buckler, 100));
    BanditChief.Drops.push(NewDrop(ItemList.OffHand.SpikedShield, 75));
    BanditChief.Drops.push(NewDrop(ItemList.OffHand.TowerShield, 50));
    BanditChief.Drops.push(NewDrop(ItemList.OffHand.GrimShield, 25));
    BanditChief.Drops.push(NewDrop(ItemList.OffHand.Luna, 10));
    //Dagger offHand
    BanditChief.Drops.push(NewDrop(ItemList.OffHand.Dagger, 100));
    BanditChief.Drops.push(NewDrop(ItemList.OffHand.Kris, 75));
    BanditChief.Drops.push(NewDrop(ItemList.OffHand.MithrilPoint, 50));
    BanditChief.Drops.push(NewDrop(ItemList.OffHand.BoneKnife, 25));
    BanditChief.Drops.push(NewDrop(ItemList.OffHand.FangedKnife, 10));
    //Rings
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofMight, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofTenacity, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofAlertness, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofMastery, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofFluke, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.RingofResistance, 10));
    //Amulets
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofMight, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofTenacity, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofAlertness, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofMastery, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofFluke, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.AmuletofResistance, 10));
    //Talismans
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 100));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 75));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 50));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 25));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofMight, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofTenacity, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofAlertness, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofMastery, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofFluke, 10));
    BanditChief.Drops.push(NewDrop(ItemList.Accessory.TalismanofResistance, 10));
    BanditChief.Stats = {
        hp: 1350,
        maxHp: 1350,
        def: 30,
        minDmg: 40,
        maxDmg: 55,
        baseExp: 600,
        acc: 95,
        eva: 5,
        name: "BanditChief",
        displayName: "Bandit Chief",
        type: "weak",
        id: 7,
        level: 7,
        area: "BanditHideout",
        isShown: true,
        killCount: 0,
    };
    monsterList.BanditChief = BanditChief;

    BanditLord = {};
    BanditLord.Drops = [];
    //Swords
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.ShortSword, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.BroadSword, 100))
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.GreatSword, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.GothicSword, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.ColossusSword, 25));
    //Axes
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.HandAxe, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.BroadAxe, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.MilitaryAxe, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.BerserkerAxe, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.EttinAxe, 25));
    //Maces
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.Club, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.WarHammer, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.JaggedStar, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.TyrantClub, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.ReinforcedMace, 25));
    //Staves
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.ShortStaff, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.GrimWand, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.JoStaff, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.Stalagmite, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.GhostWand, 25));
    //Bows
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.ShortBow, 150));;
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.ShortBattleBow, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.RazorBow, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.GreatBow, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Weapons.AshwoodBow, 25));
    //Robes
    BanditLord.Drops.push(NewDrop(ItemList.Armors.BlackRobes, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Armors.HoodedRobes, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Armors.MonkRobes, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Armors.MageRobes, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Armors.MagicWeaverTunic, 25));
    //Leather
    BanditLord.Drops.push(NewDrop(ItemList.Armors.LeatherArmor, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Armors.ReinforcedLeatherVest, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Armors.StuddedDoublet, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Armors.DarkIronLeather, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Armors.RangersVest, 25));
    //Heavy
    BanditLord.Drops.push(NewDrop(ItemList.Armors.ScalemailVest, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Armors.ChainmailArmor, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Armors.LightMailArmor, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Armors.BrigandVest, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Armors.SalvagedChainArmor, 25));
    //Shield
    BanditLord.Drops.push(NewDrop(ItemList.OffHand.Buckler, 150));
    BanditLord.Drops.push(NewDrop(ItemList.OffHand.SpikedShield, 100));
    BanditLord.Drops.push(NewDrop(ItemList.OffHand.TowerShield, 75));
    BanditLord.Drops.push(NewDrop(ItemList.OffHand.GrimShield, 50));
    BanditLord.Drops.push(NewDrop(ItemList.OffHand.Luna, 25));
    //Dagger offHand
    BanditLord.Drops.push(NewDrop(ItemList.OffHand.Dagger, 150));
    BanditLord.Drops.push(NewDrop(ItemList.OffHand.Kris, 100));
    BanditLord.Drops.push(NewDrop(ItemList.OffHand.MithrilPoint, 75));
    BanditLord.Drops.push(NewDrop(ItemList.OffHand.BoneKnife, 50));
    BanditLord.Drops.push(NewDrop(ItemList.OffHand.FangedKnife, 25));
    //Rings
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofMight, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofTenacity, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofAlertness, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofMastery, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofFluke, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.RingofResistance, 25));
    //Amulets
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofMight, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofTenacity, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofAlertness, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofMastery, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofFluke, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.AmuletofResistance, 25));
    //Talismans
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 150));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 100));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 75));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 50));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofMight, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofTenacity, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofAlertness, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofMastery, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofFluke, 25));
    BanditLord.Drops.push(NewDrop(ItemList.Accessory.TalismanofResistance, 25));
    BanditLord.Stats = {
        hp: 1600,
        maxHp: 1600,
        def: 35,
        minDmg: 50,
        maxDmg: 60,
        baseExp: 750,
        acc: 95,
        eva: 5,
        name: "BanditLord",
        displayName: "Bandit Lord",
        type: "weak",
        id: 8,
        level: 8,
        area: "BanditHideout",
        isShown: true,
        killCount: 0,
    };
    monsterList.BanditLord = BanditLord;

    Spider = {};
    Spider.Drops = [];
    //Swords
    Spider.Drops.push(NewDrop(ItemList.Weapons.Scimitar, 50));
    Spider.Drops.push(NewDrop(ItemList.Weapons.LongSword, 25))
    Spider.Drops.push(NewDrop(ItemList.Weapons.Gladius, 10));
    Spider.Drops.push(NewDrop(ItemList.Weapons.TuskSword, 1));
    //Axes
    Spider.Drops.push(NewDrop(ItemList.Weapons.DoubleAxe, 50));
    Spider.Drops.push(NewDrop(ItemList.Weapons.BattleAxe, 25));
    Spider.Drops.push(NewDrop(ItemList.Weapons.BeardedAxe, 10));
    Spider.Drops.push(NewDrop(ItemList.Weapons.SmallCrescent, 1));
    //Maces
    Spider.Drops.push(NewDrop(ItemList.Weapons.SpikedClub, 50));
    Spider.Drops.push(NewDrop(ItemList.Weapons.Maul, 25));
    Spider.Drops.push(NewDrop(ItemList.Weapons.BattleHammer, 10));
    Spider.Drops.push(NewDrop(ItemList.Weapons.DevilStar, 1));
    //Staves
    Spider.Drops.push(NewDrop(ItemList.Weapons.LongStaff, 50));
    Spider.Drops.push(NewDrop(ItemList.Weapons.BurntWand, 25));
    Spider.Drops.push(NewDrop(ItemList.Weapons.QuaterStaff, 10));
    Spider.Drops.push(NewDrop(ItemList.Weapons.PetrifiedWand, 1));
    //Bows
    Spider.Drops.push(NewDrop(ItemList.Weapons.HuntersBow, 50));;
    Spider.Drops.push(NewDrop(ItemList.Weapons.LongBattleBow, 25));
    Spider.Drops.push(NewDrop(ItemList.Weapons.CedarBow, 10));
    Spider.Drops.push(NewDrop(ItemList.Weapons.StagBow, 1));
    //Robes
    Spider.Drops.push(NewDrop(ItemList.Armors.RedLinenVest, 50));
    Spider.Drops.push(NewDrop(ItemList.Armors.BeadedRobes, 25));
    Spider.Drops.push(NewDrop(ItemList.Armors.AncestralRobe, 10));
    Spider.Drops.push(NewDrop(ItemList.Armors.MysticsRobe, 1));
    //Leather
    Spider.Drops.push(NewDrop(ItemList.Armors.SnowhideVest, 50));
    Spider.Drops.push(NewDrop(ItemList.Armors.BattleHarness, 25));
    Spider.Drops.push(NewDrop(ItemList.Armors.CuredLeatherArmor, 10));
    Spider.Drops.push(NewDrop(ItemList.Armors.BlackBearHideVest, 1));
    //Heavy
    Spider.Drops.push(NewDrop(ItemList.Armors.AugumentedChainVest, 50));
    Spider.Drops.push(NewDrop(ItemList.Armors.JaggedChainVest, 25));
    Spider.Drops.push(NewDrop(ItemList.Armors.RecruitTunic, 10));
    Spider.Drops.push(NewDrop(ItemList.Armors.SiegeBrigadeVest, 1));
    //Shield
    Spider.Drops.push(NewDrop(ItemList.OffHand.SmallShield, 50));
    Spider.Drops.push(NewDrop(ItemList.OffHand.BoneShield, 25));
    Spider.Drops.push(NewDrop(ItemList.OffHand.GothicShield, 10));
    Spider.Drops.push(NewDrop(ItemList.OffHand.AncientShield, 1));
    //Dagger offHand
    Spider.Drops.push(NewDrop(ItemList.OffHand.Katar, 50));
    Spider.Drops.push(NewDrop(ItemList.OffHand.WristBlade, 25));
    Spider.Drops.push(NewDrop(ItemList.OffHand.BladeTalons, 10));
    Spider.Drops.push(NewDrop(ItemList.OffHand.FeralClaws, 1));
    //Rings
    Spider.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 50));
    Spider.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    Spider.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    Spider.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    Spider.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    Spider.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    Spider.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 25));
    Spider.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    Spider.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    Spider.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    Spider.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    Spider.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    Spider.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 10));
    Spider.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    Spider.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    Spider.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    Spider.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    Spider.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    Spider.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 1));
    Spider.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 1));
    Spider.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 1));
    Spider.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 1));
    Spider.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 1));
    Spider.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 1));
    //Amulets
    Spider.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    Spider.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    Spider.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    Spider.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    Spider.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    Spider.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    Spider.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    Spider.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    Spider.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    Spider.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    Spider.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    Spider.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    Spider.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    Spider.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    Spider.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    Spider.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    Spider.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    Spider.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    Spider.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 1));
    Spider.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 1));
    Spider.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 1));
    Spider.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 1));
    Spider.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 1));
    Spider.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 1));
    //Talismans
    Spider.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    Spider.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    Spider.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    Spider.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    Spider.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    Spider.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    Spider.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    Spider.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    Spider.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    Spider.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    Spider.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    Spider.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    Spider.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    Spider.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    Spider.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    Spider.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    Spider.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    Spider.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    Spider.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 1));
    Spider.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 1));
    Spider.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 1));
    Spider.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 1));
    Spider.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 1));
    Spider.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 1));
    Spider.Stats = {
        hp: 2000,
        maxHp: 2000,
        def: 40,
        minDmg: 65,
        maxDmg: 75,
        baseExp: 1000,
        acc: 95,
        eva: 5,
        name: "Spider",
        displayName: "Spider",
        type: "average",
        id: 9,
        level: 9,
        area: "Forest",
        isShown: true,
        killCount: 0,
    };
    monsterList.Spider = Spider;

    Wolf = {};
    Wolf.Drops = [];
    Wolf.Drops.push(NewDrop(ItemList.Weapons.Scimitar, 50));
    Wolf.Drops.push(NewDrop(ItemList.Weapons.LongSword, 25))
    Wolf.Drops.push(NewDrop(ItemList.Weapons.Gladius, 10));
    Wolf.Drops.push(NewDrop(ItemList.Weapons.TuskSword, 2));
    //Axes
    Wolf.Drops.push(NewDrop(ItemList.Weapons.DoubleAxe, 50));
    Wolf.Drops.push(NewDrop(ItemList.Weapons.BattleAxe, 25));
    Wolf.Drops.push(NewDrop(ItemList.Weapons.BeardedAxe, 10));
    Wolf.Drops.push(NewDrop(ItemList.Weapons.SmallCrescent, 2));
    //Maces
    Wolf.Drops.push(NewDrop(ItemList.Weapons.SpikedClub, 50));
    Wolf.Drops.push(NewDrop(ItemList.Weapons.Maul, 25));
    Wolf.Drops.push(NewDrop(ItemList.Weapons.BattleHammer, 10));
    Wolf.Drops.push(NewDrop(ItemList.Weapons.DevilStar, 2));
    //Staves
    Wolf.Drops.push(NewDrop(ItemList.Weapons.LongStaff, 50));
    Wolf.Drops.push(NewDrop(ItemList.Weapons.BurntWand, 25));
    Wolf.Drops.push(NewDrop(ItemList.Weapons.QuaterStaff, 10));
    Wolf.Drops.push(NewDrop(ItemList.Weapons.PetrifiedWand, 2));
    //Bows
    Wolf.Drops.push(NewDrop(ItemList.Weapons.HuntersBow, 50));;
    Wolf.Drops.push(NewDrop(ItemList.Weapons.LongBattleBow, 25));
    Wolf.Drops.push(NewDrop(ItemList.Weapons.CedarBow, 10));
    Wolf.Drops.push(NewDrop(ItemList.Weapons.StagBow, 2));
    //Robes
    Wolf.Drops.push(NewDrop(ItemList.Armors.RedLinenVest, 50));
    Wolf.Drops.push(NewDrop(ItemList.Armors.BeadedRobes, 25));
    Wolf.Drops.push(NewDrop(ItemList.Armors.AncestralRobe, 10));
    Wolf.Drops.push(NewDrop(ItemList.Armors.MysticsRobe, 2));
    //Leather
    Wolf.Drops.push(NewDrop(ItemList.Armors.SnowhideVest, 50));
    Wolf.Drops.push(NewDrop(ItemList.Armors.BattleHarness, 25));
    Wolf.Drops.push(NewDrop(ItemList.Armors.CuredLeatherArmor, 10));
    Wolf.Drops.push(NewDrop(ItemList.Armors.BlackBearHideVest, 2));
    //Heavy
    Wolf.Drops.push(NewDrop(ItemList.Armors.AugumentedChainVest, 50));
    Wolf.Drops.push(NewDrop(ItemList.Armors.JaggedChainVest, 25));
    Wolf.Drops.push(NewDrop(ItemList.Armors.RecruitTunic, 10));
    Wolf.Drops.push(NewDrop(ItemList.Armors.SiegeBrigadeVest, 2));
    //Shield
    Wolf.Drops.push(NewDrop(ItemList.OffHand.SmallShield, 50));
    Wolf.Drops.push(NewDrop(ItemList.OffHand.BoneShield, 25));
    Wolf.Drops.push(NewDrop(ItemList.OffHand.GothicShield, 10));
    Wolf.Drops.push(NewDrop(ItemList.OffHand.AncientShield, 2));
    //Dagger offHand
    Wolf.Drops.push(NewDrop(ItemList.OffHand.Katar, 50));
    Wolf.Drops.push(NewDrop(ItemList.OffHand.WristBlade, 25));
    Wolf.Drops.push(NewDrop(ItemList.OffHand.BladeTalons, 10));
    Wolf.Drops.push(NewDrop(ItemList.OffHand.FeralClaws, 2));
    //Rings
    Wolf.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 50));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 25));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 10));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 2));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 2));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 2));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 2));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 2));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 2));
    //Amulets
    Wolf.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 2));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 2));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 2));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 2));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 2));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 2));
    //Talismans
    Wolf.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 2));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 2));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 2));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 2));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 2));
    Wolf.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 2));
    Wolf.Stats = {
        hp: 2400,
        maxHp: 2400,
        def: 50,
        minDmg: 80,
        maxDmg: 100,
        baseExp: 1250,
        acc: 95,
        eva: 5,
        name: "Wolf",
        displayName: "Wolf",
        type: "average",
        id: 10,
        level: 10,
        area: "Forest",
        isShown: true,
        killCount: 0,
    };
    monsterList.Wolf = Wolf;

    Bear = {};
    Bear.Drops = [];
    Bear.Drops.push(NewDrop(ItemList.Weapons.Scimitar, 50));
    Bear.Drops.push(NewDrop(ItemList.Weapons.LongSword, 25))
    Bear.Drops.push(NewDrop(ItemList.Weapons.Gladius, 10));
    Bear.Drops.push(NewDrop(ItemList.Weapons.TuskSword, 3));
    //Axes
    Bear.Drops.push(NewDrop(ItemList.Weapons.DoubleAxe, 50));
    Bear.Drops.push(NewDrop(ItemList.Weapons.BattleAxe, 25));
    Bear.Drops.push(NewDrop(ItemList.Weapons.BeardedAxe, 10));
    Bear.Drops.push(NewDrop(ItemList.Weapons.SmallCrescent, 3));
    //Maces
    Bear.Drops.push(NewDrop(ItemList.Weapons.SpikedClub, 50));
    Bear.Drops.push(NewDrop(ItemList.Weapons.Maul, 25));
    Bear.Drops.push(NewDrop(ItemList.Weapons.BattleHammer, 10));
    Bear.Drops.push(NewDrop(ItemList.Weapons.DevilStar, 3));
    //Staves
    Bear.Drops.push(NewDrop(ItemList.Weapons.LongStaff, 50));
    Bear.Drops.push(NewDrop(ItemList.Weapons.BurntWand, 25));
    Bear.Drops.push(NewDrop(ItemList.Weapons.QuaterStaff, 10));
    Bear.Drops.push(NewDrop(ItemList.Weapons.PetrifiedWand, 3));
    //Bows
    Bear.Drops.push(NewDrop(ItemList.Weapons.HuntersBow, 50));;
    Bear.Drops.push(NewDrop(ItemList.Weapons.LongBattleBow, 25));
    Bear.Drops.push(NewDrop(ItemList.Weapons.CedarBow, 10));
    Bear.Drops.push(NewDrop(ItemList.Weapons.StagBow, 3));
    //Robes
    Bear.Drops.push(NewDrop(ItemList.Armors.RedLinenVest, 50));
    Bear.Drops.push(NewDrop(ItemList.Armors.BeadedRobes, 25));
    Bear.Drops.push(NewDrop(ItemList.Armors.AncestralRobe, 10));
    Bear.Drops.push(NewDrop(ItemList.Armors.MysticsRobe, 3));
    //Leather
    Bear.Drops.push(NewDrop(ItemList.Armors.SnowhideVest, 50));
    Bear.Drops.push(NewDrop(ItemList.Armors.BattleHarness, 25));
    Bear.Drops.push(NewDrop(ItemList.Armors.CuredLeatherArmor, 10));
    Bear.Drops.push(NewDrop(ItemList.Armors.BlackBearHideVest, 3));
    //Heavy
    Bear.Drops.push(NewDrop(ItemList.Armors.AugumentedChainVest, 50));
    Bear.Drops.push(NewDrop(ItemList.Armors.JaggedChainVest, 25));
    Bear.Drops.push(NewDrop(ItemList.Armors.RecruitTunic, 10));
    Bear.Drops.push(NewDrop(ItemList.Armors.SiegeBrigadeVest, 3));
    //Shield
    Bear.Drops.push(NewDrop(ItemList.OffHand.SmallShield, 50));
    Bear.Drops.push(NewDrop(ItemList.OffHand.BoneShield, 25));
    Bear.Drops.push(NewDrop(ItemList.OffHand.GothicShield, 10));
    Bear.Drops.push(NewDrop(ItemList.OffHand.AncientShield, 3));
    //Dagger offHand
    Bear.Drops.push(NewDrop(ItemList.OffHand.Katar, 50));
    Bear.Drops.push(NewDrop(ItemList.OffHand.WristBlade, 25));
    Bear.Drops.push(NewDrop(ItemList.OffHand.BladeTalons, 10));
    Bear.Drops.push(NewDrop(ItemList.OffHand.FeralClaws, 3));
    //Rings
    Bear.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 50));
    Bear.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    Bear.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    Bear.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    Bear.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    Bear.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    Bear.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 25));
    Bear.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    Bear.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    Bear.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    Bear.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    Bear.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    Bear.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 10));
    Bear.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    Bear.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    Bear.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    Bear.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    Bear.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    Bear.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 3));
    Bear.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 3));
    Bear.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 3));
    Bear.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 3));
    Bear.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 3));
    Bear.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 3));
    //Amulets
    Bear.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    Bear.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    Bear.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    Bear.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    Bear.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    Bear.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    Bear.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    Bear.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    Bear.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    Bear.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    Bear.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    Bear.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    Bear.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    Bear.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    Bear.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    Bear.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    Bear.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    Bear.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    Bear.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 3));
    Bear.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 3));
    Bear.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 3));
    Bear.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 3));
    Bear.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 3));
    Bear.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 3));
    //Talismans
    Bear.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    Bear.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    Bear.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    Bear.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    Bear.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    Bear.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    Bear.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    Bear.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    Bear.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    Bear.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    Bear.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    Bear.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    Bear.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    Bear.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    Bear.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    Bear.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    Bear.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    Bear.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    Bear.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 3));
    Bear.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 3));
    Bear.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 3));
    Bear.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 3));
    Bear.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 3));
    Bear.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 3));
    Bear.Stats = {
        hp: 3000,
        maxHp: 3000,
        def: 60,
        minDmg: 100,
        maxDmg: 115,
        baseExp: 1500,
        acc: 95,
        eva: 5,
        name: "Bear",
        displayName: "Bear",
        type: "average",
        id: 11,
        level: 11,
        area: "Forest",
        isShown: true,
        killCount: 0,
    };
    monsterList.Bear = Bear;

    Grizzly = {};
    Grizzly.Drops = [];
    Grizzly.Drops.push(NewDrop(ItemList.Weapons.Scimitar, 50));
    Grizzly.Drops.push(NewDrop(ItemList.Weapons.LongSword, 25))
    Grizzly.Drops.push(NewDrop(ItemList.Weapons.Gladius, 10));
    Grizzly.Drops.push(NewDrop(ItemList.Weapons.TuskSword, 4));
    //Axes
    Grizzly.Drops.push(NewDrop(ItemList.Weapons.DoubleAxe, 50));
    Grizzly.Drops.push(NewDrop(ItemList.Weapons.BattleAxe, 25));
    Grizzly.Drops.push(NewDrop(ItemList.Weapons.BeardedAxe, 10));
    Grizzly.Drops.push(NewDrop(ItemList.Weapons.SmallCrescent, 4));
    //Maces
    Grizzly.Drops.push(NewDrop(ItemList.Weapons.SpikedClub, 50));
    Grizzly.Drops.push(NewDrop(ItemList.Weapons.Maul, 25));
    Grizzly.Drops.push(NewDrop(ItemList.Weapons.BattleHammer, 10));
    Grizzly.Drops.push(NewDrop(ItemList.Weapons.DevilStar, 4));
    //Staves
    Grizzly.Drops.push(NewDrop(ItemList.Weapons.LongStaff, 50));
    Grizzly.Drops.push(NewDrop(ItemList.Weapons.BurntWand, 25));
    Grizzly.Drops.push(NewDrop(ItemList.Weapons.QuaterStaff, 10));
    Grizzly.Drops.push(NewDrop(ItemList.Weapons.PetrifiedWand, 4));
    //Bows
    Grizzly.Drops.push(NewDrop(ItemList.Weapons.HuntersBow, 50));;
    Grizzly.Drops.push(NewDrop(ItemList.Weapons.LongBattleBow, 25));
    Grizzly.Drops.push(NewDrop(ItemList.Weapons.CedarBow, 10));
    Grizzly.Drops.push(NewDrop(ItemList.Weapons.StagBow, 4));
    //Robes
    Grizzly.Drops.push(NewDrop(ItemList.Armors.RedLinenVest, 50));
    Grizzly.Drops.push(NewDrop(ItemList.Armors.BeadedRobes, 25));
    Grizzly.Drops.push(NewDrop(ItemList.Armors.AncestralRobe, 10));
    Grizzly.Drops.push(NewDrop(ItemList.Armors.MysticsRobe, 4));
    //Leather
    Grizzly.Drops.push(NewDrop(ItemList.Armors.SnowhideVest, 50));
    Grizzly.Drops.push(NewDrop(ItemList.Armors.BattleHarness, 25));
    Grizzly.Drops.push(NewDrop(ItemList.Armors.CuredLeatherArmor, 10));
    Grizzly.Drops.push(NewDrop(ItemList.Armors.BlackBearHideVest, 4));
    //Heavy
    Grizzly.Drops.push(NewDrop(ItemList.Armors.AugumentedChainVest, 50));
    Grizzly.Drops.push(NewDrop(ItemList.Armors.JaggedChainVest, 25));
    Grizzly.Drops.push(NewDrop(ItemList.Armors.RecruitTunic, 10));
    Grizzly.Drops.push(NewDrop(ItemList.Armors.SiegeBrigadeVest, 4));
    //Shield
    Grizzly.Drops.push(NewDrop(ItemList.OffHand.SmallShield, 50));
    Grizzly.Drops.push(NewDrop(ItemList.OffHand.BoneShield, 25));
    Grizzly.Drops.push(NewDrop(ItemList.OffHand.GothicShield, 10));
    Grizzly.Drops.push(NewDrop(ItemList.OffHand.AncientShield, 4));
    //Dagger offHand
    Grizzly.Drops.push(NewDrop(ItemList.OffHand.Katar, 50));
    Grizzly.Drops.push(NewDrop(ItemList.OffHand.WristBlade, 25));
    Grizzly.Drops.push(NewDrop(ItemList.OffHand.BladeTalons, 10));
    Grizzly.Drops.push(NewDrop(ItemList.OffHand.FeralClaws, 4));
    //Rings
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 50));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 25));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 10));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 4));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 4));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 4));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 4));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 4));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 4));
    //Amulets
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 4));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 4));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 4));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 4));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 4));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 4));
    //Talismans
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 4));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 4));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 4));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 4));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 4));
    Grizzly.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 4));
    Grizzly.Stats = {
        hp: 3500,
        maxHp: 3500,
        def: 70,
        minDmg: 120,
        maxDmg: 140,
        baseExp: 1800,
        acc: 95,
        eva: 5,
        name: "Grizzly",
        displayName: "Grizzly",
        type: "average",
        id: 12,
        level: 12,
        area: "Forest",
        isShown: true,
        killCount: 0,
    };
    monsterList.Grizzly = Grizzly;

    Troll = {};
    Troll.Drops = [];
    Troll.Drops.push(NewDrop(ItemList.Weapons.Scimitar, 50));
    Troll.Drops.push(NewDrop(ItemList.Weapons.LongSword, 25))
    Troll.Drops.push(NewDrop(ItemList.Weapons.Gladius, 10));
    Troll.Drops.push(NewDrop(ItemList.Weapons.TuskSword, 5));
    //Axes
    Troll.Drops.push(NewDrop(ItemList.Weapons.DoubleAxe, 50));
    Troll.Drops.push(NewDrop(ItemList.Weapons.BattleAxe, 25));
    Troll.Drops.push(NewDrop(ItemList.Weapons.BeardedAxe, 10));
    Troll.Drops.push(NewDrop(ItemList.Weapons.SmallCrescent, 5));
    //Maces
    Troll.Drops.push(NewDrop(ItemList.Weapons.SpikedClub, 50));
    Troll.Drops.push(NewDrop(ItemList.Weapons.Maul, 25));
    Troll.Drops.push(NewDrop(ItemList.Weapons.BattleHammer, 10));
    Troll.Drops.push(NewDrop(ItemList.Weapons.DevilStar, 5));
    //Staves
    Troll.Drops.push(NewDrop(ItemList.Weapons.LongStaff, 50));
    Troll.Drops.push(NewDrop(ItemList.Weapons.BurntWand, 25));
    Troll.Drops.push(NewDrop(ItemList.Weapons.QuaterStaff, 10));
    Troll.Drops.push(NewDrop(ItemList.Weapons.PetrifiedWand, 5));
    //Bows
    Troll.Drops.push(NewDrop(ItemList.Weapons.HuntersBow, 50));;
    Troll.Drops.push(NewDrop(ItemList.Weapons.LongBattleBow, 25));
    Troll.Drops.push(NewDrop(ItemList.Weapons.CedarBow, 10));
    Troll.Drops.push(NewDrop(ItemList.Weapons.StagBow, 5));
    //Robes
    Troll.Drops.push(NewDrop(ItemList.Armors.RedLinenVest, 50));
    Troll.Drops.push(NewDrop(ItemList.Armors.BeadedRobes, 25));
    Troll.Drops.push(NewDrop(ItemList.Armors.AncestralRobe, 10));
    Troll.Drops.push(NewDrop(ItemList.Armors.MysticsRobe, 5));
    //Leather
    Troll.Drops.push(NewDrop(ItemList.Armors.SnowhideVest, 50));
    Troll.Drops.push(NewDrop(ItemList.Armors.BattleHarness, 25));
    Troll.Drops.push(NewDrop(ItemList.Armors.CuredLeatherArmor, 10));
    Troll.Drops.push(NewDrop(ItemList.Armors.BlackBearHideVest, 5));
    //Heavy
    Troll.Drops.push(NewDrop(ItemList.Armors.AugumentedChainVest, 50));
    Troll.Drops.push(NewDrop(ItemList.Armors.JaggedChainVest, 25));
    Troll.Drops.push(NewDrop(ItemList.Armors.RecruitTunic, 10));
    Troll.Drops.push(NewDrop(ItemList.Armors.SiegeBrigadeVest, 5));
    //Shield
    Troll.Drops.push(NewDrop(ItemList.OffHand.SmallShield, 50));
    Troll.Drops.push(NewDrop(ItemList.OffHand.BoneShield, 25));
    Troll.Drops.push(NewDrop(ItemList.OffHand.GothicShield, 10));
    Troll.Drops.push(NewDrop(ItemList.OffHand.AncientShield, 5));
    //Dagger offHand
    Troll.Drops.push(NewDrop(ItemList.OffHand.Katar, 50));
    Troll.Drops.push(NewDrop(ItemList.OffHand.WristBlade, 25));
    Troll.Drops.push(NewDrop(ItemList.OffHand.BladeTalons, 10));
    Troll.Drops.push(NewDrop(ItemList.OffHand.FeralClaws, 5));
    //Rings
    Troll.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 50));
    Troll.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    Troll.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    Troll.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    Troll.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    Troll.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    Troll.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 25));
    Troll.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    Troll.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    Troll.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    Troll.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    Troll.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    Troll.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 10));
    Troll.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    Troll.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    Troll.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    Troll.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    Troll.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    Troll.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 5));
    Troll.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 5));
    Troll.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 5));
    Troll.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 5));
    Troll.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 5));
    Troll.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 5));
    //Amulets
    Troll.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    Troll.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    Troll.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    Troll.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    Troll.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    Troll.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    Troll.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    Troll.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    Troll.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    Troll.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    Troll.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    Troll.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    Troll.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    Troll.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    Troll.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    Troll.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    Troll.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    Troll.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    Troll.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 5));
    Troll.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 5));
    Troll.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 5));
    Troll.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 5));
    Troll.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 5));
    Troll.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 5));
    //Talismans
    Troll.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    Troll.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    Troll.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    Troll.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    Troll.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    Troll.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    Troll.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    Troll.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    Troll.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    Troll.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    Troll.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    Troll.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    Troll.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    Troll.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    Troll.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    Troll.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    Troll.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    Troll.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    Troll.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 5));
    Troll.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 5));
    Troll.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 5));
    Troll.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 5));
    Troll.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 5));
    Troll.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 5));
    Troll.Stats = {
        hp: 4200,
        maxHp: 4200,
        def: 80,
        minDmg: 150,
        maxDmg: 180,
        baseExp: 2200,
        acc: 95,
        eva: 5,
        name: "Troll",
        displayName: "Troll",
        type: "average",
        id: 13,
        level: 13,
        area: "Forest",
        isShown: true,
        killCount: 0,
    };
    monsterList.Troll = Troll;

    ForestTroll = {};
    ForestTroll.Drops = [];
    ForestTroll.Drops.push(NewDrop(ItemList.Weapons.Scimitar, 75));
    ForestTroll.Drops.push(NewDrop(ItemList.Weapons.LongSword, 50))
    ForestTroll.Drops.push(NewDrop(ItemList.Weapons.Gladius, 25));
    ForestTroll.Drops.push(NewDrop(ItemList.Weapons.TuskSword, 10));
    //Axes
    ForestTroll.Drops.push(NewDrop(ItemList.Weapons.DoubleAxe, 75));
    ForestTroll.Drops.push(NewDrop(ItemList.Weapons.BattleAxe, 50));
    ForestTroll.Drops.push(NewDrop(ItemList.Weapons.BeardedAxe, 25));
    ForestTroll.Drops.push(NewDrop(ItemList.Weapons.SmallCrescent, 10));
    //Maces
    ForestTroll.Drops.push(NewDrop(ItemList.Weapons.SpikedClub, 75));
    ForestTroll.Drops.push(NewDrop(ItemList.Weapons.Maul, 50));
    ForestTroll.Drops.push(NewDrop(ItemList.Weapons.BattleHammer, 25));
    ForestTroll.Drops.push(NewDrop(ItemList.Weapons.DevilStar, 10));
    //Staves
    ForestTroll.Drops.push(NewDrop(ItemList.Weapons.LongStaff, 75));
    ForestTroll.Drops.push(NewDrop(ItemList.Weapons.BurntWand, 50));
    ForestTroll.Drops.push(NewDrop(ItemList.Weapons.QuaterStaff, 25));
    ForestTroll.Drops.push(NewDrop(ItemList.Weapons.PetrifiedWand, 10));
    //Bows
    ForestTroll.Drops.push(NewDrop(ItemList.Weapons.HuntersBow, 75));;
    ForestTroll.Drops.push(NewDrop(ItemList.Weapons.LongBattleBow, 50));
    ForestTroll.Drops.push(NewDrop(ItemList.Weapons.CedarBow, 25));
    ForestTroll.Drops.push(NewDrop(ItemList.Weapons.StagBow, 10));
    //Robes
    ForestTroll.Drops.push(NewDrop(ItemList.Armors.RedLinenVest, 75));
    ForestTroll.Drops.push(NewDrop(ItemList.Armors.BeadedRobes, 50));
    ForestTroll.Drops.push(NewDrop(ItemList.Armors.AncestralRobe, 25));
    ForestTroll.Drops.push(NewDrop(ItemList.Armors.MysticsRobe, 10));
    //Leather
    ForestTroll.Drops.push(NewDrop(ItemList.Armors.SnowhideVest, 75));
    ForestTroll.Drops.push(NewDrop(ItemList.Armors.BattleHarness, 50));
    ForestTroll.Drops.push(NewDrop(ItemList.Armors.CuredLeatherArmor, 25));
    ForestTroll.Drops.push(NewDrop(ItemList.Armors.BlackBearHideVest, 10));
    //Heavy
    ForestTroll.Drops.push(NewDrop(ItemList.Armors.AugumentedChainVest, 75));
    ForestTroll.Drops.push(NewDrop(ItemList.Armors.JaggedChainVest, 50));
    ForestTroll.Drops.push(NewDrop(ItemList.Armors.RecruitTunic, 25));
    ForestTroll.Drops.push(NewDrop(ItemList.Armors.SiegeBrigadeVest, 10));
    //Shield
    ForestTroll.Drops.push(NewDrop(ItemList.OffHand.SmallShield, 75));
    ForestTroll.Drops.push(NewDrop(ItemList.OffHand.BoneShield, 50));
    ForestTroll.Drops.push(NewDrop(ItemList.OffHand.GothicShield, 25));
    ForestTroll.Drops.push(NewDrop(ItemList.OffHand.AncientShield, 10));
    //Dagger offHand
    ForestTroll.Drops.push(NewDrop(ItemList.OffHand.Katar, 75));
    ForestTroll.Drops.push(NewDrop(ItemList.OffHand.WristBlade, 50));
    ForestTroll.Drops.push(NewDrop(ItemList.OffHand.BladeTalons, 25));
    ForestTroll.Drops.push(NewDrop(ItemList.OffHand.FeralClaws, 10));
    //Rings
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 75));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 75));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 75));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 75));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 75));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 75));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 50));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 50));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 50));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 50));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 50));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 50));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 25));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 25));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 25));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 25));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 25));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 25));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 10));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 10));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 10));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 10));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 10));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 10));
    //Amulets
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 75));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 75));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 75));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 75));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 75));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 75));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 50));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 50));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 50));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 50));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 50));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 50));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 25));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 25));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 25));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 25));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 25));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 25));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 10));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 10));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 10));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 10));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 10));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 10));
    //Talismans
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 75));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 75));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 75));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 75));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 75));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 75));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 50));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 50));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 50));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 50));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 50));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 50));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 25));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 25));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 25));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 25));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 25));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 25));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 10));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 10));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 10));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 10));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 10));
    ForestTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 10));
    ForestTroll.Stats = {
        hp: 4800,
        maxHp: 4800,
        def: 90,
        minDmg: 170,
        maxDmg: 200,
        baseExp: 2700,
        acc: 95,
        eva: 5,
        name: "ForestTroll",
        displayName: "Forest Troll",
        type: "average",
        id: 14,
        level: 14,
        area: "Forest",
        isShown: true,
        killCount: 0,
    };
    monsterList.ForestTroll = ForestTroll;

    SpiderQueen = {};
    SpiderQueen.Drops = [];
    SpiderQueen.Drops.push(NewDrop(ItemList.Weapons.Scimitar, 100));
    SpiderQueen.Drops.push(NewDrop(ItemList.Weapons.LongSword, 75))
    SpiderQueen.Drops.push(NewDrop(ItemList.Weapons.Gladius, 50));
    SpiderQueen.Drops.push(NewDrop(ItemList.Weapons.TuskSword, 25));
    SpiderQueen.Drops.push(NewDrop(ItemList.Weapons.HighlandBlade, 10));
    //Axes
    SpiderQueen.Drops.push(NewDrop(ItemList.Weapons.DoubleAxe, 100));
    SpiderQueen.Drops.push(NewDrop(ItemList.Weapons.BattleAxe, 75));
    SpiderQueen.Drops.push(NewDrop(ItemList.Weapons.BeardedAxe, 50));
    SpiderQueen.Drops.push(NewDrop(ItemList.Weapons.SmallCrescent, 25));
    SpiderQueen.Drops.push(NewDrop(ItemList.Weapons.FeralAxe, 10));
    //Maces
    SpiderQueen.Drops.push(NewDrop(ItemList.Weapons.SpikedClub, 100));
    SpiderQueen.Drops.push(NewDrop(ItemList.Weapons.Maul, 75));
    SpiderQueen.Drops.push(NewDrop(ItemList.Weapons.BattleHammer, 50));
    SpiderQueen.Drops.push(NewDrop(ItemList.Weapons.DevilStar, 25));
    SpiderQueen.Drops.push(NewDrop(ItemList.Weapons.OgreMaul, 10));
    //Staves
    SpiderQueen.Drops.push(NewDrop(ItemList.Weapons.LongStaff, 100));
    SpiderQueen.Drops.push(NewDrop(ItemList.Weapons.BurntWand, 75));
    SpiderQueen.Drops.push(NewDrop(ItemList.Weapons.QuaterStaff, 50));
    SpiderQueen.Drops.push(NewDrop(ItemList.Weapons.PetrifiedWand, 25));
    SpiderQueen.Drops.push(NewDrop(ItemList.Weapons.UnearthedWand, 10));
    //Bows
    SpiderQueen.Drops.push(NewDrop(ItemList.Weapons.HuntersBow, 100));;
    SpiderQueen.Drops.push(NewDrop(ItemList.Weapons.LongBattleBow, 75));
    SpiderQueen.Drops.push(NewDrop(ItemList.Weapons.CedarBow, 50));
    SpiderQueen.Drops.push(NewDrop(ItemList.Weapons.StagBow, 25));
    SpiderQueen.Drops.push(NewDrop(ItemList.Weapons.CeremonialBow, 10));
    //Robes
    SpiderQueen.Drops.push(NewDrop(ItemList.Armors.RedLinenVest, 100));
    SpiderQueen.Drops.push(NewDrop(ItemList.Armors.BeadedRobes, 75));
    SpiderQueen.Drops.push(NewDrop(ItemList.Armors.AncestralRobe, 50));
    SpiderQueen.Drops.push(NewDrop(ItemList.Armors.MysticsRobe, 25));
    SpiderQueen.Drops.push(NewDrop(ItemList.Armors.AncestralTunic, 10));
    //Leather
    SpiderQueen.Drops.push(NewDrop(ItemList.Armors.SnowhideVest, 100));
    SpiderQueen.Drops.push(NewDrop(ItemList.Armors.BattleHarness, 75));
    SpiderQueen.Drops.push(NewDrop(ItemList.Armors.CuredLeatherArmor, 50));
    SpiderQueen.Drops.push(NewDrop(ItemList.Armors.BlackBearHideVest, 25));
    SpiderQueen.Drops.push(NewDrop(ItemList.Armors.NomadicVest, 10));
    //Heavy
    SpiderQueen.Drops.push(NewDrop(ItemList.Armors.AugumentedChainVest, 100));
    SpiderQueen.Drops.push(NewDrop(ItemList.Armors.JaggedChainVest, 75));
    SpiderQueen.Drops.push(NewDrop(ItemList.Armors.RecruitTunic, 50));
    SpiderQueen.Drops.push(NewDrop(ItemList.Armors.SiegeBrigadeVest, 25));
    SpiderQueen.Drops.push(NewDrop(ItemList.Armors.TemplarArmor, 10));
    //Shield
    SpiderQueen.Drops.push(NewDrop(ItemList.OffHand.SmallShield, 100));
    SpiderQueen.Drops.push(NewDrop(ItemList.OffHand.BoneShield, 75));
    SpiderQueen.Drops.push(NewDrop(ItemList.OffHand.GothicShield, 50));
    SpiderQueen.Drops.push(NewDrop(ItemList.OffHand.AncientShield, 25));
    SpiderQueen.Drops.push(NewDrop(ItemList.OffHand.Hyperion, 10));
    //Dagger offHand
    SpiderQueen.Drops.push(NewDrop(ItemList.OffHand.Katar, 100));
    SpiderQueen.Drops.push(NewDrop(ItemList.OffHand.WristBlade, 75));
    SpiderQueen.Drops.push(NewDrop(ItemList.OffHand.BladeTalons, 50));
    SpiderQueen.Drops.push(NewDrop(ItemList.OffHand.FeralClaws, 25));
    SpiderQueen.Drops.push(NewDrop(ItemList.OffHand.RunicTalons, 10));
    //Rings
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 100));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 100));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 100));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 100));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 100));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 100));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 75));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 75));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 75));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 75));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 75));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 75));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 50));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 50));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 50));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 50));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 50));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 50));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 25));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 25));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 25));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 25));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 25));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 25));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofMight, 10));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofTenacity, 10));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofAlertness, 10));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofMastery, 10));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofFluke, 10));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.RingofResistance, 10));
    //Amulets
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 100));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 100));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 100));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 100));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 100));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 100));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 75));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 75));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 75));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 75));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 75));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 75));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 50));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 50));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 50));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 50));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 50));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 50));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 25));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 25));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 25));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 25));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 25));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 25));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofMight, 10));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofTenacity, 10));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofAlertness, 10));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofMastery, 10));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofFluke, 10));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofResistance, 10));
    //Talismans
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 100));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 100));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 100));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 100));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 100));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 100));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 75));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 75));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 75));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 75));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 75));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 75));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 50));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 50));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 50));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 50));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 50));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 50));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 25));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 25));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 25));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 25));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 25));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 25));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofMight, 10));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofTenacity, 10));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofAlertness, 10));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofMastery, 10));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofFluke, 10));
    SpiderQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofResistance, 10));
    SpiderQueen.Stats = {
        hp: 6000,
        maxHp: 6000,
        def: 100,
        minDmg: 200,
        maxDmg: 220,
        baseExp: 3500,
        acc: 95,
        eva: 5,
        name: "SpiderQueen",
        displayName: "Spider Queen",
        type: "average",
        id: 15,
        level: 15,
        area: "Forest",
        isShown: true,
        killCount: 0,
    };
    monsterList.SpiderQueen = SpiderQueen;

    TrollLeader = {};
    TrollLeader.Drops = [];
    TrollLeader.Drops.push(NewDrop(ItemList.Weapons.Scimitar, 100));
    TrollLeader.Drops.push(NewDrop(ItemList.Weapons.LongSword, 75))
    TrollLeader.Drops.push(NewDrop(ItemList.Weapons.Gladius, 50));
    TrollLeader.Drops.push(NewDrop(ItemList.Weapons.TuskSword, 25));
    TrollLeader.Drops.push(NewDrop(ItemList.Weapons.HighlandBlade, 10));
    //Axes
    TrollLeader.Drops.push(NewDrop(ItemList.Weapons.DoubleAxe, 100));
    TrollLeader.Drops.push(NewDrop(ItemList.Weapons.BattleAxe, 75));
    TrollLeader.Drops.push(NewDrop(ItemList.Weapons.BeardedAxe, 50));
    TrollLeader.Drops.push(NewDrop(ItemList.Weapons.SmallCrescent, 25));
    TrollLeader.Drops.push(NewDrop(ItemList.Weapons.FeralAxe, 10));
    //Maces
    TrollLeader.Drops.push(NewDrop(ItemList.Weapons.SpikedClub, 100));
    TrollLeader.Drops.push(NewDrop(ItemList.Weapons.Maul, 75));
    TrollLeader.Drops.push(NewDrop(ItemList.Weapons.BattleHammer, 50));
    TrollLeader.Drops.push(NewDrop(ItemList.Weapons.DevilStar, 25));
    TrollLeader.Drops.push(NewDrop(ItemList.Weapons.OgreMaul, 10));
    //Staves
    TrollLeader.Drops.push(NewDrop(ItemList.Weapons.LongStaff, 100));
    TrollLeader.Drops.push(NewDrop(ItemList.Weapons.BurntWand, 75));
    TrollLeader.Drops.push(NewDrop(ItemList.Weapons.QuaterStaff, 50));
    TrollLeader.Drops.push(NewDrop(ItemList.Weapons.PetrifiedWand, 25));
    TrollLeader.Drops.push(NewDrop(ItemList.Weapons.UnearthedWand, 10));
    //Bows
    TrollLeader.Drops.push(NewDrop(ItemList.Weapons.HuntersBow, 100));;
    TrollLeader.Drops.push(NewDrop(ItemList.Weapons.LongBattleBow, 75));
    TrollLeader.Drops.push(NewDrop(ItemList.Weapons.CedarBow, 50));
    TrollLeader.Drops.push(NewDrop(ItemList.Weapons.StagBow, 25));
    TrollLeader.Drops.push(NewDrop(ItemList.Weapons.CeremonialBow, 10));
    //Robes
    TrollLeader.Drops.push(NewDrop(ItemList.Armors.RedLinenVest, 100));
    TrollLeader.Drops.push(NewDrop(ItemList.Armors.BeadedRobes, 75));
    TrollLeader.Drops.push(NewDrop(ItemList.Armors.AncestralRobe, 50));
    TrollLeader.Drops.push(NewDrop(ItemList.Armors.MysticsRobe, 25));
    TrollLeader.Drops.push(NewDrop(ItemList.Armors.AncestralTunic, 10));
    //Leather
    TrollLeader.Drops.push(NewDrop(ItemList.Armors.SnowhideVest, 100));
    TrollLeader.Drops.push(NewDrop(ItemList.Armors.BattleHarness, 75));
    TrollLeader.Drops.push(NewDrop(ItemList.Armors.CuredLeatherArmor, 50));
    TrollLeader.Drops.push(NewDrop(ItemList.Armors.BlackBearHideVest, 25));
    TrollLeader.Drops.push(NewDrop(ItemList.Armors.NomadicVest, 10));
    //Heavy
    TrollLeader.Drops.push(NewDrop(ItemList.Armors.AugumentedChainVest, 100));
    TrollLeader.Drops.push(NewDrop(ItemList.Armors.JaggedChainVest, 75));
    TrollLeader.Drops.push(NewDrop(ItemList.Armors.RecruitTunic, 50));
    TrollLeader.Drops.push(NewDrop(ItemList.Armors.SiegeBrigadeVest, 25));
    TrollLeader.Drops.push(NewDrop(ItemList.Armors.TemplarArmor, 10));
    //Shield
    TrollLeader.Drops.push(NewDrop(ItemList.OffHand.SmallShield, 100));
    TrollLeader.Drops.push(NewDrop(ItemList.OffHand.BoneShield, 75));
    TrollLeader.Drops.push(NewDrop(ItemList.OffHand.GothicShield, 50));
    TrollLeader.Drops.push(NewDrop(ItemList.OffHand.AncientShield, 25));
    TrollLeader.Drops.push(NewDrop(ItemList.OffHand.Hyperion, 10));
    //Dagger offHand
    TrollLeader.Drops.push(NewDrop(ItemList.OffHand.Katar, 100));
    TrollLeader.Drops.push(NewDrop(ItemList.OffHand.WristBlade, 75));
    TrollLeader.Drops.push(NewDrop(ItemList.OffHand.BladeTalons, 50));
    TrollLeader.Drops.push(NewDrop(ItemList.OffHand.FeralClaws, 25));
    TrollLeader.Drops.push(NewDrop(ItemList.OffHand.RunicTalons, 10));
    //Rings
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 100));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 100));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 100));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 100));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 100));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 100));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 75));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 75));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 75));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 75));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 75));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 75));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 50));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 50));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 50));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 50));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 50));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 50));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 25));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 25));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 25));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 25));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 25));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 25));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofMight, 10));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofTenacity, 10));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofAlertness, 10));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofMastery, 10));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofFluke, 10));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.RingofResistance, 10));
    //Amulets
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 100));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 100));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 100));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 100));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 100));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 100));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 75));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 75));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 75));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 75));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 75));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 75));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 50));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 50));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 50));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 50));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 50));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 50));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 25));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 25));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 25));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 25));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 25));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 25));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofMight, 10));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofTenacity, 10));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofAlertness, 10));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofMastery, 10));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofFluke, 10));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.AmuletofResistance, 10));
    //Talismans
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 100));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 100));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 100));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 100));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 100));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 100));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 75));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 75));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 75));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 75));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 75));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 75));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 50));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 50));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 50));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 50));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 50));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 50));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 25));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 25));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 25));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 25));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 25));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 25));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofMight, 10));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofTenacity, 10));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofAlertness, 10));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofMastery, 10));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofFluke, 10));
    TrollLeader.Drops.push(NewDrop(ItemList.Accessory.TalismanofResistance, 10));
    TrollLeader.Stats = {
        hp: 8000,
        maxHp: 8000,
        def: 110,
        minDmg: 220,
        maxDmg: 240,
        baseExp: 4000,
        acc: 95,
        eva: 5,
        name: "TrollLeader",
        displayName: "Troll Leader",
        type: "average",
        id: 16,
        level: 16,
        area: "Forest",
        isShown: true,
        killCount: 0,
    };
    monsterList.TrollLeader = TrollLeader;

    Giant = {};
    Giant.Drops = [];
    Giant.Drops.push(NewDrop(ItemList.Weapons.Sabre, 50));
    Giant.Drops.push(NewDrop(ItemList.Weapons.Claymore, 25))
    Giant.Drops.push(NewDrop(ItemList.Weapons.RuneSword, 10));
    Giant.Drops.push(NewDrop(ItemList.Weapons.HydraEdge, 1));
    //Axes
    Giant.Drops.push(NewDrop(ItemList.Weapons.WarAxe, 50));
    Giant.Drops.push(NewDrop(ItemList.Weapons.GreatAxe, 25));
    Giant.Drops.push(NewDrop(ItemList.Weapons.GothicAxe, 10));
    Giant.Drops.push(NewDrop(ItemList.Weapons.SilverEdgedAxe, 1));
    //Maces
    Giant.Drops.push(NewDrop(ItemList.Weapons.MorningStar, 50));
    Giant.Drops.push(NewDrop(ItemList.Weapons.GreatMaul, 25));
    Giant.Drops.push(NewDrop(ItemList.Weapons.WarClub, 10));
    Giant.Drops.push(NewDrop(ItemList.Weapons.Knout, 1));
    //Staves
    Giant.Drops.push(NewDrop(ItemList.Weapons.Wand, 50));
    Giant.Drops.push(NewDrop(ItemList.Weapons.GnarledStaff, 25));
    Giant.Drops.push(NewDrop(ItemList.Weapons.ArchonStaff, 10));
    Giant.Drops.push(NewDrop(ItemList.Weapons.TombWand, 1));
    //Bows
    Giant.Drops.push(NewDrop(ItemList.Weapons.LongBow, 50));
    Giant.Drops.push(NewDrop(ItemList.Weapons.ShortWarBow, 25));
    Giant.Drops.push(NewDrop(ItemList.Weapons.DoubleBow, 10));
    Giant.Drops.push(NewDrop(ItemList.Weapons.HydraBow, 1));
    //Robes
    Giant.Drops.push(NewDrop(ItemList.Armors.BarbaricLinenVest, 50));
    Giant.Drops.push(NewDrop(ItemList.Armors.BarbaricClothVest, 25));
    Giant.Drops.push(NewDrop(ItemList.Armors.JourneymansRobe, 10));
    Giant.Drops.push(NewDrop(ItemList.Armors.RitualTunic, 1));
    //Leather
    Giant.Drops.push(NewDrop(ItemList.Armors.StuddedLeather, 50));
    Giant.Drops.push(NewDrop(ItemList.Armors.HardLeatherTunic, 25));
    Giant.Drops.push(NewDrop(ItemList.Armors.StuddedLeatherHarness, 10));
    Giant.Drops.push(NewDrop(ItemList.Armors.TannedLeatherJerkin, 1));
    //Heavy
    Giant.Drops.push(NewDrop(ItemList.Armors.GothicPlate, 50));
    Giant.Drops.push(NewDrop(ItemList.Armors.FullPlatemail, 25));
    Giant.Drops.push(NewDrop(ItemList.Armors.EmbossedPlate, 10));
    Giant.Drops.push(NewDrop(ItemList.Armors.ChaosArmor, 1));
    //Shield
    Giant.Drops.push(NewDrop(ItemList.OffHand.LargeShield, 50));
    Giant.Drops.push(NewDrop(ItemList.OffHand.Defender, 25));
    Giant.Drops.push(NewDrop(ItemList.OffHand.DragonShield, 10));
    Giant.Drops.push(NewDrop(ItemList.OffHand.Monarch, 1));
    //Dagger offHand
    Giant.Drops.push(NewDrop(ItemList.OffHand.Quhab, 50));
    Giant.Drops.push(NewDrop(ItemList.OffHand.WristSpike, 25));
    Giant.Drops.push(NewDrop(ItemList.OffHand.Cinquedeas, 10));
    Giant.Drops.push(NewDrop(ItemList.OffHand.ScissorsSuwayyah, 1));
    //Rings
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 1));
    //Amulets
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 1));
    //Talismans
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 1));
    Giant.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 1));
    Giant.Stats = {
        hp: 10000,
        maxHp: 10000,
        def: 120,
        minDmg: 230,
        maxDmg: 250,
        baseExp: 5000,
        acc: 95,
        eva: 5,
        name: "Giant",
        displayName: "Giant",
        type: "strong",
        id: 17,
        level: 17,
        area: "Mountains",
        isShown: true,
        killCount: 0,
    };
    monsterList.Giant = Giant;

    FrostGiant = {};
    FrostGiant.Drops = [];
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.Sabre, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.Claymore, 25))
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.RuneSword, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.HydraEdge, 2));
    //Axes
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.WarAxe, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.GreatAxe, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.GothicAxe, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.SilverEdgedAxe, 2));
    //Maces
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.MorningStar, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.GreatMaul, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.WarClub, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.Knout, 2));
    //Staves
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.Wand, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.GnarledStaff, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.ArchonStaff, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.TombWand, 2));
    //Bows
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.LongBow, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.ShortWarBow, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.DoubleBow, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Weapons.HydraBow, 2));
    //Robes
    FrostGiant.Drops.push(NewDrop(ItemList.Armors.BarbaricLinenVest, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Armors.BarbaricClothVest, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Armors.JourneymansRobe, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Armors.RitualTunic, 2));
    //Leather
    FrostGiant.Drops.push(NewDrop(ItemList.Armors.StuddedLeather, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Armors.HardLeatherTunic, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Armors.StuddedLeatherHarness, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Armors.TannedLeatherJerkin, 2));
    //Heavy
    FrostGiant.Drops.push(NewDrop(ItemList.Armors.GothicPlate, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Armors.FullPlatemail, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Armors.EmbossedPlate, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Armors.ChaosArmor, 2));
    //Shield
    FrostGiant.Drops.push(NewDrop(ItemList.OffHand.LargeShield, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.OffHand.Defender, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.OffHand.DragonShield, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.OffHand.Monarch, 2));
    //Dagger offHand
    FrostGiant.Drops.push(NewDrop(ItemList.OffHand.Quhab, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.OffHand.WristSpike, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.OffHand.Cinquedeas, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.OffHand.ScissorsSuwayyah, 2));
    //Rings
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 2));
    //Amulets
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 2));
    //Talismans
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 2));
    FrostGiant.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 2));
    FrostGiant.Stats = {
        hp: 11000,
        maxHp: 11000,
        def: 130,
        minDmg: 250,
        maxDmg: 270,
        baseExp: 6000,
        acc: 95,
        eva: 5,
        name: "FrostGiant",
        displayName: "Frost Giant",
        type: "strong",
        id: 18,
        level: 18,
        area: "Mountains",
        isShown: true,
        killCount: 0,
    };
    monsterList.FrostGiant = FrostGiant;

    FrostTroll = {};
    FrostTroll.Drops = [];
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.Sabre, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.Claymore, 25))
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.RuneSword, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.HydraEdge, 3));
    //Axes
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.WarAxe, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.GreatAxe, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.GothicAxe, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.SilverEdgedAxe, 3));
    //Maces
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.MorningStar, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.GreatMaul, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.WarClub, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.Knout, 3));
    //Staves
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.Wand, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.GnarledStaff, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.ArchonStaff, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.TombWand, 3));
    //Bows
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.LongBow, 50));;
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.ShortWarBow, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.DoubleBow, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Weapons.HydraBow, 3));
    //Robes
    FrostTroll.Drops.push(NewDrop(ItemList.Armors.BarbaricLinenVest, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Armors.BarbaricClothVest, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Armors.JourneymansRobe, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Armors.RitualTunic, 3));
    //Leather
    FrostTroll.Drops.push(NewDrop(ItemList.Armors.StuddedLeather, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Armors.HardLeatherTunic, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Armors.StuddedLeatherHarness, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Armors.TannedLeatherJerkin, 3));
    //Heavy
    FrostTroll.Drops.push(NewDrop(ItemList.Armors.GothicPlate, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Armors.FullPlatemail, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Armors.EmbossedPlate, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Armors.ChaosArmor, 3));
    //Shield
    FrostTroll.Drops.push(NewDrop(ItemList.OffHand.LargeShield, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.OffHand.Defender, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.OffHand.DragonShield, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.OffHand.Monarch, 3));
    //Dagger offHand
    FrostTroll.Drops.push(NewDrop(ItemList.OffHand.Quhab, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.OffHand.WristSpike, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.OffHand.Cinquedeas, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.OffHand.ScissorsSuwayyah, 3));
    //Rings
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 3));
    //Amulets
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 3));
    //Talismans
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 3));
    FrostTroll.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 3));
    FrostTroll.Stats = {
        hp: 12500,
        maxHp: 12500,
        def: 140,
        minDmg: 250,
        maxDmg: 270,
        baseExp: 7000,
        acc: 95,
        eva: 5,
        name: "FrostTroll",
        displayName: "Frost Troll",
        type: "strong",
        id: 19,
        level: 19,
        area: "Mountains",
        isShown: true,
        killCount: 0,
    };
    monsterList.FrostTroll = FrostTroll;

    Wyvern = {};
    Wyvern.Drops = [];
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.Sabre, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.Claymore, 25))
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.RuneSword, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.HydraEdge, 4));
    //Axes
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.WarAxe, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.GreatAxe, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.GothicAxe, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.SilverEdgedAxe, 4));
    //Maces
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.MorningStar, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.GreatMaul, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.WarClub, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.Knout, 4));
    //Staves
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.Wand, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.GnarledStaff, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.ArchonStaff, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.TombWand, 4));
    //Bows
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.LongBow, 50));;
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.ShortWarBow, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.DoubleBow, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Weapons.HydraBow, 4));
    //Robes
    Wyvern.Drops.push(NewDrop(ItemList.Armors.BarbaricLinenVest, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Armors.BarbaricClothVest, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Armors.JourneymansRobe, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Armors.RitualTunic, 4));
    //Leather
    Wyvern.Drops.push(NewDrop(ItemList.Armors.StuddedLeather, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Armors.HardLeatherTunic, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Armors.StuddedLeatherHarness, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Armors.TannedLeatherJerkin, 4));
    //Heavy
    Wyvern.Drops.push(NewDrop(ItemList.Armors.GothicPlate, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Armors.FullPlatemail, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Armors.EmbossedPlate, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Armors.ChaosArmor, 4));
    //Shield
    Wyvern.Drops.push(NewDrop(ItemList.OffHand.LargeShield, 50));
    Wyvern.Drops.push(NewDrop(ItemList.OffHand.Defender, 25));
    Wyvern.Drops.push(NewDrop(ItemList.OffHand.DragonShield, 10));
    Wyvern.Drops.push(NewDrop(ItemList.OffHand.Monarch, 4));
    //Dagger offHand
    Wyvern.Drops.push(NewDrop(ItemList.OffHand.Quhab, 50));
    Wyvern.Drops.push(NewDrop(ItemList.OffHand.WristSpike, 25));
    Wyvern.Drops.push(NewDrop(ItemList.OffHand.Cinquedeas, 10));
    Wyvern.Drops.push(NewDrop(ItemList.OffHand.ScissorsSuwayyah, 4));
    //Rings
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 4));
    //Amulets
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 4));
    //Talismans
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 4));
    Wyvern.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 4));
    Wyvern.Stats = {
        hp: 13500,
        maxHp: 13500,
        def: 150,
        minDmg: 270,
        maxDmg: 300,
        baseExp: 8000,
        acc: 95,
        eva: 5,
        name: "Wyvern",
        displayName: "Wyvern",
        type: "strong",
        id: 20,
        level: 20,
        area: "Mountains",
        isShown: true,
        killCount: 0,
    };
    monsterList.Wyvern = Wyvern;

    FrostDragon = {};
    FrostDragon.Drops = [];
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.Sabre, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.Claymore, 25))
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.RuneSword, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.HydraEdge, 5));
    //Axes
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.WarAxe, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.GreatAxe, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.GothicAxe, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.SilverEdgedAxe, 5));
    //Maces
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.MorningStar, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.GreatMaul, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.WarClub, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.Knout, 5));
    //Staves
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.Wand, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.GnarledStaff, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.ArchonStaff, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.TombWand, 5));
    //Bows
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.LongBow, 50));;
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.ShortWarBow, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.DoubleBow, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Weapons.HydraBow, 5));
    //Robes
    FrostDragon.Drops.push(NewDrop(ItemList.Armors.BarbaricLinenVest, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Armors.BarbaricClothVest, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Armors.JourneymansRobe, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Armors.RitualTunic, 5));
    //Leather
    FrostDragon.Drops.push(NewDrop(ItemList.Armors.StuddedLeather, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Armors.HardLeatherTunic, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Armors.StuddedLeatherHarness, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Armors.TannedLeatherJerkin, 5));
    //Heavy
    FrostDragon.Drops.push(NewDrop(ItemList.Armors.GothicPlate, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Armors.FullPlatemail, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Armors.EmbossedPlate, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Armors.ChaosArmor, 5));
    //Shield
    FrostDragon.Drops.push(NewDrop(ItemList.OffHand.LargeShield, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.OffHand.Defender, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.OffHand.DragonShield, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.OffHand.Monarch, 5));
    //Dagger offHand
    FrostDragon.Drops.push(NewDrop(ItemList.OffHand.Quhab, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.OffHand.WristSpike, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.OffHand.Cinquedeas, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.OffHand.ScissorsSuwayyah, 5));
    //Rings
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 5));
    //Amulets
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 5));
    //Talismans
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 5));
    FrostDragon.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 5));
    FrostDragon.Stats = {
        hp: 15000,
        maxHp: 15000,
        def: 170,
        minDmg: 300,
        maxDmg: 350,
        baseExp: 9000,
        acc: 95,
        eva: 5,
        name: "FrostDragon",
        displayName: "Frost Dragon",
        type: "strong",
        id: 21,
        level: 21,
        area: "Mountains",
        isShown: true,
        killCount: 0,
    };
    monsterList.FrostDragon = FrostDragon;

    IceElemental = {};
    IceElemental.Drops = [];
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.Sabre, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.Claymore, 50))
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.RuneSword, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.HydraEdge, 10));
    //Axes
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.WarAxe, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.GreatAxe, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.GothicAxe, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.SilverEdgedAxe, 10));
    //Maces
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.MorningStar, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.GreatMaul, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.WarClub, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.Knout, 10));
    //Staves
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.Wand, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.GnarledStaff, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.ArchonStaff, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.TombWand, 10));
    //Bows
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.LongBow, 75));;
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.ShortWarBow, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.DoubleBow, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Weapons.HydraBow, 10));
    //Robes
    IceElemental.Drops.push(NewDrop(ItemList.Armors.BarbaricLinenVest, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Armors.BarbaricClothVest, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Armors.JourneymansRobe, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Armors.RitualTunic, 10));
    //Leather
    IceElemental.Drops.push(NewDrop(ItemList.Armors.StuddedLeather, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Armors.HardLeatherTunic, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Armors.StuddedLeatherHarness, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Armors.TannedLeatherJerkin, 10));
    //Heavy
    IceElemental.Drops.push(NewDrop(ItemList.Armors.GothicPlate, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Armors.FullPlatemail, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Armors.EmbossedPlate, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Armors.ChaosArmor, 10));
    //Shield
    IceElemental.Drops.push(NewDrop(ItemList.OffHand.LargeShield, 75));
    IceElemental.Drops.push(NewDrop(ItemList.OffHand.Defender, 50));
    IceElemental.Drops.push(NewDrop(ItemList.OffHand.DragonShield, 25));
    IceElemental.Drops.push(NewDrop(ItemList.OffHand.Monarch, 10));
    //Dagger offHand
    IceElemental.Drops.push(NewDrop(ItemList.OffHand.Quhab, 75));
    IceElemental.Drops.push(NewDrop(ItemList.OffHand.WristSpike, 50));
    IceElemental.Drops.push(NewDrop(ItemList.OffHand.Cinquedeas, 25));
    IceElemental.Drops.push(NewDrop(ItemList.OffHand.ScissorsSuwayyah, 10));
    //Rings
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 10));
    //Amulets
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 10));
    //Talismans
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 75));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 50));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 25));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 10));
    IceElemental.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 10));
    IceElemental.Stats = {
        hp: 16000,
        maxHp: 16000,
        def: 180,
        minDmg: 300,
        maxDmg: 350,
        baseExp: 10000,
        acc: 95,
        eva: 5,
        name: "IceElemental",
        displayName: "Ice Elemental",
        type: "strong",
        id: 22,
        level: 22,
        area: "Mountains",
        isShown: true,
        killCount: 0,
    };
    monsterList.IceElemental = IceElemental;

    FrostGuardian = {};
    FrostGuardian.Drops = [];
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.Sabre, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.Claymore, 75))
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.RuneSword, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.HydraEdge, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.LegendSword, 10));
    //Axes
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.WarAxe, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.GreatAxe, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.GothicAxe, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.SilverEdgedAxe, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.Decapitator, 10));
    //Maces
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.MorningStar, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.GreatMaul, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.WarClub, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.Knout, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.FlangedMace, 10));
    //Staves
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.Wand, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.GnarledStaff, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.ArchonStaff, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.TombWand, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.ElderStaff, 10));
    //Bows
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.LongBow, 100));;
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.ShortWarBow, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.DoubleBow, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.HydraBow, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Weapons.MatriarchalBow, 10));
    //Robes
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.BarbaricLinenVest, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.BarbaricClothVest, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.JourneymansRobe, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.RitualTunic, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.SagesCloth, 10));
    //Leather
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.StuddedLeather, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.HardLeatherTunic, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.StuddedLeatherHarness, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.TannedLeatherJerkin, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.ScavengersTunic, 10));
    //Heavy
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.GothicPlate, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.FullPlatemail, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.EmbossedPlate, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.ChaosArmor, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Armors.Wyrmhide, 10));
    //Shield
    FrostGuardian.Drops.push(NewDrop(ItemList.OffHand.LargeShield, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.OffHand.Defender, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.OffHand.DragonShield, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.OffHand.Monarch, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.OffHand.TrollNest, 10));
    //Dagger offHand
    FrostGuardian.Drops.push(NewDrop(ItemList.OffHand.Quhab, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.OffHand.WristSpike, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.OffHand.Cinquedeas, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.OffHand.ScissorsSuwayyah, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.OffHand.WarFist, 10));
    //Rings
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofMight, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofTenacity, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofAlertness, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofMastery, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofFluke, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.RingofResistance, 10));
    //Amulets
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofMight, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofTenacity, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofAlertness, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofMastery, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofFluke, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.AmuletofResistance, 10));
    //Talismans
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 100));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 75));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 50));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 25));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofMight, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofTenacity, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofAlertness, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofMastery, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofFluke, 10));
    FrostGuardian.Drops.push(NewDrop(ItemList.Accessory.TalismanofResistance, 10));
    FrostGuardian.Stats = {
        hp: 17000,
        maxHp: 17000,
        def: 190,
        minDmg: 350,
        maxDmg: 400,
        baseExp: 11000,
        acc: 95,
        eva: 5,
        name: "FrostGuardian",
        displayName: "Frost Guardian",
        type: "strong",
        id: 23,
        level: 23,
        area: "Mountains",
        isShown: true,
        killCount: 0,
    };
    monsterList.FrostGuardian = FrostGuardian;

    FrostQueen = {};
    FrostQueen.Drops = [];
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.Sabre, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.Claymore, 100))
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.RuneSword, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.HydraEdge, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.LegendSword, 25));
    //Axes
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.WarAxe, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.GreatAxe, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.GothicAxe, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.SilverEdgedAxe, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.Decapitator, 25));
    //Maces
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.MorningStar, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.GreatMaul, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.WarClub, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.Knout, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.FlangedMace, 25));
    //Staves
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.Wand, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.GnarledStaff, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.ArchonStaff, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.TombWand, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.ElderStaff, 25));
    //Bows
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.LongBow, 125));;
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.ShortWarBow, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.DoubleBow, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.HydraBow, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Weapons.MatriarchalBow, 25));
    //Robes
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.BarbaricLinenVest, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.BarbaricClothVest, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.JourneymansRobe, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.RitualTunic, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.SagesCloth, 25));
    //Leather
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.StuddedLeather, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.HardLeatherTunic, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.StuddedLeatherHarness, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.TannedLeatherJerkin, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.ScavengersTunic, 25));
    //Heavy
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.GothicPlate, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.FullPlatemail, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.EmbossedPlate, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.ChaosArmor, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Armors.Wyrmhide, 25));
    //Shield
    FrostQueen.Drops.push(NewDrop(ItemList.OffHand.LargeShield, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.OffHand.Defender, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.OffHand.DragonShield, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.OffHand.Monarch, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.OffHand.TrollNest, 25));
    //Dagger offHand
    FrostQueen.Drops.push(NewDrop(ItemList.OffHand.Quhab, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.OffHand.WristSpike, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.OffHand.Cinquedeas, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.OffHand.ScissorsSuwayyah, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.OffHand.WarFist, 10));
    //Rings
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofMight, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofTenacity, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofAlertness, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofMastery, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofFluke, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.RingofResistance, 25));
    //Amulets
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofMight, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofTenacity, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofAlertness, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofMastery, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofFluke, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.AmuletofResistance, 25));
    //Talismans
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 125));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 100));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 75));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 50));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofMight, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofTenacity, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofAlertness, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofMastery, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofFluke, 25));
    FrostQueen.Drops.push(NewDrop(ItemList.Accessory.TalismanofResistance, 25));
    FrostQueen.Stats = {
        hp: 20000,
        maxHp: 20000,
        def: 200,
        minDmg: 400,
        maxDmg: 450,
        baseExp: 12000,
        acc: 95,
        eva: 5,
        name: "FrostQueen",
        displayName: "Frost Queen",
        type: "strong",
        id: 24,
        level: 24,
        area: "Mountains",
        isShown: true,
        killCount: 0,
    };
    monsterList.FrostQueen = FrostQueen;

    Zombie = {};
    Zombie.Drops = [];
    Zombie.Drops.push(NewDrop(ItemList.Weapons.Falchion, 50));
    Zombie.Drops.push(NewDrop(ItemList.Weapons.WarSword, 25))
    Zombie.Drops.push(NewDrop(ItemList.Weapons.AncientSword, 10));
    Zombie.Drops.push(NewDrop(ItemList.Weapons.PhaseBlade, 1));
    //Axes
    Zombie.Drops.push(NewDrop(ItemList.Weapons.LargeAxe, 50));
    Zombie.Drops.push(NewDrop(ItemList.Weapons.Cleaver, 25));
    Zombie.Drops.push(NewDrop(ItemList.Weapons.Tabar, 10));
    Zombie.Drops.push(NewDrop(ItemList.Weapons.AncientAxe, 1));
    //Maces
    Zombie.Drops.push(NewDrop(ItemList.Weapons.Flail, 50));
    Zombie.Drops.push(NewDrop(ItemList.Weapons.Cludgel, 25));
    Zombie.Drops.push(NewDrop(ItemList.Weapons.Trucheon, 10));
    Zombie.Drops.push(NewDrop(ItemList.Weapons.Scourge, 1));
    //Staves
    Zombie.Drops.push(NewDrop(ItemList.Weapons.YewWand, 50));
    Zombie.Drops.push(NewDrop(ItemList.Weapons.LichStaff, 25));
    Zombie.Drops.push(NewDrop(ItemList.Weapons.GothicStaff, 10));
    Zombie.Drops.push(NewDrop(ItemList.Weapons.GraveWand, 1));
    //Bows
    Zombie.Drops.push(NewDrop(ItemList.Weapons.CompositeBow, 50));;
    Zombie.Drops.push(NewDrop(ItemList.Weapons.LongWarBow, 25));
    Zombie.Drops.push(NewDrop(ItemList.Weapons.RuneBow, 10));
    Zombie.Drops.push(NewDrop(ItemList.Weapons.ReflexBow, 1));
    //Robes
    Zombie.Drops.push(NewDrop(ItemList.Armors.FurCoveredRobe, 50));
    Zombie.Drops.push(NewDrop(ItemList.Armors.DurableTunic, 25));
    Zombie.Drops.push(NewDrop(ItemList.Armors.CarapaceRobes, 10));
    Zombie.Drops.push(NewDrop(ItemList.Armors.SagesRobe, 1));
    //Leather
    Zombie.Drops.push(NewDrop(ItemList.Armors.SoftLeatherVest, 50));
    Zombie.Drops.push(NewDrop(ItemList.Armors.DarksRangerVest, 25));
    Zombie.Drops.push(NewDrop(ItemList.Armors.WinterJacket, 10));
    Zombie.Drops.push(NewDrop(ItemList.Armors.PrimalShirt, 1));
    //Heavy
    Zombie.Drops.push(NewDrop(ItemList.Armors.AncientArmor, 50));
    Zombie.Drops.push(NewDrop(ItemList.Armors.OrnatePlate, 25));
    Zombie.Drops.push(NewDrop(ItemList.Armors.DiamondMail, 10));
    Zombie.Drops.push(NewDrop(ItemList.Armors.Boneweave, 1));
    //Shield
    Zombie.Drops.push(NewDrop(ItemList.OffHand.KiteShield, 50));
    Zombie.Drops.push(NewDrop(ItemList.OffHand.RoundShield, 25));
    Zombie.Drops.push(NewDrop(ItemList.OffHand.BarbedShield, 10));
    Zombie.Drops.push(NewDrop(ItemList.OffHand.BladeBarrier, 1));
    //Dagger offHand
    Zombie.Drops.push(NewDrop(ItemList.OffHand.CrystalDagger, 50));
    Zombie.Drops.push(NewDrop(ItemList.OffHand.SharpClaws, 25));
    Zombie.Drops.push(NewDrop(ItemList.OffHand.Fuscia, 10));
    Zombie.Drops.push(NewDrop(ItemList.OffHand.BattleCestus, 1));
    //Rings
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 1));
    //Amulets
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 1));
    //Talismans
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 1));
    Zombie.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 1));
    Zombie.Stats = {
        hp: 22000,
        maxHp: 22000,
        def: 220,
        minDmg: 450,
        maxDmg: 500,
        baseExp: 13000,
        acc: 95,
        eva: 5,
        name: "Zombie",
        displayName: "Zombie",
        type: "boss",
        id: 25,
        level: 25,
        area: "AncientCave",
        isShown: true,
        killCount: 0,
    };
    monsterList.Zombie = Zombie;

    Skeleton = {};
    Skeleton.Drops = [];
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.Falchion, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.WarSword, 25))
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.AncientSword, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.PhaseBlade, 2));
    //Axes
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.LargeAxe, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.Cleaver, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.Tabar, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.AncientAxe, 2));
    //Maces
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.Flail, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.Cludgel, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.Trucheon, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.Scourge, 2));
    //Staves
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.YewWand, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.LichStaff, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.GothicStaff, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.GraveWand, 2));
    //Bows
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.CompositeBow, 50));;
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.LongWarBow, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.RuneBow, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Weapons.ReflexBow, 2));
    //Robes
    Skeleton.Drops.push(NewDrop(ItemList.Armors.FurCoveredRobe, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Armors.DurableTunic, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Armors.CarapaceRobes, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Armors.SagesRobe, 2));
    //Leather
    Skeleton.Drops.push(NewDrop(ItemList.Armors.SoftLeatherVest, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Armors.DarksRangerVest, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Armors.WinterJacket, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Armors.PrimalShirt, 2));
    //Heavy
    Skeleton.Drops.push(NewDrop(ItemList.Armors.AncientArmor, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Armors.OrnatePlate, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Armors.DiamondMail, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Armors.Boneweave, 2));
    //Shield
    Skeleton.Drops.push(NewDrop(ItemList.OffHand.KiteShield, 50));
    Skeleton.Drops.push(NewDrop(ItemList.OffHand.RoundShield, 25));
    Skeleton.Drops.push(NewDrop(ItemList.OffHand.BarbedShield, 10));
    Skeleton.Drops.push(NewDrop(ItemList.OffHand.BladeBarrier, 2));
    //Dagger offHand
    Skeleton.Drops.push(NewDrop(ItemList.OffHand.CrystalDagger, 50));
    Skeleton.Drops.push(NewDrop(ItemList.OffHand.SharpClaws, 25));
    Skeleton.Drops.push(NewDrop(ItemList.OffHand.Fuscia, 10));
    Skeleton.Drops.push(NewDrop(ItemList.OffHand.BattleCestus, 2));
    //Rings
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 2));
    //Amulets
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 2));
    //Talismans
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 2));
    Skeleton.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 2));
    Skeleton.Stats = {
        hp: 24000,
        maxHp: 24000,
        def: 230,
        minDmg: 500,
        maxDmg: 550,
        baseExp: 14000,
        acc: 95,
        eva: 5,
        name: "Skeleton",
        displayName: "Skeleton",
        type: "boss",
        id: 26,
        level: 26,
        area: "AncientCave",
        isShown: true,
        killCount: 0,
    };
    monsterList.Skeleton = Skeleton;

    SkeletonSoldier = {};
    SkeletonSoldier.Drops = [];
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.Falchion, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.WarSword, 25))
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.AncientSword, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.PhaseBlade, 3));
    //Axes
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.LargeAxe, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.Cleaver, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.Tabar, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.AncientAxe, 3));
    //Maces
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.Flail, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.Cludgel, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.Trucheon, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.Scourge, 3));
    //Staves
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.YewWand, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.LichStaff, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.GothicStaff, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.GraveWand, 3));
    //Bows
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.CompositeBow, 50));;
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.LongWarBow, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.RuneBow, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Weapons.ReflexBow, 3));
    //Robes
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Armors.FurCoveredRobe, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Armors.DurableTunic, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Armors.CarapaceRobes, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Armors.SagesRobe, 3));
    //Leather
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Armors.SoftLeatherVest, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Armors.DarksRangerVest, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Armors.WinterJacket, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Armors.PrimalShirt, 3));
    //Heavy
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Armors.AncientArmor, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Armors.OrnatePlate, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Armors.DiamondMail, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Armors.Boneweave, 3));
    //Shield
    SkeletonSoldier.Drops.push(NewDrop(ItemList.OffHand.KiteShield, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.OffHand.RoundShield, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.OffHand.BarbedShield, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.OffHand.BladeBarrier, 3));
    //Dagger offHand
    SkeletonSoldier.Drops.push(NewDrop(ItemList.OffHand.CrystalDagger, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.OffHand.SharpClaws, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.OffHand.Fuscia, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.OffHand.BattleCestus, 3));
    //Rings
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 3));
    //Amulets
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 3));
    //Talismans
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 3));
    SkeletonSoldier.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 3));
    SkeletonSoldier.Stats = {
        hp: 26000,
        maxHp: 26000,
        def: 250,
        minDmg: 600,
        maxDmg: 700,
        baseExp: 15000,
        acc: 95,
        eva: 5,
        name: "SkeletonSoldier",
        displayName: "Skeleton Soldier",
        type: "boss",
        id: 27,
        level: 27,
        area: "AncientCave",
        isShown: true,
        killCount: 0,
    };
    monsterList.SkeletonSoldier = SkeletonSoldier;

    SkeletonArcher = {};
    SkeletonArcher.Drops = [];
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.Falchion, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.WarSword, 25))
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.AncientSword, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.PhaseBlade, 4));
    //Axes
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.LargeAxe, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.Cleaver, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.Tabar, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.AncientAxe, 4));
    //Maces
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.Flail, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.Cludgel, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.Trucheon, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.Scourge, 4));
    //Staves
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.YewWand, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.LichStaff, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.GothicStaff, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.GraveWand, 4));
    //Bows
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.CompositeBow, 50));;
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.LongWarBow, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.RuneBow, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Weapons.ReflexBow, 4));
    //Robes
    SkeletonArcher.Drops.push(NewDrop(ItemList.Armors.FurCoveredRobe, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Armors.DurableTunic, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Armors.CarapaceRobes, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Armors.SagesRobe, 4));
    //Leather
    SkeletonArcher.Drops.push(NewDrop(ItemList.Armors.SoftLeatherVest, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Armors.DarksRangerVest, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Armors.WinterJacket, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Armors.PrimalShirt, 4));
    //Heavy
    SkeletonArcher.Drops.push(NewDrop(ItemList.Armors.AncientArmor, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Armors.OrnatePlate, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Armors.DiamondMail, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Armors.Boneweave, 4));
    //Shield
    SkeletonArcher.Drops.push(NewDrop(ItemList.OffHand.KiteShield, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.OffHand.RoundShield, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.OffHand.BarbedShield, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.OffHand.BladeBarrier, 4));
    //Dagger offHand
    SkeletonArcher.Drops.push(NewDrop(ItemList.OffHand.CrystalDagger, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.OffHand.SharpClaws, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.OffHand.Fuscia, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.OffHand.BattleCestus, 4));
    //Rings
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 4));
    //Amulets
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 4));
    //Talismans
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 4));
    SkeletonArcher.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 4));
    SkeletonArcher.Stats = {
        hp: 27000,
        maxHp: 27000,
        def: 260,
        minDmg: 700,
        maxDmg: 800,
        baseExp: 16000,
        acc: 95,
        eva: 5,
        name: "SkeletonArcher",
        displayName: "Skeleton Archer",
        type: "boss",
        id: 28,
        level: 28,
        area: "AncientCave",
        isShown: true,
        killCount: 0,
    };
    monsterList.SkeletonArcher = SkeletonArcher;

    SkeletonMage = {};
    SkeletonMage.Drops = [];
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.Falchion, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.WarSword, 25))
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.AncientSword, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.PhaseBlade, 5));
    //Axes
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.LargeAxe, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.Cleaver, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.Tabar, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.AncientAxe, 5));
    //Maces
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.Flail, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.Cludgel, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.Trucheon, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.Scourge, 5));
    //Staves
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.YewWand, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.LichStaff, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.GothicStaff, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.GraveWand, 5));
    //Bows
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.CompositeBow, 50));;
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.LongWarBow, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.RuneBow, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Weapons.ReflexBow, 5));
    //Robes
    SkeletonMage.Drops.push(NewDrop(ItemList.Armors.FurCoveredRobe, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Armors.DurableTunic, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Armors.CarapaceRobes, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Armors.SagesRobe, 5));
    //Leather
    SkeletonMage.Drops.push(NewDrop(ItemList.Armors.SoftLeatherVest, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Armors.DarksRangerVest, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Armors.WinterJacket, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Armors.PrimalShirt, 5));
    //Heavy
    SkeletonMage.Drops.push(NewDrop(ItemList.Armors.AncientArmor, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Armors.OrnatePlate, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Armors.DiamondMail, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Armors.Boneweave, 5));
    //Shield
    SkeletonMage.Drops.push(NewDrop(ItemList.OffHand.KiteShield, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.OffHand.RoundShield, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.OffHand.BarbedShield, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.OffHand.BladeBarrier, 5));
    //Dagger offHand
    SkeletonMage.Drops.push(NewDrop(ItemList.OffHand.CrystalDagger, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.OffHand.SharpClaws, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.OffHand.Fuscia, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.OffHand.BattleCestus, 5));
    //Rings
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 5));
    //Amulets
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 5));
    //Talismans
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 50));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 25));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 10));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 5));
    SkeletonMage.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 5));
    SkeletonMage.Stats = {
        hp: 29000,
        maxHp: 29000,
        def: 270,
        minDmg: 800,
        maxDmg: 900,
        baseExp: 18000,
        acc: 95,
        eva: 5,
        name: "SkeletonMage",
        displayName: "Skeleton Mage",
        type: "boss",
        id: 29,
        level: 29,
        area: "AncientCave",
        isShown: true,
        killCount: 0,
    };
    monsterList.SkeletonMage = SkeletonMage;

    SkeletonHealer = {};
    SkeletonHealer.Drops = [];
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.Falchion, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.WarSword, 50))
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.AncientSword, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.PhaseBlade, 10));
    //Axes
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.LargeAxe, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.Cleaver, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.Tabar, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.AncientAxe, 10));
    //Maces
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.Flail, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.Cludgel, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.Trucheon, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.Scourge, 10));
    //Staves
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.YewWand, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.LichStaff, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.GothicStaff, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.GraveWand, 10));
    //Bows
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.CompositeBow, 75));;
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.LongWarBow, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.RuneBow, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Weapons.ReflexBow, 10));
    //Robes
    SkeletonHealer.Drops.push(NewDrop(ItemList.Armors.FurCoveredRobe, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Armors.DurableTunic, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Armors.CarapaceRobes, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Armors.SagesRobe, 10));
    //Leather
    SkeletonHealer.Drops.push(NewDrop(ItemList.Armors.SoftLeatherVest, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Armors.DarksRangerVest, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Armors.WinterJacket, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Armors.PrimalShirt, 10));
    //Heavy
    SkeletonHealer.Drops.push(NewDrop(ItemList.Armors.AncientArmor, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Armors.OrnatePlate, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Armors.DiamondMail, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Armors.Boneweave, 10));
    //Shield
    SkeletonHealer.Drops.push(NewDrop(ItemList.OffHand.KiteShield, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.OffHand.RoundShield, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.OffHand.BarbedShield, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.OffHand.BladeBarrier, 10));
    //Dagger offHand
    SkeletonHealer.Drops.push(NewDrop(ItemList.OffHand.CrystalDagger, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.OffHand.SharpClaws, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.OffHand.Fuscia, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.OffHand.BattleCestus, 10));
    //Rings
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 10));
    //Amulets
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 10));
    //Talismans
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 75));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 50));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 25));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 10));
    SkeletonHealer.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 10));
    SkeletonHealer.Stats = {
        hp: 32000,
        maxHp: 32000,
        def: 300,
        minDmg: 900,
        maxDmg: 1000,
        baseExp: 20000,
        acc: 95,
        eva: 5,
        name: "SkeletonHealer",
        displayName: "Skeleton Healer",
        type: "boss",
        id: 30,
        level: 30,
        area: "AncientCave",
        isShown: true,
        killCount: 0,
    };
    monsterList.SkeletonHealer = SkeletonHealer;

    Wraith = {};
    Wraith.Drops = [];
    Wraith.Drops.push(NewDrop(ItemList.Weapons.Falchion, 100));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.WarSword, 75))
    Wraith.Drops.push(NewDrop(ItemList.Weapons.AncientSword, 50));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.PhaseBlade, 25));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.BalrogBlade, 10));
    //Axes
    Wraith.Drops.push(NewDrop(ItemList.Weapons.LargeAxe, 100));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.Cleaver, 75));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.Tabar, 50));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.AncientAxe, 25));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.GloriousAxe, 10));
    //Maces
    Wraith.Drops.push(NewDrop(ItemList.Weapons.Flail, 100));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.Cludgel, 75));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.Trucheon, 50));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.Scourge, 25));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.ThunderMaul, 10));
    //Staves
    Wraith.Drops.push(NewDrop(ItemList.Weapons.YewWand, 100));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.LichStaff, 75));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.GothicStaff, 50));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.GraveWand, 25));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.Shillelagh, 10));
    //Bows
    Wraith.Drops.push(NewDrop(ItemList.Weapons.CompositeBow, 100));;
    Wraith.Drops.push(NewDrop(ItemList.Weapons.LongWarBow, 75));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.RuneBow, 50));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.ReflexBow, 25));
    Wraith.Drops.push(NewDrop(ItemList.Weapons.GrandMatronBow, 10));
    //Robes
    Wraith.Drops.push(NewDrop(ItemList.Armors.FurCoveredRobe, 100));
    Wraith.Drops.push(NewDrop(ItemList.Armors.DurableTunic, 75));
    Wraith.Drops.push(NewDrop(ItemList.Armors.CarapaceRobes, 50));
    Wraith.Drops.push(NewDrop(ItemList.Armors.SagesRobe, 25));
    Wraith.Drops.push(NewDrop(ItemList.Armors.RobeOfTheDragonSlayer, 10));
    //Leather
    Wraith.Drops.push(NewDrop(ItemList.Armors.SoftLeatherVest, 100));
    Wraith.Drops.push(NewDrop(ItemList.Armors.DarksRangerVest, 75));
    Wraith.Drops.push(NewDrop(ItemList.Armors.WinterJacket, 50));
    Wraith.Drops.push(NewDrop(ItemList.Armors.PrimalShirt, 25));
    Wraith.Drops.push(NewDrop(ItemList.Armors.ScoutHuntersVest, 10));
    //Heavy
    Wraith.Drops.push(NewDrop(ItemList.Armors.AncientArmor, 100));
    Wraith.Drops.push(NewDrop(ItemList.Armors.OrnatePlate, 75));
    Wraith.Drops.push(NewDrop(ItemList.Armors.DiamondMail, 50));
    Wraith.Drops.push(NewDrop(ItemList.Armors.Boneweave, 25));
    Wraith.Drops.push(NewDrop(ItemList.Armors.BalrogSkin, 10));
    //Shield
    Wraith.Drops.push(NewDrop(ItemList.OffHand.KiteShield, 100));
    Wraith.Drops.push(NewDrop(ItemList.OffHand.RoundShield, 75));
    Wraith.Drops.push(NewDrop(ItemList.OffHand.BarbedShield, 50));
    Wraith.Drops.push(NewDrop(ItemList.OffHand.BladeBarrier, 25));
    Wraith.Drops.push(NewDrop(ItemList.OffHand.Aegis, 10));
    //Dagger offHand
    Wraith.Drops.push(NewDrop(ItemList.OffHand.CrystalDagger, 100));
    Wraith.Drops.push(NewDrop(ItemList.OffHand.SharpClaws, 75));
    Wraith.Drops.push(NewDrop(ItemList.OffHand.Fuscia, 50));
    Wraith.Drops.push(NewDrop(ItemList.OffHand.BattleCestus, 25));
    Wraith.Drops.push(NewDrop(ItemList.OffHand.RunicClaws, 10));
    //Rings
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofMight, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofTenacity, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofAlertness, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofMastery, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofFluke, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.RingofResistance, 10));
    //Amulets
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofMight, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofTenacity, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofAlertness, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofMastery, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofFluke, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.AmuletofResistance, 10));
    //Talismans
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 100));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 75));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 50));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 25));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofMight, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofTenacity, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofAlertness, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofMastery, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofFluke, 10));
    Wraith.Drops.push(NewDrop(ItemList.Accessory.TalismanofResistance, 10));
    Wraith.Stats = {
        hp: 35000,
        maxHp: 35000,
        def: 350,
        minDmg: 1200,
        maxDmg: 1500,
        baseExp: 25000,
        acc: 95,
        eva: 5,
        name: "Wraith",
        displayName: "Wraith",
        type: "boss",
        id: 31,
        level: 31,
        area: "AncientCave",
        isShown: true,
        killCount: 0,
    };
    monsterList.Wraith = Wraith;

    LichKing = {};
    LichKing.Drops = [];
    LichKing.Drops.push(NewDrop(ItemList.Weapons.Falchion, 125));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.WarSword, 100))
    LichKing.Drops.push(NewDrop(ItemList.Weapons.AncientSword, 75));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.PhaseBlade, 50));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.BalrogBlade, 25));
    //Axes
    LichKing.Drops.push(NewDrop(ItemList.Weapons.LargeAxe, 125));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.Cleaver, 100));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.Tabar, 75));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.AncientAxe, 50));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.GloriousAxe, 25));
    //Maces
    LichKing.Drops.push(NewDrop(ItemList.Weapons.Flail, 125));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.Cludgel, 100));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.Trucheon, 75));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.Scourge, 50));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.ThunderMaul, 25));
    //Staves
    LichKing.Drops.push(NewDrop(ItemList.Weapons.YewWand, 125));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.LichStaff, 100));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.GothicStaff, 75));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.GraveWand, 50));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.Shillelagh, 25));
    //Bows
    LichKing.Drops.push(NewDrop(ItemList.Weapons.CompositeBow, 125));;
    LichKing.Drops.push(NewDrop(ItemList.Weapons.LongWarBow, 100));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.RuneBow, 75));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.ReflexBow, 50));
    LichKing.Drops.push(NewDrop(ItemList.Weapons.GrandMatronBow, 25));
    //Robes
    LichKing.Drops.push(NewDrop(ItemList.Armors.FurCoveredRobe, 125));
    LichKing.Drops.push(NewDrop(ItemList.Armors.DurableTunic, 100));
    LichKing.Drops.push(NewDrop(ItemList.Armors.CarapaceRobes, 75));
    LichKing.Drops.push(NewDrop(ItemList.Armors.SagesRobe, 50));
    LichKing.Drops.push(NewDrop(ItemList.Armors.RobeOfTheDragonSlayer, 25));
    //Leather
    LichKing.Drops.push(NewDrop(ItemList.Armors.SoftLeatherVest, 125));
    LichKing.Drops.push(NewDrop(ItemList.Armors.DarksRangerVest, 100));
    LichKing.Drops.push(NewDrop(ItemList.Armors.WinterJacket, 75));
    LichKing.Drops.push(NewDrop(ItemList.Armors.PrimalShirt, 50));
    LichKing.Drops.push(NewDrop(ItemList.Armors.ScoutHuntersVest, 25));
    //Heavy
    LichKing.Drops.push(NewDrop(ItemList.Armors.AncientArmor, 125));
    LichKing.Drops.push(NewDrop(ItemList.Armors.OrnatePlate, 100));
    LichKing.Drops.push(NewDrop(ItemList.Armors.DiamondMail, 75));
    LichKing.Drops.push(NewDrop(ItemList.Armors.Boneweave, 50));
    LichKing.Drops.push(NewDrop(ItemList.Armors.BalrogSkin, 25));
    //Shield
    LichKing.Drops.push(NewDrop(ItemList.OffHand.KiteShield, 125));
    LichKing.Drops.push(NewDrop(ItemList.OffHand.RoundShield, 100));
    LichKing.Drops.push(NewDrop(ItemList.OffHand.BarbedShield, 75));
    LichKing.Drops.push(NewDrop(ItemList.OffHand.BladeBarrier, 50));
    LichKing.Drops.push(NewDrop(ItemList.OffHand.Aegis, 25));
    //Dagger offHand
    LichKing.Drops.push(NewDrop(ItemList.OffHand.CrystalDagger, 125));
    LichKing.Drops.push(NewDrop(ItemList.OffHand.SharpClaws, 100));
    LichKing.Drops.push(NewDrop(ItemList.OffHand.Fuscia, 75));
    LichKing.Drops.push(NewDrop(ItemList.OffHand.BattleCestus, 50));
    LichKing.Drops.push(NewDrop(ItemList.OffHand.RunicClaws, 25));
    //Rings
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofStrength, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofEndurance, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofAgility, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofDexterity, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofLuck, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofDefense, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofPower, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofStamina, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofFeather, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofExpertise, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofDestiny, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofSafety, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofSupremacy, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofFortitude, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofBalance, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofSkill, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofFortune, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofProtection, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofForce, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofHardness, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofFlexibility, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofAbility, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofChance, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofImmunity, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofMight, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofTenacity, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofAlertness, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofMastery, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofFluke, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.RingofResistance, 25));
    //Amulets
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofStrength, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofEndurance, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofAgility, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofDexterity, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofLuck, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofDefense, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofPower, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofStamina, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofFeather, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofExpertise, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofDestiny, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofSafety, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofSupremacy, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortitude, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofBalance, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofSkill, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofFortune, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofProtection, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofForce, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofHardness, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofFlexibility, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofAbility, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofChance, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofImmunity, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofMight, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofTenacity, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofAlertness, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofMastery, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofFluke, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.AmuletofResistance, 25));
    //Talismans
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofStrength, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofEndurance, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofAgility, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofDexterity, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofLuck, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofDefense, 125));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofPower, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofStamina, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofFeather, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofExpertise, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofDestiny, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofSafety, 100));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofSupremacy, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortitude, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofBalance, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofSkill, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofFortune, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofProtection, 75));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofForce, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofHardness, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofFlexibility, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofAbility, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofChance, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofImmunity, 50));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofMight, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofTenacity, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofAlertness, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofMastery, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofFluke, 25));
    LichKing.Drops.push(NewDrop(ItemList.Accessory.TalismanofResistance, 25));
    LichKing.Stats = {
        hp: 50000,
        maxHp: 50000,
        def: 500,
        minDmg: 1500,
        maxDmg: 2000,
        baseExp: 50000,
        acc: 95,
        eva: 5,
        name: "LichKing",
        displayName: "Lich King",
        type: "boss",
        id: 32,
        level: 32,
        area: "AncientCave",
        isShown: true,
        killCount: 0,
    };
    monsterList.LichKing = LichKing;
}

MakeItemList()
MakeMonsterList()