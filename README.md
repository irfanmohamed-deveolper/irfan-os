# IRFAN OS

Personal digital OS for Mohamed Irfan — demo implementation.


Quick start:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm start
```

Environment variables: see `.env.example`.

Deployment:
- Vercel: push to GitHub and import the repo into Vercel. Set environment variables in project settings.
- Netlify: Netlify supports Next.js; use the included `netlify.toml`. Set `NODE_VERSION` and env vars in Netlify site settings.

Demo mode:
If `OPENAI_API_KEY` is not set the AI assistant runs in demo mode and uses a local knowledge base. The contact form logs submissions to the server console in demo mode.

