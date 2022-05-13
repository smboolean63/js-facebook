const posts = [
    {
        author: {
            name:  "Samuele Madrigali",
            avatar: "https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512",
        },
        time: 1,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequuntur maiores illum eum hic facere minima commodi odio quam! Quidem magnam expedita asperiores eum explicabo! Magnam adipisci suscipit ad eius.",
        image: "https://via.placeholder.com/600x300",
    },
    {
        author: {
            name:  "Samantha Madrigali",
            avatar: "https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512",
        },
        time: 3,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequuntur maiores illum eum hic facere minima commodi odio quam! Quidem magnam expedita asperiores eum explicabo! Magnam adipisci suscipit ad eius.",
        image: "https://via.placeholder.com/600x300",
    },
    {
        author: {
            name:  "Remo Madrigali",
            avatar: "https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512",
        },
        time: 4,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequuntur maiores illum eum hic facere minima commodi odio quam! Quidem magnam expedita asperiores eum explicabo! Magnam adipisci suscipit ad eius.",
        image: "https://via.placeholder.com/600x300",
    }
];

const postsContainer = document.querySelector(".page-content");

for(let i = 0; i < posts.length; i++) {
    // console.log(posts[i]);
    const post = `
        <article class="post">
            <div class="post__header">
                <div class="post__author">
                <img class="post__author-img" src="${posts[i].author.avatar}" alt="">
                <div class="post__author-info">
                    <h4 class="post__author-name">${posts[i].author.name}</h4>
                    <time class="post__time">${posts[i].time}h</time>
                </div>
                </div>
            </div>
            <div class="post__content">
                ${posts[i].content}
            </div>
            <div class="post__image">
                <img src="${posts[i].image}" alt="post img">
            </div>
        </article>
    `;

    postsContainer.innerHTML += post;
}