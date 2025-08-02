import React from "react";

interface authProps {
  children: React.ReactNode;
}
function layout({ children }: authProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
}

export default layout;
