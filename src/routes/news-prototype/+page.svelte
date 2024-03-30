<!-- Add headers here -->
<svelte:head>
<title>News | The Animal Sanctuary</title>
</svelte:head>


<script>
  import { onMount } from 'svelte'
  const apiEndpoint = 'https://560dcon6p6.execute-api.us-east-1.amazonaws.com/default/animal-sanctuary-news-api-poc'
  let feed = [];
  const deNewline= (text) => text.split("\n")

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
    <div class="col">
      <div class="row g-0 mb-3 custom-content-news">
        <div class="col-lg-9 p-2">
          <div class="d-flex">
            <img src="images/news/facebook-logo.png" alt="The Animal Sanctuary NZ Facebook logo" class="custom-news-logo" /><b>The Animal Sanctuary</b>
            <!-- facebook post date-->
            <small class="ms-auto">{post.created_time}</small>
          </div>
          <!-- facebook post text -->
          <p>
            {#each deNewline(post.message) as paragraph}
              <p>{paragraph}</p>
            {/each}
            <!-- link to facebook post -->
            <br/><a href="{post.permalink_url}" target="_blank" class="in-text-link-facebook">See more <i class="fa-solid fa-arrow-right"></i></a>
          </p>
        </div>
        <div class="col-lg-3 d-flex align-items-center align-content-center">
          <!-- facebook post image (square ) -->
          <img src="{post.full_picture}" class="rounded img-fluid w-100" alt="Facebook">
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
