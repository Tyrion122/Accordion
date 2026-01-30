let TextContent = [
    document.getElementById("IdText1"),
    document.getElementById("IdText2"),
    document.getElementById("IdText3"),
    document.getElementById("IdText4")
];

let AllButtons = [
    document.getElementById("IdButton1"),
    document.getElementById("IdButton2"),
    document.getElementById("IdButton3"),
    document.getElementById("IdButton4"),
];

AllButtons.forEach((button, index)=>{
    button.addEventListener("click", () => ShowText(index))
});

function ShowText(index){
        TextContent.forEach((text) =>{
        text.hidden = true;
    });
    TextContent[index].hidden = false;
};
