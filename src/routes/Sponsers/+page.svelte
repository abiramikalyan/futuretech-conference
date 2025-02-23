<script>
  // Dummy sponsor data
  const sponsors = [
    { name: 'TechCorp', logo: '/images/techcorp-logo.png', tier: 'Gold', link: 'https://techcorp.com' },
    { name: 'InnovateX', logo: '/images/innovatex-logo.png', tier: 'Silver', link: 'https://innovatex.com' },
    { name: 'FutureWorks', logo: '/images/futureworks-logo.png', tier: 'Bronze', link: 'https://futureworks.com' },
  ];
</script>

<section class="sponsors">
  <h2>Our Sponsors</h2>
  <div class="sponsor-grid">
    {#each sponsors as sponsor}
      <div class="sponsor-card">
        <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
          <img src={sponsor.logo} alt={sponsor.name} />
        </a>
        <p class="tier">{sponsor.tier} Sponsor</p>
      </div>
    {/each}
  </div>
</section>

<style>
  .sponsors {
    padding: 2rem;
    text-align: center;
  }

  .sponsor-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    margin-top: 1rem;
  }

  .sponsor-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .sponsor-card img {
    width: 100%;
    max-width: 150px;
    height: auto;
  }

  .tier {
    font-size: 0.9rem;
    color: #666;
  }
</style>