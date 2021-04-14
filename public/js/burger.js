// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
  if (event) {
    // console.info('DOM loaded');
  }

// CREATE
  const getNameOfBurger = document.getElementById('makeNewBurger');

  if (getNameOfBurger) {
    getNameOfBurger.addEventListener('submit', (e) => {
      e.preventDefault();
      const newBurger = {
        burgerName: document.getElementById('userInputName').value.trim(),
      };
      // console.log('test: ' + JSON.stringify(newBurger.burgerName))
      // console.log(newBurger)
      fetch('/api/burger', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBurger),
        // body: newBurger.burgerName,
      }).then(() => {
        location.reload();
      });
    });
  }

// UPDATE
  const updateBugerStatus = document.querySelectorAll('.changeBurger');

  if (updateBugerStatus) {
    updateBugerStatus.forEach((button) => {
      button.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        fetch(`/api/burger/${id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }).then((res) => {
          console.log(res);
          console.log(`update status of burger: ${id}`);
          location.reload();
        });
      });
    });
  }

// DELETE
  const deleteTheBurger = document.querySelectorAll('.deleteTheBurger');

  deleteTheBurger.forEach((button) => {
    button.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-id');

      fetch(`/api/burger/${id}`, {
        method: 'DELETE',
      }).then((res) => {
        console.log(res);
        console.log(`Deleted burger: ${id}`);
        location.reload();
      });
    });
  });
});
