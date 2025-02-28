<script>
    import Chart from 'chart.js/auto';
    import { onMount } from 'svelte';
  
    let chart;
    let chartRef;
  
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
      const ctx = chartRef.getContext('2d');
      
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
                label: function(context) {
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
                callback: function(value) {
                  return '$' + value.toLocaleString();
                }
              }
            }
          }
        }
      });
  
      return () => chart.destroy();
    });
  </script>
  
  <style>
    .chart-container {
      position: relative;
      height: 300px;
    }
  </style>
  
  <div class="flex h-screen bg-[#f9f9f9]">
    <!-- Sidebar -->
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
          <!-- Dashboard Button (Active) -->
          <div class="rounded-md bg-[#f8dafe] px-3 py-2.5">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#1e2125]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span class="ml-3 font-['Red_Hat_Mono'] font-medium text-[14px] text-[#1e2125]">Dashboard</span>
            </div>
          </div>
  
          <!-- Transaction -->
          <div class="rounded-md px-3 py-2.5 hover:bg-gray-100">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#7e7e7e]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8z" />
                <path d="M12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
              </svg>
              <span class="ml-3 font-['Red_Hat_Mono'] font-medium text-[14px] text-[#7e7e7e]">Transaction</span>
            </div>
          </div>
  
          <!-- Spending -->
          <div class="rounded-md px-3 py-2.5 hover:bg-gray-100">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#7e7e7e]" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
              </svg>
              <span class="ml-3 font-['Red_Hat_Mono'] font-medium text-[14px] text-[#7e7e7e]">Spending</span>
            </div>
          </div>
  
          <!-- Bills & Payment -->
          <div class="rounded-md px-3 py-2.5 hover:bg-gray-100">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#7e7e7e]" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4a1 1 0 01-1-1V3a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h-2a1 1 0 01-1-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" clip-rule="evenodd" />
              </svg>
              <span class="ml-3 font-['Red_Hat_Mono'] font-medium text-[14px] text-[#7e7e7e]">Bills & Payment</span>
            </div>
          </div>
  
          <!-- Watchlist -->
          <div class="rounded-md px-3 py-2.5 hover:bg-gray-100">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#7e7e7e]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
              </svg>
              <span class="ml-3 font-['Red_Hat_Mono'] font-medium text-[14px] text-[#7e7e7e]">Watchlist</span>
            </div>
          </div>
  
          <!-- Investments -->
          <div class="rounded-md px-3 py-2.5 hover:bg-gray-100">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#7e7e7e]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
              </svg>
              <span class="ml-3 font-['Red_Hat_Mono'] font-medium text-[14px] text-[#7e7e7e]">Investments</span>
            </div>
          </div>
  
          <!-- Goals -->
          <div class="rounded-md px-3 py-2.5 hover:bg-gray-100">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#7e7e7e]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
              </svg>
              <span class="ml-3 font-['Red_Hat_Mono'] font-medium text-[14px] text-[#7e7e7e]">Goals</span>
            </div>
          </div>
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
          <!-- Refresh -->
          <div class="rounded-md px-3 py-2.5 hover:bg-gray-100 cursor-pointer" role="button" tabindex="0" aria-label="Refresh page">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#7e7e7e]" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
              </svg>
              <span class="ml-3 font-['Red_Hat_Mono'] font-medium text-[14px] text-[#7e7e7e]">Refresh</span>
            </div>
          </div>
  
          <!-- Settings -->
          <div class="rounded-md px-3 py-2.5 hover:bg-gray-100">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#7e7e7e]" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
              </svg>
              <span class="ml-3 font-['Red_Hat_Mono'] font-medium text-[14px] text-[#7e7e7e]">Settings</span>
            </div>
          </div>
  
          <!-- Help Center -->
          <div class="rounded-md px-3 py-2.5 hover:bg-gray-100">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#7e7e7e]" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
              </svg>
              <span class="ml-3 font-['Red_Hat_Mono'] font-medium text-[14px] text-[#7e7e7e]">Help Center</span>
            </div>
          </div>
        </div>
      </div>
  
      <!-- User Profile -->
      <div class="border-t border-[#f0f0f0] p-4">
        <div class="flex items-center space-x-3">
          <div class="w-[40px] h-[40px] rounded-full overflow-hidden">
            <img src="/placeholder.svg?height=40&width=40" alt="Austin Fletcher" class="w-full h-full object-cover" />
          </div>
          <div class="flex flex-col">
            <span class="font-['Red_Hat_Mono'] font-medium text-[14px] text-[#1e2125]">Austin Fletcher</span>
            <span class="font-['Red_Hat_Mono'] text-[12px] text-[#a2a1a1]">austin.flet@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  
    <!-- Main Content Area -->
    <div class="flex-1 p-6 overflow-y-auto bg-white">
      <!-- Dashboard Header -->
      <div class="flex justify-between items-start mb-8 w-full h-[60px]">
        <!-- Left Section -->
        <div class="flex flex-col space-y- w-auto h-[60px] goodMorning">
          <h1 class="font-['Red_Hat_Mono'] font-semibold text-[24px] leading-[32px] text-[#3f3f46]">Good Morning, Austin</h1>
          <p class="font-['Red_Hat_Mono'] font-medium text-[18px] leading-[24px] text-[#8d8d8d]">This is your dashboard AWS Savings</p>
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
            <span class="w-[177px] h-[20px] font-['Red_Hat_Mono'] font-semibold text-[14px] leading-[20px] text-[#808080]">01 JAN - 31 JAN, 2024</span>
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
  
      <!-- Main Content Grid -->
      <div class="grid grid-cols-12 gap-4">
        <!-- Left Column (col-7) -->
        <div class="col-span-8">
          <!-- Savings Cards -->
          <div class="grid grid-cols-12 gap-4">
            <!-- Saving Current Card -->
            <div class="col-span-6 bg-white rounded-lg border border-gray-200 p-5 h-fit">
              <h3 class="text-xs font-medium text-gray-500 uppercase mb-4 font-['Red_Hat_Mono']">SAVING CURRENT</h3>
              <div class="flex items-baseline mt-2">
                <span class="text-3xl font-medium text-gray-700 font-['Red_Hat_Mono']">$</span>
                <span class="text-3xl font-medium text-gray-700 ml-2 font-['Red_Hat_Mono']">1,200</span>
                <span class="text-3xl font-medium text-gray-400 font-['Red_Hat_Mono']">.50</span>
              </div>
              <div class="flex items-center mt-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-green-500 font-medium ml-1 graphSubPercentage font-['Red_Hat_Mono'] text-[8pt]">9%</span>
                <span class="text-sm text-gray-500 ml-1 graphSub">with last month</span>
              </div>
              <div class="flex space-x-2">
                <button class="px-4 py-2 bg-white border border-[#D591FE] rounded text-[8pt] font-medium hover:bg-gray-50 transition-colors font-['Red_Hat_Mono'] w-1/2 text-gray-700">
                  ADD EXPENSE
                </button>
                <button class="px-4 py-2 bg-[#D591FE] text-white rounded text-[8pt] font-medium hover:bg-[#c07fe9] transition-colors font-['Red_Hat_Mono'] w-1/2">
                  UPDATE SAVINGS
                </button>
              </div>
            </div>
    
            <!-- Monthly Savings Card -->
            <div class="col-span-3 bg-white rounded-lg border border-gray-200 p-5 h-fit">
              <div class="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <span class="text-purple-500 text-lg font-['Red_Hat_Mono']">$</span>
              </div>
              <h3 class="text-xs font-medium text-gray-500 uppercase font-['Red_Hat_Mono'] mt-4">CURRENT MONTH SAVINGS</h3>
              <div class="flex items-baseline mt-2">
                <span class="text-3xl font-medium font-['Red_Hat_Mono']">$</span>
                <span class="text-3xl font-medium font-['Red_Hat_Mono'] ml-1">200</span>
                <span class="text-3xl font-medium text-gray-400 font-['Red_Hat_Mono']">.75</span>
              </div>
              <div class="flex items-center mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-green-500 font-medium ml-1 graphSubPercentage font-['Red_Hat_Mono'] text-[8pt]">9%</span>
                <span class="text-sm text-gray-500 ml-1 graphSub">with last month</span>
              </div>
            </div>
    
            <!-- Percentage Variation Card -->
            <div class="col-span-3 bg-white rounded-lg border border-gray-200 p-5 h-fit">
              <div class="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd" />
                </svg>
              </div>
              <h3 class="text-xs font-medium text-gray-500 uppercase font-['Red_Hat_Mono'] mt-4">PERCENTAGE CHANGES</h3>
              <div class="flex items-baseline mt-2">
                <span class="text-3xl font-medium font-['Red_Hat_Mono']">15</span>
                <span class="text-3xl font-medium text-gray-400 font-['Red_Hat_Mono']">.5%</span>
              </div>
              <div class="flex items-center mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clip-rule="evenodd" />
                </svg>
                <span class="text-sm text-red-500 font-medium ml-1 graphSubPercentage font-['Red_Hat_Mono'] text-[8pt]">3%</span>
                <span class="text-sm text-gray-500 ml-1 graphSub">with last month</span>
              </div>
            </div>
          </div>
  
          <!-- Savings Trends Chart -->
          <div class="bg-white rounded-lg border border-gray-200 p-5 mt-6">
            <div class="flex justify-between items-center mb-4">
              <div>
                <h3 class="text-xs font-medium text-gray-500 uppercase font-['Red_Hat_Mono']">SAVINGS TRENDS</h3>
                <p class="text-2xl font-semibold text-gray-800 font-['Red_Hat_Mono'] mt-1">
                  $51,837.39
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
        </div>
  
        <!-- Right Column (col-5) -->
        <div class="col-span-4">
          <!-- Donut Chart -->
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
                  
                  <!-- LAMBDA - 12% -->
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="none" 
                    stroke="#f8e4ff" 
                    stroke-width="15" 
                    stroke-dasharray="25.12 74.88" 
                    stroke-dashoffset="0" 
                    class="donut-segment hover:opacity-90 cursor-pointer"
                    data-tooltip="LAMBDA AWS"
                    data-percent="12%"
                  />
                  
                  <!-- RDS - 20% -->
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="none" 
                    stroke="#f3d5ff" 
                    stroke-width="15" 
                    stroke-dasharray="41.88 58.12" 
                    stroke-dashoffset="-25.12" 
                    class="donut-segment hover:opacity-90 cursor-pointer"
                    data-tooltip="RDS AWS"
                    data-percent="20%"
                  />
                  
                  <!-- S3 - 25% -->
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="none" 
                    stroke="#ecc6ff" 
                    stroke-width="15" 
                    stroke-dasharray="52.35 47.65" 
                    stroke-dashoffset="-67" 
                    class="donut-segment hover:opacity-90 cursor-pointer"
                    data-tooltip="S3 AWS"
                    data-percent="25%"
                  />
                  
                  <!-- EC2 - 42% -->
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="none" 
                    stroke="#d591fe" 
                    stroke-width="15" 
                    stroke-dasharray="88.2 11.8" 
                    stroke-dashoffset="-119.35" 
                    class="donut-segment hover:opacity-90 cursor-pointer"
                    data-tooltip="EC2 AWS"
                    data-percent="42%"
                  />
                </svg>
                
                <!-- Center Text -->
                <div class="absolute inset-0 flex flex-col items-center justify-center">
                  <span class="text-xs text-gray-500 font-['Red_Hat_Mono']">Total</span>
                  <span class="text-2xl font-medium font-['Red_Hat_Mono']">$80k</span>
                </div>
              </div>
            </div>
            
            <!-- Legend -->
            <div class="grid grid-cols-2 gap-2 mt-4">
              <div class="flex items-center">
                <div class="w-3 h-3 rounded-full bg-[#d591fe] mr-2"></div>
                <span class="text-xs font-['Red_Hat_Mono'] text-gray-700">EC2</span>
              </div>
              <div class="text-right">
                <span class="text-xs font-['Red_Hat_Mono'] text-gray-700">$500</span>
              </div>
              
              <div class="flex items-center">
                <div class="w-3 h-3 rounded-full bg-[#ecc6ff] mr-2"></div>
                <span class="text-xs font-['Red_Hat_Mono'] text-gray-700">S3</span>
              </div>
              <div class="text-right">
                <span class="text-xs font-['Red_Hat_Mono'] text-gray-700">$300</span>
              </div>
              
              <div class="flex items-center">
                <div class="w-3 h-3 rounded-full bg-[#f3d5ff] mr-2"></div>
                <span class="text-xs font-['Red_Hat_Mono'] text-gray-700">RDS</span>
              </div>
              <div class="text-right">
                <span class="text-xs font-['Red_Hat_Mono'] text-gray-700">$250</span>
              </div>
              
              <div class="flex items-center">
                <div class="w-3 h-3 rounded-full bg-[#f8e4ff] mr-2"></div>
                <span class="text-xs font-['Red_Hat_Mono'] text-gray-700">LAMBDA</span>
              </div>
              <div class="text-right">
                <span class="text-xs font-['Red_Hat_Mono'] text-gray-700">$150</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Detailed Savings Table -->
      <div class="col-span-12 bg-white rounded-lg border border-gray-200 p-5 mt-6">
        <div class="flex justify-between items-center mb-4">
          <div>
            <h3 class="text-xs font-medium text-gray-500 uppercase font-['Red_Hat_Mono']">DETAILED SAVINGS</h3>
            <p class="text-xs text-gray-400 font-['Red_Hat_Mono']">DATA FROM 1-12 APR, 2024</p>
          </div>
          <button class="text-xs text-gray-500 border border-gray-200 rounded px-3 py-1 hover:bg-gray-50 font-['Red_Hat_Mono']">
            VIEW REPORT
          </button>
        </div>
        
        <table class="w-full text-left">
          <thead>
            <tr class="border-b border-gray-200">
              <th class="py-2 text-xs font-medium text-gray-500 font-['Red_Hat_Mono']">DATE</th>
              <th class="py-2 text-xs font-medium text-gray-500 font-['Red_Hat_Mono']">SERVICE</th>
              <th class="py-2 text-xs font-medium text-gray-500 font-['Red_Hat_Mono']">AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-gray-200">
              <td class="py-2 text-sm text-gray-700 font-['Red_Hat_Mono']">JAN, 06</td>
              <td class="py-2 text-sm text-gray-700 font-['Red_Hat_Mono'] flex items-center">
                <span class="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </span>
                EC2
              </td>
              <td class="py-2 text-sm text-gray-700 font-['Red_Hat_Mono']">$50</td>
            </tr>
            <tr class="border-b border-gray-200">
              <td class="py-2 text-sm text-gray-700 font-['Red_Hat_Mono']">FEB, 06</td>
              <td class="py-2 text-sm text-gray-700 font-['Red_Hat_Mono'] flex items-center">
                <span class="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
                  </svg>
                </span>
                S3
              </td>
              <td class="py-2 text-sm text-gray-700 font-['Red_Hat_Mono']">$30</td>
            </tr>
            <tr class="border-b border-gray-200">
              <td class="py-2 text-sm text-gray-700 font-['Red_Hat_Mono']">FEB, 12</td>
              <td class="py-2 text-sm text-gray-700 font-['Red_Hat_Mono'] flex items-center">
                <span class="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                </span>
                RDS
              </td>
              <td class="py-2 text-sm text-gray-700 font-['Red_Hat_Mono']">$22</td>
            </tr>
            <tr>
              <td class="py-2 text-sm text-gray-700 font-['Red_Hat_Mono']">FEB, 12</td>
              <td class="py-2 text-sm text-gray-700 font-['Red_Hat_Mono'] flex items-center">
                <span class="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </span>
                EC2
              </td>
              <td class="py-2 text-sm text-gray-700 font-['Red_Hat_Mono']">$31</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>