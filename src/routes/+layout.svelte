<script>
  import Header from './header.svelte'
</script>

<Header/>

<!-- Content area cloud background -->
<div class="container-fluid custom-background">
  <slot/> 
  
  <!-- Footer - within main container -->
  <footer class="custom-footer">
    <a href="https://www.facebook.com/TheAnimalSanctuaryNZ" target="_blank"><img id="facebook" src="images/followus.png" 
     alt="Animal Sanctuary Banner" class="img-fluid" />
    </a>
    <p>
    The Animal Sanctuary is an animal refuge run by Shawn Bishop and Michael Dixon in Matakana, New Zealand. We provide a safe haven for abused and neglected animals, 
    and care for injured or orphaned native birds. A charitable trust has been established for this purpose.
    </p>
    <span><i class="fa fa-copyright"></i> 2024 The Animal Sanctuary</span>
  </footer>
  <!-- End Footer -->
 
</div>
<!-- End Content area -->
