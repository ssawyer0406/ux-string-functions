/*
  String Function Exercises
*/

/* ------------------------------------------------
  Exercise One

  Check to see if the string is empty.  Return true or false.
*/

function isEmptyString(string) {
  let result;

  if (string.length > 0) {
    result = false;
  } else {
    result = true;
  }
  return result;
}

/* 
  -------TESTS---------------------------------------------------------------
  Run these commands to make sure you did it right. They should all be true.
*/
console.log("-----Tests for Exercise One-----");
console.log("* Check empty string");
console.log(isEmptyString("") === true);
console.log("* Check Hello!");
console.log(isEmptyString("Hello!") === false);
console.log("* Check for space character");
console.log(isEmptyString(" ") === false);

/* ------------------------------------------------
  Exercise Two

  Check to see if the text contains the phrase "java". Return true or false. 
  Remember that javascript is case sensitive! Your code should be case-insensitive, meaning that it works for "Java", "java", "JAVA", etc...
  
  Hint: indexOf is case sensitive! So how can you search for any possible case of java? 
  What if you made the entire text string lowercase? Then you searched through that?  
  Check out the Essential String Functions from the reading and see if there's a useful function there.
*/

function containsWordJava(text) {
  return text.toLowerCase().indexOf("java") > -1;
}

/* 
  -------TESTS---------------------------------------------------------------
  Run these commands to make sure you did it right. They should all be true.
*/
console.log("-----Tests for Exercise Two-----");
console.log("* Check message without word");
console.log(
  containsWordJava("Hello this is a message about coding.") === false
);
console.log("* Check message with word");
console.log(
  containsWordJava("Hello this is a message about javascript!") === true
);
console.log("* Check all caps message");
console.log(containsWordJava("JAVA IS FUN :D") === true);

/* ------------------------------------------------
  Exercise Three

  Given the text, the goal is to limit the number of characters to maxLength and add an ellipsis "..." to the end.
  Note that the length of the string should be maxLength including the ellipsis.  This means you'll have to subtract the lenght of the ellipsis fom the maxLength to know how many characters there should be.
  Hint: Look at the "slice" method.  You can set the first argument to zero to make it start at the beginning of the string.   (Watch out that slice returns a new string! You need to assign it to something)
*/

function trimSentence(text, maxLength) {
  let newLength = maxLength - 3;
  if (text.length > newLength) {
    return text.slice(0, newLength) + "...";
  }
  return text;
}

/* 
  -------TESTS---------------------------------------------------------------
  Run these commands to make sure you did it right. They should all be true.
*/
console.log("-----Tests for Exercise One-----");
console.log("* Check Long sentence");
console.log(
  trimSentence("The fox jumped over the fence to get to the farm.", 16) ===
    "The fox jumpe..."
);
console.log("* Check long word!");
console.log(
  trimSentence("supercalifragilisticexpialidocious", 20) ===
    "supercalifragilis..."
);
console.log("* Check for shorter than the limit");
console.log(trimSentence("Short", 16) === "Short");
/* ------------------------------------------------
  Exercise Four
  Given the text, the goal is to limit the number of characters to maxLength and add an ellipsis "..." to the end.
  Note that the length of the string should be maxLength including the ellipsis.  This means you'll have to subtract the lenght of the ellipsis fom the maxLength to know how many characters there should be.
  Hint: Look at the "slice" method.  You can set the first argument to zero to make it start at the beginning of the string.   (Watch out that slice returns a new string! You need to assign it to something)
*/
//

function trimSentence(text, maxLength) {
  let newLength = maxLength - 3;
  if (text.length > newLength) {
    return text.slice(0, newLength) + "...";
  }
  return text;
}

/* 
  -------TESTS---------------------------------------------------------------
  Run these commands to make sure you did it right. They should all be true.
*/
console.log("-----Tests for Exercise One-----");
console.log("* Check Long sentence");
console.log(
  trimSentence("The fox jumped over the fence to get to the farm.", 16) ===
    "The fox jumpe..."
);
