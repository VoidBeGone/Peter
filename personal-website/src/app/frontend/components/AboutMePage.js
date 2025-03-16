import "../styles/AboutMePage.css";
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

export default function AboutMePage(){
    return(
        <div className = "AboutMePageContainer">
            <p className = {`Title ${inter.className}`}>About Me</p>
            <div className = "Content">
                <p className = {`AboutMe ${robotoSlab.className}`}>Hey there! I’m Peter Yoo, a computer science student at the University of Toronto with a deep love for all things tech. My journey started with building computers and coding my own version of Tetris (because why not, right?). Beyond my love for tech, I’ve always had a passion for content creation—I’ve been making videos since I was 12, and that creative spark hasn’t faded one bit. When I’m not coding or editing, you’ll probably find me on the basketball court, playing badminton, longboarding, or just hanging out with friends. Oh, and I’m also a huge fan of reading (gotta balance the screen time somehow). Right now, I’m having an absolute blast working as a software engineer at Lumentum, diving into real-world projects and learning every day. Always up for a new challenge, a fun project, or just a good conversation.</p>
                <div className = "myimage"></div>
            </div>

            <p className = {`Title ${inter.className}`}>Tech Stack</p>
            <div className = "Content">
                <p className = {`AboutMe ${robotoSlab.className}`}>I love bringing ideas to life through code! My tech stack includes JavaScript, Python, C, C++, and Java, with experience across full-stack web development, mobile apps, and backend systems. I’ve built projects using React, Node.js, Flask, and Express.js, and worked with databases like MongoDB, Firebase, and SQL. Whether it’s crafting intuitive front-ends, designing scalable backends, or diving into Android development with Java and Firebase, I enjoy solving problems and learning new tools along the way. Let’s build something awesome!</p>
                <div className = "myimage2"></div>
            </div>
        </div>
    )
}