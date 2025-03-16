import "../styles/ProjectElement.css";
import { Inter, Roboto_Slab } from "next/font/google";
const inter = Inter({
    subsets: ["latin"],
    weight: "900", 
    style: "normal",
  });

const lightinter = Inter({
    subsets: ["latin"],
    weight: "600", 
    style: "normal",
  });
const robotoSlab = Roboto_Slab({
    weight: ['100', '400', '700', '900'],
    subsets: ['latin'],
    display: 'swap',
});


export default function ProjectElement({name, description, link, date}){
    return (
        <div className = "ProjectElementContainer">
            {link != "none" && 
            <a href = {link} target="_blank" className = "OneElement">
                <p className = {`PECTitle ${inter.className}`}>{name}</p>
                <p className = {`PECDate ${lightinter.className}`}>{date}</p>
                <p className = {`PECDes ${robotoSlab.className}`}>{description}</p>
            </a>
            }
            {link == "none" &&
                <div className = "OneElement">
                    <p className = {`PECTitle ${inter.className}`}>{name}</p>
                    <p className = {`PECDate ${lightinter.className}`}>{date}</p>
                    <p className = {`PECDes ${robotoSlab.className}`}>{description}</p>
                </div>
            }
        </div>
    )
}