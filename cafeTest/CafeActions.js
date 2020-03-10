var CafePage = require ("./CafePage.js");

var CafeActions = function (){

this.clickUserName = function(){
  CafePage.UserName().sendKeys("Luke");
};

this.clickPassword = function(){
  CafePage.Password().sendKeys("Skywalker");
};
this.clickLogIn = function(){
  CafePage.LogIn().click();
};

this.clickCreate = function(){
  CafePage.Create().click();
};

this.clickFirstName = function(){
  CafePage.FirstName().sendKeys("Nikola");

};

this.clickLastName = function(){
  CafePage.LastName().sendKeys("Pavlovic");
};
this.clickStartDate = function(){
  CafePage.StartDate().sendKeys("2015-12-12");
};

this.clickEmail = function(){
  CafePage.Email().sendKeys("NikolaPavlovic@gmail.com")
};
this.clickAdd = function(){
  CafePage.Add().click();
};
this.clickFirstE = function(){
  CafePage.FirstE().click();
};
this.clickEdit = function(){
  CafePage.Edit().click();
};

this.clickEditFirstName = function(){
  CafePage.EditFirstName().sendKeys("Nikola");
};

this.clickUpdate = function (){
CafePage.Update().click();

};
this.clickFirstEmp = function(){
  CafePage.FirstEmp().click();
};

this.clickDelete = function(){
  CafePage.Delete().click();
};

this.alertBox = function(){
  var alertDialog = browser.switchTo().alert();
  alertDialog.accept();
};
this.clickLogOut = function(){
  CafePage.LogOut().click();
};
};


module.exports = new CafeActions;
