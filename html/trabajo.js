function formatearNombrePropio(cadena) {
    // Eliminar espacios en blanco al principio y al final
    cadena = cadena.trim();
    
    // Reemplazar tabuladores, retornos de carro y saltos de línea con espacios
    cadena = cadena.replace(/[\t\r\n]/g, ' ');
    
    // Reemplazar múltiples espacios consecutivos con un solo espacio
    cadena = cadena.replace(/\s+/g, ' ');
    
    // Capitalizar la primera letra de cada palabra
    // \bse utiliza para identificar el inicio o el final de una palabra.
    cadena = cadena.replace(/\b\w/g, (match) => match.toUpperCase());
    
    return cadena;
  }
  
  // Ejemplo de uso
  var cadenaEntrada = "  juan\tmanuel\n si tu te vuelves loca por mi y yo me vuelvo loco por ti (baby) entonces mami deja el novio que tu tienes, dile que tu no lo quieres que me amas ami que me prefieres amisi tu te vuelves loca por mi y yo me vuelvo loco por ti (baby) entonces mami deja el novio que tu tienes, dile que tu no lo quieres que me amas ami que me prefieres amisi tu te vuelves loca por mi y yo me vuelvo loco por ti (baby) entonces mami deja el novio que tu tienes, dile que tu no lo quieres que me amas ami que me prefieres amisi tu te vuelves loca por mi y yo me vuelvo loco por ti (baby) entonces mami deja el novio que tu tienes, dile que tu no lo quieres que me amas ami que me prefieres amisi tu te vuelves loca por mi y yo me vuelvo loco por ti (baby) entonces mami deja el novio que tu tienes, dile que tu no lo quieres que me amas ami que me prefieres amisi tu te vuelves loca por mi y yo me vuelvo loco por ti (baby) entonces mami deja el novio que tu tienes, dile que tu no lo quieres que me amas ami que me prefieres amisi tu te vuelves loca por mi y yo me vuelvo loco por ti (baby) entonces mami deja el novio que tu tienes, dile que tu no lo quieres que me amas ami que me prefieres amisi tu te vuelves loca por mi y yo me vuelvo loco por ti (baby) entonces mami deja el novio que tu tienes, dile que tu no lo quieres que me amas ami que me prefieres ami. \t";
  var cadenaFormateada = formatearNombrePropio(cadenaEntrada);
  console.log(cadenaFormateada);
  

















  



























  //Este código es una función llamada `formatearNombrePropio` que toma una cadena de texto como entrada y realiza varias operaciones para formatearla como un nombre propio.
  // El formato de nombre propio generalmente implica que la primera letra de cada palabra esté en mayúscula y que los espacios en blanco adicionales
  // se reduzcan a un solo espacio. Aquí está una explicación paso a paso de lo que hace la función:

//1. `cadena = cadena.trim();`: El método `trim()` se utiliza para eliminar los espacios en blanco al principio y al final de la cadena. Esto garantiza que no haya espacios
// en blanco no deseados antes o después del nombre.

//2. `cadena = cadena.replace(/[\t\r\n]/g, ' ');`: Esta línea de código utiliza una expresión regular y el método `replace()` para reemplazar todos los tabuladores (`\t`),
// retornos de carro (`\r`) y saltos de línea (`\n`) con espacios en blanco.

//3. `cadena = cadena.replace(/\s+/g, ' ');`: Otra vez, se utiliza una expresión regular para reemplazar múltiples espacios en blanco consecutivos
// con un solo espacio en blanco. Esto asegura que no haya más de un espacio entre palabras.

//4. `cadena = cadena.replace(/\b\w/g, (match) => match.toUpperCase());`: Aquí, se utiliza una expresión regular para buscar la primera letra de cada palabra
// (indicada por `\b\w`) y luego se utiliza una función de reemplazo que toma la coincidencia encontrada (la primera letra) y la convierte en mayúscula//