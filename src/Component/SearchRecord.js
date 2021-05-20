
import React, {useEffect,useState} from 'react';
import axios from 'axios';
 
function SearchRecord() {
 
    const[search,setSearch]=useState([]);
    const[record,setRecord]=useState([]);
 
    var i =1; // For Serial no increment
 
    // For loading reacord on Windoe Load
    const loadRecords = async () => {
      axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(response => {
          setSearch(response.data);
        });
       
    }
    useEffect(() => {
        loadRecords();
    }, []);
 
     
    // Search Item by Name
    const searchRecords = () =>
    {
        axios.get(`https://jsonplaceholder.typicode.com/photos/?title=${record}`)
        .then(response => {
          setSearch(response.data);
        });
    }
     
 
  return (
  <div class="container">
  <h4 className="text-center text-success mt-5"><b>Search Movie by Name</b></h4>
    <div class="input-group mb-4 mt-3">
     <div class="form-outline">
        <input type="text" id="form1" onChange={(e)=>setRecord(e.target.value)} class="form-control" placeholder="search record" style={{backgroundColor:"#ececec"}}/>
   </div>
   <button type="button" onClick={searchRecords} class="btn btn-success">
       Search Movie
   </button>
  </div>                   
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Sr.No</th>
        <th>Movie Name</th>
        <th>Movie Poster</th>
      </tr>
    </thead>
    <tbody>
      {search.map((name)=>
      <tr>
        <td>{i++}</td>  
        <td><h6>{name.title}</h6></td>  
        <td><img class="img-fluid" src={name.thumbnailUrl} style={{maxWidth:"10%"}}  alt={name.thumbnailUrl}/></td>  
      </tr>
      )}  
 
    </tbody>
  </table>
</div>
 
  );
}
 
export default SearchRecord;