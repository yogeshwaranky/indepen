var h1=document.getElementById("demo");           //created an h1 tag with the id named demo
h1.innerText="Countdown Starts";                  //inserted a text with an element
addEventListener("load",()=>{                     //on load is given which loads every other files and finally displays the countdown from 10 to 1 and displays happy independence day
    setTimeout(()=>{
        h1.innerText="10"
    setTimeout(()=>{
        h1.innerText="9"
    setTimeout(()=>{
        h1.innerText="8"
    setTimeout(()=>{
        h1.innerText="7"
    setTimeout(()=>{
        h1.innerText="6" 
    setTimeout(()=>{
        h1.innerText="5"
    setTimeout(()=>{
        h1.innerText="4"
    setTimeout(()=>{
        h1.innerText="3"
    setTimeout(()=>{
        h1.innerText="2"
    setTimeout(()=>{
        h1.innerText="1"
    setTimeout(()=>{
        h1.innerText="Happy Independence Day!!!"
    },2000)        
    },1000)                                
    },1000)     
    },1000)      
    },1000)  
    },1000)     
    },1000)
    },1000)
    },1000)
    },1000)
    },1000)                            // The second parameter in the setTimeout function displays in browser page after each seconds.
    
})

