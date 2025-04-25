const username = 'MohamadKamardin1';
    const projectsContainer = document.getElementById('projects');

    fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
      .then(response => response.json())
      .then(repos => {
        repos.forEach(repo => {
          const col = document.createElement('div');
          col.className = 'col-md-6';

          const card = document.createElement('div');
          card.className = 'project-card';

          const title = document.createElement('h2');
          title.className = 'project-title';
          title.textContent = repo.name;

          const description = document.createElement('p');
          description.className = 'project-description';
          description.textContent = repo.description || 'No description provided.';

          const link = document.createElement('a');
          link.className = 'project-link';
          link.href = repo.html_url;
          link.target = '_blank';
          link.textContent = 'View on GitHub';

          card.appendChild(title);
          card.appendChild(description);
          card.appendChild(link);
          col.appendChild(card);
          projectsContainer.appendChild(col);
        });
      })
      .catch(error => {
        console.error('Error fetching repositories:', error);
        projectsContainer.innerHTML = '<p class="text-center">Unable to load projects at this time.</p>';
      });


    //   form Script

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


