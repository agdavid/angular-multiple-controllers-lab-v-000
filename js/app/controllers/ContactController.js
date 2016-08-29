function ContactController() {

  var vm = this;

  this.name = 'Bill Gates'
  this.email = 'bill@microsoft.com'
  this.phone = '555-1234'

  this.changeName = function() {
    vm.name = 'Something else!'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);