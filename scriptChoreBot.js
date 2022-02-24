//Troubleshooting - The open door images don't come up right on the first go around

let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
const startButton = document.getElementById('start');
let currentlyPlaying = true;


const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
const closeDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

let isBot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
};

let isClicked = (door) => {
  if (door.src === closeDoorPath) {
    return false;
  } else {
    return true;
  }
};

let playDoor = (door) => {
  numClosedDoors -= 1;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver();
  }
};


let randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor == 0) {
    openDoor1 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  } else if (choreDoor == 1) {
    openDoor2 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  } else {
    openDoor3 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor1 = beachDoorPath;
  }
};


doorImage1.onclick = () => {
  if (!isClicked(doorImage1) && currentlyPlaying) { 
  doorImage1.src = openDoor1;
  playDoor(doorImage1);
}
};

doorImage2.onclick = () => {
  if (!isClicked(doorImage2) && currentlyPlaying) {
  doorImage2.src = openDoor2;
  playDoor(doorImage2);
}
};

doorImage3.onclick = () => {
  if (!isClicked(doorImage3) && currentlyPlaying) {
  doorImage3.src = openDoor3;
  playDoor(doorImage3);
}
};


startButton.onclick = () => {
  if (!currentlyPlaying) {
    startRound();
  }
};

let startRound = () => {
  doorImage1.src = closeDoorPath;
  doorImage2.src = closeDoorPath;
  doorImage3.src = closeDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
};

let gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game over! Play again?'
  }
  currentlyPlaying = false;
};

randomChoreDoorGenerator();
