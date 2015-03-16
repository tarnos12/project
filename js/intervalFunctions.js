window.setInterval(function () {
    var hppercent = 100; //This function heal player automatically using potions.
    hppercent = (Math.floor((player.health / player.maxhealth()) * 100));
    if (player.maxhealth() >= 500 & mpot >= 1 & player.isDead == false) {
        if (hppercent <= 30) {
            if (player.health + 500 >= player.maxhealth()) {
                player.health = player.maxhealth();
                mpot -= 1;
                document.getElementById("health").innerHTML = player.health;
                document.getElementById("megaPotion").innerHTML = mpot;
            }
            else {
                player.health += 500;
                mpot -= 1;
                document.getElementById("health").innerHTML = player.health;
                document.getElementById("megaPotion").innerHTML = mpot;
            }
        }
    }
    else if (player.maxhealth() >= 300 & spot >= 1 & player.isDead == false) {
        if (hppercent <= 30) {
            if (player.health + 100 >= player.maxhealth()) {
                player.health = player.maxhealth();
                spot -= 1;
                document.getElementById("health").innerHTML = player.health;
                document.getElementById("superPotion").innerHTML = spot;
            }
            else {
                player.health += 100;
                spot -= 1;
                document.getElementById("health").innerHTML = player.health;
                document.getElementById("superPotion").innerHTML = spot;
            }
        }
    }
    else if (pot >= 1 & player.isDead == false) {
        if (hppercent <= 30) {
            if (player.health + 20 >= player.maxhealth()) {
                player.health = player.maxhealth();
                pot -= 1;
                document.getElementById("health").innerHTML = player.health;
                document.getElementById("potion").innerHTML = pot;
            }
            else {
                player.health += 20;
                pot -= 1;
                document.getElementById("health").innerHTML = player.health;
                document.getElementById("potion").innerHTML = pot;
            }
        }
    }

}, 1);
//Auto Battle
/*window.setInterval(function () {
    if (player.autoBattle === 1) {
        document.getElementsByClassName("monsterButton")[0].click();
        console.log("XD")
    }
}, 1000); */
//Using potions
function usepot() {
    if (player.health == player.maxhealth()) {
        Log("Your health is full!");
    } else if (player.health + 20 >= player.maxhealth() & pot >= 1) {
        pot = pot - 1;
        player.health = player.maxhealth();
        document.getElementById('potion').innerHTML = pot;
        document.getElementById('health').innerHTML = player.health;
        Log("You heal for 20 <span style=\"color:green\">health!</span>");
    } else if (player.health + 20 < player.maxhealth() & pot >= 1) {
        pot = pot - 1;
        player.health = player.health + 20;
        document.getElementById('potion').innerHTML = pot;
        document.getElementById('health').innerHTML = player.health;
    }
};

function usespot() {
    if (player.health == player.maxhealth()) {
        Log("Your health is full!");
    } else if (player.health + 100 >= player.maxhealth() & spot >= 1) {
        spot = spot - 1;
        player.health = player.maxhealth();
        document.getElementById('superPotion').innerHTML = spot;
        document.getElementById('health').innerHTML = player.health;
        Log("You heal for 100 <span style=\"color:green\">health!</span>");
    } else if (player.health + 100 < player.maxhealth() & spot >= 1) {
        spot = spot - 1;
        player.health = player.health + 100;
        document.getElementById('superPotion').innerHTML = spot;
        document.getElementById('health').innerHTML = player.health;
    }
};

function usempot() {
    if (player.health == player.maxhealth()) {
        Log("Your health is full!");
    } else if (player.health + 500 >= player.maxhealth() & mpot >= 1) {
        mpot = mpot - 1;
        player.health = player.maxhealth();
        document.getElementById('megaPotion').innerHTML = mpot;
        document.getElementById('health').innerHTML = player.health;
        Log("You heal for 100 <span style=\"color:green\">health!</span>");
    } else if (player.health + 500 < player.maxhealth() & mpot >= 1) {
        mpot = mpot - 1;
        player.health = player.health + 500;
        document.getElementById('megaPotion').innerHTML = mpot;
        document.getElementById('health').innerHTML = player.health;
    }
};

function playerRevive() {
    setTimeout(
   function () {
       player.health = player.maxhealth();
       player.isDead = false;
   }, 5000);
};