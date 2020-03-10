var CafePage = function(){

  this.UserName = function(){
return element(by.model("user.name"));

  };

this.Password = function(){
  return element(by.model("user.password"));

};

this.LogIn = function (){
  return element(by.buttonText("Login"));
};
this.Create = function(){
  return element(by.css('[ng-click="createEmployee()"]'));
};

this.FirstName = function(){
return element(by.model("selectedEmployee.firstName"));

};

this.LastName = function(){
  return element(by.model("selectedEmployee.lastName"));
};
this.StartDate = function(){
  return element(by.model("selectedEmployee.startDate"));
};
this.Email = function (){
  return element(by.model("selectedEmployee.email"));
};
this.Add = function (){
  return element(by.buttonText("Add"));
};
this.FirstE = function(){
  return element(by.css('[ng-click="selectEmployee(employee)"]'));
};
this.Edit = function(){
  return element(by.id("bEdit"));
};
this.EditFirstName = function(){
  return element(by.model("selectedEmployee.firstName"));
};
this.Update = function (){
  return element(by.buttonText("Update"));
};
this.FirstEmp = function(){
  return element(by.css('[ng-click="selectEmployee(employee)"]'));
};
this.Delete = function(){
  return element(by.id("bDelete"));
};
this.LogOut = function(){
  return element(by.buttonText("Logout"));
};


};


  module.exports = new CafePage;
