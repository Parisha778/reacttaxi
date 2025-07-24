import React from 'react'

function courseAjouter() {

const [courseAjouter,setCourseAjouter]= useState ({
    isActive: true
})

const handleChange =(event)=>{
    const { name,value} = event.target
    setCourseAjouter(courseAjouter => ({...courseAjouter,[name]: value}))
}

// const handleSubmit = async(event)=>{
//     event.preventDefault()
//     try{
//     await axios.get('http://localhost:8000/api/course/ajouter',courseAjouter)
//     }catch(e){
//         console.log(e.message);
//     }
// }

  return (
    <>
    <div className="ms-5">
<form onSubmit={handleSubmit}>
    
      <div className="mb-3">
      <label htmlFor="exampleInputPrenom1" className="form-label">Prénom</label>
      <input type="text"
      name="prenom"
      className="form-control"  aria-describedby="prenom"
      onChange={handleChange}/>
      </div>

      <div className="mb-3">
      <label htmlFor="exampleInputNom1" className="form-label">Nom</label>
      <input type="text"
      name="nom"
      className="form-control"  aria-describedby="nom"
      onChange={handleChange}/>
      </div>

      <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Addresse Mail</label>
      <input type="email"
      name="email"
        className="form-control" aria-describedby="email"
      onChange={handleChange}/>
      </div>
    
     <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" />
     <label className="form-check-label" htmlFor="exampleCheck1">Vérifier</label>
    </div>

    <button type="submit" className="btn btn-primary">Ajouter</button>
</form>
</div>
    </>
  )
}

export default courseAjouter