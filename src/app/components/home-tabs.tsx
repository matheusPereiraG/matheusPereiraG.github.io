export type HomeTab = {
  id: string,
  name: string,
  isSelected: boolean,
  href: string,
}

export type HomeTabsProps = {
  className?: string; // optional className prop
  homeTabs: (HomeTab)[];
  onClick: (id: string) => void;
}

export default function HomeTabs(props: HomeTabsProps) {
    return (
      <nav className="hidden lg:block">
        <ul className={props.className}>
          {props.homeTabs.map((tab) => (
            <li key={tab.name}>
              <a
                href={tab.href}
                onClick={() => props.onClick(tab.id)} // Step 3: Set the clicked tab as the selected one
                className={`group flex items-center py-3 cursor-pointer ${
                  tab.isSelected
                    ? 'text-slate-200' // Add active styles here
                    : 'text-slate-500'
                }`}
              >
                <span
                  className={`nav-indicator mr-4 h-px w-8 transition-all ${
                    tab.isSelected
                      ? 'w-16 bg-slate-200' // Add active indicator styles here
                      : 'bg-slate-600'
                  }`}
                ></span>
                <span
                  className={`nav-text text-xs font-bold uppercase tracking-widest transition-all ${
                    tab.isSelected
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