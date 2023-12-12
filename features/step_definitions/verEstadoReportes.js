const { Given, When, Then, After } = require("@cucumber/cucumber");
const { assert } = require("assert");
const { Builder, By, Capabilities, Key, until } = require("selenium-webdriver");

const capabilities = Capabilities.chrome();
capabilities.set("chromeOptions", { w3c: false });

const driver = new Builder().withCapabilities(capabilities).build();

let reportState;

Given(
  "soy un usuario autenticado en la página de mis reportes",
  { timeout: 60 * 1000 },
  async function () {
    // Nos ubicamos en la login screen e iniciamos sesion con las credenciales de un usuario
    await driver.get("http://localhost:3000");
    const emailInput = await driver.findElement(By.name("email"));
    emailInput.sendKeys("ceciliahernandez@gmail.com");
    const passwordInput = await driver.findElement(By.name("contrasena"));
    passwordInput.sendKeys("CeciliaHernandez123");
    const loginButton = await driver.findElement(
      By.xpath("//button[text()='Iniciar sesion']")
    );
    await loginButton.click();
  }
);

When(
  "selecciono el reporte de bug que envié",
  { timeout: 60 * 1000 },
  async function () {
    // Accedemos al primer hijo
    const element = await driver.wait(
      until.elementLocated(
        By.css(
          ".accordion .accordion-item .card .accordion-header .accordion-button"
        )
      ),
      10000 // tiempo de espera en milisegundos
    );
    await element.click();

    const body = await driver.wait(
      until.elementLocated(
        By.css(
          ".accordion .accordion-item .card .accordion-collapse .accordion-body span:nth-child(2)"
        )
      ),
      10000 // tiempo de espera en milisegundos
    );
    const present = await driver.wait(until.elementIsVisible(body));
    if (!present) assert.fail("No se pudo ver la información del bug enviado");
    reportState = body.getText();
  }
);

Then("debería ver el estado actual del reporte", async function () {
  if (!reportState) assert.fail("No se logro obtener el estado actual");
});
