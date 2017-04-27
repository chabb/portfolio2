import React from 'react';

import style from './Footer.css';

class Footer extends React.Component {

  render() {
    const githubLink = 'https://github.com/chabb';
    const logos = [
      {
        url: './logos/react-logo.svg',
        href: 'https://facebook.github.io/react/',
        alt: 'ReactJS',
      },
      {
        url: './logos/postcss-logo.svg',
        href: 'http://postcss.org/',
        alt: 'PostCSS',
      },
      {
        url: './logos/css-modules-logo.svg',
        href: 'https://github.com/css-modules/css-modules',
        alt: 'CSS Modules',
      },
      {
        url: './logos/babel-logo.svg',
        href: 'https://babeljs.io/',
        alt: 'Babel',
      },
      {
        url: './logos/webpack-logo.svg',
        href: 'https://webpack.github.io/',
        alt: 'Webpack',
      },
      {
        url: './logos/atom-logo.svg',
        href: 'https://atom.io/',
        alt: 'Atom',
      },
    ]
    return (
      <footer className={style.root}>
        <div className={style.builtWith}>
          <p>
            Built with
            {
              logos.map(function(logo) {
                return <a href={logo.href} className={style.logoLink}>
                  {logo.alt}
                </a>
              })
            }
          </p>
        </div>
        <div className={style.githubLink}>
          <p>
            <a href={githubLink}>
              <svg width="17px" height="17px" viewBox="136 55 33 33" version="1.1">
                  <path d="M152.608,55.455 C143.614,55.455 136.32,62.748 136.32,71.745 C136.32,78.942 140.987,85.047 147.46,87.201 C148.275,87.351 148.572,86.848 148.572,86.416 C148.572,86.03 148.558,85.005 148.55,83.646 C144.019,84.63 143.063,81.462 143.063,81.462 C142.322,79.58 141.254,79.079 141.254,79.079 C139.775,78.069 141.366,78.089 141.366,78.089 C143.001,78.204 143.861,79.768 143.861,79.768 C145.314,82.257 147.674,81.538 148.602,81.121 C148.75,80.069 149.171,79.351 149.636,78.944 C146.019,78.533 142.216,77.135 142.216,70.893 C142.216,69.115 142.851,67.66 143.893,66.522 C143.725,66.11 143.166,64.453 144.053,62.211 C144.053,62.211 145.42,61.773 148.532,63.881 C149.831,63.519 151.225,63.339 152.61,63.332 C153.994,63.339 155.387,63.519 156.688,63.881 C159.798,61.773 161.163,62.211 161.163,62.211 C162.052,64.453 161.493,66.11 161.326,66.522 C162.37,67.66 163,69.115 163,70.893 C163,77.151 159.191,78.528 155.563,78.931 C156.147,79.434 156.668,80.428 156.668,81.948 C156.668,84.125 156.648,85.882 156.648,86.416 C156.648,86.852 156.942,87.359 157.768,87.2 C164.236,85.041 168.899,78.94 168.899,71.745 C168.899,62.748 161.605,55.455 152.608,55.455" id="Fill-3" stroke="none" fill="#151513" fillRule="evenodd"></path>
              </svg>
              GitHub
            </a>
            &nbsp;|&nbsp;
            Copyright &copy; 2017 Fran&ccedil;ois Chabbey
          </p>
        </div>
      </footer>
    );
  }

}

export default Footer;
