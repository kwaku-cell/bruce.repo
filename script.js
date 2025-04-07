document.addEventListener("DOMContentLoaded", function () {
    const blogList = document.getElementById("blog-list");

const blogs = [
        { id: 1, title: "The Power of Habit", description: "How habits shape our lives.", image: "https://source.unsplash.com/700x400/?habit", author: "James Clear", date: "March 10, 2025", category: "Self-Improvement", content: "Discover the science behind habit formation and how you can take control of your daily routine. Learn more from <a href='https://jamesclear.com/habit-guide' target='_blank'>this guide</a>." },
        { id: 2, title: "Why AI is the Future", description: "AI is transforming industries.", image: "https://source.unsplash.com/700x400/?ai", author: "Elon Turing", date: "March 15, 2025", category: "Technology", content: "Artificial Intelligence is transforming industries. Read more at <a href='https://www.forbes.com/sites/forbestechcouncil/2023/10/15/why-ai-is-the-future' target='_blank'>Forbes AI Insights</a>." },
        { id: 3, title: "Web Development Trends in 2025", content: "The latest web development trends include AI-powered design and blockchain integration. Stay updated with <a href='https://www.smashingmagazine.com/category/web-development' target='_blank'>Smashing Magazine</a>." },
        { id: 4, title: "The Future of Blockchain", content: "Explore how blockchain is revolutionizing industries from finance to healthcare. Learn more at <a href='https://blockgeeks.com/guides/what-is-blockchain-technology/' target='_blank'>Blockgeeks</a>." },
        { id: 5, title: "Cybersecurity in 2025", content: "With increasing threats, cybersecurity is more important than ever. Read best practices at <a href='https://www.cybersecurity-insiders.com' target='_blank'>Cybersecurity Insiders</a>." },
        { id: 6, title: "The Future of Remote Work", content: "Hybrid workplaces and digital collaboration tools are changing how we work. Read more at <a href='https://hbr.org/2023/08/the-future-of-remote-work' target='_blank'>Harvard Business Review</a>." },
        { id: 7, title: "Sustainable Technology Innovations", content: "Discover how green tech is revolutionizing industries. Read more at <a href='https://www.greenbiz.com/' target='_blank'>GreenBiz</a>." },
        { id: 8, title: "The Psychology of Productivity", content: "Unlock the secrets of peak performance with psychology-backed productivity hacks. Read more at <a href='https://jamesclear.com/productivity' target='_blank'>James Clear</a>." },
        { id: 9, title: "The Rise of Quantum Computing", content: "Quantum computing is set to redefine problem-solving with its immense processing power. Learn more at <a href='https://quantumai.google/' target='_blank'>Google Quantum AI</a>." }
    ];
    
       function displayBlogs() {
        blogList.innerHTML = "";
        blogs.forEach(blog => {
            const blogItem = document.createElement("div");
            blogItem.classList.add("blog-post");
            blogItem.innerHTML = `
                <img src="${blog.image}" alt="${blog.title}" style="width:100%; border-radius:8px; margin-bottom:10px;">
                <h2 class="blog-title">${blog.title}</h2>
                <p class="blog-meta">By ${blog.author} • ${blog.date}</p>
                <p class="blog-content">${blog.description}</p>
                <a href="blog.html?id=${blog.id}" class="read-more">Read More →</a>
            `;
            blogList.appendChild(blogItem);
        });
       
        function signInWith(provider) {
            console.log('Signing in with', provider);
            alert('Signing in with ' + provider);
        }
        
    }

    displayBlogs();
});
