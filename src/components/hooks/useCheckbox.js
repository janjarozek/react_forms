import {useState} from 'react';

export default function useCheckbox(initialValue='') {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.checked);
    }

    return [value, handleChange];
};