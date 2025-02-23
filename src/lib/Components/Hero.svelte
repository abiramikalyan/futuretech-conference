<script>
    import { fade } from 'svelte/transition';
  </script>
  
  <section class="hero" in:fade>
    <h1>FutureTech Conference 2025</h1>
    <p>Exploring the Future of Technology</p>
    <button>Register Now</button>
  </section>
  
  <style>
    .hero {
      text-align: center;
      padding: 100px 20px;
      background: linear-gradient(135deg, #6a11cb, #2575fc);
      color: white;
    }
    button {
      padding: 10px 20px;
      font-size: 1.2rem;
      background: #ff6f61;
      border: none;
      color: white;
      cursor: pointer;
    }
    button:hover{
      color: #2575fc;
    }
  
  </style>