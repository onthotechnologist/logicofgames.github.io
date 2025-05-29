// Application data
const appData = {
  "bio": {
    "name": "Dr. Academic Researcher",
    "title": "Assistant Professor of Computer Science",
    "institution": "University Example",
    "description": "I am a researcher specializing in machine learning, natural language processing, and computational linguistics. My work focuses on developing innovative algorithms that bridge the gap between human language understanding and artificial intelligence systems.",
    "email": "researcher@university.edu",
    "twitter": "@researcher",
    "linkedin": "researcher"
  },
  "projects": [
    {
      "id": 1,
      "title": "Neural Language Models for Scientific Text",
      "description": "Developing specialized language models trained on scientific literature to improve automated research assistance and knowledge discovery.",
      "url": "https://github.com/researcher/neural-language",
      "year": "2024"
    },
    {
      "id": 2,
      "title": "Semantic Search in Academic Databases",
      "description": "Building advanced search systems that understand semantic relationships in academic papers and research publications.",
      "url": "https://github.com/researcher/semantic-search",
      "year": "2023"
    },
    {
      "id": 3,
      "title": "Collaborative Research Platform",
      "description": "Web platform facilitating interdisciplinary research collaboration through intelligent matching and project management tools.",
      "url": "https://research-collab.org",
      "year": "2023"
    },
    {
      "id": 4,
      "title": "Open Source NLP Toolkit",
      "description": "Comprehensive toolkit for natural language processing tasks with focus on academic and research applications.",
      "url": "https://github.com/researcher/nlp-toolkit",
      "year": "2022"
    }
  ],
  "blogPosts": [
    {
      "id": 1,
      "title": "The Future of Academic Publishing in the Digital Age",
      "date": "2024-05-15",
      "excerpt": "Exploring how digital technologies are reshaping academic publishing, from preprint servers to AI-assisted peer review systems. This comprehensive analysis examines current trends and future possibilities.",
      "content": "Academic publishing is undergoing a fundamental transformation. The traditional model of journal publication, while still dominant, faces increasing pressure from digital alternatives and changing researcher expectations...\n\n## The Rise of Preprint Servers\n\nPreprint servers have revolutionized how researchers share their work. ArXiv, bioRxiv, and other platforms allow immediate dissemination of research findings without the lengthy peer review process.\n\n## AI-Assisted Peer Review\n\nArtificial intelligence is beginning to play a role in the peer review process, helping identify potential reviewers and flagging methodological issues.\n\n## Open Access Movement\n\nThe push for open access continues to gain momentum, with many institutions and funding agencies requiring open publication of research results.\n\n## Conclusion\n\nThe future of academic publishing will likely be more open, faster, and technology-enhanced while maintaining the quality standards that define scholarly communication.",
      "tags": ["publishing", "academic", "digital transformation"]
    },
    {
      "id": 2,
      "title": "Machine Learning in Computational Linguistics: Current Challenges",
      "date": "2024-04-22",
      "excerpt": "An in-depth look at the current challenges facing machine learning applications in computational linguistics, including data bias, interpretability, and cross-linguistic generalization.",
      "content": "Machine learning has transformed computational linguistics, but significant challenges remain. This post examines three critical areas where the field continues to struggle...\n\n## Data Bias and Representation\n\nMachine learning models often reflect biases present in their training data. In NLP, this means models may perform poorly on underrepresented languages or dialects.\n\n## Interpretability and Explainability\n\nAs models become more complex, understanding their decision-making processes becomes increasingly difficult. This is particularly problematic in academic and research contexts where transparency is crucial.\n\n## Cross-linguistic Generalization\n\nMost NLP models are trained primarily on English data, limiting their effectiveness across diverse linguistic contexts.\n\n## Future Directions\n\nAddressing these challenges requires interdisciplinary collaboration and careful consideration of both technical and social factors.",
      "tags": ["machine learning", "NLP", "research"]
    },
    {
      "id": 3,
      "title": "Building Effective Research Collaborations in the Remote Era",
      "date": "2024-03-10",
      "excerpt": "The shift to remote work has changed how researchers collaborate. This post discusses strategies for maintaining productive partnerships across distances and time zones.",
      "content": "The pandemic fundamentally changed how academic research is conducted. While many labs have returned to in-person work, remote collaboration has become a permanent feature of the research landscape...\n\n## Communication Tools and Strategies\n\nEffective remote collaboration requires more than just video calls. Researchers need to establish clear communication protocols and choose appropriate tools for different types of interaction.\n\n## Managing Time Zones\n\nInternational collaborations often span multiple time zones. Successful teams develop strategies for asynchronous work and find optimal meeting times.\n\n## Maintaining Research Quality\n\nRemote collaboration doesn't have to compromise research quality. With proper planning and tools, distributed teams can be just as effective as co-located ones.\n\n## Technology Infrastructure\n\nReliable internet, cloud storage, and collaborative platforms are essential for successful remote research partnerships.",
      "tags": ["collaboration", "remote work", "research management"]
    },
    {
      "id": 4,
      "title": "The Importance of Reproducible Research Practices",
      "date": "2024-02-18",
      "excerpt": "Reproducibility is fundamental to scientific progress. This post outlines practical steps researchers can take to make their work more reproducible and why it matters.",
      "content": "Reproducible research is not just a nice-to-have—it's essential for scientific progress. Yet many studies cannot be reproduced, creating a crisis of confidence in scientific findings...\n\n## What is Reproducible Research?\n\nReproducible research means that other scientists can obtain the same results using the same data and methods. This requires careful documentation and data management.\n\n## Tools and Practices\n\nModern tools like Git, Docker, and computational notebooks make reproducible research more accessible than ever before.\n\n## Benefits Beyond Reproduction\n\nReproducible practices benefit the original researchers too, making it easier to revisit and build upon previous work.\n\n## Getting Started\n\nImplementing reproducible practices doesn't have to be overwhelming. Start with small steps like better file organization and documentation.",
      "tags": ["reproducibility", "research methods", "best practices"]
    },
    {
      "id": 5,
      "title": "Interdisciplinary Research: Opportunities and Challenges",
      "date": "2024-01-25",
      "excerpt": "Interdisciplinary research offers unique opportunities for innovation but also presents distinct challenges. This post explores both sides of cross-disciplinary collaboration.",
      "content": "Some of the most exciting advances in science happen at the intersection of disciplines. However, interdisciplinary research also presents unique challenges that researchers must navigate...\n\n## The Promise of Interdisciplinary Work\n\nComplex problems often require diverse perspectives and methodologies. Climate change, artificial intelligence, and public health are just a few areas where interdisciplinary approaches are essential.\n\n## Communication Across Disciplines\n\nDifferent fields have their own jargon, methods, and assumptions. Successful interdisciplinary collaboration requires patient translation and mutual learning.\n\n## Institutional Support\n\nUniversities and funding agencies are increasingly recognizing the value of interdisciplinary research, but traditional departmental structures can still pose barriers.\n\n## Career Considerations\n\nInterdisciplinary researchers may face challenges in traditional academic career paths, but they also have unique opportunities in emerging fields.",
      "tags": ["interdisciplinary", "collaboration", "academic career"]
    }
  ]
};

// Theme management
class ThemeManager {
  constructor() {
    this.currentTheme = this.getStoredTheme() || 'light';
    this.themeToggle = document.getElementById('themeToggle');
    this.themeIcon = this.themeToggle.querySelector('.theme-toggle__icon');
    
    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.themeToggle.addEventListener('click', () => this.toggleTheme());
  }

  getStoredTheme() {
    try {
      return window.localStorage?.getItem('theme');
    } catch {
      return null;
    }
  }

  storeTheme(theme) {
    try {
      window.localStorage?.setItem('theme', theme);
    } catch {
      // Silent fail for environments without localStorage
    }
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-color-scheme', theme);
    this.themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
    this.currentTheme = theme;
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(newTheme);
    this.storeTheme(newTheme);
  }
}

// Portfolio management
class PortfolioManager {
  constructor(projects) {
    this.projects = projects;
    this.container = document.getElementById('projectGrid');
    this.render();
  }

  render() {
    this.container.innerHTML = this.projects
      .map(project => this.createProjectCard(project))
      .join('');
  }

  createProjectCard(project) {
    return `
      <a href="${project.url}" target="_blank" class="project-card">
        <div class="project-card__header">
          <h3 class="project-card__title">${project.title}</h3>
          <span class="project-card__year">${project.year}</span>
        </div>
        <p class="project-card__description">${project.description}</p>
      </a>
    `;
  }
}

// Blog management
class BlogManager {
  constructor(posts) {
    this.posts = posts;
    this.container = document.getElementById('blogPosts');
    this.modal = document.getElementById('postModal');
    this.modalContent = document.getElementById('postContent');
    this.modalClose = document.getElementById('modalClose');
    this.modalOverlay = document.getElementById('modalOverlay');
    
    this.init();
  }

  init() {
    this.render();
    this.setupModalEvents();
  }

  render() {
    this.container.innerHTML = this.posts
      .map(post => this.createPostCard(post))
      .join('');
    
    // Add click listeners to post cards
    this.container.querySelectorAll('.blog-post').forEach((card, index) => {
      card.addEventListener('click', () => this.openPost(this.posts[index]));
    });
  }

  createPostCard(post) {
    const formattedDate = this.formatDate(post.date);
    const tags = post.tags.map(tag => 
      `<span class="blog-post__tag">${tag}</span>`
    ).join('');

    return `
      <article class="blog-post" data-post-id="${post.id}">
        <header class="blog-post__header">
          <h3 class="blog-post__title">${post.title}</h3>
          <div class="blog-post__meta">
            <time class="blog-post__date">${formattedDate}</time>
            <div class="blog-post__tags">${tags}</div>
          </div>
        </header>
        <p class="blog-post__excerpt">${post.excerpt}</p>
      </article>
    `;
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  openPost(post) {
    const formattedDate = this.formatDate(post.date);
    const tags = post.tags.map(tag => 
      `<span class="blog-post__tag">${tag}</span>`
    ).join('');

    // Convert markdown-like content to HTML
    const content = this.parseContent(post.content);

    this.modalContent.innerHTML = `
      <header>
        <h1>${post.title}</h1>
        <div class="post-meta">
          <time>${formattedDate}</time>
          <div class="blog-post__tags" style="margin-top: 8px;">${tags}</div>
        </div>
      </header>
      <div class="post-body">
        ${content}
      </div>
    `;

    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  parseContent(content) {
    return content
      .split('\n\n')
      .map(paragraph => {
        if (paragraph.startsWith('## ')) {
          return `<h2>${paragraph.substring(3)}</h2>`;
        } else if (paragraph.startsWith('### ')) {
          return `<h3>${paragraph.substring(4)}</h3>`;
        } else if (paragraph.trim() === '') {
          return '';
        } else {
          return `<p>${paragraph}</p>`;
        }
      })
      .filter(p => p !== '')
      .join('');
  }

  closePost() {
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  setupModalEvents() {
    this.modalClose.addEventListener('click', () => this.closePost());
    this.modalOverlay.addEventListener('click', () => this.closePost());
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('active')) {
        this.closePost();
      }
    });
  }
}

// Navigation management
class NavigationManager {
  constructor() {
    this.navLinks = document.querySelectorAll('.nav__link');
    this.init();
  }

  init() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        this.scrollToSection(targetId);
      });
    });

    // Handle header title click
    const headerLink = document.querySelector('.header__link');
    headerLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = section.offsetTop - headerHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }
}

// Application initialization
class App {
  constructor() {
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    // Initialize theme management
    this.themeManager = new ThemeManager();
    
    // Initialize portfolio
    this.portfolioManager = new PortfolioManager(appData.projects);
    
    // Initialize blog
    this.blogManager = new BlogManager(appData.blogPosts);
    
    // Initialize navigation
    this.navigationManager = new NavigationManager();

    console.log('Academic blog initialized successfully!');
  }
}

// Start the application
new App();