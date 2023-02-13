import { useEffect, useState } from "react";

const Trending = () => {
    const [category, setCategory] = useState('Art');
    const categories = ['Art', 'Music', 'Game', 'Utility', 'Fashion','Sport'];

    useEffect(() => {
        const scrollLeft = document.getElementById("left-arrow");
    const scrollRight = document.getElementById("right-arrow");
    const container = document.getElementById("categories-container");

    console.log(scrollLeft);
    console.log(scrollRight);
    console.log(container);

    
    
    scrollLeft.addEventListener('click', function() {
        if (container.scrollLeft > 0) {
          container.scrollLeft -= 150;
        }
      });
    
    
    if(scrollRight !== null){
      scrollRight.addEventListener('click', function() {
        if (container.scrollLeft + container.offsetWidth < container.scrollWidth) {
          container.scrollLeft += 150;
        }
      });
    }

    if(container !== null){
      container.addEventListener('scroll', function() {
        if (container.scrollLeft <= 0) {
          scrollLeft.style.display = 'none';
        } else {
          scrollLeft.style.display = 'block';
        }
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
          scrollRight.style.display = 'none';
        } else {
          scrollRight.style.display = 'block';
        }
      });
    }
    },[])
    

    const changeCategory = (e) => {
        const active = document.getElementsByClassName('active-category');
        for (let i = 0; i < active.length; i++) {
            active[i].classList.remove('active-category');
        }
        e.target.classList.add('active-category');
        setCategory(e.target.innerText);
    }


    return (
        <div id="trending">
            <div>
                <h2>Trending Now</h2>
                <div id="categories-container">
                    <div id="left-arrow"><i class="bi bi-arrow-left-square"></i></div>
                <ul id="categories-list">
                    {
                        categories.map((category,index) => (
                            <li key={index} >
                                <button onClick={changeCategory} className={index === 0 ? "active-category" : ""}>
                                    {category}
                                </button>
                            </li>
                        ))
                    }
                </ul>
                    <div id="right-arrow"><i class="bi bi-arrow-right-square"></i></div>
                </div>
            </div>
            <div></div>
        </div>
    )
}
export default Trending;