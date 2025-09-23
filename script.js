// --- VARIÁVEIS GLOBAIS ---
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
let total = parseFloat(localStorage.getItem('total')) || 0;
let adicionaisSelecionados = [];
let lancheAtual = null;
let precoAtual = 0;

// --- ATUALIZA O CARRINHO NA TELA ---
function atualizarCarrinho() {
    const lista = document.getElementById('listaCarrinho');
    lista.innerHTML = '';
    carrinho.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(2)}
                        ${item.adicionais && item.adicionais.length > 0 ? '<br>Adicionais: ' + item.adicionais.join(', ') : ''}
                        <button onclick="removerItem(${index})">❌</button>`;
        lista.appendChild(li);
    });
    document.getElementById('qtdItens').innerText = carrinho.length;
    document.getElementById('totalCarrinho').innerText = `Total: R$ ${total.toFixed(2)}`;
    // salva no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    localStorage.setItem('total', total);
}

// --- ADICIONAR LANCHES SIMPLES ---
function adicionarCombo(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
}

// --- ADICIONAR BEBIDAS ---
function adicionarBebida(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
}

// --- REMOVER ITEM ---
function removerItem(index) {
    total -= carrinho[index].preco;
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

// --- LIMPAR CARRINHO ---
function limparCarrinho() {
    if(confirm("Deseja realmente limpar o carrinho?")) {
        carrinho = [];
        total = 0;
        atualizarCarrinho();
    }
}

// --- MODAL DE ADICIONAIS ---
function abrirAdicionaisModal(nome, preco) {
    lancheAtual = nome;
    precoAtual = preco;
    adicionaisSelecionados = [];
    document.getElementById('modalTitulo').innerText = `Escolha adicionais para ${nome}`;
    const form = document.getElementById('formAdicionais');
    form.innerHTML = `
        <label><input type="checkbox" value="Pote de Maionese"> Pote de Maionese +R$ 3,00</label>
        <label><input type="checkbox" value="Hambúrguer 160g"> Hambúrguer 160g +R$ 8,00</label>
        <label><input type="checkbox" value="Presunto"> Presunto +R$ 2,00</label>
        <label><input type="checkbox" value="Queijo"> Queijo +R$ 2,50</label>
        <label><input type="checkbox" value="Bacon"> Bacon +R$ 4,00</label>
        <label><input type="checkbox" value="Ovo"> Ovo +R$ 2,00</label>
        <label><input type="checkbox" value="Batata Palha"> Batata Palha +R$ 2,00</label>
        <label><input type="checkbox" value="Cheddar"> Cheddar +R$ 2,50</label>
        <label><input type="checkbox" value="Batata Frita 150g + Pote de Maionese"> Batata Frita 150g + Pote de Maionese +R$ 5,00</label>
    `;
    document.getElementById('modalAdicionais').style.display = 'flex';
}

// --- FECHAR MODAL ---
function fecharModal() {
    document.getElementById('modalAdicionais').style.display = 'none';
}

// --- ADICIONAR AO CARRINHO COM ADICIONAIS ---
function adicionarAoCarrinhoModal() {
    const checkboxes = document.querySelectorAll('#formAdicionais input[type=checkbox]');
    let adicionais = [];
    let precoExtra = 0;

    checkboxes.forEach(cb => {
        if(cb.checked){
            adicionais.push(cb.value);
            // preço extra de cada adicional
            if(cb.value === 'Pote de Maionese') precoExtra += 3.0;
            if(cb.value === 'Hambúrguer 160g') precoExtra += 8.0;
            if(cb.value === 'Presunto') precoExtra += 2;
            if(cb.value === 'Queijo') precoExtra += 2.5;
            if(cb.value === 'Bacon') precoExtra += 4;
            if(cb.value === 'Ovo') precoExtra += 2.0;
            if(cb.value === 'Batata Palha') precoExtra += 2.0;
            if(cb.value === 'Cheddar') precoExtra += 2.5;
            if(cb.value === 'Batata Frita 150g + Pote de Maionese') precoExtra += 5.0;

        }
    });

    let precoTotal = precoAtual + precoExtra;
    carrinho.push({ nome: lancheAtual, preco: precoTotal, adicionais });
    total += precoTotal;
    atualizarCarrinho();
    fecharModal();
}

// --- FINALIZAR PEDIDO VIA WHATSAPP ---
function finalizarPedido() {
    if(carrinho.length === 0){
        alert("O carrinho está vazio!");
        return;
    }

    // Pega nome e endereço
    let nome = document.getElementById("nomeCliente").value.trim();
    let endereco = document.getElementById("enderecoCliente").value.trim();

    if(!nome || !endereco){
        alert("Por favor, preencha seu nome e endereço!");
        return;
    }

    let pedido = "Olá, gostaria de fazer o pedido:\n\n";

    carrinho.forEach(item=>{
        pedido += `${item.nome} - R$ ${item.preco.toFixed(2)}\n`;
        if(item.adicionais && item.adicionais.length>0){
            pedido += `Adicionais: ${item.adicionais.join(", ")}\n`;
        }
    });

    pedido += `\nTotal: R$ ${total.toFixed(2)}\n`;
    pedido += `Nome: ${nome}\nEndereço: ${endereco}\n`;
    pedido += `⚠️ Lembre-se: a taxa de entrega não está inclusa.`;

    let numeroWhats = "5511977689354"; // Seu número com código do Brasil
    let url = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(pedido)}`;
    window.open(url);
}
