const { Given, When, Then, After,Before } = require('@cucumber/cucumber');
const {assert} = require('assert');
const { Builder,By,Capabilities,Key,WebDriver,until } = require('selenium-webdriver');
const {faker} = require('@faker-js/faker');

const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions',{"w3c":false})

const driver = new Builder().withCapabilities(capabilities).build();

const newTitle = faker.internet.domainName();
const newDescription =faker.music.songName();

After(function(){
  //driver.close();
})
Given('soy un usuario autenticado en la página de nuevo reporte',{timeout:60 * 1000}, async function () {
  // Nos ubicamos en la login screen e iniciamos sesion con las credenciales de un usuario
  await driver.get('http://localhost:3000');
  const emailInput = await driver.findElement(By.name('email'));
  emailInput.sendKeys('ceciliahernandez@gmail.com');
  const passwordInput = await driver.findElement(By.name('contrasena'));
  passwordInput.sendKeys('CeciliaHernandez123');
  const loginButton = await driver.findElement(By.xpath("//button[text()='Iniciar sesion']"));
  await loginButton.click();
  // Agregamos 
  const newReport = await driver.wait(until.elementLocated(By.name('nuevo-reporte')));
  await newReport.click();
});

When('ingreso todos los detalles del reporte de bug válidos', async function () {
  const selectProject = await driver.findElement(By.xpath("//button[text()='Seleccionar proyecto']"));
  await selectProject.click();
  const project = await driver.wait(until.elementLocated(By.xpath("//button[text()='EduQuest']")));
  await project.click();
  await selectProject.click();
  const bugTitleSelector = await driver.findElement(By.xpath("//button[text()='Título del Bug']"));
  await bugTitleSelector.click();
  const bugTitle = await driver.wait(until.elementLocated(By.css('[data-testid="title-test"]')));
  bugTitle.sendKeys(newTitle);
  const bugDescriptionSelector = await driver.findElement(By.xpath("//button[text()='Descripción del Bug']"));
  await bugDescriptionSelector.click();
  const bugDescription = await driver.wait(until.elementLocated(By.css('[data-testid="description-test"]')));
  await driver.wait(until.elementIsVisible(bugDescription)); 
  await bugDescription.sendKeys(newDescription);
  await bugDescriptionSelector.click();
});

When('hago clic en el botón "Enviar reporte"', async function () {
  const sendBugReport = await driver.findElement(By.xpath("//button[text()='Enviar reporte']"));
  await driver.executeScript("arguments[0].click();", sendBugReport);
});

Then('debería ver un mensaje de éxito', async function () {
  // Espera a que el modal de éxito sea visible
  const successModal = await driver.wait(until.elementLocated(By.css('[data-testid="success-modal"]')));
  await driver.wait(until.elementIsVisible(successModal));
  // Encuentra el botón de cerrar dentro del modal
  const closeButton = await successModal.findElement(By.xpath('//button[text()="Cerrar"]'));
  // Verifica que el modal esté presente
  const isModalVisible = await successModal.isDisplayed();
  if(!isModalVisible) assert.fail("No se mostro un mensaje de envio exitoso")
  await closeButton.click();

});

Then('la lista de reportes debería contener el nuevo reporte',async function () {
  const element = await driver.wait(
    until.elementLocated(By.css('.accordion .accordion-item .card .accordion-header .accordion-button div .bug-info span:last-child')),
    10000 // tiempo de espera en milisegundos
  );

  const text = await element.getText();
  const title = text.split(': ')[1].trim();
  
  //console.log('Título del primer elemento:',title);
  if(title !== newTitle) assert.fail("No se agrego el reporte con éxito")
});


