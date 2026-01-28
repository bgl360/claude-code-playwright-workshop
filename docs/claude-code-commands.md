# Claude Code Commands Reference

## What are Slash Commands?

**Slash commands** are special built-in commands in Claude Code that start with a forward slash `/`. They provide quick access to specific features and information without needing to write full natural language prompts.

**How to use them:** Simply type `/` followed by the command name in the Claude Code chat interface.

---

## Essential Commands

### `/help`
**Purpose:** Display a list of all available commands and their descriptions.

**When to use:**
- You're new to Claude Code and want to explore available commands
- You've forgotten the exact name of a command
- You want to discover new features

**Example:**
```
/help
```

---

### `/mcp`
**Purpose:** Show all connected Model Context Protocol (MCP) tools and their status.

**When to use:**
- Verifying that MCP tools (like Playwright) are properly installed
- Troubleshooting when browser automation isn't working
- Checking which tools Claude Code has access to

**Example:**
```
/mcp
```

**What you'll see:**
- List of connected MCP tools (e.g., Playwright, Sequential Thinking)
- Connection status for each tool
- Tool capabilities and versions

---

### `/clear`
**Purpose:** Clear the current conversation history and start fresh.

**When to use:**
- Switching to a completely different task or project
- The conversation has become too long and you want to reset context
- You want to eliminate previous context that might be influencing responses

**Example:**
```
/clear
```

**Note:** This doesn't delete files or undo changes - it only clears the chat history.

---

### `/files`
**Purpose:** List all files currently in Claude Code's context.

**When to use:**
- You want to see which files Claude is aware of
- Checking if a specific file is in context before making changes
- Understanding what Claude Code knows about your project

**Example:**
```
/files
```

---

### `/web`
**Purpose:** Search the web for current information (when web search is enabled).

**When to use:**
- Looking up current API documentation
- Checking latest library versions or changes
- Researching error messages or technical concepts

**Example:**
```
/web latest Playwright best practices
```

---

## Workflow Commands

### `/edit`
**Purpose:** Enter a focused editing mode for making changes to specific files.

**When to use:**
- You need to make targeted changes to existing code
- Working with large files where you want precise edits

**Example:**
```
/edit path/to/file.ts
```

---

### `/test`
**Purpose:** Run tests or generate test code for your project.

**When to use:**
- Running specific test files
- Generating new test cases
- Validating recent changes

**Example:**
```
/test
```

---

## Tips for Using Slash Commands

**Combine with Natural Language:** You can use slash commands alongside regular prompts:
```
/mcp

Now that I've verified MCP tools, help me create a test that uses Playwright to navigate to https://example.com
```

**Use for Quick Checks:** Slash commands are perfect for quick status checks during your workflow.

**Bookmark This Page:** Keep this reference handy as you work through the workshop exercises.

---

## Command Quick Reference

| Command | Purpose | Common Use Case |
|---------|---------|-----------------|
| `/help` | Show all commands | Discovering available features |
| `/mcp` | List MCP tool status | Verifying Playwright connection |
| `/clear` | Clear conversation | Starting a new task |
| `/files` | Show files in context | Understanding Claude's awareness |
| `/web` | Search the web | Looking up documentation |
| `/edit` | Focused editing mode | Making targeted code changes |
| `/test` | Run/generate tests | Validating functionality |

---

## Next Steps

Now that you understand slash commands, you can use them efficiently throughout the workshop:

- Use `/mcp` to verify your Playwright MCP connection
- Use `/help` when you want to discover more commands
- Use `/clear` when switching between different workshop exercises
- Use `/files` to check what Claude Code knows about your project

::: tip Pro Tip
Most slash commands can be typed and executed instantly - you don't need to write full sentences when using them. This makes them perfect for quick checks and status updates during your testing workflow!
:::
