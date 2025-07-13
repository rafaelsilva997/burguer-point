(() => {
    const filtros = document.querySelectorAll('#filtros button');
    const itens = document.querySelectorAll('.item');
    const carrinho = document.getElementById('carrinho');
    const btnCarrinhoFixo = document.getElementById('btn-carrinho-fixo');
    const btnFecharCarrinho = document.getElementById('btn-fechar-carrinho');
    const carrinhoItensContainer = carrinho.querySelector('.carrinho-itens');
    const totalDisplay = carrinho.querySelector('.total');
    const btnFinalizar = carrinho.querySelector('.btn-finalizar');
    const btnMenuToggle = document.getElementById('btn-menu-toggle');
    const menuList = document.getElementById('menu-list');
    const voltarTopoBtn = document.getElementById('voltar-topo');

    // Dados do carrinho (nome, preço, qtd)
    let carrinhoDados = {};

    // Função para formatar preço para moeda brasileira
    function formatarPreco(valor) {
      return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    // Atualiza visual do carrinho
    function atualizarCarrinho() {
      carrinhoItensContainer.innerHTML = '';
      let total = 0;
      const keys = Object.keys(carrinhoDados);
      if (keys.length === 0) {
        carrinhoItensContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
        btnFinalizar.disabled = true;
        totalDisplay.textContent = `Total: ${formatarPreco(0)}`;
        return;
      }

      keys.forEach((key) => {
        const item = carrinhoDados[key];
        const itemTotal = item.preco * item.qtd;
        total += itemTotal;

        const div = document.createElement('div');
        div.className = 'carrinho-item';

        const info = document.createElement('div');
        info.className = 'carrinho-item-info';

        const nome = document.createElement('div');
        nome.className = 'carrinho-item-nome';
        nome.textContent = item.nome;

        const qtd = document.createElement('div');
        qtd.className = 'carrinho-item-qtd';
        qtd.textContent = `Quantidade: ${item.qtd}`;

        info.appendChild(nome);
        info.appendChild(qtd);

        const preco = document.createElement('div');
        preco.className = 'carrinho-item-preco';
        preco.textContent = formatarPreco(itemTotal);

        const btnRemove = document.createElement('button');
        btnRemove.className = 'btn-remove';
        btnRemove.setAttribute('aria-label', `Remover um ${item.nome} do carrinho`);
        btnRemove.innerHTML = '×';
        btnRemove.addEventListener('click', () => {
          removerItemDoCarrinho(key);
        });

        div.appendChild(info);
        div.appendChild(preco);
        div.appendChild(btnRemove);

        carrinhoItensContainer.appendChild(div);
      });

      totalDisplay.textContent = `Total: ${formatarPreco(total)}`;
      btnFinalizar.disabled = false;
    }

    // Adiciona item ao carrinho
    function adicionarItemAoCarrinho(nome, preco) {
      const key = nome.toLowerCase().replace(/\s+/g, '-');
      if (carrinhoDados[key]) {
        carrinhoDados[key].qtd++;
      } else {
        carrinhoDados[key] = { nome, preco, qtd: 1 };
      }
      atualizarCarrinho();
      mostrarFeedbackBotao(nome);
      mostrarCarrinho();
    }

    // Remove item do carrinho (decrementa quantidade)
    function removerItemDoCarrinho(key) {
      if (carrinhoDados[key]) {
        carrinhoDados[key].qtd--;
        if (carrinhoDados[key].qtd <= 0) {
          delete carrinhoDados[key];
        }
        atualizarCarrinho();
      }
    }

    // Feedback visual ao adicionar
    function mostrarFeedbackBotao(nome) {
      const btn = [...document.querySelectorAll('.btn-adicionar')].find(b => b.getAttribute('aria-label').toLowerCase().includes(nome.toLowerCase()));
      if (!btn) return;

      let badge = btn.querySelector('.badge-animada');
      if (!badge) {
        badge = document.createElement('span');
        badge.className = 'badge-animada';
        badge.textContent = '+1';
        btn.appendChild(badge);
        setTimeout(() => badge.remove(), 800);
      }
    }

    // Filtrar itens do cardápio
    filtros.forEach(botao => {
      botao.addEventListener('click', () => {
        filtros.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        botao.classList.add('active');
        botao.setAttribute('aria-pressed', 'true');

        const filtro = botao.getAttribute('data-filter');

        itens.forEach(item => {
          if (filtro === 'todos' || item.classList.contains(filtro)) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });

    // Eventos dos botões adicionar
    document.querySelectorAll('.btn-adicionar').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const item = e.target.closest('.item');
        if (!item) return;
        const nome = item.querySelector('.item-name').childNodes[0].textContent.trim();
        const precoTexto = item.querySelector('.price').textContent.replace('R$', '').replace(',', '.').trim();
        const preco = parseFloat(precoTexto);
        adicionarItemAoCarrinho(nome, preco);
      });
    });

    // Botão abrir carrinho (mobile)
    btnCarrinhoFixo.addEventListener('click', () => {
      mostrarCarrinho();
    });

    // Botão fechar carrinho (mobile)
    btnFecharCarrinho.addEventListener('click', () => {
      esconderCarrinho();
      btnCarrinhoFixo.focus();
    });

    // Mostrar carrinho (mobile)
    function mostrarCarrinho() {
      if (window.innerWidth <= 900) {
        carrinho.classList.add('mostrar');
        carrinho.focus();
        btnCarrinhoFixo.setAttribute('aria-expanded', 'true');
      }
    }
    // Esconder carrinho (mobile)
    function esconderCarrinho() {
      if (window.innerWidth <= 900) {
        carrinho.classList.remove('mostrar');
        btnCarrinhoFixo.setAttribute('aria-expanded', 'false');
      }
    }

    // Botão finalizar pedido (WhatsApp)
    btnFinalizar.addEventListener('click', () => {
      if (Object.keys(carrinhoDados).length === 0) return;

      let mensagem = 'Olá, gostaria de fazer o seguinte pedido:%0A';
      Object.values(carrinhoDados).forEach(item => {
        mensagem += `- ${item.qtd}x ${item.nome}%0A`;
      });
      const total = Object.values(carrinhoDados).reduce((acc, i) => acc + i.preco * i.qtd, 0);
      mensagem += `%0ATotal: R$ ${total.toFixed(2).replace('.', ',')}`;

      const numeroWhats = '5511977689354';
      const url = `https://wa.me/${numeroWhats}?text=${mensagem}`;
      window.open(url, '_blank');
    });

    // Toggle menu mobile
    btnMenuToggle.addEventListener('click', () => {
      const isExpanded = btnMenuToggle.getAttribute('aria-expanded') === 'true';
      btnMenuToggle.setAttribute('aria-expanded', String(!isExpanded));
      menuList.classList.toggle('show');

      // Ajustar tab index nos links do menu
      const links = menuList.querySelectorAll('a');
      links.forEach(link => {
        link.tabIndex = isExpanded ? -1 : 0;
      });

      if (!isExpanded) {
        // Se abriu, foco no primeiro link
        menuList.querySelector('a').focus();
      } else {
        btnMenuToggle.focus();
      }
    });

    // Controle de foco do menu para acessibilidade
    menuList.querySelectorAll('a').forEach(link => {
      link.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          btnMenuToggle.click();
          btnMenuToggle.focus();
        }
      });
    });

    // Voltar ao topo
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        voltarTopoBtn.classList.add('show');
      } else {
        voltarTopoBtn.classList.remove('show');
      }
    });

    voltarTopoBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      btnMenuToggle.focus();
    });

    // Inicializar tabIndex do menu (desktop)
    if (window.innerWidth > 900) {
      menuList.querySelectorAll('a').forEach(link => (link.tabIndex = 0));
    } else {
      menuList.querySelectorAll('a').forEach(link => (link.tabIndex = -1));
    }

    // Fechar carrinho ao redimensionar para desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) {
        esconderCarrinho();
        menuList.classList.remove('show');
        btnMenuToggle.setAttribute('aria-expanded', 'false');
        menuList.querySelectorAll('a').forEach(link => (link.tabIndex = 0));
      } else {
        menuList.querySelectorAll('a').forEach(link => (link.tabIndex = -1));
      }
    });

    // Inicializa carrinho vazio
    atualizarCarrinho();
  })();