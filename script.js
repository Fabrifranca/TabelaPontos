function addPonto(time) {
    const pontosElement = document.getElementById(`${time}-pontos`);
    const pontos = parseInt(pontosElement.textContent);
    pontosElement.textContent = pontos + 1;
}

function removePonto(time) {
    const pontosElement = document.getElementById(`${time}-pontos`);
    const pontos = parseInt(pontosElement.textContent);
    if (pontos > 0) {
        pontosElement.textContent = pontos - 1;
    }
}