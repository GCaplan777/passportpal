import React from 'react';
import DashBoard from '../components/Dashboard';
import Hero from '../components/Hero';
import Document from '../components/Document'
import axios from 'axios'

let documentArray =[];
const Documents = () => {
    const getDocumentArray = () => {
        let userId = JSON.parse(localStorage.getItem("user")).id
        axios.get(`http://localhost:8000/api/users/${userId}`, { 
            method: "GET",
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("user")).token}`}
         }).then( res =>{
             console.log(res)
             documentArray=res.data.documentsUploaded
             console.log(documentArray)
         })
        }
        getDocumentArray()
  return (
    <>
    {documentArray.map(document => {
        return <Document  md5={document}/>
    })}
    </>
  );
};

export default Documents;