const produtosNamorados = [
{ nome: "Chessecake", preco: "14,50", un: "/kg" },
{ nome: "Red Velvet", preco: "-", un: "/un" },
{ nome: "Semifrio", preco: "16,00", un: "/kg" },

];

const contentor = document.getElementById('lista-namorados');

produtosNamorados.forEach(produto => {
    contentor.innerHTML += `
        <div class="produto-item">
            <span class="produto-nome">• ${produto.nome}</span>
            <span class="produto-preco">${produto.preco}€ <small>${produto.un}</small></span>
        </div>
    `;
});
function criarCoracao() {
    const coracao = document.createElement('div');
    coracao.innerHTML = '❤️';
    coracao.className = 'coracao-caindo';
    coracao.style.left = Math.random() * 100 + 'vw';
    coracao.style.animationDuration = (Math.random() * 3 + 3) + 's';
    document.body.appendChild(coracao);
    setTimeout(() => coracao.remove(), 6000);
}
setInterval(criarCoracao, 500);