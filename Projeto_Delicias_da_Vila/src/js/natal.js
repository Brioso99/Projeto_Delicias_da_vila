

const produtosNatal = [
{ nome: "Bolo Rainha", preco: "17,00", un: "/kg" },
{ nome: "Bolo Rei", preco: "17,00", un: "/kg" },
{ nome: "Bolo Rei De Chocolate", preco: "17,50", un: "/kg" },
{ nome: "Bolo Rei Escangalhado", preco: "17,50", un: "/kg" },
{ nome: "Bolo Rei Folhado", preco: "17,00", un: "/kg" },
{ nome: "Broinhas De Natal", preco: "18,00", un: "/kg" },
{ nome: "Aletria", preco: "12,50", un: "/un" },
{ nome: "Miniaturas", preco: "17,00", un: "/kg" },
{ nome: "Pão De Ceia", preco: "2,00", un: "/un" },
{ nome: "Pão De Ló", preco: "18,50", un: "/kg" },
{ nome: "Pão De Ló De Ovar", preco: "19,50", un: "/kg" },
{ nome: "Pudim", preco: "9,00", un: "/un" },
{ nome: "Rabanada Poveira", preco: "1,70", un: "/un" },
{ nome: "Rabanadas Cacete", preco: "1,60", un: "/un" },
{ nome: "Sonhos", preco: "17,00", un: "/kg" },
{ nome: "Tronco De Natal", preco: "16,00", un: "/kg" },
];

const contentorNatal = document.getElementById('lista-natal');

produtosNatal.forEach(produto => {
    contentorNatal.innerHTML += `
        <div class="produto-item">
            <span class="produto-nome">• ${produto.nome}</span>
            <span class="produto-preco">${produto.preco}€ <small>${produto.un}</small></span>
        </div>
    `;
});

function criarFloco() {
    const floco = document.createElement('div'); 
    floco.classList.add('floco-neve');          
    floco.innerText = '❄';                      
    
    floco.style.left = Math.random() * 100 + 'vw';
    
    const tempoQueda = Math.random() * 4 + 3;
    floco.style.animationDuration = tempoQueda + 's';
    
    floco.style.fontSize = Math.random() * 14 + 10 + 'px';
    
    document.body.appendChild(floco);
    
    setTimeout(() => {
        floco.remove();
    }, tempoQueda * 1000);
}

setInterval(criarFloco, 300);

function enviarWhatsAppNatal() {

    let nome = document.getElementById("nomeCliente").value;

    if (nome.trim() === "") {
        alert("Por favor, escreva o seu nome antes de fazer a encomenda.");
        return; 
    }

    let numeroLoja = "351914531647"; 

    let mensagem = "Olá! O meu nome é " + nome + " e gostaria de fazer uma encomenda de Natal. ";

    let mensagemFormatada = encodeURIComponent(mensagem);

    let url = "https://wa.me/" + numeroLoja + "?text=" + mensagemFormatada;
    window.location.href = url;
}