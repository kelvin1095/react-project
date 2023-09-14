import React from "react";
import Counter from "./countButton.tsx";

const contact = [
  {
    site: "GitHub",
    link: "https://github.com/kelvin1095",
  },
  {
    site: "LinkedIn",
    link: "https://www.linkedin.com/in/kelvin-w-14679ab4",
  },
  {
    site: "Instagram",
    link: "https://www.instagram.com/negativeprogress",
  },
  {
    site: "Threads",
    link: "https://www.threads.net/@negativeprogress",
  },
];

interface Contact {
  site: string;
  link: string;
}

function ContactLinks(props: { links: Contact[] }) {
  const separator = " | ";

  return props.links.map((contactItem: Contact, index: number) => (
    <React.Fragment key={contactItem.site}>
      {index > 0 && separator}
      <a href={contactItem.link}>{contactItem.site}</a>
    </React.Fragment>
  ));
}

export default function Footer() {
  return (
    <footer>
      <div className="text-center bg-gray-700 text-gray-100 p-10">
        <div className="text-4xl mb-10">
          <h1>Keep in Touch</h1>
        </div>
        <Counter />
        <div>
          <ContactLinks links={contact} />
        </div>
      </div>
    </footer>
  );
}
