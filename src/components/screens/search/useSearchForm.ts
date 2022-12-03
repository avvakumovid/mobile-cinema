import { useDebounce } from '@/hooks/useDebounce';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { ISearchFormData } from './search.interface';

export const useSearchForm = () => {
    const { control, watch } = useForm<ISearchFormData>({
        mode: 'onChange'
    })

    const searchTerm = watch('searchTerm')

    const debounceSearch = useDebounce<string>(searchTerm, 500)

    return useMemo(() => ({ debounceSearch, searchTerm, control }), [searchTerm])
}