import Image from "next/image";
import { GithubIcon, Linkedin01Icon, Mail01Icon } from "hugeicons-react";
import computeAge from "@/utils/computedAge";

export default function Home() {
  const yearsMarried = computeAge(new Date('July, 24, 2015'))
  const odinAge = computeAge(new Date('August, 21, 2020'));
  const atlasAge = computeAge(new Date('May, 31, 2017'));

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-10 gap-16 sm:p-20">
      <main className="container mx-auto md:w-full lg:w-3/4 flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-slate-600">Daniel Ferro</h1>
        <h2 className="text-2xl font-semi-bold ">Hi! I am Dan Ferro, and I'm a Software Engineer.</h2>
        <ul>
          <li
            className="pb-2 text-l">
            Working at <a
              href="https://www.salesforce.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/Salesforce.svg" alt="Salesforce" width={30} height={30} className="inline-block" /> Salesforce
            </a>
          </li>
          <li className="pb-2 text-l">
            Previously worked at <a
              href="https://www.salesforce.com"
              target="_blank"
              rel="noopener noreferrer"
            ><Image src="/ET.png" alt="ExactTarget" width={100} height={30} className="inline-block" /></a> and <a
              href="https://discovernewfields.org/"
              target="_blank"
              rel="noopener noreferrer"
            ><Image src="/IMALabs.png" alt="IMA Labs" width={50} height={20} className="inline-block" /></a>
          </li>
          <li className="pb-2 text-l">
            Graduated from <Image src="/Purdue.svg" alt="Purdue University" width={30} height={30} className="inline-block" /> Purdue University with a Bachelor of Science at the college of Technology
          </li>
        </ul>
        <p className="text-xl">As a Lead Full Stack Engineer at Salesforce with over a decade of experience crafting innovative web solutions. My journey blends technical expertise, a dedication to continuous learning, and impactful leadership, all contributing to meaningful advancements in the digital landscape.</p>
        <p className="text-xl">Technically, I specialize in a wide range of tools and platforms, including the Salesforce ecosystem, Vue/Nuxt, GitHub Actions, Terraform/Argo, Slack development, Mulesoft, and Mobile SDKs/Frameworks. I also bring a robust focus on testing and Agile frameworks to ensure scalable and efficient solutions.</p>
        <p className="text-xl">Along my path, I’ve earned multiple certifications, including Salesforce Certified Administrator, Platform Developer I, and JavaScript Developer I, as well as the MuleSoft Certified Developer and Professional Scrum Master credentials. My commitment to growth is also reflected in programs like Aspiring People Leaders and emotional intelligence training.</p>
        <p className="text-xl">Recognition for my contributions has included the SE Innovator of the Year Award (2017, 2018), the Shared Services Teamwork Award (2020), and several others that highlight innovation, teamwork, and excellence.</p>
        <p className="text-xl">From designing efficient systems to mentoring and empowering others, my passion lies in driving results and fostering growth across teams.</p>
        <p className="text-xl">Outside of programming, I have my lovely wife of { yearsMarried } years and our two boys Odin { odinAge } and Atlas { atlasAge }. In my free time I enjoy learning new things, reading, painting, Legos, Dungeons and Dragons, and video games.</p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/dlferro"
          target="_blank"
          rel="noopener noreferrer"
        >
        <GithubIcon
          size={24}
          color={"#171717"}
        />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/dlcerva/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Linkedin01Icon
          size={24}
          color={"#171717"}
        />
          Linkedin
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:dlcerva@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Mail01Icon
          size={24}
          color={"#171717"}
        />
          E-mail
        </a>
      </footer>
    </div>
  );
}
