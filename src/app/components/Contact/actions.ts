
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

  console.log('VERCEL_URL', process.env.VERCEL_URL)
  const url =
    process.env.VERCEL_URL
      ? process.env.VERCEL_URL + 'api/sendEmail'
      : process.env.NEXT_PUBLIC_VERCEL_URL + '/api/sendEmail'
  console.log('url', url)
  try {
    const res = await axios.post(url, data)
    console.log(res) //check now
  } catch (e) {
    console.log('e', e)
  }
}

