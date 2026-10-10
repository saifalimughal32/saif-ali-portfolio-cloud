#!/usr/bin/env python3
"""Generate Saif-Ali-CV.pdf (2 pages) matching the Nikola-style layout."""

from __future__ import annotations

from pathlib import Path

from reportlab.lib.colors import Color, HexColor, white
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

OUT = Path(__file__).resolve().parents[1] / "public" / "Saif-Ali-CV.pdf"

ACCENT = HexColor("#e27500")
INK = HexColor("#141617")
TEXT = HexColor("#333333")
MUTED = HexColor("#6d6d6d")
SOFT = HexColor("#8e8e8e")
LINE = HexColor("#d8d8d8")
TAG_BORDER = HexColor("#cfcfcf")
WM = Color(0.92, 0.92, 0.92, alpha=0.55)

PAGE_W, PAGE_H = A4
MARGIN_X = 18 * mm
TOP = PAGE_H - 16 * mm
BOTTOM = 16 * mm
CONTENT_W = PAGE_W - 2 * MARGIN_X


def register_fonts() -> tuple[str, str]:
    candidates = [
        ("/usr/share/fonts/truetype/inter/Inter-Regular.ttf", "/usr/share/fonts/truetype/inter/Inter-Bold.ttf"),
        ("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"),
    ]
    for regular, bold in candidates:
        if Path(regular).exists() and Path(bold).exists():
            pdfmetrics.registerFont(TTFont("CVSans", regular))
            pdfmetrics.registerFont(TTFont("CVSans-Bold", bold))
            return "CVSans", "CVSans-Bold"
    return "Helvetica", "Helvetica-Bold"


FONT, FONT_B = register_fonts()


def dashed_rule(c: canvas.Canvas, y: float) -> None:
    c.setStrokeColor(LINE)
    c.setDash(1.2, 2.4)
    c.setLineWidth(0.6)
    c.line(MARGIN_X, y, PAGE_W - MARGIN_X, y)
    c.setDash()


def section_title(c: canvas.Canvas, text: str, y: float) -> float:
    c.setFont(FONT_B, 9.5)
    c.setFillColor(ACCENT)
    c.drawString(MARGIN_X, y, "//")
    c.setFillColor(INK)
    c.drawString(MARGIN_X + 12, y, text.upper())
    return y - 8


def wrap_text(
    c: canvas.Canvas,
    text: str,
    x: float,
    y: float,
    max_width: float,
    font: str,
    size: float,
    leading: float,
    color: Color,
) -> float:
    c.setFont(font, size)
    c.setFillColor(color)
    words = text.split()
    line = ""
    for word in words:
        trial = f"{line} {word}".strip()
        if c.stringWidth(trial, font, size) <= max_width:
            line = trial
        else:
            c.drawString(x, y, line)
            y -= leading
            line = word
    if line:
        c.drawString(x, y, line)
        y -= leading
    return y


def draw_tags(c: canvas.Canvas, tags: list[str], y: float) -> float:
    x = MARGIN_X
    row_h = 18
    pad_x = 8
    gap = 6
    c.setFont(FONT, 8)
    for tag in tags:
        tw = c.stringWidth(tag, FONT, 8) + pad_x * 2
        if x + tw > PAGE_W - MARGIN_X:
            x = MARGIN_X
            y -= row_h + 4
        c.setStrokeColor(TAG_BORDER)
        c.setFillColor(white)
        c.setLineWidth(0.8)
        c.roundRect(x, y - 5, tw, 16, 8, fill=1, stroke=1)
        c.setFillColor(INK)
        c.drawString(x + pad_x, y, tag)
        x += tw + gap
    return y - 22


def draw_lang_watermark(c: canvas.Canvas, cx: float, cy: float) -> None:
    c.saveState()
    c.setFillColor(WM)
    c.setStrokeColor(WM)
    c.setLineWidth(6)
    # stylized "文" inspired glyph as stacked bars + circle
    c.circle(cx, cy + 8, 28, fill=0, stroke=1)
    c.setLineWidth(5)
    c.line(cx - 18, cy + 18, cx + 18, cy + 18)
    c.line(cx, cy + 18, cx, cy - 18)
    c.line(cx - 14, cy, cx + 14, cy)
    c.line(cx - 10, cy - 18, cx + 10, cy - 18)
    c.restoreState()


def draw_contact_watermark(c: canvas.Canvas, cx: float, cy: float) -> None:
    c.saveState()
    c.setFillColor(WM)
    c.setStrokeColor(WM)
    c.setLineWidth(5)
    # speech bubble
    c.roundRect(cx - 30, cy - 8, 60, 42, 10, fill=0, stroke=1)
    c.line(cx - 8, cy - 8, cx - 18, cy - 22)
    c.line(cx - 8, cy - 8, cx + 4, cy - 8)
    # return arrow
    c.setLineWidth(4)
    c.line(cx + 6, cy + 12, cx + 22, cy + 12)
    c.line(cx + 22, cy + 12, cx + 16, cy + 18)
    c.line(cx + 22, cy + 12, cx + 16, cy + 6)
    c.restoreState()


def draw_page1(c: canvas.Canvas) -> None:
    y = TOP

    c.setFont(FONT_B, 28)
    c.setFillColor(INK)
    c.drawString(MARGIN_X, y, "Saif Ali")
    y -= 16
    c.setFont(FONT, 10)
    c.setFillColor(MUTED)
    c.drawString(MARGIN_X, y, "Founder · AI Ecommerce Marketing")
    y -= 13
    c.setFont(FONT_B, 10)
    c.setFillColor(ACCENT)
    c.drawString(MARGIN_X, y, "whyitworks.ai")

    right_x = PAGE_W - MARGIN_X
    ry = TOP - 2
    contacts = [
        "Muzaffarabad, Pakistan",
        "CreativeShopify32@gmail.com",
        "whyitworks.ai",
        "instagram.com/saifalimughal_01",
    ]
    c.setFont(FONT, 8.5)
    c.setFillColor(MUTED)
    for line in contacts:
        c.drawRightString(right_x, ry, line)
        ry -= 11

    y -= 14
    dashed_rule(c, y)
    y -= 18

    y = section_title(c, "About", y)
    y -= 4
    about = (
        "Designer. Strategist. Founder. Problem-solver. I run whyitworks.ai — an AI-driven "
        "marketing agency for ecommerce. I bridge Shopify design, creative strategy, Meta ads, "
        "and paid growth so brands look sharper, sell clearer, and scale with confidence."
    )
    y = wrap_text(c, about, MARGIN_X, y, CONTENT_W, FONT, 9, 12.5, TEXT)
    y -= 6
    dashed_rule(c, y)
    y -= 18

    y = section_title(c, "Key Skills & Creative Fields", y)
    y -= 6
    skills = [
        "Shopify Design & Development",
        "Ecommerce Growth Strategy",
        "UI/UX & Conversion Design",
        "Graphic Design & Branding",
        "AI Creatives & UGC",
        "Video Editing",
        "Performance Marketing / Meta Ads",
        "CRO & Funnel Optimization",
        "AI-Assisted Workflows",
    ]
    col_w = CONTENT_W / 3
    for i, skill in enumerate(skills):
        col = i % 3
        row = i // 3
        sx = MARGIN_X + col * col_w
        sy = y - row * 14
        c.setFillColor(ACCENT)
        c.circle(sx + 2.5, sy + 2.5, 1.4, fill=1, stroke=0)
        c.setFont(FONT, 8.5)
        c.setFillColor(TEXT)
        c.drawString(sx + 9, sy, skill)
    y -= 14 * 3 + 8
    dashed_rule(c, y)
    y -= 18

    y = section_title(c, "Professional Work Experience", y)
    y -= 8
    jobs = [
        (
            "Founder",
            "Present",
            "whyitworks.ai",
            "Running an AI-driven marketing agency for ecommerce — Shopify design, creative strategy, Meta ads, and performance marketing for brand growth.",
        ),
        (
            "Founder",
            "Oct 2025 – Present",
            "theclickup",
            "Founded and led growth-focused ecommerce design and marketing across Shopify stores, creative systems, and performance campaigns.",
        ),
        (
            "Ecommerce Marketing Consultant",
            "Jan 2025 – Jun 2026",
            "The Fliq · Freelance · Remote",
            "Designed, built, and optimized Shopify stores. Ran Meta campaigns and funnel work — including a store that generated ~$197K in 45 days.",
        ),
        (
            "Shopify Designer & Developer",
            "Feb 2022 – Jun 2026",
            "Fiverr · Freelance · Remote",
            "Shopify store design, development, and conversion-focused redesigns for international ecommerce clients.",
        ),
        (
            "Performance Marketing Specialist",
            "Jan 2023 – Sep 2024",
            "Scalewave · Remote",
            "Led Meta advertising for ecommerce clients, managing monthly budgets up to $50K and optimizing for converting audiences.",
        ),
    ]
    for title, dates, org, desc in jobs:
        c.setFont(FONT_B, 10)
        c.setFillColor(INK)
        c.drawString(MARGIN_X, y, title)
        c.setFont(FONT, 8.5)
        c.setFillColor(MUTED)
        c.drawRightString(PAGE_W - MARGIN_X, y, dates)
        y -= 12
        c.setFont(FONT, 8.5)
        c.setFillColor(MUTED)
        c.drawString(MARGIN_X, y, org)
        y -= 12
        y = wrap_text(c, desc, MARGIN_X, y, CONTENT_W, FONT, 8.5, 11.5, TEXT)
        y -= 8

    dashed_rule(c, y)
    y -= 18
    y = section_title(c, "Selected Results", y)
    y -= 8
    results = [
        "01   $197K in 45 days — Meta ads & funnel optimization · The Fliq / Client store · 2025",
        "02   Shopify design, builds & conversion redesigns for global brands · Fiverr · 2022 – 2026",
        "03   Meta ads for ecommerce — budgets up to $50K / month · Scalewave · 2023 – 2024",
    ]
    for line in results:
        c.setFont(FONT, 8.5)
        c.setFillColor(TEXT)
        c.drawString(MARGIN_X, y, line)
        y -= 14


def draw_page2(c: canvas.Canvas) -> None:
    y = TOP

    y = section_title(c, "Software & Platform Expertise", y)
    y -= 8
    tags = [
        "Shopify",
        "Shopify Plus",
        "Figma",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Canva",
        "Midjourney",
        "ChatGPT",
        "Claude",
        "Meta Ads Manager",
        "Google Ads",
        "Google Analytics",
        "Klaviyo",
        "Notion",
        "Framer",
        "Webflow",
        "WordPress",
        "Elementor",
        "Vercel",
        "After Effects",
    ]
    y = draw_tags(c, tags, y)
    dashed_rule(c, y)
    y -= 18

    y = section_title(c, "Soft Skills", y)
    y -= 8
    soft = [
        "Leadership",
        "Communication",
        "Teamwork",
        "Versatility",
        "Decision Making",
        "Problem Solving",
        "AI Early-Adopter",
    ]
    c.setFont(FONT_B, 9)
    c.setFillColor(INK)
    x = MARGIN_X
    sep = "  ·  "
    for i, skill in enumerate(soft):
        chunk = skill if i == len(soft) - 1 else skill + sep
        tw = c.stringWidth(chunk, FONT_B, 9)
        if x + tw > PAGE_W - MARGIN_X and x > MARGIN_X:
            y -= 13
            x = MARGIN_X
        c.drawString(x, y, chunk)
        x += tw
    y -= 16
    dashed_rule(c, y)
    y -= 18

    # Languages with watermark
    draw_lang_watermark(c, PAGE_W - MARGIN_X - 55, y - 28)
    y = section_title(c, "Languages", y)
    y -= 8
    langs = [
        ("Urdu", "Native"),
        ("English", "Fluent"),
        ("Hindi", "Professional Working Proficiency"),
    ]
    for lang, level in langs:
        c.setFont(FONT_B, 9.5)
        c.setFillColor(INK)
        c.drawString(MARGIN_X, y, lang)
        c.setFont(FONT, 9)
        c.setFillColor(MUTED)
        c.drawRightString(PAGE_W - MARGIN_X, y, level)
        y -= 14
    y -= 4
    dashed_rule(c, y)
    y -= 18

    y = section_title(c, "Education", y)
    y -= 8
    education = [
        (
            "Ecommerce & Digital Marketing Practice",
            "Ongoing",
            "Self-directed / Client delivery systems",
        ),
        (
            "Professional Shopify & Performance Marketing Craft",
            "2022 – Present",
            "Freelance & agency projects",
        ),
    ]
    for title, dates, sub in education:
        c.setFont(FONT_B, 9.5)
        c.setFillColor(INK)
        c.drawString(MARGIN_X, y, title)
        c.setFont(FONT, 8.5)
        c.setFillColor(MUTED)
        c.drawRightString(PAGE_W - MARGIN_X, y, dates)
        y -= 12
        c.setFont(FONT, 8.5)
        c.setFillColor(SOFT)
        c.drawString(MARGIN_X, y, sub)
        y -= 16
    y -= 2
    dashed_rule(c, y)
    y -= 18

    y = section_title(c, "Certifications & Focus Areas", y)
    y -= 8
    certs = [
        ("Shopify Theme Customization & CRO", "Client delivery · Ongoing"),
        ("Meta Ads & Funnel Optimization", "Performance campaigns · 2023 – Present"),
        ("AI Creative Workflows for Ecommerce", "whyitworks.ai · Present"),
        ("Brand Identity Systems", "Portfolio work · Ongoing"),
    ]
    for title, meta in certs:
        c.setFont(FONT_B, 9.5)
        c.setFillColor(INK)
        c.drawString(MARGIN_X, y, title)
        c.setFont(FONT, 8.5)
        c.setFillColor(MUTED)
        c.drawRightString(PAGE_W - MARGIN_X, y, meta)
        y -= 15
    y -= 4
    dashed_rule(c, y)
    y -= 18

    draw_contact_watermark(c, PAGE_W - MARGIN_X - 55, y - 36)
    y = section_title(c, "Contact Information", y)
    y -= 8
    contacts = [
        ("Portfolio", "whyitworks.ai / personal portfolio site"),
        ("E-mail", "CreativeShopify32@gmail.com"),
        ("Agency", "whyitworks.ai"),
        ("Instagram", "instagram.com/saifalimughal_01"),
        ("Location", "Muzaffarabad, Pakistan"),
    ]
    for label, value in contacts:
        c.setFont(FONT_B, 9.5)
        c.setFillColor(INK)
        c.drawString(MARGIN_X, y, label)
        c.setFont(FONT, 9)
        c.setFillColor(MUTED)
        c.drawRightString(PAGE_W - MARGIN_X, y, value)
        y -= 15

    # Footer
    c.setStrokeColor(LINE)
    c.setLineWidth(0.6)
    c.line(MARGIN_X, BOTTOM + 18, PAGE_W - MARGIN_X, BOTTOM + 18)
    c.setFont(FONT, 7.5)
    c.setFillColor(SOFT)
    footer = (
        "For references, case studies, and selected work, visit the portfolio or contact CreativeShopify32@gmail.com"
    )
    c.drawCentredString(PAGE_W / 2, BOTTOM + 6, footer)


def main() -> None:
    OUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUT), pagesize=A4)
    c.setTitle("Saif Ali — CV")
    c.setAuthor("Saif Ali")
    draw_page1(c)
    c.showPage()
    draw_page2(c)
    c.save()
    print(f"Wrote {OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
