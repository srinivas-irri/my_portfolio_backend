export function aiReply(result) {

    switch (result.type) {

      case "projects": {

    const projects = result.data.map(project => `
            ${project.title}

            ${project.description}

            ${project.tech.join(", ")}

            ${project.live}

            ------------------------------------------
                `).join("\n\n");

                const speakProjects = result.data.map(project =>
                    `${project.title}. ${project.description}. Technologies used: ${project.tech.join(", ")}.`
                ).join(" ");

                return {
                    action: "works",

                    // Chatbot
                    reply: projects,

                    // Voice Assistant
                    speak: speakProjects
                };
            }

        case "skills": {

            const skills = result.data
                .flatMap(category => category.tools)
                .join(", ");

            return {

                action: "skills",

                reply: `Srinivas has professional experience with ${skills}.`,

                speak: "Srinivas has experience with Angular, React, JavaScript, TypeScript and many other frontend technologies. I've moved to the Skills section."

            };

        }


        case "about":

            return {

                action: "about",

                reply: "Srinivas is a Senior UI Developer with over 14 years of experience in frontend development.",

                speak: "Srinivas is a Senior UI Developer with more than fourteen years of experience in frontend development. I've moved to the About section."

            };


        case "experience":

            return {

                action: "about",

                reply: `Srinivas has over 14 years of professional experience building scalable enterprise applications using Angular, React and modern frontend technologies.`,

                speak: "Srinivas is a Senior UI Developer with more than fourteen years of experience in frontend development. I've moved to the About section."

            };


        case "education": {

            const highest = result.data[0];

            return {

                action: "background",

                reply: `Highest Qualification:
        ${highest.course}

        University:
        ${highest.college}`,

                speak:
                    `Srinivas's highest qualification is ${highest.course}. I've moved to the Education section.`

            };

        }


        case "contact":

            return {

                action: "contact",

                reply:
                    `Email:
            ${result.data.email}

            GitHub:
            ${result.data.github}

            LinkedIn:
            ${result.data.linkedin}`,

                speak:
                    "You can contact Srinivas through email or LinkedIn. I've moved to the Contact section."

            };


        case "resume":

            return {

                action: "resume",

                reply: "Downloading Srinivas's latest resume.",

                speak: "Sure. Downloading Srinivas's latest resume."


            };


        default:

            return null;

    }

}