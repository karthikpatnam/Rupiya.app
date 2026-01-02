# 🌱 rupiya.app

**India's Climate-Positive Agriculture Platform**

rupiya.app is a comprehensive agricultural technology platform empowering 50,000+ farmers across 500,000 hectares with residue-free farming, carbon credit generation, and complete financial inclusivity.

## 🎯 Mission

Transform Indian agriculture into a climate-positive, financially inclusive ecosystem through technology-driven solutions and partnerships.

## ✨ Key Features

### For Farmers
- 🛰️ **Satellite Soil Testing** - AI-powered soil analysis from space
- 📊 **Crop Monitoring** - Real-time satellite tracking and traceability
- 👨‍🌾 **Agronomical Advisory** - Expert guidance through software and specialists
- 🌿 **35 Residue-Free Inputs** - Certified agricultural inputs
- 🍃 **Carbon Credits** - Earn ₹800 per carbon credit through regenerative agriculture
- 🛡️ **Parametric Insurance** - Coverage for weather and wildlife damage
- 💳 **Farm Credit Support** - Easy access to financial assistance
- 🚚 **Buy-Back Guarantee** - Direct purchase from farm gate

### For Stakeholders
- **FPOs** - Training programs, carbon revenue, supply chain access
- **Buyers** - Quality traceability, certifications, consistent procurement
- **Investors** - Impact metrics, growth potential, ESG alignment

## 🏗️ Technology Stack

### Frontend
- **React** - UI framework
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **Lucide React** - Icons
- **Framer Motion** - Animations
- **React Query** - Data fetching & state management
- **React Router** - Navigation

### Backend (Base44 Platform)
- Built-in authentication
- Entity management (database)
- Integration SDK
- Pre-configured API client

### Additional Libraries
- `date-fns` - Date formatting
- `recharts` - Data visualization
- `react-hook-form` - Form handling
- `react-markdown` - Markdown rendering

## 📁 Project Structure

rupiya-app/ ├── entities/ # Data models (JSON schemas) │ └── [Entity].json # Define your data structure │ ├── pages/ # Main application pages (FLAT structure) │ ├── Home.js # Landing page with hero, services, CTA │ ├── ForFarmers.js # Farmer-focused solutions │ ├── ForFPOs.js # FPO solutions │ ├── ForBuyers.js # Buyer solutions │ ├── ForInvestors.js # Investor information │ ├── ResidueFree.js # Residue-free farming details │ └── CarbonCredits.js # Carbon credit program info │ ├── components/ # Reusable components (CAN have subfolders) │ └── ui/ # shadcn/ui components │ ├── Layout.js # App layout with header & footer └── globals.css # Global styles (optional)


## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- Base44 account (for backend services)

### Development Setup

1. **Clone and Navigate**
   ```bash
   cd your-rupiya-app
Install Dependencies

npm install
Start Development Server

npm run dev
Access the App Open http://localhost:3000 in your browser

🔑 Key Pages
Home (pages/Home.js)
Hero section with platform overview
7 integrated services showcase
Carbon credits highlight section
Stakeholder solution cards
Financial inclusivity preview
Call-to-action sections
Layout (Layout.js)
Fixed header with navigation
Mobile-responsive menu
Logo and branding
Footer with quick links and contact info
📊 Data Management
Built-in User Entity
Every app includes a User entity with:

id - Unique identifier
email - User email
full_name - Full name
role - 'admin' or 'user'
created_date - Account creation timestamp
Custom Entities
Define custom entities in entities/[EntityName].json using JSON Schema format.

Example:

{
  "name": "Farm",
  "type": "object",
  "properties": {
    "name": {"type": "string"},
    "location": {"type": "string"},
    "hectares": {"type": "number"}
  },
  "required": ["name"]
}
🔌 Using the Base44 SDK
Authentication
import { base44 } from '@/api/base44Client';

// Get current user
const user = await base44.auth.me();

// Update current user
await base44.auth.updateMe({ custom_field: "value" });

// Logout
base44.auth.logout();
Entity Operations
// List all records
const farms = await base44.entities.Farm.list();

// Filter records
const myFarms = await base44.entities.Farm.filter(
  { created_by: user.email },
  '-created_date',
  10
);

// Create record
await base44.entities.Farm.create({
  name: "Green Valley Farm",
  hectares: 50
});

// Update record
await base44.entities.Farm.update(farmId, { hectares: 60 });

// Delete record
await base44.entities.Farm.delete(farmId);
Navigation
import { createPageUrl } from '@/utils';
import { Link } from 'react-router-dom';

// Navigate to pages
<Link to={createPageUrl("ForFarmers")}>
  Farmer Solutions
</Link>
🎨 Styling Guidelines
Use Tailwind CSS utility classes
Leverage shadcn/ui components from @/components/ui/
Maintain responsive design (mobile-first)
Use emerald/green color scheme for branding
Include smooth transitions and animations
Brand Colors
Primary: emerald-600 (#059669)
Secondary: green-600 (#16a34a)
Accent: emerald-50 (light backgrounds)
📦 Available Components
UI Components (@/components/ui/)
Button
Card (Card, CardContent, CardHeader, CardTitle)
Badge
Input
Textarea
Select
DropdownMenu
Popover
Calendar
And more shadcn/ui components
🔧 Development Guidelines
Pages are flat - No subfolders in pages/
Components can nest - Organize components in subfolders
Use existing packages - Don't install unnecessary dependencies
Responsive by default - Mobile-first approach
Keep files focused - Small, single-purpose components
🌐 Integrations
Core Integrations Available
InvokeLLM - AI-powered responses
SendEmail - Email notifications
UploadFile - File storage
GenerateImage - AI image generation
ExtractDataFromUploadedFile - Data extraction from files
Usage:

import { base44 } from '@/api/base44Client';

const result = await base44.integrations.Core.InvokeLLM({
  prompt: "Analyze soil data...",
  add_context_from_internet: true
});
📈 Roadmap
✅ Core platform with 7 integrated services
✅ Carbon credit partnership with Carboneg Europe
✅ Farmer, FPO, Buyer, and Investor portals
🔄 Complete rural financial ecosystem
Recharge & bills
Digital gold
Travel booking
Insurance products
Credit access
🤝 Partnership
Carboneg Europe - Exclusive collaboration for verified carbon credit generation across 500,000 hectares.

📞 Contact
Email: contact@rupiya.app
Location: India
Target: 50,000+ farmers across 500,000 hectares
🎯 Key Statistics
🌾 500,000 hectares target coverage
👥 50,000+ farmers to onboard
💰 ₹800 per carbon credit additional income
📅 3 years commitment period
📄 License
© 2024 rupiya.app. Building India's climate-positive agricultural future.
