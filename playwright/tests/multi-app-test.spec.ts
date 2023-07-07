import { test, expect } from '@playwright/test';

const url1 = 'http://app1:8000';
const url2 = 'http://app2:8000/docs';
// const url1 = 'http://localhost:8000';
// const url2 = 'http://localhost:8001/docs';

const name = 'tester';
const age = 55;
const email = 'tester@example.com';

test('test', async ({ page }) => {
  await page.goto(url2);
  await page.getByRole('button', { name: 'get ​/{name}​/{age}​/{email}' }).click();
  await page.getByRole('button', { name: 'Try it out' }).click();
  await page.getByPlaceholder('name').fill(name);
  await page.getByPlaceholder('age').fill(age.toString());
  await page.getByPlaceholder('email').fill(email);
  await page.getByRole('button', { name: 'Execute' }).click();

  await page.goto(url1);
  
  const data:{name:string, age:number, email:string} = JSON.parse(await page.innerText('body'));
  expect(data.name).toBe(name);
  expect(data.age).toBe(age);
  expect(data.email).toBe(email);
});

test('test-that-fails', async ({ page }) => {
  await page.goto(url2);
  await page.getByRole('button', { name: 'get ​/{name}​/{age}​/{email}' }).click();
  await page.getByRole('button', { name: 'Try it out' }).click();
  await page.getByPlaceholder('name').fill(name);
  await page.getByPlaceholder('age').fill(age.toString());
  await page.getByPlaceholder('email').fill(email);
  await page.getByRole('button', { name: 'Execute' }).click();
  expect(1).toBe(0);
});