import BookGridPage from "../components/BookGridPage";

const books = [
  {
    title: "Raising Emotionally Intelligent Children",
    image: "/raising.jpg",
    description:
      "A practical guide for helping children understand feelings, build empathy, and grow with confidence.",
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
  {
    title: "Medical Spanish for Healthcare Professionals",
    image: "/book-mockupz-2.png",
    description:
      "A practical Spanish guide for healthcare professionals who want clearer, more confident communication with patients.",
    accent: "#0B8288",
    actions: [
      {
        label: "Buy on Amazon",
        url: "https://www.amazon.com/-/es/Praxmed-Publishing-ebook/dp/B0G9VMBH6W",
      },
    ],
  },
];

export default function ForKidsPage() {
  return (
    <main>
      <BookGridPage
        eyebrow="For Kids"
        title="Books for curious, growing minds."
        description="Explore a friendly collection of books created to support emotional growth, communication, and confident learning for children."
        books={books}
      />
    </main>
  );
}
