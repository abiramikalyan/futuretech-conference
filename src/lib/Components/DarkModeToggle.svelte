<script>
    import { darkMode } from '$lib/Stores/darkModeStore.js';
  </script>
  
  <label class="switch">
    <input type="checkbox" bind:checked={$darkMode} />
    <span class="slider"></span>
  </label>

<style>
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;
  }
  input:checked + .slider {
    background-color: #2196f3;
  }
  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
  input:checked + .slider:before {
    transform: translateX(26px);
  }
</style>