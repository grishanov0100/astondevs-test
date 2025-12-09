import { test, expect } from '@playwright/test';

test('Позитивная проверка', async ({ page }) => {

  await page.goto('http://dev.astondevs.ru/');
  await page.getByRole('button', { name: 'Подтверждаю' }).click();
  await page.getByRole('button', { name: 'Оставить заявку' }).first().click();


  // Определяем локатор для поля "Имя" в глобальной области теста
  const nameInput = page.getByRole('textbox', { name: 'Имя*' });
  await page.getByRole('textbox', { name: 'Имя*' }).click();
  

  // === Два символа ===
  await page.getByRole('textbox', { name: 'Имя*' }).fill('Те');
  await nameInput.blur(); // Триггер валидации
  await expect(page.locator('#name_errorText')).not.toBeVisible(); // Ожидаем, что ошибки нет

  // === 60 Символов ===
  await page.getByRole('textbox', { name: 'Имя*' }).fill('Тесттесттетесттесттетесттесттетесттесттетесттесттетесттестте');
  await nameInput.blur(); // Триггер валидации
  await expect(page.locator('#name_errorText')).not.toBeVisible(); // Ожидаем, что ошибки нет

  // === Допустимые символы ===
  await page.getByRole('textbox', { name: 'Имя*' }).fill('Тест имя-фамилияЯ');
  await nameInput.blur(); // Триггер валидации
  await expect(page.locator('#name_errorText')).not.toBeVisible();// Ожидаем, что ошибки нет





  // Определяем локатор для поля "Компания" в глобальной области теста
  const companyInput = page.getByRole('textbox', { name: 'Компания*' });
  await page.getByRole('textbox', { name: 'Компания*' }).click();

  
  // === Два символа ===
  await page.getByRole('textbox', { name: 'Компания*' }).fill('оs');
  await companyInput.blur(); // Триггер валидации;
  await expect(page.locator('#company_errorText')).not.toBeVisible();// Ожидаем, что ошибки нет

  // === 60 символов ===
  await page.getByRole('textbox', { name: 'Компания*' }).fill('компаниякакомпаниякакомпаниякакомпаниякакомпаниякакомпаниякв');
  await companyInput.blur(); // Триггер валидации
  await expect(page.locator('#company_errorText')).not.toBeVisible();// Ожидаем, что ошибки нет

  // === Допустимые символы ===
  await page.getByRole('textbox', { name: 'Компания*' }).fill('компаниякаdafввю... 0-4""');
  await companyInput.blur(); // Триггер валидаци;
  await expect(page.locator('#company_errorText')).not.toBeVisible();// Ожидаем, что ошибки нет



 

  // Определем локатор для поля "Email" в глобальной области теста
  const emailInput = page.getByRole('textbox', { name: 'E-mail*' });
  await page.getByRole('textbox', { name: 'E-mail*' }).click();


  // === Ввод в поле "email" допустимые символы в a) a-z, A-Z, 0-9, "_", "-", "." ===
  await page.getByRole('textbox', { name: 'E-mail*' }).fill('sdsdf09-09..___3434@mail.ru');
  await emailInput.blur(); // Триггер валидации;
  await expect(page.locator('#email_errorText')).not.toBeVisible();// Ожидаем, что ошибки нет

  // === Ввод в поле "email" допустимые символы в b) a-z, A-Z, 0-9,"-" ===
  await page.getByRole('textbox', { name: 'E-mail*' }).fill('test@nndnd-09.ru');
  await emailInput.blur(); // Триггер валидации;
  await expect(page.locator('#email_errorText')).not.toBeVisible();// Ожидаем, что ошибки нет

  // === Ввод в поле "email" в части a) 64 символа ===
  await page.getByRole('textbox', { name: 'E-mail*' }).fill('fscscsdcs8sdc9sd7c8sdc_sdcsdc-sdcsdc.sdcsdcsdcsdcsdcjsdjcksdc767@mail.ru');
  await emailInput.blur(); // Триггер валидации;
  await expect(page.locator('#email_errorText')).not.toBeVisible();// Ожидаем, что ошибки нет

  // === Ввод в поле "email" в b) 63 символа ===
  await page.getByRole('textbox', { name: 'E-mail*' }).fill('test@fscscsdcs8sdc9sd7c8sdcsdcsds-sdcsdcsdcsdcsdcsdcsdcdssdjcksdc767.rt');
  await emailInput.blur(); // Триггер валидации;
  await expect(page.locator('#email_errorText')).not.toBeVisible();// Ожидаем, что ошибки нет

  // === Ввод в поле "email" в c) 2 символа ===
  await page.getByRole('textbox', { name: 'E-mail*' }).fill('test@mail.ru');
  await emailInput.blur(); // Триггер валидации;
  await expect(page.locator('#email_errorText')).not.toBeVisible();// Ожидаем, что ошибки нет

  // === Ввод в поле "email" в c) 6 символа ===
  await page.getByRole('textbox', { name: 'E-mail*' }).fill('test@mail.rufdfd');
  await emailInput.blur(); // Триггер валидации;
  await expect(page.locator('#email_errorText')).not.toBeVisible();// Ожидаем, что ошибки нет





  // Определем локатор для поля "Опишите ваш проект" в глобальной области теста
  const messageInput = page.getByRole('textbox', { name: 'Опишите ваш IT-проект*' });
  await page.getByRole('textbox', { name: 'Опишите ваш IT-проект*' }).click();


  // === Ввод в поле "Опишите ваш ИТ- проект" допустимые символы "Аа-Яя, Aa-Zz, 0-9, спецсимволы" ===
  await page.getByRole('textbox', { name: 'Опишите ваш IT-проект*' }).click();
  await page.getByRole('textbox', { name: 'Опишите ваш IT-проект*' }).fill('ПРОЛьтипроn87678_)()_)(*&^%}"?>{:jkmn');
  await messageInput.blur(); // Триггер валидации;
  await expect(page.locator('#message_errorText')).not.toBeVisible();// Ожидаем, что ошибки нет

  // === Ввод в поле "Опишите ваш ИТ- проект" 2 символа ===
  await page.getByRole('textbox', { name: 'Опишите ваш IT-проект*' }).fill('s1');
  await messageInput.blur(); // Триггер валидации;
  await expect(page.locator('#message_errorText')).not.toBeVisible();// Ожидаем, что ошибки нет

  // === Ввод в поле "Опишите ваш ИТ- проект" 2000 символа ===
  await page.getByRole('textbox', { name: 'Опишите ваш IT-проект*' }).fill('ывсывсывсывсывсывсывсывсвысвырсоиывосриовсоывсиоывисоывисоыволсолыврслоыврслорло ролыврсолыврсрловрло ролорр ллоол рол ро рол рл орл орлор вравал рлj hj hjkdhj d dj hdj hjkdf hkdjf hkjdfh jdf kjdfh hdfk 87f87f9d 7d89f 798d9$%^&*()}"?>:{P:Lh usduiudsdsdfsdf ывсывсывсывсывсывсывсывсвысвырсоиывосриовсоывсиоывисоывисоыволсолыврслоыврслорло ролыврсолыврсрловрло ролорр ллоол рол ро рол рл орл орлор вравал рлj hj hjkdhj d dj hdj hjkdf hkdjf hkjdfh jdf kjdfh hdfk 87f87f9d 7d89f 798d9$%^&*()}"?>:{P:Lh usduiudsdsdfsdf ывсывсывсывсывсывсывсывсвысвырсоиывосриовсоывсиоывисоывисоыволсолыврслоыврслорло ролыврсолыврсрловрло ролорр ллоол рол ро рол рл орл орлор вравал рлj hj hjkdhj d dj hdj hjkdf hkdjf hkjdfh jdf kjdfh hdfk 87f87f9d 7d89f 798d9$%^&*()}"?>:{P:Lh usduiudsdsdfsdf ывсывсывсывсывсывсывсывсвысвырсоиывосриовсоывсиоывисоывисоыволсолыврслоыврслорло ролыврсолыврсрловрло ролорр ллоол рол ро рол рл орл орлор вравал рлj hj hjkdhj d dj hdj hjkdf hkdjf hkjdfh jdf kjdfh hdfk 87f87f9d 7d89f 798d9$%^&*()}"?>:{P:Lh usduiudsdsdfsdf ывсывсывсывсывсывсывсывсвысвырсоиывосриовсоывсиоывисоывисоыволсолыврслоыврслорло ролыврсолыврсрловрло ролорр ллоол рол ро рол рл орл орлор вравал рлj hj hjkdhj d dj hdj hjkdf hkdjf hkjdfh jdf kjdfh hdfk 87f87f9d 7d89f 798d9$%^&*()}"?>:{P:Lh usduiudsdsdfsdf ывсывсывсывсывсывсывсывсвысвырсоиывосриовсоывсиоывисоывисоыволсолыврслоыврслорло ролыврсолыврсрловрло ролорр ллоол рол ро рол рл орл орлор вравал рлj hj hjkdhj d dj hdj hjkdf hkdjf hkjdfh jdf kjdfh hdfk 87f87f9d 7d89f 798d9$%^&*()}"?>:{P:Lh usduiudsdsdfsdf ывсывсывсывсывсывсывсывсвысвырсоиывосриовсоывсиоывисоывисоыволсолыврслоыврслорло ролыврсолыврсрловрло ролорр ллоол рол ро рол рл орл орлор вравал рлj hj hjkdhj d dj hdj hjkdf hkdjf hkjdfh jdf kjdfh hdfk 87f87f9d 7d89f 798d9$%^&*()}"?>:{P:Lh usduiudsdsdfsdf ывсывсывсывсывсывсывсывсвысвырсоиывосриовсоывсиоывисоывисоыволсолыврслоыврслорло ролыврсолыврсрловрло ролорр ллоол рол ро рол рл орл орлор вравал рлj hj hjkdhj d dj hdj hjkdf hkdjf hkjdfh jdf kjdfh hdd');
  await messageInput.blur(); // Триггер валидации;
  await expect(page.locator('#message_errorText')).not.toBeVisible();// Ожидаем, что ошибки нет





  // Определем локатор для поля "Номер телефона" в глобальной области теста
  const phoneInput = page.getByRole('textbox', { name: 'Номер телефoнa*' });
  await page.getByRole('textbox', { name: 'Номер телефoнa*' }).click();


  // === Ввод 5 символов  ===
  await page.getByRole('textbox', { name: 'Номер телефoнa*' }).fill('+12345');
  await phoneInput.blur(); // Триггер валидации;
  await expect(page.locator('#phone_errorText')).not.toBeVisible();// Ожидаем, что ошибки нет

  // === Ввод 17 символов ===
  await page.getByRole('textbox', { name: 'Номер телефoнa*' }).fill('+12345678901234567');
  await phoneInput.blur(); // Триггер валидации;
  await expect(page.locator('#phone_errorText')).not.toBeVisible();// Ожидаем, что ошибки нет
});


  test('Неготиная проверка', async ({ page }) => {
  await page.goto('http://dev.astondevs.ru/');
  await page.getByRole('button', { name: 'Подтверждаю' }).click();
  await page.getByRole('button', { name: 'Оставить заявку' }).first().click();

  // Определяем локаторы
  const nameInput = page.getByRole('textbox', { name: 'Имя*' });
  const errorTextElement = page.locator('#name_errorText'); //  Вот здесь объявляем локатор!

 // Клик по полю (если нужно)
  await nameInput.click();

  // Поле оставить пустым
  await nameInput.fill(' ');
  await nameInput.blur(); // Триггер валидации
  await expect(errorTextElement).toBeVisible(); // Проверям, что элемент виден
  await expect(errorTextElement).toHaveText('Укажите имя'); // Проверяем текст валидационной ошибки

  // Поле 'Имя' 1 символ
  await nameInput.fill('Т');
  await nameInput.blur(); // Триггер валидации
  await expect(errorTextElement).toBeVisible(); // Проверям, что элемент виден
  await expect(errorTextElement).toHaveText('Укажите имя'); // Проверяем текст валидационной ошибки

  // Поле 'Имя' латиница
  await nameInput.fill('test');
  await nameInput.blur(); // Триггер валидации
  await expect(errorTextElement).toBeVisible(); // Проверям, что элемент виден
  await expect(errorTextElement).toHaveText('Допустимые символы:  "Аа-Яя", "Ёё", "пробел", "-"'); // Проверяем текст валидационной ошибки

  // Поле 'Имя' цифры
  await nameInput.fill('Саша8');
  await nameInput.blur(); // Триггер валидации
  await expect(errorTextElement).toBeVisible(); // Проверям, что элемент виден
  await expect(errorTextElement).toHaveText('Допустимые символы:  "Аа-Яя", "Ёё", "пробел", "-"'); // Проверяем текст валидационной ошибки
  
  // Поле 'Имя' Специсмволы
  await nameInput.fill('Алекс?');
  await nameInput.blur(); // Триггер валидации
  await expect(errorTextElement).toBeVisible(); // Проверям, что элемент виден
  await expect(errorTextElement).toHaveText('Допустимые символы:  "Аа-Яя", "Ёё", "пробел", "-"'); // Проверяем текст валидационной ошибки



  // Определяем локаторы
  const companyInput = page.getByRole('textbox', { name: 'Компания*' });
  const errorTextCompany = page.locator('#company_errorText');  // Вот здесь объявляем локатор!

  // Клик по полю (Компания)
  await companyInput.click();

  // Поле оставить пустым
  await companyInput.fill(' ');
  await companyInput.blur(); // Триггер валидации
  await expect(errorTextCompany).toBeVisible(); // Проверям, что элемент виден
  await expect(errorTextCompany).toHaveText('Укажите название компании'); // Проверяем текст валидационной ошибки

  // Ввод в поле "Компания": 1 символ
  await companyInput.fill('H');
  await companyInput.blur(); // Триггер валидации
  await expect(errorTextCompany).toBeVisible(); // Проверям, что элемент виден
  await expect(errorTextCompany).toHaveText('Укажите название компании'); // Проверяем текст валидационной ошибки

  // Ввод в поле "Компания": спецсимволы
  await companyInput.fill('?*_');
  await companyInput.blur(); // Триггер валидации
  await expect(errorTextCompany).toBeVisible(); // Проверям, что элемент виден
  await expect(errorTextCompany).toHaveText('Допустимые символы: "Аа-Яя", "Ёё", "Aa-Zz", "0-9", "-", ".", "пробел", "кавычки"'); // Проверяем текст валидационной ошибки



  // Определяем локаторы
  const emailInput = page.getByRole('textbox', { name: 'E-mail*' });
  const errorTextEmail = page.locator('#email_errorText');  // Вот здесь объявляем локатор!

  // Клик по полю (E-mail*)
  await emailInput.click();

  //Ввод в поле "E-mail": кириллицу
  await emailInput.fill('тест@mail.ru');
  await emailInput.blur(); // Триггер валидации
  await expect(errorTextEmail).toBeVisible(); // Проверям, что элемент виден
  await expect(errorTextEmail).toHaveText('Неверный e-mail'); // Проверяем текст валидационной ошибки

  //Ввод в поле "E-mail":  пробел
  await emailInput.fill('te st@mail.ru');
  await emailInput.blur(); // Триггер валидации
  await expect(errorTextEmail).toBeVisible(); // Проверям, что элемент виден
  await expect(errorTextEmail).toHaveText('Неверный e-mail'); // Проверяем текст валидационной ошибки

  //Ввод в поле "E-mail": начинается с точки
  await emailInput.fill('.test@mail.ru');
  await emailInput.blur(); // Триггер валидации
  await expect(errorTextEmail).toBeVisible(); // Проверям, что элемент виден
  await expect(errorTextEmail).toHaveText('Неверный e-mail'); // Проверяем текст валидационной ошибки

  //Ввод в поле "E-mail": заканчивается точкой
  await emailInput.fill('test@mail.ru.');
  await emailInput.blur(); // Триггер валидации
  await expect(errorTextEmail).toBeVisible(); // Проверям, что элемент виден
  await expect(errorTextEmail).toHaveText('Неверный e-mail'); // Проверяем текст валидационной ошибки

  //Ввод в поле "E-mail":  @@
  await emailInput.fill('te@st@mail.ru');
  await emailInput.blur(); // Триггер валидации
  await expect(errorTextEmail).toBeVisible(); // Проверям, что элемент виден
  await expect(errorTextEmail).toHaveText('Неверный e-mail'); // Проверяем текст валидационной ошибки

  //Ввод в поле "E-mail": оставить без имени
  await emailInput.fill('@mail.ru');
  await emailInput.blur(); // Триггер валидации
  await expect(errorTextEmail).toBeVisible(); // Проверям, что элемент виден
  await expect(errorTextEmail).toHaveText('Неверный e-mail'); // Проверяем текст валидационной ошибки

  //Ввод в поле "E-mail": спецсимволы
  await emailInput.fill('te(st@mail.ru');
  await emailInput.blur(); // Триггер валидации
  await expect(errorTextEmail).toBeVisible(); // Проверям, что элемент виден
  await expect(errorTextEmail).toHaveText('Неверный e-mail'); // Проверяем текст валидационной ошибки

  //Ввод в поле "E-mail"в a) 65 символов
  await emailInput.fill('fdbffdvfvdfvdfvdfvdfvdfvdfvdfvdfvjdfvhdfuidfvhufdhuihfdisdfsddfsd@mail.ru');
  await emailInput.blur(); // Триггер валидации
  await expect(errorTextEmail).toBeVisible(); // Проверям, что элемент виден
  await expect(errorTextEmail).toHaveText('Неверный e-mail'); // Проверяем текст валидационной ошибки

  //Ввод в поле "E-mail"в b) 64 символа
  await emailInput.fill('te(stdsdsd@mailfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdgfds.ru');
  await emailInput.blur(); // Триггер валидации
  await expect(errorTextEmail).toBeVisible(); // Проверям, что элемент виден
  await expect(errorTextEmail).toHaveText('Неверный e-mail'); // Проверяем текст валидационной ошибки

  //Ввод в поле "E-mail"в с) 1 символов
  await emailInput.fill('te4st@mail.r');
  await emailInput.blur(); // Триггер валидации
  await expect(errorTextEmail).toBeVisible(); // Проверям, что элемент виден
  await expect(errorTextEmail).toHaveText('Неверный e-mail'); // Проверяем текст валидационной ошибки

  //Ввод в поле "E-mail"в с) 7 символ
  await emailInput.fill('test@mail.rureref');
  await emailInput.blur(); // Триггер валидации
  await expect(errorTextEmail).toBeVisible(); // Проверям, что элемент виден
  await expect(errorTextEmail).toHaveText('Неверный e-mail'); // Проверяем текст валидационной ошибки

  //Ввод в поле "E-mail"в с) цифры
  await emailInput.fill('test@mail.ru4');
  await emailInput.blur(); // Триггер валидации
  await expect(errorTextEmail).toBeVisible(); // Проверям, что элемент виден
  await expect(errorTextEmail).toHaveText('Неверный e-mail'); // Проверяем текст валидационной ошибки
  



  // Определяем локаторы
  const messageInput = page.getByRole('textbox', { name: 'Опишите ваш IT-проект*' });
  const errorTextMessage = page.locator('#message_errorText'); 

  // Клик по полю (Опишите ваш IT-проект**)
  await page.getByRole('textbox', { name: 'Опишите ваш IT-проект*' }).click();

  //Поле "Опишите ваш ИТ- проект":  ввести 1 сим
  await messageInput.fill('1');
  await messageInput.blur(); // Триггер валидации
  await expect(errorTextMessage).toBeVisible(); // Проверям, что элемент виден
  await expect(errorTextMessage).toHaveText('Опишите ваш проект'); // Проверяем текст валидационной ошибки





  // Определяем локаторы
  const phoneInput = page.getByRole('textbox', { name: 'Номер телефoнa*' });
  const errorTextPhone = page.locator('#phone_errorText');  // Вот здесь объявляем локатор!

  // Клик по полю (Номер телефона)
  await phoneInput.click();


    // Ввод в поле "Номер телефона":  4 символа
  await phoneInput.fill('1234');
  await phoneInput.blur(); // Триггер валидации
  await expect(errorTextPhone).toBeVisible(); // Проверям, что элемент виден
  await expect(errorTextPhone).toHaveText('Неверный формат телефона'); // Проверяем текст валидационной ошибки




  // Поле оставить пустым
  await phoneInput.fill('+7'); // Вводим номер телефона
  await phoneInput.press('Backspace');  // Удаляем последний символ
  await phoneInput.fill('');
  await phoneInput.blur(); // Триггер валидации
  await expect(errorTextPhone).toBeVisible(); // Проверям, что элемент виден
  await expect(errorTextPhone).toHaveText('Укажите номер телефона'); // Проверяем текст валидационной ошибки
  

  
  

});