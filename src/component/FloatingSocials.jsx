"use client";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
// Floating Social Icons
export default function FloatingSocials() {
    return (
        <div className="fixed left-4 bottom-1/2 flex flex-col gap-4 text-2xl z-50 text-gray-700 dark:text-gray-200">
            <a
                href="https://github.com/Anayaraj02"
                target="_blank"
                className="hover:text-purple-600 transition"
            >
                <FaGithub />
            </a>
            <a
                href="https://www.linkedin.com/in/anaya-raj-bb058b264/"
                target="_blank"
                className="hover:text-blue-600 transition"
            >
                <FaLinkedin />
            </a>
            <a
                href="https://leetcode.com/u/AnayaRaj/"
                target="_blank"
                className="hover:text-blue-400 transition"
            >
                <SiLeetcode />
            </a>
        </div>
    );
}
