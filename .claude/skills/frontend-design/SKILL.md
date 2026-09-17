---
name: frontend-design
description: >
  Use this skill whenever creating, modifying, reviewing, auditing,
  or improving frontend UI/UX, website pages, components, layouts,
  typography, spacing, color systems, responsive behavior, navigation,
  forms, imagery, motion, accessibility, or visual hierarchy.
---

# frontend Design

Act as a senior product designer, UX specialist and frontend engineer.

The goal is to create interfaces that feel intentionally designed,
not automatically generated.

## Before Designing

Before making substantial UI changes:

1. Inspect the existing implementation.
2. Understand what the page is supposed to achieve.
3. Identify the primary user.
4. Identify what the user should understand within 3–5 seconds.
5. Inspect existing typography, colors, spacing, components and tokens.
6. Preserve established design decisions unless they create a real UX problem.
7. Do not redesign simply for the sake of redesigning.

# Visual Hierarchy

Every page should immediately communicate:

- where the user is
- what the page is about
- what information matters most
- what action is available
- what should be read next

Create hierarchy through:

- typography
- scale
- spacing
- contrast
- alignment
- positioning
- negative space

Do not rely on decoration to create hierarchy.

# Typography

Use a deliberate type system.

Avoid arbitrary font sizes.

Recommended scale:

- Display: 56–72px
- H1: 44–56px
- H2: 32–40px
- H3: 24–30px
- H4: 20–24px
- Large body: 18–20px
- Body: 16px
- Small: 14px
- Caption: 12–13px

Adapt responsively where necessary.

Rules:

- maintain readable line lengths
- maintain comfortable line height
- use limited font weights
- use no more font families than necessary
- use typography to establish hierarchy
- avoid decorative typography that harms readability

# Spacing

Use an 8px-based spacing system.

Preferred values:

4px
8px
16px
24px
32px
40px
48px
64px
80px
96px
120px

Avoid arbitrary values such as 13px, 27px or 43px unless there is
a genuine optical requirement.

Related content should appear closer together.

Unrelated sections should have greater separation.

Use whitespace deliberately.

# Color

Prefer semantic design tokens instead of scattered color values.

Examples:

--background
--surface
--surface-elevated
--text-primary
--text-secondary
--text-muted
--border
--primary
--primary-hover
--accent
--success
--warning
--danger

Before creating new colors, inspect the existing project's tokens.

Do not introduce random HEX values when an existing token serves the purpose.

Maintain sufficient text/background contrast.

Accent colors should be intentional and restrained.

# Layout

Use:

- deliberate grids
- consistent container widths
- strong alignment
- meaningful whitespace
- visual rhythm
- clear section boundaries
- intentional responsive composition

Avoid automatically producing the common AI layout:

Hero
→ three cards
→ icon grid
→ statistics
→ testimonials
→ CTA

Only use a pattern when it genuinely serves the content.

Not every element needs a box or card.

# Buttons

Buttons must be visually consistent.

Consider:

- default
- hover
- focus
- active
- disabled
- loading

Maintain consistent:

- heights
- padding
- border radius
- typography
- icon spacing

Avoid competing primary actions.

# Cards

Cards must represent meaningful grouped information or interaction.

Do not place ordinary paragraphs inside cards merely to make a page
look designed.

Avoid endless grids of identical cards.

# Forms

Forms should:

- have visible labels
- use sensible field grouping
- provide clear validation
- provide useful error messages
- maintain logical keyboard order
- provide sufficient touch target sizes
- work properly on mobile

# Navigation

Navigation should be understandable without explanation.

Prioritize important destinations.

Avoid unnecessary navigation complexity.

Do not hide important actions solely for visual minimalism.

# Avoid Generic AI Aesthetic

Do not automatically use:

- glowing blobs
- excessive gradients
- glassmorphism everywhere
- excessive rounded cards
- excessive pill-shaped elements
- giant decorative text
- floating UI panels without purpose
- random shadows
- meaningless icons
- decorative dashboards
- arbitrary statistics
- identical feature cards
- unnecessary background patterns
- excessive animations

Avoid making every project look like an AI SaaS startup.

Design for the actual organization and audience.

# Premium Design

Premium does not mean adding more visual effects.

Premium usually comes from:

- restraint
- excellent typography
- precise spacing
- strong imagery
- thoughtful composition
- consistent details
- deliberate contrast
- clear hierarchy
- confident whitespace

When uncertain, simplify.

# UX

Follow these principles:

- do not make users think unnecessarily
- reduce cognitive load
- make important actions obvious
- prefer recognition over recall
- reveal complexity progressively
- use familiar interaction patterns
- remove unnecessary repetition
- write clear interface copy
- maintain predictable navigation

Never sacrifice usability for novelty.

# Responsive Design

Every substantial implementation should be considered at minimum for:

375px mobile
768px tablet
1280px laptop
1440px+ desktop

Do not simply shrink desktop layouts.

On smaller screens reconsider:

- hierarchy
- typography
- navigation
- whitespace
- column count
- content order
- image crops
- touch targets
- interaction behavior

Mobile should feel intentionally designed.

# Accessibility

Maintain:

- semantic HTML
- logical heading hierarchy
- keyboard accessibility
- visible focus states
- sufficient contrast
- meaningful alternative text
- proper form labels
- sensible touch targets
- ARIA only when appropriate

# Images and Video

Visuals must communicate useful information.

Before adding a visual, ask:

"What will the user understand faster because this exists?"

If the answer is nothing, reconsider it.

Avoid generic stock imagery where a more meaningful visual can be used.

Maintain consistent:

- image treatment
- aspect ratio
- crop behavior
- visual quality

Preserve negative space where text overlays imagery.

# Motion

Animation should clarify interaction or enhance perceived quality.

Prefer:

- restrained entrance transitions
- hover feedback
- navigation transitions
- state changes
- purposeful storytelling

Avoid:

- constant animation
- distracting parallax
- excessive bouncing
- motion without functional purpose

Respect prefers-reduced-motion.

# Before Coding

For substantial frontend work:

1. Inspect the current implementation.
2. Identify what should remain.
3. Identify the actual UX/design problem.
4. Review existing design tokens.
5. Establish visual hierarchy.
6. Determine component structure.
7. Determine responsive behavior.
8. Then implement.

Do not immediately generate large quantities of JSX or CSS.

# After Coding

Review the implementation critically.

Check:

- Is the page understandable within 5 seconds?
- Is hierarchy obvious?
- Is anything unnecessarily repeated?
- Is anything distracting?
- Is spacing coherent?
- Is typography consistent?
- Are primary actions obvious?
- Does mobile feel intentionally designed?
- Are existing brand rules respected?
- Does anything look generically AI-generated?
- Is the interface accessible?
- Is every visual element serving a purpose?

Fix meaningful weaknesses before considering the task complete.

# Project-Specific Skills

When another project skill contains brand, product, business,
content or positioning rules, apply that skill together with this one.

Project-specific brand rules take precedence over generic visual
preferences where appropriate.

Do not overwrite established brand identity merely to satisfy a
generic design trend.