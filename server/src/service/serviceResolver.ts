import { IResolvers } from "apollo-server";

const ServiceResolvers: IResolvers = {
  Query: {
    getIPInfo: async (_: any, args: any, { dataSources }) => {
        const res = await dataSources.whoisAPI.getIPInfo(args.address)
        console.log(res)
        return {createdDate: res.WhoisRecord.createdDate}
    }
  }
};

export default ServiceResolvers;