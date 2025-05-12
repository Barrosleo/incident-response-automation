function sendNotification(alert, actions) {
  // In a real app, use axios or nodemailer; here we simulate a notification.
  const message = `Alert ${alert.id}: ${alert.description} | Actions: ${actions.map(a => a.action).join(', ')}`;
  
  console.log('Alert System: Sending notification...');
  return [message];
}

module.exports = { sendNotification };
