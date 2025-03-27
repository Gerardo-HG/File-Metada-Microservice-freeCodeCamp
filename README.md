# 📄 File Metadata Microservice

Este es un proyecto Full Stack en JavaScript que consiste en un microservicio para analizar archivos subidos por el usuario. Forma parte de los proyectos de certificación de FreeCodeCamp.

## 🚀 Descripción

Esta aplicación permite al usuario subir un archivo y devuelve un objeto JSON con la siguiente información del archivo:

- **Nombre** del archivo.
- **Tipo** MIME del archivo.
- **Tamaño** en bytes.

Puedes ver un ejemplo funcional de la aplicación aquí: [FreeCodeCamp File Metadata Microservice](https://file-metadata-microservice.freecodecamp.rocks)

## 🛠️ Tecnologías Utilizadas

- Node.js
- Express.js
- Multer (para la gestión de archivos)
- CORS
- dotenv

## 📂 Endpoints

### GET /

Retorna la página principal con el formulario para subir archivos.

### POST /api/fileanalyse

Recibe un archivo y responde con un objeto JSON con los datos del archivo.

#### Ejemplo de Respuesta

```json
{
  "name": "my-image.png",
  "type": "image/png",
  "size": 12053
}
```

## ▶️ Instrucciones para Ejecutar

1. Clona este repositorio.
2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env` y define el puerto si deseas:

```bash
PORT=3000
```

4. Ejecuta la aplicación:

```bash
npm start
```

5. Abre en tu navegador:

```
http://localhost:3000
```

---

**Desarrollado por Gerardo 👨🏻‍💻**
