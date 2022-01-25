import { useRouter } from 'next/router'
import en from '../locale/en'
import vi from '../locale/vi'


const useTrans = () => {
    const { locale } = useRouter()
    const trans = locale === 'vi' ? vi : en
    return trans
}

export default useTrans