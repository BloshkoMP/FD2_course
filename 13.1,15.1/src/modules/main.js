import { Tab } from "./tabs.js";
import { Clock } from "./clock.js";
import { Timer } from "./timer.js";
import { Stopwatch } from "./stopwatch.js";

const tabs = new Tab();
const clock = new Clock();
const timer = new Timer();
const stopwatch = new Stopwatch();

tabs.initTabs();
clock.initClock();
timer.showInfo();
stopwatch.showInfo();
