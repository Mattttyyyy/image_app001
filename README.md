
```markdown
# Skadi Image App

A simple React application for displaying and managing images, built with Vite, TypeScript, Tailwind CSS, and Material-UI (MUI).

## Features

- Fetches and caches 100 images from Lorem Picsum API. (Improvised Feature)
- Displays images in a grid layout using MUI's ImageList component. (Improvised Feature)
- Allows adding random images from the cached list. (Required)
- Allows removing random images from the displayed list. (Required)
- Copy image URL to clipboard with a toast notification. (Improvised Feature)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Node.js](https://nodejs.org/) (for local development)

## Local Development Setup

1. Clone the repository:

    ```sh
    git clone https://github.com/mattttyyyy/image-app001.git
    cd image-app001
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Start the development server:

    ```sh
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:5173/skadi-image-app01`. (Can change depending on the build setup)

## Docker Setup

### Building and Running the Docker Container

1. Build the Docker image:

    ```sh
    docker build -t image-app001 .
    ```

2. Run the Docker container:

    ```sh
    docker run -p 8070:8070 image-app001
    ```

3. Open your browser and navigate to `http://localhost:8070/skadi-image-app01/`.

### Using Docker Compose (Optional)

1. Create a `docker-compose.yml` file in the root of your project directory with the following content:

    ```yaml
    version: '3.8'
    services:
      app:
        build: .
        ports:
          - '8070:8070'
        environment:
          - NODE_ENV=production
    ```

2. Build and start the container:

    ```sh
    docker-compose up --build
    ```

3. Stop the container:

    ```sh
    docker-compose down
    ```

## Project Structure

```
image-app001/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .eslintrc.cjs
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run preview`: Previews the production build.
- `npm run lint`: Lints the codebase.

## Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Material-UI (MUI)](https://mui.com/)
- [Lorem Picsum API](https://picsum.photos/)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

- Mattttyyyy ([@Mattttyyyy](https://github.com/Mattttyyyy))

```

Thank you for reading me, created with love~~ mwah <3 

