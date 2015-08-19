var total = 0;
function sellAllCommon(itemType) {
    var playerInventoryNew = [];

    for (var i = 0; i < playerInventory.length; i++) {
        if (playerInventory[i].itemRarity === "Common" && playerInventory[i].itemType === itemType) {
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
function sellAllUncommon(itemType) {
    var playerInventoryNew = [];

    for (var i = 0; i < playerInventory.length; i++) {
        if (playerInventory[i].itemRarity === "Uncommon" && playerInventory[i].itemType === itemType) {
            total += playerInventory[i].Value << 0;
        } else {
            playerInventoryNew.push(playerInventory[i]);
        };
    };
    player.properties.gold += total;
    playerInventory = playerInventoryNew;
    CreateInventoryWeaponHtml();
    document.getElementById("gold").innerHTML = player.properties.gold;
    total = 0;
};
function sellAllRare(itemType) {
    var playerInventoryNew = [];

    for (var i = 0; i < playerInventory.length; i++) {
        if (playerInventory[i].itemRarity === "Rare" && playerInventory[i].itemType === itemType) {
            total += playerInventory[i].Value << 0;
        } else {
            playerInventoryNew.push(playerInventory[i]);
        };
    };
    player.properties.gold += total;
    playerInventory = playerInventoryNew;
    CreateInventoryWeaponHtml();
    document.getElementById("gold").innerHTML = player.properties.gold;
    total = 0;
};
function sellAllEpic(itemType) {
    if (confirm("Are you sure?") === true) {
        var playerInventoryNew = [];

        for (var i = 0; i < playerInventory.length; i++) {
            if (playerInventory[i].itemRarity === "Epic" && playerInventory[i].itemType === itemType) {
                total += playerInventory[i].Value << 0;
            } else {
                playerInventoryNew.push(playerInventory[i]);
            };
        };
        player.properties.gold += total;
        playerInventory = playerInventoryNew;
        CreateInventoryWeaponHtml();
        document.getElementById("gold").innerHTML = player.properties.gold;
        total = 0;
    };
};
function sellAllLegendary(itemType) {
    if (confirm("Are you sure?") === true) {
        var playerInventoryNew = [];

        for (var i = 0; i < playerInventory.length; i++) {
            if (playerInventory[i].itemRarity === "Legendary" && playerInventory[i].itemType === itemType) {
                total += playerInventory[i].Value << 0;
            } else {
                playerInventoryNew.push(playerInventory[i]);
            };
        };
        player.properties.gold += total;
        playerInventory = playerInventoryNew;
        CreateInventoryWeaponHtml();
        document.getElementById("gold").innerHTML = player.properties.gold;
        total = 0;
    };
};
//Single item sell
function itemSell(id) {
    var item = playerInventory.filter(function (obj) {
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