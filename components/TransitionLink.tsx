import React from 'react';
import { useTransition } from '../context/TransitionContext';

interface TransitionLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({ to, className, children, onClick, style }) => {
  const { navigateWithTransition } = useTransition();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) onClick(e);
    navigateWithTransition(to);
  };

  return (
    <a href={to} className={className} onClick={handleClick} style={style}>
      {children}
    </a>
  );
};
