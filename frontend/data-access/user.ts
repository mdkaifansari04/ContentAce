import axios from 'axios';
import { UserBody, UserUpdateResponse } from './data-types';

const userApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST_URL,
});

// prettier-ignore
export const update = async(option : UserBody)=>{
    const {data} = await userApi.put<UserUpdateResponse>(`/user/${option.userId}`, option)
    return data
}
