import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";

dotenv.config();

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error(
    "A string de conexão do MongoDB não está definida nas variáveis de ambiente."
  );
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function storeClientInfo(clientInfo) {
  try {
    await client.connect();
    const database = client.db("InformacoesUser");
    const collection = database.collection("client_info");

    const result = await collection.insertOne(clientInfo);
    console.log(
      `Informações do cliente armazenadas com o id: ${result.insertedId}`
    );
  } catch (error) {
    console.error("Erro ao armazenar informações do cliente:", error);
  } finally {
    await client.close();
  }
}

export async function connectToDatabase() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Você se conectou com sucesso ao MongoDB!");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  } finally {
    await client.close();
  }
}

connectToDatabase().catch(console.dir);
