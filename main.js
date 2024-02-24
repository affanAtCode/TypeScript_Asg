// Task 01) Sucessfully installed Node, TypeScript& VS-Code on my device.
// Task o2) Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var my_Name = "Affan";
console.log("Task 01");
console.log("Hello ".concat(my_Name, ", would you like to learn some Python today?"));
// Task 03) Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log(" ");
console.log("Task 02");
var my_Name1 = "aFFaN tAhIr ahMed";
console.log("LowerCase: " + my_Name1.toLowerCase());
console.log("UpperCase: " + my_Name1.toUpperCase());
var title_Case1 = my_Name1.split(" ");
// Method #01
console.log(" ");
console.log("Method 1) TitleCase:");
title_Case1.forEach(function (element) {
    console.log(element.charAt(0).toUpperCase() + element.slice(1).toLowerCase());
});
// Method #02
console.log(" ");
var title_Case2 = title_Case1.map(function (element) {
    return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}).join(" ");
console.log("Method 2) TitleCase: " + title_Case2);
