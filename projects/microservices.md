---
layout: layouts/project.njk
title: Migración a microservicios
description: "Rediseño de aplicación empresarial monolítica para adoptar un modelo basado en microservicios. Gestión de la comunicación distribuida y descentralizada con colas de mensajería y eventos."
image: 04.jpg
tags: project
permalink: microservicios.html
---

Las soluciones empresariales convencionales comprenden un conjunto de servicios integrados tradicionalmente diseñados como un *monolito* o aplicación única sin un gran nivel de especialización ni interfaces externas. Algunos hitos:

- Redefinición de los servicios y sus dominios fundamentales, con un modelo de datos orientado a la explotación por terceros.

- Diseño de interfaces de programación **REST** siguiendo el standard **OpenAPI**.

- Gestión de la capa de persistencia con servicios cloud garantizando la transaccionalidad y minimizando el **coste de operaciones**.

- Implementación de un modelo mixto de **eventos** y **colas de mensajería** para garantizar la escalabilidad y resiliencia del ecosistema.

- Aprovisionamiento automatizado mediante **Ansible** y **Helm**. Gestión del ciclo de vida de los microservicios en el cluster de **Kubernetes**.
