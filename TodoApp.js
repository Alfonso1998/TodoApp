/*DARK THEME*/

const Luna = document.getElementById("Moon");
const Sole = document.getElementById("Sun");
const Dark = document.body;

Luna.addEventListener("click", () => {
    Luna.classList.add("Luna");
    Sole.classList.add("Sole");
    Sole.classList.remove("Sun");
    Dark.classList.add("Dark");

})

Sole.addEventListener("click", () => {
    Luna.classList.remove("Luna");
    Sole.classList.remove("Sole");
    Sole.classList.add("Sun");
    Dark.classList.remove("Dark");

})

/*ELEMENTI PER SCRIVERE, SALVARE TODO*/
let Lista = document.getElementById("listaTodo");
let Todo = document.getElementById("cerca");
let NumeroTodo = document.getElementById("nTodo");
const Tutti = document.getElementById("tutti");
const Attivi = document.getElementById("attivi");
const Completati = document.getElementById("completati");
const Pulisci = document.getElementById("clean");




function CreaTodo() {
    Todo.addEventListener("keyup", (e) => 
    {

        if (e.which == 13 && Todo.value != "") 
        {
            let NuovoEl = document.createElement("li");
            let NuovoTodo = document.createElement("p");
            let CheckButton = document.createElement("input");
            CheckButton.setAttribute("type", "checkbox");
            NuovoTodo.innerHTML = Todo.value;
            Lista.appendChild(NuovoEl);
            NuovoEl.appendChild(CheckButton);
            NuovoEl.appendChild(NuovoTodo);
            Todo.value = "";
            NumeroTodo.innerHTML = Lista.childElementCount + " " + "items";
            CheckButton.addEventListener("click", () => {
                CheckButton.checked == true;
                if (CheckButton.checked == true) {
                    NuovoTodo.style.textDecorationLine = "line-through";

                } else {
                    NuovoTodo.style.textDecorationLine = "none";

                }
            })
            Attivi.addEventListener("focus", () =>
             {
                if (CheckButton.checked == true) {
                    NuovoEl.style.display = "none";


                } else {
                    NuovoEl.style.display = "flex";
                }



                Tutti.addEventListener("click", () => {
                    NuovoEl.style.display = "flex";
                })



                Completati.addEventListener("focus", () => {
                    if (CheckButton.checked == false) {
                        NuovoEl.style.display = "none";


                    } else {
                        NuovoEl.style.display = "flex";
                    }
                })
                Pulisci.addEventListener("click", () => {
                    if (CheckButton.checked == true) {
                        Lista.removeChild(NuovoEl);
                        NumeroTodo.innerHTML = Lista.childElementCount + " " + "items";
                        
                    }
                })

             
               

            })
        }

    })

}

CreaTodo();











