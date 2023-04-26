const container = document.querySelector(".container");
const btnCreateTable = document.querySelector("#createTable");
const levelDifficuly = document.querySelector("#difficultyLevel");

let difficulty;
let numberSquere;

function clicked(box) {
    box.classList.add("blue");
}


btnCreateTable.addEventListener("click", function(){

    container.innerHTML = "";

    difficulty = levelDifficuly.value;

    if (difficulty == 1) {
        numberSquere = 100;
    }
    
    if (difficulty == 2) {
        numberSquere = 81;
    }

    if (difficulty == 3) {
        numberSquere = 49;
    }

    for (let i = 1; i < numberSquere + 1; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.innerText = i;
        if (difficulty == 1) {
            square.classList.add("easySquere");
        }
        if (difficulty == 2) {
            square.classList.add("mediumSquere");
        }
        if (difficulty == 3) {
            square.classList.add("hardSquere");
        }
        container.append(square)
        
        square.addEventListener("click", function(){
            square.classList.add("blue");
            console.log(i);
        })
    }
})













//     difficulty = levelDificuly.value;
    
//     if (difficulty == 1 ) {
//         for (let i = 1; i <= 100; i++) {
//             let square = document.createElement("div");
//             square.classList.add("easySquere");
//             square.classList.add("square");
//             square.innerText = i
//             container.append(square)
            
//             square.addEventListener("click", function(){
//                 square.classList.add("blue");
//                 console.log(i);
//             })
//         }
//     }
    
//     if (difficulty == 2) {
//         for (let i = 1; i <= 81; i++) {
//             let square = document.createElement("div");
//             square.classList.add("mediumSquere");
//             square.classList.add("square");
//             square.innerText = i
//             container.append(square)
            
//             square.addEventListener("click", function(){
//                 clicked(square);
//                 console.log(i);
//             })
//         }
//     }

//     if (difficulty == 3) {
//         for (let i = 1; i <= 49; i++) {
//             let square = document.createElement("div");
//             square.classList.add("hardSquere");
//             square.classList.add("square");
//             square.innerText = i
//             container.append(square)
            
//             square.addEventListener("click", function(){
//                 square.classList.add("blue");
//                 console.log(i);
//             })
//         }
//     }
    
// })

