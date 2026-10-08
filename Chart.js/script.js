// Estilo geral dos gráficos (mesma fonte e cor de texto do site)
Chart.defaults.font.family = 'Inter, "Segoe UI", sans-serif';
Chart.defaults.color = '#587087';
Chart.defaults.borderColor = '#e5ded2';

// ===== Gráfico de Linhas =====
const ctxLinhas = document.getElementById('graficoLinhas');

new Chart(ctxLinhas, {
  type: 'line',
  data: {
    labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
    datasets: [
      {
        label: 'Temperatura',
        data: [30, 29, 28, 25, 22, 23],
        borderColor: '#173f73',
        backgroundColor: 'rgba(23, 63, 115, 0.4)',
        borderWidth: 2,
        tension: 0.3
      },
      {
        label: 'Umidade',
        data: [80, 82, 80, 85, 80, 83],
        borderColor: '#29999b',
        backgroundColor: 'rgba(41, 153, 155, 0.4)',
        borderWidth: 2,
        tension: 0.3
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// ===== Gráfico de Barras =====
const ctxBarras = document.getElementById('graficoBarras');

new Chart(ctxBarras, {
  type: 'bar',
  data: {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [
      {
        label: 'Temperatura Média',
        data: [22, 24, 27, 23, 20, 18],
        backgroundColor: 'rgba(23, 63, 115, 0.7)',
        borderColor: '#173f73',
        borderWidth: 1
      },
      {
        label: 'Umidade Média',
        data: [90, 89, 93, 87, 88, 82],
        backgroundColor: 'rgba(41, 153, 155, 0.7)',
        borderColor: '#29999b',
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true }
    }
  }
});
