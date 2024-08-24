# Turborepo with TailwindCSS and ShadCN UI

This project is a Turborepo setup with Tailwind CSS and ShadCN UI for building modern, responsive, and accessible web applications.

## Getting Started

To set up this project locally, follow these steps:

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone <repository-url>
```

Replace `<repository-url>` with the actual URL of this repository.

### 2. Remove Git History

If you want to start fresh without maintaining a connection to the original repository, remove the existing Git history:

```bash
rm -rf .git
```

This will remove the `.git` directory and any history associated with it.

### 3. Install Dependencies

Next, install the necessary dependencies by running:

```bash
npm install
```

This will install all the packages required to run the project.

### 4. Start the Development Server

Finally, start the development server using the following command:

```bash
npm run dev --workspace start
```

This will start the development server for the project. You can then open your browser and navigate to `http://localhost:3000` to view your application.

## Project Structure

This project follows a monorepo structure using Turborepo. The key parts of the project are:

- **`/packages/tailwind-config`**: Contains the Tailwind CSS configuration.
- **`/apps/*`**: Individual applications or sites.
- **`/packages/*`**: Shared packages such as UI components, utilities, etc.

## Customization

You can customize the project to fit your needs by modifying the Tailwind CSS configuration, adding new components with ShadCN UI, or expanding the monorepo with additional packages and applications.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Happy coding!
```