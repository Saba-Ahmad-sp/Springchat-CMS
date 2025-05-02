'use client';
import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [openSection, setOpenSection] = useState<null | string>(null);
  const pathname = usePathname();

  const chatsRef = useRef<HTMLDivElement>(null);
  const sportsRef = useRef<HTMLDivElement>(null);
  const contentManagementRef = useRef<HTMLDivElement>(null);
  const administrationRef = useRef<HTMLDivElement>(null);

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const getMaxHeight = (ref: React.RefObject<HTMLDivElement | null>, key: string) =>
    openSection === key && ref.current ? ref.current.scrollHeight : 0;

  const linkClass = (href: string) =>
    `block pl-[52px] py-[13.5px] rounded-lg ${
      pathname === href ? "bg-[#F1F5F9] text-black" : "hover:bg-[#F1F5F9] "
    }`;

  return (
    <div className="border-[#F1F5F9] border-r-2 min-h-screen">
      <div className="flex flex-col mt-[50px] w-[244px] mx-7 gap-y-2">
        <Link
          href="/dashboard"
          className={`block rounded-lg ${pathname === "/dashboard" ? "bg-[#F1F5F9]" : "hover:bg-[#F1F5F9]"}`}
        >
          <h1 className="text-sm py-[13.5px] pl-4 font-bold">Dashboard</h1>
        </Link>

        {/* Chatspaces */}
        <button
          onClick={() => toggleSection("chats")}
          className="flex justify-between items-center w-full font-semibold text-black"
        >
          <span className="text-sm py-[13px] pl-4 font-bold">Chatspaces</span>
        </button>
        <div
          ref={chatsRef}
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: getMaxHeight(chatsRef, "chats"),
            opacity: openSection === "chats" ? 1 : 0,
          }}
        >
          <div className="mt-2 space-y-2 mb-2">
            <Link href="/chatspaces/competitions" className={linkClass("/chatspaces/competitions")}>Competitions</Link>
            <Link href="/chatspaces/teams" className={linkClass("/chatspaces/teams")}>Teams</Link>
            <Link href="/chatspaces/livechats" className={linkClass("/chatspaces/livechats")}>Livechats</Link>
          </div>
        </div>

        {/* Sports Data */}
        <button
          onClick={() => toggleSection("sports")}
          className="flex justify-between items-center w-full font-semibold text-black"
        >
          <span className="text-sm py-[13px] pl-4 font-bold">Sports data</span>
        </button>
        <div
          ref={sportsRef}
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: getMaxHeight(sportsRef, "sports"),
            opacity: openSection === "sports" ? 1 : 0,
          }}
        >
          <div className="mt-2 space-y-2 mb-2">
            <Link href="/sports-data/competitions" className={linkClass("/sports-data/competitions")}>Competitions</Link>
            <Link href="/sports-data/players" className={linkClass("/sports-data/players")}>Players</Link>
            <Link href="/sports-data/teams" className={linkClass("/sports-data/teams")}>Teams</Link>
          </div>
        </div>

        {/* Content Management */}
        <button
          onClick={() => toggleSection("content-management")}
          className="flex justify-between items-center w-full font-semibold text-black"
        >
          <span className="text-sm py-[13px] pl-4 font-bold">Content Management</span>
        </button>
        <div
          ref={contentManagementRef}
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: getMaxHeight(contentManagementRef, "content-management"),
            opacity: openSection === "content-management" ? 1 : 0,
          }}
        >
          <div className="mt-2 space-y-2 mb-2">
            <Link href="/content-management/content" className={linkClass("/content-management/content")}>Content</Link>
            <Link href="/content-management/reported-messages" className={linkClass("/content-management/reported-messages")}>Reported Messages</Link>
          </div>
        </div>

        {/* Administration */}
        <button
          onClick={() => toggleSection("administration")}
          className="flex justify-between items-center w-full font-semibold text-black"
        >
          <span className="text-sm py-[13px] pl-4 font-bold">Administration</span>
        </button>
        <div
          ref={administrationRef}
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: getMaxHeight(administrationRef, "administration"),
            opacity: openSection === "administration" ? 1 : 0,
          }}
        >
          <div className="mt-2 ml-4 space-y-2 mb-2">
            <Link href="/administration/consumers" className={linkClass("/administration/consumers")}>Consumers</Link>
            <Link href="/administration/managers" className={linkClass("/administration/managers")}>Managers</Link>
            <Link href="/administration/users" className={linkClass("/administration/users")}>Users</Link>
            <Link href="/administration/sync" className={linkClass("/administration/sync")}>Sync</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
