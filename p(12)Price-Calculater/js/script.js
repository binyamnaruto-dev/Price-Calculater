let UserInput = document.querySelector('.User-Input-Price');
let Display = document.querySelector('.Display-Result');
let CalculateBtn = document.querySelector('.btn');
let ResetBtn = document.querySelector('.rbtn');
let Total;
// system function;

function TotalCalculation(params) {
    // this is based on roadmap.sh websit projuct is not comateble with orignal tax system;
    let Discount = 20;  
    let Tax = 15;
    Total = (Number(UserInput.value) - Discount) + Tax;
}

CalculateBtn.addEventListener('click' , () =>{
    TotalCalculation();
    Display.value = Total;  
});

ResetBtn.addEventListener('click' , () =>{
    Display.value = '';
    UserInput.value = '';
})

// Made by Binyam Naruto;