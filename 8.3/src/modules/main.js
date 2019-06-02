import { Tab } from "./tabs.js";
import { Clock } from "./clock.js";
import { Stopwatch } from "./stopwatch.js";
import { Timer } from "./timer.js";

const tabs = new Tab();
const clock = new Clock();
const stopwatch = new Stopwatch();
const timer = new Timer();
tabs.initTabs();
clock.initClock();
stopwatch.initStopwatch();
timer.initTimer();
