<script>
    import { darkMode } from '$lib/Stores/darkModeStore.js';
    import DarkModeToggle from '$lib/Components/DarkModeToggle.svelte';
    import { slide } from 'svelte/transition';
  </script>
  
  <header class:dark={$darkMode}>
    <div class="logo">
      <a href="/">FutureTech 2025</a>
    </div>
    <nav class="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/Speakers">Speakers</a></li>
        <li><a href="/Schedule">Schedule</a></li>
        <li><a href="/Sponsors">Sponsors</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
    </nav>
    <DarkModeToggle/>
  </header>
  
  <style>
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      background-color: var(--header-bg, #373333);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .logo a {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--text-color, #333333);
      text-decoration: none;
    }
    .logo a:hover{
        color: #ff6f61;
    }
    nav ul {
      list-style: none;
      display: flex;
      gap: 20px;
    }
    nav a {
      text-decoration: none;
      color: var(--text-color, #333333);
      font-weight: 500;
      transition: color 0.3s;
      padding: 15px;
      color: white;
    
    }
    nav a::before{
      content: " ";
    background: linear-gradient(90deg,#2575fc 0%,#7e61e7 100%);
    border-radius: 0.5rem;
    opacity: 0%;
    width: 0.5rem;
    height: 0.2rem;
    position: absolute;
    transform: translateX(-1.5rem);
    transition: all 0.3s ease;
    bottom: -0.6rem;
    }
    nav a:hover::before{
      transform: translateX(0);
    width: 10%;
    opacity: 1;
    }
   
    nav a:hover {
      color: #ff6f61;
    }
    .dark header {
      --header-bg: #291a1a;
      --text-color: #ffffff;
    }
    .navbar{
        animation: slide 2.5s forwards;
        opacity: 0;
    }
    @keyframes slide{
        0%{
            transform: translateY(-100%);
            opacity: 0;
        }
        100%{
            transform: translateY(0);
            opacity: 1;
        }
    }
    nav ul li a{
        animation: ul 2s ease-in-out;
    }
 
    nav a{
        font-weight: bolder;
    }
    .logo a{
       animation: a 2.5s forwards ;
       color: white;
    }

    @keyframes a{
        0%{
            transform: translateX(-100%);
            opacity: 0;
        }
        100%{
            transform: translateX(0);
            opacity: 1;
        }
    }
  </style>


