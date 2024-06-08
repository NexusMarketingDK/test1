document.getElementById('energy-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const address = document.getElementById('address').value;
    try {
        const response = await fetch('/get-energy-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ address }),
        });
        const data = await response.json();
        document.getElementById('consumption').innerText = `Årligt elforbrug: ${data.consumption} kWh`;
        document.getElementById('price').innerText = `Pris pr. kWh: ${data.price} kr`;
    } catch (error) {
        console.error('Error fetching energy data:', error);
        document.getElementById('consumption').innerText = 'Kunne ikke hente data';
        document.getElementById('price').innerText = '';
    }
});
