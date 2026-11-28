---
name: Bharath D H Portfolio
description: A security engineer's portfolio that reads like a well-run case file, with every claim backed by a link.
colors:
  signal-cyan: "#67E8F9"
  signal-cyan-lift: "#93EEFA"
  slate-ground: "#0B1220"
  case-panel: "#111C2E"
  hairline: "#2A3B52"
  heading-ink: "#F1F5F9"
  body-ink: "#B6C3D4"
  muted-ink: "#8E9EB4"
  plate-black: "#06090E"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 3.9vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.03em"
    fontFeature: "\"cv11\", \"ss01\""
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.375
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "\"cv11\", \"ss01\""
  body-small:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.333
  mono-label:
    fontFamily: "\"IBM Plex Mono\", ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.8rem"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  tag: "4px"
  control: "6px"
  plate: "8px"
  panel: "12px"
spacing:
  gutter: "16px"
  gutter-wide: "24px"
  card: "20px"
  card-wide: "32px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.signal-cyan}"
    textColor: "{colors.slate-ground}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "{colors.signal-cyan-lift}"
    textColor: "{colors.slate-ground}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.heading-ink}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
    height: "40px"
  button-line-hover:
    textColor: "{colors.signal-cyan}"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.body-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.tag}"
    padding: "2px 8px"
  card:
    backgroundColor: "{colors.case-panel}"
    rounded: "{rounded.panel}"
    padding: "{spacing.card}"
  nav-link:
    textColor: "{colors.heading-ink}"
    height: "64px"
---

# Design System: Bharath D H Portfolio

## Overview

**Creative North Star: "The Case File"**

The page is an evidence binder, not a stage set. Each project is a filed exhibit: a flat slate panel, a title, a two-sentence account of what it does, and directly beneath it the proof (demo, source, write-up) as buttons. Detail is kept closed until a reader asks for it. Density is moderate and even: recruiters skim the hero and the featured row, hiring managers open the accordions.

The world is dark slate with a single cyan signal. Cyan means "you can act here, or this is current": filled actions, focus rings, hover states, bullet dots, the current-role dot. Everything else is ink on slate, separated by hairlines rather than shadows. Inter carries everything a person reads; IBM Plex Mono appears only for short machine-flavoured labels (dates, an email address, inline code).

The system explicitly rejects the neon "hacker terminal" costume (scan lines, glow, boot text, green-on-black) and the centred-headline-over-icon-cards template. There is no load animation; the only motion is the accordion.

**Key Characteristics:**
- Slate ground, one cyan accent, no glow and no gradients.
- Flat panels separated by 1px hairlines; depth by tone, not shadow.
- Proof sits right under the claim: links before stack chips, stack chips before details.
- Inter for reading, Plex Mono only for short technical labels.
- Split hero: introduction left, cropped 4:5 portrait right.

## Colors

A cold, low-chroma slate scale with one bright cyan used sparingly for action and state.

### Primary
- **Signal Cyan** (signal-cyan): Filled primary buttons (with slate ink), focus outlines, link/button hover text, the bullet dots in detail lists (at 70% opacity), the current-role status dot, the "Flagship" badge border, text selection (at 28% opacity), caret.
- **Signal Cyan, lifted** (signal-cyan-lift): Hover state of the filled primary button only.

### Neutral
- **Slate Ground** (slate-ground): Page background, sticky header (at 90% with backdrop blur), and the ink colour on cyan buttons.
- **Case Panel** (case-panel): Every card and list container surface; the portrait frame fill.
- **Hairline** (hairline): All borders and dividers, line-button outlines, tag outlines, scrollbar thumb.
- **Heading Ink** (heading-ink): h1-h4, nav links, line-button labels, inline code, card subtitles (at 90%).
- **Body Ink** (body-ink): Running text, tags, summaries, skill lists.
- **Muted Ink** (muted-ink): Metadata only: project area captions, locations, dates in mono, footer, writing-row arrows.
- **Plate Black** (plate-black): The ground of every project illustration. Not used in CSS; illustrations are near-black line art with cyan strokes, set on this colour so they sit as recessed plates inside slate panels.

### Named Rules
**The One Signal Rule.** Cyan is the only hue on the page. It marks actions, focus and live state, and nothing decorative. If a second accent seems needed, the hierarchy is wrong.

**The Dark Ink on Cyan Rule.** Filled cyan surfaces always carry slate-ground ink, never white.

## Typography

**Display Font:** Inter (with ui-sans-serif, system-ui)
**Body Font:** Inter, with character variants cv11 and ss01 enabled site-wide
**Label/Mono Font:** IBM Plex Mono (with ui-monospace, SFMono-Regular)

**Character:** One neutral, highly legible sans does all the reading work, tightened at display size. The mono is a seasoning for dates and code, never for sentences or headings.

### Hierarchy
- **Display** (700, 2.5rem mobile / 3rem sm / fluid clamp on lg, line-height 1.04, -0.03em): The name in the hero only.
- **Hero title** (500, 1.25rem / 1.5rem sm, heading ink): The job title directly under the name; the supporting line follows in body ink at 1.125rem.
- **Headline** (600, 1.5rem mobile / 1.75rem sm, tight tracking): Section headings (h2), including "Get in touch".
- **Group subheading** (600, 1.3rem, tight tracking): Sub-groups within a section (Professional, Volunteer); flagship project title uses 1.5rem.
- **Title** (600, 1.125rem, line-height 1.375): Card and role titles; More-projects rows and education/certification cards step down to 1rem-1.05rem.
- **Nav** (500, 17px, heading ink): Header links.
- **Body** (400, 1rem, line-height 1.625): Bios and flagship copy, capped at 54-65ch.
- **Body small** (400, 0.875rem, line-height 1.625): Card summaries, detail bullets, skills; summaries capped at 80ch in rows.
- **Experience date** (500, 0.95rem, line-height 28px, body ink): Period column in Experience.
- **Label** (400, 0.75rem, muted ink): Area captions under card titles; tags use the same size in body ink.
- **Mono label** (400, 0.8rem, muted ink): Dates on education and certification cards; 0.72rem for status pills; 0.875rem for the contact email; inline code at 0.85em in heading ink.

### Named Rules
**The Mono Is Metadata Rule.** IBM Plex Mono is allowed only on short technical strings (dates, status, email, inline code). Headings, buttons, navigation and sentences are always Inter.

**The Caption Below Rule.** Category captions ("Attack surface · CTI") sit under the title in muted ink. Nothing small and uppercase sits above a heading.

## Layout

A single centred column, max width 1152px (max-w-6xl), with 16px side gutters on mobile and 24px from 640px. Sections are separated by 64px on mobile and 80px from 640px; section headings sit 24-32px above their content. The sticky header is 64px tall; anchored sections use an 80px scroll margin.

- **Hero:** two columns on lg (text `1fr`, portrait `auto`, 64px gap); stacked below lg with the portrait after the text. Portrait is a fixed 4:5 frame (176px, 208px sm, 280px lg) with the photo cropped by CSS.
- **Featured projects:** the flagship spans full width as a two-column panel (copy 1.25fr, illustration 1fr) on lg. The other three sit in a 1/2/3 column grid (20px gaps); each card spans three rows of a CSS subgrid (image / content / accordion) so titles and "Technical details" toggles align across a row and opening one never shifts the others.
- **Order inside a project:** title, caption, summary, proof buttons, up to five stack chips, then a hairline and the "Technical details" accordion holding bullets and the remaining stack.
- **Lists:** More projects, Experience and Writing are divided rows, not cards. Experience uses a 11rem date column beside the content on md+. Skills is a two-column definition list with a 13rem term column.
- **Cards:** 20px internal padding; 24px / 32px for the flagship and contact panels.

## Elevation & Depth

The system is flat. Depth comes from tone (slate ground, case panel one step lighter, plate-black illustrations one step darker) and from 1px hairline borders. No surface casts a shadow at rest or on hover. The only translucency is the sticky header (slate at 90% with a small backdrop blur) and the flagship illustration column (slate at 30% over the panel).

### Named Rules
**The No-Glow Rule.** No box-shadow, text-shadow or blur glow anywhere in page content. Separation is a hairline or a tone step.

## Shapes

Restrained, slightly softened rectangles. Large containers (cards, list containers, contact panel, portrait frame) use a 12px radius; illustrations inside them use 8px; buttons and the menu toggle use 6px; tags, badges and status pills use 4px. Borders are always 1px hairline; the only dashed border marks a pending item (the in-progress certification card). Bullet markers are 4px cyan dots. Illustrations are always 16:9.

## Components

### Buttons
Quiet, rectangular and direct; labels are verbs or destinations with a 16px leading icon.
- **Shape:** gently softened (6px radius), 14px medium label; heights 36px (sm), 40px (default), 44px (lg, hero only, 24px side padding).
- **Primary (solid):** signal cyan fill, slate ink, semibold. Used for the single most important action in a context: "View featured projects", "Watch demo", "Email".
- **Line:** transparent with hairline border and heading-ink label; hover turns border and label cyan. Used for Source, Write-up, Resume, certificates and social links.
- **Resume in header:** line button with a 60% cyan border and cyan label; hover fills cyan with slate ink.
- **Focus:** 2px cyan outline, offset 2-3px, on every interactive element.

### Chips (stack tags)
- **Style:** transparent, 1px hairline border, 4px radius, 12px body-ink text, 2px x 8px padding.
- **State:** none; tags are not interactive. At most five show under a project (four where titles are long); the rest live inside Technical details.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** case panel on slate ground.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** 1px hairline; internal sections divided by hairlines.
- **Internal Padding:** 20px; 24-32px for the flagship and contact panels.

### Navigation
Sticky 64px header on slate at 90% with backdrop blur and a hairline bottom border. Name at left (1.05rem semibold). Links are 17px Inter 500 in heading ink, 28px apart, turning cyan on hover. Below md the links collapse behind a 36px bordered menu toggle into a stacked list with hairline separators; the Resume button stays visible.

### Technical details accordion (signature)
A text toggle (14px medium, heading ink, cyan on hover) with a leading chevron that rotates 180 degrees when open. The panel opens by animating grid-template-rows from 0fr to 1fr, so any content height opens fully. Height, visibility and chevron share one timing (240ms ease-in-out); under reduced motion the change is instant. It always sits below a hairline at the bottom of a project.

### Project illustration plate
A 16:9 line drawing on plate black with cyan and slate strokes, 8px radius and hairline border, inset 16px inside the card top (or beside the copy in the flagship). Illustrations are diagrams of what the project does, never screenshots dressed up as UI.

### Demo dialog
"Watch demo" opens a modal on a case-panel surface with a hairline border and a heading-ink title; the video sits on slate ground with a 6px radius.

## Do's and Don'ts

### Do:
- **Do** keep signal cyan for actions, focus and live state only; one filled cyan button per context.
- **Do** put proof (demo, source, write-up) directly under the claim, before stack chips and details.
- **Do** separate surfaces with 1px hairlines and a tone step; keep cards at a 12px radius on case panel.
- **Do** use Inter for everything read and IBM Plex Mono only for dates, status, email and inline code.
- **Do** set project illustrations on plate black, 16:9, with cyan line work.
- **Do** keep detail behind the "Technical details" accordion (240ms ease-in-out, instant under reduced motion).

### Don't:
- **Don't** use the neon terminal costume: scan lines, glow, boot or typing text, green-on-black.
- **Don't** use the centred-headline-over-icon-cards hero template.
- **Don't** add box-shadows, text glows or gradients to page content.
- **Don't** introduce a second accent hue.
- **Don't** put small uppercase labels or eyebrows above headings; captions go below the title.
- **Don't** add load or scroll-reveal animation.
