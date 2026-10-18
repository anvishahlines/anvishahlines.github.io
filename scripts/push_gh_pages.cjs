const { execSync } = require('child_process');
const token = process.env.GITHUB_TOKEN;
if (!token) {
  console.error('GITHUB_TOKEN not found in environment');
  process.exit(1);
}
const remoteUrl = `https://anvishahlines:${token}@github.com/anvishahlines/anvishahlines.github.io.git`;
const gitPath = 'C:\\Users\\Trent\\AppData\\Local\\Programs\\PortableGit\\cmd\\git.exe';
const env = Object.assign({}, process.env, { GIT_TERMINAL_PROMPT: '0' });

console.log('Generating subtree split for docs directory...');
const splitCommit = execSync(`"${gitPath}" subtree split --prefix docs main`, {
  cwd: 'C:\\Users\\Trent\\anvi-portfolio',
  env
}).toString().trim();
console.log('Split commit:', splitCommit);

console.log('Force pushing subtree commit to gh-pages branch...');
execSync(`"${gitPath}" -c credential.helper= push "${remoteUrl}" ${splitCommit}:refs/heads/gh-pages --force`, {
  cwd: 'C:\\Users\\Trent\\anvi-portfolio',
  env,
  stdio: 'inherit'
});
console.log('Successfully updated gh-pages branch on GitHub!');
