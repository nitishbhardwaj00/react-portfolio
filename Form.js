import React,{useState} from "react";

const Form = () => {
  const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [allEntry, setAllEntry] = useState([ ]);

   const submit = (e)=> {
     e.preventDefault();
     const newEntry = {email: email, password: password};
     setAllEntry([...allEntry, newEntry]);
    
   }
  return (
    <>
      <form onSubmit={submit}>
        <label htmlFor="email">Email</label>
          <input type="text" className="email" placeholder="Type your email" value={email} onChange = {(e) => setEmail(e.target.value) }/>
       

        <label htmlFor="password">Password</label>
          <input type="password" className="password"  placeholder="Type your password" value={password}
           onChange = {(e) => setPassword(e.target.value)} />
        
        <button type="submit">Submit</button>
      </form>

      <div>
       <h1>Your Input Goes here</h1>
       {
       
        allEntry.map((currentItem) => {
          return (
            <>
            
            <div className="details">
             <h4>
             {currentItem.email}
             </h4>
              <h4>
             {currentItem.password}
             </h4>
            </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Form;
