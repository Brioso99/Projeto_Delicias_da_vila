const contentor = document.getElementById('lista-padaria');

const categorias = [
    {
        titulo: "", 
        itens: [
            { nome: "Americano", preco: "1,10", un: "/un" },
            { nome: "Espresso / Decaf", preco: "1,00", un: "/un" },
            { nome: "Hot Chocolate", preco: "3,20", un: "/un" },
            { nome: "Small Latte", preco: "1,15", un: "/un" },
        ]
    },
    {
        titulo: "Drinks:", 
        itens: [
            { nome: "Water 50 cl", sub:"(Bottle Deposit Return €0.10)" , preco: "1,20", un: "/un" },
            { nome: "Sparkling Water", preco: "1,50", un: "/un" },
            { nome: "Fruit Nectars (Compal)", preco: "1,80", un: "/un" },
            { nome: "Flavored Sparkling Water", sub: "(Lemon / Orange / Redcurrant / Pineapple)", preco: "1,80", un: "/un" },
            { nome: "Soft Drink", sub: "(Coca-Cola / 7up / Sumol / Iced Tea) (Bottle Deposit Return €0.10)", preco: "1,95", un: "/un" },
            { nome: "Chocolate Milk (Ucal)", preco: "1,80", un: "/un" },
            {nome:"Fresh Orange Juice", preco:"3,10",un:"/un"},
        ]
    },
    {
        titulo: "Alcoholic Drinks:",
        itens:[
            { nome: "Favaios / Martini with Beer", preco: "1,90", un: "/un" },
            { nome: "Port Wine", preco: "1,70", un: "/un" },
            { nome: "Beer (Super Bock)", preco: "1,70", un: "/un" },
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