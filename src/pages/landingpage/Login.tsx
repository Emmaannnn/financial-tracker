import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
// import { Input } from "@/components/ui/input"
import { Button } from "../../components/ui/button"
import { supabase } from "@/lib/supabaseClient";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/Dashboard"); // Navigate if already logged in
      }
  });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        navigate("/Dashboard"); // Navigate after OAuth login
    }
  });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:5173/dashboard/", // redirect after login
      },
    });
  };


  return (
    <div className="flex justify-center items-center h-screen bg-black/5">
        <div className="flex flex-col justify-center items-center shadow-lg rounded-xl p-8 gap-3 w-90 bg-white">

          <div className="flex justify-start items-center font-logo text-[#69247C] text-4xl">
            <Link to="/">FTracker</Link> 
          </div>
          <h5 className='font-logo font-light text-[#DA498D] text-sm mb-3'>
            Monitor and track your expenses daily!
          </h5>
          
          {/* <Input placeholder="Email"></Input>
          <Input placeholder="Password"></Input>

          <div className="text-start w-full text-sm">
            <h6><u className="cursor-pointer">Reset Password</u></h6>
          </div>

          <Button className="w-full cursor-pointer bg-[#69247C] hover:bg-[#69247C]/90 shadow-sm ">Log in via email</Button> */}

          <div className="flex justify-between items-center">
            <div className="h-[2px] w-20 bg-black"></div>
            <h3 className="p-3 text-xs">LOG IN WITH</h3>
            <div className="h-[2px] w-20 bg-black"></div>
          </div>

          <Button onClick={handleLogin} className="w-full cursor-pointer font-semibold bg-white hover:bg-black/5 text-black shadow-xs border ">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="-0.5 0 48 48"><path d="M9.82727273,24C9.82727273,22.4757333,10.0804318,21.0144,10.5322727,19.6437333L2.62345455,13.6042667C1.08206818,16.7338667,0.213636364,20.2602667,0.213636364,24C0.213636364,27.7365333,1.081,31.2608,2.62025,34.3882667L10.5247955,28.3370667C10.0772273,26.9728,9.82727273,25.5168,9.82727273,24" fill="#FBBC05"/><path d="M23.7136364,10.1333333C27.025,10.1333333,30.0159091,11.3066667,32.3659091,13.2266667L39.2022727,6.4C35.0363636,2.77333333,29.6954545,0.533333333,23.7136364,0.533333333C14.4268636,0.533333333,6.44540909,5.84426667,2.62345455,13.6042667L10.5322727,19.6437333C12.3545909,14.112,17.5491591,10.1333333,23.7136364,10.1333333" fill="#EB4335"/><path d="M23.7136364,37.8666667C17.5491591,37.8666667,12.3545909,33.888,10.5322727,28.3562667L2.62345455,34.3946667C6.44540909,42.1557333,14.4268636,47.4666667,23.7136364,47.4666667C29.4455,47.4666667,34.9177955,45.4314667,39.0249545,41.6181333L31.5177727,35.8144C29.3995682,37.1488,26.7323182,37.8666667,23.7136364,37.8666667" fill="#34A853"/><path d="M46.1454545,24C46.1454545,22.6133333,45.9318182,21.12,45.6113636,19.7333333L23.7136364,19.7333333L23.7136364,28.8L36.3181818,28.8C35.6879545,31.8912,33.9724545,34.2677333,31.5177727,35.8144L39.0249545,41.6181333C43.3393409,37.6138667,46.1454545,31.6490667,46.1454545,24" fill="#4285F4"/></svg><span style={{ marginLeft: "8px" }}>Google</span>
          </Button>



        </div>




    </div>
  )
}

export default Login
