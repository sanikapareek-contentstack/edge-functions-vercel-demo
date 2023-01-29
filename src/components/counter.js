class Counter{
    constructor(){
        this.count=0;
    }

    increment(){
        this.count=this.count+1;
    }

    decrement(){
        this.count=this.count-1;
    }

    updateValue(){
        const counterValue=document.getElementById();
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
        counterValue.id="counterValue";
        incrementButton.id="incrementButton";
        decrementButton.id="decrementButton";

        counterContainer.appendChild(counterHeading);
        counterContainer.appendChild(counterValue);
        counterContainer.appendChild(incrementButton);
        counterContainer.appendChild(decrementButton);

        return counterContainer;
    }

    mount(el){
        if(el){
            return el.appendChild(this.render());
        }
        return document.body.appendChild(this.render());
    }
}

export{Counter}