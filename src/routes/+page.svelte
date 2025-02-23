<script>
    import Hero from '$lib/Components/Hero.svelte';
    import CountdownTimer from '$lib/Components/CountdownTimer.svelte';
    import { fade } from 'svelte/transition';
  import SpeakerCard from '$lib/Components/SpeakerCard.svelte';
  </script>
  
  <Hero />
  <CountdownTimer />
  
  <section in:fade>
   
  </section>
