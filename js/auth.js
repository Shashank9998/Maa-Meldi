(() => {
  'use strict';

  const accountsKey = 'meldi-accounts-v1';
  const sessionKey = 'meldi-session-v1';
  const words = () => window.templeTranslations?.[document.documentElement.lang] || window.templeTranslations?.gu || {};
  const message = key => words()[key] || key;
  const readAccounts = () => {
    try {
      const accounts = JSON.parse(localStorage.getItem(accountsKey) || '[]');
      return Array.isArray(accounts) ? accounts : [];
    } catch { return []; }
  };
  const writeAccounts = accounts => localStorage.setItem(accountsKey, JSON.stringify(accounts));
  const setSession = id => localStorage.setItem(sessionKey, JSON.stringify({ userId: id }));
  const status = form => form.querySelector('[data-auth-status]');
  const tell = (form, key, success = false) => {
    const node = status(form);
    if (node) {
      node.textContent = message(key);
      node.classList.toggle('is-success', success);
      node.classList.toggle('is-error', !success);
    }
  };
  const bytesToHex = bytes => [...new Uint8Array(bytes)].map(byte => byte.toString(16).padStart(2, '0')).join('');
  const hashPassword = async (password, saltHex) => {
    if (!crypto?.subtle) throw new Error('crypto-unavailable');
    const salt = Uint8Array.from(saltHex.match(/.{1,2}/g) || [], byte => parseInt(byte, 16));
    const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits']);
    return bytesToHex(await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations: 150000 }, key, 256));
  };
  const setBusy = (form, busy) => {
    const button = form.querySelector('button[type="submit"]');
    if (button) button.disabled = busy;
  };

  const loginForm = document.querySelector('[data-login-form]');
  if (loginForm && new URLSearchParams(window.location.search).get('registered') === '1') {
    tell(loginForm, 'authRegisteredSuccess', true);
  }

  document.querySelectorAll('[data-password-toggle]').forEach(button => button.addEventListener('click', () => {
    const input = button.closest('.auth-password-wrap')?.querySelector('input');
    if (!input) return;
    const visible = input.type === 'password';
    input.type = visible ? 'text' : 'password';
    button.setAttribute('aria-pressed', String(visible));
    button.dataset.i18nAria = visible ? 'authHidePassword' : 'authShowPassword';
    button.setAttribute('aria-label', message(button.dataset.i18nAria));
    const icon = button.querySelector('i');
    if (icon) icon.className = visible ? 'bi bi-eye-slash' : 'bi bi-eye';
  }));

  document.querySelector('[data-login-form]')?.addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setBusy(form, true);
    try {
      const values = new FormData(form);
      const email = String(values.get('email')).trim().toLowerCase();
      const account = readAccounts().find(item => item.email === email);
      if (!account) { tell(form, 'authInvalidLogin'); return; }
      const attempt = await hashPassword(String(values.get('password')), account.salt);
      if (attempt !== account.passwordHash) { tell(form, 'authInvalidLogin'); return; }
      setSession(account.id);
      window.location.href = 'profile.html';
    } catch {
      tell(form, 'authStorageError');
    } finally { setBusy(form, false); }
  });

  document.querySelector('[data-register-form]')?.addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const firstName = String(values.get('firstName')).trim();
    const lastName = String(values.get('lastName')).trim();
    const name = `${firstName} ${lastName}`.trim();
    const email = String(values.get('email')).trim().toLowerCase();
    const password = String(values.get('password'));
    if (password !== String(values.get('confirmPassword'))) { tell(form, 'authPasswordMismatch'); return; }
    setBusy(form, true);
    try {
      const accounts = readAccounts();
      if (accounts.some(item => item.email === email)) { tell(form, 'authEmailExists'); return; }
      const salt = bytesToHex(crypto.getRandomValues(new Uint8Array(16)));
      const passwordHash = await hashPassword(password, salt);
      const id = crypto.randomUUID();
      accounts.push({ id, name, firstName, lastName, email, salt, passwordHash });
      writeAccounts(accounts);
      window.location.href = 'login.html?registered=1';
    } catch {
      tell(form, 'authStorageError');
    } finally { setBusy(form, false); }
  });

  const profileForm = document.querySelector('[data-profile-form]');
  if (profileForm) {
    let accounts = readAccounts();
    let session = null;
    try { session = JSON.parse(localStorage.getItem(sessionKey) || 'null'); } catch { /* Treat invalid session data as signed out. */ }
    const account = accounts.find(item => item.id === session?.userId);
    if (!account) {
      window.location.replace('login.html');
      return;
    }
    const legacyNameParts = String(account.name || '').trim().split(/\s+/);
    const firstName = account.firstName || legacyNameParts.shift() || '';
    const lastName = account.lastName || legacyNameParts.join(' ');
    profileForm.elements.firstName.value = firstName;
    profileForm.elements.lastName.value = lastName;
    profileForm.elements.email.value = account.email;
    document.querySelector('[data-auth-name]').textContent = account.name;
    document.querySelector('[data-auth-email]').textContent = account.email;
    profileForm.addEventListener('submit', event => {
      event.preventDefault();
      if (!profileForm.reportValidity()) return;
      const firstName = profileForm.elements.firstName.value.trim();
      const lastName = profileForm.elements.lastName.value.trim();
      const name = `${firstName} ${lastName}`.trim();
      const email = profileForm.elements.email.value.trim().toLowerCase();
      if (accounts.some(item => item.id !== account.id && item.email === email)) { tell(profileForm, 'authEmailExists'); return; }
      account.name = name;
      account.firstName = firstName;
      account.lastName = lastName;
      account.email = email;
      try {
        writeAccounts(accounts);
        document.querySelector('[data-auth-name]').textContent = name;
        document.querySelector('[data-auth-email]').textContent = email;
        tell(profileForm, 'profileSaved', true);
      } catch { tell(profileForm, 'authStorageError'); }
    });
  }
})();
