// components/Text.tsx
import { Text as RNText, TextProps } from 'react-native';

interface CustomTextProps extends TextProps {
  className?: string;
}

export default function Text({ style, className, ...props }: CustomTextProps) {
  const hasFontClass = className && /font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)/.test(className);
  
  const finalClassName = hasFontClass 
    ? className 
    : `font-normal ${className || ''}`.trim();
  
  return (
    <RNText 
      style={style}
      className={finalClassName}
      {...props} 
    />
  );
}