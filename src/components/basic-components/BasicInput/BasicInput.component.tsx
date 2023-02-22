import React from 'react';

import classNames from 'classnames';

import { InputProps } from '@components/BasicInput/BasicInput.interface';
import { Container, InputField, Placeholder } from '@styles/BasicInput.style';

const BasicInput = ({
  value,
  locale,
  onChange,
  disabled,
  placeholder,
  innerPlaceholder
}: InputProps) => {
  return (
    <Container>
      {(placeholder.length) > 0 && <Placeholder>{placeholder}</Placeholder>}
      <InputField
        value={value}
        disabled={disabled}
        onChange={onChange}
        className={`${classNames({ disabled })} ${locale === 'en' ? 'en' : 'non-en'}`}
        placeholder={innerPlaceholder?.length ? innerPlaceholder : ''}
      />
    </Container>
  );
};

export default BasicInput;
