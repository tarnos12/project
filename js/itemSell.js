"use strict";
var total = 0;

function sellAllItems(itemType) {
    var canSell = false;
    if (checkBoxEpic === true || checkBoxLegendary === true) {
        if (confirm("You are going to sell Epic and/or Legendary items, are you sure?") === true) {

        }
    }
    if (itemRarity === "Epic" || itemRarity === "Legendary") {
        if (confirm("Are you sure?") === true) {
            canSell = true;
        }
        else {
            canSell = false;
        };
    }
    else {
        canSell = true;
    }
    if (canSell === true) {
        var playerInventoryNew = [];
        for (var i = 0; i < playerInventory.length; i++) {
            if ((playerInventory[i].itemRarity === 'Legendary' && checkBoxLegendary === true ||
                playerInventory[i].itemRarity === 'Epic' && checkBoxEpic === true ||
                playerInventory[i].itemRarity === 'Rare' && checkBoxRare === true ||
                playerInventory[i].itemRarity === 'Uncommon' && checkBoxUncommon === true ||
                playerInventory[i].itemRarity === 'Common' && checkBoxCommon === true) && playerInventory[i].itemType === itemType) {
                    total += playerInventory[i].Value << 0;
            } else {
                playerInventoryNew.push(playerInventory[i]);
            }
        }
        player.properties.gold += total;
        playerInventory = playerInventoryNew;
        CreateInventoryWeaponHtml();
        document.getElementById("gold").innerHTML = player.properties.gold;
        total = 0;
    };
};

//Single item sell
function itemSell(id) {
    var item = playerInventory.filter(function(obj) {
        return obj.id === id;
    })[0];
    var index = playerInventory.indexOf(item);
    if (index > -1) {
        playerInventory.splice(index, 1);
    }
    if (item !== undefined) {
        player.properties.gold += item.Value;
        CreateInventoryWeaponHtml();
        document.getElementById("gold").innerHTML = player.properties.gold;
    };
};