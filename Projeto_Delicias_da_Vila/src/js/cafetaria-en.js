/// Adiciona esta linha no topo do teu ficheiro cafetaria-en.js
const contentor = document.getElementById('lista-padaria');

const categorias = [
    {
        titulo: "", 
        itens: [
            { nome: "Americano", preco: "1,10", un: "/un" }, // Abatanado
            { nome: "Espresso / Decaf", preco: "1,00", un: "/un" }, // Café/Descafeinado
            { nome: "Hot Chocolate", preco: "3,20", un: "/un" }, // Chocolate Quente
            { nome: "Coffee with Milk", preco: "1,15", un: "/un" }, // Meia de leite/Galão (Corrigido de "Whit")
        ]
    },
    {
        titulo: "Cold Drinks:", // Bebidas
        itens: [
            { nome: "Water 50cl", preco: "1,20", un: "/un" },
            { nome: "Sparkling Water (Pedras)", preco: "1,50", un: "/un" },
            { nome: "Fruit Juice (Compal)", preco: "1,80", un: "/un" },
            { nome: "Flavored Sparkling Water", sub: "(Lemon/Orange/Redcurrant/Pineapple)", preco: "1,80", un: "/un" }, // Frize Sabores
            { nome: "Soft Drink", sub: "(Coca-Cola/7up/Sumol/Ice Tea)", preco: "1,95", un: "/un" }, // Refrigerantes
            { nome: "Chocolate Milk (Ucal)", preco: "1,80", un: "/un" }, // Leite Ucal
            { nome: "Fresh Orange Juice", preco: "1,30", un: "/un" }, // Sumo Laranja Natural
        ]
    },
    {
        titulo: "Alcoholic Drinks:", // Bebidas Alcoólicas
        itens:[
            { nome: "Favaios/Martini with Beer", preco: "1,90", un: "/un" }, // Favaito/Martini C/ Cerveja
            { nome: "Port Wine", preco: "1,70", un: "/un" }, // Porto
            { nome: "Beer (Super Bock)", preco: "1,70", un: "/un" }, // Super Bock
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