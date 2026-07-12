
const categoriasSnackbar = [
    {
        titulo: "Pães e Tostas:",
        itens: [
            { nome: "Ham and Cheese Croissant", preco: "2,25", un: "/un" },
            { nome: "Bread with Ham", preco: "1,45", un: "/un" },
            { nome: "Bread with Butter", preco: "0,80", un: "/un" },
            { nome: "Bread with Cheese.", preco: "1,50", un: "/un" },
            { nome: "Bread with ham and cheese", preco: "1,85", un: "/un" },
            { nome: "Buttered toast", preco: "1,70", un: "/un" },
            { nome: "Ham and Cheese Toastie", preco: "2,45", un: "/un" },
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