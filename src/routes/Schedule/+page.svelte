<script>
    import ScheduleTable from '$lib/Components/ScheduleTable.svelte';
    import { schedule } from '$lib/Utils/data.js';
  </script>
  
  <h1 style="text-align: center;">Conference Schedule</h1>
  <ScheduleTable {schedule} />