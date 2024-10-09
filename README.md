# desafio-calculo-impuestos

Este proyecto implementa un cálculo de impuestos utilizando dos clases principales: `Cliente` e `Impuesto`, desarrollado en JavaScript con Node.js. Los archivos JavaScript se transpilan usando Babel para compatibilidad con versiones anteriores de JavaScript.

## Estructura del Proyecto

El proyecto está compuesto por los siguientes archivos:

- `Cliente.js`: Define la clase `Cliente`, que recibe un objeto de tipo `Impuesto` y tiene un método para calcular el impuesto basado en el monto bruto anual y las deducciones.
- `Impuesto.js`: Define la clase `Impuesto`, que contiene dos propiedades: el monto bruto anual y las deducciones.
- `index.js`: Archivo principal que instancia las clases y ejecuta el cálculo del impuesto.

## Requisitos

- Node.js (versión 14 o superior)
- Babel (para transpilar el código)

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/mr-gantiva/desafio-calculo-impuestos
   cd proyecto-calculo-impuestos
   npm install
   npm run build
   node dist/index.js
   ```

## Ejemplo de salida

El cliente Juan tiene que pagar de impuesto 206850

## Scripts

npm run build: Transpila los archivos JavaScript de src/ a dist/ utilizando Babel.

## Configuración de Babel

El proyecto utiliza Babel para transpilar el código ES6 a versiones anteriores de JavaScript. El archivo de configuración de Babel (babel.config.json) está configurado con el siguiente preset:

```bash
{
    "presets": [
        [
            "@babel/env",
            {
                "targets": {
                    "edge": "17",
                    "firefox": "60",
                    "chrome": "67",
                    "safari": "11.1"
                },
                "useBuiltIns": "usage",
                "corejs": "3.6.4",
                "forceAllTransforms": true
            }
        ]
    ]
}
```

## Contribución

Si deseas contribuir a este proyecto, por favor abre un pull request o una issue.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.

### Notas:
- Asegúrate de que el comando de Babel esté correctamente configurado en tu `package.json` como lo has hecho, y que las rutas sean las adecuadas para tu estructura de archivos.
- Puedes personalizar el archivo `README.md` según tus necesidades específicas, como agregar más detalles en las secciones de configuración o ejemplos de uso.