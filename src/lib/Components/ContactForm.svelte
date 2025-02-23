<script>
    let name = '';
    let email = '';
    let message = '';
  
    const handleSubmit = () => {
      alert(`Thank you, ${name}! Your message has been sent.`);
      name = '';
      email = '';
      message = '';
    };
  </script>
  
  <form on:submit|preventDefault={handleSubmit}>
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" bind:value={name} required />
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" bind:value={email} required />
    </div>
    <div>
      <label for="message">Message</label>
      <textarea id="message" bind:value={message} required></textarea>
    </div>
    <button type="submit">Send Message</button>
  </form>
  
  <style>
    form {
      display: flex;
      flex-direction: column;
      gap: 15px;
      max-width: 400px;
      margin: 0 auto;
  
    }
    label {
      font-weight: bold;
    }
    input, textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    button {
      padding: 10px 20px;
      background-color: #6a11cb;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background-color: #2575fc;
    }
  </style>