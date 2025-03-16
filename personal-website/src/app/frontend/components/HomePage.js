import "../styles/HomePage.css";
import { Inter, Roboto_Slab } from "next/font/google";
const inter = Inter({
    subsets: ["latin"],
    weight: "900", 
    style: "normal",
  });
const robotoSlab = Roboto_Slab({
    weight: ['100', '400', '700', '900'],
    subsets: ['latin'],
    display: 'swap',
});

export default function HomePage(){
    
    return (
        <div className = "HomeContainer">
            <div className = "MainContent">
                <div className = "top">
                    <div className = "textField">
                        <div className = "textLeft"></div>
                        <div className = "textRight">
                            <p className = {`name ${robotoSlab.className}`}>Peter Yoo</p>
                            <p className = {`title ${inter.className}`}>Software Engineer</p>
                        </div>
                    </div>
                    <div className = "peterImage"></div>
                </div>
                <div className = "middleSection"></div>
                <div className = "bottom">
                    <div className = "bottomSpacing"></div>
                    <div className = "bottomData">
                        <div className = {`BDTitle ${inter.className}`}>Quick Intro</div>
                        <div className = "BDAboutMe">
                            <p className = {`BDContent ${robotoSlab.className}`}>
                            What up chat! I'm Peter, a student at the University of Toronto studying Computer Science and specializing in Software Engineering. Not only am I a tech enthusiast, but a content creator as well. I have always had a passion for both creating code and videos. Some of my other hobbies include, basketball, badminton and body building. Thank you for checking out this site and hope you find what you are looking for.
                            </p>
                            <div className = "MyPicture"></div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}