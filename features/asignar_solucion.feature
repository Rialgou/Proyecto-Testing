Feature: Asignar solución de bugs a un depurador

  // ESCENARIO
  Scenario: Asignar depurador a un reporte
    Given soy un administrador autenticado
    And accedo al reporte con ID 1
    When asigno el depurador "XXXX" al reporte
    Then debería ver la confirmación de asignación
    And la información del reporte debe reflejar la asignación