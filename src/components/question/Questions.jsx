export default function Questions(){
    const [questions, setQuestions] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchQuestions = async()=>{
            try{
                const response = await fetch('http://localhost:3000/questions')
                if(!response.ok){
                    throw new Error('Something went wrong')
                }
                const data = await response.json()
                setQuestions(data)
            }catch(error){
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }
        fetchQuestions()
    },[])
    if(loading){
        return <p>Loading...</p>
    }
    if(error){
        return <p>{error}</p>
    }
    if(!questions.length){
        return <p>No questions found</p>
    }
    return(
        <>
        </>
    )
}