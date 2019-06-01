import { Tab } from "./tabs.js";
import { Clock } from "./clock.js";
import { Stopwatch } from "./stopwatch.js";

const tabs = new Tab();
const clock = new Clock();
const stopwatch = new Stopwatch();
tabs.initTabs();
clock.initClock();
stopwatch.initTimer();
