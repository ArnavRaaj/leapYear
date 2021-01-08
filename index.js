var readlineSync = require("readline-sync");
var chalk = require("chalk");


// welcoming the user

var userName = readlineSync.question("Can I know your name please! \n");
console.log("Welcome! " + chalk.green.underline.bold.bgGrey(userName.toUpperCase()));
var dateOfBirth = readlineSync.question(("Please tell us the date of birth in following format") +
			chalk.bold(' DD/MM/YYYY: \n'));


// spliting the date input for taking out birth year.
dateOfBirth=setDate(dateOfBirth);
var [birthDay,birthMonth,birthYear]=dateOfBirth.toString().split("/");

 //function calling
leapYearCheck(birthYear);

// input date check.
function inputDateCheck(date){
  var [dayCheck,monthCheck,yearCheck]=date.toString().split("/")
  if(dayCheck < 1|| dayCheck > 31|| dayCheck == ""||
     monthCheck === null || monthCheck < 1 || monthCheck > 12|| monthCheck == "" ||
     yearCheck <1 || yearCheck > 2021 || yearCheck === null || yearCheck==""||

     isNaN(dayCheck) === true|| isNaN(monthCheck) === true|| isNaN(yearCheck)||
     (monthCheck==2 && dayCheck >=30))
     {
        return false;
     }
  else{ 
     return true;
     }
}


function setDate(dateOfBirth){
  var flag=false;
  do{
      flag=inputDateCheck(dateOfBirth)
      if(flag==false){
          console.log(chalk.red.bgWhite.bold("\nInvalid date input. Please enter date in specified date format.\n"))
          dateOfBirth = readlineSync.question(chalk.white.bgGrey.bold("Enter your date of birth in above mentioned format: \n"));
      }
    }
  while(flag == false);
  return dateOfBirth;
}



function leapYearCheck(year){
  if(( year%400 == 0) ||(year%4 == 0 && year%100 != 0)){
    console.log(chalk.bold("\n"+userName.toUpperCase())+ ", you were " + chalk.green.underline.bold.bgGrey("born in a leap year."));
  } 
  else{
    console.log(chalk.bold("\n"+userName.toUpperCase())+ ", you were " + chalk.red.underline.bold.bgGrey("not born in a leap year."));
  }
}
console.log(chalk.yellowBright.underline.bold("\n Feel free to share this with your friends & family :P"));