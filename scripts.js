const validate_cep = (cep) => {
  cep = cep.replace(/[^0-9]/gi, "");
  if (cep.length == 8) {
    return cep;
  }
  throw `CEP "${cep}" format invalid`;
}

const apiCep = (cep) => `https://viacep.com.br/ws/${cep}/json/`;

document.getElementById('cepForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const cepInput = document.getElementById('cepInput').value;

  try {
    const cep = validate_cep(cepInput);
    const response = await fetch(apiCep(cep));
    const data = await response.json();

    const resultDiv = document.getElementById('cepResult');
    if (data && !data.erro) {
      resultDiv.innerHTML = `
        <h5>Resultados da consulta:</h5>
        <p><strong>CEP:</strong> ${data.cep}</p>
        <p><strong>Logradouro:</strong> ${data.logradouro || 'Não disponível'}</p>
        <p><strong>Bairro:</strong> ${data.bairro || 'Não disponível'}</p>
        <p><strong>Cidade:</strong> ${data.localidade || 'Não disponível'}</p>
        <p><strong>Estado:</strong> ${data.uf || 'Não disponível'}</p>
      `;
    } else {
      resultDiv.innerHTML = `
        <h5>Erro na consulta:</h5>
        <p>Não foi possível encontrar informações para o CEP informado.</p>
      `;
    }
  } catch (error) {
    alert('Formato de CEP inválido');
  }
});

const toggleDarkModeButton = document.getElementById('toggleDarkMode');
toggleDarkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    toggleDarkModeButton.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    toggleDarkModeButton.innerHTML = '<i class="fas fa-moon"></i>';
  }
});
