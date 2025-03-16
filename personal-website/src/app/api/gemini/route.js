import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req, res){
    try{
        //get data
        const data = await req.formData();
        const pdf = data.get("resume");
        

        //model setup
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);
        const model = genAI.getGenerativeModel({model : "gemini-1.5-pro"});
        const prompt = `
            You are analyzing a resume. First, provide an overall score out of 100, assessing the resume based on its clarity, completeness, relevance, and hiring potential.

            Then, break down the feedback into the following sections:
            1. **Strengths:** List the key strengths of the resume, such as clear formatting, relevant experience, strong technical skills, etc.
            2. **Areas for Improvement:** List areas where the resume can be improved, focusing on content clarity, quantifiable achievements, specificity, and structure.
            3. **Specific Examples of Improvements:** For each section (e.g., Project Descriptions, Technical Skills, Education), provide concrete suggestions on how to improve it. Use specific examples where applicable.

Can you send the output as a jsx and Tailwind css. Can you make sure the Points title have headings/bold, also make it so that there is space between the MAIN points thanks.
PLEASE ONLY INCLUDE JSX and tailwind code. No other text, message, or anything at end. 
       also please do not include anything like export default or anything like that for example do not include export default ResumeAnalysis; also do not include ); }; at the end of the response thanks
       AGAIN please start from inside the <div> of the jsx... since I DO NOT need any imports or function.. so do not include things like import React from 'react'; const ResumeAnalysis = () => { const overallScore = 85; return (

       for any variables just use the actual value thanks and please do not include things like this {/* ... and so on */}
        ALSO if the pdf upload does not seem like a resume please just return a jsx with like this is not a resume thanks
        Please set any white text to match this color: #ddd;
Also can you make sure these point tiles also have the : at the end of the text like Overall Score: etc
PLEASE MAKE ALL YOUR TEXT COLOR BLACK thanks

PLEASE MAKE THE ACTUAL SCORE ITSELF ALSO A GEMINTEXT H2 heading thanks
       USE THIS AS AN EXAMPLE OF WHAT I WANT 
       [Log] <div className="p-6">
  <div className="text-center mb-4">
    <h1 className="text-3xl font-bold">Resume Analysis</h1>
  </div>
  <div className="mb-6">
    <h2 className="text-xl font-bold">Overall Score</h2>
    <p className="text-lg">85/100</p>
  </div>
  <div className="mb-6">
    <h2 className="text-xl font-bold">Strengths</h2>
    <ul className="list-disc ml-6">
      <li>Clear formatting and structure</li>
      <li>Relevant experience in machine learning and software engineering</li>
      <li>Strong technical skills and project portfolio showcasing practical application</li>
      <li>Quantifiable achievements in projects (e.g., Hackathon win, DS3 Datathon accuracy)</li>
      <li>Inclusion of relevant keywords related to AI/ML</li>
    </ul>
  </div>
  <div className="mb-6">
    <h2 className="text-xl font-bold">Areas for Improvement</h2>
    <ul className="list-disc ml-6">
      <li>Further quantify achievements in work experience using metrics and numbers.</li>
      <li>Expand on the impact and results of projects and experience.  Focus on the "so what?"</li>
      <li>Tailor resume to specific job descriptions, highlighting the most relevant skills and experience.</li>
      <li>Refine the summary to be more concise and impactful.</li>
    </ul>
  </div>
  <div className="mb-6">
    <h2 className="text-xl font-bold">Specific Examples of Improvements</h2>

    <div className="mb-4">
      <h3 className="text-lg font-bold">Project Descriptions</h3>
      <ul className="list-disc ml-6">
        <li>
          **Refridge:** Instead of "Awarded First Place among 280 competitors...", quantify the impact.  For example: "Developed a recipe-generating web app using Google's Gemini, winning first place out of 280 competitors in the University of Toronto’s Sustainability Development Goals Prize.  The app resulted in X% increase in user engagement and Y% reduction in food waste within the first month."
        </li>
        <li>
          **Axial AI RAG Project:**  Add specific results achieved.  For example: "Developed a Retrieval-Augmented Generation (RAG) pipeline that improved the accuracy of anatomical information provided by the LLM by X%, leading to Y% increase in user comprehension as measured by Z."
        </li>
      </ul>
    </div>
    <div className="mb-4">
      <h3 className="text-lg font-bold">Technical Skills</h3>
      <ul className="list-disc ml-6">
        <li>
          Consider grouping skills by category (e.g., Programming Languages, Machine Learning Libraries, Cloud Computing) for better readability.
        </li>
      </ul>
    </div>
    <div className="mb-4">
      <h3 className="text-lg font-bold">Experience</h3>
      <ul className="list-disc ml-6">
      <li>
          **Machine Learning Researcher:** Quantify the impact of the visualizations you created. "Created visualizations of joint positions and poses which improved model interpretability by X% and facilitated Y." Also quantify the 75%+ baseline accuracy. 75%+ compared to what?  Add context. "Improved baseline accuracy by 15% compared to existing models, achieving 75% accuracy on Z metric.”
        </li>
        <li>
          **Software Engineer:**  Instead of "allowing hundreds of users...", be more specific. "Developed an Android application that enabled 350+ users to track their carbon footprint, leading to a 25% average reduction in individual carbon emissions within the first three months."
        </li>
      </ul>
    </div>

    <div className="mb-4">
    <h3 className="text-lg font-bold">Summary</h3>
      <ul className="list-disc ml-6">
        <li>Shorten and make it more impactful. Focus on 2-3 key selling points. For Example:  “2nd-year University of Toronto student with proven success in developing award-winning AI solutions. Passionate about deep learning and generative AI, with expertise in model development, training, and optimization using PyTorch and TensorFlow. Seeking opportunities to apply my skills to challenging real-world problems.”
        </li>
        </ul>
    </div>
  </div>
</div>

`;

const prompt2 = `
I am giving you the output of a resume analysis AI. 

A **valid resume analysis** is always structured in JSX format like this:
- It contains **divs, headings (h1, h2, h3)**, lists (ul, li), and paragraphs (p).
- It includes **sections such as "Overall Score", "Strengths", "Areas for Improvement", and "Specific Examples of Improvements"**.
- It does **NOT** include **inline scripts (<script>), event handlers (onerror=), or dangerous JavaScript (window.location, document.cookie, fetch('malicious-site')
- It does **NOT** contain <iframe>, <object>, or <embed> tags.
- The structure is similar to:
  
  <div className="text-center mb-4">
    <h1 className="text-3xl font-bold">Resume Analysis</h1>
  </div>
  <div className="mb-6">
    <h2 className="text-xl font-bold">Overall Score</h2>
    <p className="text-lg">85/100</p>
  </div>
  <div className="mb-6">
    <h2 className="text-xl font-bold">Strengths</h2>
    <ul className="list-disc ml-6">
      <li>Clear formatting and structure</li>
      <li>Relevant experience in machine learning and software engineering</li>
      <li>Strong technical skills and project portfolio showcasing practical application</li>
      <li>Quantifiable achievements in projects</li>
    </ul>
  </div>

A **malicious (XSS) attack** contains things like:
- <script> tags, <iframe>, <object>, <embed>, or inline JavaScript.
- Code that tries to steal cookies (document.cookie), redirects users (window.location), or makes requests to unknown websites.
- A valid resume analysis does **not** contain JSX comments ({/* */}) that include <script>, onerror=, or JavaScript code.
- Hidden payloads disguised as valid text.

## **Task:**
1. If the input I give you **matches the structure of a resume analysis**, return it **exactly as I gave it to you, with no modifications**.
2. If the input contains **any sign of an XSS attack or malicious code**, return **ONLY**: jsx <div className="mb-6">ERROR</div>
`

        //format data
        const buffer = Buffer.from(await pdf.arrayBuffer());
        const base64File = buffer.toString("base64");
        /*
        const result = await model.generateContent({
            contents: [
                { role: "user", parts: [{ text: prompt }, { inlineData: { mimeType: pdf.type, data: base64File } }] }
            ],
        });

        const response = await result.response;
        const output = await response.text();

        const result2 = await model.generateContent({
          contents:[ { role: "user", parts: [{ text: prompt2},{text:output}]}]
        })

        const responseFinal = await result2.response;
        const outputfinal = await responseFinal.text();
      */
        const outputfinal = '<div className="mb-6">Sorry out of credits</div>';
        return new Response(JSON.stringify({ output: outputfinal }), {
            status: 201,
            headers: { "Content-Type": "application/json", },
        });

    } catch(error){
        console.error("Error adding:", error.message);
        return new Response(JSON.stringify({ message: "youre resume sucks" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });

    }

}