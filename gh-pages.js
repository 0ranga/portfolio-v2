import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'master',
  repo: 'https://github.com/mercvre/mercvre.github.io.git',
  message: "Updated portfolio + corrected bug where headings and links in individual projects show the noise overlay",
  // Update to point to your repository
  // user: {
  //  name: 'mercvre', // update to use your name
  //  email: 'studiomercvre@outlook.com' // Update to use your email
  // },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);
