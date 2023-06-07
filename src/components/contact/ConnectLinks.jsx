import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const ConnectLinks = () => {
    const connectLinks = [
        {
            label: "Email",
            href: "mailto:daisukjp1@gmail.com",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="connect__svg connect__center-svg"
                    >
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                </svg>
            ),
        },
        {
            label: "GitHub",
            href: "https://github.com/daisukjp",
            icon: <FaGithub />,
        },
        {
            label: "Instagram",
            href: "https://www.instagram.com/film_jp/",
            icon: <FaInstagram />,
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/daisukjp/",
            icon: <FaLinkedin />,
        },
    ];

    return (
        <>
            {connectLinks.map((link) => (
        <li
            className="transition-opacity col-span-1"
            key={link.label}
            >
            <a
                href={link.href}
                className="connect__a-1"
                target="__blank"
            >
                <div className="connect__inner-div">
                <span className="connect__text-xl connect__center-svg">{link.icon}</span>
                {link.label}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="connect__svg-2"
                >
                    <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
            </a>
            </li>
        ))}
        </>
    )
}
export default ConnectLinks;