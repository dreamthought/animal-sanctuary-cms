<!-- Add headers here -->
<svelte:head>
<title>The Animal Sanctuary - Adopt</title>
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
            <a href="#hen" class="btn custom-btn-adopt">Learn more</a>
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
          <a href="#hen" class="btn custom-btn-adopt">Learn more</a>
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

<hr/>
  
  <!-- Hen Content -->
  <div class="containter" id="hen">
    <h1>Egg Farm Hens</h1>
      <p>
      <b>The Animal Sanctuary works closely with other sanctuaries to rescue, rehabilitate and re-home young hens from commercial egg farms. 
        Most people don’t know that ALL laying hens in New Zealand are allowed to lay for just one season, and then are killed at 18 months of age. 
        This includes free range and caged.</b>
      </p>
      <p>
        We help rescue these young hens (with the permission of the farmers) to find them safe loving homes instead. 
        Hens make wonderful companions as they are low-maintenance, social animals that love to spend time with you and will keep you entertained with their antics.
      </p>
      <p>
        <b><i><u>All of our hen rescues are now coordinated by Franklin Farm Sanctuary.</u></i></b> 
        <br/>If you live in the regions of Auckland, Waikato, Tauranga, and Rotorua, please apply using this hen adoption link:
        <a href="https://franklinfarmsanctuary.co.nz/adoption-form/?adoption-type=Hens" class="in-text-link" target="_blank">Franklin Farm Sanctuary - hen adoption form</a>.
      <p>
        If you’re in the Taranaki region, visit 
        <a href="https://www.facebook.com/profile.php?id=100064618362585" class="in-text-link-facebook" target="_blank">New Beginnings Rescue & Rehoming</a>
        on Facebook.
    </p>
  </div>
  <!-- End Hen Content-->

</div>
<!-- End Adopt-->