function ContactController() {

  var vm = this;

  this.name = 'Bill Gates'
  this.email = 'bill@microsoft.com'
  this.phone = '555-1234'

  this.newName = '';

  this.changeName = function(name) {
    vm.name = name;
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);