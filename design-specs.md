# Harshita Rajesh Solanki Portfolio Design Specs

## Color Palette

| Token | Hex | Usage |
| --- | --- | --- |
| `background/base` | `#FAFAFA` | Global page background |
| `surface/primary` | `#FFFFFF` | Cards, nav, inputs, buttons |
| `surface/soft` | `#F3F4F6` | Footer and subtle separation areas |
| `text/primary` | `#111827` | Headlines, key labels |
| `text/secondary` | `#6B7280` | Body copy, meta text, helper text |
| `border/subtle` | `#E5E7EB` | Dividers, field borders, card outlines |
| `accent/primary` | `#6366F1` | Primary CTA, timeline dots, logo, focus accents |
| `accent/soft` | `#EEF2FF` | Pill fills, soft highlight backgrounds |
| `feedback/success-bg` | `#ECFDF3` | Success state container |
| `feedback/success-fg` | `#067647` | Success icon and text |
| `feedback/error-bg` | `#FEF3F2` | Error state container |
| `feedback/error-fg` | `#B42318` | Error icon and text |

## Typography Scale

| Style | Font | Weight | Size | Line Height |
| --- | --- | --- | --- | --- |
| Hero H1 desktop | Inter | 700 | 72px | 1.05 |
| Hero H1 mobile | Inter | 700 | 40px | 1.06 |
| Section H2 desktop | Inter | 600 | 44px | 1.15 |
| Section H2 mobile | Inter | 600 | 30px | 1.16 |
| Card / timeline H3 desktop | Inter | 600 | 24px | 1.2 |
| Card / timeline H3 mobile | Inter | 600 | 20px | 1.2 |
| Body large | Inter | 400 | 18px | 1.7 |
| Body base | Inter | 400 | 16px | 1.7 |
| Body compact | Inter | 400 | 14px | 1.7 |
| Nav / button label | Inter | 500-600 | 15px | 1.4 |
| Meta / helper label | Inter | 500 | 13-14px | 1.5 |
| Mono accent / tags | JetBrains Mono | 500 | 11-13px | 1.4 |

## Spacing Tokens

| Token | Value | Usage |
| --- | --- | --- |
| `space-1` | 4px | Tight icon/text adjustments |
| `space-2` | 8px | Small gaps inside badges and field stacks |
| `space-3` | 12px | Compact inline spacing |
| `space-4` | 16px | Button padding and medium gaps |
| `space-5` | 20px | Mobile section internals |
| `space-6` | 24px | Card padding and desktop small gutters |
| `space-8` | 32px | Component separation |
| `space-10` | 40px | Section heading rhythm |
| `space-12` | 48px | Larger content grouping |
| `space-16` | 64px | Mobile section padding |
| `space-24` | 96px | Desktop section padding |

## Layout Rules

- Desktop canvas width: `1440px`
- Mobile canvas width: `375px`
- Desktop content container intent: `1200px` centered inside generous gutters
- Desktop section padding: `96px` top/bottom with `120px` horizontal gutters
- Mobile section padding: `64px` top/bottom with `24px` horizontal gutters
- Navbar height target: `60px` with soft translucent white background and bottom divider
- Hero target: near full viewport with centered content and decorative indigo dots

## Component Hover States

- Primary button: keep indigo fill, increase shadow to `0 10px 24px rgba(99,102,241,0.18)`, lift `-2px`
- Ghost button: border shifts from `#E5E7EB` to `#6366F1`, text changes to accent, lift `-2px`
- Nav links: color transitions from `#6B7280` to `#111827`; active link can use a subtle indigo underline
- Skill pills: background shifts from `#FFFFFF` to `#EEF2FF`, border softens to accent tint
- Project cards: show left accent border in `#6366F1`, add a subtle lift of `-4px`, and apply a light shadow
- Social icons: fill remains white while icon color shifts to accent and border darkens slightly
- Back-to-top button: accent outline with soft indigo tint fill

## Animation Specs

- Section reveal: `opacity 0 -> 1` and `translateY(24px) -> 0`
- Reveal duration: `600ms`
- Hero headline stagger: `700ms` overall with `80ms` item offset
- CTA hover transition: `180ms`
- Card hover transition: `220ms`
- Floating dot drift: `6s` to `10s` alternating loop with very small translate offsets
- Timeline dot reveal: scale from `0.8` to `1` with fade over `350ms`
- Recommended easing: `cubic-bezier(0.22, 1, 0.36, 1)` for entrances and `ease-out` for micro-interactions

## Notes

- Use indigo sparingly so the design keeps its minimal editorial feel.
- Preserve high whitespace between sections rather than adding extra decorative UI.
- Keep all body copy within comfortable reading widths and avoid centered paragraphs longer than 2-3 lines on mobile.
