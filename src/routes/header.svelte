  <!-- Header -->
  <header class="container-fluid custom-header-wrapper">
    <a href="https://www.facebook.com/TheAnimalSanctuaryNZ" target="_blank">
      <img src="images/sanctuary-banner.png" alt="Animal Sanctuary Logo" class="img-fluid" /></a>
  </header>
  <!-- End Header -->
  
  <script>
    let navButton;
    const show_hide = () => {
      if (! navButton.classList.contains("collapsed")){
        navButton.click();
      }
    }
  </script>

  <!-- Navigation -->
  <nav class="sticky-top navbar navbar-expand-xl custom-navbar">
    <!-- svelte-ignore a11y-missing-content a11y-missing-attribute -->
    <a class="d-lg-node d-xl-none navbar-brand" href="."></a>
    <button bind:this={navButton} class="navbar-toggler custom-toggler shadow-none collapsed" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="justify-content-center navbar-collapse collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item px-3">
          <a on:click={show_hide} class="nav-link" href=".">HOME</a>
        </li>
        <li class="nav-item px-3">
          <a on:click={show_hide} class="nav-link" href="about">ABOUT</a>
        </li>
        <li class="nav-item px-3">
          <a on:click={show_hide} class="nav-link" href="adopt">ADOPT</a>
        </li>
        <li class="nav-item px-3">
          <a on:click={show_hide} class="nav-link" href="shop">SHOP</a>
        </li>
        <li class="nav-item px-3">
          <a on:click={show_hide} class="nav-link" href="help">DONATE/HELP</a>
        </li>
        <li class="nav-item px-3">
          <a on:click={show_hide} class="nav-link" href="news">NEWS</a>
        </li>
        <li class="nav-item px-3">
          <a on:click={show_hide} class="nav-link" href="contact">CONTACT</a>
        </li>
      </ul>
    </div>
  </nav>
  <!-- End Navigation -->
