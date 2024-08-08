window.onload = () => {
  const finalTimeElement = document.getElementById('final-time');
  const recordTimeElement = document.getElementById('record-time');

  // Obter o tempo final e o recorde da localStorage
  const finalTime = localStorage.getItem('finalTime');
  const recordTime = localStorage.getItem('record') || 'Nenhum';

  finalTimeElement.textContent = finalTime;
  recordTimeElement.textContent = recordTime;

  // Atualizar o recorde se necessário
  if (finalTime && (recordTime === 'Nenhum' || parseInt(finalTime) < parseInt(recordTime))) {
    localStorage.setItem('record', finalTime);
  }
}
