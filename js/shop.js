var potionStatus = {};
potionStatus.price = 20;
var mediumPotionStatus = {};
mediumPotionStatus.price = 100;
var superPotionStatus = {};
superPotionStatus.price = 500;
//Buy Stuff -_-
function potionBuy(type, count) {
    var priceTemp = type.price;
    var priceToPay = 0;
    for (i = 0; i < count; i++) {
        priceToPay += priceTemp;
        priceTemp = priceTemp;
    };

    if (player.properties.gold >= priceToPay) {
        type.price = priceTemp;
        player.properties.gold -= priceToPay;
        return true;
    };
    Log('<span id=\"notEnoughMoney\" class =\"bold\" style=\"color:red; display:none;\">You do not have enough money to buy this. You need : ' + (priceToPay - player.properties.gold) + " more gold.<br />" + "</span>");
    notEnoughMoneyLog();
    return false;
};
//Buy potions
function buySmallPotion(count) {
    if (potionBuy(potionStatus, count)) {
        player.properties.smallPotion += count
        updateHtml();
        var potionType = "Potions";
        Log('<span id=\"potionBuy\" class =\"bold\" style=\"color:green; display:none;\">You bought : ' + count + " " + potionType + ".<br />" + "</span>");
        potionBuyLog();
    };
    shopOther();
};
//Buy Super potions
function buyMediumPotion(count) {
    if (potionBuy(mediumPotionStatus, count)) {
        player.properties.mediumPotion += count
        updateHtml();
        var potionType = "Medium Potions";
        Log('<span id=\"potionBuy\" class =\"bold\" style=\"color:green; display:none;\">You bought : ' + count + " " + potionType + ".<br />" + "</span>");
        potionBuyLog();
    };
    shopOther();
};
//Buy Mega potions
function buySuperPotion(count) {
    if (potionBuy(superPotionStatus, count)) {
        player.properties.superPotion += count
        updateHtml();
        var potionType = "Super Potions";
        Log('<span id=\"potionBuy\" class =\"bold\" style=\"color:green; display:none;\">You bought : ' + count + " " + potionType + ".<br />" + "</span>");
        potionBuyLog();
    };
    shopOther();
};

var backpackStatus = {};
backpackStatus.price = 100;
backpackStatus.multiplier = 1.04;
 
var statStatus = {};
statStatus.price = 500;
statStatus.multiplier = 1.01;

//Buy Stuff -_-
function buyStuff(type, count) {
    var priceTemp = type.price;
    var priceToPay = 0;
    for (i = 0; i < count; i++) {
        priceToPay += priceTemp;
        priceTemp = Math.round(priceTemp * type.multiplier);
    };

    if (player.properties.gold >= priceToPay) {
        type.price = priceTemp;
        player.properties.gold -= priceToPay;
        return true;
    };
    Log('<span id=\"notEnoughMoney\" class =\"bold\" style=\"color:red; display:none;\">You do not have enough money to buy this. You need : ' + (priceToPay - player.properties.gold) + " more gold.<br />" + "</span>");
    notEnoughMoneyLog();
    return false;
};
//Buy backpack
function buyBackpack(count) {
    if (buyStuff(backpackStatus, count)) {
        player.properties.backpackUpgrade += count;
        updateHtml();
        CreateInventoryWeaponHtml();
        Log('<span id=\"inventoryBuy\" class =\"bold\" style=\"color:green; display:none;\">Inventory slots upgraded by: ' + count + ", now you have: " + player.functions.inventory() + " inventory slots.<br />" + "</span>");
        inventoryBuyLog();
    };
    shopOther();
};
//Buy Stat points
function buyStat(count) {
    if (buyStuff(statStatus, count)) {
        player.properties.stats += count;
        updateHtml();
        Log('<span id=\"statBuy\" class =\"bold\" style=\"color:green; display:none;\">Your stat points increased by: ' + count + ".<br />" + "</span>");
        statBuyLog();
    };
    shopOther();
};