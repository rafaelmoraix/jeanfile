function carregarFormulario(url, containerId) {
    const container = document.getElementById(containerId);
    fetch(url)
        .then(response => response.text())
        .then(html => {
            container.innerHTML = html;
            container.style.display = 'block';
            container.querySelectorAll('.cancelbtn').forEach(btn => {
                btn.addEventListener('click', () => (container.style.display = 'none'));
            });
        })
        .catch(err => console.error('Erro ao carregar o formulário:', err));
}

document.querySelectorAll('[data-target]').forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        const target = this.dataset.target;
        
        const url = `views/forms/${target}.html`;
        carregarFormulario(url, 'formulario-container');
    });
});

// Seleciona o link "Migrar Aluno"
const migrarAlunoLink = document.querySelector('a[data-target="f_migracao_aluno.html"]');

// Adiciona um evento de clique ao link
migrarAlunoLink.addEventListener('click', (event) => {
  event.preventDefault(); // Impede o comportamento padrão do link

  // Chama a função carregarFormulario para carregar o formulário de migração de aluno
  carregarFormulario('views/forms/f_migracao_aluno.html', 'formulario-container');
});


//MODO DARK DO SITE

document.addEventListener('DOMContentLoaded', () => {
    // Função para configurar as máscaras nos campos
    function configurarMascaras() {
        // Máscara para CNPJ
        document.querySelectorAll('input[name="cnpj"]').forEach(input => {
            Inputmask("99.999.999/9999-99").mask(input);
        });

        // Máscara para telefone (pode ser telefone1 e telefone2)
        document.querySelectorAll('input[name^="telefone"]').forEach(input => {
            Inputmask("(99) 99999-9999").mask(input);
        });

        // Máscara para CEP
        document.querySelectorAll('input[name="cep_inst"]').forEach(input => {
            Inputmask("99999-999").mask(input);
        });

        // Máscara para e-mail
        document.querySelectorAll('input[name^="email"]').forEach(input => {
            Inputmask({ alias: "email" }).mask(input);
        });
    }

    // Chama a função assim que o conteúdo inicial estiver pronto
    configurarMascaras();

    // Observa alterações no contêiner de formulários dinâmicos
    const container = document.getElementById('formulario-container');
    if (container) {
        const observer = new MutationObserver(() => configurarMascaras());
        observer.observe(container, { childList: true });
    }
});

        document.addEventListener('DOMContentLoaded', () => {
            function configurarEventosFormulario() {
                const fileInput = document.getElementById('file');
                const fileChosen = document.getElementById('file-chosen');
                if (fileInput && fileChosen) {
                    fileInput.addEventListener('change', () => {
                        if (fileInput.files.length > 0) {
                            fileChosen.textContent = fileInput.files[0].name; // Exibe o nome do arquivo selecionado
                        } else {
                            fileChosen.textContent = "Nenhum arquivo escolhido"; // Caso o input seja limpo
                        }
                    });
                }
            }
    
            // Observa mudanças no contêiner onde os formulários são carregados
            const observer = new MutationObserver(() => {
                if (document.getElementById('file')) {
                    configurarEventosFormulario(); // Configura os eventos do formulário
                }
            });
    
            observer.observe(document.getElementById('formulario-container'), { childList: true });
        });
    





