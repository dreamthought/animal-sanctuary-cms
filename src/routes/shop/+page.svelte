<!-- Add headers here -->
<svelte:head>
<title>The Animal Sanctuary - Shop</title>
</svelte:head>

<!-- Shop -->
<div class="container custom-content shadow-lg">
    <h1>SHOP HERE TO HELP THE ANIMALS</h1>
      <div class="container">
        <p class="text-center">
        <b>Whenever you shop with one of the links below, you automatically help The Animal Sanctuary.
        So please, indulge in lots and lots of wonderful retail therapy!!</b>
      </p>
    </div>
    <!-- row for Shop option cards -->
    <div class="row">
      
      <div class="col-md-6">
        <div class="card custom-card-shop">
          <img src=" images/shop/logo-animal-sanctuary-shop-new.jpg" alt="The Animal Sanctuary logo" class="card-img" />
          <div class="card-img-overlay">
            <div class="card-body custom-card-body-shop">
              <h4 class="card-title custom-card-title-shop">Online Shop</h4>
              <p class="card-text custom-card-text-shop">Yes, our own on-line shop! 100% of the profits from these products go to the animals.</p>
              <!-- svelte-ignore a11y-missing-attribute -->
              <a href="shop" class="btn custom-btn-shop">Coming Soon</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card custom-card-shop">
          <img src=" images/shop/logo-trademe-new.jpg" alt="The Animal Sanctuary logo" class="card-img" />
          <div class="card-img-overlay">
            <div class="card-body custom-card-body-shop">
              <h4 class="card-title custom-card-title-shop">Trade Me Store</h4>
              <p class="card-text custom-card-text-shop">100% of the sales from our Trade Me site go to the animals. (contact us if you have items for us to sell)</p>
              <!-- svelte-ignore a11y-missing-attribute -->
              <a href="shop" class="btn custom-btn-shop">Shop Now</a>
            </div>
          </div>
        </div>
      </div>

      </div>
    <!-- End row for shop options cards -->
    <!-- Op Shop Donations -->
    <div class="container custom-content-green text-center mt-3">
      <p class="fs-3 pt-2"><b>We welcome donations for our Animals Op Shop Store</b></p>
    </div>
    <div class="container mt-3">
      <p>
        <b><i>Thank you</i> for your generous offer to donate a quality item to list on Trade Me for our “Animals Op Shop” store!  
        The proceeds from this sale will help us continue the important work we do, and we couldn’t do it without support from people like you.</b>
      </p>
      <p>
        To help us create the best listing possible, please complete this form and send it back to us at <b class="custom-b-green">animalsopshop@gmail.com</b> with <b><i>at least three</i></b> photographs of the item. 
        We suggest you follow these guidelines for photos:
      </p>
      <ul>
        <li>Use high-resolution, or detailed photographs that clearly show the item details</li>
        <li>Try and have the item be the only thing in the picture, or taking up as much of the picture as possible so its clear what item is for sale</li>
        <li>Take your photos in bright or natural light and avoid shadows</li>
        <li>Landscape (horizontal) photos work best</li>
        <li>Photograph smaller items on a white, light background that’s free of distractions</li>
        <li>Include photos from multiple angles, including closeups of any imperfections, brand names, or unique features</li>
      </ul>
      <!-- Div for Form -->
      <div class="custom-form mt-2">
        <form action="#">
          <div class="form-group">
            <label for="description">Description:</label>
            <input type="description" class="form-control" id="description" placeholder="Please enter a detailed description of the item" name="description">
            <small id="passwordHelpBlock" class="form-text text-muted">
              Tips:
            • Include size/measurements
            • Note unique or special features that make this item stand out
            • Include details or descriptions that you as a buyer would like to know about
            • Note any imperfections or damage
            </small>
          </div>
          <div class="form-group">
            <label for="chickens">Condition of this item</label>
          </div>
          <select class="form-select" aria-label="">
            <option selected>Please choose an option below</option>
            <option value="Yes">New - brand new, original packaging</option>
            <option value="No">Used - like new</option>
            <option value="No">Used - very good</option>
            <option value="No">Used - good</option>
            <option value="No">Used - acceptable</option>
          </select>
          <div class="form-group">
            <label for="condition">Retail or Current Value in $</label>
            <input type="condition" class="form-control" id="condition" placeholder="What do you think it is worth?" name="condition">
          </div>
          <div class="form-group">
            <label for="chickens">Shipping</label>
          </div>
          <select class="form-select" aria-label="">
            <option selected>Select which options apply to your item</option>
            <option value="Yes">I can post or courier the item (at buyer’s expense)</option>
            <option value="No">The item can be picked up from (town)</option>
          </select>
          <div class="form-group">
            <label for="condition">Your address for pickup IF allowed.  Will NOT be published in listing, only sent to buyer.</label>
            <input type="condition" class="form-control" id="condition" placeholder="Please enter your address" name="condition">
          </div>
          <div class="form-group">
            <label for="condition">Your phone number (if we need to call you): </label>
            <input type="condition" class="form-control" id="condition" placeholder="Please enter your phone number" name="condition">
          </div>
          <div class="form-group">
            <label for="condition">Your email address: </label>
            <input type="condition" class="form-control" id="condition" placeholder="Please enter your email address" name="condition">
          </div>
          

        <button type="submit" class="btn btn-success d-flex mx-auto mt-3">Send</button>
      </form> 
    </div>
    <!-- Form -->
    </div>
    <!-- End Op Shop Donations -->

  </div>
  <!-- End Shop -->