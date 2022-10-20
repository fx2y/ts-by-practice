import {FieldError, UseFormRegister} from "react-hook-form";
import {FormControl, FormHelperText, FormLabel, forwardRef, Input, Textarea} from "@chakra-ui/react";

export type InputFieldProps = {
    type?: 'text' | 'email' | 'password' | 'textarea';
    label?: string;
    error?: FieldError;
} & Partial<ReturnType<UseFormRegister<Record<string, unknown>>>>;

export const InputField = forwardRef(
    (props: InputFieldProps, ref) => {
        const {type = 'text', label, error, ...rest} = props;

        return <FormControl>
            {label && <FormLabel>{label}</FormLabel>}
            {type === 'textarea' ? (
                <Textarea
                    ref={ref}
                    bg="white"
                    rows={8}
                    {...rest}
                />
            ) : (
                <Input bg="white" type={type} ref={ref} {...rest}/>
            )}
            {error && <FormHelperText color="red">{error.message}</FormHelperText>}
        </FormControl>
    }
);