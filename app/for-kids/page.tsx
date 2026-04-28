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
    title: "Juan Cigarron",
    image: "/book-mockupz-2.png",
    description:
      "A charming children's story for young readers, now available in the kids collection.",
    accent: "#0B8288",
    previewPdf: "/pdf-books/juan-cigarron.pdf",
    actions: [
      {
        label: "Buy on Amazon",
        url: "https://www.amazon.com/-/es/Aluna-Publishing-House-ebook/dp/B0D4LHPBPG",
      },
      {
        label: "View PDF",
        url: "/pdf-books/juan-cigarron.pdf",
      },
    ],
  },
  {
    title: "Cuentos Para Dormir",
    image: "/cuentos-para-dormir.jpg",
    description:
      "A cozy bedtime collection created for children and families who love gentle Spanish stories before sleep.",
    accent: "#E8773A",
    previewPdf: "/pdf-books/cuentos-para-dormir.pdf",
    actions: [
      {
        label: "Buy on Amazon",
        url: "https://www.amazon.com/-/es/Cuentos-para-Dormir-Relatos-Spanish/dp/B0G5YX21SW",
      },
      {
        label: "View PDF",
        url: "/pdf-books/cuentos-para-dormir.pdf",
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
