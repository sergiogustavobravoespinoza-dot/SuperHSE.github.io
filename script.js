const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  menuToggle.textContent = isOpen ? '×' : '☰';
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const whatsappPayment = document.getElementById('whatsappPayment');
document.querySelectorAll('.plan-select').forEach((button) => {
  button.addEventListener('click', () => {
    const plan = button.dataset.plan;
    const message = `Hola, he elegido el plan ${plan} de LeanHSE. Adjunto mi comprobante de pago. Mi nombre es: ____. El correo para mis credenciales es: ____.`;
    whatsappPayment.href = `https://wa.me/51955357275?text=${encodeURIComponent(message)}`;
  });
});

const copyNumber = document.getElementById('copyNumber');
copyNumber.addEventListener('click', async () => {
  const originalLabel = 'Copiar número';
  try {
    if (!navigator.clipboard) throw new Error('Portapapeles no disponible');
    await navigator.clipboard.writeText('955357275');
    copyNumber.textContent = '¡Copiado!';
    window.setTimeout(() => { copyNumber.textContent = originalLabel; }, 1800);
  } catch {
    window.prompt('Copia el número para pagar por Yape o Plin:', '955357275');
  }
});
