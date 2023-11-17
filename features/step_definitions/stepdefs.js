const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key, until } = require('selenium-webdriver');

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();


Given('estoy en el panel de control del administrador', async () => {
  await driver.get('http://localhost:3000');
  const emailInput = driver.findElement(By.name('email'));
  emailInput.sendKeys('marcelopena@gmail.com');
  const passwordInput = driver.findElement(By.name('contrasena'));
  passwordInput.sendKeys('MarceloPeña123');
  const loginButton = driver.findElement(By.name('ingresar'));
  loginButton.click();
});

When('hago click en el botón bugs pendientes del menú lateral', async () => {
  const actions = driver.actions({ async: true });
  // actions.move({x:, y:})
});

Then('debería ver la lista con los bug no asignados', () => {

});

When('hago click en el botón de ingresar del primer bug', () => {

});

Then('debería ver la página del reporte específico', () => {

});

When('doy click en enviar reporte', () => {

});

Then('se debe mostrar una advertencia, pidiendo rellenar todos los campos', () => {

});