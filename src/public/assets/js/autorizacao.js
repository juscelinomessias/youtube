

// Verifica se o usuário está autenticado
function checarAutorizacao() {
    const token = localStorage.getItem('token');
    if(!token){
        alert('Você precisa esta logado para acessar esta página.');
        window.location.href = '/login'; // Redireciona para a página de login
    }
}


// Faz logout e limpa o token
function logout() {
    localStorage.removeItem('token');
    alert('Você foi desconectado.');
    window.location.href = '/login';
};