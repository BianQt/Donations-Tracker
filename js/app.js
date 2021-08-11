'use strict';



function getRandomAge(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

Donation.allDonations =[];

function Donation(name,amount,age){
    this.name = name;
    this.amount = amount;
    this.age = age;

    Donation.allDonations.push(this);
}

let form = document.getElementById('form');
form.addEventListener('submit', submittion);

function submittion(event){
    event.preventDefault();
let name = event.target.name.value;
let amount = event.target.amount.value;
let age = getRandomAge(20, 60);

new Donation(name,amount,age);
saveToLocalStorage();
location.reload();

}

function saveToLocalStorage(){
    localStorage.setItem('Donation',JSON.stringify(Donation.allDonations));
}


function tableRendering(){
let table = document.getElementById('table');
for (let i = 0; i < Donation.allDonations.length; i++) {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');

    table.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    td1.textContent = Donation.allDonations[i].name;
    td2.textContent = Donation.allDonations[i].amount;
    td3.textContent = Donation.allDonations[i].age;
}
}

let clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click',clearAll);

function clearAll(){
    localStorage.removeItem('Donation');
    location.reload();
}

function getFromLocalStorage() {
    let localStorageData = JSON.parse(localStorage.getItem('Donation'))
    if (localStorageData !== null){
    Donation.allDonations = localStorageData;
    }
    tableRendering();

}
getFromLocalStorage()