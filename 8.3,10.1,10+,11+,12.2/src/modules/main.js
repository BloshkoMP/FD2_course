import { Tab } from "./tabs.js";
import { Clock } from "./clock.js";
import { StopWatchTimer } from "./stopwatchTimer.js";

const tabs = new Tab();
const clock = new Clock();
const stopwatch = new StopWatchTimer();
const timer = new StopWatchTimer();

tabs.initTabs();
clock.initClock();
stopwatch.init("stopwatch", 0);
timer.init("timer", 300);
