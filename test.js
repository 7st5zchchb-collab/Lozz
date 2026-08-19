alert("Do you have 18?");
document.getElementById("btn").onclick = function () {
  alert("You clicked the button!");
};
const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please enter your email and password.");
    return;
  }

  alert("Sign up form submitted!");
});
function checkGrade(score) {
  let result = "";
  if (score >= 90) {
    console.log("100%");
  } else if (score >= 70) {
    console.log("75%");
  } else if (score >= 50) {
    console.log("50");
  } else if (score >= 25) {
    console.log("25%");
  }
  document.getElementById("result").textContent = result;
}
checkGrade(85);
const dropdown = document.getElementById("myDropdown");
const dropBtn = dropdown.querySelector(".dropbtn");
const dropContent = dropdown.querySelector(".dropdown-content");

// 1. Սեղմելիս (click) բացում կամ փակում ենք ցուցակը
dropBtn.addEventListener("click", (event) => {
  event.stopPropagation(); // Կանխում է իրադարձության տարածումը
  dropContent.classList.toggle("show");
});

// 2. Երբ մկնիկը հեռացնում ենք dropdown-ի տարածքից (mouseleave), այն փակվում է
dropdown.addEventListener("mouseleave", () => {
  dropContent.classList.remove("show");
});

// 3. Լրացուցիչ՝ եթե էջի ցանկացած այլ տեղ սեղմեն, նույնպես փակվի
document.addEventListener("click", () => {
  dropContent.classList.remove("show");
});
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

function showSlide(index) {
  // Հեռացնում ենք ակտիվ դասը ընթացիկ նկարից
  slides[currentIndex].classList.remove("active");

  // Որոշում ենք նոր նկարի ինդեքսը (եթե վերջինն է, անցնում է առաջինին և հակառակը)
  currentIndex = (index + slides.length) % slides.length;

  // Ավելացնում ենք ակտիվ դասը նոր նկարին
  slides[currentIndex].classList.add("active");
}

// Աջ սլաքի սեղմում
nextBtn.addEventListener("click", () => {
  showSlide(currentIndex + 1);
});

// Ձախ սլաքի սեղմում
prevBtn.addEventListener("click", () => {
  showSlide(currentIndex - 1);
});
