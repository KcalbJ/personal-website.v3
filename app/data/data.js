import image1 from '../../public/newsbackend.png'
import image2 from '../../public/newsli.png'
import image3 from '../../public/beanly.png'

export const cards = [
    {
      url: image1,
      title: "NC NEWS API",
      id: 1,
      git: 'https://github.com/KcalbJ/Nc-news',
      hosted: 'https://nc-news-opvy.onrender.com/api',
      stack: ["Postgress", "Node", "Express", "Jest"],
      alt: 'Screen shot of backend news',
      description: 'The Northcoders News API is a backend server designed to serve data for a news platform. It provides a variety of endpoints allowing users to interact with topics, articles, comments, and users. The API is built with Node.js and Express, using a PostgreSQL database to store and manage data. Users can retrieve information on topics, articles, comments, and users, as well as perform actions such as posting comments, voting on articles, and deleting comments.'
      },
    {
        url: image2,
        title: "NC NEWSLI FRONT END",
        id: 2,
        git: 'https://github.com/KcalbJ/nc-news-fe',
        hosted: 'https://nc-newsli.netlify.app/?sort_by=created_at&order=desc',
        stack: ["React", "Axios", "Tailwind","Netlify"],
        alt: 'Screen shot of front end news',
        description: 'The front end of this project is built with React, Tailwind CSS, and Axios. It offers a dynamic user interface that seamlessly interacts with the Northcoders News API. React provides modularity, Tailwind CSS ensures a consistent design, and Axios facilitates smooth communication with the backend, enabling users to engage with topics, articles, comments, and users effortlessly.'
        },
        {
          url: image3,
          title: "BEANLY E-COMMERCE",
          id: 3,
          git: 'https://github.com/KcalbJ/easy-commerce',
          hosted: 'https://easy-commerce-peach.vercel.app/',
          stack: ["Nextjs", "Vercel", "Tailwind"],
          alt: 'Screen shot of front ecommerce website',
          description: 'This is a little  snapshot of a project of an ecommerce website using nextjs, i wanted to try a different frame work reading docs only. The project is still currently being worked on.'
          },
 
  ];