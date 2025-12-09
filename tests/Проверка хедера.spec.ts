import { test, expect } from '@playwright/test';

test('Проверка отображение элементов навигации хедер', async ({ page }) => {
  await page.goto('https://dev.astondevs.ru/');
  // Проверка отображение логотипа
  await expect.soft(page.getByRole('link', { name: 'Логотип' })).toBeVisible();  

  // Проверка отображение 'Доменная экспертиза'
  await expect.soft(page.locator('#header').getByText('Доменная экспертиза')).toBeVisible();
  await page.locator('#header').getByText('Доменная экспертиза').click();
  await expect.soft(page.getByRole('link').filter({ hasText: 'Финтех' })).toBeVisible();
  await expect.soft(page.getByRole('link').filter({ hasText: 'Ритейл' })).toBeVisible();
  await expect.soft(page.getByRole('link').filter({ hasText: 'Нефтегаз' })).toBeVisible();

  // Проверка отображение 'Услуги для бизнеса'
  await expect.soft(page.locator('#header').getByText('Услуги для бизнеса')).toBeVisible();
  await page.locator('#header').getByText('Услуги для бизнеса').click();
  await expect.soft(page.getByRole('link').filter({ hasText: 'Проектная разработка' })).toBeVisible();
  await expect.soft(page.getByRole('link').filter({ hasText: 'Расширение команды' })).toBeVisible();
  await expect.soft(page.getByRole('link').filter({ hasText: 'Выделенная команда' })).toBeVisible();
  await expect.soft(page.getByRole('link').filter({ hasText: 'Консалтинг' })).toBeVisible();
  await expect.soft(page.getByRole('link').filter({ hasText: '1С-разработка' })).toBeVisible();
  await expect.soft(page.getByRole('link').filter({ hasText: 'ПоддержкаОбслуживание и поддержка клиентов, инфраструктур и приложений' })).toBeVisible();
  await expect.soft(page.getByRole('link').filter({ hasText: 'IT Help Desk' })).toBeVisible();
  await expect.soft(page.getByRole('link').filter({ hasText: 'Веб-разработка' })).toBeVisible();

  // Проверка отображение 'Проекты'
  await expect.soft(page.getByRole('link', { name: 'Проекты', exact: true })).toBeVisible();

  // Проверка отображение 'Карьера'
  await expect.soft(page.locator('#header').getByText('Карьера')).toBeVisible();
  await page.locator('#header').getByText('Карьера').click();
  await expect.soft(page.getByRole('link').filter({ hasText: 'Работа в ASTON' })).toBeVisible();
  await expect.soft(page.getByRole('link').filter({ hasText: 'Вакансии' })).toBeVisible();
  await expect.soft(page.getByRole('link').filter({ hasText: 'Стажировка' })).toBeVisible();
  await expect.soft(page.getByRole('link').filter({ hasText: 'Курсы' })).toBeVisible();
  await expect.soft(page.getByRole('link').filter({ hasText: 'Обучение' })).toBeVisible();

  // Проверка отображение 'ASTON медиа'
  await expect.soft(page.locator('#header').getByText('ASTON медиа')).toBeVisible();
  await page.locator('#header').getByText('ASTON медиа').click();
  await expect.soft(page.getByRole('link').filter({ hasText: 'Культурный код' })).toBeVisible();
  await expect.soft(page.getByRole('link').filter({ hasText: 'ASTON' })).toBeVisible();

  // Проверка отображение 'О нас'
  await expect.soft(page.getByRole('link', { name: 'О нас' })).toBeVisible();
});


test('Проверка названия элементов навигации хедер', async ({ page }) => {
  await page.goto('https://dev.astondevs.ru/');

  // Проверка названия карточек 'Доменная экспертиза'
  await expect.soft(page.getByRole('navigation')).toContainText('Доменная экспертиза');
  await page.locator('#header').getByText('Доменная экспертиза').click();
  await expect.soft(page.locator('body')).toContainText('Финтех');
  await expect.soft(page.locator('body')).toContainText('Ритейл');
  await expect.soft(page.locator('body')).toContainText('Нефтегаз');

  // Проверка названия карточек 'Услуги для бизнеса'
  await page.locator('#header').getByText('Услуги для бизнеса').click();
  await expect.soft(page.locator('body')).toContainText('Проектная разработка');
  await expect.soft(page.locator('body')).toContainText('Расширение команды');
  await expect.soft(page.locator('body')).toContainText('Выделенная команда');
  await expect.soft(page.locator('body')).toContainText('Консалтинг');
  await expect.soft(page.locator('body')).toContainText('1С-разработка');
  await expect.soft(page.locator('body')).toContainText('Поддержка');
  await expect.soft(page.locator('body')).toContainText('IT Help Desk');
  await expect.soft(page.locator('body')).toContainText('Веб-разработка');

  // Проверка названия карточек 'Проекты'
  await expect.soft(page.getByRole('navigation')).toContainText('Проекты');

  // Проверка названия карточек 'Карьера'
  await page.locator('#header').getByText('Карьера').click();
  await expect.soft(page.getByRole('navigation')).toContainText('Карьера');
  await expect.soft(page.locator('body')).toContainText('Работа в ASTON');
  await expect.soft(page.locator('body')).toContainText('Вакансии');
  await expect.soft(page.locator('body')).toContainText('Стажировка');
  await expect.soft(page.locator('body')).toContainText('Курсы');
  await expect.soft(page.locator('body')).toContainText('Обучение в ASTON');

  // Проверка названия карточек 'ASTON медиа'
  await page.locator('#header').getByText('ASTON медиа').click();
  await expect.soft(page.getByRole('navigation')).toContainText('ASTON медиа');
  await expect.soft(page.locator('body')).toContainText('Культурный код');
  await expect.soft(page.locator('body')).toContainText('ASTON Радио');

  // Проверка названия карточек 'О нас'
  await expect.soft(page.getByRole('navigation')).toContainText('О нас');
});


test('Проверка атрибутов href элементов навигации хедер', async ({ page }) => {
  await page.goto('https://dev.astondevs.ru/');
  // Логотип
  await expect.soft(page.getByRole('link', { name: 'Логотип' })).toHaveAttribute('href','/'); 
  
  // Доменная экспертиза
  await page.locator('#header').getByText('Доменная экспертиза').click();
  await expect.soft(page.getByRole('link').filter({ hasText: 'Финтех' })).toHaveAttribute('href','/industries/financial-services');
  await expect.soft(page.getByRole('link').filter({ hasText: 'Ритейл' })).toHaveAttribute('href','/industries/retail');
  await expect.soft(page.getByRole('link').filter({ hasText: 'Нефтегаз' })).toHaveAttribute('href','/industries/oil-and-gas')
 
  // Услуги для бизнеса
  await page.locator('#header').getByText('Услуги для бизнеса').click();
  await expect.soft(page.getByRole('link').filter({ hasText: 'Проектная разработка' })).toHaveAttribute('href','/services/managed-delivery');
  await expect.soft(page.getByRole('link').filter({ hasText: 'Расширение команды' })).toHaveAttribute('href','/services/software-team-staff-augmentation');
  await expect.soft(page.getByRole('link').filter({ hasText: 'Выделенная команда' })).toHaveAttribute('href','/services/dedicated-team');
  await expect.soft(page.getByRole('link').filter({ hasText: 'Консалтинг' })).toHaveAttribute('href','/services/it-consulting');
  await expect.soft(page.getByRole('link').filter({ hasText: '1С-разработка' })).toHaveAttribute('href','/1C');
  await expect.soft(page.getByRole('link').filter({ hasText: 'ПоддержкаОбслуживание и поддержка клиентов, инфраструктур и приложений' })).toHaveAttribute('href','/services/maintenance-support');
  await expect.soft(page.getByRole('link').filter({ hasText: 'IT Help Desk' })).toHaveAttribute('href','/services/it-support');
  await expect.soft(page.getByRole('link').filter({ hasText: 'Веб-разработка' })).toHaveAttribute('href','/services/web-development');

  // Проекты
  await expect.soft(page.getByRole('link', { name: 'Проекты', exact: true })).toHaveAttribute('href','/our-projects');

  // Карьера
  await page.locator('#header').getByText('Карьера').click();
  await expect.soft(page.getByRole('link').filter({ hasText: 'Работа в ASTON' })).toHaveAttribute('href','https://career-dev.astondevs.ru/');
  await expect.soft(page.getByRole('link').filter({ hasText: 'Вакансии' })).toHaveAttribute('href','https://career-dev.astondevs.ru/vacancy/');
  await expect.soft(page.getByRole('link').filter({ hasText: 'Стажировка' })).toHaveAttribute('href','https://career-dev.astondevs.ru/trainee/');
  await expect.soft(page.getByRole('link').filter({ hasText: 'Курсы' })).toHaveAttribute('href','https://career-dev.astondevs.ru/courses/');
  await expect.soft(page.getByRole('link').filter({ hasText: 'Обучение' })).toHaveAttribute('href','https://career-dev.astondevs.ru/education/');

  // ASTON медиа
  await page.locator('#header').getByText('ASTON медиа').click();
  await expect.soft(page.getByRole('link').filter({ hasText: 'Культурный код' })).toHaveAttribute('href','/cultural-code');
  await expect.soft(page.getByRole('link').filter({ hasText: 'ASTON' })).toHaveAttribute('href','/radio');
  // О нас
  await expect.soft(page.getByRole('link', { name: 'О нас' })).toHaveAttribute('href','/about-us');

});


test('Проверка кнопки в хедере карьера', async ({ page }) => {
  await page.goto('https://dev.astondevs.ru/');
  await page.locator('#header').getByText('Карьера').click();
  await expect.soft(page.getByRole('link', { name: 'Перейти в Telegram' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'Перейти в Telegram' })).toHaveAttribute('href','https://t.me/astoonntrainee');
});


