import { Buttons } from "./button-styled";

type Props = {
  children: React.ReactNode;
  type?: string
};

const Button = ({ children }: Props) => {
  return (
    <div>
      <Buttons>{children}</Buttons>
    </div>
  );
};

export default Button;
