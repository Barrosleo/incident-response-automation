const playbookExecutor = require('./playbookExecutor');
const alertSystem = require('./alertSystem');
const incidentReporter = require('./incidentReporter');

// Simulated alert object
const simulatedAlert = {
  id: 'ALERT-001',
  description: 'Suspicious activity detected on endpoint X.',
  timestamp: new Date().toISOString()
};

function start() {
  console.log('Orchestration Engine: Starting workflow...');
  
  // Simulate receiving an alert after a delay
  setTimeout(() => {
    console.log('Orchestration Engine: Alert triggered:', simulatedAlert);
    
    // Execute predefined response playbook
    const actionsTaken = playbookExecutor.execute(simulatedAlert);
    console.log('Orchestration Engine: Playbook executed. Actions taken:', actionsTaken);
    
    // Trigger notification(s)
    const notifications = alertSystem.sendNotification(simulatedAlert, actionsTaken);
    console.log('Orchestration Engine: Notifications sent:', notifications);
    
    // Generate incident report
    const report = incidentReporter.generate(simulatedAlert, actionsTaken, notifications);
    console.log('Orchestration Engine: Incident report generated.');
    
    // Optionally: Save the report to a file in /logs or /docs (omitted for brevity)
  }, 2000); // Simulated 2-second alert trigger delay
}

module.exports = { start };
