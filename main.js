document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-btn').addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorElement = document.getElementById('error-message');
        const tokenDisplay = document.getElementById('token-display');
        

        errorElement.style.display = 'none';
        tokenDisplay.style.display = 'none';
        
       
        if (!username || !password) {
            errorElement.textContent = 'Por favor, preencha todos os campos.';
            errorElement.style.display = 'block';
            return;
        }
        
        if (username === 'admin' && password === 'admin123') {
            // Gera um token JWT simulado
            const token = generateToken(username);
            document.getElementById('token-value').textContent = token;
            tokenDisplay.style.display = 'block';
            
    
            setTimeout(function() {
                window.location.href = "https://app.powerbi.com/view?r=eyJrIjoiZGE0NjlkMTUtYTg3Yi00MDg4LWI1NGEtMGRhYTM3YTBmNmI5IiwidCI6IjRhMjJmMTE2LTUxY2UtNGZlMy1hZWFhLTljNDYxNDNkMDg4YiJ9";
            }, 2000);
        } else {
            errorElement.textContent = 'Credenciais inválidas. Tente novamente.';
            errorElement.style.display = 'block';
        }
    });
    
    function generateToken(username) {
        const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
        const payload = btoa(JSON.stringify({
            sub: username,
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + (60 * 60)
        }));
        
        const signature = 'simulated_signature_' + Math.random().toString(36).substring(2);
        
        return `${header}.${payload}.${signature}`;
    }
});