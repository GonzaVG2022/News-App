import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { setIsLoading } from "../store/slices/isLoading.slice"

const NewsDetail = () => {
  const { id } = useParams()
  const [ detail, setDetail ]= useState( {} )
  const dispatch = useDispatch()
  useEffect( () => {
    dispatch( setIsLoading( true ) )
    axios
    .get(`https://news-app-api.academlo.tech/news/${id}/`)
    .then((resp) => {
      setDetail(resp.data);
      dispatch(filterCategoriesThunk(resp.data.category?.id));
    })
    .catch((error) => console.error(error))
    .finally(() => {
      setTimeout(() => {
        dispatch(setIsLoading(false));
      }, 200);
    });
  }, [])
  return (
    <div>
       <h1>New Detail</h1> 
    </div>
  )
}

export default NewsDetail