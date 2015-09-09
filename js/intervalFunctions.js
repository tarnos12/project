"use strict";

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
