document.addEventListener('DOMContentLoaded', () => {
    const projectButtonsContainer = document.getElementById('project-buttons');
    const projectsContainer = document.getElementById('projects-container');
    const projectSections = projectsContainer.querySelectorAll('.project');

    const hideAllProjects = () => {
        projectSections.forEach(project => {
            project.classList.remove('active');
        });
    };

    const deactivateAllButtons = () => {
        const buttons = projectButtonsContainer.querySelectorAll('button');
        buttons.forEach(button => {
            button.classList.remove('active');
        });
    };
    projectButtonsContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const selectedProjectId = e.target.getAttribute('data-project');

            hideAllProjects();

            deactivateAllButtons();

            const selectedProject = document.getElementById(selectedProjectId);
            if (selectedProject) {
                selectedProject.classList.add('active');
            }

            e.target.classList.add('active');
        }
    });
});
