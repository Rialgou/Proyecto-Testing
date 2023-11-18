Feature: Reportar solucionado
  Como depurador, quiero poder informar de que el bug se ha solucionado, para que el administrador lo revise

  Scenario: Lista de reportes en proceso de solucion no esta vacia
    Given estoy en el panel de control del depurador
    When hago click en el botón bugs en proceso del menú lateral
    Then debería ver la lista con los bug en proceso
    When hago click en el primer reporte de la lista y en su botón de enviar reporte final
    Then se debe mostrar una advertencia, pidiendo dar detalles del avance.
