let carrito = [];

function mostrarSeccion(id) {
  document.querySelectorAll('.seccion').forEach(sec => sec.classList.remove('activa'));
  document.getElementById(id).classList.add('activa');
}

function mostrarCarrito() {
  mostrarSeccion('carrito');
  actualizarCarrito();
}

function agregarAlCarrito(producto) {
  carrito.push(producto);
  animarCarrito();
  alert(`${producto} agregado al carrito`);
}

function actualizarCarrito() {
  const lista = document.getElementById('lista-carrito');
  lista.innerHTML = '';
  carrito.forEach((producto, index) => {
    const li = document.createElement('li');
    li.textContent = producto;

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.classList.add('eliminar');
    btnEliminar.onclick = () => eliminarDelCarrito(index);

    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function animarCarrito() {
  const btnCarrito = document.querySelector('.carrito');
  btnCarrito.style.transform = 'scale(1.3)';
  setTimeout(() => {
    btnCarrito.style.transform = 'scale(1)';
  }, 300);
}
