import { GraphQLSchema, GraphQLObjectType } from "graphql";

import rootQuery from "./modules/rootQuery";
import rootMutation from "./modules/rootMutation";

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      ...rootQuery
    }
  }),
  mutation: new GraphQLObjectType({
    name: "RootMutationType",
    fields: {
      ...rootMutation
    }
  })
});
