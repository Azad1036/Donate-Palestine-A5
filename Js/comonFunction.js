// Donate Input Value
function donateAmounts(totalDonate) {
  const donateAmounts = document.getElementById(totalDonate).value;
  let donateAmaoutValue = parseInt(donateAmounts);
  return donateAmaoutValue;
}

// Donate total Amount Update
function donateUser(donate) {
  const donatetotalAmount = document.getElementById(donate).innerText;
  let donateValue = parseInt(donatetotalAmount);
  return donateValue;
}
