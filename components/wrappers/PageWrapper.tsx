import React from "react";
import styles from "@/css/page-wrapper.module.css";
import Footer from "../footer/Footer";
import dynamic from "next/dynamic";

const Nav = dynamic(() => import("@/components/nav/NavWrapper"), {
  ssr: false,
});

const PageWrapper = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <main
      className={styles.wrapper}
      style={{
        ...style,
      }}
    >
      <Nav />
      {children}
      <Footer />
    </main>
  );
};

export default PageWrapper;
