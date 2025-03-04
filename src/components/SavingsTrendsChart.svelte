<script lang="ts">
  import { onMount } from 'svelte';
  
  export let totalAmount: string = "$51,837.39";
  
  let chart: any;
  let chartRef: HTMLCanvasElement;
  
  // Dados do gráfico de barras
  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{
      label: 'Savings',
      data: [15000, 48000, 52000, 51000, 53000, 55000],
      backgroundColor: '#d591fe',
      borderColor: '#d591fe',
      borderWidth: 1,
      borderRadius: 4,
      hoverBackgroundColor: '#c07fe9',
    }]
  };
  
  onMount(() => {
    // Importação dinâmica do Chart.js para evitar problemas de SSR
    import('chart.js/auto').then((ChartModule) => {
      const Chart = ChartModule.default;
      const ctx = chartRef.getContext('2d');
      
      if (ctx) {
        chart = new Chart(ctx, {
          type: 'bar',
          data: data,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                backgroundColor: '#1f2937',
                titleFont: {
                  family: 'Red Hat Mono'
                },
                bodyFont: {
                  family: 'Red Hat Mono'
                },
                callbacks: {
                  label: function(context: any) {
                    return '$' + context.raw.toLocaleString();
                  }
                }
              }
            },
            scales: {
              x: {
                grid: {
                  display: false
                },
                ticks: {
                  color: '#6b7280',
                  font: {
                    family: 'Red Hat Mono',
                    size: 12
                  }
                }
              },
              y: {
                grid: {
                  color: '#f3f4f6'
                },
                ticks: {
                  color: '#6b7280',
                  font: {
                    family: 'Red Hat Mono',
                    size: 12
                  },
                  callback: function(value: number) {
                    return '$' + value.toLocaleString();
                  }
                }
              }
            }
          }
        });
      }
    });
    
    return () => {
      if (chart) chart.destroy();
    };
  });
</script>

<style>
  .chart-container {
    position: relative;
    height: 300px;
  }
</style>

<div class="bg-white rounded-lg border border-gray-200 p-5 mt-6">
  <div class="flex justify-between items-center mb-4">
    <div>
      <h3 class="text-xs font-medium text-gray-500 uppercase font-['Red_Hat_Mono']">SAVINGS TRENDS</h3>
      <p class="text-2xl font-semibold text-gray-800 font-['Red_Hat_Mono'] mt-1">
        {totalAmount}
      </p>
    </div>
    <button class="text-xs text-gray-500 border border-gray-200 rounded px-3 py-1 hover:bg-gray-50 font-['Red_Hat_Mono']">
      View Report
    </button>
  </div>
  
  <div class="chart-container">
    <canvas bind:this={chartRef}></canvas>
  </div>
</div>