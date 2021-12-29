import ContainerBase from "../ContainerBase";
import NuvemTagItem from "./NuvemTagItem";

const tags = [
  {
    tag: "Nuvem de tag",
  },
  {
    tag: "Nuvem de tag",
  },
  {
    tag: "Nuvem de tag",
  },
  {
    tag: "Nuvem de tag",
  },
  {
    tag: "Nuvem de tag",
  },
  {
    tag: "Nuvem de tag",
  },
  {
    tag: "Nuvem de tag",
  },
  {
    tag: "Nuvem de tag",
  },
  {
    tag: "Nuvem de tag",
  },
  {
    tag: "Nuvem de tag",
  },
  {
    tag: "Nuvem de tag",
  },
  {
    tag: "Nuvem de tag",
  },
  {
    tag: "Nuvem de tag",
  },
  {
    tag: "Nuvem de tag",
  },
  {
    tag: "Nuvem de tag",
  },
  {
    tag: "Nuvem de tag",
  },
  {
    tag: "Nuvem de tag",
  },
  {
    tag: "Nuvem de tag",
  },
  {
    tag: "Nuvem de tag",
  },
  {
    tag: "Nuvem de tag",
  },
];

function NuvemTag() {
  return (
    <ContainerBase>
      <div className="flex flex-wrap md:px-16 items-center sr-only md:not-sr-only">
        {tags.map((tag, index) => (
          <NuvemTagItem
            key={index}
            tag={tag}
          ></NuvemTagItem>
        ))}
      </div>
    </ContainerBase>
  );
}

export default NuvemTag;
