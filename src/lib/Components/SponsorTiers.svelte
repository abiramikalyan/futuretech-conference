<script>
    export let sponsors;
  </script>
  
  <div class="sponsor-tiers">
    {#each Object.entries(sponsors) as [tier, companies]}
      <div class="tier">
        <h2>{tier} Sponsors</h2>
        <div class="companies">
          {#each companies as company}
            <div class="company">{company}</div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
  
  <style>
    .sponsor-tiers {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px;
    }
    .tier {
      background-color: #f4f4f4;
      padding: 15px;
      border-radius: 10px;
    }
    .companies {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .company {
      padding: 10px;
      background-color: white;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  </style>