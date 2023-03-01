export interface BasicButtonProps {
  text: string | JSX.Element;
  small?: boolean;
  onClick?: () => void | never;
  active?: boolean;
}
