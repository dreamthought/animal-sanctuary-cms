<!-- Add headers here -->
<svelte:head>
<title>Sanctuary Supporter | The Animal Sanctuary</title>
</svelte:head>

<script>
  const apiEndpoint = 'https://btk5m6ieo6.execute-api.us-east-1.amazonaws.com/Live/support';
  let name = ""
  let email = ""
  let address = ""
  let payment_code = ""
  let comment = ""
  const submitForm = (event)  => {
           event.preventDefault();

           var data = {
              name,
              email,
              address,
              payment_code,
              comment
            };

            fetch(apiEndpoint, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                document.getElementById('supportForm').reset();
            })
            .catch(error => {
                alert('Error submitting form. It is us, not you. Please try again.');
                console.error('Error:', error);
            });
  };
</script>



<!-- Content Supporter -->
<div class="container custom-content shadow-lg">
    <h1>SANCTUARY SUPPORTERS</h1>
      <div class="container">
      <h2><i>Would you spare a coffee for the animals?</i></h2>
        <p>
        <b>For the price of just one coffee a month, you can provide real help to injured and orphaned native birds and rescued abused animals.</b>
      </p>
      <p>
        Become a Sanctuary Supporter with an automatic donation of $5 or more per month. 
        You can visit The Animal Sanctuary (which is closed to the general public), meet the animals and birds, and see what we do. 
        And because we are a registered charity, you can even receive one-third of your donation back each year as a tax refund!
      </p>
      <h3>HOW TO BECOME A SUPPORTER</h3>
      <p>
        1. Go to online banking or to your nearest bank branch.
      </p>
      <p>
        2. Set up an Automatic Payment of $5 per month or more, to:
        <br><b>Account Name: The Animal Sanctuary Charitable Trust
        <br>Account Number: 12-3026-0327945-00</b>
        <br>make sure your name is in the payment code
      </p>
      <p>
        3. Now that you have signed up for a donation, please fill out the following form with your details so we know the donations are from you, 
        and we can send you updates, invitations, and your tax deductible receipt.
      </p>
      <h2><i class="fa fa-heart" aria-hidden="true"></i> I am now an Animal Sanctuary Supporter <i class="fa fa-heart" aria-hidden="true"></i></h2>
    </div>
    <!-- Supporters Form -->
    <form id="supportForm" on:submit|preventDefault={submitForm}>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" class="form-control" id="name" placeholder="Please enter your name" name="name" bind:value={name} maxlength="100" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" placeholder="Please enter your email" name="email" maxlength="200" bind:value={email} required>
      </div>
      <div class="form-group">
        <label for="address" class="form-label">Address:</label>
        <textarea type="text" class="form-control" id="address" rows="4" placeholder="Please enter your full postal address"
         bind:value={address} required maxlength="255"></textarea>
      </div>
      <div class="form-group">
        <label for="payment">Payment Code:</label>
        <input type="text" class="form-control" id="payment" placeholder="Please enter your payment code"
         name="payment" bind:value={payment_code} maxlength="100" required>
      </div>
      <div class="form-group">
        <label for="Comment">Comment:</label>
        <textarea type="text" class="form-control" id="comment" placeholder="Message (optional)"
          name="comment" bind:value={comment} maxlength="800" rows="3"/>
      </div>
      <button type="submit" class="btn custom-btn-animals-back d-flex mx-auto mt-3">Send</button>
    </form> 
    <!-- Supporters Form -->

<hr/>
    <div class="text-end">
      <a href="help" class="btn custom-btn-help-back">Back to Donate/Help</a>
    </div>

  </div>
  <!-- End Content Supporter -->
