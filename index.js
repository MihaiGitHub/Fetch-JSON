"use strict";
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"]
    .get(url)
    .then(function (response) {
    console.log(response.data);
})
    .catch(function (error) { return console.log(error); });
