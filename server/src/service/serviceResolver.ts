
const ServiceResolvers : any = {
  Query: {
    getIPInfo: async (_: any, args: any, { dataSources }) => {
        const res = await dataSources.whoisAPI.getIPInfo(args.address)
        return {
          createdDate: res.WhoisRecord?.createdDate || 'Not Available',
          updatedDate: res.WhoisRecord?.updatedDate || 'Not Available',
          expiresDate: res.WhoisRecord?.expiresDate || 'Not Available',
          organization: res.WhoisRecord?.registrant?.organization || 'Not Available',
          state: res.WhoisRecord?.registrant?.state || 'Not Available',
          country: res.WhoisRecord?.registrant?.country || 'Not Available'
        }
    }
  }
};

export default ServiceResolvers;