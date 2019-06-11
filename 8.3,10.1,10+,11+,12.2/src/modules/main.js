import { Tab } from "./tabs.js";
import { Clock } from "./clock.js";
import { StopWatchTimer } from "./stopwatchTimer.js";

const tabs = new Tab();
const clock = new Clock();
const stopWatchTimer = new StopWatchTimer();

tabs.initTabs();
clock.initClock();
stopWatchTimer.init("stopwatch", 0);
stopWatchTimer.init("timer", 300);
