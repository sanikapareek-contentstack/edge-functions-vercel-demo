import { generateUniqueId } from "../generateUniqueId.js";
let i=0;
class Timer{
    constructor(){
        this.hour=0;
        this.min=0;
        this.sec=0;
        this.timer=null;
        this.uniqueId=generateUniqueId(i.toString());
        i++;
    }

    timer(){
        this.sec=this.sec+1;
        if(this.sec/60==1){
            this.min=this.min+1;
            this.sec=0;
        }
        if(this.min/60==1){
            this.hour=this.hour+1;
            this.min=0;
        }

    }

    startTimer(){

    }

    pauseTimer(){

    }

    resetTimer(){

    }

    render(){
        const timerContainer=document.createElement("div");
        const timerHeading=document.createElement("h1");
        const timerValue=document.createElement("p");
        const startButton=document.createElement("button");
        const pauseButton=document.createElement("button");
        const resetButton=document.createElement("button");

        timerHeading.innerText="Timer Component";
        timerValue.innerText="00:00:00";
        startButton.innerText="Start";
        pauseButton.innerText="Pause";
        resetButton.innerText="Reset";

        timerContainer.classList.add("timerContainer");
        timerHeading.classList.add("timerHeading");
        timerValue.id=this.uniqueId;
        startButton.id="startBtn";
        pauseButton.id="pauseBtn";
        resetButton.id="resetBtn";

        timerContainer.appendChild(timerHeading);
        timerContainer.appendChild(timerValue);
        timerContainer.appendChild(startButton);
        timerContainer.appendChild(pauseButton);
        timerContainer.appendChild(resetButton);

        return timerContainer;

    }

    mount(el){
        if(el){
            el.appendChild(this.render());
            return;
        }
        document.body.appendChild(this.render());
        return;

    }
}

export {Timer};