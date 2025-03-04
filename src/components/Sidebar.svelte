<script lang="ts">
  export let userName: string = "Austin Fletcher";
  export let userEmail: string = "austin.flet@gmail.com";
  export let activeItem: string = "Dashboard";
  
  interface MenuItem {
    name: string;
    icon: string;
    isButton?: boolean;
  };
  
  const menuItems: MenuItem[] = [
    { name: "Dashboard", icon: "home" },
    { name: "Transaction", icon: "transaction" },
    { name: "Spending", icon: "spending" },
    { name: "Bills & Payment", icon: "bills" },
    { name: "Watchlist", icon: "watchlist" },
    { name: "Investments", icon: "investments" },
    { name: "Goals", icon: "goals" }
  ];
  
  const utilityItems: MenuItem[] = [
    { name: "Refresh", icon: "refresh", isButton: true },
    { name: "Settings", icon: "settings" },
    { name: "Help Center", icon: "help" }
  ];
  
  // Mapa de ícones SVG
  const icons = {
    home: `<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />`,
    
    transaction: `<path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8z" />
                  <path d="M12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />`,
    
    spending: `<path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />`,
    
    bills: `<path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4a1 1 0 01-1-1V3a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h-2a1 1 0 01-1-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" clip-rule="evenodd" />`,
    
    watchlist: `<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />`,
    
    investments: `<path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />`,
    
    goals: `<path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />`,
    
    refresh: `<path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />`,
    
    settings: `<path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />`,
    
    help: `<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />`
  };
</script>

<div class="w-[246px] h-full flex flex-col bg-[#f9f9f9] border-r border-[#f0f0f0]">
  <!-- Logo -->
  <div class="px-6 py-5">
    <div class="flex items-center">
      <span class="text-2xl font-bold text-[#1e2125] font-['Red_Hat_Mono']">north</span>
      <svg class="ml-1 w-5 h-5 text-purple-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 10C3 8.34315 4.34315 7 6 7H8C9.65685 7 11 8.34315 11 10C11 11.6569 9.65685 13 8 13H6C4.34315 13 3 11.6569 3 10Z" fill="#d591fe"/>
        <path d="M13 14C13 12.3431 14.3431 11 16 11H18C19.6569 11 21 12.3431 21 14C21 15.6569 19.6569 17 18 17H16C14.3431 17 13 15.6569 13 14Z" fill="#d591fe"/>
      </svg>
    </div>
  </div>

  <!-- Navigation Menu -->
  <div class="flex-1 px-4 py-2 flex flex-col">
    <!-- Main Navigation -->
    <div class="space-y-1">
      {#each menuItems as item}
        <div class={`rounded-md ${activeItem === item.name ? 'bg-[#f8dafe]' : 'hover:bg-gray-100'} px-3 py-2.5`}>
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class={`h-5 w-5 ${activeItem === item.name ? 'text-[#1e2125]' : 'text-[#7e7e7e]'}`} viewBox="0 0 20 20" fill="currentColor">
              {@html icons[item.icon.toLowerCase()]}
            </svg>
            <span class={`ml-3 font-['Red_Hat_Mono'] font-medium text-[14px] ${activeItem === item.name ? 'text-[#1e2125]' : 'text-[#7e7e7e]'}`}>
              {item.name}
            </span>
          </div>
        </div>
      {/each}
    </div>
    
    <!-- First Divider -->
    <div class="my-6 border-t border-[#f0f0f0]"></div>
    
    <!-- Add Quick Shortcut -->
    <div class="mt-6 px-3 py-2">
      <div class="flex items-center text-[#a2a1a1]">
        <span class="font-['Red_Hat_Mono'] font-medium text-[16px]">+</span>
        <span class="ml-2 font-['Red_Hat_Mono'] font-medium text-[12px]">Add quick shortcut</span>
      </div>
    </div>

    <!-- Bottom Utility Links -->
    <div class="mt-auto space-y-1">
      {#each utilityItems as item}
        <div 
          class="rounded-md px-3 py-2.5 hover:bg-gray-100 {item.isButton ? 'cursor-pointer' : ''}" 
          role={item.isButton ? "button" : undefined} 
          tabindex={item.isButton ? "0" : undefined} 
          aria-label={item.isButton ? `${item.name} page` : undefined}
        >
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#7e7e7e]" viewBox="0 0 20 20" fill="currentColor">
              {@html icons[item.icon.toLowerCase()]}
            </svg>
            <span class="ml-3 font-['Red_Hat_Mono'] font-medium text-[14px] text-[#7e7e7e]">{item.name}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- User Profile -->
  <div class="border-t border-[#f0f0f0] p-4">
    <div class="flex items-center space-x-3">
      <div class="w-[40px] h-[40px] rounded-full overflow-hidden">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png?20200919003010" alt={userName} class="w-full h-full object-cover" />
      </div>
      <div class="flex flex-col">
        <span class="font-['Red_Hat_Mono'] font-medium text-[14px] text-[#1e2125]">{userName}</span>
        <span class="font-['Red_Hat_Mono'] text-[12px] text-[#a2a1a1]">{userEmail}</span>
      </div>
    </div>
  </div>
</div>