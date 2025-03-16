"use client";
import "../styles/ResumePage.css";
import {useRef, useState} from "react";
import { Roboto_Slab } from 'next/font/google';

const robotoSlab = Roboto_Slab({
    weight: ['100', '400', '700', '900'],
    subsets: ['latin'],
    display: 'swap',
  });

export default function ResumePage(){
    const [selectedFile, setSelectedFile] = useState(null);
    const [geminiData, setGeminiData] = useState(null);
    const fileInputRef = useRef(null);
    const [hasFileBeenUpload, setHasFileBeenUpload] =  useState(false);
    const [sending, setSending] = useState(false);
    const handleFileButtonClick = (event) => {
        event.preventDefault();
        if (fileInputRef.current) {
          fileInputRef.current.click();
        }
      };

    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            setHasFileBeenUpload(true);
            setSelectedFile(null);
            setSelectedFile(event.target.files[0]);
        }
      };

    const anaylzeResume = async (event) => {
        event.preventDefault();
        try{
            setSending(true);
            const formData = new FormData();
            formData.append("resume", selectedFile);
            const response = await fetch("/api/gemini",{
                method: "POST",
                body: formData
            });

            const data = await response.json();
            const cleanedData = cleanGeminiResponse(data.output);
            setGeminiData(cleanedData);
            setHasFileBeenUpload(false);
            setSending(false);
        }   
        catch(error){
            console.error("your resume was too bad it could not be anaylzed.")
        }
    }
    const cleanGeminiResponse = (response) => {

        const codeBlockPattern = /```[a-zA-Z]*\n([\s\S]*?)\n```/g; 
        response = response.replace(codeBlockPattern, '$1'); 

        const tripleQuotesPattern = /'''([\s\S]*?)'''/g;
        response = response.replace(tripleQuotesPattern, '$1'); 
    
        return response.trim(); 
    };


    return (
        <div className = "BackgroundContainer">
            <div className = "ResumePageContainer">
            <div className = "LeftSide">
            </div>
            <div className = "ResumeGraderSection">
                <div className = "resumeInside">
                        <p className = {`ri ${robotoSlab.className}`} >Resume Rizzulator</p>
                        <div className = "resumeInputContainer">
                            <p className = {`ricText1 ${robotoSlab.className}`}>Input Resume</p>
                            <div className = "ricBorder">
                            {!hasFileBeenUpload ? (
                                <>
                                    <p className = {`ricText2 ${robotoSlab.className}`}>Select Files</p>
                                    <p className = {`ricText3 ${robotoSlab.className}`}>Accepted files: pdf</p>
                                    <button className="btn" onClick={handleFileButtonClick}>Choose File</button>
                                </>
                            ) : (
                                <form action="" method="post">
                                    <div className="containerform">
                                    <h4 className="qweqwe">{selectedFile.name}</h4>
                                    <button className="btn" onClick={anaylzeResume}>Analyze</button>
                                    </div>
                                </form>
                            )}
                            </div>
                        <input type="file" hidden accept=".pdf" id="fileID" ref={fileInputRef} onChange={handleFileChange}></input>
                    </div>
                    <div className = "geminiOutput">
                        <p className = {`geminiHeader ${robotoSlab.className} font-bold`}>{selectedFile ? `Grade and Suggestions for ${selectedFile.name}` : "Upload a resume to get started"}</p>
                        {!sending && geminiData && (
                            <div
                                className={`geminiText`}
                                dangerouslySetInnerHTML={{ __html: geminiData }} 
                            />
                        )}
                        {sending && (
                             <p className={`geminiHeader ${robotoSlab.className} font-bold`}>
                             {sending
                               ? "Analyzing Resume... ⏳"
                               : selectedFile
                               ? `Grade and Suggestions for ${selectedFile.name}`
                               : "Upload a resume to get started"}
                           </p>
                        )
                        }

                    </div>
                </div>
            </div>
                <div className = "RightSide"></div>
            </div>
        </div>
    )
}