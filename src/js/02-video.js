import Player from "@vimeo/player";
import throttle from "lodash.throttle";
const KEY_TIME = "videoplayer-current-time";
 const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
player.on('timeupdate', throttle(onTimeupdate, 1000));
function onTimeupdate(event) {
    const currentTime = event.seconds;
    localStorage.setItem(KEY_TIME,JSON.stringify(currentTime));
};
player.setCurrentTime(JSON.parse(localStorage.getItem(KEY_TIME)) || 0);

// console.log(onTimeupdate)