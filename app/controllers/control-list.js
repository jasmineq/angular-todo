"use strict";

/*

    handle data and functionality needed in list.html
    using todoFactory and userFactory to interact with the database

 */

 //$scope is like require but its called injecting

app.controller("listCtrl", function($scope, todoFactory, userFactory) {

    $scope.tasks = [];

    const showAllTasks = function() {
        console.log("showAllTasks");
        todoFactory.getAllTasks()
        .then((tasks) => {
            console.log("showAllTasks from promise", tasks);
            $scope.tasks = tasks;
        });
    };


    const deleteTask = function() {

    };


    const toggleDoneTask = function() {

    };

    showAllTasks();

});
