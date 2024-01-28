import {useAuth} from "react-oidc-context";
import {Head} from "@/layouts/head";
import {Navbar} from "../components/navbar";
import {Button, Link} from "@nextui-org/react";
import { LoaderIcon, LogInIcon } from "lucide-react";
import Login from "@/components/login";
import { api } from "@/lib/trpc";
import Flow from "./flow";

export default function DefaultLayout({
                                          children,
                                      }: {
    children: React.ReactNode;
}) {
    const {
        isAuthenticated,
        activeNavigator,
        user
    } = useAuth();

    const checkUserExists = api.user.checkIfEmployeeExists.useQuery({
        email: user?.profile.email ?? "",
    });

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

    if (isAuthenticated) {
        if (checkUserExists.isLoading) {
            return <main
                className="flex flex-col items-center justify-center min-h-screen py-2"
            >
                <LoaderIcon
                    className="animate-spin text-primary spinner"
                    size={100}
                />
                <div className="text-2xl font-bold animate-ping">Checking if you are a new employee...</div>
            </main>;
        }
        if (!checkUserExists.data&&location.pathname!="/newemployee"){
            return <Flow>
                <div className="flex flex-col items-center justify-center min-h-screen py-2">
                    <LogInIcon
                        className="text-primary"
                        size={100}
                    />
                    <div className="text-2xl font-bold animate-ping">Welcome {user?.profile.name?.split(" ")[0]}!</div>
                    <p className="text-center text-foreground/50">You are a new employee. Please complete your profile.</p>
                    <Link href="/newemployee">
                        <Button className="mt-4">Complete Profile</Button>
                    </Link>
                </div>
            </Flow>
        }
        return <Flow>
            {children}
        </Flow>
    }

    return (
        <div className="flex flex-col h-screen w-full">
            <main className="w-full lg:max-w-lg flex-grow flex flex-col justify-center items-center mx-auto">
                <Login/>
            </main>
        </div>
    );
}
