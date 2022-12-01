import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  text: string;
  to?: string;
  onClick?: () => void;
  className?: string;
};

const CustomLink = ({
  text = "Button",
  to = "/",
  onClick = () => {},
  className,
}: Props) => {
  return (
    <div>
      <NavLink
        className={`${className} ${({ isActive }: any) =>
          isActive ? "active" : undefined}`}
        onClick={onClick}
        to={to}
      >
        {text}
      </NavLink>
    </div>
  );
};

export default CustomLink;
