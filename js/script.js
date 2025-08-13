// script.js

const produtos = [
    {
      id: 1,
      nome: "X-Burguer",
      categoria: "lanches",
      descricao: "Pão macio, hambúrguer artesanal suculento, mussarela e maionese caseira.",
      preco: 16.00,
    },
    {
      id: 2,
      nome: "X-Salada",
      categoria: "lanches",
      descricao: "Pão macio, hambúrguer artesanal suculento, mussarela, alface, tomate e maionese caseira.",
      preco: 17.00,
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      nome: "X-Egg",
      categoria: "lanches",
      descricao: "Pão macio, hambúrguer artesanal suculento, mussarela, ovo e maionese caseira.",
      preco: 17.00,
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      nome: "X-Egg Salada",
      categoria: "lanches",
      descricao: "Pão macio, hambúrguer artesanal suculento, mussarela, ovo, alface, tomate e maionese caseira.",
      preco: 18.00,
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 5,
      nome: "X-Bacon",
      categoria: "lanches",
      descricao: "Pão macio, hambúrguer artesanal suculento, mussarela, bacon fatiado e maionese caseira.",
      preco: 20.00,
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      nome: "X-Bacon Salada",
      categoria: "lanches",
      descricao: "Pão macio, hambúrguer artesanal suculento, mussarela, bacon fatiado, alface, tomate e maionese caseira.",
      preco: 21.00,
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 7,
      nome: "X-Egg Bacon",
      categoria: "lanches",
      descricao: "Pão macio, hambúrguer artesanal suculento, mussarela, ovo, bacon fatiado e maionese caseira.",
      preco: 23.00,
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 8,
      nome: "X-Egg Bacon Salada",
      categoria: "lanches",
      descricao: "Pão macio, hambúrguer artesanal suculento, mussarela, ovo, bacon fatiado, alface, tomate e maionese caseira.",
      preco: 24.00,
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 8,
      nome: "X-Tudo",
      categoria: "lanches",
      descricao: "Pão macio, hambúrguer artesanal suculento, presunto, mussarela, cheddar, ovo, bacon fatiado, alface, tomate e maionese caseira.",
      preco: 28.00,
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 9,
      nome: "X-Frango",
      categoria: "lanches",
      descricao: "Pão macio, filé de frango fatiado, mussarela e maionese caseira.",
      preco: 16.00,
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 10,
      nome: "X-Frango Salada",
      categoria: "lanches",
      descricao: "Pão macio, filé de frango fatiado, mussarela, alface, tomate e maionese caseira.",
      preco: 17.00,
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 11,
      nome: "X-Frango Egg",
      categoria: "lanches",
      descricao: "Pão macio, filé de frango fatiado, mussarela, ovo e maionese caseira.",
      preco: 17.00,
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 12,
      nome: "X-Frango Egg Salada",
      categoria: "lanches",
      descricao: "Pão macio, filé de frango fatiado, mussarela, ovo, alface, tomate e maionese caseira.",
      preco: 18.00,
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 13,
      nome: "X-Frango Bacon",
      categoria: "lanches",
      descricao: "Pão macio, filé de frango fatiado, mussarela, bacon fatiado e maionese caseira.",
      preco: 20.00,
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 14,
      nome: "X-Frango Bacon Salada",
      categoria: "lanches",
      descricao: "Pão macio, filé de frango fatiado, mussarela, bacon fatiado, alface, tomate e maionese caseira.",
      preco: 21.00,
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 15,
      nome: "X-Frango Egg Bacon",
      categoria: "lanches",
      descricao: "Pão macio, filé de frango fatiado, mussarela, ovo, bacon fatiado, e maionese caseira.",
      preco: 23.00,
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 16,
      nome: "X-Frango Egg Bacon Salada",
      categoria: "lanches",
      descricao: "Pão macio, filé de frango fatiado, mussarela, ovo, bacon fatiado, alface, tomate e maionese caseira.",
      preco: 24.00,
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 16,
      nome: "X-Frango Tudo",
      categoria: "lanches",
      descricao: "Pão macio, filé de frango fatiado,presunto, mussarela, ovo, cheddar, bacon fatiado, alface, tomate e maionese caseira.",
      preco: 28.00,
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 17,
      nome: "X-Linguiça",
      categoria: "lanches",
      descricao: "Pão macio, hambúrguer artesanal de linguiça, mussarela, maionese caseira.",
      preco: 16.00,
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 18,
      nome: "X-Linguiça Salada",
      categoria: "lanches",
      descricao: "Pão macio, hambúrguer artesanal de linguiça, mussarela, alface, tomate e maionese caseira.",
      preco: 17.00,
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 19,
      nome: "X-Linguiça Egg",
      categoria: "lanches",
      descricao: "Pão macio, hambúrguer artesanal de linguiça, mussarela, ovo, maionese caseira.",
      preco: 17.00,
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 20,
      nome: "X-Linguiça Egg Salada",
      categoria: "lanches",
      descricao: "Pão macio, hambúrguer artesanal de linguiça, mussarela, ovo, alface, tomate e maionese caseira.",
      preco: 18.00,
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 21,
      nome: "X-Linguiça Bacon",
      categoria: "lanches",
      descricao: "Pão macio, hambúrguer artesanal de linguiça, mussarela, bacon fatiado e maionese caseira.",
      preco: 20.00,
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 22,
      nome: "X-Linguiça Bacon Salada",
      categoria: "lanches",
      descricao: "Pão macio, hambúrguer artesanal de linguiça, mussarela, bacon fatiado, alface, tomate e maionese caseira.",
      preco: 21.00,
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 23,
      nome: "X-Linguiça Egg Bacon",
      categoria: "lanches",
      descricao: "Pão macio, hambúrguer artesanal de linguiça, mussarela, ovo, bacon fatiado e maionese caseira.",
      preco: 23.00,
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 24,
      nome: "X-Linguiça Egg Bacon Salada",
      categoria: "lanches",
      descricao: "Pão macio, hambúrguer artesanal de linguiça, mussarela, ovo, bacon fatiado, alface, tomate e maionese caseira.",
      preco: 24.00,
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 24,
      nome: "X-Linguiça Tudo",
      categoria: "lanches",
      descricao: "Pão macio, hambúrguer artesanal de linguiça, presunto, mussarela, ovo, cheddar, bacon fatiado, alface, tomate e maionese caseira.",
      preco: 28.00,
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 25,
      nome: "Porção de Batata Pequena 300g",
      categoria: "porcoes",
      descricao: "Porção generosa de batatas fritas crocantes com maionese caseira.",
      preco: 15.00,
      imagem: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 26,
      nome: "Porção de Batata Média 400g",
      categoria: "porcoes",
      descricao: "Porção generosa de batatas fritas crocantes com maionese caseira.",
      preco: 17.00,
      imagem: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 27,
      nome: "Porção de Batata Grande 500g",
      categoria: "porcoes",
      descricao: "Porção generosa de batatas fritas crocantes com maionese caseira.",
      preco: 19.00,
      imagem: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 28,
      nome: "Batatas Fritas 150g e Mousse",
      categoria: "combos",
      descricao: "Complemente seu lanche com batata frita crocante 150g + Maionese Caseira e mousse delicioso!.",
      preco: 6.00,
      imagem: "https://images.unsplash.com/photo-1571091718767-fb6e5b6d20fa?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 29,
      nome: "Cola Coca (Lata 350ml)",
      categoria: "bebidas",
      descricao: "Lata gelada, ideal pra acompanhar seu lanche.",
      preco: 6.00,
      imagem: "https://images.unsplash.com/photo-1601924638867-3a73c2f4f20f?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 30,
      nome: "Coca-Cola Zero (Lata 350ml)",
      categoria: "bebidas",
      descricao: "Sabor original, zero açúcar. Bem gelada pra acompanhar seu lanche.",
      preco: 6.00,
      imagem: "https://images.unsplash.com/photo-1601924638867-3a73c2f4f20f?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 31,
      nome: "Guaraná Antarctica (Lata 350ml)",
      categoria: "bebidas",
      descricao: "Sabor brasileiro e refrescante. Ideal com qualquer lanche!",
      preco: 6.00,
      imagem: "https://images.unsplash.com/photo-1601924638867-3a73c2f4f20f?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 32,
      nome: "Sprite (Lata 350ml)",
      categoria: "bebidas",
      descricao: "Refrescância cítrica e gelada para acompanhar seu lanche.",
      preco: 6.00,
      imagem: "https://images.unsplash.com/photo-1601924638867-3a73c2f4f20f?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 33,
      nome: "Fanta Laranja (Lata 350ml)",
      categoria: "bebidas",
      descricao: "Sabor cítrico e doce, bem gelada para seu lanche.",
      preco: 6.00,
      imagem: "https://images.unsplash.com/photo-1601924638867-3a73c2f4f20f?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 34,
      nome: "Fanta Uva (Lata 350ml)",
      categoria: "bebidas",
      descricao: "Sabor doce e refrescante, geladinha para acompanhar seu lanche.",
      preco: 6.00,
      imagem: "https://images.unsplash.com/photo-1601924638867-3a73c2f4f20f?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 35,
      nome: "Coca-Cola (Garrafa 2L)",
      categoria: "bebidas",
      descricao: "A clássica Coca-Cola em garrafa grande, para compartilhar e aproveitar.",
      preco: 15.00,
      imagem: "https://images.unsplash.com/photo-1601924638867-3a73c2f4f20f?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 36,
      nome: "Guaraná Antarctica (Garrafa 2L)",
      categoria: "bebidas",
      descricao: "Refrescância e sabor brasileiro em garrafa para toda a família.",
      preco: 14.00,
      imagem: "https://images.unsplash.com/photo-1601924638867-3a73c2f4f20f?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 37,
      nome: "Fanta Laranja (Garrafa 2L)",
      categoria: "bebidas",
      descricao: "Sabor cítrico e doce em garrafa grande para compartilhar.",
      preco: 14.00,
      imagem: "https://images.unsplash.com/photo-1601924638867-3a73c2f4f20f?auto=format&fit=crop&w=400&q=80"
    }
  ];
  
  const taxaEntrega = 5.00;
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  
  const cardapioEl = document.getElementById('cardapio');
  const carrinhoEl = document.getElementById('carrinho');
  const totalEl = document.getElementById('total');
  const buscaEl = document.getElementById('busca');
  const filtroPrecoEl = document.getElementById('filtroPreco');
  const botoesCategorias = document.querySelectorAll('.botoes-categorias button');
  const nomeClienteEl = document.getElementById('nomeCliente');
  const enderecoClienteEl = document.getElementById('enderecoCliente');
  const obsClienteEl = document.getElementById('obsCliente');
  const enviarPedidoBtn = document.getElementById('enviarPedido');
  const modalConfirm = document.getElementById('modalConfirm');
  const resumoModal = document.getElementById('resumoModal');
  const btnCancelar = document.getElementById('btnCancelar');
  const btnConfirmar = document.getElementById('btnConfirmar');
  const btnToggleTheme = document.getElementById('btnToggleTheme');
  const btnTopo = document.getElementById('btnTopo');
  
  function formatarPreco(valor) {
    return valor.toFixed(2).replace('.', ',');
  }
  
  function renderizarProdutos() {
    const categoriaAtiva = document.querySelector('.botoes-categorias button.ativo').dataset.categoria;
    const busca = buscaEl.value.toLowerCase();
    const filtroPreco = filtroPrecoEl.value;
  
    let produtosFiltrados = produtos.filter(p => {
      const categoriaOk = categoriaAtiva === 'todos' || p.categoria === categoriaAtiva;
      const buscaOk = p.nome.toLowerCase().includes(busca) || p.descricao.toLowerCase().includes(busca);
      return categoriaOk && buscaOk;
    });
  
    if (filtroPreco === 'menor') {
      produtosFiltrados.sort((a, b) => a.preco - b.preco);
    } else if (filtroPreco === 'maior') {
      produtosFiltrados.sort((a, b) => b.preco - a.preco);
    }
  
    cardapioEl.innerHTML = '';
  
    if (produtosFiltrados.length === 0) {
      cardapioEl.innerHTML = '<p>Nenhum produto encontrado.</p>';
      return;
    }
  
    produtosFiltrados.forEach(prod => {
      const prodNoCarrinho = carrinho.find(i => i.id === prod.id);
      const qtd = prodNoCarrinho ? prodNoCarrinho.qtd : 1;
  
      const card = document.createElement('article');
      card.className = 'card';
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `${prod.nome}, preço R$ ${formatarPreco(prod.preco)}`);
  
      card.innerHTML = `
        
        <h4>${prod.nome}</h4>
        <p class="desc">${prod.descricao}</p>
        <p class="preco">R$ ${formatarPreco(prod.preco)}</p>
        <label for="qtd-${prod.id}">Quantidade:</label>
        <input type="number" id="qtd-${prod.id}" name="qtd-${prod.id}" min="1" max="99" value="${qtd}" aria-label="Quantidade para ${prod.nome}" />
        <button class="btn-add" aria-label="Adicionar ${prod.nome} ao carrinho">
          Adicionar
          <svg aria-hidden="true" width="20" height="20" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4" /><circle cx="7" cy="21" r="1" /><circle cx="17" cy="21" r="1" /></svg>
        </button>
        <button class="btn-favorito" aria-label="Adicionar aos favoritos">
          <svg aria-hidden="true" width="20" height="20" fill="none" stroke="#d84315" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </button>
      `;
  
      const inputQtd = card.querySelector('input[type="number"]');
      inputQtd.addEventListener('change', e => {
        let val = parseInt(e.target.value);
        if (isNaN(val) || val < 1) val = 1;
        if (val > 99) val = 99;
        e.target.value = val;
      });
  
      card.querySelector('button.btn-add').addEventListener('click', () => {
        adicionarAoCarrinho(prod.id, parseInt(inputQtd.value));
        card.classList.add('adicionado');
        setTimeout(() => card.classList.remove('adicionado'), 500);
      });
  
      const btnFav = card.querySelector('button.btn-favorito');
      // Estado favorito
      if (favoritos.includes(prod.id)) {
        btnFav.innerHTML = '<svg aria-hidden="true" width="20" height="20" fill="#d84315" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
        btnFav.setAttribute('aria-label', `Remover ${prod.nome} dos favoritos`);
      }
      btnFav.addEventListener('click', () => {
        toggleFavorito(prod.id, btnFav);
      });
  
      cardapioEl.appendChild(card);
    });
  }
  
  function adicionarAoCarrinho(id, qtd) {
    const index = carrinho.findIndex(i => i.id === id);
    if (index >= 0) {
      carrinho[index].qtd += qtd;
    } else {
      carrinho.push({ id, qtd });
    }
    salvarCarrinho();
    renderizarCarrinho();
    checarFormulario();
  }
  
  function removerDoCarrinho(id) {
    carrinho = carrinho.filter(i => i.id !== id);
    salvarCarrinho();
    renderizarCarrinho();
    checarFormulario();
  }
  
  function alterarQtd(id, novaQtd) {
    const item = carrinho.find(i => i.id === id);
    if (item) {
      item.qtd = novaQtd > 0 ? novaQtd : 1;
      salvarCarrinho();
      renderizarCarrinho();
      checarFormulario();
    }
  }
  
  function renderizarCarrinho() {
    carrinhoEl.innerHTML = '';
  
    if (carrinho.length === 0) {
      carrinhoEl.innerHTML = '<li>Seu carrinho está vazio.</li>';
      totalEl.textContent = formatarPreco(0);
      enviarPedidoBtn.disabled = true;
      return;
    }
  
    let total = 0;
  
    carrinho.forEach(item => {
      const prod = produtos.find(p => p.id === item.id);
      if (!prod) return;
  
      total += prod.preco * item.qtd;
  
      const li = document.createElement('li');
      li.className = 'item-carrinho';
      li.innerHTML = `
        <div>${prod.nome} - R$ ${formatarPreco(prod.preco)}</div>
        <input type="number" min="1" max="99" value="${item.qtd}" aria-label="Quantidade de ${prod.nome}" />
        <button class="remove" aria-label="Remover ${prod.nome} do pedido" title="Remover item">
          <svg aria-hidden="true" width="16" height="16" fill="none" stroke="#d84315" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      `;
  
      li.querySelector('input').addEventListener('change', e => {
        const novaQtd = parseInt(e.target.value);
        alterarQtd(item.id, novaQtd);
      });
  
      li.querySelector('button.remove').addEventListener('click', () => {
        removerDoCarrinho(item.id);
      });
  
      carrinhoEl.appendChild(li);
    });
  
    total += taxaEntrega;
    totalEl.textContent = formatarPreco(total);
    checarFormulario();
  }
  
  function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }
  
  function toggleFavorito(id, botao) {
    const index = favoritos.indexOf(id);
    if (index >= 0) {
      favoritos.splice(index, 1);
      botao.innerHTML = '<svg aria-hidden="true" width="20" height="20" fill="none" stroke="#d84315" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
      botao.setAttribute('aria-label', 'Adicionar aos favoritos');
    } else {
      favoritos.push(id);
      botao.innerHTML = '<svg aria-hidden="true" width="20" height="20" fill="#d84315" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
      botao.setAttribute('aria-label', 'Remover dos favoritos');
    }
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }
  
  function checarFormulario() {
    const temItens = carrinho.length > 0;
    const nomeValido = nomeClienteEl.checkValidity();
    const enderecoValido = enderecoClienteEl.checkValidity();
  
    enviarPedidoBtn.disabled = !(temItens && nomeValido && enderecoValido);
  }
  
  function gerarMensagemWhatsApp() {
    const nomeCliente = nomeClienteEl.value.trim();
    const enderecoCliente = enderecoClienteEl.value.trim();
    const obsCliente = obsClienteEl.value.trim();
    let mensagem = `*Pedido Burguer Point*\n\n`;
  
    mensagem += `*Itens:*\n`;
    let total = 0;
  
    carrinho.forEach(item => {
      const prod = produtos.find(p => p.id === item.id);
      if (!prod) return;
      const subtotal = prod.preco * item.qtd;
      mensagem += `- ${item.qtd} x ${prod.nome} (R$ ${formatarPreco(prod.preco)}) = R$ ${formatarPreco(subtotal)}\n`;
      total += subtotal;
    });
  
    mensagem += `\n*Taxa de entrega:* R$ ${formatarPreco(taxaEntrega)}\n`;
    total += taxaEntrega;
  
    mensagem += `*Total:* R$ ${formatarPreco(total)}\n\n`;
    mensagem += `*Nome:* ${nomeCliente}\n`;
    mensagem += `*Endereço:* ${enderecoCliente}\n`;
    if (obsCliente) mensagem += `*Observações:* ${obsCliente}\n`;
  
    return encodeURIComponent(mensagem);
  }
  
  function abrirWhatsApp() {
    const telefone = '5511977689354';
    const url = `https://wa.me/${telefone}?text=${gerarMensagemWhatsApp()}`;
    window.open(url, '_blank');
  }
  
  function atualizarTabCategoria(clicado) {
    botoesCategorias.forEach(btn => {
      btn.classList.remove('ativo');
      btn.setAttribute('aria-selected', 'false');
      btn.setAttribute('aria-pressed', 'false');
      btn.setAttribute('tabindex', '-1');
    });
    clicado.classList.add('ativo');
    clicado.setAttribute('aria-selected', 'true');
    clicado.setAttribute('aria-pressed', 'true');
    clicado.setAttribute('tabindex', '0');
    clicado.focus();
    renderizarProdutos();
  }
  
  function scrollParaTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  function init() {
    renderizarProdutos();
    renderizarCarrinho();
  
    buscaEl.addEventListener('input', renderizarProdutos);
    filtroPrecoEl.addEventListener('change', renderizarProdutos);
  
    botoesCategorias.forEach(btn => {
      btn.addEventListener('click', () => atualizarTabCategoria(btn));
      btn.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          let next = btn.nextElementSibling || botoesCategorias[0];
          next.focus();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          let prev = btn.previousElementSibling || botoesCategorias[botoesCategorias.length -1];
          prev.focus();
        }
      });
    });
  
    nomeClienteEl.addEventListener('input', checarFormulario);
    enderecoClienteEl.addEventListener('input', checarFormulario);
    obsClienteEl.addEventListener('input', checarFormulario);
  
    enviarPedidoBtn.addEventListener('click', () => {
      if (enviarPedidoBtn.disabled) return;
      modalConfirm.showModal();
      resumoModal.textContent = decodeURIComponent(gerarMensagemWhatsApp()).replace(/\*/g,'');
    });
  
    btnCancelar.addEventListener('click', () => {
      modalConfirm.close();
    });
  
    btnConfirmar.addEventListener('click', () => {
      modalConfirm.close();
      abrirWhatsApp();
    });
  
    btnToggleTheme.addEventListener('click', () => {
      if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.removeItem('tema');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('tema', 'dark');
      }
    });
  
    // Tema salvo no localStorage
    if (localStorage.getItem('tema') === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  
    // Mostrar botão topo quando scrollar
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        btnTopo.hidden = false;
      } else {
        btnTopo.hidden = true;
      }
    });
  
    btnTopo.addEventListener('click', scrollParaTopo);
  }
  
  window.onload = init;
  