import { test, expect } from '@playwright/test';

test('Проверка отображение иконок Соцсети в футере', async ({ page }) => {
  await page.goto('https://dev.astondevs.ru/');
  await page.getByRole('button', { name: 'Подтверждаю' }).click();
  await expect.soft(page.getByRole('link', { name: 'tg' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'inst' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'youtube' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'vk' })).toBeVisible();
});

test('Проверка атрибутов href иконок Соцсети в футере', async ({ page }) => {
  await page.goto('https://dev.astondevs.ru/');
  await page.getByRole('button', { name: 'Подтверждаю' }).click();
  await expect.soft(page.getByRole('link', { name: 'tg' })).toHaveAttribute('href','https://t.me/astonit');
  await expect.soft(page.getByRole('link', { name: 'inst' })).toHaveAttribute('href','https://www.instagram.com/aston.it/');
  await expect.soft(page.getByRole('link', { name: 'youtube' })).toHaveAttribute('href','https://www.youtube.com/@astonlive2023');
  await expect.soft(page.getByRole('link', { name: 'vk' })).toHaveAttribute('href','https://vk.com/aston.company');
});


test('Проверка отображение Адреса офисов в футере', async ({ page }) => {
  await page.goto('https://dev.astondevs.ru/');
  await page.getByRole('button', { name: 'Подтверждаю' }).click();
  await expect.soft(page.getByText('г. Москваул')).toBeVisible();
  await expect.soft(page.getByText('г. Санкт-Петербург').first()).toBeVisible();
  await expect.soft(page.getByText('г. Казань').first()).toBeVisible();
  await expect.soft(page.getByText('г. Ростов-на-Дону').first()).toBeVisible();
  await expect.soft(page.getByText('г. Нижний Новгород').first()).toBeVisible();
  await expect.soft(page.getByText('г. Самара').first()).toBeVisible();
  await expect.soft(page.getByText('г. Алматы').first()).toBeVisible();
  await expect.soft(page.getByText('г. Минск').first()).toBeVisible();
  await expect.soft(page.getByText('г. Витебск').first()).toBeVisible();
  await expect.soft(page.getByText('г. Полоцк').first()).toBeVisible();
  await expect.soft(page.getByText('г. Гомель').first()).toBeVisible();
  });


  test('Проверка название Адреса офисов в футере', async ({ page }) => {
  await page.goto('https://dev.astondevs.ru/');
  await page.getByRole('button', { name: 'Подтверждаю' }).click();
  await expect.soft(page.locator('#footer')).toContainText('г. Москваул. Вильгельма Пика, 11 БЦ «Ботаника», 13 эт., оф. 1310 Россия');
  await expect.soft(page.locator('#footer')).toContainText('г. Санкт-ПетербургВладимирский пр-т, 23 БЦ «ICON», 8 эт. Россия');
  await expect.soft(page.locator('#footer')).toContainText('г. Казаньул. Н. Ершова, 76/1, оф. 219 Россия');
  await expect.soft(page.locator('#footer')).toContainText('г. Ростов-на-Донуул. Текучева, 246, 3 эт. Россия');
  await expect.soft(page.locator('#footer')).toContainText('г. Нижний Новгородул. Новая, д. 28, коворкинг «VMESTE», 5 эт. Россия');
  await expect.soft(page.locator('#footer')).toContainText('г. СамараМосковское ш. 4к4, IT-парк Монте Роза Россия');
  await expect.soft(page.locator('#footer')).toContainText('г. Алматыпр. Гагарина, 124б, коворкинг Sail Казахстан');
  await expect.soft(page.locator('#footer')).toContainText('г. Минскпр-т Победителей, 7А, БЦ «Royal Plaza», 23 и 25 эт. Беларусь');
  await expect.soft(page.locator('#footer')).toContainText('г. ВитебскМосковский пр-т, 70к1 Беларусь');
  await expect.soft(page.locator('#footer')).toContainText('г. Полоцкул. Октябрьская, 25 Беларусь');
  await expect.soft(page.locator('#footer')).toContainText('г. Гомельул. Советская, 41Б Беларусь');
});


 test('Проверка видимости Реквизитов компании в футере', async ({ page }) => {
  await page.goto('https://dev.astondevs.ru/');
  await page.getByRole('button', { name: 'Подтверждаю' }).click();
  await expect.soft(page.getByRole('link', { name: 'Позвонить по номеру телефона' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'Написать письмо на почту' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'Перейти на страница с реквизитами' })).toBeVisible();
});


test('Проверка атрибутов Href Реквизитов компании в футере', async ({ page }) => {
  await page.goto('https://dev.astondevs.ru/');
  await page.getByRole('button', { name: 'Подтверждаю' }).click();
  await expect.soft(page.getByRole('link', { name: 'Позвонить по номеру телефона' })).toHaveAttribute('href','tel: +74951383939');
  await expect.soft(page.getByRole('link', { name: 'Написать письмо на почту' })).toHaveAttribute('href','mailto: info@astondevs.ru');
  await expect.soft(page.getByRole('link', { name: 'Перейти на страница с реквизитами' })).toHaveAttribute('href','/details');
});