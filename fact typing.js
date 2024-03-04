// let words = [
//   "Hi i like HTML",
//   "I also like css",
//   "Lorem ipsum dolor sit amet",
//   "consectetur adipiscing elit",
//   "sed do eiusmod tempor incididunt"
// ],
let part,
  i = 0,
  offset = 0,
  len = 5,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 70;
export const wordFlick = function (words) {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    document.querySelector(".word").textContent = part;
  }, speed);
};

// $(document).ready(function () {
//   wordFlick();
// });