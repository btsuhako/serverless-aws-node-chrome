import CDP from 'chrome-remote-interface'

export default async function hello (event, context, callback) {

const URL = 'https://www.google.com';

  // connect to endpoint
  CDP(async (client) => {
    const {Page, Runtime} = client;
    // enable events then start!
    try {
      await Page.enable();
      console.log(`Opening ${URL}`)
      await Page.navigate({url: URL});
      console.log('Waiting for initial page to load...');
      await Page.loadEventFired();
      // await Runtime.evaluate({
      //     expression: ``
      // });
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }

    callback(null, 'finished');
  }).on('error', (err) => {
      console.error(err);
      callback(err);
  });

}
