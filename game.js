//conect to html vars
const moneyHeading = document.querySelector("#money-heading");
const moneyBtn = document.querySelector("#money-btn");
const hireTaxBtn = document.querySelector("#hireTax-btn")
const hireTax10Btn = document.querySelector("#hireTax10-btn")
const collecterHeading = document.querySelector("#collecter-heading");
const saveBtn = document.querySelector("#save-btn")
const loadBtn = document.querySelector("#load-btn")
// game vars
let money = 0;
let taxCollecters = 0;
let Hire1cost = 10;
//Update UI
const updateUI = () => {
    moneyHeading.innerHTML = `Money: ${money}`;
    collecterHeading.innerHTML = `Tax Collecters: ${taxCollecters}`;
    hireTaxBtn.textContent = 'Hire tax collecter || ' + Hire1cost + ' money';
    hireTax10Btn.textContent = 'Hire 10 tax collecters || ' + Hire1cost * 10 + ' money';
}

//event listener for collect money button
moneyBtn.addEventListener("click", () => {
    money += 1;
    updateUI();
    
});
//hire tax collecter
hireTaxBtn.addEventListener("click", () => {
    if (money >= Hire1cost) {
        money -= Hire1cost;
        taxCollecters += 1;
        Hire1cost *= 1.2;
        Hire1cost = Math.round(Hire1cost);
    }
});
//hire 10 tax collecters
hireTax10Btn.addEventListener("click", () => {
    if (money >= Hire1cost * 10) {
        money -= Hire1cost * 10;
        taxCollecters += 10;
        Hire1cost *= 1.2;
        Hire1cost = Math.round(Hire1cost);
    }
});
saveBtn.addEventListener("click", () => {
    localStorage.setItem('money', money);
    localStorage.setItem('taxMen', taxCollecters);
});
loadBtn.addEventListener("click", () => {
    money = parseInt(localStorage.getItem('money'));
    taxCollecters = parseInt(localStorage.getItem('taxMen'));
});


//game loop
window.setInterval(() => {
    money += taxCollecters;
    
}, 1000);
window.setInterval(() => {
    updateUI();
    
}, 1);