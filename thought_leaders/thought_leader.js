const people = [
      {pName: 'Kamal Ahluwalia', position: 'President, Ikigai Labs, Member USIBC', superpower:'Building high growth global business', expertise: 'Expert in launching market-ready products...', image:'https://cdn.prod.website-files.com/6731a3a4a8fd79133c60cc13/6794b013b66396536151ddb8_Frame%201707479050%20(4).png'},
      {pName: 'Lynda Kate Smith', position: 'SVP Marketing/CMO; Strategic Advisor for Developer Advocacy; Stanford University Lecturer', superpower: 'Revolutionizing marketing strategies', expertise: 'Marketing leader with 25+ years in tech, adjunct lecturer at Stanford. Led strategies for Genesys and Jive Software across the US, Europe, and Asia, focusing on digital media impact.', image: 'https://cdn.prod.website-files.com/6731a3a4a8fd79133c60cc13/6794af99b2b67e995cfd3254_Frame%201707479050%20(5).png'},
      {pName: 'Dr. Fei-Fei Li', position: 'Professor, Stanford University', superpower: 'AI for social good', expertise: 'Renowned AI researcher...', image: 'https://cdn.prod.website-files.com/6731a3a4a8fd79133c60cc13/6794af61043fd3f23522d86e_Frame%201707479050%20(18).png'},
      {pName: 'Reid Hoffman', position: 'Co-founder of LinkedIn', superpower: 'Scaling transformative companies', expertise: 'Expert in entrepreneurship...', image: 'https://cdn.prod.website-files.com/6731a3a4a8fd79133c60cc13/6794b03402bb4936fb840ebf_Frame%201707479050%20(21).png'},
      {pName: 'Ginni Rometty', position: 'Former CEO of IBM', superpower: 'Leading digital transformation', expertise: 'Transformed IBM’s business model...', image: 'https://cdn.prod.website-files.com/6731a3a4a8fd79133c60cc13/6794af8bc49de0acae3468df_Frame%201707479050%20(13).png'},
      {pName: 'Jeff Weiner', position: 'Executive Chairman, LinkedIn', superpower: 'Empathetic leadership', expertise: 'Known for creating a purpose-driven culture...', image: 'https://cdn.prod.website-files.com/6731a3a4a8fd79133c60cc13/6752bb49ce680c245f8bd41d_Frame%201707479050%20(16).webp'},
      {pName: 'Sheryl Sandberg', position: 'Former COO, Meta (Facebook)', superpower: 'Operational excellence', expertise: 'Scaled Meta’s operations globally...', image: 'https://cdn.prod.website-files.com/6731a3a4a8fd79133c60cc13/6794af7cbaea2c8ddc383b8b_Frame%201707479050%20(15).png'},
      {pName: 'Andrew Ng', position: 'Founder, DeepLearning.AI', superpower: 'Democratising AI education', expertise: 'AI pioneer with deep expertise...', image: 'https://cdn.prod.website-files.com/6731a3a4a8fd79133c60cc13/6794aee084309048ad928aef_Frame%201707479050%20(8).png'},
      {pName: 'Kelley Steven-Waiss', position: 'Chief Transformation Officer, ServiceNow', superpower: 'Workforce Transformation', expertise: 'Workforce innovator, founder of Hitch Works and co-authored The Inside Gig. Guides talent mobility and serves as board chair for the Silicon Valley Education Foundation.', image: 'https://cdn.prod.website-files.com/6731a3a4a8fd79133c60cc13/6794af049097b95860093cde_Frame%201707479050%20(3).png'},
      {pName: 'Kelley Steven-Waiss', position: 'Chief Transformation Officer, ServiceNow', superpower: 'Workforce Transformation', expertise: 'Workforce innovator, founder of Hitch Works and co-authored The Inside Gig. Guides talent mobility and serves as board chair for the Silicon Valley Education Foundation.', image: 'https://cdn.prod.website-files.com/6731a3a4a8fd79133c60cc13/6794af61043fd3f23522d86e_Frame%201707479050%20(18).png'},
      {pName: 'Kelley Steven-Waiss', position: 'Chief Transformation Officer, ServiceNow', superpower: 'Workforce Transformation', expertise: 'Workforce innovator, founder of Hitch Works and co-authored The Inside Gig. Guides talent mobility and serves as board chair for the Silicon Valley Education Foundation.', image: 'https://cdn.prod.website-files.com/6731a3a4a8fd79133c60cc13/6794af61043fd3f23522d86e_Frame%201707479050%20(18).png'},
      {pName: 'Kelley Steven-Waiss', position: 'Chief Transformation Officer, ServiceNow', superpower: 'Workforce Transformation', expertise: 'Workforce innovator, founder of Hitch Works and co-authored The Inside Gig. Guides talent mobility and serves as board chair for the Silicon Valley Education Foundation.', image: 'https://cdn.prod.website-files.com/6731a3a4a8fd79133c60cc13/6794af61043fd3f23522d86e_Frame%201707479050%20(18).png'},
    ];

    const peopleContainer = document.getElementById('people-container');

    people.map((item) => {
        peopleContainer.innerHTML += `
            <div class = 'people-card'>
                <img src='${item.image}' class='image'>
                
                <h2 class='pname'>${item.pName}</h2>
                <div class='orange-line'></div>

                <p class='pPosition'>${item.position}</p>
                <button class='see-more'>SEE MORE</button>
                
                <div class='overlay'>
                    <div class='name-wrap'>
                        <h2 class='pname'>${item.pName}</h2>
                        <div class='linkedIn'>in</div>
                    </div>
                    <div class='orange-line'></div>
                    <p class='pPosition'>${item.position}</p>
                    <p class='expertise'>${item.expertise}</p>
                    <div> SUPERPOWER</div>
                    <p id='superpower'>${item.superpower}</p>
                    </div>
                </div> 
            `
    })

