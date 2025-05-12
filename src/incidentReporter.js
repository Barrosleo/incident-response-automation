function generate(alert, actions, notifications) {
  const report = {
    alertId: alert.id,
    timestamp: new Date().toISOString(),
    alertDescription: alert.description,
    actionsTaken: actions,
    notificationsSent: notifications
  };
  return JSON.stringify(report, null, 2);
}

module.exports = { generate };
