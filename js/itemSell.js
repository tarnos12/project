var total = 0;
function sellAllCommon() {
    var playerInventoryNew = [];

    for (var i = 0; i < playerInventory.length; i++) {
        if (playerInventory[i].itemQuality === "Common") {
            total += playerInventory[i].value << 0;
        } else {
            playerInventoryNew.push(playerInventory[i]);
        }
    }
    player.gold += total;
    playerInventory = playerInventoryNew;
    CreateInventoryWeaponHtml();
    document.getElementById("gold").innerHTML = player.gold;
    total = 0;
};
function sellAllUncommon() {
    var playerInventoryNew = [];

    for (var i = 0; i < playerInventory.length; i++) {
        if (playerInventory[i].itemQuality === "Uncommon") {
            total += playerInventory[i].value << 0;
        } else {
            playerInventoryNew.push(playerInventory[i]);
        };
    };
    player.gold += total;
    playerInventory = playerInventoryNew;
    CreateInventoryWeaponHtml();
    document.getElementById("gold").innerHTML = player.gold;
    total = 0;
};
function sellAllRare() {
    var playerInventoryNew = [];

    for (var i = 0; i < playerInventory.length; i++) {
        if (playerInventory[i].itemQuality === "Rare") {
            total += playerInventory[i].value << 0;
        } else {
            playerInventoryNew.push(playerInventory[i]);
        };
    };
    player.gold += total;
    playerInventory = playerInventoryNew;
    CreateInventoryWeaponHtml();
    document.getElementById("gold").innerHTML = player.gold;
    total = 0;
};
function sellAllEpic() {
    if (confirm("Are you sure?") == true) {
        var playerInventoryNew = [];

        for (var i = 0; i < playerInventory.length; i++) {
            if (playerInventory[i].itemQuality === "Epic") {
                total += playerInventory[i].value << 0;
            } else {
                playerInventoryNew.push(playerInventory[i]);
            };
        };
        player.gold += total;
        playerInventory = playerInventoryNew;
        CreateInventoryWeaponHtml();
        document.getElementById("gold").innerHTML = player.gold;
        total = 0;
    };
};
//Single item sell
function itemSell(id) {
    var item = playerInventory.filter(function (obj) {
        return obj.id === id
    })[0];
    var index = playerInventory.indexOf(item);
    if (index > -1) {
        playerInventory.splice(index, 1);
    }
    player.gold += item.value;
    CreateInventoryWeaponHtml();
    document.getElementById("gold").innerHTML = player.gold;
};