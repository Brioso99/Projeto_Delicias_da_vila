// Ficheiro: js/pai.js

const produtosPai = [
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },
    { nome: "Bolo do Melhor Pai", preco: "99,99", un: "/un" },



];

const contentorPai = document.getElementById('lista-pai');

produtosPai.forEach(produto => {
    contentorPai.innerHTML += `
        <div class="produto-item">
            <span class="produto-nome">• ${produto.nome}</span>
            <span class="produto-preco">${produto.preco}€ <small>${produto.un}</small></span>
        </div>
    `;
});
