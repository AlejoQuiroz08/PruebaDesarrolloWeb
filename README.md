![image](https://github.com/AlejoQuiroz08/PruebaDesarrolloWeb/assets/150806786/33dcfb9d-b3ba-4694-9884-dacb6c4f244b)
            
                                                   𝘾𝙊𝙉𝙎𝙐𝙈𝙊 𝘿𝙀 𝘼𝙋𝙞 - 𝙋𝙧𝙪𝙚𝙗𝙖 𝙙𝙚 𝘿𝙚𝙨𝙖𝙧𝙧𝙤𝙡𝙡𝙤 𝙒𝙚𝙗

Aqui analizaremos en detalle las APIs RESTful y sus conceptos fundamentales, incluyendo HTTP, API, REST, JSON, cliente y servidor. Además, abordaremos los beneficios de utilizar este tipo de APIs en el desarrollo de software, tales como la estandarización, simplicidad, escalabilidad y estado sin estado. A medida que avancemos, profundizaremos en cada uno de estos aspectos para proporcionar una comprensión sólida de cómo las APIs RESTful pueden optimizar la comunicación entre sistemas y facilitar la integración de servicios en aplicaciones complejas.

𝐃𝐄𝐒𝐀𝐑𝐑𝐎𝐋𝐋𝐎 𝐃𝐄 𝐂𝐎𝐍𝐓𝐄𝐍𝐈𝐃𝐎𝐒

A continuación, se repasarán los conceptos principales para el consumo de una API, de modo que podamos hacer el request al servidor y utilizar los datos devueltos: 
HTTP (Hypertext Transfer Protocol): El protocolo estándar para la comunicación en la World Wide Web. Define los métodos de solicitud (GET, POST, PUT, DELETE, etc.) y cómo se transmiten los mensajes entre clientes y servidores.
API (Application Programming Interface): Un conjunto de reglas y definiciones que permite que diferentes aplicaciones se comuniquen entre sí. En el contexto de las APIs RESTful, una API expone funcionalidades de un sistema a otros sistemas a través de HTTP. REST (Representational State Transfer): Un estilo arquitectónico que define ciertos principios para el diseño de sistemas distribuidos: Utilización de recursos como entidades manejadas a través de la API. Identificación única de recursos mediante URIs (Uniform Resource Identifiers). Empleo de operaciones CRUD para manipular recursos utilizando los métodos HTTP correspondientes.
Mantenimiento de un estado sin estado, donde cada solicitud del cliente contiene toda la información necesaria para su procesamiento. JSON (JavaScript Object Notation): Un formato de intercambio de datos ligero y legible para humanos que se utiliza comúnmente en las APIs RESTful para representar la información enviada y recibida entre el cliente y el servidor. Cliente y Servidor: En el contexto de las APIs RESTful, el "cliente" es la aplicación que realiza las solicitudes a la API, mientras que el "servidor" es la aplicación que proporciona los recursos y maneja las solicitudes del cliente.

A continuación, el paso a paso de como consumimos una API de generación de memes aleatorios: 

Paso a paso de la elaboracion del codigo:
𝟏. 𝐒𝐞𝐩𝐚𝐫𝐚𝐜𝐢ó𝐧 𝐝𝐞 𝐜𝐨𝐧𝐜𝐞𝐫𝐧𝐬 (𝐒𝐞𝐩𝐚𝐫𝐚𝐜𝐢ó𝐧 𝐝𝐞 𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐞𝐬)

En el código, tenemos mezclado HTML, CSS y JavaScript en un solo archivo. Ocupamos separarlos en archivos independientes para facilitar la lectura y el mantenimiento. Así, podemos trabajar en cada parte del proyecto de manera más organizada.

Mejora: Crear archivos separados para HTML, CSS y JavaScript.

𝟐. 𝐔𝐬𝐨 𝐝𝐞 𝐯𝐚𝐫𝐢𝐚𝐛𝐥𝐞𝐬 𝐲 𝐜𝐨𝐧𝐬𝐭𝐚𝐧𝐭𝐞𝐬

En el código, utilizamos cadenas literales y URLs hardcodeadas. Ocupamos definir variables y constantes para facilitar la lectura y el mantenimiento. De esta manera, podemos cambiar fácilmente las URLs o cadenas literales sin tener que buscarlas en todo el código.

Mejora: Definir variables y constantes para las URLs y cadenas literales.

𝟑. 𝐔𝐬𝐨 𝐝𝐞 𝐟𝐮𝐧𝐜𝐢𝐨𝐧𝐞𝐬 𝐲 𝐦ó𝐝𝐮𝐥𝐨𝐬

En el código JavaScript, tenemos un bloque grande y complejo. Ocupamos dividirlo en funciones y módulos para facilitar la lectura y el mantenimiento. De esta manera, podemos reutilizar código y hacerlo más escalable.

Mejora: Crear funciones y módulos para la lógica de negocio y la interacción con el servidor.

𝟒. 𝐔𝐬𝐨 𝐝𝐞 𝐞𝐯𝐞𝐧𝐭𝐨𝐬 𝐲 𝐥𝐢𝐬𝐭𝐞𝐧𝐞𝐫𝐬

En el código, utilizamos el evento submit del formulario para enviar los datos al servidor. Ocupamos utilizar eventos y listeners para mejorar la flexibilidad y escalabilidad. De esta manera, podemos manejar diferentes eventos y acciones de manera más organizada.

Mejora: Utilizar eventos y listeners para la interacción con el formulario y el servidor.

𝟓. 𝐔𝐬𝐨 𝐝𝐞 𝐚𝐬𝐲𝐧𝐜/𝐚𝐰𝐚𝐢𝐭 𝐲 𝐭𝐫𝐲-𝐜𝐚𝐭𝐜𝐡

En el código, utilizamos async/await y try-catch para manejar errores. Ocupamos utilizar bloques try-catch más específicos para manejar errores específicos. De esta manera, podemos manejar errores de manera más precisa y evitar errores genéricos.

Mejora: Utilizar bloques try-catch más específicos para manejar errores específicos.

𝟔. 𝐔𝐬𝐨 𝐝𝐞 𝐇𝐓𝐌𝐋 𝐬𝐞𝐦á𝐧𝐭𝐢𝐜𝐨

En el código, utilizamos etiquetas HTML genéricas como <div> y <label>. Ocupamos utilizar etiquetas HTML semánticas para mejorar la accesibilidad y la estructura del documento. De esta manera, podemos mejorar la experiencia del usuario y la SEO.

Mejora: Utilizar etiquetas HTML semánticas como <header>, <main>, <section>, <article>, etc.

𝟕. 𝐔𝐬𝐨 𝐝𝐞 𝐂𝐒𝐒 𝐩𝐚𝐫𝐚 𝐞𝐬𝐭𝐢𝐥𝐨𝐬

En el código, utilizamos estilos inline en las etiquetas HTML. Ocupamos utilizar CSS externo o interno para separar la presentación de la estructura del documento. De esta manera, podemos mejorar la apariencia y la experiencia del usuario.

Mejora: Crear un archivo CSS externo o interno para definir estilos.


𝓒ó𝓭𝓲𝓰𝓸:

![image](https://github.com/AlejoQuiroz08/PruebaDesarrolloWeb/assets/150806786/0aadda43-fa01-499e-a40d-558d7371f77c)


![image](https://github.com/AlejoQuiroz08/PruebaDesarrolloWeb/assets/150806786/bed65720-1971-4810-923f-f4cba44b57e1)

𝓡𝓮𝓷𝓭𝓲𝓶𝓲𝓮𝓷𝓽𝓸:

𝐔𝐭𝐢𝐥𝐢𝐳𝐚 𝐡𝐞𝐫𝐫𝐚𝐦𝐢𝐞𝐧𝐭𝐚𝐬 𝐝𝐞 𝐩𝐫𝐮𝐞𝐛𝐚𝐬 𝐝𝐞 𝐫𝐞𝐧𝐝𝐢𝐦𝐢𝐞𝐧𝐭𝐨:

Existen varias herramientas disponibles para realizar pruebas de rendimiento, como Google Lighthouse, WebPageTest, GTmetrix, entre otras. Utiliza estas herramientas para medir el rendimiento de tu aplicación y obtener recomendaciones de optimización.

𝐒𝐢𝐦𝐮𝐥𝐚 𝐜𝐚𝐫𝐠𝐚𝐬 𝐝𝐞 𝐮𝐬𝐮𝐚𝐫𝐢𝐨𝐬:

Utiliza herramientas como Apache JMeter o LoadRunner para simular cargas de usuarios y ver cómo se comporta tu aplicación bajo diferentes niveles de tráfico.

𝐎𝐩𝐭𝐢𝐦𝐢𝐳𝐚 𝐥𝐚𝐬 𝐢𝐦á𝐠𝐞𝐧𝐞𝐬:

Las imágenes suelen ser uno de los componentes que más pesan en una página web. Optimiza las imágenes utilizando herramientas como TinyPNG o ImageOptim.

𝐌𝐢𝐧𝐢𝐟𝐢𝐜𝐚 𝐥𝐨𝐬 𝐚𝐫𝐜𝐡𝐢𝐯𝐨𝐬:

Minifica los archivos CSS, JavaScript y HTML para reducir su tamaño y mejorar la velocidad de carga.

𝐔𝐭𝐢𝐥𝐢𝐳𝐚 𝐜𝐚𝐜𝐡é:

Utiliza caché para almacenar en memoria los archivos estáticos y reducir el tiempo de carga de la página.

𝐎𝐩𝐭𝐢𝐦𝐢𝐳𝐚 𝐥𝐚𝐬 𝐜𝐨𝐧𝐬𝐮𝐥𝐭𝐚𝐬 𝐚 𝐥𝐚 𝐛𝐚𝐬𝐞 𝐝𝐞 𝐝𝐚𝐭𝐨𝐬: 

Optimiza las consultas a la base de datos para reducir el tiempo de respuesta del servidor. Utiliza herramientas como Explain para analizar las consultas y encontrar posibles optimizaciones.

𝐌𝐨𝐧𝐢𝐭𝐨𝐫𝐢𝐳𝐚 𝐞𝐥 𝐫𝐞𝐧𝐝𝐢𝐦𝐢𝐞𝐧𝐭𝐨:

Monitoriza el rendimiento de tu aplicación utilizando herramientas como New Relic o AppDynamics para identificar y solucionar problemas de rendimiento en tiempo real.
 
𝓟𝓻𝓾𝓮𝓫𝓪𝓼 𝓭𝓮 𝓡𝓮𝓷𝓭𝓲𝓶𝓲𝓮𝓷𝓽𝓸:


![image](https://github.com/AlejoQuiroz08/PruebaDesarrolloWeb/assets/150806786/1864f4e1-868d-47e9-b885-2124920c855a)



![image](https://github.com/AlejoQuiroz08/PruebaDesarrolloWeb/assets/150806786/905e7bcd-3ef8-4156-a7ab-208dcbc50442)



![image](https://github.com/AlejoQuiroz08/PruebaDesarrolloWeb/assets/150806786/c7ac1741-2e0b-4edd-b64b-d9c5e0e99aba)


![image](https://github.com/AlejoQuiroz08/PruebaDesarrolloWeb/assets/150806786/d1fbf430-ff72-4068-93fb-bdf2e18a00f8)



![image](https://github.com/AlejoQuiroz08/PruebaDesarrolloWeb/assets/150806786/8b3834e9-e15c-4ff2-8b60-3d9ecf6d27c1)

 

![image](https://github.com/AlejoQuiroz08/PruebaDesarrolloWeb/assets/150806786/af2ed2a8-d354-4a01-a65a-b73ba6a46006)


![image](https://github.com/AlejoQuiroz08/PruebaDesarrolloWeb/assets/150806786/1307a4b2-8bd3-4859-a248-9865cc07ace4)
 


![image](https://github.com/AlejoQuiroz08/PruebaDesarrolloWeb/assets/150806786/f45b24f5-4761-4ee1-b162-6efdc8a0a5c2)
 

𝓡𝓮𝓼𝓾𝓵𝓽𝓪𝓭𝓸:


![image](https://github.com/AlejoQuiroz08/PruebaDesarrolloWeb/assets/150806786/cb6cbca7-4105-4fe5-8c7a-f54c4fcf2c91)

![image](https://github.com/AlejoQuiroz08/PruebaDesarrolloWeb/assets/150806786/14cd9cdc-8e9f-4926-82d6-986e586d3536)

![image](https://github.com/AlejoQuiroz08/PruebaDesarrolloWeb/assets/150806786/8863e008-4bb9-4bb3-9402-1913b2b4787c)


![c7b18ca226a9b6d495aec3febcc1b72f](https://github.com/AlejoQuiroz08/PruebaDesarrolloWeb/assets/150806786/276f50c4-85a5-4103-b0c0-0eb4133cd629)

