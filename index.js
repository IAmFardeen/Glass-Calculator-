
let display = document.querySelector("input");

let buttons = document.querySelectorAll(".btn");

let array = Array.from(buttons);
let value= document.querySelector("input").value;
array.map(clicked);
array.map(press);


function clicked(button){
    button.addEventListener("click",function(e){
        
       switch(e.target.innerText){
        case "C":
            display.value="";
            break;
        case "=":
            display.value=eval(display.value);
            break;

        case "⬅":
            display.value=display.value.slice(0,-1);
            break;
            
           default:
            display.value+=e.target.innerText;

            
      }
      buttons.classList.add("pressed");
})
};

function press(button){
    button.addEventListener("keypress",function(e){
        console.log(e);
            console.log(e.key); 
            if(e.key.match(/[a-z]/i)){
                alert("This calculator does'nt work for alphabets");
                display.value="no alphabet please😋";
                e.preventDefault();
               }
               else if(e.code==="Backspace"){
                display.value=display.value.slice(0,-1);
              
               }
        switch(e.key){
            case "=":
               display.value=eval(display.value);
               break;

            default:
             display.value+=e.key;
        }   
      
             
        
    })


};
