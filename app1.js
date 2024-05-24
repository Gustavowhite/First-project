const displey = document.querySelector(".display");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botpres = boton.textContent;
        
        if (boton.id === "ce"){
            displey.textContent = "0";
            return;
        }
        
        if (boton.id === "delete1"){
            if(displey.textContent.length === 1 || displey.textContent === "wrong number1"){
               displey.textContent = "0";  
            } else {
                displey.textContent = displey.textContent.slice(0, -1);  
            }
            return;    
        }
        
        if (boton.id === "igual"){
            try {
                displey.textContent = eval(displey.textContent);
            } catch {
                displey.textContent = "wrong number2";
            }
            return; 
        }
        
        if (displey.textContent === "0" || displey.textContent === "wrong number3"){
            displey.textContent = botpres;
            
        } else {
            displey.textContent += botpres;
        }
    });
})