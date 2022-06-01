<script>
  if(document.getElementById('project-filter')) {
      const filterElements = document.querySelectorAll('.project-filter-item');
      const allProjects = document.querySelectorAll('.tile');
      // const clearFilter = document.getElementById('clear-filter-button');
      filterElements.forEach(filterElement => {
          filterElement.addEventListener('click', function(e) {
              e.preventDefault();
              const allProjectsOfSelectedType = document.querySelectorAll('.' + filterElement.id);
              allProjects.forEach(project => {
                  project.style.display = "none";
              });
              allProjectsOfSelectedType.forEach(selectedProject => {
                  selectedProject.style.display = "flex";
              })
              filterElements.forEach(element => {
                  element.classList.remove('active');
              })
              e.target.classList.add('active');

          })
      });
      /*clearFilter.addEventListener('click', function(e) {
          e.preventDefault();
          allProjects.forEach(project => {
              project.style.display = "flex";
          })
          filterElements.forEach(element => {
              element.classList.remove('active');
          })
      })*/

  }
</script>
