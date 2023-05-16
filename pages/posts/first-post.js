import Link from "next/link";
import Image from "next/image";

export default function FirstPost(){
    return (
        <>
            <h1>First Posts</h1>
            <Image
                src="/images/Emoji.PNG" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="Emoji"
                />
            <h2>
                <Link href='/'>Back to Home</Link>
            </h2>
        </>
    )
}
