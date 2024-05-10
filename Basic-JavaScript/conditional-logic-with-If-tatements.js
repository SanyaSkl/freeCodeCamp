// test(true) returns the string It was true, and test(false) returns the string It was false.
//
//     When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not. Since it is true, the function returns It was true. When we call test with a value of false, myCondition is not true and the statement in the curly braces is not executed and the function returns It was false.
//
//     Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwiske.



function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if (wasThatTrue) {
        return "Yes, that was true"
    }
    return "No, that was false"


    // Only change code above this line

}

trueOrFalse(true)
trueOrFalse(false)