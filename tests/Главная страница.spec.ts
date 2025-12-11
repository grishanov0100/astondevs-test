import { test, expect } from '@playwright/test';

test('Проверка отображения элемнтов в блоке Баннер', async ({ page }) => {
  await page.goto('http://dev.astondevs.ru/');
  await page.getByRole('button', { name: 'Подтверждаю' }).click();
  await expect.soft(page.getByRole('heading', { name: 'Уверенный путь к вершинам бизнеса' })).toBeVisible();
  await expect.soft(page.getByText('Эффективные IT')).toBeVisible();
  await expect.soft(page.getByRole('button', { name: 'Оставить заявку' }).first()).toBeVisible();

  await expect.soft(page.getByRole('heading', { name: 'Уверенный путь к вершинам бизнеса' })).toContainText('Уверенный путь к вершинам бизнеса');
  await expect.soft(page.getByText('Эффективные IT')).toContainText('Эффективные IT-решения для развития бизнеса');
  await expect.soft(page.getByRole('button', { name: 'Оставить заявку' }).first()).toContainText('Оставить заявку');
});


test('Проверка отображения блока Башня Татлин', async ({ page }) => {
  await page.goto('http://dev.astondevs.ru/');
  await page.getByRole('button', { name: 'Подтверждаю' }).click();

  // Проверка, что иконка отображается и текст при наведениие на неё
  await expect.soft(page.getByRole('img', { name: 'Иконка информации' })).toBeVisible();
  await expect.soft(page.getByRole('main').locator('div').filter({ hasText: 'Башня Татлина: символ, который говорит за нас' })).toBeVisible();
  // Проверка текста в информационной иконки
  await expect.soft(page.getByRole('main')).toContainText('Башня Татлина: символ, который говорит за нас');
  // Открываем модальное окно Башня татлина
  await page.locator('div').filter({ hasText: 'Башня ТатлинаМы верим, что технологии должны быть доступны каждому. Как Башня Татлина задумывалась как центр общественной жизни, так и мы стремимся создавать решения, которые улучшают жизнь людей, делают её более удобной и эффективной. Мы строим будущее, в котором технологии служат обществу и помогают решать глобальные проблемы.' }).click();
});


test('Проверка отображения блока Буллиты', async ({ page }) => {
await page.goto('http://dev.astondevs.ru/');
await page.getByRole('button', { name: 'Подтверждаю' }).click();
// Проверка видимости блока Буллиты
await expect.soft(page.locator('text=Увеличьте доходы вашего продукта с помощью эффективного ПО, созданного специально для вашего бизнеса!').first()).toBeVisible();
await expect.soft(page.locator('text=проектов').first()).toBeVisible();
await expect.soft(page.locator('text=сотрудников').first()).toBeVisible();;

// Проверка текста блока Буллиты
await expect.soft(page.locator('text=Увеличьте доходы вашего продукта с помощью эффективного ПО, созданного специально для вашего бизнеса!').first()).toHaveText('Увеличьте доходы вашего продукта с помощью эффективного ПО, созданного специально для вашего бизнеса!');
await expect.soft(page.locator('text=проектов').first()).toHaveText('проектов');
await expect.soft(page.locator('text=сотрудников').first()).toHaveText('сотрудников');
});

test('Проверка блока Разработки и отраслевые решения', async ({ page }) => {
await page.goto('http://dev.astondevs.ru/');
await page.getByRole('button', { name: 'Подтверждаю' }).click();
await page.getByRole('heading', { name: 'Разработки и отраслевые решения' }).nth(1).scrollIntoViewIfNeeded();

// Финтех
await expect.soft(page.getByRole('heading', { name: 'Разработки и отраслевые решения' }).nth(1)).toBeVisible();
await expect.soft(page.getByRole('main')).toContainText('Разработки и отраслевые решения');
await page.waitForSelector('text=Финтех', { state: 'visible', timeout: 5000 }); 
await expect.soft(page.getByRole('main')).toContainText('Cистема управления реализации кредитных продуктов');
await page.getByRole('heading', { name: 'C' }).click();
await expect.soft(page.locator('#chakra-modal-_R_lkpqinqaiulb_').getByRole('img', { name: 'Фоновое изображение' })).toBeVisible();
await expect.soft(page.locator('#chakra-modal-_R_lkpqinqaiulb_')).toContainText('ФинтехCистема управления реализации кредитных продуктов');
await expect.soft(page.locator('#chakra-modal-_R_lkpqinqaiulb_')).toContainText('Описание проектаКомпания Aston разработала систему «Дистанционный кредит» для онлайн-продаж кредитных продуктов банка через лендинги. Особенность проекта — в использовании оркестратора Camunda Platform для большей гибкости бизнес-процессов. В планах — масштабировать решение на мобильные приложения банка.ТехнологииJavaQASABAКоманда7 специалистовДлительность6 месяцев');
await page.getByRole('img', { name: 'arrow_icon' }).nth(4).click();

// Недвижимость
await expect(page.getByRole('heading', { name: 'Мобильное приложение по поиску недвижимости' })).toBeVisible();
await expect(page.getByRole('main')).toContainText('Мобильное приложениепо поиску недвижимости');
await page.waitForSelector('text=Недвижимость', { state: 'visible', timeout: 5000 }); 
await page.getByRole('heading', { name: 'Мобильное приложение по поиску недвижимости' }).click();
await expect(page.locator('#chakra-modal-_R_lkpqinqaiulb_').getByRole('img', { name: 'Фоновое изображение' })).toBeVisible();
await expect(page.locator('#chakra-modal-_R_lkpqinqaiulb_')).toContainText('НедвижимостьМобильное приложениепо поиску недвижимости');
await expect(page.locator('#chakra-modal-_R_lkpqinqaiulb_')).toContainText('Описание проектаНа проекте специалисты Aston с нуля построили микросервисную архитектуру платформы, сделали её гибкой и масштабируемой.Сейчас они разрабатывают ещё два важных для заказчика сервиса — модуль оформления ипотеки и регистрационный центр для отправки данных по сделкам с недвижимостью в Росреестр.Технологии.NetVue.jsDDDPostgreSQLKafkaКоманда52 специалистаДлительность6 месяцев');
await page.getByRole('img', { name: 'arrow_icon' }).nth(4).click();

// Ритейл
await expect(page.getByRole('heading', { name: 'Система менеджмента качества маркированной продукции' })).toBeVisible();
await expect(page.getByRole('main')).toContainText('Система менеджмента качества маркированной продукции');
await page.waitForSelector('text=Ритейл', { state: 'visible', timeout: 5000 }); 
await page.getByRole('heading', { name: 'Система менеджмента качества маркированной продукции' }).click();
await expect(page.locator('#chakra-modal-_R_lkpqinqaiulb_').getByRole('img', { name: 'Фоновое изображение' })).toBeVisible();
await expect(page.locator('#chakra-modal-_R_lkpqinqaiulb_')).toContainText('РитейлСистема менеджмента качества маркированной продукции');
await expect(page.locator('#chakra-modal-_R_lkpqinqaiulb_')).toContainText('Описание проектаСпециалисты Aston в составе команды заказчика участвуют в доработке платформы «Маркус». Данная платформа применяется для отслеживания движения маркированной продукции и хранит все поступившие коды маркировки и всю историю движения кодов по объектам. Проект находится на стадии внедрения доработок.ТехнологииJavaAngularMongoDBOracleKafkaGrafanaКоманда3 специалистаДлительностьLive');
await page.getByRole('img', { name: 'arrow_icon' }).nth(4).click();

// Телеком
await expect(page.getByRole('heading', { name: 'Разработка внутреннего проекта заказчика' })).toBeVisible();
await expect(page.getByRole('main')).toContainText('Разработка внутреннего проекта заказчика');
await page.waitForSelector('text=Телеком', { state: 'visible', timeout: 5000 }); 
await page.getByRole('heading', { name: 'Разработка внутреннего проекта заказчика' }).click();
await expect(page.locator('#chakra-modal-_R_lkpqinqaiulb_').getByRole('img', { name: 'Фоновое изображение' })).toBeVisible();
await expect(page.locator('#chakra-modal-_R_lkpqinqaiulb_')).toContainText('ТелекомРазработка внутреннего проекта заказчика');
await expect(page.locator('#chakra-modal-_R_lkpqinqaiulb_')).toContainText('Описание проектаСпециалисты Aston участвуют в разработке внутреннего проекта заказчика. На проекте стоит задача создать систему, которая будет решать проблему формирования команд, а также позволит собирать отчётность об их фактических трудозатратах. Планируется, что данное решение позволит ускорить процессы и избежать ненужных подтверждений.Технологии.NetAngularКоманда3 специалистаДлительностьLive');
await page.getByRole('img', { name: 'arrow_icon' }).nth(4).click();

// Кнопка все проекты
await expect(page.getByRole('link', { name: 'Все проекты' })).toBeVisible();
await expect.soft(page.getByRole('link', { name: 'Все проекты' })).toHaveAttribute('href','/our-projects');
});


test('Проверка блока Что о нас говорят', async ({ page }) => {
await page.goto('http://dev.astondevs.ru/');
await page.getByRole('button', { name: 'Подтверждаю' }).click();
await page.getByRole('heading', { name: 'Что о нас говорят' }).nth(1).scrollIntoViewIfNeeded();

await expect(page.getByRole('heading', { name: 'Что о нас говорят' }).nth(1)).toBeVisible();
await expect(page.locator('.chakra-stack.css-1j3fpq7').first()).toBeVisible();
await expect(page.getByRole('main')).toContainText('«Работаем вместе более 4 лет, создали сотни функциональностей банковского ПО. Специалисты компании помогли нам продвинуться в области AQA. Довольны сотрудничеством и рекомендуем ASTON как надёжного партнёра».«Работаем вместе более 4 лет, создали сотни функциональностей банковского ПО. Специалисты компании помогли нам продвинуться в области AQA. Довольны сотрудничеством и рекомендуем ASTON как надёжного партнёра».Владимир КоваленкоРуководитель отдела разработки, T-Банк');
await page.getByRole('img', { name: 'arrow_icon' }).nth(1).click();

await expect(page.locator('.chakra-stack.css-t66fig').first()).toBeVisible();
await expect(page.getByRole('main')).toContainText('«Отмечу большой опыт команды и умение быстро решать возникающие проблемы. Акционеры остались довольны новой функциональностью, которую разработали и внедрили специалисты ASTON».«Отмечу большой опыт команды и умение быстро решать возникающие проблемы. Акционеры остались довольны новой функциональностью, которую разработали и внедрили специалисты ASTON».Юрий КарцевВедущий специалист, Альфа-Банк');
await page.getByRole('img', { name: 'arrow_icon' }).nth(1).click();

await expect(page.locator('.chakra-stack.css-1skmmdw')).toBeVisible();
await expect(page.getByRole('main')).toContainText('«Компания ASTON оперативно интегрировала новые функции в существующую архитектуру. Время тестирования новых продуктов сократилось, скорость внедрения услуг выросла».«Компания ASTON оперативно интегрировала новые функции в существующую архитектуру. Время тестирования новых продуктов сократилось, скорость внедрения услуг выросла».Анна СиняковаМенеджер по закупкам, Nexign');
await page.getByRole('img', { name: 'arrow_icon' }).nth(1).click();

await expect(page.locator('.swiper-slide.swiper-slide-active > .chakra-stack.css-t66fig')).toBeVisible();
await expect(page.getByRole('main')).toContainText('«Более 3 лет работали с командой ASTON над финтех-стартапом raddar.io. Специалисты компании предоставляли качественную поддержку по каждой задаче. Рекомендую этого подрядчика для решения любой вашей проблемы».«Более 3 лет работали с командой ASTON над финтех-стартапом raddar.io. Специалисты компании предоставляли качественную поддержку по каждой задаче. Рекомендую этого подрядчика для решения любой вашей проблемы».Денис СмирновИсполнительный директор, Raddar');
await page.getByRole('img', { name: 'arrow_icon' }).nth(1).click();

await expect(page.locator('.swiper-slide.swiper-slide-active > .chakra-stack.css-1j3fpq7')).toBeVisible();
await expect(page.getByRole('main')).toContainText('«Разработанное ASTON ПО для кассовых аппаратов работает без сбоев и ошибок. Благодаря этой команде я пересмотрел своё отношение к локальным аутсорсинговым компаниям».«Разработанное ASTON ПО для кассовых аппаратов работает без сбоев и ошибок. Благодаря этой команде я пересмотрел своё отношение к локальным аутсорсинговым компаниям».Максим ЕзерскийВице-президент, GMCS');
await page.getByRole('img', { name: 'arrow_icon' }).nth(1).click();

await expect(page.locator('.chakra-stack.css-1j3fpq7').first()).toBeVisible();

});