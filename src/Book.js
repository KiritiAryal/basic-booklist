function Book({ img, title, price, author, id, children }) {
  return (
    <section>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h5>{price}</h5>
      <h5>{author}</h5>
      {children}
    </section>
  )
}
export default Book
