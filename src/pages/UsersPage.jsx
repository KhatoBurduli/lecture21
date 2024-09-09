import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../store/users/users.thunks"

const UsersPage = () => {
    const dispatch = useDispatch()
    const {users, loading, error} = useSelector(state => state.users)

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    if(error) return <div>{error}</div>
    if(loading) return <div>Loading . . .</div>
    console.log(users)
    return <div>users</div>
}

export default UsersPage