describe("Testing Pick my android page", function() {  //onaj describe blok pre ovog sam ti izbrisala jer nije trebao

        var androidPage = require("./androidPage.js");
        var androidActions = require("./androidActions.js");

        it("Ought to go to pick my android page", function() {
            browser.get("https://whichphone.withgoogle.com/#/");
        });

        it("Should click on Get started", function() {
            console.log("Click on Get started");
            androidActions.clickGetStarted();
        });

        it("Should open How often do you take photos?", function() {
            console.log("Click taking photos, open how often do you take photos");
            androidActions.clickTakingPhotos();
        });

        it("Should click on about 20 a week", function() {
            console.log("Click on about 20 a weeek");
            androidActions.clickChooseItem();

        });

        it("Should open next choose page", function() {
            console.log("Opens next choose page");
            androidActions.clickNext();
            browser.sleep(1000);
        });

        it("Should check Awesome selfie...", function() {
            console.log("cheking items");
            androidActions.clickChooseItem2();
            browser.sleep(1000);
        });

        it("Should mark Taking Photos", function() {
            console.log("Marking Taking photos");
            androidActions.clickDone();
            browser.sleep(1000);
        });

        it("Should open Gaming", function() {
            console.log("Click Gaming");
            androidActions.clickGaming();
            browser.sleep(1000);

        });

            it("Should click on 1-2 hours a day", function() {
                console.log("Click on 1-2 hours a day");
                androidActions.clickChooseItem();

        });

        it("Should open next choose page", function() {
            console.log("Opens next choose page");
            androidActions.clickNext();
            browser.sleep(1000);

        });

        it("Should check No idea", function() {
            console.log("cheking items");
            androidActions.clickChooseItem2();
            browser.sleep(1000);
        });

        it("Should mark Gaming", function() {
            console.log("Marking Gaming");
            androidActions.clickDone();
            browser.sleep(1000);
        });

        it("Should open Watchingvideos", function() {
            console.log("Click Watchingvideos");
            androidActions.clickWatchingvideos();
            browser.sleep(1000);

        });

        it("Should click on 2 hours a day", function() {
            console.log("Click on 2 hours a day");
            androidActions.clickChooseItem();

    });

    it("Should open next choose page", function() {
        console.log("Opens next choose page");
        androidActions.clickNext();
        browser.sleep(1000);

    });

    it("Should check Streaming videos, Youtube", function() {
        console.log("cheking items");
        androidActions.clickChooseItem2();
        browser.sleep(1000);
    });

    it("Should mark Watchingvideos", function() {
        console.log("Marking Watchingvideos");
        androidActions.clickDone();
        browser.sleep(3000);
    });

    it("Should Display Carriers", function() {
        console.log("Display Phones");
        androidActions.clickShowMePhones();
        browser.sleep(3000);
    });

    it("Should chooseCarrier", function() {
        console.log("chooseCarrier");
        androidActions.clickChooseCarrier();
        browser.sleep(3000);

    });

    it("Should click on All Sizes", function(){
      console.log("Click All Sizes");
      androidActions.clickAllSizes();
      browser.sleep(3000);

    });

    it("Should show only Small phones", function(){
      console.log("Show only Small phones");
      browser.sleep(1000);
      androidActions.clicksmallSize();
    });

    it("Should return to default", function(){
      console.log("Should return to default");
      androidActions.clickstartOver();
      browser.sleep(2000);
    });






      /*  it("Should click on Get started", function() {   // ovaj deo izbirisi, i nastavi dalje da radis
            console.log("Click on Get started");
            element(by.buttonText("Get started")).click();
        });*/

      /*  it("Should open How often do you take photos?", function() {
            console.log("Click taking photos, open how often do you take photos");
              androidActions.clickTakingPhotos();
        });

        it("Should click on about 20 a week", function() {
            console.log("Click on about 20 a weeek");
            androidActions.clickChooseItem();
        });

        it("Should open next choose page", function() {
            console.log("Opens next choose page");
            androidActions.clickNext();
        });

        it("Should check Awesome selfie...", function() {
            console.log("cheking items");
            androidActions.clickChooseItem2();
        });

        it("Should mark Taking Photos", function() {
            console.log("Marking Taking photos");
            androidActions.clickDone();
        });*/


});
