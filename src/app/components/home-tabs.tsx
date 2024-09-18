"use client";
import { useState } from "react";

interface HomeTabsProps {
  className?: string; // optional className prop
}

export default function HomeTabs({ className }: HomeTabsProps) {
    // Step 1: Create a state variable to track the selected tab
    const [selectedTab, setSelectedTab] = useState<string>('About'); // Default selected tab
  
    // Step 2: Define the tabs (you can customize this if needed)
    const tabs = [
        { name: 'About', href: '#about' },          // Linking to section with id="about"
        { name: 'Experience', href: '#experience' }, // Linking to section with id="experience"
        { name: 'Projects', href: '#projects' },     // Linking to section with id="projects"
      ];
  
    return (
      <nav className="hidden lg:block">
        <ul className={className}>
          {tabs.map((tab) => (
            <li key={tab.name}>
              <a
                href={tab.href}
                onClick={() => setSelectedTab(tab.name)} // Step 3: Set the clicked tab as the selected one
                className={`group flex items-center py-3 cursor-pointer ${
                  selectedTab === tab.name
                    ? 'text-slate-200' // Add active styles here
                    : 'text-slate-500'
                }`}
              >
                <span
                  className={`nav-indicator mr-4 h-px w-8 transition-all ${
                    selectedTab === tab.name
                      ? 'w-16 bg-slate-200' // Add active indicator styles here
                      : 'bg-slate-600'
                  }`}
                ></span>
                <span
                  className={`nav-text text-xs font-bold uppercase tracking-widest transition-all ${
                    selectedTab === tab.name
                      ? 'text-slate-200' // Active text color
                      : 'group-hover:text-slate-200'
                  }`}
                >
                  {tab.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  

/*export default function HomeTabs({ className }: HomeTabsProps) {
  return (
    <>
    <nav className="hidden lg:block">
      <ul className={className}>
        <li>
          <a className="group flex items-center py-3">
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              About
            </span>
          </a>
        </li>
        <li>
        <a className="group flex items-center py-3">
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              Experience
            </span>
          </a>
        </li>
        <li>
        <a className="group flex items-center py-3">
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              Projects
            </span>
          </a>
        </li>
      </ul>
      </nav>
    </>
  );
}*/
