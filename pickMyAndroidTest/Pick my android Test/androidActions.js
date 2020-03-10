var androidPage = require("./androidPage.js");

var androidActions = function() {

    this.clickGetStarted = function() {
        androidPage.getStarted().click();
    };

    this.clickTakingPhotos = function() {
        androidPage.takingPhotos().click();
    };

    this.clickChooseItem = function() {
        androidPage.chooseItem().click();
    };

    this.clickNext = function() {
        androidPage.Next().click();
    };

    this.clickChooseItem2 = function() {
        androidPage.chooseItem2().click();
    };

    this.clickDone = function() {
        androidPage.Done().click();
    };

    this.clickGaming = function(){
    androidPage.Gaming().click();

};

this.clickChooseItem = function() {
    androidPage.chooseItem().click();
};

this.clickNext = function() {
    androidPage.Next().click();
};

this.clickChooseItem2 = function() {
    androidPage.chooseItem2().click();
};

this.clickDone = function() {
    androidPage.Done().click();
};

this.clickWatchingvideos = function(){
androidPage.Watchingvideos().click();

};

this.clickChooseItem = function() {
    androidPage.chooseItem().click();
};

this.clickNext = function() {
    androidPage.Next().click();
};

this.clickChooseItem2 = function() {
    androidPage.chooseItem2().click();
};

this.clickDone = function() {
    androidPage.Done().click();
};

this.clickShowMePhones = function() {
    androidPage.ShowMePhones().click();
};

this.clickChooseCarrier = function(){
  androidPage.ChooseCarrier().click();

};
this.clickAllSizes = function(){
  androidPage.AllSizes().click();

};

this.clicksmallSize = function(){
and_Page.largeSize().click();
};

this.clickstartOver = function(){
  and_Page.startOver().click();

};

};
module.exports = new androidActions;
