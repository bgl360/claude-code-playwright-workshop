# Workshop 4: The Agent Pattern - Plan, Generate, Heal

## What are Test Agents?

**Test agents are specialized AI roles** that you assign to Claude Code to handle different phases of the testing process. Think of it like having a QA team where each member has a specific job - except all the roles are played by Claude!

::: tip Simple Analogy
Imagine building a house. You wouldn't ask one person to design the blueprint, pour the foundation, and fix leaks all at the same time. Instead:
- **Architect** plans the design
- **Builder** constructs based on the plan
- **Inspector** checks quality and fixes issues

**Test agents work the same way** - each agent focuses on one specific testing task, leading to better quality and faster results.
:::

**In plain English:** Instead of asking Claude to "do everything," you give it focused roles that match how professional QA teams actually work.

<div style="max-width: 600px; margin: 20px auto;">
  <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/_AifxZGxwuk" title="Playwright Test Agents" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>

---

## The Three Agent Roles

### **1. Planner Agent - The Explorer**

**What does it do?** Creates a comprehensive test plan by exploring your application and documenting what needs to be tested.

**Example prompt:**
```
You are Playwright Test Planner Agent.
Explore the Entity Edit screen.
Create a comprehensive test plan and save it as a markdown file.
DO NOT generate any test code.
```

---

### **2. Generator Agent - The Builder**

**What does it do?** Transforms the test plan into actual, executable Playwright test code.

**Example prompt:**
```
You are Playwright Test Generator Agent.
Create a single integration test that covers editing an entity.
Generate only one end-to-end test case.
```

---

### **3. Healer Agent - The Fixer**

**What does it do?** Runs tests, identifies failures, and automatically fixes issues.

**Example prompt:**
```
You are Playwright Test Healer Agent.
Run the generated test case and fix any errors.
```

---

## Best Practices

**1. One Agent at a Time**
Complete each phase fully before moving to the next. Don't rush from planning to healing.

**2. Be Explicit About Roles**
Always start your prompt with "You are [Agent Name] Agent" to set clear context.

**3. Plan Before Code**
Never skip the Planner phase. Good plans lead to better tests.

**4. Reference Previous Work**
Use `@test-plan.md` when running Generator to ensure alignment.

**5. Iterate the Healing**
Run the Healer multiple times if needed - some issues take multiple passes to resolve.

---

## Next Steps

In the next exercise, you'll practice using all three agents to:
1. **Plan** comprehensive tests for an entity editing feature
2. **Generate** working test code from that plan
3. **Heal** any issues to create stable, reliable tests

::: warning Remember
The agent pattern is about **focus and quality**. Each agent does one job extremely well, resulting in better tests than trying to do everything at once!
:::
