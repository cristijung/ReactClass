import { Link } from "react-router-dom";

interface LinkProps {
  children: React.ReactNode; //esta propriedade define a espera de mais de um elemento filho
  to: string;
}

export default function LinkMenu({ children, to }: LinkProps): JSX.Element {
  return (    
      <Link to={to}>{children}</Link>   
  );
}
