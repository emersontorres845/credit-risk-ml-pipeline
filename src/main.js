document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('login-btn');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorElement = document.getElementById('error-message');
    const tokenDisplay = document.getElementById('token-display');

    loginBtn.addEventListener('click', function() {
        const username = usernameInput.value;
        const password = passwordInput.value;
        
        errorElement.style.display = 'none';
        tokenDisplay.style.display = 'none';
        
        if (!username || !password) {
            showError('Por favor, preencha todos os campos.');
            return;
        }
        
        if (username === 'admin' && password === 'admin123') {
            const token = generateToken(username);
            document.getElementById('token-value').textContent = token;
            tokenDisplay.style.display = 'block';
            
            setTimeout(() => {
                window.location.href = "https://app.powerbi.com";
            }, 2000);
        } else {
            showError('Credenciais inválidas. Tente novamente.');
        }
    });

    function showError(message) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function generateToken(username) {
        const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
        const payload = btoa(JSON.stringify({
            sub: username,
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + 3600
        }));
        
        return `${header}.${payload}.simulated_signature`;
    }
});