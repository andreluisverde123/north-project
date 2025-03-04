<script lang="ts">
  import Sidebar from '../components/Sidebar.svelte';
  import DashboardHeader from '../components/DashboardHeader.svelte';
  import SavingsCard from '../components/SavingsCard.svelte';
  import SavingsTrendsChart from '../components/SavingsTrendsChart.svelte';
  import DonutChart from '../components/DonutChart.svelte';
  import SavingsTable from '../components/SavingsTable.svelte';
  
  // Interfaces para tipagem
  interface SavingsCardData {
    title: string;
    amount: string;
    decimal: string;
    percentChange: number;
    showButtons?: boolean;
    icon?: string;
  }
  
  interface DonutCategoryData {
    name: string;
    percent: number;
    color: string;
    amount: string;
  }
  
  interface TableRowData {
    date: string;
    service: string;
    amount: string;
    icon: string;
    color: string;
  }
  
  // Dados do usuário
  const userName: string = "Austin";
  const userEmail: string = "austin.flet@gmail.com";
  const dateRange: string = "01 JAN - 31 JAN, 2024";
  
  // Dados para os cards de economia
  const savingsCards: SavingsCardData[] = [
    {
      title: "SAVING CURRENT",
      amount: "1,200",
      decimal: ".50",
      percentChange: 9,
      showButtons: true
    },
    {
      title: "CURRENT MONTH SAVINGS",
      amount: "200",
      decimal: ".75",
      percentChange: 9,
      icon: "$"
    },
    {
      title: "PERCENTAGE CHANGES",
      amount: "15",
      decimal: ".5%",
      percentChange: -3,
      icon: "%"
    }
  ];
  
  // Dados para o gráfico de donut
  const donutCategories: DonutCategoryData[] = [
    { name: "EC2", percent: 42, color: "#d591fe", amount: "$500" },
    { name: "S3", percent: 25, color: "#ecc6ff", amount: "$300" },
    { name: "RDS", percent: 20, color: "#f3d5ff", amount: "$250" },
    { name: "LAMBDA", percent: 12, color: "#f8e4ff", amount: "$150" }
  ];
  
  // Dados para a tabela de economias detalhadas
  const tableData: TableRowData[] = [
    { date: "JAN, 06", service: "EC2", amount: "$50", icon: "chart", color: "orange" },
    { date: "FEB, 06", service: "S3", amount: "$30", icon: "bag", color: "red" },
    { date: "FEB, 12", service: "RDS", amount: "$22", icon: "wallet", color: "blue" },
    { date: "FEB, 12", service: "EC2", amount: "$31", icon: "chart", color: "orange" }
  ];
</script>

<div class="flex h-screen bg-[#f9f9f9]">
  <!-- Sidebar -->
  <Sidebar {userName} {userEmail} activeItem="Dashboard" />
  
  <!-- Main Content Area -->
  <div class="flex-1 p-6 overflow-y-auto bg-white">
    <!-- Dashboard Header -->
    <DashboardHeader {userName} {dateRange} />
    
    <!-- Main Content Grid -->
    <div class="grid grid-cols-12 gap-4">
      <!-- Left Column (col-8) -->
      <div class="col-span-8">
        <!-- Savings Cards -->
        <div class="grid grid-cols-12 gap-4">
          <!-- Saving Current Card -->
          <div class="col-span-6">
            <SavingsCard 
              title={savingsCards[0].title}
              amount={savingsCards[0].amount}
              decimal={savingsCards[0].decimal}
              percentChange={savingsCards[0].percentChange}
              showButtons={savingsCards[0].showButtons}
            />
          </div>
          
          <!-- Monthly Savings Card -->
          <div class="col-span-3">
            <SavingsCard 
              title={savingsCards[1].title}
              amount={savingsCards[1].amount}
              decimal={savingsCards[1].decimal}
              percentChange={savingsCards[1].percentChange}
              icon={savingsCards[1].icon}
            />
          </div>
          
          <!-- Percentage Variation Card -->
          <div class="col-span-3">
            <SavingsCard 
              title={savingsCards[2].title}
              amount={savingsCards[2].amount}
              decimal={savingsCards[2].decimal}
              percentChange={savingsCards[2].percentChange}
              icon={savingsCards[2].icon}
            />
          </div>
        </div>
        
        <!-- Savings Trends Chart -->
        <SavingsTrendsChart totalAmount="$51,837.39" />
      </div>
      
      <!-- Right Column (col-4) -->
      <div class="col-span-4">
        <!-- Donut Chart -->
        <DonutChart total="$80k" categories={donutCategories} />
      </div>
    </div>
    
    <!-- Detailed Savings Table -->
    <div class="col-span-12">
      <SavingsTable data={tableData} />
    </div>
  </div>
</div>