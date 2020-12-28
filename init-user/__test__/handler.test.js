
const handler = require('../handler');

test('correctly create post', () => {
  expect(handler.initUser({foo: 'bar'})).toStrictEqual({
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'hello from init user',
        input: {foo: 'bar'},
      },
      null,
      2
    ),
  });
});