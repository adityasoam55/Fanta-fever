import React from "react";
import { UpdateFollower } from "react-mouse-follower";

const BlogsData = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
        link: "#",
        img: "/images/1.jpg",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
        link: "#",
        img: "/images/2.jpg",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
        link: "#",
        img: "/images/3.jpg",
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
        link: "#",
        img: "/images/4.jpg",
    },
];
const Blogs = () => {
    return (
        <section className="bg-gray-50" id="blog">
            <div className="container py-14">
                <h1 className="text-3xl font-bold text-center pb-8">Blogs</h1>
                {/* card section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {BlogsData.map((item) => (
                        <UpdateFollower
                            key={item.id}
                            mouseOptions={{
                                backgroundColor: "black",
                                zIndex: 999,
                                followSpeed: 1.5,
                                text: "read",
                                textFontSize: "3px",
                                scale: 5,
                            }}
                        >
                            <div
                                className="flex flex-col items-center justify-center gap-6 p-2 md:p-5
               max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300"
                            >
                                <img src={item.img} alt="" />
                                <div className="space-y-2">
                                    <h1 className="text-xl font-bold line-clamp-2">
                                        {item.title}
                                    </h1>
                                    <p className="line-clamp-2">{item.desc}</p>
                                </div>
                            </div>
                        </UpdateFollower>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
