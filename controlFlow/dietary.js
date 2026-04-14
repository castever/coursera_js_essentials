let userRole = "Enrolled Member";
let access;

// use a switch instead of if/else for simplicity and code readability
switch(userRole) {
    case "Employee":
        access = "Dietary Services";
        break;
    case "Enrolled Member":
        access = "Dietary Services and one-on-one interaction with a dietician";
        break;
    case "Subscriber":
        access = "Partial access to facilitate Dietary Services only";
        break;
    case "Non-Subscriber":
        access = "Enroll or subscribe first";
        break;
    default:
        access = "You are not authorized for any services";

}

console.log(access);
