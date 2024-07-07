'use client';
import { cn } from '@/lib/utils';
// import { useClerk } from "@clerk/nextjs";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Icon from '../shared/iconImage';
import Logo from '../shared/logo';

function SidebarMenubar(props: { className?: string }) {
  return (
    <div
      className={cn(
        'px-6 md:py-5 overflow-x-hidden bg-background overflow-y-auto min-w-72 max-w-72 h-screen border-r-2 border-border hidden md:block',
        props.className
      )}
    >
      <div className="flex justify-start md:justify-center items-center py-3 pb-5 md:pb-8">
        <Logo />
      </div>
      <div className="flex flex-col">
        <SidebarSection title="Template">
          <SidebarMenuItem
            label="Tools"
            href="/dashboard"
            icon={<Icon src="tools.svg" />}
          />
        </SidebarSection>
        <SidebarSection title="Assistant">
          <SidebarMenuItem
            label="AI Chat"
            href="/dashboard/chat"
            icon={<Icon src="chat.svg" />}
          />
        </SidebarSection>
        <SidebarSection title="Account">
          <SidebarMenuItem
            label="Profile"
            href="/dashboard/profile"
            icon={<Icon src="profile.svg" />}
          />
          {/* <SidebarMenuItem
            label="Premium"
            href="/dashboard/premium"
            icon={<Icon src="premium.svg" />}
          /> */}
        </SidebarSection>
        <SidebarSection title="Other">
          <SidebarMenuItem
            label="Request a feature"
            href="/dashboard/request"
            icon={<Icon src="request.svg" />}
          />
          <SidebarMenuItem
            label="Contact"
            href="/dashboard/contact"
            icon={<Icon src="help.svg" />}
          />
          <SidebarMenuItem
            label="Logout"
            href="/sign-in"
            icon={<Icon src="logout.svg" />}
            isSignOut
          />
        </SidebarSection>
      </div>
    </div>
  );
}

function SidebarSection(props: { title: string; children: React.ReactNode }) {
  return (
    <div className="py-4 flex flex-col gap-4">
      <h5 className="font-semibold text-[#7F8191] text-sm uppercase leading-5 tracking-wide">
        {props.title}
      </h5>
      {props.children}
    </div>
  );
}

function SidebarMenuItem(props: {
  href?: string;
  label: string;
  icon: React.ReactNode;
  isSignOut?: boolean;
}) {
  const path = usePathname();
  // const { signOut } = useClerk();
  const isActive = props.href === path;

  const content = (
    <div
      // onClick={() => props.isSignOut && signOut({ redirectUrl: '/sign-in' })}
      className={cn(
        'group hover:bg-foreground rounded-md px-4 flex items-center gap-2 py-2.5 [&_svg]:!text-primary !stroke-primary [&_svg]:transition-all [&_svg]:duration-150',
        {
          'bg-foreground': isActive,
        }
      )}
    >
      {props.icon}
      <p
        className={cn(
          'text-sm -tracking-4% transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-white lg:text-base',
          {
            'font-semibold  text-primary': isActive,
            'font-medium text-primary-foreground': !isActive,
          }
        )}
      >
        {props.label}
      </p>
    </div>
  );

  if (props.href) {
    return <Link href={props.href}>{content}</Link>;
  }
}

export default SidebarMenubar;
