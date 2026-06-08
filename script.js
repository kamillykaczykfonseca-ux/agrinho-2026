const loteData = {
    "CAF123": [
        { etapa: "Colheita", descricao: "Café colhido com práticas sustentáveis." },
        { etapa: "Processamento", descricao: "Energia renovável utilizada nas máquinas." },
        { etapa: "Embalagem", descricao: "Embalagem reciclável e biodegradável." },
        { etapa: "Transporte", descricao: "Transporte ecológico com baixo carbono." },
        { etapa: "Venda", descricao: "Produto disponível no mercado de forma transparente." }
    ],
    "LAR456": [
        { etapa: "Colheita", descricao: "Laranjas cultivadas sem pesticidas químicos." },
        { etapa: "Armazenamento", descricao: "Frutas armazenadas em temperatura controlada eco-friendly." },
        { etapa: "Distribuição", descricao: "Transporte com veículos elétricos." },
        { etapa: "Venda", descricao: "Rastreabilidade garantida até o consumidor final." }
    ]
};

const button = document.getElementById("verRastro");
const input = document.getElementById("loteInput");
const timeline = document.getElementById("timeline");

button.addEventListener("click", () => {
    const lote = input.value.trim().toUpperCase();
    timeline.innerHTML = ""; // Limpa a timeline antes de gerar

    if (!loteData[lote]) {
        timeline.innerHTML = "<p>Lote não encontrado. Tente outro código.</p>";
        return;
    }

    loteData[lote].forEach((event, index) => {
        const div = document.createElement("div");
        div.className = "timeline-event";
        div.style.animationDelay = `${index * 0.3}s`; // delay crescente para cada evento
        div.innerHTML = `<h3>${event.etapa}</h3><p>${event.descricao}</p>`;
        timeline.appendChild(div);
    });
});