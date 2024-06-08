document.querySelectorAll('.mostrar-informacoes').forEach(button => {
    button.addEventListener('click', () => {
        const info = button.nextElementSibling;
        info.classList.toggle('hidden');
        button.textContent = info.classList.contains('hidden') ? 'Exibir Informações' : 'Ocultar Informações';
    });
});