
module.exports = (context, req) => {
    console.log(req)
    context.log('JavaScript HTTP trigger function processed a request.')
    context.bindings.res = {
      body: `The date is ${new Date().toDateString()}<br />The time is ${new Date().toLocaleTimeString()}
   
  <p>Query Parameters:</p><pre>${JSON.stringify((req || {}).query, null, ' ')}</pre>`,
      headers: { 'content-type': 'text/html' }
    }
    context.done()
  }