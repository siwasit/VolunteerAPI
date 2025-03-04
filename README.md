# VolunteerAPI

VolunteerAPI is a Node.js-based API designed to manage volunteer-related data using MongoDB as the database.

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/en)
- [MongoDB](https://www.mongodb.com/)
- A package manager like `npm`, `yarn`, `pnpm`, or `bun`

## Project Setup

To initialize the project, run:
```bash
npm init
```

## Installation

Install the required dependencies:
```bash
npm install
```

## Environment Variables

To connect to the database, ensure you have a `.env` file in the root directory with the following:
```
MONGO_URI=your_mongodb_connection_string
```

**Note:** The database access credentials are not included in this repository. Please contact the project owner if you need access.

## Running the Development Server

To start the development server, use one of the following commands:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Once the server is running, open your browser and navigate to:
[http://localhost:5000](http://localhost:5000)

