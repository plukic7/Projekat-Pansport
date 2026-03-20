const PRODUCT1_NAME = "100% Whey Protein Isolate";
const PRODUCT1_PRICE = 3500;
const PRODUCT1_QTY = 1;

const PRODUCT2_NAME = "100% Creatine Monohydrate";
const PRODUCT2_PRICE = 2400;
const PRODUCT2_QTY = 1;

const PRODUCT3_NAME = "BCAA XPress";
const PRODUCT3_PRICE = 3800;
const PRODUCT3_QTY = 1;

const CURRENCY = "RSD";

const VALID_COUPONS = ["SAVE10", "SAVE15", "FREESHIP"];

console.log(typeof PRODUCT1_NAME);
console.log(typeof PRODUCT1_PRICE);

function normalizeCoupon(code) {
  const trimmed = code.trim();
  const uppercase = trimmed.toUpperCase();
  return uppercase;
}

function isValidCoupon(code) {
  for (let i = 0; i < VALID_COUPONS.length; i++) {
    if (VALID_COUPONS[i] === code) {
      return true;
    }
  }
  return false;
}

function validateAndNotify() {
  const inputElement = document.getElementById('promo-input');
  const inputCode = inputElement.value;

  const normalizedCode = normalizeCoupon(inputCode);

  if (isValidCoupon(normalizedCode)) {
    if (normalizedCode === "SAVE10") {
      alert("Vaš kupon donosi 10% popusta.");
    } else if (normalizedCode === "SAVE15") {
      alert("Vaš kupon donosi 15% popusta.");
    } else if (normalizedCode === "FREESHIP") {
      alert("Vaš kupon donosi besplatnu dostavu.");
    }
  } else {
    alert("Uneti kod nije validan.");
  }
}

function login(email, password) {
  const trimmedEmail = email.trim();
  const trimmedPassword = password.trim();

  if (trimmedEmail === "admin" && trimmedPassword === "admin") {
    return true;
  } else {
    return false;
  }
}

let iznos = 0;

function dodajNaIznos(cena) {
  iznos += cena;
  console.log("Trenutni iznos: " + iznos + " " + CURRENCY);
}

dodajNaIznos(PRODUCT1_PRICE);
dodajNaIznos(PRODUCT2_PRICE);
dodajNaIznos(PRODUCT3_PRICE);

function openCart() {
  alert("Trenutni iznos porudžbine: " + iznos + " " + CURRENCY);
}

function handleLogin(event) {
  event.preventDefault();

  const emailElement = document.getElementById('email');
  const passwordElement = document.getElementById('password');

  const email = emailElement.value;
  const password = passwordElement.value;

  if (login(email, password)) {
    alert("Uspešno ste se prijavili!");
  } else {
    alert("Neispravna email adresa ili lozinka!");
  }
}

const allProducts = [
  { name: "100% Whey Protein Isolate", price: 3500, qty: 15 },
  { name: "100% Creatine Monohydrate", price: 2400, qty: 8 },
  { name: "BCAA XPress", price: 3800, qty: 12 },
  { name: "Hot Blood", price: 4000, qty: 5 },
  { name: "Black Blood", price: 3600, qty: 7 },
  { name: "Omega-3", price: 1500, qty: 20 },
  { name: "Vitamin C", price: 1000, qty: 25 },
  { name: "Magnesium Forte", price: 1200, qty: 18 },
  { name: "100% Whey Protein", price: 4300, qty: 9 },
  { name: "Power Creatine", price: 2500, qty: 6 }
];

function calculateTotalInventoryValue() {
  let totalValue = 0;

  for (let i = 0; i < allProducts.length; i++) {
    const product = allProducts[i];
    console.log('Proizvod:', product);
    totalValue += product.price * product.qty;
  }

  console.log("Ukupna vrednost lagera: " + totalValue + " RSD");
  return totalValue;
}

const lowStock = [];

for (let i = 0; i < allProducts.length; i++) {
  if (allProducts[i].qty < 10) {
    lowStock.push(allProducts[i]);
  }
}

console.log("Proizvodi sa niskim stanjem (qty < 10):");
console.log(lowStock);

function findProductByName(list, searchName) {
  const normalizedSearch = searchName.toLowerCase().trim();

  for (let i = 0; i < list.length; i++) {
    const product = list[i];
    const normalizedProductName = product.name.toLowerCase().trim();

    if (normalizedProductName === normalizedSearch) {
      return product;
    }
  }

  return null;
}

calculateTotalInventoryValue();

console.log(login("admin", "admin"));
console.log(login("foo", "bar"));

function openCart() {

  console.log("openCart called");
}

document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.open-cart').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      openCart();
    });
  });

  document.querySelectorAll('[data-base-price]').forEach(btn => {
    btn.addEventListener('click', () => {
      const base = parseFloat(btn.dataset.basePrice);
      if (!isNaN(base)) {
        dodajNaIznos(base);
      }
    });
  });

  const promo = document.getElementById('promo-button');
  if (promo) promo.addEventListener('click', validateAndNotify);

  const loginForm = document.getElementById('login-form');
  if (loginForm) loginForm.addEventListener('submit', handleLogin);
});     