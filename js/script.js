function copiarTexto(idContenedor) {
  const contenedor = document.getElementById(idContenedor);
  if (!contenedor) return;

  // Busca dentro del contenedor:
  const textoElemento = contenedor.querySelector('pre');
  const boton = contenedor.querySelector('.buton-copi');
  const icono = contenedor.querySelector('.material-symbols-outlined');
  const mensaje = contenedor.querySelector('.mensaje-copiado');

  if (!textoElemento) return;

  // Elimina los saltos de línea iniciales y finales
  const texto = textoElemento.innerText.trim();

  navigator.clipboard.writeText(texto)
    .then(() => {
      // Muestra el mensaje si existe
      if (mensaje) {
        mensaje.classList.add('mostrar');
      }

      // Después de 1.5s, regresa al estado original
      setTimeout(() => {
        if (boton) boton.style.backgroundColor = '#4285f4';
        if (icono) icono.textContent = 'content_copy';
        if (mensaje) mensaje.classList.remove('mostrar');
      }, 1500);
    })
    .catch(err => console.error('Error al copiar:', err));
}
