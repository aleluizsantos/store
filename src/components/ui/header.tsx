"use client";

import {
  MenuIcon,
  ShoppingCartIcon,
  LogInIcon,
  LogOutIcon,
  PercentIcon,
  ListOrderedIcon,
  HomeIcon,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Link from "next/link";
import { getInitials } from "@/lib/utils";

const Header = () => {
  const { data, status } = useSession();

  const handleLogin = async () => {
    await signIn("google");
  };

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <Card className="flex justify-between p-[1.87rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            MENU
          </SheetHeader>

          {status === "authenticated" && (
            <div className="mb-6 mt-6 flex items-center gap-2">
              <Avatar>
                {data?.user?.image && <AvatarImage src={data.user?.image} />}
                <AvatarFallback>{getInitials(data.user?.name)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span>{data.user?.name}</span>
                <p className="text-sm text-slate-300">Boas Compras</p>
              </div>
            </div>
          )}

          <div className="mt-2 flex flex-col gap-2">
            {status === "authenticated" ? (
              <Button
                onClick={handleLogout}
                variant="ghost"
                className="w-full justify-start gap-2"
              >
                <LogOutIcon size={16} /> Sair
              </Button>
            ) : (
              <Button
                onClick={handleLogin}
                variant="ghost"
                className="w-full justify-start gap-2"
              >
                <LogInIcon size={16} /> Fazer Login
              </Button>
            )}

            <SheetClose asChild>
              <Link href="/">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <HomeIcon size={16} /> Início
                </Button>
              </Link>
            </SheetClose>

            <Button variant="ghost" className="w-full justify-start gap-2">
              <PercentIcon size={16} /> Ofertas
            </Button>

            <SheetClose asChild>
              <Link href="/catalog">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <ListOrderedIcon size={16} /> Catálago
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>

      <Link href="/">
        <h1 className="text-lg font-semibold">
          <span className="text-primary">FSW </span>
          Store
        </h1>
      </Link>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
