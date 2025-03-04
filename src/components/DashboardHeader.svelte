<script lang="ts">
  export let userName: string = "Austin";
  export let dateRange: string = "01 JAN - 31 JAN, 2024";
  
  // Determina a saudação com base na hora do dia
  const getGreeting = (): string => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };
</script>

<div class="flex justify-between items-start mb-8 w-full h-[60px]">
  <!-- Left Section -->
  <div class="flex flex-col w-auto h-[60px] goodMorning">
    <h1 class="font-['Red_Hat_Mono'] font-semibold text-[24px] leading-[32px] text-[#3f3f46]">
      {getGreeting()}, {userName}
    </h1>
    <p class="font-['Red_Hat_Mono'] font-medium text-[18px] leading-[24px] text-[#8d8d8d]">
      This is your dashboard AWS Savings
    </p>
  </div>

  <!-- Right Section -->
  <div class="flex items-center space-x-4 w-[392px] h-[40px]">
    <!-- Date Range Button -->
    <div class="flex items-center justify-center px-[14px] py-[10px] w-[254px] h-[40px] rounded-[3px] bg-white border border-[#dadada] cursor-pointer hover:bg-gray-50 transition-colors">
      <div class="w-[20px] h-[20px] mr-2">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 5H14M4.5 9.5H15.5M4.5 13.5H15.5M5.5 2.5V4.5M14.5 2.5V4.5M4.75 17.5H15.25C16.3546 17.5 17.25 16.6046 17.25 15.5V5.5C17.25 4.39543 16.3546 3.5 15.25 3.5H4.75C3.64543 3.5 2.75 4.39543 2.75 5.5V15.5C2.75 16.6046 3.64543 17.5 4.75 17.5Z" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <span class="w-[177px] h-[20px] font-['Red_Hat_Mono'] font-semibold text-[14px] leading-[20px] text-[#808080]">
        {dateRange}
      </span>
    </div>

    <!-- Filters Button -->
    <div class="flex items-center justify-center px-[14px] py-[10px] w-[122px] h-[40px] rounded-[3px] bg-white border border-[#dadada] cursor-pointer hover:bg-gray-50 transition-colors">
      <div class="w-[20px] h-[20px] mr-1">
        <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1H14M3 5H12M5 9H10" stroke="#414651" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="px-[2px] w-[63px] h-[20px] flex items-center justify-center">
        <span class="w-[59px] h-[20px] font-['Red_Hat_Mono'] font-semibold text-[14px] leading-[20px] text-[#808080]">Filters</span>
      </div>
    </div>
  </div>
</div>
