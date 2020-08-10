//Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão 
.addEventListener('click', cloneField);
//Executar uma ação
function cloneField() {
    //Duplicar os campos. Que campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
    //Pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input');
    //Pega o field do momento e limpar
    fields.forEach(function(field) {
        field.value = "";
    });
    //Colocar na página. Onde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}