function buypot() {
    if (player.gold >= 20) {
        pot += 1;
        player.gold -= 20;
        document.getElementById('pot').innerHTML = pot;
        document.getElementById('gold').innerHTML = player.gold;
    }
}

function buypot10() {
    if (player.gold >= 200) {
        pot += 10;
        player.gold -= 200;
        document.getElementById('pot').innerHTML = pot;
        document.getElementById('gold').innerHTML = player.gold;
    }
}

function buyspot() {
    if (player.gold >= 100) {
        spot += 1;
        player.gold -= 100;
        document.getElementById('spot').innerHTML = spot;
        document.getElementById('gold').innerHTML = player.gold;
    }
}

function buyspot10() {
    if (player.gold >= 1000) {
        spot += 10;
        player.gold -= 1000;
        document.getElementById('spot').innerHTML = spot;
        document.getElementById('gold').innerHTML = player.gold;
    }
}

function buympot() {
    if (player.gold >= 500) {
        mpot += 1;
        player.gold -= 500;
        document.getElementById('mpot').innerHTML = mpot;
        document.getElementById('gold').innerHTML = player.gold;
    }
}

function buympot10() {
    if (player.gold >= 5000) {
        mpot += 10;
        player.gold -= 5000;
        document.getElementById('mpot').innerHTML = mpot;
        document.getElementById('gold').innerHTML = player.gold;
    }
}
var backpackPrice = 100;
function buyBackpack() {
    if (player.gold >= backpackPrice) {
        player.backpackUpgrade += 1;
        player.gold -= backpackPrice;
        backpackPrice *= 2;
        CreateInventoryWeaponHtml()
        document.getElementById("backpack").innerHTML = backpackPrice;
        Log("You max inventory slots upgraded by 1, now you have: " + player.inventory() + " inventory slots")
    }
    else {
        Log("You do not have enough money to upgrade backpack slots. You need " + backpackPrice + " gold");
    }
}

function buyStat() {
    if (player.gold >= 1000) {
        player.stats += 1;
        player.gold -= 1000;
        Log("Your stat points increased by 1")
    }
    else {
        Log("You do not have enough money to buy this. You need 1000 gold")
    }
}