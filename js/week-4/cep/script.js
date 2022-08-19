const cep = document.getElementById("cep");
cep.addEventListener("blur", (e) => {
    let cepValor = document.getElementById("cep").value;
    let search = cep.value.replace("-", "");
    fetch(`https://viacep.com.br/ws/${search}/json/`).then((response) => {
        response.json().then(data => {
            console.log(data);
            document.getElementById("bairro").value = data.bairro;
            document.getElementById("cidade").value = data.localidade;
        })
    });
});


function enviar() {
    let cep = document.getElementById("cep").value;
    let bairro = document.getElementById("bairro").value;
    let cidade = document.getElementById("cidade").value;

    alert(`Endereço cadastrado com sucesso!\nCep: ${cep} Bairro: ${bairro} Cidade: ${cidade}`);
};