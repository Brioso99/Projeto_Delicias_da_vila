
const produtosPadaria = [
{ nome: "Bola De Berlim", preco: "1,35", un: "/un" },
{ nome: "Crossaint", preco: "1,10", un: "/un" },
{ nome: "Crossaint C/ Chocolate", preco: "1,40", un: "/un" },
{ nome: "Eclair", preco: "1,35", un: "/un" },
{ nome: "Muffin", sub: "(Chocolate/Noz/Cenoura/Laranja)", preco: "1,30", un: "/un" },
{ nome: "Panick Misto", preco: "1,70", un: "/un" },
{ nome: "Pastel De Nata", preco: "1,10", un: "/un" },
];

const contentor = document.getElementById('lista-padaria');

produtosPadaria.forEach(produto => {
  contentor.innerHTML += `
    <div class="produto-item">
      <span class="produto-nome">• ${produto.nome} 
        ${produto.sub ? `<span class="detalhe-produto">${produto.sub}</span>` : ''}
      </span>
      <span class="produto-preco">${produto.preco}€ <small>${produto.un}</small></span>
    </div>
  `;
});