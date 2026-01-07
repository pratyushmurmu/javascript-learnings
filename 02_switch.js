//switch (key) {
  //  case value:
        
    //    break;

    //default:
      //  break;
//}

// Syntax for switch statement in JavaScript

const month = "mar";
switch (month) {
    case "jan":
        console.log("January");
        break;
case "feb":
    console.log("February");
        break;
        case "mar":
            console.log("March");
            break;
            case "apr":
                console.log("April");
                break;
default:
    console.log("default case match");
    
        break;
}
// Output: March // (for with break after case 3)

// Output: March and April // (for without break after case 3)

// Output: March // (for with break after case "mar")

// Output: March and April // (for without break after case "mar")