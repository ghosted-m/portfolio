interface propType {
  image: { src: string };
  title: string;
  content: string;
}
function Card({ image, title, content }: propType) {
  return (
    <>
      <div
        style={{ overflow: 'hidden' }}
        className=" w-sm flex flex-col border rounded-lg shadow-lg shadow-cyan-500/50 ring-2 ring-blue-500"
      >
        <div className="overflow-hidden aspect-[1.95]">
          <img className="w-sm" src={image.src} alt="images" />
        </div>

        <div className="py-8">
          <h3 className="text-2xl">{title}</h3>
          <p className="card-content">{content}</p>
        </div>
      </div>
    </>
  );
}
function SkillCard() {
  return (
    <>
      <div className="flex flex-wrap flex-col justify-center sm:flex-row gap-8">
        <Card
          image={{
            src: 'https://www.articlecube.com/sites/default/files/styles/article_full/adaptive-image/public/field/image/24758/Codeigniter%20development%20features.jpg?itok=1UqTHhJu',
          }}
          title="CODEIGNITER"
          content="SKILLED IN CODEIGNITER MULTIPLE COMPONENT"
        />
        <Card
          image={{
            src: 'https://1.bp.blogspot.com/-2GjK_90aLMk/XsLZVix7DMI/AAAAAAAAAA8/C6Litlp-74cNKexs6b4q2VdyRIr7zp1-gCNcBGAsYHQ/w1200-h630-p-k-no-nu/laravel-app-development.jpg',
          }}
          title="LARAVEL"
          content="SKILLED IN LARAVEL MULTIPLE COMPONENT"
        />
        <Card
          image={{
            src: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2154144788/settings_images/ab58b78-8e1-d3c6-b36f-5eb1ebf05042_e183f07b-b808-43a2-8170-6d46b098fc67.jpg',
          }}
          title="REACT"
          content="SKILLED IN REACT MULTIPLE COMPONENT"
        />
        <Card
          image={{
            src: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2154144788/settings_images/ab58b78-8e1-d3c6-b36f-5eb1ebf05042_e183f07b-b808-43a2-8170-6d46b098fc67.jpg',
          }}
          title="REACT"
          content="SKILLED IN REACT MULTIPLE COMPONENT"
        />
        <Card
          image={{
            src: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2154144788/settings_images/ab58b78-8e1-d3c6-b36f-5eb1ebf05042_e183f07b-b808-43a2-8170-6d46b098fc67.jpg',
          }}
          title="REACT"
          content="SKILLED IN REACT MULTIPLE COMPONENT"
        />
        <Card
          image={{
            src: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2154144788/settings_images/ab58b78-8e1-d3c6-b36f-5eb1ebf05042_e183f07b-b808-43a2-8170-6d46b098fc67.jpg',
          }}
          title="REACT"
          content="SKILLED IN REACT MULTIPLE COMPONENT"
        />
        <Card
          image={{
            src: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2154144788/settings_images/ab58b78-8e1-d3c6-b36f-5eb1ebf05042_e183f07b-b808-43a2-8170-6d46b098fc67.jpg',
          }}
          title="REACT"
          content="SKILLED IN REACT MULTIPLE COMPONENT"
        />
        <Card
          image={{
            src: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2154144788/settings_images/ab58b78-8e1-d3c6-b36f-5eb1ebf05042_e183f07b-b808-43a2-8170-6d46b098fc67.jpg',
          }}
          title="REACT"
          content="SKILLED IN REACT MULTIPLE COMPONENT"
        />
      </div>
    </>
  );
}
export default SkillCard;
