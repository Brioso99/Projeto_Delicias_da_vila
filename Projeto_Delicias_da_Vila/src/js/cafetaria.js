// Adiciona esta linha no topo do teu ficheiro cafetaria.js
const contentor = document.getElementById('lista-padaria');

const categorias = [
    {
        titulo: "", 
        itens: [
            { nome: "Abatanado", preco: "1,10", un: "/un" },
            { nome: "Café/Descafeinado", preco: "1,00", un: "/un" },
            { nome: "Chocolate Quente", preco: "3,20", un: "/un" },
            { nome: "Meia De Leite Direta", preco: "1,15", un: "/un" },
        ]
    },
    {
        titulo: "Bebidas:", 
        itens: [
            { nome: "Água 0.50 cl", preco: "1,20", un: "/un" },
            { nome: "Água Das Pedras", preco: "1,50", un: "/un" },
            { nome: "Compal", preco: "1,80", un: "/un" },
            { nome: "Frize Sabores", sub: "(Limão/Laranja/Groselha/Ananás)", preco: "1,80", un: "/un" },
            { nome: "Refrigerante", sub: "(Coca-Cola/7up/Sumol/Ice Tea)", preco: "1,95", un: "/un" },
            { nome: "Leite Ucal", preco: "1,80", un: "/un" },
            {nome:"Sumo Laranja Natural", preco:"1,30",un:"/un"},
        ]
    },
    {
        titulo: "Bebidas Alcoólicas:",
        itens:[
            { nome: "Favaito/Martini C/ Cerveja", preco: "1,90", un: "/un" },
            { nome: "Porto", preco: "1,70", un: "/un" },
            { nome: "Cerveja (Super Bock)", preco: "1,70", un: "/un" },
        ]
    }
];

categorias.forEach((cat, index) => { 
    if (index > 0) {
        contentor.innerHTML += `<h2 class="subtitulo-categoria">${cat.titulo}</h2>`;
    }

    cat.itens.forEach(produto => {
        contentor.innerHTML += `
            <div class="produto-item">
                <span class="produto-nome">• ${produto.nome} 
                    ${produto.sub ? `<span class="detalhe-produto">${produto.sub}</span>` : ''}
                </span>
                <span class="produto-preco">${produto.preco}€ <small>${produto.un}</small></span>
            </div>
        `; 
    });
});