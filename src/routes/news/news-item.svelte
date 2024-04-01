<script>
  // passed in by +page.svelte
  export let post;

  const callToAction = "News from The Animal Sanctuary."
  const postLimit = 65;
  const leadingZeroRe = new RegExp(/^0/);

  const deNewline= (text) => !text ? [callToAction] : (text.split(" ").slice(0, postLimit).join(" ") + " ...").split("\n");

  const formatDate = (date) => {
    const options = { day: "2-digit", month:"short" };
    const dateFormatter = new Intl.DateTimeFormat('en-NZ', options);
    // returns "dd MMM"
    const formattedDate = dateFormatter.format(new Date(date));
    return formattedDate.replace(/^0/, "");
  }


</script>

<style>
    
</style>
    

<!-- news item  1 -->

    <div class="row g-0 mb-3 custom-content-news">
        <div class="col-12 p-2">
        <div class="d-flex">
            <img src="images/news/facebook-logo.png" alt="The Animal Sanctuary NZ Facebook logo" class="custom-news-logo" /><b>The Animal Sanctuary</b>
            <!-- facebook post date -->
            <small class="ms-auto">{formatDate(post.created_time)}</small>
        </div>
        <!-- facebook post text -->
        <p>
            {#each deNewline(post.message) as paragraph}
            {paragraph}<br/>
            {/each}
            <!-- link to facebook post -->
            <br/>
            
            <a href="{post.permalink_url}" target="_blank" class="in-text-link-facebook">See more <i class="fa-solid fa-arrow-right"></i></a>
        </p>
        </div>

        {#if post.full_picture}
        <div class="col-12 d-flex align-items-center align-content-center">
            <!-- facebook post image (square ) -->
            <img src="{post.full_picture}" class="rounded img-fluid w-100" alt="Facebook">
        </div>
        {/if}
    </div>


