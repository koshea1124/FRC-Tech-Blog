const frcLogout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Attempt to log out was unsuccesful')
      }
    };
    //Event Listener
    const frcLogoutButton = document.querySelector('#frc-logout');
    if (frcLogoutButton) {
        frcLogoutButton.addEventListener('click', frcLogout);
    }
        
