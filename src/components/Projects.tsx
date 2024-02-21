type ProjectData = {title: string, text: string, gradient: string[]}

const projectData: ProjectData[] = [
  {
    title: "CNN AI Bird Classifier",
    text: `Transfer-learned and fine-tuned a CNN model to classify 70 species of campus birds, 
    achieving 80% accuracy using a minimal dataset. Hosted the model on a VPS with a custom API
    which allowed HTTP requests to be sent from a Raspberry Pi camera, classifying the bird and
    uploading the results onto a website.`,
    gradient: ["from-emerald-600", "to-purple-900"]
  },
  {
    title: "NFT Car Marketplace",
    text: `Development & testing of ERC721 tokens and ERC165 smart contracts`,
    gradient: ["from-indigo-900", "to-purple-900"]
  },
]

export const Projects = () => {

  const projects = projectData.map((project) => {
    return <Project title={project.title} text={project.text} gradient={project.gradient} />
  });

  return (
    <section className="h-screen pt-64">
      <div>
        <h3 className="font-mono-text text-5xl pb-24">HIGHLIGHTS</h3>
      </div>
      <div className="flex flex-col gap-10">
        {projects}
      </div>
    </section>
  );
}

export const Project = (props: {title: string, text: string, gradient: string[] }) => {
  return (
    <article className={`w-full h-96 bg-gradient-to-br ${props.gradient[0]} ${props.gradient[1]} rounded-3xl p-12`}>
      <h4 className="text-3xl pb-8 font-mono-numbers">{props.title}</h4>
      <p className="text-2xl font-light ">
        {props.text}
      </p>
    </article>
  );
}