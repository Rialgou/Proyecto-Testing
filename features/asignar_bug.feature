Feature: Asignar Bug
  Como administrador quiero asignar a un depurador de la lista de bugs que aún no estan asignados

  Scenario: Lista de bugs presenta bugs no asignados
    Given estoy en el panel de control del administrador
    When hago click en el botón "bugs pendientes" del menú lateral
    Then debería ver la lista con los bug no asignados
    When hago click en el botón de ingresar del primer bug
    Then debería ver la página del reporte específico
    When doy click en enviar reporte
    Then se debe mostrar una advertencia, pidiendo rellenar todos los campos