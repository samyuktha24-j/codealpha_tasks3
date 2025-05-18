document.getElementById('busForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop form from submitting normally
  
    // Get values from form inputs
    const name = document.getElementById('name').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
  
    // Create ticket info
    const ticketInfo = `
      <h2>Ticket Booked Successfully!</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>From:</strong> ${from}</p>
      <p><strong>To:</strong> ${to}</p>
      <p><strong>Date of Travel:</strong> ${date}</p>
      <p><strong>Status:</strong> Confirmed</p>
    `;
  
    // Show ticket output
    const ticketDiv = document.getElementById('ticketOutput');
    ticketDiv.innerHTML = ticketInfo;
    ticketDiv.style.display = 'block';
  });
  