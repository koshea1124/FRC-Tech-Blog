// Get the post ID from the endpoint
const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  
  // Update the post
  const updateFrcPostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#title-update-frc-post").value.trim();
    const content = document
      .querySelector("#content-update-frc-post")
      .value.trim();
  
    if (title && content) {
      const response = await fetch(`/api/posts/${post_id}`, {
        method: "PUT",
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard"); 
      } else {
        alert("Attempt to update a post was unsuccessful"); 
      }
    }
  };
  
  // Delete the post
  const deleteFrcPostFormHandler = async (event) => {
    event.preventDefault();
  
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "DELETE",
    });
  
    if (response.ok) {
      document.location.replace("/dashboard"); 
    } else {
      alert("Attempt to delete a post was unsuccessful"); 
    }
  };
  
  // Event listeners
  const updateFrcPostButton = document.querySelector("#update-frc-post");
  if (updateFrcPostButton) {
    updateFrcPostButton.addEventListener("click", updateFrcPostFormHandler);
  }
  
  const deleteFrcPostButton = document.querySelector("#delete-frc-post");
  if (deleteFrcPostButton) {
    deleteFrcPostButton.addEventListener("click", deleteFrcPostFormHandler);
  }