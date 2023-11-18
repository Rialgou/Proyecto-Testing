const { Given, When, Then, After, Before } = require("@cucumber/cucumber");
const assert = require("assert");
const { Builder, By, Capabilities, until } = require("selenium-webdriver");

const capabilities = Capabilities.chrome();
capabilities.set("chromeOptions", { w3c: false });

const driver = new Builder().withCapabilities(capabilities).build();

Before(async () => {
  // Realizar acciones previas si es necesario
});

After(async () => {
  // Realizar acciones posteriores si es necesario
  // Cerrar el navegador
  //await driver.close();
});

// PASO: Dado que soy un administrador autenticado
Given(
  "soy un administrador autenticado",
  { timeout: 60 * 1000 },
  async function () {
    // Realizar la autenticación del administrador
    await driver.get("http://localhost:3000/login");
    const emailInput = await driver.findElement(By.name("email"));
    emailInput.sendKeys("richardgonzalez@gmail.com");
    const passwordInput = await driver.findElement(By.name("contrasena"));
    passwordInput.sendKeys("RichardGonzalez123");
    const loginButton = await driver.findElement(
      By.xpath("//button[text()='Iniciar sesión']")
    );
    await loginButton.click();
    // Asegurarse de estar en la página correcta después de la autenticación
    await driver.wait(until.urlIs("http://localhost:3000/administrador"), 5000);
  }
);

// PASO: Dado que accedo al reporte con ID 1
Given("accedo al reporte con ID {int}", async function (reportId) {
  // Acceder al reporte específico con el ID proporcionado
  const reportLink = await driver.findElement(
    By.linkText(`Ver Reporte ${reportId}`)
  );
  await reportLink.click();
});

// PASO: Cuando asigno el depurador "John Doe" al reporte
When("asigno el depurador {string} al reporte", async function (depuradorName) {
  // Seleccionar el depurador de la lista y asignarlo al reporte
  const asignarDepuradorButton = await driver.findElement(
    By.css('[data-testid="asignar-depurador-btn"]')
  );
  await asignarDepuradorButton.click();

  const depuradorSelector = await driver.findElement(
    By.xpath(`//label[contains(text(), '${depuradorName}')]/input`)
  );
  await depuradorSelector.click();

  const confirmarAsignacionButton = await driver.findElement(
    By.xpath("//button[text()='Confirmar Asignación']")
  );
  await confirmarAsignacionButton.click();
});

// PASO: Entonces debería ver la confirmación de asignación
Then("debería ver la confirmación de asignación", async function () {
  // Verificar que se muestra un mensaje de confirmación
  const confirmacionMessage = await driver.findElement(
    By.css('[data-testid="confirmacion-message"]')
  );
  await driver.wait(until.elementIsVisible(confirmacionMessage));
});

// PASO: Entonces la información del reporte debe reflejar la asignación
Then(
  "la información del reporte debe reflejar la asignación",
  async function () {
    // Verificar que la información del reporte refleje la asignación
    const depuradorInfo = await driver.findElement(
      By.css('[data-testid="depurador-info"]')
    );
    const assignedDepurador = await depuradorInfo.getText();

    // Puede verificar más detalles según la implementación específica
    // Por ejemplo, verificar que la información del reporte ahora muestre el depurador asignado
    assert.strictEqual(assignedDepurador, "Depurador: John Doe");
  }
);
