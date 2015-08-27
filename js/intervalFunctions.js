"use strict";
window.setInterval(function () {
    var hppercent = 100; //This function heal player automatically using potions.
    hppercent = (Math.floor((player.properties.health / player.functions.maxhealth()) * 100));
    if (player.functions.maxhealth() >= 500 & player.properties.superPotion >= 1 & player.properties.isDead === false) {
        if (hppercent <= 30) {
            if (player.properties.health + 500 >= player.functions.maxhealth()) {
                player.properties.health = player.functions.maxhealth();
                player.properties.superPotion -= 1;
                document.getElementById("health").innerHTML = player.properties.health;
                document.getElementById("SuperPotion").innerHTML = player.properties.superPotion;
            } else {
                player.properties.health += 500;
                player.properties.superPotion -= 1;
                document.getElementById("health").innerHTML = player.properties.health;
                document.getElementById("SuperPotion").innerHTML = player.properties.superPotion;
            }
        }
    } else if (player.functions.maxhealth() >= 300 & player.properties.mediumPotion >= 1 & player.properties.isDead === false) {
        if (hppercent <= 30) {
            if (player.properties.health + 100 >= player.functions.maxhealth()) {
                player.properties.health = player.functions.maxhealth();
                player.properties.mediumPotion -= 1;
                document.getElementById("health").innerHTML = player.properties.health;
                document.getElementById("MediumPotion").innerHTML = player.properties.mediumPotion;
            } else {
                player.properties.health += 100;
                player.properties.mediumPotion -= 1;
                document.getElementById("health").innerHTML = player.properties.health;
                document.getElementById("MediumPotion").innerHTML = player.properties.mediumPotion;
            }
        }
    } else if (player.properties.smallPotion >= 1 & player.properties.isDead === false) {
        if (hppercent <= 30) {
            if (player.properties.health + 20 >= player.functions.maxhealth()) {
                player.properties.health = player.functions.maxhealth();
                player.properties.smallPotion -= 1;
                document.getElementById("health").innerHTML = player.properties.health;
                document.getElementById("SmallPotion").innerHTML = player.properties.smallPotion;
            } else {
                player.properties.health += 20;
                player.properties.smallPotion -= 1;
                document.getElementById("health").innerHTML = player.properties.health;
                document.getElementById("SmallPotion").innerHTML = player.properties.smallPotion;
            }
        }
    }

}, 1);

//Using potions
function useSmallPotion() {
    if (player.properties.health === player.functions.maxhealth()) {
        Log("Your health is full!");
    } else if (player.properties.health + 20 >= player.functions.maxhealth() & player.properties.smallPotion >= 1) {
        player.properties.smallPotion = player.properties.smallPotion - 1;
        player.properties.health = player.functions.maxhealth();
        document.getElementById("SmallPotion").innerHTML = player.properties.smallPotion;
        document.getElementById("health").innerHTML = player.properties.health;
        Log("You heal for 20 <span style=\"color:green\">health!</span>");
    } else if (player.properties.health + 20 < player.functions.maxhealth() & player.properties.smallPotion >= 1) {
        player.properties.smallPotion = player.properties.smallPotion - 1;
        player.properties.health = player.properties.health + 20;
        document.getElementById("SmallPotion").innerHTML = player.properties.smallPotion;
        document.getElementById("health").innerHTML = player.properties.health;
    }
};

function useMediumPotion() {
    if (player.properties.health === player.functions.maxhealth()) {
        Log("Your health is full!");
    } else if (player.properties.health + 100 >= player.functions.maxhealth() & player.properties.mediumPotion >= 1) {
        player.properties.mediumPotion = player.properties.mediumPotion - 1;
        player.properties.health = player.functions.maxhealth();
        document.getElementById("MediumPotion").innerHTML = player.properties.mediumPotion;
        document.getElementById("health").innerHTML = player.properties.health;
        Log("You heal for 100 <span style=\"color:green\">health!</span>");
    } else if (player.properties.health + 100 < player.functions.maxhealth() & player.properties.mediumPotion >= 1) {
        player.properties.mediumPotion = player.properties.mediumPotion - 1;
        player.properties.health = player.properties.health + 100;
        document.getElementById("MediumPotion").innerHTML = player.properties.mediumPotion;
        document.getElementById("health").innerHTML = player.properties.health;
    }
};

function useSuperPotion() {
    if (player.properties.health === player.functions.maxhealth()) {
        Log("Your health is full!");
    } else if (player.properties.health + 500 >= player.functions.maxhealth() & player.properties.superPotion >= 1) {
        player.properties.superPotion = player.properties.superPotion - 1;
        player.properties.health = player.functions.maxhealth();
        document.getElementById("megaPotion").innerHTML = player.properties.superPotion;
        document.getElementById("health").innerHTML = player.properties.health;
        Log("You heal for 100 <span style=\"color:green\">health!</span>");
    } else if (player.properties.health + 500 < player.functions.maxhealth() & player.properties.superPotion >= 1) {
        player.properties.superPotion = player.properties.superPotion - 1;
        player.properties.health = player.properties.health + 500;
        document.getElementById("megaPotion").innerHTML = player.properties.superPotion;
        document.getElementById("health").innerHTML = player.properties.health;
    }
};

function playerRevive() {
    setTimeout(
        function() {
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