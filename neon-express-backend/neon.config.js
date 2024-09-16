module.exports = {
    functions: {
      api: {
        handler: 'server.handler',  // Path to your handler exported in server.js
        runtime: 'nodejs14.x',      // Node.js runtime version (adjust if needed)
        memorySize: 128,            // Memory allocated to the function (increase if necessary)
        timeout: 30,                // Timeout in seconds (adjust depending on your use case)
      },
    },
  };
  