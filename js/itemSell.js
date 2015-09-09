"use strict";
var total = 0;
var inventoryId = [];
function sellAllItems() {
    var canSell = false;
    if (checkBoxEpic === true || checkBoxLegendary === true) {
        if (confirm("You are going to sell Epic and/or Legendary items, are you sure?") === true) {
            canSell = true;
        }
        else {
            canSell = false;
        }
    }
    else {
        canSell = true;
    }
    if (canSell === true) {
        for (var i = 0; i < playerInventory.length; i++) {
            if ((playerInventory[i].itemRarity === 'Legendary' && checkBoxLegendary === true ||
                playerInventory[i].itemRarity === 'Epic' && checkBoxEpic === true ||
                playerInventory[i].itemRarity === 'Rare' && checkBoxRare === true ||
                playerInventory[i].itemRarity === 'Uncommon' && checkBoxUncommon === true ||
                playerInventory[i].itemRarity === 'Common' && checkBoxCommon === true)) {
                total += playerInventory[i].Value << 0;
                var item = "testingItem" + playerInventory[i].id;
                $('#' + item).remove();
                var itemId = playerInventory[i];
                inventoryId.push(itemId);
            }
        }
        player.properties.gold += total;
        document.getElementById("gold").innerHTML = player.properties.gold;
        total = 0;
    };
    for (var j = 0; j < inventoryId.length; j++) {
        var itemRemove = inventoryId[j];
        var index = playerInventory.indexOf(itemRemove);
        if (index > -1) {
            playerInventory.splice(index, 1);
        }
        updateInventory();
    };
    inventoryId = [];
};

//Single item sell
function itemSell(id) {
    var item = playerInventory.filter(function(obj) {
        return obj.id === id;
    })[0];
    var index = playerInventory.indexOf(item);
    if (index > -1) {
        playerInventory.splice(index, 1);
        var itemToRemove = "testingItem" + item.id;
        $('#' + itemToRemove).remove();
        updateInventory();
    }
    if (item !== undefined) {
        player.properties.gold += item.Value;
        document.getElementById("gold").innerHTML = player.properties.gold;
    };
};

function updateInventory() {
    $('#updateInventorySlots').empty().append("Inventory Slots: " + playerInventory.length + "/" + player.functions.inventory())
};