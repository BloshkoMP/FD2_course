import { Tab } from "./tabs.js";
import { Clock } from "./clock.js";
import { Timer } from "./timer.js";
import { Stopwatch } from "./stopwatch.js";

new Tab();
new Clock();
const timer = new Timer("timer", 300);
const stopwatch = new Stopwatch("stopwatch", 0);

timer.showInfo();
stopwatch.showInfo();
