# Inventory Management System

## Overview

A full-stack Inventory Management System implementing FIFO (First In First Out) inventory valuation with Kafka-based event streaming.

---

## Technology Stack

- React
- Bootstrap
- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- Apache Kafka
- Docker

---

## Features

- Product Management
- Purchase Entry
- Sales Entry
- FIFO Cost Calculation
- Inventory Dashboard
- Inventory Analytics
- Transaction Ledger
- Kafka Producer
- Kafka Consumer

---

## Setup

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Kafka

```bash
docker compose up -d
```

---

## APIs

GET /api/dashboard

GET /api/inventory

GET /api/ledger

POST /api/purchases

POST /api/sales

---

## Login

Username

```
admin
```

Password

```
admin
```

---

## Author

Mallika