const container = document.querySelector(".grid-container");

const columnsInput = document.querySelector("#columns");
const rowsInput = document.querySelector("#rows");

const subBtn = document.querySelector('#submit-btn');
const clearBtn = document.querySelector('#clear-btn');

const colorSelect = document.querySelector('#color-select');

const randomCheck = document.querySelector('#random-colors-check');

makeSketch(16,16);

function makeSketch(rows, cols){
    container.style.setProperty('--columns',cols);
    container.style.setProperty('--rows', rows);

    for(let i=0; i<(cols*rows); i++){
        let newDiv = document.createElement("div");
        
        newDiv.addEventListener('mouseenter',function(){
            if(randomCheck.checked == true){
                let randomColour = Math.floor(Math.random() * 255).toString() + ','
                                + Math.floor(Math.random() * 255).toString() + ','
                                + Math.floor(Math.random() * 255).toString() 
                newDiv.style = "background-color:rgb("+randomColour+"); transition:all 0.1s;";
            }
            else
                newDiv.style = `background-color:${colorSelect.value}; transition:all 0.1s;`;

        })
        
        container.appendChild(newDiv);
    }
}

subBtn.addEventListener('click', () => {
    makeSketch(rowsInput.value,columnsInput.value);
    container.style.setProperty('--color',colorSelect.value);
});

clearBtn.addEventListener('click',() => {
    container.innerHTML = '';
    makeSketch(rowsInput.value,columnsInput.value);
});


