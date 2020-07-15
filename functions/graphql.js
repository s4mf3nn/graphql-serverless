module.exports.handler = (event, context, callback) => {
  const query = event.body;

  return graphql(schema, query)
    .then(res => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res)
      });
    }).catch(e => {
      callback(e);
    });
};