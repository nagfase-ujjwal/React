// Normally we pass and use props with a single parameter
// function CoreConcept(props) { props.title, props.image, props.description}
// But we can also destructure the data passed from REST operator & props and this will work with both.

export default function CoreConcept({
  title: TITLE,
  image: IMAGE,
  description: DESCRIPTION,
}) {
  const altText = "No image found";
  return (
    <>
      <li>
        <img src={IMAGE} alt={altText} />
        <h3>{TITLE}</h3>
        <p>{DESCRIPTION}</p>
      </li>
    </>
  );
}
