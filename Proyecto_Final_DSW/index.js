const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./controllers/userController');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const startServer = async () => {
  const app = express();
  app.use(cors());

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Conectado a MongoDB');
  } catch (err) {
    console.error('❌ Error conectando a MongoDB:', err.message);
  }

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server corriendo en http://localhost:${PORT}${server.graphqlPath}`);
  });
};

startServer();
