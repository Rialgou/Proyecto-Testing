const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key, until } = require('selenium-webdriver');
const fsp = require('fs').promises

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();

/////////////////////////////////////////////////////////////////////

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
  const button = await driver.wait(until.elementLocated(By.id('radio-0')), 10000);
  button.click();
  const cerrarPanel = driver.findElement(By.className('btn-close'));
  cerrarPanel.click();
});

Then('debería ver la lista con los bug no asignados', async () => {
  const lista = await driver.wait(until.elementLocated(By.className('lista-container')), 10000);
  const listaVisible = await lista.isDisplayed();
  if (listaVisible == false) {
    assert.fail('Lista de reportes no visible');
  }
});

When('hago click en el botón de ingresar del primer bug', async () => {
  const button = await driver.wait(until.elementLocated(By.id('probar-0')), 10000);
  button.click();
});

Then('debería ver la página del reporte específico', async () => {
  await driver.wait(until.urlContains('cXasuGhc6bTlINXWt902'), 10000);
  const url = await driver.getCurrentUrl();
  if (!url.includes('cXasuGhc6bTlINXWt902')) {
    assert.fail('No estamos en la pagina del reporte seleccionado');
  }
});

When('doy click en enviar reporte', async () => {
  const button = await driver.wait(until.elementLocated(By.name('enviar-reporte')), 10000);
  button.click();
});

Then('se debe mostrar una advertencia, pidiendo rellenar todos los campos', async () => {
  const alerta = await driver.wait(until.elementLocated(By.id('contained-modal-title-vcenter')), 10000);
  const alertaPresente = await alerta.isDisplayed();
  if (!alertaPresente) {
    assert.fail('No se presento alerta al ingresar reporte sin depurador asignado');
  }
});

/////////////////////////////////////////////////////////////////////


Given('estoy en el panel de control del depurador', async () => {
  await driver.get('http://localhost:3000');
  const emailInput = driver.findElement(By.name('email'));
  emailInput.sendKeys('ignacioarcic@gmail.com');
  const passwordInput = driver.findElement(By.name('contrasena'));
  passwordInput.sendKeys('IgnacioArcic123');
  const loginButton = driver.findElement(By.name('ingresar'));
  loginButton.click();
});

When('hago click en el botón bugs en proceso del menú lateral', async () => {
  const button = await driver.wait(until.elementLocated(By.id('radio-0')), 10000);
  button.click();
  const cerrarPanel = driver.findElement(By.className('btn-close'));
  cerrarPanel.click();
});

Then('debería ver la lista con los bug en proceso', async () => {
  const lista = await driver.wait(until.elementLocated(By.className('acordeon-bugs-proceso')), 10000);
  setTimeout(async () => {
    const listaVisible = await lista.isDisplayed();
    if (listaVisible == false) {
      assert.fail('Lista de reportes no visible');
    }
  }, 4000);
});

When('hago click en el primer reporte de la lista y en su botón de enviar reporte final', async () => {
  const reporte = await driver.wait(until.elementLocated(By.id('reporte-pendiente-0')), 10000);
  reporte.click();
  const button = await driver.wait(until.elementLocated(By.name('enviar-reporte-final')), 10000);
  button.click();
});

Then('se debe mostrar una advertencia, pidiendo dar detalles del avance.', async () => {
  const alerta = await driver.wait(until.elementLocated(By.className('modal-basic')), 10000);
  const alertaPresente = await alerta.isDisplayed();
  if (!alertaPresente) {
    assert.fail('No se presento alerta al ingresar reporte sin detalles entregados');
  }
  await driver.close();
});
