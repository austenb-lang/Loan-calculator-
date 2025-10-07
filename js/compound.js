document.getElementById('calculate').addEventListener('click', () => {
  const principal = parseFloat(document.getElementById('principal').value);
  const contrib = parseFloat(document.getElementById('contribution').value);
  const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
  const years = parseFloat(document.getElementById('years').value);
  const months = years * 12;

  if (isNaN(principal) || isNaN(contrib) || isNaN(rate) || isNaN(years)) {
    document.getElementById('results').innerHTML = "<p>Please fill in all fields correctly.</p>";
    return;
  }

  let balance = principal;
  for (let i = 0; i < months; i++) {
    balance = balance * (1 + rate) + contrib;
  }

  const totalContributed = principal + contrib * months;
  const interestEarned = balance - totalContributed;

  document.getElementById('results').innerHTML = `
    <h2>Results</h2>
    <p><strong>Final Balance:</strong> $${balance.toFixed(2)}</p>
    <p><strong>Total Contributions:</strong> $${totalContributed.toFixed(2)}</p>
    <p><strong>Interest Earned:</strong> $${interestEarned.toFixed(2)}</p>
  `;
});