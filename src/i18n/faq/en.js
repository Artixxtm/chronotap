const enFaq = {
  section: {
    eyebrow: "[ Everything you might ask ]",
    heading: "Questions worth asking.",
    description:
      "Everything you may want to know before leaving something for the future.",
    footerHeading: "Still curious?",
    footerCta: "Explore all questions",
  },
  page: {
    label: "FAQ",
    eyebrow: "[ Questions, answered ]",
    heading: "Before you leave something behind.",
    intro:
      "A closer look at the object, the digital experience and the choices we are making for the long term.",
    contents: "Browse by subject",
    questionCount: "questions",
    closing: "Something still unclear?",
    closingText:
      "ChronoTap is still taking shape. Join the early waitlist and follow the project as the details become final.",
    closingCta: "Join the waitlist",
  },
  categories: [
    {
      id: "understanding",
      title: "Understanding the product",
      items: [
        {
          id: "what-is-chronotap",
          question: "What is ChronoTap?",
          blocks: [
            {
              type: "paragraph",
              text: "ChronoTap is a physical time capsule for digital memories. It connects a small NFC capsule to a private digital space where you can leave photos, videos, voice messages, letters and files.",
            },
            {
              type: "paragraph",
              text: "You can keep it for yourself, give it to someone, preserve a family story or leave it to be rediscovered later.",
            },
          ],
        },
        {
          id: "how-it-works",
          question: "How does ChronoTap work?",
          blocks: [
            {
              type: "paragraph",
              text: "Tap the physical capsule with an NFC-enabled phone to open its connected digital space.",
            },
            {
              type: "paragraph",
              text: "From there, you can add what matters, choose who should be able to access it and decide whether it stays open or waits until a future date.",
            },
            { type: "paragraph", text: "The basic flow is simple:" },
            { type: "emphasis", text: "Tap. Fill. Choose. Leave. Relive." },
          ],
        },
        {
          id: "what-can-i-leave",
          question: "What can I leave inside?",
          blocks: [
            {
              type: "paragraph",
              text: "ChronoTap can hold a collection of digital memories and messages, including:",
            },
            {
              type: "list",
              items: [
                "photos",
                "videos",
                "voice recordings",
                "written letters and notes",
                "personal files",
              ],
            },
            {
              type: "paragraph",
              text: "It is not designed for everything in your camera roll. It is designed for the things you would genuinely want to find again.",
            },
          ],
        },
        {
          id: "where-files-live",
          question: "Are the files stored inside the physical capsule?",
          blocks: [
            {
              type: "paragraph",
              text: "No. The physical capsule contains an NFC chip that connects your phone to its digital space. Your photos, videos and other files are stored securely online rather than directly on the NFC chip.",
            },
            {
              type: "paragraph",
              text: "This allows ChronoTap to hold much more than a traditional NFC tag could store while keeping the physical object small, simple and durable.",
            },
          ],
        },
        {
          id: "flash-drive",
          question: "Is ChronoTap a flash drive?",
          blocks: [
            { type: "paragraph", text: "No. A flash drive is primarily a storage device." },
            {
              type: "paragraph",
              text: "ChronoTap is built around intention, access and rediscovery. The physical capsule gives selected digital memories a place, a recipient and a reason to return to them later.",
            },
            {
              type: "paragraph",
              text: "You do not connect it with a cable. You open it by tapping it with a compatible phone.",
            },
          ],
        },
        {
          id: "app",
          question: "Do I need an app?",
          blocks: [
            {
              type: "paragraph",
              text: "No separate app is required for the core ChronoTap experience. Tap the capsule with a compatible NFC-enabled smartphone and follow the link that appears on the screen.",
            },
            {
              type: "paragraph",
              text: "A dedicated app may be introduced in the future for additional features, but the core experience is designed to remain as simple as tapping the capsule with your phone.",
            },
          ],
        },
        {
          id: "phones",
          question: "Which phones work with ChronoTap?",
          blocks: [
            {
              type: "paragraph",
              text: "ChronoTap is designed to work with modern smartphones that support NFC reading.",
            },
            {
              type: "paragraph",
              text: "On most recent iPhones and Android devices, you simply bring the upper part of the phone close to the capsule. The exact NFC antenna position may vary between phone models.",
            },
          ],
        },
        {
          id: "charging",
          question: "Does it need to be charged?",
          blocks: [
            {
              type: "paragraph",
              text: "No. The capsule has no battery and does not need to be charged.",
            },
            {
              type: "paragraph",
              text: "Its NFC chip is activated by the phone when you tap it, which helps keep the physical product simple and suitable for long-term keeping.",
            },
          ],
        },
        {
          id: "internet",
          question: "Does it need internet?",
          blocks: [
            {
              type: "paragraph",
              text: "An internet connection is currently required to upload files and open the connected digital experience.",
            },
            {
              type: "paragraph",
              text: "The physical capsule itself does not require power, but the linked memories are accessed online through your phone. We are also exploring backup and limited offline-access options for future versions.",
            },
          ],
        },
      ],
    },
    {
      id: "creating",
      title: "Creating and opening a capsule",
      items: [
        {
          id: "future-date",
          question: "Can I lock it until a future date?",
          blocks: [
            {
              type: "paragraph",
              text: "Yes. You can choose a future date before which the capsule’s contents cannot be revealed.",
            },
            {
              type: "paragraph",
              text: "A timer is optional. You can also keep a capsule open and return to it whenever you want.",
            },
          ],
        },
        {
          id: "add-later",
          question: "Can I add more memories later?",
          blocks: [
            {
              type: "paragraph",
              text: "If the capsule has not been permanently sealed, you can return to it and continue adding memories.",
            },
            {
              type: "paragraph",
              text: "This makes it possible to build a story gradually — throughout a child’s early years, during a long journey or across an important chapter of your life.",
            },
          ],
        },
        {
          id: "after-sealing",
          question: "What happens after I seal it?",
          blocks: [
            {
              type: "paragraph",
              text: "Once a capsule is sealed, its contents are preserved in the state you left them.",
            },
            {
              type: "paragraph",
              text: "If you selected a future opening date, the story remains hidden until that date arrives. Until then, tapping the capsule opens its sealed state rather than revealing the memories inside.",
            },
          ],
        },
        {
          id: "who-can-open",
          question: "Who can open it?",
          blocks: [
            { type: "paragraph", text: "You choose how the capsule can be accessed." },
            { type: "paragraph", text: "Depending on the selected settings, it can be:" },
            {
              type: "list",
              items: [
                "private to you",
                "protected with a password",
                "shared with a specific person",
                "left open for whoever physically finds it",
              ],
            },
            {
              type: "paragraph",
              text: "A capsule does not have to be public simply because someone has the physical object.",
            },
          ],
        },
        {
          id: "public-default",
          question: "Is it public by default?",
          blocks: [
            {
              type: "paragraph",
              text: "No. A capsule should not become public unless you intentionally choose a public or open-access mode.",
            },
            {
              type: "paragraph",
              text: "Private memories remain private according to the access settings selected by the owner.",
            },
          ],
        },
        {
          id: "found-capsule",
          question: "What happens if someone finds it?",
          blocks: [
            {
              type: "paragraph",
              text: "Physical possession does not automatically have to provide access to private memories.",
            },
            {
              type: "paragraph",
              text: "Password-protected and private access options are being designed for capsules that should not be opened by everyone who finds them. Public access is used only when you intentionally choose to leave a story open.",
            },
          ],
        },
        {
          id: "edit-delete",
          question: "Can I edit or delete my capsule?",
          blocks: [
            {
              type: "paragraph",
              text: "Before permanently sealing a capsule, you can manage its contents and settings.",
            },
            {
              type: "paragraph",
              text: "Account owners should also be able to request deletion of their personal data, subject to any access and ownership rules associated with shared capsules. Detailed controls will be documented before release.",
            },
          ],
        },
      ],
    },
    {
      id: "uses",
      title: "Ways to use it",
      items: [
        {
          id: "gift",
          question: "Can I give it as a gift?",
          blocks: [
            { type: "paragraph", text: "Yes. Gifting is one of the main ways ChronoTap is meant to be used." },
            {
              type: "paragraph",
              text: "You can prepare a capsule with photos, videos, voice messages and letters, then give it to someone to open immediately or at a meaningful moment in the future.",
            },
            {
              type: "paragraph",
              text: "It can become a birthday gift, an anniversary message, a wedding capsule, a farewell gift or something prepared for a child to receive years later.",
            },
          ],
        },
        {
          id: "future-self",
          question: "Can I create one for my future self?",
          blocks: [
            {
              type: "paragraph",
              text: "Yes. You can record a message, collect memories from your life now and choose when you want to return to them.",
            },
            {
              type: "paragraph",
              text: "It might be opened next year, after graduation, following a major move or ten years from now. The date matters less than the person you may have become by the time you open it.",
            },
          ],
        },
        {
          id: "for-a-child",
          question: "Can parents create one for their child?",
          blocks: [
            {
              type: "paragraph",
              text: "Yes. Parents can gradually collect moments that began before their child could remember them: first days, first words, family videos, voice messages, letters and ordinary moments from home.",
            },
            {
              type: "paragraph",
              text: "The capsule can later be given to the child on a birthday, before leaving home or whenever the story feels ready to be passed on.",
            },
          ],
        },
        {
          id: "family-stories",
          question: "Can it preserve family stories?",
          blocks: [
            {
              type: "paragraph",
              text: "Yes. ChronoTap can be used as a physical home for personal family history: voices, stories, photographs, letters and memories that may never appear in an official archive.",
            },
            {
              type: "paragraph",
              text: "It is not only about preserving what happened. It is also about preserving how someone spoke, laughed and remembered it.",
            },
          ],
        },
        {
          id: "contributors",
          question: "Can several people contribute?",
          blocks: [
            { type: "paragraph", text: "Shared contributions are part of the ChronoTap vision." },
            {
              type: "paragraph",
              text: "A capsule could be filled by a family, group of friends, wedding guests or people who meet during a journey. Collaborative access is being explored for future versions of the experience.",
            },
          ],
        },
        {
          id: "generations",
          question: "Could it become a family object passed through generations?",
          blocks: [
            { type: "paragraph", text: "That is one of the long-term possibilities behind the idea." },
            {
              type: "paragraph",
              text: "Different generations could add their own voices, photographs and stories to the same physical object before passing it forward.",
            },
            {
              type: "paragraph",
              text: "Building something intended for that timescale requires careful work on export, backup and long-term access — areas we are still developing.",
            },
          ],
        },
      ],
    },
    {
      id: "trust",
      title: "Trust and longevity",
      items: [
        {
          id: "storage-protection",
          question: "How are my memories stored and protected?",
          blocks: [
            {
              type: "paragraph",
              text: "ChronoTap is being designed so that capsule contents are stored in protected online infrastructure and accessed only according to the permissions you choose. The NFC capsule itself does not contain your files.",
            },
            {
              type: "paragraph",
              text: "Because the product is still in development, the exact hosting, encryption, backup and recovery architecture is not final. We will publish clear security and privacy details before commercial release, including how data is protected and how you can export or delete it.",
            },
          ],
        },
        {
          id: "ownership",
          question: "Who owns my memories?",
          blocks: [
            { type: "emphasis", text: "You do." },
            {
              type: "paragraph",
              text: "Uploading a memory to ChronoTap does not transfer ownership of your photos, videos, voice messages, letters or files to us.",
            },
            {
              type: "paragraph",
              text: "We only process the data required to provide the service, according to the ChronoTap Privacy Policy.",
            },
          ],
        },
        {
          id: "advertising-ai",
          question: "Does ChronoTap use them for advertising or AI training?",
          blocks: [
            {
              type: "paragraph",
              text: "No. Private memories are not intended to be used for advertising or to train public AI models.",
            },
            {
              type: "paragraph",
              text: "Your content exists to provide the capsule experience you created. Any future change affecting how personal content is processed would require clear disclosure and an appropriate legal basis.",
            },
          ],
        },
        {
          id: "download",
          question: "Can I download my files?",
          blocks: [
            { type: "paragraph", text: "Full data export is planned as an important part of user ownership." },
            {
              type: "paragraph",
              text: "You should be able to keep independent copies of the original memories you upload. Details about export formats and account backups will be confirmed before release.",
            },
          ],
        },
        {
          id: "longevity",
          question: "How long will the capsule last?",
          blocks: [
            {
              type: "paragraph",
              text: "The physical capsule is being designed without a battery or complex moving electronics, reducing the number of components that can fail over time.",
            },
            {
              type: "paragraph",
              text: "However, long-term access depends on both the physical NFC tag and the digital infrastructure behind it. We are actively designing ChronoTap with durability, backups and future data portability in mind.",
            },
            {
              type: "paragraph",
              text: "We will publish clearer technical commitments before the first commercial release.",
            },
          ],
        },
        {
          id: "chip-failure",
          question: "What if the NFC chip stops working?",
          blocks: [
            {
              type: "paragraph",
              text: "The NFC chip is a convenient doorway to the capsule, but it should not be the only way your story can exist.",
            },
            {
              type: "paragraph",
              text: "We are designing recovery and ownership options so that losing or damaging the physical object does not automatically mean losing the connected memories. Final recovery details will be published before launch.",
            },
          ],
        },
        {
          id: "service-closes",
          question: "What if the service ever closes?",
          blocks: [
            { type: "paragraph", text: "A product built for the future has to take this question seriously." },
            {
              type: "paragraph",
              text: "Our goal is to provide users with ways to download and preserve their original files, rather than trapping important memories inside a closed platform.",
            },
            {
              type: "paragraph",
              text: "The exact export, backup and continuity policy will be published before customers are asked to trust ChronoTap with long-term memories.",
            },
          ],
        },
      ],
    },
    {
      id: "availability",
      title: "Product and availability",
      items: [
        {
          id: "availability-date",
          question: "When will ChronoTap be available?",
          blocks: [
            { type: "paragraph", text: "The first physical capsules are still taking shape." },
            {
              type: "paragraph",
              text: "ChronoTap is currently in its early pre-launch stage, with a working digital MVP and physical prototypes under development.",
            },
            {
              type: "paragraph",
              text: "Join the early waitlist to be notified when the first capsules become available.",
            },
          ],
        },
        {
          id: "where-developed",
          question: "Where is it being developed?",
          blocks: [
            {
              type: "paragraph",
              text: "ChronoTap is being developed in Poland by founder Artem Naumenko, with physical prototyping and early manufacturing work carried out in collaboration with local production partners.",
            },
          ],
        },
        {
          id: "not-a-game",
          question: "Is ChronoTap a game?",
          blocks: [
            {
              type: "paragraph",
              text: "No. ChronoTap is a physical NFC time capsule for digital memories and is not affiliated with any mobile game using a similar name.",
            },
            { type: "paragraph", text: "The official ChronoTap project is available at chronotap.co." },
          ],
        },
      ],
    },
    {
      id: "experimental",
      title: "Experimental",
      items: [
        {
          id: "for-a-stranger",
          question: "Can I leave one for a stranger?",
          blocks: [
            {
              type: "paragraph",
              text: "That is one of the more experimental ways ChronoTap could be used. With open access chosen intentionally, a capsule could be left in a meaningful place for someone unknown to discover.",
            },
            {
              type: "paragraph",
              text: "It might carry a story, a question or an invitation to add something of their own. Responsible placement and local rules would still matter.",
            },
          ],
        },
        {
          id: "travelling-capsule",
          question: "Can a capsule travel between people?",
          blocks: [
            { type: "paragraph", text: "That is one of the ideas we want to explore." },
            {
              type: "paragraph",
              text: "A travelling capsule could move from person to person, collecting one story, voice or place at every step.",
            },
            {
              type: "paragraph",
              text: "Instead of belonging to one owner forever, the capsule itself would become part of the story.",
            },
          ],
        },
      ],
    },
  ],
};

export default enFaq;
