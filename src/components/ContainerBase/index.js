function ContainerBase({ children, bgBase = '', bgContainer = ''}) {
  
    const classNameBgColor = "max-w-7xl mx-auto " + bgContainer;

    return (
    <div className={bgBase}>
      <div className={classNameBgColor} >{children}</div>
    </div>
  );
}

export default ContainerBase;
