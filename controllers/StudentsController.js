signIn.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory){
    $scope.students =[{name: "Barack Obama", signIn: false}, {name: "Hillary Clinton", signIn: false}, {name: "Micheal Kaiser", signIn: false}, {name: "Micheal Jackson", signIn: false}, {name: "Taylor Swift", signIn: false}, {name: "Lady Gaga", signIn: false}];
    $scope.StudentsFactory= StudentsFactory;
});
