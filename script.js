document.addEventListener("DOMContentLoaded", function () {
    const blogList = document.getElementById("blog-list");

    // Sample Blog Data (You can replace this with an API fetch)
    const blogs = [
        { id: 1, title: "The Power of Habit", content: "Discover the science behind habit formation and how you can take control of your daily routine to build better habits." },
        { id: 2, title: "Why AI is the Future", content: "Artificial Intelligence is revolutionizing industries from healthcare to finance, and it's just the beginning." },
        { id: 3, title: "Web Development Trends in 2025", content: "Explore the latest trends in front-end and back-end web development, including AI-powered design and serverless architecture." },
        { id: 4, title: "How to Stay Motivated", content: "Daily habits, goal-setting strategies, and mental frameworks to keep you inspired and productive." },
        { id: 5, title: "The Rise of Quantum Computing", content: "Quantum computing is set to redefine problem-solving with its immense processing power. Here's what you need to know." },
        { id: 6, title: "The Future of Remote Work", content: "How hybrid workplaces, digital collaboration, and AI-driven productivity tools are shaping the future of work." },
        { id: 7, title: "Cybersecurity in the Digital Age", content: "With increasing cyber threats, understanding cybersecurity best practices has never been more important." },
        { id: 8, title: "Building a Successful Startup", content: "Key lessons from successful entrepreneurs on launching and scaling a startup in a competitive market." },
        { id: 9, title: "The Psychology of Productivity", content: "Unlock the secrets of peak performance with psychology-backed productivity hacks." },
        { id: 10, title: "Sustainable Technology Innovations", content: "Discover how green tech is revolutionizing industries, reducing carbon footprints, and promoting sustainability." }
    ];

    // Insert blog posts into the DOM
    blogs.forEach(blog => {
        const article = document.createElement("article");
        article.classList.add("blog-post");
        article.innerHTML = `
            <h2>${blog.title}</h2>
            <p>${blog.content.substring(0, 100)}...</p>
            <a href="blog.html?id=${blog.id}">Read More</a>
        `;
        blogList.appendChild(article);
    });
});
