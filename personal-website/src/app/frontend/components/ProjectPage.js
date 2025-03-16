"use client";
import Link from "next/link";
import "../styles/ProjectPage.css";
import ProjectElement from "./ProjectElement";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    weight: "900", 
    style: "normal",
});

export default function ProjectPage() {
    return (
        <div className="ProjectPageContainer">
            <p className={`PPCTitle ${inter.className}`}>Projects</p> 
            
            <div className="contentWrapper">
                <div className="verticalStuff">
                    <Link href = "/ResumeRizzulator">
                        <ProjectElement link = "none" name = "Resume Rizzulator" date = "March 2025" description="Designed a website that will anaylze your resume and grade it on hirability, skills, written style. As well as tell you way you can improve the resume."></ProjectElement>
                    </Link>
                    <ProjectElement name="Gallery Website V2" date="Oct 2024" 
                        description="Was making a clone of Instagram features, like posting pictures, commenting, etc. Was practicing the basics of security like authentication, as well as middleware and API calls."
                        link="https://github.com/VoidBeGone/Gallery-Website-V2"
                    />
                    <ProjectElement link = "https://github.com/VoidBeGone/Fix-It" name="Fix-it" date="Oct 2024" 
                        description="Created during a hackathon, was trying to make a marketplace where service jobs like plumbers, electricians, etc. can directly talk to consumers." 
                    />
                    <ProjectElement link = "https://github.com/VoidBeGone/hacktheyvalley9" name="Refridge" date="Sept 2024" 
                        description="Created during a hackathon, we coded a web app that allows a user to take a picture of their fridge and count what ingredients are available." 
                    />
                </div>
                <div className="imageContainer"></div>
            </div>
        </div>  
    );
}
