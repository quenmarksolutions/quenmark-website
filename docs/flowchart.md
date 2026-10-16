# Site Architecture & User Journey Flowchart

## Page Navigation Map

```mermaid
graph TD
    A[🏠 index.html<br/>Home / Landing] --> B[services.html<br/>Services]
    A --> C[products.html<br/>Products & Pricing]
    A --> D[projects.html<br/>Our Projects]
    A --> E[about.html<br/>About Us]
    A --> F[contact.html<br/>Contact]

    B --> F
    C --> F
    D --> F
    E --> F

    D --> EXT1[🌐 Live Project 1<br/>Opens in new tab]
    D --> EXT2[🌐 Live Project 2<br/>Opens in new tab]
    D --> EXT3[🌐 Live Project 3<br/>Opens in new tab]
    D --> EXT4[🌐 Live Project 4<br/>Opens in new tab]

    style A fill:#F5A623,color:#000
    style EXT1 fill:#1A1A1A,color:#F5A623,stroke:#F5A623
    style EXT2 fill:#1A1A1A,color:#F5A623,stroke:#F5A623
    style EXT3 fill:#1A1A1A,color:#F5A623,stroke:#F5A623
    style EXT4 fill:#1A1A1A,color:#F5A623,stroke:#F5A623
```

---

## User Journey Flows

### Journey 1: Visitor → Lead

```mermaid
flowchart LR
    V[Visitor lands on Home] --> H[Reads Hero]
    H --> |Clicks 'Explore Enterprise'| S[Services Page]
    S --> |Tab: Consulting| SC[Consulting Detail]
    SC --> |'Book a Consultation'| C[Contact Form]
    C --> |Submits| TY[✓ Success Message]

    V --> |Clicks 'Our Projects'| P[Projects Page]
    P --> |Clicks 'Visit Live Site'| LIVE[🌐 External Project]
    P --> |Impressed, clicks 'Start a Project'| C
```

### Journey 2: Decision Maker → Product Evaluation

```mermaid
flowchart LR
    DM[Decision Maker] --> PR[Products / Pricing]
    PR --> |Reads features| Compare[Comparison Table]
    Compare --> |Has questions| FAQ[FAQ Accordion]
    FAQ --> |Not answered| CT[Contact → 'Talk to Sales']
    Compare --> |Ready to buy| CT2[Contact → tier=enterprise]
```

### Journey 3: Recruiter / Partner → About Page

```mermaid
flowchart LR
    R[Recruiter / Partner] --> AB[About Page]
    AB --> Story[Our Story Section]
    AB --> Team[Team Section]
    AB --> Values[Values Section]
    AB --> Timeline[Company Timeline]
    AB --> |'Join the Team'| CF[Contact Form]
```

---

## Data Flow: Contact Form

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant contact.js
    participant Server

    User->>Browser: Fills form fields
    User->>Browser: Clicks "Send Message"
    Browser->>contact.js: submit event
    contact.js->>contact.js: Validate all fields
    alt Validation fails
        contact.js->>Browser: Show inline error messages
    else Validation passes
        contact.js->>Browser: Show loading spinner on button
        contact.js->>Server: POST /api/contact (when backend ready)
        Server-->>contact.js: 200 OK
        contact.js->>Browser: Hide spinner, show success message
        contact.js->>Browser: Reset form fields
    end
```

---

## CSS Architecture

```mermaid
graph TD
    G[global.css<br/>Design tokens, reset, layout] --> C[components.css<br/>Navbar, footer, cards, buttons]
    G --> A[animations.css<br/>Keyframes, scroll reveal]

    C --> P1[index.html]
    C --> P2[services.html]
    C --> P3[products.html]
    C --> P4[projects.html]
    C --> P5[about.html]
    C --> P6[contact.html]

    A --> P1
    A --> P2
    A --> P3
    A --> P4
    A --> P5
    A --> P6
```

---

## JavaScript Architecture

```mermaid
graph LR
    M[main.js<br/>Shared: navbar, mobile menu<br/>scroll reveal, active nav] --> ALL[All 6 pages]

    H[home.js<br/>Counter animation<br/>Testimonial slider] --> P1[index.html]
    H --> P5[about.html]

    SV[services.js<br/>Tab switching] --> P2[services.html]

    PJ[projects.js<br/>Filter bar<br/>Accordion] --> P4[projects.html]
    PJ --> P3[products.html]
    PJ --> P6[contact.html]

    CO[contact.js<br/>Form validation<br/>Submit handling] --> P6
```
