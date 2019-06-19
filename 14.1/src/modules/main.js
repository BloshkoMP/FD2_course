import { Tab } from "./tabs.js";
import { Clock } from "./clock.js";
import { Timer } from "./timer.js";
import { Stopwatch } from "./stopwatch.js";

new Tab();
new Clock();
const timer = new Timer();
const stopwatch = new Stopwatch();

timer.showInfo();
stopwatch.showInfo();
