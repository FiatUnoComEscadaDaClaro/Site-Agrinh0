window.onload = () => {
  const finalTimeElement = document.getElementById('final-time');

  // Obter o tempo final da localStorage
  const finalTime = localStorage.getItem('finalTime') || '0';

  finalTimeElement.textContent = finalTime;
}
