import { FadeImg } from '../core/fadeImg';
import ProfileDropdownMenu from '../menu/dropDownMenu';
import SidebarTrigger from '../sidebar/trigger';
import { Paragraph } from '../typography';
import { Button } from '../ui/button';
import Icon from './iconImage';
import Logo from './logo';

export default function MobileHeader() {
  return (
    <header className="flex md:hidden w-full px-6 py-3 md:py-5 fixed top-0 left-0 bg-background md:px-16 border border-border border-b-2 justify-between items-center">
      <Logo />
      <SidebarTrigger
        trigger={
          <Button
            size={'icon'}
            className="rounded-full bg-background border-white"
            variant={'outline'}
          >
            <Icon className="w-6 p-0.5 text-white" src="menu.svg" />
          </Button>
        }
      />
    </header>
  );
}

function UserProfile() {
  return (
    <ProfileDropdownMenu>
      <div className="flex gap-3 justify-center items-center cursor-pointer p-1">
        <FadeImg className="w-12 h-12 rounded-full" src="images/profile.png" />
        <Paragraph className="font-semibold" text="Md Kaif Ansari" />
      </div>
    </ProfileDropdownMenu>
  );
}
