<script lang="ts">
  interface Category {
    name: string;
    percent: number;
    color: string;
    amount: string;
  }
  
  export let total: string = "$80k";
  export let categories: Category[] = [
    { name: "EC2", percent: 42, color: "#d591fe", amount: "$500" },
    { name: "S3", percent: 25, color: "#ecc6ff", amount: "$300" },
    { name: "RDS", percent: 20, color: "#f3d5ff", amount: "$250" },
    { name: "LAMBDA", percent: 12, color: "#f8e4ff", amount: "$150" }
  ];
</script>

<div class="col-span-4 bg-white rounded-lg border border-gray-200 p-5 flex flex-col h-full">
  <div class="flex justify-between items-center mb-2">
    <div>
      <h3 class="text-xs font-medium text-gray-500 uppercase font-['Red_Hat_Mono']">SAVING BY CATEGORY</h3>
      <p class="text-xs text-gray-400 font-['Red_Hat_Mono']">From 1 - 31 February, 2025</p>
    </div>
    <button class="text-xs text-gray-500 border border-gray-200 rounded px-3 py-1 hover:bg-gray-50 font-['Red_Hat_Mono']">
      View Report
    </button>
  </div>
  
  <!-- Donut Chart -->
  <div class="relative flex-grow flex justify-center items-center my-2">
    <div class="relative w-full h-full max-w-[300px]">
      <!-- SVG Donut Chart -->
      <svg viewBox="0 0 100 100" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <!-- Background circle -->
        <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f3f3" stroke-width="15" />
        
        {#each categories as category, i}
          {@const offset = categories.slice(0, i).reduce((acc, cat) => acc + cat.percent, 0) * 2.512}
          {@const dashArray = `${category.percent * 2.512} ${251.2 - (category.percent * 2.512)}`}
          <circle 
            cx="50" 
            cy="50" 
            r="40" 
            fill="none" 
            stroke={category.color} 
            stroke-width="15" 
            stroke-dasharray={dashArray} 
            stroke-dashoffset={-offset} 
            class="donut-segment hover:opacity-90 cursor-pointer"
            data-tooltip={`${category.name} AWS`}
            data-percent={`${category.percent}%`}
          />
        {/each}
      </svg>
      
      <!-- Center Text -->
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <span class="text-xs text-gray-500 font-['Red_Hat_Mono']">Total</span>
        <span class="text-2xl font-medium font-['Red_Hat_Mono']">{total}</span>
      </div>
    </div>
  </div>
  
  <!-- Legend -->
  <div class="grid grid-cols-2 gap-x-4 gap-y-2 mt-4">
    {#each categories as category}
      <div class="flex items-center">
        <div class="w-3 h-3 rounded-full mr-2" style="background-color: {category.color};"></div>
        <span class="text-xs text-gray-700 font-['Red_Hat_Mono']">{category.name}</span>
        <span class="text-xs text-gray-500 font-['Red_Hat_Mono'] ml-1">({category.percent}%)</span>
      </div>
      <div class="text-right">
        <span class="text-xs font-medium text-gray-700 font-['Red_Hat_Mono']">{category.amount}</span>
      </div>
    {/each}
  </div>
</div>