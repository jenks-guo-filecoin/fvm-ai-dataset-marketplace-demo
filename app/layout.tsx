import Link from 'next/link'
import '../styles/globals.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <nav>
                    <h1>navbar</h1>
                    <Link href="/buy">Buy DataSet</Link>
                    <Link href="/sell">Sell DataSet</Link>
                </nav>
                {children}
            </body>
        </html>
    )
}