import React from 'react';
import Logo from '../Logo/end.png'
import { NavLink } from 'react-router-dom';

const Page1 = () =>{

    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
      window.location.assign("/About");
    }

    return(
        <>
        <div class="page">
  <div class="archive">
    <article class="article">
    <img src={Logo} className="Poster" alt="Poster" onClick={handleClick}/>
    <hr/>
      <p onClick= {handleClick} className="heading"><b>Download [18+] Netflix Sky Rojo (Season 1) Dual Audio (Hindi-English) WeB-HD 720p [280MB] || 1080p [800MB]</b></p>
    </article>
    <article class="article">
    <img src={Logo} className="Poster" alt="Poster" onClick= {handleClick}/>
    <hr/>
    <p onClick= {handleClick} className="heading"><b>Download [18+] Netflix Sky Rojo (Season 1) Dual Audio (Hindi-English) WeB-HD 720p [280MB] || 1080p [800MB</b></p>
    </article>
    <article class="article">
    <img src={Logo} className="Poster" alt="Poster" onClick= {handleClick}/>
    <hr/>
    <p onClick= {handleClick} className="heading"><b>Download [18+] Netflix Sky Rojo (Season 1) Dual Audio (Hindi-English) WeB-HD 720p [280MB] || 1080p [800MB</b></p>
    </article>
    <article class="article">
    <img src={Logo} className="Poster" alt="Poster" onClick= {handleClick}/>
    <hr/>
      <p onClick= {handleClick} className="heading"><b>Download [18+] Netflix Sky Rojo (Season 1) Dual Audio (Hindi-English) WeB-HD 720p [280MB] || 1080p [800MB]</b></p>
    </article>
    <article class="article">
    <img src={Logo} className="Poster" alt="Poster" onClick= {handleClick}/>
    <hr/>
    <p onClick= {handleClick} className="heading"><b>Download [18+] Netflix Sky Rojo (Season 1) Dual Audio (Hindi-English) WeB-HD 720p [280MB] || 1080p [800MB</b></p>
    </article>
    <article class="article">
    <img src={Logo} className="Poster" alt="Poster" onClick= {handleClick}/>
    <hr/>
    <p onClick= {handleClick} className="heading"><b>Download [18+] Netflix Sky Rojo (Season 1) Dual Audio (Hindi-English) WeB-HD 720p [280MB] || 1080p [800MB</b></p>
    </article>
    <article class="article">
    <img src={Logo} className="Poster" alt="Poster" onClick= {handleClick}/>
    <hr/>
    <p onClick= {handleClick} className="heading"><b>Download [18+] Netflix Sky Rojo (Season 1) Dual Audio (Hindi-English) WeB-HD 720p [280MB] || 1080p [800MB</b></p>
    </article>
    <article class="article">
    <img src={Logo} className="Poster" alt="Poster" onClick= {handleClick}/>
    <hr/>
    <p onClick= {handleClick} className="heading"><b>Download [18+] Netflix Sky Rojo (Season 1) Dual Audio (Hindi-English) WeB-HD 720p [280MB] || 1080p [800MB</b></p>
    </article>
    <article class="article">
    <img src={Logo} className="Poster" alt="Poster" onClick= {handleClick}/>
    <hr/>
    <p onClick= {handleClick} className="heading"><b>Download [18+] Netflix Sky Rojo (Season 1) Dual Audio (Hindi-English) WeB-HD 720p [280MB] || 1080p [800MB</b></p>
    </article>
    <article class="article">
    <img src={Logo} className="Poster" alt="Poster" onClick= {handleClick}/>
    <hr/>
    <p onClick= {handleClick} className="heading"><b>Download [18+] Netflix Sky Rojo (Season 1) Dual Audio (Hindi-English) WeB-HD 720p [280MB] || 1080p [800MB</b></p>
    </article>
  </div>
</div>



<div class="grid-container">
                <NavLink exact activeClassName="page-link" className="grid-item" to="/page1">1</NavLink>
                <NavLink exact activeClassName="page-link" className="grid-item" to="/page2">2</NavLink>
                <NavLink exact activeClassName="page-link" className="grid-item" to="/page3">3</NavLink>
                <NavLink exact activeClassName="page-link" className="grid-item" to="/page4">4</NavLink>
            </div>
        </>
    );
}
export default Page1;
