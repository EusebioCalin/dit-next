
import { object, string } from 'yup'
import axios from 'axios';

export const emailValidationSchema = object({
  name: string().required(),
  email: string().email().required(),
  message: string().required(),

});

export interface EmailType {
  name: string
  email: string
  message: string
}

export const handleEmailSubmit = async (data: EmailType) => {
  const url = process.env.NEXT_PUBLIC_VERCEL_URL || 'test'
  console.log('url', url)
  try {
    const res = await axios.post(`${url}/api/sendEmail`, data)
    console.log(res) //check now
  } catch (e) {
    console.log('e', e)
  }
}

