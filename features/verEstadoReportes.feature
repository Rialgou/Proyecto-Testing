#   Como usuario
#   Quiero ver en qué estado se encuentra el reporte de bug que envié
#   Para saber su estado y seguimiento
Feature: Ver Estado del Reporte de Bug

  Scenario: Ver el estado de un reporte de bug
    Given soy un usuario autenticado en la página de mis reportes
    When selecciono el reporte de bug que envié
    Then debería ver el estado actual del reporte