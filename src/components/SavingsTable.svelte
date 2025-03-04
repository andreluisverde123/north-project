<script lang="ts">
  interface TableRow {
    date: string;
    service: string;
    amount: string;
    icon: string;
    color: string;
  }
  
  // Aceita dados da tabela como prop
  export let data: TableRow[] = [];
  
  // Mapeamento de ícones para diferentes tipos de serviços
  const iconMap: Record<string, string> = {
    chart: `<path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />`,
    
    bag: `<path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />`,
    
    wallet: `<path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />`
  };
  
  // Cores para os diferentes serviços
  const colorClasses: Record<string, string> = {
    orange: "text-orange-500 bg-orange-100",
    red: "text-red-500 bg-red-100",
    blue: "text-blue-500 bg-blue-100",
    green: "text-green-500 bg-green-100",
    purple: "text-purple-500 bg-purple-100"
  };
  
  // Período de dados para exibição no cabeçalho
  const dataPeriod: string = "1-31 JAN, 2024";
</script>

<section class="bg-white rounded-lg border border-gray-200 p-5 mt-6 shadow-sm">
  <!-- Cabeçalho da tabela -->
  <header class="flex justify-between items-center mb-4">
    <div>
      <h3 class="text-xs font-medium text-gray-500 uppercase font-['Red_Hat_Mono']">DETAILED SAVINGS</h3>
      <p class="text-xs text-gray-400 font-['Red_Hat_Mono']">DATA FROM {dataPeriod}</p>
    </div>
    
    <button 
      class="text-xs text-gray-500 border border-gray-200 rounded px-3 py-1.5 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-200 font-['Red_Hat_Mono']"
      aria-label="View detailed savings report"
    >
      VIEW REPORT
    </button>
  </header>
  
  <!-- Tabela responsiva -->
  <div class="overflow-x-auto">
    <table class="w-full border-collapse">
      <thead>
        <tr class="border-b border-gray-200">
          <th class="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-['Red_Hat_Mono']">DATE</th>
          <th class="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-['Red_Hat_Mono']">SERVICE</th>
          <th class="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-['Red_Hat_Mono']">AMOUNT</th>
          <th class="py-3 px-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider font-['Red_Hat_Mono']">ACTIONS</th>
        </tr>
      </thead>
      
      <tbody>
        {#each data as row, i}
          <tr class={i < data.length - 1 ? "border-b border-gray-200" : ""}>
            <td class="py-3 px-4 text-sm text-gray-700 font-['Red_Hat_Mono']">{row.date}</td>
            <td class="py-3 px-4">
              <div class="flex items-center">
                <div class={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${colorClasses[row.color]}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    {@html iconMap[row.icon]}
                  </svg>
                </div>
                <span class="text-sm text-gray-700 font-['Red_Hat_Mono']">{row.service}</span>
              </div>
            </td>
            <td class="py-3 px-4 text-sm font-medium text-gray-700 font-['Red_Hat_Mono']">{row.amount}</td>
            <td class="py-3 px-4 text-right">
              <button class="text-gray-400 hover:text-gray-600 transition-colors focus:outline-none" aria-label="More options">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </td>
          </tr>
        {/each}
        
        {#if data.length === 0}
          <tr>
            <td colspan="4" class="py-6 text-center text-gray-500 font-['Red_Hat_Mono']">
              No savings data available
            </td>
          </tr>
        {/if}
      </tbody>
    </table>
  </div>
  
  <!-- Rodapé da tabela com paginação -->
  {#if data.length > 0}
    <div class="flex justify-between items-center mt-4 pt-3 border-t border-gray-200">
      <div class="text-xs text-gray-500 font-['Red_Hat_Mono']">
        Showing {data.length} of {data.length} entries
      </div>
      
      <div class="flex space-x-1">
        <button class="px-2 py-1 border border-gray-300 rounded text-xs text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed font-['Red_Hat_Mono']" disabled>
          Previous
        </button>
        <button class="px-2 py-1 bg-purple-100 border border-purple-200 rounded text-xs text-purple-700 font-['Red_Hat_Mono']">
          1
        </button>
        <button class="px-2 py-1 border border-gray-300 rounded text-xs text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed font-['Red_Hat_Mono']" disabled>
          Next
        </button>
      </div>
    </div>
  {/if}
</section>