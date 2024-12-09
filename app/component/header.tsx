import Link from "next/link";

export default function Header(){
    return(
        <>
        <ul className="h-20 mx-20 py-5 flex items-center justify-between">
            <li>
                <Link href={'/'}>Home</Link>
            </li>
            <li>
                <Link href={'/addBook'}>AddBook</Link>
            </li>
        </ul>
        </>
    )
}