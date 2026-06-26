# AI-Powered Quotation System for Design Studios

A production quotation tool built for visual design studios in Taiwan. Designers describe a project, AI generates a structured quotation, and clients can review and e-sign — all in one workflow.

Live in production. Used by a real design studio for client-facing quotations.

## How It Works

### Step 1: AI-Assisted Quotation Generation

The designer describes the project in plain language — for example, "LHS brand upgrade for a luxury department store launch."

The AI doesn't immediately produce a quotation. Instead, it asks 2–4 clarifying questions first:

- What deliverables does the client expect? (Logo redesign, business cards, signage, uniforms, packaging?)
- What's the project timeline?
- Does the client need print production management?
- Are there brand guidelines to follow?

After the designer answers, the AI generates a complete list of line items with suggested pricing, based on the project scope and the studio's pricing history.

![Editor with AI-generated items and live PDF preview](screenshots/01-editor-with-preview.png)

### Step 2: Designer Review & Edit

The AI-generated quotation is a draft, not a final document. The designer reviews every item in the editor:

- Adjust prices based on client relationship and project complexity
- Add or remove line items
- Switch between simple view (subtotal only) and detailed view (quantity × unit price)
- Reorder items by drag-and-drop

The right panel shows a live PDF preview that updates in real time — the designer sees exactly what the client will receive.

### Step 3: Share with Client

When the quotation is ready, the designer generates a secure share link and sends it to the client. The client opens the link on any device — no login required, no app to install.

The share link shows a read-only PDF preview of the quotation. The client can review all items, pricing, and terms before making a decision.

### Step 4: Client E-Signature & Lock

The client can sign the quotation directly on the share page:

- **Handwritten signature**: Draw on a canvas (works on phone or tablet)
- **Typed signature**: Enter name in a signature-style font

![Client signing page with handwriting canvas](screenshots/02-client-signing.png)

Once signed, the quotation is automatically locked — the designer cannot edit it anymore. This protects both parties.

![Signed quotation with lock status](screenshots/03-signed-locked.png)

The designer receives a notification and can download the final PDF with the client's signature embedded.

![Signature confirmation with download option](screenshots/04-signature-confirmed.png)

## Key Features

- **AI generates, human decides**: AI drafts the quotation, but every price and item is reviewed by the designer before sending
- **Real-time PDF preview**: See the exact output while editing — no surprises
- **Mobile-friendly e-signature**: Clients sign on their phone with a finger, no printing needed
- **Automatic lock after signing**: Prevents accidental edits to signed documents
- **Traditional Chinese (Taiwan)**: Built for the local design industry with proper formatting and terminology

## Tech Stack

- Node.js + Express (backend)
- Vue 3 (frontend, CDN-loaded, no build step)
- Claude AI (quotation generation)
- Puppeteer (HTML to PDF conversion)
- Turso/libSQL (database)

## Design Philosophy

The editor interface follows a Figma-inspired aesthetic — clean, precise, no unnecessary decoration. The PDF output uses traditional Chinese typography (華康隸書) for a formal, trustworthy appearance.

Two deliberate design languages:
- **Editor** (for designers): Modern tool feel, minimal UI, functional
- **PDF output** (for clients): Traditional, formal, professional

This separation is intentional — the tool should feel like a design tool, but its output should feel like a proper business document.
