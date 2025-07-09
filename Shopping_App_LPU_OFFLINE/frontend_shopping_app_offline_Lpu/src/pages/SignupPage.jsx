import { Navbar } from "../components/Navbar"

const SignupPage=()=>{

    return (
        <div>
            <Navbar/>
            <div >
                <form className="flex flex-col gap-5 p-6 m-4 bg-blue-200 max-w-120">
                    <div className="flex gap-4"> 
                    <label name="username" className="b-1 py-1 px-2 rounded-md bg-blue-600">UserName: </label>
                    <input type="text" name="username" placeholder="Enter username" className="b-1 py-1 px-2 rounded-md bg-blue-400"/>

                    </div>
                    <div className="flex gap-4">
                    <label name="fullname" className="b-1 py-1 px-2 rounded-md bg-blue-600">FullName: </label>
                    <input type="text" name="fullname" placeholder="Enter your name" className="b-1 py-1 px-2 rounded-md bg-blue-400"/>

                    </div>
                    <div className="flex gap-4">

                    <label name="email" className="b-1 py-1 px-2 rounded-md bg-blue-600">Email: </label>
                    <input type="email" name="email" placeholder="xxx@gmail.com" className="b-1 py-1 px-2 rounded-md bg-blue-400"/>
                    </div>
                    <div className="flex gap-4">
                    <label name="newpassword" className="b-1 py-1 px-2 rounded-md bg-blue-600">New Password: </label>
                    <input type="password" name="newpassword" placeholder="Enter New Password" className="b-1 py-1 px-2 rounded-md bg-blue-400"/>

                    </div>
                    <div className="flex gap-4">
                    <label name="confirmpassword" className="b-1 py-1 px-2 rounded-md bg-blue-600">Confirm Password: </label>
                    <input type="password" name="confirmpassword" placeholder="Confirm Password" className="b-1 py-1 px-2 rounded-md bg-blue-400"/>

                    </div>
                </form>
            </div>
            
        </div>
    )
}

export{SignupPage}