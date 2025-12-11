import { test, expect } from '@playwright/test';

test('Проверка блока Баннер', async ({ page }) => {
  await page.goto('https://astondevs.ru/industries/financial-services');
  await page.getByRole('button', { name: 'Подтверждаю' }).click();

  // Проверка видимости
  await expect(page.getByRole('heading', { name: 'Разработка финансового ПО' })).toBeVisible();
  await expect(page.locator('section').filter({ hasText: 'Разработка финансового ПООставить заявку' }).getByRole('button')).toBeVisible();
  // Сравнить текст
  await expect(page.locator('h1')).toContainText('Разработка финансового ПО');
  await expect(page.getByRole('main')).toContainText('Оставить заявку');
});

test('Проверка блока Буллиты', async ({ page }) => {
  await page.goto('https://astondevs.ru/industries/financial-services');
  await page.getByRole('button', { name: 'Подтверждаю' }).click();

  // Проверка видимости
  await expect(page.locator('div').filter({ hasText: 'В команде ASTON' }).nth(3)).toBeVisible();
  // Сравнить текст
  await expect(page.getByRole('main')).toContainText('В команде ASTON — специалисты с глубокими экспертными знаниями и большим опытом работы в финтех‑отраслиВ команде ASTON — специалисты с глубокими экспертными знаниями и большим опытом работы в финтех‑отрасли100+реализованных проектов5 летсредний срок сотрудничества1000+инженеров финансового ПО10 днейдля старта на проекте');
});

test('Проверка блока Программные решения и услуги для финансовой сферы Программные решения и услуги для финансовой сферы', async ({ page }) => {
  await page.goto('https://astondevs.ru/industries/financial-services');
  await page.getByRole('button', { name: 'Подтверждаю' }).click();

  // Проверка видимости програм решений и сравнить текст

  await expect(page.getByRole('tab', { name: 'Для банков Для банков' })).toBeVisible();
  await expect(page.getByText('Для банковКоманда ASTON')).toBeVisible();
  await expect(page.locator('#tabs-_R_18klubsnqaiulb_--tab-0')).toContainText('Для банков');
  await expect(page.getByLabel('Для банков')).toContainText('Для банковКоманда ASTON готова предложить своим клиентам QA-аудит, разработку мобильных приложений, высоконагруженных платформ, операционного front-офиса и различных систем для повышения клиентской лояльности. Опыт наших экспертов позволит реализовать любые нестандартные решения');

  // Для финансового сектора
  await page.getByRole('tab', { name: 'Для финансового сектора Для финансового сектора TabArrowRight' }).click();
  await expect(page.getByRole('tab', { name: 'Для финансового сектора Для финансового сектора TabArrowRight' })).toBeVisible();
  await expect(page.getByText('Для финансового сектораASTON')).toBeVisible();
  await expect(page.locator('#tabs-_R_18klubsnqaiulb_--tab-1')).toContainText('Для финансового сектора');
  await expect(page.getByLabel('Для финансового сектора')).toContainText('Для финансового сектораASTON — эксперт в разработке ПО для финансового сектора. В компании работает более 150 сотрудников с опытом в финансовой сфере, способных реализовать проект с нуля и довести его до выхода на рынок. Мы работаем с инвестиционными фондами, банками, и страховыми компаниями');
  
  // Для инвестиционно-брокерского
  await page.getByRole('tab', { name: 'Для инвестиционно-брокерского бизнеса Для инвестиционно-брокерского бизнеса' }).click();
  await expect(page.getByRole('tab', { name: 'Для инвестиционно-брокерского бизнеса Для инвестиционно-брокерского бизнеса' })).toBeVisible();
  await expect(page.getByText('Для инвестиционно-брокерского бизнесаВ портфеле Aston')).toBeVisible();
  await expect(page.locator('#tabs-_R_18klubsnqaiulb_--tab-2')).toContainText('Для инвестиционно-брокерского бизнеса');
  await expect(page.getByLabel('Для инвестиционно-брокерского бизнеса')).toContainText('Для инвестиционно-брокерского бизнесаВ портфеле Aston множество проектов для российских компаний. Наши решения позволяют эффективно управлять инвестиционным портфелем, контролировать прибыльность и повышать уровень удовлетворённости клиентов. Наш уровень экспертизы подтверждают показатели');

 // Для страховых компаний
 await page.getByRole('tab', { name: 'Для страховых компаний Для страховых компаний TabArrowRight' }).click();
 await expect(page.getByRole('tab', { name: 'Для страховых компаний Для страховых компаний TabArrowRight' })).toBeVisible();
 await expect(page.getByText('Для страховых компанийПрограммное обеспечение от команды ASTON')).toBeVisible();
 await expect(page.locator('#tabs-_R_18klubsnqaiulb_--tab-3')).toContainText('Для страховых компаний');
 await expect(page.getByLabel('Для страховых компаний')).toContainText('Для страховых компанийПрограммное обеспечение от команды ASTON поможет вам делать правильные прогнозы и расчёты, одновременно снижая риски. Разработка современных цифровых решений в страховой сфере — наше ключевое преимущество');

 // Для лизинговых компаний
 await page.getByRole('tab', { name: 'Для лизинговых компаний Для лизинговых компаний TabArrowRight' }).click();
 await expect(page.getByRole('tab', { name: 'Для лизинговых компаний Для лизинговых компаний TabArrowRight' })).toBeVisible();
 await expect(page.getByText('Для лизинговых компанийНаши специалисты готовы разработать и внедрить CRM')).toBeVisible();
 await expect(page.locator('#tabs-_R_18klubsnqaiulb_--tab-4')).toContainText('Для лизинговых компаний');
 await expect(page.getByLabel('Для лизинговых компаний')).toContainText('Для лизинговых компанийНаши специалисты готовы разработать и внедрить CRM, мобильные приложения и другие цифровые продукты для компаний, ведущих лизинговую деятельность. Благодаря нашему ПО вы сможете улучшить клиентский опыт, упростить планирование и управление запасами');


 await expect(page.locator('section').filter({ hasText: 'Программные решенияи услуги для финансовой сферыПрограммные решенияи услуги для ' }).getByRole('button')).toBeVisible();
 await expect(page.getByRole('main')).toContainText('Оставить заявку');
});

test('Проверка блока Наши клиенты в финтехе', async ({ page }) => {
  await page.goto('https://astondevs.ru/industries/financial-services');
  await page.getByRole('button', { name: 'Подтверждаю' }).click();
  await page.getByRole('heading', { name: 'Наши клиенты в финтехе' }).nth(1).scrollIntoViewIfNeeded();

  // Видимость элементов в блоке
  await expect(page.getByRole('heading', { name: 'Наши клиенты в финтехе' }).nth(1)).toBeVisible();
  await expect(page.getByRole('img', { name: 'Логотип Сбербанка' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'Логотип Т-Банка' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'Логотип Альфа-банка' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'Логотип ВТБ банка' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'Логотип Ингосстраха' })).toBeVisible();

  // Проверка текста в заголовке блока
  await expect(page.getByRole('main')).toContainText('Наши клиенты в финтехе');
});

test('Проверка блока Реализованные проекты', async ({ page }) => {
  await page.goto('https://astondevs.ru/industries/financial-services');
  await page.getByRole('button', { name: 'Подтверждаю' }).click();
  await page.getByRole('heading', { name: 'Реализованные проекты' }).nth(1).scrollIntoViewIfNeeded();

// Финтех
await expect.soft(page.getByRole('heading', { name: 'Реализованные проекты' }).nth(1)).toBeVisible();
await expect.soft(page.getByRole('main')).toContainText('Реализованные проекты');
await page.waitForSelector('text=Финтех', { state: 'visible', timeout: 5000 }); 
await expect.soft(page.getByRole('main')).toContainText('Cистема управления реализации кредитных продуктов');
await page.getByRole('heading', { name: 'C' }).click();
await expect.soft(page.locator('#chakra-modal-_R_lkp4lubsnqaiulb_').getByRole('img', { name: 'Фоновое изображение' })).toBeVisible();
await expect.soft(page.locator('#chakra-modal-_R_lkp4lubsnqaiulb_')).toContainText('ФинтехCистема управления реализации кредитных продуктов');
await expect.soft(page.locator('#chakra-modal-_R_lkp4lubsnqaiulb_')).toContainText('Описание проектаКомпания Aston разработала систему «Дистанционный кредит» для онлайн-продаж кредитных продуктов банка через лендинги. Особенность проекта — в использовании оркестратора Camunda Platform для большей гибкости бизнес-процессов. В планах — масштабировать решение на мобильные приложения банка.');
await page.getByRole('img', { name: 'arrow_icon' }).nth(4).click();

// Недвижимость
await expect.soft(page.getByRole('heading', { name: 'Мобильное приложение по поиску недвижимости' })).toBeVisible();
await expect.soft(page.getByRole('main')).toContainText('Мобильное приложениепо поиску недвижимости');
await page.waitForSelector('text=Недвижимость', { state: 'visible', timeout: 5000 }); 
await page.getByRole('heading', { name: 'Мобильное приложение по поиску недвижимости' }).click();
await expect.soft(page.locator('#chakra-modal-_R_lkp4lubsnqaiulb_').getByRole('img', { name: 'Фоновое изображение' })).toBeVisible();
await expect.soft(page.locator('#chakra-modal-_R_lkp4lubsnqaiulb_')).toContainText('НедвижимостьМобильное приложениепо поиску недвижимости');
await expect.soft(page.locator('#chakra-modal-_R_lkp4lubsnqaiulb_')).toContainText('Описание проектаНа проекте специалисты Aston с нуля построили микросервисную архитектуру платформы, сделали её гибкой и масштабируемой.Сейчас они разрабатывают ещё два важных для заказчика сервиса — модуль оформления ипотеки и регистрационный центр для отправки данных по сделкам с недвижимостью в Росреестр.Технологии.NetVue.jsDDDPostgreSQLKafkaКоманда52 специалистаДлительность6 месяцев');
await page.getByRole('img', { name: 'arrow_icon' }).nth(4).click();

// Ритейл
await expect.soft(page.getByRole('heading', { name: 'Система менеджмента качества маркированной продукции' })).toBeVisible();
await expect.soft(page.getByRole('main')).toContainText('Система менеджмента качества маркированной продукции');
await page.waitForSelector('text=Ритейл', { state: 'visible', timeout: 5000 }); 
await page.getByRole('heading', { name: 'Система менеджмента качества маркированной продукции' }).click();
await expect.soft(page.locator('#chakra-modal-_R_lkp4lubsnqaiulb_').getByRole('img', { name: 'Фоновое изображение' })).toBeVisible();
await expect.soft(page.locator('#chakra-modal-_R_lkp4lubsnqaiulb_')).toContainText('РитейлСистема менеджмента качества маркированной продукции');
await expect.soft(page.locator('#chakra-modal-_R_lkp4lubsnqaiulb_')).toContainText('Описание проектаСпециалисты Aston в составе команды заказчика участвуют в доработке платформы «Маркус». Данная платформа применяется для отслеживания движения маркированной продукции и хранит все поступившие коды маркировки и всю историю движения кодов по объектам. Проект находится на стадии внедрения доработок.ТехнологииJavaAngularMongoDBOracleKafkaGrafanaКоманда3 специалистаДлительностьLive');
await page.getByRole('img', { name: 'arrow_icon' }).nth(4).click();



// Телеком
await expect.soft(page.getByRole('heading', { name: 'Разработка внутреннего проекта заказчика' })).toBeVisible();
await expect.soft(page.getByRole('main')).toContainText('Разработка внутреннего проекта заказчика');
await page.waitForSelector('text=Телеком', { state: 'visible', timeout: 5000 }); 
await page.getByText('ТелекомРазработка внутреннего проекта заказчика').click();
await expect.soft(page.locator('#chakra-modal-_R_lkp4lubsnqaiulb_').getByRole('img', { name: 'Фоновое изображение' })).toBeVisible();
await expect.soft(page.locator('#chakra-modal-_R_lkp4lubsnqaiulb_')).toContainText('ТелекомРазработка внутреннего проекта заказчика');
await expect.soft(page.locator('#chakra-modal-_R_lkp4lubsnqaiulb_')).toContainText('Описание проектаСпециалисты Aston участвуют в разработке внутреннего проекта заказчика. На проекте стоит задача создать систему, которая будет решать проблему формирования команд, а также позволит собирать отчётность об их фактических трудозатратах. Планируется, что данное решение позволит ускорить процессы и избежать ненужных подтверждений.Технологии.NetAngularКоманда3 специалистаДлительностьLive');
await page.getByRole('img', { name: 'arrow_icon' }).nth(4).click();

// Кнопка все проекты
await expect.soft(page.getByRole('link', { name: 'Все проекты' })).toBeVisible();
await expect.soft(page.getByRole('link', { name: 'Все проекты' })).toHaveAttribute('href','/our-projects');
});


test('Проверка блока Почему компании выбирают?', async ({ page }) => {
  await page.goto('https://astondevs.ru/industries/financial-services');
  await page.getByRole('button', { name: 'Подтверждаю' }).click();
  await page.waitForSelector('text=Почему компании выбирают ASTON?', { state: 'visible', timeout: 5000 });
  await page.getByRole('heading', { name: 'Почему компании выбирают ASTON?' }).scrollIntoViewIfNeeded();



  // Проверка видимости карточкек
  await expect.soft(page.getByRole('heading', { name: 'Почему компании выбирают' })).toBeVisible();
  await expect.soft(page.locator('div').filter({ hasText: 'БезопасностьСоблюдение требований информационной безопасности и защиты персональ' }).nth(4)).toBeVisible();
  await expect.soft(page.locator('div').filter({ hasText: 'Экспертность70' }).nth(4)).toBeVisible();
  await expect.soft(page.locator('div').filter({ hasText: 'Лидеры рынкаНам доверяют крупные финтех-компании' }).nth(4)).toBeVisible();
  await expect.soft(page.locator('div').filter({ hasText: 'ОбразованиеОпыт разработчиков подтвержден сертификатами' }).nth(4)).toBeVisible();
  await expect.soft(page.locator('section').filter({ hasText: 'Почему компании выбирают' }).getByRole('button')).toBeVisible();

  // Проверка текста
  await expect.soft(page.getByRole('main')).toContainText('Почему компании выбирают ASTON?');
  await expect.soft(page.getByRole('main')).toContainText('БезопасностьСоблюдение требований информационной безопасности и защиты персональных данных');
  await expect.soft(page.getByRole('main')).toContainText('Экспертность70% наших разработчиков имеют опыт разработки финансовых продуктов более 5 лет');
  await expect.soft(page.getByRole('main')).toContainText('Лидеры рынкаНам доверяют крупные финтех-компании');
  await expect.soft(page.getByRole('main')).toContainText('ОбразованиеОпыт разработчиков подтвержден сертификатами');

  // Кнопка Оставить заявку
  await expect.soft(page.getByRole('main')).toContainText('Оставить заявку');
});

// Проверка блока  Наш стек технологий
test('Проверка блока Наш стек технологий', async ({ page }) => {
  await page.goto('https://astondevs.ru/industries/financial-services');
  await page.getByRole('button', { name: 'Подтверждаю' }).click();
  // Ожидаем появление блока "Наш стек технологий"
  await page.waitForSelector('text=Наш стек технологий', { state: 'visible', timeout: 5000 });
  // Находим первый заголовок "Наш стек технологий"
  const heading = page.getByRole('heading', { name: 'Наш стек технологий' }).first();
  // Проверяем видимость и прокручиваем, если нужно
  await expect(heading).toBeVisible();
  await heading.scrollIntoViewIfNeeded();
   
  // Проверка видимости иконок
  await expect.soft(page.locator('div').filter({ hasText: /^Angular$/ })).toBeVisible();
  await expect.soft(page.locator('div').filter({ hasText: /^React$/ })).toBeVisible();
  await expect.soft(page.locator('div').filter({ hasText: /^JavaScript$/ })).toBeVisible();
  await expect.soft(page.locator('div').filter({ hasText: /^Vue\.js$/ })).toBeVisible();
  await expect.soft(page.locator('div').filter({ hasText: /^1C$/ })).toBeVisible();
  await expect.soft(page.locator('div').filter({ hasText: /^PHP$/ })).toBeVisible();
  await expect.soft(page.locator('div').filter({ hasText: /^Java$/ })).toBeVisible();
  await expect.soft(page.locator('div').filter({ hasText: /^Python$/ })).toBeVisible();
  await expect.soft(page.locator('div').filter({ hasText: /^\.NET$/ })).toBeVisible();
  await expect.soft(page.locator('div').filter({ hasText: /^Golang$/ })).toBeVisible();
  await expect.soft(page.locator('div').filter({ hasText: /^iOS$/ })).toBeVisible();
  await expect.soft(page.locator('div').filter({ hasText: /^Android$/ })).toBeVisible();
  await expect.soft(page.locator('div').filter({ hasText: /^C\+\+$/ })).toBeVisible();
  await expect.soft(page.locator('div').filter({ hasText: /^Ruby$/ })).toBeVisible();
  await expect.soft(page.locator('div').filter({ hasText: /^Flutter$/ })).toBeVisible();

  // Сравнение текста
  await expect.soft(page.locator('div').filter({ hasText: /^Angular$/ })).toContainText('Angular');
  await expect.soft(page.locator('div').filter({ hasText: /^React$/ })).toContainText('Reac');
  await expect.soft(page.locator('div').filter({ hasText: /^JavaScript$/ })).toContainText('JavaScript');
  await expect.soft(page.locator('div').filter({ hasText: /^Vue\.js$/ })).toContainText('Vue\.js');
  await expect.soft(page.locator('div').filter({ hasText: /^1C$/ })).toContainText('1C');
  await expect.soft(page.locator('div').filter({ hasText: /^PHP$/ })).toContainText('PHP');
  await expect.soft(page.locator('div').filter({ hasText: /^Java$/ })).toContainText('Java');
  await expect.soft(page.locator('div').filter({ hasText: /^Python$/ })).toContainText('Python');
  await expect.soft(page.locator('div').filter({ hasText: /^\.NET$/ })).toContainText('.NET');
  await expect.soft(page.locator('div').filter({ hasText: /^Golang$/ })).toContainText('Golang');
  await expect.soft(page.locator('div').filter({ hasText: /^iOS$/ })).toContainText('iOS');
  await expect.soft(page.locator('div').filter({ hasText: /^Android$/ })).toContainText('Android');
  await expect.soft(page.locator('div').filter({ hasText: /^C\+\+$/ })).toContainText('C\+\+');
  await expect.soft(page.locator('div').filter({ hasText: /^Ruby$/ })).toContainText('Ruby');
  await expect.soft(page.locator('div').filter({ hasText: /^Flutter$/ })).toContainText('Flutter');
});

test('Проверка блока Что о нас говорят', async ({ page }) => {
  await page.goto('https://astondevs.ru/industries/financial-services');
  await page.getByRole('button', { name: 'Подтверждаю' }).click();
  // Ожидаем появление блока "Наш стек технологий"
  await page.waitForSelector('text=Что о нас говорят', { state: 'visible', timeout: 5000 });
  // Находим первый заголовок "Наш стек технологий"
  const heading = page.getByRole('heading', { name: 'Что о нас говорят' }).first();
  // Проверяем видимость и прокручиваем, если нужно
  await expect.soft(heading).toBeVisible();
  await heading.scrollIntoViewIfNeeded();

await expect.soft(page.getByRole('heading', { name: 'Что о нас говорят' }).nth(1)).toBeVisible();
await expect.soft(page.locator('.chakra-stack.css-1j3fpq7').first()).toBeVisible();
await expect.soft(page.getByRole('main')).toContainText('«Работаем вместе более 4 лет, создали сотни функциональностей банковского ПО. Специалисты компании помогли нам продвинуться в области AQA. Довольны сотрудничеством и рекомендуем ASTON как надёжного партнёра».«Работаем вместе более 4 лет, создали сотни функциональностей банковского ПО. Специалисты компании помогли нам продвинуться в области AQA. Довольны сотрудничеством и рекомендуем ASTON как надёжного партнёра».Владимир КоваленкоРуководитель отдела разработки, T-Банк');
await page.getByRole('img', { name: 'arrow_icon' }).nth(1).click();

await expect.soft(page.locator('.chakra-stack.css-t66fig').first()).toBeVisible();
await expect.soft(page.getByRole('main')).toContainText('«Отмечу большой опыт команды и умение быстро решать возникающие проблемы. Акционеры остались довольны новой функциональностью, которую разработали и внедрили специалисты ASTON».«Отмечу большой опыт команды и умение быстро решать возникающие проблемы. Акционеры остались довольны новой функциональностью, которую разработали и внедрили специалисты ASTON».Юрий КарцевВедущий специалист, Альфа-Банк');
await page.getByRole('img', { name: 'arrow_icon' }).nth(1).click();

await expect.soft(page.locator('.chakra-stack.css-1skmmdw')).toBeVisible();
await expect.soft(page.getByRole('main')).toContainText('«Компания ASTON оперативно интегрировала новые функции в существующую архитектуру. Время тестирования новых продуктов сократилось, скорость внедрения услуг выросла».«Компания ASTON оперативно интегрировала новые функции в существующую архитектуру. Время тестирования новых продуктов сократилось, скорость внедрения услуг выросла».Анна СиняковаМенеджер по закупкам, Nexign');
await page.getByRole('img', { name: 'arrow_icon' }).nth(1).click();

await expect.soft(page.locator('.swiper-slide.swiper-slide-active > .chakra-stack.css-t66fig')).toBeVisible();
await expect.soft(page.getByRole('main')).toContainText('«Более 3 лет работали с командой ASTON над финтех-стартапом raddar.io. Специалисты компании предоставляли качественную поддержку по каждой задаче. Рекомендую этого подрядчика для решения любой вашей проблемы».«Более 3 лет работали с командой ASTON над финтех-стартапом raddar.io. Специалисты компании предоставляли качественную поддержку по каждой задаче. Рекомендую этого подрядчика для решения любой вашей проблемы».Денис СмирновИсполнительный директор, Raddar');
await page.getByRole('img', { name: 'arrow_icon' }).nth(1).click();

await expect.soft(page.locator('.swiper-slide.swiper-slide-active > .chakra-stack.css-1j3fpq7')).toBeVisible();
await expect.soft(page.getByRole('main')).toContainText('«Разработанное ASTON ПО для кассовых аппаратов работает без сбоев и ошибок. Благодаря этой команде я пересмотрел своё отношение к локальным аутсорсинговым компаниям».«Разработанное ASTON ПО для кассовых аппаратов работает без сбоев и ошибок. Благодаря этой команде я пересмотрел своё отношение к локальным аутсорсинговым компаниям».Максим ЕзерскийВице-президент, GMCS');
await page.getByRole('img', { name: 'arrow_icon' }).nth(1).click();

await expect.soft(page.locator('.chakra-stack.css-1j3fpq7').first()).toBeVisible();

});