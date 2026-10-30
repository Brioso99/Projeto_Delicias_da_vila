// Ficheiro: js/pascoa.js

const produtosPascoa = [
{ nome: "Doce Branco", preco: "13,00", un: "/kg" },
{ nome: "Doce Marmelada", preco: "13,00", un: "/kg" },
{ nome: "Tarte De Morango", preco: "16,00", un: "/kg" },
{ nome: "Miniaturas", preco: "17,00", un: "/un" },
{ nome: "Pão De Ló", preco: "18,50", un: "/un" },
{ nome: "Pão De Ló De Ovar", preco: "19,50", un: "/un" },
{ nome: "Rosca 1.0kg", preco: "3,40", un: "/un" },
{ nome: "Rosca 0.5kg", preco: "1,85", un: "/un" },
{ nome: "Rosca Doce", preco: "10,50", un: "/kg" },
{ nome: "Tartes Frutas Variadas", preco: "15,00", un: "/un" },
];

const contentorPascoa = document.getElementById('lista-pascoa');

produtosPascoa.forEach(produto => {
    contentorPascoa.innerHTML += `
        <div class="produto-item">
            <span class="produto-nome">• ${produto.nome}</span>
            <span class="produto-preco">${produto.preco}€ <small>${produto.un}</small></span>
        </div>
    `;
});

for (let i = 0; i < 50; i++) {
    

    const coelho = document.createElement('div');
    coelho.classList.add('coelho-pascoa');
    coelho.innerText = '🐇';


    const tamanho = Math.random() * 2 + 1;
    coelho.style.fontSize = `${tamanho}rem`;


    const fundo = Math.random() * 35 + 5;
    coelho.style.bottom = `${fundo}px`;

    const velAtravessar = Math.random() * 9 + 5;

    const velSaltar = Math.random() * 0.4 + 0.2;

    const delay = Math.random() * 12;

    coelho.style.animation = `
        atravessar-esq ${velAtravessar}s linear infinite ${delay}s,
        saltar ${velSaltar}s ease-in-out infinite alternate ${delay}s
    `;

    document.body.appendChild(coelho);
}

function enviarWhatsAppPascoa() {
    let nome = document.getElementById("nomeClientePascoa").value;
    
    if (nome.trim() === "") {
        alert("Por favor, escreva o seu nome antes de fazer a encomenda.");
        return; 
    }

    let numeroLoja = "351914531647"; 
    
    let mensagem = "Olá! O meu nome é " + nome + " e gostaria de fazer uma encomenda de Páscoa. ";
    
    let mensagemFormatada = encodeURIComponent(mensagem);

    let url = "https://wa.me/" + numeroLoja + "?text=" + mensagemFormatada;
    window.location.href = url;
}