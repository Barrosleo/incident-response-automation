require('dotenv').config();
const orchestrationEngine = require('./orchestrationEngine');

// Start the incident response workflow.
orchestrationEngine.start();
