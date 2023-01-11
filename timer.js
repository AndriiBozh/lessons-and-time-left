const time = document.querySelectorAll(".lessons-duration");
const timeLeftContainer = document.querySelector(".time-left");

const lessonsList = document.getElementsByClassName("lessons-item");

const lessonsLeftContainer = document.querySelector(".lessons-left");

let indexOfCurrentlyPlayingItem = [...lessonsList]
  .map((el, i) => el.classList.contains("lessons-item_active") && i)
  .filter((el) => typeof el === "number");

const timeInFormatOfStrings = [...time]
  .slice(indexOfCurrentlyPlayingItem)
  .map((el) => el.innerText);
// const timeSplittedStr = timeInFormatOfStrings.map((el) => el.split(":"));
// const timeNum = timeSplittedStr.map((el) => el.map((str) => +str));
// the above two lines written in one line:
const timeValues = timeInFormatOfStrings.map((el) => el.split(":").map(Number));

const hours = timeValues.map((el) => el[0]).reduce((a, b) => a + b, 0);
const mins = timeValues.map((el) => el[1]).reduce((a, b) => a + b, 0);
const seconds = timeValues.map((el) => el[2]).reduce((a, b) => a + b, 0);

const timeInSeconds = hours * 3600 + mins * 60 + seconds;

const hoursLeft = Math.floor(timeInSeconds / 3600);
const minutesLeft = Math.floor((timeInSeconds % 3600) / 60);
const secondsLeft = timeInSeconds % 60;

lessonsLeftContainer.innerText = timeInFormatOfStrings.length;

timeLeftContainer.innerText = `${
  hoursLeft < 10 ? "0" + hoursLeft : hoursLeft
} : ${minutesLeft < 10 ? "0" + minutesLeft : minutesLeft} : ${
  secondsLeft < 10 ? "0" + secondsLeft : secondsLeft
}`;
