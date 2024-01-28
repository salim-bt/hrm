import {useAuth} from "react-oidc-context";
import {Head} from "@/layouts/head";
import {Navbar} from "../components/navbar";
import {Button, Link} from "@nextui-org/react";
import { LoaderIcon, LogInIcon } from "lucide-react";
import Login from "@/components/login";

export default function DefaultLayout({
                                          children,
                                      }: {
    children: React.ReactNode;
}) {
    const {
        isAuthenticated,
        activeNavigator,
        isLoading,
    } = useAuth();

    switch (activeNavigator) {
        case "signinResourceOwnerCredentials":
          return <main
            className="flex flex-col items-center justify-center min-h-screen py-2"
          >
            <LoaderIcon 
                className="animate-spin text-primary spinner"
                size={100} 
            />
            <div className="text-2xl font-bold animate-ping">Signing you in...</div>
          </main>;
        case "signoutSilent":
          return <main
          className="flex flex-col items-center justify-center min-h-screen py-2"
        >
          <LoaderIcon 
              className="animate-spin text-primary spinner"
              size={100} 
          />
          <div className="text-2xl font-bold animate-ping">Signing you out...</div>
        </main>;
      }
    
      if (isLoading) {
        return <div>Loading...</div>;
      }

    console.log(isAuthenticated);

    return isAuthenticated?(
        <div className="relative flex flex-col h-screen">
            <Head/>
            <Navbar/>
            <main className="container mx-auto max-w-7xl px-6 w-full flex flex-col justify-center items-center">
                {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
                <Link
                    isExternal
                    className="flex items-center gap-1 text-current"
                    href="https://newedge.bt"
                    title="nextui.org homepage"
                >
                    <span className="text-default-600">Powered by</span>
                    <p className="text-primary">New Edge Technologies Pvt. Ltd</p>
                </Link>
            </footer>
        </div>
    ):(
        <div className="flex flex-col h-screen w-full">
            <main className="w-full lg:max-w-lg flex-grow flex flex-col justify-center items-center mx-auto">
                <Login/>
            </main>
        </div>
    )
}
