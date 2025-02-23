<script>
    import SpeakerCard from '$lib/Components/SpeakerCard.svelte';
    import { speakers } from '$lib/Utils/data.js';
    import { fly } from 'svelte/transition';
  </script>
  
  <h1 style="text-align: center;">Our Speakers</h1>
  <div class="speakers-grid">
    {#each speakers as speaker, index}
      <div transition:fly={{ y: 50, duration: 500, delay: index * 100 }}>
        <SpeakerCard {speaker} />
      </div>
    {/each}
  </div>
  
  <style>
    .speakers-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      padding: 20px;
    }
  </style>