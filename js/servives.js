angular.module('demoApp')
.factory('Phone', function(){
  return function Phone(name) {
    this.name = name;
    this.id = name.toLowercase().replace(' ', '-');
    //this.age
    //this.imageUrl
    //this.snippet
  }
})
