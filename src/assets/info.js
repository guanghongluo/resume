export default {
    name: 'Haixiang Yan',
    tel: '+1(949)346-7358',
    email: 'haixiany@uci.edu',
	github: 'https://github.com/Haixiang6123',
    website: 'https://haixiang6123.github.io/blog/#/',
    edus: [
        {
            left: 'University of California, Irvine',
            right: 'Irvine, CA',
            children: [
                {
                    left: 'M.S. Networked System, GPA: 3.3',
                    right: '09/2018 - 03/2020'
                },
                {
                    left: 'Courses: Information Retrieval, Machine Learning, Graph Algorithm, Network Security, Networking Lab',
                }
            ]
        },
        {
            left: 'Northeastern University',
            right: 'Shenyang, China',
            children: [
                {
                    left: 'B.S. Engineering in Software Engineering, GPA: 3.6',
                    right: '10/2014 - 06/2018'
                },
                {
                    left: 'Courses: Algorithm, Data Structure, Computer Architecture, Computer Network, Software Engineering'
                }
            ]
        },
    ],
    skills: {
        frontend: ['Vue.js', 'React.js', 'TypeScript', 'ES6', 'Sass', 'HTML5', 'CSS3', 'Webpack'],
        backend: ['Java', 'Servlet', 'JSP', 'Python', 'MySQL'],
        test: ['Jest', 'Mocha', 'Sinon', 'Chai', 'Karma', 'Travis CI', 'Puppeteer'],
    },
    projects: [
        {
            left: 'Mini Search Engine',
            right: '04/2019',
            children: [
                {left: 'Developed a Search Engine with *Java* based on *Page Ranking* and *TF-IDF Ranking*'},
                {left: 'Optimized process of tokenizing keywords by using *Dynamic Programming* algorithm'},
                {left: 'Implemented *LSM-based* file storage to improve performance of reading bytes from segments'},
                {left: 'Developed a *Delta Variable-length* Compressor to compress files'},
            ]
        },
        {
            left: 'Overwatch UI (Stars: 330+, NPM Downloads: 11k+)',
            link: 'https://haixiang6123.github.io/overwatch-ui-doc/#/',
            right: '03/2019',
            children: [
                {left: 'Developed a UI library with *Vue.js* and *Webpack* based on Overwatch UI style'},
                {left: 'Applied Vue.js features, such as *slot*, *transition*, *watch properties* to design and implement component'},
                {left: 'Used CSS preprocessor *Sass* to customize component styles and define *Mixins* to reuse styles'},
                {left: 'Wrote unit tests with *Chai, Sinon, Mocha* and set up CI environment with *Travis CI, Karma*'},
            ]
        },
        {
            left: 'Code Block Beautifier (Stars: 95+, Users: 500+)',
            link: 'https://github.com/Haixiang6123/codeblock-beautifier',
            right: '01/2019',
            children: [
                {left: 'Built a *Chrome Extension* for highlighting code blocks of Medium articles to improve readability'},
                {left: 'Applied *DFS algorithm* to combine continuous "pre" elements as one "pre" element'},
                {left: 'Used Observer Pattern to dispatch and trigger events with *JavaScript (ES6)*, like updating theme and language preference'}
            ]
        },
        {
            left: 'Guitar Tabs Editor (Stars: 29)',
            link: 'https://haixiang6123.github.io/guitar-editor/#/',
            right: '03/2018',
            children: [
                {left: 'Designed a guitar tabs editor with *React.js* for users to compose guitar tabs by writing formatted texts'},
                {left: 'Formatted guitar tabs size by using *SVG* to display guitar chords'},
                {left: 'Used *React Router* to manage web pages and stored global data in *Redux*'}
            ]
        },
    ],
    interns: [
        {
            left: 'DJI (Frontend Developer)',
            right: '06/2019 - 09/2019',
            children: [
                {left: 'Lead front-end web development for the LAANC project using *Vue.js* and *Mapbox*.'},
                {left: 'Designed and implemented *RESTful* and *GraphQL* endpoints based on FAA test documents'},
                {left: 'Worked with Product Designers to implement and design the UI components of LAANC and used *Sass* to migrate UI library from Buefy to Element'},
                {left: 'Wrote *unit test* and *integration test* with *Jest* and *Puppeteer*'},
                {left: '*Optimized web performance* by using *ETag based HTTP caching* to fetch map features and using *Lazy load* to generate new page'},
            ]
        },
        {
            left: 'Brix (Research Project)',
            right: '03/2019 - 06/2019',
            children: [
                {left: 'Developed an Online-Coding system with *React.js* and *ACE Editor*'},
                {left: 'Developed a manage system with *HTML*, *CSS* and *JavaScript* to show tables of backend database'},
                {left: 'Used *Ant Design* and *Sass* to design website layout and component styles'},
            ]
        }
    ]
}
