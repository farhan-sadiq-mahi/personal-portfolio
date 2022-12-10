import react from 'react';
import './AboutMe.css'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
const AboutMe = () => {
    const mySkills = [
        {
            name: "HTML",
            per: "90%"
        },
        {
            name: "CSS",
            per: "80%"
        },
        {
            name: "JavaScript",
            per: "95%"
        },
        {
            name: "React",
            per: "90%"
        },
        {
            name: "NodeJS",
            per: "80%"
        },
        {
            name: "ExpressJS",
            per: "85%"
        },
        {
            name: "MongoDB",
            per: "75%"
        },
    ]

    return (
        <div className='h-screen text-white'>

            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='container mx-auto flex flex-col justify-center lg:h-screen mb-8'>
                    <div className='ml-4'>
                        <div className='animate__animated animate__bounceInLeft flex items-center gap-2'>
                            <h1 className='bg-pink-500 rounded-md' style={{ height: '3px', width: '40px' }}></h1>
                            <h1 className='text-white font-semibold sourceSans text-xl'>About Me</h1>
                        </div>
                        <h1 className='text-6xl font-bold text-start mx-auto'>
                            I'm a Full Stack web developer working from home
                        </h1>
                        <h1 className='bg-pink-500 rounded-md my-4' style={{ height: '3px', width: '60px' }}></h1>
                        <p>
                            I am a web developer with experience creating and maintaining websites using a variety of programming languages and frameworks. I have a strong understanding of front-end technologies such as HTML, CSS, and JavaScript, as well as back-end technologies like server-side languages, databases, and API development. I have a keen eye for design and user experience, and a deep understanding of web standards and best practices. In short, I am a skilled and versatile professional who plays a crucial role in the development of the modern web.
                        </p>
                        <div className=' mt-4 flex justify-center lg:justify-start gap-3'>
                            <a className='btn btn-circle' href="https://github.com/farhan-sadiq-mahi" ><BsGithub /></a>
                            <a className='btn btn-circle' href="https://www.linkedin.com/in/md-farhan-sadiq/" ><BsLinkedin /></a>
                            <a className='btn btn-circle' href="https://www.linkedin.com/in/md-farhan-sadiq/" ><BsTwitter /></a>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <div className='animate__animated animate__bounceInLeft flex items-center gap-2'>
                        <h1 className='bg-pink-500 rounded-md' style={{ height: '3px', width: '40px' }}></h1>
                        <h1 className='text-white font-semibold sourceSans text-4xl'>My Skills</h1>
                    </div>

                    <div class="skills text-gray-700 ">
                        {
                            mySkills.map((skill) => <div class="skill">
                                <div class="skill-name">{skill.name}</div>
                                <div class="skill-bar">
                                    <div class="skill-per" per={skill.per} style={{ "max-width": `${skill.per}` }}></div>
                                </div>
                            </div>)
                        }
                    </div>

                </div>

            </div>

        </div>
    );
};

export default AboutMe;