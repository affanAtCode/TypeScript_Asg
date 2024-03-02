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
// Task 04) Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks: Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log(" ");
console.log("Task 04");
console.log("Robin Waldo Emerson once said, \"Do not go where the path may lead, go instead where there is no path and leave a trail.\" ");
// Task 05) Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
console.log(" ");
console.log("Task 05");
var famous_person = "Robin Waldo Emerson";
var message = "\"Do not go where the path may lead, go instead where there is no path and leave a trail.\"";
console.log("".concat(famous_person, " once said, ").concat(message));
// Task 06) Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
console.log(" ");
console.log("Task 06");
var name_1 = "\t Aqib Ayoub \n";
console.log("Name with white space: ".concat(name_1));
console.log("Name after stripping the whitespace: ".concat(name_1.trim()));
// Task 07& 08) Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
//You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
console.log(" ");
console.log("Task 07& 08");
console.log(1 + 7);
console.log(19 - 11);
console.log(2 * 4);
console.log(96 / 12);
// Task 09) Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
console.log(" ");
console.log("Task 09");
var favoriteNumber = 25;
var message_1 = "My favorite number is: ".concat(favoriteNumber);
console.log(message_1);
// Task 10) Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
console.log(" ");
console.log("Task 10");
console.log("already added comments in every program");
// Task 11) Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
console.log(" ");
console.log("Task 11");
var names = ["Nawaz", "Abdul Jabbar", "Haris", "Muddassir", "Saad", "Taha"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
// Task 12) Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log(" ");
console.log("Task 12");
var message_2 = "Bhai kya haal hai?";
for (var index = 0; index < names.length; index++) {
    console.log("Or ".concat(names[index], " ").concat(message_2));
}
// Task 13) Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
console.log(" ");
console.log("Task 13");
var myArray = ["Honda Kawasaki", "Rolce Royce Phantom 8", "Nissan GT-R", "Lamborghini", "Ferrarri"];
var message_3 = "I would like to own a";
for (var index = 0; index < myArray.length; index++) {
    console.log("".concat(message_3, " ").concat(myArray[index]));
}
