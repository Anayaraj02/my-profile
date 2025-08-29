"use client"; // <-- Important: must be a client component

import { useRouter } from "next/navigation";

function Page() {
    const router = useRouter();

    return (
        <div>
            <div
                onClick={() => router.push("/contact")}
                style={{ cursor: "pointer", color: "blue" }}
            >
                Home
            </div>
        </div>
    );
}

export default Page;
