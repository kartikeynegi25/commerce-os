# Commerce OS

Commerce OS is a frontend prototype exploring how a small business could manage conversations, orders, customers, and calls from one dashboard instead of switching between different tools.

![alt text](<Screenshot 2026-08-17 230802.png>)

**Live site:** https://kartikeynegi25.github.io/commerce-os

## Try the prototype

- **Orders:** Go to the Orders page and click order **#1240** or **#1229**. Open the order details to see the breakdown, preview/download the invoice, and try changing the order status with **Mark as Packed**.
- **Inbox & Chatbot:** Click the WhatsApp or Instagram rows on the Inbox page to test out the chat interface and try sending a reply.
- **Inbox Empty State:** Click **"Toggle empty state"** in the inbox to see how it looks with no messages.
- **Fun Elemets:** Added quick reply section in inbox and a test order button in orders page just for testing and acts as a fun element to interact with.
- **AI Calls:** Click the top row in the Calls section to view a sample call transcript.
- **Search:** Try typing in the search bar across Orders, Products, Calls, Invoices, or Customers.
- **Settings & Profile:** Change your info in Settings or click your profile avatar—it saves to `localStorage` and updates across the site.
- **Mobile View:** Resize your window to check out the mobile slide-out drawer.

## What I built

- **One Inbox for everything:** A unified interface for simulated WhatsApp, Instagram, web chat, and call conversations.
- **Orders:** An order pipeline from New → Confirmed → Packed → Shipped → Delivered, including order details and invoice previews.
- **Product & Customers:** Product listings, customer information, view GST invoice previews, and check customer details.
- **Settings & Profile:** Edit business details, set bot preferences, and manage quiet hours.
- **Responsive UI:** Desktop sidebar navigation switches to a slide-out drawer on smaller screens.

## Project Status & Next Steps

Commerce OS is still a frontend prototype. The current version uses mock data and browser localStorage, so it is not connected to real WhatsApp, Instagram, calling, payment, inventory, or database services.
The inbox and call conversations are simulations for testing the interface and user flow rather than live communications. I built this first to design and test the full user flow and interface.

**What I want to build next:**
1. Build a Node.js backend with a database.
2. Connect real Meta APIs for WhatsApp and Instagram messaging.
3. Hook up real AI agents for auto-replies and phone calls.
4. Add real inventory tracking.

## How I Built This & AI Usage

I already knew the basics of HTML, CSS, and JavaScript before starting this project. What annoyed me most was typos and indentation, and JavaScript logic — making a small change in one place sometimes had to be repeated in many places. The settings option that makes changes across the whole website, and missing IDs, gave me trouble too.. Since I'm still learning some Web APIs and JS concepts, I used Claude as an AI coding assistant to help explain new concepts when I got stuck and used Gemini to debug tricky issues (like missing IDs, scope bugs, and `localStorage` state glitches).



