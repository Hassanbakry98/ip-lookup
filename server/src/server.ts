import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import { schema } from "./schema";
import WhoisAPI from "./service/serviceAPI"

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());


async function startServer() {
  const server = new ApolloServer({
    schema,
    dataSources: () => {
      return {
        whoisAPI: new WhoisAPI()
      };
    }
  });
  
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });
}

startServer()

const httpServer = createServer(app);

httpServer.listen({ port: PORT }, (): void =>
  console.log(`🚀GraphQL-Server is running on http://localhost:3000/graphql`)
);