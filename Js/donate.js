// Donate Main Title
const donateTitleOne = document.getElementById("donate-title-one").innerText;
const donateTitleTow = document.getElementById("donate-title-tow").innerText;
const donateTitleThree =
  document.getElementById("donate-title-three").innerText;
const donateTitlesFour = document.getElementById("donate-title-four").innerText;
const donateTitleFive = document.getElementById("donate-title-five").innerText;
const donateTitlesSix = document.getElementById("donate-title-six").innerText;

// Histroy Btn
const hide = document
  .getElementById("History")
  .addEventListener("click", function () {
    const hideCard = document.getElementById("donaion-cards");
    const showhistory = document.getElementById("history-added");
    hideCard.classList.add("hidden");
    showhistory.classList.remove("hidden");
  });

// Donation Btn
const show = document
  .getElementById("donation")
  .addEventListener("click", function () {
    const hideCard = document.getElementById("donaion-cards");
    const showhistory = document.getElementById("history-added");
    hideCard.classList.remove("hidden");
    showhistory.classList.add("hidden");
  });

// Modal Show and Close Data
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

// Donation Card Function
// Card 1
document
  .getElementById("donate-btn-one")
  .addEventListener("click", function (e) {
    e.preventDefault();

    let totalAmounts = donateUser("donate-total-amounts");
    let donateAmount = donateAmounts("donate-amount-one");

    if (donateAmount > 0 && typeof donateAmount === "number") {
      let newTotal = totalAmounts - donateAmount;
      document.getElementById("donate-total-amounts").innerText = newTotal;

      let collectedAmount = donateUser("total-donate-one");
      document.getElementById("total-donate-one").innerText =
        donateAmount + collectedAmount;
      document.getElementById("donate-amount-one").value = "";
      modal.classList.remove("hidden");

      // Date, Time & location
      const date = new Date();
      const CurrentDate = date.toString();

      // Creating Element
      const div = document.createElement("div");
      const p = document.createElement("p");
      const small = document.createElement("small");

      // Dynamic Text
      p.innerHTML = `${donateAmount} Taka is Donated for ${donateTitleOne}`;
      small.innerText = CurrentDate;

      // Dynamic Style
      div.className =
        "border border-[#1111111A] rounded-xl p-8 mb-6 lixend-font";
      p.className = "font-bold text-xl";
      div.appendChild(p);
      div.append(small);

      // Append Main Parent
      document.getElementById("history-added").appendChild(div);
    } else {
      alert("Please enter a valid positive amount!");
    }
  });

// Card 2
document
  .getElementById("donate-btn-tow")
  .addEventListener("click", function (e) {
    e.preventDefault();

    let totalAmounts = donateUser("donate-total-amounts");
    let donateAmount = donateAmounts("donate-amount-tow");

    if (donateAmount > 0 && typeof donateAmount === "number") {
      let newTotal = totalAmounts - donateAmount;
      document.getElementById("donate-total-amounts").innerText = newTotal;

      let collectedAmount = donateUser("total-donate-tow");
      document.getElementById("total-donate-tow").innerText =
        donateAmount + collectedAmount;
      document.getElementById("donate-amount-tow").value = "";
      modal.classList.remove("hidden");

      // Date, Time & location
      const date = new Date();
      const CurrentDate = date.toString();

      // Creating Element
      const div = document.createElement("div");
      const p = document.createElement("p");
      const small = document.createElement("small");

      // Dynamic Text
      p.innerHTML = `${donateAmount} Taka is Donated for ${donateTitleTow}`;
      small.innerText = CurrentDate;

      // Dynamic Style
      div.className =
        "border border-[#1111111A] rounded-xl p-8 mb-6 lixend-font";
      p.className = "font-bold text-xl";
      div.appendChild(p);
      div.append(small);

      // Append Main Parent
      document.getElementById("history-added").appendChild(div);
    } else {
      alert("Please enter a valid positive amount!");
    }
  });

// Card 3
document
  .getElementById("donate-btn-three")
  .addEventListener("click", function (e) {
    e.preventDefault();

    let totalAmounts = donateUser("donate-total-amounts");
    let donateAmount = donateAmounts("donate-amount-three");

    if (donateAmount > 0 && typeof donateAmount === "number") {
      let newTotal = totalAmounts - donateAmount;
      document.getElementById("donate-total-amounts").innerText = newTotal;

      let collectedAmount = donateUser("total-donate-three");
      document.getElementById("total-donate-three").innerText =
        donateAmount + collectedAmount;
      document.getElementById("donate-amount-three").value = "";
      modal.classList.remove("hidden");

      // Date, Time & location
      const date = new Date();
      const CurrentDate = date.toString();

      // Creating Element
      const div = document.createElement("div");
      const p = document.createElement("p");
      const small = document.createElement("small");

      // Dynamic Text
      p.innerHTML = `${donateAmount} Taka is Donated for ${donateTitleThree}`;
      small.innerText = CurrentDate;

      // Dynamic Style
      div.className =
        "border border-[#1111111A] rounded-xl p-8 mb-6 lixend-font";
      p.className = "font-bold text-xl";
      div.appendChild(p);
      div.append(small);

      // Append Main Parent
      document.getElementById("history-added").appendChild(div);
    } else {
      alert("Please enter a valid positive amount!");
    }
  });

// Card 4
document
  .getElementById("donate-btn-four")
  .addEventListener("click", function (e) {
    e.preventDefault();

    let totalAmounts = donateUser("donate-total-amounts");
    let donateAmount = donateAmounts("donate-amount-four");

    if (donateAmount > 0 && typeof donateAmount === "number") {
      let newTotal = totalAmounts - donateAmount;
      document.getElementById("donate-total-amounts").innerText = newTotal;

      let collectedAmount = donateUser("total-donate-four");
      document.getElementById("total-donate-four").innerText =
        donateAmount + collectedAmount;
      document.getElementById("donate-amount-four").value = "";
      modal.classList.remove("hidden");

      // Date, Time & location
      const date = new Date();
      const CurrentDate = date.toString();

      // Creating Element
      const div = document.createElement("div");
      const p = document.createElement("p");
      const small = document.createElement("small");

      // Dynamic Text
      p.innerHTML = `${donateAmount} Taka is Donated for ${donateTitlesFour}`;
      small.innerText = CurrentDate;

      // Dynamic Style
      div.className =
        "border border-[#1111111A] rounded-xl p-8 mb-6 lixend-font";
      p.className = "font-bold text-xl";
      div.appendChild(p);
      div.append(small);

      // Append Main Parent
      document.getElementById("history-added").appendChild(div);
    } else {
      alert("Please enter a valid positive amount!");
    }
  });

// Card 5
document
  .getElementById("donate-btn-five")
  .addEventListener("click", function (e) {
    e.preventDefault();

    let totalAmounts = donateUser("donate-total-amounts");
    let donateAmount = donateAmounts("donate-amount-five");

    if (donateAmount > 0 && typeof donateAmount === "number") {
      let newTotal = totalAmounts - donateAmount;
      document.getElementById("donate-total-amounts").innerText = newTotal;

      let collectedAmount = donateUser("total-donate-five");
      document.getElementById("total-donate-five").innerText =
        donateAmount + collectedAmount;
      document.getElementById("donate-amount-five").value = "";
      modal.classList.remove("hidden");

      // Date, Time & location
      const date = new Date();
      const CurrentDate = date.toString();

      // Creating Element
      const div = document.createElement("div");
      const p = document.createElement("p");
      const small = document.createElement("small");

      // Dynamic Text
      p.innerHTML = `${donateAmount} Taka is Donated for ${donateTitleFive}`;
      small.innerText = CurrentDate;

      // Dynamic Style
      div.className =
        "border border-[#1111111A] rounded-xl p-8 mb-6 lixend-font";
      p.className = "font-bold text-xl";
      div.appendChild(p);
      div.append(small);

      // Append Main Parent
      document.getElementById("history-added").appendChild(div);
    } else {
      alert("Please enter a valid positive amount!");
    }
  });

// Card 6
document
  .getElementById("donate-btn-six")
  .addEventListener("click", function (e) {
    e.preventDefault();

    let totalAmounts = donateUser("donate-total-amounts");
    let donateAmount = donateAmounts("donate-amount-six");

    if (donateAmount > 0 && typeof donateAmount === "number") {
      let newTotal = totalAmounts - donateAmount;
      document.getElementById("donate-total-amounts").innerText = newTotal;

      let collectedAmount = donateUser("total-donate-six");
      document.getElementById("total-donate-six").innerText =
        donateAmount + collectedAmount;
      document.getElementById("donate-amount-six").value = "";
      modal.classList.remove("hidden");

      // Date, Time & location
      const date = new Date();
      const CurrentDate = date.toString();

      // Creating Element
      const div = document.createElement("div");
      const p = document.createElement("p");
      const small = document.createElement("small");

      // Dynamic Text
      p.innerHTML = `${donateAmount} Taka is Donated for ${donateTitlesSix}`;
      small.innerText = CurrentDate;

      // Dynamic Style
      div.className =
        "border border-[#1111111A] rounded-xl p-8 mb-6 lixend-font";
      p.className = "font-bold text-xl";
      div.appendChild(p);
      div.append(small);

      // Append Main Parent
      document.getElementById("history-added").appendChild(div);
    } else {
      alert("Please enter a valid positive amount!");
    }
  });

// Close Modal
closeModal.addEventListener("click", function () {
  modal.classList.add("hidden");
});
