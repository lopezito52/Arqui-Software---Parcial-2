# PoC Microservicios – Monolito vs Microservicios

Este repositorio contiene la **prueba de concepto (PoC)** para mostrar cómo un sistema monolítico puede modularizarse en **microservicios**.  
Incluye:
- Un sistema monolítico.
- Dos microservicios separados (Users y Products).
- Una colección de Postman para probar los endpoints.

---

## Introducción a Microservicios

Los **microservicios** son un estilo arquitectónico donde una aplicación se divide en pequeños servicios independientes que se comunican mediante APIs.  
Vienen de la evolución de:
- Arquitectura **Monolítica** → **SOA** → **Microservicios**.
- Se alinean con prácticas modernas como **DevOps** y despliegues en la nube.

---

## Comparativa Monolítico vs Microservicios

| Característica        | Monolítico                               | Microservicios                           |
|-----------------------|------------------------------------------|------------------------------------------|
| Despliegue            | Una sola aplicación                      | Servicios independientes                |
| Escalabilidad         | Vertical                                 | Horizontal por servicio                 |
| Acoplamiento          | Alto (todo en un solo bloque)            | Bajo (cada servicio aislado)            |
| Stack tecnológico     | Único                                    | Diferente por servicio                  |
| Tolerancia a fallos   | Un fallo afecta todo                     | Fallos aislados en cada servicio        |

---

## 📂 Estructura del proyecto

```
poc-microservices/
│
├─ README.md
│
├─ monolith/
│   ├─ package.json
│   └─ monolith.js
│
├─ users-service/
│   ├─ package.json
│   └─ users-service.js
│
├─ products-service/
│   ├─ package.json
│   └─ products-service.js
│
└─ postman-collection/
    └─ microservices-demo.postman_collection.json
```

---

## Cómo ejecutar el proyecto

### Ejecutar el monolito
```bash
cd monolith
npm install
npm start
# Corre en http://localhost:3000
```

Endpoints disponibles:
- `GET http://localhost:3000/users`
- `GET http://localhost:3000/products`

### Ejecutar los microservicios

#### Users Service
```bash
cd users-service
npm install
npm start
# Corre en http://localhost:3001
```

#### Products Service
```bash
cd ../products-service
npm install
npm start
# Corre en http://localhost:3002
```

Endpoints disponibles:
- `GET http://localhost:3001/users`
- `POST http://localhost:3001/users`
- `GET http://localhost:3002/products`
- `POST http://localhost:3002/products`

---

## Probar con Postman

En la carpeta **postman-collection** encontrarás un archivo `.json` con la colección Postman:
```
postman-collection/microservices-demo.postman_collection.json
```

1. Importa el archivo en Postman.
2. Verás dos carpetas:
   - **Users Service**
   - **Products Service**
3. Envía requests (GET, POST, PUT, DELETE) y observa las respuestas JSON en vivo.

---

## Ejemplo de Requests en Postman

| Servicio         | Método | Endpoint                     | Descripción            |
|-----------------|--------|------------------------------|------------------------|
| Monolito         | GET    | /users                      | Listar usuarios        |
| Monolito         | GET    | /products                   | Listar productos       |
| Users Service    | POST   | /users                      | Crear usuario nuevo    |
| Products Service | POST   | /products                   | Crear producto nuevo   |

---

## Kubernetes (Referencia)

Aunque en esta PoC **no usamos Kubernetes**, es importante saber que esta herramienta sirve para **orquestar microservicios** en clústeres.  
Permite escalar, actualizar y balancear carga de manera automática en producción.

---

## Presentación

- **Presentación**
   [Ver presentación en Canva](https://www.canva.com/design/DAG0TTUvWKs/XB2USHTrOmSxV7KVn3_MOw/edit?utm_content=DAG0TTUvWKs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)


---

## Conclusiones / Aprendizajes

- Un **monolito** concentra todo en una sola aplicación.
- **Microservicios** separan funcionalidades, permitiendo escalar y desplegar de manera independiente.
- Postman es ideal para **demostrar APIs sin frontend**.
- Con herramientas como **Docker** o **Kubernetes** se pueden administrar y escalar estos servicios profesionalmente.

---

**Autores**:  
*Gabriela Fuentes, Samuel López, Juan Parrado*  
