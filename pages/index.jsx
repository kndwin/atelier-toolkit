import {useRouter} from "next/dist/client/router"
import {useEffect} from "react"

const index = (props) => {
	const router = useRouter()
	useEffect(() => {
		router.push('/home')
	}, [])
	return null
}

export default index
