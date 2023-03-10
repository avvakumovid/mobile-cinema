import { View, Text } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { IDropdown } from './dropdown.interface';
import DropDownPicker from 'react-native-dropdown-picker';

DropDownPicker.setTheme('dark');
DropDownPicker.setListMode('SCROLLVIEW');

const Dropdown: FC<IDropdown> = ({
  field,
  options = [],
  error,
  isLoading,
  isMulti,
  style,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<string[] | null>(field.value);
  const [items, setItems] = useState(options);

  // const getValue = useCallback((): string[] | null => {
  // 	if (field.value) {
  // 		return isMulti
  // 			? items.filter(option => field.value.indexOf(option.value) >= 0)
  // 			: items.find(option => option.value === field.value)?.value
  // 	} else return null
  // }, [field.value])

  // useEffect(() => {
  // 	if (!value) setValue(getValue())
  // }, [field.value])
  return (
    <View className='z-10' style={style}>
      <DropDownPicker
        open={isOpen}
        value={value}
        setOpen={setIsOpen}
        items={items}
        setItems={setItems}
        setValue={setValue}
        onChangeValue={(value: any) => {
          if (value) field.onChange(value);
        }}
        multiple={isMulti}
        loading={isLoading}
        mode='BADGE'
        activityIndicatorColor='#BF3335'
        style={{
          backgroundColor: '#232323',
          borderColor: error ? 'red' : 'transparent',
          paddingHorizontal: 16,
          marginVertical: 6,
        }}
        textStyle={{
          fontSize: 16,
        }}
        placeholderStyle={{
          color: '#5A595D',
        }}
        dropDownContainerStyle={{
          backgroundColor: '#232323',
        }}
        showBadgeDot={false}
      />
      {error && <Text className='text-red'>{error.message}</Text>}
    </View>
  );
};

export default Dropdown;
