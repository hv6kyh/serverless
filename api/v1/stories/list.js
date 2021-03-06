// const AWS = require('aws-sdk');

// const dynamoDb = new AWS.DynamoDB.DocumentClient();
// console.log('process.env.tableName: ', process.env.tableName);
// const params = {
//   TableName: process.env.tableName,
// };

// module.exports.list = (event, context, callback) => {
//   // fetch all todos from the database
//   dynamoDb.scan(params, (error, result) => {
//     // handle potential errors
//     if (error) {
//       console.error(error);
//       callback(null, {
//         statusCode: error.statusCode || 501,
//         headers: { 'Content-Type': 'text/plain' },
//         body: 'Couldn\'t fetch the todos.',
//       });
//       return;
//     }

//     // create a response
//     const response = {
//       statusCode: 200,
//       body: JSON.stringify(result.Items),
//     };
//     callback(null, response);
//   });
// };

const list = (event, context, callback) => {
  const p = new Promise((resolve, reject) => {
    dynamoDb.scan(params, (error, result) => {
      if (error) {
        console.error(error);
        reject(error);
      }
      resolve(result.Items);
    });
  });
  callback(null, p);
}

// const list = (event) => {
//   const p = new Promise((resolve, reject) => {
//     dynamoDb.scan(params, (error, result) => {
//       if (error) {
//         console.error(error);
//         reject(error);
//       }
//       resolve(result.Items);
//     });
//   });
//   return p;
// }

export default list;
