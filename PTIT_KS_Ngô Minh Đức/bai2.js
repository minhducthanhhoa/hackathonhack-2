// Lấy dữ liệu từ Local Storage và hiển thị lên bảng
function renderProjects() {
    var projects = JSON.parse(localStorage.getItem('projects')) || [];

    var projectList = document.getElementById('projectList');
    projectList.innerHTML = '';

    projects.forEach(function(project, index) {
      var projectItem = document.createElement('div');
      projectItem.className = 'project-item';

      var projectNameInput = document.createElement('input');
      projectNameInput.type = 'text';
      projectNameInput.value = project.name;
      projectItem.appendChild(projectNameInput);

      var imageUrlInput = document.createElement('input');
      imageUrlInput.type = 'url';
      imageUrlInput.value = project.imageUrl;
      projectItem.appendChild(imageUrlInput);

      var linkInput = document.createElement('input');
      linkInput.type = 'url';
      linkInput.value = project.link;
      projectItem.appendChild(linkInput);

      var tagsInput = document.createElement('input');
      tagsInput.type = 'text';
      tagsInput.value = project.tags;
      projectItem.appendChild(tagsInput);

      var deleteButton = document.createElement('input');
      deleteButton.type = 'button';
      deleteButton.value = 'Delete';
      deleteButton.className = 'btn';
      deleteButton.onclick = function() {
        deleteProject(index);
      };
      projectItem.appendChild(deleteButton);

      var updateButton = document.createElement('input');
      updateButton.type = 'button';
      updateButton.value = 'Update';
      updateButton.className = 'btn';
      updateButton.onclick = function() {
        updateProject(index);
      };
      projectItem.appendChild(updateButton);

      projectList.appendChild(projectItem);
    });
  }

  // Thêm mới project
  function addProject() {
    var projectName = document.getElementById('projectName').value;
    var imageUrl = document.getElementById('imageUrl').value;
    var link = document.getElementById('link').value;
    var tags = document.getElementById('tags').value;

    var project = {
      name: projectName,
      imageUrl: imageUrl,
      link: link,
      tags: tags
    };

    var projects = JSON.parse(localStorage.getItem('projects'))|| [];
    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));

    renderProjects();
  }

  // Xóa project
  function deleteProject(index) {
    var projects = JSON.parse(localStorage.getItem('projects')) || [];
    projects.splice(index, 1);
    localStorage.setItem('projects', JSON.stringify(projects));

    renderProjects();
  }

  // Cập nhật project
  function updateProject(index) {
    var projects = JSON.parse(localStorage.getItem('projects')) || [];
    var project = projects[index];

    var projectNameInput = document.querySelectorAll('.project-item input[type="text"]')[index];
    project.name = projectNameInput.value;

    var imageUrlInput = document.querySelectorAll('.project-item input[type="url"]')[index];
    project.imageUrl = imageUrlInput.value;

    var linkInput = document.querySelectorAll('.project-item input[type="url"]')[index];
    project.link = linkInput.value;

    var tagsInput = document.querySelectorAll('.project-item input[type="text"]')[index];
    project.tags = tagsInput.value;

    localStorage.setItem('projects', JSON.stringify(projects));

    renderProjects();
  }

  renderProjects();