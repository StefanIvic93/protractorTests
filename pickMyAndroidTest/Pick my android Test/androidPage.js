var androidPage = function() {

    this.getStarted = function() {
        return element(by.css('button.btn'));
    };

    this.takingPhotos = function() {
        return element.all(by.repeater('item in vm.behaviorData')).get(0);
    };

    this.chooseItem = function() {
        return element.all(by.id('tick-medium'));
    };

    this.Next = function() {
        return element.all(by.css('[ng-click="vm.applyUsageModifier()"]'));
    };

    this.chooseItem2 = function() {
        return element.all(by.repeater('item in vm.currentFollowUp.answers')).get(2);
    };

    this.Done = function() {
        return element(by.buttonText("done")); //nisi uzeo pravi lokator, ovaj je mnogo bolji

    };

    this.Gaming = function() {
        return element.all(by.repeater('item in vm.behaviorData')).get(4);
    };

    this.chooseItem = function() {
        return element.all(by.id('tick-medium'));
    };

    this.Next = function() {
        return element.all(by.css('[ng-click="vm.applyUsageModifier()"]'));
    };

    this.chooseItem2 = function() {
        return element.all(by.repeater('item in vm.currentFollowUp.answers')).get(0);
    };

    this.Done = function() {
        return element(by.buttonText("done"));

    };

    this.Watchingvideos = function() {
        return element.all(by.repeater('item in vm.behaviorData')).get(5);
    };

    this.chooseItem = function() {
        return element.all(by.id('tick-medium'));
    };

    this.Next = function() {
        return element.all(by.css('[ng-click="vm.applyUsageModifier()"]'));
    };

    this.chooseItem2 = function() {
        return element.all(by.repeater('item in vm.currentFollowUp.answers')).get(1);
    };

    this.Done = function() {
        return element(by.buttonText("done"));

    };
    this.ShowMePhones = function() {
        return element.all(by.buttonText("Show me phones"));

    };

    this.ChooseCarrier = function(){
      return element(by.css('[href="#/results/tmobile"]'));

    };

    this.AllSizes = function(){
      return element.all(by.buttonText("All Sizes"));

    };

    this.smallSize = function(){
      return element(by.css('[data-g-label="Small"]'));

    };
    this.startOver = function(){
      return element(by.css('[ng-click="vm.startStoryOver()"]'));
    };

};
module.exports = new androidPage;
