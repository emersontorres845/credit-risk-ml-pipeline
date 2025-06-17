describe('Login Functionality', () => {
  beforeAll(() => {
    document.body.innerHTML = `
      <input id="username" value="admin">
      <input id="password" value="admin123">
      <div id="error-message"></div>
      <div id="token-display"></div>
    `;
    require('../script.js');
  });

  test('successful login generates token', () => {
    const loginBtn = document.getElementById('login-btn');
    loginBtn.click();
    
    const tokenDisplay = document.getElementById('token-display');
    expect(tokenDisplay.style.display).not.toBe('none');
  });
});