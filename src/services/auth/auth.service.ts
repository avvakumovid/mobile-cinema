import { request } from '../api/request.api'
import { IAuthResponse } from './../../shared/types/auth.interface';
import { getAuthUrl } from './../../config/api.config';
import { deleteTokensStorage, saveToStorage } from './auth.helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EnumAsyncStorage } from '@/shared/types/auth.interface';

export const AuthService = {
    async main(variant: 'register' | 'login', email: string, password: string) {
        const response = await request<IAuthResponse>({
            url: getAuthUrl(`${variant}`),
            method: 'POST',
            data: { email, password }
        })

        if (response.accessToken) await saveToStorage(response)

        return response
    },


    async logout() {
        await deleteTokensStorage()
        await AsyncStorage.removeItem(EnumAsyncStorage.USER)
    }
}