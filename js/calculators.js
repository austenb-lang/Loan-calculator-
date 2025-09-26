function setupLoanCalculator(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = `
    <label>Loan Amount ($): <input type="number" class="amount"></label>
    <label>Annual Interest Rate (%): <input type="number" class="interest"></label>
    <label>Loan Term (Years): <input type="number" class="years"></label>
    <button class="calculate-btn">Calculate</button>
    <div class="result"></div>
  `;

  const btn = container.querySelector(".calculate-btn");
  btn.addEventListener("click", () => {
    const amount = parseFloat(container.querySelector(".amount").value);
    const interest = parseFloat(container.querySelector(".interest").value) / 100 / 12;
    const months = parseFloat(container.querySelector(".years").value) * 12;
    const resultDiv = container.querySelector(".result");

    if (isNaN(amount) || isNaN(interest) || isNaN(months) || amount <= 0 || months <= 0) {
      resultDiv.innerHTML = "Please enter valid values.";
      return;
    }

    const monthly = (amount * interest * Math.pow(1 + interest, months)) /
                    (Math.pow(1 + interest, months) - 1);
    const totalPayment = monthly * months;
    const totalInterest = totalPayment - amount;

    resultDiv.innerHTML = `
      Monthly Payment: $${monthly.toFixed(2)}<br>
      Total Payment: $${totalPayment.toFixed(2)}<br>
      Total Interest: $${totalInterest.toFixed(2)}
    `;
  });
}
