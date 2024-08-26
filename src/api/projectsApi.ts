import axios from "axios"


const getProjects = async () => {
    const response =await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}`
    )
}