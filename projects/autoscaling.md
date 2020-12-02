---
layout: layouts/page.njk
title: Autoescalado
description: "Diseño y gestión operativa del autoescalado de aplicaciones web desplegadas en un cluster ECS de Amazon Web Services. Optimización del coste de infraestructura en un 50% con un incremento exponencial del volumen de usuarios provocado por la COVID 19."
image: 06.png
tags: project
permalink: autoescalado.html
---

Mediante el empleo de los servicios de monitorizacion y autoescalado de Amazon Web Services de una manera eficiente hemos conseguido garantizar el funcionamiento de una plataforma educativa con más de 5000 usuarios concurrentes a un coste muy reducido. Algunas de las acciones ejecutadas en la intervención fueron:

- **Dimensionamiento de los servicios** de base de datos relacional con un ajuste óptimo de los *pools* de conexiones.

- Gestión de los nodos EC2 mediante el proveedor de capacidad nativo del cluster de Amazon ECS garantizando unas **políticas de escalado y desescalado** armonizadas con las necesidades reales de los servicios.

- Identificación de picos y catalizadores de tráfico puntual mediante **estrategias de escalado incrementales**.

- Empleo adecuado del **caché** para evitar sobreutilización de los backends y bases de datos.

- Gestión adecuada de los filtros de entrada y los grupos objetivo de los **balanceadores de aplicación** con el objeto de minimizar el número de microservicios.

- **Aprovisionamiento dinámico** programado de los entornos de desarrollo y preproducción para minimizar costes.
