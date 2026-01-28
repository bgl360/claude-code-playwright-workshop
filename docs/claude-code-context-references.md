# Claude Code Context References

## What are Context References?

**Context references** are special symbols you use in your prompts to tell Claude Code exactly what files, folders, or information to pay attention to. Think of them as **pointing** Claude to specific parts of your project.

**Why use them?** When you reference specific files or folders, Claude Code can:
- Read and understand the exact content you're referring to
- Generate code that follows your existing patterns
- Make changes that are consistent with your project structure
- Avoid making assumptions about your requirements

---

## The "@" Symbol - File and Folder References

### What does "@" do?

The `@` symbol lets you **attach files or folders** to your prompt. When you use `@`, Claude Code reads the content and uses it as context for understanding your request.

### Basic Usage

**Reference a single file:**
```
@LOGIN_FLOW.md Create a test based on this login flow
```

**Reference multiple files:**
```
@auth.fixture.ts @login.spec.ts Update the fixture to match the test requirements
```

**Reference a folder:**
```
@tests/ Review all test files and identify duplicate code
```

**Reference specific code files:**
```
@src/components/LoginForm.tsx Create a test for this component
```

---

## Common Use Cases

### 1. Using Documentation Files

**Scenario:** You have a markdown file documenting a process, and you want Claude to follow it.

**Example:**
```
@API_DOCS.md Generate integration tests for all the endpoints described in this documentation
```

**What happens:**
- Claude reads the API_DOCS.md file
- Understands the endpoint specifications
- Generates tests that match the documented behavior

---

### 2. Analyzing Existing Code

**Scenario:** You want Claude to understand your existing code before making changes.

**Example:**
```
@src/utils/auth.ts This utility has a bug when handling expired tokens. Can you fix it?
```

**What happens:**
- Claude reads the auth.ts file
- Analyzes the code structure
- Identifies and fixes the token expiration logic

---

### 3. Maintaining Consistency

**Scenario:** You want new code to follow the same patterns as existing code.

**Example:**
```
@tests/user.spec.ts Create a similar test file for the product feature, following the same structure and naming conventions
```

**What happens:**
- Claude reads your existing test file
- Understands the patterns, structure, and style
- Creates a new test file that matches your conventions

---

### 4. Working with Multiple Files

**Scenario:** You need to update several related files at once.

**Example:**
```
@src/Login.tsx @tests/Login.spec.ts @fixtures/auth.fixture.ts 
Add a "Remember Me" checkbox to the login form and update the tests and fixture accordingly
```

**What happens:**
- Claude reads all three files
- Understands how they work together
- Makes coordinated changes across all files

---

### 5. Exploring Folders

**Scenario:** You want Claude to understand an entire section of your codebase.

**Example:**
```
@src/components/ Analyze all components and create a component testing strategy document
```

**What happens:**
- Claude scans all files in the components folder
- Understands the component architecture
- Creates a comprehensive testing strategy

---

## Best Practices

### **Be Specific**

**Less effective:**
```
Create a login test
```

**More effective:**
```
@LOGIN_FLOW.md @tests/fixtures/auth.fixture.ts 
Create a login test that follows the documented flow and uses the existing fixture
```

**Why?** The specific references give Claude exact context, reducing ambiguity and improving results.

---

### **Reference Related Files**

When making changes, reference all files that might be affected:

```
@src/api/users.ts @tests/api/users.spec.ts @types/User.ts
Add a new field 'phoneNumber' to the User type and update the API and tests
```

**Why?** This helps Claude understand dependencies and make consistent changes.

---

### **Use Documentation Files**

If you have design docs, flow diagrams, or requirement documents:

```
@docs/REQUIREMENTS.md @docs/USER_FLOW.md
Implement the user registration feature following these requirements and flow
```

**Why?** Documentation files provide Claude with business context and requirements.

---

### **Reference Configuration Files**

When setting up or modifying project configuration:

```
@playwright.config.ts @package.json
Add a new test script that runs only the smoke tests in headless mode
```

**Why?** Configuration files show Claude your project setup and available options.

---

## Combining "@" with Other Features

### With Slash Commands

You can use context references alongside slash commands:

```
/mcp

@tests/fixtures/auth.fixture.ts 
Now that MCP is verified, help me debug why this fixture isn't working
```

---

### With Natural Language

Context references work naturally in sentences:

```
Based on @LOGIN_FLOW.md, I need to update @tests/login.spec.ts to handle the new 2FA requirement
```

---

## Tips for Success

**Start Broad, Then Narrow:**
1. First, reference high-level documentation
2. Then reference specific implementation files
3. Finally, ask for precise changes

**Example progression:**
```
Step 1: @README.md Tell me about this project
Step 2: @src/ Show me the main components
Step 3: @src/Login.tsx Help me add validation to this form
```

---

**Reference Before Requesting:**

Always reference files before asking Claude to modify them:

```
@src/utils/validation.ts Add email format validation to this utility
```

Instead of:
```
Add email validation to validation.ts  ❌ (Claude might not have the file context)
```

---

**Use Tab Completion:**

In most IDEs, typing `@` will show you a list of files you can reference. Use arrow keys and Enter to select.

---

## Quick Reference Table

| Symbol | Purpose | Example |
|--------|---------|---------|
| `@filename.ext` | Reference a single file | `@auth.ts` |
| `@folder/` | Reference a folder | `@tests/` |
| `@path/to/file.ext` | Reference with path | `@src/utils/auth.ts` |
| Multiple `@` | Reference multiple items | `@file1.ts @file2.ts` |

---

## Common Patterns

### Pattern 1: Documentation-Driven Development
```
@REQUIREMENTS.md @DESIGN.md Implement the feature described in these documents
```

### Pattern 2: Test-Driven Development
```
@tests/feature.spec.ts Implement the code to make these tests pass
```

### Pattern 3: Refactoring
```
@src/old-feature.ts @docs/new-architecture.md 
Refactor this code to match the new architecture
```

### Pattern 4: Bug Fixing
```
@src/buggy-component.ts @tests/bug-reproduction.spec.ts 
Fix the bug demonstrated by this test
```

### Pattern 5: Code Review
```
@src/pull-request-changes.ts Review this code and suggest improvements
```

---

## Next Steps

Now that you understand context references:

1. **Practice** using `@` in your prompts throughout the workshop
2. **Experiment** with referencing different types of files
3. **Observe** how Claude's responses improve with better context
4. **Combine** context references with [slash commands](/claude-code-commands) for powerful workflows

::: tip Pro Tip
The more specific context you provide with `@`, the better Claude Code can understand and assist with your exact needs. When in doubt, reference the file!
:::
