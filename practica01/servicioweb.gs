// regresa de forma textual los parámetros leidos con get
  const doGet = (e = {}) => {
    const { parameter } = e;
    const { nombre = 'Chanchito', apellido = 'Feliz', tel = '534535', dir = 'london' } = parameter;
    const salida = `Hola ${nombre} ${apellido} ${tel} ${dir}`;
    return ContentService.createTextOutput(salida);
  };

// regresa de forma textual los parámetros leidos con post
  const doPost = (e = {}) => {
    const { parameter } = e;
    const { nombre = 'Chanchito', apellido = 'Feliz', tel = '534535', dir = 'london' } = parameter;
    const salida = `Hola ${nombre} ${apellido}  ${tel} ${dir}`;
    return ContentService.createTextOutput(salida);
  };