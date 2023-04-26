import { Bars3Icon } from "@heroicons/react/20/solid";
import React, { ReactNode, useState } from "react";

import SideBar from "./SideBar";
import { IconButton } from "@/components/ui/icon-button";

// Header
const Header = ({
  pageTitle,
  actions,
}: {
  pageTitle: string;
  actions: ReactNode;
}) => {
  const [showSidebarMenu, setShowSidebarMenu] = useState(false);

  return (
    <>
      {showSidebarMenu && (
        <SideBar mode="mobile" setShowSidebarMenu={setShowSidebarMenu} />
      )}
      <header className="sticky top-0 z-40 flex-none bg-white/[0.5] py-2 backdrop-blur-md backdrop-filter transition-colors duration-300 lg:pl-0 border-b">
        <div className="flex h-14 items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-3">
            <IconButton
              className="bg-white focus:border-2 lg:hidden"
              variant="secondary"
              size="sm"
              onClick={() => setShowSidebarMenu(true)}
            >
              <Bars3Icon className="w-6" />
            </IconButton>
            <h1 className="h5 block capitalize sm:hidden text-3xl font-bold">
              {pageTitle}
            </h1>
            <h1 className="h3 hidden capitalize sm:block text-3xl font-bold">
              {pageTitle}
            </h1>
          </div>

          <div className="flex gap-2">
            {actions}
            {/* <IconLink
              href={
                pathname === '/notifications/[id]'
                  ? `/notifications/${query.id}`
                  : pathname === '/devices/[id]'
                  ? `/devices/${query.id}`
                  : pathname
              }
              locale={locale === 'en' ? 'zh' : 'en'}
              variant='outline'
              size='lg'
              className='hidden sm:block'
            >
              {locale}
            </IconLink> */}

            {/* Theme Toggle */}
            {/* <IconButton
              type='button'
              variant='outline'
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className='hidden sm:block'
            >
              {theme === 'light' ? (
                <SunIcon className='w-7' />
              ) : (
                <MoonIcon className='w-7 p-0.5' />
              )}
            </IconButton> */}
          </div>
        </div>
      </header>
    </>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="mt-auto w-full border-t py-4 px-4 text-gray-700 lg:px-8">
      <div className="w-full text-center md:text-left">
        <h5 className="label-sm mb-1">
          InSpect
          {/* {{ app.name }} */}
        </h5>
        <p className="text-xs text-gray-600">
          Copyright © {new Date().getFullYear()} invix. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default function Layout({
  pageTitle,
  children,
  rightSideActions,
}: {
  pageTitle: string;
  children: React.ReactNode;
  rightSideActions?: React.ReactNode;
}) {
  return (
    <div className="fixed top-0 left-0 flex h-full min-h-[100svh] w-screen  antialiased transition-colors duration-300">
      <aside>
        <SideBar mode="normal" />
      </aside>
      <div className="flex w-full flex-col overflow-auto">
        <Header pageTitle={pageTitle} actions={rightSideActions} />
        <main className="w-full px-4 pt-6 pb-10 lg:px-8 h-full">
          {children}
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
