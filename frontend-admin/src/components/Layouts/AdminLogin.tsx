import { Button } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

export function AdminLogin() {
  return (
    <div className="bg-adminlogin flex flex-col px-4">
      <div className="m-auto relative">
        <div className="max-w-[670px] h-[500px] md:h-[450px] text-mainblue m-auto flex flex-col md:flex-row relative rounded-3xl overflow-hidden shadow-box">
          <div className="absolute left-8 top-8">
            <img src={`${import.meta.env.BASE_URL}/assets/images/logo.png`} alt="" />
          </div>
          <div className="w-full md:w-1/2 h-1/2 md:h-full bg-white flex px-10">
            <div className="mt-24 md:m-auto">
              <h1 className="text-[40px] font-bold max-md:text-center">Welcome</h1>
              <p className="font-bold mt-4">to admin panel please enter your login details</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-1/2 md:h-full bg-lightgrey flex px-10">
            <div className="flex flex-col w-full my-auto">
              <div className="flex flex-col">
                <p className="font-semibold md:text-right mb-2">Username</p>
                <div className="relative">
                  <input type="text" className="input-loginpage" placeholder="Type your username" />
                  <UserOutlined className="absolute left-1 bottom-2 text-[16px]" />
                </div>
              </div>
              <div className="flex flex-col mt-14">
                <p className="font-semibold md:text-right mb-2">Password</p>
                <div className="relative">
                  <input
                    type="password"
                    className="input-loginpage"
                    placeholder="Type your password"
                  />
                  <LockOutlined className="absolute left-1 bottom-2 text-[16px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="left-0 bottom-[-70px] absolute flex justify-center w-full">
          <Button type="primary" shape="round" size={"large"}>
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
}
