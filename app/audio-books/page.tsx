import AudioBookGridPage from "../components/AudioBookGridPage";

const audiobook = {
  title: "Anger Management for Explosive Parents",
  image: "/anger-managment-for-explosive-parents-bg.png",
  description:
    "Stop Yelling, Understand Your Triggers, and Break the Cycle Without Breaking Yourself. A practical, judgment-free audiobook for parents who feel overwhelmed and want to regain control of their emotions.",
  accent: "#264C62",
  audioSrc: "/audio/anger-management-for-explosive-parents/Introduction_AngerManagementExplosive.mp3",
  duration: "3:55",
  author: "M. Eliza Rowen",
  narrator: "Nettie Rose",
  publishedDate: "March 31, 2026",
  retailers: [
    {
      name: "Amazon Audible",
      url: "https://www.amazon.com/Anger-Management-Explosive-Parents-Understand/dp/B0HCCNTXTT",
      logo: "/logos/amazon-kindle.png",
    },
    {
      name: "Apple Books",
      url: "https://books.apple.com/us/audiobook/anger-management-for-explosive-parents-stop-yelling/id1890140076",
      logo: "/logos/apple-books.png",
    },
    {
      name: "Kobo",
      url: "https://www.kobo.com/us/en/audiobook/anger-management-for-explosive-parents-15",
      logo: "/logos/kobo.png",
    },
    {
      name: "Storytel",
      url: "http://storytel.com/tv/books/anger-management-for-explosive-parents-stop-yelling-understand-your-triggers-and-break-the-cycle-without-breaking-yourself-14033841",
    },
  ],
};

export default function AudioBooksPage() {
  return (
    <main>
      <AudioBookGridPage
        eyebrow="Audiobooks"
        title="Audiobooks for mindful parenting and emotional healing."
        description="Listen to expert-guided audiobooks designed to help you manage anger, break generational patterns, and create a calmer, more connected home."
        audiobook={audiobook}
      />
    </main>
  );
}
