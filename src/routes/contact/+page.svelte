<!-- Add headers here -->
<svelte:head>
<title>The Animal Sanctuary - Contact Us</title>
</svelte:head>

<!-- Contact Us -->
<div class="container custom-content shadow-lg">
  <!-- Form and Contact Details section -->
  <h1>CONTACT US</h1>
  
  <div class="row">
    <!-- Form -->
    <div class="col-md-6">
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
          <label for="subject">Subject:</label>
          <input type="subject" class="form-control" id="subject" placeholder="Please enter the subject of your message" name="subject">
        </div>
        <div class="form-group">
          <label for="message" class="form-label">Message:</label>
          <textarea type="message" class="form-control" id="message" rows="4" placeholder="Please type your message here"></textarea>
        </div>
        <button type="submit" class="btn btn-success d-flex mx-auto mt-3">Send</button>
      </form> 
    </div>
    <!-- End Form -->
    <!-- Contact Details -->
    <div class="col-md-6">
      <p><b>Please use the contact details below or fill out the form to get in contact with us. We look forward to hearing from you!</b></p>
      <h4>Address</h4>
      <p>
        The Sanctuary
        <br>441 Govan Wilson Rd
        <br>Matakana
        <br>RD5, Warkworth
        <br>New Zealand
      </p>
      <h4>Phone</h4>
      <p>09 422 7322</p>
      <h4>Email</h4>
      <p>animalsanctuary@xtra.co.nz</p>
    </div>
    <!-- End Contact Details -->     
  </div>

<hr/>

  <!-- Google Map -->
  <div class="container text-center">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102879.19689031561!2d174.57150233201511!3d-36.31291544976335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0cc32c12608d4f%3A0xae3c43623189cbde!2s441%20Govan%20Wilson%20Road%2C%20Whangaripo%200985!5e0!3m2!1sen!2snz!4v1706850963693!5m2!1sen!2snz" width="100%" height="450" style="border:0;" allow="fullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Google area map"></iframe>
  </div>
  <!-- End Google Map -->
  
</div>
<!-- End Form and Contact Details -->
