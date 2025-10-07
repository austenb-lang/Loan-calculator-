document.getElementById('calculate').addEventListener('click', () => {
  const goal = parseFloat(document.getElementById('goal').value);
  const current = parseFloat(document.getElementById('current').value);
  const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
  const years = parseFloat(document.getElementById('years').value);
  const months = years * 12;

  if (isNaN(goal) || isNaN(current) || isNaN(rate) || isNaN(years)) {
    document.getElementById('results').innerHTML = "<p>Please fill in all fields correctly.</p>";
    return;
  }

  let low = 0, high = goal, monthly = 0;

  // Binary search for monthly payment to reach goal
  for (let i = 0; i < 50; i++) {
    monthly = (low + high) / 2;
    let balance = current;
    for (let m = 0; m < months; m++) {
      balance = balance * (1 + rate) + monthly;
    }
    if (balance > goal) high = monthly;
    else low = monthly;
  }

  document.getElementById('results').innerHTML = `
    <h2>Results</h2>
    <p><strong>Monthly Savings Required:</strong> $${monthly.toFixed(2)}</p>
    <p><strong>Total Contributed:</strong> $${(monthly * months).toFixed(2)}</p>
    <p><strong>Goal Balance:</strong> $${goal.toFixed(2)}</p>
  `;
});