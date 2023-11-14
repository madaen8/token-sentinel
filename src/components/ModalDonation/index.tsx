import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "../ui/dialog";
import { DialogHeader } from "../ui/dialog";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { MailWarningIcon } from "lucide-react";
import { useState } from "react";
import { useSendTransaction } from "wagmi";
import { parseEther } from "viem";

export const ModalDonation = () => {
  const [ethAmount, setEthAmount] = useState("0.01");

  const { sendTransaction } = useSendTransaction({
    to: "moxey.eth",
    value: parseEther(ethAmount),
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Support Us</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Support Our DApp With ETH!</DialogTitle>
          <DialogDescription>
            Join us on our journey to revolutionize the blockchain space.
            Contribute towards the development and maintenance of our
            decentralized application (DApp) by donating Ethereum (ETH).
          </DialogDescription>
          <DialogDescription>
            Your donations will accelerate the growth and enhancement of our
            DApp, enabling us to offer you and the global community a better,
            faster, and more secure decentralized experience.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="ethAmount" className="text-right">
              ETH Amount
            </Label>
            <Input
              id="ethAmount"
              type="number"
              value={ethAmount}
              onChange={(e) => setEthAmount(e.currentTarget.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <Alert>
          <MailWarningIcon className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            Please note: Contributions are voluntary and non-refundable. Every
            ETH counts and is greatly appreciated. Together, let's shape the
            future of blockchain technology.
          </AlertDescription>
        </Alert>
        <DialogFooter onClick={() => sendTransaction()}>
          <Button type="submit">Donate Us</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
