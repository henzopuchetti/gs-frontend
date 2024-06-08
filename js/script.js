document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('botao-enviar').addEventListener('click', function() {
        document.getElementById('experiencia-usuario').value = '';

        var message = document.getElementById('experiencia-enviada');
        message.style.display = 'block';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('botao-enviar2').addEventListener('click', function() {
        // Limpa os campos de input
        document.getElementById('estado-input').value = '';
        document.getElementById('cidade-input').value = '';
        document.getElementById('praia-input').value = '';
        document.getElementById('avaliacao-input').value = '';

        // Exibe a mensagem de sucesso
        var message = document.getElementById('avaliacao-enviada');
        message.style.display = 'block';
    });
});

document.getElementById('ir-para-quiz-page').addEventListener('click', function() {
    window.location.href = 'quiz.html';
});

document.getElementById('ir-para-ajudar-page').addEventListener('click', function() {
    window.location.href = 'ajudar.html';
});

document.getElementById('exibir-formulario').addEventListener('click', function() {
    const form = document.getElementById('contato-form');
    form.classList.toggle('hidden');
    this.textContent = form.classList.contains('hidden') ? 'Exibir' : 'Ocultar';
});