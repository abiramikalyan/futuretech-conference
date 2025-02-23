<script>
    import { onMount } from 'svelte';
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  
    onMount(() => {
      const targetDate = new Date('2025-02-24').getTime();
      setInterval(() => {
        const now = new Date().getTime();
        const difference = targetDate - now;
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
      }, 1000);
    });
  </script>
  <div class="container">
    <h2>Going To Start in .....</h2>
    <div class="countdown">
      <span>{timeLeft.days}d</span>
      <span>{timeLeft.hours}h</span>
      <span>{timeLeft.minutes}m</span>
      <span>{timeLeft.seconds}s</span>
    </div>
  </div>
  
  
  <style>
    .countdown {
      display: flex;
      justify-content: center;
      gap: 10px;
      font-size: 1.5rem;
      margin: 20px 0;
     border: 1.5px solid black;
     width: 20%;
      padding: 20px;
      margin-left: 530px;
      background-color:#25fc66 ;
      color: black  ;
      margin-top: 50px;
      margin-bottom: 20px;
      
    }
    .container{
      background: linear-gradient(135deg, #6a11cb, #2574fce9);
      margin-top: -20px;
      margin-bottom: -40px;
    }
    h2{
      color: white;
      text-align: center;
      padding-top: 10px;
    }
  </style>