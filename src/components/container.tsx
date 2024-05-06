
type ContainerProps = {
  children: JSX.Element,
  section?: boolean,
  customClass?: string,
}

const Container = ({ children, section, customClass }: ContainerProps) => {
  if (section) {
    return (
      <section className={`px-5 mx-auto max-w-7xl`}>
        { children }
      </section>
    )
  }

  return (
    <div className="px-5 mx-auto max-w-7xl">
      { children }
    </div>
  )
}

export default Container;