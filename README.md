This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
Global variables must be added before use (exemple theyr are in .env.sample filed):
- DB_HOST - write your dataBase link
- PORT - wite port when you want to start this project

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Docker

To simplify work with Docker, you can use the
[make](https://linuxhint.com/install-use-make-windows/) utility. To work with
the utility, a "Makefile" file is used in the root of the project, which
describes simplified commands that can be easily changed and added.

```bash
$ make build
# docker build -t internship-back:v0.01 .
```

```bash
$ make run
# docker run -p 3001:3001 -d --rm --name internship-back-cont --env-file ./.env -v logs:/app/data internship-back:v0.01
```

```bash
$ make stop
# docker stop internship-back-cont
```

If desired, you can use regular docker commands

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
