Feature: Recepción de Reporte de Bug por Administrador

  Como administrador
  Quiero poder recibir el reporte de bug de un usuario
  Para tener en cuenta la prioridad

  Background:
    Given soy un administrador autenticado

  Scenario: Administrador recibe un nuevo reporte de bug
    Given accedo a la sección de "Reportes Pendientes"
    When reviso la lista de reportes pendientes
    Then debería recibir el reporte de bug de un usuario
