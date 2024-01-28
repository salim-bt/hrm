import {
    Button,
    Kbd,
    Link,
    Input,
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem,
} from "@nextui-org/react";

import {link as linkStyles} from "@nextui-org/theme";

import {siteConfig} from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import {ThemeSwitch} from "@/components/theme-switch";
import {
    SearchIcon,
} from "@/components/icons";

import {Logo} from "@/components/icons";
import {useRouter} from "next/router";
import {User} from "@nextui-org/user";
import {Dropdown} from "@nextui-org/dropdown";
import {LogOutIcon, Settings2Icon, User2Icon} from "lucide-react";
import {useAuth} from "react-oidc-context";

export const Navbar = () => {

    const router = useRouter();

    const {signoutSilent,user} = useAuth();

    const searchInput = (
        <Input
            aria-label="Search"
            aria-labelledby="Search"
            classNames={{
                inputWrapper: "bg-default-100",
                input: "text-sm",
            }}
            endContent={
                <Kbd className="hidden lg:inline-block" keys={["command"]}>
                    K
                </Kbd>
            }
            labelPlacement="outside"
            placeholder="Search..."
            startContent={
                <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0"/>
            }
            type="search"
        />
    );

    return (
        <NextUINavbar maxWidth="xl" position="sticky">
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand className="gap-3 max-w-fit">
                    <NextLink className="flex justify-start items-center gap-1" href="/">
                        <Logo/>
                        <p className="font-bold text-inherit">NET</p>
                    </NextLink>
                </NavbarBrand>
                <div className="hidden lg:flex gap-4 justify-start ml-2">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href}>
                            <NextLink
                                className={clsx(
                                    linkStyles({color: "foreground"}),
                                    "data-[active=true]:text-primary data-[active=true]:font-medium",
                                    "capitalize",
                                    item.href === router.pathname && "font-medium text-primary"
                                )}
                                href={item.href}
                            >
                                {item.label}
                            </NextLink>
                        </NavbarItem>
                    ))}
                </div>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
                <NavbarItem className="hidden sm:flex gap-2">
                    <ThemeSwitch/>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
                <Dropdown>
                    <DropdownTrigger>
                        <User name={user?.profile.name} description={user?.profile.nickname} avatarProps={{src: "https://i.pravatar.cc/150?u=a04258114e29026702d"}}/>
                    </DropdownTrigger>
                    <DropdownMenu
                        className="w-32 bg-white/50 backdrop-blur-lg backdrop-filter"
                        style={{maxHeight: "calc(100vh - 2rem)"}}
                    >
                        <DropdownSection>
                            <DropdownItem
                            >
                                <NextLink
                                    href="/profile"
                                    className="flex items-center"
                                >
                                    <User2Icon size={16} className="mr-2"/>
                                    Profile
                                </NextLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NextLink 
                                    href="/settings"
                                     className="flex items-center">
                                    <Settings2Icon size={16} className="mr-2"/>
                                    Settings
                                </NextLink>
                            </DropdownItem>
                            <DropdownItem
                                onClick={async() => {
                                    await signoutSilent({
                                        post_logout_redirect_uri: process.env.NEXTAUTH_URL,
                                    });
                                }}
                            >
                                <div className="flex items-center text-danger">
                                    <LogOutIcon size={16} className="mr-2"/>
                                    Logout
                                </div>
                            </DropdownItem>
                        </DropdownSection>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>

            <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                <Link href="/leave/apply">
                    <Button
                        variant="bordered"
                        color="primary"
                    >Apply Leave</Button>
                </Link>
                <ThemeSwitch/>
                <NavbarMenuToggle/>
            </NavbarContent>

            <NavbarMenu>
                <User name="Salim Pradhan" description="Software Engineer" avatarProps={{src: "https://i.pravatar.cc/150?u=a04258114e29026702d"}}/>
                {searchInput}
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {siteConfig.navMenuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    item.href === router.pathname
                                        ? "primary"
                                        : index === siteConfig.navMenuItems.length - 1
                                            ? "danger"
                                            : "foreground"
                                }
                                href={item.href}
                                size="lg"
                            >
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                    <NavbarMenuItem
                        className="mt-2"
                    >
                        <Button
                            className="w-full"
                            variant="solid"
                            color="danger"
                            onClick={async() => {
                                await signoutSilent({
                                    post_logout_redirect_uri: process.env.NEXTAUTH_URL,
                                });
                            }}
                        >Logout</Button>
                    </NavbarMenuItem>
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
};
