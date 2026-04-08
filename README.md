# Hunted Jobs

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen.svg)](https://huntedjobs.vercel.app/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](#)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=flat&logo=vite&logoColor=FFD62E)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](#)

A lightweight, modern React job board application that allows users to browse, search, and filter remote job listings with ease.

**[View Live Demo](https://huntedjobs.vercel.app/)**

## Features

- **Search & Filter:** Easily find jobs by keyword or use the horizontally scrollable category pills.
- **Skeleton Loading:** Smooth UI experience with skeleton loaders while fetching job data.
- **Responsive Design:** Fully responsive and styled with Tailwind CSS for mobile and desktop viewing.
- **Custom Hooks:** Clean data fetching logic separated into a reusable `useFetch` hook.

## Tech Stack

- **Framework:** React + Vite
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Deployment:** Vercel

## Project Structure

```text
src/
├── assets/              # Static images and icons
├── components/
│   ├── CategoryFilter.jsx # Horizontal scrollable category pills
│   ├── JobCard.jsx        # Individual job listing card
│   ├── JobList.jsx        # Renders list of JobCards
│   ├── JobSkeleton.jsx    # Loading skeleton for job cards
│   └── Search.jsx         # Search input component
├── constants/
│   └── constant.js        # Job categories and static data
├── hooks/
│   └── useFetch.js        # Custom hook for data fetching
├── App.jsx              # Main application root
└── main.jsx             # Entry point
```
