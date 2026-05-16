# careerCode 💼

A modern **job portal** built with React, Firebase, and Node.js — where job seekers apply to remote roles and recruiters manage listings, all in one place.

🔗 **Live Site:** [https://career-code-7eae1.web.app](https://career-code-7eae1.web.app)

---

## ✨ Features

### 👨‍💻 For Job Seekers
- Browse hot remote jobs by category
- View full job details (salary, requirements, responsibilities, deadline)
- Apply with LinkedIn, GitHub & resume URL
- Track all applications with real-time status (Pending → Interview → Hired)
- Delete applications directly from the dashboard

### 🏢 For Recruiters
- Post new job listings with full details
- View all posted jobs with applicant count
- Review applicants and update their status (Pending / Interview / Hired / Rejected)

### 🌐 General
- Google OAuth & Email/Password authentication (Firebase)
- Protected routes — only logged-in users can apply or post
- Light / Dark theme toggle (persisted in localStorage)
- Fully responsive — mobile, tablet, and desktop
- Animated UI with Framer Motion
- Real-time stats dashboard (live job count, companies, applications)

---

## 🛠️ Tech Stack

### Frontend
| Tech | Purpose |
|------|---------|
| [React 19](https://react.dev) | UI framework |
| [React Router v7](https://reactrouter.com) | Client-side routing |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling |
| [DaisyUI](https://daisyui.com) | UI components |
| [Axios](https://axios-http.com) | HTTP requests |
| [SweetAlert2](https://sweetalert2.github.io) | Alert dialogs |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library |
| [Lottie React](https://lottiereact.com) | Lottie animations |

### Backend
| Tech | Purpose |
|------|---------|
| [Node.js](https://nodejs.org) + [Express](https://expressjs.com) | REST API server |
| [MongoDB](https://www.mongodb.com) | Database |
| [Firebase Admin](https://firebase.google.com) | Auth verification / JWT |
| [JSON Web Token](https://jwt.io) | Secure route protection |

### Hosting
| Service | Usage |
|---------|-------|
| [Firebase Hosting](https://firebase.google.com/docs/hosting) | Frontend |
| [Vercel](https://vercel.com) | Backend API |

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18+`
- A Firebase project
- A running instance of the [backend server](https://career-code-server-blond.vercel.app)

### Installation

```bash
# Clone the repo
git clone https://github.com/mehedipolash/carrer-code-client.git

# Navigate into the project
cd carrer-code-client

# Install dependencies
npm install

# Start the dev server
npm run dev
```

### Environment Variables

Create a `.env.local` file in the root with your Firebase config:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/jobs` | Get all job listings |
| `GET` | `/jobs/:id` | Get single job details |
| `POST` | `/jobs` | Create a new job (recruiter) |
| `GET` | `/applications` | Get all applications |
| `POST` | `/applications` | Submit a job application |
| `DELETE` | `/applications/:id` | Delete an application |
| `PATCH` | `/applications/:id` | Update application status |
| `POST` | `/jwt` | Generate JWT token |

---

## 📄 Pages

| Route | Description | Protected |
|-------|-------------|-----------|
| `/` | Home — banner, categories, hot jobs, how it works | ❌ |
| `/jobs/:id` | Job details page | ❌ |
| `/jobApply/:id` | Apply for a job | ✅ |
| `/myApplications` | Applicant dashboard | ✅ |
| `/addJob` | Post a new job | ✅ |
| `/myPostedJobs` | Recruiter's job listings | ✅ |
| `/applications/:job_id` | View applicants for a job | ✅ |
| `/signin` | Sign in page | ❌ |
| `/register` | Register page | ❌ |

---

## 🎨 Theme

The app supports **dark and light modes** toggled from the navbar. The preference is saved in `localStorage` and applied via a `data-theme` attribute on `<html>`.

---

## 👤 Author

**Mehedi Hasan**

- GitHub: [@mehedipolash]([https://github.com/mehedipolash](https://github.com/mehedipolash/carrer-code-client))
- Live: [career-code-7eae1.web.app](https://career-code-7eae1.web.app)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
