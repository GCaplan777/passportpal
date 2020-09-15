import React from 'react';
import DashBoard from '../components/Dashboard';
import Hero from '../components/Hero';
import Document from '../components/Document'
import axios from 'axios'
const Documents = () => {
    const getDocumentArray = () => {
        let userId = JSON.parse(localStorage.getItem("user")).id
        fetch(`http://localhost:8000/api/userFiles/Bearer${JSON.parse(localStorage.getItem("user")).id}`, { 
            method: "GET",
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,}
         }).then( r=>{
             console.log("hey" + r)
         })
        }
        getDocumentArray()
  return (
    <>
      <Document />
    </>
  );
};

export default Documents;