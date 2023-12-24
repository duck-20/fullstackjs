// console.log("Hello World!");//Console is a object and log represent a method. DOT(.) Allows us to call the methods or the data stored in the object
// console.warn("This is a warning");
// //used to show warning message;
// console.table({ name: "Ayush", gender: "Male" })
// //used to create a table
// // console.clear()
// //used to clear the console
// console.log("Hello");//clg can be used as shortcut for console.log

//Variables

// It is a box used to store our value.
//Psuedo Code
//(reserved keyword) (Variable name) (type of value)

//declaring variable
// let name;
// //Assigning Value to variable
// FirstName = "Duck";
// console.log(FirstName);


//challenges
// let name = "Ayush Pakhrin";
// let whatDoYouWannaBecomeInYourLife = "Programmer";
// let gender = "Male";
// let twitterHandle = 50;
// console.log(name, whatDoYouWannaBecomeInYourLife, gender, twitterHandle);

//Primitives data
/*
1.Number
    let num=1999;
    clg(num);
*/
// let num = 100.999;
// console.log(num);
// console.log(typeof num);
//basic math
// console.log(2 + 5);
// console.log(2 - 5);
// console.log(2 * 5);
// console.log(5 / 2);
// console.log(2 ** 2);

// let counter = 10;
// counter++;
// console.log(counter);
// counter--;
// console.log(counter);

//challenges
// let firstFavNum = 7;
// let secondFavNum = 9;
// console.log(firstFavNum + secondFavNum);
// console.log(firstFavNum - secondFavNum);
// console.log(firstFavNum * secondFavNum);
// console.log(firstFavNum / secondFavNum);
// console.log(firstFavNum % secondFavNum);
// console.log(firstFavNum ** secondFavNum);

//2.boolean->true || false
// let isTrue = NaN;
// let number = 10;

// console.log(number + undefined)//vari is just like a bulb it can be either true or false;
//falsy->false,0,null,undefined,-0,'',"",``,
// Truthy-> true,except falsy;

// let name = null;
// console.log(name)
//challenges
// let isJsProgramminLanguage = true;
// let isJsHard = false;
// let favNumb = 69;
// favNumb = favNumb + undefined;
// console.log(isJsProgramminLanguage);
// console.log(isJsHard);
// console.log(favNumb);

//comparison operators
// ->Relational operators
// ->Equality operators
//challenges
// let firstFavNumb = 55;
// let secondFavNumb = 5;
// console.log(firstFavNumb > secondFavNumb);
// console.log(firstFavNumb < secondFavNumb);
// console.log(firstFavNumb >= secondFavNumb);
// console.log(firstFavNumb <= secondFavNumb);
// console.log(firstFavNumb === secondFavNumb);
// console.log(firstFavNumb == secondFavNumb);
// console.log(firstFavNumb !== secondFavNumb);
// console.log(firstFavNumb != secondFavNumb);

//strings
// let name = "duck";
// let secondName = "Goose";
// //concat
// name += secondName;
// console.log(`${name} is nub.`);
// console.log(name.toLowerCase());
// console.log(name.toUpperCase());

// //slice
// console.log(name.slice(0, 4))
// console.log(name.slice(4))
// console.log(name.slice(1, 4));
// //split
// console.log(name.split("").join("-"));
// //includes
// console.log(name.includes('a'));
// console.log(name.includes('d'));
// //trim
// name="                          Ayush     "
// console.log(name.trim());
// let firstName = "Ayush";
// let lastname = "Pakhrin";
// let desc = `My name is ${firstName} ${lastname}.`
// console.log(desc);
//challenges
// let favActorFirstName = "Rajesh";
// let favActorLastName = "Hamal";
// let fullName = `${favActorFirstName} ${favActorLastName}`;
// let upperCase = fullName.toUpperCase();
// let message = `My favourite actor is ${fullName.toUpperCase()} & say something about your actor.`;
// message += "his best show is silicon Valley";
// console.log(message)
