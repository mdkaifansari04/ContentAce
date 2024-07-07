"use client";
import { useRouter } from "next/navigation";
import { Fragment, useEffect } from "react";

export default function RedirectToPath(props: { path: string }) {
  const router = useRouter();
  useEffect(() => {
    router.replace(props.path);
  }, [router, props.path]);

  return <Fragment></Fragment>;
}
