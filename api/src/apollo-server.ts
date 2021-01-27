import { ApolloServer, Config } from 'apollo-server-lambda';
import { resolvers } from './resolvers';
import { typeDefs } from './type-defs';
import dbConfig from './database/config';
import Knex from 'knex';
import { Model } from 'objection';
const db = Knex(dbConfig['development']);

Model.knex(db);

const schema = `
    type User{
        name: String
    }
    type Query {
        user:User
    }
`

const config : Config = {
    typeDefs:schema,
    resolvers : {
        Query:{
            user:(parent,args,ctx)=>{
                return { name:"WOnder"}
            }
        }
    },
    // introspection: true,//these lines are required to use the gui 
    // playground: true,//   of playground

}

// const apolloServer = new ApolloServer({
//   resolvers,
//   typeDefs
// });

const apolloServer = new ApolloServer(config);

export const graphqlHandler = apolloServer.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});