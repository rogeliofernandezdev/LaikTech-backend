# LaikTech Backend - Gestión de Operaciones y Márgenes

Este es el servicio backend para la gestión de reglas de precios, costos por color y márgenes operativos por planta, siguiendo los principios de **Clean Architecture**.

## 🚀 Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **TypeScript**: Superset de JavaScript que añade tipos estáticos.
- **GraphQL (Apollo Server)**: Protocolo de API para consultas y mutaciones flexibles.
- **Prisma ORM**: Herramienta de mapeo objeto-relacional para interactuar con la base de datos.
- **PostgreSQL**: Sistema de gestión de bases de datos relacionales (Supabase).
- **Express**: Framework web para Node.js.

## 🏗️ Arquitectura

El proyecto sigue **Clean Architecture**, dividido en las siguientes capas:

- **Domain**: Entidades de negocio y lógica core (Validación de márgenes < 5%).
- **Application**: Casos de uso (Create, Update, Get Pricing Rules, List Plants).
- **Infrastructure**: Implementación de repositorios (Prisma) y servidor.
- **Presentation**: Definiciones de tipos (Schema) y Resolvers de GraphQL.

## 🛠️ Configuración e Instalación

### 1. Requisitos Previos
- Node.js instalado (v18 o superior recomendado).
- Una instancia de PostgreSQL (configurada en `.env`).

### 2. Instalación de Dependencias
```bash
npm install
```

### 3. Configuración de Base de Datos
Asegúrate de tener el archivo `.env` configurado con la URL de tu base de datos:
```env
DATABASE_URL="postgresql://postgres:[PASSWORD]@db.qjvygvjocyfbvskdjhiu.supabase.co:5432/postgres"
```

Sincroniza el esquema de Prisma con la base de datos:
```bash
npx prisma db push
```

### 4. Ejecutar Seed (Datos Iniciales)
Para registrar las plantas (Perú, Chile, Colombia, México) y datos de prueba:
```bash
npm run seed
```

## 🏃 Cómo Ejecutar el Proyecto

### Modo Desarrollo (con recarga automática)
```bash
npm run dev
```

### Modo Producción
```bash
npm run build
npm start
```

El servidor estará disponible en: [http://localhost:4000/graphql](http://localhost:4000/graphql)

## 📡 Endpoints Principales (GraphQL)

### Consultas (Queries)
- `plants`: Lista todas las sedes disponibles para combos/dropdowns.
- `pricingRules(plantId: Int!)`: Lista las reglas de márgenes filtradas por planta (incluye alertas automáticas si el margen es < 5%).

### Mutaciones (Mutations)
- `createPricingRule(input: PricingRuleInput!)`: Crea una nueva configuración de márgenes.
- `updatePricingRule(id: Int!, input: UpdatePricingRuleInput!)`: Edita una configuración existente.

---
**Nota sobre validación:** El backend incluye una regla de negocio que genera automáticamente un objeto `alerts` en la respuesta si cualquier margen es estrictamente **menor al 5%**.
