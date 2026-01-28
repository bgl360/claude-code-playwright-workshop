# Workshop 3: What is a Fixture?

## What is a Playwright Fixture?

Think of a **fixture** as a **pre-configured starting point for your tests**. Just like a carpenter uses a fixture to hold wood in place before cutting, a Playwright fixture sets up your test environment before running tests.

::: tip Simple Analogy
Imagine you're testing a banking app. **Without fixtures**, you'd need to manually log in before EVERY single test. **With fixtures**, you log in once automatically, and all your tests start from the "already logged in" state. It's like having a personal assistant who sets everything up for you!
:::

**In plain English:** A fixture is reusable setup code that runs before your tests, so you don't have to repeat the same steps over and over again.

---

## Why Do Fixtures Matter?

### **The Problem Without Fixtures**

Let's say you're testing an e-commerce site and need to test:
1. Adding items to cart
2. Viewing order history
3. Updating profile information
4. Processing checkout

**Without fixtures**, each test would look like this:

```typescript
test('add item to cart', async ({ page }) => {
  // Login steps (repeated in every test)
  await page.goto('https://shop.example.com/login');
  await page.fill('#email', 'user@example.com');
  await page.fill('#password', 'SecurePass123');
  await page.click('button[type="submit"]');
  
  // Actual test for adding to cart
  await page.click('.product-card');
  await page.click('button.add-to-cart');
  // ...
});

test('view order history', async ({ page }) => {
  // Login steps (repeated AGAIN!)
  await page.goto('https://shop.example.com/login');
  await page.fill('#email', 'user@example.com');
  await page.fill('#password', 'SecurePass123');
  await page.click('button[type="submit"]');
  
  // Actual test for order history
  await page.click('a[href="/orders"]');
  // ...
});
```

**See the problem?** You're writing the same login code in every test. That's inefficient, error-prone, and a maintenance nightmare!

### **The Solution: Use a Fixture!**

With a login fixture, your tests become clean and focused:

```typescript
test('add item to cart', async ({ loggedInPage }) => {
  // You're already logged in! Start testing immediately
  await loggedInPage.click('.product-card');
  await loggedInPage.click('button.add-to-cart');
  // ...
});

test('view order history', async ({ loggedInPage }) => {
  // Already logged in here too!
  await loggedInPage.click('a[href="/orders"]');
  // ...
});
```

**The difference?** Your tests are **shorter**, **cleaner**, and **easier to maintain**.

---

## Key Benefits of Fixtures

| Benefit | What It Means For You |
|---------|----------------------|
| **Reduce Repetition** | Write setup logic once, use it in hundreds of tests |
| **Faster Test Writing** | Focus on testing features, not setup steps |
| **Easier Maintenance** | Update login process in one place, not across 50 tests |
| **Consistent Testing** | Every test starts from the exact same baseline state |
| **Better Reliability** | Centralized setup means fewer mistakes and flaky tests |


---

## Next Steps

In this workshop, you'll learn to:

1. **Create a login fixture** for a real application
2. **Use Claude to generate fixture code** from plain English descriptions
3. **Apply fixtures to multiple tests** to eliminate repetition
4. **Debug and refine fixtures** when requirements change

::: warning Remember
Fixtures are like templates - create them once, use them everywhere. They're one of the most powerful features in Playwright for writing maintainable, scalable tests!
:::
