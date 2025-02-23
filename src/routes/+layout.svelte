<script>
    import Header from '$lib/Components/Header.svelte';
    import Footer from '$lib/Components/Footer.svelte';
    import { darkMode } from '$lib/Stores/darkModeStore.js';
  </script>
  
  <div class:dark={$darkMode}>
    <Header />
    <slot /> <!-- This is where the page content will be injected -->
    <Footer />
  </div>
  
  <style>
    :global(body) {
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: var(--body-bg, #ffffff);
      color: var(--text-color, #333333);
      transition: background-color 0.3s, color 0.3s;
    }
    .dark {
      --body-bg: #121212;
      --text-color: #ffffff;
    }
  </style>