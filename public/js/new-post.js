const newFrcPostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title-new-frc-post').value.trim();
    const content = document.querySelector('#content-new-frc-post').value.trim();
  
    if (title && content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard'); 
      } else {
        alert('Attempt to create a new post was unsuccessful.'); 
    }
  }
};
  
  // Event listeners
const newFrcPostForm = document.querySelector('.new-frc-post-form');
if (newFrcPostForm) {
    newFrcPostForm.addEventListener('submit', newFrcPostFormHandler)
    }

