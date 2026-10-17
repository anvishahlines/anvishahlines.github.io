const { execSync } = require('child_process');
const path = require('path');

const nodeDir = 'C:\\Program Files\\nodejs';
const npmCli = path.join(nodeDir, 'node_modules', 'npm', 'bin', 'npm-cli.js');
const env = Object.assign({}, process.env, {
  PATH: nodeDir + ';' + (process.env.PATH || '')
});

console.log('Building portfolio...');
try {
  execSync(`"${path.join(nodeDir, 'node.exe')}" "${npmCli}" run build`, {
    cwd: 'C:\\Users\\Trent\\anvi-portfolio',
    env,
    stdio: 'inherit'
  });
  console.log('Build finished successfully!');
} catch (err) {
  console.error('Build failed:', err.message);
  process.exit(1);
}
