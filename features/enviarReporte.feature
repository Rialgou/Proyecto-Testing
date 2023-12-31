Feature: Enviar un reporte de bug

  Scenario: Envío exitoso de un reporte de bug
    Given soy un usuario autenticado en la página de nuevo reporte
    When ingreso todos los detalles del reporte de bug válidos
    And hago clic en el botón "Enviar reporte"
    Then debería ver un mensaje de éxito
    And la lista de reportes debería contener el nuevo reporte

  Scenario: Envío de un reporte de bug con campos obligatorios en blanco
    Given soy un usuario autenticado en la página de nuevo reporte
    When dejo en blanco uno o más campos obligatorios del reporte de bug
    And hago clic en el botón "Enviar reporte"
    Then debería ver un mensaje de error indicando que todos los campos obligatorios deben completarse
