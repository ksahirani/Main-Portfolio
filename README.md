# Kenon's Portfolio Website

A modern, professional portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Motion animations.

---

## 🚀 Getting Started

### Prerequisites

Before you begin, make sure you have:

- **Node.js 18 or higher** - [Download here](https://nodejs.org/)
- **A code editor** - [VS Code recommended](https://code.visualstudio.com/)

To check if Node.js is installed, open your terminal and run:
```bash
node --version
```
You should see something like `v18.x.x` or higher.

---

## 📦 Installation (Step by Step)

### Step 1: Extract the project

Extract the `kenon-portfolio.zip` file to a location on your computer (e.g., your Desktop or Documents folder).

---

### Step 2: Open your terminal

**Windows:**
- Press `Win + R`, type `cmd`, and press Enter
- Or search for "Command Prompt" or "PowerShell"

**Mac:**
- Press `Cmd + Space`, type "Terminal", and press Enter

**VS Code:**
- Open VS Code → File → Open Folder → Select `kenon-portfolio`
- Then press `` Ctrl + ` `` to open the integrated terminal

---

### Step 3: Navigate to the project folder

In your terminal, navigate to where you extracted the project:

```bash
cd path/to/kenon-portfolio
```

**Example paths:**
```bash
# Windows (if on Desktop)
cd C:\Users\YourName\Desktop\kenon-portfolio

# Mac (if on Desktop)
cd ~/Desktop/kenon-portfolio
```

---

### Step 4: Install dependencies

Run this command and wait for it to complete:

```bash
npm install
```

**What to expect:**
- You'll see a progress bar
- It may take 1-3 minutes
- When done, you'll see a new `node_modules` folder in your project

**If you see warnings:** That's normal! As long as you don't see red "error" messages, you're good.

---

### Step 5: Start the development server

```bash
npm run dev
```

**What to expect:**
```
▲ Next.js 15.x.x
- Local:        http://localhost:3000
- Environments: .env.local

✓ Starting...
✓ Ready in 2.3s
```

---

### Step 6: View your portfolio

Open your web browser (Chrome, Firefox, Edge, etc.) and go to:

```
http://localhost:3000
```

🎉 **Your portfolio is now running!**

---

### Step 7: Stop the server (when done)

Go back to your terminal and press:

```
Ctrl + C
```

Type `Y` if asked to confirm, then press Enter.

---

## ✏️ How to Customize

### Editing your information

1. Open the project in VS Code
2. Navigate to `src/app/page.tsx`
3. Find and update:
   - Your name
   - Your bio/description
   - Your email address
   - Your GitHub and LinkedIn URLs
   - Project descriptions and links

### Changing colors

1. Open `src/app/globals.css`
2. Look for the `:root` section with color variables
3. Modify the hex color codes

---

## 🌐 Deploying to the Internet

### Option 1: Vercel (Recommended - Free)

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Push your code to a GitHub repository
3. Click "New Project" on Vercel
4. Import your GitHub repository
5. Click "Deploy"

Your site will be live at `your-project.vercel.app`

### Option 2: Build for static hosting

```bash
npm run build
```

The `out` folder will contain static files you can upload to any hosting service.

---

## 📁 Project Structure

```
kenon-portfolio/
├── src/
│   └── app/
│       ├── globals.css    # Styles and colors
│       ├── layout.tsx     # Page layout and fonts
│       └── page.tsx       # Main portfolio content
├── public/                # Static files (images, etc.)
├── package.json           # Dependencies
└── README.md              # This file
```

---

## 🛠️ Useful Commands

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Check for code issues |

---

## ❓ Troubleshooting

### "npm is not recognized"
Node.js isn't installed or not in your PATH. Reinstall Node.js from [nodejs.org](https://nodejs.org/).

### "Port 3000 is already in use"
Another app is using that port. Either:
- Close the other app, or
- Run: `npm run dev -- -p 3001` (uses port 3001 instead)

### "Module not found" errors
Run `npm install` again to make sure all dependencies are installed.

### Changes not showing
- Make sure you saved the file
- Try refreshing the browser with `Ctrl + Shift + R` (hard refresh)
- Restart the dev server

---

## 📚 Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first styling
- **Motion** - Smooth animations
- **Lucide React** - Beautiful icons

---

## 📄 License

Feel free to use and modify this template for your own portfolio!
