function validateEmptyInput(userName){
    if (userName.length === 0) {
        alert('Preencha o campo com o nome do usuário do GitHub')
        return true
    }
}

export {validateEmptyInput}