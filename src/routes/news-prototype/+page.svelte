<!-- Add headers here -->
<svelte:head>
<title>News | The Animal Sanctuary</title>
</svelte:head>
<script>
  import { onMount } from 'svelte'
  const callToAction = "Some exciting news from the Animal Sanctuary!"
  const postLimit = 75;
  const apiEndpoint = 'https://560dcon6p6.execute-api.us-east-1.amazonaws.com/default/animal-sanctuary-news-api-poc'
  let feed = [];
  //const deNewline= (text) => (text.substring(0,128)+"...").split("\n")
  //const deNewline= (text) => (text.substring(0,postLimit)+"...").split("\n")
  //const deNewline= (text) => [text]
  //const deNewline= (text) => text.split("\n")
  const deNewline= (text) => !text ? [callToAction] : (text.split(" ").slice(0, postLimit).join(" ") + " ...").split("\n")
  //const deNewline = (text) => [text.substring(0,100) + "..."]
  const formatDate = (date) => (new Date(date)).toDateString()
  const fetchData = async () => { 
    const response = await fetch(apiEndpoint, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      },
    });
    const body = await response.json()
    if (response.ok) {
      feed=body.posts.data;
    } 
  }

  onMount(fetchData);
</script>

<style>
.news-container {
  max-height: 25rem;
}

.news-img-container {
  text-align: right;
  background: #350b06;
  -webkit-clip-path: ellipse(60% 65% at 70% 50%);
  clip-path: ellipse(60% 65% at 70% 50%);
}

.news-img-crop {
  object-fit: scale-down;
  object-position: right;
  max-height: 20rem;
  margin: 0 0 0 auto;
}
</style>


<div class="container custom-content shadow-lg">
  <h1>NEWS</h1>
  <p class="text-center">
    <b>Our NEWS page is updated from our Facebook page. To see more, come <a href="https://www.facebook.com/TheAnimalSanctuaryNZ" target="_blank" class="in-text-link-facebook">Follow us on Facebook</a>.</b>
  </p>
  <!-- row for news items (single col on sm and below and lg and above, double col on md)-->
  <div class="row row-cols-1"> 

  {#each feed as post}
<!-- News -->
    <!-- news item  -->
    <div class="col news-container">
      <div class="row g-0 mb-3 custom-content-news">
        <div class="col-lg-9 p-2">
          <div class="d-flex">
            <img src="images/news/facebook-logo.png" alt="The Animal Sanctuary NZ Facebook logo" class="custom-news-logo" /><b>The Animal Sanctuary</b>
            <!-- facebook post date-->
            <small class="ms-auto">{formatDate(post.created_time)}</small>
          </div>
          <!-- facebook post text -->
          <p>
            {#each deNewline(post.message) as paragraph}
            {paragraph}<br/>
            {/each}
            <!-- link to facebook post -->
            <br/><a href="{post.permalink_url}" target="_blank" class="in-text-link-facebook">See more <i class="fa-solid fa-arrow-right"></i></a>
          </p>
        </div>
        <div class="col-lg-3 d-flex align-items-center align-content-center news-img-container">
          <!-- facebook post image (square ) -->
          <img src="{post.full_picture}" class="news-crop rounded img-fluid w-100 news-img-crop" alt="Facebook">
        </div>
      </div>
    </div>
    <!-- end news item  -->
  {:else}
    <p>Loading news....</p>
  {/each}
    
  <!-- end row for news items -->

  </div>
</div>  
<!-- End News -->
