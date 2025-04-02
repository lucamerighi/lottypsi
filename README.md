# Carlotta Piergiovanni - Psychologist Website

A professional, mobile-responsive website for psychologist Carlotta Piergiovanni, built with vanilla HTML, CSS, and TypeScript.

## Features

- Clean, professional design with a teal color scheme
- Fully responsive layout for mobile, tablet, and desktop devices
- Interactive navigation with smooth scrolling
- Sections for About, Services, Therapeutic Approach, and Contact
- Functional contact form (front-end only)
- Subtle animations and interactive elements
- Built with vanilla web technologies (no frameworks)

## Technologies Used

- HTML5
- CSS3 (with CSS custom properties/variables)
- TypeScript
- No frameworks or libraries

## Getting Started

### Prerequisites

- Node.js (for TypeScript compilation)
- npm

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/[your-username]/lottypsi.git
   cd lottypsi
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Compile TypeScript:
   ```
   npm run build
   ```

### Development

- To compile TypeScript files in watch mode:
  ```
  npm run watch
  ```

- Simply open `index.html` in your browser to view the site.

### Deployment to GitHub Pages

1. Update the `homepage` property in `package.json` with your GitHub username:
   ```json
   "homepage": "https://[your-github-username].github.io/lottypsi"
   ```

2. Deploy to GitHub Pages:
   ```
   npm run deploy
   ```

## Project Structure

- `index.html` - Main HTML file
- `src/css/styles.css` - All CSS styles
- `src/js/main.ts` - TypeScript source
- `dist/js/main.js` - Compiled JavaScript (generated)

## Customization

- **Colors**: Edit the CSS variables in the `:root` selector in `src/css/styles.css`
- **Content**: Update the text and images in `index.html`
- **Contact Form**: The form currently only has front-end functionality. For actual form submissions, you'll need to add backend functionality or use a form service.

## License

[MIT](LICENSE)

## Acknowledgements

- SVG icons from Google Material Icons system 