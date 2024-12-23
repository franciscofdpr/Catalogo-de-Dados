// Carregar o JSON e preencher a seção com os dados do catálogo
let allDatasets = [];

fetch('catalogo_dados.json')
  .then(response => response.json())
  .then(data => {
    allDatasets = data.datasets;
    renderDatasets(allDatasets);
  })
  .catch(error => console.log('Erro ao carregar JSON:', error));

// Função para renderizar os datasets na página
function renderDatasets(datasets) {
  const datasetInfoSection = document.querySelector('.dataset-info');
  
  // Limpar a seção antes de adicionar os novos dados
  datasetInfoSection.innerHTML = '';

  // Iterar sobre os datasets e gerar o HTML
  datasets.forEach(dataset => {
    const datasetHTML = `
      <div class="dataset">
        <h2>Sobre o Conjunto de Dados</h2>
        <p><strong>Título:</strong> ${dataset['dc:title']}</p>
        <p><strong>Descrição:</strong> ${dataset['dc:description']}</p>
        <p><strong>Data de Criação:</strong> ${dataset['dct:created']}</p>
        <p><strong>Licença:</strong> <a href="${dataset['dc:license']}" target="_blank">Creative Commons Atribuição 4.0 Internacional</a></p>
        <p><strong>Formato de Dados:</strong> ${dataset['dcat:distribution']['dcat:mediaType']}</p>
        <a href="${dataset['dcat:distribution']['dcat:downloadURL']}" class="download-link" target="_blank">Baixar Conjunto de Dados</a>
      </div>
    `;
    
    datasetInfoSection.innerHTML += datasetHTML;
  });
}

// Adicionar evento de filtro ao formulário
document.getElementById('filter-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir o envio do formulário

  const titleFilter = document.getElementById('filter-title').value.toLowerCase();
  const dateFilter = document.getElementById('filter-date').value;
  const licenseFilter = document.getElementById('filter-license').value;

  const filteredDatasets = allDatasets.filter(dataset => {
    const matchesTitle = dataset['dc:title'].toLowerCase().includes(titleFilter);
    const matchesDate = dateFilter ? dataset['dct:created'].startsWith(dateFilter) : true;
    const matchesLicense = licenseFilter ? dataset['dc:license'] === licenseFilter : true;
    
    return matchesTitle && matchesDate && matchesLicense;
  });

  renderDatasets(filteredDatasets); // Renderizar os datasets filtrados
});


