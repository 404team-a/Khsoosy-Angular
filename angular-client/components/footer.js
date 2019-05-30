angular.module('app')
.controller('footerCtrl', function() {
    console.log("helllo ")
})
.component('footer' ,{
    component:'footerCtrl',
    templateUrl : `/templates/footer.html` 
})