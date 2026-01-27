document.querySelectorAll('.firmy-list li').forEach(item => {
    item.addEventListener('click', () => {
        const key = item.getAttribute('data-firma');
        const box = document.getElementById('firmaContent');

        document.querySelectorAll('.firma-details').forEach(firma => {
            firma.classList.add('hidden');
        });

        const selectedFirma = document.getElementById(key);
        if (selectedFirma) {
            selectedFirma.classList.remove('hidden');
        }

        box.style.display = 'block';
    });
});
