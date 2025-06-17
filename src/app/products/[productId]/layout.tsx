import React from "react";

export default function ProductDetailLauout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <h2>Featured products</h2>
    </>
  );
}
