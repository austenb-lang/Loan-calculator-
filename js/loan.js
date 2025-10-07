document.getElementById('calculate').addEventListener('click', () => {
  const P = parseFloat(document.getElementById('amount').value);
  const r = parseFloat(document.getElementById('rate').value) / 100 / 12;
  const n = parseFloat(document.getElementById('years').value) * 12;

  if (isNaN(P) || isNaN(r) || isNaN(n) || r <= 0 || n <= 0) {
    document.getElementById('results').innerHTML = "<p>Please enter valid inputs.</p>";
    return;
  }

  const monthly = (P * r) / (1 - Math.pow(1 + r, -n));
  const total = monthly * n;
  const interest = total - P;

  document.getElementById('results').innerHTML = `
    <h2>Results</h2>
    <p><strong>Monthly Payment:</strong> $${monthly.toFixed(2)}</p>
    <p><strong>Total Interest:</strong> $${interest.toFixed(2)}</p>
    <p><strong>Total Payment:</strong> $${total.toFixed(2)}</p>
  `;
});