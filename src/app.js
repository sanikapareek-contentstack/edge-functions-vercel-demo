import { Counter } from "./components/counter.js";
import { Timer } from "./components/timer.js";

const counter1=new Counter();
counter1.mount(document.getElementById("root"));

const counter2=new Counter();
counter2.mount(document.getElementById("root"));

const timer1=new Timer();
timer1.mount(document.getElementById("root"));

const timer2=new Timer();
timer2.mount(document.getElementById("root"));