import { HiOutlineCloudUpload } from "react-icons/hi";

export default function Card({ allClassName, title, txt }) {
    return (
        <div className={`card ${allClassName}`}>
            <div className="icon">
                <HiOutlineCloudUpload />
            </div>

            <h3>{title}</h3>
            <p>{txt} </p>
        </div>
    )
}