// Modal Data
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

// Modal প্রথমে লুকানো থাকবে
modal.classList.add("hidden");

// Donation Card Function
// Card 1
document
  .getElementById("donate-btn-one")
  .addEventListener("click", function (e) {
    e.preventDefault();

    let totalAmounts = donateUser("donate-total-amounts");
    let donateAmount = donateAmounts("donate-amaout-one");

    if (donateAmount > 0 && typeof donateAmount === "number") {
      let newTotal = totalAmounts - donateAmount;
      document.getElementById("donate-total-amounts").innerText = newTotal;

      let collectedAmount = donateUser("total-donate");
      document.getElementById("total-donate").innerText =
        donateAmount + collectedAmount;
      document.getElementById("donate-amaout-one").value = "";
      modal.classList.remove("hidden");
    } else {
      alert("Please enter a valid positive amount!");
    }
  });

// Close Modal
closeModal.addEventListener("click", function () {
  modal.classList.add("hidden");
});
