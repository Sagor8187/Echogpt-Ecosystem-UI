# EchoGPT Web Dashboard UI
**. Open in Browser:**
Open https://echogpt-ecosystem-ui.vercel.app/ in your browser to view the application.
A modern, responsive, and SEO-friendly web dashboard application for **EchoGPT**.

##  Project Overview

The EchoGPT Dashboard UI is a modern frontend implementation of an advanced AI chat web application. Designed with a sleek dark-mode aesthetic, it showcases a fully fledged interface tailored for seamless AI interactions and specialized productivity tools.

Key deliverables and UI components include:
- **Main AI Chat Interface:** A central dashboard area featuring the EchoGPT branding, an introductory greeting, and dynamic prompt suggestion cards designed to jumpstart user interactions (e.g., "Unlock Your Creative Flow", "Build a Resume That Shines").
- **Feature-Rich Sidebar Navigation:** A comprehensive side menu that organizes the application's features, including a primary "New Chat" action button, Chat History, an AI Store, and specialized tools like "AI Tasks," "AI Job Analysis," and "AI SOP Builder".
- **Help, Support & Settings:** Integrated sidebar links for Support, Newsletter, Subscriptions, API Platform, and Discord, alongside bottom navigation icons for Home, Share, Settings, and Theme toggling.
- **Header Controls:** A top navigation bar featuring a premium "Unlock Pro Features" banner, a secondary theme toggle icon, and a "Sign In" button for authentication.


##  Technologies Used

This project utilizes a cutting-edge frontend stack:
- **Core Framework:** Next.js (v16.3.6) using App Router
- **Language:**  TypeScript
- **Styling:** Tailwind CSS (v4)
- **UI Components:** shadcn/ui & @base-ui/react
- **Animations:** Framer Motion (^13.4.4) & tw-animate-css
- **Theme Management:** next-themes (for Dark/Light mode)
- **Icons:** Lucide React & React Icons
- **Typography:** Google Fonts (Poppins & Plus Jakarta Sans)

##  Assumptions

During the development of this assignment, the following assumptions were made:
- **Static Content:** The data for prompt suggestions, chat history, and sidebar navigation items are assumed to be static for this frontend demonstration and are hardcoded within the components.
- **API Integration:** As this is purely a Frontend UI assignment, no backend APIs, actual AI model endpoints, or databases are connected. The interface is built to simulate the intended layout and user experience.
- **Routing & State:** Routing is handled via Next.js App Router, and complex states (like sidebar toggling or theme switching) are managed using React state and Context API.

##  Additional Features Implemented

Beyond the core requirements, several enhancements were added to improve the user experience:
- **Dark & Light Mode Integration:** Implemented seamless theme toggling using `next-themes` with custom brand color tokens optimized for readability.
- **Advanced Layout Architecture:** Built a fully responsive dashboard layout with a fixed sidebar on desktop and a collapsible hamburger menu for mobile devices.
- **Micro-Interactions & Animations:** Utilized `framer-motion` for fluid transitions, hover effects on prompt cards, and smooth rendering of UI elements.
- **Custom UI Elements:** Added custom-styled scrollbars (`custom-scrollbar`) for the chat history and sidebar, ensuring a clean and polished look.
- **Optimized Typography:** Applied dual font families (Poppins for headings and Plus Jakarta Sans for body text) globally to ensure a modern and readable typography hierarchy.
##  Setup Instructions

To get this project up and running on your local machine, follow these steps:

**1. Clone the repository:**
\`\`\`bash
git clone https://github.com/Sagor8187/Echogpt-Ecosystem-UI.git
\`\`\`
*(Note: Change the URL if your repository link is different)*

**2. Navigate to the project directory:**
\`\`\`bash
cd project
\`\`\`

**3. Install dependencies:**
\`\`\`bash
npm install
# or
yarn install
\`\`\`

**4. Start the development server:**
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`


