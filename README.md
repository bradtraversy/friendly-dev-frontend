# Friendly Dev Frontend Website

This is a portfolio and blog website built as part of the **"Modern React From The Beginning"** course. It is a **React Router v7 Framework** app that demonstrates modern React best practices.

<img src='/public/images/screen.png' alt='' />

It includes:

- A dynamic **Projects Page** with filtering, sorting, and pagination.
- A **Blog Section** powered by content from a **Strapi Headless CMS**.
- Fully responsive UI using **Tailwind CSS**.

The projects and blog posts are managed via a Strapi backend. The backend code is available in a separate repo: [Strapi Repo](https://github.com/bradtraversy/friendly-dev-backend)

---

## 🚀 Features

- React Router v7
- Fetching content from Strapi CMS
- Dynamic route-based pages
- Filtering and pagination for projects
- Blog post metadata loading
- Environment-based config with `.env`
- Deployed-API friendly

---

## 🛠️ Setup & Usage

### 1. Start or Deploy the Strapi API

Make sure your Strapi backend is running either locally (`http://localhost:1337`) or deployed (e.g., on Render, Railway, etc.)

### 2. Create a `.env` file

Create a `.env` file in the root and add your API base URL:

```
VITE_API_URL="http://localhost:1337/api"
VITE_STRAPI_URL="http://localhost:1337"
```

### 3. Install Dependencies

```bash
npm install
```

4. Run the App

```bash
npm run dev
```

## MIT License

MIT License

Copyright (c) 2025 Traversy Media

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in  
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE  
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN  
THE SOFTWARE.
