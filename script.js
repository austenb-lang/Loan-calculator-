function calculateLoan() {
  let amount = document.getElementById("amount").value;
  let interest = document.getElementById("interest").value;
  let years = document.getElementById("years").value;
  let result = document.getElementById("result");

  // Convert values
  amount = parseFloat(amount);
  interest = parseFloat(interest) / 100 / 12; // monthly interest rate
  years = parseFloat(years) * 12; // total number of months

  // Validate input
  if (isNaN(amount) || isNaN(interest) || isNaN(years) || amount <= 0 || years <= 0) {
    result.innerHTML = "Please enter valid values.";
    return;
  }

  // Loan payment formula: M = P * r(1+r)^n / [(1+r)^n – 1]
  let monthly = (amount * interest * Math.pow(1 + interest, years)) /
                (Math.pow(1 + interest, years) - 1);

  if (isFinite(monthly)) {
    result.innerHTML = `Monthly Payment: $${monthly.toFixed(2)}`;
  } else {
    result.innerHTML = "Calculation error. Check inputs.";
  }
}