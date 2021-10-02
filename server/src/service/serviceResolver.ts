import { ApolloError } from "apollo-server-express";

const ServiceResolvers = {
  Query: {
    getAllUsers: async (_: any, args: any) => {
      try {
        const mockUsers = [{ name: "xyz" }, { name: "abc" }];
        return mockUsers;
      } catch (error : any) {
        throw new ApolloError(error);
      }
    },
  },
};

export default ServiceResolvers;