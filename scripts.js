document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            id: 'project1',
            title: 'Chess Vision AI',
            subtitle: 'Computer vision to detect chess pieces on a chessboard',
            description: `
                Computer vision to detect chess pieces on a chessboard to analyze the position on a device using
                Stockfish (until I develop my own chess engine). Works on pictures and in real-time on video, displaying the
                evaluation and best move on the same image.
            `,
            algorithmIdea: `
                <ol>
                    <li><strong>Corner Detection:</strong> Identify the four corners of the chessboard.</li>
                    <li><strong>Piece Detection:</strong> Recognize pieces and their bounding boxes.</li>
                    <li><strong>Calculate Coordinates:</strong> Obtain center coordinates for each detected piece.</li>
                    <li><strong>Homography Transformation:</strong> Transform the board to a top-down view using the detected corners.</li>
                    <li><strong>Board Orientation:</strong> Ensure correct board orientation by matching colors and identifying king locations.</li>
                    <li><strong>Square Mapping and FEN Positioning:</strong> Convert piece positions into FEN notation.</li>
                    <li><strong>Move Analysis:</strong> Display current board position and run it through Stockfish to find the best move.</li>
                </ol>
            `,
            images: [
                { src: 'images/project1/image1.png', alt: 'Chess Vision AI Demo 1' },
                { src: 'images/project1/image2.png', alt: 'Chess Vision AI Demo 2' },
                { src: 'images/project1/corner_detection.png', alt: 'Corner Detection' },
                { src: 'images/project1/piece_detection.png', alt: 'Piece Detection' },
                { src: 'images/project1/coordinates.png', alt: 'Coordinates Calculation' },
                { src: 'images/project1/homography.png', alt: 'Homography Transformation' }
            ],
            keywords: ['Computer Vision', 'Chess AI', 'Stockfish', 'Real-time Analysis'],
            github: 'https://github.com/yourgithub/project1'
        },
        {
            id: 'project2',
            title: 'VIT for Biomedical',
            subtitle: 'Graph Neural Representations of Mammographic Images for Explainable Breast Cancer Detection',
            description: `
                A deep learning framework that integrates graphs with Vision Transformers to generate an efficient
                classifier for breast mammography images cancer from the InBreast dataset and its location.
            `,
            dataset: 'InBreast',
            details: `
                The idea is to divide the image into patches, creating a graph. Graphs are used in medical image
                analysis to represent spatial relationships between image pixels. Each tile is transformed into a feature using
                CNN, then these features are related and understood through a transformer to localize and connect the tiles
                and identify cancer. This approach improves explainability and accuracy.
            `,
            interpretability: `
                <h4>Enhanced Interpretability</h4>
                <p>Comparison with standard models: ResNet, AlexNet, etc.</p>
                <p>Future Potential: Extend to other medical imaging tasks.</p>
            `,
            results: `
                <h4>Results:</h4>
                <img src="images/project2/results.png" alt="Results">
            `,
            keywords: ['Mammographic Images', 'Graph Convolutional Network', 'Vision Transformer', 'Deep Learning', 'Breast Cancer'],
            github: 'https://github.com/yourgithub/project2'
        },
        {
            id: 'project3',
            title: 'Self Learning Chess',
            subtitle: 'An AI that Learns Chess Strategies Independently',
            description: `
                A self-learning chess AI that improves its strategies by playing against itself and analyzing games.
                Utilizes reinforcement learning techniques to enhance decision-making processes.
            `,
            algorithmIdea: `
                <ol>
                    <li><strong>Reinforcement Learning:</strong> Implement Q-learning to allow the AI to learn optimal moves.</li>
                    <li><strong>Self-Play:</strong> Enable the AI to play against itself to generate training data.</li>
                    <li><strong>Evaluation Metrics:</strong> Use game outcomes to adjust strategies and improve performance.</li>
                    <li><strong>Strategy Optimization:</strong> Continuously refine tactics based on learned experiences.</li>
                </ol>
            `,
            images: [
                { src: 'images/project3/learning_curve.png', alt: 'Learning Curve' },
                { src: 'images/project3/gameplay.png', alt: 'Gameplay Screenshot' }
            ],
            keywords: ['Reinforcement Learning', 'Self-Play', 'Chess AI', 'Strategy Optimization'],
            github: 'https://github.com/yourgithub/project3'
        }
        // Add more projects here
    ];

    const projectButtonsContainer = document.getElementById('project-buttons');
    const projectsContainer = document.getElementById('projects-container');

    // Function to create project buttons
    const createProjectButtons = () => {
        projects.forEach((project, index) => {
            const button = document.createElement('button');
            button.textContent = `Project ${index + 1}: ${project.title}`;
            button.dataset.projectId = project.id;
            if (index === 0) button.classList.add('active');
            projectButtonsContainer.appendChild(button);
        });
    };

    // Function to display a project
    const displayProject = (projectId) => {
        const project = projects.find(p => p.id === projectId);
        if (!project) return;

        // Clear previous content
        projectsContainer.innerHTML = '';

        // Create project element
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project', 'active');

        // Project Title
        const title = document.createElement('h3');
        title.textContent = `${project.title}`;
        projectDiv.appendChild(title);

        // Project Subtitle (if exists)
        if (project.subtitle) {
            const subtitle = document.createElement('h4');
            subtitle.innerHTML = project.subtitle;
            projectDiv.appendChild(subtitle);
        }

        // Description
        const description = document.createElement('p');
        description.innerHTML = project.description;
        projectDiv.appendChild(description);

        // Algorithm Idea or Details
        if (project.algorithmIdea) {
            const algoSection = document.createElement('div');
            algoSection.innerHTML = `<h4>Algorithm Idea:</h4>${project.algorithmIdea}`;
            projectDiv.appendChild(algoSection);
        }

        if (project.details) {
            const detailsSection = document.createElement('div');
            detailsSection.innerHTML = project.details;
            projectDiv.appendChild(detailsSection);
        }

        // Dataset (if exists)
        if (project.dataset) {
            const dataset = document.createElement('p');
            dataset.innerHTML = `<strong>Dataset Used:</strong> ${project.dataset}`;
            projectDiv.appendChild(dataset);
        }

        // Interpretability (if exists)
        if (project.interpretability) {
            const interpretSection = document.createElement('div');
            interpretSection.innerHTML = project.interpretability;
            projectDiv.appendChild(interpretSection);
        }

        // Results (if exists)
        if (project.results) {
            const resultsSection = document.createElement('div');
            resultsSection.innerHTML = project.results;
            projectDiv.appendChild(resultsSection);
        }

        // Images
        if (project.images && project.images.length > 0) {
            const imagesDiv = document.createElement('div');
            imagesDiv.classList.add('demo-images');
            project.images.forEach(img => {
                const image = document.createElement('img');
                image.src = img.src;
                image.alt = img.alt;
                imagesDiv.appendChild(image);
            });
            projectDiv.appendChild(imagesDiv);
        }

        // Keywords
        if (project.keywords && project.keywords.length > 0) {
            const keywords = document.createElement('p');
            keywords.innerHTML = `<strong>Keywords:</strong> ${project.keywords.join(', ')}.`;
            projectDiv.appendChild(keywords);
        }

        // GitHub Link
        if (project.github) {
            const githubLink = document.createElement('p');
            githubLink.innerHTML = `Most projects can be seen on my <a href="${project.github}" target="_blank">GitHub</a>.`;
            projectDiv.appendChild(githubLink);
        }

        projectsContainer.appendChild(projectDiv);
    };

    // Initialize project buttons and display the first project
    createProjectButtons();
    displayProject(projects[0].id);

    // Event listener for project buttons
    projectButtonsContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            // Remove active class from all buttons
            const buttons = projectButtonsContainer.querySelectorAll('button');
            buttons.forEach(btn => btn.classList.remove('active'));

            // Add active class to the clicked button
            e.target.classList.add('active');

            // Display the selected project
            const selectedProjectId = e.target.dataset.projectId;
            displayProject(selectedProjectId);
        }
    });
});
