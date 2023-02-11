type TTheme = 'dark' | 'light';

export interface ChangeThemeProps {
  theme: TTheme;
  onClick: () => void | never;
}
