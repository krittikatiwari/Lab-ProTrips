import React,{useState,useEffect} from 'react'

export default function Forms() {


    const [first, setfirst] = useState({
        Name:'',
        Email:'',
        Phone:'',
        password:'',
        confirmpassword:'',
    });

    const [passwordShown, setPasswordShown] = useState(false);
    const [repeatPasswordShown, setRepeatPasswordShown] = useState(false);


    const change =(e)=>{
        if(e.target.name==='name'){
            setfirst({
                ...first,Name:e.target.value,
                
            })
        }
        else if(e.target.name==='Email'){
            setfirst({
                ...first,Email:e.target.value,
              
            })
        }
        else if(e.target.name==='phone'){
            setfirst({
                ...first,Phone:e.target.value,
                
            
            })
        }
        else if(e.target.name==='password'){
            setfirst({
                ...first,password:e.target.value,
                

            })
        }

        else if(e.target.name==='confirmpassword'){
            setfirst({
                ...first,confirmpassword:e.target.value,
                

            })
        }
        
    }

    const [Error, setError] = useState({});



    useEffect(()=>{
        console.log(Error)
        if(Object.keys(Error).length===0 && sub){
            console.log(first);
        }
    },[Error])

    const [sub,onsub] = useState(false);

    const submit=(e)=>{
        e.preventDefault();
        setError(validat(first))
        onsub(true);
    }



    const validat=(value)=>{
        const error={};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/i;
        const regexNum = /(\d{3})[ -]?(\d{3})[ -]?(\d{4})/i;


        if(!value.Name){
            error.name="User Name is Required";
        }else if(value.Name.length<3){
            error.name="name must be greater than 3 characters"
        }else if(value.Name.length>30){
            error.name="name must be smaller than 30 characters"
        }
        if(!value.Email){
            error.Email="Email address is required";
        }else if (!regexEmail.test(value.Email)) {
            error.Email = "This is not a valid email format!";
          }
        if(!value.Phone){
            error.Phone="Mobile number is Required";
        }else if(!regexNum.test(value.Phone)){
            error.Phone="This is not a valid number"
        }

        if(!value.password){
            error.password="Password is required";
        }else if(!regexPass.test(value.password)){
            error.password="password must be greater than 10 characters and atleast contain one special character"
        }
        if(!value.confirmpassword){
            error.confirmpassword="Password is required";
        }else if(value.password!==value.confirmpassword){
            error.confirmpassword="password does't match"
        }

        return error;


    }


  return (
    <div>
        {
        (Object.keys(Error).length===0 && sub)?<div>
            <h1 style={{color:'black'}} >Signed in succesfully</h1>
            
            </div>:
            <div className='main'>
        <div className='main2'>
            <h1>Register Here!</h1>
            <form onSubmit={submit}>
            <div className='input'>
                
                <div>
                <input placeholder='Name' value={first.Name} onChange={(e)=>change(e)} name='name' />
                </div>
            </div>
            <p>{Error.name}</p>


            <div className='input'>
                <div>
                <input placeholder='Email' value={first.Email}  onChange={(e)=>change(e)} name='Email' />
                </div>
            </div>
            <p>{Error.Email}</p>


            <div className='input'>
                <div> 
                <input placeholder='Phone No.' value={first.Phone} onChange={(e)=>change(e)} name='phone' />
                </div>
            </div>
            <p>{Error.Phone}</p>


            <div className='inputpass'>
                
                <div className='inputpass2' >
                <input placeholder='Password' type={passwordShown ? "text" : "password"} value={first.password} onChange={(e)=>change(e)} name='password' />   
                
                </div>
                <h2 id="pass" onClick={()=>setPasswordShown(!passwordShown)}>👁</h2>
            </div>
            <p>{Error.password}</p>


            <div className='inputpass'>
                
                <div className='inputpass2' >
                <input placeholder='Confirm Password' type={repeatPasswordShown ? "text" : "password"} value={first.confirmpassword} onChange={(e)=>change(e)} name='confirmpassword' />  
               
                </div>
                <h2 id="pass" onClick={()=>setRepeatPasswordShown(!repeatPasswordShown)}>👁</h2>
            </div>
            <p>{Error.confirmpassword}</p>

            <div className='button'>
                <button>
                    Submit
                </button>
            </div>


        </form>
            </div>
            </div>
            }
    </div>
  )
}