function NuvemTagItem({ tag }) {
  return (
    <div className="bg-red-400 mx-auto space-x-4 text-white rounded-2xl p-4 m-4 justify-self-center">
      {tag.tag}
    </div>
  );
}

export default NuvemTagItem;
