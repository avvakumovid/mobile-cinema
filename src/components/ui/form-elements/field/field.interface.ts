import { Control, FieldPath, RegisterOptions, FieldValues } from 'react-hook-form'
import { TextInputProps } from 'react-native';

export interface IField<T extends FieldValues> extends Omit<TextInputProps, 'onChange' | 'onChangeText' | 'value'> {
    control: Control<T>
    name: FieldPath<T>
    rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'ValueAsDate' | 'setValueAs' | 'disabled'>
    className?: string
    placeholder?: string
}