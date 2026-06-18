function rectangleArea(width, height) {
  let area = width * height;
}
  console.log(rectangleArea(5, 7)) // Prints undefined


/*To pass back information from the function call, we use a 
return statement
Preview: Docs Functions are reusable pieces of code that perform tasks, process data, and possibly return values.
. */


//When a return statement is used in a function body, the execution of the function is stopped, and the code that follows it will not be executed.//

function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}
/*If an argument for width or height is less than 0, 
then rectangleArea() will return 'You need positive integers to calculate area!'. The second return statement — width * height — will not run.*/


////////Helper Functions////
//example:

function multiplyByNineFifths(number) {
  return number * (9/5);
};

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};

getFahrenheit(15); // Returns 59

/*
-getFahrenheit() is called with 15 passed as an argument.
-The code block inside of getFahrenheit() calls multiplyByNineFifths() and passes 15 as an argument.
-multiplyByNineFifths() takes the argument of 15 for the number parameter.
-The code block inside of multiplyByNineFifths() function multiplies 15 by (9/5), which evaluates to 27.
-27 is returned to the function call in getFahrenheit().
-getFahrenheit() continues to execute. It adds 32 to 27, which evaluates to 59.
-Finally, 59 is returned to the function call getFahrenheit(15).
*/




