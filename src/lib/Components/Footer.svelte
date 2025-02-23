<script>
    import { fade } from 'svelte/transition';
  </script>
  
  <footer in:fade>
    <div class="social-links">
      <a href="https://twitter.com" target="_blank">Twitter</a>
      <a href="https://linkedin.com" target="_blank">LinkedIn</a>
      <a href="https://facebook.com" target="_blank">Facebook</a>
    </div>
    <div class="back-to-top">
      <button on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑ Back to Top
      </button>
    </div>
    <div class="copyright">
      &copy; 2025 FutureTech Conference. All rights reserved.
    </div>
  </footer>
  
  <style>
    footer {
      text-align: center;
      padding: 20px;
      background-color: var(--footer-bg, #373333);
      color: var(--text-color, #ffffff);
     margin-top: 40px;
     padding: 30px;
    }
    .social-links {
      margin-bottom: 10px;
    }
    .social-links a {
      margin: 0 10px;
      text-decoration: none;
      color: var(--text-color, #ffffff);
      transition: color 0.3s;
      padding: 10px;
    }
    .social-links a:hover {
      color: #ff6f61;
    }
    .back-to-top button {
      background: none;
      border: none;
      color: var(--text-color, #ffffff);
      cursor: pointer;
      font-size: 1rem;
      transition: color 0.3s;
      padding: 20px;
    }
    .back-to-top button:hover {
      color: #ff6f61;
    
    }
    .copyright{
      padding: 10px;
    }
    .dark footer {
      --footer-bg: #1a1a1a;
      --text-color: #ffffff;
    }
    
  
  </style>