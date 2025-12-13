//Javascript zmenu obsahu po kliknuti na firmu
const content = {
    dt: "DataTel – popis firmy...",
    sh: "Siemens Healthineers – popis firmy...",
    vt: " Visma Technology – popis firmy...",
    it: "IT Valley – popis firmy...",
};

document.querySelectorAll('.firmy-list li').forEach(item => {
    item.addEventListener('click', () => {
        const key = item.getAttribute('data-firma');
        const box = document.getElementById('firmaContent');

        box.innerText = content[key];
        box.style.display = 'block';
    });
});
