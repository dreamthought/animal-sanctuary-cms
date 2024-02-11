<!-- Add headers here -->
<svelte:head>
<title>The Animal Sanctuary - Adopt Hens</title>
</svelte:head>

<!-- Container for Hens -->
<div class="container custom-content shadow-lg">
    <h1>EX-BATTERY HENS</h1>
      
        <div class="custom-wrap-img text-center">
          <img src="images/adopt/hen.jpg" class="rounded" alt="An ex-battery rescue hen ready for adoption">
        </div>
        <p class="custom-wrap-text">
        <b>The Sanctuary works closely with animal welfare groups to rescue, rehabilitate and re-home battery hens. 
        Hens make wonderful companions as they are low-maintenance, social animals that love to spend time with you and will keep you entertained with their antics.</b> 
      </p>
      <p class="custom-wrap-text">
        For adopters in the Auckland Rodney areas (e.g. Warkworth, Matakana, Snells Beach, Leigh, Wellsford, etc), Helensville and Mangawhai, 
        please fill out <b class="custom-b-green">our adoption form.</b>
      <p class="custom-wrap-text">
        <b>For ALL OTHER AREAS of Auckland, Waikato, Tauranga, Rotorua, please apply using
        the <a href="https://franklinfarmsanctuary.co.nz/adoption-form/" class="in-text-link" target="_blank">Franklin Farm Sanctuary form.</a></b>
      </p>

        <!-- Div for Hen Form -->
      <div class="custom-form mt-5">
        <form action="#">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="name" class="form-control" id="name" placeholder="Please enter your name" name="name">
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Please enter your email" name="email">
          </div>
          <div class="form-group">
            <label for="phone">Phone:</label>
            <input type="phone" class="form-control" id="phone" placeholder="Please enter your phone number" name="phone">
          </div>
          <div class="form-group">
            <label for="location">Where do you live?</label>
            <input type="location" class="form-control" id="location" placeholder="Please enter your town/city" name="location">
          </div>
          <div class="form-group">
            <label for="chickens">Do you have chickens already?</label>
          </div>
          <select class="form-select" aria-label="">
            <option selected>Please select either Yes or No</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <div class="form-group">
            <label for="chickens4life">Do you promise to keep these birds for life?</label>
          </div>
          <select class="form-select" aria-label="Default select example">
            <option selected>Please select either Yes or No</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <div class="form-group">
            <label for="housing">Do you have adequate housing that will shelter them from wind and rain, keep them safe at night, and provide nesting areas and roosts?</label>
          </div>
          <select class="form-select" aria-label="Default select example">
            <option selected>Please select either Yes or No</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <div class="form-group">
            <label for="freerange/run">Will the hens free range during the day, or have a large run with grass?</label>
          </div>
          <select class="form-select" aria-label="Default select example">
            <option selected>Please select an option below</option>
            <option value="Yes">Free Range</option>
            <option value="No">Run</option>
          </select>
        <div class="form-group">
          <label for="message" class="form-label">Why would you like to adopt some hens? </label>
          <textarea type="message" class="form-control" id="message" rows="4" placeholder="Please type your reply here"></textarea>
        </div>
        <button type="submit" class="btn btn-success d-flex mx-auto mt-3">Send</button>
      </form> 
    </div>
    <!-- End Container for Hen Form -->

    <hr>
    <div class="text-end">
      <a class="btn btn-outline-success" href="help" role="button">Back to Donate/Help</a>
    </div>

  </div>
  <!-- Hens-->