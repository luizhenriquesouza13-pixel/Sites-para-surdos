document.addEventListener('DOMContentLoaded', () => {
    const painelAlerta = document.getElementById('painelAlerta');

    // Função para alerta visual piscante
    function exibirAlertaVisual(mensagem) {
        painelAlerta.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${mensagem}`;
        painelAlerta.classList.remove('hidden');

        setTimeout(() => {
            painelAlerta.classList.add('hidden');
        }, 5000);
    }

    // --- GERENCIAMENTO DE ABAS (Chat / Vídeo) ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabTarget = btn.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(`tab-${tabTarget}`).classList.add('active');
        });
    });

    // --- LÓGICA DO CHAT EM TEXTO ---
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');

    if (chatForm) {
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const texto = chatInput.value.trim();

            if (texto !== '') {
                // Adiciona mensagem do usuário
                const msgUsuario = document.createElement('div');
                msgUsuario.className = 'mensagem mensagem-usuario';
                msgUsuario.textContent = texto;
                chatMessages.appendChild(msgUsuario);

                chatInput.value = '';
                chatMessages.scrollTop = chatMessages.scrollHeight;

                // Resposta automática simulada após 1,5 segundos
                setTimeout(() => {
                    const msgSistema = document.createElement('div');
                    msgSistema.className = 'mensagem mensagem-sistema';
                    msgSistema.textContent = 'Mensagem recebida! Um atendente especializado responderá em instantes.';
                    chatMessages.appendChild(msgSistema);
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 1500);
            }
        });
    }

    // --- LÓGICA DO AGENDAMENTO DE VÍDEO ---
    const formAgendamento = document.getElementById('formAgendamento');

    if (formAgendamento) {
        formAgendamento.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('nomeAgendamento').value;
            const data = document.getElementById('dataAgendamento').value;
            const hora = document.getElementById('horaAgendamento').value;

            exibirAlertaVisual(`Agendamento confirmado para ${nome} no dia ${data} às ${hora}!`);
            formAgendamento.reset();
        });
    }
});