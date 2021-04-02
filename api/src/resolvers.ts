import axios from 'axios';

export const resolvers = {
  Query: {
    testMessage: () => 'Hello World to my change',
  },
  Mutation: {
    // uploadReceipt: async (_, { email }, { dataSources }) => {
    uploadReceipt: async () => {
      const apikey = process.env.TAGGUN_API_KEY;
      console.log('process', apikey)
      const resp = await axios.post('https://api.taggun.io/api/receipt/v1/simple/url', {
        url: "https://rembourser-receipts.s3.eu-west-2.amazonaws.com/himreceipt.jpeg",
        refresh: true,
        incognito: false,
        ipAddress: "32.4.2.223"
      }, {
        headers: {
          apikey,

        }
      })

      // console.log('res', resp)
      return 'Uploaded'
    },

    // uploadAvatar: async (_, { file }) => {
    //   const { createReadableStream, filename, mimetype, encoding } = await file

    //   return {
    //     filename,
    //     mimetype,
    //     encoding,
    //     uri: 'http://about:blank',
    //   };
    // }
  }
}