window.setInterval(function () {
    var hppercent = 100; //This function heal player automatically using potions.
    hppercent = (Math.floor((player.properties.health / player.functions.maxhealth()) * 100));
    if (player.functions.maxhealth() >= 500 & mpot >= 1 & player.properties.isDead == false) {
        if (hppercent <= 30) {
            if (player.properties.health + 500 >= player.functions.maxhealth()) {
                player.properties.health = player.functions.maxhealth();
                mpot -= 1;
                document.getElementById("health").innerHTML = player.properties.health;
                document.getElementById("megaPotion").innerHTML = mpot;
            }
            else {
                player.properties.health += 500;
                mpot -= 1;
                document.getElementById("health").innerHTML = player.properties.health;
                document.getElementById("megaPotion").innerHTML = mpot;
            }
        }
    }
    else if (player.functions.maxhealth() >= 300 & spot >= 1 & player.properties.isDead == false) {
        if (hppercent <= 30) {
            if (player.properties.health + 100 >= player.functions.maxhealth()) {
                player.properties.health = player.functions.maxhealth();
                spot -= 1;
                document.getElementById("health").innerHTML = player.properties.health;
                document.getElementById("superPotion").innerHTML = spot;
            }
            else {
                player.properties.health += 100;
                spot -= 1;
                document.getElementById("health").innerHTML = player.properties.health;
                document.getElementById("superPotion").innerHTML = spot;
            }
        }
    }
    else if (pot >= 1 & player.properties.isDead == false) {
        if (hppercent <= 30) {
            if (player.properties.health + 20 >= player.functions.maxhealth()) {
                player.properties.health = player.functions.maxhealth();
                pot -= 1;
                document.getElementById("health").innerHTML = player.properties.health;
                document.getElementById("potion").innerHTML = pot;
            }
            else {
                player.properties.health += 20;
                pot -= 1;
                document.getElementById("health").innerHTML = player.properties.health;
                document.getElementById("potion").innerHTML = pot;
            }
        }
    }

}, 1);

//Using potions
function usepot() {
    if (player.properties.health == player.functions.maxhealth()) {
        Log("Your health is full!");
    } else if (player.properties.health + 20 >= player.functions.maxhealth() & pot >= 1) {
        pot = pot - 1;
        player.properties.health = player.functions.maxhealth();
        document.getElementById('potion').innerHTML = pot;
        document.getElementById('health').innerHTML = player.properties.health;
        Log("You heal for 20 <span style=\"color:green\">health!</span>");
    } else if (player.properties.health + 20 < player.functions.maxhealth() & pot >= 1) {
        pot = pot - 1;
        player.properties.health = player.properties.health + 20;
        document.getElementById('potion').innerHTML = pot;
        document.getElementById('health').innerHTML = player.properties.health;
    }
};

function usespot() {
    if (player.properties.health == player.functions.maxhealth()) {
        Log("Your health is full!");
    } else if (player.properties.health + 100 >= player.functions.maxhealth() & spot >= 1) {
        spot = spot - 1;
        player.properties.health = player.functions.maxhealth();
        document.getElementById('superPotion').innerHTML = spot;
        document.getElementById('health').innerHTML = player.properties.health;
        Log("You heal for 100 <span style=\"color:green\">health!</span>");
    } else if (player.properties.health + 100 < player.functions.maxhealth() & spot >= 1) {
        spot = spot - 1;
        player.properties.health = player.properties.health + 100;
        document.getElementById('superPotion').innerHTML = spot;
        document.getElementById('health').innerHTML = player.properties.health;
    }
};

function usempot() {
    if (player.properties.health == player.functions.maxhealth()) {
        Log("Your health is full!");
    } else if (player.properties.health + 500 >= player.functions.maxhealth() & mpot >= 1) {
        mpot = mpot - 1;
        player.properties.health = player.functions.maxhealth();
        document.getElementById('megaPotion').innerHTML = mpot;
        document.getElementById('health').innerHTML = player.properties.health;
        Log("You heal for 100 <span style=\"color:green\">health!</span>");
    } else if (player.properties.health + 500 < player.functions.maxhealth() & mpot >= 1) {
        mpot = mpot - 1;
        player.properties.health = player.properties.health + 500;
        document.getElementById('megaPotion').innerHTML = mpot;
        document.getElementById('health').innerHTML = player.properties.health;
    }
};

function playerRevive() {
    setTimeout(
   function () {
       player.properties.health = player.functions.maxhealth();
       player.properties.isDead = false;
   }, 5000);
};
function playerReviveCheck() {
    if (player.properties.isDead === true) {
        playerRevive();
        Log("<span class =\"bold\" style=\"color:red\">You have died!</span>");
        Log("You need to wait 5 seconds before you can fight again!");
    };
};