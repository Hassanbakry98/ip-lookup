
const ServiceResolvers : any = {
  Query: {
    getIPInfo: async (_: any, args: any, { dataSources }) => {
        const res = await dataSources.whoisAPI.getIPInfo(args.address)
        return {createdDate: res.WhoisRecord.createdDate}
    }
  }
};

export default ServiceResolvers;