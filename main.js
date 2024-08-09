const value_input = document.getElementById("value-input");
const section_status = document.getElementById("section-status");
const cash_register = document.getElementById("cash_register");
const purchase_btn = document.getElementById("purchase-btn");
const top_display_screen = document.getElementById("top-display-screen");

let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

let denominations = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];

// access to the value in a one array
const newArrCid = cid.flat();

//Top display screen
const total = document.createElement("p");
const textTotal = document.createTextNode(`Total: $${price}`);
total.appendChild(textTotal);
top_display_screen.appendChild(total);


// Change in drawer 
const change_in_drawer = document.createElement("p");
const text_change_in_drawer = document.createTextNode("Change in drawer:");
change_in_drawer.appendChild(text_change_in_drawer);
cash_register.appendChild(change_in_drawer);

// form change in 
for (let i = 0; i < newArrCid.length; i++){
    (cash_register.innerHTML += `
        <li>${newArrCid[i]}: $${newArrCid[i+1]}</li>    
    `)
    i++;
};

purchase_btn.addEventListener("click", () => {
    if (value_input.value < price){
       alert("Customer does not have enough money to purchase the item");
    }else{
        section_status.textContent = "";

        section_status.innerHTML += `<p>Status: OPEN</p>`;
    }
    value_input.value = '';
});

const section_status_result = (value) => {
    for (let i = 0; i < newArrCid.length; i++){
        if (value < newArrCid[i+1]){

        }
        
        (cash_register.innerHTML += `
            <li>${newArrCid[i]}: $${newArrCid[i+1]}</li>`)
    }
};