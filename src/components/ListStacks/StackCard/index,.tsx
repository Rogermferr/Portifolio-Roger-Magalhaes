import { IStack } from "../interfaces";
import { StackCardStyle } from "./style";

const StackCard = ({ title, img: Icon }: IStack) => {
  const isString = typeof Icon === "string";

  return (
    <StackCardStyle>
      {isString ? (
        <img src={Icon} alt={title} height="84px" width="84px" />
      ) : (
        <Icon size={84} />
      )}
      <p>{title}</p>
    </StackCardStyle>
  );
};

export default StackCard;
