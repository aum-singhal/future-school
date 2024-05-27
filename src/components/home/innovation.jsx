import "./home.css";
import interview from "../../assets/interview.jpeg"
import blog from "../../assets/blog.webp";

export const HomeInnovation = () => {
  const interviews = [
    {name: "John", img: interview},
    {name: "John", img: interview},
    {name: "John", img: interview},
    {name: "John", img: interview},
    {name: "John", img: interview},
    {name: "John", img: interview},
  ]

  const blogs = [
    {title: "blog 1", img: blog, desc: "lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a Lorem Ipsum and Lorem Ipsum is a Lorem Ipsum and Lorem Ipsum is a Lorem Ipsum"},
    {title: "blog 1", img: blog, desc: "lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a Lorem Ipsum and Lorem Ipsum is a Lorem Ipsum and Lorem Ipsum is a Lorem Ipsum"},
    {title: "blog 1", img: blog, desc: "lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a Lorem Ipsum and Lorem Ipsum is a Lorem Ipsum and Lorem Ipsum is a Lorem Ipsum"},
  ]
  return <div className="home-innovation section flex-d-col">
    <div className="interviews flex-d-col">
      <div className="heading font-48 semi-bold">Our Voices</div>

      <div className="card-holder flex">
        {
          interviews.map((item, index) => {
            return <div className="card" key={index}>
              <div className="image-container">
                <img src={item.img} alt="" />
              </div>
              <div className="name font-26 semi-bold">{item.name}</div>
            </div>
          })
        }
      </div>
    </div>

    <div className="blogs flex-d-col">
      <div className="heading font-48 semi-bold">Our Blogs</div>

      <div className="card-holder flex">
        {
          blogs.map((item, index) => {
            return <div className="card" key={index}>
              <div className="image-container">
                <img src={item.img} alt="" />
              </div>
              <div className="text-container">
                <div className="title font-26 semi-bold">{item.title}</div>
                <div className="desc font-16 semi-bold">{item.desc}</div>
                <div className="font-12 text-underline cursor-pointer">Read More</div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  </div>
}