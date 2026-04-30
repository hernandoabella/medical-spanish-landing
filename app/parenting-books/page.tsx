import BookGridPage from "../components/BookGridPage";

const books = [
  {
    title: "Anxious Attachment Workbook For Parents",
    image: "/anxius.jpg",
    description:
      "A supportive workbook for parents who want calmer responses, more emotional safety, and stronger connection at home.",
    accent: "#514189",
    previewPdf: "/pdf-books/anxious-attachment.pdf",
    actions: [
      {
        label: "Buy on Amazon",
        url: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0GQXCYHXZ",
      },
      {
        label: "View PDF",
        url: "/pdf-books/anxious-attachment.pdf",
      },
    ],
  },
  {
    title: "Anger Management for Explosive Parents",
    image: "/book-mockup2.jpg",
    description:
      "Tools and step-by-step guidance for breaking yelling patterns and repairing trust after conflict.",
    accent: "#264C62",
    previewPdf: "/pdf-books/anger-managment-for-explosive-parents.pdf",
    actions: [
      {
        label: "Buy on Amazon",
        url: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0GGJ3GPDF",
      },
      {
        label: "View PDF",
        url: "/pdf-books/anger-managment-for-explosive-parents.pdf",
      },
    ],
  },
  {
    title: "Manejo de la Ira Para Padres Explosivos",
    image: "/manejo-de-la-ira.jpg",
    description:
      "A practical Spanish-language guide for parents who want to regulate anger, stop yelling, and reconnect with their children.",
    accent: "#E8773A",
    previewPdf: "/pdf-books/manejo-de-la-ira-para-padres-explosivos.pdf",
    actions: [
      {
        label: "Buy on Amazon",
        url: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0GT6T8SWK",
      },
      {
        label: "View PDF",
        url: "/pdf-books/manejo-de-la-ira-para-padres-explosivos.pdf",
      },
    ],
  },
  {
    title: "Breaking Generational Trauma for Parents",
    image: "/breaking-generational-trauma-for-parents.jpg",
    description:
      "A parent-focused guide for recognizing inherited patterns, building healthier responses, and creating a safer family dynamic.",
    accent: "#0B8288",
    previewPdf: "/pdf-books/breaking-generational-trauma-for-parents.pdf",
    actions: [
      {
        label: "Buy on Amazon",
        url: "https://www.amazon.com/-/es/gp/product/B0FNX6ZC6C",
      },
      {
        label: "View PDF",
        url: "/pdf-books/breaking-generational-trauma-for-parents.pdf",
      },
    ],
  },
  {
    title: "Raising Emotionally Intelligent Children",
    image: "/raising.jpg",
    description:
      "A practical guide for helping parents nurture empathy, emotional awareness, and confidence in everyday family life.",
    accent: "#1A7A8A",
    previewPdf: "/pdf-books/raising-emotionally-intelligent-children.pdf",
    actions: [
      {
        label: "Buy on Amazon",
        url: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0GKWC93RZ",
      },
      {
        label: "View PDF",
        url: "/pdf-books/raising-emotionally-intelligent-children.pdf",
      },
    ],
  },
];

export default function ParentingBooksPage() {
  return (
    <main>
      <BookGridPage
        eyebrow="Parenting Books"
        title="Guides for calmer, more connected parenting."
        description="Browse parenting titles focused on emotional intelligence, regulation, and practical support for everyday challenges."
        books={books}
      />
    </main>
  );
}
