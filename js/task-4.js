document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.login-form');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Зупиняємо перезавантаження сторінки
  
      const emailInput = form.elements.email;
      const passwordInput = form.elements.password;
  
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (email === '' || password === '') {
        alert('All form fields must be filled in');
        return;
      }
  
      const formData = {
        email: email,
        password: password,
      };
  
      console.log(formData);
      form.reset(); // Очищуємо форму після відправки
    });
  });
  
