# Workshop 2: What are MCP Tools?

## What is MCP (Model Context Protocol)?

Think of **MCP** as **giving Claude superpowers** to interact with external tools and services.

::: tip Simple Analogy
Just like your smartphone connects to apps (camera, GPS, calendar) to do more than just make calls, **MCP allows Claude to connect to specialized tools** like web browsers, databases, or APIs to accomplish tasks beyond writing text.
:::

**In plain English:** MCP is the "plug-and-play" system that lets Claude Code control real applications and services on your behalf.

---

## What Can Claude Do with Playwright MCP?

Once you add the Playwright MCP tool, **Claude becomes your automated QA tester and browser assistant**:

### **For Everyone (BA, QA, PM):**

| Capability | What It Means For You |
|------------|----------------------|
| **Control Browsers** | Claude can click buttons, fill forms, and navigate pages just like a human user |
| **Take Screenshots** | Capture page states automatically for documentation or bug reports |
| **Explore Applications** | Let Claude discover how your app works by clicking through workflows |
| **Document User Flows** | Generate step-by-step guides by having Claude navigate and record actions |
| **Identify Issues** | Claude can spot broken links, missing elements, or unexpected behaviors |

### **For Developers:**

| Capability | Technical Benefit |
|------------|------------------|
| **Programmatic Control** | Execute browser actions via code without manual intervention |
| **Generate Test Scripts** | Auto-create Playwright test files from natural language descriptions |
| **Debug Applications** | Inspect DOM, analyze network requests, and troubleshoot issues |
| **End-to-End Automation** | Build complete testing workflows through conversational commands |

---

## Real-World Example

**Before MCP:**
> "Can you help me write a test for the login page?"
>
> Claude: "Sure, I can write code, but I can't actually see your login page or test if it works."

**After MCP with Playwright:**
> "Can you help me write a test for the login page?"
>
> Claude: "I'll navigate to your login page, explore the form fields, take screenshots, and generate a working test based on what I see. Give me the URL!"

**The difference?** Claude goes from being a coding assistant to being an **active testing partner** that can see, interact, and verify real application behavior.
