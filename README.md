# News-portal
A responsive News Portal built with React.js that integrates a live News API to fetch and display real-time news by category.

## Deployment on Vercel

1. Push your code to a GitHub repository.
2. Connect the repository to Vercel.
3. In Vercel dashboard, go to your project Settings > Environment Variables.
4. Add the following environment variable:
   - Name: `VITE_API_KEY`
   - Value: Your NewsAPI key (e.g., `3f9805e060d54fb59912a9542e988cd3`)
5. Deploy the project.

The app will fetch news from NewsAPI using the provided key.
