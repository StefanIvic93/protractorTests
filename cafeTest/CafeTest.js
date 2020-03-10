describe("This should test site www.genius.com", function(){
    var CafePage = require ("./CafePage.js");
    var CafeActions = require ("./CafeActions.js");

it("Navigate to CAFE page", function(){
browser.get("http://cafetownsend-angular-rails.herokuapp.com/");
browser.sleep(2000);
});
it("Click on UserName", function(){
  console.log("click on UserName");
  CafeActions.clickUserName();
  browser.sleep(2000);

});

it("Click on Password", function(){
  console.log("click on Password");
  CafeActions.clickPassword();
  browser.sleep(2000);
});

it("Click on login", function(){
console.log("click on login");
CafeActions.clickLogIn();
browser.sleep(2000);

});

it("Click on create", function(){
  console.log("click on create");
  CafeActions.clickCreate();
  browser.sleep(5000);
});
it("Click on FirstName", function(){
  console.log("click on FirstName");
  CafeActions.clickFirstName();


});
it("click on LastName", function(){
  console.log("click on LastName");
  CafeActions.clickLastName();


});

it("click on StartDate", function(){
  console.log("click on StartDate");
  CafeActions.clickStartDate();

});
it("click on Email", function (){
  console.log("click on Email");
  CafeActions.clickEmail();
browser.sleep(2000);
});

it("click on Add", function(){
  console.log("click on Add");
  CafeActions.clickAdd();
  browser.sleep(10000)

});

it("click on first emp", function(){
  console.log("click on emp");
  CafeActions.clickFirstE();
  browser.sleep(8000);

});

it("click on edit", function(){
  console.log("click on edit");
  CafeActions.clickEdit();
  browser.sleep(5000);

});

it("clear", function (){
  CafePage.FirstName().clear();
  browser.sleep(4000);

});
it("edit FirstName", function(){
  console.log("edit FirstName");
  CafeActions.clickEditFirstName();
  browser.sleep(5000);

});

it("click on update", function(){
  console.log("click on update");
  CafeActions.clickUpdate();
  browser.sleep(5000);
});
it("should click on first", function(){
  console.log("click on first emp");
  CafeActions.clickFirstEmp();
  browser.sleep(5000);

});

it("click on delete", function (){
  console.log("click delete");
  CafeActions.clickDelete();
  CafeActions.alertBox();
  browser.sleep(5000);
});
it("click on logout", function(){
  console.log("click log");
  CafeActions.clickLogOut();
  browser.sleep(3000);
});

});
