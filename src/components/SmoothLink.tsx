import React from "react";

interface SmoothLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string; // expects an id like "#about"
}

export const SmoothLink: React.FC<SmoothLinkProps> = ({ to, children, onClick, ...rest }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (to && to.startsWith('#')) {
      e.preventDefault();
      const targetId = to.slice(1);
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (typeof window !== 'undefined') {
          window.location.hash = to;
        }
      }
    }
    if (onClick) onClick(e);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};


