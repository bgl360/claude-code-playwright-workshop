import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Claude Code in Playwright",
  base: '/claude-code-playwright-workshop/',
  head: [
    [
      'style',
      {},
      `
        :root {
          --vp-layout-max-width: 100% !important;
        }
        .VPDoc.has-sidebar .content-container {
          max-width: 100% !important;
        }
        .vp-doc {
          max-width: 100% !important;
        }
        .VPContent {
          max-width: 100% !important;
        }
      `
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Workshop', link: '/1-create-playwright-project' }
    ],

    sidebar: [
      {
        text: 'Workshop',
        items: [
          {
            text: '1: Claude and Playwright',
            link: '/1-create-playwright-project',
            items: [
              { text: 'Create a Playwright Project', link: '/1.1-exercise-create-playwright-project' }
            ]
          },
          // {
          //    text: '2: What are MCP Tools?',
          //    link: '/2-explore-sd360-login',
          //    items: [
          //      { text: 'Explore the Login UI', link: '/2.1-exercise-explore-sd360-login' }
          //    ]
          // },
          // {
          //   text: '3: What is a Fixture?',
          //   link: '/3-create-login-fixture',
          //   items: [
          //     { text: 'Generate a Login Fixture', link: '/3.1-exercise-generate-login-fixture' }
          //   ]
          // },
          // {
          //   text: '4: The Agent Pattern',
          //   link: '/4-planner-generator-healer',
          //   items: [
          //     { text: 'Test Agents in Actions', link: '/4.1-exercise-planner-generator-healer' }
          //   ]
          // },
          // {
          //   text: '5: Playwright Trace Viewer',
          //   link: '/5-analyze-source-code',
          //   items: [
          //     { text: 'Testing via Code Analysis', link: '/5.1-exercise-analyze-source-code' }
          //   ]
          // },
          // {
          //   text: 'Questions & Answers',
          //   link: '/6-questions-and-answers'
          // },
          // {
          //   text: 'Quiz Competition',
          //   link: '/7-quiz-competition'
          // },
          // {
          //   text: 'Thank You',
          //   link: '/8-thank-you'
          // }
        ]
      },
      {
        text: 'Help Links',
        items: [
          { text: 'Workshop Users', link: '/workshop-users' },
          { text: 'Claude Code Commands', link: '/claude-code-commands' },
          { text: 'Claude Code Context References', link: '/claude-code-context-references' },
          { text: 'Claude Code', link: 'https://www.claude.com/product/claude-code' },
          { text: 'Playwright', link: 'https://playwright.dev/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bgl360/claude-code-playwright-workshop' }
    ]
  }
})
