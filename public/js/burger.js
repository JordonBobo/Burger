// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
  if (event) {
    console.info('DOM loaded');
  }




  // // UPDATE
  const updateBugerStatus = document.querySelectorAll('#newBurger');

  // Set up the event listener for the create button
  if (updateBugerStatus) {
    updateBugerStatus.forEach((button) => {
      button.addEventListener('click', (e) => {
        // Grabs the id of the element that goes by the name, "id"
        const id = e.target.getAttribute('data-id');
        const newSleep = e.target.getAttribute('data-newsleep');

        const newSleepState = {
          sleepy: newSleep,
        };

        fetch(`/api/cats/${id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },

          // make sure to serialize the JSON body
          body: JSON.stringify(newSleepState),
        }).then((response) => {
          // Check that the response is all good
          // Reload the page so the user can see the new quote
          if (response.ok) {
            console.log(`changed sleep to: ${newSleep}`);
            location.reload('/');
          } else {
            alert('something went wrong!');
          }
        });
      });
    });
  }



  // CREATE
  const getNameOfBurger = document.getElementById('makeNewBurger');

  if (getNameOfBurger) {
    getNameOfBurger.addEventListener('submit', (e) => {
      e.preventDefault();

      // Grabs the value of the textarea that goes by the name, "quote"
      const newBurger = {
        burgerName: document.getElementById('userInputName').value.trim(),
      };
      console.log(newBurger)

      // Send POST request to create a new quote
      // fetch('/api/burger', {
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },

      //   // make sure to serialize the JSON body
      //   body: JSON.stringify(newBurger),
      // }).then(() => {
      //   // Empty the for
      //   document.getElementById('userInputName').value = '';

      //   // Reload the page so the user can see the new quote
      //   console.log('New burger added');
      //   location.reload();
      // });
    });
  }

  // DELETE
  const deleteTheBurger = document.querySelectorAll('.deleteTheBurger');

  // Set up the event listeners for each delete button
  deleteTheBurger.forEach((button) => {
    button.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-id'); // shouldn't it just be id?

      // Send the delete request
      fetch(`/api/burgers/${id}`, {
        method: 'DELETE',
      }).then((res) => {
        console.log(res);
        console.log(`Deleted burger: ${id}`);

        // Reload the page
        location.reload();
      });
    });
  });
});
