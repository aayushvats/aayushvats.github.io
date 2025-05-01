# Shubham's Next Portfolio

A modern, responsive portfolio website built with Next.js 13, TypeScript, Tailwind CSS, and Framer Motion.


## Directory Structure

```
├── app/                   
│   ├── about/             
│   ├── work/              
│   └── page.tsx           
├── components/            
│   ├── ui/              
│   ├── work/            
│   ├── home/            
│   └── layout/          
├── data/                
│   ├── about.ts         
│   ├── education.ts    
│   ├── experience.ts   
│   └── skills.ts       
├── lib/                
└── public/             
```

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/shubhamessier/next-portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Key Technologies

- **Next.js**
- **TypeScript**:
- **Tailwind CSS**
- **Framer Motion**
- **Shadcn UI**
- **Lucide Icons**

### Project Configuration

- `next.config.js`: Next.js configuration
- `tailwind.config.ts`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration
- `package.json`: Project dependencies and scripts

### Components

The project follows a modular component architecture:

- **Layout Components**: Base layout structure
- **UI Components**: Reusable UI elements
- **Page Components**: Page-specific components
- **Feature Components**: Feature-specific implementations

### Data Management

Data is stored in TypeScript files under the `data` directory:

- `about.ts`: About page content
- `education.ts`: Education history
- `experience.ts`: Work experience
- `skills.ts`: Skills and technologies

## Building for Production

1. Create a production build:

```bash
npm run build
# or
yarn build
```

2. Start the production server:

```bash
npm start
# or
yarn start
```

## Performance Optimization

- Image optimization with Next.js Image component
- Component-level code splitting
- Static site generation for better performance
- Optimized fonts and icons
- Minimal runtime JavaScript

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
