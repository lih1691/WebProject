import { useState } from 'react';
import { ChangeInterface } from '@Interfaces/Hooks/ChangeInterface'


/*
* 초기값을 받아 change Hook을 생성 <br>
* 사용 예시 : const { value, setValue, onChange } = useChange<string>('');
* @param: T {any} 적용 타입 initialValue = 초기값
* @returns {T, Dispatch<SetStateAction<T>>, void} useState의 현재 값, 업데이트 함수를 반환
*/
export const useChange = <T>(initialValue: T): ChangeInterface<T> => {
    const [value, setValue] = useState<T>(initialValue);
    
    const onChange = (newValue: T) => {
        setValue(newValue);
    };
    
    return {
        value,
        setValue,
        onChange,
    };
};