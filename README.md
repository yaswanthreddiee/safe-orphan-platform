🧩 Safe Orphan Platform – Team Workflow Guide

This is a group project.
We use GitHub for collaboration with a branch-based workflow.

main branch = stable code (only admin merges here)

Each member works on their own branch

Admin reviews and merges into main

📌 1. First Time Setup (For Every Team Member)
1️⃣ Clone the repository
git clone https://github.com/yaswanthreddiee/safe-orphan-platform.git
cd safe-orphan-platform

2️⃣ Create your own branch (replace with your name or feature)
git checkout -b your-name-feature


Example:

git checkout -b frontend-login

3️⃣ Check your current branch
git branch


You should see:

* your-name-feature
  main

📌 2. Daily Work Flow (VERY IMPORTANT)
🔹 Before you start work (ALWAYS do this)
git checkout main
git pull
git checkout your-name-feature
git merge main


This ensures your branch is up to date with main.

🔹 Do your coding work

Edit files

Add features

Fix bugs

Then:

git status
git add .
git commit -m "Describe what you did"


Example:

git commit -m "Added login page UI"

🔹 Push your branch to GitHub
git push origin your-name-feature

📌 3. How Admin (Project Lead) Works
🔹 Admin will:

Check your code on GitHub

Review changes

Merge your branch into main

🔹 After admin merges, everyone should update:
git checkout main
git pull

❌ IMPORTANT RULES

❌ Do NOT push directly to main

❌ Do NOT delete others’ code

❌ Do NOT commit broken code

✅ Always work on your own branch

✅ Always pull main before starting work

✅ Write clear commit messages

🧪 Useful Commands

Check branch:

git branch


Switch branch:

git checkout branch-name


See changes:

git status


Update main:

git checkout main
git pull

🏗️ Project Structure (Short)
backend/   -> Django + DRF backend
frontend/  -> React frontend

🧠 Team Policy

Admin = final decision on merging to main

ML, Backend, Frontend can be worked in parallel

Keep code clean and readable

Ask before changing core structure

🚀 Goal

Build a professional, scalable, AI-enabled social welfare platform with:

Django + DRF backend

React frontend

ML decision-support features

Clean teamwork using GitHub

✅ How to Add This README
Option 1: On GitHub

Open your repo

Click Add file → Create new file

Name: README.md

Paste this content

Commit

Option 2: From your Mac
touch README.md
# open it in VS Code or any editor, paste content
git add README.md
git commit -m "Add team workflow README"
git push
