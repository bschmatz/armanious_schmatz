/**
 * PM2 Ecosystem File
 * -----------------
 *
 * What is PM2?
 * - A daemon process manager for Node.js applications
 * - Keeps our app running even if it crashes
 * - Handles logs and process monitoring
 *
 * How to use:
 * - Start app:   pm2 start ecosystem.config.js
 * - View logs:   pm2 logs
 * - Stop app:    pm2 stop react-tasklist
 * - Restart app: pm2 restart react-tasklist
 */

export default {
  apps: [
    {
      // Name that shows up in PM2 dashboard and logs
      name: "tasklist",

      // Path to app's entry point
      script: "npm",

      args: "run preview",
      cwd: "/var/www/tasklist",

      // Number of instances to launch (1 is fine for education/development)
      // Increase this for production to utilize multiple CPU cores
      instances: 1,

      // Basic environment setup
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },

      // Auto restart if app crashes
      autorestart: true,

      // Basic logging
      error_file: "logs/error.log",
      out_file: "logs/output.log",
    },
  ],
};
