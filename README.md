# Claude Code in Playwright - Workshop Site

This repository contains the documentation site for the **Claude Code in Playwright Workshop** - a hands-on training program teaching participants how to leverage AI to automate web testing using Claude Code and Playwright.

## 🌐 Live Workshop Site

Visit the workshop at: **[https://bgl360.github.io/claude-code-playwright-workshop/](https://bgl360.github.io/claude-code-playwright-workshop/)**

## 📚 What's This Workshop About?

This workshop teaches you how to use **Claude Code** (an AI coding assistant) to create automated web tests with **Playwright**. The training is designed for all skill levels - from QA engineers to product managers - no deep programming knowledge required.

### Workshop Modules

1. **Claude and Playwright** - Introduction and project setup
2. **What are MCP Tools?** - Browser interaction with Model Context Protocol
3. **What is a Fixture?** - Creating reusable test components
4. **The Agent Pattern** - Planner, generator, and healer agents
5. **Playwright Trace Viewer** - Debugging with time-travel debugging

Each module includes:
- Concept explanations with video tutorials
- Hands-on exercises
- Starter code and solutions

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/bgl360/claude-code-playwright-workshop.git

# Navigate to the project
cd claude-code-playwright-workshop

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run docs:dev
```

The site will be available at `http://localhost:5173/claude-code-playwright-workshop/`

### Build

```bash
# Build for production
npm run docs:build

# Preview the production build
npm run docs:preview
```

## 📁 Project Structure

```
claude-code-playwright-workshop/
├── docs/                           # Workshop content
│   ├── .vitepress/                 # VitePress configuration
│   │   ├── config.mts              # Site config (nav, sidebar, etc.)
│   │   └── theme/                  # Custom theme files
│   ├── public/
│   │   └── exercises/              # Exercise ZIP files
│   ├── index.md                    # Home page
│   ├── 1-create-playwright-project.md
│   ├── 1.1-exercise-create-playwright-project.md
│   ├── 2-explore-sd360-login.md
│   ├── 2.1-exercise-explore-sd360-login.md
│   ├── 3-create-login-fixture.md
│   ├── 3.1-exercise-generate-login-fixture.md
│   ├── 4-planner-generator-healer.md
│   ├── 4.1-exercise-planner-generator-healer.md
│   ├── 5-analyze-source-code.md
│   ├── 5.1-exercise-analyze-source-code.md
│   ├── 6-questions-and-answers.md
│   ├── 7-quiz-competition.md
│   ├── 8-thank-you.md
│   └── [reference pages]
├── package.json
└── README.md
```

## 🛠️ Technology Stack

- **[VitePress](https://vitepress.dev/)** - Static site generator powered by Vite and Vue
- **Node.js** - JavaScript runtime
- **GitHub Pages** - Hosting platform

## 🎯 Target Audience

- QA Engineers looking to accelerate test automation
- Developers wanting to add automated testing to their workflow
- Product Managers who need to validate features
- Business Analysts documenting requirements
- Anyone interested in AI-assisted software development

## 📝 Content Format

Each workshop follows a consistent structure:

- **Main Page** (e.g., `1-create-playwright-project.md`) - Introduces concepts with explanations and videos
- **Exercise Page** (e.g., `1.1-exercise-create-playwright-project.md`) - Hands-on practice with guided instructions
- **Exercise Files** - Starter code provided as ZIP files in the `docs/public/exercises/` directory

## 🤝 Contributing

Contributions to improve the workshop content are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Test locally with `npm run docs:dev`
5. Commit your changes (`git commit -am 'Add improvement'`)
6. Push to the branch (`git push origin feature/improvement`)
7. Open a Pull Request

## 📖 Related Resources

- **Claude Code**: [https://www.claude.com/product/claude-code](https://www.claude.com/product/claude-code)
- **Playwright**: [https://playwright.dev/](https://playwright.dev/)
- **Workshop Repository**: [https://github.com/bgl360/claude-code-playwright-workshop](https://github.com/bgl360/claude-code-playwright-workshop)

## 👨‍💻 Presenter

**David Feng** - Workshop instructor and content creator

## 📄 License

This project is part of the Claude Code in Playwright workshop series.

---

Made with ❤️ using [VitePress](https://vitepress.dev/)
