// ==============================
// Dados simulados de produtos
// ==============================
const produtos = {
    "CAF123": [
        { etapa: "Produção", descricao: "O café foi cultivado com energia 100% renovável." },
        { etapa: "Colheita", descricao: "Foram respeitadas todas as leis laborais locais." },
        { etapa: "Transporte", descricao: "O transporte utilizou veículos com baixa emissão de carbono." },
        { etapa: "Distribuição", descricao: "O produto chegou à loja sem desperdício de embalagem." }
    ],
    "LAR456": [
        { etapa: "Produção", descricao: "As laranjas foram cultivadas com métodos orgânicos." },
        { etapa: "Colheita", descricao: "Foram respeitadas normas de trabalho justo." },
        { etapa: "Transporte", descricao: "Veículos elétricos transportaram o lote." },
        { etapa: "Distribuição", descricao: "Embalagens recicláveis foram utilizadas." }
    ]
};

// ==============================
// Elementos do DOM
// ==============================
const form = document.getElementById("codigoLote");
const input = document.getElementById("loteInput");
const timelineContainer = document.getElementById("timeline");

// ==============================
// Função para limpar a linha do tempo
// ==============================
function limparTimeline() {
    timelineContainer.innerHTML = "";
}

// ==============================
// Função para construir a linha do tempo
// ==============================
function construirTimeline(etapas) {
    limparTimeline();

    etapas.forEach((etapaObj) => {
        const evento = document.createElement("div");
        evento.classList.add("timeline-event");

        const titulo = document.createElement("h3");
        titulo.textContent = etapaObj.etapa;

        const descricao = document.createElement("p");
        descricao.textContent = etapaObj.descricao;

        evento.appendChild(titulo);
        evento.appendChild(descricao);

        timelineContainer.appendChild(evento);
    });
}

// ==============================
// Função para lidar com o envio do formulário
// ==============================
form.addEventListener("submit", (e) => {
    e.preventDefault(); // evita recarregar a página

    const codigo = input.value.trim().toUpperCase();

    if (codigo === "") {
        alert("Por favor, insira um código de lote.");
        return;
    }

    if (produtos[codigo]) {
        construirTimeline(produtos[codigo]);
    } else {
        limparTimeline();
        const aviso = document.createElement("p");
        aviso.textContent = "Código de lote não encontrado.";
        aviso.style.color = "#d32f2f"; // vermelho alerta
        timelineContainer.appendChild(aviso);
    }
});