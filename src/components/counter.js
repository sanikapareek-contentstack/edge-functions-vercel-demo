import { generateUniqueId } from "../generateUniqueId.js";
let i=0;
class Counter{
    constructor(){
        this.count=0;
        this.uniqueId=generateUniqueId(i.toString());
        i++;
    }

    increment(){
        this.count=this.count+1;
        this.updateValue();
    }

    decrement(){
        this.count=this.count-1;
        this.updateValue();
    }

    updateValue(){
        const counterValue=document.getElementById(this.uniqueId);
        counterValue.innerText=`Count: ${this.count}`;
    }

    render(){
        const counterContainer=document.createElement("div");
        const counterHeading=document.createElement("h1");
        const counterValue=document.createElement("p");
        const incrementButton=document.createElement("button");
        const decrementButton=document.createElement("button");

        counterHeading.innerText="Counter Component";
        counterValue.innerText=`Count: ${this.count}`;
        incrementButton.innerText="+";
        decrementButton.innerText="-";

        counterContainer.classList.add("counterContainer");
        counterHeading.classList.add("counterHeading");
        counterValue.id=this.uniqueId;
        incrementButton.id="incrementBtn";
        decrementButton.id="decrementBtn";

        counterContainer.appendChild(counterHeading);
        counterContainer.appendChild(counterValue);
        counterContainer.appendChild(incrementButton);
        counterContainer.appendChild(decrementButton);

        incrementButton.addEventListener('click',this.increment.bind(this));
        decrementButton.addEventListener('click',this.decrement.bind(this));

        return counterContainer;
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

export{Counter}