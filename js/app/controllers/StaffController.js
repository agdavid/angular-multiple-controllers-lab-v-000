function StaffController() {
  this.name = 'Steve Jobs'
  this.email = 'steve@apple.com'
  this.phone = '555-4321'
}

angular
  .module('app')
  .controller('StaffController', StaffController);