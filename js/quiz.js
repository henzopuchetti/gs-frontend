function selectAnswer(selected) {
    var buttons = document.querySelectorAll('.pergunta1 button, .pergunta2 button, .pergunta3 button, .pergunta4 button, .pergunta5 button');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('green');
    }

    if ([2, 6, 11, 14, 18].includes(selected)) {
        buttons[selected - 1].classList.add('green');
    }
}
