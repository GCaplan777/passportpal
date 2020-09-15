import React, {useEffect, useState} from 'react'
import DashBoard from '../components/Dashboard';
import Hero from '../components/Hero';
import Document from '../components/Document'
import axios from 'axios'


const Documents = () => {
    const [documents, setDocuments] = useState([])
    // const getDocumentArray = async () => {
    //     let userId = JSON.parse(localStorage.getItem("user")).id
    //     await axios.get(`http://localhost:8000/api/users/${userId}`, { 
    //         method: "GET",
    //         headers: {
    //             'Authorization': `Bearer ${JSON.parse(localStorage.getItem("user")).token}`}
    //      }).then( async res =>{
    //          console.log(res)
    //          documentArray=await res.data.documentsUploaded
    //          console.log(documentArray)
    //      })
    //     }
    // getDocumentArray()
    
    useEffect(()=>{   
        let userId = JSON.parse(localStorage.getItem("user")).id
             axios.get(`http://localhost:8000/api/users/${userId}`, { 
                 method: "GET",
                 headers: {
                     'Authorization': `Bearer ${JSON.parse(localStorage.getItem("user")).token}`}
              }).then( res =>{
                  console.log(res)
                  setDocuments(res.data.documentsUploaded)
                 console.log(documents)
              })
             
     }, documents)

  return (
    <>
    {documents.map(document => {
        return <Document  md5={document}/>
    })} 
    </>
  );
};

export default Documents;