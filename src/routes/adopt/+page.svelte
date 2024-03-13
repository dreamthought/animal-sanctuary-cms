<!-- Add headers here -->
<svelte:head>
<title>Adopt - The Animal Sanctuary</title>
</svelte:head> 
 
<!-- Adopt -->
<div class="container custom-content shadow-lg">
  <h1>ADOPT</h1>
  <div class="container">
    <h2>Looking for Love!</h2>
    <p class="text-center">
      <b>While some animals come to the Sanctuary for the rest of their lives, others would be happy to find new homes with loving families all to themselves.</b>
    </p>
  </div>
  <!-- Cards on lg and above screens -->
  <div class="d-none d-lg-block">
  <div class="row">
    <div class="col-md-6">
      <div class="card custom-card-adopt">
        <img src=" images/adopt/hen.jpg" alt="A healthy adopted ex-egg farm hen" class="card-img" />
        <div class="card-img-overlay">
          <div class="card-body custom-card-body-adopt">
            <h4 class="card-title custom-card-title-adopt">Egg Farm Hens</h4>
            <p class="card-text custom-card-text-adopt">The Animal Sanctuary works closely with other sanctuaries to rescue, rehabilitate and re-home young hens from commercial egg farms.</p>
            <a href="hens" class="btn custom-btn-adopt">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card custom-card-adopt">
        <img src="images/adopt/sheep.png" alt="Sheep in a green paddock" class="card-img" />
        <div class="card-img-overlay">
          <div class="card-body custom-card-body-adopt">
            <h4 class="card-title custom-card-title-adopt">Other Animals</h4>
            <p class="card-text custom-card-text-adopt">Other animals that are up for adoption are posted on The Animal Sanctuary Facebook page as they become available.  Please follow us to see who needs a new home…</p>
            <a href="https://www.facebook.com/TheAnimalSanctuaryNZ" target="_blank" class="btn custom-btn-adopt-blue-hover">Follow Us</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <!-- End Cards on lg and above screens -->
  <!-- Cards md and below screens -->
  <div class="row d-lg-none">
    <div class="col-md-6 mb-3">
      <div class="card custom-card-adopt h-100">
        <img src=" images/adopt/hen.jpg" alt="A healthy adopted ex-egg farm hen" class="img-top" />
        <div class="card-body">
          <h4 class="card-title custom-card-title-adopt">Egg Farm Hens</h4>
          <p class="card-text custom-card-text-adopt">The Animal Sanctuary works closely with other sanctuaries to rescue, rehabilitate and re-home young hens from commercial egg farms.</p>
          <a href="hens" class="btn custom-btn-adopt">Learn more</a>
        </div>
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <div class="card custom-card-adopt h-100">
        <img src="images/adopt/sheep.png" alt="Sheep in a green paddock" class="card-img" />
        <div class="card-body">
          <h4 class="card-title custom-card-title-adopt">Other Animals</h4>
          <p class="card-text custom-card-text-adopt">Other animals that are up for adoption are posted on The Animal Sanctuary Facebook page as they become available.  Please follow us to see who needs a new home…</p>
          <a href="https://www.facebook.com/TheAnimalSanctuaryNZ" target="_blank" class="btn custom-btn-adopt-blue-hover">Follow Us</a>
        </div>
      </div>
    </div>
  </div>
  <!-- End Cards on xs and sm screens -->

</div>
<!-- End Adopt-->