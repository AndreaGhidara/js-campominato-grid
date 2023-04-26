const container = document.querySelector(".container");
const btnCreateTable = document.querySelector("#createTable");
const levelDifficuly = document.querySelector("#difficultyLevel");

let difficulty;

function clicked(box) {
    box.classList.add("blue");
}



btnCreateTable.addEventListener("click", function(){

    difficulty = levelDifficuly.value;

    if (difficulty == 1) {
        difficulty = 100;
    }
    
    if (difficulty == 2) {
        difficulty = 81;
    }

    if (difficulty == 3) {
        difficulty = 49;
    }

    for (let i = 1; i < difficulty + 1; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.innerText = i;
        if (difficulty == 100) {
            square.classList.add("easySquere");
        }
        if (difficulty == 81) {
            square.classList.add("mediumSquere");
        }
        if (difficulty == 49) {
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

