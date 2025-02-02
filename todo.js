document.getElementById('startButton').addEventListener('click', function () {
    // Disabilitiamo il pulsante per evitare clic ripetuti
    this.disabled = true;

    // Variabile per accumulare i numeri generati
    let numberString = '9,';  // Partiamo con il primo 9 seguito da virgola

    // Funzione per avviare la sequenza infinita di numeri
    function generateNines () {
        setInterval(function () {
            // Aggiungiamo solo i '9' senza virgola
            numberString += '9';

            // Visualizziamo i numeri nella pagina
            document.getElementById('numberDisplay').textContent = numberString;
        }, 100); // Ogni 100ms aggiungiamo un nuovo '9'
    }

    // Iniziamo a generare la sequenza infinita di numeri '9,9,9,...'
    generateNines();
});
