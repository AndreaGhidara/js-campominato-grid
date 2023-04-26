const container = document.querySelector(".container");
const btnCreateTable = document.querySelector("#createTable");


btnCreateTable.addEventListener("click", function(){
    for (let i = 1; i <= 100; i++) {
        let square = document.createElement("div")
        square.classList.add("square");
        square.innerText = i
        container.append(square)
        
        square.addEventListener("click", function(){
            square.classList.add("blue");
            console.log(i);
        })
    }
})




