<script>
    export let speaker;
  </script>
  
  <div class="speaker-card">
    <img src={`/images/speakers/${speaker.image}`} alt={speaker.name} />
    <h3>{speaker.name}</h3>
    <p>{speaker.title}</p>
    <p>{speaker.bio}</p>
  </div>
  
  <style>
    .speaker-card {
      background-color: #20488d;
      border-radius: 10px;
      box-shadow: 10px 10px 10px rgba(106, 76, 226, 0.403);
      padding: 20px;
      text-align: center;
    }
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-bottom: 15px;
    }
    h3 {
      margin: 10px 0;
      font-size: 1.2rem;
      color: white;
    }
    p {
      margin: 5px 0;
      color: #666;
      color: whitesmoke;
    }
  </style>