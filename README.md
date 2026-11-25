China To India Cargo Compass — ImportNow Website Rebuild
A from-scratch rebuild of the ImportNow concept site
(importnow-concept.vercel.app), created as
the practical assignment for the **AI Executive – Website & Automation
Development** role at ImportNow, Hyderabad.
Live site: https://importnow.lovable.app/
What it is
ImportNow helps Indian businesses import directly from China — sourcing,
factory inspection, shipping, customs and doorstep delivery, handled end to
end by a team with its own registered company in Shanghai. This rebuild covers
all ten sections of the reference site:
Hero — headline, animated stats, and an interactive China sourcing map
   with the trade route to India.
Services — the six end-to-end services, from sourcing to doorstep delivery.
How it works — six steps with an animated shipment timeline
   (Shanghai → Chennai).
What we import — the six industry hubs (Foshan furniture, Shenzhen
   electronics, Guangzhou EV & automotive, Guzhen lighting, Yiwu general
   goods, pan-China machinery) with category filters.
Officially in China — the Shanghai Shengqiao Chain Trading Co., Ltd.
   licence story.
Business trips to China — Canton Fair trips, what's included, next
   departures.
Recently delivered — four delivered projects.
Client stories — testimonial carousel.
Import guides + FAQ — guide cards and a six-question accordion using
   the original site's questions and answers.
Quote form — validated form that opens WhatsApp with the visitor's
    details pre-filled, exactly like the original.
Copy throughout is the reference site's own wording — no claims, prices or
client names were invented.
Tech stack
React + TypeScript + Vite
Tailwind CSS
Deployed with Lovable
Run it locally
npm install
npm run dev     # http://localhost:5173
npm run build   # production build
AI tools used
Built with AI assistance, mainly Claude and Lovable. The AI tools were used
to audit the reference site's content and structure, generate the components
and verify the build. The direction was mine: keeping the copy faithful to the
original, deciding the interactions, and testing the result.
Honest simplifications vs. the original
The original's 3D globe is rebuilt as an interactive 2D sourcing map
  with the same cities and route.
The original's 3D port scene in "How it works" is rebuilt as an animated
  2D shipment timeline with the same six steps and Shanghai → Chennai route.
The import guide cards stand in for the original's full article pages.
Everything else — sections, copy, contact details, WhatsApp quote flow —
  matches the reference site.
