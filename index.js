'use strict'

// var toJadenCase = function () {
        //     let str = "How can mirrors be real if our eyes aren't real";
        //     let newStr = str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
        //     console.log(newStr);
        // };

        // toJadenCase()

    String.prototype.toJadenCase = function () {
        return this.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
    };
    str = "How can mirrors be real if our eyes aren't real";
    console.log(str.toJadenCase())