import { useWeb3Modal } from "@web3modal/wagmi/react";
import { ModalDonation } from "../ModalDonation";
import LightLogo from "/logo-light.jpg";
import { useAccount } from "wagmi";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ReloadIcon } from "@radix-ui/react-icons";

export const Navbar = () => {
  const { open } = useWeb3Modal();
  const { isConnected, address, status } = useAccount();
  const isLoading = status === "reconnecting" || status === "connecting";

  return (
    <header className="flex items-center justify-between max-w-[1300px] m-auto mt-8">
      <ModalDonation />
      <img src={LightLogo} alt="logo" className="w-14" />
      <div>
        <Button
          variant={isConnected ? "outline" : "secondary"}
          onClick={() => open()}
        >
          {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
          {isConnected && (
            <Avatar className="w-auto h-6 mr-4">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          )}
          {(isConnected && `${address?.substring(0, 10)}...`) ||
            (isLoading && "Connecting...") ||
            "Connect Wallet"}
        </Button>
      </div>
    </header>
  );
};
