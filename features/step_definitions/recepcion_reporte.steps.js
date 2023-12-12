const { Given, When, Then } = require("@cucumber/cucumber");
const { By, until, Capabilities, Builder } = require("selenium-webdriver");
const assert = require("assert");

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set("chromeOptions", { w3c: false });
const driver = new Builder().withCapabilities(capabilities).build();

Given(
  "soy un administrador autenticado",
  { timeout: 60 * 1000 },
  async function () {
    await driver.get("http://localhost:3000/login");
    const emailInput = await driver.findElement(By.name("email"));
    emailInput.sendKeys("richardgonzalez@gmail.com");
    const passwordInput = await driver.findElement(By.name("contrasena"));
    passwordInput.sendKeys("RichardGonzalez123");
    const loginButton = await driver.findElement(
      By.xpath("//button[text()='Iniciar sesión']")
    );
    await loginButton.click();
    await driver.wait(until.urlIs("http://localhost:3000/administrador"), 5000);
  }
);

Given("accedo a la sección de {string}", async function (seccion) {
  const seccionLink = await driver.findElement(By.linkText(seccion));
  await seccionLink.click();
});

When("reviso la lista de reportes pendientes", async function () {
  const listaReportes = await driver.findElement(By.id("encabezado-list"));
  const items = await listaReportes.findElements(By.css(".item"));
  assert.ok(items.length > 0, "La lista de reportes pendientes está vacía");
});

Then("debería recibir el reporte de bug de un usuario", async function () {
  const ingresarButton = await driver.findElement(By.css(".ingresar"));
  await ingresarButton.click();

  const currentUrl = await driver.getCurrentUrl();
  assert.ok(
    currentUrl.includes("/reporte-detalle"),
    "No se redirigió a la página del reporte"
  );

  const asuntoTitulo = await driver.findElement(By.css(".titulo-asunto"));
  assert.ok(
    asuntoTitulo,
    "No se encontró el título del asunto en la página del reporte"
  );

  const comentariosSection = await driver.findElement(
    By.css(".seccion-comentarios")
  );
  assert.ok(
    comentariosSection,
    "No se encontró la sección de comentarios en la página del reporte"
  );
});
