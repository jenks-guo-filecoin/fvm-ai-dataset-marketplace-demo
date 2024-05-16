import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navbar() {
    return (
        <nav>
            <h1>navbar</h1>
            <Link href="/buy">Buy DataSet</Link>
            <Link href="/sell">Sell DataSet</Link>
            <ConnectButton />
        </nav>
    );
}
