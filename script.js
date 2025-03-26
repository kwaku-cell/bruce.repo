document.addEventListener("DOMContentLoaded", function () {
    const blogList = document.getElementById("blog-list");
    
    const blogs = [
        { id: 1, title: "The Power of Habit", description: "How habits shape our lives.", image: "https://source.unsplash.com/700x400/?habit", author: "James Clear", date: "March 10, 2025", category: "Self-Improvement" },
        { id: 2, title: "Why AI is the Future", description: "AI is transforming industries.", image: "https://source.unsplash.com/700x400/?ai", author: "Elon Turing", date: "March 15, 2025", category: "Technology" }
    ];

    function displayBlogs() {
        blogList.innerHTML = "";
        blogs.forEach(blog => {
            const blogItem = document.createElement("div");
            blogItem.classList.add("blog-post");
            blogItem.innerHTML = `
                <img src="${blog.image}" alt="${blog.title}">
                <div class="blog-info">
                    <h2>${blog.title}</h2>
                    <p class="meta">By ${blog.author} • ${blog.date}</p>
                    <p>${blog.description}</p>
                    <button class="like-btn" onclick="likePost(${blog.id})">Like</button>
                    <a href="blog.html?id=${blog.id}" class="read-more">Read More →</a>
                </div>
            `;
            blogList.appendChild(blogItem);
        });
    }

    displayBlogs();
});
