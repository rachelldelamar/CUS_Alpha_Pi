# Chi Upsilon Sigma — Alpha Pi Chapter Website

Official website for the **Alpha Pi Chapter** of Chi Upsilon Sigma National Latin Sorority, Inc.

---

## 🗂️ Project Structure
```
CUS Alpha Pi/
├── frontend/
│   ├── index.html          # Main website file
│   ├── css/
│   │   └── styles.css      # All styling
│   ├── js/
│   │   ├── main.js         # Navigation, animations, interest form
│   │   └── events.js       # Fetches events from backend
│   └── images/             # Photos and assets
├── backend/
│   ├── server.js           # Express server
│   ├── routes/
│   │   ├── events.js       # Events API endpoints
│   │   └── interest.js     # Interest form endpoints
│   ├── models/
│   │   ├── Event.js        # Event database model
│   │   └── Interest.js     # Interest form database model
│   └── .env                # Environment variables (never shared)
├── README.md
└── .gitignore
```

---

## 🛠️ Tech Stack

**Frontend**
- HTML5, CSS3, Vanilla JavaScript
- Google Fonts (Oswald + Raleway)
- Hosted on GitHub Pages

**Backend**
- Node.js + Express
- MongoDB Atlas (database)
- Nodemailer (email notifications)
- Hosted on Render.com

---

## 🚀 Running Locally

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Git

### 1. Clone the repo
```bash
git clone https://github.com/rachelldelamar/CUS_Alpha_Pi.git
cd CUS_Alpha_Pi
```

### 2. Set up the backend
```bash
cd backend
npm install
```

### 3. Create your .env file
```bash
touch .env
```

Add these variables to your `.env`:
```
PORT=5000
MONGODB_URI=your_mongodb_uri_here
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
RECIPIENT_EMAIL=your_email@gmail.com
```

### 4. Start the backend
```bash
node server.js
```

You should see:
```
🚀 Server running on port 5000
✅ Connected to MongoDB
```

### 5. Open the frontend
- Open VS Code
- Right click `frontend/index.html`
- Click **Open with Live Server**

---

## 🌐 Live Site
**Frontend:** https://rachelldelamar.github.io/CUS_Alpha_Pi

**Backend API:** https://cus-alpha-pi-backend.onrender.com

---

## 📡 API Endpoints

### Events
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/events` | Get all events |
| POST | `/api/events` | Add a new event |
| DELETE | `/api/events/:id` | Delete an event |

### Interest Form
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/interest` | Submit interest form |
| GET | `/api/interest` | Get all submissions |

---

## ➕ Adding Events

To add an event to the database run this in your terminal:
```bash
curl -X POST https://cus-alpha-pi-backend.onrender.com/api/events \
-H "Content-Type: application/json" \
-d '{
  "name": "Event Name",
  "date": "2026-04-01",
  "time": "7:00 PM",
  "location": "Location Here",
  "tag": "Rush"
}'
```

Tags can be: `Rush`, `Social`, or `Philanthropy`

---

## 📸 Adding Gallery Photos

1. Add your photo to `frontend/images/`
2. Open `frontend/index.html`
3. Find the gallery section
4. Replace a placeholder with:
```html
<div class="gallery-item">
  <img src="images/yourphoto.jpg" alt="Chapter Photo" 
  style="width:100%;height:100%;object-fit:cover;" />
  <div class="gallery-overlay"><span>View</span></div>
</div>
```

---

## 👩‍💻 Making Changes

After any edit, push to GitHub:
```bash
git add .
git commit -m "describe your change"
git push
```

---

## 📬 Contact
- Email: ----
- Instagram: ---

---

*Made with 🌹 by Rachell De Lamar*
