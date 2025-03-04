<script lang="ts">
  export let title: string = "";
  export let amount: string = "";
  export let decimal: string = "";
  export let percentChange: number = 0;
  export let icon: string | null = null;
  export let showButtons: boolean = false;
  
  $: isPositive = percentChange >= 0;
</script>

<div class="bg-white rounded-lg border border-gray-200 p-5 h-fit">
  {#if icon}
    <div class="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mb-4">
      {#if typeof icon === 'string'}
        <span class="text-purple-500 text-lg font-['Red_Hat_Mono']">{icon}</span>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
          {@html icon}
        </svg>
      {/if}
    </div>
  {/if}
  
  <h3 class="text-xs font-medium text-gray-500 uppercase {!icon ? 'mb-4' : 'mt-4'} font-['Red_Hat_Mono']">{title}</h3>
  
  <div class="flex items-baseline mt-2">
    <span class="text-3xl font-medium text-gray-700 font-['Red_Hat_Mono']">$</span>
    <span class="text-3xl font-medium text-gray-700 ml-2 font-['Red_Hat_Mono']">{amount}</span>
    {#if decimal}
      <span class="text-3xl font-medium text-gray-400 font-['Red_Hat_Mono']">{decimal}</span>
    {/if}
  </div>
  
  <div class="flex items-center mt-2 {showButtons ? 'mb-4' : ''}">
    <svg xmlns="http://www.w3.org/2000/svg" class={`h-4 w-4 ${isPositive ? 'text-green-500' : 'text-red-500'}`} viewBox="0 0 20 20" fill="currentColor">
      {#if isPositive}
        <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd" />
      {:else}
        <path fill-rule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clip-rule="evenodd" />
      {/if}
    </svg>
    <span class={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'} font-medium ml-1 graphSubPercentage font-['Red_Hat_Mono'] text-[8pt]`}>
      {Math.abs(percentChange)}%
    </span>
    <span class="text-sm text-gray-500 ml-1 graphSub">with last month</span>
  </div>
  
  {#if showButtons}
    <div class="flex space-x-2">
      <button class="px-4 py-2 bg-white border border-[#D591FE] rounded text-[8pt] font-medium hover:bg-gray-50 transition-colors font-['Red_Hat_Mono'] w-1/2 text-gray-700">
        ADD EXPENSE
      </button>
      <button class="px-4 py-2 bg-[#D591FE] text-white rounded text-[8pt] font-medium hover:bg-[#c07fe9] transition-colors font-['Red_Hat_Mono'] w-1/2">
        UPDATE SAVINGS
      </button>
    </div>
  {/if}
</div>