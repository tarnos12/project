window.setInterval(function () {

    if (wepeq == "Sword") {
        document.getElementById("weapon").innerHTML = "<img src='images/items/sword1.gif' class='mark'>";
    }
    else if (wepeq == "Sword1") {
        document.getElementById("weapon1").innerHTML = "<img src='images/items/sword2.gif' class='mark'>";
    }
    else if (wepeq == "Sword2") {
        document.getElementById("weapon2").innerHTML = "<img src='images/items/sword3.gif' class='mark'>";
    }
    else if (wepeq == "Sword3") {
        document.getElementById("weapon3").innerHTML = "<img src='images/items/sword4.gif' class='mark'>";
    }
    else if (wepeq == "Dagger") {
        document.getElementById("weapon4").innerHTML = "<img src='images/items/dagger1.gif' class='mark'>";
    }
    else if (wepeq == "Dagger1") {
        document.getElementById("weapon5").innerHTML = "<img src='images/items/dagger1.gif' class='mark'>";
    }
    else if (wepeq == "Dagger2") {
        document.getElementById("weapon6").innerHTML = "<img src='images/items/dagger1.gif' class='mark'>";
    }
    else if (wepeq == "Dagger3") {
        document.getElementById("weapon7").innerHTML = "<img src='images/items/dagger1.gif' class='mark'>";
    }
    else if (wepeq == "Axe") {
        document.getElementById("weapon8").innerHTML = "<img src='images/items/axe1.gif' class='mark'>";
    }
    else if (wepeq == "Axe1") {
        document.getElementById("weapon9").innerHTML = "<img src='images/items/axe1.gif' class='mark'>";
    }
    else if (wepeq == "Axe2") {
        document.getElementById("weapon10").innerHTML = "<img src='images/items/axe1.gif' class='mark'>";
    }
    else if (wepeq == "Axe3") {
        document.getElementById("weapon11").innerHTML = "<img src='images/items/axe1.gif' class='mark'>";
    }
    else if (wepeq == "Mace") {
        document.getElementById("weapon12").innerHTML = "<img src='images/items/mace1.gif' class='mark'>";
    }
    else if (wepeq == "Mace1") {
        document.getElementById("weapon13").innerHTML = "<img src='images/items/mace2.gif' class='mark'>";
    }
    else if (wepeq == "Mace2") {
        document.getElementById("weapon14").innerHTML = "<img src='images/items/mace2.gif' class='mark'>";
    }
    else if (wepeq == "Mace3") {
        document.getElementById("weapon15").innerHTML = "<img src='images/items/mace2.gif' class='mark'>";
    }
}, 1);


window.setInterval(function () {

    if (armeq == "Armor") {
        document.getElementById("armor").innerHTML = "<img src='images/items/armor1.gif' class='mark'>";
    }
    else if (armeq == "Armor1") {
        document.getElementById("armor1").innerHTML = "<img src='images/items/armor1.gif' class='mark'>";
    }
    else if (armeq == "Armor2") {
        document.getElementById("armor2").innerHTML = "<img src='images/items/armor2.gif' class='mark'>";
    }
    else if (armeq == "Armor3") {
        document.getElementById("armor3").innerHTML = "<img src='images/items/armor2.gif' class='mark'>";
    }
    else if (armeq == "Armor4") {
        document.getElementById("armor4").innerHTML = "<img src='images/items/armor3.gif' class='mark'>";
    }
    else if (armeq == "Armor5") {
        document.getElementById("armor5").innerHTML = "<img src='images/items/armor3.gif' class='mark'>";
    }
    else if (armeq == "Armor6") {
        document.getElementById("armor6").innerHTML = "<img src='images/items/armor4.gif' class='mark'>";
    }
}, 1);


window.setInterval(function () {

    if (acceq == "Accessory") {
        document.getElementById("accessory").innerHTML = "<img src='images/items/ring.gif' class='mark'>";
    }
    else if (acceq == "Accessory1") {
        document.getElementById("accessory1").innerHTML = "<img src='images/items/ring.gif' class='mark'>";
    }
    else if (acceq == "Accessory2") {
        document.getElementById("accessory2").innerHTML = "<img src='images/items/ring.gif' class='mark'>";
    }
    else if (acceq == "Accessory3") {
        document.getElementById("accessory3").innerHTML = "<img src='images/items/ring.gif' class='mark'>";
    }
    else if (acceq == "Accessory4") {
        document.getElementById("accessory4").innerHTML = "<img src='images/items/ring.gif' class='mark'>";
    }
    else if (acceq == "Accessory5") {
        document.getElementById("accessory5").innerHTML = "<img src='images/items/ring.gif' class='mark'>";
    }
    else if (acceq == "Accessory6") {
        document.getElementById("accessory6").innerHTML = "<img src='images/items/ring.gif' class='mark'>";
    }
}, 1);

var wepeq = "Sword"; 		//currently equipped weapon
var armeq = "Armor"; 		//currently equipped armor
var acceq = "Accessory";		//currently equipped accessory
var wep = {
    Sword: [1, 2, 3, 4], // Sword[0] is equal to "Sword", Sword[1] is equal to "Sword1" etc.
    Dagger: [1, 2, 3, 4], // same ^
    Axe: [1, 2, 3, 4],
    Mace: [1, 2, 3, 4],
    Staff: [1, 2, 3, 4],
    Fist: [1, 2, 3, 4]
};

var weapon = {

    sword: [
    {
        id: 's1',
        name: 'sword1',
        strength: 2,
        endurance: 1,
        image: 'sword1.gif'
    },
    {
        id: 's2',
        name: 'sword2',
        strength: 5,
        endurance: 2,
        image: 'sword2.gif'
    },
    {
        id: 's3',
        name: 'sword3',
        strength: 10,
        endurance: 4,
        agility: 2,
        image: 'sword3.gif'
    },
    {
        id: 's4',
        name: 'sword4',
        strength: 25,
        endurance: 6,
        agility: 5,
        image: 'sword4.gif'
    }
    ],

    dagger: [
        {
            id: 'd1',
            name: 'dagger1',
            agility: 3,
            dexterity: 0,
            image: 'dagger1.gif'
        },
        {
            id: 'd2',
            name: 'dagger2',
            agility: 5,
            dexterity: 3,
            image: 'dagger1.gif'
        },
        {
            id: 'd3',
            name: 'dagger3',
            agility: 10,
            dexterity: 5,
            image: 'dagger1.gif'
        },
        {
            id: 'd4',
            name: 'dagger4',
            agility: 25,
            dexterity: 10,
            luck: 5,
            image: 'dagger1.gif'
        }
    ],

    axe: [
          {
              id: 'a1',
              name: 'axe1',
              strength: 5,
              agility: -1,
              image: 'axe1.gif'
          },

        {
            id: 'a2',
            name: 'axe2',
            agility: 3,
            dexterity: 0,
            image: 'axe1.gif'
        },
        {
            id: 'a3',
            name: 'axe3',
            agility: 3,
            dexterity: 0,
            image: 'axe1.gif'
        },
        {
            id: 'a4',
            name: 'axe4',
            agility: 3,
            dexterity: 0,
            image: 'axe1.gif'
        },
    ],

    mace: [
          {
              id: 'm1',
              name: 'mace1',
              strength: 5,
              agility: -1,
              image: 'mace1.gif'
          },

        {
            id: 'm2',
            name: 'mace2',
            agility: 3,
            dexterity: 0,
            image: 'mace1.gif'
        },
        {
            id: 'm3',
            name: 'mace3',
            agility: 3,
            dexterity: 0,
            image: 'mace2.gif'
        },
        {
            id: 'm4',
            name: 'mace4',
            agility: 3,
            dexterity: 0,
            image: 'mace2.gif'
        },
    ]

};

var arm = [0, 0, 0, 0, 0, 0, 0];		 //Amount of armors in player inventory
var acc = [0, 0, 0, 0, 0, 0, 0];	 //Amount of accessories in player inventory


function weaponUnequip() {
    if (wepeq === "Sword" & wepeq >= 0) {
        var unequip = wepeq;
        wepeq = -unequip;

        document.getElementById("sword").innerHTML = wep.Sword[0];

    }
}


function equipSword() {
    if (wep.Sword[0] >= 1) {
        wepeq = "Sword";
        wep[0] -= 1;
        document.getElementById("dagger4").innerHTML = wep.Dagger[3];

    }
}

function equipSword1() {
    if (wep[1] >= 1 & wepeq >= 0) {
        wepeq = "Sword1";
        wep[1] -= 1;
        document.getElementById("sword1").innerHTML = wep[1];

    }
}

function equipSword2() {
    if (wep[2] >= 1 & wepeq >= 0) {
        wepeq = "Sword2";
        wep[2] -= 1;
        document.getElementById("sword2").innerHTML = wep[2];

    }
}

function equipSword3() {
    if (wep[3] >= 1 & wepeq >= "") {
        wepeq = "Sword3";
        wep[3] -= 1;
        document.getElementById("sword3").innerHTML = wep[3];

    }
}

function equipDagger() {
    if (wep[1] >= 1 & wepeq >= 0) {
        wepeq = 2;
        wep[1] -= 1;
        document.getElementById("wep5").innerHTML = wep[1];

    }
}