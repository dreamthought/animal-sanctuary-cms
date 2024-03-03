<script>
  import Header from './header.svelte';
  import Footer from './footer.svelte';
</script>

<Header/>

<!-- Content area cloud background -->
<div class="custom-background">
  <slot/> 

  <Footer/>
 
</div>
<!-- End Content area -->
