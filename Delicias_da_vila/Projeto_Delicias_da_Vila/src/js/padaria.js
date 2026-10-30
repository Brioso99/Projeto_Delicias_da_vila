

const produtosPadaria = [
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    { nome: "Pão Biju", preco: "99,99", un: "/un" },
    
];

const contentor = document.getElementById('lista-padaria');

produtosPadaria.forEach(produto => {
    contentor.innerHTML += `
        <div class="produto-item">
            <span class="produto-nome">• ${produto.nome}</span>
            <span class="produto-preco">${produto.preco}€ <small>${produto.un}</small></span>
        </div>
    `;
});