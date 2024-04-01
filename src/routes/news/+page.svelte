<!-- Add headers here -->
<svelte:head>
<title>News | The Animal Sanctuary</title>
</svelte:head>
<script>
  import NewsItem from './news-item.svelte';
  let feed=[];
  import { onMount } from 'svelte'
  const apiEndpoint = 'https://560dcon6p6.execute-api.us-east-1.amazonaws.com/default/animal-sanctuary-news-api-poc'

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

  const isEven = (num) => num % 2 === 0;
  const isOdd = (num) => !isEven(num);

  onMount(fetchData);
</script>


<!-- News on Large Devices-->
<div class="container custom-content shadow-lg">
  <h1>NEWS</h1>
  <p class="text-center">
    <b>Our NEWS page is updated from our Facebook page. To see more, come <a href="https://www.facebook.com/TheAnimalSanctuaryNZ" target="_blank" class="in-text-link-facebook">Follow us on Facebook</a>.</b>
  </p>

  <!-- news feed on lg and xl screen sizes -->
  <div class="d-none d-lg-block">
    <!-- row for news items -->
    <div class="row">
      <!-- left column -->
      <div class="col-lg-6 mb-4 mb-lg-0">


      {#each feed as post, post_number}  

        {#if isEven(post_number) }
        <div class="col">
          <NewsItem post={post}/>
        </div>
        <!-- end news item {index} -->
        {/if}
        
      {:else}
        <p>Loading news....</p>
      {/each}
      </div>
      <!-- end left column-->

      <!-- right column -->
      <div class="col-lg-6 mb-4 mb-lg-0">


      {#each feed as post, post_number}  

        {#if isOdd(post_number) }
        <div class="col">
          <NewsItem post={post}/>
          </div>
        <!-- end news item {index} -->
        {/if}
        
      {:else}
        <p>Loading news....</p>
      {/each}
      </div>
      <!-- end right column -->

    </div>
    <!-- end row for new items -->

  <!-- end news feed on lg and above screen sizes -->
  </div>

  <!-- news feed on md and lower screen sizes -->
  <div class="d-block d-lg-none">

    <!-- row for news items -->
    <div class="row">

    {#each feed as post, post_number}
   
        <NewsItem post={post}/>
      <!-- end news item {index} -->
    {:else}
      <p>Loading news....</p>
    {/each}
    </div>
  </div>
      

</div>

