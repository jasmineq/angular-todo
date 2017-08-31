"use strict";

/*

    provide the basic crud interactions with firebase

*/

app.factory("todoFactory", function($q, $http, FBCreds) {

  const getAllTasks = function() {
    let tasks = [];
    return $q((resolve, reject) => {
        $http.get(`${FBCreds.databaseURL}/items.json`)
        .then((itemObject) => {
            let itemCollection = itemObject.data;
            console.log('itemCollection', itemCollection);
            Object.keys(itemCollection).forEach((key) => {
              itemCollection[key].id = key;
              tasks.push(itemCollection[key]);
            });
            resolve(tasks);
        })
            .catch((error) => {
              reject(error);
            });
    });
  };
//$q automatically returns a promise, may remove this return in future
// in Firebase, setup in github

  const addTask = function() {

  };

  const editTask = function() {

  };

  const deleteTask = function() {

  };

  const getSingleTask = function(ItemId) {
    return $q((resolve, reject) => {
      $http.get(`${FBCreds.databaseURL}/items/${ItemId}.json`)
      .then((itemObj) => {
        resolve(itemObj.data);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };

  return {getAllTasks, addTask, editTask, deleteTask, getSingleTask};

});
