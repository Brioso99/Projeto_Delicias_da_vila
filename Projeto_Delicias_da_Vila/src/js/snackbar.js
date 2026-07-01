
const categoriasSnackbar = [
    {
        titulo: "Pães e Tostas:",
        itens: [
            { nome: "Crossaint Misto", preco: "2,25", un: "/un" },
            { nome: "Pão Com Fiambre", preco: "1,45", un: "/un" },
            { nome: "Pão Com Manteiga", preco: "0,80", un: "/un" },
            { nome: "Pão Com Queijo", preco: "1,50", un: "/un" },
            { nome: "Pão Misto", preco: "1,85", un: "/un" },
            { nome: "Torradas", preco: "1,70", un: "/un" },
            { nome: "Tostas Mistas", preco: "2,45", un: "/un" },
        ]
    },
];

const contentor = document.getElementById('lista-padaria'); 

categoriasSnackbar.forEach((cat, index) => {
    
    if (index > 0) {
        
        contentor.innerHTML += `<h2 class="subtitulo-categoria">${cat.titulo}</h2>`;
    }
    
    cat.itens.forEach(produto => {
        contentor.innerHTML += `
            <div class="produto-item">
                <span class="produto-nome">• ${produto.nome}</span>
                <span class="produto-preco">${produto.preco}€ <small>${produto.un}</small></span>
            </div>
        `; 
    });
});