
const handler = require('../handler');

test('correctly create post', () => {
  expect(handler.createPost({foo: 'bar'})).toStrictEqual({
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello from create post',
        input: {foo: 'bar'},
      },
      null,
      2
    ),
  });
});