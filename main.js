//Initiliazing variables for random racenumber, boolean value and number
let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 28;

//conditional statement that checks whether the runner is adult and registered early
if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

//conditional statement for adults and young runners on what time they can race and their race number if they registered early or not
if (runnerAge > 18 && registeredEarly) {
  console.log(`Your racenumber is ${raceNumber}, Early adults run at 9:30 am.`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`Your racenumber is ${raceNumber}, Late adults run at 11:00am.`);
} else if (runnerAge < 18) {
  console.log(
    `Your racenumber is ${raceNumber}, Youth registrants run at 12:30pm.`
  );
} else {
  console.log("Please go to the registration desk, thank you!");
}
