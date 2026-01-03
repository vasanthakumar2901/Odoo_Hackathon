# ENJOY THE WORLD - Travel Adventure Platform

A full-stack web application for planning and managing travel adventures. Users can register, login, search tourist plans, create new trips, and view their profile.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- npm
- Modern web browser

### Backend Setup & Run

1. Open **PowerShell** and navigate to the Backend folder:
```powershell
cd "C:\Users\Raja\Desktop\OdooXsns\Backend"
```

2. Install dependencies:
```powershell
npm install
```

3. Start the backend server:
```powershell
npm start
```

You should see:
```
🌍 ENJOY THE WORLD Backend API running on http://localhost:3000
📍 POST /api/destinations - Create new trip
📍 GET /api/destinations - Get all trips
📍 GET /api/destinations?search=place - Search trips
```

**Keep this terminal running** while using the application.

### Frontend Setup & Run

1. Open a **second PowerShell** window

2. Navigate to the main folder:
```powershell
cd "C:\Users\Raja\Desktop\OdooXsns"
```

3. Start a simple HTTP server (use one of these):

**Option A: Using Python 3.x:**
```powershell
python -m http.server 8000
```

**Option B: Using Node.js (npx):**
```powershell
npx http-server
```

**Option C: Using Live Server (if you have it):**
```powershell
npx live-server
```

4. Open your browser and navigate to:
```
http://localhost:8000
```

## 📋 User Flow

### 1. **Login/Registration**
- First-time users: Click "Create Account" on login page
- Fill signup form with:
  - Name (First & Last)
  - Email
  - Password (min 6 chars)
  - Phone, City, Country
  - Accept Terms & Conditions
- After signup, you're auto-logged in → redirects to Home

### 2. **Home Page (index.html)**
- View your trips and user-submitted trips from backend
- **Profile**: Top-right shows your name → click to view profile
- **Search Bar**: Search trips by location, name, or activity
- **Filters**: Filter by type (Hiking, Wildlife, Camping, Water Sports)
- **"Plan New Expedition"** button → Navigate to My Trip page

### 3. **Profile Page (profile.html)**
- View account details
- See seasonal travel suggestions for the selected month
- Navigate months to see different recommendations
- Trip form on left side (for creating trips from profile)

### 4. **My Trip Page (mytrip.html)**
- Create a new adventure/trip
- Select destination, start date, end date
- Submit form → Trip saved to backend
- Success message → Redirects to Home
- Your new trip now appears in home page search results

### 5. **Profile Link**
- Click user avatar/name in top-right to view profile page
- Shows logged-in user's information

## 🔐 Authentication

- **localStorage** stores user data (email, name, trips)
- Auto-redirects to login if not authenticated
- Logged-in users bypass login page

## 🗄️ Backend API

### Endpoints

#### POST /api/destinations
Create a new trip
```json
{
  "name": "User Name - Destination",
  "location": "Paris, France",
  "startDate": "2026-01-15",
  "endDate": "2026-01-22",
  "createdBy": "user@example.com"
}
```

#### GET /api/destinations
Get all trips
```
http://localhost:3000/api/destinations
```

#### GET /api/destinations?search=query
Search trips by location/name
```
http://localhost:3000/api/destinations?search=paris
```

#### GET /api/destinations/:id
Get single trip by ID

#### PUT /api/destinations/:id
Update a trip

#### DELETE /api/destinations/:id
Delete a trip

## 🎨 Features

✅ **User Authentication** - Registration, login, auto-login after signup
✅ **Profile Management** - View user info with avatar and name
✅ **Trip Planning** - Create, search, and filter adventures
✅ **Seasonal Suggestions** - Month-based travel recommendations
✅ **Backend Integration** - All trips synced with backend API
✅ **Search Functionality** - Search across locations and activities
✅ **Responsive Design** - Works on desktop and mobile browsers

## 📁 Project Structure

```
OdooXsns/
├── index.html          # Home/Dashboard page
├── login.html          # Login page
├── signup.html         # Registration page
├── profile.html        # User profile page
├── mytrip.html         # Trip creation page
├── README.md           # This file
├── Backend/
│   ├── server.js       # Express backend
│   ├── package.json    # Dependencies
│   └── package-lock.json
└── Odoo_Hackathon/     # Legacy files
    ├── index.html
    ├── script.js
    └── style.css
```

## 💾 Data Storage

- **Frontend**: User data stored in `localStorage`
- **Backend**: Trips stored in memory (clears on server restart)
- For production, add a database (MongoDB, PostgreSQL, etc.)

## 🛠️ Troubleshooting

### Backend not connecting?
- Ensure backend is running on `http://localhost:3000`
- Check firewall/antivirus isn't blocking port 3000
- Try `npm install cors` if CORS errors occur

### Pages not loading?
- Check HTTP server is running (should see index at `http://localhost:8000`)
- Clear browser cache: Press `Ctrl+Shift+Del`

### Trips not saving?
- Backend server must be running
- Check browser console (F12) for errors
- Verify API calls in Network tab

## 📝 Test Credentials

Since no accounts exist initially, create one:
1. Go to `http://localhost:8000`
2. Click "Create Account"
3. Fill signup form
4. Auto-logged in → Dashboard

## 🚢 Next Steps

- Add database (MongoDB Atlas)
- Deploy backend (Heroku, Replit, AWS)
- Add Google/Facebook OAuth
- Mobile app version
- Payment integration for premium features

---

**Enjoy planning your next adventure! 🌍✈️**
