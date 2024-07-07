import React from "react";

interface CommonSectionProp {
  children: React.ReactNode;
}

export function MainSectionWrapper(props: CommonSectionProp) {
  return (
    <main className="relative h-screen w-full overflow-x-hidden overflow-y-auto py-14 px-6 md:px-14">
      {props.children}
    </main>
  );
}
