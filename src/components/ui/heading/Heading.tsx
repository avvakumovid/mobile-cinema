import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { IHeading } from './heading.interface';
import cn from 'clsx';

const Heading: FC<IHeading> = ({ title, className }) => {
  return (
    <Text numberOfLines={1} className={cn('text-white text-2xl', className)}>
      {title}
    </Text>
  );
};

export default Heading;
