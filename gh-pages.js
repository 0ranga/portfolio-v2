import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'master',
  repo: 'https://github.com/mercvre/mercvre.github.io.git',
  message: "Resized some thumbnails for better loading times",
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
