import {useState} from 'react';

export default function useInput(initialValue='') {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return [value, handleChange];
};